import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as T}from"./chunk-K6AXKMTT-CFzUNjKR.js";import{h as B,i as O,j as P,B as x,l as _,z as H,r as w,n as D,o as F,u as I}from"./polymorphic-factory-Dij39cPM.js";import{g as N}from"./OptionalPortal-BSjjr3Dr.js";import{L as M}from"./Loader-B9R8ukra.js";import{T as V,I as W}from"./createReactComponent-DChgWNtX.js";var R={root:"m_9814e45f"};const Z={zIndex:N("modal")},q=_((t,{gradient:o,color:s,backgroundOpacity:e,blur:i,radius:n,zIndex:l})=>({root:{"--overlay-bg":o||(s!==void 0||e!==void 0)&&H(s||"#000",e??.6)||void 0,"--overlay-filter":i?`blur(${w(i)})`:void 0,"--overlay-radius":n===void 0?void 0:D(n),"--overlay-z-index":l==null?void 0:l.toString()}})),m=B((t,o)=>{const s=O("Overlay",Z,t),{classNames:e,className:i,style:n,styles:l,unstyled:d,vars:v,fixed:y,center:p,children:r,radius:j,zIndex:k,gradient:b,blur:u,color:c,backgroundOpacity:f,mod:g,...$}=s,E=P({name:"Overlay",props:s,classes:R,className:i,style:n,classNames:e,styles:l,unstyled:d,vars:v,varsResolver:q});return a.jsx(x,{ref:o,...E("root"),mod:[{center:p,fixed:y},g],...$,children:r})});m.classes=R;m.displayName="@mantine/core/Overlay";var S={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};const L={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:N("overlay")},A=_((t,{zIndex:o})=>({root:{"--lo-z-index":o==null?void 0:o.toString()}})),h=F((t,o)=>{const s=O("LoadingOverlay",L,t),{classNames:e,className:i,style:n,styles:l,unstyled:d,vars:v,transitionProps:y,loaderProps:p,overlayProps:r,visible:j,zIndex:k,...b}=s,u=I(),c=P({name:"LoadingOverlay",classes:S,props:s,className:i,style:n,classNames:e,styles:l,unstyled:d,vars:v,varsResolver:A}),f={...L.overlayProps,...r};return a.jsx(V,{transition:"fade",...y,mounted:!!j,children:g=>a.jsxs(x,{...c("root",{style:g}),ref:o,...b,children:[a.jsx(M,{...c("loader"),unstyled:d,...p}),a.jsx(m,{...f,...c("overlay"),darkHidden:!0,unstyled:d,color:(r==null?void 0:r.color)||u.white}),a.jsx(m,{...f,...c("overlay"),lightHidden:!0,unstyled:d,color:(r==null?void 0:r.color)||u.colors.dark[5]})]})})});h.classes=S;h.displayName="@mantine/core/LoadingOverlay";const X=t=>{let[o,s]=T.useState(!1);return a.jsxs(x,{pos:"relative",children:[a.jsx(h,{visible:!o,pos:"absolute",overlayProps:{backgroundOpacity:0}}),a.jsx(W,{onLoad:()=>s(!0),onError:()=>s(!0),ref:e=>{e!=null&&e.complete&&s(!0)},...t})]})};export{X as I};