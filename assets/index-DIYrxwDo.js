var L=Object.defineProperty;var O=(t,o,e)=>o in t?L(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var l=(t,o,e)=>O(t,typeof o!="symbol"?o+"":o,e);import{w as k}from"./with-props-CQU8lgZR.js";import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as u,o as y,O as F,p as G,q as V}from"./chunk-K6CSEXPM-DPnDJ6bH.js";import{S as Y}from"./Section-mZ2HnWL9.js";import{G as B,S as b,T as Q}from"./Stack-CMz_1weW.js";import{l as q,i as H,j as X,m as W,B as A,q as v}from"./polymorphic-factory-Bq4oe9Oi.js";import{S as K}from"./ScrollArea-DktEZIjX.js";import{c as T}from"./clamp-DTmYCdls.js";import{c as E}from"./createReactComponent-B_38UDS-.js";import{P as J}from"./Paper-C-yUIHXB.js";import{T as $}from"./Text-DYj4v0Mh.js";import{g as Z}from"./get-default-z-index-CUjKoHex.js";import{O as z}from"./OptionalPortal-DqxlrI3e.js";import"./index-Cc--y-K9.js";import"./use-reduced-motion-e0wml-uL.js";import"./create-safe-context-CZ_sq2MT.js";import"./DirectionProvider-C-Evv22v.js";function C(t,o,e){u.useEffect(()=>(window.addEventListener(t,o,e),()=>window.removeEventListener(t,o,e)),[t,o])}var M={root:"m_7f854edf"};const ee={position:{bottom:0,right:0},zIndex:Z("modal"),withinPortal:!0},te=W((t,{zIndex:o,position:e})=>({root:{"--affix-z-index":o==null?void 0:o.toString(),"--affix-top":v(e==null?void 0:e.top),"--affix-left":v(e==null?void 0:e.left),"--affix-bottom":v(e==null?void 0:e.bottom),"--affix-right":v(e==null?void 0:e.right)}})),P=q((t,o)=>{const e=H("Affix",ee,t),{classNames:r,className:s,style:n,styles:a,unstyled:h,vars:f,portalProps:g,zIndex:_,withinPortal:x,position:d,...U}=e,j=X({name:"Affix",classes:M,props:e,className:s,style:n,classNames:r,styles:a,unstyled:h,vars:f,varsResolver:te});return i.jsx(z,{...g,withinPortal:x,children:i.jsx(A,{ref:o,...j("root"),...U})})});P.classes=M;P.displayName="@mantine/core/Affix";const re=()=>{const t=y(),o=u.useRef(null);return u.useEffect(()=>{o.current&&(o.current.scrollTop=0)},[t.pathname]),i.jsx(B,{gap:0,wrap:"nowrap",h:"100%",children:i.jsx(A,{h:"100%",w:"100%",children:i.jsx(K.Autosize,{mah:"100%",h:"100%",w:"100%",scrollbars:"y",viewportRef:o,children:i.jsx(A,{p:"sm",h:"100%",children:i.jsx(u.Suspense,{fallback:"Loading...",children:i.jsx(F,{})})})})})})},oe=t=>c(t,t),c=(t,o)=>typeof t=="object"&&t!==null?{x:t.x||0,y:t.y||0}:{x:t||0,y:o||0},p=t=>typeof t=="object"&&t?c(t):oe(t),se=(t,o)=>t.x==o.x&&t.y==o.y,w=(...t)=>t.map(p).reduce((o,e)=>c(o.x+e.x,o.y+e.y)),N=(...t)=>t.map(p).reduce((o,e)=>c(o.x*e.x,o.y*e.y)),S=(t,o)=>w(t,N(o,-1)),D=(t,o)=>{let e=p(t),r=p(o);return c(e.x/r.x,e.y/r.y)},ne=t=>{let o=p(t);return Math.sqrt(o.x**2+o.y**2)},ie=t=>D(t,ne(t));c(0,0);c(1,1);const ae=({onInitialize:t,onInitializeFail:o,onDestroy:e,onResize:r}={})=>{let s=u.useRef(null),n=u.useRef(null);return u.useEffect(()=>{if(!s.current)return;s.current.width=s.current.clientWidth,s.current.height=s.current.clientHeight;const a=s.current.getContext("webgl2",{antialias:!1,powerPreference:"low-power",desynchronized:!0,failIfMajorPerformanceCaveat:!0});if(!a){console.log("WebGL2RenderingContext initialize failed"),o==null||o();return}return n.current=a,t==null||t(a),a.viewport(0,0,s.current.width,s.current.height),r==null||r(c(s.current.width,s.current.height),s.current),()=>{e==null||e(),n.current=null}},[s.current]),C("resize",()=>{var a;s.current&&(s.current.width=s.current.clientWidth,s.current.height=s.current.clientHeight,(a=n.current)==null||a.viewport(0,0,s.current.width,s.current.height),r==null||r(c(s.current.width,s.current.height),s.current))}),{ref:s,gl:n}};class ce{constructor(){l(this,"id","");l(this,"dimensions",c());l(this,"mousePosition",null)}onDimensionsChange(o){this.dimensions=o}onMouseMove(o){this.mousePosition=o}update(o){}render(){}}class le extends ce{constructor(e){super();l(this,"gl");l(this,"program");l(this,"bindings",{});l(this,"scale",1);this.gl=e,this.program=e.createProgram()}onDimensionsChange(e){this.dimensions=e}updateViewport(){this.gl.viewport(0,0,this.dimensions.x*this.scale,this.dimensions.y*this.scale)}binding(e,r){return e=="a"?this.gl.getAttribLocation(this.program,`${e}_${r}`):this.gl.getUniformLocation(this.program,`${e}_${r}`)}createBuffer(e){const r=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,r),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(e),this.gl.STATIC_DRAW),r}bindBuffer(e,r,s=1){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,r),this.gl.enableVertexAttribArray(this.bindings[e]),this.gl.vertexAttribPointer(this.bindings[e],s,this.gl.FLOAT,!1,0,0)}uniformVec2(e,r){this.gl.uniform2f(this.bindings[e],r.x,r.y)}}const R=(t,o,e)=>{const r=t.createShader(o);return r?(t.shaderSource(r,e),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("SHADER COMPILATION ERROR",e),console.error(t.getShaderInfoLog(r)),t.deleteShader(r),null)):null},ue=(t,o)=>{const e=t.createProgram();for(let r of o)t.attachShader(e,r);return t.linkProgram(e),t.getProgramParameter(e,t.LINK_STATUS)?e:(console.error(t.getProgramInfoLog(e)),t.deleteProgram(e),null)},he=(t,o)=>{const e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));const r=new Image;return r.onload=()=>{t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)},r.src=o,e},fe=(t=1)=>Math.round(Math.random()*t),m=(t=1)=>Math.random()*t,de=(t,o)=>Math.random()>.5?t:o,I=(t,o,e)=>t+(o-t)*e,me=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHUlEQVR4Ae3OAQ0AAAABMP1Lo4UxT3Dg1tGqwhcjpd4D/epMC1wAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIklEQVR4Ae3MsQ0AAAzCMP5/uuUHGBDCewJMuCM5tkym3gOLZg/xodIpmQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4Ae3PSwoAAAQEUNz/zlgrn5KymLc2MyGCW+q6G9mO8HSZ3bgglmTh9oUqCJ8YQAgMB0rhaRAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVR4Ae2RSw4AMAREjfvfuZV01/hNbL0140FkSTlGVYNOMwwqwJschYBW/oLA7O1ZjFfQ7vEiM610sw8sjwsTECAKHmlhcAAAAABJRU5ErkJggg=="],Ae=`
    attribute vec2 a_position;
    attribute float a_textureIndex;
    attribute float a_opacity;
    uniform vec2 u_scroll;
    uniform vec2 u_dim;
    uniform vec2 u_scrollPosition;
    varying float v_opacity;
    varying float v_flash;
    varying float v_textureIndex;
    uniform vec2 u_mousePosition;
    
    void main() {
        gl_PointSize = 32.0;

        vec2 position = mod(a_position, u_dim);

        float mouseDistance = sqrt(pow(position.x - u_mousePosition.x, 2.0) + pow(position.y - u_mousePosition.y, 2.0));
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
`,pe=`
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
`,ge=[{color:"ab6ffa",scroll:c(.3,.3)},{color:"71d5ff",scroll:c(.3,.3),flowSpeed:2.5},{color:"53f3dd",scroll:c(.5,.5)},{color:"cefdff",scroll:c(.5,.5),flowSpeed:3}];class xe extends le{constructor(e){super(e);l(this,"id","farewell");l(this,"textures");l(this,"starfields",[]);l(this,"globalPosition",c());l(this,"globalFlash",0);l(this,"scale",1);l(this,"deltaTimeMultiplier",.02);this.program=ue(e,[R(e,e.VERTEX_SHADER,Ae),R(e,e.FRAGMENT_SHADER,pe)]),this.textures=Array(4).fill(0).map((r,s)=>he(e,me[s])),this.bindings={color:this.binding("u","color"),dim:this.binding("u","dim"),flash:this.binding("u","flash"),opacity:this.binding("a","opacity"),position:this.binding("a","position"),textureIndex:this.binding("a","textureIndex"),scroll:this.binding("u","scroll"),scrollPosition:this.binding("u","scrollPosition"),mousePosition:this.binding("u","mousePosition")},this.createStarfields()}onDimensionsChange(e){this.dimensions=e,this.createStarfields()}update(e){for(let r of this.starfields)for(let s of r.stars)this.updateStar(r.config,s,e)}createStarfields(){this.starfields=ge.map(e=>this.createStarfield(e))}createStarfield(e){let r={yNodes:[],color:"ffffff",flowSpeed:1,scroll:c(1),...e};r.yNodes=this.createYNodes();let s=this.createStars(r);return{config:r,stars:s}}stepsH(){return 100}stepsW(){return 100}stepSize(){return this.stepsW()}createYNodes(){let e=[],r=m(this.dimensions.y),s=0;for(;this.stepsH()>s;)s++,e.push(r),r+=de(-1,1)*(16*2+m(24*(this.dimensions.y/360)*2));for(let n=0;n<4;n++)e[e.length-1-n]=I(e[e.length-1-n],e[0],T(0,1-n/4,1));return e}createStars(e){return new Array(128).fill(0).map(()=>{let s=m(1),n={NodeIndex:fe(e.yNodes.length-1),NodePercent:m(1),Distance:4+s*20,Sine:m(Math.PI*2)},a=Math.floor(T(0,Math.pow(1-s,3)*4,3));return{...n,Position:this.targetOfStar(e,n),Opacity:I(.6,0,s*.5),Texture:a}})}targetOfStar({yNodes:e},r){let s=this.stepSize(),n={x:r.NodeIndex*s,y:e[r.NodeIndex]},a={x:(r.NodeIndex+1)*s,y:e[r.NodeIndex+1]},h=w(n,N(S(a,n),c(r.NodePercent))),f=ie(S(a,n));return{x:h.x+-f.x*r.Distance*Math.sin(r.Sine),y:h.y+f.y*r.Distance*Math.sin(r.Sine)}}updateStar(e,r,s=1){r.Sine+=s*e.flowSpeed*this.deltaTimeMultiplier,r.NodePercent+=s*.25*e.flowSpeed*this.deltaTimeMultiplier,r.NodePercent>=1&&(r.NodePercent-=1,r.NodeIndex++,r.NodeIndex>=e.yNodes.length-1&&(r.NodeIndex=0,r.Position.x=0)),r.Position=w(r.Position,D(S(this.targetOfStar(e,r),r.Position),c(50,50)))}render(){this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.enable(this.gl.BLEND),this.gl.useProgram(this.program),this.gl.uniform1f(this.bindings.flash,0),this.uniformVec2("dim",this.dimensions),this.uniformVec2("scrollPosition",this.globalPosition),this.uniformVec2("mousePosition",this.mousePosition||c(-1,-1));for(let e=0;e<this.textures.length;e++){const r=this.textures[e];this.gl.activeTexture(this.gl["TEXTURE"+e]),this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.uniform1i(this.gl.getUniformLocation(this.program,`u_textures[${e}]`),e)}for(let e of this.starfields)this.renderDrawStarfield(e)}renderDrawStarfield(e){this.uniformVec2("scroll",e.config.scroll);const r=parseInt(e.config.color.slice(0,2),16)/255,s=parseInt(e.config.color.slice(2,4),16)/255,n=parseInt(e.config.color.slice(4,6),16)/255;this.gl.uniform3f(this.bindings.color,r,s,n);const a=[],h=[],f=[];e.stars.forEach(d=>{a.push(d.Position.x,d.Position.y),h.push(d.Opacity),f.push(d.Texture)});const g=this.createBuffer(new Float32Array(a)),_=this.createBuffer(new Float32Array(h)),x=this.createBuffer(new Float32Array(f));this.bindBuffer("position",g,2),this.bindBuffer("opacity",_),this.bindBuffer("textureIndex",x),this.gl.drawArrays(this.gl.POINTS,0,e.stars.length),this.gl.deleteBuffer(_),this.gl.deleteBuffer(g),this.gl.deleteBuffer(x)}}const ve=({render:t,deltaTimeFPS:o=30})=>{u.useEffect(()=>{let e=0,r=performance.now();const s=1e3/o,n=a=>{let h=(a-r)/s;r=a;let f=Math.min(h,o);t(f),e=requestAnimationFrame(n)};return e=requestAnimationFrame(n),()=>{cancelAnimationFrame(e)}},[t])},_e=({update:t,fps:o=30})=>{u.useEffect(()=>{const e=setInterval(()=>{t()},1e3/o);return()=>clearInterval(e)},[t,o])},Se=()=>{const t=u.useRef([]),o=s=>{for(let n of t.current)se(s,n.dimensions)||n.onDimensionsChange(s)},{ref:e,gl:r}=ae({onInitialize:s=>{t.current=[new xe(s)],o({x:s.canvas.width,y:s.canvas.height})},onDestroy:()=>{t.current=[]},onResize:s=>{o(s)}});return ve({render:()=>{var s,n;(s=r.current)==null||s.clearColor(0,0,0,0),(n=r.current)==null||n.clear(r.current.COLOR_BUFFER_BIT);for(let a of t.current)a.render()}}),_e({fps:30,update:()=>{for(let s of t.current)s.update(.5)}}),C("mousemove",s=>{for(let n of t.current)n.onMouseMove(c(s.clientX,s.clientY))}),{ref:e,gl:r,store:t}},be=()=>{const{ref:t}=Se();return i.jsx("canvas",{className:"pageBackground",style:{width:"100vw",height:"100vh",imageRendering:"pixelated"},ref:t})};/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var we=E("outline","brush","IconBrush",[["path",{d:"M3 21v-4a4 4 0 1 1 4 4h-4",key:"svg-0"}],["path",{d:"M21 3a16 16 0 0 0 -12.8 10.2",key:"svg-1"}],["path",{d:"M21 3a16 16 0 0 1 -10.2 12.8",key:"svg-2"}],["path",{d:"M10.6 9a9 9 0 0 1 4.4 4.4",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ye=E("outline","clipboard","IconClipboard",[["path",{d:"M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2",key:"svg-0"}],["path",{d:"M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ee=E("outline","sparkles","IconSparkles",[["path",{d:"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z",key:"svg-0"}]]);const Pe=()=>{const t=[{icon:i.jsx(Ee,{}),path:"home",label:"About Me"},{icon:i.jsx(ye,{}),path:"projects",label:"Projects"},{icon:i.jsx(we,{}),path:"art",label:"Art"}];return i.jsx(B,{children:t.map(o=>i.jsx(Te,{...o}))})},Te=({icon:t,label:o,path:e})=>{const s=y().pathname.split("/")[1]==e;return i.jsx(J,{withBorder:!0,w:"4rem",h:"4rem",className:"frost buttonResizable",component:e?G:void 0,to:s?"/":e,c:"var(--mantine-default-text)",children:i.jsxs(b,{align:"center",ta:"center",justify:"center",gap:0,h:"100%",children:[t,i.jsx($,{fz:"xs",children:o})]})})},He=k(function(){const o=y();V();const e=o.pathname.length>1;return i.jsxs(A,{h:"100dvh",children:[i.jsx(be,{}),i.jsx(P,{w:"100%",position:{bottom:20},children:i.jsx(b,{ta:"center",align:"center",children:i.jsx(Pe,{})})}),i.jsx(b,{style:{position:"absolute",pointerEvents:"none"},pt:{base:"0px",sm:"xl"},align:"center",w:"100%",h:"100%",children:i.jsx(Q,{mounted:e,transition:"fade-up",keepMounted:!0,duration:200,children:r=>i.jsx(A,{style:{...r,pointerEvents:"auto"},w:{base:"100%",sm:"70%"},h:{base:"calc(100% - 40px - 64px)",sm:"80%"},className:"meow",children:i.jsx(Y,{w:"100%",h:"100%",p:0,children:i.jsx(re,{})})})})})]})});export{He as default};
