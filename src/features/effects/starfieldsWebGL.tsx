import { Star, StarfieldConfig } from "./starfields";
import { compileShader, createGLTexture, createProgram } from "./webglHelpers";

const textureData = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVR4Ae3OAQ0AAAABMP1Lo4UxT3Dg1tGqwhcjpd4D/epMC1wAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIklEQVR4Ae3MsQ0AAAzCMP5/uuUHGBDCewJMuCM5tkym3gOLZg/xodIpmQAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4Ae3PSwoAAAQEUNz/zlgrn5KymLc2MyGCW+q6G9mO8HSZ3bgglmTh9oUqCJ8YQAgMB0rhaRAAAAAASUVORK5CYII=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVR4Ae2RSw4AMAREjfvfuZV01/hNbL0140FkSTlGVYNOMwwqwJschYBW/oLA7O1ZjFfQ7vEiM610sw8sjwsTECAKHmlhcAAAAABJRU5ErkJggg==",
];

// Vertex Shader Code
const vertexShaderSrc = `
    attribute vec2 a_position;
    attribute float a_textureIndex;
    attribute float a_opacity;
    uniform vec2 u_resolution;
    uniform vec2 u_scroll;
    uniform vec2 u_dim;
    uniform vec2 u_scrollPosition;
    varying float v_opacity;
    varying float v_textureIndex;
    
    void main() {
        // Set the size of each point (e.g., 16.0 for 16x16 textures)
        gl_PointSize = 16.0;

        // vector.x = -64 + mod(Math.floor(star.Position.x - position.x * scroll.x), dim.width + 128);
        // vector.y = -16 + mod(Math.floor(star.Position.y - position.y * scroll.y), dim.height + 32);

        // Convert position from world space to normalized screen space
        //vec2 position = (a_position * u_scroll) / u_resolution * 2.0 - 1.0 + u_scrollPosition;
        //vec2 position = (a_position - u_scrollPosition * u_scroll) / u_resolution * 2.0 - 1.0 + u_scrollPosition;
        //gl_Position = vec4(position * vec2(1, -1), 0, 1);

        //float x = mod(a_position.x - u_position.x * u_scroll.x + u_dim.x, u_dim.x + 128.0) - 64.0;
        //float y = mod(a_position.y - u_position.y * u_scroll.y + u_dim.y, u_dim.y + 32.0) - 16.0;

        vec2 position = mod(a_position - u_scrollPosition * u_scroll, u_dim);

        vec2 clipSpace = ((position / u_resolution) * 2.0) - 1.0;
        gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

        // Pass attributes to the fragment shader
        v_opacity = a_opacity;
        v_textureIndex = a_textureIndex;
    }
`;

// Fragment Shader Code
const fragmentShaderSrc = `
    precision mediump float;
    uniform sampler2D u_textures[4];
    uniform vec3 u_color;
    uniform float u_flash;
    varying float v_opacity;
    varying float v_textureIndex;

    void main() {
        vec4 textureColor;

        int texIndex = int(floor(v_textureIndex + 0.5));

        if (texIndex == 0) {
            textureColor = texture2D(u_textures[0], gl_PointCoord);
        } else if (texIndex == 1) {
            textureColor = texture2D(u_textures[1], gl_PointCoord);
        } else if (texIndex == 2) {
            textureColor = texture2D(u_textures[2], gl_PointCoord);
        }  else if (texIndex == 3) {
            textureColor = texture2D(u_textures[3], gl_PointCoord);
        } else {
            // Fallback
            textureColor = vec4(1.0, 0.0, 0.0, 1.0);
        }

        gl_FragColor = vec4((textureColor.rgb * u_color + (textureColor.a * u_flash * vec3(1.0,1.0,1.0))), textureColor.a * v_opacity + ((textureColor.a * u_flash) / 3.0));
    }
`;

export type ProgramStore = {
    program: WebGLProgram;
    bindings: ProgramBindings;
    textures: WebGLTexture[];
}

export type ProgramBindings = {
    position: number;
    opacity: number;
    textureIndex: number;

    flash: WebGLUniformLocation;
    color: WebGLUniformLocation;
    scrollPosition: WebGLUniformLocation;
    resolution: WebGLUniformLocation;
    scroll: WebGLUniformLocation;
    dim: WebGLUniformLocation;
}

