export class Effect {

};

export class WebGLEffect {
    gl: WebGL2RenderingContext;
    program?: WebGLProgram;

    constructor(gl: WebGL2RenderingContext) {
        this.gl = gl;
    }

    binding(ty: "a", name: string): GLint;
    binding(ty: "u", name: string): WebGLUniformLocation;
    binding(ty: "a"|"u", name: string) {
        if(ty == "a") {
            return this.gl!.getAttribLocation(this.program!, `${ty}_${name}`);
        } else {
            return this.gl!.getUniformLocation(this.program!, `${ty}_${name}`)!;
        }
    }
};
