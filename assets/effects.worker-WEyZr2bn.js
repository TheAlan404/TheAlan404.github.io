var Y=Object.defineProperty;var z=(u,s,c)=>s in u?Y(u,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):u[s]=c;var a=(u,s,c)=>z(u,typeof s!="symbol"?s+"":s,c);(function(){"use strict";const u=t=>s(t,t),s=(t,o)=>typeof t=="object"&&t!==null?{x:t.x||0,y:t.y||0}:{x:t||0,y:o||0},c=t=>typeof t=="object"&&t?s(t):u(t),x=(...t)=>t.map(c).reduce((o,e)=>s(o.x+e.x,o.y+e.y)),S=(...t)=>t.map(c).reduce((o,e)=>s(o.x*e.x,o.y*e.y)),_=(t,o)=>x(t,S(o,-1)),b=(t,o)=>{let e=c(t),i=c(o);return s(e.x/i.x,e.y/i.y)},R=t=>{let o=c(t);return Math.sqrt(o.x**2+o.y**2)},T=t=>b(t,R(t));s(0,0),s(1,1);class w{constructor(){a(this,"id","");a(this,"dimensions",s());a(this,"mousePosition",null);a(this,"scrollPosition",s())}onDimensionsChange(o){this.dimensions=o}onScrollPositionChange(o){this.scrollPosition=o}onMouseMove(o){this.mousePosition=o}update(o){}render(){}}class I extends w{constructor(e){super();a(this,"gl");a(this,"program");a(this,"bindings",{});a(this,"scale",1);this.gl=e,this.program=e.createProgram()}onDimensionsChange(e){this.dimensions=e}updateViewport(){this.gl.viewport(0,0,this.dimensions.x*this.scale,this.dimensions.y*this.scale)}binding(e,i){return e=="a"?this.gl.getAttribLocation(this.program,`${e}_${i}`):this.gl.getUniformLocation(this.program,`${e}_${i}`)}createBuffer(){return this.gl.createBuffer()}writeBuffer(e,i){return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,e),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(i),this.gl.STATIC_DRAW),e}writeAndBindBuffer(e,i,r,n=1){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW);let l=this.bindings[e];this.gl.enableVertexAttribArray(l),this.gl.vertexAttribPointer(l,n,this.gl.FLOAT,!1,0,0)}bindBuffer(e,i,r=1){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.enableVertexAttribArray(this.bindings[e]),this.gl.vertexAttribPointer(this.bindings[e],r,this.gl.FLOAT,!1,0,0)}uniformVec2(e,i){this.gl.uniform2f(this.bindings[e],i.x,i.y)}}const y=(t,o,e)=>{const i=t.createShader(o);return i?(t.shaderSource(i,e),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.error("SHADER COMPILATION ERROR",e),console.error(t.getShaderInfoLog(i)),t.deleteShader(i),null)):null},B=(t,o)=>{const e=t.createProgram();for(let i of o)t.attachShader(e,i);return t.linkProgram(e),t.getProgramParameter(e,t.LINK_STATUS)?e:(console.error(t.getProgramInfoLog(e)),t.deleteProgram(e),null)},D=(t,o)=>{const e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),(async()=>{const n=await(await fetch(o)).blob(),l=await createImageBitmap(n);t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)})(),e},C=(t=1)=>Math.round(Math.random()*t),m=(t=1)=>Math.random()*t,M=(t,o)=>Math.random()>.5?t:o,E=(t,o,e)=>t+(o-t)*e;function v(t,o,e){return o===void 0&&e===void 0?t:o!==void 0&&e===void 0?Math.max(t,o):Math.min(o===void 0&&e!==void 0?t:Math.max(t,o),e)}const N=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVR4Ae3OAQ0AAAABMP1Lo4UxT3Dg1tGqwhcjpd4D/epMC1wAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIklEQVR4Ae3MsQ0AAAzCMP5/uuUHGBDCewJMuCM5tkym3gOLZg/xodIpmQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4Ae3PSwoAAAQEUNz/zlgrn5KymLc2MyGCW+q6G9mO8HSZ3bgglmTh9oUqCJ8YQAgMB0rhaRAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVR4Ae2RSw4AMAREjfvfuZV01/hNbL0140FkSTlGVYNOMwwqwJschYBW/oLA7O1ZjFfQ7vEiM610sw8sjwsTECAKHmlhcAAAAABJRU5ErkJggg=="],U=`
    attribute vec2 a_position;
    attribute float a_textureIndex;
    attribute float a_opacity;
    uniform float u_pointSize;
    uniform vec2 u_scroll;
    uniform vec2 u_dim;
    uniform vec2 u_scrollPosition;
    varying float v_opacity;
    varying float v_flash;
    varying float v_textureIndex;
    uniform vec2 u_mousePosition;
    
    void main() {
        gl_PointSize = u_pointSize;

        vec2 position = mod(a_position - u_scrollPosition, u_dim);

        //float mouseDistance = sqrt(pow(position.x - u_mousePosition.x, 2.0) + pow(position.y - u_mousePosition.y, 2.0));
        // float threshold = 50.0;
        // float moveDistance = max(0.0, threshold - mouseDistance);
        // vec2 directionToMouse = normalize(position - u_mousePosition);
        // vec2 moveAway = directionToMouse * moveDistance * 1.0;
        // position += moveAway;

        vec2 clipSpace = ((position / u_dim) * 2.0) - 1.0;
        gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

        // Pass attributes to the fragment shader
        v_opacity = a_opacity;
        v_textureIndex = a_textureIndex;
        // v_flash = mouseDistance / 50.0;
    }
