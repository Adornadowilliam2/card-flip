function wS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Lr(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Pv={exports:{}},tu={},Lv={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),AS=Symbol.for("react.portal"),CS=Symbol.for("react.fragment"),bS=Symbol.for("react.strict_mode"),RS=Symbol.for("react.profiler"),PS=Symbol.for("react.provider"),LS=Symbol.for("react.context"),DS=Symbol.for("react.forward_ref"),IS=Symbol.for("react.suspense"),NS=Symbol.for("react.memo"),US=Symbol.for("react.lazy"),Im=Symbol.iterator;function OS(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var Dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iv=Object.assign,Nv={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Dv}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uv(){}Uv.prototype=Rs.prototype;function tp(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||Dv}var np=tp.prototype=new Uv;np.constructor=tp;Iv(np,Rs.prototype);np.isPureReactComponent=!0;var Nm=Array.isArray,Ov=Object.prototype.hasOwnProperty,ip={current:null},Fv={key:!0,ref:!0,__self:!0,__source:!0};function kv(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Ov.call(e,i)&&!Fv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ha,type:t,key:o,ref:s,props:r,_owner:ip.current}}function FS(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function kS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function lf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kS(""+t.key):e.toString(36)}function Ql(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ha:case AS:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+lf(s,0):i,Nm(r)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),Ql(r,e,n,"",function(c){return c})):r!=null&&(rp(r)&&(r=FS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Um,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Nm(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+lf(o,a);s+=Ql(o,e,n,l,r)}else if(l=OS(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+lf(o,a++),s+=Ql(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ol(t,e,n){if(t==null)return t;var i=[],r=0;return Ql(t,i,"","",function(o){return e.call(n,o,r++)}),i}function BS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},Jl={transition:null},zS={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:ip};function Bv(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Rs;Ve.Fragment=CS;Ve.Profiler=RS;Ve.PureComponent=tp;Ve.StrictMode=bS;Ve.Suspense=IS;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS;Ve.act=Bv;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Iv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ip.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ov.call(e,l)&&!Fv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ha,type:t.type,key:r,ref:o,props:i,_owner:s}};Ve.createContext=function(t){return t={$$typeof:LS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PS,_context:t},t.Consumer=t};Ve.createElement=kv;Ve.createFactory=function(t){var e=kv.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:DS,render:t}};Ve.isValidElement=rp;Ve.lazy=function(t){return{$$typeof:US,_payload:{_status:-1,_result:t},_init:BS}};Ve.memo=function(t,e){return{$$typeof:NS,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};Ve.unstable_act=Bv;Ve.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ve.useContext=function(t){return cn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ve.useId=function(){return cn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ve.useRef=function(t){return cn.current.useRef(t)};Ve.useState=function(t){return cn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return cn.current.useTransition()};Ve.version="18.3.1";Lv.exports=Ve;var j=Lv.exports;const si=Rv(j),md=wS({__proto__:null,default:si},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HS=j,VS=Symbol.for("react.element"),GS=Symbol.for("react.fragment"),WS=Object.prototype.hasOwnProperty,$S=HS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XS={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)WS.call(e,i)&&!XS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:VS,type:t,key:o,ref:s,props:r,_owner:$S.current}}tu.Fragment=GS;tu.jsx=zv;tu.jsxs=zv;Pv.exports=tu;var pe=Pv.exports,gd={},Hv={exports:{}},Ln={},Vv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var K=L.length;L.push(Y);e:for(;0<K;){var se=K-1>>>1,Me=L[se];if(0<r(Me,Y))L[se]=Y,L[K]=Me,K=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],K=L.pop();if(K!==Y){L[0]=K;e:for(var se=0,Me=L.length,Be=Me>>>1;se<Be;){var $=2*(se+1)-1,J=L[$],ue=$+1,he=L[ue];if(0>r(J,K))ue<Me&&0>r(he,J)?(L[se]=he,L[ue]=K,se=ue):(L[se]=J,L[$]=K,se=$);else if(ue<Me&&0>r(he,K))L[se]=he,L[ue]=K,se=ue;else break e}}return Y}function r(L,Y){var K=L.sortIndex-Y.sortIndex;return K!==0?K:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=L)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(L){if(_=!1,v(L),!g)if(n(l)!==null)g=!0,F(C);else{var Y=n(c);Y!==null&&W(y,Y.startTime-L)}}function C(L,Y){g=!1,_&&(_=!1,f(P),P=-1),p=!0;var K=d;try{for(v(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||L&&!R());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var Me=se(h.expirationTime<=Y);Y=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&i(l),v(Y)}else i(l);h=n(l)}if(h!==null)var Be=!0;else{var $=n(c);$!==null&&W(y,$.startTime-Y),Be=!1}return Be}finally{h=null,d=K,p=!1}}var A=!1,E=null,P=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function k(){if(E!==null){var L=t.unstable_now();S=L;var Y=!0;try{Y=E(!0,L)}finally{Y?O():(A=!1,E=null)}}else A=!1}var O;if(typeof x=="function")O=function(){x(k)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,X=B.port2;B.port1.onmessage=k,O=function(){X.postMessage(null)}}else O=function(){m(k,0)};function F(L){E=L,A||(A=!0,O())}function W(L,Y){P=m(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,F(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var K=d;d=Y;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return Y()}finally{d=K}},t.unstable_scheduleCallback=function(L,Y,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=K+Me,L={id:u++,callback:Y,priorityLevel:L,startTime:K,expirationTime:Me,sortIndex:-1},K>se?(L.sortIndex=K,e(c,L),n(l)===null&&L===n(c)&&(_?(f(P),P=-1):_=!0,W(y,K-se))):(L.sortIndex=Me,e(l,L),g||p||(g=!0,F(C))),L},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(L){var Y=d;return function(){var K=d;d=Y;try{return L.apply(this,arguments)}finally{d=K}}}})(Gv);Vv.exports=Gv;var jS=Vv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YS=j,Pn=jS;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wv=new Set,va={};function mo(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(va[t]=e,t=0;t<e.length;t++)Wv.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,qS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},Fm={};function KS(t){return vd.call(Fm,t)?!0:vd.call(Om,t)?!1:qS.test(t)?Fm[t]=!0:(Om[t]=!0,!1)}function ZS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QS(t,e,n,i){if(e===null||typeof e>"u"||ZS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(op,sp);Kt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(op,sp);Kt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(op,sp);Kt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function ap(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QS(e,n,r,i)&&(n=null),i||r===null?KS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=YS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),Wo=Symbol.for("react.portal"),$o=Symbol.for("react.fragment"),lp=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),yd=Symbol.for("react.suspense_list"),up=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),jv=Symbol.for("react.offscreen"),km=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,cf;function Js(t){if(cf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cf=e&&e[1]||""}return`
`+cf+t}var uf=!1;function ff(t,e){if(!t||uf)return"";uf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{uf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function JS(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=ff(t.type,!1),t;case 11:return t=ff(t.type.render,!1),t;case 1:return t=ff(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $o:return"Fragment";case Wo:return"Portal";case _d:return"Profiler";case lp:return"StrictMode";case xd:return"Suspense";case yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xv:return(t.displayName||"Context")+".Consumer";case $v:return(t._context.displayName||"Context")+".Provider";case cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case up:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function eM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tM(t){var e=Yv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=tM(t))}function qv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Yv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Md(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kv(t,e){e=e.checked,e!=null&&ap(t,"checked",e,!1)}function Ed(t,e){Kv(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ea(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function Zv(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,Jv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nM=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){nM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function e_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function t_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=e_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iM=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(iM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=null;function fp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,ss=null,as=null;function Gm(t){if(t=Wa(t)){if(typeof Pd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=su(e),Pd(t.stateNode,t.type,e))}}function n_(t){ss?as?as.push(t):as=[t]:ss=t}function i_(){if(ss){var t=ss,e=as;if(as=ss=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function r_(t,e){return t(e)}function o_(){}var df=!1;function s_(t,e,n){if(df)return t(e,n);df=!0;try{return r_(t,e,n)}finally{df=!1,(ss!==null||as!==null)&&(o_(),i_())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ld=!1;if(Wi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Ld=!1}function rM(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var sa=!1,Mc=null,Ec=!1,Dd=null,oM={onError:function(t){sa=!0,Mc=t}};function sM(t,e,n,i,r,o,s,a,l){sa=!1,Mc=null,rM.apply(oM,arguments)}function aM(t,e,n,i,r,o,s,a,l){if(sM.apply(this,arguments),sa){if(sa){var c=Mc;sa=!1,Mc=null}else throw Error(ne(198));Ec||(Ec=!0,Dd=c)}}function go(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(go(t)!==t)throw Error(ne(188))}function lM(t){var e=t.alternate;if(!e){if(e=go(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Wm(r),t;if(o===i)return Wm(r),e;o=o.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function l_(t){return t=lM(t),t!==null?c_(t):null}function c_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c_(t);if(e!==null)return e;t=t.sibling}return null}var u_=Pn.unstable_scheduleCallback,$m=Pn.unstable_cancelCallback,cM=Pn.unstable_shouldYield,uM=Pn.unstable_requestPaint,At=Pn.unstable_now,fM=Pn.unstable_getCurrentPriorityLevel,dp=Pn.unstable_ImmediatePriority,f_=Pn.unstable_UserBlockingPriority,Tc=Pn.unstable_NormalPriority,dM=Pn.unstable_LowPriority,d_=Pn.unstable_IdlePriority,nu=null,Ei=null;function hM(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:gM,pM=Math.log,mM=Math.LN2;function gM(t){return t>>>=0,t===0?32:31-(pM(t)/mM|0)|0}var cl=64,ul=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ta(a):(o&=s,o!==0&&(i=ta(o)))}else s=n&~r,s!==0?i=ta(s):o!==0&&(i=ta(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function vM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _M(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-li(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=vM(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h_(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function hf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function xM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function p_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m_,pp,g_,v_,__,Nd=!1,fl=[],gr=null,vr=null,_r=null,ya=new Map,Sa=new Map,ur=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Bs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&pp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function SM(t,e,n,i,r){switch(e){case"focusin":return gr=Bs(gr,t,e,n,i,r),!0;case"dragenter":return vr=Bs(vr,t,e,n,i,r),!0;case"mouseover":return _r=Bs(_r,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ya.set(o,Bs(ya.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Sa.set(o,Bs(Sa.get(o)||null,t,e,n,i,r)),!0}return!1}function x_(t){var e=Zr(t.target);if(e!==null){var n=go(e);if(n!==null){if(e=n.tag,e===13){if(e=a_(n),e!==null){t.blockedOn=e,__(t.priority,function(){g_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Rd=i,n.target.dispatchEvent(i),Rd=null}else return e=Wa(n),e!==null&&pp(e),t.blockedOn=n,!1;e.shift()}return!0}function jm(t,e,n){ec(t)&&n.delete(e)}function MM(){Nd=!1,gr!==null&&ec(gr)&&(gr=null),vr!==null&&ec(vr)&&(vr=null),_r!==null&&ec(_r)&&(_r=null),ya.forEach(jm),Sa.forEach(jm)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,MM)))}function Ma(t){function e(r){return zs(r,t)}if(0<fl.length){zs(fl[0],t);for(var n=1;n<fl.length;n++){var i=fl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&zs(gr,t),vr!==null&&zs(vr,t),_r!==null&&zs(_r,t),ya.forEach(e),Sa.forEach(e),n=0;n<ur.length;n++)i=ur[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)x_(n),n.blockedOn===null&&ur.shift()}var ls=Zi.ReactCurrentBatchConfig,Ac=!0;function EM(t,e,n,i){var r=it,o=ls.transition;ls.transition=null;try{it=1,mp(t,e,n,i)}finally{it=r,ls.transition=o}}function TM(t,e,n,i){var r=it,o=ls.transition;ls.transition=null;try{it=4,mp(t,e,n,i)}finally{it=r,ls.transition=o}}function mp(t,e,n,i){if(Ac){var r=Ud(t,e,n,i);if(r===null)Ef(t,e,i,Cc,n),Xm(t,i);else if(SM(r,t,e,n,i))i.stopPropagation();else if(Xm(t,i),e&4&&-1<yM.indexOf(t)){for(;r!==null;){var o=Wa(r);if(o!==null&&m_(o),o=Ud(t,e,n,i),o===null&&Ef(t,e,i,Cc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Ef(t,e,i,null,n)}}var Cc=null;function Ud(t,e,n,i){if(Cc=null,t=fp(i),t=Zr(t),t!==null)if(e=go(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fM()){case dp:return 1;case f_:return 4;case Tc:case dM:return 16;case d_:return 536870912;default:return 16}default:return 16}}var pr=null,gp=null,tc=null;function S_(){if(tc)return tc;var t,e=gp,n=e.length,i,r="value"in pr?pr.value:pr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return tc=r.slice(t,1<i?1-i:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function Ym(){return!1}function Dn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?dl:Ym,this.isPropagationStopped=Ym,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vp=Dn(Ps),Ga=vt({},Ps,{view:0,detail:0}),wM=Dn(Ga),pf,mf,Hs,iu=vt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(pf=t.screenX-Hs.screenX,mf=t.screenY-Hs.screenY):mf=pf=0,Hs=t),pf)},movementY:function(t){return"movementY"in t?t.movementY:mf}}),qm=Dn(iu),AM=vt({},iu,{dataTransfer:0}),CM=Dn(AM),bM=vt({},Ga,{relatedTarget:0}),gf=Dn(bM),RM=vt({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),PM=Dn(RM),LM=vt({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DM=Dn(LM),IM=vt({},Ps,{data:0}),Km=Dn(IM),NM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OM[t])?!!e[t]:!1}function _p(){return FM}var kM=vt({},Ga,{key:function(t){if(t.key){var e=NM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_p,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BM=Dn(kM),zM=vt({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Dn(zM),HM=vt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_p}),VM=Dn(HM),GM=vt({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),WM=Dn(GM),$M=vt({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XM=Dn($M),jM=[9,13,27,32],xp=Wi&&"CompositionEvent"in window,aa=null;Wi&&"documentMode"in document&&(aa=document.documentMode);var YM=Wi&&"TextEvent"in window&&!aa,M_=Wi&&(!xp||aa&&8<aa&&11>=aa),Qm=" ",Jm=!1;function E_(t,e){switch(t){case"keyup":return jM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xo=!1;function qM(t,e){switch(t){case"compositionend":return T_(e);case"keypress":return e.which!==32?null:(Jm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Jm?null:t;default:return null}}function KM(t,e){if(Xo)return t==="compositionend"||!xp&&E_(t,e)?(t=S_(),tc=gp=pr=null,Xo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M_&&e.locale!=="ko"?null:e.data;default:return null}}var ZM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZM[t.type]:e==="textarea"}function w_(t,e,n,i){n_(i),e=bc(e,"onChange"),0<e.length&&(n=new vp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var la=null,Ea=null;function QM(t){O_(t,0)}function ru(t){var e=qo(t);if(qv(e))return t}function JM(t,e){if(t==="change")return e}var A_=!1;if(Wi){var vf;if(Wi){var _f="oninput"in document;if(!_f){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),_f=typeof tg.oninput=="function"}vf=_f}else vf=!1;A_=vf&&(!document.documentMode||9<document.documentMode)}function ng(){la&&(la.detachEvent("onpropertychange",C_),Ea=la=null)}function C_(t){if(t.propertyName==="value"&&ru(Ea)){var e=[];w_(e,Ea,t,fp(t)),s_(QM,e)}}function eE(t,e,n){t==="focusin"?(ng(),la=e,Ea=n,la.attachEvent("onpropertychange",C_)):t==="focusout"&&ng()}function tE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(Ea)}function nE(t,e){if(t==="click")return ru(e)}function iE(t,e){if(t==="input"||t==="change")return ru(e)}function rE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:rE;function Ta(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vd.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rg(t,e){var n=ig(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R_(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oE(t){var e=R_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(i!==null&&yp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=rg(n,o);var s=rg(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sE=Wi&&"documentMode"in document&&11>=document.documentMode,jo=null,Od=null,ca=null,Fd=!1;function og(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||jo==null||jo!==Sc(i)||(i=jo,"selectionStart"in i&&yp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Ta(ca,i)||(ca=i,i=bc(Od,"onSelect"),0<i.length&&(e=new vp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jo)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yo={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},xf={},P_={};Wi&&(P_=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function ou(t){if(xf[t])return xf[t];if(!Yo[t])return t;var e=Yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P_)return xf[t]=e[n];return t}var L_=ou("animationend"),D_=ou("animationiteration"),I_=ou("animationstart"),N_=ou("transitionend"),U_=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){U_.set(t,e),mo(e,[t])}for(var yf=0;yf<sg.length;yf++){var Sf=sg[yf],aE=Sf.toLowerCase(),lE=Sf[0].toUpperCase()+Sf.slice(1);Dr(aE,"on"+lE)}Dr(L_,"onAnimationEnd");Dr(D_,"onAnimationIteration");Dr(I_,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(N_,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mo("onBeforeInput",["compositionend","keypress","textInput","paste"]);mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cE=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function ag(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,aM(i,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ag(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ag(r,a,c),o=l}}}if(Ec)throw t=Dd,Ec=!1,Dd=null,t}function lt(t,e){var n=e[Vd];n===void 0&&(n=e[Vd]=new Set);var i=t+"__bubble";n.has(i)||(F_(e,t,2,!1),n.add(i))}function Mf(t,e,n){var i=0;e&&(i|=4),F_(n,t,i,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[pl]){t[pl]=!0,Wv.forEach(function(n){n!=="selectionchange"&&(cE.has(n)||Mf(n,!1,t),Mf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Mf("selectionchange",!1,e))}}function F_(t,e,n,i){switch(y_(e)){case 1:var r=EM;break;case 4:r=TM;break;default:r=mp}n=r.bind(null,e,n,t),r=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ef(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Zr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}s_(function(){var c=o,u=fp(n),h=[];e:{var d=U_.get(t);if(d!==void 0){var p=vp,g=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":p=BM;break;case"focusin":g="focus",p=gf;break;case"focusout":g="blur",p=gf;break;case"beforeblur":case"afterblur":p=gf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=CM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=VM;break;case L_:case D_:case I_:p=PM;break;case N_:p=WM;break;case"scroll":p=wM;break;case"wheel":p=XM;break;case"copy":case"cut":case"paste":p=DM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zm}var _=(e&4)!==0,m=!_&&t==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var x=c,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=xa(x,f),y!=null&&_.push(Aa(x,y,v)))),m)break;x=x.return}0<_.length&&(d=new p(d,g,null,n,u),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Rd&&(g=n.relatedTarget||n.fromElement)&&(Zr(g)||g[$i]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Zr(g):null,g!==null&&(m=go(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=qm,y="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Zm,y="onPointerLeave",f="onPointerEnter",x="pointer"),m=p==null?d:qo(p),v=g==null?d:qo(g),d=new _(y,x+"leave",p,n,u),d.target=m,d.relatedTarget=v,y=null,Zr(u)===c&&(_=new _(f,x+"enter",g,n,u),_.target=v,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,f=g,x=0,v=_;v;v=_o(v))x++;for(v=0,y=f;y;y=_o(y))v++;for(;0<x-v;)_=_o(_),x--;for(;0<v-x;)f=_o(f),v--;for(;x--;){if(_===f||f!==null&&_===f.alternate)break t;_=_o(_),f=_o(f)}_=null}else _=null;p!==null&&lg(h,d,p,_,!1),g!==null&&m!==null&&lg(h,m,g,_,!0)}}e:{if(d=c?qo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=JM;else if(eg(d))if(A_)C=iE;else{C=tE;var A=eE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=nE);if(C&&(C=C(t,c))){w_(h,C,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Td(d,"number",d.value)}switch(A=c?qo(c):window,t){case"focusin":(eg(A)||A.contentEditable==="true")&&(jo=A,Od=c,ca=null);break;case"focusout":ca=Od=jo=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,og(h,n,u);break;case"selectionchange":if(sE)break;case"keydown":case"keyup":og(h,n,u)}var E;if(xp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xo?E_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(M_&&n.locale!=="ko"&&(Xo||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xo&&(E=S_()):(pr=u,gp="value"in pr?pr.value:pr.textContent,Xo=!0)),A=bc(c,P),0<A.length&&(P=new Km(P,t,null,n,u),h.push({event:P,listeners:A}),E?P.data=E:(E=T_(n),E!==null&&(P.data=E)))),(E=YM?qM(t,n):KM(t,n))&&(c=bc(c,"onBeforeInput"),0<c.length&&(u=new Km("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=E))}O_(h,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=xa(t,n),o!=null&&i.unshift(Aa(t,o,r)),o=xa(t,e),o!=null&&i.push(Aa(t,o,r))),t=t.return}return i}function _o(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=xa(n,o),l!=null&&s.unshift(Aa(n,l,a))):r||(l=xa(n,o),l!=null&&s.push(Aa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var uE=/\r\n?/g,fE=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(uE,`
`).replace(fE,"")}function ml(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(ne(425))}function Rc(){}var kd=null,Bd=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,hE=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(pE)}:Hd;function pE(t){setTimeout(function(){throw t})}function Tf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Si="__reactFiber$"+Ls,Ca="__reactProps$"+Ls,$i="__reactContainer$"+Ls,Vd="__reactEvents$"+Ls,mE="__reactListeners$"+Ls,gE="__reactHandles$"+Ls;function Zr(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fg(t);t!==null;){if(n=t[Si])return n;t=fg(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[Si]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function su(t){return t[Ca]||null}var Gd=[],Ko=-1;function Ir(t){return{current:t}}function ft(t){0>Ko||(t.current=Gd[Ko],Gd[Ko]=null,Ko--)}function at(t,e){Ko++,Gd[Ko]=t.current,t.current=e}var br={},rn=Ir(br),mn=Ir(!1),so=br;function vs(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Pc(){ft(mn),ft(rn)}function dg(t,e,n){if(rn.current!==br)throw Error(ne(168));at(rn,e),at(mn,n)}function k_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,eM(t)||"Unknown",r));return vt({},n,i)}function Lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,so=rn.current,at(rn,t),at(mn,mn.current),!0}function hg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=k_(t,e,so),i.__reactInternalMemoizedMergedChildContext=t,ft(mn),ft(rn),at(rn,t)):ft(mn),at(mn,n)}var Oi=null,au=!1,wf=!1;function B_(t){Oi===null?Oi=[t]:Oi.push(t)}function vE(t){au=!0,B_(t)}function Nr(){if(!wf&&Oi!==null){wf=!0;var t=0,e=it;try{var n=Oi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,au=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),u_(dp,Nr),r}finally{it=e,wf=!1}}return null}var Zo=[],Qo=0,Dc=null,Ic=0,kn=[],Bn=0,ao=null,ki=1,Bi="";function Gr(t,e){Zo[Qo++]=Ic,Zo[Qo++]=Dc,Dc=t,Ic=e}function z_(t,e,n){kn[Bn++]=ki,kn[Bn++]=Bi,kn[Bn++]=ao,ao=t;var i=ki;t=Bi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var o=32-li(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ki=1<<32-li(e)+r|n<<r|i,Bi=o+t}else ki=1<<o|n<<r|i,Bi=t}function Sp(t){t.return!==null&&(Gr(t,1),z_(t,1,0))}function Mp(t){for(;t===Dc;)Dc=Zo[--Qo],Zo[Qo]=null,Ic=Zo[--Qo],Zo[Qo]=null;for(;t===ao;)ao=kn[--Bn],kn[Bn]=null,Bi=kn[--Bn],kn[Bn]=null,ki=kn[--Bn],kn[Bn]=null}var bn=null,Cn=null,ht=!1,ri=null;function H_(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Cn=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ao!==null?{id:ki,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Cn=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(ht){var e=Cn;if(e){var n=e;if(!pg(t,e)){if(Wd(t))throw Error(ne(418));e=xr(n.nextSibling);var i=bn;e&&pg(t,e)?H_(i,n):(t.flags=t.flags&-4097|2,ht=!1,bn=t)}}else{if(Wd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ht=!1,bn=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function gl(t){if(t!==bn)return!1;if(!ht)return mg(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=Cn)){if(Wd(t))throw V_(),Error(ne(418));for(;e;)H_(t,e),e=xr(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=bn?xr(t.stateNode.nextSibling):null;return!0}function V_(){for(var t=Cn;t;)t=xr(t.nextSibling)}function _s(){Cn=bn=null,ht=!1}function Ep(t){ri===null?ri=[t]:ri.push(t)}var _E=Zi.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function G_(t){function e(f,x){if(t){var v=f.deletions;v===null?(f.deletions=[x],f.flags|=16):v.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=Er(f,x),f.index=0,f.sibling=null,f}function o(f,x,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<x?(f.flags|=2,x):v):(f.flags|=2,x)):(f.flags|=1048576,x)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,v,y){return x===null||x.tag!==6?(x=Df(v,f.mode,y),x.return=f,x):(x=r(x,v),x.return=f,x)}function l(f,x,v,y){var C=v.type;return C===$o?u(f,x,v.props.children,y,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&gg(C)===x.type)?(y=r(x,v.props),y.ref=Vs(f,x,v),y.return=f,y):(y=cc(v.type,v.key,v.props,null,f.mode,y),y.ref=Vs(f,x,v),y.return=f,y)}function c(f,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=If(v,f.mode,y),x.return=f,x):(x=r(x,v.children||[]),x.return=f,x)}function u(f,x,v,y,C){return x===null||x.tag!==7?(x=ro(v,f.mode,y,C),x.return=f,x):(x=r(x,v),x.return=f,x)}function h(f,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Df(""+x,f.mode,v),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case sl:return v=cc(x.type,x.key,x.props,null,f.mode,v),v.ref=Vs(f,null,x),v.return=f,v;case Wo:return x=If(x,f.mode,v),x.return=f,x;case lr:var y=x._init;return h(f,y(x._payload),v)}if(ea(x)||Fs(x))return x=ro(x,f.mode,v,null),x.return=f,x;vl(f,x)}return null}function d(f,x,v,y){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(f,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sl:return v.key===C?l(f,x,v,y):null;case Wo:return v.key===C?c(f,x,v,y):null;case lr:return C=v._init,d(f,x,C(v._payload),y)}if(ea(v)||Fs(v))return C!==null?null:u(f,x,v,y,null);vl(f,v)}return null}function p(f,x,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(x,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sl:return f=f.get(y.key===null?v:y.key)||null,l(x,f,y,C);case Wo:return f=f.get(y.key===null?v:y.key)||null,c(x,f,y,C);case lr:var A=y._init;return p(f,x,v,A(y._payload),C)}if(ea(y)||Fs(y))return f=f.get(v)||null,u(x,f,y,C,null);vl(x,y)}return null}function g(f,x,v,y){for(var C=null,A=null,E=x,P=x=0,w=null;E!==null&&P<v.length;P++){E.index>P?(w=E,E=null):w=E.sibling;var S=d(f,E,v[P],y);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(f,E),x=o(S,x,P),A===null?C=S:A.sibling=S,A=S,E=w}if(P===v.length)return n(f,E),ht&&Gr(f,P),C;if(E===null){for(;P<v.length;P++)E=h(f,v[P],y),E!==null&&(x=o(E,x,P),A===null?C=E:A.sibling=E,A=E);return ht&&Gr(f,P),C}for(E=i(f,E);P<v.length;P++)w=p(E,f,P,v[P],y),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?P:w.key),x=o(w,x,P),A===null?C=w:A.sibling=w,A=w);return t&&E.forEach(function(R){return e(f,R)}),ht&&Gr(f,P),C}function _(f,x,v,y){var C=Fs(v);if(typeof C!="function")throw Error(ne(150));if(v=C.call(v),v==null)throw Error(ne(151));for(var A=C=null,E=x,P=x=0,w=null,S=v.next();E!==null&&!S.done;P++,S=v.next()){E.index>P?(w=E,E=null):w=E.sibling;var R=d(f,E,S.value,y);if(R===null){E===null&&(E=w);break}t&&E&&R.alternate===null&&e(f,E),x=o(R,x,P),A===null?C=R:A.sibling=R,A=R,E=w}if(S.done)return n(f,E),ht&&Gr(f,P),C;if(E===null){for(;!S.done;P++,S=v.next())S=h(f,S.value,y),S!==null&&(x=o(S,x,P),A===null?C=S:A.sibling=S,A=S);return ht&&Gr(f,P),C}for(E=i(f,E);!S.done;P++,S=v.next())S=p(E,f,P,S.value,y),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?P:S.key),x=o(S,x,P),A===null?C=S:A.sibling=S,A=S);return t&&E.forEach(function(k){return e(f,k)}),ht&&Gr(f,P),C}function m(f,x,v,y){if(typeof v=="object"&&v!==null&&v.type===$o&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case sl:e:{for(var C=v.key,A=x;A!==null;){if(A.key===C){if(C=v.type,C===$o){if(A.tag===7){n(f,A.sibling),x=r(A,v.props.children),x.return=f,f=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&gg(C)===A.type){n(f,A.sibling),x=r(A,v.props),x.ref=Vs(f,A,v),x.return=f,f=x;break e}n(f,A);break}else e(f,A);A=A.sibling}v.type===$o?(x=ro(v.props.children,f.mode,y,v.key),x.return=f,f=x):(y=cc(v.type,v.key,v.props,null,f.mode,y),y.ref=Vs(f,x,v),y.return=f,f=y)}return s(f);case Wo:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(f,x.sibling),x=r(x,v.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=If(v,f.mode,y),x.return=f,f=x}return s(f);case lr:return A=v._init,m(f,x,A(v._payload),y)}if(ea(v))return g(f,x,v,y);if(Fs(v))return _(f,x,v,y);vl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,v),x.return=f,f=x):(n(f,x),x=Df(v,f.mode,y),x.return=f,f=x),s(f)):n(f,x)}return m}var xs=G_(!0),W_=G_(!1),Nc=Ir(null),Uc=null,Jo=null,Tp=null;function wp(){Tp=Jo=Uc=null}function Ap(t){var e=Nc.current;ft(Nc),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){Uc=t,Tp=Jo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Tp!==t)if(t={context:t,memoizedValue:e,next:null},Jo===null){if(Uc===null)throw Error(ne(308));Jo=t,Uc.dependencies={lanes:0,firstContext:t}}else Jo=Jo.next=t;return e}var Qr=null;function Cp(t){Qr===null?Qr=[t]:Qr.push(t)}function $_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Cp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hp(t,n)}}function vg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oc(t,e,n,i){var r=t.updateQueue;cr=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,u=c=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=vt({},h,d);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);co|=s,t.lanes=s,t.memoizedState=h}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var $a={},Ti=Ir($a),ba=Ir($a),Ra=Ir($a);function Jr(t){if(t===$a)throw Error(ne(174));return t}function Rp(t,e){switch(at(Ra,e),at(ba,t),at(Ti,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}ft(Ti),at(Ti,e)}function ys(){ft(Ti),ft(ba),ft(Ra)}function j_(t){Jr(Ra.current);var e=Jr(Ti.current),n=Ad(e,t.type);e!==n&&(at(ba,t),at(Ti,n))}function Pp(t){ba.current===t&&(ft(Ti),ft(ba))}var mt=Ir(0);function Fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Af=[];function Lp(){for(var t=0;t<Af.length;t++)Af[t]._workInProgressVersionPrimary=null;Af.length=0}var rc=Zi.ReactCurrentDispatcher,Cf=Zi.ReactCurrentBatchConfig,lo=0,gt=null,Ut=null,zt=null,kc=!1,ua=!1,Pa=0,xE=0;function Zt(){throw Error(ne(321))}function Dp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function Ip(t,e,n,i,r,o){if(lo=o,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rc.current=t===null||t.memoizedState===null?EE:TE,t=n(i,r),ua){o=0;do{if(ua=!1,Pa=0,25<=o)throw Error(ne(301));o+=1,zt=Ut=null,e.updateQueue=null,rc.current=wE,t=n(i,r)}while(ua)}if(rc.current=Bc,e=Ut!==null&&Ut.next!==null,lo=0,zt=Ut=gt=null,kc=!1,e)throw Error(ne(300));return t}function Np(){var t=Pa!==0;return Pa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?gt.memoizedState=zt=t:zt=zt.next=t,zt}function jn(){if(Ut===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=zt===null?gt.memoizedState:zt.next;if(e!==null)zt=e,Ut=t;else{if(t===null)throw Error(ne(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},zt===null?gt.memoizedState=zt=t:zt=zt.next=t}return zt}function La(t,e){return typeof e=="function"?e(t):e}function bf(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((lo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,gt.lanes|=u,co|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,ui(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,gt.lanes|=o,co|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rf(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ui(o,e.memoizedState)||(pn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Y_(){}function q_(t,e){var n=gt,i=jn(),r=e(),o=!ui(i.memoizedState,r);if(o&&(i.memoizedState=r,pn=!0),i=i.queue,Up(Q_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Da(9,Z_.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ne(349));lo&30||K_(n,e,r)}return r}function K_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z_(t,e,n,i){e.value=n,e.getSnapshot=i,J_(e)&&ex(t)}function Q_(t,e,n){return n(function(){J_(e)&&ex(t)})}function J_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function ex(t){var e=Xi(t,1);e!==null&&ci(e,t,1,-1)}function xg(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=ME.bind(null,gt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function tx(){return jn().memoizedState}function oc(t,e,n,i){var r=gi();gt.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function lu(t,e,n,i){var r=jn();i=i===void 0?null:i;var o=void 0;if(Ut!==null){var s=Ut.memoizedState;if(o=s.destroy,i!==null&&Dp(i,s.deps)){r.memoizedState=Da(e,n,o,i);return}}gt.flags|=t,r.memoizedState=Da(1|e,n,o,i)}function yg(t,e){return oc(8390656,8,t,e)}function Up(t,e){return lu(2048,8,t,e)}function nx(t,e){return lu(4,2,t,e)}function ix(t,e){return lu(4,4,t,e)}function rx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ox(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,rx.bind(null,e,t),n)}function Op(){}function sx(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ax(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function lx(t,e,n){return lo&21?(ui(n,e)||(n=h_(),gt.lanes|=n,co|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function yE(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Cf.transition;Cf.transition={};try{t(!1),e()}finally{it=n,Cf.transition=i}}function cx(){return jn().memoizedState}function SE(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ux(t))fx(e,n);else if(n=$_(t,e,n,i),n!==null){var r=an();ci(n,t,i,r),dx(n,e,i)}}function ME(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ux(t))fx(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,s)){var l=e.interleaved;l===null?(r.next=r,Cp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$_(t,e,r,i),n!==null&&(r=an(),ci(n,t,i,r),dx(n,e,i))}}function ux(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function fx(t,e){ua=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hp(t,n)}}var Bc={readContext:Xn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},EE={readContext:Xn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,rx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=SE.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:xg,useDebugValue:Op,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=xg(!1),e=t[0];return t=yE.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=gi();if(ht){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Vt===null)throw Error(ne(349));lo&30||K_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,yg(Q_.bind(null,i,o,t),[t]),i.flags|=2048,Da(9,Z_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=gi(),e=Vt.identifierPrefix;if(ht){var n=Bi,i=ki;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TE={readContext:Xn,useCallback:sx,useContext:Xn,useEffect:Up,useImperativeHandle:ox,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:ax,useReducer:bf,useRef:tx,useState:function(){return bf(La)},useDebugValue:Op,useDeferredValue:function(t){var e=jn();return lx(e,Ut.memoizedState,t)},useTransition:function(){var t=bf(La)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Y_,useSyncExternalStore:q_,useId:cx,unstable_isNewReconciler:!1},wE={readContext:Xn,useCallback:sx,useContext:Xn,useEffect:Up,useImperativeHandle:ox,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:ax,useReducer:Rf,useRef:tx,useState:function(){return Rf(La)},useDebugValue:Op,useDeferredValue:function(t){var e=jn();return Ut===null?e.memoizedState=t:lx(e,Ut.memoizedState,t)},useTransition:function(){var t=Rf(La)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Y_,useSyncExternalStore:q_,useId:cx,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?go(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=Mr(t),o=Gi(i,r);o.payload=e,n!=null&&(o.callback=n),e=yr(t,o,r),e!==null&&(ci(e,t,r,i),ic(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=Mr(t),o=Gi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=yr(t,o,r),e!==null&&(ci(e,t,r,i),ic(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=Mr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ci(e,t,i,n),ic(e,t,i))}};function Sg(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,o):!0}function hx(t,e,n){var i=!1,r=br,o=e.contextType;return typeof o=="object"&&o!==null?o=Xn(o):(r=gn(e)?so:rn.current,i=e.contextTypes,o=(i=i!=null)?vs(t,r):br),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Mg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Xn(o):(o=gn(e)?so:rn.current,r.context=vs(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(jd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cu.enqueueReplaceState(r,r.state,null),Oc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=JS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AE=typeof WeakMap=="function"?WeakMap:Map;function px(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hc||(Hc=!0,oh=i),qd(t,e)},n}function mx(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Eg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zE.bind(null,t,e,n),e.then(t,t))}function Tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var CE=Zi.ReactCurrentOwner,pn=!1;function sn(t,e,n,i){e.child=t===null?W_(e,null,n,i):xs(e,t.child,n,i)}function Ag(t,e,n,i,r){n=n.render;var o=e.ref;return cs(e,r),i=Ip(t,e,n,i,o,r),n=Np(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(ht&&n&&Sp(e),e.flags|=1,sn(t,e,i,r),e.child)}function Cg(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Wp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,gx(t,e,o,i,r)):(t=cc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(s,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=Er(o,i),t.ref=e.ref,t.return=e,e.child=t}function gx(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ta(o,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,ji(t,e,r)}return Kd(t,e,n,i,r)}function vx(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ts,wn),wn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(ts,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(ts,wn),wn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(ts,wn),wn|=i;return sn(t,e,r,n),e.child}function _x(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,i,r){var o=gn(n)?so:rn.current;return o=vs(e,o),cs(e,r),n=Ip(t,e,n,i,o,r),i=Np(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(ht&&i&&Sp(e),e.flags|=1,sn(t,e,n,r),e.child)}function bg(t,e,n,i,r){if(gn(n)){var o=!0;Lc(e)}else o=!1;if(cs(e,r),e.stateNode===null)sc(t,e),hx(e,n,i),Yd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=gn(n)?so:rn.current,c=vs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mg(e,s,i,c),cr=!1;var d=e.memoizedState;s.state=d,Oc(e,i,s,r),l=e.memoizedState,a!==i||d!==l||mn.current||cr?(typeof u=="function"&&(jd(e,n,u,i),l=e.memoizedState),(a=cr||Sg(e,n,a,i,d,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,X_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),s.props=c,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=gn(n)?so:rn.current,l=vs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Mg(e,s,i,l),cr=!1,d=e.memoizedState,s.state=d,Oc(e,i,s,r);var g=e.memoizedState;a!==h||d!==g||mn.current||cr?(typeof p=="function"&&(jd(e,n,p,i),g=e.memoizedState),(c=cr||Sg(e,n,c,i,d,g,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Zd(t,e,n,i,o,r)}function Zd(t,e,n,i,r,o){_x(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&hg(e,n,!1),ji(t,e,o);i=e.stateNode,CE.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=xs(e,t.child,null,o),e.child=xs(e,null,a,o)):sn(t,e,a,o),e.memoizedState=i.state,r&&hg(e,n,!0),e.child}function xx(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),Rp(t,e.containerInfo)}function Rg(t,e,n,i,r){return _s(),Ep(r),e.flags|=256,sn(t,e,n,i),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function Jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function yx(t,e,n){var i=e.pendingProps,r=mt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=du(s,i,0,null),t=ro(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Jd(n),e.memoizedState=Qd,t):Fp(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bE(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Er(a,o):(o=ro(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Jd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Qd,i}return o=t.child,t=o.sibling,i=Er(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fp(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,i){return i!==null&&Ep(i),xs(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bE(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Pf(Error(ne(422))),_l(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=du({mode:"visible",children:i.children},r,0,null),o=ro(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&xs(e,t.child,null,s),e.child.memoizedState=Jd(s),e.memoizedState=Qd,o);if(!(e.mode&1))return _l(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ne(419)),i=Pf(o,i,void 0),_l(t,e,s,i)}if(a=(s&t.childLanes)!==0,pn||a){if(i=Vt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Xi(t,r),ci(i,t,r,-1))}return Gp(),i=Pf(Error(ne(421))),_l(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=HE.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Cn=xr(r.nextSibling),bn=e,ht=!0,ri=null,t!==null&&(kn[Bn++]=ki,kn[Bn++]=Bi,kn[Bn++]=ao,ki=t.id,Bi=t.overflow,ao=e),e=Fp(e,i.children),e.flags|=4096,e)}function Pg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xd(t.return,e,n)}function Lf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Sx(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(sn(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pg(t,n,e);else if(t.tag===19)Pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lf(e,!0,n,null,o);break;case"together":Lf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),co|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RE(t,e,n){switch(e.tag){case 3:xx(e),_s();break;case 5:j_(e);break;case 1:gn(e.type)&&Lc(e);break;case 4:Rp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?yx(t,e,n):(at(mt,mt.current&1),t=ji(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,vx(t,e,n)}return ji(t,e,n)}var Mx,eh,Ex,Tx;Mx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};Ex=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Ti.current);var o=null;switch(n){case"input":r=Md(t,r),i=Md(t,i),o=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),o=[];break;case"textarea":r=wd(t,r),i=wd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rc)}Cd(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(va.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(va.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Tx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function PE(t,e,n){var i=e.pendingProps;switch(Mp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return gn(e.type)&&Pc(),Qt(e),null;case 3:return i=e.stateNode,ys(),ft(mn),ft(rn),Lp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(lh(ri),ri=null))),eh(t,e),Qt(e),null;case 5:Pp(e);var r=Jr(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Ex(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Qt(e),null}if(t=Jr(Ti.current),gl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Si]=e,i[Ca]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<na.length;r++)lt(na[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Bm(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":Hm(i,o),lt("invalid",i)}Cd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",""+a]):va.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":al(i),zm(i,o,!0);break;case"textarea":al(i),Vm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Si]=e,t[Ca]=i,Mx(t,e,!1,!1),e.stateNode=t;e:{switch(s=bd(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<na.length;r++)lt(na[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Bm(t,i),r=Md(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Hm(t,i),r=wd(t,i),lt("invalid",t);break;default:r=i}Cd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?t_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jv(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_a(t,l):typeof l=="number"&&_a(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(va.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&ap(t,o,l,s))}switch(n){case"input":al(t),zm(t,i,!1);break;case"textarea":al(t),Vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?os(t,!!i.multiple,o,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Tx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Jr(Ra.current),Jr(Ti.current),gl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(o=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return Qt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Cn!==null&&e.mode&1&&!(e.flags&128))V_(),_s(),e.flags|=98560,o=!1;else if(o=gl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ne(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[Si]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),o=!1}else ri!==null&&(lh(ri),ri=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Ot===0&&(Ot=3):Gp())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return ys(),eh(t,e),t===null&&wa(e.stateNode.containerInfo),Qt(e),null;case 10:return Ap(e.type._context),Qt(e),null;case 17:return gn(e.type)&&Pc(),Qt(e),null;case 19:if(ft(mt),o=e.memoizedState,o===null)return Qt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Gs(o,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Fc(t),s!==null){for(e.flags|=128,Gs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}o.tail!==null&&At()>Ms&&(e.flags|=128,i=!0,Gs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Fc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ht)return Qt(e),null}else 2*At()-o.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,Gs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Vp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function LE(t,e){switch(Mp(e),e.tag){case 1:return gn(e.type)&&Pc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),ft(mn),ft(rn),Lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pp(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return ys(),null;case 10:return Ap(e.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var xl=!1,nn=!1,DE=typeof WeakSet=="function"?WeakSet:Set,_e=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function th(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Lg=!1;function IE(t,e){if(kd=Ac,t=R_(),yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=s),d===o&&++u===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},Ac=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:ni(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=Lg,Lg=!1,g}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&th(e,n,o)}r=r.next}while(r!==i)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wx(t){var e=t.alternate;e!==null&&(t.alternate=null,wx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Ca],delete e[Vd],delete e[mE],delete e[gE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ax(t){return t.tag===5||t.tag===3||t.tag===4}function Dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ax(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rc));else if(i!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var jt=null,ii=!1;function tr(t,e,n){for(n=n.child;n!==null;)Cx(t,e,n),n=n.sibling}function Cx(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:nn||es(n,e);case 6:var i=jt,r=ii;jt=null,tr(t,e,n),jt=i,ii=r,jt!==null&&(ii?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ii?(t=jt,n=n.stateNode,t.nodeType===8?Tf(t.parentNode,n):t.nodeType===1&&Tf(t,n),Ma(t)):Tf(jt,n.stateNode));break;case 4:i=jt,r=ii,jt=n.stateNode.containerInfo,ii=!0,tr(t,e,n),jt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&th(n,e,s),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!nn&&(es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,tr(t,e,n),nn=i):tr(t,e,n);break;default:tr(t,e,n)}}function Ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DE),e.forEach(function(i){var r=VE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ii=!1;break e;case 3:jt=a.stateNode.containerInfo,ii=!0;break e;case 4:jt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(jt===null)throw Error(ne(160));Cx(o,s,r),jt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bx(e,t),e=e.sibling}function bx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),mi(t),i&4){try{fa(3,t,t.return),uu(3,t)}catch(_){Et(t,t.return,_)}try{fa(5,t,t.return)}catch(_){Et(t,t.return,_)}}break;case 1:Qn(e,t),mi(t),i&512&&n!==null&&es(n,n.return);break;case 5:if(Qn(e,t),mi(t),i&512&&n!==null&&es(n,n.return),t.flags&32){var r=t.stateNode;try{_a(r,"")}catch(_){Et(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Kv(r,o),bd(a,s);var c=bd(a,o);for(s=0;s<l.length;s+=2){var u=l[s],h=l[s+1];u==="style"?t_(r,h):u==="dangerouslySetInnerHTML"?Jv(r,h):u==="children"?_a(r,h):ap(r,u,h,c)}switch(a){case"input":Ed(r,o);break;case"textarea":Zv(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?os(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?os(r,!!o.multiple,o.defaultValue,!0):os(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ca]=o}catch(_){Et(t,t.return,_)}}break;case 6:if(Qn(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(_){Et(t,t.return,_)}}break;case 3:if(Qn(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(_){Et(t,t.return,_)}break;case 4:Qn(e,t),mi(t);break;case 13:Qn(e,t),mi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(zp=At())),i&4&&Ig(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||u,Qn(e,t),nn=c):Qn(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(h=_e=u;_e!==null;){switch(d=_e,p=d.child,d.tag){case 0:case 11:case 14:case 15:fa(4,d,d.return);break;case 1:es(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Et(i,n,_)}}break;case 5:es(d,d.return);break;case 22:if(d.memoizedState!==null){Ug(h);continue}}p!==null?(p.return=d,_e=p):Ug(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e_("display",s))}catch(_){Et(t,t.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Et(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,t),mi(t),i&4&&Ig(t);break;case 21:break;default:Qn(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ax(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_a(r,""),i.flags&=-33);var o=Dg(t);rh(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Dg(t);ih(t,a,s);break;default:throw Error(ne(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NE(t,e,n){_e=t,Rx(t)}function Rx(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||xl;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=xl;var c=nn;if(xl=s,(nn=l)&&!c)for(_e=r;_e!==null;)s=_e,l=s.child,s.tag===22&&s.memoizedState!==null?Og(r):l!==null?(l.return=s,_e=l):Og(r);for(;o!==null;)_e=o,Rx(o),o=o.sibling;_e=r,xl=a,nn=c}Ng(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,_e=o):Ng(t)}}function Ng(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&_g(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}nn||e.flags&512&&nh(e)}catch(d){Et(e,e.return,d)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Ug(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Og(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var o=e.return;try{nh(e)}catch(l){Et(e,o,l)}break;case 5:var s=e.return;try{nh(e)}catch(l){Et(e,s,l)}}}catch(l){Et(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var UE=Math.ceil,zc=Zi.ReactCurrentDispatcher,kp=Zi.ReactCurrentOwner,Wn=Zi.ReactCurrentBatchConfig,$e=0,Vt=null,It=null,qt=0,wn=0,ts=Ir(0),Ot=0,Ia=null,co=0,fu=0,Bp=0,da=null,dn=null,zp=0,Ms=1/0,Ui=null,Hc=!1,oh=null,Sr=null,yl=!1,mr=null,Vc=0,ha=0,sh=null,ac=-1,lc=0;function an(){return $e&6?At():ac!==-1?ac:ac=At()}function Mr(t){return t.mode&1?$e&2&&qt!==0?qt&-qt:_E.transition!==null?(lc===0&&(lc=h_()),lc):(t=it,t!==0||(t=window.event,t=t===void 0?16:y_(t.type)),t):1}function ci(t,e,n,i){if(50<ha)throw ha=0,sh=null,Error(ne(185));Va(t,n,i),(!($e&2)||t!==Vt)&&(t===Vt&&(!($e&2)&&(fu|=n),Ot===4&&fr(t,qt)),vn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ms=At()+500,au&&Nr()))}function vn(t,e){var n=t.callbackNode;_M(t,e);var i=wc(t,t===Vt?qt:0);if(i===0)n!==null&&$m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$m(n),e===1)t.tag===0?vE(Fg.bind(null,t)):B_(Fg.bind(null,t)),hE(function(){!($e&6)&&Nr()}),n=null;else{switch(p_(i)){case 1:n=dp;break;case 4:n=f_;break;case 16:n=Tc;break;case 536870912:n=d_;break;default:n=Tc}n=Fx(n,Px.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Px(t,e){if(ac=-1,lc=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=wc(t,t===Vt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gc(t,i);else{e=i;var r=$e;$e|=2;var o=Dx();(Vt!==t||qt!==e)&&(Ui=null,Ms=At()+500,io(t,e));do try{kE();break}catch(a){Lx(t,a)}while(!0);wp(),zc.current=o,$e=r,It!==null?e=0:(Vt=null,qt=0,e=Ot)}if(e!==0){if(e===2&&(r=Id(t),r!==0&&(i=r,e=ah(t,r))),e===1)throw n=Ia,io(t,0),fr(t,i),vn(t,At()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!OE(r)&&(e=Gc(t,i),e===2&&(o=Id(t),o!==0&&(i=o,e=ah(t,o))),e===1))throw n=Ia,io(t,0),fr(t,i),vn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Wr(t,dn,Ui);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=zp+500-At(),10<e)){if(wc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hd(Wr.bind(null,t,dn,Ui),e);break}Wr(t,dn,Ui);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-li(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*UE(i/1960))-i,10<i){t.timeoutHandle=Hd(Wr.bind(null,t,dn,Ui),i);break}Wr(t,dn,Ui);break;case 5:Wr(t,dn,Ui);break;default:throw Error(ne(329))}}}return vn(t,At()),t.callbackNode===n?Px.bind(null,t):null}function ah(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(io(t,e).flags|=256),t=Gc(t,e),t!==2&&(e=dn,dn=n,e!==null&&lh(e)),t}function lh(t){dn===null?dn=t:dn.push.apply(dn,t)}function OE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ui(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Bp,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function Fg(t){if($e&6)throw Error(ne(327));us();var e=wc(t,0);if(!(e&1))return vn(t,At()),null;var n=Gc(t,e);if(t.tag!==0&&n===2){var i=Id(t);i!==0&&(e=i,n=ah(t,i))}if(n===1)throw n=Ia,io(t,0),fr(t,e),vn(t,At()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,dn,Ui),vn(t,At()),null}function Hp(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ms=At()+500,au&&Nr())}}function uo(t){mr!==null&&mr.tag===0&&!($e&6)&&us();var e=$e;$e|=1;var n=Wn.transition,i=it;try{if(Wn.transition=null,it=1,t)return t()}finally{it=i,Wn.transition=n,$e=e,!($e&6)&&Nr()}}function Vp(){wn=ts.current,ft(ts)}function io(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dE(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Mp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pc();break;case 3:ys(),ft(mn),ft(rn),Lp();break;case 5:Pp(i);break;case 4:ys();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:Ap(i.type._context);break;case 22:case 23:Vp()}n=n.return}if(Vt=t,It=t=Er(t.current,null),qt=wn=e,Ot=0,Ia=null,Bp=fu=co=0,dn=da=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Qr=null}return t}function Lx(t,e){do{var n=It;try{if(wp(),rc.current=Bc,kc){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kc=!1}if(lo=0,zt=Ut=gt=null,ua=!1,Pa=0,kp.current=null,n===null||n.return===null){Ot=1,Ia=e,It=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Tg(s);if(p!==null){p.flags&=-257,wg(p,s,a,o,e),p.mode&1&&Eg(o,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Eg(o,c,e),Gp();break e}l=Error(ne(426))}}else if(ht&&a.mode&1){var m=Tg(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),wg(m,s,a,o,e),Ep(Ss(l,a));break e}}o=l=Ss(l,a),Ot!==4&&(Ot=2),da===null?da=[o]:da.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=px(o,l,e);vg(o,f);break e;case 1:a=l;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sr===null||!Sr.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=mx(o,a,e);vg(o,y);break e}}o=o.return}while(o!==null)}Nx(n)}catch(C){e=C,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function Dx(){var t=zc.current;return zc.current=Bc,t===null?Bc:t}function Gp(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Vt===null||!(co&268435455)&&!(fu&268435455)||fr(Vt,qt)}function Gc(t,e){var n=$e;$e|=2;var i=Dx();(Vt!==t||qt!==e)&&(Ui=null,io(t,e));do try{FE();break}catch(r){Lx(t,r)}while(!0);if(wp(),$e=n,zc.current=i,It!==null)throw Error(ne(261));return Vt=null,qt=0,Ot}function FE(){for(;It!==null;)Ix(It)}function kE(){for(;It!==null&&!cM();)Ix(It)}function Ix(t){var e=Ox(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Nx(t):It=e,kp.current=null}function Nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LE(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,It=null;return}}else if(n=PE(n,e,wn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ot===0&&(Ot=5)}function Wr(t,e,n){var i=it,r=Wn.transition;try{Wn.transition=null,it=1,BE(t,e,n,i)}finally{Wn.transition=r,it=i}return null}function BE(t,e,n,i){do us();while(mr!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(xM(t,o),t===Vt&&(It=Vt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,Fx(Tc,function(){return us(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wn.transition,Wn.transition=null;var s=it;it=1;var a=$e;$e|=4,kp.current=null,IE(t,n),bx(n,t),oE(Bd),Ac=!!kd,Bd=kd=null,t.current=n,NE(n),uM(),$e=a,it=s,Wn.transition=o}else t.current=n;if(yl&&(yl=!1,mr=t,Vc=r),o=t.pendingLanes,o===0&&(Sr=null),hM(n.stateNode),vn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hc)throw Hc=!1,t=oh,oh=null,t;return Vc&1&&t.tag!==0&&us(),o=t.pendingLanes,o&1?t===sh?ha++:(ha=0,sh=t):ha=0,Nr(),null}function us(){if(mr!==null){var t=p_(Vc),e=Wn.transition,n=it;try{if(Wn.transition=null,it=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Vc=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,_e=t.current;_e!==null;){var o=_e,s=o.child;if(_e.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:fa(8,u,o)}var h=u.child;if(h!==null)h.return=u,_e=h;else for(;_e!==null;){u=_e;var d=u.sibling,p=u.return;if(wx(u),u===c){_e=null;break}if(d!==null){d.return=p,_e=d;break}_e=p}}}var g=o.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}_e=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_e=s;else e:for(;_e!==null;){if(o=_e,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fa(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_e=f;break e}_e=o.return}}var x=t.current;for(_e=x;_e!==null;){s=_e;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,_e=v;else e:for(s=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(C){Et(a,a.return,C)}if(a===s){_e=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_e=y;break e}_e=a.return}}if($e=r,Nr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(nu,t)}catch{}i=!0}return i}finally{it=n,Wn.transition=e}}return!1}function kg(t,e,n){e=Ss(n,e),e=px(t,e,1),t=yr(t,e,1),e=an(),t!==null&&(Va(t,1,e),vn(t,e))}function Et(t,e,n){if(t.tag===3)kg(t,t,n);else for(;e!==null;){if(e.tag===3){kg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=Ss(n,t),t=mx(e,t,1),e=yr(e,t,1),t=an(),e!==null&&(Va(e,1,t),vn(e,t));break}}e=e.return}}function zE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(qt&n)===n&&(Ot===4||Ot===3&&(qt&130023424)===qt&&500>At()-zp?io(t,0):Bp|=n),vn(t,e)}function Ux(t,e){e===0&&(t.mode&1?(e=ul,ul<<=1,!(ul&130023424)&&(ul=4194304)):e=1);var n=an();t=Xi(t,e),t!==null&&(Va(t,e,n),vn(t,n))}function HE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ux(t,n)}function VE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Ux(t,n)}var Ox;Ox=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,RE(t,e,n);pn=!!(t.flags&131072)}else pn=!1,ht&&e.flags&1048576&&z_(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=vs(e,rn.current);cs(e,n),r=Ip(null,e,i,t,r,n);var o=Np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(o=!0,Lc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bp(e),r.updater=cu,e.stateNode=r,r._reactInternals=e,Yd(e,i,t,n),e=Zd(null,e,i,!0,o,n)):(e.tag=0,ht&&o&&Sp(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=WE(i),t=ni(i,t),r){case 0:e=Kd(null,e,i,t,n);break e;case 1:e=bg(null,e,i,t,n);break e;case 11:e=Ag(null,e,i,t,n);break e;case 14:e=Cg(null,e,i,ni(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Kd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),bg(t,e,i,r,n);case 3:e:{if(xx(e),t===null)throw Error(ne(387));i=e.pendingProps,o=e.memoizedState,r=o.element,X_(t,e),Oc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ss(Error(ne(423)),e),e=Rg(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(ne(424)),e),e=Rg(t,e,i,n,r);break e}else for(Cn=xr(e.stateNode.containerInfo.firstChild),bn=e,ht=!0,ri=null,n=W_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=ji(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return j_(e),t===null&&$d(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,zd(i,r)?s=null:o!==null&&zd(i,o)&&(e.flags|=32),_x(t,e),sn(t,e,s,n),e.child;case 6:return t===null&&$d(e),null;case 13:return yx(t,e,n);case 4:return Rp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Ag(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(Nc,i._currentValue),i._currentValue=s,o!==null)if(ui(o.value,s)){if(o.children===r.children&&!mn.current){e=ji(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ne(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=Xn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),Cg(t,e,i,r,n);case 15:return gx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),sc(t,e),e.tag=1,gn(i)?(t=!0,Lc(e)):t=!1,cs(e,n),hx(e,i,r),Yd(e,i,r,n),Zd(null,e,i,!0,t,n);case 19:return Sx(t,e,n);case 22:return vx(t,e,n)}throw Error(ne(156,e.tag))};function Fx(t,e){return u_(t,e)}function GE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new GE(t,e,n,i)}function Wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WE(t){if(typeof t=="function")return Wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cp)return 11;if(t===up)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cc(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Wp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case $o:return ro(n.children,r,o,e);case lp:s=8,r|=8;break;case _d:return t=Vn(12,n,e,r|2),t.elementType=_d,t.lanes=o,t;case xd:return t=Vn(13,n,e,r),t.elementType=xd,t.lanes=o,t;case yd:return t=Vn(19,n,e,r),t.elementType=yd,t.lanes=o,t;case jv:return du(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $v:s=10;break e;case Xv:s=9;break e;case cp:s=11;break e;case up:s=14;break e;case lr:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Vn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function ro(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function du(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=jv,t.lanes=n,t.stateNode={isHidden:!1},t}function Df(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function If(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $E(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hf(0),this.expirationTimes=hf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,i,r,o,s,a,l){return t=new $E(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Vn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(o),t}function XE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function kx(t){if(!t)return br;t=t._reactInternals;e:{if(go(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(gn(n))return k_(t,n,e)}return e}function Bx(t,e,n,i,r,o,s,a,l){return t=$p(n,i,!0,t,r,o,s,a,l),t.context=kx(null),n=t.current,i=an(),r=Mr(n),o=Gi(i,r),o.callback=e??null,yr(n,o,r),t.current.lanes=r,Va(t,r,i),vn(t,i),t}function hu(t,e,n,i){var r=e.current,o=an(),s=Mr(r);return n=kx(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,s),t!==null&&(ci(t,r,s,o),ic(t,r,s)),s}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xp(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function jE(){return null}var zx=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}pu.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));hu(t,e,null,null)};pu.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;uo(function(){hu(null,t,null,null)}),e[$i]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=v_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&x_(t)}};function Yp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function YE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Wc(s);o.call(c)}}var s=Bx(e,i,t,0,null,!1,!1,"",zg);return t._reactRootContainer=s,t[$i]=s.current,wa(t.nodeType===8?t.parentNode:t),uo(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Wc(l);a.call(c)}}var l=$p(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=l,t[$i]=l.current,wa(t.nodeType===8?t.parentNode:t),uo(function(){hu(e,l,n,i)}),l}function gu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Wc(s);a.call(l)}}hu(e,s,t,r)}else s=YE(n,e,t,r,i);return Wc(s)}m_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(hp(e,n|1),vn(e,At()),!($e&6)&&(Ms=At()+500,Nr()))}break;case 13:uo(function(){var i=Xi(t,1);if(i!==null){var r=an();ci(i,t,1,r)}}),Xp(t,1)}};pp=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=an();ci(e,t,134217728,n)}Xp(t,134217728)}};g_=function(t){if(t.tag===13){var e=Mr(t),n=Xi(t,e);if(n!==null){var i=an();ci(n,t,e,i)}Xp(t,e)}};v_=function(){return it};__=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Pd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=su(i);if(!r)throw Error(ne(90));qv(i),Ed(i,r)}}}break;case"textarea":Zv(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};r_=Hp;o_=uo;var qE={usingClientEntryPoint:!1,Events:[Wa,qo,su,n_,i_,Hp]},Ws={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KE={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||jE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{nu=Sl.inject(KE),Ei=Sl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yp(e))throw Error(ne(200));return XE(t,e,null,n)};Ln.createRoot=function(t,e){if(!Yp(t))throw Error(ne(299));var n=!1,i="",r=zx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,wa(t.nodeType===8?t.parentNode:t),new jp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=l_(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return uo(t)};Ln.hydrate=function(t,e,n){if(!mu(e))throw Error(ne(200));return gu(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Yp(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=zx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Bx(e,null,t,1,n??null,r,!1,o,s),t[$i]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pu(e)};Ln.render=function(t,e,n){if(!mu(e))throw Error(ne(200));return gu(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!mu(t))throw Error(ne(40));return t._reactRootContainer?(uo(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Ln.unstable_batchedUpdates=Hp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return gu(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(t){console.error(t)}}Hx(),Hv.exports=Ln;var qp=Hv.exports;const Ml=Rv(qp);var Hg=qp;gd.createRoot=Hg.createRoot,gd.hydrateRoot=Hg.hydrateRoot;const ZE="/card-flip/assets/shiko-B4eB2uEx.png",QE="/card-flip/assets/deerfood-CoPb7_YL.jpg",JE="/card-flip/assets/birdfood-DeKMvvCK.jpg",e1="/card-flip/assets/meatfood-DX1zbO3R.jpg",Na={black:"#000",white:"#fff"},xo={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},yo={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},So={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Mo={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Eo={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},$s={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},t1={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function Ua(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const n1=Object.freeze(Object.defineProperty({__proto__:null,default:Ua},Symbol.toStringTag,{value:"Module"})),Vx="$$material";function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ie.apply(null,arguments)}function wt(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.includes(i))continue;n[i]=t[i]}return n}function Gx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var i1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,r1=Gx(function(t){return i1.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),o1=!1;function s1(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function a1(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var l1=function(){function t(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!o1:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(a1(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=s1(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),tn="-ms-",$c="-moz-",Xe="-webkit-",Wx="comm",Kp="rule",Zp="decl",c1="@import",$x="@keyframes",u1="@layer",f1=Math.abs,vu=String.fromCharCode,d1=Object.assign;function h1(t,e){return Yt(t,0)^45?(((e<<2^Yt(t,0))<<2^Yt(t,1))<<2^Yt(t,2))<<2^Yt(t,3):0}function Xx(t){return t.trim()}function p1(t,e){return(t=e.exec(t))?t[0]:t}function je(t,e,n){return t.replace(e,n)}function ch(t,e){return t.indexOf(e)}function Yt(t,e){return t.charCodeAt(e)|0}function Oa(t,e,n){return t.slice(e,n)}function _i(t){return t.length}function Qp(t){return t.length}function El(t,e){return e.push(t),t}function m1(t,e){return t.map(e).join("")}var _u=1,Es=1,jx=0,yn=0,Dt=0,Ds="";function xu(t,e,n,i,r,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:_u,column:Es,length:s,return:""}}function Xs(t,e){return d1(xu("",null,null,"",null,null,0),t,{length:-t.length},e)}function g1(){return Dt}function v1(){return Dt=yn>0?Yt(Ds,--yn):0,Es--,Dt===10&&(Es=1,_u--),Dt}function Rn(){return Dt=yn<jx?Yt(Ds,yn++):0,Es++,Dt===10&&(Es=1,_u++),Dt}function wi(){return Yt(Ds,yn)}function uc(){return yn}function Xa(t,e){return Oa(Ds,t,e)}function Fa(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yx(t){return _u=Es=1,jx=_i(Ds=t),yn=0,[]}function qx(t){return Ds="",t}function fc(t){return Xx(Xa(yn-1,uh(t===91?t+2:t===40?t+1:t)))}function _1(t){for(;(Dt=wi())&&Dt<33;)Rn();return Fa(t)>2||Fa(Dt)>3?"":" "}function x1(t,e){for(;--e&&Rn()&&!(Dt<48||Dt>102||Dt>57&&Dt<65||Dt>70&&Dt<97););return Xa(t,uc()+(e<6&&wi()==32&&Rn()==32))}function uh(t){for(;Rn();)switch(Dt){case t:return yn;case 34:case 39:t!==34&&t!==39&&uh(Dt);break;case 40:t===41&&uh(t);break;case 92:Rn();break}return yn}function y1(t,e){for(;Rn()&&t+Dt!==57;)if(t+Dt===84&&wi()===47)break;return"/*"+Xa(e,yn-1)+"*"+vu(t===47?t:Rn())}function S1(t){for(;!Fa(wi());)Rn();return Xa(t,yn)}function M1(t){return qx(dc("",null,null,null,[""],t=Yx(t),0,[0],t))}function dc(t,e,n,i,r,o,s,a,l){for(var c=0,u=0,h=s,d=0,p=0,g=0,_=1,m=1,f=1,x=0,v="",y=r,C=o,A=i,E=v;m;)switch(g=x,x=Rn()){case 40:if(g!=108&&Yt(E,h-1)==58){ch(E+=je(fc(x),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=fc(x);break;case 9:case 10:case 13:case 32:E+=_1(g);break;case 92:E+=x1(uc()-1,7);continue;case 47:switch(wi()){case 42:case 47:El(E1(y1(Rn(),uc()),e,n),l);break;default:E+="/"}break;case 123*_:a[c++]=_i(E)*f;case 125*_:case 59:case 0:switch(x){case 0:case 125:m=0;case 59+u:f==-1&&(E=je(E,/\f/g,"")),p>0&&_i(E)-h&&El(p>32?Gg(E+";",i,n,h-1):Gg(je(E," ","")+";",i,n,h-2),l);break;case 59:E+=";";default:if(El(A=Vg(E,e,n,c,u,r,a,v,y=[],C=[],h),o),x===123)if(u===0)dc(E,e,A,A,y,o,h,a,C);else switch(d===99&&Yt(E,3)===110?100:d){case 100:case 108:case 109:case 115:dc(t,A,A,i&&El(Vg(t,A,A,0,0,r,a,v,r,y=[],h),C),r,C,h,a,i?y:C);break;default:dc(E,A,A,A,[""],C,0,a,C)}}c=u=p=0,_=f=1,v=E="",h=s;break;case 58:h=1+_i(E),p=g;default:if(_<1){if(x==123)--_;else if(x==125&&_++==0&&v1()==125)continue}switch(E+=vu(x),x*_){case 38:f=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(_i(E)-1)*f,f=1;break;case 64:wi()===45&&(E+=fc(Rn())),d=wi(),u=h=_i(v=E+=S1(uc())),x++;break;case 45:g===45&&_i(E)==2&&(_=0)}}return o}function Vg(t,e,n,i,r,o,s,a,l,c,u){for(var h=r-1,d=r===0?o:[""],p=Qp(d),g=0,_=0,m=0;g<i;++g)for(var f=0,x=Oa(t,h+1,h=f1(_=s[g])),v=t;f<p;++f)(v=Xx(_>0?d[f]+" "+x:je(x,/&\f/g,d[f])))&&(l[m++]=v);return xu(t,e,n,r===0?Kp:a,l,c,u)}function E1(t,e,n){return xu(t,e,n,Wx,vu(g1()),Oa(t,2,-2),0)}function Gg(t,e,n,i){return xu(t,e,n,Zp,Oa(t,0,i),Oa(t,i+1,-1),i)}function fs(t,e){for(var n="",i=Qp(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function T1(t,e,n,i){switch(t.type){case u1:if(t.children.length)break;case c1:case Zp:return t.return=t.return||t.value;case Wx:return"";case $x:return t.return=t.value+"{"+fs(t.children,i)+"}";case Kp:t.value=t.props.join(",")}return _i(n=fs(t.children,i))?t.return=t.value+"{"+n+"}":""}function w1(t){var e=Qp(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function A1(t){return function(e){e.root||(e=e.return)&&t(e)}}var C1=function(e,n,i){for(var r=0,o=0;r=o,o=wi(),r===38&&o===12&&(n[i]=1),!Fa(o);)Rn();return Xa(e,yn)},b1=function(e,n){var i=-1,r=44;do switch(Fa(r)){case 0:r===38&&wi()===12&&(n[i]=1),e[i]+=C1(yn-1,n,i);break;case 2:e[i]+=fc(r);break;case 4:if(r===44){e[++i]=wi()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=vu(r)}while(r=Rn());return e},R1=function(e,n){return qx(b1(Yx(e),n))},Wg=new WeakMap,P1=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Wg.get(i))&&!r){Wg.set(e,!0);for(var o=[],s=R1(n,o),a=i.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},L1=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Kx(t,e){switch(h1(t,e)){case 5103:return Xe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+t+$c+t+tn+t+t;case 6828:case 4268:return Xe+t+tn+t+t;case 6165:return Xe+t+tn+"flex-"+t+t;case 5187:return Xe+t+je(t,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+tn+"flex-$1$2")+t;case 5443:return Xe+t+tn+"flex-item-"+je(t,/flex-|-self/,"")+t;case 4675:return Xe+t+tn+"flex-line-pack"+je(t,/align-content|flex-|-self/,"")+t;case 5548:return Xe+t+tn+je(t,"shrink","negative")+t;case 5292:return Xe+t+tn+je(t,"basis","preferred-size")+t;case 6060:return Xe+"box-"+je(t,"-grow","")+Xe+t+tn+je(t,"grow","positive")+t;case 4554:return Xe+je(t,/([^-])(transform)/g,"$1"+Xe+"$2")+t;case 6187:return je(je(je(t,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),t,"")+t;case 5495:case 3959:return je(t,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return je(je(t,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+tn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+t+t;case 4095:case 3583:case 4068:case 2532:return je(t,/(.+)-inline(.+)/,Xe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_i(t)-1-e>6)switch(Yt(t,e+1)){case 109:if(Yt(t,e+4)!==45)break;case 102:return je(t,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+$c+(Yt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ch(t,"stretch")?Kx(je(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Yt(t,e+1)!==115)break;case 6444:switch(Yt(t,_i(t)-3-(~ch(t,"!important")&&10))){case 107:return je(t,":",":"+Xe)+t;case 101:return je(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Xe+(Yt(t,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+tn+"$2box$3")+t}break;case 5936:switch(Yt(t,e+11)){case 114:return Xe+t+tn+je(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Xe+t+tn+je(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Xe+t+tn+je(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Xe+t+tn+t+t}return t}var D1=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Zp:e.return=Kx(e.value,e.length);break;case $x:return fs([Xs(e,{value:je(e.value,"@","@"+Xe)})],r);case Kp:if(e.length)return m1(e.props,function(o){switch(p1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fs([Xs(e,{props:[je(o,/:(read-\w+)/,":"+$c+"$1")]})],r);case"::placeholder":return fs([Xs(e,{props:[je(o,/:(plac\w+)/,":"+Xe+"input-$1")]}),Xs(e,{props:[je(o,/:(plac\w+)/,":"+$c+"$1")]}),Xs(e,{props:[je(o,/:(plac\w+)/,tn+"input-$1")]})],r)}return""})}},I1=[D1],Zx=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(_){var m=_.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var r=e.stylisPlugins||I1,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var m=_.getAttribute("data-emotion").split(" "),f=1;f<m.length;f++)o[m[f]]=!0;a.push(_)});var l,c=[P1,L1];{var u,h=[T1,A1(function(_){u.insert(_)})],d=w1(c.concat(r,h)),p=function(m){return fs(M1(m),d)};l=function(m,f,x,v){u=x,p(m?m+"{"+f.styles+"}":f.styles),v&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new l1({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(a),g},Qx={exports:{}},rt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=typeof Symbol=="function"&&Symbol.for,Jp=Gt?Symbol.for("react.element"):60103,em=Gt?Symbol.for("react.portal"):60106,yu=Gt?Symbol.for("react.fragment"):60107,Su=Gt?Symbol.for("react.strict_mode"):60108,Mu=Gt?Symbol.for("react.profiler"):60114,Eu=Gt?Symbol.for("react.provider"):60109,Tu=Gt?Symbol.for("react.context"):60110,tm=Gt?Symbol.for("react.async_mode"):60111,wu=Gt?Symbol.for("react.concurrent_mode"):60111,Au=Gt?Symbol.for("react.forward_ref"):60112,Cu=Gt?Symbol.for("react.suspense"):60113,N1=Gt?Symbol.for("react.suspense_list"):60120,bu=Gt?Symbol.for("react.memo"):60115,Ru=Gt?Symbol.for("react.lazy"):60116,U1=Gt?Symbol.for("react.block"):60121,O1=Gt?Symbol.for("react.fundamental"):60117,F1=Gt?Symbol.for("react.responder"):60118,k1=Gt?Symbol.for("react.scope"):60119;function In(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Jp:switch(t=t.type,t){case tm:case wu:case yu:case Mu:case Su:case Cu:return t;default:switch(t=t&&t.$$typeof,t){case Tu:case Au:case Ru:case bu:case Eu:return t;default:return e}}case em:return e}}}function Jx(t){return In(t)===wu}rt.AsyncMode=tm;rt.ConcurrentMode=wu;rt.ContextConsumer=Tu;rt.ContextProvider=Eu;rt.Element=Jp;rt.ForwardRef=Au;rt.Fragment=yu;rt.Lazy=Ru;rt.Memo=bu;rt.Portal=em;rt.Profiler=Mu;rt.StrictMode=Su;rt.Suspense=Cu;rt.isAsyncMode=function(t){return Jx(t)||In(t)===tm};rt.isConcurrentMode=Jx;rt.isContextConsumer=function(t){return In(t)===Tu};rt.isContextProvider=function(t){return In(t)===Eu};rt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jp};rt.isForwardRef=function(t){return In(t)===Au};rt.isFragment=function(t){return In(t)===yu};rt.isLazy=function(t){return In(t)===Ru};rt.isMemo=function(t){return In(t)===bu};rt.isPortal=function(t){return In(t)===em};rt.isProfiler=function(t){return In(t)===Mu};rt.isStrictMode=function(t){return In(t)===Su};rt.isSuspense=function(t){return In(t)===Cu};rt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===yu||t===wu||t===Mu||t===Su||t===Cu||t===N1||typeof t=="object"&&t!==null&&(t.$$typeof===Ru||t.$$typeof===bu||t.$$typeof===Eu||t.$$typeof===Tu||t.$$typeof===Au||t.$$typeof===O1||t.$$typeof===F1||t.$$typeof===k1||t.$$typeof===U1)};rt.typeOf=In;Qx.exports=rt;var B1=Qx.exports,ey=B1,z1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},H1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ty={};ty[ey.ForwardRef]=z1;ty[ey.Memo]=H1;var V1=!0;function G1(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var ny=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||V1===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},iy=function(e,n,i){ny(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+r:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function W1(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var $1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},X1=!1,j1=/[A-Z]|^ms/g,Y1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ry=function(e){return e.charCodeAt(1)===45},$g=function(e){return e!=null&&typeof e!="boolean"},Nf=Gx(function(t){return ry(t)?t:t.replace(j1,"-$&").toLowerCase()}),Xg=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Y1,function(i,r,o){return xi={name:r,styles:o,next:xi},r})}return $1[e]!==1&&!ry(e)&&typeof n=="number"&&n!==0?n+"px":n},q1="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ka(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return xi={name:r.name,styles:r.styles,next:xi},r.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)xi={name:s.name,styles:s.styles,next:xi},s=s.next;var a=o.styles+";";return a}return K1(t,e,n)}case"function":{if(t!==void 0){var l=xi,c=n(t);return xi=l,ka(t,e,c)}break}}var u=n;if(e==null)return u;var h=e[u];return h!==void 0?h:u}function K1(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=ka(t,e,n[r])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;e!=null&&e[a]!==void 0?i+=o+"{"+e[a]+"}":$g(a)&&(i+=Nf(o)+":"+Xg(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&X1)throw new Error(q1);if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)$g(s[l])&&(i+=Nf(o)+":"+Xg(o,s[l])+";");else{var c=ka(t,e,s);switch(o){case"animation":case"animationName":{i+=Nf(o)+":"+c+";";break}default:i+=o+"{"+c+"}"}}}}return i}var jg=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xi;function nm(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";xi=void 0;var o=t[0];if(o==null||o.raw===void 0)i=!1,r+=ka(n,e,o);else{var s=o;r+=s[0]}for(var a=1;a<t.length;a++)if(r+=ka(n,e,t[a]),i){var l=o;r+=l[a]}jg.lastIndex=0;for(var c="",u;(u=jg.exec(r))!==null;)c+="-"+u[1];var h=W1(r)+c;return{name:h,styles:r,next:xi}}var Z1=function(e){return e()},oy=md.useInsertionEffect?md.useInsertionEffect:!1,Q1=oy||Z1,Yg=oy||j.useLayoutEffect,sy=j.createContext(typeof HTMLElement<"u"?Zx({key:"css"}):null),J1=sy.Provider,ay=function(e){return j.forwardRef(function(n,i){var r=j.useContext(sy);return e(n,r,i)})},Pu=j.createContext({}),Uf={exports:{}},qg;function ly(){return qg||(qg=1,function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(null,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(Uf)),Uf.exports}ly();var eT=ay(function(t,e){var n=t.styles,i=nm([n],void 0,j.useContext(Pu)),r=j.useRef();return Yg(function(){var o=e.key+"-global",s=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+i.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),r.current=[s,a],function(){s.flush()}},[e]),Yg(function(){var o=r.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(i.next!==void 0&&iy(e,i.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}e.insert("",i,s,!1)},[e,i.name]),null});function cy(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return nm(e)}var Lu=function(){var e=cy.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},tT=r1,nT=function(e){return e!=="theme"},Kg=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?tT:nT},Zg=function(e,n,i){var r;if(n){var o=n.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},iT=!1,rT=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return ny(n,i,r),Q1(function(){return iy(n,i,r)}),null},oT=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=Zg(e,n,i),l=a||Kg(r),c=!l("as");return function(){var u=arguments,h=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)h.push.apply(h,u);else{h.push(u[0][0]);for(var d=u.length,p=1;p<d;p++)h.push(u[p],u[0][p])}var g=ay(function(_,m,f){var x=c&&_.as||r,v="",y=[],C=_;if(_.theme==null){C={};for(var A in _)C[A]=_[A];C.theme=j.useContext(Pu)}typeof _.className=="string"?v=G1(m.registered,y,_.className):_.className!=null&&(v=_.className+" ");var E=nm(h.concat(y),m.registered,C);v+=m.key+"-"+E.name,s!==void 0&&(v+=" "+s);var P=c&&a===void 0?Kg(x):l,w={};for(var S in _)c&&S==="as"||P(S)&&(w[S]=_[S]);return w.className=v,f&&(w.ref=f),j.createElement(j.Fragment,null,j.createElement(rT,{cache:m,serialized:E,isStringTag:typeof x=="string"}),j.createElement(x,w))});return g.displayName=o!==void 0?o:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",g.defaultProps=e.defaultProps,g.__emotion_real=g,g.__emotion_base=r,g.__emotion_styles=h,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return s===void 0&&iT?"NO_COMPONENT_SELECTOR":"."+s}}),g.withComponent=function(_,m){return t(_,ie({},n,m,{shouldForwardProp:Zg(g,m,!0)})).apply(void 0,h)},g}},sT=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],fh=oT.bind();sT.forEach(function(t){fh[t]=fh(t)});let dh;typeof document=="object"&&(dh=Zx({key:"css",prepend:!0}));function aT(t){const{injectFirst:e,children:n}=t;return e&&dh?pe.jsx(J1,{value:dh,children:n}):n}function lT(t){return t==null||Object.keys(t).length===0}function cT(t){const{styles:e,defaultTheme:n={}}=t,i=typeof e=="function"?r=>e(lT(r)?n:r):e;return pe.jsx(eT,{styles:i})}function uT(t,e){return fh(t,e)}const fT=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},dT=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:cT,StyledEngineProvider:aT,ThemeContext:Pu,css:cy,default:uT,internal_processStyles:fT,keyframes:Lu},Symbol.toStringTag,{value:"Module"}));function dr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function uy(t){if(!dr(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=uy(t[n])}),e}function Ai(t,e,n={clone:!0}){const i=n.clone?ie({},t):t;return dr(t)&&dr(e)&&Object.keys(e).forEach(r=>{dr(e[r])&&Object.prototype.hasOwnProperty.call(t,r)&&dr(t[r])?i[r]=Ai(t[r],e[r],n):n.clone?i[r]=dr(e[r])?uy(e[r]):e[r]:i[r]=e[r]}),i}const hT=Object.freeze(Object.defineProperty({__proto__:null,default:Ai,isPlainObject:dr},Symbol.toStringTag,{value:"Module"})),pT=["values","unit","step"],mT=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,i)=>n.val-i.val),e.reduce((n,i)=>ie({},n,{[i.key]:i.val}),{})};function fy(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:i=5}=t,r=wt(t,pT),o=mT(e),s=Object.keys(o);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-i/100}${n})`}function c(d,p){const g=s.indexOf(p);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(g!==-1&&typeof e[s[g]]=="number"?e[s[g]]:p)-i/100}${n})`}function u(d){return s.indexOf(d)+1<s.length?c(d,s[s.indexOf(d)+1]):a(d)}function h(d){const p=s.indexOf(d);return p===0?a(s[1]):p===s.length-1?l(s[p]):c(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return ie({keys:s,values:o,up:a,down:l,between:c,only:u,not:h,unit:n},r)}const gT={borderRadius:4};function pa(t,e){return e?Ai(t,e,{clone:!1}):t}const im={xs:0,sm:600,md:900,lg:1200,xl:1536},Qg={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${im[t]}px)`};function Yi(t,e,n){const i=t.theme||{};if(Array.isArray(e)){const o=i.breakpoints||Qg;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=i.breakpoints||Qg;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||im).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function vT(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((i,r)=>{const o=t.up(r);return i[o]={},i},{}))||{}}function _T(t,e){return t.reduce((n,i)=>{const r=n[i];return(!r||Object.keys(r).length===0)&&delete n[i],n},e)}function Tt(t){if(typeof t!="string")throw new Error(Ua(7));return t.charAt(0).toUpperCase()+t.slice(1)}const xT=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"}));function Du(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const i=`vars.${e}`.split(".").reduce((r,o)=>r&&r[o]?r[o]:null,t);if(i!=null)return i}return e.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,t)}function Xc(t,e,n,i=n){let r;return typeof t=="function"?r=t(n):Array.isArray(t)?r=t[n]||i:r=Du(t,n)||i,e&&(r=e(r,i,t)),r}function Ct(t){const{prop:e,cssProperty:n=t.prop,themeKey:i,transform:r}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,c=Du(l,i)||{};return Yi(s,a,h=>{let d=Xc(c,r,h);return h===d&&typeof h=="string"&&(d=Xc(c,r,`${e}${h==="default"?"":Tt(h)}`,h)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[e],o}function yT(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const ST={m:"margin",p:"padding"},MT={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Jg={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},ET=yT(t=>{if(t.length>2)if(Jg[t])t=Jg[t];else return[t];const[e,n]=t.split(""),i=ST[e],r=MT[n]||"";return Array.isArray(r)?r.map(o=>i+o):[i+r]}),rm=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],om=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...rm,...om];function ja(t,e,n,i){var r;const o=(r=Du(t,e,!1))!=null?r:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function dy(t){return ja(t,"spacing",8)}function Ya(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),i=t(n);return e>=0?i:typeof i=="number"?-i:`-${i}`}function TT(t,e){return n=>t.reduce((i,r)=>(i[r]=Ya(e,n),i),{})}function wT(t,e,n,i){if(e.indexOf(n)===-1)return null;const r=ET(n),o=TT(r,i),s=t[n];return Yi(t,s,o)}function hy(t,e){const n=dy(t.theme);return Object.keys(t).map(i=>wT(t,e,i,n)).reduce(pa,{})}function St(t){return hy(t,rm)}St.propTypes={};St.filterProps=rm;function Mt(t){return hy(t,om)}Mt.propTypes={};Mt.filterProps=om;function AT(t=8){if(t.mui)return t;const e=dy({spacing:t}),n=(...i)=>(i.length===0?[1]:i).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Iu(...t){const e=t.reduce((i,r)=>(r.filterProps.forEach(o=>{i[o]=r}),i),{}),n=i=>Object.keys(i).reduce((r,o)=>e[o]?pa(r,e[o](i)):r,{});return n.propTypes={},n.filterProps=t.reduce((i,r)=>i.concat(r.filterProps),[]),n}function zn(t){return typeof t!="number"?t:`${t}px solid`}function qn(t,e){return Ct({prop:t,themeKey:"borders",transform:e})}const CT=qn("border",zn),bT=qn("borderTop",zn),RT=qn("borderRight",zn),PT=qn("borderBottom",zn),LT=qn("borderLeft",zn),DT=qn("borderColor"),IT=qn("borderTopColor"),NT=qn("borderRightColor"),UT=qn("borderBottomColor"),OT=qn("borderLeftColor"),FT=qn("outline",zn),kT=qn("outlineColor"),Nu=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=ja(t.theme,"shape.borderRadius",4),n=i=>({borderRadius:Ya(e,i)});return Yi(t,t.borderRadius,n)}return null};Nu.propTypes={};Nu.filterProps=["borderRadius"];Iu(CT,bT,RT,PT,LT,DT,IT,NT,UT,OT,Nu,FT,kT);const Uu=t=>{if(t.gap!==void 0&&t.gap!==null){const e=ja(t.theme,"spacing",8),n=i=>({gap:Ya(e,i)});return Yi(t,t.gap,n)}return null};Uu.propTypes={};Uu.filterProps=["gap"];const Ou=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=ja(t.theme,"spacing",8),n=i=>({columnGap:Ya(e,i)});return Yi(t,t.columnGap,n)}return null};Ou.propTypes={};Ou.filterProps=["columnGap"];const Fu=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=ja(t.theme,"spacing",8),n=i=>({rowGap:Ya(e,i)});return Yi(t,t.rowGap,n)}return null};Fu.propTypes={};Fu.filterProps=["rowGap"];const BT=Ct({prop:"gridColumn"}),zT=Ct({prop:"gridRow"}),HT=Ct({prop:"gridAutoFlow"}),VT=Ct({prop:"gridAutoColumns"}),GT=Ct({prop:"gridAutoRows"}),WT=Ct({prop:"gridTemplateColumns"}),$T=Ct({prop:"gridTemplateRows"}),XT=Ct({prop:"gridTemplateAreas"}),jT=Ct({prop:"gridArea"});Iu(Uu,Ou,Fu,BT,zT,HT,VT,GT,WT,$T,XT,jT);function ds(t,e){return e==="grey"?e:t}const YT=Ct({prop:"color",themeKey:"palette",transform:ds}),qT=Ct({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ds}),KT=Ct({prop:"backgroundColor",themeKey:"palette",transform:ds});Iu(YT,qT,KT);function An(t){return t<=1&&t!==0?`${t*100}%`:t}const ZT=Ct({prop:"width",transform:An}),sm=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,r;const o=((i=t.theme)==null||(i=i.breakpoints)==null||(i=i.values)==null?void 0:i[n])||im[n];return o?((r=t.theme)==null||(r=r.breakpoints)==null?void 0:r.unit)!=="px"?{maxWidth:`${o}${t.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:An(n)}};return Yi(t,t.maxWidth,e)}return null};sm.filterProps=["maxWidth"];const QT=Ct({prop:"minWidth",transform:An}),JT=Ct({prop:"height",transform:An}),ew=Ct({prop:"maxHeight",transform:An}),tw=Ct({prop:"minHeight",transform:An});Ct({prop:"size",cssProperty:"width",transform:An});Ct({prop:"size",cssProperty:"height",transform:An});const nw=Ct({prop:"boxSizing"});Iu(ZT,sm,QT,JT,ew,tw,nw);const qa={border:{themeKey:"borders",transform:zn},borderTop:{themeKey:"borders",transform:zn},borderRight:{themeKey:"borders",transform:zn},borderBottom:{themeKey:"borders",transform:zn},borderLeft:{themeKey:"borders",transform:zn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:zn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Nu},color:{themeKey:"palette",transform:ds},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ds},backgroundColor:{themeKey:"palette",transform:ds},p:{style:Mt},pt:{style:Mt},pr:{style:Mt},pb:{style:Mt},pl:{style:Mt},px:{style:Mt},py:{style:Mt},padding:{style:Mt},paddingTop:{style:Mt},paddingRight:{style:Mt},paddingBottom:{style:Mt},paddingLeft:{style:Mt},paddingX:{style:Mt},paddingY:{style:Mt},paddingInline:{style:Mt},paddingInlineStart:{style:Mt},paddingInlineEnd:{style:Mt},paddingBlock:{style:Mt},paddingBlockStart:{style:Mt},paddingBlockEnd:{style:Mt},m:{style:St},mt:{style:St},mr:{style:St},mb:{style:St},ml:{style:St},mx:{style:St},my:{style:St},margin:{style:St},marginTop:{style:St},marginRight:{style:St},marginBottom:{style:St},marginLeft:{style:St},marginX:{style:St},marginY:{style:St},marginInline:{style:St},marginInlineStart:{style:St},marginInlineEnd:{style:St},marginBlock:{style:St},marginBlockStart:{style:St},marginBlockEnd:{style:St},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Uu},rowGap:{style:Fu},columnGap:{style:Ou},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:An},maxWidth:{style:sm},minWidth:{transform:An},height:{transform:An},maxHeight:{transform:An},minHeight:{transform:An},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function iw(...t){const e=t.reduce((i,r)=>i.concat(Object.keys(r)),[]),n=new Set(e);return t.every(i=>n.size===Object.keys(i).length)}function rw(t,e){return typeof t=="function"?t(e):t}function py(){function t(n,i,r,o){const s={[n]:i,theme:r},a=o[n];if(!a)return{[n]:i};const{cssProperty:l=n,themeKey:c,transform:u,style:h}=a;if(i==null)return null;if(c==="typography"&&i==="inherit")return{[n]:i};const d=Du(r,c)||{};return h?h(s):Yi(s,i,g=>{let _=Xc(d,u,g);return g===_&&typeof g=="string"&&(_=Xc(d,u,`${n}${g==="default"?"":Tt(g)}`,g)),l===!1?_:{[l]:_}})}function e(n){var i;const{sx:r,theme:o={}}=n||{};if(!r)return null;const s=(i=o.unstable_sxConfig)!=null?i:qa;function a(l){let c=l;if(typeof l=="function")c=l(o);else if(typeof l!="object")return l;if(!c)return null;const u=vT(o.breakpoints),h=Object.keys(u);let d=u;return Object.keys(c).forEach(p=>{const g=rw(c[p],o);if(g!=null)if(typeof g=="object")if(s[p])d=pa(d,t(p,g,o,s));else{const _=Yi({theme:o},g,m=>({[p]:m}));iw(_,g)?d[p]=e({sx:g,theme:o}):d=pa(d,_)}else d=pa(d,t(p,g,o,s))}),_T(h,d)}return Array.isArray(r)?r.map(a):a(r)}return e}const ku=py();ku.filterProps=["sx"];function my(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const ow=["breakpoints","palette","spacing","shape"];function am(t={},...e){const{breakpoints:n={},palette:i={},spacing:r,shape:o={}}=t,s=wt(t,ow),a=fy(n),l=AT(r);let c=Ai({breakpoints:a,direction:"ltr",components:{},palette:ie({mode:"light"},i),spacing:l,shape:ie({},gT,o)},s);return c.applyStyles=my,c=e.reduce((u,h)=>Ai(u,h),c),c.unstable_sxConfig=ie({},qa,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(h){return ku({sx:h,theme:this})},c}const sw=Object.freeze(Object.defineProperty({__proto__:null,default:am,private_createBreakpoints:fy,unstable_applyStyles:my},Symbol.toStringTag,{value:"Module"}));function aw(t){return Object.keys(t).length===0}function lw(t=null){const e=j.useContext(Pu);return!e||aw(e)?t:e}const cw=am();function uw(t=cw){return lw(t)}const fw=["sx"],dw=t=>{var e,n;const i={systemProps:{},otherProps:{}},r=(e=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?e:qa;return Object.keys(t).forEach(o=>{r[o]?i.systemProps[o]=t[o]:i.otherProps[o]=t[o]}),i};function gy(t){const{sx:e}=t,n=wt(t,fw),{systemProps:i,otherProps:r}=dw(n);let o;return Array.isArray(e)?o=[i,...e]:typeof e=="function"?o=(...s)=>{const a=e(...s);return dr(a)?ie({},i,a):i}:o=ie({},i,e),ie({},r,{sx:o})}const hw=Object.freeze(Object.defineProperty({__proto__:null,default:ku,extendSxProp:gy,unstable_createStyleFunctionSx:py,unstable_defaultSxConfig:qa},Symbol.toStringTag,{value:"Module"})),e0=t=>t,pw=()=>{let t=e0;return{configure(e){t=e},generate(e){return t(e)},reset(){t=e0}}},mw=pw();function vy(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=vy(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function ut(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=vy(t))&&(i&&(i+=" "),i+=e);return i}const gw={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function fi(t,e,n="Mui"){const i=gw[e];return i?`${n}-${i}`:`${mw.generate(t)}-${e}`}function di(t,e,n="Mui"){const i={};return e.forEach(r=>{i[r]=fi(t,r,n)}),i}var _y={exports:{}},ot={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=Symbol.for("react.element"),cm=Symbol.for("react.portal"),Bu=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),Vu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),vw=Symbol.for("react.server_context"),Wu=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),Yu=Symbol.for("react.lazy"),_w=Symbol.for("react.offscreen"),xy;xy=Symbol.for("react.module.reference");function Kn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case lm:switch(t=t.type,t){case Bu:case Hu:case zu:case $u:case Xu:return t;default:switch(t=t&&t.$$typeof,t){case vw:case Gu:case Wu:case Yu:case ju:case Vu:return t;default:return e}}case cm:return e}}}ot.ContextConsumer=Gu;ot.ContextProvider=Vu;ot.Element=lm;ot.ForwardRef=Wu;ot.Fragment=Bu;ot.Lazy=Yu;ot.Memo=ju;ot.Portal=cm;ot.Profiler=Hu;ot.StrictMode=zu;ot.Suspense=$u;ot.SuspenseList=Xu;ot.isAsyncMode=function(){return!1};ot.isConcurrentMode=function(){return!1};ot.isContextConsumer=function(t){return Kn(t)===Gu};ot.isContextProvider=function(t){return Kn(t)===Vu};ot.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===lm};ot.isForwardRef=function(t){return Kn(t)===Wu};ot.isFragment=function(t){return Kn(t)===Bu};ot.isLazy=function(t){return Kn(t)===Yu};ot.isMemo=function(t){return Kn(t)===ju};ot.isPortal=function(t){return Kn(t)===cm};ot.isProfiler=function(t){return Kn(t)===Hu};ot.isStrictMode=function(t){return Kn(t)===zu};ot.isSuspense=function(t){return Kn(t)===$u};ot.isSuspenseList=function(t){return Kn(t)===Xu};ot.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Bu||t===Hu||t===zu||t===$u||t===Xu||t===_w||typeof t=="object"&&t!==null&&(t.$$typeof===Yu||t.$$typeof===ju||t.$$typeof===Vu||t.$$typeof===Gu||t.$$typeof===Wu||t.$$typeof===xy||t.getModuleId!==void 0)};ot.typeOf=Kn;_y.exports=ot;var t0=_y.exports;const xw=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function yy(t){const e=`${t}`.match(xw);return e&&e[1]||""}function Sy(t,e=""){return t.displayName||t.name||yy(t)||e}function n0(t,e,n){const i=Sy(e);return t.displayName||(i!==""?`${n}(${i})`:n)}function yw(t){if(t!=null){if(typeof t=="string")return t;if(typeof t=="function")return Sy(t,"Component");if(typeof t=="object")switch(t.$$typeof){case t0.ForwardRef:return n0(t,t.render,"ForwardRef");case t0.Memo:return n0(t,t.type,"memo");default:return}}}const Sw=Object.freeze(Object.defineProperty({__proto__:null,default:yw,getFunctionName:yy},Symbol.toStringTag,{value:"Module"}));function jc(t,e){const n=ie({},e);return Object.keys(t).forEach(i=>{if(i.toString().match(/^(components|slots)$/))n[i]=ie({},t[i],n[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const r=t[i]||{},o=e[i];n[i]={},!o||!Object.keys(o)?n[i]=r:!r||!Object.keys(r)?n[i]=o:(n[i]=ie({},o),Object.keys(r).forEach(s=>{n[i][s]=jc(r[s],o[s])}))}else n[i]===void 0&&(n[i]=t[i])}),n}const hh=typeof window<"u"?j.useLayoutEffect:j.useEffect;function Mw(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const Ew=Object.freeze(Object.defineProperty({__proto__:null,default:Mw},Symbol.toStringTag,{value:"Module"}));function i0(...t){return t.reduce((e,n)=>n==null?e:function(...r){e.apply(this,r),n.apply(this,r)},()=>{})}function Tr(t){return t&&t.ownerDocument||document}function um(t){return Tr(t).defaultView||window}function ph(t,e){typeof t=="function"?t(e):t&&(t.current=e)}let r0=0;function Tw(t){const[e,n]=j.useState(t),i=t||e;return j.useEffect(()=>{e==null&&(r0+=1,n(`mui-${r0}`))},[e]),i}const o0=md.useId;function ww(t){if(o0!==void 0){const e=o0();return t??e}return Tw(t)}function ns(t){const e=j.useRef(t);return hh(()=>{e.current=t}),j.useRef((...n)=>(0,e.current)(...n)).current}function fo(...t){return j.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{ph(n,e)})},t)}const s0={};function Aw(t,e){const n=j.useRef(s0);return n.current===s0&&(n.current=t(e)),n}const Cw=[];function bw(t){j.useEffect(t,Cw)}class qu{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new qu}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Rw(){const t=Aw(qu.create).current;return bw(t.disposeEffect),t}let Ku=!0,mh=!1;const Pw=new qu,Lw={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Dw(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&Lw[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function Iw(t){t.metaKey||t.altKey||t.ctrlKey||(Ku=!0)}function Of(){Ku=!1}function Nw(){this.visibilityState==="hidden"&&mh&&(Ku=!0)}function Uw(t){t.addEventListener("keydown",Iw,!0),t.addEventListener("mousedown",Of,!0),t.addEventListener("pointerdown",Of,!0),t.addEventListener("touchstart",Of,!0),t.addEventListener("visibilitychange",Nw,!0)}function Ow(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Ku||Dw(e)}function Fw(){const t=j.useCallback(r=>{r!=null&&Uw(r.ownerDocument)},[]),e=j.useRef(!1);function n(){return e.current?(mh=!0,Pw.start(100,()=>{mh=!1}),e.current=!1,!0):!1}function i(r){return Ow(r)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:i,onBlur:n,ref:t}}function kw(t){const e=t.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ci(t,e,n=void 0){const i={};return Object.keys(t).forEach(r=>{i[r]=t[r].reduce((o,s)=>{if(s){const a=e(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),i}function Bw(t){return typeof t=="string"}function zw(t,e,n){return t===void 0||Bw(t)?e:ie({},e,{ownerState:ie({},e.ownerState,n)})}function My(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(i=>i.match(/^on[A-Z]/)&&typeof t[i]=="function"&&!e.includes(i)).forEach(i=>{n[i]=t[i]}),n}function a0(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function Hw(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:i,externalForwardedProps:r,className:o}=t;if(!e){const p=ut(n==null?void 0:n.className,o,r==null?void 0:r.className,i==null?void 0:i.className),g=ie({},n==null?void 0:n.style,r==null?void 0:r.style,i==null?void 0:i.style),_=ie({},n,r,i);return p.length>0&&(_.className=p),Object.keys(g).length>0&&(_.style=g),{props:_,internalRef:void 0}}const s=My(ie({},r,i)),a=a0(i),l=a0(r),c=e(s),u=ut(c==null?void 0:c.className,n==null?void 0:n.className,o,r==null?void 0:r.className,i==null?void 0:i.className),h=ie({},c==null?void 0:c.style,n==null?void 0:n.style,r==null?void 0:r.style,i==null?void 0:i.style),d=ie({},c,n,l,a);return u.length>0&&(d.className=u),Object.keys(h).length>0&&(d.style=h),{props:d,internalRef:c.ref}}function Vw(t,e,n){return typeof t=="function"?t(e,n):t}const Gw=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function l0(t){var e;const{elementType:n,externalSlotProps:i,ownerState:r,skipResolvingSlotProps:o=!1}=t,s=wt(t,Gw),a=o?{}:Vw(i,r),{props:l,internalRef:c}=Hw(ie({},s,{externalSlotProps:a})),u=fo(c,a==null?void 0:a.ref,(e=t.additionalProps)==null?void 0:e.ref);return zw(n,ie({},l,{ref:u}),r)}const Ww=j.createContext(void 0);function $w(t){const{theme:e,name:n,props:i}=t;if(!e||!e.components||!e.components[n])return i;const r=e.components[n];return r.defaultProps?jc(r.defaultProps,i):!r.styleOverrides&&!r.variants?jc(r,i):i}function Xw({props:t,name:e}){const n=j.useContext(Ww);return $w({props:t,name:e,theme:{components:n}})}function jw(t,e){return ie({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}var bt={},Ey={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(Ey);var Ty=Ey.exports;const Yw=Lr(n1),qw=Lr(Ew);var wy=Ty;Object.defineProperty(bt,"__esModule",{value:!0});var is=bt.alpha=Ry;bt.blend=lA;bt.colorChannel=void 0;var Kw=bt.darken=dm;bt.decomposeColor=Yn;bt.emphasize=Py;var Zw=bt.getContrastRatio=iA;bt.getLuminance=Yc;bt.hexToRgb=Ay;bt.hslToRgb=by;var Qw=bt.lighten=hm;bt.private_safeAlpha=rA;bt.private_safeColorChannel=void 0;bt.private_safeDarken=oA;bt.private_safeEmphasize=aA;bt.private_safeLighten=sA;bt.recomposeColor=Is;bt.rgbToHex=nA;var c0=wy(Yw),Jw=wy(qw);function fm(t,e=0,n=1){return(0,Jw.default)(t,e,n)}function Ay(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function eA(t){const e=t.toString(16);return e.length===1?`0${e}`:e}function Yn(t){if(t.type)return t;if(t.charAt(0)==="#")return Yn(Ay(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,c0.default)(9,t));let i=t.substring(e+1,t.length-1),r;if(n==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error((0,c0.default)(10,r))}else i=i.split(",");return i=i.map(o=>parseFloat(o)),{type:n,values:i,colorSpace:r}}const Cy=t=>{const e=Yn(t);return e.values.slice(0,3).map((n,i)=>e.type.indexOf("hsl")!==-1&&i!==0?`${n}%`:n).join(" ")};bt.colorChannel=Cy;const tA=(t,e)=>{try{return Cy(t)}catch{return t}};bt.private_safeColorChannel=tA;function Is(t){const{type:e,colorSpace:n}=t;let{values:i}=t;return e.indexOf("rgb")!==-1?i=i.map((r,o)=>o<3?parseInt(r,10):r):e.indexOf("hsl")!==-1&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),e.indexOf("color")!==-1?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${e}(${i})`}function nA(t){if(t.indexOf("#")===0)return t;const{values:e}=Yn(t);return`#${e.map((n,i)=>eA(i===3?Math.round(255*n):n)).join("")}`}function by(t){t=Yn(t);const{values:e}=t,n=e[0],i=e[1]/100,r=e[2]/100,o=i*Math.min(r,1-r),s=(c,u=(c+n/30)%12)=>r-o*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Is({type:a,values:l})}function Yc(t){t=Yn(t);let e=t.type==="hsl"||t.type==="hsla"?Yn(by(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function iA(t,e){const n=Yc(t),i=Yc(e);return(Math.max(n,i)+.05)/(Math.min(n,i)+.05)}function Ry(t,e){return t=Yn(t),e=fm(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Is(t)}function rA(t,e,n){try{return Ry(t,e)}catch{return t}}function dm(t,e){if(t=Yn(t),e=fm(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Is(t)}function oA(t,e,n){try{return dm(t,e)}catch{return t}}function hm(t,e){if(t=Yn(t),e=fm(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Is(t)}function sA(t,e,n){try{return hm(t,e)}catch{return t}}function Py(t,e=.15){return Yc(t)>.5?dm(t,e):hm(t,e)}function aA(t,e,n){try{return Py(t,e)}catch{return t}}function lA(t,e,n,i=1){const r=(l,c)=>Math.round((l**(1/i)*(1-n)+c**(1/i)*n)**i),o=Yn(t),s=Yn(e),a=[r(o.values[0],s.values[0]),r(o.values[1],s.values[1]),r(o.values[2],s.values[2])];return Is({type:"rgb",values:a})}const cA=["mode","contrastThreshold","tonalOffset"],u0={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Na.white,default:Na.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ff={text:{primary:Na.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Na.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function f0(t,e,n,i){const r=i.light||i,o=i.dark||i*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=Qw(t.main,r):e==="dark"&&(t.dark=Kw(t.main,o)))}function uA(t="light"){return t==="dark"?{main:So[200],light:So[50],dark:So[400]}:{main:So[700],light:So[400],dark:So[800]}}function fA(t="light"){return t==="dark"?{main:yo[200],light:yo[50],dark:yo[400]}:{main:yo[500],light:yo[300],dark:yo[700]}}function dA(t="light"){return t==="dark"?{main:xo[500],light:xo[300],dark:xo[700]}:{main:xo[700],light:xo[400],dark:xo[800]}}function hA(t="light"){return t==="dark"?{main:Mo[400],light:Mo[300],dark:Mo[700]}:{main:Mo[700],light:Mo[500],dark:Mo[900]}}function pA(t="light"){return t==="dark"?{main:Eo[400],light:Eo[300],dark:Eo[700]}:{main:Eo[800],light:Eo[500],dark:Eo[900]}}function mA(t="light"){return t==="dark"?{main:$s[400],light:$s[300],dark:$s[700]}:{main:"#ed6c02",light:$s[500],dark:$s[900]}}function gA(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:i=.2}=t,r=wt(t,cA),o=t.primary||uA(e),s=t.secondary||fA(e),a=t.error||dA(e),l=t.info||hA(e),c=t.success||pA(e),u=t.warning||mA(e);function h(_){return Zw(_,Ff.text.primary)>=n?Ff.text.primary:u0.text.primary}const d=({color:_,name:m,mainShade:f=500,lightShade:x=300,darkShade:v=700})=>{if(_=ie({},_),!_.main&&_[f]&&(_.main=_[f]),!_.hasOwnProperty("main"))throw new Error(Ua(11,m?` (${m})`:"",f));if(typeof _.main!="string")throw new Error(Ua(12,m?` (${m})`:"",JSON.stringify(_.main)));return f0(_,"light",x,i),f0(_,"dark",v,i),_.contrastText||(_.contrastText=h(_.main)),_},p={dark:Ff,light:u0};return Ai(ie({common:ie({},Na),mode:e,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:u,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:t1,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:i},p[e]),r)}const vA=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function _A(t){return Math.round(t*1e5)/1e5}const d0={textTransform:"uppercase"},h0='"Roboto", "Helvetica", "Arial", sans-serif';function xA(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:i=h0,fontSize:r=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:h}=n,d=wt(n,vA),p=r/14,g=h||(f=>`${f/c*p}rem`),_=(f,x,v,y,C)=>ie({fontFamily:i,fontWeight:f,fontSize:g(x),lineHeight:v},i===h0?{letterSpacing:`${_A(y/x)}em`}:{},C,u),m={h1:_(o,96,1.167,-1.5),h2:_(o,60,1.2,-.5),h3:_(s,48,1.167,0),h4:_(s,34,1.235,.25),h5:_(s,24,1.334,0),h6:_(a,20,1.6,.15),subtitle1:_(s,16,1.75,.15),subtitle2:_(a,14,1.57,.1),body1:_(s,16,1.5,.15),body2:_(s,14,1.43,.15),button:_(a,14,1.75,.4,d0),caption:_(s,12,1.66,.4),overline:_(s,12,2.66,1,d0),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Ai(ie({htmlFontSize:c,pxToRem:g,fontFamily:i,fontSize:r,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},m),d,{clone:!1})}const yA=.2,SA=.14,MA=.12;function dt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${yA})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${SA})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${MA})`].join(",")}const EA=["none",dt(0,2,1,-1,0,1,1,0,0,1,3,0),dt(0,3,1,-2,0,2,2,0,0,1,5,0),dt(0,3,3,-2,0,3,4,0,0,1,8,0),dt(0,2,4,-1,0,4,5,0,0,1,10,0),dt(0,3,5,-1,0,5,8,0,0,1,14,0),dt(0,3,5,-1,0,6,10,0,0,1,18,0),dt(0,4,5,-2,0,7,10,1,0,2,16,1),dt(0,5,5,-3,0,8,10,1,0,3,14,2),dt(0,5,6,-3,0,9,12,1,0,3,16,2),dt(0,6,6,-3,0,10,14,1,0,4,18,3),dt(0,6,7,-4,0,11,15,1,0,4,20,3),dt(0,7,8,-4,0,12,17,2,0,5,22,4),dt(0,7,8,-4,0,13,19,2,0,5,24,4),dt(0,7,9,-4,0,14,21,2,0,5,26,4),dt(0,8,9,-5,0,15,22,2,0,6,28,5),dt(0,8,10,-5,0,16,24,2,0,6,30,5),dt(0,8,11,-5,0,17,26,2,0,6,32,5),dt(0,9,11,-5,0,18,28,2,0,7,34,6),dt(0,9,12,-6,0,19,29,2,0,7,36,6),dt(0,10,13,-6,0,20,31,3,0,8,38,7),dt(0,10,13,-6,0,21,33,3,0,8,40,7),dt(0,10,14,-6,0,22,35,3,0,8,42,7),dt(0,11,14,-7,0,23,36,3,0,9,44,8),dt(0,11,15,-7,0,24,38,3,0,9,46,8)],TA=["duration","easing","delay"],wA={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},AA={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function p0(t){return`${Math.round(t)}ms`}function CA(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function bA(t){const e=ie({},wA,t.easing),n=ie({},AA,t.duration);return ie({getAutoHeightDuration:CA,create:(r=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return wt(o,TA),(Array.isArray(r)?r:[r]).map(c=>`${c} ${typeof s=="string"?s:p0(s)} ${a} ${typeof l=="string"?l:p0(l)}`).join(",")}},t,{easing:e,duration:n})}const RA={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},PA=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function LA(t={},...e){const{mixins:n={},palette:i={},transitions:r={},typography:o={}}=t,s=wt(t,PA);if(t.vars)throw new Error(Ua(18));const a=gA(i),l=am(t);let c=Ai(l,{mixins:jw(l.breakpoints,n),palette:a,shadows:EA.slice(),typography:xA(a,o),transitions:bA(r),zIndex:ie({},RA)});return c=Ai(c,s),c=e.reduce((u,h)=>Ai(u,h),c),c.unstable_sxConfig=ie({},qa,s==null?void 0:s.unstable_sxConfig),c.unstable_sx=function(h){return ku({sx:h,theme:this})},c}const Ly=LA();function Dy(){const t=uw(Ly);return t[Vx]||t}var Ka={},kf={exports:{}},m0;function DA(){return m0||(m0=1,function(t){function e(n,i){if(n==null)return{};var r={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(i.includes(o))continue;r[o]=n[o]}return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(kf)),kf.exports}const IA=Lr(dT),NA=Lr(hT),UA=Lr(xT),OA=Lr(Sw),FA=Lr(sw),kA=Lr(hw);var Ns=Ty;Object.defineProperty(Ka,"__esModule",{value:!0});var BA=Ka.default=QA;Ka.shouldForwardProp=hc;Ka.systemDefaultTheme=void 0;var On=Ns(ly()),gh=Ns(DA()),g0=XA(IA),zA=NA;Ns(UA);Ns(OA);var HA=Ns(FA),VA=Ns(kA);const GA=["ownerState"],WA=["variants"],$A=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Iy(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Iy=function(i){return i?n:e})(t)}function XA(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=Iy(e);if(n&&n.has(t))return n.get(t);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var s=r?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=t[o]}return i.default=t,n&&n.set(t,i),i}function jA(t){return Object.keys(t).length===0}function YA(t){return typeof t=="string"&&t.charCodeAt(0)>96}function hc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const qA=Ka.systemDefaultTheme=(0,HA.default)(),KA=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function Tl({defaultTheme:t,theme:e,themeId:n}){return jA(e)?t:e[n]||e}function ZA(t){return t?(e,n)=>n[t]:null}function pc(t,e){let{ownerState:n}=e,i=(0,gh.default)(e,GA);const r=typeof t=="function"?t((0,On.default)({ownerState:n},i)):t;if(Array.isArray(r))return r.flatMap(o=>pc(o,(0,On.default)({ownerState:n},i)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:o=[]}=r;let a=(0,gh.default)(r,WA);return o.forEach(l=>{let c=!0;typeof l.props=="function"?c=l.props((0,On.default)({ownerState:n},i,n)):Object.keys(l.props).forEach(u=>{(n==null?void 0:n[u])!==l.props[u]&&i[u]!==l.props[u]&&(c=!1)}),c&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style((0,On.default)({ownerState:n},i,n)):l.style))}),a}return r}function QA(t={}){const{themeId:e,defaultTheme:n=qA,rootShouldForwardProp:i=hc,slotShouldForwardProp:r=hc}=t,o=s=>(0,VA.default)((0,On.default)({},s,{theme:Tl((0,On.default)({},s,{defaultTheme:n,themeId:e}))}));return o.__mui_systemSx=!0,(s,a={})=>{(0,g0.internal_processStyles)(s,C=>C.filter(A=>!(A!=null&&A.__mui_systemSx)));const{name:l,slot:c,skipVariantsResolver:u,skipSx:h,overridesResolver:d=ZA(KA(c))}=a,p=(0,gh.default)(a,$A),g=u!==void 0?u:c&&c!=="Root"&&c!=="root"||!1,_=h||!1;let m,f=hc;c==="Root"||c==="root"?f=i:c?f=r:YA(s)&&(f=void 0);const x=(0,g0.default)(s,(0,On.default)({shouldForwardProp:f,label:m},p)),v=C=>typeof C=="function"&&C.__emotion_real!==C||(0,zA.isPlainObject)(C)?A=>pc(C,(0,On.default)({},A,{theme:Tl({theme:A.theme,defaultTheme:n,themeId:e})})):C,y=(C,...A)=>{let E=v(C);const P=A?A.map(v):[];l&&d&&P.push(R=>{const k=Tl((0,On.default)({},R,{defaultTheme:n,themeId:e}));if(!k.components||!k.components[l]||!k.components[l].styleOverrides)return null;const O=k.components[l].styleOverrides,B={};return Object.entries(O).forEach(([X,F])=>{B[X]=pc(F,(0,On.default)({},R,{theme:k}))}),d(R,B)}),l&&!g&&P.push(R=>{var k;const O=Tl((0,On.default)({},R,{defaultTheme:n,themeId:e})),B=O==null||(k=O.components)==null||(k=k[l])==null?void 0:k.variants;return pc({variants:B},(0,On.default)({},R,{theme:O}))}),_||P.push(o);const w=P.length-A.length;if(Array.isArray(C)&&w>0){const R=new Array(w).fill("");E=[...C,...R],E.raw=[...C.raw,...R]}const S=x(E,...P);return s.muiName&&(S.muiName=s.muiName),S};return x.withConfig&&(y.withConfig=x.withConfig),y}}function JA(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const Ny=t=>JA(t)&&t!=="classes",Wt=BA({themeId:Vx,defaultTheme:Ly,rootShouldForwardProp:Ny}),v0=t=>{let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,(e/100).toFixed(2)};function hi(t){return Xw(t)}function vh(t,e){return vh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},vh(t,e)}function Uy(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,vh(t,e)}const _0={disabled:!1},qc=si.createContext(null);var eC=function(e){return e.scrollTop},ia="unmounted",$r="exited",Xr="entering",Vo="entered",_h="exiting",Qi=function(t){Uy(e,t);function e(i,r){var o;o=t.call(this,i,r)||this;var s=r,a=s&&!s.isMounting?i.enter:i.appear,l;return o.appearStatus=null,i.in?a?(l=$r,o.appearStatus=Xr):l=Vo:i.unmountOnExit||i.mountOnEnter?l=ia:l=$r,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(r,o){var s=r.in;return s&&o.status===ia?{status:$r}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var o=null;if(r!==this.props){var s=this.state.status;this.props.in?s!==Xr&&s!==Vo&&(o=Xr):(s===Xr||s===Vo)&&(o=_h)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,o,s,a;return o=s=a=r,r!=null&&typeof r!="number"&&(o=r.exit,s=r.enter,a=r.appear!==void 0?r.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(r,o){if(r===void 0&&(r=!1),o!==null)if(this.cancelNextCallback(),o===Xr){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Ml.findDOMNode(this);s&&eC(s)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===$r&&this.setState({status:ia})},n.performEnter=function(r){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[Ml.findDOMNode(this),a],c=l[0],u=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!r&&!s||_0.disabled){this.safeSetState({status:Vo},function(){o.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:Xr},function(){o.props.onEntering(c,u),o.onTransitionEnd(d,function(){o.safeSetState({status:Vo},function(){o.props.onEntered(c,u)})})})},n.performExit=function(){var r=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Ml.findDOMNode(this);if(!o||_0.disabled){this.safeSetState({status:$r},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:_h},function(){r.props.onExiting(a),r.onTransitionEnd(s.exit,function(){r.safeSetState({status:$r},function(){r.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,o){o=this.setNextCallback(o),this.setState(r,o)},n.setNextCallback=function(r){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,r(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(r,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:Ml.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===ia)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=wt(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return si.createElement(qc.Provider,{value:null},typeof s=="function"?s(r,a):si.cloneElement(si.Children.only(s),a))},e}(si.Component);Qi.contextType=qc;Qi.propTypes={};function To(){}Qi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:To,onEntering:To,onEntered:To,onExit:To,onExiting:To,onExited:To};Qi.UNMOUNTED=ia;Qi.EXITED=$r;Qi.ENTERING=Xr;Qi.ENTERED=Vo;Qi.EXITING=_h;function tC(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pm(t,e){var n=function(o){return e&&j.isValidElement(o)?e(o):o},i=Object.create(null);return t&&j.Children.map(t,function(r){return r}).forEach(function(r){i[r.key]=n(r)}),i}function nC(t,e){t=t||{},e=e||{};function n(u){return u in e?e[u]:t[u]}var i=Object.create(null),r=[];for(var o in t)o in e?r.length&&(i[o]=r,r=[]):r.push(o);var s,a={};for(var l in e){if(i[l])for(s=0;s<i[l].length;s++){var c=i[l][s];a[i[l][s]]=n(c)}a[l]=n(l)}for(s=0;s<r.length;s++)a[r[s]]=n(r[s]);return a}function eo(t,e,n){return n[e]!=null?n[e]:t.props[e]}function iC(t,e){return pm(t.children,function(n){return j.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:eo(n,"appear",t),enter:eo(n,"enter",t),exit:eo(n,"exit",t)})})}function rC(t,e,n){var i=pm(t.children),r=nC(e,i);return Object.keys(r).forEach(function(o){var s=r[o];if(j.isValidElement(s)){var a=o in e,l=o in i,c=e[o],u=j.isValidElement(c)&&!c.props.in;l&&(!a||u)?r[o]=j.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:eo(s,"exit",t),enter:eo(s,"enter",t)}):!l&&a&&!u?r[o]=j.cloneElement(s,{in:!1}):l&&a&&j.isValidElement(c)&&(r[o]=j.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:eo(s,"exit",t),enter:eo(s,"enter",t)}))}}),r}var oC=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},sC={component:"div",childFactory:function(e){return e}},mm=function(t){Uy(e,t);function e(i,r){var o;o=t.call(this,i,r)||this;var s=o.handleExited.bind(tC(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,o){var s=o.children,a=o.handleExited,l=o.firstRender;return{children:l?iC(r,a):rC(r,s,a),firstRender:!1}},n.handleExited=function(r,o){var s=pm(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(a){var l=ie({},a.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,o=r.component,s=r.childFactory,a=wt(r,["component","childFactory"]),l=this.state.contextValue,c=oC(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,o===null?si.createElement(qc.Provider,{value:l},c):si.createElement(qc.Provider,{value:l},si.createElement(o,a,c))},e}(si.Component);mm.propTypes={};mm.defaultProps=sC;const aC=t=>t.scrollTop;function x0(t,e){var n,i;const{timeout:r,easing:o,style:s={}}=t;return{duration:(n=s.transitionDuration)!=null?n:typeof r=="number"?r:r[e.mode]||0,easing:(i=s.transitionTimingFunction)!=null?i:typeof o=="object"?o[e.mode]:o,delay:s.transitionDelay}}function lC(t){return fi("MuiPaper",t)}di("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const cC=["className","component","elevation","square","variant"],uC=t=>{const{square:e,elevation:n,variant:i,classes:r}=t,o={root:["root",i,!e&&"rounded",i==="elevation"&&`elevation${n}`]};return Ci(o,lC,r)},fC=Wt("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!n.square&&e.rounded,n.variant==="elevation"&&e[`elevation${n.elevation}`]]}})(({theme:t,ownerState:e})=>{var n;return ie({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!e.square&&{borderRadius:t.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},e.variant==="elevation"&&ie({boxShadow:(t.vars||t).shadows[e.elevation]},!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${is("#fff",v0(e.elevation))}, ${is("#fff",v0(e.elevation))})`},t.vars&&{backgroundImage:(n=t.vars.overlays)==null?void 0:n[e.elevation]}))}),Oy=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiPaper"}),{className:r,component:o="div",elevation:s=1,square:a=!1,variant:l="elevation"}=i,c=wt(i,cC),u=ie({},i,{component:o,elevation:s,square:a,variant:l}),h=uC(u);return pe.jsx(fC,ie({as:o,ownerState:u,className:ut(h.root,r),ref:n},c))});function dC(t){const{className:e,classes:n,pulsate:i=!1,rippleX:r,rippleY:o,rippleSize:s,in:a,onExited:l,timeout:c}=t,[u,h]=j.useState(!1),d=ut(e,n.ripple,n.rippleVisible,i&&n.ripplePulsate),p={width:s,height:s,top:-(s/2)+o,left:-(s/2)+r},g=ut(n.child,u&&n.childLeaving,i&&n.childPulsate);return!a&&!u&&h(!0),j.useEffect(()=>{if(!a&&l!=null){const _=setTimeout(l,c);return()=>{clearTimeout(_)}}},[l,a,c]),pe.jsx("span",{className:d,style:p,children:pe.jsx("span",{className:g})})}const Fn=di("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),hC=["center","classes","className"];let Zu=t=>t,y0,S0,M0,E0;const xh=550,pC=80,mC=Lu(y0||(y0=Zu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),gC=Lu(S0||(S0=Zu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),vC=Lu(M0||(M0=Zu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),_C=Wt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),xC=Wt(dC,{name:"MuiTouchRipple",slot:"Ripple"})(E0||(E0=Zu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Fn.rippleVisible,mC,xh,({theme:t})=>t.transitions.easing.easeInOut,Fn.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,Fn.child,Fn.childLeaving,gC,xh,({theme:t})=>t.transitions.easing.easeInOut,Fn.childPulsate,vC,({theme:t})=>t.transitions.easing.easeInOut),yC=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:s}=i,a=wt(i,hC),[l,c]=j.useState([]),u=j.useRef(0),h=j.useRef(null);j.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const d=j.useRef(!1),p=Rw(),g=j.useRef(null),_=j.useRef(null),m=j.useCallback(y=>{const{pulsate:C,rippleX:A,rippleY:E,rippleSize:P,cb:w}=y;c(S=>[...S,pe.jsx(xC,{classes:{ripple:ut(o.ripple,Fn.ripple),rippleVisible:ut(o.rippleVisible,Fn.rippleVisible),ripplePulsate:ut(o.ripplePulsate,Fn.ripplePulsate),child:ut(o.child,Fn.child),childLeaving:ut(o.childLeaving,Fn.childLeaving),childPulsate:ut(o.childPulsate,Fn.childPulsate)},timeout:xh,pulsate:C,rippleX:A,rippleY:E,rippleSize:P},u.current)]),u.current+=1,h.current=w},[o]),f=j.useCallback((y={},C={},A=()=>{})=>{const{pulsate:E=!1,center:P=r||C.pulsate,fakeElement:w=!1}=C;if((y==null?void 0:y.type)==="mousedown"&&d.current){d.current=!1;return}(y==null?void 0:y.type)==="touchstart"&&(d.current=!0);const S=w?null:_.current,R=S?S.getBoundingClientRect():{width:0,height:0,left:0,top:0};let k,O,B;if(P||y===void 0||y.clientX===0&&y.clientY===0||!y.clientX&&!y.touches)k=Math.round(R.width/2),O=Math.round(R.height/2);else{const{clientX:X,clientY:F}=y.touches&&y.touches.length>0?y.touches[0]:y;k=Math.round(X-R.left),O=Math.round(F-R.top)}if(P)B=Math.sqrt((2*R.width**2+R.height**2)/3),B%2===0&&(B+=1);else{const X=Math.max(Math.abs((S?S.clientWidth:0)-k),k)*2+2,F=Math.max(Math.abs((S?S.clientHeight:0)-O),O)*2+2;B=Math.sqrt(X**2+F**2)}y!=null&&y.touches?g.current===null&&(g.current=()=>{m({pulsate:E,rippleX:k,rippleY:O,rippleSize:B,cb:A})},p.start(pC,()=>{g.current&&(g.current(),g.current=null)})):m({pulsate:E,rippleX:k,rippleY:O,rippleSize:B,cb:A})},[r,m,p]),x=j.useCallback(()=>{f({},{pulsate:!0})},[f]),v=j.useCallback((y,C)=>{if(p.clear(),(y==null?void 0:y.type)==="touchend"&&g.current){g.current(),g.current=null,p.start(0,()=>{v(y,C)});return}g.current=null,c(A=>A.length>0?A.slice(1):A),h.current=C},[p]);return j.useImperativeHandle(n,()=>({pulsate:x,start:f,stop:v}),[x,f,v]),pe.jsx(_C,ie({className:ut(Fn.root,o.root,s),ref:_},a,{children:pe.jsx(mm,{component:null,exit:!0,children:l})}))});function SC(t){return fi("MuiButtonBase",t)}const MC=di("MuiButtonBase",["root","disabled","focusVisible"]),EC=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],TC=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:i,classes:r}=t,s=Ci({root:["root",e&&"disabled",n&&"focusVisible"]},SC,r);return n&&i&&(s.root+=` ${i}`),s},wC=Wt("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${MC.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),AC=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:s,className:a,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:h=!1,focusRipple:d=!1,LinkComponent:p="a",onBlur:g,onClick:_,onContextMenu:m,onDragLeave:f,onFocus:x,onFocusVisible:v,onKeyDown:y,onKeyUp:C,onMouseDown:A,onMouseLeave:E,onMouseUp:P,onTouchEnd:w,onTouchMove:S,onTouchStart:R,tabIndex:k=0,TouchRippleProps:O,touchRippleRef:B,type:X}=i,F=wt(i,EC),W=j.useRef(null),L=j.useRef(null),Y=fo(L,B),{isFocusVisibleRef:K,onFocus:se,onBlur:Me,ref:Be}=Fw(),[$,J]=j.useState(!1);c&&$&&J(!1),j.useImperativeHandle(r,()=>({focusVisible:()=>{J(!0),W.current.focus()}}),[]);const[ue,he]=j.useState(!1);j.useEffect(()=>{he(!0)},[]);const Pe=ue&&!u&&!c;j.useEffect(()=>{$&&d&&!u&&ue&&L.current.pulsate()},[u,d,$,ue]);function we(le,re,ge=h){return ns(He=>(re&&re(He),!ge&&L.current&&L.current[le](He),!0))}const Oe=we("start",A),st=we("stop",m),D=we("stop",f),tt=we("stop",P),Ge=we("stop",le=>{$&&le.preventDefault(),E&&E(le)}),Ye=we("start",R),Ee=we("stop",w),_t=we("stop",S),Ie=we("stop",le=>{Me(le),K.current===!1&&J(!1),g&&g(le)},!1),Ne=ns(le=>{W.current||(W.current=le.currentTarget),se(le),K.current===!0&&(J(!0),v&&v(le)),x&&x(le)}),b=()=>{const le=W.current;return l&&l!=="button"&&!(le.tagName==="A"&&le.href)},M=j.useRef(!1),G=ns(le=>{d&&!M.current&&$&&L.current&&le.key===" "&&(M.current=!0,L.current.stop(le,()=>{L.current.start(le)})),le.target===le.currentTarget&&b()&&le.key===" "&&le.preventDefault(),y&&y(le),le.target===le.currentTarget&&b()&&le.key==="Enter"&&!c&&(le.preventDefault(),_&&_(le))}),ee=ns(le=>{d&&le.key===" "&&L.current&&$&&!le.defaultPrevented&&(M.current=!1,L.current.stop(le,()=>{L.current.pulsate(le)})),C&&C(le),_&&le.target===le.currentTarget&&b()&&le.key===" "&&!le.defaultPrevented&&_(le)});let te=l;te==="button"&&(F.href||F.to)&&(te=p);const Q={};te==="button"?(Q.type=X===void 0?"button":X,Q.disabled=c):(!F.href&&!F.to&&(Q.role="button"),c&&(Q["aria-disabled"]=c));const Ae=fo(n,Be,W),fe=ie({},i,{centerRipple:o,component:l,disabled:c,disableRipple:u,disableTouchRipple:h,focusRipple:d,tabIndex:k,focusVisible:$}),ve=TC(fe);return pe.jsxs(wC,ie({as:te,className:ut(ve.root,a),ownerState:fe,onBlur:Ie,onClick:_,onContextMenu:st,onFocus:Ne,onKeyDown:G,onKeyUp:ee,onMouseDown:Oe,onMouseLeave:Ge,onMouseUp:tt,onDragLeave:D,onTouchEnd:Ee,onTouchMove:_t,onTouchStart:Ye,ref:Ae,tabIndex:c?-1:k,type:X},Q,F,{children:[s,Pe?pe.jsx(yC,ie({ref:Y,center:o},O)):null]}))});function CC(t){return fi("MuiTypography",t)}di("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const bC=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],RC=t=>{const{align:e,gutterBottom:n,noWrap:i,paragraph:r,variant:o,classes:s}=t,a={root:["root",o,t.align!=="inherit"&&`align${Tt(e)}`,n&&"gutterBottom",i&&"noWrap",r&&"paragraph"]};return Ci(a,CC,s)},PC=Wt("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${Tt(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>ie({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),T0={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},LC={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},DC=t=>LC[t]||t,Go=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiTypography"}),r=DC(i.color),o=gy(ie({},i,{color:r})),{align:s="inherit",className:a,component:l,gutterBottom:c=!1,noWrap:u=!1,paragraph:h=!1,variant:d="body1",variantMapping:p=T0}=o,g=wt(o,bC),_=ie({},o,{align:s,color:r,className:a,component:l,gutterBottom:c,noWrap:u,paragraph:h,variant:d,variantMapping:p}),m=l||(h?"p":p[d]||T0[d])||"span",f=RC(_);return pe.jsx(PC,ie({as:m,ref:n,ownerState:_,className:ut(f.root,a)},g))});function IC(t){return typeof t=="function"?t():t}const NC=j.forwardRef(function(e,n){const{children:i,container:r,disablePortal:o=!1}=e,[s,a]=j.useState(null),l=fo(j.isValidElement(i)?i.ref:null,n);if(hh(()=>{o||a(IC(r)||document.body)},[r,o]),hh(()=>{if(s&&!o)return ph(n,s),()=>{ph(n,null)}},[n,s,o]),o){if(j.isValidElement(i)){const c={ref:l};return j.cloneElement(i,c)}return pe.jsx(j.Fragment,{children:i})}return pe.jsx(j.Fragment,{children:s&&qp.createPortal(i,s)})}),UC=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],OC={entering:{opacity:1},entered:{opacity:1}},Fy=j.forwardRef(function(e,n){const i=Dy(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:o,appear:s=!0,children:a,easing:l,in:c,onEnter:u,onEntered:h,onEntering:d,onExit:p,onExited:g,onExiting:_,style:m,timeout:f=r,TransitionComponent:x=Qi}=e,v=wt(e,UC),y=j.useRef(null),C=fo(y,a.ref,n),A=B=>X=>{if(B){const F=y.current;X===void 0?B(F):B(F,X)}},E=A(d),P=A((B,X)=>{aC(B);const F=x0({style:m,timeout:f,easing:l},{mode:"enter"});B.style.webkitTransition=i.transitions.create("opacity",F),B.style.transition=i.transitions.create("opacity",F),u&&u(B,X)}),w=A(h),S=A(_),R=A(B=>{const X=x0({style:m,timeout:f,easing:l},{mode:"exit"});B.style.webkitTransition=i.transitions.create("opacity",X),B.style.transition=i.transitions.create("opacity",X),p&&p(B)}),k=A(g),O=B=>{o&&o(y.current,B)};return pe.jsx(x,ie({appear:s,in:c,nodeRef:y,onEnter:P,onEntered:w,onEntering:E,onExit:R,onExited:k,onExiting:S,addEndListener:O,timeout:f},v,{children:(B,X)=>j.cloneElement(a,ie({style:ie({opacity:0,visibility:B==="exited"&&!c?"hidden":void 0},OC[B],m,a.props.style),ref:C},X))}))});function FC(t){return fi("MuiBackdrop",t)}di("MuiBackdrop",["root","invisible"]);const kC=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],BC=t=>{const{classes:e,invisible:n}=t;return Ci({root:["root",n&&"invisible"]},FC,e)},zC=Wt("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.invisible&&e.invisible]}})(({ownerState:t})=>ie({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})),ky=j.forwardRef(function(e,n){var i,r,o;const s=hi({props:e,name:"MuiBackdrop"}),{children:a,className:l,component:c="div",components:u={},componentsProps:h={},invisible:d=!1,open:p,slotProps:g={},slots:_={},TransitionComponent:m=Fy,transitionDuration:f}=s,x=wt(s,kC),v=ie({},s,{component:c,invisible:d}),y=BC(v),C=(i=g.root)!=null?i:h.root;return pe.jsx(m,ie({in:p,timeout:f},x,{children:pe.jsx(zC,ie({"aria-hidden":!0},C,{as:(r=(o=_.root)!=null?o:u.Root)!=null?r:c,className:ut(y.root,l,C==null?void 0:C.className),ownerState:ie({},v,C==null?void 0:C.ownerState),classes:y,ref:n,children:a}))}))});function HC(t){return fi("MuiButton",t)}const wl=di("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),VC=j.createContext({}),GC=j.createContext(void 0),WC=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],$C=t=>{const{color:e,disableElevation:n,fullWidth:i,size:r,variant:o,classes:s}=t,a={root:["root",o,`${o}${Tt(e)}`,`size${Tt(r)}`,`${o}Size${Tt(r)}`,`color${Tt(e)}`,n&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Tt(r)}`],endIcon:["icon","endIcon",`iconSize${Tt(r)}`]},l=Ci(a,HC,s);return ie({},s,l)},By=t=>ie({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),XC=Wt(AC,{shouldForwardProp:t=>Ny(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${Tt(n.color)}`],e[`size${Tt(n.size)}`],e[`${n.variant}Size${Tt(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})(({theme:t,ownerState:e})=>{var n,i;const r=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],o=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return ie({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":ie({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:is(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:is(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:is(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":ie({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${wl.focusVisible}`]:ie({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${wl.disabled}`]:ie({color:(t.vars||t).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${is(t.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(n=(i=t.palette).getContrastText)==null?void 0:n.call(i,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:r,boxShadow:(t.vars||t).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${wl.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${wl.disabled}`]:{boxShadow:"none"}}),jC=Wt("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${Tt(n.size)}`]]}})(({ownerState:t})=>ie({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},By(t))),YC=Wt("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${Tt(n.size)}`]]}})(({ownerState:t})=>ie({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},By(t))),Al=j.forwardRef(function(e,n){const i=j.useContext(VC),r=j.useContext(GC),o=jc(i,e),s=hi({props:o,name:"MuiButton"}),{children:a,color:l="primary",component:c="button",className:u,disabled:h=!1,disableElevation:d=!1,disableFocusRipple:p=!1,endIcon:g,focusVisibleClassName:_,fullWidth:m=!1,size:f="medium",startIcon:x,type:v,variant:y="text"}=s,C=wt(s,WC),A=ie({},s,{color:l,component:c,disabled:h,disableElevation:d,disableFocusRipple:p,fullWidth:m,size:f,type:v,variant:y}),E=$C(A),P=x&&pe.jsx(jC,{className:E.startIcon,ownerState:A,children:x}),w=g&&pe.jsx(YC,{className:E.endIcon,ownerState:A,children:g}),S=r||"";return pe.jsxs(XC,ie({ownerState:A,className:ut(i.className,E.root,u,S),component:c,disabled:h,focusRipple:!p,focusVisibleClassName:ut(E.focusVisible,_),ref:n,type:v},C,{classes:E,children:[P,a,w]}))});function qC(t){const e=Tr(t);return e.body===t?um(t).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function ma(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function w0(t){return parseInt(um(t).getComputedStyle(t).paddingRight,10)||0}function KC(t){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(t.tagName)!==-1,i=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return n||i}function A0(t,e,n,i,r){const o=[e,n,...i];[].forEach.call(t.children,s=>{const a=o.indexOf(s)===-1,l=!KC(s);a&&l&&ma(s,r)})}function Bf(t,e){let n=-1;return t.some((i,r)=>e(i)?(n=r,!0):!1),n}function ZC(t,e){const n=[],i=t.container;if(!e.disableScrollLock){if(qC(i)){const s=kw(Tr(i));n.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight=`${w0(i)+s}px`;const a=Tr(i).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${w0(l)+s}px`})}let o;if(i.parentNode instanceof DocumentFragment)o=Tr(i).body;else{const s=i.parentElement,a=um(i);o=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:i}n.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{n.forEach(({value:o,el:s,property:a})=>{o?s.style.setProperty(a,o):s.style.removeProperty(a)})}}function QC(t){const e=[];return[].forEach.call(t.children,n=>{n.getAttribute("aria-hidden")==="true"&&e.push(n)}),e}class JC{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,n){let i=this.modals.indexOf(e);if(i!==-1)return i;i=this.modals.length,this.modals.push(e),e.modalRef&&ma(e.modalRef,!1);const r=QC(n);A0(n,e.mount,e.modalRef,r,!0);const o=Bf(this.containers,s=>s.container===n);return o!==-1?(this.containers[o].modals.push(e),i):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:r}),i)}mount(e,n){const i=Bf(this.containers,o=>o.modals.indexOf(e)!==-1),r=this.containers[i];r.restore||(r.restore=ZC(r,n))}remove(e,n=!0){const i=this.modals.indexOf(e);if(i===-1)return i;const r=Bf(this.containers,s=>s.modals.indexOf(e)!==-1),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(i,1),o.modals.length===0)o.restore&&o.restore(),e.modalRef&&ma(e.modalRef,n),A0(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const s=o.modals[o.modals.length-1];s.modalRef&&ma(s.modalRef,!1)}return i}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}const eb=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function tb(t){const e=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(e)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e}function nb(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const e=i=>t.ownerDocument.querySelector(`input[type="radio"]${i}`);let n=e(`[name="${t.name}"]:checked`);return n||(n=e(`[name="${t.name}"]`)),n!==t}function ib(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||nb(t))}function rb(t){const e=[],n=[];return Array.from(t.querySelectorAll(eb)).forEach((i,r)=>{const o=tb(i);o===-1||!ib(i)||(o===0?e.push(i):n.push({documentOrder:r,tabIndex:o,node:i}))}),n.sort((i,r)=>i.tabIndex===r.tabIndex?i.documentOrder-r.documentOrder:i.tabIndex-r.tabIndex).map(i=>i.node).concat(e)}function ob(){return!0}function sb(t){const{children:e,disableAutoFocus:n=!1,disableEnforceFocus:i=!1,disableRestoreFocus:r=!1,getTabbable:o=rb,isEnabled:s=ob,open:a}=t,l=j.useRef(!1),c=j.useRef(null),u=j.useRef(null),h=j.useRef(null),d=j.useRef(null),p=j.useRef(!1),g=j.useRef(null),_=fo(e.ref,g),m=j.useRef(null);j.useEffect(()=>{!a||!g.current||(p.current=!n)},[n,a]),j.useEffect(()=>{if(!a||!g.current)return;const v=Tr(g.current);return g.current.contains(v.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),p.current&&g.current.focus()),()=>{r||(h.current&&h.current.focus&&(l.current=!0,h.current.focus()),h.current=null)}},[a]),j.useEffect(()=>{if(!a||!g.current)return;const v=Tr(g.current),y=E=>{m.current=E,!(i||!s()||E.key!=="Tab")&&v.activeElement===g.current&&E.shiftKey&&(l.current=!0,u.current&&u.current.focus())},C=()=>{const E=g.current;if(E===null)return;if(!v.hasFocus()||!s()||l.current){l.current=!1;return}if(E.contains(v.activeElement)||i&&v.activeElement!==c.current&&v.activeElement!==u.current)return;if(v.activeElement!==d.current)d.current=null;else if(d.current!==null)return;if(!p.current)return;let P=[];if((v.activeElement===c.current||v.activeElement===u.current)&&(P=o(g.current)),P.length>0){var w,S;const R=!!((w=m.current)!=null&&w.shiftKey&&((S=m.current)==null?void 0:S.key)==="Tab"),k=P[0],O=P[P.length-1];typeof k!="string"&&typeof O!="string"&&(R?O.focus():k.focus())}else E.focus()};v.addEventListener("focusin",C),v.addEventListener("keydown",y,!0);const A=setInterval(()=>{v.activeElement&&v.activeElement.tagName==="BODY"&&C()},50);return()=>{clearInterval(A),v.removeEventListener("focusin",C),v.removeEventListener("keydown",y,!0)}},[n,i,r,s,a,o]);const f=v=>{h.current===null&&(h.current=v.relatedTarget),p.current=!0,d.current=v.target;const y=e.props.onFocus;y&&y(v)},x=v=>{h.current===null&&(h.current=v.relatedTarget),p.current=!0};return pe.jsxs(j.Fragment,{children:[pe.jsx("div",{tabIndex:a?0:-1,onFocus:x,ref:c,"data-testid":"sentinelStart"}),j.cloneElement(e,{ref:_,onFocus:f}),pe.jsx("div",{tabIndex:a?0:-1,onFocus:x,ref:u,"data-testid":"sentinelEnd"})]})}function ab(t){return typeof t=="function"?t():t}function lb(t){return t?t.props.hasOwnProperty("in"):!1}const cb=new JC;function ub(t){const{container:e,disableEscapeKeyDown:n=!1,disableScrollLock:i=!1,manager:r=cb,closeAfterTransition:o=!1,onTransitionEnter:s,onTransitionExited:a,children:l,onClose:c,open:u,rootRef:h}=t,d=j.useRef({}),p=j.useRef(null),g=j.useRef(null),_=fo(g,h),[m,f]=j.useState(!u),x=lb(l);let v=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(v=!1);const y=()=>Tr(p.current),C=()=>(d.current.modalRef=g.current,d.current.mount=p.current,d.current),A=()=>{r.mount(C(),{disableScrollLock:i}),g.current&&(g.current.scrollTop=0)},E=ns(()=>{const F=ab(e)||y().body;r.add(C(),F),g.current&&A()}),P=j.useCallback(()=>r.isTopModal(C()),[r]),w=ns(F=>{p.current=F,F&&(u&&P()?A():g.current&&ma(g.current,v))}),S=j.useCallback(()=>{r.remove(C(),v)},[v,r]);j.useEffect(()=>()=>{S()},[S]),j.useEffect(()=>{u?E():(!x||!o)&&S()},[u,S,x,o,E]);const R=F=>W=>{var L;(L=F.onKeyDown)==null||L.call(F,W),!(W.key!=="Escape"||W.which===229||!P())&&(n||(W.stopPropagation(),c&&c(W,"escapeKeyDown")))},k=F=>W=>{var L;(L=F.onClick)==null||L.call(F,W),W.target===W.currentTarget&&c&&c(W,"backdropClick")};return{getRootProps:(F={})=>{const W=My(t);delete W.onTransitionEnter,delete W.onTransitionExited;const L=ie({},W,F);return ie({role:"presentation"},L,{onKeyDown:R(L),ref:_})},getBackdropProps:(F={})=>{const W=F;return ie({"aria-hidden":!0},W,{onClick:k(W),open:u})},getTransitionProps:()=>{const F=()=>{f(!1),s&&s()},W=()=>{f(!0),a&&a(),o&&S()};return{onEnter:i0(F,l==null?void 0:l.props.onEnter),onExited:i0(W,l==null?void 0:l.props.onExited)}},rootRef:_,portalRef:w,isTopModal:P,exited:m,hasTransition:x}}function fb(t){return fi("MuiModal",t)}di("MuiModal",["root","hidden","backdrop"]);const db=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],hb=t=>{const{open:e,exited:n,classes:i}=t;return Ci({root:["root",!e&&n&&"hidden"],backdrop:["backdrop"]},fb,i)},pb=Wt("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.open&&n.exited&&e.hidden]}})(({theme:t,ownerState:e})=>ie({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0},!e.open&&e.exited&&{visibility:"hidden"})),mb=Wt(ky,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,e)=>e.backdrop})({zIndex:-1}),gb=j.forwardRef(function(e,n){var i,r,o,s,a,l;const c=hi({name:"MuiModal",props:e}),{BackdropComponent:u=mb,BackdropProps:h,className:d,closeAfterTransition:p=!1,children:g,container:_,component:m,components:f={},componentsProps:x={},disableAutoFocus:v=!1,disableEnforceFocus:y=!1,disableEscapeKeyDown:C=!1,disablePortal:A=!1,disableRestoreFocus:E=!1,disableScrollLock:P=!1,hideBackdrop:w=!1,keepMounted:S=!1,onBackdropClick:R,open:k,slotProps:O,slots:B}=c,X=wt(c,db),F=ie({},c,{closeAfterTransition:p,disableAutoFocus:v,disableEnforceFocus:y,disableEscapeKeyDown:C,disablePortal:A,disableRestoreFocus:E,disableScrollLock:P,hideBackdrop:w,keepMounted:S}),{getRootProps:W,getBackdropProps:L,getTransitionProps:Y,portalRef:K,isTopModal:se,exited:Me,hasTransition:Be}=ub(ie({},F,{rootRef:n})),$=ie({},F,{exited:Me}),J=hb($),ue={};if(g.props.tabIndex===void 0&&(ue.tabIndex="-1"),Be){const{onEnter:tt,onExited:Ge}=Y();ue.onEnter=tt,ue.onExited=Ge}const he=(i=(r=B==null?void 0:B.root)!=null?r:f.Root)!=null?i:pb,Pe=(o=(s=B==null?void 0:B.backdrop)!=null?s:f.Backdrop)!=null?o:u,we=(a=O==null?void 0:O.root)!=null?a:x.root,Oe=(l=O==null?void 0:O.backdrop)!=null?l:x.backdrop,st=l0({elementType:he,externalSlotProps:we,externalForwardedProps:X,getSlotProps:W,additionalProps:{ref:n,as:m},ownerState:$,className:ut(d,we==null?void 0:we.className,J==null?void 0:J.root,!$.open&&$.exited&&(J==null?void 0:J.hidden))}),D=l0({elementType:Pe,externalSlotProps:Oe,additionalProps:h,getSlotProps:tt=>L(ie({},tt,{onClick:Ge=>{R&&R(Ge),tt!=null&&tt.onClick&&tt.onClick(Ge)}})),className:ut(Oe==null?void 0:Oe.className,h==null?void 0:h.className,J==null?void 0:J.backdrop),ownerState:$});return!S&&!k&&(!Be||Me)?null:pe.jsx(NC,{ref:K,container:_,disablePortal:A,children:pe.jsxs(he,ie({},st,{children:[!w&&u?pe.jsx(Pe,ie({},D)):null,pe.jsx(sb,{disableEnforceFocus:y,disableAutoFocus:v,disableRestoreFocus:E,isEnabled:se,open:k,children:j.cloneElement(g,ue)})]}))})});function vb(t){return fi("MuiDialog",t)}const zf=di("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),zy=j.createContext({}),_b=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],xb=Wt(ky,{name:"MuiDialog",slot:"Backdrop",overrides:(t,e)=>e.backdrop})({zIndex:-1}),yb=t=>{const{classes:e,scroll:n,maxWidth:i,fullWidth:r,fullScreen:o}=t,s={root:["root"],container:["container",`scroll${Tt(n)}`],paper:["paper",`paperScroll${Tt(n)}`,`paperWidth${Tt(String(i))}`,r&&"paperFullWidth",o&&"paperFullScreen"]};return Ci(s,vb,e)},Sb=Wt(gb,{name:"MuiDialog",slot:"Root",overridesResolver:(t,e)=>e.root})({"@media print":{position:"absolute !important"}}),Mb=Wt("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.container,e[`scroll${Tt(n.scroll)}`]]}})(({ownerState:t})=>ie({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Eb=Wt(Oy,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`scrollPaper${Tt(n.scroll)}`],e[`paperWidth${Tt(String(n.maxWidth))}`],n.fullWidth&&e.paperFullWidth,n.fullScreen&&e.paperFullScreen]}})(({theme:t,ownerState:e})=>ie({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${zf.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`,[`&.${zf.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${zf.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),C0=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiDialog"}),r=Dy(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":s,"aria-labelledby":a,BackdropComponent:l,BackdropProps:c,children:u,className:h,disableEscapeKeyDown:d=!1,fullScreen:p=!1,fullWidth:g=!1,maxWidth:_="sm",onBackdropClick:m,onClick:f,onClose:x,open:v,PaperComponent:y=Oy,PaperProps:C={},scroll:A="paper",TransitionComponent:E=Fy,transitionDuration:P=o,TransitionProps:w}=i,S=wt(i,_b),R=ie({},i,{disableEscapeKeyDown:d,fullScreen:p,fullWidth:g,maxWidth:_,scroll:A}),k=yb(R),O=j.useRef(),B=L=>{O.current=L.target===L.currentTarget},X=L=>{f&&f(L),O.current&&(O.current=null,m&&m(L),x&&x(L,"backdropClick"))},F=ww(a),W=j.useMemo(()=>({titleId:F}),[F]);return pe.jsx(Sb,ie({className:ut(k.root,h),closeAfterTransition:!0,components:{Backdrop:xb},componentsProps:{backdrop:ie({transitionDuration:P,as:l},c)},disableEscapeKeyDown:d,onClose:x,open:v,ref:n,onClick:X,ownerState:R},S,{children:pe.jsx(E,ie({appear:!0,in:v,timeout:P,role:"presentation"},w,{children:pe.jsx(Mb,{className:ut(k.container),onMouseDown:B,ownerState:R,children:pe.jsx(Eb,ie({as:y,elevation:24,role:"dialog","aria-describedby":s,"aria-labelledby":F},C,{className:ut(k.paper,C.className),ownerState:R,children:pe.jsx(zy.Provider,{value:W,children:u})}))})}))}))});function Tb(t){return fi("MuiDialogActions",t)}di("MuiDialogActions",["root","spacing"]);const wb=["className","disableSpacing"],Ab=t=>{const{classes:e,disableSpacing:n}=t;return Ci({root:["root",!n&&"spacing"]},Tb,e)},Cb=Wt("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableSpacing&&e.spacing]}})(({ownerState:t})=>ie({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),b0=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:o=!1}=i,s=wt(i,wb),a=ie({},i,{disableSpacing:o}),l=Ab(a);return pe.jsx(Cb,ie({className:ut(l.root,r),ownerState:a,ref:n},s))});function bb(t){return fi("MuiDialogContent",t)}di("MuiDialogContent",["root","dividers"]);function Rb(t){return fi("MuiDialogTitle",t)}const Pb=di("MuiDialogTitle",["root"]),Lb=["className","dividers"],Db=t=>{const{classes:e,dividers:n}=t;return Ci({root:["root",n&&"dividers"]},bb,e)},Ib=Wt("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.dividers&&e.dividers]}})(({theme:t,ownerState:e})=>ie({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${Pb.root} + &`]:{paddingTop:0}})),R0=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiDialogContent"}),{className:r,dividers:o=!1}=i,s=wt(i,Lb),a=ie({},i,{dividers:o}),l=Db(a);return pe.jsx(Ib,ie({className:ut(l.root,r),ownerState:a,ref:n},s))}),Nb=["className","id"],Ub=t=>{const{classes:e}=t;return Ci({root:["root"]},Rb,e)},Ob=Wt(Go,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Fb=j.forwardRef(function(e,n){const i=hi({props:e,name:"MuiDialogTitle"}),{className:r,id:o}=i,s=wt(i,Nb),a=i,l=Ub(a),{titleId:c=o}=j.useContext(zy);return pe.jsx(Ob,ie({component:"h2",className:ut(l.root,r),ownerState:a,ref:n,variant:"h6",id:o??c},s))});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gm="167",kb=0,P0=1,Bb=2,Hy=1,zb=2,Ni=3,Rr=0,_n=1,Fi=2,wr=0,hs=1,L0=2,D0=3,I0=4,Hb=5,qr=100,Vb=101,Gb=102,Wb=103,$b=104,Xb=200,jb=201,Yb=202,qb=203,yh=204,Sh=205,Kb=206,Zb=207,Qb=208,Jb=209,eR=210,tR=211,nR=212,iR=213,rR=214,oR=0,sR=1,aR=2,Kc=3,lR=4,cR=5,uR=6,fR=7,Vy=0,dR=1,hR=2,Ar=0,pR=1,mR=2,gR=3,vR=4,_R=5,xR=6,yR=7,Gy=300,Ts=301,ws=302,Mh=303,Eh=304,Qu=306,Th=1e3,to=1001,wh=1002,Gn=1003,SR=1004,Cl=1005,oi=1006,Hf=1007,no=1008,qi=1009,Wy=1010,$y=1011,Ba=1012,vm=1013,ho=1014,zi=1015,Za=1016,_m=1017,xm=1018,As=1020,Xy=35902,jy=1021,Yy=1022,ai=1023,qy=1024,Ky=1025,ps=1026,Cs=1027,Zy=1028,ym=1029,Qy=1030,Sm=1031,Mm=1033,mc=33776,gc=33777,vc=33778,_c=33779,Ah=35840,Ch=35841,bh=35842,Rh=35843,Ph=36196,Lh=37492,Dh=37496,Ih=37808,Nh=37809,Uh=37810,Oh=37811,Fh=37812,kh=37813,Bh=37814,zh=37815,Hh=37816,Vh=37817,Gh=37818,Wh=37819,$h=37820,Xh=37821,xc=36492,jh=36494,Yh=36495,Jy=36283,qh=36284,Kh=36285,Zh=36286,MR=3200,ER=3201,TR=0,wR=1,hr="",vi="srgb",Ur="srgb-linear",Em="display-p3",Ju="display-p3-linear",Zc="linear",ct="srgb",Qc="rec709",Jc="p3",wo=7680,N0=519,AR=512,CR=513,bR=514,eS=515,RR=516,PR=517,LR=518,DR=519,U0=35044,O0="300 es",Hi=2e3,eu=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=Math.PI/180,Qh=180/Math.PI;function Qa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function hn(t,e,n){return Math.max(e,Math.min(n,t))}function IR(t,e){return(t%e+e)%e}function Gf(t,e,n){return(1-n)*t+n*e}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,o,s,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],x=r[1],v=r[4],y=r[7],C=r[2],A=r[5],E=r[8];return o[0]=s*_+a*x+l*C,o[3]=s*m+a*v+l*A,o[6]=s*f+a*y+l*E,o[1]=c*_+u*x+h*C,o[4]=c*m+u*v+h*A,o[7]=c*f+u*y+h*E,o[2]=d*_+p*x+g*C,o[5]=d*m+p*v+g*A,o[8]=d*f+p*y+g*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*o,p=c*o-s*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*s)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wf.makeScale(e,n)),this}rotate(e){return this.premultiply(Wf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wf=new ke;function tS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NR(){const t=za("canvas");return t.style.display="block",t}const F0={};function ga(t){t in F0||(F0[t]=!0,console.warn(t))}function UR(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const k0=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),B0=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[Ur]:{transfer:Zc,primaries:Qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[vi]:{transfer:ct,primaries:Qc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ju]:{transfer:Zc,primaries:Jc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(B0),fromReference:t=>t.applyMatrix3(k0)},[Em]:{transfer:ct,primaries:Jc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(B0),fromReference:t=>t.applyMatrix3(k0).convertLinearToSRGB()}},OR=new Set([Ur,Ju]),Je={enabled:!0,_workingColorSpace:Ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!OR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ys[e].toReference,r=Ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===hr?Zc:Ys[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ys[e].luminanceCoefficients)}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $f(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ao;class FR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ao===void 0&&(Ao=za("canvas")),Ao.width=e.width,Ao.height=e.height;const i=Ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ao}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=za("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ms(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kR=0;class nS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=Qa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Xf(r[s].image)):o.push(Xf(r[s]))}else o=Xf(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Xf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?FR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BR=0;class ln extends Us{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=to,r=to,o=oi,s=no,a=ai,l=qi,c=ln.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=Qa(),this.name="",this.source=new nS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case to:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case to:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Gy;ln.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(f+1)/2,A=(u+d)/4,E=(h+_)/4,P=(g+m)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=A/i,o=E/i):y>C?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=A/r,o=P/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=E/o,r=P/o),this.set(i,r,o,n),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zR extends Us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new nS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class po extends zR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=to,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HR extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=to,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],g=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,f*x);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*x;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=o[s],d=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(z0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(z0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*c+s*h-a*u,this.y=i+l*u+a*c-o*h,this.z=r+l*h+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new V,z0=new Ja;class el{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Jn):Jn.fromBufferAttribute(o,s),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Rl.subVectors(this.max,qs),Co.subVectors(e.a,qs),bo.subVectors(e.b,qs),Ro.subVectors(e.c,qs),nr.subVectors(bo,Co),ir.subVectors(Ro,bo),Fr.subVectors(Co,Ro);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Fr.z,Fr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Fr.z,0,-Fr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Fr.y,Fr.x,0];return!Yf(n,Co,bo,Ro,Rl)||(n=[1,0,0,0,1,0,0,0,1],!Yf(n,Co,bo,Ro,Rl))?!1:(Pl.crossVectors(nr,ir),n=[Pl.x,Pl.y,Pl.z],Yf(n,Co,bo,Ro,Rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new V,new V,new V,new V,new V,new V,new V,new V],Jn=new V,bl=new el,Co=new V,bo=new V,Ro=new V,nr=new V,ir=new V,Fr=new V,qs=new V,Rl=new V,Pl=new V,kr=new V;function Yf(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){kr.fromArray(t,o);const a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),c=n.dot(kr),u=i.dot(kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VR=new el,Ks=new V,qf=new V;class ef{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VR.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(qf)),this.expandByPoint(Ks.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new V,Kf=new V,Ll=new V,rr=new V,Zf=new V,Dl=new V,Qf=new V;class rS{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kf.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(Kf);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ll),a=rr.dot(this.direction),l=-rr.dot(Ll),c=rr.lengthSq(),u=Math.abs(1-s*s);let h,d,p,g;if(u>0)if(h=s*l-a,d=s*a-l,g=o*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Kf).addScaledVector(Ll,d),p}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,o){Zf.subVectors(n,e),Dl.subVectors(i,e),Qf.crossVectors(Zf,Dl);let s=this.direction.dot(Qf),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(rr,Dl));if(l<0)return null;const c=a*this.direction.dot(Zf.cross(rr));if(c<0||l+c>s)return null;const u=-a*rr.dot(Qf);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,o,s,a,l,c,u,h,d,p,g,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,h,d,p,g,_,m)}set(e,n,i,r,o,s,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Po.setFromMatrixColumn(e,0).length(),o=1/Po.setFromMatrixColumn(e,1).length(),s=1/Po.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*u,p=s*h,g=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;n[0]=d+_*a,n[4]=g*a-p,n[8]=s*c,n[1]=s*h,n[5]=s*u,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;n[0]=d-_*a,n[4]=-s*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*u,n[9]=_-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*u,p=s*h,g=a*u,_=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*h,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*h,n[8]=g*h+p,n[1]=h,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-_*h}else if(e.order==="XZY"){const d=s*l,p=s*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+_,n[5]=s*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GR,e,WR)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),or.crossVectors(i,En),or.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),or.crossVectors(i,En)),or.normalize(),Il.crossVectors(En,or),r[0]=or.x,r[4]=Il.x,r[8]=En.x,r[1]=or.y,r[5]=Il.y,r[9]=En.y,r[2]=or.z,r[6]=Il.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],x=i[3],v=i[7],y=i[11],C=i[15],A=r[0],E=r[4],P=r[8],w=r[12],S=r[1],R=r[5],k=r[9],O=r[13],B=r[2],X=r[6],F=r[10],W=r[14],L=r[3],Y=r[7],K=r[11],se=r[15];return o[0]=s*A+a*S+l*B+c*L,o[4]=s*E+a*R+l*X+c*Y,o[8]=s*P+a*k+l*F+c*K,o[12]=s*w+a*O+l*W+c*se,o[1]=u*A+h*S+d*B+p*L,o[5]=u*E+h*R+d*X+p*Y,o[9]=u*P+h*k+d*F+p*K,o[13]=u*w+h*O+d*W+p*se,o[2]=g*A+_*S+m*B+f*L,o[6]=g*E+_*R+m*X+f*Y,o[10]=g*P+_*k+m*F+f*K,o[14]=g*w+_*O+m*W+f*se,o[3]=x*A+v*S+y*B+C*L,o[7]=x*E+v*R+y*X+C*Y,o[11]=x*P+v*k+y*F+C*K,o[15]=x*w+v*O+y*W+C*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+o*l*h-r*c*h-o*a*d+i*c*d+r*a*p-i*l*p)+_*(+n*l*p-n*c*d+o*s*d-r*s*p+r*c*u-o*l*u)+m*(+n*c*h-n*a*p-o*s*h+i*s*p+o*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*s*h-i*s*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,v=g*d*c-u*m*c-g*l*p+s*m*p+u*l*f-s*d*f,y=u*_*c-g*h*c+g*a*p-s*_*p-u*a*f+s*h*f,C=g*h*l-u*_*l-g*a*d+s*_*d+u*a*m-s*h*m,A=n*x+i*v+r*y+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=x*E,e[1]=(_*d*o-h*m*o-_*r*p+i*m*p+h*r*f-i*d*f)*E,e[2]=(a*m*o-_*l*o+_*r*c-i*m*c-a*r*f+i*l*f)*E,e[3]=(h*l*o-a*d*o-h*r*c+i*d*c+a*r*p-i*l*p)*E,e[4]=v*E,e[5]=(u*m*o-g*d*o+g*r*p-n*m*p-u*r*f+n*d*f)*E,e[6]=(g*l*o-s*m*o-g*r*c+n*m*c+s*r*f-n*l*f)*E,e[7]=(s*d*o-u*l*o+u*r*c-n*d*c-s*r*p+n*l*p)*E,e[8]=y*E,e[9]=(g*h*o-u*_*o-g*i*p+n*_*p+u*i*f-n*h*f)*E,e[10]=(s*_*o-g*a*o+g*i*c-n*_*c-s*i*f+n*a*f)*E,e[11]=(u*a*o-s*h*o-u*i*c+n*h*c+s*i*p-n*a*p)*E,e[12]=C*E,e[13]=(u*_*r-g*h*r+g*i*d-n*_*d-u*i*m+n*h*m)*E,e[14]=(g*a*r-s*_*r-g*i*l+n*_*l+s*i*m-n*a*m)*E,e[15]=(s*h*r-u*a*r+u*i*l-n*h*l-s*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,h=a+a,d=o*c,p=o*u,g=o*h,_=s*u,m=s*h,f=a*h,x=l*c,v=l*u,y=l*h,C=i.x,A=i.y,E=i.z;return r[0]=(1-(_+f))*C,r[1]=(p+y)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(d+f))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(g+v)*E,r[9]=(m-x)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Po.set(r[0],r[1],r[2]).length();const s=Po.set(r[4],r[5],r[6]).length(),a=Po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const c=1/o,u=1/s,h=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,n.setFromRotationMatrix(ei),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Hi){const l=this.elements,c=2*o/(n-e),u=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Hi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===eu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Hi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(s-o),d=(n+e)*c,p=(i+r)*u;let g,_;if(a===Hi)g=(s+o)*h,_=-2*h;else if(a===eu)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Po=new V,ei=new Nt,GR=new V(0,0,0),WR=new V(1,1,1),or=new V,Il=new V,En=new V,H0=new Nt,V0=new Ja;class Ki{constructor(e=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-hn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return H0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return V0.setFromEuler(this),this.setFromQuaternion(V0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class oS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $R=0;const G0=new V,Lo=new Ja,Li=new Nt,Nl=new V,Zs=new V,XR=new V,jR=new Ja,W0=new V(1,0,0),$0=new V(0,1,0),X0=new V(0,0,1),j0={type:"added"},YR={type:"removed"},Do={type:"childadded",child:null},Jf={type:"childremoved",child:null};class xn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$R++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new V,n=new Ki,i=new Ja,r=new V(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ke}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(W0,e)}rotateY(e){return this.rotateOnAxis($0,e)}rotateZ(e){return this.rotateOnAxis(X0,e)}translateOnAxis(e,n){return G0.copy(e).applyQuaternion(this.quaternion),this.position.add(G0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(W0,e)}translateY(e){return this.translateOnAxis($0,e)}translateZ(e){return this.translateOnAxis(X0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Nl.copy(e):Nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Zs,Nl,this.up):Li.lookAt(Nl,Zs,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(Li),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j0),Do.child=e,this.dispatchEvent(Do),Do.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YR),Jf.child=e,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j0),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,XR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,jR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new V(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new V,Di=new V,ed=new V,Ii=new V,Io=new V,No=new V,Y0=new V,td=new V,nd=new V,id=new V;class Mi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){ti.subVectors(r,n),Di.subVectors(i,n),ed.subVectors(e,n);const s=ti.dot(ti),a=ti.dot(Di),l=ti.dot(ed),c=Di.dot(Di),u=Di.dot(ed),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(s*u-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ii.x),l.addScaledVector(s,Ii.y),l.addScaledVector(a,Ii.z),l)}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Di.subVectors(e,n),ti.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ti.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Mi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Io.subVectors(r,i),No.subVectors(o,i),td.subVectors(e,i);const l=Io.dot(td),c=No.dot(td);if(l<=0&&c<=0)return n.copy(i);nd.subVectors(e,r);const u=Io.dot(nd),h=No.dot(nd);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Io,s);id.subVectors(e,o);const p=Io.dot(id),g=No.dot(id);if(g>=0&&p<=g)return n.copy(o);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(No,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Y0.subVectors(o,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(Y0,a);const f=1/(m+_+d);return s=_*f,a=d*f,n.copy(i).addScaledVector(Io,s).addScaledVector(No,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function rd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=IR(e,1),n=hn(n,0,1),i=hn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=rd(s,o,e+1/3),this.g=rd(s,o,e),this.b=rd(s,o,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=vi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=vi){const i=sS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=$f(e.r),this.g=$f(e.g),this.b=$f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return Je.fromWorkingColorSpace(en.copy(this),e),Math.round(hn(en.r*255,0,255))*65536+Math.round(hn(en.g*255,0,255))*256+Math.round(hn(en.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,o=en.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=vi){Je.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==vi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(Ul);const i=Gf(sr.h,Ul.h,n),r=Gf(sr.s,Ul.s,n),o=Gf(sr.l,Ul.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new nt;nt.NAMES=sS;let qR=0;class tl extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=hs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Sh,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==Sh&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class aS extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Vy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new V,Ol=new et;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=U0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ga("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(e),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),o=fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==U0&&(e.usage=this.usage),e}}class lS extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cS extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oo extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KR=0;const Un=new Nt,od=new xn,Uo=new V,Tn=new el,Qs=new el,Bt=new V;class Ji extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KR++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tS(e)?cS:lS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ke().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new oo(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ef);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Tn.min,Qs.min),Tn.expandByPoint(Bt),Bt.addVectors(Tn.max,Qs.max),Tn.expandByPoint(Bt)):(Tn.expandByPoint(Qs.min),Tn.expandByPoint(Qs.max))}Tn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Uo.fromBufferAttribute(e,c),Bt.add(Uo)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new V,l[P]=new V;const c=new V,u=new V,h=new V,d=new et,p=new et,g=new et,_=new V,m=new V;function f(P,w,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(o,P),p.fromBufferAttribute(o,w),g.fromBufferAttribute(o,S),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(_),a[w].add(_),a[S].add(_),l[P].add(m),l[w].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,w=x.length;P<w;++P){const S=x[P],R=S.start,k=S.count;for(let O=R,B=R+k;O<B;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new V,y=new V,C=new V,A=new V;function E(P){C.fromBufferAttribute(r,P),A.copy(C);const w=a[P];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(A,w);const R=y.dot(l[P])<0?-1:1;s.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,w=x.length;P<w;++P){const S=x[P],R=S.start,k=S.count;for(let O=R,B=R+k;O<B;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new V,o=new V,s=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new $n(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],h=o[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const q0=new Nt,Br=new rS,Fl=new ef,K0=new V,Oo=new V,Fo=new V,ko=new V,sd=new V,kl=new V,Bl=new et,zl=new et,Hl=new et,Z0=new V,Q0=new V,J0=new V,Vl=new V,Gl=new V;class Vi extends xn{constructor(e=new Ji,n=new aS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){kl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],h=o[l];u!==0&&(sd.fromBufferAttribute(h,e),s?kl.addScaledVector(sd,u):kl.addScaledVector(sd.sub(n),u))}n.add(kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(o),Br.copy(e.ray).recast(e.near),!(Fl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Fl,K0)===null||Br.origin.distanceToSquared(K0)>(e.far-e.near)**2))&&(q0.copy(o).invert(),Br.copy(e.ray).applyMatrix4(q0),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const A=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);r=Wl(this,f,e,i,c,u,h,A,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Wl(this,s,e,i,c,u,h,x,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=v;y<C;y+=3){const A=y,E=y+1,P=y+2;r=Wl(this,f,e,i,c,u,h,A,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,y=m+2;r=Wl(this,s,e,i,c,u,h,x,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ZR(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Rr,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function Wl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Oo),t.getVertexPosition(l,Fo),t.getVertexPosition(c,ko);const u=ZR(t,e,n,i,Oo,Fo,ko,Vl);if(u){r&&(Bl.fromBufferAttribute(r,a),zl.fromBufferAttribute(r,l),Hl.fromBufferAttribute(r,c),u.uv=Mi.getInterpolation(Vl,Oo,Fo,ko,Bl,zl,Hl,new et)),o&&(Bl.fromBufferAttribute(o,a),zl.fromBufferAttribute(o,l),Hl.fromBufferAttribute(o,c),u.uv1=Mi.getInterpolation(Vl,Oo,Fo,ko,Bl,zl,Hl,new et)),s&&(Z0.fromBufferAttribute(s,a),Q0.fromBufferAttribute(s,l),J0.fromBufferAttribute(s,c),u.normal=Mi.getInterpolation(Vl,Oo,Fo,ko,Z0,Q0,J0,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};Mi.getNormal(Oo,Fo,ko,h.normal),u.face=h}return u}class nl extends Ji{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new oo(c,3)),this.setAttribute("normal",new oo(u,3)),this.setAttribute("uv",new oo(h,2));function g(_,m,f,x,v,y,C,A,E,P,w){const S=y/E,R=C/P,k=y/2,O=C/2,B=A/2,X=E+1,F=P+1;let W=0,L=0;const Y=new V;for(let K=0;K<F;K++){const se=K*R-O;for(let Me=0;Me<X;Me++){const Be=Me*S-k;Y[_]=Be*x,Y[m]=se*v,Y[f]=B,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Me/E),h.push(1-K/P),W+=1}}for(let K=0;K<P;K++)for(let se=0;se<E;se++){const Me=d+se+X*K,Be=d+se+X*(K+1),$=d+(se+1)+X*(K+1),J=d+(se+1)+X*K;l.push(Me,Be,J),l.push(Be,$,J),L+=6}a.addGroup(p,L,w),p+=L,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function QR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const JR={clone:bs,merge:on};var eP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eP,this.fragmentShader=tP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=QR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fS extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new V,ev=new et,tv=new et;class Hn extends fS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,ev,tv),n.subVectors(tv,ev)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bo=-90,zo=1;class nP extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Bo,zo,e,n);r.layers=this.layers,this.add(r);const o=new Hn(Bo,zo,e,n);o.layers=this.layers,this.add(o);const s=new Hn(Bo,zo,e,n);s.layers=this.layers,this.add(s);const a=new Hn(Bo,zo,e,n);a.layers=this.layers,this.add(a);const l=new Hn(Bo,zo,e,n);l.layers=this.layers,this.add(l);const c=new Hn(Bo,zo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dS extends ln{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iP extends po{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nl(5,5,5),o=new Pr({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:wr});o.uniforms.tEquirect.value=n;const s=new Vi(r,o),a=n.minFilter;return n.minFilter===no&&(n.minFilter=oi),new nP(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const ad=new V,rP=new V,oP=new ke;class jr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ad.subVectors(i,n).cross(rP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oP.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new ef,$l=new V;class hS{constructor(e=new jr,n=new jr,i=new jr,r=new jr,o=new jr,s=new jr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-o,d-c,m-p,y-f).normalize(),i[1].setComponents(l+o,d+c,m+p,y+f).normalize(),i[2].setComponents(l+s,d+u,m+g,y+x).normalize(),i[3].setComponents(l-s,d-u,m-g,y-x).normalize(),i[4].setComponents(l-a,d-h,m-_,y-v).normalize(),n===Hi)i[5].setComponents(l+a,d+h,m+_,y+v).normalize();else if(n===eu)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($l.x=r.normal.x>0?e.max.x:e.min.x,$l.y=r.normal.y>0?e.max.y:e.min.y,$l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pS(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function sP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class tf extends Ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const x=f*d-s;for(let v=0;v<c;v++){const y=v*h-o;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,y=x+c*(f+1),C=x+1+c*(f+1),A=x+1+c*f;p.push(v,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new oo(g,3)),this.setAttribute("normal",new oo(_,3)),this.setAttribute("uv",new oo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.width,e.height,e.widthSegments,e.heightSegments)}}var aP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_P=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FP="gl_FragColor = linearToOutputTexel( gl_FragColor );",kP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$P=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,G2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_L=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ML=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:aP,alphahash_pars_fragment:lP,alphamap_fragment:cP,alphamap_pars_fragment:uP,alphatest_fragment:fP,alphatest_pars_fragment:dP,aomap_fragment:hP,aomap_pars_fragment:pP,batching_pars_vertex:mP,batching_vertex:gP,begin_vertex:vP,beginnormal_vertex:_P,bsdfs:xP,iridescence_fragment:yP,bumpmap_pars_fragment:SP,clipping_planes_fragment:MP,clipping_planes_pars_fragment:EP,clipping_planes_pars_vertex:TP,clipping_planes_vertex:wP,color_fragment:AP,color_pars_fragment:CP,color_pars_vertex:bP,color_vertex:RP,common:PP,cube_uv_reflection_fragment:LP,defaultnormal_vertex:DP,displacementmap_pars_vertex:IP,displacementmap_vertex:NP,emissivemap_fragment:UP,emissivemap_pars_fragment:OP,colorspace_fragment:FP,colorspace_pars_fragment:kP,envmap_fragment:BP,envmap_common_pars_fragment:zP,envmap_pars_fragment:HP,envmap_pars_vertex:VP,envmap_physical_pars_fragment:JP,envmap_vertex:GP,fog_vertex:WP,fog_pars_vertex:$P,fog_fragment:XP,fog_pars_fragment:jP,gradientmap_pars_fragment:YP,lightmap_pars_fragment:qP,lights_lambert_fragment:KP,lights_lambert_pars_fragment:ZP,lights_pars_begin:QP,lights_toon_fragment:e2,lights_toon_pars_fragment:t2,lights_phong_fragment:n2,lights_phong_pars_fragment:i2,lights_physical_fragment:r2,lights_physical_pars_fragment:o2,lights_fragment_begin:s2,lights_fragment_maps:a2,lights_fragment_end:l2,logdepthbuf_fragment:c2,logdepthbuf_pars_fragment:u2,logdepthbuf_pars_vertex:f2,logdepthbuf_vertex:d2,map_fragment:h2,map_pars_fragment:p2,map_particle_fragment:m2,map_particle_pars_fragment:g2,metalnessmap_fragment:v2,metalnessmap_pars_fragment:_2,morphinstance_vertex:x2,morphcolor_vertex:y2,morphnormal_vertex:S2,morphtarget_pars_vertex:M2,morphtarget_vertex:E2,normal_fragment_begin:T2,normal_fragment_maps:w2,normal_pars_fragment:A2,normal_pars_vertex:C2,normal_vertex:b2,normalmap_pars_fragment:R2,clearcoat_normal_fragment_begin:P2,clearcoat_normal_fragment_maps:L2,clearcoat_pars_fragment:D2,iridescence_pars_fragment:I2,opaque_fragment:N2,packing:U2,premultiplied_alpha_fragment:O2,project_vertex:F2,dithering_fragment:k2,dithering_pars_fragment:B2,roughnessmap_fragment:z2,roughnessmap_pars_fragment:H2,shadowmap_pars_fragment:V2,shadowmap_pars_vertex:G2,shadowmap_vertex:W2,shadowmask_pars_fragment:$2,skinbase_vertex:X2,skinning_pars_vertex:j2,skinning_vertex:Y2,skinnormal_vertex:q2,specularmap_fragment:K2,specularmap_pars_fragment:Z2,tonemapping_fragment:Q2,tonemapping_pars_fragment:J2,transmission_fragment:eL,transmission_pars_fragment:tL,uv_pars_fragment:nL,uv_pars_vertex:iL,uv_vertex:rL,worldpos_vertex:oL,background_vert:sL,background_frag:aL,backgroundCube_vert:lL,backgroundCube_frag:cL,cube_vert:uL,cube_frag:fL,depth_vert:dL,depth_frag:hL,distanceRGBA_vert:pL,distanceRGBA_frag:mL,equirect_vert:gL,equirect_frag:vL,linedashed_vert:_L,linedashed_frag:xL,meshbasic_vert:yL,meshbasic_frag:SL,meshlambert_vert:ML,meshlambert_frag:EL,meshmatcap_vert:TL,meshmatcap_frag:wL,meshnormal_vert:AL,meshnormal_frag:CL,meshphong_vert:bL,meshphong_frag:RL,meshphysical_vert:PL,meshphysical_frag:LL,meshtoon_vert:DL,meshtoon_frag:IL,points_vert:NL,points_frag:UL,shadow_vert:OL,shadow_frag:FL,sprite_vert:kL,sprite_frag:BL},de={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},yi={basic:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:on([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:on([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:on([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:on([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:on([de.points,de.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:on([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:on([de.common,de.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:on([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:on([de.sprite,de.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:on([de.common,de.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:on([de.lights,de.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};yi.physical={uniforms:on([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Xl={r:0,b:0,g:0},Hr=new Ki,zL=new Nt;function HL(t,e,n,i,r,o,s){const a=new nt(0);let l=o===!0?0:1,c,u,h=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function _(x){let v=!1;const y=g(x);y===null?f(a,l):y&&y.isColor&&(f(y,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Qu)?(u===void 0&&(u=new Vi(new nl(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:bs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hr.copy(v.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zL.makeRotationFromEuler(Hr)),u.material.toneMapped=Je.getTransfer(y.colorSpace)!==ct,(h!==y||d!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vi(new tf(2,2),new Pr({name:"BackgroundMaterial",uniforms:bs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,v){x.getRGB(Xl,uS(t)),i.buffers.color.setClear(Xl.r,Xl.g,Xl.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:_,addToRenderList:m}}function VL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(S,R,k,O,B){let X=!1;const F=h(O,k,R);o!==F&&(o=F,c(o.object)),X=p(S,O,k,B),X&&g(S,O,k,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,y(S,R,k,O),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,R,k){const O=k.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let X=B[R.id];X===void 0&&(X={},B[R.id]=X);let F=X[O];return F===void 0&&(F=d(l()),X[O]=F),F}function d(S){const R=[],k=[],O=[];for(let B=0;B<n;B++)R[B]=0,k[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,R,k,O){const B=o.attributes,X=R.attributes;let F=0;const W=k.getAttributes();for(const L in W)if(W[L].location>=0){const K=B[L];let se=X[L];if(se===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;F++}return o.attributesNum!==F||o.index!==O}function g(S,R,k,O){const B={},X=R.attributes;let F=0;const W=k.getAttributes();for(const L in W)if(W[L].location>=0){let K=X[L];K===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),B[L]=se,F++}o.attributes=B,o.attributesNum=F,o.index=O}function _(){const S=o.newAttributes;for(let R=0,k=S.length;R<k;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const k=o.newAttributes,O=o.enabledAttributes,B=o.attributeDivisors;k[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),B[S]!==R&&(t.vertexAttribDivisor(S,R),B[S]=R)}function x(){const S=o.newAttributes,R=o.enabledAttributes;for(let k=0,O=R.length;k<O;k++)R[k]!==S[k]&&(t.disableVertexAttribArray(k),R[k]=0)}function v(S,R,k,O,B,X,F){F===!0?t.vertexAttribIPointer(S,R,k,B,X):t.vertexAttribPointer(S,R,k,O,B,X)}function y(S,R,k,O){_();const B=O.attributes,X=k.getAttributes(),F=R.defaultAttributeValues;for(const W in X){const L=X[W];if(L.location>=0){let Y=B[W];if(Y===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const K=Y.normalized,se=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;const Be=Me.buffer,$=Me.type,J=Me.bytesPerElement,ue=$===t.INT||$===t.UNSIGNED_INT||Y.gpuType===vm;if(Y.isInterleavedBufferAttribute){const he=Y.data,Pe=he.stride,we=Y.offset;if(he.isInstancedInterleavedBuffer){for(let Oe=0;Oe<L.locationSize;Oe++)f(L.location+Oe,he.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Oe=0;Oe<L.locationSize;Oe++)m(L.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Oe=0;Oe<L.locationSize;Oe++)v(L.location+Oe,se/L.locationSize,$,K,Pe*J,(we+se/L.locationSize*Oe)*J,ue)}else{if(Y.isInstancedBufferAttribute){for(let he=0;he<L.locationSize;he++)f(L.location+he,Y.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let he=0;he<L.locationSize;he++)m(L.location+he);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let he=0;he<L.locationSize;he++)v(L.location+he,se/L.locationSize,$,K,se*J,se/L.locationSize*he*J,ue)}}else if(F!==void 0){const K=F[W];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}x()}function C(){P();for(const S in i){const R=i[S];for(const k in R){const O=R[k];for(const B in O)u(O[B].object),delete O[B];delete R[k]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const k in R){const O=R[k];for(const B in O)u(O[B].object),delete O[B];delete R[k]}delete i[S.id]}function E(S){for(const R in i){const k=i[R];if(k[S.id]===void 0)continue;const O=k[S.id];for(const B in O)u(O[B].object),delete O[B];delete k[S.id]}}function P(){w(),s=!0,o!==r&&(o=r,c(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function GL(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)n.update(g,i,d[_])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WL(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==qi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zi&&!E)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:C}}function $L(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new jr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||o&&!m)o?u(null):c();else{const x=o?0:i,v=x*4;let y=f.clippingState||null;l.value=y,y=u(g,d,v,p);for(let C=0;C!==v;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==_;++v,y+=4)s.copy(h[v]).applyMatrix4(x,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function XL(t){let e=new WeakMap;function n(s,a){return a===Mh?s.mapping=Ts:a===Eh&&(s.mapping=ws),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Mh||a===Eh)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new iP(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class jL extends fS{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rs=4,nv=[.125,.215,.35,.446,.526,.582],Kr=20,ld=new jL,iv=new nt;let cd=null,ud=0,fd=0,dd=!1;const Yr=(1+Math.sqrt(5))/2,Ho=1/Yr,rv=[new V(-Yr,Ho,0),new V(Yr,Ho,0),new V(-Ho,0,Yr),new V(Ho,0,Yr),new V(0,Yr,-Ho),new V(0,Yr,Ho),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Za,format:ai,colorSpace:Ur,depthBuffer:!1},r=sv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YL(o)),this._blurMaterial=qL(o,e,n)}return r}_compileMaterial(e){const n=new Vi(this._lodPlanes[0],e);this._renderer.compile(n,ld)}_sceneToCubeUV(e,n,i,r){const a=new Hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(iv),u.toneMapping=Ar,u.autoClear=!1;const p=new aS({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Vi(new nl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(iv),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;jl(r,x*v,f>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Vi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;jl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ld)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=rv[(r-o-1)%rv.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vi(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),_=o/g,m=isFinite(o)?1+Math.floor(u*_):Kr;m>Kr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const f=[];let x=0;for(let E=0;E<Kr;++E){const P=E/_,w=Math.exp(-P*P/2);f.push(w),E===0?x+=w:E<m&&(x+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-rs?r-v+rs:0),A=4*(this._cubeSize-y);jl(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(h,ld)}}function YL(t){const e=[],n=[],i=[];let r=t;const o=t-rs+1+nv.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-rs?l=nv[s-t+rs-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,P=A>2?0:-1,w=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(w,_*g*A),v.set(d,m*g*A);const S=[A,A,A,A,A,A];y.set(S,f*g*A)}const C=new Ji;C.setAttribute("position",new $n(x,_)),C.setAttribute("uv",new $n(v,m)),C.setAttribute("faceIndex",new $n(y,f)),e.push(C),r>rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function sv(t,e,n){const i=new po(t,e,n);return i.texture.mapping=Qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qL(t,e,n){const i=new Float32Array(Kr),r=new V(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function av(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function lv(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Tm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mh||l===Eh,u=l===Ts||l===ws;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new ov(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new ov(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function ZL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ga("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QL(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],A=x[v+1],E=x[v+2];d.push(C,A,A,E,E,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,A=v+1,E=v+2;d.push(C,A,A,E,E,C)}}else return;const m=new(tS(d)?cS:lS)(d,1);m.version=_;const f=o.get(h);f&&e.remove(f),o.set(h,m)}function u(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function JL(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,o,d*s),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,d*s,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/s,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x];for(let x=0;x<_.length;x++)n.update(f,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function e3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function t3(t,e,n){const i=new WeakMap,r=new Ht;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*A*4*h),P=new iS(E,C,A,h);P.type=zi,P.needsUpdate=!0;const w=y*4;for(let R=0;R<h;R++){const k=f[R],O=x[R],B=v[R],X=C*A*4*R;for(let F=0;F<k.count;F++){const W=F*w;g===!0&&(r.fromBufferAttribute(k,F),E[X+W+0]=r.x,E[X+W+1]=r.y,E[X+W+2]=r.z,E[X+W+3]=0),_===!0&&(r.fromBufferAttribute(O,F),E[X+W+4]=r.x,E[X+W+5]=r.y,E[X+W+6]=r.z,E[X+W+7]=0),m===!0&&(r.fromBufferAttribute(B,F),E[X+W+8]=r.x,E[X+W+9]=r.y,E[X+W+10]=r.z,E[X+W+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new et(C,A)},i.set(a,d),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function n3(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class mS extends ln{constructor(e,n,i,r,o,s,a,l,c,u=ps){if(u!==ps&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ps&&(i=ho),i===void 0&&u===Cs&&(i=As),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gS=new ln,cv=new mS(1,1),vS=new iS,_S=new HR,xS=new dS,uv=[],fv=[],dv=new Float32Array(16),hv=new Float32Array(9),pv=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=uv[r];if(o===void 0&&(o=new Float32Array(r),uv[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nf(t,e){let n=fv[e];n===void 0&&(n=new Int32Array(e),fv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function i3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function r3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function o3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function s3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function a3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;pv.set(i),t.uniformMatrix2fv(this.addr,!1,pv),kt(n,i)}}function l3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;hv.set(i),t.uniformMatrix3fv(this.addr,!1,hv),kt(n,i)}}function c3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;dv.set(i),t.uniformMatrix4fv(this.addr,!1,dv),kt(n,i)}}function u3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function f3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function d3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function h3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function p3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function m3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function g3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function v3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function _3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(cv.compareFunction=eS,o=cv):o=gS,n.setTexture2D(e||o,r)}function x3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||_S,r)}function y3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xS,r)}function S3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||vS,r)}function M3(t){switch(t){case 5126:return i3;case 35664:return r3;case 35665:return o3;case 35666:return s3;case 35674:return a3;case 35675:return l3;case 35676:return c3;case 5124:case 35670:return u3;case 35667:case 35671:return f3;case 35668:case 35672:return d3;case 35669:case 35673:return h3;case 5125:return p3;case 36294:return m3;case 36295:return g3;case 36296:return v3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return x3;case 35680:case 36300:case 36308:case 36293:return y3;case 36289:case 36303:case 36311:case 36292:return S3}}function E3(t,e){t.uniform1fv(this.addr,e)}function T3(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function w3(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function A3(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function C3(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function b3(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function R3(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function P3(t,e){t.uniform1iv(this.addr,e)}function L3(t,e){t.uniform2iv(this.addr,e)}function D3(t,e){t.uniform3iv(this.addr,e)}function I3(t,e){t.uniform4iv(this.addr,e)}function N3(t,e){t.uniform1uiv(this.addr,e)}function U3(t,e){t.uniform2uiv(this.addr,e)}function O3(t,e){t.uniform3uiv(this.addr,e)}function F3(t,e){t.uniform4uiv(this.addr,e)}function k3(t,e,n){const i=this.cache,r=e.length,o=nf(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),kt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||gS,o[s])}function B3(t,e,n){const i=this.cache,r=e.length,o=nf(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),kt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||_S,o[s])}function z3(t,e,n){const i=this.cache,r=e.length,o=nf(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),kt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||xS,o[s])}function H3(t,e,n){const i=this.cache,r=e.length,o=nf(n,r);Ft(i,o)||(t.uniform1iv(this.addr,o),kt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||vS,o[s])}function V3(t){switch(t){case 5126:return E3;case 35664:return T3;case 35665:return w3;case 35666:return A3;case 35674:return C3;case 35675:return b3;case 35676:return R3;case 5124:case 35670:return P3;case 35667:case 35671:return L3;case 35668:case 35672:return D3;case 35669:case 35673:return I3;case 5125:return N3;case 36294:return U3;case 36295:return O3;case 36296:return F3;case 35678:case 36198:case 36298:case 36306:case 35682:return k3;case 35679:case 36299:case 36307:return B3;case 35680:case 36300:case 36308:case 36293:return z3;case 36289:case 36303:case 36311:case 36292:return H3}}class G3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=M3(n.type)}}class W3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=V3(n.type)}}class $3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function mv(t,e){t.seq.push(e),t.map[e.id]=e}function X3(t,e,n){const i=t.name,r=i.length;for(hd.lastIndex=0;;){const o=hd.exec(i),s=hd.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){mv(n,c===void 0?new G3(a,t,e):new W3(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new $3(a),mv(n,h)),n=h}}}class yc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);X3(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function gv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const j3=37297;let Y3=0;function q3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function K3(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Jc&&n===Qc?i="LinearDisplayP3ToLinearSRGB":e===Qc&&n===Jc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ur:case Ju:return[i,"LinearTransferOETF"];case vi:case Em:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function vv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+q3(t.getShaderSource(e),s)}else return r}function Z3(t,e){const n=K3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Q3(t,e){let n;switch(e){case pR:n="Linear";break;case mR:n="Reinhard";break;case gR:n="OptimizedCineon";break;case vR:n="ACESFilmic";break;case xR:n="AgX";break;case yR:n="Neutral";break;case _R:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yl=new V;function J3(){Je.getLuminanceCoefficients(Yl);const t=Yl.x.toFixed(4),e=Yl.y.toFixed(4),n=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function tD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ra(t){return t!==""}function _v(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(t){return t.replace(iD,oD)}const rD=new Map;function oD(t,e){let n=Fe[e];if(n===void 0){const i=rD.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jh(n)}const sD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yv(t){return t.replace(sD,aD)}function aD(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Sv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function cD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case ws:e="ENVMAP_TYPE_CUBE";break;case Qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function fD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vy:e="ENVMAP_BLENDING_MULTIPLY";break;case dR:e="ENVMAP_BLENDING_MIX";break;case hR:e="ENVMAP_BLENDING_ADD";break}return e}function dD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hD(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=lD(n),c=cD(n),u=uD(n),h=fD(n),d=dD(n),p=eD(n),g=tD(o),_=r.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ra).join(`
`),f.length>0&&(f+=`
`)):(m=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),f=[Sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Ar?Q3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Z3("linearToOutputTexel",n.outputColorSpace),J3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),s=Jh(s),s=_v(s,n),s=xv(s,n),a=Jh(a),a=_v(a,n),a=xv(a,n),s=yv(s),a=yv(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===O0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===O0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+s,y=x+f+a,C=gv(r,r.VERTEX_SHADER,v),A=gv(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(R){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(A).trim();let X=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,A);else{const W=vv(r,C,"vertex"),L=vv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+W+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||B==="")&&(F=!1);F&&(R.diagnostics={runnable:X,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:f}})}r.deleteShader(C),r.deleteShader(A),P=new yc(r,_),w=nD(r,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,j3)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Y3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let pD=0;class mD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gD(e),n.set(e,i)),i}}class gD{constructor(e){this.id=pD++,this.code=e,this.usedTimes=0}}function vD(t,e,n,i,r,o,s){const a=new oS,l=new mD,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,R,k,O){const B=k.fog,X=O.geometry,F=w.isMeshStandardMaterial?k.environment:null,W=(w.isMeshStandardMaterial?n:e).get(w.envMap||F),L=W&&W.mapping===Qu?W.image.height:null,Y=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=K!==void 0?K.length:0;let Me=0;X.morphAttributes.position!==void 0&&(Me=1),X.morphAttributes.normal!==void 0&&(Me=2),X.morphAttributes.color!==void 0&&(Me=3);let Be,$,J,ue;if(Y){const qe=yi[Y];Be=qe.vertexShader,$=qe.fragmentShader}else Be=w.vertexShader,$=w.fragmentShader,l.update(w),J=l.getVertexShaderID(w),ue=l.getFragmentShaderID(w);const he=t.getRenderTarget(),Pe=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,Oe=!!w.map,st=!!w.matcap,D=!!W,tt=!!w.aoMap,Ge=!!w.lightMap,Ye=!!w.bumpMap,Ee=!!w.normalMap,_t=!!w.displacementMap,Ie=!!w.emissiveMap,Ne=!!w.metalnessMap,b=!!w.roughnessMap,M=w.anisotropy>0,G=w.clearcoat>0,ee=w.dispersion>0,te=w.iridescence>0,Q=w.sheen>0,Ae=w.transmission>0,fe=M&&!!w.anisotropyMap,ve=G&&!!w.clearcoatMap,le=G&&!!w.clearcoatNormalMap,re=G&&!!w.clearcoatRoughnessMap,ge=te&&!!w.iridescenceMap,He=te&&!!w.iridescenceThicknessMap,Le=Q&&!!w.sheenColorMap,xe=Q&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,ze=!!w.specularColorMap,pt=!!w.specularIntensityMap,I=Ae&&!!w.transmissionMap,oe=Ae&&!!w.thicknessMap,q=!!w.gradientMap,Z=!!w.alphaMap,ce=w.alphaTest>0,be=!!w.alphaHash,We=!!w.extensions;let Rt=Ar;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Rt=t.toneMapping);const $t={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:$,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ur,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:st,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:L,aoMap:tt,lightMap:Ge,bumpMap:Ye,normalMap:Ee,displacementMap:d&&_t,emissiveMap:Ie,normalMapObjectSpace:Ee&&w.normalMapType===wR,normalMapTangentSpace:Ee&&w.normalMapType===TR,metalnessMap:Ne,roughnessMap:b,anisotropy:M,anisotropyMap:fe,clearcoat:G,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:re,dispersion:ee,iridescence:te,iridescenceMap:ge,iridescenceThicknessMap:He,sheen:Q,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:Ue,specularColorMap:ze,specularIntensityMap:pt,transmission:Ae,transmissionMap:I,thicknessMap:oe,gradientMap:q,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:be,combine:w.combine,mapUv:Oe&&_(w.map.channel),aoMapUv:tt&&_(w.aoMap.channel),lightMapUv:Ge&&_(w.lightMap.channel),bumpMapUv:Ye&&_(w.bumpMap.channel),normalMapUv:Ee&&_(w.normalMap.channel),displacementMapUv:_t&&_(w.displacementMap.channel),emissiveMapUv:Ie&&_(w.emissiveMap.channel),metalnessMapUv:Ne&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:fe&&_(w.anisotropyMap.channel),clearcoatMapUv:ve&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(w.sheenRoughnessMap.channel),specularMapUv:Ue&&_(w.specularMap.channel),specularColorMapUv:ze&&_(w.specularColorMap.channel),specularIntensityMapUv:pt&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:oe&&_(w.thicknessMap.channel),alphaMapUv:Z&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ee||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Oe||Z),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fi,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:We&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&w.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(x(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function y(w){const S=g[w.type];let R;if(S){const k=yi[S];R=JR.clone(k.uniforms)}else R=w.uniforms;return R}function C(w,S){let R;for(let k=0,O=u.length;k<O;k++){const B=u[k];if(B.cacheKey===S){R=B,++R.usedTimes;break}}return R===void 0&&(R=new hD(t,S,w,o),u.push(R)),R}function A(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function E(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:P}}function _D(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function xD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ev(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,g,_,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=s(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,g,_,m){const f=s(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||xD),i.length>1&&i.sort(d||Mv),r.length>1&&r.sort(d||Mv)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function yD(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Ev,t.set(i,[s])):r>=o.length?(s=new Ev,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function SD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new nt};break;case"SpotLight":n={position:new V,direction:new V,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function MD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ED=0;function TD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wD(t){const e=new SD,n=MD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,o=new Nt,s=new Nt;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,v=0,y=0,C=0,A=0,E=0;c.sort(TD);for(let w=0,S=c.length;w<S;w++){const R=c[w],k=R.color,O=R.intensity,B=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*O,h+=k.g*O,d+=k.b*O;else if(R.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(R.sh.coefficients[F],O);E++}else if(R.isDirectionalLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,L=n.get(R);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=R.shadow.matrix,x++}i.directional[p]=F,p++}else if(R.isSpotLight){const F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(k).multiplyScalar(O),F.distance=B,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,i.spot[_]=F;const W=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,W.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=W.matrix,R.castShadow){const L=n.get(R);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=X,y++}_++}else if(R.isRectAreaLight){const F=e.get(R);F.color.copy(k).multiplyScalar(O),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=F,m++}else if(R.isPointLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){const W=R.shadow,L=n.get(R);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=R.shadow.matrix,v++}i.point[g]=F,g++}else if(R.isHemisphereLight){const F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(O),F.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[f]=F,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=E,i.version=ED++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const v=c[f];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Tv(t){const e=new wD(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function AD(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Tv(t),e.set(r,[a])):o>=s.length?(a=new Tv(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class CD extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bD extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LD(t,e,n){let i=new hS;const r=new et,o=new et,s=new Ht,a=new CD({depthPacking:ER}),l=new bD,c={},u=n.maxTextureSize,h={[Rr]:_n,[_n]:Rr,[Fi]:Fi},d=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:RD,fragmentShader:PD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ji;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hy;let f=this.type;this.render=function(A,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),k=t.state;k.setBlending(wr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==Ni&&this.type===Ni,B=f===Ni&&this.type!==Ni;for(let X=0,F=A.length;X<F;X++){const W=A[X],L=W.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),o.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/Y.x),r.x=o.x*Y.x,L.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/Y.y),r.y=o.y*Y.y,L.mapSize.y=o.y)),L.map===null||O===!0||B===!0){const se=this.type!==Ni?{minFilter:Gn,magFilter:Gn}:{};L.map!==null&&L.map.dispose(),L.map=new po(r.x,r.y,se),L.map.texture.name=W.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let se=0;se<K;se++){const Me=L.getViewport(se);s.set(o.x*Me.x,o.y*Me.y,o.x*Me.z,o.y*Me.w),k.viewport(s),L.updateMatrices(W,se),i=L.getFrustum(),y(E,P,L.camera,W,this.type)}L.isPointLightShadow!==!0&&this.type===Ni&&x(L,P),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,R)};function x(A,E){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new po(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,P,p,_,null)}function v(A,E,P,w){let S=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=S.uuid,O=E.uuid;let B=c[k];B===void 0&&(B={},c[k]=B);let X=B[O];X===void 0&&(X=S.clone(),B[O]=X,E.addEventListener("dispose",C)),S=X}if(S.visible=E.visible,S.wireframe=E.wireframe,w===Ni?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=P}return S}function y(A,E,P,w,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ni)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),B=A.material;if(Array.isArray(B)){const X=O.groups;for(let F=0,W=X.length;F<W;F++){const L=X[F],Y=B[L.materialIndex];if(Y&&Y.visible){const K=v(A,Y,w,S);A.onBeforeShadow(t,A,E,P,O,K,L),t.renderBufferDirect(P,null,O,K,A,L),A.onAfterShadow(t,A,E,P,O,K,L)}}}else if(B.visible){const X=v(A,B,w,S);A.onBeforeShadow(t,A,E,P,O,X,null),t.renderBufferDirect(P,null,O,X,A,null),A.onAfterShadow(t,A,E,P,O,X,null)}}const k=A.children;for(let O=0,B=k.length;O<B;O++)y(k[O],E,P,w,S)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const w=c[P],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function DD(t){function e(){let I=!1;const oe=new Ht;let q=null;const Z=new Ht(0,0,0,0);return{setMask:function(ce){q!==ce&&!I&&(t.colorMask(ce,ce,ce,ce),q=ce)},setLocked:function(ce){I=ce},setClear:function(ce,be,We,Rt,$t){$t===!0&&(ce*=Rt,be*=Rt,We*=Rt),oe.set(ce,be,We,Rt),Z.equals(oe)===!1&&(t.clearColor(ce,be,We,Rt),Z.copy(oe))},reset:function(){I=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,oe=null,q=null,Z=null;return{setTest:function(ce){ce?ue(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ce){oe!==ce&&!I&&(t.depthMask(ce),oe=ce)},setFunc:function(ce){if(q!==ce){switch(ce){case oR:t.depthFunc(t.NEVER);break;case sR:t.depthFunc(t.ALWAYS);break;case aR:t.depthFunc(t.LESS);break;case Kc:t.depthFunc(t.LEQUAL);break;case lR:t.depthFunc(t.EQUAL);break;case cR:t.depthFunc(t.GEQUAL);break;case uR:t.depthFunc(t.GREATER);break;case fR:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=ce}},setLocked:function(ce){I=ce},setClear:function(ce){Z!==ce&&(t.clearDepth(ce),Z=ce)},reset:function(){I=!1,oe=null,q=null,Z=null}}}function i(){let I=!1,oe=null,q=null,Z=null,ce=null,be=null,We=null,Rt=null,$t=null;return{setTest:function(qe){I||(qe?ue(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(qe){oe!==qe&&!I&&(t.stencilMask(qe),oe=qe)},setFunc:function(qe,bi,pi){(q!==qe||Z!==bi||ce!==pi)&&(t.stencilFunc(qe,bi,pi),q=qe,Z=bi,ce=pi)},setOp:function(qe,bi,pi){(be!==qe||We!==bi||Rt!==pi)&&(t.stencilOp(qe,bi,pi),be=qe,We=bi,Rt=pi)},setLocked:function(qe){I=qe},setClear:function(qe){$t!==qe&&(t.clearStencil(qe),$t=qe)},reset:function(){I=!1,oe=null,q=null,Z=null,ce=null,be=null,We=null,Rt=null,$t=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,x=null,v=null,y=null,C=null,A=new nt(0,0,0),E=0,P=!1,w=null,S=null,R=null,k=null,O=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,F=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=F>=1):W.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=F>=2);let L=null,Y={};const K=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Me=new Ht().fromArray(K),Be=new Ht().fromArray(se);function $(I,oe,q,Z){const ce=new Uint8Array(4),be=t.createTexture();t.bindTexture(I,be),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<q;We++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(oe+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return be}const J={};J[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(t.DEPTH_TEST),o.setFunc(Kc),Ye(!1),Ee(P0),ue(t.CULL_FACE),tt(wr);function ue(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function he(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Pe(I,oe){return u[I]!==oe?(t.bindFramebuffer(I,oe),u[I]=oe,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=oe),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function we(I,oe){let q=d,Z=!1;if(I){q=h.get(oe),q===void 0&&(q=[],h.set(oe,q));const ce=I.textures;if(q.length!==ce.length||q[0]!==t.COLOR_ATTACHMENT0){for(let be=0,We=ce.length;be<We;be++)q[be]=t.COLOR_ATTACHMENT0+be;q.length=ce.length,Z=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,Z=!0);Z&&t.drawBuffers(q)}function Oe(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const st={[qr]:t.FUNC_ADD,[Vb]:t.FUNC_SUBTRACT,[Gb]:t.FUNC_REVERSE_SUBTRACT};st[Wb]=t.MIN,st[$b]=t.MAX;const D={[Xb]:t.ZERO,[jb]:t.ONE,[Yb]:t.SRC_COLOR,[yh]:t.SRC_ALPHA,[eR]:t.SRC_ALPHA_SATURATE,[Qb]:t.DST_COLOR,[Kb]:t.DST_ALPHA,[qb]:t.ONE_MINUS_SRC_COLOR,[Sh]:t.ONE_MINUS_SRC_ALPHA,[Jb]:t.ONE_MINUS_DST_COLOR,[Zb]:t.ONE_MINUS_DST_ALPHA,[tR]:t.CONSTANT_COLOR,[nR]:t.ONE_MINUS_CONSTANT_COLOR,[iR]:t.CONSTANT_ALPHA,[rR]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(I,oe,q,Z,ce,be,We,Rt,$t,qe){if(I===wr){g===!0&&(he(t.BLEND),g=!1);return}if(g===!1&&(ue(t.BLEND),g=!0),I!==Hb){if(I!==_||qe!==P){if((m!==qr||v!==qr)&&(t.blendEquation(t.FUNC_ADD),m=qr,v=qr),qe)switch(I){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case L0:t.blendFunc(t.ONE,t.ONE);break;case D0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case I0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case L0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case D0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case I0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,x=null,y=null,C=null,A.set(0,0,0),E=0,_=I,P=qe}return}ce=ce||oe,be=be||q,We=We||Z,(oe!==m||ce!==v)&&(t.blendEquationSeparate(st[oe],st[ce]),m=oe,v=ce),(q!==f||Z!==x||be!==y||We!==C)&&(t.blendFuncSeparate(D[q],D[Z],D[be],D[We]),f=q,x=Z,y=be,C=We),(Rt.equals(A)===!1||$t!==E)&&(t.blendColor(Rt.r,Rt.g,Rt.b,$t),A.copy(Rt),E=$t),_=I,P=!1}function Ge(I,oe){I.side===Fi?he(t.CULL_FACE):ue(t.CULL_FACE);let q=I.side===_n;oe&&(q=!q),Ye(q),I.blending===hs&&I.transparent===!1?tt(wr):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;s.setTest(Z),Z&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){w!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),w=I)}function Ee(I){I!==kb?(ue(t.CULL_FACE),I!==S&&(I===P0?t.cullFace(t.BACK):I===Bb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),S=I}function _t(I){I!==R&&(X&&t.lineWidth(I),R=I)}function Ie(I,oe,q){I?(ue(t.POLYGON_OFFSET_FILL),(k!==oe||O!==q)&&(t.polygonOffset(oe,q),k=oe,O=q)):he(t.POLYGON_OFFSET_FILL)}function Ne(I){I?ue(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function b(I){I===void 0&&(I=t.TEXTURE0+B-1),L!==I&&(t.activeTexture(I),L=I)}function M(I,oe,q){q===void 0&&(L===null?q=t.TEXTURE0+B-1:q=L);let Z=Y[q];Z===void 0&&(Z={type:void 0,texture:void 0},Y[q]=Z),(Z.type!==I||Z.texture!==oe)&&(L!==q&&(t.activeTexture(q),L=q),t.bindTexture(I,oe||J[I]),Z.type=I,Z.texture=oe)}function G(){const I=Y[L];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Me.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Me.copy(I))}function xe(I){Be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function Ue(I,oe){let q=l.get(oe);q===void 0&&(q=new WeakMap,l.set(oe,q));let Z=q.get(I);Z===void 0&&(Z=t.getUniformBlockIndex(oe,I.name),q.set(I,Z))}function ze(I,oe){const Z=l.get(oe).get(I);a.get(oe)!==Z&&(t.uniformBlockBinding(oe,Z,I.__bindingPointIndex),a.set(oe,Z))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Y={},u={},h=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,x=null,v=null,y=null,C=null,A=new nt(0,0,0),E=0,P=!1,w=null,S=null,R=null,k=null,O=null,Me.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:ue,disable:he,bindFramebuffer:Pe,drawBuffers:we,useProgram:Oe,setBlending:tt,setMaterial:Ge,setFlipSided:Ye,setCullFace:Ee,setLineWidth:_t,setPolygonOffset:Ie,setScissorTest:Ne,activeTexture:b,bindTexture:M,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:te,texImage2D:ge,texImage3D:He,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:le,texStorage3D:re,texSubImage2D:Q,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Le,viewport:xe,reset:pt}}function wv(t,e,n,i){const r=ID(i);switch(n){case jy:return t*e;case qy:return t*e;case Ky:return t*e*2;case Zy:return t*e/r.components*r.byteLength;case ym:return t*e/r.components*r.byteLength;case Qy:return t*e*2/r.components*r.byteLength;case Sm:return t*e*2/r.components*r.byteLength;case Yy:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case Mm:return t*e*4/r.components*r.byteLength;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Rh:return Math.max(t,16)*Math.max(e,8)/4;case Ah:case bh:return Math.max(t,8)*Math.max(e,8)/2;case Ph:case Lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xc:case jh:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jy:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kh:case Zh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ID(t){switch(t){case qi:case Wy:return{byteLength:1,components:1};case Ba:case $y:case Za:return{byteLength:2,components:1};case _m:case xm:return{byteLength:2,components:4};case ho:case vm:case zi:return{byteLength:4,components:1};case Xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function ND(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):za("canvas")}function _(b,M,G){let ee=1;const te=Ne(b);if((te.width>G||te.height>G)&&(ee=G/Math.max(te.width,te.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(ee*te.width),Ae=Math.floor(ee*te.height);h===void 0&&(h=g(Q,Ae));const fe=M?g(Q,Ae):h;return fe.width=Q,fe.height=Ae,fe.getContext("2d").drawImage(b,0,0,Q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Ae+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Gn&&b.minFilter!==oi}function f(b){t.generateMipmap(b)}function x(b,M,G,ee,te=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=M;if(M===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),M===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),M===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Ae=te?Zc:Je.getTransfer(ee);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Ae===ct?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(b,M){let G;return b?M===null||M===ho||M===As?G=t.DEPTH24_STENCIL8:M===zi?G=t.DEPTH32F_STENCIL8:M===Ba&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ho||M===As?G=t.DEPTH_COMPONENT24:M===zi?G=t.DEPTH_COMPONENT32F:M===Ba&&(G=t.DEPTH_COMPONENT16),G}function y(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Gn&&b.minFilter!==oi?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function C(b){const M=b.target;M.removeEventListener("dispose",C),E(M),M.isVideoTexture&&u.delete(M)}function A(b){const M=b.target;M.removeEventListener("dispose",A),w(M)}function E(b){const M=i.get(b);if(M.__webglInit===void 0)return;const G=b.source,ee=d.get(G);if(ee){const te=ee[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(b),Object.keys(ee).length===0&&d.delete(G)}i.remove(b)}function P(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const G=b.source,ee=d.get(G);delete ee[M.__cacheKey],s.memory.textures--}function w(b){const M=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let te=0;te<M.__webglFramebuffer[ee].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[ee][te]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=b.textures;for(let ee=0,te=G.length;ee<te;ee++){const Q=i.get(G[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(G[ee])}i.remove(b)}let S=0;function R(){S=0}function k(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function O(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function B(b,M){const G=i.get(b);if(b.isVideoTexture&&_t(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(G,b,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function X(b,M){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Be(G,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function F(b,M){const G=i.get(b);if(b.version>0&&G.__version!==b.version){Be(G,b,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function W(b,M){const G=i.get(b);if(b.version>0&&G.__version!==b.version){$(G,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const L={[Th]:t.REPEAT,[to]:t.CLAMP_TO_EDGE,[wh]:t.MIRRORED_REPEAT},Y={[Gn]:t.NEAREST,[SR]:t.NEAREST_MIPMAP_NEAREST,[Cl]:t.NEAREST_MIPMAP_LINEAR,[oi]:t.LINEAR,[Hf]:t.LINEAR_MIPMAP_NEAREST,[no]:t.LINEAR_MIPMAP_LINEAR},K={[AR]:t.NEVER,[DR]:t.ALWAYS,[CR]:t.LESS,[eS]:t.LEQUAL,[bR]:t.EQUAL,[LR]:t.GEQUAL,[RR]:t.GREATER,[PR]:t.NOTEQUAL};function se(b,M){if(M.type===zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===oi||M.magFilter===Hf||M.magFilter===Cl||M.magFilter===no||M.minFilter===oi||M.minFilter===Hf||M.minFilter===Cl||M.minFilter===no)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,L[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gn||M.minFilter!==Cl&&M.minFilter!==no||M.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Me(b,M){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",C));const ee=M.source;let te=d.get(ee);te===void 0&&(te={},d.set(ee,te));const Q=O(M);if(Q!==b.__cacheKey){te[Q]===void 0&&(te[Q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,G=!0),te[Q].usedTimes++;const Ae=te[b.__cacheKey];Ae!==void 0&&(te[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&P(M)),b.__cacheKey=Q,b.__webglTexture=te[Q].texture}return G}function Be(b,M,G){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const te=Me(b,M),Q=M.source;n.bindTexture(ee,b.__webglTexture,t.TEXTURE0+G);const Ae=i.get(Q);if(Q.version!==Ae.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const fe=Je.getPrimaries(Je.workingColorSpace),ve=M.colorSpace===hr?null:Je.getPrimaries(M.colorSpace),le=M.colorSpace===hr||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let re=_(M.image,!1,r.maxTextureSize);re=Ie(M,re);const ge=o.convert(M.format,M.colorSpace),He=o.convert(M.type);let Le=x(M.internalFormat,ge,He,M.colorSpace,M.isVideoTexture);se(ee,M);let xe;const Ue=M.mipmaps,ze=M.isVideoTexture!==!0,pt=Ae.__version===void 0||te===!0,I=Q.dataReady,oe=y(M,re);if(M.isDepthTexture)Le=v(M.format===Cs,M.type),pt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,He,null));else if(M.isDataTexture)if(Ue.length>0){ze&&pt&&n.texStorage2D(t.TEXTURE_2D,oe,Le,Ue[0].width,Ue[0].height);for(let q=0,Z=Ue.length;q<Z;q++)xe=Ue[q],ze?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,ge,He,xe.data):n.texImage2D(t.TEXTURE_2D,q,Le,xe.width,xe.height,0,ge,He,xe.data);M.generateMipmaps=!1}else ze?(pt&&n.texStorage2D(t.TEXTURE_2D,oe,Le,re.width,re.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,He,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,He,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Le,Ue[0].width,Ue[0].height,re.depth);for(let q=0,Z=Ue.length;q<Z;q++)if(xe=Ue[q],M.format!==ai)if(ge!==null)if(ze){if(I)if(M.layerUpdates.size>0){const ce=wv(xe.width,xe.height,M.format,M.type);for(const be of M.layerUpdates){const We=xe.data.subarray(be*ce/xe.data.BYTES_PER_ELEMENT,(be+1)*ce/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,be,xe.width,xe.height,1,ge,We,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,re.depth,ge,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,Le,xe.width,xe.height,re.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,re.depth,ge,He,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,Le,xe.width,xe.height,re.depth,0,ge,He,xe.data)}else{ze&&pt&&n.texStorage2D(t.TEXTURE_2D,oe,Le,Ue[0].width,Ue[0].height);for(let q=0,Z=Ue.length;q<Z;q++)xe=Ue[q],M.format!==ai?ge!==null?ze?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,q,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe.width,xe.height,ge,He,xe.data):n.texImage2D(t.TEXTURE_2D,q,Le,xe.width,xe.height,0,ge,He,xe.data)}else if(M.isDataArrayTexture)if(ze){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Le,re.width,re.height,re.depth),I)if(M.layerUpdates.size>0){const q=wv(re.width,re.height,M.format,M.type);for(const Z of M.layerUpdates){const ce=re.data.subarray(Z*q/re.data.BYTES_PER_ELEMENT,(Z+1)*q/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,ge,He,ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,He,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,ge,He,re.data);else if(M.isData3DTexture)ze?(pt&&n.texStorage3D(t.TEXTURE_3D,oe,Le,re.width,re.height,re.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,He,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,ge,He,re.data);else if(M.isFramebufferTexture){if(pt)if(ze)n.texStorage2D(t.TEXTURE_2D,oe,Le,re.width,re.height);else{let q=re.width,Z=re.height;for(let ce=0;ce<oe;ce++)n.texImage2D(t.TEXTURE_2D,ce,Le,q,Z,0,ge,He,null),q>>=1,Z>>=1}}else if(Ue.length>0){if(ze&&pt){const q=Ne(Ue[0]);n.texStorage2D(t.TEXTURE_2D,oe,Le,q.width,q.height)}for(let q=0,Z=Ue.length;q<Z;q++)xe=Ue[q],ze?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ge,He,xe):n.texImage2D(t.TEXTURE_2D,q,Le,ge,He,xe);M.generateMipmaps=!1}else if(ze){if(pt){const q=Ne(re);n.texStorage2D(t.TEXTURE_2D,oe,Le,q.width,q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,He,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,He,re);m(M)&&f(ee),Ae.__version=Q.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function $(b,M,G){if(M.image.length!==6)return;const ee=Me(b,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+G);const Q=i.get(te);if(te.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const Ae=Je.getPrimaries(Je.workingColorSpace),fe=M.colorSpace===hr?null:Je.getPrimaries(M.colorSpace),ve=M.colorSpace===hr||Ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const le=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!le&&!re?ge[Z]=_(M.image[Z],!0,r.maxCubemapSize):ge[Z]=re?M.image[Z].image:M.image[Z],ge[Z]=Ie(M,ge[Z]);const He=ge[0],Le=o.convert(M.format,M.colorSpace),xe=o.convert(M.type),Ue=x(M.internalFormat,Le,xe,M.colorSpace),ze=M.isVideoTexture!==!0,pt=Q.__version===void 0||ee===!0,I=te.dataReady;let oe=y(M,He);se(t.TEXTURE_CUBE_MAP,M);let q;if(le){ze&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Ue,He.width,He.height);for(let Z=0;Z<6;Z++){q=ge[Z].mipmaps;for(let ce=0;ce<q.length;ce++){const be=q[ce];M.format!==ai?Le!==null?ze?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,be.width,be.height,Le,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,be.width,be.height,Le,xe,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ue,be.width,be.height,0,Le,xe,be.data)}}}else{if(q=M.mipmaps,ze&&pt){q.length>0&&oe++;const Z=Ne(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){ze?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Le,xe,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,ge[Z].width,ge[Z].height,0,Le,xe,ge[Z].data);for(let ce=0;ce<q.length;ce++){const We=q[ce].image[Z].image;ze?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,We.width,We.height,Le,xe,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ue,We.width,We.height,0,Le,xe,We.data)}}else{ze?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,xe,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,Le,xe,ge[Z]);for(let ce=0;ce<q.length;ce++){const be=q[ce];ze?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Le,xe,be.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ue,Le,xe,be.image[Z])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),Q.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function J(b,M,G,ee,te,Q){const Ae=o.convert(G.format,G.colorSpace),fe=o.convert(G.type),ve=x(G.internalFormat,Ae,fe,G.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>Q),ge=Math.max(1,M.height>>Q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Q,ve,re,ge,M.depth,0,Ae,fe,null):n.texImage2D(te,Q,ve,re,ge,0,Ae,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ee(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,te,i.get(G).__webglTexture,0,Ye(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,te,i.get(G).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(b,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer){const ee=M.depthTexture,te=ee&&ee.isDepthTexture?ee.type:null,Q=v(M.stencilBuffer,te),Ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ye(M);Ee(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,Q,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,b)}else{const ee=M.textures;for(let te=0;te<ee.length;te++){const Q=ee[te],Ae=o.convert(Q.format,Q.colorSpace),fe=o.convert(Q.type),ve=x(Q.internalFormat,Ae,fe,Q.colorSpace),le=Ye(M);G&&Ee(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ve,M.width,M.height):Ee(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,te=Ye(M);if(M.depthTexture.format===ps)Ee(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Cs)Ee(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(b){const M=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,b)}else if(G){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=t.createRenderbuffer(),ue(M.__webglDepthbuffer[ee],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ue(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(b,M,G){const ee=i.get(b);M!==void 0&&J(ee.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Pe(b)}function Oe(b){const M=b.texture,G=i.get(b),ee=i.get(M);b.addEventListener("dispose",A);const te=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,s.memory.textures++),Q){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)G.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else G.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)G.__webglFramebuffer[fe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let fe=0,ve=te.length;fe<ve;fe++){const le=i.get(te[fe]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),s.memory.textures++)}if(b.samples>0&&Ee(b)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];G.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const le=o.convert(ve.format,ve.colorSpace),re=o.convert(ve.type),ge=x(ve.internalFormat,le,re,ve.colorSpace,b.isXRRenderTarget===!0),He=Ye(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)J(G.__webglFramebuffer[fe][ve],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else J(G.__webglFramebuffer[fe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let fe=0,ve=te.length;fe<ve;fe++){const le=te[fe],re=i.get(le);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),se(t.TEXTURE_2D,le),J(G.__webglFramebuffer,b,le,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(le)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),se(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)J(G.__webglFramebuffer[ve],b,M,t.COLOR_ATTACHMENT0,fe,ve);else J(G.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&f(fe),n.unbindTexture()}b.depthBuffer&&Pe(b)}function st(b){const M=b.textures;for(let G=0,ee=M.length;G<ee;G++){const te=M[G];if(m(te)){const Q=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(te).__webglTexture;n.bindTexture(Q,Ae),f(Q),n.unbindTexture()}}}const D=[],tt=[];function Ge(b){if(b.samples>0){if(Ee(b)===!1){const M=b.textures,G=b.width,ee=b.height;let te=t.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(b),fe=M.length>1;if(fe)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const le=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,G,ee,0,0,G,ee,te,t.NEAREST),l===!0&&(D.length=0,tt.length=0,D.push(t.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(D.push(Q),tt.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const le=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ye(b){return Math.min(r.maxSamples,b.samples)}function Ee(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(b){const M=s.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Ie(b,M){const G=b.colorSpace,ee=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==Ur&&G!==hr&&(Je.getTransfer(G)===ct?(ee!==ai||te!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=F,this.setTextureCube=W,this.rebindTextures=we,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ee}function UD(t,e){function n(i,r=hr){let o;const s=Je.getTransfer(r);if(i===qi)return t.UNSIGNED_BYTE;if(i===_m)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wy)return t.BYTE;if(i===$y)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===vm)return t.INT;if(i===ho)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===Za)return t.HALF_FLOAT;if(i===jy)return t.ALPHA;if(i===Yy)return t.RGB;if(i===ai)return t.RGBA;if(i===qy)return t.LUMINANCE;if(i===Ky)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===Zy)return t.RED;if(i===ym)return t.RED_INTEGER;if(i===Qy)return t.RG;if(i===Sm)return t.RG_INTEGER;if(i===Mm)return t.RGBA_INTEGER;if(i===mc||i===gc||i===vc||i===_c)if(s===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ah||i===Ch||i===bh||i===Rh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ph||i===Lh||i===Dh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ph||i===Lh)return s===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Dh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Nh||i===Uh||i===Oh||i===Fh||i===kh||i===Bh||i===zh||i===Hh||i===Vh||i===Gh||i===Wh||i===$h||i===Xh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ih)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xc||i===jh||i===Yh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===xc)return s===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jy||i===qh||i===Kh||i===Zh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===xc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class OD extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ql extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FD={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ql;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pr({vertexShader:kD,fragmentShader:BD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vi(new tf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HD extends Us{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new zD,m=n.getContextAttributes();let f=null,x=null;const v=[],y=[],C=new et;let A=null;const E=new Hn;E.layers.enable(1),E.viewport=new Ht;const P=new Hn;P.layers.enable(2),P.viewport=new Ht;const w=[E,P],S=new OD;S.layers.enable(1),S.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=v[$];return J===void 0&&(J=new pd,v[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=v[$];return J===void 0&&(J=new pd,v[$]=J),J.getGripSpace()},this.getHand=function($){let J=v[$];return J===void 0&&(J=new pd,v[$]=J),J.getHandSpace()};function O($){const J=y.indexOf($.inputSource);if(J===-1)return;const ue=v[J];ue!==void 0&&(ue.update($.inputSource,$.frame,c||s),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",X);for(let $=0;$<v.length;$++){const J=y[$];J!==null&&(y[$]=null,v[$].disconnect(J))}R=null,k=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,x=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",B),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new po(p.framebufferWidth,p.framebufferHeight,{format:ai,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ue=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?Cs:ps,ue=m.stencil?As:ho);const Pe={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new po(d.textureWidth,d.textureHeight,{format:ai,type:qi,depthTexture:new mS(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X($){for(let J=0;J<$.removed.length;J++){const ue=$.removed[J],he=y.indexOf(ue);he>=0&&(y[he]=null,v[he].disconnect(ue))}for(let J=0;J<$.added.length;J++){const ue=$.added[J];let he=y.indexOf(ue);if(he===-1){for(let we=0;we<v.length;we++)if(we>=y.length){y.push(ue),he=we;break}else if(y[we]===null){y[we]=ue,he=we;break}if(he===-1)break}const Pe=v[he];Pe&&Pe.connect(ue)}}const F=new V,W=new V;function L($,J,ue){F.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const he=F.distanceTo(W),Pe=J.projectionMatrix.elements,we=ue.projectionMatrix.elements,Oe=Pe[14]/(Pe[10]-1),st=Pe[14]/(Pe[10]+1),D=(Pe[9]+1)/Pe[5],tt=(Pe[9]-1)/Pe[5],Ge=(Pe[8]-1)/Pe[0],Ye=(we[8]+1)/we[0],Ee=Oe*Ge,_t=Oe*Ye,Ie=he/(-Ge+Ye),Ne=Ie*-Ge;J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(Ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const b=Oe+Ie,M=st+Ie,G=Ee-Ne,ee=_t+(he-Ne),te=D*st/M*b,Q=tt*st/M*b;$.projectionMatrix.makePerspective(G,ee,te,Q,b,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function Y($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;_.texture!==null&&($.near=_.depthNear,$.far=_.depthFar),S.near=P.near=E.near=$.near,S.far=P.far=E.far=$.far,(R!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,k=S.far,E.near=R,E.far=k,P.near=R,P.far=k,E.updateProjectionMatrix(),P.updateProjectionMatrix(),$.updateProjectionMatrix());const J=$.parent,ue=S.cameras;Y(S,J);for(let he=0;he<ue.length;he++)Y(ue[he],J);ue.length===2?L(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),K($,S,J)};function K($,J,ue){ue===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let se=null;function Me($,J){if(u=J.getViewerPose(c||s),g=J,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let he=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let we=0;we<ue.length;we++){const Oe=ue[we];let st=null;if(p!==null)st=p.getViewport(Oe);else{const tt=h.getViewSubImage(d,Oe);st=tt.viewport,we===0&&(e.setRenderTargetTextures(x,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(x))}let D=w[we];D===void 0&&(D=new Hn,D.layers.enable(we),D.viewport=new Ht,w[we]=D),D.matrix.fromArray(Oe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Oe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(st.x,st.y,st.width,st.height),we===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(D)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const we=h.getDepthInformation(ue[0]);we&&we.isValid&&we.texture&&_.init(e,we,r.renderState)}}for(let ue=0;ue<v.length;ue++){const he=y[ue],Pe=v[ue];he!==null&&Pe!==void 0&&Pe.update(he,J,c||s)}se&&se($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Be=new pS;Be.setAnimationLoop(Me),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const Vr=new Ki,VD=new Nt;function GD(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,uS(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),h(m,f)):f.isMeshPhongMaterial?(o(m,f),u(m,f)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),_(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,Vr.copy(y),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(VD.makeRotationFromEuler(Vr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WD(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const A=e.render.frame;o[x.id]!==A&&(d(x),o[x.id]=A)}function u(x){const v=h();x.__bindingPointIndex=v;const y=t.createBuffer(),C=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],y=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,E=y.length;A<E;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,S=P.length;w<S;w++){const R=P[w];if(p(R,A,w,C)===!0){const k=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let X=0;X<O.length;X++){const F=O[X],W=_(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,k+B,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,B),B+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,y,C){const A=x.value,E=v+"_"+y;if(C[E]===void 0)return typeof A=="number"||typeof A=="boolean"?C[E]=A:C[E]=A.clone(),!0;{const P=C[E];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[E]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(x){const v=x.uniforms;let y=0;const C=16;for(let E=0,P=v.length;E<P;E++){const w=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,R=w.length;S<R;S++){const k=w[S],O=Array.isArray(k.value)?k.value:[k.value];for(let B=0,X=O.length;B<X;B++){const F=O[B],W=_(F),L=y%C,Y=L%W.boundary,K=L+Y;y+=Y,K!==0&&C-K<W.storage&&(y+=C-K),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=W.storage}}}const A=y%C;return A>0&&(y+=C-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}class $D{constructor(e={}){const{canvas:n=NR(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=Ar,this.toneMappingExposure=1;const v=this;let y=!1,C=0,A=0,E=null,P=-1,w=null;const S=new Ht,R=new Ht;let k=null;const O=new nt(0);let B=0,X=n.width,F=n.height,W=1,L=null,Y=null;const K=new Ht(0,0,X,F),se=new Ht(0,0,X,F);let Me=!1;const Be=new hS;let $=!1,J=!1;const ue=new Nt,he=new V,Pe=new Ht,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function st(){return E===null?W:1}let D=i;function tt(T,N){return n.getContext(T,N)}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gm}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",ce,!1),D===null){const N="webgl2";if(D=tt(N,T),D===null)throw tt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,Ye,Ee,_t,Ie,Ne,b,M,G,ee,te,Q,Ae,fe,ve,le,re,ge,He,Le,xe,Ue,ze,pt;function I(){Ge=new ZL(D),Ge.init(),Ue=new UD(D,Ge),Ye=new WL(D,Ge,e,Ue),Ee=new DD(D),_t=new e3(D),Ie=new _D,Ne=new ND(D,Ge,Ee,Ie,Ye,Ue,_t),b=new XL(v),M=new KL(v),G=new sP(D),ze=new VL(D,G),ee=new QL(D,G,_t,ze),te=new n3(D,ee,G,_t),He=new t3(D,Ye,Ne),le=new $L(Ie),Q=new vD(v,b,M,Ge,Ye,ze,le),Ae=new GD(v,Ie),fe=new yD,ve=new AD(Ge),ge=new HL(v,b,M,Ee,te,d,l),re=new LD(v,te,Ye),pt=new WD(D,_t,Ye,Ee),Le=new GL(D,Ge,_t),xe=new JL(D,Ge,_t),_t.programs=Q.programs,v.capabilities=Ye,v.extensions=Ge,v.properties=Ie,v.renderLists=fe,v.shadowMap=re,v.state=Ee,v.info=_t}I();const oe=new HD(v,D);this.xr=oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(X,F,!1))},this.getSize=function(T){return T.set(X,F)},this.setSize=function(T,N,z=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,F=N,n.width=Math.floor(T*W),n.height=Math.floor(N*W),z===!0&&(n.style.width=T+"px",n.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*W,F*W).floor()},this.setDrawingBufferSize=function(T,N,z){X=T,F=N,W=z,n.width=Math.floor(T*z),n.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,N,z,H){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,N,z,H),Ee.viewport(S.copy(K).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,N,z,H){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,N,z,H),Ee.scissor(R.copy(se).multiplyScalar(W).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){Ee.setScissorTest(Me=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(T=!0,N=!0,z=!0){let H=0;if(T){let U=!1;if(E!==null){const ae=E.texture.format;U=ae===Mm||ae===Sm||ae===ym}if(U){const ae=E.texture.type,me=ae===qi||ae===ho||ae===Ba||ae===As||ae===_m||ae===xm,ye=ge.getClearColor(),Se=ge.getClearAlpha(),Re=ye.r,De=ye.g,Ce=ye.b;me?(p[0]=Re,p[1]=De,p[2]=Ce,p[3]=Se,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Re,g[1]=De,g[2]=Ce,g[3]=Se,D.clearBufferiv(D.COLOR,0,g))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),ve.dispose(),Ie.dispose(),b.dispose(),M.dispose(),te.dispose(),ze.dispose(),pt.dispose(),Q.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",pi),oe.removeEventListener("sessionend",Am),Or.stop()};function q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=_t.autoReset,N=re.enabled,z=re.autoUpdate,H=re.needsUpdate,U=re.type;I(),_t.autoReset=T,re.enabled=N,re.autoUpdate=z,re.needsUpdate=H,re.type=U}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){const N=T.target;N.removeEventListener("dispose",be),We(N)}function We(T){Rt(T),Ie.remove(T)}function Rt(T){const N=Ie.get(T).programs;N!==void 0&&(N.forEach(function(z){Q.releaseProgram(z)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,H,U,ae){N===null&&(N=we);const me=U.isMesh&&U.matrixWorld.determinant()<0,ye=SS(T,N,z,H,U);Ee.setMaterial(H,me);let Se=z.index,Re=1;if(H.wireframe===!0){if(Se=ee.getWireframeAttribute(z),Se===void 0)return;Re=2}const De=z.drawRange,Ce=z.attributes.position;let Ke=De.start*Re,xt=(De.start+De.count)*Re;ae!==null&&(Ke=Math.max(Ke,ae.start*Re),xt=Math.min(xt,(ae.start+ae.count)*Re)),Se!==null?(Ke=Math.max(Ke,0),xt=Math.min(xt,Se.count)):Ce!=null&&(Ke=Math.max(Ke,0),xt=Math.min(xt,Ce.count));const yt=xt-Ke;if(yt<0||yt===1/0)return;ze.setup(U,H,ye,z,Se);let Sn,Ze=Le;if(Se!==null&&(Sn=G.get(Se),Ze=xe,Ze.setIndex(Sn)),U.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*st()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(U.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Ee.setLineWidth(Te*st()),U.isLineSegments?Ze.setMode(D.LINES):U.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else U.isPoints?Ze.setMode(D.POINTS):U.isSprite&&Ze.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Xt=U._multiDrawCounts,Qe=U._multiDrawCount,Zn=Se?G.get(Se).bytesPerElement:1,vo=Ie.get(H).currentProgram.getUniforms();for(let Mn=0;Mn<Qe;Mn++)vo.setValue(D,"_gl_DrawID",Mn),Ze.render(Te[Mn]/Zn,Xt[Mn])}else if(U.isInstancedMesh)Ze.renderInstances(Ke,yt,U.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Xt=Math.min(z.instanceCount,Te);Ze.renderInstances(Ke,yt,Xt)}else Ze.render(Ke,yt)};function $t(T,N,z){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,rl(T,N,z),T.side=Rr,T.needsUpdate=!0,rl(T,N,z),T.side=Fi):rl(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),m=ve.get(z),m.init(N),x.push(m),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),T!==z&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const H=new Set;return T.traverse(function(U){const ae=U.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const ye=ae[me];$t(ye,z,U),H.add(ye)}else $t(ae,z,U),H.add(ae)}),x.pop(),m=null,H},this.compileAsync=function(T,N,z=null){const H=this.compile(T,N,z);return new Promise(U=>{function ae(){if(H.forEach(function(me){Ie.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){U(T);return}setTimeout(ae,10)}Ge.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let qe=null;function bi(T){qe&&qe(T)}function pi(){Or.stop()}function Am(){Or.start()}const Or=new pS;Or.setAnimationLoop(bi),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(T){qe=T,oe.setAnimationLoop(T),T===null?Or.stop():Or.start()},oe.addEventListener("sessionstart",pi),oe.addEventListener("sessionend",Am),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,E),m=ve.get(T,x.length),m.init(N),x.push(m),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Be.setFromProjectionMatrix(ue),J=this.localClippingEnabled,$=le.init(this.clippingPlanes,J),_=fe.get(T,f.length),_.init(),f.push(_),oe.enabled===!0&&oe.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&rf(ae,N,-1/0,v.sortObjects)}rf(T,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,Y),Oe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Oe&&ge.addToRenderList(_,T),this.info.render.frame++,$===!0&&le.beginShadows();const z=m.state.shadowsArray;re.render(z,T,N),$===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,U=_.transmissive;if(m.setupLights(),N.isArrayCamera){const ae=N.cameras;if(U.length>0)for(let me=0,ye=ae.length;me<ye;me++){const Se=ae[me];bm(H,U,T,Se)}Oe&&ge.render(T);for(let me=0,ye=ae.length;me<ye;me++){const Se=ae[me];Cm(_,T,Se,Se.viewport)}}else U.length>0&&bm(H,U,T,N),Oe&&ge.render(T),Cm(_,T,N);E!==null&&(Ne.updateMultisampleRenderTarget(E),Ne.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(v,T,N),ze.resetDefaultState(),P=-1,w=null,x.pop(),x.length>0?(m=x[x.length-1],$===!0&&le.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function rf(T,N,z,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){H&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const me=te.update(T),ye=T.material;ye.visible&&_.push(T,me,ye,z,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const me=te.update(T),ye=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Pe.copy(me.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(ye)){const Se=me.groups;for(let Re=0,De=Se.length;Re<De;Re++){const Ce=Se[Re],Ke=ye[Ce.materialIndex];Ke&&Ke.visible&&_.push(T,me,Ke,z,Pe.z,Ce)}}else ye.visible&&_.push(T,me,ye,z,Pe.z,null)}}const ae=T.children;for(let me=0,ye=ae.length;me<ye;me++)rf(ae[me],N,z,H)}function Cm(T,N,z,H){const U=T.opaque,ae=T.transmissive,me=T.transparent;m.setupLightsView(z),$===!0&&le.setGlobalState(v.clippingPlanes,z),H&&Ee.viewport(S.copy(H)),U.length>0&&il(U,N,z),ae.length>0&&il(ae,N,z),me.length>0&&il(me,N,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function bm(T,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new po(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Za:qi,minFilter:no,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=m.state.transmissionRenderTarget[H.id],me=H.viewport||S;ae.setSize(me.z,me.w);const ye=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(O),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&ge.render(z);const Se=v.toneMapping;v.toneMapping=Ar;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),$===!0&&le.setGlobalState(v.clippingPlanes,H),il(T,z,H),Ne.updateMultisampleRenderTarget(ae),Ne.updateRenderTargetMipmap(ae),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ce=0,Ke=N.length;Ce<Ke;Ce++){const xt=N[Ce],yt=xt.object,Sn=xt.geometry,Ze=xt.material,Te=xt.group;if(Ze.side===Fi&&yt.layers.test(H.layers)){const Xt=Ze.side;Ze.side=_n,Ze.needsUpdate=!0,Rm(yt,z,H,Sn,Ze,Te),Ze.side=Xt,Ze.needsUpdate=!0,De=!0}}De===!0&&(Ne.updateMultisampleRenderTarget(ae),Ne.updateRenderTargetMipmap(ae))}v.setRenderTarget(ye),v.setClearColor(O,B),Re!==void 0&&(H.viewport=Re),v.toneMapping=Se}function il(T,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ae=T.length;U<ae;U++){const me=T[U],ye=me.object,Se=me.geometry,Re=H===null?me.material:H,De=me.group;ye.layers.test(z.layers)&&Rm(ye,N,z,Se,Re,De)}}function Rm(T,N,z,H,U,ae){T.onBeforeRender(v,N,z,H,U,ae),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.transparent===!0&&U.side===Fi&&U.forceSinglePass===!1?(U.side=_n,U.needsUpdate=!0,v.renderBufferDirect(z,N,H,U,T,ae),U.side=Rr,U.needsUpdate=!0,v.renderBufferDirect(z,N,H,U,T,ae),U.side=Fi):v.renderBufferDirect(z,N,H,U,T,ae),T.onAfterRender(v,N,z,H,U,ae)}function rl(T,N,z){N.isScene!==!0&&(N=we);const H=Ie.get(T),U=m.state.lights,ae=m.state.shadowsArray,me=U.state.version,ye=Q.getParameters(T,U.state,ae,N,z),Se=Q.getProgramCacheKey(ye);let Re=H.programs;H.environment=T.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(T.isMeshStandardMaterial?M:b).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Re===void 0&&(T.addEventListener("dispose",be),Re=new Map,H.programs=Re);let De=Re.get(Se);if(De!==void 0){if(H.currentProgram===De&&H.lightsStateVersion===me)return Lm(T,ye),De}else ye.uniforms=Q.getUniforms(T),T.onBeforeCompile(ye,v),De=Q.acquireProgram(ye,Se),Re.set(Se,De),H.uniforms=ye.uniforms;const Ce=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=le.uniform),Lm(T,ye),H.needsLights=ES(T),H.lightsStateVersion=me,H.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=De,H.uniformsList=null,De}function Pm(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=yc.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Lm(T,N){const z=Ie.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function SS(T,N,z,H,U){N.isScene!==!0&&(N=we),Ne.resetTextureUnits();const ae=N.fog,me=H.isMeshStandardMaterial?N.environment:null,ye=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ur,Se=(H.isMeshStandardMaterial?M:b).get(H.envMap||me),Re=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,xt=!!z.morphAttributes.color;let yt=Ar;H.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(yt=v.toneMapping);const Sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=Sn!==void 0?Sn.length:0,Te=Ie.get(H),Xt=m.state.lights;if($===!0&&(J===!0||T!==w)){const Nn=T===w&&H.id===P;le.setState(H,T,Nn)}let Qe=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Xt.state.version||Te.outputColorSpace!==ye||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==Se||H.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==le.numPlanes||Te.numIntersection!==le.numIntersection)||Te.vertexAlphas!==Re||Te.vertexTangents!==De||Te.morphTargets!==Ce||Te.morphNormals!==Ke||Te.morphColors!==xt||Te.toneMapping!==yt||Te.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Te.__version=H.version);let Zn=Te.currentProgram;Qe===!0&&(Zn=rl(H,N,U));let vo=!1,Mn=!1,of=!1;const Pt=Zn.getUniforms(),er=Te.uniforms;if(Ee.useProgram(Zn.program)&&(vo=!0,Mn=!0,of=!0),H.id!==P&&(P=H.id,Mn=!0),vo||w!==T){Pt.setValue(D,"projectionMatrix",T.projectionMatrix),Pt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Nn=Pt.map.cameraPosition;Nn!==void 0&&Nn.setValue(D,he.setFromMatrixPosition(T.matrixWorld)),Ye.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Mn=!0,of=!0)}if(U.isSkinnedMesh){Pt.setOptional(D,U,"bindMatrix"),Pt.setOptional(D,U,"bindMatrixInverse");const Nn=U.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Pt.setValue(D,"boneTexture",Nn.boneTexture,Ne))}U.isBatchedMesh&&(Pt.setOptional(D,U,"batchingTexture"),Pt.setValue(D,"batchingTexture",U._matricesTexture,Ne),Pt.setOptional(D,U,"batchingIdTexture"),Pt.setValue(D,"batchingIdTexture",U._indirectTexture,Ne),Pt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&Pt.setValue(D,"batchingColorTexture",U._colorsTexture,Ne));const sf=z.morphAttributes;if((sf.position!==void 0||sf.normal!==void 0||sf.color!==void 0)&&He.update(U,z,Zn),(Mn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,Pt.setValue(D,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(er.envMap.value=Se,er.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(er.envMapIntensity.value=N.environmentIntensity),Mn&&(Pt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&MS(er,of),ae&&H.fog===!0&&Ae.refreshFogUniforms(er,ae),Ae.refreshMaterialUniforms(er,H,W,F,m.state.transmissionRenderTarget[T.id]),yc.upload(D,Pm(Te),er,Ne)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(yc.upload(D,Pm(Te),er,Ne),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Pt.setValue(D,"center",U.center),Pt.setValue(D,"modelViewMatrix",U.modelViewMatrix),Pt.setValue(D,"normalMatrix",U.normalMatrix),Pt.setValue(D,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Nn=H.uniformsGroups;for(let af=0,TS=Nn.length;af<TS;af++){const Dm=Nn[af];pt.update(Dm,Zn),pt.bind(Dm,Zn)}}return Zn}function MS(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function ES(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,N,z){Ie.get(T.texture).__webglTexture=N,Ie.get(T.depthTexture).__webglTexture=z;const H=Ie.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const z=Ie.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,z=0){E=T,C=N,A=z;let H=!0,U=null,ae=!1,me=!1;if(T){const Se=Ie.get(T);Se.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(D.FRAMEBUFFER,null),H=!1):Se.__webglFramebuffer===void 0?Ne.setupRenderTarget(T):Se.__hasExternalTextures&&Ne.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(me=!0);const De=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][z]:U=De[N],ae=!0):T.samples>0&&Ne.useMultisampledRTT(T)===!1?U=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[z]:U=De,S.copy(T.viewport),R.copy(T.scissor),k=T.scissorTest}else S.copy(K).multiplyScalar(W).floor(),R.copy(se).multiplyScalar(W).floor(),k=Me;if(Ee.bindFramebuffer(D.FRAMEBUFFER,U)&&H&&Ee.drawBuffers(T,U),Ee.viewport(S),Ee.scissor(R),Ee.setScissorTest(k),ae){const Se=Ie.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,z)}else if(me){const Se=Ie.get(T.texture),Re=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,z||0,Re)}P=-1},this.readRenderTargetPixels=function(T,N,z,H,U,ae,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){Ee.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Se=T.texture,Re=Se.format,De=Se.type;if(!Ye.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&z>=0&&z<=T.height-U&&D.readPixels(N,z,H,U,Ue.convert(Re),Ue.convert(De),ae)}finally{const Se=E!==null?Ie.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,H,U,ae,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){Ee.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Se=T.texture,Re=Se.format,De=Se.type;if(!Ye.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-H&&z>=0&&z<=T.height-U){const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(N,z,H,U,Ue.convert(Re),Ue.convert(De),0),D.flush();const Ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await UR(D,Ke,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae)}finally{D.deleteBuffer(Ce),D.deleteSync(Ke)}return ae}}finally{const Se=E!==null?Ie.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(T,N=null,z=0){T.isTexture!==!0&&(ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(T.image.width*H),ae=Math.floor(T.image.height*H),me=N!==null?N.x:0,ye=N!==null?N.y:0;Ne.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,me,ye,U,ae),Ee.unbindTexture()},this.copyTextureToTexture=function(T,N,z=null,H=null,U=0){T.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],N=arguments[2],U=arguments[3]||0,z=null);let ae,me,ye,Se,Re,De;z!==null?(ae=z.max.x-z.min.x,me=z.max.y-z.min.y,ye=z.min.x,Se=z.min.y):(ae=T.image.width,me=T.image.height,ye=0,Se=0),H!==null?(Re=H.x,De=H.y):(Re=0,De=0);const Ce=Ue.convert(N.format),Ke=Ue.convert(N.type);Ne.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const xt=D.getParameter(D.UNPACK_ROW_LENGTH),yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Sn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),Xt=T.isCompressedTexture?T.mipmaps[U]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Re,De,ae,me,Ce,Ke,Xt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Re,De,Xt.width,Xt.height,Ce,Xt.data):D.texSubImage2D(D.TEXTURE_2D,U,Re,De,ae,me,Ce,Ke,Xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),U===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,N,z=null,H=null,U=0){T.isTexture!==!0&&(ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,T=arguments[2],N=arguments[3],U=arguments[4]||0);let ae,me,ye,Se,Re,De,Ce,Ke,xt;const yt=T.isCompressedTexture?T.mipmaps[U]:T.image;z!==null?(ae=z.max.x-z.min.x,me=z.max.y-z.min.y,ye=z.max.z-z.min.z,Se=z.min.x,Re=z.min.y,De=z.min.z):(ae=yt.width,me=yt.height,ye=yt.depth,Se=0,Re=0,De=0),H!==null?(Ce=H.x,Ke=H.y,xt=H.z):(Ce=0,Ke=0,xt=0);const Sn=Ue.convert(N.format),Ze=Ue.convert(N.type);let Te;if(N.isData3DTexture)Ne.setTexture3D(N,0),Te=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ne.setTexture2DArray(N,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Xt=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zn=D.getParameter(D.UNPACK_SKIP_PIXELS),vo=D.getParameter(D.UNPACK_SKIP_ROWS),Mn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Te,U,Ce,Ke,xt,ae,me,ye,Sn,Ze,yt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,U,Ce,Ke,xt,ae,me,ye,Sn,yt.data):D.texSubImage3D(Te,U,Ce,Ke,xt,ae,me,ye,Sn,Ze,yt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zn),D.pixelStorei(D.UNPACK_SKIP_ROWS,vo),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mn),U===0&&N.generateMipmaps&&D.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&Ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){C=0,A=0,E=null,Ee.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Em?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Ju?"display-p3":"srgb"}}class XD extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yS extends tl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Av=new Nt,ep=new rS,Kl=new ef,Zl=new V;class jD extends xn{constructor(e=new Ji,n=new yS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(r),Kl.radius+=o,e.ray.intersectsSphere(Kl)===!1)return;Av.copy(r).invert(),ep.copy(e.ray).applyMatrix4(Av);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Zl.fromBufferAttribute(h,m),Cv(Zl,m,l,r,e,n,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=d,_=p;g<_;g++)Zl.fromBufferAttribute(h,g),Cv(Zl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Cv(t,e,n,i,r,o,s){const a=ep.distanceSqToPoint(t);if(a<n){const l=new V;ep.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}const bv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class YD{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const qD=new YD;class wm{constructor(e){this.manager=e!==void 0?e:qD,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wm.DEFAULT_MATERIAL_NAME="__DEFAULT";class KD extends wm{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=bv.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=za("img");function l(){u(),bv.add(e,this),n&&n(this),o.manager.itemEnd(e)}function c(h){u(),r&&r(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class ZD extends wm{constructor(e){super(e)}load(e,n,i,r){const o=new ln,s=new KD(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);const QD="/card-flip/assets/deer-Cs82fqC9.png",JD=({visible:t})=>{const e=j.useRef(null);return j.useEffect(()=>{if(!t)return;const n=window.innerWidth,i=window.innerHeight,r=new XD,o=new Hn(75,n/i,.1,1e3),s=new $D;s.setSize(n,i),s.setPixelRatio(window.devicePixelRatio),e.current.appendChild(s.domElement);const l=new ZD().load(QD),c=new Ji,u=1e3,h=new Float32Array(u*3),d=new Float32Array(u);for(let f=0;f<u*3;f++)h[f]=Math.random()*2e3-1e3;for(let f=0;f<u;f++)d[f]=Math.random()*10+5;c.setAttribute("position",new $n(h,3)),c.setAttribute("scale",new $n(d,1));const p=new yS({size:50,map:l,alphaTest:.5,transparent:!0}),g=new jD(c,p);r.add(g),o.position.z=500;const _=()=>{requestAnimationFrame(_),g.rotation.x+=.001,g.rotation.y+=.001,s.render(r,o)};_();const m=()=>{const f=window.innerWidth,x=window.innerHeight;s.setSize(f,x),o.aspect=f/x,o.updateProjectionMatrix()};return window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m),e.current.removeChild(s.domElement)}},[t]),pe.jsx("div",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})},eI="/card-flip/assets/shikonoko-DC7hPuXu.mp3";function tI(){const[t,e]=j.useState(!1),[n,i]=j.useState(!1),[r,o]=j.useState(0),[s,a]=j.useState(!1),l=100,c=j.useRef(null),u=j.useRef(null),h=(d,p)=>{d.preventDefault(),console.log(p);let g=r+p;g>=l?g=l:g<0&&(g=0),o(g),c.current&&(c.current.style.width=g+"%")};return j.useEffect(()=>{s&&u.current?u.current.play():u.current&&(u.current.pause(),u.current.currentTime=0)},[s]),pe.jsxs(pe.Fragment,{children:[pe.jsxs("fieldset",{children:[pe.jsxs("legend",{children:["Pet Name: ",pe.jsx("strong",{children:"Shikonokonoko"})]}),pe.jsx("img",{src:ZE,alt:"Pet Image",width:"100px",style:{display:"block",border:"2px solid black",margin:2}}),pe.jsx(Go,{sx:{display:"block",m:"auto"},children:"Happiness"}),pe.jsx("div",{className:"happiness"}),pe.jsx(Go,{sx:{display:"block",m:"auto"},children:"Hunger"}),pe.jsx("div",{className:"hunger",children:pe.jsx("div",{ref:c,className:"hungerbar",style:{width:`${r}%`,height:"5vh",backgroundColor:"green"}})}),pe.jsx(Go,{sx:{display:"block",m:"auto"},children:"Energy"}),pe.jsx("div",{className:"energy"}),pe.jsxs("div",{className:"btn container",children:[pe.jsx("button",{onClick:()=>e(!0),children:"Eat Food"}),pe.jsx("button",{onClick:()=>{i(!0),a(!0),setTimeout(()=>{i(!1),a(!1)},1e4)},children:"Sleep"}),pe.jsx("button",{children:"Play"})]})]}),pe.jsxs(C0,{open:t,children:[pe.jsx(Fb,{children:"Food Choices"}),pe.jsx(R0,{children:pe.jsx(Go,{children:"Choose the food you want to eat"})}),pe.jsxs(b0,{sx:{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},children:[pe.jsxs(Al,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},onClick:d=>{h(d,10),e(!1)},children:[pe.jsx("img",{src:QE,alt:"Deer Food",width:"100px",style:{border:"2px solid black"}}),"Biscuit"]}),pe.jsxs(Al,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},onClick:d=>{h(d,5),e(!1)},children:[pe.jsx("img",{src:JE,alt:"Bird Food",width:"100px",style:{border:"2px solid black"}}),"Seed"]}),pe.jsxs(Al,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},onClick:d=>{h(d,-5),e(!1)},children:[pe.jsx("img",{src:e1,alt:"Meat Food",width:"100px",style:{border:"2px solid black"}}),"Raw Meat"]})]}),pe.jsx(b0,{sx:{display:"flex",justifyContent:"space-between"},children:pe.jsx(Al,{onClick:()=>e(!1),style:{border:"2px solid blue"},children:"Cancel"})})]}),pe.jsxs(C0,{open:n,children:[pe.jsx(JD,{visible:n}),pe.jsxs(R0,{children:[pe.jsx(Go,{children:"ZZZZZzz............."}),pe.jsxs("audio",{autoPlay:!0,children:[pe.jsx("source",{src:eI,type:"audio/mp3"}),"Your browser does not support the audio element."]})]})]})]})}gd.createRoot(document.getElementById("root")).render(pe.jsx(si.StrictMode,{children:pe.jsx(tI,{})}));