export type ProgramBuffers = {
    position: WebGLBuffer;
    opacity: WebGLBuffer;
    texture: WebGLBuffer;
}

export const initializeWebGL = (gl: WebGL2RenderingContext): ProgramStore => {
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.blendEquation(gl.FUNC_ADD);
    gl.enable(gl.BLEND);
    
    const program = createProgram(gl, [
        compileShader(gl, gl.VERTEX_SHADER, vertexShaderSrc)!,
        compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSrc)!,
    ])!;

    const bindings = Object.fromEntries([
        "a_position",
        "a_textureIndex",
        "a_opacity",
        "u_resolution",
        "u_scroll",
        "u_dim",
        "u_color",
        "u_scrollPosition",
        "u_flash",
    ].map((v) => [v.split("_")[1], (
        v[0] == "a" ? gl.getAttribLocation(program, v) : gl.getUniformLocation(program, v)
    )])) as ProgramBindings;

    const textures = Array(4).fill(0).map((_,i) => (
        createGLTexture(gl, textureData[i])
    ));

    return {
        program,
        bindings,
        textures,
    };
};

export const createProgramBuffers = (
    gl: WebGL2RenderingContext,
    stars: Star[],
): ProgramBuffers => {
    const starPositions: number[] = [];
    const starOpacities: number[] = [];
    const starTextures: number[] = [];
    
    stars.forEach(star => {
        starPositions.push(star.Position.x, star.Position.y);
        starOpacities.push(star.Opacity);
        starTextures.push(star.Texture);
    });
    
    const position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, position);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(starPositions), gl.STATIC_DRAW);

    const opacity = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, opacity);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(starOpacities), gl.STATIC_DRAW);
    
    const texture = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texture);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(starTextures), gl.STATIC_DRAW);

    return {
        position,
        opacity,
        texture,
    };
};

export const renderProgramBuffers = ({
    gl,
    store: {
        bindings,
        program,
        textures,
    },
    buffers,
    config,
    stars,
}: {
    gl: WebGL2RenderingContext;
    store: ProgramStore;
    buffers: ProgramBuffers;
    config: StarfieldConfig;
    stars: Star[];
}) => {
    gl.useProgram(program);
    
    // Set up resolution and scroll uniforms
    gl.uniform1f(bindings.flash, config.flash);
    gl.uniform2f(bindings.resolution, config.dim.width, config.dim.height);
    gl.uniform2f(bindings.scroll, config.scroll.x, config.scroll.y);
    gl.uniform2f(bindings.scrollPosition, config.position.x, config.position.y);
    gl.uniform2f(bindings.dim, config.dim.width, config.dim.height);
    // Set star color with opacity
    const r = parseInt(config.color.slice(0, 2), 16) / 255;
    const g = parseInt(config.color.slice(2, 4), 16) / 255;
    const b = parseInt(config.color.slice(4, 6), 16) / 255;
    gl.uniform3f(bindings.color, r, g, b);

    // Bind textures to texture units
    for (let i = 0; i < textures.length; i++) {
        const tex = textures[i];
        gl.activeTexture(gl["TEXTURE"+i]);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.uniform1i(gl.getUniformLocation(program, `u_textures[${i}]`), i);
    }

    // Bind and enable position buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.enableVertexAttribArray(bindings.position);
    gl.vertexAttribPointer(bindings.position, 2, gl.FLOAT, false, 0, 0);
    
    // Bind and enable opacity buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.opacity);
    gl.enableVertexAttribArray(bindings.opacity);
    gl.vertexAttribPointer(bindings.opacity, 1, gl.FLOAT, false, 0, 0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texture);
    gl.enableVertexAttribArray(bindings.textureIndex);
    gl.vertexAttribPointer(bindings.textureIndex, 1, gl.FLOAT, false, 0, 0);

    // Draw points (stars)
    gl.drawArrays(gl.POINTS, 0, stars.length);

    // Cleanup
    gl.deleteBuffer(buffers.opacity);
    gl.deleteBuffer(buffers.position);
    gl.deleteBuffer(buffers.texture);
};



