"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[504],{36743:function(e,t,n){n.d(t,{Am:function(){return V},FA:function(){return D},Fy:function(){return _},I9:function(){return j},Im:function(){return M},Ku:function(){return H},T9:function(){return v},Tj:function(){return g},Uj:function(){return c},XA:function(){return y},ZQ:function(){return b},bD:function(){return U},c1:function(){return I},cY:function(){return w},eX:function(){return R},g:function(){return x},hp:function(){return $},jZ:function(){return T},lT:function(){return C},lV:function(){return A},nr:function(){return k},sr:function(){return S},tD:function(){return B},u:function(){return u},yU:function(){return m},zW:function(){return O}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/aipriCompleateCheck/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function E(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N="FirebaseError";class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=N,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new x(r,o,n);return a}}function P(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(F(n)&&F(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function $(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},50953:function(e,t,n){n.d(t,{C4:function(){return I},EW:function(){return Me},Gc:function(){return ve},IG:function(){return Se},KR:function(){return Oe},Kh:function(){return me},Pr:function(){return Pe},R1:function(){return xe},X2:function(){return u},bl:function(){return S},fE:function(){return Te},g8:function(){return _e},hV:function(){return Be},hZ:function(){return M},i9:function(){return ke},ju:function(){return Ee},lJ:function(){return Ae},qA:function(){return F},u4:function(){return L},ux:function(){return Ie},wB:function(){return $e},yC:function(){return o}});var r=n(90033);
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(){return i}const c=new WeakSet;class u{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,A(this),m(this);const e=s,t=T;s=this,T=!0;try{return this.fn()}finally{0,v(this),s=e,T=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)_(e);this.deps=this.depsTail=void 0,A(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let l,h,d=0;function f(e,t=!1){if(e.flags|=8,t)return e.next=h,void(h=e);e.next=l,l=e}function p(){d++}function g(){if(--d>0)return;if(h){let e=h;h=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function m(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),_(r),b(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(w(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function w(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===C)return;e.globalVersion=C;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=s,i=T;s=e,T=!0;try{m(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,T=i,v(e),e.flags&=-3}}function _(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)_(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function b(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let T=!0;const E=[];function I(){E.push(T),T=!1}function S(){const e=E.pop();T=void 0===e||e}function A(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let C=0;class k{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class O{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!s||!T||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new k(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,R(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,C++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function R(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)R(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const N=new WeakMap,x=Symbol(""),D=Symbol(""),P=Symbol("");function L(e,t,n){if(T&&s){let t=N.get(e);t||N.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new O),r.map=t,r.key=n),r.track()}}function M(e,t,n,i,s,o){const a=N.get(e);if(!a)return void C++;const c=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(c);else{const s=(0,r.cy)(e),o=s&&(0,r.yI)(n);if(s&&"length"===n){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n===P||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(P)),t){case"add":s?o&&c(a.get("length")):(c(a.get(x)),(0,r.CE)(e)&&c(a.get(D)));break;case"delete":s||(c(a.get(x)),(0,r.CE)(e)&&c(a.get(D)));break;case"set":(0,r.CE)(e)&&c(a.get(x));break}}g()}function U(e){const t=Ie(e);return t===e?t:(L(t,"iterate",P),Te(e)?t:t.map(Ae))}function F(e){return L(e=Ie(e),"iterate",P),e}const V={__proto__:null,[Symbol.iterator](){return j(this,Symbol.iterator,Ae)},concat(...e){return U(this).concat(...e.map((e=>(0,r.cy)(e)?U(e):e)))},entries(){return j(this,"entries",(e=>(e[1]=Ae(e[1]),e)))},every(e,t){return B(this,"every",e,t,void 0,arguments)},filter(e,t){return B(this,"filter",e,t,(e=>e.map(Ae)),arguments)},find(e,t){return B(this,"find",e,t,Ae,arguments)},findIndex(e,t){return B(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return B(this,"findLast",e,t,Ae,arguments)},findLastIndex(e,t){return B(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return B(this,"forEach",e,t,void 0,arguments)},includes(...e){return K(this,"includes",e)},indexOf(...e){return K(this,"indexOf",e)},join(e){return U(this).join(e)},lastIndexOf(...e){return K(this,"lastIndexOf",e)},map(e,t){return B(this,"map",e,t,void 0,arguments)},pop(){return q(this,"pop")},push(...e){return q(this,"push",e)},reduce(e,...t){return z(this,"reduce",e,t)},reduceRight(e,...t){return z(this,"reduceRight",e,t)},shift(){return q(this,"shift")},some(e,t){return B(this,"some",e,t,void 0,arguments)},splice(...e){return q(this,"splice",e)},toReversed(){return U(this).toReversed()},toSorted(e){return U(this).toSorted(e)},toSpliced(...e){return U(this).toSpliced(...e)},unshift(...e){return q(this,"unshift",e)},values(){return j(this,"values",Ae)}};function j(e,t,n){const r=F(e),i=r[t]();return r===e||Te(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const $=Array.prototype;function B(e,t,n,r,i,s){const o=F(e),a=o!==e&&!Te(e),c=o[t];if(c!==$[t]){const t=c.apply(e,s);return a?Ae(t):t}let u=n;o!==e&&(a?u=function(t,r){return n.call(this,Ae(t),r,e)}:n.length>2&&(u=function(t,r){return n.call(this,t,r,e)}));const l=c.call(o,u,r);return a&&i?i(l):l}function z(e,t,n,r){const i=F(e);let s=n;return i!==e&&(Te(e)?n.length>3&&(s=function(t,r,i){return n.call(this,t,r,i,e)}):s=function(t,r,i){return n.call(this,t,Ae(r),i,e)}),i[t](s,...r)}function K(e,t,n){const r=Ie(e);L(r,"iterate",P);const i=r[t](...n);return-1!==i&&!1!==i||!Ee(n[0])?i:(n[0]=Ie(n[0]),r[t](...n))}function q(e,t,n=[]){I(),p();const r=Ie(e)[t].apply(e,n);return g(),S(),r}const H=(0,r.pD)("__proto__,__v_isRef,__isVue"),W=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function G(e){(0,r.Bm)(e)||(e=String(e));const t=Ie(this);return L(t,"has",e),t.hasOwnProperty(e)}class Q{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?fe:de:s?he:le).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){let e;if(o&&(e=V[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,ke(e)?e:n);return((0,r.Bm)(t)?W.has(t):H(t))?a:(i||L(e,"get",t),s?a:ke(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ye(a):me(a):a)}}class X extends Q{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=be(s);if(Te(n)||be(n)||(s=Ie(s),n=Ie(n)),!(0,r.cy)(e)&&ke(s)&&!ke(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,ke(e)?e:i);return e===Ie(i)&&(o?(0,r.$H)(n,s)&&M(e,"set",t,n,s):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&M(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&W.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":x),Reflect.ownKeys(e)}}class J extends Q{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y=new X,Z=new J,ee=new X(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Ie(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?te:t?Ce:Ae;return!t&&L(o,"iterate",u?D:x),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function se(e,t){const n={get(n){const i=this["__v_raw"],s=Ie(i),o=Ie(n);e||((0,r.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=ne(s),c=t?te:e?Ce:Ae;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Ie(t),"iterate",x),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],i=Ie(n),s=Ie(t);return e||((0,r.$H)(t,s)&&L(i,"has",t),L(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=Ie(s),a=t?te:e?Ce:Ae;return!e&&L(o,"iterate",x),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}};(0,r.X$)(n,e?{add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear")}:{add(e){t||Te(e)||be(e)||(e=Ie(e));const n=Ie(this),r=ne(n),i=r.has.call(n,e);return i||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||Te(n)||be(n)||(n=Ie(n));const i=Ie(this),{has:s,get:o}=ne(i);let a=s.call(i,e);a||(e=Ie(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&M(i,"set",e,n,c):M(i,"add",e,n),this},delete(e){const t=Ie(this),{has:n,get:r}=ne(t);let i=n.call(t,e);i||(e=Ie(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&M(t,"delete",e,void 0,s),o},clear(){const e=Ie(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=re(r,e,t)})),n}function oe(e,t){const n=se(e,t);return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const ae={get:oe(!1,!1)},ce={get:oe(!1,!0)},ue={get:oe(!0,!1)};const le=new WeakMap,he=new WeakMap,de=new WeakMap,fe=new WeakMap;function pe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ge(e){return e["__v_skip"]||!Object.isExtensible(e)?0:pe((0,r.Zf)(e))}function me(e){return be(e)?e:we(e,!1,Y,ae,le)}function ve(e){return we(e,!1,ee,ce,he)}function ye(e){return we(e,!0,Z,ue,de)}function we(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ge(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function _e(e){return be(e)?_e(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function Ee(e){return!!e&&!!e["__v_raw"]}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Se(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ae=e=>(0,r.Gv)(e)?me(e):e,Ce=e=>(0,r.Gv)(e)?ye(e):e;function ke(e){return!!e&&!0===e["__v_isRef"]}function Oe(e){return Re(e,!1)}function Re(e,t){return ke(e)?e:new Ne(e,t)}class Ne{constructor(e,t){this.dep=new O,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Ie(e),this._value=t?e:Ae(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Te(e)||be(e);e=n?e:Ie(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Ae(e),this.dep.trigger())}}function xe(e){return ke(e)?e.value:e}const De={get:(e,t,n)=>"__v_raw"===t?e:xe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Pe(e){return _e(e)?e:new Proxy(e,De)}class Le{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new O(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=C-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this,!0),!0}get value(){const e=this.dep.track();return w(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Me(e,t,n=!1){let i,s;(0,r.Tn)(e)?i=e:(i=e.get,s=e.set);const o=new Le(i,s,n);return o}const Ue={},Fe=new WeakMap;let Ve;function je(e,t=!1,n=Ve){if(n){let t=Fe.get(n);t||Fe.set(n,t=[]),t.push(e)}else 0}function $e(e,t,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:l,call:h}=n,d=e=>s?e:Te(e)||!1===s||0===s?Be(e,1):Be(e);let f,p,g,m,v=!1,y=!1;if(ke(e)?(p=()=>e.value,v=Te(e)):_e(e)?(p=()=>d(e),v=!0):(0,r.cy)(e)?(y=!0,v=e.some((e=>_e(e)||Te(e))),p=()=>e.map((e=>ke(e)?e.value:_e(e)?d(e):(0,r.Tn)(e)?h?h(e,2):e():void 0))):p=(0,r.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(g){I();try{g()}finally{S()}}const t=Ve;Ve=f;try{return h?h(e,3,[m]):e(m)}finally{Ve=t}}:r.tE,t&&s){const e=p,t=!0===s?1/0:s;p=()=>Be(e(),t)}const w=a(),_=()=>{f.stop(),w&&(0,r.TF)(w.effects,f)};if(o&&t){const e=t;t=(...t)=>{e(...t),_()}}let b=y?new Array(e.length).fill(Ue):Ue;const T=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(s||v||(y?e.some(((e,t)=>(0,r.$H)(e,b[t]))):(0,r.$H)(e,b))){g&&g();const n=Ve;Ve=f;try{const n=[e,b===Ue?void 0:y&&b[0]===Ue?[]:b,m];h?h(t,3,n):t(...n),b=e}finally{Ve=n}}}else f.run()};return l&&l(T),f=new u(p),f.scheduler=c?()=>c(T,!1):T,m=e=>je(e,!1,f),g=f.onStop=()=>{const e=Fe.get(f);if(e){if(h)h(e,4);else for(const t of e)t();Fe.delete(f)}},t?i?T(!0):b=f.run():c?c(T.bind(null,!0),!0):f.run(),_.pause=f.pause.bind(f),_.resume=f.resume.bind(f),_.stop=_,_}function Be(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,ke(e))Be(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)Be(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{Be(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)Be(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Be(e[r],t,n)}return e}},20641:function(e,t,n){n.d(t,{$u:function(){return se},CE:function(){return Zt},Df:function(){return $},EW:function(){return $n},FK:function(){return Bt},Fv:function(){return dn},Gy:function(){return L},K9:function(){return gt},Lk:function(){return on},MZ:function(){return j},OW:function(){return V},Q3:function(){return fn},QP:function(){return U},RG:function(){return _e},Tb:function(){return Te},Wv:function(){return en},bF:function(){return an},bo:function(){return O},dY:function(){return m},eW:function(){return hn},g2:function(){return pe},gN:function(){return me},hi:function(){return ae},k6:function(){return k},nI:function(){return En},pI:function(){return we},pM:function(){return B},qL:function(){return o},sV:function(){return re},uX:function(){return Gt},v6:function(){return vn},wB:function(){return At},xo:function(){return oe}});var r=n(50953),i=n(90033);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}if(u)return(0,r.C4)(),s(u,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,a,o,l)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const u=[];let l=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(e){const t=g||p;return e?t.then(this?e.bind(this):e):t}function v(e){let t=l+1,n=u.length;while(t<n){const r=t+n>>>1,i=u[r],s=E(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=E(e),n=u[u.length-1];!n||!(2&e.flags)&&t>=E(n)?u.push(e):u.splice(v(t),0,e),e.flags|=1,w()}}function w(){g||(g=p.then(I))}function _(e){(0,i.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(f+1,0,e):1&e.flags||(h.push(e),e.flags|=1),w()}function b(e,t,n=l+1){for(0;n<u.length;n++){const t=u[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,u.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function T(e){if(h.length){const e=[...new Set(h)].sort(((e,t)=>E(e)-E(t)));if(h.length=0,d)return void d.push(...e);for(d=e,f=0;f<d.length;f++){const e=d[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,f=0}}const E=e=>null==e.id?2&e.flags?-1:1/0:e.id;function I(e){i.tE;try{for(l=0;l<u.length;l++){const e=u[l];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;l<u.length;l++){const e=u[l];e&&(e.flags&=-2)}l=-1,u.length=0,T(e),g=null,(u.length||h.length)&&I(e)}}let S=null,A=null;function C(e){const t=S;return S=e,A=e&&e.type.__scopeId||null,t}function k(e,t=S,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Jt(-1);const i=C(t);let s;try{s=e(...n)}finally{C(i),r._d&&Jt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function O(e,t){if(null===S)return e;const n=Fn(S),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,c,u=i.MZ]=t[o];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function R(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const N=Symbol("_vte"),x=e=>e.__isTeleport;const D=Symbol("_leaveCb"),P=Symbol("_enterCb");function L(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return re((()=>{e.isMounted=!0})),oe((()=>{e.isUnmounting=!0})),e}const M=[Function,Array],U={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:M,onEnter:M,onAfterEnter:M,onEnterCancelled:M,onBeforeLeave:M,onLeave:M,onAfterLeave:M,onLeaveCancelled:M,onBeforeAppear:M,onAppear:M,onAfterAppear:M,onAppearCancelled:M};function F(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function V(e,t,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:w,onAfterAppear:_,onAppearCancelled:b}=t,T=String(e.key),E=F(n,e),I=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];I(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},A={mode:c,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!a)return;r=y||l}t[D]&&t[D](!0);const i=E[T];i&&nn(e,i)&&i.el[D]&&i.el[D](),I(r,[t])},enter(e){let t=h,r=d,i=f;if(!n.isMounted){if(!a)return;t=w||h,r=_||d,i=b||f}let s=!1;const o=e[P]=t=>{s||(s=!0,I(t?i:r,[e]),A.delayedLeave&&A.delayedLeave(),e[P]=void 0)};t?S(t,[e,o]):o()},leave(t,r){const i=String(e.key);if(t[P]&&t[P](!0),n.isUnmounting)return r();I(p,[t]);let s=!1;const o=t[D]=n=>{s||(s=!0,r(),I(n?v:m,[t]),t[D]=void 0,E[i]===e&&delete E[i])};E[i]=e,g?S(g,[t,o]):o()},clone(e){const i=V(e,t,n,r,s);return s&&s(i),i}};return A}function j(e,t){6&e.shapeFlag&&e.component?(e.transition=t,j(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Bt?(128&o.patchFlag&&i++,r=r.concat($(o.children,t,a))):(t||o.type!==Kt)&&r.push(null!=a?ln(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function B(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function z(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function K(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>K(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(q(o)&&!a)return;const c=4&o.shapeFlag?Fn(o.component):o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?()=>!1:e=>(0,i.$3)(g,e);if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,m(d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?m(h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],m(h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,m(h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,pt(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const q=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const H=e=>e.type.__isKeepAlive;RegExp,RegExp;function W(e,t){return(0,i.cy)(e)?e.some((e=>W(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function G(e,t){X(e,"a",t)}function Q(e,t){X(e,"da",t)}function X(e,t,n=Tn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ee(t,r,n),n){let e=n.parent;while(e&&e.parent)H(e.parent.vnode)&&J(r,t,n,e),e=e.parent}}function J(e,t,n,r){const s=ee(t,e,r,!0);ae((()=>{(0,i.TF)(r[t],s)}),n)}function Y(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Z(e){return 128&e.shapeFlag?e.ssContent:e}function ee(e,t,n=Tn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=An(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const te=e=>(t,n=Tn)=>{Nn&&"sp"!==e||ee(e,((...e)=>t(...e)),n)},ne=te("bm"),re=te("m"),ie=te("bu"),se=te("u"),oe=te("bum"),ae=te("um"),ce=te("sp"),ue=te("rtg"),le=te("rtc");function he(e,t=Tn){ee("ec",e,t)}const de="components",fe="directives";function pe(e,t){return ve(de,e,!0,t)||e}const ge=Symbol.for("v-ndc");function me(e){return ve(fe,e)}function ve(e,t,n=!0,r=!1){const s=S||Tn;if(s){const n=s.type;if(e===de){const e=Vn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=ye(s[e]||n[e],t)||ye(s.appContext[e],t);return!o&&r?n:o}}function ye(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function we(e,t,n,s){let o;const a=n&&n[s],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1;n&&(i=!(0,r.fE)(e),e=(0,r.qA)(e)),o=new Array(e.length);for(let s=0,c=e.length;s<c;s++)o[s]=t(i?(0,r.lJ)(e[s]):e[s],s,void 0,a&&a[s])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}function _e(e,t,n={},r,s){if(S.ce||S.parent&&q(S.parent)&&S.parent.ce)return"default"!==t&&(n.name=t),Gt(),en(Bt,null,[an("slot",n,r&&r())],64);let o=e[t];o&&o._c&&(o._d=!1),Gt();const a=o&&be(o(n)),c=n.key||a&&a.key,u=en(Bt,{key:(c&&!(0,i.Bm)(c)?c:`_${t}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&1===e._?64:-2);return!s&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),o&&o._c&&(o._d=!0),u}function be(e){return e.some((e=>!tn(e)||e.type!==Kt&&!(e.type===Bt&&!be(e.children))))?e:null}function Te(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.rU)(r)]=e[r];return n}const Ee=e=>e?kn(e)?Fn(e):Ee(e.parent):null,Ie=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ee(e.parent),$root:e=>Ee(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>De(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>kt.bind(e)}),Se=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Ae={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Se(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];ke&&(c[t]=0)}}const d=Ie[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Se(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Se(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Ie,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ce(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let ke=!0;function Oe(e){const t=De(e),n=e.proxy,s=e.ctx;ke=!1,t.beforeCreate&&Ne(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:T,render:E,renderTracked:I,renderTriggered:S,errorCaptured:A,serverPrefetch:C,expose:k,inheritAttrs:O,components:R,directives:N,filters:x}=t,D=null;if(h&&Re(h,s,D),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(ke=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=$n({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)xe(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{We(t,e[t])}))}function P(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ne(d,e,"c"),P(ne,f),P(re,p),P(ie,g),P(se,m),P(G,v),P(Q,y),P(he,A),P(le,I),P(ue,S),P(oe,_),P(ae,T),P(ce,C),(0,i.cy)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.tE&&(e.render=E),null!=O&&(e.inheritAttrs=O),R&&(e.components=R),N&&(e.directives=N),C&&z(e)}function Re(e,t,n=i.tE){(0,i.cy)(e)&&(e=Fe(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?Ge(n.from||s,n.default,!0):Ge(n.from||s):Ge(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Ne(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function xe(e,t,n,r){let s=r.includes(".")?Ot(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&At(s,n)}else if((0,i.Tn)(e))At(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>xe(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&At(s,r,e)}else 0}function De(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Pe(u,e,a,!0))),Pe(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function Pe(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Pe(e,s,n,!0),i&&i.forEach((t=>Pe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Le[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Le={data:Me,props:$e,emits:$e,methods:je,computed:je,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:je,directives:je,watch:Be,provide:Me,inject:Ue};function Me(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Ue(e,t){return je(Fe(e),Fe(t))}function Fe(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function je(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function $e(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Ce(e),Ce(null!=t?t:{})):t}function Be(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=Ve(e[r],t[r]);return n}function ze(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ke=0;function qe(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=ze(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:Ke++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Bn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(l,...t)):(0,i.Tn)(e)&&(a.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,a){if(!u){0;const c=l._ceVNode||an(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,i):e(c,i,a),u=!0,l._container=i,i.__vue_app__=l,Fn(c.component)}},onUnmount(e){c.push(e)},unmount(){u&&(o(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l},runWithContext(e){const t=He;He=l;try{return e()}finally{He=t}}};return l}}let He=null;function We(e,t){if(Tn){let n=Tn.provides;const r=Tn.parent&&Tn.parent.provides;r===n&&(n=Tn.provides=Object.create(r)),n[e]=t}else 0}function Ge(e,t,n=!1){const r=Tn||S;if(r||He){const s=He?He._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const Qe={},Xe=()=>Object.create(Qe),Je=e=>Object.getPrototypeOf(e)===Qe;function Ye(e,t,n,i=!1){const s={},o=Xe();e.propsDefaults=Object.create(null),et(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ze(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;et(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=tt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Dt(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=tt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function et(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:Dt(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=tt(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function tt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=An(s);r=i[n]=e.call(null,t),o()}}else r=e;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const nt=new WeakMap;function rt(e,t,n=!1){const r=n?nt:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=rt(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);it(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(it(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(t)}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function it(e){return"$"!==e[0]&&!(0,i.SU)(e)}const st=e=>"_"===e[0]||"$stable"===e,ot=e=>(0,i.cy)(e)?e.map(pn):[pn(e)],at=(e,t,n)=>{if(t._n)return t;const r=k(((...e)=>ot(t(...e))),n);return r._c=!1,r},ct=(e,t,n)=>{const r=e._ctx;for(const s in e){if(st(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=at(s,n,r);else if(null!=n){0;const e=ot(n);t[s]=()=>e}}},ut=(e,t)=>{const n=ot(t);e.slots.default=()=>n},lt=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},ht=(e,t,n)=>{const r=e.slots=Xe();if(32&e.vnode.shapeFlag){const e=t._;e?(lt(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):ct(t,r)}else t&&ut(e,t)},dt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:lt(s,t,n):(o=!t.$stable,ct(t,s)),a=t}else t&&(ut(e,t),a={default:1});if(o)for(const i in s)st(i)||null!=a[i]||delete s[i]};function ft(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const pt=$t;function gt(e){return mt(e)}function mt(e,t){ft();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!nn(e,t)&&(r=Z(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case zt:w(e,t,n,r);break;case Kt:_(e,t,n,r);break;case qt:null==e&&E(t,n,r,o);break;case Bt:L(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ne)}null!=l&&i&&K(l,e&&e.ref,s,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?C(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},C=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&m?d(f,e.children):16&m&&O(e.children,f,null,r,o,vt(e,u),l,h),y&&R(e,null,r,"created"),k(f,e,e.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(f,e,null,g[e],u,r);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&yn(p,r,e)}y&&R(e,null,r,"beforeMount");const w=wt(o,v);w&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||w||y)&&pt((()=>{p&&yn(p,r,e),w&&v.enter(f),y&&R(e,null,r,"mounted")}),o)},k=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n||jt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;k(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?gn(e[u]):pn(e[u]);v(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&yt(n,!1),(m=g.onVnodeBeforeUpdate)&&yn(m,n,t,e),f&&R(t,e,n,"beforeUpdate"),n&&yt(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(u,""),h?D(e.dynamicChildren,h,u,n,r,vt(t,s),o):c||$(e,t,u,null,n,r,vt(t,s),o,!1),l>0){if(16&l)P(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||P(u,p,g,n,s);((m=g.onVnodeUpdated)||f)&&pt((()=>{m&&yn(m,n,t,e),f&&R(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Bt||!nn(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},P=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=t[o];c!==u&&"value"!==o&&a(e,o,u,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},L=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),O(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&_t(e,t,!0)):$(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):U(t,n,r,i,s,o,c):F(e,t,c)},U=(e,t,n,r,i,s,o)=>{const a=e.component=bn(e,r,i);if(H(e)&&(a.ctx.renderer=ne),xn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,V,o),!e.el){const e=a.subTree=an(Kt);_(null,e,t,n)}}else V(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(Ut(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=Tt(e);if(n)return t&&(t.el=l.el,j(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,yt(e,!1),t?(t.el=l.el,j(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&yn(h,s,t,l),yt(e,!0);const p=Pt(e);0;const g=e.subTree;e.subTree=p,v(g,p,f(g.el),Z(g),e,o,a),t.el=p.el,null===d&&Vt(e,p.el),r&&pt(r,o),(h=t.props&&t.props.onVnodeUpdated)&&pt((()=>yn(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d,root:f,type:p}=e,g=q(t);if(yt(e,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&yn(r,d,t),yt(e,!0),c&&ie){const t=()=>{e.subTree=Pt(e),ie(c,e.subTree,e,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=Pt(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&pt(h,o),!g&&(r=u&&u.onVnodeMounted)){const e=t;pt((()=>yn(r,d,e)),o)}(256&t.shapeFlag||d&&q(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&pt(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const l=e.effect=new r.X2(u);e.scope.off();const h=e.update=l.run.bind(l),d=e.job=l.runIfDirty.bind(l);d.i=e,d.id=e.uid,l.scheduler=()=>y(d),yt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Ze(e,t.props,i,n),dt(e,t.children,n),(0,r.C4)(),b(e),(0,r.bl)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Y(u,i,s),h!==u&&d(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):Y(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?gn(t[f]):pn(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?Y(e,s,o,!0,!1,d):O(t,n,r,s,o,a,c,u,d)},z=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?gn(t[l]):pn(t[l]);if(!nn(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?gn(t[f]):pn(t[f]);if(!nn(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?gn(t[l]):pn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)G(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?gn(t[l]):pn(t[l]);null!=e.key&&m.set(e.key,l)}let y,w=0;const _=f-g+1;let b=!1,T=0;const E=new Array(_);for(l=0;l<_;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===E[y-g]&&nn(r,t[y])){i=y;break}void 0===i?G(r,s,o,!0):(E[i-g]=l+1,i>=T?T=i:b=!0,v(r,t[i],n,null,s,o,a,c,u),w++)}const I=b?bt(E):i.Oj;for(y=I.length-1,l=_-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?v(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==I[y]?W(i,n,d,2):y--)}}},W=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void W(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ne);if(a===Bt){s(o,t,n);for(let e=0;e<u.length;e++)W(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===qt)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),pt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(i=!1),null!=a&&K(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&l)return void t.ctx.deactivate(e);const p=1&l&&d,g=!q(e);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&yn(m,t,e),6&l)J(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);p&&R(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,ne,r):u&&!u.hasOnce&&(s!==Bt||h>0&&64&h)?Y(u,t,n,!1,!0):(s===Bt&&384&h||!i&&16&l)&&Y(c,t,n),r&&Q(e)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&pt((()=>{m&&yn(m,t,e),p&&R(e,null,t,"unmounted")}),n)},Q=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Bt)return void X(n,r);if(t===qt)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},X=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:u,a:l}=e;Et(u),Et(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,G(a,e,t,n)),c&&pt(c,t),pt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},Z=e=>{if(6&e.shapeFlag)return Z(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[N];return n?p(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,b(),T(),ee=!1)},ne={p:v,um:G,m:W,r:Q,mt:U,mc:O,pc:$,pbc:D,n:Z,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:qe(te,re)}}function vt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function yt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _t(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=gn(s[i]),t.el=e.el),n||-2===t.patchFlag||_t(e,t)),t.type===zt&&(t.el=e.el)}}function bt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Tt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Tt(t)}function Et(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const It=Symbol.for("v-scx"),St=()=>{{const e=Ge(It);return e}};function At(e,t,n){return Ct(e,t,n)}function Ct(e,t,n=i.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=t&&s||!t&&"post"!==c;let d;if(Nn)if("sync"===c){const e=St();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const f=Tn;l.call=(e,t,n)=>o(e,f,t,n);let p=!1;"post"===c?l.scheduler=e=>{pt(e,f&&f.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(e,t)=>{t?e():y(e)}),l.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const g=(0,r.wB)(e,t,l);return Nn&&(d?d.push(g):h&&g()),g}function kt(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?Ot(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=An(this),c=Ct(s,o.bind(r),n);return a(),c}function Ot(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Rt=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Nt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&Rt(r,t.slice(7));let u;c&&(c.trim&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function xt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=xt(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function Dt(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function Pt(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,y=C(e);let w,_;try{if(4&n.shapeFlag){const e=s||r,t=e;w=pn(h.call(t,e,d,f,g,p,m)),_=u}else{const e=t;0,w=pn(e.length>1?e(f,{attrs:u,slots:c,emit:l}):e(f,null)),_=t.props?u:Lt(u)}}catch(T){Ht.length=0,a(T,e,1),w=an(Kt)}let b=w;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(i.CP)&&(_=Mt(_,o)),b=ln(b,_,!1,!0))}return n.dirs&&(b=ln(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&j(b,n.transition),w=b,C(y),w}const Lt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Mt=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Ut(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Ft(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Ft(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Dt(u,n))return!0}}return!1}function Ft(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Dt(n,s))return!0}return!1}function Vt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const jt=e=>e.__isSuspense;function $t(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):_(e)}const Bt=Symbol.for("v-fgt"),zt=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),qt=Symbol.for("v-stc"),Ht=[];let Wt=null;function Gt(e=!1){Ht.push(Wt=e?null:[])}function Qt(){Ht.pop(),Wt=Ht[Ht.length-1]||null}let Xt=1;function Jt(e){Xt+=e,e<0&&Wt&&(Wt.hasOnce=!0)}function Yt(e){return e.dynamicChildren=Xt>0?Wt||i.Oj:null,Qt(),Xt>0&&Wt&&Wt.push(e),e}function Zt(e,t,n,r,i,s){return Yt(on(e,t,n,r,i,s,!0))}function en(e,t,n,r,i){return Yt(an(e,t,n,r,i,!0))}function tn(e){return!!e&&!0===e.__v_isVNode}function nn(e,t){return e.type===t.type&&e.key===t.key}const rn=({key:e})=>null!=e?e:null,sn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:S,r:e,k:t,f:!!n}:e:null);function on(e,t=null,n=null,r=0,s=null,o=(e===Bt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rn(t),ref:t&&sn(t),scopeId:A,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return c?(mn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Xt>0&&!a&&Wt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Wt.push(u),u}const an=cn;function cn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==ge||(e=Kt),tn(e)){const r=ln(e,t,!0);return n&&mn(r,n),Xt>0&&!a&&Wt&&(6&r.shapeFlag?Wt[Wt.indexOf(e)]=r:Wt.push(r)),r.patchFlag=-2,r}if(jn(e)&&(e=e.__vccOpts),t){t=un(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:jt(e)?128:x(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return on(e,t,n,s,o,c,a,!0)}function un(e){return e?(0,r.ju)(e)||Je(e)?(0,i.X$)({},e):e:null}function ln(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=e,l=t?vn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&rn(l),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(sn(t)):[o,sn(t)]:sn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Bt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ln(e.ssContent),ssFallback:e.ssFallback&&ln(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&j(h,u.clone(h)),h}function hn(e=" ",t=0){return an(zt,null,e,t)}function dn(e,t){const n=an(qt,null,e);return n.staticCount=t,n}function fn(e="",t=!1){return t?(Gt(),en(Kt,null,e)):an(Kt,null,e)}function pn(e){return null==e||"boolean"===typeof e?an(Kt):(0,i.cy)(e)?an(Bt,null,e.slice()):tn(e)?gn(e):an(zt,null,String(e))}function gn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ln(e)}function mn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),mn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Je(t)?3===r&&S&&(1===S.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=S}}else(0,i.Tn)(t)?(t={default:t,_ctx:S},n=32):(t=String(t),64&r?(n=16,t=[hn(t)]):n=8);e.children=t,e.shapeFlag|=n}function vn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function yn(e,t,n,r=null){o(e,t,7,[n,r])}const wn=ze();let _n=0;function bn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||wn,a={uid:_n++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rt(s,o),emitsOptions:xt(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Nt.bind(null,a),e.ce&&e.ce(a),a}let Tn=null;const En=()=>Tn||S;let In,Sn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};In=t("__VUE_INSTANCE_SETTERS__",(e=>Tn=e)),Sn=t("__VUE_SSR_SETTERS__",(e=>Nn=e))}const An=e=>{const t=Tn;return In(e),e.scope.on(),()=>{e.scope.off(),In(t)}},Cn=()=>{Tn&&Tn.scope.off(),In(null)};function kn(e){return 4&e.vnode.shapeFlag}let On,Rn,Nn=!1;function xn(e,t=!1,n=!1){t&&Sn(t);const{props:r,children:i}=e.vnode,s=kn(e);Ye(e,r,s,t),ht(e,i,n);const o=s?Dn(e,t):void 0;return t&&Sn(!1),o}function Dn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ae);const{setup:o}=n;if(o){(0,r.C4)();const n=e.setupContext=o.length>1?Un(e):null,c=An(e),u=s(o,e,0,[e.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!e.sp||q(e)||z(e),l){if(u.then(Cn,Cn),t)return u.then((n=>{Pn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else Pn(e,u,t)}else Ln(e,t)}function Pn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Ln(e,n)}function Ln(e,t,n){const s=e.type;if(!e.render){if(!t&&On&&!s.render){const t=s.template||De(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=On(t,c)}}e.render=s.render||i.tE,Rn&&Rn(e)}{const t=An(e);(0,r.C4)();try{Oe(e)}finally{(0,r.bl)(),t()}}}const Mn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Un(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Mn),slots:e.slots,emit:e.emit,expose:t}}function Fn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ie?Ie[n](e):void 0},has(e,t){return t in e||t in Ie}})):e.proxy}function Vn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function jn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const $n=(e,t)=>{const n=(0,r.EW)(e,t,Nn);return n};const Bn="3.5.12"},53751:function(e,t,n){n.d(t,{D$:function(){return te},Ef:function(){return se},Jo:function(){return Q},aG:function(){return y},u1:function(){return X}});var r=n(20641),i=n(90033);n(50953);
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(ce){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?l.createElementNS(c,e):"mathml"===t?l.createElementNS(u,e):n?l.createElement(e,{is:n}):l.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=h.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const m=Symbol("_vod"),v=Symbol("_vsh"),y={beforeMount(e,{value:t},{transition:n}){e[m]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):w(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),w(e,!0),r.enter(e)):r.leave(e,(()=>{w(e,!1)})):w(e,t))},beforeUnmount(e,{value:t}){w(e,t)}};function w(e,t){e.style.display=t?e[m]:"none",e[v]=!t}const _=Symbol("");const b=/(^|;)\s*display\s*:/;function T(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&I(r,t,"")}else for(const e in t)null==n[e]&&I(r,e,"");for(const e in n)"display"===e&&(o=!0),I(r,e,n[e])}else if(s){if(t!==n){const e=r[_];e&&(n+=";"+e),r.cssText=n,o=b.test(n)}}else t&&e.removeAttribute("style");m in e&&(e[m]=o?r.display:"",e[v]&&(r.display="none"))}const E=/\s*!important$/;function I(e,t,n){if((0,i.cy)(n))n.forEach((n=>I(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=C(e,t);E.test(n)?e.setProperty((0,i.Tg)(r),n.replace(E,""),"important"):e[r]=n}}const S=["Webkit","Moz","ms"],A={};function C(e,t){const n=A[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return A[t]=r;r=(0,i.ZH)(r);for(let i=0;i<S.length;i++){const n=S[i]+r;if(n in e)return A[t]=n}return t}const k="http://www.w3.org/1999/xlink";function O(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(k,t.slice(6,t.length)):e.setAttributeNS(k,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function R(e,t,n,r,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(ce){0}c&&e.removeAttribute(s||t)}function N(e,t,n,r){e.addEventListener(t,n,r)}function x(e,t,n,r){e.removeEventListener(t,n,r)}const D=Symbol("_vei");function P(e,t,n,r,i=null){const s=e[D]||(e[D]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=M(t);if(r){const o=s[t]=j(r,i);N(e,n,o,a)}else o&&(x(e,n,o,a),s[t]=void 0)}}const L=/(?:Once|Passive|Capture)$/;function M(e){let t;if(L.test(e)){let n;t={};while(n=e.match(L))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let U=0;const F=Promise.resolve(),V=()=>U||(F.then((()=>U=0)),U=Date.now());function j(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)($(e,n.value),t,5,[e])};return n.value=e,n.attached=V(),n}function $(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const B=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,z=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?g(e,r,a):"style"===t?T(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||P(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):K(e,t,r,a))?(R(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||O(e,t,r,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,i.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),O(e,t,r,a)):R(e,(0,i.PT)(t),r,o,t)};function K(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&B(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!B(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const q=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function H(e){e.target.composing=!0}function W(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const G=Symbol("_assign"),Q={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[G]=q(s);const o=r||s.props&&"number"===s.props.type;N(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[G](r)})),n&&N(e,"change",(()=>{e.value=e.value.trim()})),t||(N(e,"compositionstart",H),N(e,"compositionend",W),N(e,"change",W))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(e[G]=q(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),u=null==t?"":t;if(c!==u){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(s&&e.value.trim()===u)return}e.value=u}}};const X={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.vM)(t);N(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(Y(e)):Y(e)));e[G](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[G]=q(s)},mounted(e,{value:t}){J(e,t)},beforeUpdate(e,t,n){e[G]=q(n)},updated(e,{value:t}){e._assigning||J(e,t)}};function J(e,t){const n=e.multiple,r=(0,i.cy)(t);if(!n||r||(0,i.vM)(t)){for(let s=0,o=e.options.length;s<o;s++){const o=e.options[s],a=Y(o);if(n)if(r){const e=typeof a;o.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):(0,i.u3)(t,a)>-1}else o.selected=t.has(a);else if((0,i.BX)(Y(o),t))return void(e.selectedIndex!==s&&(e.selectedIndex=s))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Y(e){return"_value"in e?e._value:e.value}const Z=["ctrl","shift","alt","meta"],ee={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Z.some((n=>e[`${n}Key`]&&!t.includes(n)))},te=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=ee[t[e]];if(r&&r(n,t))return}return e(n,...r)})},ne=(0,i.X$)({patchProp:z},d);let re;function ie(){return re||(re=(0,r.K9)(ne))}const se=(...e)=>{const t=ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ae(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,oe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function oe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ae(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},90033:function(e,t,n){
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:function(){return f},$H:function(){return U},BH:function(){return q},BX:function(){return ne},Bm:function(){return b},C4:function(){return J},CE:function(){return g},CP:function(){return u},DY:function(){return F},Gv:function(){return T},J$:function(){return Z},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return x},Qd:function(){return C},Ro:function(){return $},SU:function(){return O},TF:function(){return h},Tg:function(){return P},Tn:function(){return w},Tr:function(){return H},We:function(){return z},X$:function(){return l},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return A},bB:function(){return j},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return re},vM:function(){return m},v_:function(){return se},yI:function(){return k},yL:function(){return E},yQ:function(){return V}});const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,_=e=>"string"===typeof e,b=e=>"symbol"===typeof e,T=e=>null!==e&&"object"===typeof e,E=e=>(T(e)||w(e))&&w(e.then)&&w(e.catch),I=Object.prototype.toString,S=e=>I.call(e),A=e=>S(e).slice(8,-1),C=e=>"[object Object]"===S(e),k=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},N=/-(\w)/g,x=R((e=>e.replace(N,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,P=R((e=>e.replace(D,"-$1").toLowerCase())),L=R((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=R((e=>{const t=e?`on${L(e)}`:"";return t})),U=(e,t)=>!Object.is(e,t),F=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},V=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=_(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const z=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const K="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",q=r(K);function H(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_(r)?X(r):H(r);if(i)for(const e in i)t[e]=i[e]}return t}if(_(e)||T(e))return e}const W=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Q,"").split(W).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function J(e){let t="";if(_(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=J(e[n]);r&&(t+=r+" ")}else if(T(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Y);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=T(e),r=T(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),se=e=>_(e)?e:null==e?"":p(e)||T(e)&&(e.toString===I||!w(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:b(t)?ae(t):!T(t)||p(t)||C(t)?t:String(t),ae=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},97073:function(e,t,n){n.d(t,{f0:function(){return C}});var r=n(90033),i=n(20641);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){if("undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");if(s.async=!0,s.src=e,s.defer=t.defer,t.preconnectOrigin){var o=document.createElement("link");o.href=t.preconnectOrigin,o.rel="preconnect",i.appendChild(o)}i.appendChild(s),s.onload=n,s.onerror=r}}))},u=function e(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];if(!i.length)return t;var a=i.shift();if((0,r.Qd)(t)&&(0,r.Qd)(a)){for(var c in a)(0,r.Qd)(a[c])?(t[c]||Object.assign(t,s({},c,{})),e(t[c],a[c])):Object.assign(t,s({},c,a[c]));return e.apply(void 0,[t].concat(i))}},l=function(){return"undefined"!==typeof window&&"undefined"!==typeof document},h=function(e){l()},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h('Missing "appName" property inside the plugin options.',null==e.app_name),h('Missing "name" property in the route.',null==e.screen_name),e};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split("/"),r=t.split("/");return""===n[0]&&"/"===t[t.length-1]&&n.shift(),r.join("/")+n.join("/")}var p,g=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},m={},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=g();m=u(t,e)},y=function(){return m},w=function(){var e,t=y(),n=t.globalObjectName;l()&&"undefined"!==typeof window[n]&&(e=window)[n].apply(e,arguments)},_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=y(),i=r.config,s=r.includes;w.apply(void 0,["config",i.id].concat(t)),Array.isArray(s)&&s.forEach((function(e){w.apply(void 0,["config",e.id].concat(t))}))},b=function(e,t){l()&&(window["ga-disable-".concat(e)]=t)},T=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=y(),n=t.config,r=t.includes;b(n.id,e),Array.isArray(r)&&r.forEach((function(t){return b(t.id,e)}))},E=function(){T(!0)},I=function(){T(!1)},S=function(e){p=e},A=function(){return p},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=y(),r=n.includes,i=n.defaultGroupName;null==t.send_to&&Array.isArray(r)&&r.length&&(t.send_to=r.map((function(e){return e.id})).concat(i)),w("event",e,t)},k=function(e){if(l()){var t;if("string"===typeof e)t={page_path:e};else if(e.path||e.fullPath){var n=y(),r=n.pageTrackerUseFullPath,i=n.pageTrackerPrependBase,s=A(),o=s&&s.options.base,c=r?e.fullPath:e.path;t=a(a({},e.name&&{page_title:e.name}),{},{page_path:i?f(c,o):c})}else t=e;null==t.page_location&&(t.page_location=window.location.href),null==t.send_page_view&&(t.send_page_view=!0),C("page_view",t)}},O=function(e){var t,n=y(),r=n.appName;e&&(t="string"===typeof e?{screen_name:e}:e,t.app_name=t.app_name||r,C("screen_view",t))},R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];C.apply(void 0,["exception"].concat(t))},N=function(e){_("linker",e)},x=function(e){C("timing_complete",e)},D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];w.apply(void 0,["set"].concat(t))},P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];C.apply(void 0,["refund"].concat(t))},L=function(e){C("purchase",e)},M=function(e){_({custom_map:e})},U=Object.freeze({__proto__:null,query:w,config:_,optOut:E,optIn:I,pageview:k,screenview:O,exception:R,linker:N,time:x,set:D,refund:P,purchase:L,customMap:M,event:C}),F=function(e){e.config.globalProperties.$gtag=U},V=function(){if(l()){var e=y(),t=e.enabled,n=e.globalObjectName,r=e.globalDataLayerName;return null==window[n]&&(window[r]=window[r]||[],window[n]=function(){window[r].push(arguments)}),window[n]("js",new Date),t||E(),window[n]}},j=function(e){return a({send_page_view:!1},e)},$=function(){var e=y(),t=e.config,n=e.includes;w("config",t.id,j(t.params)),Array.isArray(n)&&n.forEach((function(e){w("config",e.id,j(e.params))}))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=y(),i=n.appName,s=n.pageTrackerTemplate,o=n.pageTrackerScreenviewEnabled,a=n.pageTrackerSkipSamePath;if(!a||e.path!==t.path){var c=e;(0,r.Tn)(s)?c=s(e,t):o&&(c=d({app_name:i,screen_name:e.name})),o?O(c):k(c)}},z=function(e){var t=y(),n=t.pageTrackerExcludedRoutes;return n.includes(e.path)||n.includes(e.name)},K=function(){var e=y(),t=e.onBeforeTrack,n=e.onAfterTrack,s=A();s.isReady().then((function(){(0,i.dY)().then((function(){var e=s.currentRoute;$(),z(e.value)||B(e.value)})),s.afterEach((function(e,s){(0,i.dY)().then((function(){z(e)||((0,r.Tn)(t)&&t(e,s),B(e,s),(0,r.Tn)(n)&&n(e,s))}))}))}))},q=function(){var e=y(),t=e.onReady,n=e.onError,r=e.globalObjectName,i=e.globalDataLayerName,s=e.config,o=e.customResourceURL,a=e.customPreconnectOrigin,u=e.deferScriptLoad,l=e.pageTrackerEnabled,h=e.disableScriptLoad,d=Boolean(l&&A());if(V(),d?K():$(),!h)return c("".concat(o,"?id=").concat(s.id,"&l=").concat(i),{preconnectOrigin:a,defer:u}).then((function(){t&&t(window[r])}))["catch"]((function(e){return n&&n(e),e}))},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;F(e),v(t),S(n),y().bootstrap&&q()};t.Ay=H},17318:function(e,t,n){n.d(t,{A:function(){return j}});var r=n(20641),i=n(50953);
/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
function s(e,t){return t={exports:{}},e(t,t.exports),t.exports}var o=s((function(e){const t=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols;function i(e){return"function"===typeof e||"[object Object]"===t.call(e)||Array.isArray(e)}e.exports=(e,...t)=>{if(!i(e))throw new TypeError("expected the first argument to be an object");if(0===t.length||"function"!==typeof Symbol||"function"!==typeof r)return e;for(let i of t){let t=r(i);for(let r of t)n.call(i,r)&&(e[r]=i[r])}return e}})),a=Object.freeze({__proto__:null,default:o,__moduleExports:o}),c=a&&o||a,u=s((function(e){const t=Object.prototype.toString,n=e=>"__proto__"!==e&&"constructor"!==e&&"prototype"!==e,r=e.exports=(e,...t)=>{let o=0;for(s(e)&&(e=t[o++]),e||(e={});o<t.length;o++)if(i(t[o])){for(const s of Object.keys(t[o]))n(s)&&(i(e[s])&&i(t[o][s])?r(e[s],t[o][s]):e[s]=t[o][s]);c(e,t[o])}return e};function i(e){return"function"===typeof e||"[object Object]"===t.call(e)}function s(e){return"object"===typeof e?null===e:"function"!==typeof e}}));const l="undefined"!==typeof window&&null!==window,h=d();function d(){return!!(l&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}const f={event:"event",observer:"observer"};function p(e,t){if(!e.length)return;const n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}function g(e,t){if("IMG"!==e.tagName||!e.getAttribute("data-srcset"))return"";let n=e.getAttribute("data-srcset").trim().split(",");const r=[],i=e.parentNode,s=i.offsetWidth*t;let o,a,c;n.forEach((e=>{e=e.trim(),o=e.lastIndexOf(" "),-1===o?(a=e,c=99999):(a=e.substr(0,o),c=parseInt(e.substr(o+1,e.length-o-2),10)),r.push([c,a])})),r.sort(((e,t)=>{if(e[0]<t[0])return 1;if(e[0]>t[0])return-1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0}));let u,l="";for(let h=0;h<r.length;h++){u=r[h],l=u[1];const e=r[h+1];if(e&&e[0]<s){l=u[1];break}if(!e){l=u[1];break}}return l}const m=(e=1)=>l&&window.devicePixelRatio||e;function v(){if(!l)return!1;let e=!0;function t(e,t){const n={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},r=new Image;r.onload=function(){const e=r.width>0&&r.height>0;t(e)},r.onerror=function(){t(!1)},r.src="data:image/webp;base64,"+n[e]}return t("lossy",(t=>{e=t})),t("lossless",(t=>{e=t})),t("alpha",(t=>{e=t})),t("animation",(t=>{e=t})),e}function y(e,t){let n=null,r=0;return function(){if(n)return;const i=Date.now()-r,s=this,o=arguments,a=function(){r=Date.now(),n=!1,e.apply(s,o)};i>=t?a():n=setTimeout(a,t)}}function w(){if(!l)return!1;let e=!1;try{const t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",C,t)}catch(t){}return e}const _=w(),b={on(e,t,n,r=!1){_?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off(e,t,n,r=!1){e.removeEventListener(t,n,r)}},T=(e,t,n)=>{let r=new Image;if(!e||!e.src){const e=new Error("image src is required");return n(e)}e.cors&&(r.crossOrigin=e.cors),r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r=null},r.onerror=function(e){n(e)}},E=(e,t)=>"undefined"!==typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t],I=e=>E(e,"overflow")+E(e,"overflowY")+E(e,"overflowX"),S=e=>{if(!l)return;if(!(e instanceof Element))return window;let t=e;while(t){if(t===document.body||t===document.documentElement)break;if(!t.parentNode)break;if(/(scroll|auto)/.test(I(t)))return t;t=t.parentNode}return window};function A(e){return null!==e&&"object"===typeof e}function C(){}class k{constructor(e){this.max=e||100,this._caches=[]}has(e){return this._caches.indexOf(e)>-1}add(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class O{constructor(e,t,n,r,i,s,o,a,c,u){this.el=e,this.src=t,this.error=n,this.loading=r,this.bindType=i,this.attempt=0,this.cors=a,this.naturalHeight=0,this.naturalWidth=0,this.options=o,this.rect={},this.$parent=s,this.elRenderer=c,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(e){this.performanceData[e]=Date.now()}update(e){const t=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),t!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const e in this.options.filter)this.options.filter[e](this,this.options)}renderLoading(e){this.state.loading=!0,T({src:this.loading,cors:this.cors},(()=>{this.render("loading",!1),this.state.loading=!1,e()}),(()=>{e(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)}))}load(e=C){return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),void e()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e()):void this.renderLoading((()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),T({src:this.src,cors:this.cors},(t=>{this.naturalHeight=t.naturalHeight,this.naturalWidth=t.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),e()}),(e=>{!this.options.silent&&console.error(e),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)}))}))}render(e,t){this.elRenderer(this,e,t)}performance(){let e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const R="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",N=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],x={rootMargin:"0px",threshold:0};class D{constructor({preLoad:e,error:t,throttleWait:n,preLoadTop:r,dispatchEvent:i,loading:s,attempt:o,silent:a=!0,scale:c,listenEvents:u,filter:l,adapter:h,observer:d,observerOptions:p}){this.version='"3.0.0"',this.lazyContainerMananger=null,this.mode=f.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:a,dispatchEvent:!!i,throttleWait:n||200,preLoad:e||1.3,preLoadTop:r||0,error:t||R,loading:s||R,attempt:o||3,scale:c||m(c),listenEvents:u||N,supportWebp:v(),filter:l||{},adapter:h||{},observer:!!d,observerOptions:p||x},this._initEvent(),this._imageCache=new k(200),this.lazyLoadHandler=y(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?f.observer:f.event)}performance(){const e=[];return this.ListenerQueue.map((t=>e.push(t.performance()))),e}addLazyBox(e){this.ListenerQueue.push(e),l&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}add(e,t,n){if(this.ListenerQueue.some((t=>t.el===e)))return this.update(e,t),(0,r.dY)(this.lazyLoadHandler);let{src:i,loading:s,error:o,cors:a}=this._valueFormatter(t.value);(0,r.dY)((()=>{i=g(e,this.options.scale)||i,this._observer&&this._observer.observe(e);const n=Object.keys(t.modifiers)[0];let c;n&&(c=t.instance.$refs[n],c=c?c.el||c:document.getElementById(n)),c||(c=S(e));const u=new O(e,i,o,s,t.arg,c,this.options,a,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(u),l&&(this._addListenerTarget(window),this._addListenerTarget(c)),(0,r.dY)(this.lazyLoadHandler)}))}update(e,t,n){let{src:i,loading:s,error:o}=this._valueFormatter(t.value);i=g(e,this.options.scale)||i;const a=this.ListenerQueue.find((t=>t.el===e));a?a.update({src:i,loading:s,error:o}):"loaded"===e.getAttribute("lazy")&&e.dataset.src===i||this.add(e,t,n),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),(0,r.dY)(this.lazyLoadHandler)}remove(e){if(!e)return;this._observer&&this._observer.unobserve(e);const t=this.ListenerQueue.find((t=>t.el===e));t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),p(this.ListenerQueue,t),t.$destroy&&t.$destroy())}removeComponent(e){e&&(p(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}setMode(e){h||e!==f.observer||(e=f.event),this.mode=e,e===f.event?(this._observer&&(this.ListenerQueue.forEach((e=>{this._observer.unobserve(e.el)})),this._observer=null),this.TargetQueue.forEach((e=>{this._initListen(e.el,!0)}))):(this.TargetQueue.forEach((e=>{this._initListen(e.el,!1)})),this._initIntersectionObserver())}_addListenerTarget(e){if(!e)return;let t=this.TargetQueue.find((t=>t.el===e));return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===f.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}_removeListenerTarget(e){this.TargetQueue.forEach(((t,n)=>{t.el===e&&(t.childrenCount--,t.childrenCount||(this._initListen(t.el,!1),this.TargetQueue.splice(n,1),t=null))}))}_initListen(e,t){this.options.listenEvents.forEach((n=>b[t?"on":"off"](e,n,this.lazyLoadHandler)))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(e,t)=>{this.Event.listeners[e]||(this.Event.listeners[e]=[]),this.Event.listeners[e].push(t)},this.$once=(e,t)=>{const n=this;function r(){n.$off(e,r),t.apply(n,arguments)}this.$on(e,r)},this.$off=(e,t)=>{if(t)p(this.Event.listeners[e],t);else{if(!this.Event.listeners[e])return;this.Event.listeners[e].length=0}},this.$emit=(e,t,n)=>{this.Event.listeners[e]&&this.Event.listeners[e].forEach((e=>e(t,n)))}}_lazyLoadHandler(){const e=[];this.ListenerQueue.forEach(((t,n)=>{t.el&&t.el.parentNode&&!t.state.loaded||e.push(t);const r=t.checkInView();r&&(t.state.loaded||t.load())})),e.forEach((e=>{p(this.ListenerQueue,e),e.$destroy&&e.$destroy()}))}_initIntersectionObserver(){h&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((e=>{this._observer.observe(e.el)})))}_observerHandler(e){e.forEach((e=>{e.isIntersecting&&this.ListenerQueue.forEach((t=>{if(t.el===e.target){if(t.state.loaded)return this._observer.unobserve(t.el);t.load()}}))}))}_elRenderer(e,t,n){if(!e.el)return;const{el:r,bindType:i}=e;let s;switch(t){case"loading":s=e.loading;break;case"error":s=e.error;break;default:s=e.src;break}if(i?r.style[i]='url("'+s+'")':r.getAttribute("src")!==s&&r.setAttribute("src",s),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){const n=new CustomEvent(t,{detail:e});r.dispatchEvent(n)}}_valueFormatter(e){return A(e)?(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),{src:e.src,loading:e.loading||this.options.loading,error:e.error||this.options.error,cors:this.options.cors}):{src:e,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const P=(e,t)=>{let n=(0,i.Kh)({});const r=()=>{n=e.value.getBoundingClientRect()},s=()=>(r(),l&&n.top<window.innerHeight*t&&n.bottom>0&&n.left<window.innerWidth*t&&n.right>0);return{rect:n,checkInView:s}};var L=e=>(0,r.pM)({props:{tag:{type:String,default:"div"}},emits:["show"],setup(t,{emit:n,slots:s}){const o=(0,i.KR)(),a=(0,i.Kh)({loaded:!1,error:!1,attempt:0}),c=(0,i.KR)(!1),{rect:u,checkInView:l}=P(o,e.options.preLoad),h=()=>{c.value=!0,a.loaded=!0,n("show",c.value)},d=(0,r.EW)((()=>({el:o.value,rect:u,checkInView:l,load:h,state:a})));return(0,r.sV)((()=>{e.addLazyBox(d.value),e.lazyLoadHandler()})),(0,r.hi)((()=>{e.removeComponent(d.value)})),()=>{var e;return(0,r.bF)(t.tag,{ref:o},[c.value&&(null===(e=s.default)||void 0===e?void 0:e.call(s))])}}});class M{constructor(e){this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}bind(e,t,n){const r=new F(e,t,n,this.lazy);this._queue.push(r)}update(e,t,n){const r=this._queue.find((t=>t.el===e));r&&r.update(e,t)}unbind(e,t,n){const r=this._queue.find((t=>t.el===e));r&&(r.clear(),p(this._queue,r))}}const U={selector:"img",error:"",loading:""};class F{constructor(e,t,n,r){this.el=e,this.vnode=n,this.binding=t,this.options={},this.lazy=r,this._queue=[],this.update(e,t)}update(e,t){this.el=e,this.options=u({},U,t.value);const n=this.getImgs();n.forEach((e=>{this.lazy.add(e,u({},this.binding,{value:{src:e.getAttribute("data-src")||e.dataset.src,error:e.getAttribute("data-error")||e.dataset.error||this.options.error,loading:e.getAttribute("data-loading")||e.dataset.loading||this.options.loading}}),this.vnode)}))}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){const e=this.getImgs();e.forEach((e=>this.lazy.remove(e))),this.vnode=null,this.binding=null,this.lazy=null}}var V=e=>(0,r.pM)({setup(t,{slots:n}){const s=(0,i.KR)(),o=(0,i.Kh)({src:"",error:"",loading:"",attempt:e.options.attempt}),a=(0,i.Kh)({loaded:!1,error:!1,attempt:0}),{rect:c,checkInView:u}=P(s,e.options.preLoad),l=(0,i.KR)(""),h=(t=C)=>{if(a.attempt>o.attempt-1&&a.error)return e.options.silent||console.log(`VueLazyload log: ${o.src} tried too more than ${o.attempt} times`),t();const n=o.src;T({src:n},(({src:e})=>{l.value=e,a.loaded=!0}),(()=>{a.attempt++,l.value=o.error,a.error=!0}))},d=(0,r.EW)((()=>({el:s.value,rect:c,checkInView:u,load:h,state:a})));(0,r.sV)((()=>{e.addLazyBox(d.value),e.lazyLoadHandler()})),(0,r.hi)((()=>{e.removeComponent(d.value)}));const f=()=>{const{src:n,loading:r,error:i}=e._valueFormatter(t.src);a.loaded=!1,o.src=n,o.error=i,o.loading=r,l.value=o.loading};return(0,r.wB)((()=>t.src),(()=>{f(),e.addLazyBox(d.value),e.lazyLoadHandler()}),{immediate:!0}),()=>{var e;return(0,r.bF)(t.tag||"img",{src:l.value,ref:s},[null===(e=n.default)||void 0===e?void 0:e.call(n)])}}}),j={install(e,t={}){const n=new D(t),r=new M(n),i=Number(e.version.split(".")[0]);if(i<3)return new Error("Vue version at least 3.0");e.config.globalProperties.$Lazyload=n,e.provide("Lazyload",n),t.lazyComponent&&e.component("lazy-component",L(n)),t.lazyImage&&e.component("lazy-image",V(n)),e.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),e.directive("lazy-container",{beforeMount:r.bind.bind(r),updated:r.update.bind(r),unmounted:r.unbind.bind(r)})}}},66262:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},97664:function(e,t,n){var r=n(50953),i=n(20641);function s(){const e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);const n=e.indexOf("Trident/");if(n>0){const t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}const r=e.indexOf("Edge/");return r>0?parseInt(e.substring(r+5,e.indexOf(".",r)),10):-1}let o;function a(){a.init||(a.init=!0,o=-1!==s())}var c={name:"ResizeObserver",props:{showTrigger:{type:Boolean,default:!1}},emits:["notify"],setup(e,{emit:t}){let n=0,s=0;const c=(0,r.KR)(null);let u=null;const l=()=>{n===c.value.offsetWidth&&s===c.value.offsetHeight||(n=c.value.offsetWidth,s=c.value.offsetHeight,t("notify",{width:n,height:s}))},h=()=>{u.contentDocument.defaultView.addEventListener("resize",l),l()},d=()=>{u&&u.onload&&(!o&&u.contentDocument&&u.contentDocument.defaultView.removeEventListener("resize",l),c.value.removeChild(u),u.onload=null,u=null)};return(0,i.sV)((()=>{a(),n=c.value.offsetWidth,s=c.value.offsetHeight;const t=document.createElement("object");u=t,t.setAttribute("aria-hidden","true"),t.setAttribute("tabindex","-1"),t.onload=h,t.type="text/html",o&&c.value.appendChild(t),t.data="about:blank",o||c.value.appendChild(t),e.showTrigger&&l()})),(0,i.xo)((()=>{d()})),{elRef:c}}};const u={ref:"elRef",class:"vue3-resize-observer",tabindex:"-1"};function l(e,t,n,r,s,o){return(0,i.uX)(),(0,i.Wv)("div",u,null,512)}c.render=l,c.__file="src/package/ResizeObserver/ResizeObserver.vue",c.install=function(e){e.component(c.name,c)};var h={itemsLimit:1e3};function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=m(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}function w(e){return w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function E(e){return I(e)||S(e)||A()}function I(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function S(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function A(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function C(e){var t;return t="function"===typeof e?{callback:e}:e,t}function k(e,t){var n,r,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=function(o){for(var a=arguments.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=arguments[u];if(i=c,!n||o!==r){var l=s.leading;"function"===typeof l&&(l=l(o,r)),n&&o===r||!l||e.apply(void 0,[o].concat(E(i))),r=o,clearTimeout(n),n=setTimeout((function(){e.apply(void 0,[o].concat(E(i))),n=0}),t)}};return o._clear=function(){clearTimeout(n),n=null},o}function O(e,t){if(e===t)return!0;if("object"===w(e)){for(var n in e)if(!O(e[n],t[n]))return!1;return!0}return!1}var R=function(){function e(t,n,r){_(this,e),this.el=t,this.observer=null,this.frozen=!1,this.createObserver(n,r)}return T(e,[{key:"createObserver",value:function(e){var t=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=C(e),this.callback=function(e,n){t.options.callback(e,n),e&&t.options.once&&(t.frozen=!0,t.destroyObserver())},this.callback&&this.options.throttle){var n=this.options.throttleOptions||{},r=n.leading;this.callback=k(this.callback,this.options.throttle,{leading:function(e){return"both"===r||"visible"===r&&e||"hidden"===r&&!e}})}this.oldResult=void 0,this.observer=new IntersectionObserver((function(e){var n=e[0];if(e.length>1){var r=e.find((function(e){return e.isIntersecting}));r&&(n=r)}if(t.callback){var i=n.isIntersecting&&n.intersectionRatio>=t.threshold;if(i===t.oldResult)return;t.oldResult=i,t.callback(i,n)}}),this.options.intersection),setTimeout((function(){t.observer&&t.observer.observe(t.el)}))}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}]),e}();function N(e,t,n){var r=t.value;if(r)if("undefined"===typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var i=new R(e,r,n);e._vue_visibilityState=i}}function x(e){var t=e._vue_visibilityState;t&&(t.destroyObserver(),delete e._vue_visibilityState)}function D(e,t,n){var r=t.value,i=t.oldValue;if(!O(r,i)){var s=e._vue_visibilityState;r?s?s.createObserver(r,n):N(e,{value:r},n):x(e)}}var P={mounted:N,componentUpdated:D,unmounted:x},L={items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:function(e){return["vertical","horizontal"].includes(e)}}},M=function(e){var t=/(auto|scroll)/;function n(e,t){return null===e.parentNode?t:n(e.parentNode,t.concat([e]))}function r(e,t){return getComputedStyle(e,null).getPropertyValue(t)}function i(e){return r(e,"overflow")+r(e,"overflow-y")+r(e,"overflow-x")}function s(e){return t.test(i(e))}function o(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var t=n(e.parentNode,[]),r=0;r<t.length;r+=1)if(s(t[r]))return t[r];return document.scrollingElement||document.documentElement}}return o(e)};function U(){return this.items.length&&"object"!==d(this.items[0])}var F=!1;if("undefined"!==typeof window){F=!1;try{var V=Object.defineProperty({},"passive",{get:function(){F=!0}});window.addEventListener("test",null,V)}catch(W){}}var j=0,$=(0,i.pM)({name:"RecycleScroller",components:{ResizeObserver:c},directives:{ObserveVisibility:P},props:g({},L,{itemSize:{type:Number,default:null},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},typeField:{type:String,default:"type"},buffer:{type:Number,default:200},pageMode:{type:Boolean,default:!1},prerender:{type:Number,default:0},emitUpdate:{type:Boolean,default:!1}}),emits:["visible","hidden","resize","update"],data:function(){return{pool:[],totalSize:0,ready:!1,hoverKey:null}},computed:{sizes:function(){if(null===this.itemSize){for(var e,t={"-1":{accumulator:0}},n=this.items,r=this.sizeField,i=this.minItemSize,s=1e4,o=0,a=0,c=n.length;a<c;a++)e=n[a][r]||i,e<s&&(s=e),o+=e,t[a]={accumulator:o,size:e};return this.$_computedMinItemSize=s,t}return[]},simpleArray:U},watch:{items:function(){this.updateVisibleItems(!0)},pageMode:function(){this.applyPageMode(),this.updateVisibleItems(!1)},sizes:{handler:function(){this.updateVisibleItems(!1)},deep:!0}},created:function(){this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1,this.$_lastUpdateScrollPosition=0,this.prerender&&(this.$_prerender=!0,this.updateVisibleItems(!1))},mounted:function(){var e=this;this.applyPageMode(),this.$nextTick((function(){e.$_prerender=!1,e.updateVisibleItems(!0),e.ready=!0}))},beforeUnmount:function(){this.removeListeners()},methods:{addView:function(e,t,n,r,i){var s={item:n,position:0};return s.nr={id:j++,index:t,used:!0,key:r,type:i},e.push(s),s},unuseView:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.$_unusedViews,r=e.nr.type,i=n.get(r);i||(i=[],n.set(r,i)),i.push(e),t||(e.nr.used=!1,e.position=-9999,this.$_views.delete(e.nr.key))},handleResize:function(){this.$emit("resize"),this.ready&&this.updateVisibleItems(!1)},handleScroll:function(e){var t=this;this.$_scrollDirty||(this.$_scrollDirty=!0,requestAnimationFrame((function(){t.$_scrollDirty=!1;var e=t.updateVisibleItems(!1,!0),n=e.continuous;n||(clearTimeout(t.$_refreshTimout),t.$_refreshTimout=setTimeout(t.handleScroll,100))})))},handleVisibilityChange:function(e,t){var n=this;this.ready&&(e||0!==t.boundingClientRect.width||0!==t.boundingClientRect.height?(this.$emit("visible"),requestAnimationFrame((function(){n.updateVisibleItems(!1)}))):this.$emit("hidden"))},updateVisibleItems:function(e){var t,n,r,i,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.itemSize,a=this.$_computedMinItemSize,c=this.typeField,u=this.simpleArray?null:this.keyField,l=this.items,d=l.length,f=this.sizes,p=this.$_views,g=this.$_unusedViews,m=this.pool;if(d)if(this.$_prerender)t=0,n=this.prerender,r=null;else{var v=this.getScroll();if(s){var y=v.start-this.$_lastUpdateScrollPosition;if(y<0&&(y=-y),null===o&&y<a||y<o)return{continuous:!0}}this.$_lastUpdateScrollPosition=v.start;var w=this.buffer;if(v.start-=w,v.end+=w,null===o){var _,b,T=0,E=d-1,I=~~(d/2);do{b=I,_=f[I].accumulator,_<v.start?T=I:I<d-1&&f[I+1].accumulator>v.start&&(E=I),I=~~((T+E)/2)}while(I!==b);for(I<0&&(I=0),t=I,r=f[d-1].accumulator,n=I;n<d&&f[n].accumulator<v.end;n++);-1===n?n=l.length-1:(n++,n>d&&(n=d))}else t=~~(v.start/o),n=Math.ceil(v.end/o),t<0&&(t=0),n>d&&(n=d),r=d*o}else t=n=r=0;n-t>h.itemsLimit&&this.itemsLimitError(),this.totalSize=r;var S=t<=this.$_endIndex&&n>=this.$_startIndex;if(this.$_continuous!==S){if(S){p.clear(),g.clear();for(var A=0,C=m.length;A<C;A++)i=m[A],this.unuseView(i)}this.$_continuous=S}else if(S)for(var k=0,O=m.length;k<O;k++)i=m[k],i.nr.used&&(e&&(i.nr.index=l.findIndex((function(e){return u?e[u]===i.item[u]:e===i.item}))),(-1===i.nr.index||i.nr.index<t||i.nr.index>=n)&&this.unuseView(i));for(var R,N,x,D,P=S?null:new Map,L=t;L<n;L++){R=l[L];var M=u?R[u]:R;if(null==M)throw new Error("Key is ".concat(M," on item (keyField is '").concat(u,"')"));i=p.get(M),o||f[L].size?(i?(i.nr.used=!0,i.item=R):(N=R[c],x=g.get(N),S?x&&x.length?(i=x.pop(),i.item=R,i.nr.used=!0,i.nr.index=L,i.nr.key=M,i.nr.type=N):i=this.addView(m,L,R,M,N):(D=P.get(N)||0,(!x||D>=x.length)&&(i=this.addView(m,L,R,M,N),this.unuseView(i,!0),x=g.get(N)),i=x[D],i.item=R,i.nr.used=!0,i.nr.index=L,i.nr.key=M,i.nr.type=N,P.set(N,D+1),D++),p.set(M,i)),i.position=null===o?f[L-1].accumulator:L*o):i&&this.unuseView(i)}return this.$_startIndex=t,this.$_endIndex=n,this.emitUpdate&&this.$emit("update",t,n),clearTimeout(this.$_sortTimer),this.$_sortTimer=setTimeout(this.sortViews,300),{continuous:S}},getListenerTarget:function(){var e=M(this.$el);return!window.document||e!==window.document.documentElement&&e!==window.document.body||(e=window),e},getScroll:function(){var e,t=this.$el,n=this.direction,r="vertical"===n;if(this.pageMode){var i=t.getBoundingClientRect(),s=r?i.height:i.width,o=-(r?i.top:i.left),a=r?window.innerHeight:window.innerWidth;o<0&&(a+=o,o=0),o+a>s&&(a=s-o),e={start:o,end:o+a}}else e=r?{start:t.scrollTop,end:t.scrollTop+t.clientHeight}:{start:t.scrollLeft,end:t.scrollLeft+t.clientWidth};return e},applyPageMode:function(){this.pageMode?this.addListeners():this.removeListeners()},addListeners:function(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,!!F&&{passive:!0}),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners:function(){this.listenerTarget&&(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem:function(e){var t;t=null===this.itemSize?e>0?this.sizes[e-1].accumulator:0:e*this.itemSize,this.scrollToPosition(t)},scrollToPosition:function(e){"vertical"===this.direction?this.$el.scrollTop=e:this.$el.scrollLeft=e},itemsLimitError:function(){var e=this;throw setTimeout((function(){console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",e.$el),console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")})),new Error("Rendered items limit reached")},sortViews:function(){this.pool.sort((function(e,t){return e.nr.index-t.nr.index}))}}}),B={key:0,class:"vue-recycle-scroller__slot"},z={key:1,class:"vue-recycle-scroller__slot"};function K(e,t,n,r,s,o){var a=(0,i.g2)("ResizeObserver"),c=(0,i.gN)("observe-visibility");return(0,i.bo)(((0,i.uX)(),(0,i.Wv)("div",{class:["vue-recycle-scroller",f({ready:e.ready,"page-mode":e.pageMode},"direction-".concat(e.direction),!0)],onScrollPassive:t[2]||(t[2]=function(){return e.handleScroll.apply(e,arguments)})},[e.$slots.before?((0,i.uX)(),(0,i.Wv)("div",B,[(0,i.RG)(e.$slots,"before")])):(0,i.Q3)("v-if",!0),(0,i.bF)("div",{ref:"wrapper",style:f({},"vertical"===e.direction?"minHeight":"minWidth",e.totalSize+"px"),class:"vue-recycle-scroller__item-wrapper"},[((0,i.uX)(!0),(0,i.Wv)(i.FK,null,(0,i.pI)(e.pool,(function(n){return(0,i.uX)(),(0,i.Wv)("div",{key:n.nr.id,style:e.ready?{transform:"translate".concat("vertical"===e.direction?"Y":"X","(").concat(n.position,"px)")}:null,class:["vue-recycle-scroller__item-view",{hover:e.hoverKey===n.nr.key}],onMouseenter:function(t){return e.hoverKey=n.nr.key},onMouseleave:t[1]||(t[1]=function(t){return e.hoverKey=null})},[(0,i.RG)(e.$slots,"default",{item:n.item,index:n.nr.index,active:n.nr.used})],46,["onMouseenter"])})),128))],4),e.$slots.after?((0,i.uX)(),(0,i.Wv)("div",z,[(0,i.RG)(e.$slots,"after")])):(0,i.Q3)("v-if",!0),(0,i.bF)(a,{onNotify:e.handleResize},null,8,["onNotify"])],34)),[[c,e.handleVisibilityChange]])}$.render=K,$.__file="src/components/RecycleScroller.vue";var q={name:"DynamicScroller",components:{RecycleScroller:$},provide:function(){var e=this,t=void 0;return"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver((function(e){var t,n=y(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.target){var i=new CustomEvent("resize",{detail:{contentRect:r.contentRect}});r.target.dispatchEvent(i)}}}catch(s){n.e(s)}finally{n.f()}}))),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:t,onUpdateScroll:function(t){return e.vScrollMap.push(t)}}},inheritAttrs:!1,props:g({},L,{minItemSize:{type:[Number,String],required:!0}}),emits:["vscroll:update","resize","visible"],data:function(){return{vscrollData:{active:!0,sizes:{},validSizes:{},keyField:this.keyField,simpleArray:!1},vScrollMap:[]}},computed:{simpleArray:U,itemsWithSize:function(){for(var e=[],t=this.items,n=this.keyField,r=this.simpleArray,i=this.vscrollData.sizes,s=0;s<t.length;s++){var o=t[s],a=r?s:o[n],c=i[a];"undefined"!==typeof c||this.$_undefinedMap[a]||(c=0),e.push({item:o,id:a,size:c})}return e},listeners:function(){var e={};for(var t in this.$attrs)t.startsWith("on")&&"onResize"!==t&&"onVisible"!==t&&(e[t]=this.$attrs);return e}},watch:{items:function(){this.forceUpdate(!1)},simpleArray:{handler:function(e){this.vscrollData.simpleArray=e},immediate:!0},direction:function(e){this.forceUpdate(!0)}},created:function(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={}},activated:function(){this.vscrollData.active=!0},deactivated:function(){this.vscrollData.active=!1},methods:{onScrollerResize:function(){var e=this.$refs.scroller;e&&this.forceUpdate(),this.$emit("resize")},onScrollerVisible:function(){this.vScrollUpdate(!1),this.$emit("visible")},vScrollUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={force:e};this.$emit("vscroll:update",t),this.vScrollMap.forEach((function(e){return e(t)}))},forceUpdate:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(e||this.simpleArray)&&(this.vscrollData.validSizes={}),this.vScrollUpdate(!0)},scrollToItem:function(e){var t=this.$refs.scroller;t&&t.scrollToItem(e)},getItemSize:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=this.simpleArray?null!=t?t:this.items.indexOf(e):e[this.keyField];return this.vscrollData.sizes[n]||0},scrollToBottom:function(){var e=this;if(!this.$_scrollingToBottom){this.$_scrollingToBottom=!0;var t=this.$el;this.$nextTick((function(){t.scrollTop=t.scrollHeight+5e3;var n=function n(){t.scrollTop=t.scrollHeight+5e3,requestAnimationFrame((function(){t.scrollTop=t.scrollHeight+5e3,0===e.$_undefinedSizes?e.$_scrollingToBottom=!1:requestAnimationFrame(n)}))};requestAnimationFrame(n)}))}}}};function H(e,t,n,r,s,o){var a=(0,i.g2)("RecycleScroller");return(0,i.uX)(),(0,i.Wv)(a,(0,i.v6)({ref:"scroller",items:o.itemsWithSize,"min-item-size":n.minItemSize,direction:e.direction,"key-field":"id"},e.$attrs,{onResize:o.onScrollerResize,onVisible:o.onScrollerVisible},(0,i.Tb)(o.listeners)),{default:(0,i.k6)((function(t){var n=t.item,r=t.index,s=t.active;return[(0,i.RG)(e.$slots,"default",{item:n.item,index:r,active:s,itemWithSize:n})]})),before:(0,i.k6)((function(){return[(0,i.RG)(e.$slots,"before")]})),after:(0,i.k6)((function(){return[(0,i.RG)(e.$slots,"after")]})),_:1},16,["items","min-item-size","direction","onResize","onVisible"])}q.render=H,q.__file="src/components/DynamicScroller.vue";Boolean,Boolean,Boolean},79306:function(e,t,n){var r=n(94901),i=n(16823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},28551:function(e,t,n){var r=n(20034),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},19617:function(e,t,n){var r=n(25397),i=n(13229),s=n(26198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},34527:function(e,t,n){var r=n(43724),i=n(34376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},22195:function(e,t,n){var r=n(79504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},77740:function(e,t,n){var r=n(39297),i=n(35031),s=n(77347),o=n(24913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},66699:function(e,t,n){var r=n(43724),i=n(24913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},36840:function(e,t,n){var r=n(94901),i=n(24913),s=n(50283),o=n(39433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},39433:function(e,t,n){var r=n(44576),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},43724:function(e,t,n){var r=n(79039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){var r=n(44576),i=n(20034),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},96837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},88727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},82839:function(e,t,n){var r=n(44576),i=r.navigator,s=i&&i.userAgent;e.exports=s?String(s):""},39519:function(e,t,n){var r,i,s=n(44576),o=n(82839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},46518:function(e,t,n){var r=n(44576),i=n(77347).f,s=n(66699),o=n(36840),a=n(39433),c=n(77740),u=n(92796);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},79039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},40616:function(e,t,n){var r=n(79039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},69565:function(e,t,n){var r=n(40616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},10350:function(e,t,n){var r=n(43724),i=n(39297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},79504:function(e,t,n){var r=n(40616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},97751:function(e,t,n){var r=n(44576),i=n(94901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},55966:function(e,t,n){var r=n(79306),i=n(64117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},44576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},39297:function(e,t,n){var r=n(79504),i=n(48981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},30421:function(e){e.exports={}},35917:function(e,t,n){var r=n(43724),i=n(79039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},47055:function(e,t,n){var r=n(79504),i=n(79039),s=n(22195),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},33706:function(e,t,n){var r=n(79504),i=n(94901),s=n(77629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},91181:function(e,t,n){var r,i,s,o=n(58622),a=n(44576),c=n(20034),u=n(66699),l=n(39297),h=n(77629),d=n(66119),f=n(30421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw new g(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw new g(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},34376:function(e,t,n){var r=n(22195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},94901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},92796:function(e,t,n){var r=n(79039),i=n(94901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},64117:function(e){e.exports=function(e){return null===e||void 0===e}},20034:function(e,t,n){var r=n(94901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},96395:function(e){e.exports=!1},10757:function(e,t,n){var r=n(97751),i=n(94901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},26198:function(e,t,n){var r=n(18014);e.exports=function(e){return r(e.length)}},50283:function(e,t,n){var r=n(79504),i=n(79039),s=n(94901),o=n(39297),a=n(43724),c=n(10350).CONFIGURABLE,u=n(33706),l=n(91181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(w,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},80741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},24913:function(e,t,n){var r=n(43724),i=n(35917),s=n(48686),o=n(28551),a=n(56969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},77347:function(e,t,n){var r=n(43724),i=n(69565),s=n(48773),o=n(6980),a=n(25397),c=n(56969),u=n(39297),l=n(35917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},38480:function(e,t,n){var r=n(61828),i=n(88727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},33717:function(e,t){t.f=Object.getOwnPropertySymbols},1625:function(e,t,n){var r=n(79504);e.exports=r({}.isPrototypeOf)},61828:function(e,t,n){var r=n(79504),i=n(39297),s=n(25397),o=n(19617).indexOf,a=n(30421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},48773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},84270:function(e,t,n){var r=n(69565),i=n(94901),s=n(20034),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},35031:function(e,t,n){var r=n(97751),i=n(79504),s=n(38480),o=n(33717),a=n(28551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},67750:function(e,t,n){var r=n(64117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},66119:function(e,t,n){var r=n(25745),i=n(33392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},77629:function(e,t,n){var r=n(96395),i=n(44576),s=n(39433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},25745:function(e,t,n){var r=n(77629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},4495:function(e,t,n){var r=n(39519),i=n(79039),s=n(44576),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},13229:function(e,t,n){var r=n(91291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},25397:function(e,t,n){var r=n(47055),i=n(67750);e.exports=function(e){return r(i(e))}},91291:function(e,t,n){var r=n(80741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},18014:function(e,t,n){var r=n(91291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},48981:function(e,t,n){var r=n(67750),i=Object;e.exports=function(e){return i(r(e))}},72777:function(e,t,n){var r=n(69565),i=n(20034),s=n(10757),o=n(55966),a=n(84270),c=n(78227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},56969:function(e,t,n){var r=n(72777),i=n(10757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},16823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},33392:function(e,t,n){var r=n(79504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},48686:function(e,t,n){var r=n(43724),i=n(79039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},58622:function(e,t,n){var r=n(44576),i=n(94901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},78227:function(e,t,n){var r=n(44576),i=n(25745),s=n(39297),o=n(33392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},44114:function(e,t,n){var r=n(46518),i=n(48981),s=n(26198),o=n(34527),a=n(96837),c=n(79039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},49928:function(e,t,n){n.d(t,{MF:function(){return we},j6:function(){return pe},xZ:function(){return ge},om:function(){return fe},Sx:function(){return be},Wp:function(){return _e},KO:function(){return Te}});var r=n(5125),i=n(63424),s=n(36743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(T(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),T(h.get(this))}:function(...t){return T(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),T(r)}}function b(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function T(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const E=e=>g.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=T(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(T(o.result),e.oldVersion,e.newVersion,T(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],C=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}w((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",x="0.10.13",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/data-connect",z="@firebase/database-compat",K="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",Z="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/vertexai-preview",ie="@firebase/firestore-compat",se="firebase",oe="10.14.1",ae="[DEFAULT]",ce={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-data-connect",[z]:"fire-rtdb-compat",[K]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[Z]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[ie]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[se]:"fire-js-all"},ue=new Map,le=new Map,he=new Map;function de(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e){const t=e.name;if(he.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;he.set(t,e);for(const n of ue.values())de(n,e);for(const n of le.values())de(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ge(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ve=new s.FA("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we=oe;function _e(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:ae,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ve.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw ve.create("no-options");const a=ue.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw ve.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of he.values())c.addComponent(r);const u=new ye(n,i,c);return ue.set(o,u),u}function be(e=ae){const t=ue.get(e);if(!t&&e===ae&&(0,s.T9)())return _e();if(!t)throw ve.create("no-app",{appName:e});return t}function Te(e,t,n){var i;let s=null!==(i=ce[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}fe(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee="firebase-heartbeat-database",Ie=1,Se="firebase-heartbeat-store";let Ae=null;function Ce(){return Ae||(Ae=I(Ee,Ie,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Se)}catch(n){console.warn(n)}}}}).catch((e=>{throw ve.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function ke(e){try{const t=await Ce(),n=t.transaction(Se),r=await n.objectStore(Se).get(Re(e));return await n.done,r}catch(t){if(t instanceof s.g)D.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Oe(e,t){try{const n=await Ce(),r=n.transaction(Se,"readwrite"),i=r.objectStore(Se);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const e=ve.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=1024,xe=2592e6;class De{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Pe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe})),this._storage.overwrite(this._heartbeatsCache)}catch(n){D.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pe(),{heartbeatsToSend:n,unsentEntries:r}=Le(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return D.warn(t),""}}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function Le(e,t=Ne){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ue(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){fe(new r.uA("platform-logger",(e=>new O(e)),"PRIVATE")),fe(new r.uA("heartbeat",(e=>new De(e)),"PRIVATE")),Te(N,x,e),Te(N,x,"esm2017"),Te("fire-js","")}Fe("")},5125:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});var r=n(36743);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},63424:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},70223:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(49928),i="firebase",s="10.14.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},97496:function(e,t,n){n.d(t,{HF:function(){return Tt},F0:function(){return Ht},xI:function(){return Kr},hg:function(){return Lt},oM:function(){return xt},df:function(){return Pn},CI:function(){return Mt}});var r=n(49928),i=n(36743),s=n(63424);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw w(e,...t)}function g(e,...t){return w(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function _(e,t,...n){if(!e)throw w(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function T(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){T(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,r,s={}){return L(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},s);return(0,i.c1)()||(u.referrerPolicy="no-referrer"),R.fetch()(U(e,e.config.apiHost,n,a),u)}))}async function L(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},N),t);try{const t=new V(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof i.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function M(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}function F(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return void 0!==e&&void 0!==e.enterprise}class B{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return P(e,"GET","/v2/recaptchaConfig",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=Q(r);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:H(G(s.auth_time)),issuedAtTime:H(G(s.iat)),expirationTime:H(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function Q(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function X(e){const t=Q(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,q(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ie(s.providerUserInfo):[],a=re(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ee(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ne(e){const t=(0,i.Ku)(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ie(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t){const n=await L(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=U(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oe(e,t){return P(e,"POST","/v2/accounts:revokeToken",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await se(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ae;return n&&(_("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await J(this,K(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:T,stsTokenManager:E}=t;_(y&&E,e,"internal-error");const I=ae.fromJSON(this.name,E);_("string"===typeof y,e,"internal-error"),ce(l,e.name),ce(h,e.name),_("boolean"===typeof w,e,"internal-error"),_("boolean"===typeof b,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(g,e.name),ce(m,e.name),ce(v,e.name);const S=new ue({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return T&&Array.isArray(T)&&(S.providerData=T.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];_(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?ie(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new ae;o.updateFromIdToken(n);const a=new ue({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ee(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new Map;function he(e){T(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(T(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class ge{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ge(he(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||he(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ue._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new ge(i,e,n)):new ge(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Te(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.ZQ)()){return/crios\//i.test(e)}function _e(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function be(e=(0,i.ZQ)()){return/android/i.test(e)}function Te(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Ie(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,i.ZQ)()){var t;return Ie(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ae(){return(0,i.lT)()&&10===document.documentMode}function Ce(e=(0,i.ZQ)()){return Ie(e)||be(e)||Ee(e)||Te(e)||/windows phone/i.test(e)||_e(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=me((0,i.ZQ)());break;case"Worker":n=`${me((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t={}){return P(e,"GET","/v2/passwordPolicy",D(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=6;class xe{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Ne,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new Oe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=he(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ge.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await q(this,{idToken:e}),n=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(he(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Re(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await oe(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&he(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await ge.create(this,[he(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Pe(e){return(0,i.Ku)(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ue(e){Me=e}function Fe(e){return Me.loadJS(e)}function Ve(){return Me.recaptchaEnterpriseScript}function je(){return Me.gapiScript}function $e(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Be="recaptcha-enterprise",ze="NO_RECAPTCHA";class Ke{constructor(e){this.type=Be,this.auth=Pe(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{z(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;$(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(ze)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&$(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Ve();0!==t.length&&(t+=n),Fe(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function qe(e,t,n,r=!1){const i=new Ke(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function He(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qe(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await qe(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ge(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(he);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=Pe(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Xe(t),{host:o,port:a}=Je(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Je(e){const t=Xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ye(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ye(t)}}}function Ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return P(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function it(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new st(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new st(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,t,"signInWithPassword",nt);case"emailLink":return rt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,n,"signUpPassword",tt);case"emailLink":return it(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="http://localhost";class ct extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ct(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ot(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:at,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function lt(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function ht(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const dt={["USER_NOT_FOUND"]:"user-not-found"};async function ft(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ht(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ft(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new pt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class vt{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=gt(null!==(r=c["mode"])&&void 0!==r?r:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=mt(e);try{return new vt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return st._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vt.parseLink(t);return _(n,"argument-error"),st._fromEmailAndCode(e,n.code,n.tenantId)}}yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends _t{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch(t){return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com",bt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends _t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ct._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tt.credential(t,n)}catch(r){return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com",Tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends _t{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com",Et.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends _t{constructor(){super("twitter.com")}static credential(e,t){return ct._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),s=At(n),o=new St({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=At(n);return new St({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function At(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ct(e,t,n,r)}}function kt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ct._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return St._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await J(e,kt(i,s,t,e),n);_(r.idToken,i,"internal-error");const o=Q(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(e.uid===a,i,"user-mismatch"),St._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",s=await kt(e,i,t),o=await St._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e,t){return(0,i.Ku)(e).setPersistence(t)}function Dt(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Pt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Lt(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function Mt(e){return(0,i.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ut(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Ft(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function Vt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function jt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const $t="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($t,"1"),this.storage.removeItem($t),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=1e3,Kt=10;class qt extends Bt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ae()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Kt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),zt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qt.type="LOCAL";const Ht=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Bt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wt.type="SESSION";const Gt=Wt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Xt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Qt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.receivers=[];class Yt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Jt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function en(e){Zt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return"undefined"!==typeof Zt()["WorkerGlobalScope"]&&"function"===typeof Zt()["importScripts"]}async function nn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function rn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function sn(){return tn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="firebaseLocalStorageDb",an=1,cn="firebaseLocalStorage",un="fbase_key";class ln{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function hn(e,t){return e.transaction([cn],t?"readwrite":"readonly").objectStore(cn)}function dn(){const e=indexedDB.deleteDatabase(on);return new ln(e).toPromise()}function fn(){const e=indexedDB.open(on,an);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(cn,{keyPath:un})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(cn)?t(n):(n.close(),await dn(),t(await fn()))}))}))}async function pn(e,t,n){const r=hn(e,!0).put({[un]:t,value:n});return new ln(r).toPromise()}async function gn(e,t){const n=hn(e,!1).get(t),r=await new ln(n).toPromise();return void 0===r?null:r.value}function mn(e,t){const n=hn(e,!0).delete(t);return new ln(n).toPromise()}const vn=800,yn=3;class wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await fn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>yn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xt._getInstance(sn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await nn(),!this.activeServiceWorker)return;this.sender=new Yt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&rn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fn();return await pn(e,$t,"1"),await mn(e,$t),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>pn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>gn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>mn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=hn(e,!1).getAll();return new ln(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),vn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wn.type="LOCAL";const _n=wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function Tn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}function En(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$e("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In="recaptcha";async function Sn(e,t,n){var r;const i=await n.verify();try{let s;if(_("string"===typeof i,e,"argument-error"),_(n.type===In,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await Ut(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await bn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ut(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{constructor(e){this.providerId=An.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,t){return Sn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return pt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return An.credentialFromTaggedObject(t)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e,t){return t?he(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.PROVIDER_ID="phone",An.PHONE_SIGN_IN_METHOD="phone";class kn extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function On(e){return Nt(e.auth,new kn(e),e.bypassAuthState)}function Rn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Rt(n,new kn(e),e.bypassAuthState)}async function Nn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ot(n,new kn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return On;case"linkViaPopup":case"linkViaRedirect":return Nn;case"reauthViaPopup":case"reauthViaRedirect":return Rn;default:p(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new k(2e3,1e4);async function Pn(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(g(e,"operation-not-supported-in-this-environment"));const i=Pe(e);y(e,t,wt);const s=Cn(i,n),o=new Ln(i,"signInViaPopup",t,s);return o.executeNotNull()}class Ln extends xn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const e=Jt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Dn.get())};e()}}Ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn="pendingRedirect",Un=new Map;class Fn extends xn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const t=await Vn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Vn(e,t){const n=Bn(t),r=$n(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function jn(e,t){Un.set(e._key(),t)}function $n(e){return he(e._redirectPersistence)}function Bn(e){return pe(Mn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Pe(e),s=Cn(i,t),o=new Fn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kn=6e5;class qn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Gn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hn(e))}saveEventToCache(e){this.cachedEventUids.add(Hn(e)),this.lastProcessedEventTime=Date.now()}}function Hn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Wn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Gn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jn=/^https?/;async function Yn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qn(e);for(const r of t)try{if(Zn(r))return}catch(n){}p(e,"unauthorized-domain")}function Zn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Jn.test(n))return!1;if(Xn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new k(3e4,6e4);function tr(){const e=Zt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function nr(e){return new Promise(((t,n)=>{var r,i,s;function o(){tr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tr(),n(g(e,"network-request-failed"))},timeout:er.get()})}if(null===(i=null===(r=Zt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Zt().gapi)||void 0===s?void 0:s.load)){const t=$e("iframefcb");return Zt()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},Fe(`${je()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw rr=null,e}))}let rr=null;function ir(e){return rr=rr||nr(e),rr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new k(5e3,15e3),or="__/auth/iframe",ar="emulator/auth/iframe",cr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lr(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,ar):`https://${e.config.authDomain}/${or}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=ur.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function hr(e){const t=await ir(e),n=Zt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:lr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=Zt().setTimeout((()=>{r(i)}),sr.get());function o(){Zt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fr=500,pr=600,gr="_blank",mr="http://localhost";class vr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function yr(e,t,n,r=fr,s=pr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},dr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=we(l)?gr:n),ve(l)&&(t=t||mr,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Se(l)&&"_self"!==c)return wr(t||"",c),new vr(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new vr(d)}function wr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="__/auth/handler",br="emulator/auth/handler",Tr=encodeURIComponent("fac");async function Er(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof wt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof _t){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${Tr}=${encodeURIComponent(l)}`:"";return`${Ir(e)}?${(0,i.Am)(u).slice(1)}${h}`}function Ir({config:e}){return e.emulator?O(e,br):`https://${e.authDomain}/${_r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="webStorageSupport";class Ar{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gt,this._completeRedirectFn=zn,this._overrideRedirectResult=jn}async _openPopup(e,t,n,r){var i;T(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Er(e,t,n,E(),r);return yr(e,s,Jt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Er(e,t,n,E(),r);return en(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await hr(e),n=new qn(e);return t.register("authEvent",(t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Sr,{type:Sr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Sr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Ie()}}const Cr=Ar;class kr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Or extends kr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Or(e)}_finalizeEnroll(e,t,n){return Ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Tn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rr{constructor(){}static assertion(e){return Or._fromCredential(e)}}Rr.FACTOR_ID="phone";class Nr{static assertionForEnrollment(e,t){return xr._fromSecret(e,t)}static assertionForSignIn(e,t){return xr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;_("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Vt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Dr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Nr.FACTOR_ID="totp";class xr extends kr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new xr(t,void 0,e)}static _fromEnrollmentId(e,t){return new xr(t,e)}async _finalizeEnroll(e,t,n){return _("undefined"!==typeof this.secret,e,"argument-error"),jt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){_(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return En(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Dr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Dr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Pr(e)||Pr(t))&&(r=!0),r&&(Pr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Pr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Pr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Lr="@firebase/auth",Mr="1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},u=new De(r,i,s,c);return Ge(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Pe(e.getProvider("auth").getImmediate());return(e=>new Ur(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Lr,Mr,Fr(e)),(0,r.KO)(Lr,Mr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=300,$r=(0,i.XA)("authIdTokenMaxAge")||jr;let Br=null;const zr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$r)return;const i=null===n||void 0===n?void 0:n.token;Br!==i&&(Br=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=We(e,{popupRedirectResolver:Cr,persistence:[_n,Ht,Gt]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=zr(e.toString());Pt(n,t,(()=>t(n.currentUser))),Dt(n,(e=>t(e)))}}const o=(0,i.Tj)("auth");return o&&Qe(n,`http://${o}`),n}function qr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ue({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",qr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Vr("Browser")},71884:function(e,t,n){n.d(t,{H9:function(){return Bo},x7:function(){return Ea},aU:function(){return qo},BN:function(){return Sa}});var r,i,s=n(49928),o=n(5125),a=n(63424),c=n(36743),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function a(e,t){var n=u;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function c(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.B,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)o(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=t},s.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var u={};function h(e){return-128<=e&&128>e?a(e,(function(e){return new c([0|e],0>e?-1:0)})):new c([0|e],0>e?-1:0)}function d(e){if(isNaN(e)||!isFinite(e))return p;if(0>e)return w(d(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new c(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return w(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(t,8)),r=p,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=d(Math.pow(t,s)),r=r.j(s).add(d(o))):(r=r.j(n),r=r.add(d(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function v(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function y(e){return-1==e.h}function w(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new c(n,~e.h).add(g)}function _(e,t){return e.add(w(t))}function b(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function T(e,t){this.g=e,this.h=t}function E(e,t){if(v(t))throw Error("division by zero");if(v(e))return new T(p,p);if(y(e))return t=E(w(e),t),new T(w(t.g),w(t.h));if(y(t))return t=E(e,w(t)),new T(w(t.g),t.h);if(30<e.g.length){if(y(e)||y(t))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=t;0>=r.l(e);)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!v(r);){var o=s.add(r);0>=o.l(e)&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return t=_(e,i.j(t)),new T(i,t)}for(i=p;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=d(n),o=s.j(t);y(o)||0<o.l(e);)n-=r,s=d(n),o=s.j(t);v(s)&&(s=g),i=i.add(s),e=_(e,o)}return new T(i,e)}function I(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new c(n,e.h)}function S(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new c(i,e.h)}e=c.prototype,e.m=function(){if(y(this))return-w(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(v(this))return"0";if(y(this))return"-"+w(this).toString(e);for(var t=d(Math.pow(e,6)),n=this,r="";;){var i=E(n,t).g;n=_(n,i.j(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,v(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=_(this,e),y(e)?-1:v(e)?0:1},e.abs=function(){return y(this)?w(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.i(i))+(65535&e.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new c(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(v(this)||v(e))return p;if(y(this))return y(e)?w(this).j(w(e)):w(w(this).j(e));if(y(e))return w(this.j(w(e)));if(0>this.l(m)&&0>e.l(m))return d(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),a=e.i(i)>>>16,u=65535&e.i(i);n[2*r+2*i]+=o*u,b(n,2*r+2*i),n[2*r+2*i+1]+=s*u,b(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,b(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,b(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new c(n,0)},e.A=function(e){return E(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new c(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new c(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new c(n,this.h^e.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,i=l.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,r=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,g,m,v,y,w="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},_={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(e,n){if(n)e:{var i=r;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}e=e[e.length-1],s=i[e],n=n(s),n!=s&&null!=n&&t(i,e,{configurable:!0,writable:!0,value:n})}}function s(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(e){return e||function(){return s(this,(function(e,t){return t}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var o=o||{},a=this||self;function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e,t,n){return e.call.apply(e.bind,arguments)}function T(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function E(e,t,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:T,E.apply(null,arguments)}function S(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function A(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(c(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}class O{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function R(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function x(e){return x[" "](e),e}x[" "]=function(){};var D=-1!=N().indexOf("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&-1==N().indexOf("Edge"))&&!(-1!=N().indexOf("Trident")||-1!=N().indexOf("MSIE"))&&-1==N().indexOf("Edge");function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function M(e){const t={};for(const n in e)t[n]=e[n];return t}const U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<U.length;t++)n=U[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function V(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function j(e){a.setTimeout((()=>{throw e}),0)}function $(){var e=W;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class B{constructor(){this.h=this.g=null}add(e,t){const n=z.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var z=new O((()=>new K),(e=>e.reset()));class K{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let q,H=!1,W=new B,G=()=>{const e=a.Promise.resolve(void 0);q=()=>{e.then(Q)}};var Q=()=>{for(var e;e=$();){try{e.h.call(e.g)}catch(n){j(n)}var t=z;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}H=!1};function X(){this.s=this.s,this.C=this.C}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},J.prototype.h=function(){this.defaultPrevented=!0};var Y=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(n){}return e}();function Z(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(D){e:{try{x(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.aa.h.call(this)}}A(Z,J);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.da=this.fa=!1}function ie(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new re(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=_e(n),e&&e[te]?e.K(t,n,u(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=ye(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Y||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ve;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=_e(n),e&&e[te]?e.L(t,n,u(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=u(r)?!!r.capture:!!r,n=_e(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[te])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):ie(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ve(e,t){if(e.da)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ge(e),e=n.call(r,t)}return e}function ye(e){return e=e[ce],e instanceof se?e:null}var we="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"===typeof e?e:(e[we]||(e[we]=function(t){return e.handleEvent(t)}),e[we])}function be(){X.call(this),this.i=new se(this),this.M=this,this.F=null}function Te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var i=t;t=new J(r,e),F(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ee(o,r,!0,t)&&i}if(o=t.g=e,i=Ee(o,r,!0,t)&&i,i=Ee(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ee(o,r,!1,t)&&i}function Ee(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function Ie(e,t,n){if("function"===typeof e)n&&(e=E(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=E(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Se(e){e.g=Ie((()=>{e.g=null,e.i&&(e.i=!1,Se(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}A(be,X),be.prototype[te]=!0,be.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},be.prototype.N=function(){if(be.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.F=null},be.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},be.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Ae extends X{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Se(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ce(e){X.call(this),this.h=e,this.g={}}A(Ce,X);var ke=[];function Oe(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}Ce.prototype.N=function(){Ce.aa.N.call(this),Oe(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=a.JSON.stringify,Ne=a.JSON.parse,xe=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function De(){}function Pe(e){return e.h||(e.h=e.i())}function Le(){}De.prototype.h=null;var Me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ue(){J.call(this,"d")}function Fe(){J.call(this,"c")}A(Ue,J),A(Fe,J);var Ve={},je=null;function $e(){return je=je||new be}function Be(e){J.call(this,Ve.La,e)}function ze(e){const t=$e();Te(t,new Be(t))}function Ke(e,t){J.call(this,Ve.STAT_EVENT,e),this.stat=t}function qe(e){const t=$e();Te(t,new Ke(t,e))}function He(e,t){J.call(this,Ve.Ma,e),this.size=t}function We(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}function Ge(){this.g=!0}function Qe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Je(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ze(e,n)+(r?" "+r:"")}))}function Ye(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ze(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Re(n)}catch(a){return t}}Ve.La="serverreachability",A(Be,J),Ve.STAT_EVENT="statevent",A(Ke,J),Ve.Ma="timingevent",A(He,J),Ge.prototype.xa=function(){this.g=!1},Ge.prototype.info=function(){};var et,tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function rt(){}function it(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new Ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new st}function st(){this.i=null,this.g="",this.h=!1}A(rt,De),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var ot={},at={};function ct(e,t,n){e.L=1,e.v=Ut(xt(t)),e.m=n,e.P=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),dt(e),e.A=xt(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Xt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new st,e.g=zn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new Ae(E(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ke[0]=i.toString()),i=ke);for(var s=0;s<i.length;s++){var o=le(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?M(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ze(),Qe(e.i,e.u,e.A,e.l,e.R,e.m)}function lt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function ht(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?at:(n=Number(t.substring(n,r)),isNaN(n)?ot:(r+=1,r+n>t.length?at:(t=t.slice(r,r+n),e.C=r+n,t)))}function dt(e){e.S=Date.now()+e.I,ft(e,e.I)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=We(E(e.ba,e),t)}function pt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function gt(e){0==e.j.G||e.J||Fn(e.j,e)}function mt(e){pt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,Oe(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function vt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Tt(n.h,e)))if(!e.K&&Tt(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Un(n),An(n)}Pn(n),qe(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=We(E(n.Za,n),6e3));if(1>=bt(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else jn(n,11)}else if((e.K||n.g==e)&&Un(n),!R(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Et(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,Mt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=e;if(r.qa=Bn(r,r.J?r.ia:null,r.W),o.K){It(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(pt(a),dt(a)),r.g=o}else Dn(r);0<n.i.length&&kn(n)}else"stop"!=u[0]&&"close"!=u[0]||jn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?jn(n,7):Sn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}ze(4)}catch(u){}}it.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==_n(e)?t.j():this.Y(e)},it.prototype.Y=function(e){try{if(e==this.g)e:{const d=_n(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=d||7==t||ze(8==t||0>=f?3:2),pt(this);var n=this.g.Z();this.X=n;t:if(lt(this)){var r=bn(this.g);e="";var i=r.length,s=4==_n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mt(this),gt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Xe(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(c)){var l=c;break t}}l=null}if(!(n=l)){this.o=!1,this.s=3,qe(12),mt(this),gt(this);break e}Je(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=ht(this,o),e==at){4==d&&(this.s=4,qe(14),n=!1),Je(this.i,this.l,null,"[Incomplete Response]");break}if(e==ot){this.s=4,qe(15),Je(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Je(this.i,this.l,e,null),vt(this,e)}if(lt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,qe(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Ln(h),h.M=!0,qe(11))}}else Je(this.i,this.l,o,"[Invalid Chunked Response]"),mt(this),gt(this)}else Je(this.i,this.l,o,null),vt(this,o);4==d&&mt(this),this.o&&!this.J&&(4==d?Fn(this.j,this):(this.o=!1,dt(this)))}else Tn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),mt(this),gt(this)}}}catch(b){}},it.prototype.cancel=function(){this.J=!0,mt(this)},it.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Ye(this.i,this.A),2!=this.L&&(ze(),qe(17)),mt(this),this.s=2,gt(this)):ft(this,this.S-e)};var yt=class{constructor(e,t){this.g=e,this.map=t}};function wt(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _t(e){return!!e.h||!!e.g&&e.g.size>=e.j}function bt(e){return e.h?1:e.g?e.g.size:0}function Tt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Et(e,t){e.g?e.g.add(t):e.h=t}function It(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function St(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function At(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ct(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function kt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ct(e),r=At(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}wt.prototype.cancel=function(){if(this.i=St(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Ot=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Nt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Nt){this.h=e.h,Dt(this,e.j),this.o=e.o,this.g=e.g,Pt(this,e.s),this.l=e.l;var t=e.i,n=new Ht;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Lt(this,n),this.m=e.m}else e&&(t=String(e).match(Ot))?(this.h=!1,Dt(this,t[1]||"",!0),this.o=Ft(t[2]||""),this.g=Ft(t[3]||"",!0),Pt(this,t[4]),this.l=Ft(t[5]||"",!0),Lt(this,t[6]||"",!0),this.m=Ft(t[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}function xt(e){return new Nt(e)}function Dt(e,t,n){e.j=n?Ft(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Lt(e,t,n){t instanceof Ht?(e.i=t,Yt(e.i,e.h)):(n||(t=Vt(t,Kt)),e.i=new Ht(t,e.h))}function Mt(e,t,n){e.i.set(t,n)}function Ut(e){return Mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ft(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Vt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Nt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Vt(t,$t,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Vt(t,$t,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Vt(n,"/"==n.charAt(0)?zt:Bt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Vt(n,qt)),e.join("")};var $t=/[#\/\?@]/g,Bt=/[#\?:]/g,zt=/[#\?]/g,Kt=/[#\?@]/g,qt=/#/g;function Ht(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Wt(e){e.g||(e.g=new Map,e.h=0,e.i&&Rt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gt(e,t){Wt(e),t=Jt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qt(e,t){return Wt(e),t=Jt(e,t),e.g.has(t)}function Xt(e,t,n){Gt(e,t),0<n.length&&(e.i=null,e.g.set(Jt(e,t),C(n)),e.h+=n.length)}function Jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Yt(e,t){t&&!e.j&&(Wt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gt(this,t),Xt(this,n,e))}),e)),e.j=t}function Zt(e,t){const n=new Ge;if(a.Image){const r=new Image;r.onload=S(tn,n,"TestLoadImage: loaded",!0,t,r),r.onerror=S(tn,n,"TestLoadImage: error",!1,t,r),r.onabort=S(tn,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=S(tn,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function en(e,t){const n=new Ge,r=new AbortController,i=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:r.signal}).then((e=>{clearTimeout(i),e.ok?tn(n,"TestPingServer: ok",!0,t):tn(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(i),tn(n,"TestPingServer: error",!1,t)}))}function tn(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function nn(){this.g=new xe}function rn(e,t,n){const r=n||"";try{kt(e,(function(e,n){let i=e;u(e)&&(i=Re(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function sn(e){this.l=e.Ub||null,this.j=e.eb||!1}function on(e,t){be.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function cn(e){e.readyState=4,e.l=null,e.j=null,e.v=null,un(e)}function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function ln(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function hn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ln(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Mt(e,t,n))}function dn(e){be.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Ht.prototype,e.add=function(e,t){Wt(this),this.i=null,e=Jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){Wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){Wt(this);let t=[];if("string"===typeof e)Qt(this,e)&&(t=t.concat(this.g.get(Jt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Wt(this),this.i=null,e=Jt(this,e),Qt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},A(sn,De),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(e){return function(){return e}}({}),A(on,be),e=on.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,un(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?cn(this):un(this),3==this.readyState&&an(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,cn(this))},e.Qa=function(e){this.g&&(this.response=e,cn(this))},e.ga=function(){this.g&&cn(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),A(dn,be);var fn=/^https?$/i,pn=["POST","PUT"];function gn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,mn(e),yn(e)}function mn(e){e.A||(e.A=!0,Te(e,"complete"),Te(e,"error"))}function vn(e){if(e.h&&"undefined"!=typeof o&&(!e.v[1]||4!=_n(e)||2!=e.Z()))if(e.u&&4==_n(e))Ie(e.Ea,0,e);else if(Te(e,"readystatechange"),4==_n(e)){e.h=!1;try{const o=e.Z();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.D).match(Ot)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!fn.test(i?i.toLowerCase():"")}n=r}if(n)Te(e,"complete"),Te(e,"success");else{e.m=6;try{var s=2<_n(e)?e.g.statusText:""}catch(c){s=""}e.l=s+" ["+e.Z()+"]",mn(e)}}finally{yn(e)}}}function yn(e,t){if(e.g){wn(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||Te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function wn(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function _n(e){return e.g?e.g.readyState:0}function bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(I){return null}}function Tn(e){const t={};e=(e.g&&2<=_n(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(R(e[r]))continue;var n=V(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}L(t,(function(e){return e.join(", ")}))}function En(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function In(e){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,e),this.cb=En("retryDelaySeedMs",1e4,e),this.Wa=En("forwardChannelMaxRetries",2,e),this.wa=En("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new wt(e&&e.concurrentRequestLimit),this.Da=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Sn(e){if(Cn(e),3==e.G){var t=e.U++,n=xt(e.I);if(Mt(n,"SID",e.K),Mt(n,"RID",t),Mt(n,"TYPE","terminate"),Nn(e,n),t=new it(e,e.j,t),t.L=2,t.v=Ut(xt(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=zn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),dt(t)}$n(e)}function An(e){e.g&&(Ln(e),e.g.cancel(),e.g=null)}function Cn(e){An(e),e.u&&(a.clearTimeout(e.u),e.u=null),Un(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function kn(e){if(!_t(e.h)&&!e.s){e.s=!0;var t=e.Ga;q||G(),H||(q(),H=!0),W.add(t,e),e.B=0}}function On(e,t){return!(bt(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=We(E(e.Ga,e,t),Vn(e,e.B)),e.B++,!0))}function Rn(e,t){var n;n=t?t.l:e.U++;const r=xt(e.I);Mt(r,"SID",e.K),Mt(r,"RID",n),Mt(r,"AID",e.T),Nn(e,r),e.m&&e.o&&hn(r,e.m,e.o),n=new it(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=xn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Et(e.h,n),ct(n,r,t)}function Nn(e,t){e.H&&P(e.H,(function(e,n){Mt(t,n,e)})),e.l&&kt({},(function(e,n){Mt(t,n,e)}))}function xn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?E(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{rn(a,e,"req"+n+"_")}catch(b){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Dn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;q||G(),H||(q(),H=!0),W.add(t,e),e.v=0}}function Pn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=We(E(e.Fa,e),Vn(e,e.v)),e.v++,!0)}function Ln(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function Mn(e){e.g=new it(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=xt(e.qa);Mt(t,"RID","rpc"),Mt(t,"SID",e.K),Mt(t,"AID",e.T),Mt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Mt(t,"TO",e.ja),Mt(t,"TYPE","xmlhttp"),Nn(e,t),e.m&&e.o&&hn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Ut(xt(t)),n.m=null,n.P=!0,ut(n,e)}function Un(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function Fn(e,t){var n=null;if(e.g==t){Un(e),Ln(e),e.g=null;var r=2}else{if(!Tt(e.h,t))return;n=t.D,It(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;r=$e(),Te(r,new He(r,n)),kn(e)}else Dn(e);else if(i=t.s,3==i||0==i&&0<t.X||!(1==r&&On(e,t)||2==r&&Pn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:jn(e,5);break;case 4:jn(e,10);break;case 3:jn(e,6);break;default:jn(e,2)}}function Vn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function jn(e,t){if(e.j.info("Error code "+t),2==t){var n=E(e.fb,e),r=e.Xa;const t=!r;r=new Nt(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Dt(r,"https"),Ut(r),t?Zt(r.toString(),n):en(r.toString(),n)}else qe(2);e.G=0,e.l&&e.l.sa(t),$n(e),Cn(e)}function $n(e){if(e.G=0,e.ka=[],e.l){const t=St(e.h);0==t.length&&0==e.i.length||(k(e.ka,t),k(e.ka,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ra()}}function Bn(e,t,n){var r=n instanceof Nt?xt(n):new Nt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Pt(r,r.s);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Nt(null);r&&Dt(s,r),t&&(s.g=t),i&&Pt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&Mt(r,n,t),Mt(r,"VER",e.la),Nn(e,r),r}function zn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new dn(new sn({eb:n})):new dn(e.pa),t.Ha(e.J),t}function Kn(){}function qn(){}function Hn(e,t){be.call(this),this.g=new In(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!R(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qn(this)}function Wn(e){Ue.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Gn(){Fe.call(this),this.status=1}function Qn(e){this.g=e}e=dn.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():et.g(),this.v=this.o?Pe(this.o):Pe(et),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(s){return void gn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,t,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wn(this),this.u=!0,this.g.send(e),this.u=!1}catch(s){gn(this,s)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,Te(this,"complete"),Te(this,"abort"),yn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),dn.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?vn(this):this.bb())},e.bb=function(){vn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ne(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=In.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){qe(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Bn(this,null,this.W),kn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new it(this,this.j,e);let s=this.o;if(this.S&&(s?(s=M(s),F(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=xn(this,i,t),n=xt(this.I),Mt(n,"RID",e),Mt(n,"CVER",22),this.D&&Mt(n,"X-HTTP-Session-Id",this.D),Nn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ln(s)))+"&"+t:this.m&&hn(n,this.m,s)),Et(this.h,i),this.Ua&&Mt(n,"TYPE","init"),this.P?(Mt(n,"$req",t),Mt(n,"SID","null"),i.T=!0,ct(i,n,null)):ct(i,n,t),this.G=2}}else 3==this.G&&(e?Rn(this,e):0==this.i.length||_t(this.h)||Rn(this))},e.Fa=function(){if(this.u=null,Mn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=We(E(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),An(this),Mn(this))},e.Za=function(){null!=this.C&&(this.C=null,An(this),Pn(this),qe(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Kn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},qn.prototype.g=function(e,t){return new Hn(e,t)},A(Hn,be),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){Sn(this.g)},Hn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Re(e),e=n);t.i.push(new yt(t.Ya++,e)),3==t.G&&kn(t)},Hn.prototype.N=function(){this.g.l=null,delete this.j,Sn(this.g),delete this.g,Hn.aa.N.call(this)},A(Wn,Ue),A(Gn,Fe),A(Qn,Kn),Qn.prototype.ua=function(){Te(this.g,"a")},Qn.prototype.ta=function(e){Te(this.g,new Wn(e))},Qn.prototype.sa=function(e){Te(this.g,new Gn)},Qn.prototype.ra=function(){Te(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,y=_.createWebChannelTransport=function(){return new qn},v=_.getStatEventTarget=function(){return $e()},m=_.Event=Ve,g=_.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,p=_.ErrorCode=tt,nt.COMPLETE="complete",f=_.EventType=nt,Le.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",be.prototype.listen=be.prototype.K,d=_.WebChannel=Le,_.FetchXmlHttpFactory=sn,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,h=_.XhrIo=dn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const b="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new a.Vy("@firebase/firestore");function S(){return I.logLevel}function A(e,...t){if(I.logLevel<=a.$b.DEBUG){const n=t.map(O);I.debug(`Firestore (${E}): ${e}`,...n)}}function C(e,...t){if(I.logLevel<=a.$b.ERROR){const n=t.map(O);I.error(`Firestore (${E}): ${e}`,...n)}}function k(e,...t){if(I.logLevel<=a.$b.WARN){const n=t.map(O);I.warn(`Firestore (${E}): ${e}`,...n)}}function O(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e="Unexpected state"){const t=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: `+e;throw C(t),new Error(t)}function N(e,t){e||R()}function x(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends c.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class U{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(T.UNAUTHENTICATED)))}shutdown(){}}class F{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class V{constructor(e){this.t=e,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){N(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new L;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new L,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new L)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(N("string"==typeof t.accessToken),new M(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return N(null===e||"string"==typeof e),new T(e)}}class j{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ${constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new j(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class B{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){N(void 0===this.o);const n=e=>{null!=e.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(N("string"==typeof e.token),this.R=e.token,new B(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=K(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function H(e,t){return e<t?-1:e>t?1:0}function W(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return G.fromMillis(Date.now())}static fromDate(e){return G.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new G(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new G(0,0))}static max(){return new Q(new G(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){void 0===t?t=0:t>e.length&&R(),void 0===n?n=e.length-t:n>e.length-t&&R(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===X.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof X?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends X{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new P(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Y=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends X{construct(e,t,n){return new Z(e,t,n)}static isValidIdentifier(e){return Y.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new P(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new P(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new P(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(J.fromString(e))}static fromName(e){return new ee(J.fromString(e).popFirst(5))}static empty(){return new ee(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new J(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}te.UNKNOWN_ID=-1;function ne(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(1e9===r?new G(n+1,0):new G(n,r));return new ie(i,ee.empty(),t)}function re(e){return new ie(e.readTime,e.key,-1)}class ie{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ie(Q.min(),ee.empty(),-1)}static max(){return new ie(Q.max(),ee.empty(),-1)}}function se(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ee.comparator(e.documentKey,t.documentKey),0!==n?n:H(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const oe="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ae{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==oe)throw e;A("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ue(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ue?t:ue.resolve(t)}catch(e){return ue.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ue.reject(t)}static resolve(e){return new ue(((t,n)=>{t(e)}))}static reject(e){return new ue(((t,n)=>{n(e)}))}static waitFor(e){return new ue(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=ue.resolve(!1);for(const n of e)t=t.next((e=>e?ue.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ue(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new ue(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function he(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function fe(e){return null==e}function pe(e){return 0===e&&1/e==-1/0}function ge(e){return"number"==typeof e&&Number.isInteger(e)&&!pe(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de.oe=-1;const me=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ve=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ye=ve,we=[...ye,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function be(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Te(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ie(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ie(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ie(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ie(this.root,e,this.comparator,!0)}}class Ie{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Se.RED,this.left=null!=r?r:Se.EMPTY,this.right=null!=i?i:Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Se(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Se.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw R();if(this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1,Se.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ce(this.data.getIterator())}getIteratorFrom(e){return new Ce(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ae))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Ce{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new ke([])}unionWith(e){let t=new Ae(Z.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return W(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Oe("Invalid base64 string: "+e):e}}(e);return new Re(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Ne=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xe(e){if(N(!!e),"string"==typeof e){let t=0;const n=Ne.exec(e);if(N(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:De(e.seconds),nanos:De(e.nanos)}}function De(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Pe(e){return"string"==typeof e?Re.fromBase64String(e):Re.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Me(e){const t=e.mapValue.fields.__previous_value__;return Le(t)?Me(t):t}function Ue(e){const t=xe(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Ve{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ve("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ve&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $e(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Le(e)?4:nt(e)?9007199254740991:et(e)?10:11:R()}function Be(e,t){if(e===t)return!0;const n=$e(e);if(n!==$e(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ue(e).isEqual(Ue(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xe(e.timestampValue),r=xe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Pe(e.bytesValue).isEqual(Pe(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return De(e.geoPointValue.latitude)===De(t.geoPointValue.latitude)&&De(e.geoPointValue.longitude)===De(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return De(e.integerValue)===De(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=De(e.doubleValue),r=De(t.doubleValue);return n===r?pe(n)===pe(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return W(e.arrayValue.values||[],t.arrayValue.values||[],Be);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(_e(n)!==_e(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Be(n[i],r[i])))return!1;return!0}(e,t);default:return R()}}function ze(e,t){return void 0!==(e.values||[]).find((e=>Be(e,t)))}function Ke(e,t){if(e===t)return 0;const n=$e(e),r=$e(t);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=De(e.integerValue||e.doubleValue),r=De(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return qe(e.timestampValue,t.timestampValue);case 4:return qe(Ue(e),Ue(t));case 5:return H(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Pe(e),r=Pe(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=H(n[i],r[i]);if(0!==e)return e}return H(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=H(De(e.latitude),De(t.latitude));return 0!==n?n:H(De(e.longitude),De(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return He(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=H((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:He(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===je.mapValue&&t===je.mapValue)return 0;if(e===je.mapValue)return 1;if(t===je.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=H(r[o],s[o]);if(0!==e)return e;const t=Ke(n[r[o]],i[s[o]]);if(0!==t)return t}return H(r.length,s.length)}(e.mapValue,t.mapValue);default:throw R()}}function qe(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return H(e,t);const n=xe(e),r=xe(t),i=H(n.seconds,r.seconds);return 0!==i?i:H(n.nanos,r.nanos)}function He(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Ke(n[i],r[i]);if(e)return e}return H(n.length,r.length)}function We(e){return Ge(e)}function Ge(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xe(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Pe(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ee.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ge(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ge(e.fields[i])}`;return n+"}"}(e.mapValue):R()}function Qe(e){return!!e&&"integerValue"in e}function Xe(e){return!!e&&"arrayValue"in e}function Je(e){return!!e&&"nullValue"in e}function Ye(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ze(e){return!!e&&"mapValue"in e}function et(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return be(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=tt(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function nt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ze(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tt(t)}setAll(e){let t=Z.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=tt(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Be(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){be(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new rt(tt(this.value))}}function it(e){const t=[];return be(e.fields,((e,n)=>{const r=new Z([e]);if(Ze(n)){const e=it(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ke(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class st{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new st(e,0,Q.min(),Q.min(),Q.min(),rt.empty(),0)}static newFoundDocument(e,t,n,r){return new st(e,1,t,Q.min(),n,r,0)}static newNoDocument(e,t){return new st(e,2,t,Q.min(),Q.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,Q.min(),Q.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.position=e,this.inclusive=t}}function at(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ee.comparator(ee.fromName(o.referenceValue),n.key):Ke(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ct(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Be(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t="asc"){this.field=e,this.dir=t}}function lt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{}class dt extends ht{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new _t(e,t,n):"array-contains"===t?new It(e,n):"in"===t?new St(e,n):"not-in"===t?new At(e,n):"array-contains-any"===t?new Ct(e,n):new dt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new bt(e,n):new Tt(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ke(t,this.value)):null!==t&&$e(this.value)===$e(t)&&this.matchesComparison(Ke(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends ht{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ft(e,t)}matches(e){return pt(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pt(e){return"and"===e.op}function gt(e){return mt(e)&&pt(e)}function mt(e){for(const t of e.filters)if(t instanceof ft)return!1;return!0}function vt(e){if(e instanceof dt)return e.field.canonicalString()+e.op.toString()+We(e.value);if(gt(e))return e.filters.map((e=>vt(e))).join(",");{const t=e.filters.map((e=>vt(e))).join(",");return`${e.op}(${t})`}}function yt(e,t){return e instanceof dt?function(e,t){return t instanceof dt&&e.op===t.op&&e.field.isEqual(t.field)&&Be(e.value,t.value)}(e,t):e instanceof ft?function(e,t){return t instanceof ft&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&yt(n,t.filters[r])),!0)}(e,t):void R()}function wt(e){return e instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${We(e.value)}`}(e):e instanceof ft?function(e){return e.op.toString()+" {"+e.getFilters().map(wt).join(" ,")+"}"}(e):"Filter"}class _t extends dt{constructor(e,t,n){super(e,t,n),this.key=ee.fromName(n.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class bt extends dt{constructor(e,t){super(e,"in",t),this.keys=Et("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Tt extends dt{constructor(e,t){super(e,"not-in",t),this.keys=Et("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Et(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ee.fromName(e.referenceValue)))}class It extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xe(t)&&ze(t.arrayValue,this.value)}}class St extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ze(this.value.arrayValue,t)}}class At extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ze(this.value.arrayValue,t)}}class Ct extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xe(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ze(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function Ot(e,t=null,n=[],r=[],i=null,s=null,o=null){return new kt(e,t,n,r,i,s,o)}function Rt(e){const t=x(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>vt(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),fe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>We(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>We(e))).join(",")),t.ue=e}return t.ue}function Nt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!lt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yt(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ct(e.startAt,t.startAt)&&ct(e.endAt,t.endAt)}function xt(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pt(e,t,n,r,i,s,o,a){return new Dt(e,t,n,r,i,s,o,a)}function Lt(e){return new Dt(e)}function Mt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ut(e){return null!==e.collectionGroup}function Ft(e){const t=x(e);if(null===t.ce){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Ae(Z.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new ut(r,n))})),e.has(Z.keyField().canonicalString())||t.ce.push(new ut(Z.keyField(),n))}return t.ce}function Vt(e){const t=x(e);return t.le||(t.le=jt(t,Ft(e))),t.le}function jt(e,t){if("F"===e.limitType)return Ot(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new ut(e.field,t)}));const n=e.endAt?new ot(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ot(e.startAt.position,e.startAt.inclusive):null;return Ot(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function $t(e,t,n){return new Dt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bt(e,t){return Nt(Vt(e),Vt(t))&&e.limitType===t.limitType}function zt(e){return`${Rt(Vt(e))}|lt:${e.limitType}`}function Kt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>wt(e))).join(", ")}]`),fe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>We(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>We(e))).join(",")),`Target(${t})`}(Vt(e))}; limitType=${e.limitType})`}function qt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ee.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ft(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=at(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ft(e),t))&&!(e.endAt&&!function(e,t,n){const r=at(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ft(e),t))}(e,t)}function Ht(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wt(e){return(t,n)=>{let r=!1;for(const i of Ft(e)){const e=Gt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Gt(e,t,n){const r=e.field.isKeyField()?ee.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ke(r,i):R()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){be(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Te(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new Ee(ee.comparator);function Jt(){return Xt}const Yt=new Ee(ee.comparator);function Zt(...e){let t=Yt;for(const n of e)t=t.insert(n.key,n);return t}function en(e){let t=Yt;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function tn(){return rn()}function nn(){return rn()}function rn(){return new Qt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const sn=new Ee(ee.comparator),on=new Ae(ee.comparator);function an(...e){let t=on;for(const n of e)t=t.add(n);return t}const cn=new Ae(H);function un(){return cn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pe(t)?"-0":t}}function hn(e){return{integerValue:""+e}}function dn(e,t){return ge(t)?hn(t):ln(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this._=void 0}}function pn(e,t,n){return e instanceof vn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Le(t)&&(t=Me(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof yn?wn(e,t):e instanceof _n?bn(e,t):function(e,t){const n=mn(e,t),r=En(n)+En(e.Pe);return Qe(n)&&Qe(e.Pe)?hn(r):ln(e.serializer,r)}(e,t)}function gn(e,t,n){return e instanceof yn?wn(e,t):e instanceof _n?bn(e,t):n}function mn(e,t){return e instanceof Tn?function(e){return Qe(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class vn extends fn{}class yn extends fn{constructor(e){super(),this.elements=e}}function wn(e,t){const n=In(t);for(const r of e.elements)n.some((e=>Be(e,r)))||n.push(r);return{arrayValue:{values:n}}}class _n extends fn{constructor(e){super(),this.elements=e}}function bn(e,t){let n=In(t);for(const r of e.elements)n=n.filter((e=>!Be(e,r)));return{arrayValue:{values:n}}}class Tn extends fn{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function En(e){return De(e.integerValue||e.doubleValue)}function In(e){return Xe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yn&&t instanceof yn||e instanceof _n&&t instanceof _n?W(e.elements,t.elements,Be):e instanceof Tn&&t instanceof Tn?Be(e.Pe,t.Pe):e instanceof vn&&t instanceof vn}(e.transform,t.transform)}class An{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class On{}function Rn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new jn(e.key,Cn.none()):new Ln(e.key,e.data,Cn.none());{const n=e.data,r=rt.empty();let i=new Ae(Z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Mn(e.key,r,new ke(i.toArray()),Cn.none())}}function Nn(e,t,n){e instanceof Ln?function(e,t,n){const r=e.value.clone(),i=Fn(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Mn?function(e,t,n){if(!kn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Fn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Un(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xn(e,t,n,r){return e instanceof Ln?function(e,t,n,r){if(!kn(e.precondition,t))return n;const i=e.value.clone(),s=Vn(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Mn?function(e,t,n,r){if(!kn(e.precondition,t))return n;const i=Vn(e.fieldTransforms,r,t),s=t.data;return s.setAll(Un(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return kn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Dn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=mn(r.transform,e||null);null!=i&&(null===n&&(n=rt.empty()),n.set(r.field,i))}return n||null}function Pn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&W(e,t,((e,t)=>Sn(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ln extends On{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mn extends On{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Un(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Fn(e,t,n){const r=new Map;N(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,gn(o,a,n[i]))}return r}function Vn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,pn(e,s,t))}return r}class jn extends On{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $n extends On{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Nn(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=xn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=xn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=nn();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Rn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Q.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),an())}isEqual(e){return this.batchId===e.batchId&&W(this.mutations,e.mutations,((e,t)=>Pn(e,t)))&&W(this.baseMutations,e.baseMutations,((e,t)=>Pn(e,t)))}}class zn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){N(e.mutations.length===n.length);let r=function(){return sn}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new zn(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn,Wn;function Gn(e){switch(e){default:return R();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Qn(e){if(void 0===e)return C("GRPC error has no .code"),D.UNKNOWN;switch(e){case Hn.OK:return D.OK;case Hn.CANCELLED:return D.CANCELLED;case Hn.UNKNOWN:return D.UNKNOWN;case Hn.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Hn.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Hn.INTERNAL:return D.INTERNAL;case Hn.UNAVAILABLE:return D.UNAVAILABLE;case Hn.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Hn.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Hn.NOT_FOUND:return D.NOT_FOUND;case Hn.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Hn.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Hn.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Hn.ABORTED:return D.ABORTED;case Hn.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Hn.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Hn.DATA_LOSS:return D.DATA_LOSS;default:return R()}}(Wn=Hn||(Hn={}))[Wn.OK=0]="OK",Wn[Wn.CANCELLED=1]="CANCELLED",Wn[Wn.UNKNOWN=2]="UNKNOWN",Wn[Wn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wn[Wn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wn[Wn.NOT_FOUND=5]="NOT_FOUND",Wn[Wn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wn[Wn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wn[Wn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wn[Wn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wn[Wn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wn[Wn.ABORTED=10]="ABORTED",Wn[Wn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wn[Wn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wn[Wn.INTERNAL=13]="INTERNAL",Wn[Wn.UNAVAILABLE=14]="UNAVAILABLE",Wn[Wn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new r([4294967295,4294967295],0);function Zn(e){const t=Jn().encode(e),n=new i;return n.update(t),new Uint8Array(n.digest())}function er(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class tr{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nr(`Invalid padding: ${t}`);if(n<0)throw new nr(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new nr(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=r.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(r.fromNumber(n)));return 1===i.compare(Yn)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Zn(e),[n,r]=er(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new tr(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=Zn(e),[n,r]=er(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ir.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new rr(Q.min(),r,new Ee(H),Jt(),an())}}class ir{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ir(n,t,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class or{constructor(e,t){this.targetId=e,this.me=t}}class ar{constructor(e,t,n=Re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class cr{constructor(){this.fe=0,this.ge=hr(),this.pe=Re.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=an(),t=an(),n=an();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:R()}})),new ir(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=hr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,N(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ur{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jt(),this.qe=lr(),this.Qe=new Ee(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:R()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(xt(i))if(0===n){const e=new ee(i.path);this.Ue(t,e,st.newNoDocument(e,Q.min()))}else N(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==Xn||Xn.et(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.me,this.Le.tt(),n,i))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Pe(n).toUint8Array()}catch(e){if(e instanceof Oe)return k("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new tr(s,r,i)}catch(e){return k(e instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&xt(i.target)){const t=new ee(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,st.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=an();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new rr(e,t,this.Qe,this.ke,n);return this.ke=Jt(),this.qe=lr(),this.Qe=new Ee(H),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new cr,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||A("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cr),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lr(){return new Ee(ee.comparator)}function hr(){return new Ee(ee.comparator)}const dr=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),fr=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),pr=(()=>{const e={and:"AND",or:"OR"};return e})();class gr{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mr(e,t){return e.useProto3Json||fe(t)?t:{value:t}}function vr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wr(e,t){return vr(e,t.toTimestamp())}function _r(e){return N(!!e),Q.fromTimestamp(function(e){const t=xe(e);return new G(t.seconds,t.nanos)}(e))}function br(e,t){return Tr(e,t).canonicalString()}function Tr(e,t){const n=function(e){return new J(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Er(e){const t=J.fromString(e);return N(Hr(t)),t}function Ir(e,t){return br(e.databaseId,t.path)}function Sr(e,t){const n=Er(t);if(n.get(1)!==e.databaseId.projectId)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ee(Or(n))}function Ar(e,t){return br(e.databaseId,t)}function Cr(e){const t=Er(e);return 4===t.length?J.emptyPath():Or(t)}function kr(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Or(e){return N(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Rr(e,t,n){return{name:Ir(e,t),fields:n.value.mapValue.fields}}function Nr(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:R()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(N(void 0===t||"string"==typeof t),Re.fromBase64String(t||"")):(N(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Re.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?D.UNKNOWN:Qn(e.code);return new P(t,e.message||"")}(o);n=new ar(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sr(e,r.document.name),s=_r(r.document.updateTime),o=r.document.createTime?_r(r.document.createTime):Q.min(),a=new rt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new sr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Sr(e,r.document),s=r.readTime?_r(r.readTime):Q.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Sr(e,r.document),s=r.removedTargetIds||[];n=new sr([],s,i,null)}else{if(!("filter"in t))return R();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new qn(r,i),o=e.targetId;n=new or(o,s)}}return n}function xr(e,t){let n;if(t instanceof Ln)n={update:Rr(e,t.key,t.value)};else if(t instanceof jn)n={delete:Ir(e,t.key)};else if(t instanceof Mn)n={update:Rr(e,t.key,t.data),updateMask:qr(t.fieldMask)};else{if(!(t instanceof $n))return R();n={verify:Ir(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof vn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _n)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Tn)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw R()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:wr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:R()}(e,t.precondition)),n}function Dr(e,t){return e&&e.length>0?(N(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?_r(e.updateTime):_r(t);return n.isEqual(Q.min())&&(n=_r(t)),new An(n,e.transformResults||[])}(e,t)))):[]}function Pr(e,t){return{documents:[Ar(e,t.path)]}}function Lr(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ar(e,i);const s=function(e){if(0!==e.length)return Kr(ft.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Br(e.field),direction:Vr(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=mr(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i}}function Mr(e){let t=Cr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){N(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Fr(e);return t instanceof ft&&gt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new ut(zr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,fe(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ot(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ot(n,t)}(n.endAt)),Pt(t,i,o,s,a,"F",c,u)}function Ur(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Fr(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zr(e.unaryFilter.field);return dt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=zr(e.unaryFilter.field);return dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zr(e.unaryFilter.field);return dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zr(e.unaryFilter.field);return dt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(e):void 0!==e.fieldFilter?function(e){return dt.create(zr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ft.create(e.compositeFilter.filters.map((e=>Fr(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return R()}}(e.compositeFilter.op))}(e):R()}function Vr(e){return dr[e]}function jr(e){return fr[e]}function $r(e){return pr[e]}function Br(e){return{fieldPath:e.canonicalString()}}function zr(e){return Z.fromServerFormat(e.fieldPath)}function Kr(e){return e instanceof dt?function(e){if("=="===e.op){if(Ye(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NAN"}};if(Je(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ye(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NAN"}};if(Je(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(e.field),op:jr(e.op),value:e.value}}}(e):e instanceof ft?function(e){const t=e.getFilters().map((e=>Kr(e)));return 1===t.length?t[0]:{compositeFilter:{op:$r(e.op),filters:t}}}(e):R()}function qr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Hr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,n,r,i=Q.min(),s=Q.min(),o=Re.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.ct=e}}function Qr(e){const t=Mr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?$t(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(De(e.integerValue));else if("doubleValue"in e){const n=De(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),pe(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=xe(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Pe(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?nt(e)?this.dt(t,Number.MAX_SAFE_INTEGER):et(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):R()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}wt(e,t){var n,r;const i=e.fields||{};this.dt(t,53);const s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(De(o)),this.Vt(s,t),this.Tt(i[s],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),ee.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}Xr.vt=new Xr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(){this.un=new Yr}addToCollectionParentIndex(e,t){return this.un.add(t),ue.resolve()}getCollectionParents(e,t){return ue.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return ue.resolve()}deleteFieldIndex(e,t){return ue.resolve()}deleteAllFieldIndexes(e){return ue.resolve()}createTargetIndexes(e,t){return ue.resolve()}getDocumentsMatchingTarget(e,t){return ue.resolve(null)}getIndexType(e,t){return ue.resolve(0)}getFieldIndexes(e,t){return ue.resolve([])}getNextCollectionGroupToUpdate(e){return ue.resolve(null)}getMinOffset(e,t){return ue.resolve(ie.min())}getMinOffsetFromCollectionGroup(e,t){return ue.resolve(ie.min())}updateCollectionGroup(e,t,n){return ue.resolve()}updateIndexEntries(e,t){return ue.resolve()}}class Yr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ae(J.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ae(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Zr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Zr(e,Zr.DEFAULT_COLLECTION_PERCENTILE,Zr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zr.DEFAULT_COLLECTION_PERCENTILE=10,Zr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zr.DEFAULT=new Zr(41943040,Zr.DEFAULT_COLLECTION_PERCENTILE,Zr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zr.DISABLED=new Zr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ei(0)}static kn(){return new ei(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(){this.changes=new Qt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ue.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&xn(n.mutation,e,ke.empty(),G.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,an()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=an()){const r=tn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Zt();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=tn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,an())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Jt();const s=rn(),o=function(){return rn()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Mn)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),xn(o.mutation,t,o.mutation.getFieldMask(),G.now())):s.set(t.key,ke.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new ni(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=rn();let r=new Ee(((e,t)=>e-t)),i=an();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||ke.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||an()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=nn();c.forEach((e=>{if(!i.has(e)){const r=Rn(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ue.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ut(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ue.resolve(tn());let o=-1,a=i;return s.next((t=>ue.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?ue.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,an()))).next((e=>({batchId:o,changes:en(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next((e=>{let t=Zt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Zt();return this.indexManager.getCollectionParents(e,i).next((o=>ue.forEach(o,(o=>{const a=function(e,t){return new Dt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,st.newInvalidDocument(r)))}));let n=Zt();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&xn(s.mutation,r,ke.empty(),G.now()),qt(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return ue.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:_r(e.createTime)}}(t)),ue.resolve()}getNamedQuery(e,t){return ue.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(e){return{name:e.name,query:Qr(e.bundledQuery),readTime:_r(e.readTime)}}(t)),ue.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.overlays=new Ee(ee.comparator),this.Ir=new Map}getOverlay(e,t){return ue.resolve(this.overlays.get(t))}getOverlays(e,t){const n=tn();return ue.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),ue.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),ue.resolve()}getOverlaysForCollection(e,t,n){const r=tn(),i=t.length+1,s=new ee(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ue.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ee(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=tn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return ue.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Kn(t,n));let i=this.Ir.get(t);void 0===i&&(i=an(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.sessionToken=Re.EMPTY_BYTE_STRING}getSessionToken(e){return ue.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ue.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.Tr=new Ae(ci.Er),this.dr=new Ae(ci.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new ci(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new ci(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new ee(new J([])),n=new ci(t,e),r=new ci(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ee(new J([])),n=new ci(t,e),r=new ci(t,e+1);let i=an();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new ci(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ci{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ee.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||ee.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ae(ci.Er)}checkEmpty(e){return ue.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Bn(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.br=this.br.add(new ci(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return ue.resolve(s)}lookupMutationBatch(e,t){return ue.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return ue.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ue.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return ue.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ci(t,0),r=new ci(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),ue.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ae(H);return t.forEach((e=>{const t=new ci(e,0),r=new ci(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),ue.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ee.isDocumentKey(i)||(i=i.child(""));const s=new ci(new ee(i),0);let o=new Ae(H);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.wr)),!0)}),s),ue.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){N(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return ue.forEach(t.mutations,(r=>{const i=new ci(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new ci(t,0),r=this.br.firstAfterOrEqual(n);return ue.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ue.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.Mr=e,this.docs=function(){return new Ee(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ue.resolve(n?n.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let n=Jt();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():st.newInvalidDocument(e))})),ue.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Jt();const s=t.path,o=new ee(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||se(re(o),n)<=0||(r.has(o.key)||qt(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ue.resolve(i)}getAllFromCollectionGroup(e,t,n,r){R()}Or(e,t){return ue.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new hi(this)}getSize(e){return ue.resolve(this.size)}}class hi extends ti{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),ue.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.persistence=e,this.Nr=new Qt((e=>Rt(e)),Nt),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ai,this.targetCount=0,this.kr=ei.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),ue.resolve()}getLastRemoteSnapshotVersion(e){return ue.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ue.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),ue.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),ue.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ei(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,ue.resolve()}updateTargetData(e,t){return this.Kn(t),ue.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,ue.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ue.waitFor(i).next((()=>r))}getTargetCount(e){return ue.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return ue.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),ue.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),ue.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),ue.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return ue.resolve(n)}containsKey(e,t){return ue.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.qr={},this.overlays={},this.Qr=new de(0),this.Kr=!1,this.Kr=!0,this.$r=new oi,this.referenceDelegate=e(this),this.Ur=new di(this),this.indexManager=new Jr,this.remoteDocumentCache=function(e){return new li(e)}((e=>this.referenceDelegate.Wr(e))),this.serializer=new Gr(t),this.Gr=new ii(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new si,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new ui(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){A("MemoryPersistence","Starting transaction:",e);const r=new pi(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return ue.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class pi extends ae{constructor(e){super(),this.currentSequenceNumber=e}}class gi{constructor(e){this.persistence=e,this.Jr=new ai,this.Yr=null}static Zr(e){return new gi(e)}get Xr(){if(this.Yr)return this.Yr;throw R()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),ue.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),ue.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),ue.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ue.forEach(this.Xr,(n=>{const r=ee.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,Q.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return ue.or([()=>ue.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=an(),r=an();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new mi(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,c.nr)()?8:le((0,c.ZQ)())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new vi;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(S()<=a.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Kt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),ue.resolve()):(S()<=a.$b.DEBUG&&A("QueryEngine","Query:",Kt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(S()<=a.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Kt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(t))):ue.resolve())}Yi(e,t){if(Mt(t))return ue.resolve(null);let n=Vt(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=$t(t,null,"F"),n=Vt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=an(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,$t(t,null,"F")):this.rs(e,s,t,n)}))))})))))}Zi(e,t,n,r){return Mt(t)||r.isEqual(Q.min())?ue.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?ue.resolve(null):(S()<=a.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kt(t)),this.rs(e,s,t,ne(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Ae(Wt(e));return t.forEach(((t,r)=>{qt(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return S()<=a.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Kt(t)),this.Ji.getDocumentsMatchingQuery(e,t,ie.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Ee(H),this._s=new Qt((e=>Rt(e)),Nt),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ri(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function _i(e,t,n,r){return new wi(e,t,n,r)}async function bi(e,t){const n=x(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=an();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ti(e,t){const n=x(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=ue.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);N(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=an();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Ei(e){const t=x(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function Ii(e,t){const n=x(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Re.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Ur.updateTargetData(e,u))}));let a=Jt(),c=an();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Si(e,s,t.documentUpdates).next((e=>{a=e.Ps,c=e.Is}))),!r.isEqual(Q.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ue.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.os=i,e)))}function Si(e,t,n){let r=an(),i=an();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Jt();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Q.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):A("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Ps:r,Is:i}}))}function Ai(e,t){const n=x(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ci(e,t){const n=x(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,ue.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new Wr(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}async function ki(e,t,n){const r=x(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!he(e))throw e;A("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Oi(e,t,n){const r=x(e);let i=Q.min(),s=an();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=x(e),i=r._s.get(n);return void 0!==i?ue.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,Vt(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:Q.min(),n?s:an()))).next((e=>(Ri(r,Ht(t),e),{documents:e,Ts:s})))))}function Ri(e,t,n){let r=e.us.get(t)||Q.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}class Ni{constructor(){this.activeTargetIds=un()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xi{constructor(){this.so=new Ni,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ni,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li=null;function Mi(){return null===Li?Li=function(){return 268435456+Math.round(2147483648*Math.random())}():Li++,"0x"+Li.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ui={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="WebChannelConnection";class ji extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=Mi(),o=this.xo(e,t.toUriEncodedString());A("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(e,o,a,n).then((t=>(A("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw k("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=Ui[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=Mi();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const t=a.getResponseJson();A(Vi,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case p.TIMEOUT:A(Vi,`RPC '${e}' ${i} timed out`),o(new P(D.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(A(Vi,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(t)>=0?t:D.UNKNOWN}(t.status);o(new P(e,t.message))}else o(new P(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(D.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{A(Vi,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);A(Vi,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Bo(e,t,n){const r=Mi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=y(),o=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");A(Vi,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,f=!1;const p=new Fi({Io:t=>{f?A(Vi,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(A(Vi,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),A(Vi,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},To:()=>l.close()}),w=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return w(l,d.EventType.OPEN,(()=>{f||(A(Vi,`RPC '${e}' stream ${r} transport opened.`),p.yo())})),w(l,d.EventType.CLOSE,(()=>{f||(f=!0,A(Vi,`RPC '${e}' stream ${r} transport closed`),p.So())})),w(l,d.EventType.ERROR,(t=>{f||(f=!0,k(Vi,`RPC '${e}' stream ${r} transport errored:`,t),p.So(new P(D.UNAVAILABLE,"The operation could not be completed")))})),w(l,d.EventType.MESSAGE,(t=>{var n;if(!f){const i=t.data[0];N(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){A(Vi,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Hn[e];if(void 0!==t)return Qn(t)}(t),i=o.message;void 0===n&&(n=D.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),f=!0,p.So(new P(n,i)),l.close()}else A(Vi,`RPC '${e}' stream ${r} received:`,i),p.bo(i)}})),w(o,m.STAT_EVENT,(t=>{t.stat===g.PROXY?A(Vi,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===g.NOPROXY&&A(Vi,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.wo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){return new gr(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t,n,r,i,s,o,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zi(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(C(t.toString()),C("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new P(D.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qi extends Ki{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Nr(this.serializer,e),n=function(e){if(!("targetChange"in e))return Q.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Q.min():t.readTime?_r(t.readTime):Q.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=kr(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=xt(r)?{documents:Pr(e,r)}:{query:Lr(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=yr(e,t.resumeToken);const r=mr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Q.min())>0){n.readTime=vr(e,t.snapshotVersion.toTimestamp());const r=mr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Ur(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=kr(this.serializer),t.removeTarget=e,this.a_(t)}}class Hi extends Ki{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return N(!!e.streamToken),this.lastStreamToken=e.streamToken,N(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){N(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Dr(e.writeResults,e.commitTime),n=_r(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=kr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>xr(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Mo(e,Tr(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(D.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Lo(e,Tr(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(D.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Gi{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(C(t),this.D_=!1):A("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{is(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=x(e);t.L_.add(4),await Ji(t),t.q_.set("Unknown"),t.L_.delete(4),await Xi(t)}(this))}))})),this.q_=new Gi(n,r)}}async function Xi(e){if(is(e))for(const t of e.B_)await t(!0)}async function Ji(e){for(const t of e.B_)await t(!1)}function Yi(e,t){const n=x(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),rs(n)?ns(n):Es(n).r_()&&es(n,t))}function Zi(e,t){const n=x(e),r=Es(n);n.N_.delete(t),r.r_()&&ts(n,t),0===n.N_.size&&(r.r_()?r.o_():is(n)&&n.q_.set("Unknown"))}function es(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Q.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Es(e).A_(t)}function ts(e,t){e.Q_.xe(t),Es(e).R_(t)}function ns(e){e.Q_=new ur({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Es(e).start(),e.q_.v_()}function rs(e){return is(e)&&!Es(e).n_()&&e.N_.size>0}function is(e){return 0===x(e).L_.size}function ss(e){e.Q_=void 0}async function os(e){e.q_.set("Online")}async function as(e){e.N_.forEach(((t,n)=>{es(e,t)}))}async function cs(e,t){ss(e),rs(e)?(e.q_.M_(t),ns(e)):e.q_.set("Unknown")}async function us(e,t,n){if(e.q_.set("Online"),t instanceof ar&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(n){A("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ls(e,n)}else if(t instanceof sr?e.Q_.Ke(t):t instanceof or?e.Q_.He(t):e.Q_.We(t),!n.isEqual(Q.min()))try{const t=await Ei(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(Re.EMPTY_BYTE_STRING,r.snapshotVersion)),ts(e,t);const i=new Wr(r.target,t,n,r.sequenceNumber);es(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){A("RemoteStore","Failed to raise snapshot:",t),await ls(e,t)}}async function ls(e,t,n){if(!he(t))throw t;e.L_.add(1),await Ji(e),e.q_.set("Offline"),n||(n=()=>Ei(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Xi(e)}))}function hs(e,t){return t().catch((n=>ls(e,n,t)))}async function ds(e){const t=x(e),n=Is(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;fs(t);)try{const e=await Ai(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,ps(t,e)}catch(e){await ls(t,e)}gs(t)&&ms(t)}function fs(e){return is(e)&&e.O_.length<10}function ps(e,t){e.O_.push(t);const n=Is(e);n.r_()&&n.V_&&n.m_(t.mutations)}function gs(e){return is(e)&&!Is(e).n_()&&e.O_.length>0}function ms(e){Is(e).start()}async function vs(e){Is(e).p_()}async function ys(e){const t=Is(e);for(const n of e.O_)t.m_(n.mutations)}async function ws(e,t,n){const r=e.O_.shift(),i=zn.from(r,t,n);await hs(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ds(e)}async function _s(e,t){t&&Is(e).V_&&await async function(e,t){if(function(e){return Gn(e)&&e!==D.ABORTED}(t.code)){const n=e.O_.shift();Is(e).s_(),await hs(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ds(e)}}(e,t),gs(e)&&ms(e)}async function bs(e,t){const n=x(e);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=is(n);n.L_.add(3),await Ji(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Xi(n)}async function Ts(e,t){const n=x(e);t?(n.L_.delete(2),await Xi(n)):t||(n.L_.add(2),await Ji(n),n.q_.set("Unknown"))}function Es(e){return e.K_||(e.K_=function(e,t,n){const r=x(e);return r.w_(),new qi(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Eo:os.bind(null,e),Ro:as.bind(null,e),mo:cs.bind(null,e),d_:us.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),rs(e)?ns(e):e.q_.set("Unknown")):(await e.K_.stop(),ss(e))}))),e.K_}function Is(e){return e.U_||(e.U_=function(e,t,n){const r=x(e);return r.w_(),new Hi(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vs.bind(null,e),mo:_s.bind(null,e),f_:ys.bind(null,e),g_:ws.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await ds(e)):(await e.U_.stop(),e.O_.length>0&&(A("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ss{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new L,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ss(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function As(e,t){if(C("AsyncQueue",`${t}: ${e}`),he(e))return new P(D.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ee.comparator(t.key,n.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=Zt(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cs))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Cs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.W_=new Ee(ee.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):R():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Os{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Os(e,t,Cs.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class Ns{constructor(){this.queries=xs(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=x(e),r=n.queries;n.queries=xs(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new P(D.ABORTED,"Firestore shutting down"))}}function xs(){return new Qt((e=>zt(e)),Bt)}async function Ds(e,t){const n=x(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new Rs,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=As(e,`Initialization of query '${Kt(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&Us(n)}async function Ps(e,t){const n=x(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ls(e,t){const n=x(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&Us(n)}function Ms(e,t,n){const r=x(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function Us(e){e.Y_.forEach((e=>{e.next()}))}var Fs,Vs;(Vs=Fs||(Fs={})).ea="default",Vs.Cache="cache";class js{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Os(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Fs.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e){this.key=e}}class Bs{constructor(e){this.key=e}}class zs{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=an(),this.mutatedKeys=an(),this.Aa=Wt(e),this.Ra=new Cs(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new ks,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=qt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Aa(l,a)>0||c&&this.Aa(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:o,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const o=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==s.length||c?{snapshot:new Os(this.query,e.Ra,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ks,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=an(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new Bs(e))})),this.da.forEach((n=>{e.has(n)||t.push(new $s(n))})),t}ba(e){this.Ta=e.Ts,this.da=an();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Os.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Ks{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qs{constructor(e){this.key=e,this.va=!1}}class Hs{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Qt((e=>zt(e)),Bt),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(ee.comparator),this.Na=new Map,this.La=new ai,this.Ba={},this.ka=new Map,this.qa=ei.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Ws(e,t,n=!0){const r=mo(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Qs(r,t,n,!0),i}async function Gs(e,t){const n=mo(e);await Qs(n,t,!0,!1)}async function Qs(e,t,n,r){const i=await Ci(e.localStore,Vt(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await Xs(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Yi(e.remoteStore,i),a}async function Xs(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await Oi(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return uo(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const s=await Oi(e.localStore,t,!0),o=new zs(t,s.Ts),a=o.ma(s.documents),c=ir.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);uo(e,n,u.wa);const l=new Ks(t,n,o);return e.Fa.set(t,l),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function Js(e,t,n){const r=x(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter((e=>!Bt(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ki(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zi(r.remoteStore,i.targetId),ao(r,i.targetId)})).catch(ce)):(ao(r,i.targetId),await ki(r.localStore,i.targetId,!0))}async function Ys(e,t){const n=x(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zi(n.remoteStore,r.targetId))}async function Zs(e,t,n){const r=vo(e);try{const e=await function(e,t){const n=x(e),r=G.now(),i=t.reduce(((e,t)=>e.add(t.key)),an());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Jt(),c=an();return n.cs.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Dn(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Mn(e.key,t,it(t.value.mapValue),Cn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:en(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Ee(H)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await fo(r,e.changes),await ds(r.remoteStore)}catch(e){const t=As(e,"Failed to persist write");n.reject(t)}}async function eo(e,t){const n=x(e);try{const e=await Ii(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(N(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?N(r.va):e.removedDocuments.size>0&&(N(r.va),r.va=!1))})),await fo(n,e,t)}catch(e){await ce(e)}}function to(e,t,n){const r=x(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=x(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&Us(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function no(e,t,n){const r=x(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new Ee(ee.comparator);e=e.insert(s,st.newNoDocument(s,Q.min()));const n=an().add(s),i=new rr(Q.min(),new Map,new Ee(H),e,n);await eo(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),ho(r)}else await ki(r.localStore,t,!1).then((()=>ao(r,t,n))).catch(ce)}async function ro(e,t){const n=x(e),r=t.batch.batchId;try{const e=await Ti(n.localStore,t);oo(n,r,null),so(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fo(n,e)}catch(e){await ce(e)}}async function io(e,t,n){const r=x(e);try{const e=await function(e,t){const n=x(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(N(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);oo(r,t,n),so(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await fo(r,e)}catch(n){await ce(n)}}function so(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function oo(e,t,n){const r=x(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function ao(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||co(e,t)}))}function co(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(Zi(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),ho(e))}function uo(e,t,n){for(const r of n)r instanceof $s?(e.La.addReference(r.key,t),lo(e,r)):r instanceof Bs?(A("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||co(e,r.key)):R()}function lo(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(A("SyncEngine","New document in limbo: "+n),e.xa.add(r),ho(e))}function ho(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new ee(J.fromString(t)),r=e.qa.next();e.Na.set(r,new qs(n)),e.Oa=e.Oa.insert(n,r),Yi(e.remoteStore,new Wr(Vt(Lt(n.path)),r,"TargetPurposeLimboResolution",de.oe))}}async function fo(e,t,n){const r=x(e),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,a)=>{o.push(r.Ka(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=mi.Wi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ca.d_(i),await async function(e,t){const n=x(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ue.forEach(t,(t=>ue.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ue.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!he(e))throw e;A("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function po(e,t){const n=x(e);if(!n.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const e=await bi(n.localStore,t);n.currentUser=t,function(e,t){e.ka.forEach((e=>{e.forEach((e=>{e.reject(new P(D.CANCELLED,t))}))})),e.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await fo(n,e.hs)}}function go(e,t){const n=x(e),r=n.Na.get(t);if(r&&r.va)return an().add(r.key);{let e=an();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function mo(e){const t=x(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=eo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=go.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=no.bind(null,t),t.Ca.d_=Ls.bind(null,t.eventManager),t.Ca.$a=Ms.bind(null,t.eventManager),t}function vo(e){const t=x(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ro.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=io.bind(null,t),t}class yo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return _i(this.persistence,new yi,e.initialUser,this.serializer)}Ga(e){return new fi(gi.Zr,this.serializer)}Wa(e){return new xi}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yo.provider={build:()=>new yo};class wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>to(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=po.bind(null,this.syncEngine),await Ts(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ns}()}createDatastore(e){const t=Bi(e.databaseInfo.databaseId),n=function(e){return new ji(e)}(e.databaseInfo);return function(e,t,n,r){return new Wi(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Qi(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>to(this.syncEngine,e,0)),function(){return Pi.D()?new Pi:new Di}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Hs(e,t,n,r,i,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=x(e);A("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await Ji(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}wo.provider={build:()=>new wo};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):C("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{A("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(A("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new L;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=As(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function To(e,t){e.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await bi(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Eo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Io(e);A("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>bs(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>bs(t.remoteStore,n))),e._onlineComponents=t}async function Io(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await To(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;k("Error using user provided cache. Falling back to memory cache: "+n),await To(e,new yo)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await To(e,new yo);return e._offlineComponents}async function So(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await Eo(e,e._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await Eo(e,new wo))),e._onlineComponents}function Ao(e){return So(e).then((e=>e.syncEngine))}async function Co(e){const t=await So(e),n=t.eventManager;return n.onListen=Ws.bind(null,t.syncEngine),n.onUnlisten=Js.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Gs.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Ys.bind(null,t.syncEngine),n}function ko(e,t,n={}){const r=new L;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new _o({next:a=>{s.Za(),t.enqueueAndForget((()=>Ps(e,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new P(D.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new P(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new js(Lt(n.path),s,{includeMetadataChanges:!0,_a:!0});return Ds(e,o)}(await Co(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ro=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t,n){if(!n)throw new P(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xo(e,t,n,r){if(!0===t&&!0===r)throw new P(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Do(e){if(!ee.isDocumentKey(e))throw new P(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Po(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":R()}function Lo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Po(e);throw new P(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mo{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new P(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new P(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oo(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new P(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uo{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new P(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new U;switch(e.type){case"firstParty":return new $(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new P(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ro.get(e);t&&(A("ComponentProvider","Removing Datastore"),Ro.delete(e),t.terminate())}(this),Promise.resolve()}}function Fo(e,t,n,r={}){var i;const s=(e=Lo(e,Uo))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&k("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=T.MOCK_USER;else{t=(0,c.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new P(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(s)}e._authCredentials=new F(new M(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vo(this.firestore,e,this._query)}}class jo{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $o(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jo(this.firestore,e,this._key)}}class $o extends Vo{constructor(e,t,n){super(e,t,Lt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jo(this.firestore,null,new ee(e))}withConverter(e){return new $o(this.firestore,e,this._path)}}function Bo(e,t,...n){if(e=(0,c.Ku)(e),1===arguments.length&&(t=q.newId()),No("doc","path",t),e instanceof Uo){const r=J.fromString(t,...n);return Do(r),new jo(e,null,new ee(r))}{if(!(e instanceof jo||e instanceof $o))throw new P(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Do(r),new jo(e.firestore,e instanceof $o?e.converter:null,new ee(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zi(this,"async_queue_retry"),this.Vu=()=>{const e=$i();e&&A("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=$i();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=$i();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new L;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!he(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw C("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=Ss.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&R()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Ko extends Uo{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new zo,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zo(e),this._firestoreClient=void 0,await e}}}function qo(e,t){const n="object"==typeof e?e:(0,s.Sx)(),r="string"==typeof e?e:t||"(default)",i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,c.yU)("firestore");e&&Fo(i,...e)}return i}function Ho(e){if(e._terminated)throw new P(D.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||Wo(e),e._firestoreClient}function Wo(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Fe(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Oo(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new bo(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Go(Re.fromBase64String(e))}catch(e){throw new P(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Go(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new P(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=/^__.*__$/;class ea{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ln(e,this.data,t,this.fieldTransforms)}}function ta(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class na{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(ta(this.Cu)&&Zo.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ra{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Bi(e)}Qu(e,t,n,r=!1){return new na({Cu:e,methodName:t,qu:n,path:Z.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ia(e){const t=e._freezeSettings(),n=Bi(e._databaseId);return new ra(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sa(e,t,n,r,i,s={}){const o=e.Qu(s.merge||s.mergeFields?2:0,t,n,i);ua("Data must be an object, but it was:",o,r);const a=aa(r,o);let c,u;if(s.merge)c=new ke(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=la(t,r,n);if(!o.contains(i))throw new P(D.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);pa(e,i)||e.push(i)}c=new ke(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new ea(new rt(a),c,u)}function oa(e,t){if(ca(e=(0,c.Ku)(e)))return ua("Unsupported field value:",t,e),aa(e,t);if(e instanceof Xo)return function(e,t){if(!ta(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=oa(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=G.fromDate(e);return{timestampValue:vr(t.serializer,n)}}if(e instanceof G){const n=new G(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:vr(t.serializer,n)}}if(e instanceof Jo)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Go)return{bytesValue:yr(t.serializer,e._byteString)};if(e instanceof jo){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:br(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Yo)return function(e,t){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw t.Bu("VectorValues must only contain numeric values.");return ln(t.serializer,e)}))}}}}}}(e,t);throw t.Bu(`Unsupported field value: ${Po(e)}`)}(e,t)}function aa(e,t){const n={};return Te(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):be(e,((e,r)=>{const i=oa(r,t.Mu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function ca(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof G||e instanceof Jo||e instanceof Go||e instanceof jo||e instanceof Xo||e instanceof Yo)}function ua(e,t,n){if(!ca(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Po(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}}function la(e,t,n){if((t=(0,c.Ku)(t))instanceof Qo)return t._internalPath;if("string"==typeof t)return da(e,t);throw fa("Field path arguments must be of type string or ",e,!1,void 0,n)}const ha=new RegExp("[~\\*/\\[\\]]");function da(e,t,n){if(t.search(ha)>=0)throw fa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qo(...t.split("."))._internalPath}catch(r){throw fa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function fa(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new P(D.INVALID_ARGUMENT,a+e+c)}function pa(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ma(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(va("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ma extends ga{data(){return super.data()}}function va(e,t){return"string"==typeof t?da(e,t):t instanceof Qo?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{convertValue(e,t="none"){switch($e(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw R()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return be(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>De(e.doubleValue)));return new Yo(i)}convertGeoPoint(e){return new Jo(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Me(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ue(e));default:return null}}convertTimestamp(e){const t=xe(e);return new G(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);N(Hr(n));const r=new Ve(n.get(1),n.get(3)),i=new ee(n.popFirst(5));return r.isEqual(t)||C(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ba extends ga{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(va("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ta extends ba{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ea(e){e=Lo(e,jo);const t=Lo(e.firestore,Ko);return ko(Ho(t),e._key).then((n=>Ca(t,e,n)))}class Ia extends ya{constructor(e){super(),this.firestore=e}convertBytes(e){return new Go(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jo(this.firestore,null,t)}}function Sa(e,t,n){e=Lo(e,jo);const r=Lo(e.firestore,Ko),i=wa(e.converter,t,n);return Aa(r,[sa(ia(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Cn.none())])}function Aa(e,t){return function(e,t){const n=new L;return e.asyncQueue.enqueueAndForget((async()=>Zs(await Ao(e),t,n))),n.promise}(Ho(e),t)}function Ca(e,t,n){const r=n.docs.get(t._key),i=new Ia(e);return new ba(e,i,t._key,r,new _a(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){E=e}(s.MF),(0,s.om)(new o.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Ko(new V(e.getProvider("auth-internal")),new z(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new P(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ve(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(b,"4.7.3",e),(0,s.KO)(b,"4.7.3","esm2017")}()}}]);
//# sourceMappingURL=chunk-vendors.29acbc85.js.map