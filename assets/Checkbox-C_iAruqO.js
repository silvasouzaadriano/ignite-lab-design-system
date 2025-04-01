import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as f}from"./index-C1DArrMF.js";import{u as M,S as z}from"./index-o6r0mSXN.js";import"./index-8WnZyt_V.js";import{I as D,r as B}from"./IconBase.esm-CIacLvLI.js";function $(e,t=[]){let n=[];function r(i,u){const c=s.createContext(u),d=n.length;n=[...n,u];const a=m=>{var x;const{scope:l,children:h,...k}=m,v=((x=l==null?void 0:l[e])==null?void 0:x[d])||c,N=s.useMemo(()=>k,Object.values(k));return b.jsx(v.Provider,{value:N,children:h})};a.displayName=i+"Provider";function p(m,l){var v;const h=((v=l==null?void 0:l[e])==null?void 0:v[d])||c,k=s.useContext(h);if(k)return k;if(u!==void 0)return u;throw new Error(`\`${m}\` must be used within \`${i}\``)}return[a,p]}const o=()=>{const i=n.map(u=>s.createContext(u));return function(c){const d=(c==null?void 0:c[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return o.scopeName=e,[r,K(o,...t)]}function K(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const u=r.reduce((c,{useScope:d,scopeName:a})=>{const m=d(i)[`__scope${a}`];return{...c,...m}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}function A(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function O(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function q({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=X({defaultProp:t,onChange:n}),i=e!==void 0,u=i?e:r,c=O(n),d=s.useCallback(a=>{if(i){const m=typeof a=="function"?a(e):a;m!==e&&c(m)}else o(a)},[i,e,o,c]);return[u,d]}function X({defaultProp:e,onChange:t}){const n=s.useState(e),[r]=n,o=s.useRef(r),i=O(t);return s.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}function Z(e){const t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var w=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function G(e){const[t,n]=s.useState(void 0);return w(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let u,c;if("borderBoxSize"in i){const d=i.borderBoxSize,a=Array.isArray(d)?d[0]:d;u=a.inlineSize,c=a.blockSize}else u=e.offsetWidth,c=e.offsetHeight;n({width:u,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function J(e,t){return s.useReducer((n,r)=>t[n][r]??n,e)}var j=e=>{const{present:t,children:n}=e,r=Q(t),o=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),i=M(r.ref,V(o));return typeof n=="function"||r.isPresent?s.cloneElement(o,{ref:i}):null};j.displayName="Presence";function Q(e){const[t,n]=s.useState(),r=s.useRef({}),o=s.useRef(e),i=s.useRef("none"),u=e?"mounted":"unmounted",[c,d]=J(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const a=E(r.current);i.current=c==="mounted"?a:"none"},[c]),w(()=>{const a=r.current,p=o.current;if(p!==e){const l=i.current,h=E(a);e?d("MOUNT"):h==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(p&&l!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,d]),w(()=>{if(t){let a;const p=t.ownerDocument.defaultView??window,m=h=>{const v=E(r.current).includes(h.animationName);if(h.target===t&&v&&(d("ANIMATION_END"),!o.current)){const N=t.style.animationFillMode;t.style.animationFillMode="forwards",a=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=N)})}},l=h=>{h.target===t&&(i.current=E(r.current))};return t.addEventListener("animationstart",l),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{p.clearTimeout(a),t.removeEventListener("animationstart",l),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:s.useCallback(a=>{a&&(r.current=getComputedStyle(a)),n(a)},[])}}function E(e){return(e==null?void 0:e.animationName)||"none"}function V(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],I=Y.reduce((e,t)=>{const n=s.forwardRef((r,o)=>{const{asChild:i,...u}=r,c=i?z:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),b.jsx(c,{...u,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),R="Checkbox",[H,fe]=$(R),[ee,te]=H(R),L=s.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:u,disabled:c,value:d="on",onCheckedChange:a,form:p,...m}=e,[l,h]=s.useState(null),k=M(t,C=>h(C)),v=s.useRef(!1),N=l?p||!!l.closest("form"):!0,[x=!1,P]=q({prop:o,defaultProp:i,onChange:a}),U=s.useRef(x);return s.useEffect(()=>{const C=l==null?void 0:l.form;if(C){const S=()=>P(U.current);return C.addEventListener("reset",S),()=>C.removeEventListener("reset",S)}},[l,P]),b.jsxs(ee,{scope:n,state:x,disabled:c,children:[b.jsx(I.button,{type:"button",role:"checkbox","aria-checked":g(x)?"mixed":x,"aria-required":u,"data-state":W(x),"data-disabled":c?"":void 0,disabled:c,value:d,...m,ref:k,onKeyDown:A(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:A(e.onClick,C=>{P(S=>g(S)?!0:!S),N&&(v.current=C.isPropagationStopped(),v.current||C.stopPropagation())})}),N&&b.jsx(ne,{control:l,bubbles:!v.current,name:r,value:d,checked:x,required:u,disabled:c,form:p,style:{transform:"translateX(-100%)"},defaultChecked:g(i)?!1:i})]})});L.displayName=R;var _="CheckboxIndicator",T=s.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=te(_,n);return b.jsx(j,{present:r||g(i.state)||i.state===!0,children:b.jsx(I.span,{"data-state":W(i.state),"data-disabled":i.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});T.displayName=_;var ne=e=>{const{control:t,checked:n,bubbles:r=!0,defaultChecked:o,...i}=e,u=s.useRef(null),c=Z(n),d=G(t);s.useEffect(()=>{const p=u.current,m=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(m,"checked").set;if(c!==n&&h){const k=new Event("click",{bubbles:r});p.indeterminate=g(n),h.call(p,g(n)?!1:n),p.dispatchEvent(k)}},[c,n,r]);const a=s.useRef(g(n)?!1:n);return b.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:o??a.current,...i,tabIndex:-1,ref:u,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function g(e){return e==="indeterminate"}function W(e){return g(e)?"indeterminate":e?"checked":"unchecked"}var re=L,oe=T,y=new Map;y.set("bold",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});y.set("duotone",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});y.set("fill",function(){return f.createElement(f.Fragment,null,f.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});y.set("light",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});y.set("thin",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});y.set("regular",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var se=function(t,n){return B(t,n,y)},F=s.forwardRef(function(e,t){return f.createElement(D,Object.assign({ref:t},e,{renderPath:se}))});F.displayName="Check";function ie(e){return b.jsx(re,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",...e,children:b.jsx(oe,{asChild:!0,children:b.jsx(F,{weight:"bold",className:"h-5 w-5 text-cyan-300"})})})}ie.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};export{ie as C};