`,F=`
    precision mediump float;
    uniform sampler2D u_textures[4];
    uniform vec3 u_color;
    uniform float u_flash;
    varying float v_flash;
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

        gl_FragColor = vec4(
            (textureColor.rgb * u_color + (
                textureColor.a * u_flash * v_flash * vec3(1.0,1.0,1.0)
            )),
            textureColor.a * v_opacity + ((textureColor.a * u_flash) / 3.0)
        );
    }
`,L=[{color:"ab6ffa",scroll:s(.3,.3)},{color:"71d5ff",scroll:s(.3,.3),flowSpeed:2.5},{color:"53f3dd",scroll:s(.5,.5)},{color:"cefdff",scroll:s(.5,.5),flowSpeed:3}];class O extends I{constructor(e){super(e);a(this,"id","farewell");a(this,"textures");a(this,"buffers");a(this,"starfields",[]);a(this,"globalPosition",s());a(this,"globalFlash",0);a(this,"scale",1);a(this,"deltaTimeMultiplier",.1);a(this,"speedMultiplier",1);a(this,"speedMultiplierDecay",1);this.program=B(e,[y(e,e.VERTEX_SHADER,U),y(e,e.FRAGMENT_SHADER,F)]),this.textures=Array(4).fill(0).map((i,r)=>D(e,N[r])),this.bindings={color:this.binding("u","color"),dim:this.binding("u","dim"),flash:this.binding("u","flash"),opacity:this.binding("a","opacity"),position:this.binding("a","position"),textureIndex:this.binding("a","textureIndex"),scroll:this.binding("u","scroll"),scrollPosition:this.binding("u","scrollPosition"),mousePosition:this.binding("u","mousePosition"),pointSize:this.binding("u","pointSize")},this.createStarfields(),this.buffers={texture:this.createBuffer(),opacity:this.createBuffer(),position:this.createBuffer()}}onDimensionsChange(e){this.dimensions=e,this.createStarfields()}isSmallDims(){return this.dimensions.x<100||this.dimensions.y<100}update(e){for(let i of this.starfields)for(let r of i.stars)this.updateStar(i.config,r,e)}createStarfields(){this.starfields=L.map(e=>this.createStarfield(e))}createStarfield(e){let i={yNodes:[],color:"ffffff",flowSpeed:1,scroll:s(1),...e};i.yNodes=this.createYNodes();let r=this.createStars(i);return{config:i,stars:r}}stepsH(){return 100}stepsW(){return 100}stepSize(){return this.stepsW()}createYNodes(){let e=[],i=m(this.dimensions.y),r=0;for(;this.stepsH()>r;)r++,e.push(i),i+=M(-1,1)*(16*2+m(24*(this.dimensions.y/360)*2));for(let n=0;n<4;n++)e[e.length-1-n]=E(e[e.length-1-n],e[0],v(0,1-n/4,1));return e}createStars(e){let i=this.isSmallDims()?16:128;return new Array(i).fill(0).map(()=>{let n=m(1),l={NodeIndex:C(e.yNodes.length-1),NodePercent:m(1),Distance:4+n*20,Sine:m(Math.PI*2)},h=Math.floor(v(0,Math.pow(1-n,3)*4,3));return{...l,Position:this.targetOfStar(e,l),Opacity:E(.6,0,n*.5),Texture:h}})}targetOfStar({yNodes:e},i){let r=this.stepSize(),n={x:i.NodeIndex*r,y:e[i.NodeIndex]},l={x:(i.NodeIndex+1)*r,y:e[i.NodeIndex+1]},h=x(n,S(_(l,n),s(i.NodePercent))),g=T(_(l,n));return{x:h.x+-g.x*i.Distance*Math.sin(i.Sine),y:h.y+g.y*i.Distance*Math.sin(i.Sine)}}updateStar(e,i,r=1){i.Sine+=r*e.flowSpeed*this.deltaTimeMultiplier*this.speedMultiplier,i.NodePercent+=r*.25*e.flowSpeed*this.deltaTimeMultiplier*this.speedMultiplier,i.NodePercent>=1&&(i.NodePercent-=1,i.NodeIndex++,i.NodeIndex>=e.yNodes.length-1&&(i.NodeIndex=0,i.Position.x=0)),i.Position=x(i.Position,b(_(this.targetOfStar(e,i),i.Position),s(50,50)))}render(){this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.enable(this.gl.BLEND),this.gl.useProgram(this.program),this.gl.uniform1f(this.bindings.flash,0),this.uniformVec2("dim",this.dimensions),this.uniformVec2("scrollPosition",this.scrollPosition),this.uniformVec2("mousePosition",this.mousePosition||s(-1,-1)),this.gl.uniform1f(this.bindings.pointSize,this.isSmallDims()?16:32);for(let e=0;e<this.textures.length;e++){const i=this.textures[e];this.gl.activeTexture(this.gl["TEXTURE"+e]),this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.uniform1i(this.gl.getUniformLocation(this.program,`u_textures[${e}]`),e)}for(let e of this.starfields)this.renderDrawStarfield(e)}renderDrawStarfield(e){this.uniformVec2("scroll",e.config.scroll);const i=parseInt(e.config.color.slice(0,2),16)/255,r=parseInt(e.config.color.slice(2,4),16)/255,n=parseInt(e.config.color.slice(4,6),16)/255;this.gl.uniform3f(this.bindings.color,i,r,n);const l=[],h=[],g=[];e.stars.forEach(p=>{l.push(p.Position.x,p.Position.y),h.push(p.Opacity),g.push(p.Texture)}),this.writeAndBindBuffer("position",this.buffers.position,new Float32Array(l),2),this.writeAndBindBuffer("opacity",this.buffers.opacity,new Float32Array(h)),this.writeAndBindBuffer("textureIndex",this.buffers.texture,new Float32Array(g)),this.gl.drawArrays(this.gl.POINTS,0,e.stars.length)}}const V=t=>o=>o[t.type]?o[t.type](t.data):o._();let d,f,A=[],P=performance.now();function G(){function t(e){f.clearColor(0,0,0,0),f.clear(f.COLOR_BUFFER_BIT);for(let i of A)i.render();requestAnimationFrame(t)}function o(){const e=performance.now(),i=(e-P)/1e3;P=e;for(let r of A)r.update(i);setTimeout(o,1e3/24)}requestAnimationFrame(t),o()}self.onmessage=t=>{const o=t.data;V(o)({init:({canvas:e,dimensions:i})=>{d=e;const r=d.getContext("webgl2",{antialias:!1,powerPreference:"low-power",desynchronized:!0,failIfMajorPerformanceCaveat:!0});if(!r){console.error("WebGL2 not supported");return}f=r,A=[new O(f)];for(let n of A)n.onDimensionsChange(i);d.width=i.x,d.height=i.y,f.viewport(0,0,i.x,i.y),self.postMessage({type:"initialized"}),G()},dimensionsChange:({dimensions:e})=>{d.width=e.x,d.height=e.y,f.viewport(0,0,e.x,e.y);for(let i of A)i.onDimensionsChange(e)},mousemove:({pos:e})=>{for(let i of A)i.onMouseMove(e)}})}})();
