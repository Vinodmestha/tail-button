(function(g,R){typeof exports=="object"&&typeof module<"u"?module.exports=R(require("react")):typeof define=="function"&&define.amd?define(["react"],R):(g=typeof globalThis<"u"?globalThis:g||self,g["tail-button"]=R(g.React))})(this,function(g){"use strict";var R=document.createElement("style");R.textContent=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.rounded-full{border-radius:9999px}.border{border-width:1px}.bg-blue-400{--tw-bg-opacity: 1;background-color:rgb(96 165 250 / var(--tw-bg-opacity))}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}::-webkit-scrollbar{width:5px;height:3px}::-webkit-scrollbar-track{border-radius:10px}::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#153865}
`,document.head.appendChild(R);var N={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Ce(){if(re)return O;re=1;var P=g,D=Symbol.for("react.element"),B=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,W=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function F(m,f,k){var b,h={},y=null,$=null;k!==void 0&&(y=""+k),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&($=f.ref);for(b in f)x.call(f,b)&&!Y.hasOwnProperty(b)&&(h[b]=f[b]);if(m&&m.defaultProps)for(b in f=m.defaultProps,f)h[b]===void 0&&(h[b]=f[b]);return{$$typeof:D,type:m,key:y,ref:$,props:h,_owner:W.current}}return O.Fragment=B,O.jsx=F,O.jsxs=F,O}var j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function Oe(){return te||(te=1,process.env.NODE_ENV!=="production"&&function(){var P=g,D=Symbol.for("react.element"),B=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),ne=Symbol.iterator,De="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[De];return typeof r=="function"?r:null}var T=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ae("error",e,t)}}function Ae(e,r,t){{var n=T.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Ie=!1,ze=!1,We=!1,Ye=!1,$e=!1,ae;ae=Symbol.for("react.module.reference");function Me(e){return!!(typeof e=="string"||typeof e=="function"||e===x||e===Y||$e||e===W||e===k||e===b||Ye||e===$||Ie||ze||We||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===F||e.$$typeof===m||e.$$typeof===f||e.$$typeof===ae||e.getModuleId!==void 0))}function Le(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function oe(e){return e.displayName||"Context"}function w(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case B:return"Portal";case Y:return"Profiler";case W:return"StrictMode";case k:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return oe(r)+".Consumer";case F:var t=e;return oe(t._context)+".Provider";case f:return Le(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:w(e.type)||"Memo";case y:{var i=e,s=i._payload,o=i._init;try{return w(o(s))}catch{return null}}}return null}var E=Object.assign,A=0,ie,se,ue,le,ce,fe,de;function pe(){}pe.__reactDisabledLog=!0;function Ue(){{if(A===0){ie=console.log,se=console.info,ue=console.warn,le=console.error,ce=console.group,fe=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}A++}}function Ve(){{if(A--,A===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:E({},e,{value:ie}),info:E({},e,{value:se}),warn:E({},e,{value:ue}),error:E({},e,{value:le}),group:E({},e,{value:ce}),groupCollapsed:E({},e,{value:fe}),groupEnd:E({},e,{value:de})})}A<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=T.ReactCurrentDispatcher,q;function M(e,r,t){{if(q===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);q=n&&n[1]||""}return`
`+q+e}}var K=!1,L;{var Ne=typeof WeakMap=="function"?WeakMap:Map;L=new Ne}function be(e,r){if(!e||K)return"";{var t=L.get(e);if(t!==void 0)return t}var n;K=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=J.current,J.current=null,Ue();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(p){n=p}Reflect.construct(e,[],o)}else{try{o.call()}catch(p){n=p}e.call(o.prototype)}}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),d=n.stack.split(`
`),u=a.length-1,l=d.length-1;u>=1&&l>=0&&a[u]!==d[l];)l--;for(;u>=1&&l>=0;u--,l--)if(a[u]!==d[l]){if(u!==1||l!==1)do if(u--,l--,l<0||a[u]!==d[l]){var v=`
`+a[u].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),typeof e=="function"&&L.set(e,v),v}while(u>=1&&l>=0);break}}}finally{K=!1,J.current=s,Ve(),Error.prepareStackTrace=i}var C=e?e.displayName||e.name:"",_=C?M(C):"";return typeof e=="function"&&L.set(e,_),_}function Be(e,r,t){return be(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function U(e,r,t){if(e==null)return"";if(typeof e=="function")return be(e,Je(e));if(typeof e=="string")return M(e);switch(e){case k:return M("Suspense");case b:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return Be(e.render);case h:return U(e.type,r,t);case y:{var n=e,i=n._payload,s=n._init;try{return U(s(i),r,t)}catch{}}}return""}var I=Object.prototype.hasOwnProperty,ve={},we=T.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);we.setExtraStackFrame(t)}else we.setExtraStackFrame(null)}function qe(e,r,t,n,i){{var s=Function.call.bind(I);for(var o in e)if(s(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(u){a=u}a&&!(a instanceof Error)&&(V(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,V(i),c("Failed %s type: %s",t,a.message),V(null))}}}var Ke=Array.isArray;function G(e){return Ke(e)}function Ge(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function ge(e){if(Xe(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ge(e)),he(e)}var z=T.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0},me,ye,X;X={};function Ze(e){if(I.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Qe(e){if(I.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&z.current&&r&&z.current.stateNode!==r){var t=w(z.current.type);X[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(z.current.type),e.ref),X[t]=!0)}}function rr(e,r){{var t=function(){me||(me=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,n,i,s,o){var a={$$typeof:D,type:e,key:r,ref:t,props:o,_owner:s};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ar(e,r,t,n,i){{var s,o={},a=null,d=null;t!==void 0&&(ge(t),a=""+t),Qe(r)&&(ge(r.key),a=""+r.key),Ze(r)&&(d=r.ref,er(r,i));for(s in r)I.call(r,s)&&!He.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps){var u=e.defaultProps;for(s in u)o[s]===void 0&&(o[s]=u[s])}if(a||d){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&rr(o,l),d&&tr(o,l)}return nr(e,a,d,i,n,z.current,o)}}var H=T.ReactCurrentOwner,Ee=T.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===D}function _e(){{if(H.current){var e=w(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){return""}var Re={};function ir(e){{var r=_e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),S(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function ke(e,r){{if(typeof e!="object")return;if(G(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&xe(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var s=i.call(e),o;!(o=s.next()).done;)Q(o.value)&&xe(o.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=w(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=w(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}var Te={};function Se(e,r,t,n,i,s){{var o=Me(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=or();d?a+=d:a+=_e();var u;e===null?u="null":G(e)?u="array":e!==void 0&&e.$$typeof===D?(u="<"+(w(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,a)}var l=ar(e,r,t,i,s);if(l==null)return l;if(o){var v=r.children;if(v!==void 0)if(n)if(G(v)){for(var C=0;C<v.length;C++)ke(v[C],e);Object.freeze&&Object.freeze(v)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(v,e)}if(I.call(r,"key")){var _=w(e),p=Object.keys(r).filter(function(br){return br!=="key"}),ee=p.length>0?"{key: someKey, "+p.join(": ..., ")+": ...}":"{key: someKey}";if(!Te[_+ee]){var pr=p.length>0?"{"+p.join(": ..., ")+": ...}":"{}";c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ee,_,pr,_),Te[_+ee]=!0}}return e===x?ur(l):sr(l),l}}function lr(e,r,t){return Se(e,r,t,!0)}function cr(e,r,t){return Se(e,r,t,!1)}var fr=cr,dr=lr;j.Fragment=x,j.jsx=fr,j.jsxs=dr}()),j}process.env.NODE_ENV==="production"?N.exports=Ce():N.exports=Oe();var je=N.exports;function Pe({label:P}){return je.jsx("button",{className:"border bg-blue-400 text-white py-2 px-5 rounded-full",children:P??"submit"})}return Pe});
