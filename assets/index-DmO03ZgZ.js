import{b as O}from"./index-C1DArrMF.js";var y={exports:{}},n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o;function S(){if(o)return n;o=1;var u=O();function g(r){var e="https://react.dev/errors/"+r;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+r+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var i={d:{f:c,r:function(){throw Error(g(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},m=Symbol.for("react.portal");function v(r,e,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:a==null?null:""+a,children:r,containerInfo:e,implementation:t}}var f=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(r,e){if(r==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}return n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,n.createPortal=function(r,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(g(299));return v(r,e,null,t)},n.flushSync=function(r){var e=f.T,t=i.p;try{if(f.T=null,i.p=2,r)return r()}finally{f.T=e,i.p=t,i.d.f()}},n.preconnect=function(r,e){typeof r=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,i.d.C(r,e))},n.prefetchDNS=function(r){typeof r=="string"&&i.d.D(r)},n.preinit=function(r,e){if(typeof r=="string"&&e&&typeof e.as=="string"){var t=e.as,a=d(t,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,l=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;t==="style"?i.d.S(r,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:s,fetchPriority:l}):t==="script"&&i.d.X(r,{crossOrigin:a,integrity:s,fetchPriority:l,nonce:typeof e.nonce=="string"?e.nonce:void 0})}},n.preinitModule=function(r,e){if(typeof r=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var t=d(e.as,e.crossOrigin);i.d.M(r,{crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&i.d.M(r)},n.preload=function(r,e){if(typeof r=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var t=e.as,a=d(t,e.crossOrigin);i.d.L(r,t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}},n.preloadModule=function(r,e){if(typeof r=="string")if(e){var t=d(e.as,e.crossOrigin);i.d.m(r,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else i.d.m(r)},n.requestFormReset=function(r){i.d.r(r)},n.unstable_batchedUpdates=function(r,e){return r(e)},n.useFormState=function(r,e,t){return f.H.useFormState(r,e,t)},n.useFormStatus=function(){return f.H.useHostTransitionStatus()},n.version="19.0.0",n}var _;function T(){if(_)return y.exports;_=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(g){console.error(g)}}return u(),y.exports=S(),y.exports}export{T as r};
