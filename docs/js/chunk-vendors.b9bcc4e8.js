(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[504],{36743:function(t,e,n){"use strict";n.d(e,{Am:function(){return V},FA:function(){return N},Fy:function(){return _},I9:function(){return j},Im:function(){return M},Ku:function(){return q},T9:function(){return v},Tj:function(){return g},Uj:function(){return c},XA:function(){return y},ZQ:function(){return w},bD:function(){return U},c1:function(){return S},cY:function(){return b},eX:function(){return x},g:function(){return R},hp:function(){return B},jZ:function(){return E},lT:function(){return A},lV:function(){return C},nr:function(){return k},sr:function(){return I},tD:function(){return $},u:function(){return u},yU:function(){return m},zW:function(){return O}});
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new s;const d=e<<2|a>>4;if(r.push(d),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/aipriCompleateCheck/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
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
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
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
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function T(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function S(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function I(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const t=w();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k(){return!T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O(){try{return"object"===typeof indexedDB}catch(t){return!1}}function x(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const D="FirebaseError";class R extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=D,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?P(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new R(r,s,n);return a}}function P(t,e){return t.replace(L,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
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
 */function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function U(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(F(n)&&F(o)){if(!U(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(t){return null!==t&&"object"===typeof t}
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
function V(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function j(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function B(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function $(t,e){const n=new H(t,e);return n.subscribe.bind(n)}class H{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=K(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function K(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function z(){}
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
function q(t){return t&&t._delegate?t._delegate:t}},50953:function(t,e,n){"use strict";n.d(e,{BA:function(){return Ht},C4:function(){return k},EW:function(){return te},Gc:function(){return St},IG:function(){return Nt},IJ:function(){return Ft},KR:function(){return Ut},Kh:function(){return Tt},PP:function(){return ne},Pr:function(){return zt},QW:function(){return Gt},QZ:function(){return S},R1:function(){return $t},Tm:function(){return Ot},Ul:function(){return ee},X2:function(){return h},Yv:function(){return se},bl:function(){return O},ch:function(){return ae},ds:function(){return I},fE:function(){return xt},g8:function(){return kt},hV:function(){return ue},hZ:function(){return j},i9:function(){return Mt},jr:function(){return u},ju:function(){return Dt},lJ:function(){return Pt},lW:function(){return Xt},mu:function(){return Bt},nD:function(){return Ct},o5:function(){return c},qA:function(){return H},rY:function(){return Wt},tB:function(){return It},u4:function(){return V},uY:function(){return a},ux:function(){return Rt},wB:function(){return ce},yC:function(){return s}});var r=n(90033);
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,o;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t){return new s(t)}function c(){return i}function u(t,e=!1){i&&i.cleanups.push(t)}const l=new WeakSet;class h{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||g(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,x(this),y(this);const t=o,e=C;o=this,C=!0;try{return this.fn()}finally{0,b(this),o=t,C=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)E(t);this.deps=this.depsTail=void 0,x(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_(this)&&this.run()}get dirty(){return _(this)}}let d,f,p=0;function g(t,e=!1){if(t.flags|=8,e)return t.next=f,void(f=t);t.next=d,d=t}function m(){p++}function v(){if(--p>0)return;if(f){let t=f;f=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(d){let n=d;d=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function y(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function b(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),E(r),T(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function _(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===D)return;t.globalVersion=D;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_(t))return void(t.flags&=-3);const n=o,i=C;o=t,C=!0;try{y(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t._value=n,e.version++)}catch(s){throw e.version++,s}finally{o=n,C=i,b(t),t.flags&=-3}}function E(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)E(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function T(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}function S(t,e){t.effect instanceof h&&(t=t.effect.fn);const n=new h(t);e&&(0,r.X$)(n,e);try{n.run()}catch(o){throw n.stop(),o}const i=n.run.bind(n);return i.effect=n,i}function I(t){t.effect.stop()}let C=!0;const A=[];function k(){A.push(C),C=!1}function O(){const t=A.pop();C=void 0===t||t}function x(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=o;o=void 0;try{e()}finally{o=t}}}let D=0;class R{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class N{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!o||!C||o===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==o)e=this.activeLink=new R(o,this),o.deps?(e.prevDep=o.depsTail,o.depsTail.nextDep=e,o.depsTail=e):o.deps=o.depsTail=e,P(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=o.depsTail,e.nextDep=void 0,o.depsTail.nextDep=e,o.depsTail=e,o.deps===e&&(o.deps=t)}return e}trigger(t){this.version++,D++,this.notify(t)}notify(t){m();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{v()}}}function P(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)P(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const L=new WeakMap,M=Symbol(""),U=Symbol(""),F=Symbol("");function V(t,e,n){if(C&&o){let e=L.get(t);e||L.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new N),r.map=e,r.key=n),r.track()}}function j(t,e,n,i,o,s){const a=L.get(t);if(!a)return void D++;const c=t=>{t&&t.trigger()};if(m(),"clear"===e)a.forEach(c);else{const o=(0,r.cy)(t),s=o&&(0,r.yI)(n);if(o&&"length"===n){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n===F||!(0,r.Bm)(n)&&n>=t)&&c(e)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),s&&c(a.get(F)),e){case"add":o?s&&c(a.get("length")):(c(a.get(M)),(0,r.CE)(t)&&c(a.get(U)));break;case"delete":o||(c(a.get(M)),(0,r.CE)(t)&&c(a.get(U)));break;case"set":(0,r.CE)(t)&&c(a.get(M));break}}v()}function B(t,e){const n=L.get(t);return n&&n.get(e)}function $(t){const e=Rt(t);return e===t?e:(V(e,"iterate",F),xt(t)?e:e.map(Pt))}function H(t){return V(t=Rt(t),"iterate",F),t}const K={__proto__:null,[Symbol.iterator](){return z(this,Symbol.iterator,Pt)},concat(...t){return $(this).concat(...t.map((t=>(0,r.cy)(t)?$(t):t)))},entries(){return z(this,"entries",(t=>(t[1]=Pt(t[1]),t)))},every(t,e){return W(this,"every",t,e,void 0,arguments)},filter(t,e){return W(this,"filter",t,e,(t=>t.map(Pt)),arguments)},find(t,e){return W(this,"find",t,e,Pt,arguments)},findIndex(t,e){return W(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return W(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return W(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return W(this,"forEach",t,e,void 0,arguments)},includes(...t){return Q(this,"includes",t)},indexOf(...t){return Q(this,"indexOf",t)},join(t){return $(this).join(t)},lastIndexOf(...t){return Q(this,"lastIndexOf",t)},map(t,e){return W(this,"map",t,e,void 0,arguments)},pop(){return Y(this,"pop")},push(...t){return Y(this,"push",t)},reduce(t,...e){return G(this,"reduce",t,e)},reduceRight(t,...e){return G(this,"reduceRight",t,e)},shift(){return Y(this,"shift")},some(t,e){return W(this,"some",t,e,void 0,arguments)},splice(...t){return Y(this,"splice",t)},toReversed(){return $(this).toReversed()},toSorted(t){return $(this).toSorted(t)},toSpliced(...t){return $(this).toSpliced(...t)},unshift(...t){return Y(this,"unshift",t)},values(){return z(this,"values",Pt)}};function z(t,e,n){const r=H(t),i=r[e]();return r===t||xt(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.value&&(t.value=n(t.value)),t}),i}const q=Array.prototype;function W(t,e,n,r,i,o){const s=H(t),a=s!==t&&!xt(t),c=s[e];if(c!==q[e]){const e=c.apply(t,o);return a?Pt(e):e}let u=n;s!==t&&(a?u=function(e,r){return n.call(this,Pt(e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(s,u,r);return a&&i?i(l):l}function G(t,e,n,r){const i=H(t);let o=n;return i!==t&&(xt(t)?n.length>3&&(o=function(e,r,i){return n.call(this,e,r,i,t)}):o=function(e,r,i){return n.call(this,e,Pt(r),i,t)}),i[e](o,...r)}function Q(t,e,n){const r=Rt(t);V(r,"iterate",F);const i=r[e](...n);return-1!==i&&!1!==i||!Dt(n[0])?i:(n[0]=Rt(n[0]),r[e](...n))}function Y(t,e,n=[]){k(),m();const r=Rt(t)[e].apply(t,n);return v(),O(),r}const X=(0,r.pD)("__proto__,__v_isRef,__isVue"),J=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm));function Z(t){(0,r.Bm)(t)||(t=String(t));const e=Rt(this);return V(e,"has",t),e.hasOwnProperty(t)}class tt{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return o;if("__v_raw"===e)return n===(i?o?_t:bt:o?yt:vt).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const s=(0,r.cy)(t);if(!i){let t;if(s&&(t=K[e]))return t;if("hasOwnProperty"===e)return Z}const a=Reflect.get(t,e,Mt(t)?t:n);return((0,r.Bm)(e)?J.has(e):X(e))?a:(i||V(t,"get",e),o?a:Mt(a)?s&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?It(a):Tt(a):a)}}class et extends tt{constructor(t=!1){super(!1,t)}set(t,e,n,i){let o=t[e];if(!this._isShallow){const e=Ot(o);if(xt(n)||Ot(n)||(o=Rt(o),n=Rt(n)),!(0,r.cy)(t)&&Mt(o)&&!Mt(n))return!e&&(o.value=n,!0)}const s=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,Mt(t)?t:i);return t===Rt(i)&&(s?(0,r.$H)(n,o)&&j(t,"set",e,n,o):j(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&j(t,"delete",e,void 0,i),o}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&J.has(e)||V(t,"has",e),n}ownKeys(t){return V(t,"iterate",(0,r.cy)(t)?"length":M),Reflect.ownKeys(t)}}class nt extends tt{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const rt=new et,it=new nt,ot=new et(!0),st=new nt(!0),at=t=>t,ct=t=>Reflect.getPrototypeOf(t);function ut(t,e,n){return function(...i){const o=this["__v_raw"],s=Rt(o),a=(0,r.CE)(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?at:e?Lt:Pt;return!e&&V(s,"iterate",u?U:M),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ht(t,e){const n={get(n){const i=this["__v_raw"],o=Rt(i),s=Rt(n);t||((0,r.$H)(n,s)&&V(o,"get",n),V(o,"get",s));const{has:a}=ct(o),c=e?at:t?Lt:Pt;return a.call(o,n)?c(i.get(n)):a.call(o,s)?c(i.get(s)):void(i!==o&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&V(Rt(e),"iterate",M),Reflect.get(e,"size",e)},has(e){const n=this["__v_raw"],i=Rt(n),o=Rt(e);return t||((0,r.$H)(e,o)&&V(i,"has",e),V(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)},forEach(n,r){const i=this,o=i["__v_raw"],s=Rt(o),a=e?at:t?Lt:Pt;return!t&&V(s,"iterate",M),o.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}};(0,r.X$)(n,t?{add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear")}:{add(t){e||xt(t)||Ot(t)||(t=Rt(t));const n=Rt(this),r=ct(n),i=r.has.call(n,t);return i||(n.add(t),j(n,"add",t,t)),this},set(t,n){e||xt(n)||Ot(n)||(n=Rt(n));const i=Rt(this),{has:o,get:s}=ct(i);let a=o.call(i,t);a||(t=Rt(t),a=o.call(i,t));const c=s.call(i,t);return i.set(t,n),a?(0,r.$H)(n,c)&&j(i,"set",t,n,c):j(i,"add",t,n),this},delete(t){const e=Rt(this),{has:n,get:r}=ct(e);let i=n.call(e,t);i||(t=Rt(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&j(e,"delete",t,void 0,o),s},clear(){const t=Rt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&j(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=ut(r,t,e)})),n}function dt(t,e){const n=ht(t,e);return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,o)}const ft={get:dt(!1,!1)},pt={get:dt(!1,!0)},gt={get:dt(!0,!1)},mt={get:dt(!0,!0)};const vt=new WeakMap,yt=new WeakMap,bt=new WeakMap,_t=new WeakMap;function wt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Et(t){return t["__v_skip"]||!Object.isExtensible(t)?0:wt((0,r.Zf)(t))}function Tt(t){return Ot(t)?t:At(t,!1,rt,ft,vt)}function St(t){return At(t,!1,ot,pt,yt)}function It(t){return At(t,!0,it,gt,bt)}function Ct(t){return At(t,!0,st,mt,_t)}function At(t,e,n,i,o){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=Et(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function kt(t){return Ot(t)?kt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ot(t){return!(!t||!t["__v_isReadonly"])}function xt(t){return!(!t||!t["__v_isShallow"])}function Dt(t){return!!t&&!!t["__v_raw"]}function Rt(t){const e=t&&t["__v_raw"];return e?Rt(e):t}function Nt(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const Pt=t=>(0,r.Gv)(t)?Tt(t):t,Lt=t=>(0,r.Gv)(t)?It(t):t;function Mt(t){return!!t&&!0===t["__v_isRef"]}function Ut(t){return Vt(t,!1)}function Ft(t){return Vt(t,!0)}function Vt(t,e){return Mt(t)?t:new jt(t,e)}class jt{constructor(t,e){this.dep=new N,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:Rt(t),this._value=e?t:Pt(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||xt(t)||Ot(t);t=n?t:Rt(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:Pt(t),this.dep.trigger())}}function Bt(t){t.dep&&t.dep.trigger()}function $t(t){return Mt(t)?t.value:t}function Ht(t){return(0,r.Tn)(t)?t():$t(t)}const Kt={get:(t,e,n)=>"__v_raw"===e?t:$t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Mt(i)&&!Mt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function zt(t){return kt(t)?t:new Proxy(t,Kt)}class qt{constructor(t){this["__v_isRef"]=!0,this._value=void 0;const e=this.dep=new N,{get:n,set:r}=t(e.track.bind(e),e.trigger.bind(e));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Wt(t){return new qt(t)}function Gt(t){const e=(0,r.cy)(t)?new Array(t.length):{};for(const n in t)e[n]=Jt(t,n);return e}class Qt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this["__v_isRef"]=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return B(Rt(this._object),this._key)}}class Yt{constructor(t){this._getter=t,this["__v_isRef"]=!0,this["__v_isReadonly"]=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Xt(t,e,n){return Mt(t)?t:(0,r.Tn)(t)?new Yt(t):(0,r.Gv)(t)&&arguments.length>1?Jt(t,e,n):Ut(t)}function Jt(t,e,n){const r=t[e];return Mt(r)?r:new Qt(t,e,n)}class Zt{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new N(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=D-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||o===this))return g(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function te(t,e,n=!1){let i,o;(0,r.Tn)(t)?i=t:(i=t.get,o=t.set);const s=new Zt(i,o,n);return s}const ee={GET:"get",HAS:"has",ITERATE:"iterate"},ne={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},re={},ie=new WeakMap;let oe;function se(){return oe}function ae(t,e=!1,n=oe){if(n){let e=ie.get(n);e||ie.set(n,e=[]),e.push(t)}else 0}function ce(t,e,n=r.MZ){const{immediate:i,deep:o,once:s,scheduler:a,augmentJob:u,call:l}=n,d=t=>o?t:xt(t)||!1===o||0===o?ue(t,1):ue(t);let f,p,g,m,v=!1,y=!1;if(Mt(t)?(p=()=>t.value,v=xt(t)):kt(t)?(p=()=>d(t),v=!0):(0,r.cy)(t)?(y=!0,v=t.some((t=>kt(t)||xt(t))),p=()=>t.map((t=>Mt(t)?t.value:kt(t)?d(t):(0,r.Tn)(t)?l?l(t,2):t():void 0))):p=(0,r.Tn)(t)?e?l?()=>l(t,2):t:()=>{if(g){k();try{g()}finally{O()}}const e=oe;oe=f;try{return l?l(t,3,[m]):t(m)}finally{oe=e}}:r.tE,e&&o){const t=p,e=!0===o?1/0:o;p=()=>ue(t(),e)}const b=c(),_=()=>{f.stop(),b&&(0,r.TF)(b.effects,f)};if(s&&e){const t=e;e=(...e)=>{t(...e),_()}}let w=y?new Array(t.length).fill(re):re;const E=t=>{if(1&f.flags&&(f.dirty||t))if(e){const t=f.run();if(o||v||(y?t.some(((t,e)=>(0,r.$H)(t,w[e]))):(0,r.$H)(t,w))){g&&g();const n=oe;oe=f;try{const n=[t,w===re?void 0:y&&w[0]===re?[]:w,m];l?l(e,3,n):e(...n),w=t}finally{oe=n}}}else f.run()};return u&&u(E),f=new h(p),f.scheduler=a?()=>a(E,!1):E,m=t=>ae(t,!1,f),g=f.onStop=()=>{const t=ie.get(f);if(t){if(l)l(t,4);else for(const e of t)e();ie.delete(f)}},e?i?E(!0):w=f.run():a?a(E.bind(null,!0),!0):f.run(),_.pause=f.pause.bind(f),_.resume=f.resume.bind(f),_.stop=_,_}function ue(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,Mt(t))ue(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)ue(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach((t=>{ue(t,e,n)}));else if((0,r.Qd)(t)){for(const r in t)ue(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ue(t[r],e,n)}return t}},20641:function(t,e,n){"use strict";n.d(e,{$V:function(){return ee},$u:function(){return ye},$y:function(){return Oe},BA:function(){return r.BA},Bi:function(){return Ct},Bs:function(){return Wi},C4:function(){return i.C4},CE:function(){return Yr},Df:function(){return St},Dl:function(){return N},E:function(){return rn},E3:function(){return ai},EW:function(){return Hi},EY:function(){return Vr},FK:function(){return Fr},Fv:function(){return ui},Fw:function(){return rr},GM:function(){return qe},Gc:function(){return r.Gc},Gt:function(){return Sn},Gw:function(){return to},Gy:function(){return dt},H4:function(){return _},HF:function(){return tn},Ht:function(){return Ye},IG:function(){return r.IG},IJ:function(){return r.IJ},Ic:function(){return ve},Im:function(){return at},K9:function(){return Wn},KC:function(){return ge},KR:function(){return r.KR},Kf:function(){return i.rU},Kh:function(){return r.Kh},LJ:function(){return eo},LM:function(){return ir},Lk:function(){return ri},Lu:function(){return We},MZ:function(){return Tt},Mw:function(){return jr},NP:function(){return Ge},Ng:function(){return si},OA:function(){return Xe},OW:function(){return _t},PP:function(){return r.PP},PR:function(){return oe},PS:function(){return Cn},PT:function(){return i.PT},Pn:function(){return Yt},Pr:function(){return r.Pr},Q3:function(){return li},QP:function(){return pt},QW:function(){return r.QW},QZ:function(){return r.QZ},Qi:function(){return z},R1:function(){return r.R1},R8:function(){return Qi},RG:function(){return Le},SS:function(){return we},Tb:function(){return Ue},Tm:function(){return r.Tm},Tq:function(){return Jt},Tr:function(){return i.Tr},U4:function(){return g},U_:function(){return ar},Ul:function(){return r.Ul},Vq:function(){return Gr},WQ:function(){return In},Wv:function(){return Xr},X2:function(){return r.X2},Y4:function(){return ce},Y5:function(){return no},YY:function(){return W},Yj:function(){return He},Yv:function(){return r.Yv},ZH:function(){return i.ZH},ZQ:function(){return Yi},_B:function(){return i._B},aT:function(){return ro},bF:function(){return ii},bU:function(){return qi},bj:function(){return Ee},bn:function(){return nn},bo:function(){return Q},ch:function(){return r.ch},ci:function(){return Gn},dA:function(){return Xt},dY:function(){return O},ds:function(){return r.ds},eW:function(){return ci},eX:function(){return Pe},fE:function(){return r.fE},fn:function(){return dr},g2:function(){return Ae},g8:function(){return r.g8},gN:function(){return xe},gW:function(){return ti},gh:function(){return y},h:function(){return Ki},hi:function(){return _e},i9:function(){return r.i9},iD:function(){return Ji},jC:function(){return Br},jr:function(){return r.jr},jt:function(){return q},ju:function(){return r.ju},k6:function(){return G},lW:function(){return r.lW},lt:function(){return Xi},mu:function(){return r.mu},n:function(){return ae},nD:function(){return r.nD},nI:function(){return _i},nT:function(){return or},o5:function(){return r.o5},p9:function(){return sr},pI:function(){return Ne},pM:function(){return It},pR:function(){return yt},qG:function(){return Se},qL:function(){return b},qP:function(){return Ke},qR:function(){return Te},rE:function(){return Gi},rO:function(){return Qe},rU:function(){return Gt},rY:function(){return r.rY},rk:function(){return kt},sV:function(){return me},tB:function(){return r.tB},tC:function(){return Ri},tG:function(){return m},tY:function(){return Ar},uX:function(){return Kr},uY:function(){return r.uY},ux:function(){return r.ux},v6:function(){return pi},v_:function(){return i.v_},vv:function(){return Jr},wB:function(){return cr},wX:function(){return Ni},wk:function(){return ze},xo:function(){return be},y$:function(){return zi},yC:function(){return r.yC},zz:function(){return en}});var r=n(50953),i=n(90033);
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o=[];function s(t){o.push(t)}function a(){o.pop()}let c=!1;function u(t,...e){if(c)return;c=!0,(0,r.C4)();const n=o.length?o[o.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=l();if(i)y(i,n,11,[t+e.map((t=>{var e,n;return null!=(n=null==(e=t.toString)?void 0:e.call(t))?n:JSON.stringify(t)})).join(""),n&&n.proxy,s.map((({vnode:t})=>`at <${Bi(n,t.type)}>`)).join("\n"),s]);else{const n=[`[Vue warn]: ${t}`,...e];s.length&&n.push("\n",...h(s)),console.warn(...n)}(0,r.bl)(),c=!1}function l(){let t=o[o.length-1];if(!t)return[];const e=[];while(t){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function h(t){const e=[];return t.forEach(((t,n)=>{e.push(...0===n?[]:["\n"],...d(t))})),e}function d({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=!!t.component&&null==t.component.parent,i=` at <${Bi(t.component,t.type,r)}`,o=">"+n;return t.props?[i,...f(t.props),o]:[i+o]}function f(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach((n=>{e.push(...p(n,t[n]))})),n.length>3&&e.push(" ..."),e}function p(t,e,n){return(0,i.Kg)(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?n?e:[`${t}=${e}`]:(0,r.i9)(e)?(e=p(t,(0,r.ux)(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):(0,i.Tn)(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=(0,r.ux)(e),n?e:[`${t}=`,e])}function g(t,e){}const m={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},v={["sp"]:"serverPrefetch hook",["bc"]:"beforeCreate hook",["c"]:"created hook",["bm"]:"beforeMount hook",["m"]:"mounted hook",["bu"]:"beforeUpdate hook",["u"]:"updated",["bum"]:"beforeUnmount hook",["um"]:"unmounted hook",["a"]:"activated hook",["da"]:"deactivated hook",["ec"]:"errorCaptured hook",["rtc"]:"renderTracked hook",["rtg"]:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush",[15]:"component update",[16]:"app unmount cleanup function"};function y(t,e,n,r){try{return r?t(...r):t()}catch(i){_(i,e,n)}}function b(t,e,n,r){if((0,i.Tn)(t)){const o=y(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{_(t,e,n)})),o}if((0,i.cy)(t)){const i=[];for(let o=0;o<t.length;o++)i.push(b(t[o],e,n,r));return i}}function _(t,e,n,o=!0){const s=e?e.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:c}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,s))return;i=i.parent}if(a)return(0,r.C4)(),y(a,null,10,[t,o,s]),void(0,r.bl)()}w(t,n,s,o,c)}function w(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const E=[];let T=-1;const S=[];let I=null,C=0;const A=Promise.resolve();let k=null;function O(t){const e=k||A;return t?e.then(this?t.bind(this):t):e}function x(t){let e=T+1,n=E.length;while(e<n){const r=e+n>>>1,i=E[r],o=M(i);o<t||o===t&&2&i.flags?e=r+1:n=r}return e}function D(t){if(!(1&t.flags)){const e=M(t),n=E[E.length-1];!n||!(2&t.flags)&&e>=M(n)?E.push(t):E.splice(x(e),0,t),t.flags|=1,R()}}function R(){k||(k=A.then(U))}function N(t){(0,i.cy)(t)?S.push(...t):I&&-1===t.id?I.splice(C+1,0,t):1&t.flags||(S.push(t),t.flags|=1),R()}function P(t,e,n=T+1){for(0;n<E.length;n++){const e=E[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,E.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function L(t){if(S.length){const t=[...new Set(S)].sort(((t,e)=>M(t)-M(e)));if(S.length=0,I)return void I.push(...t);for(I=t,C=0;C<I.length;C++){const t=I[C];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}I=null,C=0}}const M=t=>null==t.id?2&t.flags?-1:1/0:t.id;function U(t){i.tE;try{for(T=0;T<E.length;T++){const t=E[T];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),y(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;T<E.length;T++){const t=E[T];t&&(t.flags&=-2)}T=-1,E.length=0,L(t),k=null,(E.length||S.length)&&U(t)}}let F,V=[],j=!1;function B(t,e){var n,r;if(F=t,F)F.enabled=!0,V.forEach((({event:t,args:e})=>F.emit(t,...e))),V=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null==(r=null==(n=window.navigator)?void 0:n.userAgent)?void 0:r.includes("jsdom"))){const t=e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[];t.push((t=>{B(t,e)})),setTimeout((()=>{F||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,j=!0,V=[])}),3e3)}else j=!0,V=[]}let $=null,H=null;function K(t){const e=$;return $=t,H=t&&t.type.__scopeId||null,e}function z(t){H=t}function q(){H=null}const W=t=>G;function G(t,e=$,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Gr(-1);const i=K(e);let o;try{o=t(...n)}finally{K(i),r._d&&Gr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Q(t,e){if(null===$)return t;const n=Ui($),o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,a,c,u=i.MZ]=e[s];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.hV)(a),o.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Y(t,e,n,i){const o=t.dirs,s=e&&e.dirs;for(let a=0;a<o.length;a++){const c=o[a];s&&(c.oldValue=s[a].value);let u=c.dir[i];u&&((0,r.C4)(),b(u,n,8,[t.el,c,t,e]),(0,r.bl)())}}const X=Symbol("_vte"),J=t=>t.__isTeleport,Z=t=>t&&(t.disabled||""===t.disabled),tt=t=>t&&(t.defer||""===t.defer),et=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,nt=t=>"function"===typeof MathMLElement&&t instanceof MathMLElement,rt=(t,e)=>{const n=t&&t.to;if((0,i.Kg)(n)){if(e){const t=e(n);return t}return null}return n},it={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,o,s,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:m}}=u,v=Z(e.props);let{shapeFlag:y,children:b,dynamicChildren:_}=e;if(null==t){const t=e.el=g(""),u=e.anchor=g("");f(t,n,r),f(u,n,r);const h=(t,e)=>{16&y&&(i&&i.isCE&&(i.ce._teleportTarget=t),l(b,t,e,i,o,s,a,c))},d=()=>{const t=e.target=rt(e.props,p),n=ut(t,e,g,f);t&&("svg"!==s&&et(t)?s="svg":"mathml"!==s&&nt(t)&&(s="mathml"),v||(h(t,n),ct(e,!1)))};v&&(h(n,u),ct(e,!0)),tt(e.props)?qn(d,o):d()}else{e.el=t.el,e.targetStart=t.targetStart;const r=e.anchor=t.anchor,l=e.target=t.target,f=e.targetAnchor=t.targetAnchor,g=Z(t.props),m=g?n:l,y=g?r:f;if("svg"===s||et(l)?s="svg":("mathml"===s||nt(l))&&(s="mathml"),_?(d(t.dynamicChildren,_,m,i,o,s,a),Zn(t,e,!0)):c||h(t,e,m,y,i,o,s,a,!1),v)g?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ot(e,n,r,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=rt(e.props,p);t&&ot(e,t,null,u,0)}else g&&ot(e,l,f,u,1);ct(e,v)}},remove(t,e,n,{um:r,o:{remove:i}},o){const{shapeFlag:s,children:a,anchor:c,targetStart:u,targetAnchor:l,target:h,props:d}=t;if(h&&(i(u),i(l)),o&&i(c),16&s){const t=o||!Z(d);for(let i=0;i<a.length;i++){const o=a[i];r(o,e,n,t,!!o.dynamicChildren)}}},move:ot,hydrate:st};function ot(t,e,n,{o:{insert:r},m:i},o=2){0===o&&r(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:c,children:u,props:l}=t,h=2===o;if(h&&r(s,e,n),(!h||Z(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],e,n,2);h&&r(a,e,n)}function st(t,e,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:c,insert:u,createText:l}},h){const d=e.target=rt(e.props,c);if(d){const c=Z(e.props),f=d._lpa||d.firstChild;if(16&e.shapeFlag)if(c)e.anchor=h(s(t),e,a(t),n,r,i,o),e.targetStart=f,e.targetAnchor=f&&s(f);else{e.anchor=s(t);let a=f;while(a){if(a&&8===a.nodeType)if("teleport start anchor"===a.data)e.targetStart=a;else if("teleport anchor"===a.data){e.targetAnchor=a,d._lpa=e.targetAnchor&&s(e.targetAnchor);break}a=s(a)}e.targetAnchor||ut(d,e,l,u),h(f&&s(f),e,d,n,r,i,o)}ct(e,c)}return e.anchor&&s(e.anchor)}const at=it;function ct(t,e){const n=t.ctx;if(n&&n.ut){let r,i;e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);while(r&&r!==i)1===r.nodeType&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function ut(t,e,n,r){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[X]=o,t&&(r(i,t),r(o,t)),o}const lt=Symbol("_leaveCb"),ht=Symbol("_enterCb");function dt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return me((()=>{t.isMounted=!0})),be((()=>{t.isUnmounting=!0})),t}const ft=[Function,Array],pt={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},gt=t=>{const e=t.subTree;return e.component?gt(e.component):e},mt={name:"BaseTransition",props:pt,setup(t,{slots:e}){const n=_i(),i=dt();return()=>{const o=e.default&&St(e.default(),!0);if(!o||!o.length)return;const s=vt(o),a=(0,r.ux)(t),{mode:c}=a;if(i.isLeaving)return wt(s);const u=Et(s);if(!u)return wt(s);let l=_t(u,a,i,n,(t=>l=t));u.type!==jr&&Tt(u,l);const h=n.subTree,d=h&&Et(h);if(d&&d.type!==jr&&!Zr(u,d)&&gt(n).type!==jr){const t=_t(d,a,i,n);if(Tt(d,t),"out-in"===c&&u.type!==jr)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,8&n.job.flags||n.update(),delete t.afterLeave},wt(s);"in-out"===c&&u.type!==jr&&(t.delayLeave=(t,e,n)=>{const r=bt(i,d);r[String(d.key)]=d,t[lt]=()=>{e(),t[lt]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return s}}};function vt(t){let e=t[0];if(t.length>1){let n=!1;for(const r of t)if(r.type!==jr){0,e=r,n=!0;break}}return e}const yt=mt;function bt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _t(t,e,n,r,o){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:w}=e,E=String(t.key),T=bt(n,t),S=(t,e)=>{t&&b(t,r,9,e)},I=(t,e)=>{const n=e[1];S(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},C={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=v||u}e[lt]&&e[lt](!0);const i=T[E];i&&Zr(t,i)&&i.el[lt]&&i.el[lt](),S(r,[e])},enter(t){let e=l,r=h,i=d;if(!n.isMounted){if(!s)return;e=y||l,r=_||h,i=w||d}let o=!1;const a=t[ht]=e=>{o||(o=!0,S(e?i:r,[t]),C.delayedLeave&&C.delayedLeave(),t[ht]=void 0)};e?I(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e[ht]&&e[ht](!0),n.isUnmounting)return r();S(f,[e]);let o=!1;const s=e[lt]=n=>{o||(o=!0,r(),S(n?m:g,[e]),e[lt]=void 0,T[i]===t&&delete T[i])};T[i]=t,p?I(p,[e,s]):s()},clone(t){const i=_t(t,e,n,r,o);return o&&o(i),i}};return C}function wt(t){if(re(t))return t=ai(t),t.children=null,t}function Et(t){if(!re(t))return J(t.type)&&t.children?vt(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(16&e)return n[0];if(32&e&&(0,i.Tn)(n.default))return n.default()}}function Tt(t,e){6&t.shapeFlag&&t.component?(t.transition=e,Tt(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function St(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Fr?(128&s.patchFlag&&i++,r=r.concat(St(s.children,e,a))):(e||s.type!==jr)&&r.push(null!=a?ai(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function It(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function Ct(){const t=_i();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function At(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function kt(t){const e=_i(),n=(0,r.IJ)(null);if(e){const r=e.refs===i.MZ?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:t=>n.value=t})}else 0;const o=n;return o}function Ot(t,e,n,o,s=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>Ot(t,e&&((0,i.cy)(e)?e[r]:e),n,o,s)));if(te(o)&&!s)return;const a=4&o.shapeFlag?Ui(o.component):o.el,c=s?null:a,{i:u,r:l}=t;const h=e&&e.r,d=u.refs===i.MZ?u.refs={}:u.refs,f=u.setupState,p=(0,r.ux)(f),g=f===i.MZ?()=>!1:t=>(0,i.$3)(p,t);if(null!=h&&h!==l&&((0,i.Kg)(h)?(d[h]=null,g(h)&&(f[h]=null)):(0,r.i9)(h)&&(h.value=null)),(0,i.Tn)(l))y(l,u,12,[c,d]);else{const e=(0,i.Kg)(l),o=(0,r.i9)(l);if(e||o){const r=()=>{if(t.f){const n=e?g(l)?f[l]:d[l]:l.value;s?(0,i.cy)(n)&&(0,i.TF)(n,a):(0,i.cy)(n)?n.includes(a)||n.push(a):e?(d[l]=[a],g(l)&&(f[l]=d[l])):(l.value=[a],t.k&&(d[t.k]=l.value))}else e?(d[l]=c,g(l)&&(f[l]=c)):o&&(l.value=c,t.k&&(d[t.k]=c))};c?(r.id=-1,qn(r,n)):r()}else 0}}let xt=!1;const Dt=()=>{xt||(console.error("Hydration completed but contains mismatches."),xt=!0)},Rt=t=>t.namespaceURI.includes("svg")&&"foreignObject"!==t.tagName,Nt=t=>t.namespaceURI.includes("MathML"),Pt=t=>{if(1===t.nodeType)return Rt(t)?"svg":Nt(t)?"mathml":void 0},Lt=t=>8===t.nodeType;function Mt(t){const{mt:e,p:n,o:{patchProp:o,createText:s,nextSibling:a,parentNode:c,remove:l,insert:h,createComment:d}}=t,f=(t,e)=>{if(!e.hasChildNodes())return __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&u("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),n(null,t,e),L(),void(e._vnode=t);p(e.firstChild,t,null,null,null),L(),e._vnode=t},p=(n,r,i,o,l,d=!1)=>{d=d||!!r.dynamicChildren;const f=Lt(n)&&"["===n.data,E=()=>y(n,r,i,o,l,f),{type:T,ref:S,shapeFlag:I,patchFlag:C}=r;let A=n.nodeType;r.el=n,-2===C&&(d=!1,r.dynamicChildren=null);let k=null;switch(T){case Vr:3!==A?""===r.children?(h(r.el=s(""),c(n),n),k=n):k=E():(n.data!==r.children&&(__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&u("Hydration text mismatch in",n.parentNode,`\n  - rendered on server: ${JSON.stringify(n.data)}\n  - expected on client: ${JSON.stringify(r.children)}`),Dt(),n.data=r.children),k=a(n));break;case jr:w(n)?(k=a(n),_(r.el=n.content.firstChild,n,i)):k=8!==A||f?E():a(n);break;case Br:if(f&&(n=a(n),A=n.nodeType),1===A||3===A){k=n;const t=!r.children.length;for(let e=0;e<r.staticCount;e++)t&&(r.children+=1===k.nodeType?k.outerHTML:k.data),e===r.staticCount-1&&(r.anchor=k),k=a(k);return f?a(k):k}E();break;case Fr:k=f?v(n,r,i,o,l,d):E();break;default:if(1&I)k=1===A&&r.type.toLowerCase()===n.tagName.toLowerCase()||w(n)?g(n,r,i,o,l,d):E();else if(6&I){r.slotScopeIds=l;const t=c(n);if(k=f?b(n):Lt(n)&&"teleport start"===n.data?b(n,n.data,"teleport end"):a(n),e(r,t,null,i,o,Pt(t),d),te(r)){let e;f?(e=ii(Fr),e.anchor=k?k.previousSibling:t.lastChild):e=3===n.nodeType?ci(""):ii("div"),e.el=n,r.component.subTree=e}}else 64&I?k=8!==A?E():r.type.hydrate(n,r,i,o,l,d,t,m):128&I?k=r.type.hydrate(n,r,i,o,Pt(c(n)),l,d,t,p):__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&u("Invalid HostVNode type:",T,`(${typeof T})`)}return null!=S&&Ot(S,null,o,r),k},g=(t,e,n,s,a,c)=>{c=c||!!e.dynamicChildren;const{type:h,props:d,patchFlag:f,shapeFlag:p,dirs:g,transition:v}=e,y="input"===h||"option"===h;if(y||-1!==f){g&&Y(e,null,n,"created");let h,b=!1;if(w(t)){b=Jn(null,v)&&n&&n.vnode.props&&n.vnode.props.appear;const r=t.content.firstChild;b&&v.beforeEnter(r),_(r,t,n),e.el=t=r}if(16&p&&(!d||!d.innerHTML&&!d.textContent)){let r=m(t.firstChild,e,t,n,s,a,c),i=!1;while(r){zt(t,1)||(__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!i&&(u("Hydration children mismatch on",t,"\nServer rendered element contains more child nodes than client vdom."),i=!0),Dt());const e=r;r=r.nextSibling,l(e)}}else if(8&p){let n=e.children;"\n"!==n[0]||"PRE"!==t.tagName&&"TEXTAREA"!==t.tagName||(n=n.slice(1)),t.textContent!==n&&(zt(t,0)||(__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&u("Hydration text content mismatch on",t,`\n  - rendered on server: ${t.textContent}\n  - expected on client: ${e.children}`),Dt()),t.textContent=e.children)}if(d)if(__VUE_PROD_HYDRATION_MISMATCH_DETAILS__||y||!c||48&f){const r=t.tagName.includes("-");for(const s in d)!__VUE_PROD_HYDRATION_MISMATCH_DETAILS__||g&&g.some((t=>t.dir.created))||!Ut(t,s,d[s],e,n)||Dt(),(y&&(s.endsWith("value")||"indeterminate"===s)||(0,i.Mp)(s)&&!(0,i.SU)(s)||"."===s[0]||r)&&o(t,s,null,d[s],void 0,n)}else if(d.onClick)o(t,"onClick",null,d.onClick,void 0,n);else if(4&f&&(0,r.g8)(d.style))for(const t in d.style)d.style[t];(h=d&&d.onVnodeBeforeMount)&&gi(h,n,e),g&&Y(e,null,n,"beforeMount"),((h=d&&d.onVnodeMounted)||g||b)&&Lr((()=>{h&&gi(h,n,e),b&&v.enter(t),g&&Y(e,null,n,"mounted")}),s)}return t.nextSibling},m=(t,e,r,i,o,c,l)=>{l=l||!!e.dynamicChildren;const d=e.children,f=d.length;let g=!1;for(let m=0;m<f;m++){const e=l?d[m]:d[m]=hi(d[m]),v=e.type===Vr;t?(v&&!l&&m+1<f&&hi(d[m+1]).type===Vr&&(h(s(t.data.slice(e.children.length)),r,a(t)),t.data=e.children),t=p(t,e,i,o,c,l)):v&&!e.children?h(e.el=s(""),r):(zt(r,1)||(__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&!g&&(u("Hydration children mismatch on",r,"\nServer rendered element contains fewer child nodes than client vdom."),g=!0),Dt()),n(null,e,r,null,i,o,Pt(r),c))}return t},v=(t,e,n,r,i,o)=>{const{slotScopeIds:s}=e;s&&(i=i?i.concat(s):s);const u=c(t),l=m(a(t),e,u,n,r,i,o);return l&&Lt(l)&&"]"===l.data?a(e.anchor=l):(Dt(),h(e.anchor=d("]"),u,l),l)},y=(t,e,r,i,o,s)=>{if(zt(t.parentElement,1)||(__VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&u("Hydration node mismatch:\n- rendered on server:",t,3===t.nodeType?"(text)":Lt(t)&&"["===t.data?"(start of fragment)":"","\n- expected on client:",e.type),Dt()),e.el=null,s){const e=b(t);while(1){const n=a(t);if(!n||n===e)break;l(n)}}const h=a(t),d=c(t);return l(t),n(null,e,d,h,r,i,Pt(d),o),h},b=(t,e="[",n="]")=>{let r=0;while(t)if(t=a(t),t&&Lt(t)&&(t.data===e&&r++,t.data===n)){if(0===r)return a(t);r--}return t},_=(t,e,n)=>{const r=e.parentNode;r&&r.replaceChild(t,e);let i=n;while(i)i.vnode.el===e&&(i.vnode.el=i.subTree.el=t),i=i.parent},w=t=>1===t.nodeType&&"TEMPLATE"===t.tagName;return[f,p]}function Ut(t,e,n,r,o){let s,a,c,l;if("class"===e)c=t.getAttribute("class"),l=(0,i.C4)(n),Vt(Ft(c||""),Ft(l))||(s=2,a="class");else if("style"===e){c=t.getAttribute("style")||"",l=(0,i.Kg)(n)?n:(0,i.tl)((0,i.Tr)(n));const e=jt(c),u=jt(l);if(r.dirs)for(const{dir:t,value:n}of r.dirs)"show"!==t.name||n||u.set("display","none");o&&$t(o,r,u),Bt(e,u)||(s=3,a="style")}else(t instanceof SVGElement&&(0,i.z3)(e)||t instanceof HTMLElement&&((0,i.W0)(e)||(0,i.wQ)(e)))&&((0,i.W0)(e)?(c=t.hasAttribute(e),l=(0,i.Y2)(n)):null==n?(c=t.hasAttribute(e),l=!1):(c=t.hasAttribute(e)?t.getAttribute(e):"value"===e&&"TEXTAREA"===t.tagName&&t.value,l=!!(0,i.Vp)(n)&&String(n)),c!==l&&(s=4,a=e));if(null!=s&&!zt(t,s)){const e=t=>!1===t?"(not rendered)":`${a}="${t}"`,n=`Hydration ${Kt[s]} mismatch on`,r=`\n  - rendered on server: ${e(c)}\n  - expected on client: ${e(l)}\n  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.\n  You should fix the source of the mismatch.`;return u(n,t,r),!0}return!1}function Ft(t){return new Set(t.trim().split(/\s+/))}function Vt(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function jt(t){const e=new Map;for(const n of t.split(";")){let[t,r]=n.split(":");t=t.trim(),r=r&&r.trim(),t&&r&&e.set(t,r)}return e}function Bt(t,e){if(t.size!==e.size)return!1;for(const[n,r]of t)if(r!==e.get(n))return!1;return!0}function $t(t,e,n){const r=t.subTree;if(t.getCssVars&&(e===r||r&&r.type===Fr&&r.children.includes(e))){const e=t.getCssVars();for(const t in e)n.set(`--${(0,i.XW)(t,!1)}`,String(e[t]))}e===r&&t.parent&&$t(t.parent,t.vnode,n)}const Ht="data-allow-mismatch",Kt={[0]:"text",[1]:"children",[2]:"class",[3]:"style",[4]:"attribute"};function zt(t,e){if(0===e||1===e)while(t&&!t.hasAttribute(Ht))t=t.parentElement;const n=t&&t.getAttribute(Ht);if(null==n)return!1;if(""===n)return!0;{const t=n.split(",");return!(0!==e||!t.includes("children"))||n.split(",").includes(Kt[e])}}const qt=(0,i.We)().requestIdleCallback||(t=>setTimeout(t,1)),Wt=(0,i.We)().cancelIdleCallback||(t=>clearTimeout(t)),Gt=(t=1e4)=>e=>{const n=qt(e,{timeout:t});return()=>Wt(n)};function Qt(t){const{top:e,left:n,bottom:r,right:i}=t.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return(e>0&&e<o||r>0&&r<o)&&(n>0&&n<s||i>0&&i<s)}const Yt=t=>(e,n)=>{const r=new IntersectionObserver((t=>{for(const n of t)if(n.isIntersecting){r.disconnect(),e();break}}),t);return n((t=>{if(t instanceof Element)return Qt(t)?(e(),r.disconnect(),!1):void r.observe(t)})),()=>r.disconnect()},Xt=t=>e=>{if(t){const n=matchMedia(t);if(!n.matches)return n.addEventListener("change",e,{once:!0}),()=>n.removeEventListener("change",e);e()}},Jt=(t=[])=>(e,n)=>{(0,i.Kg)(t)&&(t=[t]);let r=!1;const o=t=>{r||(r=!0,s(),e(),t.target.dispatchEvent(new t.constructor(t.type,t)))},s=()=>{n((e=>{for(const n of t)e.removeEventListener(n,o)}))};return n((e=>{for(const n of t)e.addEventListener(n,o,{once:!0})})),s};function Zt(t,e){if(Lt(t)&&"["===t.data){let n=1,r=t.nextSibling;while(r){if(1===r.nodeType){const t=e(r);if(!1===t)break}else if(Lt(r))if("]"===r.data){if(0===--n)break}else"["===r.data&&n++;r=r.nextSibling}}else e(t)}const te=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;function ee(t){(0,i.Tn)(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:o,delay:s=200,hydrate:a,timeout:c,suspensible:u=!0,onError:l}=t;let h,d=null,f=0;const p=()=>(f++,d=null,g()),g=()=>{let t;return d||(t=d=e().catch((t=>{if(t=t instanceof Error?t:new Error(String(t)),l)return new Promise(((e,n)=>{const r=()=>e(p()),i=()=>n(t);l(t,r,i,f+1)}));throw t})).then((e=>t!==d&&d?d:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),h=e,e))))};return It({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(t,e,n){const r=a?()=>{const r=a(n,(e=>Zt(t,e)));r&&(e.bum||(e.bum=[])).push(r)}:n;h?r():g().then((()=>!e.isUnmounted&&r()))},get __asyncResolved(){return h},setup(){const t=bi;if(At(t),h)return()=>ne(h,t);const e=e=>{d=null,_(e,t,13,!o)};if(u&&t.suspense||ki)return g().then((e=>()=>ne(e,t))).catch((t=>(e(t),()=>o?ii(o,{error:t}):null)));const i=(0,r.KR)(!1),a=(0,r.KR)(),l=(0,r.KR)(!!s);return s&&setTimeout((()=>{l.value=!1}),s),null!=c&&setTimeout((()=>{if(!i.value&&!a.value){const t=new Error(`Async component timed out after ${c}ms.`);e(t),a.value=t}}),c),g().then((()=>{i.value=!0,t.parent&&re(t.parent.vnode)&&t.parent.update()})).catch((t=>{e(t),a.value=t})),()=>i.value&&h?ne(h,t):a.value&&o?ii(o,{error:a.value}):n&&!l.value?ii(n):void 0}})}function ne(t,e){const{ref:n,props:r,children:i,ce:o}=e.vnode,s=ii(t,r,i);return s.ref=n,s.ce=o,delete e.vnode.ce,s}const re=t=>t.type.__isKeepAlive,ie={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=_i(),r=n.ctx;if(!r.renderer)return()=>{const t=e.default&&e.default();return t&&1===t.length?t[0]:t};const o=new Map,s=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:h,o:{createElement:d}}}=r,f=d("div");function p(t){he(t),h(t,n,c,!0)}function g(t){o.forEach(((e,n)=>{const r=ji(e.type);r&&!t(r)&&m(n)}))}function m(t){const e=o.get(t);!e||a&&Zr(e,a)?a&&he(a):p(e),o.delete(t),s.delete(t)}r.activate=(t,e,n,r,o)=>{const s=t.component;l(t,e,n,0,c),u(s.vnode,t,e,n,s,c,r,t.slotScopeIds,o),qn((()=>{s.isDeactivated=!1,s.a&&(0,i.DY)(s.a);const e=t.props&&t.props.onVnodeMounted;e&&gi(e,s.parent,t)}),c)},r.deactivate=t=>{const e=t.component;nr(e.m),nr(e.a),l(t,f,null,1,c),qn((()=>{e.da&&(0,i.DY)(e.da);const n=t.props&&t.props.onVnodeUnmounted;n&&gi(n,e.parent,t),e.isDeactivated=!0}),c)},cr((()=>[t.include,t.exclude]),(([t,e])=>{t&&g((e=>se(t,e))),e&&g((t=>!se(e,t)))}),{flush:"post",deep:!0});let v=null;const y=()=>{null!=v&&(Sr(n.subTree.type)?qn((()=>{o.set(v,de(n.subTree))}),n.subTree.suspense):o.set(v,de(n.subTree)))};return me(y),ye(y),be((()=>{o.forEach((t=>{const{subTree:e,suspense:r}=n,i=de(e);if(t.type!==i.type||t.key!==i.key)p(t);else{he(i);const t=i.component.da;t&&qn(t,r)}}))})),()=>{if(v=null,!e.default)return a=null;const n=e.default(),r=n[0];if(n.length>1)return a=null,n;if(!Jr(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=de(r);if(i.type===jr)return a=null,i;const c=i.type,u=ji(te(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:h,max:d}=t;if(l&&(!u||!se(l,u))||h&&u&&se(h,u))return i.shapeFlag&=-257,a=i,r;const f=null==i.key?c:i.key,p=o.get(f);return i.el&&(i=ai(i),128&r.shapeFlag&&(r.ssContent=i)),v=f,p?(i.el=p.el,i.component=p.component,i.transition&&Tt(i,i.transition),i.shapeFlag|=512,s.delete(f),s.add(f)):(s.add(f),d&&s.size>parseInt(d,10)&&m(s.values().next().value)),i.shapeFlag|=256,a=i,Sr(r.type)?r:i}}},oe=ie;function se(t,e){return(0,i.cy)(t)?t.some((t=>se(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function ae(t,e){ue(t,"a",e)}function ce(t,e){ue(t,"da",e)}function ue(t,e,n=bi){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(fe(e,r,n),n){let t=n.parent;while(t&&t.parent)re(t.parent.vnode)&&le(r,e,n,t),t=t.parent}}function le(t,e,n,r){const o=fe(e,t,r,!0);_e((()=>{(0,i.TF)(r[e],o)}),n)}function he(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function de(t){return 128&t.shapeFlag?t.ssContent:t}function fe(t,e,n=bi,i=!1){if(n){const o=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const o=Ti(n),s=b(e,n,t,i);return o(),(0,r.bl)(),s});return i?o.unshift(s):o.push(s),s}}const pe=t=>(e,n=bi)=>{ki&&"sp"!==t||fe(t,((...t)=>e(...t)),n)},ge=pe("bm"),me=pe("m"),ve=pe("bu"),ye=pe("u"),be=pe("bum"),_e=pe("um"),we=pe("sp"),Ee=pe("rtg"),Te=pe("rtc");function Se(t,e=bi){fe("ec",t,e)}const Ie="components",Ce="directives";function Ae(t,e){return De(Ie,t,!0,e)||t}const ke=Symbol.for("v-ndc");function Oe(t){return(0,i.Kg)(t)?De(Ie,t,!1)||t:t||ke}function xe(t){return De(Ce,t)}function De(t,e,n=!0,r=!1){const o=$||bi;if(o){const n=o.type;if(t===Ie){const t=ji(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const s=Re(o[t]||n[t],e)||Re(o.appContext[t],e);return!s&&r?n:s}}function Re(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function Ne(t,e,n,o){let s;const a=n&&n[o],c=(0,i.cy)(t);if(c||(0,i.Kg)(t)){const n=c&&(0,r.g8)(t);let i=!1;n&&(i=!(0,r.fE)(t),t=(0,r.qA)(t)),s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(i?(0,r.lJ)(t[o]):t[o],o,void 0,a&&a[o])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,a&&a[r])}}else s=[];return n&&(n[o]=s),s}function Pe(t,e){for(let n=0;n<e.length;n++){const r=e[n];if((0,i.cy)(r))for(let e=0;e<r.length;e++)t[r[e].name]=r[e].fn;else r&&(t[r.name]=r.key?(...t)=>{const e=r.fn(...t);return e&&(e.key=r.key),e}:r.fn)}return t}function Le(t,e,n={},r,o){if($.ce||$.parent&&te($.parent)&&$.parent.ce)return"default"!==e&&(n.name=e),Kr(),Xr(Fr,null,[ii("slot",n,r&&r())],64);let s=t[e];s&&s._c&&(s._d=!1),Kr();const a=s&&Me(s(n)),c=n.key||a&&a.key,u=Xr(Fr,{key:(c&&!(0,i.Bm)(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&1===t._?64:-2);return!o&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),s&&s._c&&(s._d=!0),u}function Me(t){return t.some((t=>!Jr(t)||t.type!==jr&&!(t.type===Fr&&!Me(t.children))))?t:null}function Ue(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:(0,i.rU)(r)]=t[r];return n}const Fe=t=>t?Ii(t)?Ui(t):Fe(t.parent):null,Ve=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fe(t.parent),$root:t=>Fe(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ln(t),$forceUpdate:t=>t.f||(t.f=()=>{D(t.update)}),$nextTick:t=>t.n||(t.n=O.bind(t.proxy)),$watch:t=>lr.bind(t)}),je=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Be={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return o[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(je(o,e))return c[e]=1,o[e];if(s!==i.MZ&&(0,i.$3)(s,e))return c[e]=2,s[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];on&&(c[e]=0)}}const d=Ve[e];let f,p;return d?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;return je(o,e)?(o[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||je(e,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Ve,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const $e=(0,i.X$)({},Be,{get(t,e){if(e!==Symbol.unscopables)return Be.get(t,e,t)},has(t,e){const n="_"!==e[0]&&!(0,i.BH)(e);return n}});function He(){return null}function Ke(){return null}function ze(t){0}function qe(t){0}function We(){return null}function Ge(){0}function Qe(t,e){return null}function Ye(){return Je().slots}function Xe(){return Je().attrs}function Je(){const t=_i();return t.setupContext||(t.setupContext=Mi(t))}function Ze(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}function tn(t,e){const n=Ze(t);for(const r in e){if(r.startsWith("__skip"))continue;let t=n[r];t?(0,i.cy)(t)||(0,i.Tn)(t)?t=n[r]={type:t,default:e[r]}:t.default=e[r]:null===t&&(t=n[r]={default:e[r]}),t&&e[`__skip_${r}`]&&(t.skipFactory=!0)}return n}function en(t,e){return t&&e?(0,i.cy)(t)&&(0,i.cy)(e)?t.concat(e):(0,i.X$)({},Ze(t),Ze(e)):t||e}function nn(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function rn(t){const e=_i();let n=t();return Si(),(0,i.yL)(n)&&(n=n.catch((t=>{throw Ti(e),t}))),[n,()=>Ti(e)]}let on=!0;function sn(t){const e=ln(t),n=t.proxy,o=t.ctx;on=!1,e.beforeCreate&&cn(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:O,components:x,directives:D,filters:R}=e,N=null;if(h&&an(h,o,N),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(o[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(on=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Hi({get:e,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)un(u[r],o,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Sn(e,t[e])}))}function P(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&cn(d,t,"c"),P(ge,f),P(me,p),P(ve,g),P(ye,m),P(ae,v),P(ce,y),P(Se,C),P(Te,S),P(Ee,I),P(be,_),P(_e,E),P(we,A),(0,i.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=O&&(t.inheritAttrs=O),x&&(t.components=x),D&&(t.directives=D),A&&At(t)}function an(t,e,n=i.tE){(0,i.cy)(t)&&(t=gn(t));for(const o in t){const n=t[o];let s;s=(0,i.Gv)(n)?"default"in n?In(n.from||o,n.default,!0):In(n.from||o):In(n),(0,r.i9)(s)?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function cn(t,e,n){b((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function un(t,e,n,r){let o=r.includes(".")?hr(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&cr(o,n)}else if((0,i.Tn)(t))cr(o,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>un(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&cr(o,r,t)}else 0}function ln(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,c=s.get(e);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((t=>hn(u,t,a,!0))),hn(u,e,a)):u=e,(0,i.Gv)(e)&&s.set(e,u),u}function hn(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&hn(t,o,n,!0),i&&i.forEach((e=>hn(t,e,n,!0)));for(const s in e)if(r&&"expose"===s);else{const r=dn[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const dn={data:fn,props:yn,emits:yn,methods:vn,computed:vn,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:vn,directives:vn,watch:bn,provide:fn,inject:pn};function fn(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function pn(t,e){return vn(gn(t),gn(e))}function gn(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mn(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function yn(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),Ze(t),Ze(null!=e?e:{})):e}function bn(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=mn(t[r],e[r]);return n}function _n(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wn=0;function En(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=_n(),s=new WeakSet,a=[];let c=!1;const u=o.app={_uid:wn++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Gi,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&(0,i.Tn)(t.install)?(s.add(t),t.install(u,...e)):(0,i.Tn)(t)&&(s.add(t),t(u,...e))),u},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),u},component(t,e){return e?(o.components[t]=e,u):o.components[t]},directive(t,e){return e?(o.directives[t]=e,u):o.directives[t]},mount(i,s,a){if(!c){0;const l=u._ceVNode||ii(n,r);return l.appContext=o,!0===a?a="svg":!1===a&&(a=void 0),s&&e?e(l,i):t(l,i,a),c=!0,u._container=i,i.__vue_app__=u,Ui(l.component)}},onUnmount(t){a.push(t)},unmount(){c&&(b(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(t,e){return o.provides[t]=e,u},runWithContext(t){const e=Tn;Tn=u;try{return t()}finally{Tn=e}}};return u}}let Tn=null;function Sn(t,e){if(bi){let n=bi.provides;const r=bi.parent&&bi.parent.provides;r===n&&(n=bi.provides=Object.create(r)),n[t]=e}else 0}function In(t,e,n=!1){const r=bi||$;if(r||Tn){const o=Tn?Tn._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}function Cn(){return!!(bi||$||Tn)}const An={},kn=()=>Object.create(An),On=t=>Object.getPrototypeOf(t)===An;function xn(t,e,n,i=!1){const o={},s=kn();t.propsDefaults=Object.create(null),Rn(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Gc)(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function Dn(t,e,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(s),[l]=t.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;Rn(t,e,s,a)&&(h=!0);for(const o in u)e&&((0,i.$3)(e,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(e,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Nn(l,u,o,void 0,t,!0)):delete s[o]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(mr(t.emitsOptions,o))continue;const c=e[o];if(l)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const e=(0,i.PT)(o);s[e]=Nn(l,u,e,c,t,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Rn(t,e,n,o){const[s,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;s&&(0,i.$3)(s,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:mr(t.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Nn(s,e,c,o[c],t,!(0,i.$3)(o,c))}}return u}function Nn(t,e,n,r,o,s){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=Ti(o);r=i[n]=t.call(null,e),s()}}else r=t;o.ce&&o.ce._setProp(n,r)}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Pn=new WeakMap;function Ln(t,e,n=!1){const r=n?Pn:e.propsCache,o=r.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=Ln(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(s))for(let h=0;h<s.length;h++){0;const t=(0,i.PT)(s[h]);Mn(t)&&(a[t]=i.MZ)}else if(s){0;for(const t in s){const e=(0,i.PT)(t);if(Mn(e)){const n=s[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),o=r.type;let u=!1,l=!0;if((0,i.cy)(o))for(let t=0;t<o.length;++t){const e=o[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(o)&&"Boolean"===o.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function Mn(t){return"$"!==t[0]&&!(0,i.SU)(t)}const Un=t=>"_"===t[0]||"$stable"===t,Fn=t=>(0,i.cy)(t)?t.map(hi):[hi(t)],Vn=(t,e,n)=>{if(e._n)return e;const r=G(((...t)=>Fn(e(...t))),n);return r._c=!1,r},jn=(t,e,n)=>{const r=t._ctx;for(const o in t){if(Un(o))continue;const n=t[o];if((0,i.Tn)(n))e[o]=Vn(o,n,r);else if(null!=n){0;const t=Fn(n);e[o]=()=>t}}},Bn=(t,e)=>{const n=Fn(e);t.slots.default=()=>n},$n=(t,e,n)=>{for(const r in e)(n||"_"!==r)&&(t[r]=e[r])},Hn=(t,e,n)=>{const r=t.slots=kn();if(32&t.vnode.shapeFlag){const t=e._;t?($n(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):jn(e,r)}else e&&Bn(t,e)},Kn=(t,e,n)=>{const{vnode:r,slots:o}=t;let s=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:$n(o,e,n):(s=!e.$stable,jn(e,o)),a=e}else e&&(Bn(t,e),a={default:1});if(s)for(const i in o)Un(i)||null!=a[i]||delete o[i]};function zn(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const qn=Lr;function Wn(t){return Qn(t)}function Gn(t){return Qn(t,Mt)}function Qn(t,e){zn();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,o=null,s=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Zr(t,e)&&(r=G(t),H(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Vr:y(t,e,n,r);break;case jr:b(t,e,n,r);break;case Br:null==t&&_(e,n,r,s);break;case Fr:x(t,e,n,r,i,o,s,a,c);break;default:1&h?T(t,e,n,r,i,o,s,a,c):6&h?R(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,Z)}null!=l&&i&&Ot(l,t&&t.ref,o,e||t,!e)},y=(t,e,n,r)=>{if(null==t)o(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?o(e.el=l(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},w=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),o(t,n,r),t=i;o(e,n,r)},E=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},T=(t,e,n,r,i,o,s,a,c)=>{"svg"===e.type?s="svg":"math"===e.type&&(s="mathml"),null==t?S(e,n,r,i,o,s,a,c):A(t,e,i,o,s,a,c)},S=(t,e,n,r,s,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=t;if(f=t.el=c(t.type,u,g&&g.is,g),8&m?d(f,t.children):16&m&&C(t.children,f,null,r,s,Yn(t,u),l,h),y&&Y(t,null,r,"created"),I(f,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(f,t,null,g[t],u,r);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&gi(p,r,t)}y&&Y(t,null,r,"beforeMount");const b=Jn(s,v);b&&v.beforeEnter(f),o(f,e,n),((p=g&&g.onVnodeMounted)||b||y)&&qn((()=>{p&&gi(p,r,t),b&&v.enter(f),y&&Y(t,null,r,"mounted")}),s)},I=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let o=0;o<r.length;o++)g(t,r[o]);if(i){let n=i.subTree;if(e===n||Sr(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;I(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},C=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?di(t[u]):hi(t[u]);v(null,c,e,n,r,i,o,s,a)}},A=(t,e,n,r,o,s,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&Xn(n,!1),(m=g.onVnodeBeforeUpdate)&&gi(m,n,e,t),f&&Y(e,t,n,"beforeUpdate"),n&&Xn(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(u,""),h?k(t.dynamicChildren,h,u,n,r,Yn(e,o),s):c||V(t,e,u,null,n,r,Yn(e,o),s,!1),l>0){if(16&l)O(u,p,g,n,o);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,o),4&l&&a(u,"style",p.style,g.style,o),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],s=g[r];s===i&&"value"!==r||a(u,r,i,s,o,n)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||O(u,p,g,n,o);((m=g.onVnodeUpdated)||f)&&qn((()=>{m&&gi(m,n,e,t),f&&Y(e,t,n,"updated")}),r)},k=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Fr||!Zr(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},O=(t,e,n,r,o)=>{if(e!==n){if(e!==i.MZ)for(const s in e)(0,i.SU)(s)||s in n||a(t,s,e[s],null,o,r);for(const s in n){if((0,i.SU)(s))continue;const c=n[s],u=e[s];c!==u&&"value"!==s&&a(t,s,u,c,o,r)}"value"in n&&a(t,"value",e.value,n.value,o)}},x=(t,e,n,r,i,s,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(o(h,n,r),o(d,n,r),C(e.children||[],n,d,i,s,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(k(t.dynamicChildren,p,n,i,s,a,c),(null!=e.key||i&&e===i.subTree)&&Zn(t,e,!0)):V(t,e,n,d,i,s,a,c,l)},R=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):N(e,n,r,i,o,s,c):M(t,e,c)},N=(t,e,n,r,i,o,s)=>{const a=t.component=yi(t,r,i);if(re(t)&&(a.ctx.renderer=Z),Oi(a,!1,s),a.asyncDep){if(i&&i.registerDep(a,U,s),!t.el){const t=a.subTree=ii(jr);b(null,t,e,n)}}else U(a,t,e,n,i,o,s)},M=(t,e,n)=>{const r=e.component=t.component;if(wr(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,o,s,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:o,vnode:l}=t;{const n=er(t);if(n)return e&&(e.el=l.el,F(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||u()}))}let h,d=e;0,Xn(t,!1),e?(e.el=l.el,F(t,e,c)):e=l,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&gi(h,o,e,l),Xn(t,!0);const p=vr(t);0;const g=t.subTree;t.subTree=p,v(g,p,f(g.el),G(g),t,s,a),e.el=p.el,null===d&&Tr(t,p.el),r&&qn(r,s),(h=e.props&&e.props.onVnodeUpdated)&&qn((()=>gi(h,o,e,l)),s)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d,root:f,type:p}=t,g=te(e);if(Xn(t,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&gi(r,d,e),Xn(t,!0),c&&et){const e=()=>{t.subTree=vr(t),et(c,t.subTree,t,s,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{f.ce&&f.ce._injectChildStyle(p);const r=t.subTree=vr(t);0,v(null,r,n,o,t,s,a),e.el=r.el}if(h&&qn(h,s),!g&&(r=u&&u.onVnodeMounted)){const t=e;qn((()=>gi(r,d,t)),s)}(256&e.shapeFlag||d&&te(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&qn(t.a,s),t.isMounted=!0,e=n=o=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),d=t.job=l.runIfDirty.bind(l);d.i=t,d.id=t.uid,l.scheduler=()=>D(d),Xn(t,!0),h()},F=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Dn(t,e.props,i,n),Kn(t,e.children,n),(0,r.C4)(),P(t),(0,r.bl)()},V=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void B(u,h,n,r,i,o,s,a,c);if(256&f)return void j(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&W(u,i,o),h!==u&&d(n,h)):16&l?16&p?B(u,h,n,r,i,o,s,a,c):W(u,i,o,!0):(8&l&&d(n,""),16&p&&C(h,n,r,i,o,s,a,c))},j=(t,e,n,r,o,s,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?di(e[f]):hi(e[f]);v(t[f],r,n,null,o,s,a,c,u)}l>h?W(t,o,s,!0,!1,d):C(e,n,r,o,s,a,c,u,d)},B=(t,e,n,r,o,s,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?di(e[l]):hi(e[l]);if(!Zr(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?di(e[f]):hi(e[f]);if(!Zr(r,i))break;v(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)v(null,e[l]=u?di(e[l]):hi(e[l]),n,i,o,s,a,c,u),l++}}else if(l>f)while(l<=d)H(t[l],o,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?di(e[l]):hi(e[l]);null!=t.key&&m.set(t.key,l)}let y,b=0;const _=f-g+1;let w=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(b>=_){H(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Zr(r,e[y])){i=y;break}void 0===i?H(r,o,s,!0):(T[i-g]=l+1,i>=E?E=i:w=!0,v(r,e[i],n,null,o,s,a,c,u),b++)}const S=w?tr(T):i.Oj;for(y=S.length-1,l=_-1;l>=0;l--){const t=g+l,i=e[t],d=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,d,o,s,a,c,u):w&&(y<0||l!==S[y]?$(i,n,d,2):y--)}}},$=(t,e,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void $(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,Z);if(a===Fr){o(s,e,n);for(let t=0;t<u.length;t++)$(u[t],e,n,r);return void o(t.anchor,e,n)}if(a===Br)return void w(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),o(s,e,n),qn((()=>c.enter(s)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>o(s,e,n),u=()=>{t(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,e,n)},H=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d,cacheIndex:f}=t;if(-2===h&&(i=!1),null!=a&&Ot(a,null,n,t,!0),null!=f&&(e.renderCache[f]=void 0),256&l)return void e.ctx.deactivate(t);const p=1&l&&d,g=!te(t);let m;if(g&&(m=s&&s.onVnodeBeforeUnmount)&&gi(m,e,t),6&l)q(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);p&&Y(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,Z,r):u&&!u.hasOnce&&(o!==Fr||h>0&&64&h)?W(u,e,n,!1,!0):(o===Fr&&384&h||!i&&16&l)&&W(c,e,n),r&&K(t)}(g&&(m=s&&s.onVnodeUnmounted)||p)&&qn((()=>{m&&gi(m,e,t),p&&Y(t,null,e,"unmounted")}),n)},K=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Fr)return void z(n,r);if(e===Br)return void E(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},z=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},q=(t,e,n)=>{const{bum:r,scope:o,job:s,subTree:a,um:c,m:u,a:l}=t;nr(u),nr(l),r&&(0,i.DY)(r),o.stop(),s&&(s.flags|=8,H(a,t,e,n)),c&&qn(c,e),qn((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},W=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)H(t[s],e,n,r,i)},G=t=>{if(6&t.shapeFlag)return G(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[X];return n?p(n):e};let Q=!1;const J=(t,e,n)=>{null==t?e._vnode&&H(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),e._vnode=t,Q||(Q=!0,P(),L(),Q=!1)},Z={p:v,um:H,m:$,r:K,mt:N,mc:C,pc:V,pbc:k,n:G,o:t};let tt,et;return e&&([tt,et]=e(Z)),{render:J,hydrate:tt,createApp:En(J,tt)}}function Yn({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Xn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jn(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zn(t,e,n=!1){const r=t.children,o=e.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const t=r[i];let e=o[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[i]=di(o[i]),e.el=t.el),n||-2===e.patchFlag||Zn(t,e)),e.type===Vr&&(e.el=t.el)}}function tr(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}function er(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:er(e)}function nr(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const rr=Symbol.for("v-scx"),ir=()=>{{const t=In(rr);return t}};function or(t,e){return ur(t,null,e)}function sr(t,e){return ur(t,null,{flush:"post"})}function ar(t,e){return ur(t,null,{flush:"sync"})}function cr(t,e,n){return ur(t,e,n)}function ur(t,e,n=i.MZ){const{immediate:o,deep:s,flush:a,once:c}=n;const u=(0,i.X$)({},n);const l=e&&o||!e&&"post"!==a;let h;if(ki)if("sync"===a){const t=ir();h=t.__watcherHandles||(t.__watcherHandles=[])}else if(!l){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=bi;u.call=(t,e,n)=>b(t,d,e,n);let f=!1;"post"===a?u.scheduler=t=>{qn(t,d&&d.suspense)}:"sync"!==a&&(f=!0,u.scheduler=(t,e)=>{e?t():D(t)}),u.augmentJob=t=>{e&&(t.flags|=4),f&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const p=(0,r.wB)(t,e,u);return ki&&(h?h.push(p):l&&p()),p}function lr(t,e,n){const r=this.proxy,o=(0,i.Kg)(t)?t.includes(".")?hr(r,t):()=>r[t]:t.bind(r,r);let s;(0,i.Tn)(e)?s=e:(s=e.handler,n=e);const a=Ti(this),c=ur(o,s.bind(r),n);return a(),c}function hr(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function dr(t,e,n=i.MZ){const o=_i();const s=(0,i.PT)(e);const a=(0,i.Tg)(e),c=fr(t,s),u=(0,r.rY)(((r,c)=>{let u,l,h=i.MZ;return ar((()=>{const e=t[s];(0,i.$H)(u,e)&&(u=e,c())})),{get(){return r(),n.get?n.get(u):u},set(t){const r=n.set?n.set(t):t;if(!(0,i.$H)(r,u)&&(h===i.MZ||!(0,i.$H)(t,h)))return;const d=o.vnode.props;d&&(e in d||s in d||a in d)&&(`onUpdate:${e}`in d||`onUpdate:${s}`in d||`onUpdate:${a}`in d)||(u=t,c()),o.emit(`update:${e}`,r),(0,i.$H)(t,r)&&(0,i.$H)(t,h)&&!(0,i.$H)(r,l)&&c(),h=t,l=r}}}));return u[Symbol.iterator]=()=>{let t=0;return{next(){return t<2?{value:t++?c||i.MZ:u,done:!1}:{done:!0}}}},u}const fr=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function pr(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let o=n;const s=e.startsWith("update:"),a=s&&fr(r,e.slice(7));let c;a&&(a.trim&&(o=n.map((t=>(0,i.Kg)(t)?t.trim():t))),a.number&&(o=n.map(i.bB)));let u=r[c=(0,i.rU)(e)]||r[c=(0,i.rU)((0,i.PT)(e))];!u&&s&&(u=r[c=(0,i.rU)((0,i.Tg)(e))]),u&&b(u,t,6,o);const l=r[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,b(l,t,6,o)}}function gr(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=gr(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((t=>a[t]=null)):(0,i.X$)(a,s),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function mr(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function vr(t){const{type:e,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:a,attrs:c,emit:u,render:l,renderCache:h,props:d,data:f,setupState:p,ctx:g,inheritAttrs:m}=t,v=K(t);let y,b;try{if(4&n.shapeFlag){const t=o||r,e=t;y=hi(l.call(e,t,h,d,p,f,g)),b=c}else{const t=e;0,y=hi(t.length>1?t(d,{attrs:c,slots:a,emit:u}):t(d,null)),b=e.props?c:br(c)}}catch(E){$r.length=0,_(E,t,1),y=ii(jr)}let w=y;if(b&&!1!==m){const t=Object.keys(b),{shapeFlag:e}=w;t.length&&7&e&&(s&&t.some(i.CP)&&(b=_r(b,s)),w=ai(w,b,!1,!0))}return n.dirs&&(w=ai(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Tt(w,n.transition),y=w,K(v),y}function yr(t,e=!0){let n;for(let r=0;r<t.length;r++){const e=t[r];if(!Jr(e))return;if(e.type!==jr||"v-if"===e.children){if(n)return;n=e}}return n}const br=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},_r=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function wr(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Er(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Er(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!mr(u,n))return!0}}return!1}function Er(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!mr(n,o))return!0}return!1}function Tr({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const Sr=t=>t.__isSuspense;let Ir=0;const Cr={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,o,s,a,c,u){if(null==t)Or(e,n,r,i,o,s,a,c,u);else{if(o&&o.deps>0&&!t.suspense.isInFallback)return e.suspense=t.suspense,e.suspense.vnode=e,void(e.el=t.el);xr(t,e,n,r,i,s,a,c,u)}},hydrate:Rr,normalize:Nr},Ar=Cr;function kr(t,e){const n=t.props&&t.props[e];(0,i.Tn)(n)&&n()}function Or(t,e,n,r,i,o,s,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=t.suspense=Dr(t,i,r,e,h,n,o,s,a,c);u(null,d.pendingBranch=t.ssContent,h,null,r,d,o,s),d.deps>0?(kr(t,"onPending"),kr(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,o,s),Mr(d,t.ssFallback)):d.resolve(!1,!0)}function xr(t,e,n,r,i,o,s,a,{p:c,um:u,o:{createElement:l}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:m,isHydrating:v}=h;if(g)h.pendingBranch=d,Zr(d,g)?(c(g,d,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0?h.resolve():m&&(v||(c(p,f,n,r,i,null,o,s,a),Mr(h,f)))):(h.pendingId=Ir++,v?(h.isHydrating=!1,h.activeBranch=g):u(g,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),m?(c(null,d,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0?h.resolve():(c(p,f,n,r,i,null,o,s,a),Mr(h,f))):p&&Zr(d,p)?(c(p,d,n,r,i,h,o,s,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0&&h.resolve()));else if(p&&Zr(d,p))c(p,d,n,r,i,h,o,s,a),Mr(h,d);else if(kr(e,"onPending"),h.pendingBranch=d,512&d.shapeFlag?h.pendingId=d.component.suspenseId:h.pendingId=Ir++,c(null,d,h.hiddenContainer,null,i,h,o,s,a),h.deps<=0)h.resolve();else{const{timeout:t,pendingId:e}=h;t>0?setTimeout((()=>{h.pendingId===e&&h.fallback(f)}),t):0===t&&h.fallback(f)}}function Dr(t,e,n,r,o,s,a,c,u,l,h=!1){const{p:d,m:f,um:p,n:g,o:{parentNode:m,remove:v}}=l;let y;const b=Ur(t);b&&e&&e.pendingBranch&&(y=e.pendingId,e.deps++);const w=t.props?(0,i.Ro)(t.props.timeout):void 0;const E=s,T={vnode:t,parent:e,parentComponent:n,namespace:a,container:r,hiddenContainer:o,deps:0,pendingId:Ir++,timeout:"number"===typeof w?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(t=!1,n=!1){const{vnode:r,activeBranch:i,pendingBranch:o,pendingId:a,effects:c,parentComponent:u,container:l}=T;let h=!1;T.isHydrating?T.isHydrating=!1:t||(h=i&&o.transition&&"out-in"===o.transition.mode,h&&(i.transition.afterLeave=()=>{a===T.pendingId&&(f(o,l,s===E?g(i):s,0),N(c))}),i&&(m(i.el)===l&&(s=g(i)),p(i,u,T,!0)),h||f(o,l,s,0)),Mr(T,o),T.pendingBranch=null,T.isInFallback=!1;let d=T.parent,v=!1;while(d){if(d.pendingBranch){d.effects.push(...c),v=!0;break}d=d.parent}v||h||N(c),T.effects=[],b&&e&&e.pendingBranch&&y===e.pendingId&&(e.deps--,0!==e.deps||n||e.resolve()),kr(r,"onResolve")},fallback(t){if(!T.pendingBranch)return;const{vnode:e,activeBranch:n,parentComponent:r,container:i,namespace:o}=T;kr(e,"onFallback");const s=g(n),a=()=>{T.isInFallback&&(d(null,t,i,s,r,null,o,c,u),Mr(T,t))},l=t.transition&&"out-in"===t.transition.mode;l&&(n.transition.afterLeave=a),T.isInFallback=!0,p(n,r,null,!0),l||a()},move(t,e,n){T.activeBranch&&f(T.activeBranch,t,e,n),T.container=t},next(){return T.activeBranch&&g(T.activeBranch)},registerDep(t,e,n){const r=!!T.pendingBranch;r&&T.deps++;const i=t.vnode.el;t.asyncDep.catch((e=>{_(e,t,0)})).then((o=>{if(t.isUnmounted||T.isUnmounted||T.pendingId!==t.suspenseId)return;t.asyncResolved=!0;const{vnode:s}=t;Di(t,o,!1),i&&(s.el=i);const c=!i&&t.subTree.el;e(t,s,m(i||t.subTree.el),i?null:g(t.subTree),T,a,n),c&&v(c),Tr(t,s.el),r&&0===--T.deps&&T.resolve()}))},unmount(t,e){T.isUnmounted=!0,T.activeBranch&&p(T.activeBranch,n,t,e),T.pendingBranch&&p(T.pendingBranch,n,t,e)}};return T}function Rr(t,e,n,r,i,o,s,a,c){const u=e.suspense=Dr(e,r,n,t.parentNode,document.createElement("div"),null,i,o,s,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,o,s);return 0===u.deps&&u.resolve(!1,!0),l}function Nr(t){const{shapeFlag:e,children:n}=t,r=32&e;t.ssContent=Pr(r?n.default:n),t.ssFallback=r?Pr(n.fallback):ii(jr)}function Pr(t){let e;if((0,i.Tn)(t)){const n=Wr&&t._c;n&&(t._d=!1,Kr()),t=t(),n&&(t._d=!0,e=Hr,zr())}if((0,i.cy)(t)){const e=yr(t);0,t=e}return t=hi(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter((e=>e!==t))),t}function Lr(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):N(t)}function Mr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let i=e.el;while(!i&&e.component)e=e.component.subTree,i=e.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,Tr(r,i))}function Ur(t){const e=t.props&&t.props.suspensible;return null!=e&&!1!==e}const Fr=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),jr=Symbol.for("v-cmt"),Br=Symbol.for("v-stc"),$r=[];let Hr=null;function Kr(t=!1){$r.push(Hr=t?null:[])}function zr(){$r.pop(),Hr=$r[$r.length-1]||null}let qr,Wr=1;function Gr(t){Wr+=t,t<0&&Hr&&(Hr.hasOnce=!0)}function Qr(t){return t.dynamicChildren=Wr>0?Hr||i.Oj:null,zr(),Wr>0&&Hr&&Hr.push(t),t}function Yr(t,e,n,r,i,o){return Qr(ri(t,e,n,r,i,o,!0))}function Xr(t,e,n,r,i){return Qr(ii(t,e,n,r,i,!0))}function Jr(t){return!!t&&!0===t.__v_isVNode}function Zr(t,e){return t.type===e.type&&t.key===e.key}function ti(t){qr=t}const ei=({key:t})=>null!=t?t:null,ni=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:$,r:t,k:e,f:!!n}:t:null);function ri(t,e=null,n=null,r=0,o=null,s=(t===Fr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ei(e),ref:e&&ni(e),scopeId:H,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:$};return c?(fi(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Wr>0&&!a&&Hr&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Hr.push(u),u}const ii=oi;function oi(t,e=null,n=null,o=0,s=null,a=!1){if(t&&t!==ke||(t=jr),Jr(t)){const r=ai(t,e,!0);return n&&fi(r,n),Wr>0&&!a&&Hr&&(6&r.shapeFlag?Hr[Hr.indexOf(t)]=r:Hr.push(r)),r.patchFlag=-2,r}if($i(t)&&(t=t.__vccOpts),e){e=si(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:Sr(t)?128:J(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return ri(t,e,n,o,s,c,a,!0)}function si(t){return t?(0,r.ju)(t)||On(t)?(0,i.X$)({},t):t:null}function ai(t,e,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:u}=t,l=e?pi(o||{},e):o,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ei(l),ref:e&&e.ref?n&&s?(0,i.cy)(s)?s.concat(ni(e)):[s,ni(e)]:ni(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fr?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ai(t.ssContent),ssFallback:t.ssFallback&&ai(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Tt(h,u.clone(h)),h}function ci(t=" ",e=0){return ii(Vr,null,t,e)}function ui(t,e){const n=ii(Br,null,t);return n.staticCount=e,n}function li(t="",e=!1){return e?(Kr(),Xr(jr,null,t)):ii(jr,null,t)}function hi(t){return null==t||"boolean"===typeof t?ii(jr):(0,i.cy)(t)?ii(Fr,null,t.slice()):Jr(t)?di(t):ii(Vr,null,String(t))}function di(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:ai(t)}function fi(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),fi(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||On(e)?3===r&&$&&(1===$.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=$}}else(0,i.Tn)(e)?(e={default:e,_ctx:$},n=32):(e=String(e),64&r?(n=16,e=[ci(e)]):n=8);t.children=e,t.shapeFlag|=n}function pi(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],o=r[t];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(e[t]=n?[].concat(n,o):o)}else""!==t&&(e[t]=r[t])}return e}function gi(t,e,n,r=null){b(t,e,7,[n,r])}const mi=_n();let vi=0;function yi(t,e,n){const o=t.type,s=(e?e.appContext:t.appContext)||mi,a={uid:vi++,vnode:t,type:o,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ln(o,s),emitsOptions:gr(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=pr.bind(null,a),t.ce&&t.ce(a),a}let bi=null;const _i=()=>bi||$;let wi,Ei;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};wi=e("__VUE_INSTANCE_SETTERS__",(t=>bi=t)),Ei=e("__VUE_SSR_SETTERS__",(t=>ki=t))}const Ti=t=>{const e=bi;return wi(t),t.scope.on(),()=>{t.scope.off(),wi(e)}},Si=()=>{bi&&bi.scope.off(),wi(null)};function Ii(t){return 4&t.vnode.shapeFlag}let Ci,Ai,ki=!1;function Oi(t,e=!1,n=!1){e&&Ei(e);const{props:r,children:i}=t.vnode,o=Ii(t);xn(t,r,o,e),Hn(t,i,n);const s=o?xi(t,e):void 0;return e&&Ei(!1),s}function xi(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Be);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?Mi(t):null,s=Ti(t),a=y(o,t,0,[t.props,n]),c=(0,i.yL)(a);if((0,r.bl)(),s(),!c&&!t.sp||te(t)||At(t),c){if(a.then(Si,Si),e)return a.then((n=>{Di(t,n,e)})).catch((e=>{_(e,t,0)}));t.asyncDep=a}else Di(t,a,e)}else Pi(t,e)}function Di(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Pi(t,n)}function Ri(t){Ci=t,Ai=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,$e))}}const Ni=()=>!Ci;function Pi(t,e,n){const o=t.type;if(!t.render){if(!e&&Ci&&!o.render){const e=o.template||ln(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=Ci(e,c)}}t.render=o.render||i.tE,Ai&&Ai(t)}{const e=Ti(t);(0,r.C4)();try{sn(t)}finally{(0,r.bl)(),e()}}}const Li={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function Mi(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Li),slots:t.slots,emit:t.emit,expose:e}}function Ui(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ve?Ve[n](t):void 0},has(t,e){return e in t||e in Ve}})):t.proxy}const Fi=/(?:^|[-_])(\w)/g,Vi=t=>t.replace(Fi,(t=>t.toUpperCase())).replace(/[-_]/g,"");function ji(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Bi(t,e,n=!1){let r=ji(e);if(!r&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(r=t[1])}if(!r&&t&&t.parent){const n=t=>{for(const n in t)if(t[n]===e)return n};r=n(t.components||t.parent.type.components)||n(t.appContext.components)}return r?Vi(r):n?"App":"Anonymous"}function $i(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Hi=(t,e)=>{const n=(0,r.EW)(t,e,ki);return n};function Ki(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?Jr(e)?ii(t,null,[e]):ii(t,e):ii(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Jr(n)&&(n=[n]),ii(t,e,n))}function zi(){return void 0}function qi(t,e,n,r){const i=n[r];if(i&&Wi(i,t))return i;const o=e();return o.memo=t.slice(),o.cacheIndex=r,n[r]=o}function Wi(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if((0,i.$H)(n[r],e[r]))return!1;return Wr>0&&Hr&&Hr.push(t),!0}const Gi="3.5.12",Qi=i.tE,Yi=v,Xi=F,Ji=B,Zi={createComponentInstance:yi,setupComponent:Oi,renderComponentRoot:vr,setCurrentRenderingInstance:K,isVNode:Jr,normalizeVNode:hi,getComponentPublicInstance:Ui,ensureValidVNode:Me,pushWarningContext:s,popWarningContext:a},to=Zi,eo=null,no=null,ro=null},53751:function(t,e,n){"use strict";n.d(e,{$9:function(){return $},$V:function(){return r.$V},$u:function(){return r.$u},$y:function(){return r.$y},BA:function(){return r.BA},Bi:function(){return r.Bi},Bs:function(){return r.Bs},C4:function(){return r.C4},CE:function(){return r.CE},D:function(){return Et},D$:function(){return Jt},Df:function(){return r.Df},Dl:function(){return r.Dl},E:function(){return r.E},E3:function(){return r.E3},EW:function(){return r.EW},EY:function(){return r.EY},Ef:function(){return ce},F:function(){return Ot},FK:function(){return r.FK},Fv:function(){return r.Fv},Fw:function(){return r.Fw},GM:function(){return r.GM},Gc:function(){return r.Gc},Gt:function(){return r.Gt},Gw:function(){return r.Gw},Gy:function(){return r.Gy},H4:function(){return r.H4},HF:function(){return r.HF},Ht:function(){return r.Ht},IG:function(){return r.IG},IJ:function(){return r.IJ},Ib:function(){return fe},Ic:function(){return r.Ic},Im:function(){return r.Im},Jo:function(){return Ft},K9:function(){return r.K9},KC:function(){return r.KC},KR:function(){return r.KR},KT:function(){return _t},Kf:function(){return r.Kf},Kh:function(){return r.Kh},LJ:function(){return r.LJ},LM:function(){return r.LM},Lk:function(){return r.Lk},Lu:function(){return r.Lu},MZ:function(){return r.MZ},Mw:function(){return r.Mw},NP:function(){return r.NP},Ng:function(){return r.Ng},OA:function(){return r.OA},OW:function(){return r.OW},PP:function(){return r.PP},PR:function(){return r.PR},PS:function(){return r.PS},PT:function(){return r.PT},Pn:function(){return r.Pn},Po:function(){return vt},Pr:function(){return r.Pr},Q3:function(){return r.Q3},QP:function(){return r.QP},QW:function(){return r.QW},QZ:function(){return r.QZ},Qi:function(){return r.Qi},Qv:function(){return ae},R1:function(){return r.R1},R8:function(){return r.R8},RG:function(){return r.RG},SS:function(){return r.SS},Tb:function(){return r.Tb},Tm:function(){return r.Tm},Tq:function(){return r.Tq},Tr:function(){return r.Tr},U4:function(){return r.U4},U_:function(){return r.U_},Ul:function(){return r.Ul},Vq:function(){return r.Vq},Vy:function(){return bt},WQ:function(){return r.WQ},Wv:function(){return r.Wv},X2:function(){return r.X2},XL:function(){return Bt},XX:function(){return se},Xq:function(){return mt},Y4:function(){return r.Y4},Y5:function(){return r.Y5},YY:function(){return r.YY},Yj:function(){return r.Yj},Yv:function(){return r.Yv},ZH:function(){return r.ZH},ZQ:function(){return r.ZQ},_B:function(){return r._B},_U:function(){return wt},aG:function(){return F},aT:function(){return r.aT},bF:function(){return r.bF},bU:function(){return r.bU},bj:function(){return r.bj},bn:function(){return r.bn},bo:function(){return r.bo},ch:function(){return r.ch},ci:function(){return r.ci},dA:function(){return r.dA},dY:function(){return r.dY},ds:function(){return r.ds},eB:function(){return _},eW:function(){return r.eW},eX:function(){return r.eX},fE:function(){return r.fE},fn:function(){return r.fn},g2:function(){return r.g2},g8:function(){return r.g8},gN:function(){return r.gN},gW:function(){return r.gW},gh:function(){return r.gh},h:function(){return r.h},hi:function(){return r.hi},hp:function(){return qt},i9:function(){return r.i9},iD:function(){return r.iD},jC:function(){return r.jC},jR:function(){return te},jr:function(){return r.jr},jt:function(){return r.jt},ju:function(){return r.ju},k6:function(){return r.k6},lH:function(){return Vt},lW:function(){return r.lW},lt:function(){return r.lt},m1:function(){return ue},mu:function(){return r.mu},n:function(){return r.n},nD:function(){return r.nD},nI:function(){return r.nI},nT:function(){return r.nT},o5:function(){return r.o5},p9:function(){return r.p9},pI:function(){return r.pI},pM:function(){return r.pM},pR:function(){return r.pR},qG:function(){return r.qG},qL:function(){return r.qL},qP:function(){return r.qP},qR:function(){return r.qR},rE:function(){return r.rE},rO:function(){return r.rO},rU:function(){return r.rU},rY:function(){return r.rY},rk:function(){return r.rk},sV:function(){return r.sV},tB:function(){return r.tB},tC:function(){return r.tC},tG:function(){return r.tG},tY:function(){return r.tY},u1:function(){return $t},uX:function(){return r.uX},uY:function(){return r.uY},ux:function(){return r.ux},v6:function(){return r.v6},v_:function(){return r.v_},vv:function(){return r.vv},wB:function(){return r.wB},wX:function(){return r.wX},wk:function(){return r.wk},xo:function(){return r.xo},y$:function(){return r.y$},yC:function(){return r.yC},zz:function(){return r.zz}});var r=n(20641),i=n(90033),o=n(50953);
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const a="undefined"!==typeof window&&window.trustedTypes;if(a)try{s=a.createPolicy("vue",{createHTML:t=>t})}catch(pe){}const c=s?t=>s.createHTML(t):t=>t,u="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",h="undefined"!==typeof document?document:null,d=h&&h.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?h.createElementNS(u,t):"mathml"===e?h.createElementNS(l,t):n?h.createElement(t,{is:n}):h.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>h.createTextNode(t),createComment:t=>h.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>h.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{d.innerHTML=c("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=d.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},p="transition",g="animation",m=Symbol("_vtc"),v={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},y=(0,i.X$)({},r.QP,v),b=t=>(t.displayName="Transition",t.props=y,t),_=b(((t,{slots:e})=>(0,r.h)(r.pR,T(t),e))),w=(t,e=[])=>{(0,i.cy)(t)?t.forEach((t=>t(...e))):t&&t(...e)},E=t=>!!t&&((0,i.cy)(t)?t.some((t=>t.length>1)):t.length>1);function T(t){const e={};for(const i in t)i in v||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=S(o),m=g&&g[0],y=g&&g[1],{onBeforeEnter:b,onEnter:_,onEnterCancelled:T,onLeave:I,onLeaveCancelled:O,onBeforeAppear:D=b,onAppear:R=_,onAppearCancelled:N=T}=e,L=(t,e,n)=>{A(t,e?h:c),A(t,e?l:a),n&&n()},M=(t,e)=>{t._isLeaving=!1,A(t,d),A(t,p),A(t,f),e&&e()},U=t=>(e,n)=>{const i=t?R:_,o=()=>L(e,t,n);w(i,[e,o]),k((()=>{A(e,t?u:s),C(e,t?h:c),E(i)||x(e,r,m,o)}))};return(0,i.X$)(e,{onBeforeEnter(t){w(b,[t]),C(t,s),C(t,a)},onBeforeAppear(t){w(D,[t]),C(t,u),C(t,l)},onEnter:U(!1),onAppear:U(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>M(t,e);C(t,d),C(t,f),P(),k((()=>{t._isLeaving&&(A(t,d),C(t,p),E(I)||x(t,r,y,n))})),w(I,[t,n])},onEnterCancelled(t){L(t,!1),w(T,[t])},onAppearCancelled(t){L(t,!0),w(N,[t])},onLeaveCancelled(t){M(t),w(O,[t])}})}function S(t){if(null==t)return null;if((0,i.Gv)(t))return[I(t.enter),I(t.leave)];{const e=I(t);return[e,e]}}function I(t){const e=(0,i.Ro)(t);return e}function C(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[m]||(t[m]=new Set)).add(e)}function A(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[m];n&&(n.delete(e),n.size||(t[m]=void 0))}function k(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let O=0;function x(t,e,n,r){const i=t._endId=++O,o=()=>{i===t._endId&&r()};if(null!=n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=D(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,d),o()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function D(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${p}Delay`),o=r(`${p}Duration`),s=R(i,o),a=r(`${g}Delay`),c=r(`${g}Duration`),u=R(a,c);let l=null,h=0,d=0;e===p?s>0&&(l=p,h=s,d=o.length):e===g?u>0&&(l=g,h=u,d=c.length):(h=Math.max(s,u),l=h>0?s>u?p:g:null,d=l?l===p?o.length:c.length:0);const f=l===p&&/\b(transform|all)(,|$)/.test(r(`${p}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function R(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>N(e)+N(t[n]))))}function N(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function P(){return document.body.offsetHeight}function L(t,e,n){const r=t[m];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const M=Symbol("_vod"),U=Symbol("_vsh"),F={beforeMount(t,{value:e},{transition:n}){t[M]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):V(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),V(t,!0),r.enter(t)):r.leave(t,(()=>{V(t,!1)})):V(t,e))},beforeUnmount(t,{value:e}){V(t,e)}};function V(t,e){t.style.display=e?t[M]:"none",t[U]=!e}function j(){F.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const B=Symbol("");function $(t){const e=(0,r.nI)();if(!e)return;const n=e.ut=(n=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach((t=>K(t,n)))};const i=()=>{const r=t(e.proxy);e.ce?K(e.ce,r):H(e.subTree,r),n(r)};(0,r.KC)((()=>{(0,r.p9)(i)})),(0,r.sV)((()=>{const t=new MutationObserver(i);t.observe(e.subTree.el.parentNode,{childList:!0}),(0,r.hi)((()=>t.disconnect()))}))}function H(t,e){if(128&t.shapeFlag){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{H(n.activeBranch,e)}))}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)K(t.el,e);else if(t.type===r.FK)t.children.forEach((t=>H(t,e)));else if(t.type===r.jC){let{el:n,anchor:r}=t;while(n){if(K(n,e),n===r)break;n=n.nextSibling}}}function K(t,e){if(1===t.nodeType){const n=t.style;let r="";for(const t in e)n.setProperty(`--${t}`,e[t]),r+=`--${t}: ${e[t]};`;n[B]=r}}const z=/(^|;)\s*display\s*:/;function q(t,e,n){const r=t.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&G(r,e,"")}else for(const t in e)null==n[t]&&G(r,t,"");for(const t in n)"display"===t&&(s=!0),G(r,t,n[t])}else if(o){if(e!==n){const t=r[B];t&&(n+=";"+t),r.cssText=n,s=z.test(n)}}else e&&t.removeAttribute("style");M in t&&(t[M]=s?r.display:"",t[U]&&(r.display="none"))}const W=/\s*!important$/;function G(t,e,n){if((0,i.cy)(n))n.forEach((n=>G(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=X(t,e);W.test(n)?t.setProperty((0,i.Tg)(r),n.replace(W,""),"important"):t[r]=n}}const Q=["Webkit","Moz","ms"],Y={};function X(t,e){const n=Y[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return Y[e]=r;r=(0,i.ZH)(r);for(let i=0;i<Q.length;i++){const n=Q[i]+r;if(n in t)return Y[e]=n}return e}const J="http://www.w3.org/1999/xlink";function Z(t,e,n,r,o,s=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(J,e.slice(6,e.length)):t.setAttributeNS(J,e,n):null==n||s&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":(0,i.Bm)(n)?String(n):n)}function tt(t,e,n,r,o){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?c(n):n));const s=t.tagName;if("value"===e&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let a=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",a=!0):"number"===r&&(n=0,a=!0)}try{t[e]=n}catch(pe){0}a&&t.removeAttribute(o||e)}function et(t,e,n,r){t.addEventListener(e,n,r)}function nt(t,e,n,r){t.removeEventListener(e,n,r)}const rt=Symbol("_vei");function it(t,e,n,r,i=null){const o=t[rt]||(t[rt]={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=st(e);if(r){const s=o[e]=lt(r,i);et(t,n,s,a)}else s&&(nt(t,n,s,a),o[e]=void 0)}}const ot=/(?:Once|Passive|Capture)$/;function st(t){let e;if(ot.test(t)){let n;e={};while(n=t.match(ot))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let at=0;const ct=Promise.resolve(),ut=()=>at||(ct.then((()=>at=0)),at=Date.now());function lt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(ht(t,n.value),e,5,[t])};return n.value=t,n.attached=ut(),n}function ht(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const dt=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ft=(t,e,n,r,o,s)=>{const a="svg"===o;"class"===e?L(t,r,a):"style"===e?q(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||it(t,e,n,r,s):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):pt(t,e,r,a))?(tt(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||Z(t,e,r,a,s,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,i.Kg)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),Z(t,e,r,a)):tt(t,(0,i.PT)(e),r,s,e)};function pt(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&dt(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!dt(e)||!(0,i.Kg)(n))&&e in t}const gt={};
/*! #__NO_SIDE_EFFECTS__ */function mt(t,e,n){const o=(0,r.pM)(t,e);(0,i.Qd)(o)&&(0,i.X$)(o,e);class s extends bt{constructor(t){super(o,t,n)}}return s.def=o,s}
/*! #__NO_SIDE_EFFECTS__ */const vt=(t,e)=>mt(t,e,ue),yt="undefined"!==typeof HTMLElement?HTMLElement:class{};class bt extends yt{constructor(t,e={},n=ce){super(),this._def=t,this._props=e,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&n!==ce?this._root=this.shadowRoot:!1!==t.shadowRoot?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let t=this;while(t=t&&(t.parentNode||t.host))if(t instanceof bt){this._parent=t;break}this._instance||(this._resolved?(this._setParent(),this._update()):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then((()=>{this._pendingResolve=void 0,this._resolveDef()})):this._resolveDef())}_setParent(t=this._parent){t&&(this._instance.parent=t._instance,this._instance.provides=t._instance.provides)}disconnectedCallback(){this._connected=!1,(0,r.dY)((()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)}))}_resolveDef(){if(this._pendingResolve)return;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver((t=>{for(const e of t)this._setAttr(e.attributeName)})),this._ob.observe(this,{attributes:!0});const t=(t,e=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:n,styles:r}=t;let o;if(n&&!(0,i.cy)(n))for(const s in n){const t=n[s];(t===Number||t&&t.type===Number)&&(s in this._props&&(this._props[s]=(0,i.Ro)(this._props[s])),(o||(o=Object.create(null)))[(0,i.PT)(s)]=!0)}this._numberProps=o,e&&this._resolveProps(t),this.shadowRoot&&this._applyStyles(r),this._mount(t)},e=this._def.__asyncLoader;e?this._pendingResolve=e().then((e=>t(this._def=e,!0))):t(this._def)}_mount(t){this._app=this._createApp(t),t.configureApp&&t.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const e=this._instance&&this._instance.exposed;if(e)for(const n in e)(0,i.$3)(this,n)||Object.defineProperty(this,n,{get:()=>(0,o.R1)(e[n])})}_resolveProps(t){const{props:e}=t,n=(0,i.cy)(e)?e:Object.keys(e||{});for(const r of Object.keys(this))"_"!==r[0]&&n.includes(r)&&this._setProp(r,this[r]);for(const r of n.map(i.PT))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(t){this._setProp(r,t,!0,!0)}})}_setAttr(t){if(t.startsWith("data-v-"))return;const e=this.hasAttribute(t);let n=e?this.getAttribute(t):gt;const r=(0,i.PT)(t);e&&this._numberProps&&this._numberProps[r]&&(n=(0,i.Ro)(n)),this._setProp(r,n,!1,!0)}_getProp(t){return this._props[t]}_setProp(t,e,n=!0,r=!1){e!==this._props[t]&&(e===gt?delete this._props[t]:(this._props[t]=e,"key"===t&&this._app&&(this._app._ceVNode.key=e)),r&&this._instance&&this._update(),n&&(!0===e?this.setAttribute((0,i.Tg)(t),""):"string"===typeof e||"number"===typeof e?this.setAttribute((0,i.Tg)(t),e+""):e||this.removeAttribute((0,i.Tg)(t))))}_update(){se(this._createVNode(),this._root)}_createVNode(){const t={};this.shadowRoot||(t.onVnodeMounted=t.onVnodeUpdated=this._renderSlots.bind(this));const e=(0,r.bF)(this._def,(0,i.X$)(t,this._props));return this._instance||(e.ce=t=>{this._instance=t,t.ce=this,t.isCE=!0;const e=(t,e)=>{this.dispatchEvent(new CustomEvent(t,(0,i.Qd)(e[0])?(0,i.X$)({detail:e},e[0]):{detail:e}))};t.emit=(t,...n)=>{e(t,n),(0,i.Tg)(t)!==t&&e((0,i.Tg)(t),n)},this._setParent()}),e}_applyStyles(t,e){if(!t)return;if(e){if(e===this._def||this._styleChildren.has(e))return;this._styleChildren.add(e)}const n=this._nonce;for(let r=t.length-1;r>=0;r--){const e=document.createElement("style");n&&e.setAttribute("nonce",n),e.textContent=t[r],this.shadowRoot.prepend(e)}}_parseSlots(){const t=this._slots={};let e;while(e=this.firstChild){const n=1===e.nodeType&&e.getAttribute("slot")||"default";(t[n]||(t[n]=[])).push(e),this.removeChild(e)}}_renderSlots(){const t=(this._teleportTarget||this).querySelectorAll("slot"),e=this._instance.type.__scopeId;for(let n=0;n<t.length;n++){const r=t[n],i=r.getAttribute("name")||"default",o=this._slots[i],s=r.parentNode;if(o)for(const t of o){if(e&&1===t.nodeType){const n=e+"-s",r=document.createTreeWalker(t,1);let i;t.setAttribute(n,"");while(i=r.nextNode())i.setAttribute(n,"")}s.insertBefore(t,r)}else while(r.firstChild)s.insertBefore(r.firstChild,r);s.removeChild(r)}}_injectChildStyle(t){this._applyStyles(t.styles,t)}_removeChildStyle(t){0}}function _t(t){const e=(0,r.nI)(),n=e&&e.ce;return n||null}function wt(){const t=_t();return t&&t.shadowRoot}function Et(t="$style"){{const e=(0,r.nI)();if(!e)return i.MZ;const n=e.type.__cssModules;if(!n)return i.MZ;const o=n[t];return o||i.MZ}}const Tt=new WeakMap,St=new WeakMap,It=Symbol("_moveCb"),Ct=Symbol("_enterCb"),At=t=>(delete t.props.mode,t),kt=At({name:"TransitionGroup",props:(0,i.X$)({},y,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.nI)(),i=(0,r.Gy)();let s,a;return(0,r.$u)((()=>{if(!s.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!Nt(s[0].el,n.vnode.el,e))return;s.forEach(xt),s.forEach(Dt);const r=s.filter(Rt);P(),r.forEach((t=>{const n=t.el,r=n.style;C(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[It]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n[It]=null,A(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.ux)(t),u=T(c);let l=c.tag||r.FK;if(s=[],a)for(let t=0;t<a.length;t++){const e=a[t];e.el&&e.el instanceof Element&&(s.push(e),(0,r.MZ)(e,(0,r.OW)(e,u,i,n)),Tt.set(e,e.el.getBoundingClientRect()))}a=e.default?(0,r.Df)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.MZ)(e,(0,r.OW)(e,u,i,n))}return(0,r.bF)(l,null,a)}}}),Ot=kt;function xt(t){const e=t.el;e[It]&&e[It](),e[Ct]&&e[Ct]()}function Dt(t){St.set(t,t.el.getBoundingClientRect())}function Rt(t){const e=Tt.get(t),n=St.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function Nt(t,e,n){const r=t.cloneNode(),i=t[m];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const o=1===e.nodeType?e:e.parentNode;o.appendChild(r);const{hasTransform:s}=D(r);return o.removeChild(r),s}const Pt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function Lt(t){t.target.composing=!0}function Mt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ut=Symbol("_assign"),Ft={created(t,{modifiers:{lazy:e,trim:n,number:r}},o){t[Ut]=Pt(o);const s=r||o.props&&"number"===o.props.type;et(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),s&&(r=(0,i.bB)(r)),t[Ut](r)})),n&&et(t,"change",(()=>{t.value=t.value.trim()})),e||(et(t,"compositionstart",Lt),et(t,"compositionend",Mt),et(t,"change",Mt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},a){if(t[Ut]=Pt(a),t.composing)return;const c=!s&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),u=null==e?"":e;if(c!==u){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(o&&t.value.trim()===u)return}t.value=u}}},Vt={deep:!0,created(t,e,n){t[Ut]=Pt(n),et(t,"change",(()=>{const e=t._modelValue,n=Kt(t),r=t.checked,o=t[Ut];if((0,i.cy)(e)){const t=(0,i.u3)(e,n),s=-1!==t;if(r&&!s)o(e.concat(n));else if(!r&&s){const n=[...e];n.splice(t,1),o(n)}}else if((0,i.vM)(e)){const t=new Set(e);r?t.add(n):t.delete(n),o(t)}else o(zt(t,r))}))},mounted:jt,beforeUpdate(t,e,n){t[Ut]=Pt(n),jt(t,e,n)}};function jt(t,{value:e,oldValue:n},r){let o;if(t._modelValue=e,(0,i.cy)(e))o=(0,i.u3)(e,r.props.value)>-1;else if((0,i.vM)(e))o=e.has(r.props.value);else{if(e===n)return;o=(0,i.BX)(e,zt(t,!0))}t.checked!==o&&(t.checked=o)}const Bt={created(t,{value:e},n){t.checked=(0,i.BX)(e,n.props.value),t[Ut]=Pt(n),et(t,"change",(()=>{t[Ut](Kt(t))}))},beforeUpdate(t,{value:e,oldValue:n},r){t[Ut]=Pt(r),e!==n&&(t.checked=(0,i.BX)(e,r.props.value))}},$t={deep:!0,created(t,{value:e,modifiers:{number:n}},o){const s=(0,i.vM)(e);et(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.bB)(Kt(t)):Kt(t)));t[Ut](t.multiple?s?new Set(e):e:e[0]),t._assigning=!0,(0,r.dY)((()=>{t._assigning=!1}))})),t[Ut]=Pt(o)},mounted(t,{value:e}){Ht(t,e)},beforeUpdate(t,e,n){t[Ut]=Pt(n)},updated(t,{value:e}){t._assigning||Ht(t,e)}};function Ht(t,e){const n=t.multiple,r=(0,i.cy)(e);if(!n||r||(0,i.vM)(e)){for(let o=0,s=t.options.length;o<s;o++){const s=t.options[o],a=Kt(s);if(n)if(r){const t=typeof a;s.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):(0,i.u3)(e,a)>-1}else s.selected=e.has(a);else if((0,i.BX)(Kt(s),e))return void(t.selectedIndex!==o&&(t.selectedIndex=o))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function Kt(t){return"_value"in t?t._value:t.value}function zt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const qt={created(t,e,n){Gt(t,e,n,null,"created")},mounted(t,e,n){Gt(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Gt(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Gt(t,e,n,r,"updated")}};function Wt(t,e){switch(t){case"SELECT":return $t;case"TEXTAREA":return Ft;default:switch(e){case"checkbox":return Vt;case"radio":return Bt;default:return Ft}}}function Gt(t,e,n,r,i){const o=Wt(t.tagName,n.props&&n.props.type),s=o[i];s&&s(t,e,n,r)}function Qt(){Ft.getSSRProps=({value:t})=>({value:t}),Bt.getSSRProps=({value:t},e)=>{if(e.props&&(0,i.BX)(e.props.value,t))return{checked:!0}},Vt.getSSRProps=({value:t},e)=>{if((0,i.cy)(t)){if(e.props&&(0,i.u3)(t,e.props.value)>-1)return{checked:!0}}else if((0,i.vM)(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},qt.getSSRProps=(t,e)=>{if("string"!==typeof e.type)return;const n=Wt(e.type.toUpperCase(),e.props&&e.props.type);return n.getSSRProps?n.getSSRProps(t,e):void 0}}const Yt=["ctrl","shift","alt","meta"],Xt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Yt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Jt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=Xt[e[t]];if(r&&r(n,e))return}return t(n,...r)})},Zt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},te=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some((t=>t===r||Zt[t]===r))?t(n):void 0})},ee=(0,i.X$)({patchProp:ft},f);let ne,re=!1;function ie(){return ne||(ne=(0,r.K9)(ee))}function oe(){return ne=re?ne:(0,r.ci)(ee),re=!0,ne}const se=(...t)=>{ie().render(...t)},ae=(...t)=>{oe().hydrate(...t)},ce=(...t)=>{const e=ie().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=he(t);if(!r)return;const o=e._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,le(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e},ue=(...t)=>{const e=oe().createApp(...t);const{mount:n}=e;return e.mount=t=>{const e=he(t);if(e)return n(e,!0,le(e))},e};function le(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function he(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}let de=!1;const fe=()=>{de||(de=!0,Qt(),j())}},90033:function(t,e,n){"use strict";
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}n.d(e,{$3:function(){return f},$H:function(){return U},BH:function(){return z},BX:function(){return lt},Bm:function(){return w},C4:function(){return J},CE:function(){return g},CP:function(){return u},DY:function(){return F},Gv:function(){return E},J$:function(){return et},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return o},PT:function(){return R},Qd:function(){return A},Ro:function(){return B},SU:function(){return O},TF:function(){return h},Tg:function(){return P},Tn:function(){return b},Tr:function(){return q},Vp:function(){return st},W0:function(){return nt},We:function(){return H},X$:function(){return l},XW:function(){return ct},Y2:function(){return rt},ZH:function(){return L},Zf:function(){return C},_B:function(){return Z},bB:function(){return j},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return s},tl:function(){return X},u3:function(){return ht},vM:function(){return m},v_:function(){return ft},wQ:function(){return it},yI:function(){return k},yL:function(){return T},yQ:function(){return V},z3:function(){return ot}});const i={},o=[],s=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,g=t=>"[object Map]"===I(t),m=t=>"[object Set]"===I(t),v=t=>"[object Date]"===I(t),y=t=>"[object RegExp]"===I(t),b=t=>"function"===typeof t,_=t=>"string"===typeof t,w=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||b(t))&&b(t.then)&&b(t.catch),S=Object.prototype.toString,I=t=>S.call(t),C=t=>I(t).slice(8,-1),A=t=>"[object Object]"===I(t),k=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},D=/-(\w)/g,R=x((t=>t.replace(D,((t,e)=>e?e.toUpperCase():"")))),N=/\B([A-Z])/g,P=x((t=>t.replace(N,"-$1").toLowerCase())),L=x((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=x((t=>{const e=t?`on${L(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const H=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const K="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(K);function q(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=_(r)?Y(r):q(r);if(i)for(const t in i)e[t]=i[t]}return e}if(_(t)||E(t))return t}const W=/;(?![^(]*\))/g,G=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function Y(t){const e={};return t.replace(Q,"").split(W).forEach((t=>{if(t){const n=t.split(G);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(!t||_(t))return e;for(const n in t){const r=t[n];if(_(r)||"number"===typeof r){const t=n.startsWith("--")?n:P(n);e+=`${t}:${r};`}}return e}function J(t){let e="";if(_(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=J(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Z(t){if(!t)return null;let{class:e,style:n}=t;return e&&!_(e)&&(t.class=J(e)),n&&(t.style=q(n)),t}const tt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",et=r(tt),nt=r(tt+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function rt(t){return!!t||""===t}const it=r("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),ot=r("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function st(t){if(null==t)return!1;const e=typeof t;return"string"===e||"number"===e||"boolean"===e}const at=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function ct(t,e){return t.replace(at,(t=>e?'"'===t?'\\\\\\"':`\\\\${t}`:`\\${t}`))}function ut(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=lt(t[r],e[r]);return n}function lt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=w(t),r=w(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&ut(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!lt(t[n],e[n]))return!1}}return String(t)===String(e)}function ht(t,e){return t.findIndex((t=>lt(t,e)))}const dt=t=>!(!t||!0!==t["__v_isRef"]),ft=t=>_(t)?t:null==t?"":p(t)||E(t)&&(t.toString===S||!b(t.toString))?dt(t)?ft(t.value):JSON.stringify(t,pt,2):String(t),pt=(t,e)=>dt(e)?pt(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[gt(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>gt(t)))}:w(e)?gt(e):!E(e)||p(e)||A(e)?e:String(e),gt=(t,e="")=>{var n;return w(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},10246:function(t,e,n){"use strict";
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}function u(t,e){if(null==t)return{};var n,r,i=c(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function l(t){return h(t)||d(t)||f(t)||g()}function h(t){if(Array.isArray(t))return p(t)}function d(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function f(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.r(e),n.d(e,{MultiDrag:function(){return He},Sortable:function(){return ne},Swap:function(){return De}});var m="1.14.0";function v(t){if("undefined"!==typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=v(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),b=v(/Edge/i),_=v(/firefox/i),w=v(/safari/i)&&!v(/chrome/i)&&!v(/android/i),E=v(/iP(ad|od|hone)/i),T=v(/chrome/i)&&v(/android/i),S={capture:!1,passive:!1};function I(t,e,n){t.addEventListener(e,n,!y&&S)}function C(t,e,n){t.removeEventListener(e,n,!y&&S)}function A(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return!1}return!1}}function k(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function O(t,e,n,r){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&A(t,e):A(t,e))||r&&t===n)return t;if(t===n)break}while(t=k(t))}return null}var x,D=/\s+/g;function R(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var r=(" "+t.className+" ").replace(D," ").replace(" "+e+" "," ");t.className=(r+(n?" "+e:"")).replace(D," ")}}function N(t,e,n){var r=t&&t.style;if(r){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in r||-1!==e.indexOf("webkit")||(e="-webkit-"+e),r[e]=n+("string"===typeof n?"":"px")}}function P(t,e){var n="";if("string"===typeof t)n=t;else do{var r=N(t,"transform");r&&"none"!==r&&(n=r+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function L(t,e,n){if(t){var r=t.getElementsByTagName(e),i=0,o=r.length;if(n)for(;i<o;i++)n(r[i],i);return r}return[]}function M(){var t=document.scrollingElement;return t||document.documentElement}function U(t,e,n,r,i){if(t.getBoundingClientRect||t===window){var o,s,a,c,u,l,h;if(t!==window&&t.parentNode&&t!==M()?(o=t.getBoundingClientRect(),s=o.top,a=o.left,c=o.bottom,u=o.right,l=o.height,h=o.width):(s=0,a=0,c=window.innerHeight,u=window.innerWidth,l=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==N(i,"transform")||n&&"static"!==N(i,"position"))){var d=i.getBoundingClientRect();s-=d.top+parseInt(N(i,"border-top-width")),a-=d.left+parseInt(N(i,"border-left-width")),c=s+o.height,u=a+o.width;break}}while(i=i.parentNode);if(r&&t!==window){var f=P(i||t),p=f&&f.a,g=f&&f.d;f&&(s/=g,a/=p,h/=p,l/=g,c=s+l,u=a+h)}return{top:s,left:a,bottom:c,right:u,width:h,height:l}}}function F(t,e,n){var r=K(t,!0),i=U(t)[e];while(r){var o=U(r)[n],s=void 0;if(s="top"===n||"left"===n?i>=o:i<=o,!s)return r;if(r===M())break;r=K(r,!1)}return!1}function V(t,e,n,r){var i=0,o=0,s=t.children;while(o<s.length){if("none"!==s[o].style.display&&s[o]!==ne.ghost&&(r||s[o]!==ne.dragged)&&O(s[o],n.draggable,t,!1)){if(i===e)return s[o];i++}o++}return null}function j(t,e){var n=t.lastElementChild;while(n&&(n===ne.ghost||"none"===N(n,"display")||e&&!A(n,e)))n=n.previousElementSibling;return n||null}function B(t,e){var n=0;if(!t||!t.parentNode)return-1;while(t=t.previousElementSibling)"TEMPLATE"===t.nodeName.toUpperCase()||t===ne.clone||e&&!A(t,e)||n++;return n}function $(t){var e=0,n=0,r=M();if(t)do{var i=P(t),o=i.a,s=i.d;e+=t.scrollLeft*o,n+=t.scrollTop*s}while(t!==r&&(t=t.parentNode));return[e,n]}function H(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var r in e)if(e.hasOwnProperty(r)&&e[r]===t[n][r])return Number(n);return-1}function K(t,e){if(!t||!t.getBoundingClientRect)return M();var n=t,r=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=N(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return M();if(r||e)return n;r=!0}}}while(n=n.parentNode);return M()}function z(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function q(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function W(t,e){return function(){if(!x){var n=arguments,r=this;1===n.length?t.call(r,n[0]):t.apply(r,n),x=setTimeout((function(){x=void 0}),e)}}}function G(){clearTimeout(x),x=void 0}function Q(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function Y(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function X(t,e){N(t,"position","absolute"),N(t,"top",e.top),N(t,"left",e.left),N(t,"width",e.width),N(t,"height",e.height)}function J(t){N(t,"position",""),N(t,"top",""),N(t,"left",""),N(t,"width",""),N(t,"height","")}var Z="Sortable"+(new Date).getTime();function tt(){var t,e=[];return{captureAnimationState:function(){if(e=[],this.options.animation){var t=[].slice.call(this.el.children);t.forEach((function(t){if("none"!==N(t,"display")&&t!==ne.ghost){e.push({target:t,rect:U(t)});var n=i({},e[e.length-1].rect);if(t.thisAnimationDuration){var r=P(t,!0);r&&(n.top-=r.f,n.left-=r.e)}t.fromRect=n}}))}},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(H(e,{target:t}),1)},animateAll:function(n){var r=this;if(!this.options.animation)return clearTimeout(t),void("function"===typeof n&&n());var i=!1,o=0;e.forEach((function(t){var e=0,n=t.target,s=n.fromRect,a=U(n),c=n.prevFromRect,u=n.prevToRect,l=t.rect,h=P(n,!0);h&&(a.top-=h.f,a.left-=h.e),n.toRect=a,n.thisAnimationDuration&&q(c,a)&&!q(s,a)&&(l.top-a.top)/(l.left-a.left)===(s.top-a.top)/(s.left-a.left)&&(e=nt(l,c,u,r.options)),q(a,s)||(n.prevFromRect=s,n.prevToRect=a,e||(e=r.options.animation),r.animate(n,l,a,e)),e&&(i=!0,o=Math.max(o,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout((function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null}),e),n.thisAnimationDuration=e)})),clearTimeout(t),i?t=setTimeout((function(){"function"===typeof n&&n()}),o):"function"===typeof n&&n(),e=[]},animate:function(t,e,n,r){if(r){N(t,"transition",""),N(t,"transform","");var i=P(this.el),o=i&&i.a,s=i&&i.d,a=(e.left-n.left)/(o||1),c=(e.top-n.top)/(s||1);t.animatingX=!!a,t.animatingY=!!c,N(t,"transform","translate3d("+a+"px,"+c+"px,0)"),this.forRepaintDummy=et(t),N(t,"transition","transform "+r+"ms"+(this.options.easing?" "+this.options.easing:"")),N(t,"transform","translate3d(0,0,0)"),"number"===typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){N(t,"transition",""),N(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),r)}}}}function et(t){return t.offsetWidth}function nt(t,e,n,r){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*r.animation}var rt=[],it={initializeByDefault:!0},ot={mount:function(t){for(var e in it)it.hasOwnProperty(e)&&!(e in t)&&(t[e]=it[e]);rt.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),rt.push(t)},pluginEvent:function(t,e,n){var r=this;this.eventCanceled=!1,n.cancel=function(){r.eventCanceled=!0};var o=t+"Global";rt.forEach((function(r){e[r.pluginName]&&(e[r.pluginName][o]&&e[r.pluginName][o](i({sortable:e},n)),e.options[r.pluginName]&&e[r.pluginName][t]&&e[r.pluginName][t](i({sortable:e},n)))}))},initializePlugins:function(t,e,n,r){for(var i in rt.forEach((function(r){var i=r.pluginName;if(t.options[i]||r.initializeByDefault){var o=new r(t,e,t.options);o.sortable=t,o.options=t.options,t[i]=o,a(n,o.defaults)}})),t.options)if(t.options.hasOwnProperty(i)){var o=this.modifyOption(t,i,t.options[i]);"undefined"!==typeof o&&(t.options[i]=o)}},getEventProperties:function(t,e){var n={};return rt.forEach((function(r){"function"===typeof r.eventProperties&&a(n,r.eventProperties.call(e[r.pluginName],t))})),n},modifyOption:function(t,e,n){var r;return rt.forEach((function(i){t[i.pluginName]&&i.optionListeners&&"function"===typeof i.optionListeners[e]&&(r=i.optionListeners[e].call(t[i.pluginName],n))})),r}};function st(t){var e=t.sortable,n=t.rootEl,r=t.name,o=t.targetEl,s=t.cloneEl,a=t.toEl,c=t.fromEl,u=t.oldIndex,l=t.newIndex,h=t.oldDraggableIndex,d=t.newDraggableIndex,f=t.originalEvent,p=t.putSortable,g=t.extraEventProperties;if(e=e||n&&n[Z],e){var m,v=e.options,_="on"+r.charAt(0).toUpperCase()+r.substr(1);!window.CustomEvent||y||b?(m=document.createEvent("Event"),m.initEvent(r,!0,!0)):m=new CustomEvent(r,{bubbles:!0,cancelable:!0}),m.to=a||n,m.from=c||n,m.item=o||n,m.clone=s,m.oldIndex=u,m.newIndex=l,m.oldDraggableIndex=h,m.newDraggableIndex=d,m.originalEvent=f,m.pullMode=p?p.lastPutMode:void 0;var w=i(i({},g),ot.getEventProperties(r,e));for(var E in w)m[E]=w[E];n&&n.dispatchEvent(m),v[_]&&v[_].call(e,m)}}var at=["evt"],ct=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.evt,o=u(n,at);ot.pluginEvent.bind(ne)(t,e,i({dragEl:lt,parentEl:ht,ghostEl:dt,rootEl:ft,nextEl:pt,lastDownEl:gt,cloneEl:mt,cloneHidden:vt,dragStarted:xt,putSortable:Tt,activeSortable:ne.active,originalEvent:r,oldIndex:yt,oldDraggableIndex:_t,newIndex:bt,newDraggableIndex:wt,hideGhostForTarget:Jt,unhideGhostForTarget:Zt,cloneNowHidden:function(){vt=!0},cloneNowShown:function(){vt=!1},dispatchSortableEvent:function(t){ut({sortable:e,name:t,originalEvent:r})}},o))};function ut(t){st(i({putSortable:Tt,cloneEl:mt,targetEl:lt,rootEl:ft,oldIndex:yt,oldDraggableIndex:_t,newIndex:bt,newDraggableIndex:wt},t))}var lt,ht,dt,ft,pt,gt,mt,vt,yt,bt,_t,wt,Et,Tt,St,It,Ct,At,kt,Ot,xt,Dt,Rt,Nt,Pt,Lt=!1,Mt=!1,Ut=[],Ft=!1,Vt=!1,jt=[],Bt=!1,$t=[],Ht="undefined"!==typeof document,Kt=E,zt=b||y?"cssFloat":"float",qt=Ht&&!T&&!E&&"draggable"in document.createElement("div"),Wt=function(){if(Ht){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Gt=function(t,e){var n=N(t),r=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=V(t,0,e),o=V(t,1,e),s=i&&N(i),a=o&&N(o),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+U(i).width,u=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+U(o).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s["float"]&&"none"!==s["float"]){var l="left"===s["float"]?"left":"right";return!o||"both"!==a.clear&&a.clear!==l?"horizontal":"vertical"}return i&&("block"===s.display||"flex"===s.display||"table"===s.display||"grid"===s.display||c>=r&&"none"===n[zt]||o&&"none"===n[zt]&&c+u>r)?"vertical":"horizontal"},Qt=function(t,e,n){var r=n?t.left:t.top,i=n?t.right:t.bottom,o=n?t.width:t.height,s=n?e.left:e.top,a=n?e.right:e.bottom,c=n?e.width:e.height;return r===s||i===a||r+o/2===s+c/2},Yt=function(t,e){var n;return Ut.some((function(r){var i=r[Z].options.emptyInsertThreshold;if(i&&!j(r)){var o=U(r),s=t>=o.left-i&&t<=o.right+i,a=e>=o.top-i&&e<=o.bottom+i;return s&&a?n=r:void 0}})),n},Xt=function(t){function e(t,n){return function(r,i,o,s){var a=r.options.group.name&&i.options.group.name&&r.options.group.name===i.options.group.name;if(null==t&&(n||a))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"===typeof t)return e(t(r,i,o,s),n)(r,i,o,s);var c=(n?r:i).options.group.name;return!0===t||"string"===typeof t&&t===c||t.join&&t.indexOf(c)>-1}}var n={},r=t.group;r&&"object"==o(r)||(r={name:r}),n.name=r.name,n.checkPull=e(r.pull,!0),n.checkPut=e(r.put),n.revertClone=r.revertClone,t.group=n},Jt=function(){!Wt&&dt&&N(dt,"display","none")},Zt=function(){!Wt&&dt&&N(dt,"display","")};Ht&&document.addEventListener("click",(function(t){if(Mt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Mt=!1,!1}),!0);var te=function(t){if(lt){t=t.touches?t.touches[0]:t;var e=Yt(t.clientX,t.clientY);if(e){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[Z]._onDragOver(n)}}},ee=function(t){lt&&lt.parentNode[Z]._isOutsideThisEl(t.target)};function ne(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[Z]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Gt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==ne.supportPointer&&"PointerEvent"in window&&!w,emptyInsertThreshold:5};for(var r in ot.initializePlugins(this,t,n),n)!(r in e)&&(e[r]=n[r]);for(var i in Xt(e),this)"_"===i.charAt(0)&&"function"===typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&qt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?I(t,"pointerdown",this._onTapStart):(I(t,"mousedown",this._onTapStart),I(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(I(t,"dragover",this),I(t,"dragenter",this)),Ut.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,tt())}function re(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}function ie(t,e,n,r,i,o,s,a){var c,u,l=t[Z],h=l.options.onMove;return!window.CustomEvent||y||b?(c=document.createEvent("Event"),c.initEvent("move",!0,!0)):c=new CustomEvent("move",{bubbles:!0,cancelable:!0}),c.to=e,c.from=t,c.dragged=n,c.draggedRect=r,c.related=i||e,c.relatedRect=o||U(e),c.willInsertAfter=a,c.originalEvent=s,t.dispatchEvent(c),h&&(u=h.call(l,c,s)),u}function oe(t){t.draggable=!1}function se(){Bt=!1}function ae(t,e,n){var r=U(V(n.el,0,n.options,!0)),i=10;return e?t.clientX<r.left-i||t.clientY<r.top&&t.clientX<r.right:t.clientY<r.top-i||t.clientY<r.bottom&&t.clientX<r.left}function ce(t,e,n){var r=U(j(n.el,n.options.draggable)),i=10;return e?t.clientX>r.right+i||t.clientX<=r.right&&t.clientY>r.bottom&&t.clientX>=r.left:t.clientX>r.right&&t.clientY>r.top||t.clientX<=r.right&&t.clientY>r.bottom+i}function ue(t,e,n,r,i,o,s,a){var c=r?t.clientY:t.clientX,u=r?n.height:n.width,l=r?n.top:n.left,h=r?n.bottom:n.right,d=!1;if(!s)if(a&&Nt<u*i){if(!Ft&&(1===Rt?c>l+u*o/2:c<h-u*o/2)&&(Ft=!0),Ft)d=!0;else if(1===Rt?c<l+Nt:c>h-Nt)return-Rt}else if(c>l+u*(1-i)/2&&c<h-u*(1-i)/2)return le(e);return d=d||s,d&&(c<l+u*o/2||c>h-u*o/2)?c>l+u/2?1:-1:0}function le(t){return B(lt)<B(t)?1:-1}function he(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,r=0;while(n--)r+=e.charCodeAt(n);return r.toString(36)}function de(t){$t.length=0;var e=t.getElementsByTagName("input"),n=e.length;while(n--){var r=e[n];r.checked&&$t.push(r)}}function fe(t){return setTimeout(t,0)}function pe(t){return clearTimeout(t)}ne.prototype={constructor:ne,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Dt=null)},_getDirection:function(t,e){return"function"===typeof this.options.direction?this.options.direction.call(this,t,e,lt):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,r=this.options,i=r.preventOnFilter,o=t.type,s=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,a=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||a,u=r.filter;if(de(n),!lt&&!(/mousedown|pointerdown/.test(o)&&0!==t.button||r.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!w||!a||"SELECT"!==a.tagName.toUpperCase())&&(a=O(a,r.draggable,n,!1),(!a||!a.animated)&&gt!==a)){if(yt=B(a),_t=B(a,r.draggable),"function"===typeof u){if(u.call(this,t,a,this))return ut({sortable:e,rootEl:c,name:"filter",targetEl:a,toEl:n,fromEl:n}),ct("filter",e,{evt:t}),void(i&&t.cancelable&&t.preventDefault())}else if(u&&(u=u.split(",").some((function(r){if(r=O(c,r.trim(),n,!1),r)return ut({sortable:e,rootEl:r,name:"filter",targetEl:a,fromEl:n,toEl:n}),ct("filter",e,{evt:t}),!0})),u))return void(i&&t.cancelable&&t.preventDefault());r.handle&&!O(c,r.handle,n,!1)||this._prepareDragStart(t,s,a)}}},_prepareDragStart:function(t,e,n){var r,i=this,o=i.el,s=i.options,a=o.ownerDocument;if(n&&!lt&&n.parentNode===o){var c=U(n);if(ft=o,lt=n,ht=lt.parentNode,pt=lt.nextSibling,gt=n,Et=s.group,ne.dragged=lt,St={target:lt,clientX:(e||t).clientX,clientY:(e||t).clientY},kt=St.clientX-c.left,Ot=St.clientY-c.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,lt.style["will-change"]="all",r=function(){ct("delayEnded",i,{evt:t}),ne.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!_&&i.nativeDraggable&&(lt.draggable=!0),i._triggerDragStart(t,e),ut({sortable:i,name:"choose",originalEvent:t}),R(lt,s.chosenClass,!0))},s.ignore.split(",").forEach((function(t){L(lt,t.trim(),oe)})),I(a,"dragover",te),I(a,"mousemove",te),I(a,"touchmove",te),I(a,"mouseup",i._onDrop),I(a,"touchend",i._onDrop),I(a,"touchcancel",i._onDrop),_&&this.nativeDraggable&&(this.options.touchStartThreshold=4,lt.draggable=!0),ct("delayStart",this,{evt:t}),!s.delay||s.delayOnTouchOnly&&!e||this.nativeDraggable&&(b||y))r();else{if(ne.eventCanceled)return void this._onDrop();I(a,"mouseup",i._disableDelayedDrag),I(a,"touchend",i._disableDelayedDrag),I(a,"touchcancel",i._disableDelayedDrag),I(a,"mousemove",i._delayedDragTouchMoveHandler),I(a,"touchmove",i._delayedDragTouchMoveHandler),s.supportPointer&&I(a,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(r,s.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){lt&&oe(lt),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._disableDelayedDrag),C(t,"touchend",this._disableDelayedDrag),C(t,"touchcancel",this._disableDelayedDrag),C(t,"mousemove",this._delayedDragTouchMoveHandler),C(t,"touchmove",this._delayedDragTouchMoveHandler),C(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?I(document,"pointermove",this._onTouchMove):I(document,e?"touchmove":"mousemove",this._onTouchMove):(I(lt,"dragend",this),I(ft,"dragstart",this._onDragStart));try{document.selection?fe((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(n){}},_dragStarted:function(t,e){if(Lt=!1,ft&&lt){ct("dragStarted",this,{evt:e}),this.nativeDraggable&&I(document,"dragover",ee);var n=this.options;!t&&R(lt,n.dragClass,!1),R(lt,n.ghostClass,!0),ne.active=this,t&&this._appendGhost(),ut({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(It){this._lastX=It.clientX,this._lastY=It.clientY,Jt();var t=document.elementFromPoint(It.clientX,It.clientY),e=t;while(t&&t.shadowRoot){if(t=t.shadowRoot.elementFromPoint(It.clientX,It.clientY),t===e)break;e=t}if(lt.parentNode[Z]._isOutsideThisEl(t),e)do{if(e[Z]){var n=void 0;if(n=e[Z]._onDragOver({clientX:It.clientX,clientY:It.clientY,target:t,rootEl:e}),n&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);Zt()}},_onTouchMove:function(t){if(St){var e=this.options,n=e.fallbackTolerance,r=e.fallbackOffset,i=t.touches?t.touches[0]:t,o=dt&&P(dt,!0),s=dt&&o&&o.a,a=dt&&o&&o.d,c=Kt&&Pt&&$(Pt),u=(i.clientX-St.clientX+r.x)/(s||1)+(c?c[0]-jt[0]:0)/(s||1),l=(i.clientY-St.clientY+r.y)/(a||1)+(c?c[1]-jt[1]:0)/(a||1);if(!ne.active&&!Lt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(dt){o?(o.e+=u-(Ct||0),o.f+=l-(At||0)):o={a:1,b:0,c:0,d:1,e:u,f:l};var h="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");N(dt,"webkitTransform",h),N(dt,"mozTransform",h),N(dt,"msTransform",h),N(dt,"transform",h),Ct=u,At=l,It=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!dt){var t=this.options.fallbackOnBody?document.body:ft,e=U(lt,!0,Kt,!0,t),n=this.options;if(Kt){Pt=t;while("static"===N(Pt,"position")&&"none"===N(Pt,"transform")&&Pt!==document)Pt=Pt.parentNode;Pt!==document.body&&Pt!==document.documentElement?(Pt===document&&(Pt=M()),e.top+=Pt.scrollTop,e.left+=Pt.scrollLeft):Pt=M(),jt=$(Pt)}dt=lt.cloneNode(!0),R(dt,n.ghostClass,!1),R(dt,n.fallbackClass,!0),R(dt,n.dragClass,!0),N(dt,"transition",""),N(dt,"transform",""),N(dt,"box-sizing","border-box"),N(dt,"margin",0),N(dt,"top",e.top),N(dt,"left",e.left),N(dt,"width",e.width),N(dt,"height",e.height),N(dt,"opacity","0.8"),N(dt,"position",Kt?"absolute":"fixed"),N(dt,"zIndex","100000"),N(dt,"pointerEvents","none"),ne.ghost=dt,t.appendChild(dt),N(dt,"transform-origin",kt/parseInt(dt.style.width)*100+"% "+Ot/parseInt(dt.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,r=t.dataTransfer,i=n.options;ct("dragStart",this,{evt:t}),ne.eventCanceled?this._onDrop():(ct("setupClone",this),ne.eventCanceled||(mt=Y(lt),mt.draggable=!1,mt.style["will-change"]="",this._hideClone(),R(mt,this.options.chosenClass,!1),ne.clone=mt),n.cloneId=fe((function(){ct("clone",n),ne.eventCanceled||(n.options.removeCloneOnHide||ft.insertBefore(mt,lt),n._hideClone(),ut({sortable:n,name:"clone"}))})),!e&&R(lt,i.dragClass,!0),e?(Mt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(C(document,"mouseup",n._onDrop),C(document,"touchend",n._onDrop),C(document,"touchcancel",n._onDrop),r&&(r.effectAllowed="move",i.setData&&i.setData.call(n,r,lt)),I(document,"drop",n),N(lt,"transform","translateZ(0)")),Lt=!0,n._dragStartId=fe(n._dragStarted.bind(n,e,t)),I(document,"selectstart",n),xt=!0,w&&N(document.body,"user-select","none"))},_onDragOver:function(t){var e,n,r,o,s=this.el,a=t.target,c=this.options,u=c.group,l=ne.active,h=Et===u,d=c.sort,f=Tt||l,p=this,g=!1;if(!Bt){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=O(a,c.draggable,s,!0),D("dragOver"),ne.eventCanceled)return g;if(lt.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return L(!1);if(Mt=!1,l&&!c.disabled&&(h?d||(r=ht!==ft):Tt===this||(this.lastPutMode=Et.checkPull(this,l,lt,t))&&u.checkPut(this,l,lt,t))){if(o="vertical"===this._getDirection(t,a),e=U(lt),D("dragOverValid"),ne.eventCanceled)return g;if(r)return ht=ft,P(),this._hideClone(),D("revert"),ne.eventCanceled||(pt?ft.insertBefore(lt,pt):ft.appendChild(lt)),L(!0);var m=j(s,c.draggable);if(!m||ce(t,o,this)&&!m.animated){if(m===lt)return L(!1);if(m&&s===t.target&&(a=m),a&&(n=U(a)),!1!==ie(ft,s,lt,e,a,n,t,!!a))return P(),s.appendChild(lt),ht=s,M(),L(!0)}else if(m&&ae(t,o,this)){var v=V(s,0,c,!0);if(v===lt)return L(!1);if(a=v,n=U(a),!1!==ie(ft,s,lt,e,a,n,t,!1))return P(),s.insertBefore(lt,v),ht=s,M(),L(!0)}else if(a.parentNode===s){n=U(a);var y,b,_=0,w=lt.parentNode!==s,E=!Qt(lt.animated&&lt.toRect||e,a.animated&&a.toRect||n,o),T=o?"top":"left",S=F(a,"top","top")||F(lt,"top","top"),I=S?S.scrollTop:void 0;if(Dt!==a&&(y=n[T],Ft=!1,Vt=!E&&c.invertSwap||w),_=ue(t,a,n,o,E?1:c.swapThreshold,null==c.invertedSwapThreshold?c.swapThreshold:c.invertedSwapThreshold,Vt,Dt===a),0!==_){var C=B(lt);do{C-=_,b=ht.children[C]}while(b&&("none"===N(b,"display")||b===dt))}if(0===_||b===a)return L(!1);Dt=a,Rt=_;var A=a.nextElementSibling,k=!1;k=1===_;var x=ie(ft,s,lt,e,a,n,t,k);if(!1!==x)return 1!==x&&-1!==x||(k=1===x),Bt=!0,setTimeout(se,30),P(),k&&!A?s.appendChild(lt):a.parentNode.insertBefore(lt,k?A:a),S&&Q(S,0,I-S.scrollTop),ht=lt.parentNode,void 0===y||Vt||(Nt=Math.abs(y-U(a)[T])),M(),L(!0)}if(s.contains(lt))return L(!1)}return!1}function D(c,u){ct(c,p,i({evt:t,isOwner:h,axis:o?"vertical":"horizontal",revert:r,dragRect:e,targetRect:n,canSort:d,fromSortable:f,target:a,completed:L,onMove:function(n,r){return ie(ft,s,lt,e,n,U(n),t,r)},changed:M},u))}function P(){D("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function L(e){return D("dragOverCompleted",{insertion:e}),e&&(h?l._hideClone():l._showClone(p),p!==f&&(R(lt,Tt?Tt.options.ghostClass:l.options.ghostClass,!1),R(lt,c.ghostClass,!0)),Tt!==p&&p!==ne.active?Tt=p:p===ne.active&&Tt&&(Tt=null),f===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){D("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(a===lt&&!lt.animated||a===s&&!a.animated)&&(Dt=null),c.dragoverBubble||t.rootEl||a===document||(lt.parentNode[Z]._isOutsideThisEl(t.target),!e&&te(t)),!c.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),g=!0}function M(){bt=B(lt),wt=B(lt,c.draggable),ut({sortable:p,name:"change",toEl:s,newIndex:bt,newDraggableIndex:wt,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){C(document,"mousemove",this._onTouchMove),C(document,"touchmove",this._onTouchMove),C(document,"pointermove",this._onTouchMove),C(document,"dragover",te),C(document,"mousemove",te),C(document,"touchmove",te)},_offUpEvents:function(){var t=this.el.ownerDocument;C(t,"mouseup",this._onDrop),C(t,"touchend",this._onDrop),C(t,"pointerup",this._onDrop),C(t,"touchcancel",this._onDrop),C(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;bt=B(lt),wt=B(lt,n.draggable),ct("drop",this,{evt:t}),ht=lt&&lt.parentNode,bt=B(lt),wt=B(lt,n.draggable),ne.eventCanceled||(Lt=!1,Vt=!1,Ft=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),pe(this.cloneId),pe(this._dragStartId),this.nativeDraggable&&(C(document,"drop",this),C(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),w&&N(document.body,"user-select",""),N(lt,"transform",""),t&&(xt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),dt&&dt.parentNode&&dt.parentNode.removeChild(dt),(ft===ht||Tt&&"clone"!==Tt.lastPutMode)&&mt&&mt.parentNode&&mt.parentNode.removeChild(mt),lt&&(this.nativeDraggable&&C(lt,"dragend",this),oe(lt),lt.style["will-change"]="",xt&&!Lt&&R(lt,Tt?Tt.options.ghostClass:this.options.ghostClass,!1),R(lt,this.options.chosenClass,!1),ut({sortable:this,name:"unchoose",toEl:ht,newIndex:null,newDraggableIndex:null,originalEvent:t}),ft!==ht?(bt>=0&&(ut({rootEl:ht,name:"add",toEl:ht,fromEl:ft,originalEvent:t}),ut({sortable:this,name:"remove",toEl:ht,originalEvent:t}),ut({rootEl:ht,name:"sort",toEl:ht,fromEl:ft,originalEvent:t}),ut({sortable:this,name:"sort",toEl:ht,originalEvent:t})),Tt&&Tt.save()):bt!==yt&&bt>=0&&(ut({sortable:this,name:"update",toEl:ht,originalEvent:t}),ut({sortable:this,name:"sort",toEl:ht,originalEvent:t})),ne.active&&(null!=bt&&-1!==bt||(bt=yt,wt=_t),ut({sortable:this,name:"end",toEl:ht,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){ct("nulling",this),ft=lt=ht=dt=pt=mt=gt=vt=St=It=xt=bt=wt=yt=_t=Dt=Rt=Tt=Et=ne.dragged=ne.ghost=ne.clone=ne.active=null,$t.forEach((function(t){t.checked=!0})),$t.length=Ct=At=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":lt&&(this._onDragOver(t),re(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t,e=[],n=this.el.children,r=0,i=n.length,o=this.options;r<i;r++)t=n[r],O(t,o.draggable,this.el,!1)&&e.push(t.getAttribute(o.dataIdAttr)||he(t));return e},sort:function(t,e){var n={},r=this.el;this.toArray().forEach((function(t,e){var i=r.children[e];O(i,this.options.draggable,r,!1)&&(n[t]=i)}),this),e&&this.captureAnimationState(),t.forEach((function(t){n[t]&&(r.removeChild(n[t]),r.appendChild(n[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return O(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var r=ot.modifyOption(this,t,e);n[t]="undefined"!==typeof r?r:e,"group"===t&&Xt(n)},destroy:function(){ct("destroy",this);var t=this.el;t[Z]=null,C(t,"mousedown",this._onTapStart),C(t,"touchstart",this._onTapStart),C(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(C(t,"dragover",this),C(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Ut.splice(Ut.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!vt){if(ct("hideClone",this),ne.eventCanceled)return;N(mt,"display","none"),this.options.removeCloneOnHide&&mt.parentNode&&mt.parentNode.removeChild(mt),vt=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(vt){if(ct("showClone",this),ne.eventCanceled)return;lt.parentNode!=ft||this.options.group.revertClone?pt?ft.insertBefore(mt,pt):ft.appendChild(mt):ft.insertBefore(mt,lt),this.options.group.revertClone&&this.animate(lt,mt),N(mt,"display",""),vt=!1}}else this._hideClone()}},Ht&&I(document,"touchmove",(function(t){(ne.active||Lt)&&t.cancelable&&t.preventDefault()})),ne.utils={on:I,off:C,css:N,find:L,is:function(t,e){return!!O(t,e,t,!1)},extend:z,throttle:W,closest:O,toggleClass:R,clone:Y,index:B,nextTick:fe,cancelNextTick:pe,detectDirection:Gt,getChild:V},ne.get=function(t){return t[Z]},ne.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(ne.utils=i(i({},ne.utils),t.utils)),ot.mount(t)}))},ne.create=function(t,e){return new ne(t,e)},ne.version=m;var ge,me,ve,ye,be,_e,we=[],Ee=!1;function Te(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"===typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?I(document,"dragover",this._handleAutoScroll):this.options.supportPointer?I(document,"pointermove",this._handleFallbackAutoScroll):e.touches?I(document,"touchmove",this._handleFallbackAutoScroll):I(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):(C(document,"pointermove",this._handleFallbackAutoScroll),C(document,"touchmove",this._handleFallbackAutoScroll),C(document,"mousemove",this._handleFallbackAutoScroll)),Ie(),Se(),G()},nulling:function(){be=me=ge=Ee=_e=ve=ye=null,we.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,r=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,o=document.elementFromPoint(r,i);if(be=t,e||this.options.forceAutoScrollFallback||b||y||w){Ae(t,this.options,o,e);var s=K(o,!0);!Ee||_e&&r===ve&&i===ye||(_e&&Ie(),_e=setInterval((function(){var o=K(document.elementFromPoint(r,i),!0);o!==s&&(s=o,Se()),Ae(t,n.options,o,e)}),10),ve=r,ye=i)}else{if(!this.options.bubbleScroll||K(o,!0)===M())return void Se();Ae(t,this.options,K(o,!1),!1)}}},a(t,{pluginName:"scroll",initializeByDefault:!0})}function Se(){we.forEach((function(t){clearInterval(t.pid)})),we=[]}function Ie(){clearInterval(_e)}var Ce,Ae=W((function(t,e,n,r){if(e.scroll){var i,o=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,c=e.scrollSpeed,u=M(),l=!1;me!==n&&(me=n,Se(),ge=e.scroll,i=e.scrollFn,!0===ge&&(ge=K(n,!0)));var h=0,d=ge;do{var f=d,p=U(f),g=p.top,m=p.bottom,v=p.left,y=p.right,b=p.width,_=p.height,w=void 0,E=void 0,T=f.scrollWidth,S=f.scrollHeight,I=N(f),C=f.scrollLeft,A=f.scrollTop;f===u?(w=b<T&&("auto"===I.overflowX||"scroll"===I.overflowX||"visible"===I.overflowX),E=_<S&&("auto"===I.overflowY||"scroll"===I.overflowY||"visible"===I.overflowY)):(w=b<T&&("auto"===I.overflowX||"scroll"===I.overflowX),E=_<S&&("auto"===I.overflowY||"scroll"===I.overflowY));var k=w&&(Math.abs(y-o)<=a&&C+b<T)-(Math.abs(v-o)<=a&&!!C),O=E&&(Math.abs(m-s)<=a&&A+_<S)-(Math.abs(g-s)<=a&&!!A);if(!we[h])for(var x=0;x<=h;x++)we[x]||(we[x]={});we[h].vx==k&&we[h].vy==O&&we[h].el===f||(we[h].el=f,we[h].vx=k,we[h].vy=O,clearInterval(we[h].pid),0==k&&0==O||(l=!0,we[h].pid=setInterval(function(){r&&0===this.layer&&ne.active._onTouchMove(be);var e=we[this.layer].vy?we[this.layer].vy*c:0,n=we[this.layer].vx?we[this.layer].vx*c:0;"function"===typeof i&&"continue"!==i.call(ne.dragged.parentNode[Z],n,e,t,be,we[this.layer].el)||Q(we[this.layer].el,n,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&d!==u&&(d=K(d,!1)));Ee=l}}),30),ke=function(t){var e=t.originalEvent,n=t.putSortable,r=t.dragEl,i=t.activeSortable,o=t.dispatchSortableEvent,s=t.hideGhostForTarget,a=t.unhideGhostForTarget;if(e){var c=n||i;s();var u=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,l=document.elementFromPoint(u.clientX,u.clientY);a(),c&&!c.el.contains(l)&&(o("spill"),this.onSpill({dragEl:r,putSortable:n}))}};function Oe(){}function xe(){}function De(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){var e=t.dragEl;Ce=e},dragOverValid:function(t){var e=t.completed,n=t.target,r=t.onMove,i=t.activeSortable,o=t.changed,s=t.cancel;if(i.options.swap){var a=this.sortable.el,c=this.options;if(n&&n!==a){var u=Ce;!1!==r(n)?(R(n,c.swapClass,!0),Ce=n):Ce=null,u&&u!==Ce&&R(u,c.swapClass,!1)}o(),e(!0),s()}},drop:function(t){var e=t.activeSortable,n=t.putSortable,r=t.dragEl,i=n||this.sortable,o=this.options;Ce&&R(Ce,o.swapClass,!1),Ce&&(o.swap||n&&n.options.swap)&&r!==Ce&&(i.captureAnimationState(),i!==e&&e.captureAnimationState(),Re(r,Ce),i.animateAll(),i!==e&&e.animateAll())},nulling:function(){Ce=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Ce}}})}function Re(t,e){var n,r,i=t.parentNode,o=e.parentNode;i&&o&&!i.isEqualNode(e)&&!o.isEqualNode(t)&&(n=B(t),r=B(e),i.isEqualNode(o)&&n<r&&r++,i.insertBefore(e,i.children[n]),o.insertBefore(t,o.children[r]))}Oe.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var r=V(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(e,r):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:ke},a(Oe,{pluginName:"revertOnSpill"}),xe.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable,r=n||this.sortable;r.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),r.animateAll()},drop:ke},a(xe,{pluginName:"removeOnSpill"});var Ne,Pe,Le,Me,Ue,Fe=[],Ve=[],je=!1,Be=!1,$e=!1;function He(){function t(t){for(var e in this)"_"===e.charAt(0)&&"function"===typeof this[e]&&(this[e]=this[e].bind(this));t.options.supportPointer?I(document,"pointerup",this._deselectMultiDrag):(I(document,"mouseup",this._deselectMultiDrag),I(document,"touchend",this._deselectMultiDrag)),I(document,"keydown",this._checkKeyDown),I(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(e,n){var r="";Fe.length&&Pe===t?Fe.forEach((function(t,e){r+=(e?", ":"")+t.textContent})):r=n.textContent,e.setData("Text",r)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){var e=t.dragEl;Le=e},delayEnded:function(){this.isMultiDrag=~Fe.indexOf(Le)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var r=0;r<Fe.length;r++)Ve.push(Y(Fe[r])),Ve[r].sortableIndex=Fe[r].sortableIndex,Ve[r].draggable=!1,Ve[r].style["will-change"]="",R(Ve[r],this.options.selectedClass,!1),Fe[r]===Le&&R(Ve[r],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.sortable,n=t.rootEl,r=t.dispatchSortableEvent,i=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||Fe.length&&Pe===e&&(ze(!0,n),r("clone"),i()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,r=t.cancel;this.isMultiDrag&&(ze(!1,n),Ve.forEach((function(t){N(t,"display","")})),e(),Ue=!1,r())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),r=t.cancel;this.isMultiDrag&&(Ve.forEach((function(t){N(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)})),n(),Ue=!0,r())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&Pe&&Pe.multiDrag._deselectMultiDrag(),Fe.forEach((function(t){t.sortableIndex=B(t)})),Fe=Fe.sort((function(t,e){return t.sortableIndex-e.sortableIndex})),$e=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){Fe.forEach((function(t){t!==Le&&N(t,"position","absolute")}));var r=U(Le,!1,!0,!0);Fe.forEach((function(t){t!==Le&&X(t,r)})),Be=!0,je=!0}n.animateAll((function(){Be=!1,je=!1,e.options.animation&&Fe.forEach((function(t){J(t)})),e.options.sort&&qe()}))}},dragOver:function(t){var e=t.target,n=t.completed,r=t.cancel;Be&&~Fe.indexOf(e)&&(n(!1),r())},revert:function(t){var e=t.fromSortable,n=t.rootEl,r=t.sortable,i=t.dragRect;Fe.length>1&&(Fe.forEach((function(t){r.addAnimationState({target:t,rect:Be?U(t):i}),J(t),t.fromRect=i,e.removeAnimationState(t)})),Be=!1,Ke(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,r=t.insertion,i=t.activeSortable,o=t.parentEl,s=t.putSortable,a=this.options;if(r){if(n&&i._hideClone(),je=!1,a.animation&&Fe.length>1&&(Be||!n&&!i.options.sort&&!s)){var c=U(Le,!1,!0,!0);Fe.forEach((function(t){t!==Le&&(X(t,c),o.appendChild(t))})),Be=!0}if(!n)if(Be||qe(),Fe.length>1){var u=Ue;i._showClone(e),i.options.animation&&!Ue&&u&&Ve.forEach((function(t){i.addAnimationState({target:t,rect:Me}),t.fromRect=Me,t.thisAnimationDuration=null}))}else i._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,r=t.activeSortable;if(Fe.forEach((function(t){t.thisAnimationDuration=null})),r.options.animation&&!n&&r.multiDrag.isMultiDrag){Me=a({},e);var i=P(Le,!0);Me.top-=i.f,Me.left-=i.e}},dragOverAnimationComplete:function(){Be&&(Be=!1,qe())},drop:function(t){var e=t.originalEvent,n=t.rootEl,r=t.parentEl,i=t.sortable,o=t.dispatchSortableEvent,s=t.oldIndex,a=t.putSortable,c=a||this.sortable;if(e){var u=this.options,l=r.children;if(!$e)if(u.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),R(Le,u.selectedClass,!~Fe.indexOf(Le)),~Fe.indexOf(Le))Fe.splice(Fe.indexOf(Le),1),Ne=null,st({sortable:i,rootEl:n,name:"deselect",targetEl:Le,originalEvt:e});else{if(Fe.push(Le),st({sortable:i,rootEl:n,name:"select",targetEl:Le,originalEvt:e}),e.shiftKey&&Ne&&i.el.contains(Ne)){var h,d,f=B(Ne),p=B(Le);if(~f&&~p&&f!==p)for(p>f?(d=f,h=p):(d=p,h=f+1);d<h;d++)~Fe.indexOf(l[d])||(R(l[d],u.selectedClass,!0),Fe.push(l[d]),st({sortable:i,rootEl:n,name:"select",targetEl:l[d],originalEvt:e}))}else Ne=Le;Pe=c}if($e&&this.isMultiDrag){if(Be=!1,(r[Z].options.sort||r!==n)&&Fe.length>1){var g=U(Le),m=B(Le,":not(."+this.options.selectedClass+")");if(!je&&u.animation&&(Le.thisAnimationDuration=null),c.captureAnimationState(),!je&&(u.animation&&(Le.fromRect=g,Fe.forEach((function(t){if(t.thisAnimationDuration=null,t!==Le){var e=Be?U(t):g;t.fromRect=e,c.addAnimationState({target:t,rect:e})}}))),qe(),Fe.forEach((function(t){l[m]?r.insertBefore(t,l[m]):r.appendChild(t),m++})),s===B(Le))){var v=!1;Fe.forEach((function(t){t.sortableIndex===B(t)||(v=!0)})),v&&o("update")}Fe.forEach((function(t){J(t)})),c.animateAll()}Pe=c}(n===r||a&&"clone"!==a.lastPutMode)&&Ve.forEach((function(t){t.parentNode&&t.parentNode.removeChild(t)}))}},nullingGlobal:function(){this.isMultiDrag=$e=!1,Ve.length=0},destroyGlobal:function(){this._deselectMultiDrag(),C(document,"pointerup",this._deselectMultiDrag),C(document,"mouseup",this._deselectMultiDrag),C(document,"touchend",this._deselectMultiDrag),C(document,"keydown",this._checkKeyDown),C(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(("undefined"===typeof $e||!$e)&&Pe===this.sortable&&(!t||!O(t.target,this.options.draggable,this.sortable.el,!1))&&(!t||0===t.button))while(Fe.length){var e=Fe[0];R(e,this.options.selectedClass,!1),Fe.shift(),st({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[Z];e&&e.options.multiDrag&&!~Fe.indexOf(t)&&(Pe&&Pe!==e&&(Pe.multiDrag._deselectMultiDrag(),Pe=e),R(t,e.options.selectedClass,!0),Fe.push(t))},deselect:function(t){var e=t.parentNode[Z],n=Fe.indexOf(t);e&&e.options.multiDrag&&~n&&(R(t,e.options.selectedClass,!1),Fe.splice(n,1))}},eventProperties:function(){var t=this,e=[],n=[];return Fe.forEach((function(r){var i;e.push({multiDragElement:r,index:r.sortableIndex}),i=Be&&r!==Le?-1:Be?B(r,":not(."+t.options.selectedClass+")"):B(r),n.push({multiDragElement:r,index:i})})),{items:l(Fe),clones:[].concat(Ve),oldIndicies:e,newIndicies:n}},optionListeners:{multiDragKey:function(t){return t=t.toLowerCase(),"ctrl"===t?t="Control":t.length>1&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}function Ke(t,e){Fe.forEach((function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)}))}function ze(t,e){Ve.forEach((function(n,r){var i=e.children[n.sortableIndex+(t?Number(r):0)];i?e.insertBefore(n,i):e.appendChild(n)}))}function qe(){Fe.forEach((function(t){t!==Le&&t.parentNode&&t.parentNode.removeChild(t)}))}ne.mount(new Te),ne.mount(xe,Oe),e["default"]=ne},97073:function(t,e,n){"use strict";n.d(e,{f0:function(){return A}});var r=n(90033),i=n(20641);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){if("undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=t,o.defer=e.defer,e.preconnectOrigin){var s=document.createElement("link");s.href=e.preconnectOrigin,s.rel="preconnect",i.appendChild(s)}i.appendChild(o),o.onload=n,o.onerror=r}}))},u=function t(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];if(!i.length)return e;var a=i.shift();if((0,r.Qd)(e)&&(0,r.Qd)(a)){for(var c in a)(0,r.Qd)(a[c])?(e[c]||Object.assign(e,o({},c,{})),t(e[c],a[c])):Object.assign(e,o({},c,a[c]));return t.apply(void 0,[e].concat(i))}},l=function(){return"undefined"!==typeof window&&"undefined"!==typeof document},h=function(t){l()},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return h('Missing "appName" property inside the plugin options.',null==t.app_name),h('Missing "name" property in the route.',null==t.screen_name),t};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.split("/"),r=e.split("/");return""===n[0]&&"/"===e[e.length-1]&&n.shift(),r.join("/")+n.join("/")}var p,g=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},m={},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=g();m=u(e,t)},y=function(){return m},b=function(){var t,e=y(),n=e.globalObjectName;l()&&"undefined"!==typeof window[n]&&(t=window)[n].apply(t,arguments)},_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=y(),i=r.config,o=r.includes;b.apply(void 0,["config",i.id].concat(e)),Array.isArray(o)&&o.forEach((function(t){b.apply(void 0,["config",t.id].concat(e))}))},w=function(t,e){l()&&(window["ga-disable-".concat(t)]=e)},E=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=y(),n=e.config,r=e.includes;w(n.id,t),Array.isArray(r)&&r.forEach((function(e){return w(e.id,t)}))},T=function(){E(!0)},S=function(){E(!1)},I=function(t){p=t},C=function(){return p},A=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=y(),r=n.includes,i=n.defaultGroupName;null==e.send_to&&Array.isArray(r)&&r.length&&(e.send_to=r.map((function(t){return t.id})).concat(i)),b("event",t,e)},k=function(t){if(l()){var e;if("string"===typeof t)e={page_path:t};else if(t.path||t.fullPath){var n=y(),r=n.pageTrackerUseFullPath,i=n.pageTrackerPrependBase,o=C(),s=o&&o.options.base,c=r?t.fullPath:t.path;e=a(a({},t.name&&{page_title:t.name}),{},{page_path:i?f(c,s):c})}else e=t;null==e.page_location&&(e.page_location=window.location.href),null==e.send_page_view&&(e.send_page_view=!0),A("page_view",e)}},O=function(t){var e,n=y(),r=n.appName;t&&(e="string"===typeof t?{screen_name:t}:t,e.app_name=e.app_name||r,A("screen_view",e))},x=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];A.apply(void 0,["exception"].concat(e))},D=function(t){_("linker",t)},R=function(t){A("timing_complete",t)},N=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];b.apply(void 0,["set"].concat(e))},P=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];A.apply(void 0,["refund"].concat(e))},L=function(t){A("purchase",t)},M=function(t){_({custom_map:t})},U=Object.freeze({__proto__:null,query:b,config:_,optOut:T,optIn:S,pageview:k,screenview:O,exception:x,linker:D,time:R,set:N,refund:P,purchase:L,customMap:M,event:A}),F=function(t){t.config.globalProperties.$gtag=U},V=function(){if(l()){var t=y(),e=t.enabled,n=t.globalObjectName,r=t.globalDataLayerName;return null==window[n]&&(window[r]=window[r]||[],window[n]=function(){window[r].push(arguments)}),window[n]("js",new Date),e||T(),window[n]}},j=function(t){return a({send_page_view:!1},t)},B=function(){var t=y(),e=t.config,n=t.includes;b("config",e.id,j(e.params)),Array.isArray(n)&&n.forEach((function(t){b("config",t.id,j(t.params))}))},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=y(),i=n.appName,o=n.pageTrackerTemplate,s=n.pageTrackerScreenviewEnabled,a=n.pageTrackerSkipSamePath;if(!a||t.path!==e.path){var c=t;(0,r.Tn)(o)?c=o(t,e):s&&(c=d({app_name:i,screen_name:t.name})),s?O(c):k(c)}},H=function(t){var e=y(),n=e.pageTrackerExcludedRoutes;return n.includes(t.path)||n.includes(t.name)},K=function(){var t=y(),e=t.onBeforeTrack,n=t.onAfterTrack,o=C();o.isReady().then((function(){(0,i.dY)().then((function(){var t=o.currentRoute;B(),H(t.value)||$(t.value)})),o.afterEach((function(t,o){(0,i.dY)().then((function(){H(t)||((0,r.Tn)(e)&&e(t,o),$(t,o),(0,r.Tn)(n)&&n(t,o))}))}))}))},z=function(){var t=y(),e=t.onReady,n=t.onError,r=t.globalObjectName,i=t.globalDataLayerName,o=t.config,s=t.customResourceURL,a=t.customPreconnectOrigin,u=t.deferScriptLoad,l=t.pageTrackerEnabled,h=t.disableScriptLoad,d=Boolean(l&&C());if(V(),d?K():B(),!h)return c("".concat(s,"?id=").concat(o.id,"&l=").concat(i),{preconnectOrigin:a,defer:u}).then((function(){e&&e(window[r])}))["catch"]((function(t){return n&&n(t),t}))},q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;F(t),v(e),I(n),y().bootstrap&&z()};e.Ay=q},17318:function(t,e,n){"use strict";n.d(e,{A:function(){return j}});var r=n(20641),i=n(50953);
/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
function o(t,e){return e={exports:{}},t(e,e.exports),e.exports}var s=o((function(t){const e=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols;function i(t){return"function"===typeof t||"[object Object]"===e.call(t)||Array.isArray(t)}t.exports=(t,...e)=>{if(!i(t))throw new TypeError("expected the first argument to be an object");if(0===e.length||"function"!==typeof Symbol||"function"!==typeof r)return t;for(let i of e){let e=r(i);for(let r of e)n.call(i,r)&&(t[r]=i[r])}return t}})),a=Object.freeze({__proto__:null,default:s,__moduleExports:s}),c=a&&s||a,u=o((function(t){const e=Object.prototype.toString,n=t=>"__proto__"!==t&&"constructor"!==t&&"prototype"!==t,r=t.exports=(t,...e)=>{let s=0;for(o(t)&&(t=e[s++]),t||(t={});s<e.length;s++)if(i(e[s])){for(const o of Object.keys(e[s]))n(o)&&(i(t[o])&&i(e[s][o])?r(t[o],e[s][o]):t[o]=e[s][o]);c(t,e[s])}return t};function i(t){return"function"===typeof t||"[object Object]"===e.call(t)}function o(t){return"object"===typeof t?null===t:"function"!==typeof t}}));const l="undefined"!==typeof window&&null!==window,h=d();function d(){return!!(l&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}const f={event:"event",observer:"observer"};function p(t,e){if(!t.length)return;const n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}function g(t,e){if("IMG"!==t.tagName||!t.getAttribute("data-srcset"))return"";let n=t.getAttribute("data-srcset").trim().split(",");const r=[],i=t.parentNode,o=i.offsetWidth*e;let s,a,c;n.forEach((t=>{t=t.trim(),s=t.lastIndexOf(" "),-1===s?(a=t,c=99999):(a=t.substr(0,s),c=parseInt(t.substr(s+1,t.length-s-2),10)),r.push([c,a])})),r.sort(((t,e)=>{if(t[0]<e[0])return 1;if(t[0]>e[0])return-1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0}));let u,l="";for(let h=0;h<r.length;h++){u=r[h],l=u[1];const t=r[h+1];if(t&&t[0]<o){l=u[1];break}if(!t){l=u[1];break}}return l}const m=(t=1)=>l&&window.devicePixelRatio||t;function v(){if(!l)return!1;let t=!0;function e(t,e){const n={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},r=new Image;r.onload=function(){const t=r.width>0&&r.height>0;e(t)},r.onerror=function(){e(!1)},r.src="data:image/webp;base64,"+n[t]}return e("lossy",(e=>{t=e})),e("lossless",(e=>{t=e})),e("alpha",(e=>{t=e})),e("animation",(e=>{t=e})),t}function y(t,e){let n=null,r=0;return function(){if(n)return;const i=Date.now()-r,o=this,s=arguments,a=function(){r=Date.now(),n=!1,t.apply(o,s)};i>=e?a():n=setTimeout(a,e)}}function b(){if(!l)return!1;let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",A,e)}catch(e){}return t}const _=b(),w={on(t,e,n,r=!1){_?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off(t,e,n,r=!1){t.removeEventListener(e,n,r)}},E=(t,e,n)=>{let r=new Image;if(!t||!t.src){const t=new Error("image src is required");return n(t)}t.cors&&(r.crossOrigin=t.cors),r.src=t.src,r.onload=function(){e({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r=null},r.onerror=function(t){n(t)}},T=(t,e)=>"undefined"!==typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e],S=t=>T(t,"overflow")+T(t,"overflowY")+T(t,"overflowX"),I=t=>{if(!l)return;if(!(t instanceof Element))return window;let e=t;while(e){if(e===document.body||e===document.documentElement)break;if(!e.parentNode)break;if(/(scroll|auto)/.test(S(e)))return e;e=e.parentNode}return window};function C(t){return null!==t&&"object"===typeof t}function A(){}class k{constructor(t){this.max=t||100,this._caches=[]}has(t){return this._caches.indexOf(t)>-1}add(t){this.has(t)||(this._caches.push(t),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class O{constructor(t,e,n,r,i,o,s,a,c,u){this.el=t,this.src=e,this.error=n,this.loading=r,this.bindType=i,this.attempt=0,this.cors=a,this.naturalHeight=0,this.naturalWidth=0,this.options=s,this.rect={},this.$parent=o,this.elRenderer=c,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(t){this.performanceData[t]=Date.now()}update(t){const e=this.src;this.src=t.src,this.loading=t.loading,this.error=t.error,this.filter(),e!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const t in this.options.filter)this.options.filter[t](this,this.options)}renderLoading(t){this.state.loading=!0,E({src:this.loading,cors:this.cors},(()=>{this.render("loading",!1),this.state.loading=!1,t()}),(()=>{t(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)}))}load(t=A){return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),void t()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t()):void this.renderLoading((()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),E({src:this.src,cors:this.cors},(e=>{this.naturalHeight=e.naturalHeight,this.naturalWidth=e.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),t()}),(t=>{!this.options.silent&&console.error(t),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)}))}))}render(t,e){this.elRenderer(this,t,e)}performance(){let t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const x="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",D=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],R={rootMargin:"0px",threshold:0};class N{constructor({preLoad:t,error:e,throttleWait:n,preLoadTop:r,dispatchEvent:i,loading:o,attempt:s,silent:a=!0,scale:c,listenEvents:u,filter:l,adapter:h,observer:d,observerOptions:p}){this.version='"3.0.0"',this.lazyContainerMananger=null,this.mode=f.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:a,dispatchEvent:!!i,throttleWait:n||200,preLoad:t||1.3,preLoadTop:r||0,error:e||x,loading:o||x,attempt:s||3,scale:c||m(c),listenEvents:u||D,supportWebp:v(),filter:l||{},adapter:h||{},observer:!!d,observerOptions:p||R},this._initEvent(),this._imageCache=new k(200),this.lazyLoadHandler=y(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?f.observer:f.event)}performance(){const t=[];return this.ListenerQueue.map((e=>t.push(e.performance()))),t}addLazyBox(t){this.ListenerQueue.push(t),l&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}add(t,e,n){if(this.ListenerQueue.some((e=>e.el===t)))return this.update(t,e),(0,r.dY)(this.lazyLoadHandler);let{src:i,loading:o,error:s,cors:a}=this._valueFormatter(e.value);(0,r.dY)((()=>{i=g(t,this.options.scale)||i,this._observer&&this._observer.observe(t);const n=Object.keys(e.modifiers)[0];let c;n&&(c=e.instance.$refs[n],c=c?c.el||c:document.getElementById(n)),c||(c=I(t));const u=new O(t,i,s,o,e.arg,c,this.options,a,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(u),l&&(this._addListenerTarget(window),this._addListenerTarget(c)),(0,r.dY)(this.lazyLoadHandler)}))}update(t,e,n){let{src:i,loading:o,error:s}=this._valueFormatter(e.value);i=g(t,this.options.scale)||i;const a=this.ListenerQueue.find((e=>e.el===t));a?a.update({src:i,loading:o,error:s}):"loaded"===t.getAttribute("lazy")&&t.dataset.src===i||this.add(t,e,n),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),(0,r.dY)(this.lazyLoadHandler)}remove(t){if(!t)return;this._observer&&this._observer.unobserve(t);const e=this.ListenerQueue.find((e=>e.el===t));e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),p(this.ListenerQueue,e),e.$destroy&&e.$destroy())}removeComponent(t){t&&(p(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}setMode(t){h||t!==f.observer||(t=f.event),this.mode=t,t===f.event?(this._observer&&(this.ListenerQueue.forEach((t=>{this._observer.unobserve(t.el)})),this._observer=null),this.TargetQueue.forEach((t=>{this._initListen(t.el,!0)}))):(this.TargetQueue.forEach((t=>{this._initListen(t.el,!1)})),this._initIntersectionObserver())}_addListenerTarget(t){if(!t)return;let e=this.TargetQueue.find((e=>e.el===t));return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===f.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}_removeListenerTarget(t){this.TargetQueue.forEach(((e,n)=>{e.el===t&&(e.childrenCount--,e.childrenCount||(this._initListen(e.el,!1),this.TargetQueue.splice(n,1),e=null))}))}_initListen(t,e){this.options.listenEvents.forEach((n=>w[e?"on":"off"](t,n,this.lazyLoadHandler)))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(t,e)=>{this.Event.listeners[t]||(this.Event.listeners[t]=[]),this.Event.listeners[t].push(e)},this.$once=(t,e)=>{const n=this;function r(){n.$off(t,r),e.apply(n,arguments)}this.$on(t,r)},this.$off=(t,e)=>{if(e)p(this.Event.listeners[t],e);else{if(!this.Event.listeners[t])return;this.Event.listeners[t].length=0}},this.$emit=(t,e,n)=>{this.Event.listeners[t]&&this.Event.listeners[t].forEach((t=>t(e,n)))}}_lazyLoadHandler(){const t=[];this.ListenerQueue.forEach(((e,n)=>{e.el&&e.el.parentNode&&!e.state.loaded||t.push(e);const r=e.checkInView();r&&(e.state.loaded||e.load())})),t.forEach((t=>{p(this.ListenerQueue,t),t.$destroy&&t.$destroy()}))}_initIntersectionObserver(){h&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((t=>{this._observer.observe(t.el)})))}_observerHandler(t){t.forEach((t=>{t.isIntersecting&&this.ListenerQueue.forEach((e=>{if(e.el===t.target){if(e.state.loaded)return this._observer.unobserve(e.el);e.load()}}))}))}_elRenderer(t,e,n){if(!t.el)return;const{el:r,bindType:i}=t;let o;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src;break}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){const n=new CustomEvent(e,{detail:t});r.dispatchEvent(n)}}_valueFormatter(t){return C(t)?(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),{src:t.src,loading:t.loading||this.options.loading,error:t.error||this.options.error,cors:this.options.cors}):{src:t,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const P=(t,e)=>{let n=(0,i.Kh)({});const r=()=>{n=t.value.getBoundingClientRect()},o=()=>(r(),l&&n.top<window.innerHeight*e&&n.bottom>0&&n.left<window.innerWidth*e&&n.right>0);return{rect:n,checkInView:o}};var L=t=>(0,r.pM)({props:{tag:{type:String,default:"div"}},emits:["show"],setup(e,{emit:n,slots:o}){const s=(0,i.KR)(),a=(0,i.Kh)({loaded:!1,error:!1,attempt:0}),c=(0,i.KR)(!1),{rect:u,checkInView:l}=P(s,t.options.preLoad),h=()=>{c.value=!0,a.loaded=!0,n("show",c.value)},d=(0,r.EW)((()=>({el:s.value,rect:u,checkInView:l,load:h,state:a})));return(0,r.sV)((()=>{t.addLazyBox(d.value),t.lazyLoadHandler()})),(0,r.hi)((()=>{t.removeComponent(d.value)})),()=>{var t;return(0,r.bF)(e.tag,{ref:s},[c.value&&(null===(t=o.default)||void 0===t?void 0:t.call(o))])}}});class M{constructor(t){this.lazy=t,t.lazyContainerMananger=this,this._queue=[]}bind(t,e,n){const r=new F(t,e,n,this.lazy);this._queue.push(r)}update(t,e,n){const r=this._queue.find((e=>e.el===t));r&&r.update(t,e)}unbind(t,e,n){const r=this._queue.find((e=>e.el===t));r&&(r.clear(),p(this._queue,r))}}const U={selector:"img",error:"",loading:""};class F{constructor(t,e,n,r){this.el=t,this.vnode=n,this.binding=e,this.options={},this.lazy=r,this._queue=[],this.update(t,e)}update(t,e){this.el=t,this.options=u({},U,e.value);const n=this.getImgs();n.forEach((t=>{this.lazy.add(t,u({},this.binding,{value:{src:t.getAttribute("data-src")||t.dataset.src,error:t.getAttribute("data-error")||t.dataset.error||this.options.error,loading:t.getAttribute("data-loading")||t.dataset.loading||this.options.loading}}),this.vnode)}))}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){const t=this.getImgs();t.forEach((t=>this.lazy.remove(t))),this.vnode=null,this.binding=null,this.lazy=null}}var V=t=>(0,r.pM)({setup(e,{slots:n}){const o=(0,i.KR)(),s=(0,i.Kh)({src:"",error:"",loading:"",attempt:t.options.attempt}),a=(0,i.Kh)({loaded:!1,error:!1,attempt:0}),{rect:c,checkInView:u}=P(o,t.options.preLoad),l=(0,i.KR)(""),h=(e=A)=>{if(a.attempt>s.attempt-1&&a.error)return t.options.silent||console.log(`VueLazyload log: ${s.src} tried too more than ${s.attempt} times`),e();const n=s.src;E({src:n},(({src:t})=>{l.value=t,a.loaded=!0}),(()=>{a.attempt++,l.value=s.error,a.error=!0}))},d=(0,r.EW)((()=>({el:o.value,rect:c,checkInView:u,load:h,state:a})));(0,r.sV)((()=>{t.addLazyBox(d.value),t.lazyLoadHandler()})),(0,r.hi)((()=>{t.removeComponent(d.value)}));const f=()=>{const{src:n,loading:r,error:i}=t._valueFormatter(e.src);a.loaded=!1,s.src=n,s.error=i,s.loading=r,l.value=s.loading};return(0,r.wB)((()=>e.src),(()=>{f(),t.addLazyBox(d.value),t.lazyLoadHandler()}),{immediate:!0}),()=>{var t;return(0,r.bF)(e.tag||"img",{src:l.value,ref:o},[null===(t=n.default)||void 0===t?void 0:t.call(n)])}}}),j={install(t,e={}){const n=new N(e),r=new M(n),i=Number(t.version.split(".")[0]);if(i<3)return new Error("Vue version at least 3.0");t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),e.lazyComponent&&t.component("lazy-component",L(n)),e.lazyImage&&t.component("lazy-image",V(n)),t.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),t.directive("lazy-container",{beforeMount:r.bind.bind(r),updated:r.update.bind(r),unmounted:r.unbind.bind(r)})}}},66262:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},8756:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseTransition:function(){return r.pR},BaseTransitionPropsValidators:function(){return r.QP},Comment:function(){return r.Mw},DeprecationTypes:function(){return r.aT},EffectScope:function(){return r.yC},ErrorCodes:function(){return r.tG},ErrorTypeStrings:function(){return r.ZQ},Fragment:function(){return r.FK},KeepAlive:function(){return r.PR},ReactiveEffect:function(){return r.X2},Static:function(){return r.jC},Suspense:function(){return r.tY},Teleport:function(){return r.Im},Text:function(){return r.EY},TrackOpTypes:function(){return r.Ul},Transition:function(){return r.eB},TransitionGroup:function(){return r.F},TriggerOpTypes:function(){return r.PP},VueElement:function(){return r.Vy},assertNumber:function(){return r.U4},callWithAsyncErrorHandling:function(){return r.qL},callWithErrorHandling:function(){return r.gh},camelize:function(){return r.PT},capitalize:function(){return r.ZH},cloneVNode:function(){return r.E3},compatUtils:function(){return r.Y5},compile:function(){return i},computed:function(){return r.EW},createApp:function(){return r.Ef},createBlock:function(){return r.Wv},createCommentVNode:function(){return r.Q3},createElementBlock:function(){return r.CE},createElementVNode:function(){return r.Lk},createHydrationRenderer:function(){return r.ci},createPropsRestProxy:function(){return r.bn},createRenderer:function(){return r.K9},createSSRApp:function(){return r.m1},createSlots:function(){return r.eX},createStaticVNode:function(){return r.Fv},createTextVNode:function(){return r.eW},createVNode:function(){return r.bF},customRef:function(){return r.rY},defineAsyncComponent:function(){return r.$V},defineComponent:function(){return r.pM},defineCustomElement:function(){return r.Xq},defineEmits:function(){return r.qP},defineExpose:function(){return r.wk},defineModel:function(){return r.NP},defineOptions:function(){return r.GM},defineProps:function(){return r.Yj},defineSSRCustomElement:function(){return r.Po},defineSlots:function(){return r.Lu},devtools:function(){return r.lt},effect:function(){return r.QZ},effectScope:function(){return r.uY},getCurrentInstance:function(){return r.nI},getCurrentScope:function(){return r.o5},getCurrentWatcher:function(){return r.Yv},getTransitionRawChildren:function(){return r.Df},guardReactiveProps:function(){return r.Ng},h:function(){return r.h},handleError:function(){return r.H4},hasInjectionContext:function(){return r.PS},hydrate:function(){return r.Qv},hydrateOnIdle:function(){return r.rU},hydrateOnInteraction:function(){return r.Tq},hydrateOnMediaQuery:function(){return r.dA},hydrateOnVisible:function(){return r.Pn},initCustomFormatter:function(){return r.y$},initDirectivesForSSR:function(){return r.Ib},inject:function(){return r.WQ},isMemoSame:function(){return r.Bs},isProxy:function(){return r.ju},isReactive:function(){return r.g8},isReadonly:function(){return r.Tm},isRef:function(){return r.i9},isRuntimeOnly:function(){return r.wX},isShallow:function(){return r.fE},isVNode:function(){return r.vv},markRaw:function(){return r.IG},mergeDefaults:function(){return r.HF},mergeModels:function(){return r.zz},mergeProps:function(){return r.v6},nextTick:function(){return r.dY},normalizeClass:function(){return r.C4},normalizeProps:function(){return r._B},normalizeStyle:function(){return r.Tr},onActivated:function(){return r.n},onBeforeMount:function(){return r.KC},onBeforeUnmount:function(){return r.xo},onBeforeUpdate:function(){return r.Ic},onDeactivated:function(){return r.Y4},onErrorCaptured:function(){return r.qG},onMounted:function(){return r.sV},onRenderTracked:function(){return r.qR},onRenderTriggered:function(){return r.bj},onScopeDispose:function(){return r.jr},onServerPrefetch:function(){return r.SS},onUnmounted:function(){return r.hi},onUpdated:function(){return r.$u},onWatcherCleanup:function(){return r.ch},openBlock:function(){return r.uX},popScopeId:function(){return r.jt},provide:function(){return r.Gt},proxyRefs:function(){return r.Pr},pushScopeId:function(){return r.Qi},queuePostFlushCb:function(){return r.Dl},reactive:function(){return r.Kh},readonly:function(){return r.tB},ref:function(){return r.KR},registerRuntimeCompiler:function(){return r.tC},render:function(){return r.XX},renderList:function(){return r.pI},renderSlot:function(){return r.RG},resolveComponent:function(){return r.g2},resolveDirective:function(){return r.gN},resolveDynamicComponent:function(){return r.$y},resolveFilter:function(){return r.LJ},resolveTransitionHooks:function(){return r.OW},setBlockTracking:function(){return r.Vq},setDevtoolsHook:function(){return r.iD},setTransitionHooks:function(){return r.MZ},shallowReactive:function(){return r.Gc},shallowReadonly:function(){return r.nD},shallowRef:function(){return r.IJ},ssrContextKey:function(){return r.Fw},ssrUtils:function(){return r.Gw},stop:function(){return r.ds},toDisplayString:function(){return r.v_},toHandlerKey:function(){return r.Kf},toHandlers:function(){return r.Tb},toRaw:function(){return r.ux},toRef:function(){return r.lW},toRefs:function(){return r.QW},toValue:function(){return r.BA},transformVNodeArgs:function(){return r.gW},triggerRef:function(){return r.mu},unref:function(){return r.R1},useAttrs:function(){return r.OA},useCssModule:function(){return r.D},useCssVars:function(){return r.$9},useHost:function(){return r.KT},useId:function(){return r.Bi},useModel:function(){return r.fn},useSSRContext:function(){return r.LM},useShadowRoot:function(){return r._U},useSlots:function(){return r.Ht},useTemplateRef:function(){return r.rk},useTransitionState:function(){return r.Gy},vModelCheckbox:function(){return r.lH},vModelDynamic:function(){return r.hp},vModelRadio:function(){return r.XL},vModelSelect:function(){return r.u1},vModelText:function(){return r.Jo},vShow:function(){return r.aG},version:function(){return r.rE},warn:function(){return r.R8},watch:function(){return r.wB},watchEffect:function(){return r.nT},watchPostEffect:function(){return r.p9},watchSyncEffect:function(){return r.U_},withAsyncContext:function(){return r.E},withCtx:function(){return r.k6},withDefaults:function(){return r.rO},withDirectives:function(){return r.bo},withKeys:function(){return r.jR},withMemo:function(){return r.bU},withModifiers:function(){return r.D$},withScopeId:function(){return r.YY}});var r=n(53751);
/**
* vue v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const i=()=>{0}},432:function(t,e,n){(function(e,r){t.exports=r(n(8756),n(10246))})("undefined"!==typeof self&&self,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("c04e"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e,!0),u)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"13d5":function(t,e,n){"use strict";var r=n("23e7"),i=n("d58f").left,o=n("a640"),s=n("ae40"),a=o("reduce"),c=s("reduce",{1:0});r({target:"Array",proto:!0,forced:!a||!c},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),s=n("9112");for(var a in i){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=n("ae40"),s=i("forEach"),a=o("forEach");t.exports=s&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),s=n("ad6d"),a="toString",c=RegExp.prototype,u=c[a],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),h=u.name!=a;(l||h)&&r(RegExp.prototype,a,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?s.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2ca0":function(t,e,n){"use strict";var r=n("23e7"),i=n("06cf").f,o=n("50c4"),s=n("5a34"),a=n("1d80"),c=n("ab13"),u=n("c430"),l="".startsWith,h=Math.min,d=c("startsWith"),f=!u&&!d&&!!function(){var t=i(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!f&&!d},{startsWith:function(t){var e=String(a(this));s(t);var n=o(h(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return l?l.call(e,r,n):e.slice(n,n+r.length)===r}})},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=a&&a.versions,u=c&&c.v8;u?(r=u.split("."),i=r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("3f8c"),o=n("b622"),s=o("iterator");t.exports=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||i[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),s="String Iterator",a=i.set,c=i.getterFor(s);o(String,"String",(function(t){a(this,{type:s,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=n("ae40"),a=o("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),s=n("e95a"),a=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,h,d,f,p=i(t),g="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,y=void 0!==v,b=u(p),_=0;if(y&&(v=r(v,m>2?arguments[2]:void 0,2)),void 0==b||g==Array&&s(b))for(e=a(p.length),n=new g(e);e>_;_++)f=y?v(p[_],_):p[_],c(n,_,f);else for(h=b.call(p),d=h.next,n=new g;!(l=d.call(h)).done;_++)f=y?o(h,v,[l.value,_],!0):l.value,c(n,_,f);return n.length=_,n}},"4fad":function(t,e,n){var r=n("23e7"),i=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),s=n("50c4"),a=n("a691"),c=n("1d80"),u=n("8aa5"),l=n("14c3"),h=Math.max,d=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(n,r){var i=c(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!v&&y||"string"===typeof r&&-1===r.indexOf(b)){var o=n(e,t,this,r);if(o.done)return o.value}var c=i(t),f=String(this),p="function"===typeof r;p||(r=String(r));var g=c.global;if(g){var w=c.unicode;c.lastIndex=0}var E=[];while(1){var T=l(c,f);if(null===T)break;if(E.push(T),!g)break;var S=String(T[0]);""===S&&(c.lastIndex=u(f,s(c.lastIndex),w))}for(var I="",C=0,A=0;A<E.length;A++){T=E[A];for(var k=String(T[0]),O=h(d(a(T.index),f.length),0),x=[],D=1;D<T.length;D++)x.push(m(T[D]));var R=T.groups;if(p){var N=[k].concat(x,O,f);void 0!==R&&N.push(R);var P=String(r.apply(void 0,N))}else P=_(k,f,O,x,R,r);O>=C&&(I+=f.slice(C,O)+P,C=O+k.length)}return I+f.slice(C)}];function _(t,n,r,i,s,a){var c=r+t.length,u=i.length,l=g;return void 0!==s&&(s=o(s),l=p),e.call(a,l,(function(e,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":a=s[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var h=f(l/10);return 0===h?e:h<=u?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):e}a=i[l-1]}return void 0===a?"":a}))}}))},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5db7":function(t,e,n){"use strict";var r=n("23e7"),i=n("a2bf"),o=n("7b0b"),s=n("50c4"),a=n("1c0b"),c=n("65f0");r({target:"Array",proto:!0},{flatMap:function(t){var e,n=o(this),r=s(n.length);return a(t),e=c(n,0),e.length=i(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,s,a=String(i(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):o:t?a.slice(c,c+2):s-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("f772"),d=n("d012"),f=a.WeakMap,p=function(t){return o(t)?i(t):r(t,{})},g=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s){var m=new f,v=m.get,y=m.has,b=m.set;r=function(t,e){return b.call(m,t,e),e},i=function(t){return v.call(m,t)||{}},o=function(t){return y.call(m,t)}}else{var _=h("state");d[_]=!0,r=function(t,e){return u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},o=function(t){return l(t,_)}}t.exports={set:r,get:i,has:o,enforce:p,getterFor:g}},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),l(n).source=h.join("string"==typeof e?e:"")),t!==r?(c?!d&&t[e]&&(u=!0):delete t[e],u?t[e]=n:i(t,e,n)):u?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},"6f53":function(t,e,n){var r=n("83ab"),i=n("df75"),o=n("fc6a"),s=n("d1e7").f,a=function(t){return function(e){var n,a=o(e),c=i(a),u=c.length,l=0,h=[];while(u>l)n=c[l++],r&&!s.call(a,n)||h.push(t?[n,a[n]]:a[n]);return h}};t.exports={entries:a(!0),values:a(!1)}},"73d9":function(t,e,n){var r=n("44d2");r("flatMap")},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},_=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}_=r?y(r):b();var t=s.length;while(t--)delete _[f][s[t]];return _()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=_(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("9ed3"),o=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),h=n("c430"),d=n("3f8c"),f=n("ae93"),p=f.IteratorPrototype,g=f.BUGGY_SAFARI_ITERATORS,m=l("iterator"),v="keys",y="values",b="entries",_=function(){return this};t.exports=function(t,e,n,l,f,w,E){i(n,e,l);var T,S,I,C=function(t){if(t===f&&D)return D;if(!g&&t in O)return O[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",k=!1,O=t.prototype,x=O[m]||O["@@iterator"]||f&&O[f],D=!g&&x||C(f),R="Array"==e&&O.entries||x;if(R&&(T=o(R.call(new t)),p!==Object.prototype&&T.next&&(h||o(T)===p||(s?s(T,p):"function"!=typeof T[m]&&c(T,m,_)),a(T,A,!0,!0),h&&(d[A]=_))),f==y&&x&&x.name!==y&&(k=!0,D=function(){return x.call(this)}),h&&!E||O[m]===D||c(O,m,D),d[e]=D,f)if(S={values:C(y),keys:w?D:C(v),entries:C(b)},E)for(I in S)(g||k||!(I in O))&&u(O,I,S[I]);else r({target:e,proto:!0,forced:g||k},S);return S}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,n){var r,i,o;(function(n,s){i=[],r=s,o="function"===typeof r?r.apply(e,i):r,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var n,r,i,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,s=/@([^@]*):(\d+):(\d+)\s*$/gi,a=o.exec(f.stack)||s.exec(f.stack),c=a&&a[1]||!1,u=a&&a[2]||!1,l=document.location.href.replace(document.location.hash,""),h=document.getElementsByTagName("script");c===l&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),i=n.replace(r,"$1").trim());for(var d=0;d<h.length;d++){if("interactive"===h[d].readyState)return h[d];if(h[d].src===c)return h[d];if(c===l&&h[d].innerHTML&&h[d].innerHTML.trim()===i)return h[d]}return null}}return t}))},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8bbf":function(e,n){e.exports=t},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,s=String.prototype.replace,a=o,c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],h=c||l||u;h&&(a=function(t){var e,n,i,a,h=this,d=u&&h.sticky,f=r.call(h),p=h.source,g=0,m=t;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,g++),n=new RegExp("^(?:"+p+")",f)),l&&(n=new RegExp("^"+p+"$(?!\\s)",f)),c&&(e=h.lastIndex),i=o.call(d?n:h,m),d?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=h.lastIndex,h.lastIndex+=i[0].length):h.lastIndex=0:c&&i&&(h.lastIndex=h.global?i.index+i[0].length:e),l&&i&&i.length>1&&s.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=a},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,o=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),s=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),h=n("1dde"),d=n("b622"),f=n("2d00"),p=d("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=f>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=h("concat"),b=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},_=!v||!y;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,n,r,i,o,s=a(this),h=l(s,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],b(o)){if(i=c(o.length),d+i>g)throw TypeError(m);for(n=0;n<i;n++,d++)n in o&&u(h,d,o[n])}else{if(d>=g)throw TypeError(m);u(h,d++,o)}return h.length=d,h}})},"9bdd":function(t,e,n){var r=n("825a");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(s){var o=t["return"];throw void 0!==o&&r(o.call(t)),s}}},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("c04e"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e,!0),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a2bf:function(t,e,n){"use strict";var r=n("e8b5"),i=n("50c4"),o=n("0366"),s=function(t,e,n,a,c,u,l,h){var d,f=c,p=0,g=!!l&&o(l,h,3);while(p<a){if(p in n){if(d=g?g(n[p],p,e):n[p],u>0&&r(d))f=s(t,e,d,i(d.length),f,u-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[f]=d}f++}p++}return f};t.exports=s},a352:function(t,n){t.exports=e},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),h=n("ae40"),d=l("splice"),f=h("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!f},{splice:function(t,e){var n,r,l,h,d,f,y=a(this),b=s(y.length),_=i(t,b),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=b-_):(n=w-2,r=g(p(o(e),0),b-_)),b+n-r>m)throw TypeError(v);for(l=c(y,r),h=0;h<r;h++)d=_+h,d in y&&u(l,h,y[d]);if(l.length=r,n<r){for(h=_;h<b-r;h++)d=h+r,f=h+n,d in y?y[f]=y[d]:delete y[f];for(h=b;h>b-r+n;h--)delete y[h-1]}else if(n>r)for(h=b-r;h>_;h--)d=h+r-1,f=h+n-1,d in y?y[f]=y[d]:delete y[f];for(h=0;h<n;h++)y[h+_]=arguments[h+2];return y.length=b-r+n,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),h=n("5135"),d=n("e8b5"),f=n("861d"),p=n("825a"),g=n("7b0b"),m=n("fc6a"),v=n("c04e"),y=n("5c6c"),b=n("7c73"),_=n("df75"),w=n("241c"),E=n("057f"),T=n("7418"),S=n("06cf"),I=n("9bf2"),C=n("d1e7"),A=n("9112"),k=n("6eeb"),O=n("5692"),x=n("f772"),D=n("d012"),R=n("90e3"),N=n("b622"),P=n("e538"),L=n("746f"),M=n("d44e"),U=n("69f3"),F=n("b727").forEach,V=x("hidden"),j="Symbol",B="prototype",$=N("toPrimitive"),H=U.set,K=U.getterFor(j),z=Object[B],q=i.Symbol,W=o("JSON","stringify"),G=S.f,Q=I.f,Y=E.f,X=C.f,J=O("symbols"),Z=O("op-symbols"),tt=O("string-to-symbol-registry"),et=O("symbol-to-string-registry"),nt=O("wks"),rt=i.QObject,it=!rt||!rt[B]||!rt[B].findChild,ot=a&&l((function(){return 7!=b(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=G(z,e);r&&delete z[e],Q(t,e,n),r&&t!==z&&Q(z,e,r)}:Q,st=function(t,e){var n=J[t]=b(q[B]);return H(n,{type:j,tag:t,description:e}),a||(n.description=e),n},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,n){t===z&&ct(Z,e,n),p(t);var r=v(e,!0);return p(n),h(J,r)?(n.enumerable?(h(t,V)&&t[V][r]&&(t[V][r]=!1),n=b(n,{enumerable:y(0,!1)})):(h(t,V)||Q(t,V,y(1,{})),t[V][r]=!0),ot(t,r,n)):Q(t,r,n)},ut=function(t,e){p(t);var n=m(e),r=_(n).concat(pt(n));return F(r,(function(e){a&&!ht.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?b(t):ut(b(t),e)},ht=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===z&&h(J,e)&&!h(Z,e))&&(!(n||!h(this,e)||!h(J,e)||h(this,V)&&this[V][e])||n)},dt=function(t,e){var n=m(t),r=v(e,!0);if(n!==z||!h(J,r)||h(Z,r)){var i=G(n,r);return!i||!h(J,r)||h(n,V)&&n[V][r]||(i.enumerable=!0),i}},ft=function(t){var e=Y(m(t)),n=[];return F(e,(function(t){h(J,t)||h(D,t)||n.push(t)})),n},pt=function(t){var e=t===z,n=Y(e?Z:m(t)),r=[];return F(n,(function(t){!h(J,t)||e&&!h(z,t)||r.push(J[t])})),r};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===z&&n.call(Z,t),h(this,V)&&h(this[V],e)&&(this[V][e]=!1),ot(this,e,y(1,t))};return a&&it&&ot(z,e,{configurable:!0,set:n}),st(e,t)},k(q[B],"toString",(function(){return K(this).tag})),k(q,"withoutSetter",(function(t){return st(R(t),t)})),C.f=ht,I.f=ct,S.f=dt,w.f=E.f=ft,T.f=pt,P.f=function(t){return st(N(t),t)},a&&(Q(q[B],"description",{configurable:!0,get:function(){return K(this).description}}),s||k(z,"propertyIsEnumerable",ht,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),F(_(nt),(function(t){L(t)})),r({target:j,stat:!0,forced:!c},{for:function(t){var e=String(t);if(h(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(h(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(g(t))}}),W){var gt=!c||l((function(){var t=q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(f(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,W.apply(null,i)}})}q[B][$]||A(q[B],$,q[B].valueOf),M(q,j),D[V]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:c,h=o(e,1)?e[1]:void 0;return a[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,h)}))}},ae93:function(t,e,n){"use strict";var r,i,o,s=n("e163"),a=n("9112"),c=n("5135"),u=n("b622"),l=n("c430"),h=u("iterator"),d=!1,f=function(){return this};[].keys&&(o=[].keys(),"next"in o?(i=s(s(o)),i!==Object.prototype&&(r=i)):d=!0),void 0==r&&(r={}),l||c(r,h)||a(r,h,f),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;t.exports=function(t){return o(u,t)||(a&&o(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,d=5==t||h;return function(f,p,g,m){for(var v,y,b=o(f),_=i(b),w=r(p,g,3),E=s(_.length),T=0,S=m||a,I=e?S(f,E):n?S(f,0):void 0;E>T;T++)if((d||T in _)&&(v=_[T],y=w(v,T,b),t))if(e)I[T]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return T;case 2:c.call(I,v)}else if(l)return!1;return h?-1:u||l?l:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,o=n("44d2"),s=n("ae40"),a="findIndex",c=!0,u=s(a);a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c975:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,o=n("a640"),s=n("ae40"),a=[].indexOf,c=!!a&&1/[1].indexOf(1,-0)<0,u=o("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?a.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2"),s=n("ae40"),a=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84"),i=n("9112");t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),i=n("da84"),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d58f:function(t,e,n){var r=n("1c0b"),i=n("7b0b"),o=n("44ad"),s=n("50c4"),a=function(t){return function(e,n,a,c){r(n);var u=i(e),l=o(u),h=s(u.length),d=t?h-1:0,f=t?-1:1;if(a<2)while(1){if(d in l){c=l[d],d+=f;break}if(d+=f,t?d<0:h<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:h>d;d+=f)d in l&&(c=n(c,l[d],d,u));return c}};t.exports={left:a(!1),right:a(!0)}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),s=n("9263"),a=n("9112"),c=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),h=o("replace"),d=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var p=o(t),g=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!g||!m||"replace"===t&&(!u||!l||d)||"split"===t&&!f){var v=/./[p],y=n(p,""[t],(function(t,e,n,r,i){return e.exec===s?g&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=y[0],_=y[1];r(String.prototype,t,b),r(RegExp.prototype,p,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}h&&a(RegExp.prototype[p],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),s=n("ae40"),a=o("map"),c=s("map");r({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},dbf1:function(t,e,n){"use strict";(function(t){function r(){return"undefined"!==typeof window?window.console:t.console}n.d(e,"a",(function(){return i}));var i=r()}).call(this,n("c8ba"))},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("e260"),s=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),l=o.values;for(var h in i){var d=r[h],f=d&&d.prototype;if(f){if(f[c]!==l)try{s(f,c,l)}catch(g){f[c]=l}if(f[u]||s(f,u,h),i[h])for(var p in o)if(f[p]!==o[p])try{s(f,p,o[p])}catch(g){f[p]=o[p]}}}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("5135"),a=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var h={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(h[e]=!0),e};u(d,l);var f=d.prototype=l.prototype;f.constructor=d;var p=f.toString,g="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(h,t))return"";var n=g?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e163:function(t,e,n){var r=n("5135"),i=n("7b0b"),o=n("f772"),s=n("e177"),a=o("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),s))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var r=window.document.currentScript,i=n("8875");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("a434"),n("159b"),n("a4d3"),n("e439"),n("dbb4"),n("b64b");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t){if(Array.isArray(t))return t}n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function l(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}}n("a630"),n("fb6a"),n("b0c0"),n("25f0");function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){return u(t)||l(t,e)||d(t,e)||f()}function g(t){if(Array.isArray(t))return h(t)}function m(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(t){return g(t)||m(t)||d(t)||v()}var b=n("a352"),_=n.n(b);function w(t){null!==t.parentElement&&t.parentElement.removeChild(t)}function E(t,e,n){var r=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,r)}var T=n("dbf1");n("13d5"),n("4fad"),n("ac1f"),n("5319");function S(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var I=/-(\w)/g,C=S((function(t){return t.replace(I,(function(t,e){return e.toUpperCase()}))})),A=(n("5db7"),n("73d9"),["Start","Add","Remove","Update","End"]),k=["Choose","Unchoose","Sort","Filter","Clone"],O=["Move"],x=[O,A,k].flatMap((function(t){return t})).map((function(t){return"on".concat(t)})),D={manage:O,manageAndEmit:A,emit:k};function R(t){return-1!==x.indexOf(t)}n("caad"),n("2ca0");var N=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];function P(t){return N.includes(t)}function L(t){return["transition-group","TransitionGroup"].includes(t)}function M(t){return["id","class","role","style"].includes(t)||t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("on")}function U(t){return t.reduce((function(t,e){var n=p(e,2),r=n[0],i=n[1];return t[r]=i,t}),{})}function F(t){var e=t.$attrs,n=t.componentData,r=void 0===n?{}:n,i=U(Object.entries(e).filter((function(t){var e=p(t,2),n=e[0];e[1];return M(n)})));return c(c({},i),r)}function V(t){var e=t.$attrs,n=t.callBackBuilder,r=U(j(e));Object.entries(n).forEach((function(t){var e=p(t,2),n=e[0],i=e[1];D[n].forEach((function(t){r["on".concat(t)]=i(t)}))}));var i="[data-draggable]".concat(r.draggable||"");return c(c({},r),{},{draggable:i})}function j(t){return Object.entries(t).filter((function(t){var e=p(t,2),n=e[0];e[1];return!M(n)})).map((function(t){var e=p(t,2),n=e[0],r=e[1];return[C(n),r]})).filter((function(t){var e=p(t,2),n=e[0];e[1];return!R(n)}))}n("c740");function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(t,e,n){return e&&$(t.prototype,e),n&&$(t,n),t}var K=function(t){var e=t.el;return e},z=function(t,e){return t.__draggable_context=e},q=function(t){return t.__draggable_context},W=function(){function t(e){var n=e.nodes,r=n.header,i=n.default,o=n.footer,s=e.root,a=e.realList;B(this,t),this.defaultNodes=i,this.children=[].concat(y(r),y(i),y(o)),this.externalComponent=s.externalComponent,this.rootTransition=s.transition,this.tag=s.tag,this.realList=a}return H(t,[{key:"render",value:function(t,e){var n=this.tag,r=this.children,i=this._isRootComponent,o=i?{default:function(){return r}}:r;return t(n,e,o)}},{key:"updated",value:function(){var t=this.defaultNodes,e=this.realList;t.forEach((function(t,n){z(K(t),{element:e[n],index:n})}))}},{key:"getUnderlyingVm",value:function(t){return q(t)}},{key:"getVmIndexFromDomIndex",value:function(t,e){var n=this.defaultNodes,r=n.length,i=e.children,o=i.item(t);if(null===o)return r;var s=q(o);if(s)return s.index;if(0===r)return 0;var a=K(n[0]),c=y(i).findIndex((function(t){return t===a}));return t<c?0:r}},{key:"_isRootComponent",get:function(){return this.externalComponent||this.rootTransition}}]),t}(),G=n("8bbf");function Q(t,e){var n=t[e];return n?n():[]}function Y(t){var e=t.$slots,n=t.realList,r=t.getKey,i=n||[],o=["header","footer"].map((function(t){return Q(e,t)})),s=p(o,2),a=s[0],u=s[1],l=e.item;if(!l)throw new Error("draggable element must have an item slot");var h=i.flatMap((function(t,e){return l({element:t,index:e}).map((function(e){return e.key=r(t),e.props=c(c({},e.props||{}),{},{"data-draggable":!0}),e}))}));if(h.length!==i.length)throw new Error("Item slot must have only one child");return{header:a,footer:u,default:h}}function X(t){var e=L(t),n=!P(t)&&!e;return{transition:e,externalComponent:n,tag:n?Object(G["resolveComponent"])(t):e?G["TransitionGroup"]:t}}function J(t){var e=t.$slots,n=t.tag,r=t.realList,i=t.getKey,o=Y({$slots:e,realList:r,getKey:i}),s=X(n);return new W({nodes:o,root:s,realList:r})}function Z(t,e){var n=this;Object(G["nextTick"])((function(){return n.$emit(t.toLowerCase(),e)}))}function tt(t){var e=this;return function(n,r){if(null!==e.realList)return e["onDrag".concat(t)](n,r)}}function et(t){var e=this,n=tt.call(this,t);return function(r,i){n.call(e,r,i),Z.call(e,t,r)}}var nt=null,rt={list:{type:Array,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},itemKey:{type:[String,Function],required:!0},clone:{type:Function,default:function(t){return t}},tag:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},it=["update:modelValue","change"].concat(y([].concat(y(D.manageAndEmit),y(D.emit)).map((function(t){return t.toLowerCase()})))),ot=Object(G["defineComponent"])({name:"draggable",inheritAttrs:!1,props:rt,emits:it,data:function(){return{error:!1}},render:function(){try{this.error=!1;var t=this.$slots,e=this.$attrs,n=this.tag,r=this.componentData,i=this.realList,o=this.getKey,s=J({$slots:t,tag:n,realList:i,getKey:o});this.componentStructure=s;var a=F({$attrs:e,componentData:r});return s.render(G["h"],a)}catch(c){return this.error=!0,Object(G["h"])("pre",{style:{color:"red"}},c.stack)}},created:function(){null!==this.list&&null!==this.modelValue&&T["a"].error("modelValue and list props are mutually exclusive! Please set one or another.")},mounted:function(){var t=this;if(!this.error){var e=this.$attrs,n=this.$el,r=this.componentStructure;r.updated();var i=V({$attrs:e,callBackBuilder:{manageAndEmit:function(e){return et.call(t,e)},emit:function(e){return Z.bind(t,e)},manage:function(e){return tt.call(t,e)}}}),o=1===n.nodeType?n:n.parentElement;this._sortable=new _.a(o,i),this.targetDomElement=o,o.__draggable_component__=this}},updated:function(){this.componentStructure.updated()},beforeUnmount:function(){void 0!==this._sortable&&this._sortable.destroy()},computed:{realList:function(){var t=this.list;return t||this.modelValue},getKey:function(){var t=this.itemKey;return"function"===typeof t?t:function(e){return e[t]}}},watch:{$attrs:{handler:function(t){var e=this._sortable;e&&j(t).forEach((function(t){var n=p(t,2),r=n[0],i=n[1];e.option(r,i)}))},deep:!0}},methods:{getUnderlyingVm:function(t){return this.componentStructure.getUnderlyingVm(t)||null},getUnderlyingPotencialDraggableComponent:function(t){return t.__draggable_component__},emitChanges:function(t){var e=this;Object(G["nextTick"])((function(){return e.$emit("change",t)}))},alterList:function(t){if(this.list)t(this.list);else{var e=y(this.modelValue);t(e),this.$emit("update:modelValue",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,y(t))};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,r=this.getUnderlyingPotencialDraggableComponent(e);if(!r)return{component:r};var i=r.realList,o={list:i,component:r};if(e!==n&&i){var s=r.getUnderlyingVm(n)||{};return c(c({},s),o)}return o},getVmIndexFromDomIndex:function(t){return this.componentStructure.getVmIndexFromDomIndex(t,this.targetDomElement)},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),nt=t.item},onDragAdd:function(t){var e=t.item._underlying_vm_;if(void 0!==e){w(t.item);var n=this.getVmIndexFromDomIndex(t.newIndex);this.spliceList(n,0,e);var r={element:e,newIndex:n};this.emitChanges({added:r})}},onDragRemove:function(t){if(E(this.$el,t.item,t.oldIndex),"clone"!==t.pullMode){var e=this.context,n=e.index,r=e.element;this.spliceList(n,1);var i={element:r,oldIndex:n};this.emitChanges({removed:i})}else w(t.clone)},onDragUpdate:function(t){w(t.item),E(t.from,t.item,t.oldIndex);var e=this.context.index,n=this.getVmIndexFromDomIndex(t.newIndex);this.updatePosition(e,n);var r={element:this.context.element,oldIndex:e,newIndex:n};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=y(e.to.children).filter((function(t){return"none"!==t.style["display"]})),r=n.indexOf(e.related),i=t.component.getVmIndexFromDomIndex(r),o=-1!==n.indexOf(nt);return o||!e.willInsertAfter?i:i+1},onDragMove:function(t,e){var n=this.move,r=this.realList;if(!n||!r)return!0;var i=this.getRelatedContextFromMoveEvent(t),o=this.computeFutureIndex(i,t),s=c(c({},this.context),{},{futureIndex:o}),a=c(c({},t),{},{relatedContext:i,draggedContext:s});return n(a,e)},onDragEnd:function(){nt=null}}}),st=ot;e["default"]=st},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),s=n("23cb"),a=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),h=n("1dde"),d=n("ae40"),f=h("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),g=l("species"),m=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var n,r,l,h=c(this),d=a(h.length),f=s(t,d),p=s(void 0===e?d:e,d);if(o(h)&&(n=h.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(h,f,p);for(r=new(void 0===n?Array:n)(v(p-f,0)),l=0;f<p;f++,l++)f in h&&u(r,l,h[f]);return r.length=l,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})["default"]}))},79306:function(t,e,n){"use strict";var r=n(94901),i=n(16823),o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not a function")}},28551:function(t,e,n){"use strict";var r=n(20034),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw new o(i(t)+" is not an object")}},19617:function(t,e,n){"use strict";var r=n(25397),i=n(13229),o=n(26198),s=function(t){return function(e,n,s){var a=r(e),c=o(a);if(0===c)return!t&&-1;var u,l=i(s,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},34527:function(t,e,n){"use strict";var r=n(43724),i=n(34376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},22195:function(t,e,n){"use strict";var r=n(79504),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},77740:function(t,e,n){"use strict";var r=n(39297),i=n(35031),o=n(77347),s=n(24913);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},66699:function(t,e,n){"use strict";var r=n(43724),i=n(24913),o=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},36840:function(t,e,n){"use strict";var r=n(94901),i=n(24913),o=n(50283),s=n(39433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},39433:function(t,e,n){"use strict";var r=n(44576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},43724:function(t,e,n){"use strict";var r=n(79039);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(t,e,n){"use strict";var r=n(44576),i=n(20034),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},96837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},88727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},82839:function(t,e,n){"use strict";var r=n(44576),i=r.navigator,o=i&&i.userAgent;t.exports=o?String(o):""},39519:function(t,e,n){"use strict";var r,i,o=n(44576),s=n(82839),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},46518:function(t,e,n){"use strict";var r=n(44576),i=n(77347).f,o=n(66699),s=n(36840),a=n(39433),c=n(77740),u=n(92796);t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,t)}}},79039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},40616:function(t,e,n){"use strict";var r=n(79039);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},69565:function(t,e,n){"use strict";var r=n(40616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},10350:function(t,e,n){"use strict";var r=n(43724),i=n(39297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},79504:function(t,e,n){"use strict";var r=n(40616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},97751:function(t,e,n){"use strict";var r=n(44576),i=n(94901),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},55966:function(t,e,n){"use strict";var r=n(79306),i=n(64117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},44576:function(t,e,n){"use strict";var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},39297:function(t,e,n){"use strict";var r=n(79504),i=n(48981),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},30421:function(t){"use strict";t.exports={}},35917:function(t,e,n){"use strict";var r=n(43724),i=n(79039),o=n(4055);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},47055:function(t,e,n){"use strict";var r=n(79504),i=n(79039),o=n(22195),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"===o(t)?a(t,""):s(t)}:s},33706:function(t,e,n){"use strict";var r=n(79504),i=n(94901),o=n(77629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},91181:function(t,e,n){"use strict";var r,i,o,s=n(58622),a=n(44576),c=n(20034),u=n(66699),l=n(39297),h=n(77629),d=n(66119),f=n(30421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var b=h.state||(h.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw new g(p);return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},o=function(t){return b.has(t)}}else{var _=d("state");f[_]=!0,r=function(t,e){if(l(t,_))throw new g(p);return e.facade=t,u(t,_,e),e},i=function(t){return l(t,_)?t[_]:{}},o=function(t){return l(t,_)}}t.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},34376:function(t,e,n){"use strict";var r=n(22195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},94901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},92796:function(t,e,n){"use strict";var r=n(79039),i=n(94901),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},64117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},20034:function(t,e,n){"use strict";var r=n(94901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},96395:function(t){"use strict";t.exports=!1},10757:function(t,e,n){"use strict";var r=n(97751),i=n(94901),o=n(1625),s=n(7040),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},26198:function(t,e,n){"use strict";var r=n(18014);t.exports=function(t){return r(t.length)}},50283:function(t,e,n){"use strict";var r=n(79504),i=n(79039),o=n(94901),s=n(39297),a=n(43724),c=n(10350).CONFIGURABLE,u=n(33706),l=n(91181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===g(f(e),0,7)&&(e="["+m(f(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return s(r,"source")||(r.source=v(b,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return o(this)&&d(this).source||u(this)}),"toString")},80741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},24913:function(t,e,n){"use strict";var r=n(43724),i=n(35917),o=n(48686),s=n(28551),a=n(56969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},77347:function(t,e,n){"use strict";var r=n(43724),i=n(69565),o=n(48773),s=n(6980),a=n(25397),c=n(56969),u=n(39297),l=n(35917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},38480:function(t,e,n){"use strict";var r=n(61828),i=n(88727),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},33717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},1625:function(t,e,n){"use strict";var r=n(79504);t.exports=r({}.isPrototypeOf)},61828:function(t,e,n){"use strict";var r=n(79504),i=n(39297),o=n(25397),s=n(19617).indexOf,a=n(30421),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},48773:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},84270:function(t,e,n){"use strict";var r=n(69565),i=n(94901),o=n(20034),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw new s("Can't convert object to primitive value")}},35031:function(t,e,n){"use strict";var r=n(97751),i=n(79504),o=n(38480),s=n(33717),a=n(28551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},67750:function(t,e,n){"use strict";var r=n(64117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},66119:function(t,e,n){"use strict";var r=n(25745),i=n(33392),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},77629:function(t,e,n){"use strict";var r=n(96395),i=n(44576),o=n(39433),s="__core-js_shared__",a=t.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},25745:function(t,e,n){"use strict";var r=n(77629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},4495:function(t,e,n){"use strict";var r=n(39519),i=n(79039),o=n(44576),s=o.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},13229:function(t,e,n){"use strict";var r=n(91291),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},25397:function(t,e,n){"use strict";var r=n(47055),i=n(67750);t.exports=function(t){return r(i(t))}},91291:function(t,e,n){"use strict";var r=n(80741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},18014:function(t,e,n){"use strict";var r=n(91291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},48981:function(t,e,n){"use strict";var r=n(67750),i=Object;t.exports=function(t){return i(r(t))}},72777:function(t,e,n){"use strict";var r=n(69565),i=n(20034),o=n(10757),s=n(55966),a=n(84270),c=n(78227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},56969:function(t,e,n){"use strict";var r=n(72777),i=n(10757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},16823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},33392:function(t,e,n){"use strict";var r=n(79504),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},7040:function(t,e,n){"use strict";var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},48686:function(t,e,n){"use strict";var r=n(43724),i=n(79039);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},58622:function(t,e,n){"use strict";var r=n(44576),i=n(94901),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},78227:function(t,e,n){"use strict";var r=n(44576),i=n(25745),o=n(39297),s=n(33392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(l[t]=a&&o(u,t)?u[t]:h("Symbol."+t)),l[t]}},44114:function(t,e,n){"use strict";var r=n(46518),i=n(48981),o=n(26198),s=n(34527),a=n(96837),c=n(79039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},49928:function(t,e,n){"use strict";n.d(e,{MF:function(){return bt},j6:function(){return pt},xZ:function(){return gt},om:function(){return ft},Sx:function(){return wt},Wp:function(){return _t},KO:function(){return Et}});var r=n(5125),i=n(63424),o=n(36743);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){y=t(y)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function w(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&v(t),s(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return A.set(e,o),o}b((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
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
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const D="@firebase/app",R="0.10.13",N=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/data-connect",H="@firebase/database-compat",K="@firebase/functions",z="@firebase/functions-compat",q="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/vertexai-preview",it="@firebase/firestore-compat",ot="firebase",st="10.14.1",at="[DEFAULT]",ct={[D]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-data-connect",[H]:"fire-rtdb-compat",[K]:"fire-fn",[z]:"fire-fn-compat",[q]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[ot]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(ht.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())dt(n,t);for(const n of lt.values())dt(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return void 0!==t.settings}
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
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},vt=new o.FA("app","Firebase",mt);
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
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}
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
const bt=st;function _t(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw vt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw vt.create("no-options");const a=ut.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw vt.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of ht.values())c.addComponent(r);const u=new yt(n,i,c);return ut.set(s,u),u}function wt(t=at){const e=ut.get(t);if(!e&&t===at&&(0,o.T9)())return _t();if(!e)throw vt.create("no-app",{appName:t});return e}function Et(t,e,n){var i;let o=null!==(i=ct[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}ft(new r.uA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
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
const Tt="firebase-heartbeat-database",St=1,It="firebase-heartbeat-store";let Ct=null;function At(){return Ct||(Ct=S(Tt,St,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(It)}catch(n){console.warn(n)}}}}).catch((t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function kt(t){try{const e=await At(),n=e.transaction(It),r=await n.objectStore(It).get(xt(t));return await n.done,r}catch(e){if(e instanceof o.g)N.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});N.warn(t.message)}}}async function Ot(t,e){try{const n=await At(),r=n.transaction(It,"readwrite"),i=r.objectStore(It);await i.put(e,xt(t)),await r.done}catch(n){if(n instanceof o.g)N.warn(n.message);else{const t=vt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(t.message)}}}function xt(t){return`${t.name}!${t.options.appId}`}
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
 */const Dt=1024,Rt=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Pt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Rt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){N.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pt(),{heartbeatsToSend:n,unsentEntries:r}=Lt(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return N.warn(e),""}}}function Pt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=Dt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Ft(t){ft(new r.uA("platform-logger",(t=>new O(t)),"PRIVATE")),ft(new r.uA("heartbeat",(t=>new Nt(t)),"PRIVATE")),Et(D,R,t),Et(D,R,"esm2017"),Et("fire-js","")}Ft("")},5125:function(t,e,n){"use strict";n.d(e,{h1:function(){return u},uA:function(){return i}});var r=n(36743);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const o="[DEFAULT]";
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},63424:function(t,e,n){"use strict";n.d(e,{$b:function(){return i},Vy:function(){return u}});
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},70223:function(t,e,n){"use strict";n.d(e,{Wp:function(){return r.Wp}});var r=n(49928),i="firebase",o="10.14.1";
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
(0,r.KO)(i,o,"app")},97496:function(t,e,n){"use strict";n.d(e,{HF:function(){return Ee},F0:function(){return qe},xI:function(){return Kr},hg:function(){return Le},oM:function(){return Re},df:function(){return Pn},CI:function(){return Me}});var r=n(49928),i=n(36743),o=n(63424);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(t,...e){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${t}`,...e)}function f(t,...e){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${t}`,...e)}
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
 */function p(t,...e){throw b(t,...e)}function g(t,...e){return b(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},u()),{[e]:n}),o=new i.FA("auth","Firebase",r);return o.create(e,{appName:t.name})}function v(t){return m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&p(t,"argument-error"),m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function _(t,e,...n){if(!t)throw b(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function E(t,e){t||w(e)}
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
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class k{constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function O(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class x{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new k(3e4,6e4);
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
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,o={}){return L(t,o,(async()=>{let o={},s={};r&&("GET"===e?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},o);return(0,i.c1)()||(u.referrerPolicy="no-referrer"),x.fetch()(U(t,t.config.apiHost,n,a),u)}))}async function L(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},D),e);try{const e=new V(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw j(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const e=i.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw j(t,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(t,a,s);p(t,a)}}catch(o){if(o instanceof i.g)throw o;p(t,"network-request-failed",{message:String(o)})}}async function M(t,e,n,r,i={}){const o=await P(t,e,n,r,i);return"mfaPendingCredential"in o&&p(t,"multi-factor-auth-required",{_serverResponse:o}),o}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O(t.config,i):`${t.config.apiScheme}://${i}`}function F(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(t,e,r);return i.customData._tokenResponse=n,i}
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
 */function B(t){return void 0!==t&&void 0!==t.enterprise}class ${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return F(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}}
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
 */async function H(t,e){return P(t,"GET","/v2/recaptchaConfig",N(t,e))}
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
 */async function K(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function z(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
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
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
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
 */async function W(t,e=!1){const n=(0,i.Ku)(t),r=await n.getIdToken(e),o=Q(r);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:q(G(o.auth_time)),issuedAtTime:q(G(o.iat)),expirationTime:q(G(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function Q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.u)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function Y(t){const e=Q(t);return _(e,"internal-error"),_("undefined"!==typeof e.exp,"internal-error"),_("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function X(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.g&&J(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class Z{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class tt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function et(t){var e;const n=t.auth,r=await t.getIdToken(),i=await X(t,z(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?it(o.providerUserInfo):[],a=rt(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new tt(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function nt(t){const e=(0,i.Ku)(t);await et(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function ot(t,e){const n=await L(t,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,s=U(t,r,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function st(t,e){return P(t,"POST","/v2/accounts:revokeToken",N(t,e))}
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
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_("undefined"!==typeof t.idToken,"internal-error"),_("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Y(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){_(0!==t.length,"internal-error");const e=Y(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(_(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await ot(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new at;return n&&(_("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return w("not implemented")}}
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
 */function ct(t,e){_("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ut{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await X(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return W(this,t)}reload(){return nt(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await et(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const t=await this.getIdToken();return await X(this,K(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=e;_(y&&T,t,"internal-error");const S=at.fromJSON(this.name,T);_("string"===typeof y,t,"internal-error"),ct(l,t.name),ct(h,t.name),_("boolean"===typeof b,t,"internal-error"),_("boolean"===typeof w,t,"internal-error"),ct(d,t.name),ct(f,t.name),ct(p,t.name),ct(g,t.name),ct(m,t.name),ct(v,t.name);const I=new ut({uid:y,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new at;r.updateFromServerResponse(e);const i=new ut({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await et(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];_(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?it(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new at;s.updateFromIdToken(n);const a=new ut({uid:r.localId,auth:t,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new tt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
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
 */const lt=new Map;function ht(t){E(t instanceof Function,"Expected a class definition");let e=lt.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lt.set(t,e),e)}
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
 */class dt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}dt.type="NONE";const ft=dt;
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
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class gt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pt(this.userKey,r.apiKey,i),this.fullPersistenceKey=pt("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new gt(ht(ft),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ht(ft);const o=pt(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=ut._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(c){}}))),new gt(i,t,n)):new gt(i,t,n)}}
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
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_t(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Et(e))return"Blackberry";if(Tt(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||bt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function vt(t=(0,i.ZQ)()){return/firefox\//i.test(t)}function yt(t=(0,i.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bt(t=(0,i.ZQ)()){return/crios\//i.test(t)}function _t(t=(0,i.ZQ)()){return/iemobile/i.test(t)}function wt(t=(0,i.ZQ)()){return/android/i.test(t)}function Et(t=(0,i.ZQ)()){return/blackberry/i.test(t)}function Tt(t=(0,i.ZQ)()){return/webos/i.test(t)}function St(t=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function It(t=(0,i.ZQ)()){var e;return St(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ct(){return(0,i.lT)()&&10===document.documentMode}function At(t=(0,i.ZQ)()){return St(t)||wt(t)||Tt(t)||Et(t)||/windows phone/i.test(t)||_t(t)}
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
 */function kt(t,e=[]){let n;switch(t){case"Browser":n=mt((0,i.ZQ)());break;case"Worker":n=`${mt((0,i.ZQ)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
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
 */class Ot{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */async function xt(t,e={}){return P(t,"GET","/v2/passwordPolicy",N(t,e))}
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
 */const Dt=6;class Rt{constructor(t){var e,n,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=o.minPasswordLength)&&void 0!==e?e:Dt,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
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
 */class Nt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lt(this),this.idTokenSubscription=new Lt(this),this.beforeStateQueue=new Ot(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ht(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await gt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await z(this,{idToken:t}),n=await ut._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,r.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await et(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,r.xZ)(this.app))return Promise.reject(v(this));const e=t?(0,i.Ku)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ht(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xt(this),e=new Rt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await st(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ht(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[ht(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof e){const i=t.addObserver(e,n,r);return()=>{o=!0,i()}}{const n=t.addObserver(e);return()=>{o=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Pt(t){return(0,i.Ku)(t)}class Lt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.tD)((t=>this.observer=t))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Mt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ut(t){Mt=t}function Ft(t){return Mt.loadJS(t)}function Vt(){return Mt.recaptchaEnterpriseScript}function jt(){return Mt.gapiScript}function Bt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const $t="recaptcha-enterprise",Ht="NO_RECAPTCHA";class Kt{constructor(t){this.type=$t,this.auth=Pt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{H(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new $(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;B(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Ht)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&B(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=Vt();0!==e.length&&(e+=n),Ft(e).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function zt(t,e,n,r=!1){const i=new Kt(t);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function qt(t,e,n,r){var i;if(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zt(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await zt(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}
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
function Wt(t,e){const n=(0,r.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const o=n.initialize({options:e});return o}function Gt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Qt(t,e,n){const r=Pt(t);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Yt(e),{host:s,port:a}=Xt(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zt()}function Yt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xt(t){const e=Yt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:Jt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:Jt(e)}}}function Jt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */class te{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
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
 */async function ee(t,e){return P(t,"POST","/v1/accounts:signUp",e)}
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
async function ne(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}
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
async function re(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}async function ie(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}
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
 */class oe extends te{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new oe(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new oe(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(t,e,"signInWithPassword",ne);case"emailLink":return re(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(t,n,"signUpPassword",ee);case"emailLink":return ie(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function se(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
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
 */const ae="http://localhost";class ce extends te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ce(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ce(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return se(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,se(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,se(t,e)}buildRequest(){const t={requestUri:ae,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.Am)(e)}return t}}
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
 */async function ue(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}async function le(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}async function he(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const de={["USER_NOT_FOUND"]:"user-not-found"};async function fe(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,n),de)}
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
 */class pe extends te{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new pe({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new pe({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return le(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return he(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return fe(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new pe({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function ge(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function me(t){const e=(0,i.I9)((0,i.hp)(t))["link"],n=e?(0,i.I9)((0,i.hp)(e))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(t))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||e||t}class ve{constructor(t){var e,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ge(null!==(r=c["mode"])&&void 0!==r?r:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=me(t);try{return new ve(e)}catch(n){return null}}}
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
class ye{constructor(){this.providerId=ye.PROVIDER_ID}static credential(t,e){return oe._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ve.parseLink(e);return _(n,"argument-error"),oe._fromEmailAndCode(t,n.code,n.tenantId)}}ye.PROVIDER_ID="password",ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class be{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class _e extends be{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class we extends _e{constructor(){super("facebook.com")}static credential(t){return ce._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return we.credential(t.oauthAccessToken)}catch(e){return null}}}we.FACEBOOK_SIGN_IN_METHOD="facebook.com",we.PROVIDER_ID="facebook.com";
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
class Ee extends _e{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ce._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ee.credentialFromTaggedObject(t)}static credentialFromError(t){return Ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Ee.credential(e,n)}catch(r){return null}}}Ee.GOOGLE_SIGN_IN_METHOD="google.com",Ee.PROVIDER_ID="google.com";
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
class Te extends _e{constructor(){super("github.com")}static credential(t){return ce._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Te.credential(t.oauthAccessToken)}catch(e){return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com",Te.PROVIDER_ID="github.com";
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
class Se extends _e{constructor(){super("twitter.com")}static credential(t,e){return ce._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Se.credential(e,n)}catch(r){return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com",Se.PROVIDER_ID="twitter.com";
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
class Ie{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ut._fromIdTokenResponse(t,n,r),o=Ce(n),s=new Ie({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Ce(n);return new Ie({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Ce(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Ae extends i.g{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ae.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Ae(t,e,n,r)}}function ke(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ae._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function Oe(t,e,n=!1){const r=await X(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ie._forOperation(t,"link",r)}
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
async function xe(t,e,n=!1){const{auth:i}=t;if((0,r.xZ)(i.app))return Promise.reject(v(i));const o="reauthenticate";try{const r=await X(t,ke(i,o,e,t),n);_(r.idToken,i,"internal-error");const s=Q(r.idToken);_(s,i,"internal-error");const{sub:a}=s;return _(t.uid===a,i,"user-mismatch"),Ie._forOperation(t,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
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
 */async function De(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i="signIn",o=await ke(t,i,e),s=await Ie._fromIdTokenResponse(t,i,o);return n||await t._updateCurrentUser(s.user),s}
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
function Re(t,e){return(0,i.Ku)(t).setPersistence(e)}function Ne(t,e,n,r){return(0,i.Ku)(t).onIdTokenChanged(e,n,r)}function Pe(t,e,n){return(0,i.Ku)(t).beforeAuthStateChanged(e,n)}function Le(t,e,n,r){return(0,i.Ku)(t).onAuthStateChanged(e,n,r)}function Me(t){return(0,i.Ku)(t).signOut()}
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
function Ue(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function Fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}function Ve(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function je(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}new WeakMap;const Be="__sak";
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
 */class $e{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Be,"1"),this.storage.removeItem(Be),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */const He=1e3,Ke=10;class ze extends $e{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=At(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Ct()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Ke):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ze.type="LOCAL";const qe=ze;
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
 */class We extends $e{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}We.type="SESSION";const Ge=We;
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
 */function Qe(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class Ye{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ye(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async t=>t(e.origin,i))),a=await Qe(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Xe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
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
 */Ye.receivers=[];class Je{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Xe("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */function Ze(){return window}function tn(t){Ze().location.href=t}
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
 */function en(){return"undefined"!==typeof Ze()["WorkerGlobalScope"]&&"function"===typeof Ze()["importScripts"]}async function nn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function rn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function on(){return en()?self:null}
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
 */const sn="firebaseLocalStorageDb",an=1,cn="firebaseLocalStorage",un="fbase_key";class ln{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function hn(t,e){return t.transaction([cn],e?"readwrite":"readonly").objectStore(cn)}function dn(){const t=indexedDB.deleteDatabase(sn);return new ln(t).toPromise()}function fn(){const t=indexedDB.open(sn,an);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(cn,{keyPath:un})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(cn)?e(n):(n.close(),await dn(),e(await fn()))}))}))}async function pn(t,e,n){const r=hn(t,!0).put({[un]:e,value:n});return new ln(r).toPromise()}async function gn(t,e){const n=hn(t,!1).get(e),r=await new ln(n).toPromise();return void 0===r?null:r.value}function mn(t,e){const n=hn(t,!0).delete(e);return new ln(n).toPromise()}const vn=800,yn=3;class bn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await fn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>yn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return en()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(on()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await nn(),!this.activeServiceWorker)return;this.sender=new Je(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&rn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fn();return await pn(t,Be,"1"),await mn(t,Be),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>pn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>gn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>mn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=hn(t,!1).getAll();return new ln(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),vn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bn.type="LOCAL";const _n=bn;
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
 */function wn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}function En(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}function Tn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}
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
Bt("rcb"),new k(3e4,6e4);
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
const Sn="recaptcha";async function In(t,e,n){var r;const i=await n.verify();try{let o;if(_("string"===typeof i,t,"argument-error"),_(n.type===Sn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){_("enroll"===e.type,t,"internal-error");const n=await Ue(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;_(n,t,"missing-multi-factor-info");const s=await wn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ue(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class Cn{constructor(t){this.providerId=Cn.PROVIDER_ID,this.auth=Pt(t)}verifyPhoneNumber(t,e){return In(this.auth,t,(0,i.Ku)(e))}static credential(t,e){return pe._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Cn.credentialFromTaggedObject(e)}static credentialFromError(t){return Cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?pe._fromTokenResponse(e,n):null}}
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
function An(t,e){return e?ht(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */Cn.PROVIDER_ID="phone",Cn.PHONE_SIGN_IN_METHOD="phone";class kn extends te{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return se(t,this._buildIdpRequest())}_linkToIdToken(t,e){return se(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return se(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function On(t){return De(t.auth,new kn(t),t.bypassAuthState)}function xn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),xe(n,new kn(t),t.bypassAuthState)}async function Dn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Oe(n,new kn(t),t.bypassAuthState)}
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
 */class Rn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return On;case"linkViaPopup":case"linkViaRedirect":return Dn;case"reauthViaPopup":case"reauthViaRedirect":return xn;default:p(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Nn=new k(2e3,1e4);async function Pn(t,e,n){if((0,r.xZ)(t.app))return Promise.reject(g(t,"operation-not-supported-in-this-environment"));const i=Pt(t);y(t,e,be);const o=An(i,n),s=new Ln(i,"signInViaPopup",e,o);return s.executeNotNull()}class Ln extends Rn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=Xe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Nn.get())};t()}}Ln.currentPopupAction=null;
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
const Mn="pendingRedirect",Un=new Map;class Fn extends Rn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Un.get(this.auth._key());if(!t){try{const e=await Vn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Un.set(this.auth._key(),t)}return this.bypassAuthState||Un.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Vn(t,e){const n=$n(e),r=Bn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function jn(t,e){Un.set(t._key(),e)}function Bn(t){return ht(t._redirectPersistence)}function $n(t){return pt(Mn,t.config.apiKey,t.name)}
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
 */async function Hn(t,e,n=!1){if((0,r.xZ)(t.app))return Promise.reject(v(t));const i=Pt(t),o=An(i,e),s=new Fn(i,o,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}
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
const Kn=6e5;class zn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Gn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Wn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(qn(t))}saveEventToCache(t){this.cachedEventUids.add(qn(t)),this.lastProcessedEventTime=Date.now()}}function qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Wn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Gn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wn(t);default:return!1}}
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
 */async function Qn(t,e={}){return P(t,"GET","/v1/projects",e)}
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
 */const Yn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;async function Jn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qn(t);for(const r of e)try{if(Zn(r))return}catch(n){}p(t,"unauthorized-domain")}function Zn(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Xn.test(n))return!1;if(Yn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const tr=new k(3e4,6e4);function er(){const t=Ze().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function nr(t){return new Promise(((e,n)=>{var r,i,o;function s(){er(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{er(),n(g(t,"network-request-failed"))},timeout:tr.get()})}if(null===(i=null===(r=Ze().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Ze().gapi)||void 0===o?void 0:o.load)){const e=Bt("iframefcb");return Ze()[e]=()=>{gapi.load?s():n(g(t,"network-request-failed"))},Ft(`${jt()}?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw rr=null,t}))}let rr=null;function ir(t){return rr=rr||nr(t),rr}
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
 */const or=new k(5e3,15e3),sr="__/auth/iframe",ar="emulator/auth/iframe",cr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lr(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O(e,ar):`https://${t.config.authDomain}/${sr}`,o={apiKey:e.apiKey,appName:t.name,v:r.MF},s=ur.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function hr(t){const e=await ir(t),n=Ze().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:lr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=g(t,"network-request-failed"),o=Ze().setTimeout((()=>{r(i)}),or.get());function s(){Ze().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{r(i)}))}))))}
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
 */const dr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fr=500,pr=600,gr="_blank",mr="http://localhost";class vr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function yr(t,e,n,r=fr,o=pr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},dr),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=bt(l)?gr:n),vt(l)&&(e=e||mr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(It(l)&&"_self"!==c)return br(e||"",c),new vr(null);const d=window.open(e||"",c,h);_(d,t,"popup-blocked");try{d.focus()}catch(f){}return new vr(d)}function br(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const _r="__/auth/handler",wr="emulator/auth/handler",Er=encodeURIComponent("fac");async function Tr(t,e,n,o,s,a){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:r.MF,eventId:s};if(e instanceof be){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof _e){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${Er}=${encodeURIComponent(l)}`:"";return`${Sr(t)}?${(0,i.Am)(u).slice(1)}${h}`}function Sr({config:t}){return t.emulator?O(t,wr):`https://${t.authDomain}/${_r}`}
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
 */const Ir="webStorageSupport";class Cr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ge,this._completeRedirectFn=Hn,this._overrideRedirectResult=jn}async _openPopup(t,e,n,r){var i;E(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tr(t,e,n,T(),r);return yr(t,o,Xe())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Tr(t,e,n,T(),r);return tn(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await hr(t),n=new zn(t);return e.register("authEvent",(e=>{_(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ir,{type:Ir},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ir];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Jn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return At()||yt()||St()}}const Ar=Cr;class kr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Or extends kr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Or(t)}_finalizeEnroll(t,e,n){return Fe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return En(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xr{constructor(){}static assertion(t){return Or._fromCredential(t)}}xr.FACTOR_ID="phone";class Dr{static assertionForEnrollment(t,e){return Rr._fromSecret(t,e)}static assertionForSignIn(t,e){return Rr._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;_("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await Ve(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Nr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Dr.FACTOR_ID="totp";class Rr extends kr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Rr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Rr(e,t)}async _finalizeEnroll(t,e,n){return _("undefined"!==typeof this.secret,t,"argument-error"),je(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){_(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return Tn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Nr{constructor(t,e,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Nr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Pr(t)||Pr(e))&&(r=!0),r&&(Pr(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Pr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Pr(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Lr="@firebase/auth",Mr="1.7.9";
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
class Ur{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Fr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vr(t){(0,r.om)(new a.uA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;_(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kt(t)},u=new Nt(r,i,o,c);return Gt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(t=>{const e=Pt(t.getProvider("auth").getImmediate());return(t=>new Ur(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Lr,Mr,Fr(t)),(0,r.KO)(Lr,Mr,"esm2017")}
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
 */const jr=300,Br=(0,i.XA)("authIdTokenMaxAge")||jr;let $r=null;const Hr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Br)return;const i=null===n||void 0===n?void 0:n.token;$r!==i&&($r=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kr(t=(0,r.Sx)()){const e=(0,r.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wt(t,{popupRedirectResolver:Ar,persistence:[_n,qe,Ge]}),o=(0,i.XA)("authTokenSyncURL");if(o&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(o,location.origin);if(location.origin===t.origin){const e=Hr(t.toString());Pe(n,e,(()=>e(n.currentUser))),Ne(n,(t=>e(t)))}}const s=(0,i.Tj)("auth");return s&&Qt(n,`http://${s}`),n}function zr(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Ut({loadJS(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",zr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Vr("Browser")},71884:function(t,e,n){"use strict";n.d(e,{H9:function(){return $s},x7:function(){return Ta},aU:function(){return zs},BN:function(){return Ia}});var r,i,o=n(49928),s=n(5125),a=n(63424),c=n(36743),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function s(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function a(t,e){var n=u;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}e(o,n),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},o.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,o=0;o<e;){if(0==i)for(;o<=n;)s(this,t,o),o+=this.blockSize;if("string"===typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){s(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){s(this,r),i=0;break}}this.h=i,this.o+=e},o.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var u={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new c([0|t],0>t?-1:0)})):new c([0|t],0>t?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return b(d(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return b(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(e,8)),r=p,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=d(Math.pow(e,o)),r=r.j(o).add(d(s))):(r=r.j(n),r=r.add(d(s)))}return r}var p=h(0),g=h(1),m=h(16777216);function v(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function b(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function _(t,e){return t.add(b(e))}function w(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(v(e))throw Error("division by zero");if(v(t))return new E(p,p);if(y(t))return e=T(b(t),e),new E(b(e.g),b(e.h));if(y(e))return e=T(t,b(e)),new E(b(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;0>=r.l(t);)n=S(n),r=S(r);var i=I(n,1),o=I(r,1);for(r=I(r,2),n=I(n,2);!v(r);){var s=o.add(r);0>=s.l(t)&&(i=i.add(n),o=s),r=I(r,1),n=I(n,1)}return e=_(t,i.j(e)),new E(i,e)}for(i=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=d(n),s=o.j(e);y(s)||0<s.l(t);)n-=r,o=d(n),s=o.j(e);v(o)&&(o=g),i=i.add(o),t=_(t,s)}return new E(i,t)}function S(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function I(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(y(this))return-b(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(v(this))return"0";if(y(this))return"-"+b(this).toString(t);for(var e=d(Math.pow(t,6)),n=this,r="";;){var i=T(n,e).g;n=_(n,i.j(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,v(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=_(this,t),y(t)?-1:v(t)?0:1},t.abs=function(){return y(this)?b(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.i(i))+(65535&t.i(i)),s=(o>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(v(this)||v(t))return p;if(y(this))return y(t)?b(this).j(b(t)):b(b(this).j(t));if(y(t))return b(this.j(b(t)));if(0>this.l(m)&&0>t.l(m))return d(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.i(r)>>>16,s=65535&this.i(r),a=t.i(i)>>>16,u=65535&t.i(i);n[2*r+2*i]+=s*u,w(n,2*r+2*i),n[2*r+2*i+1]+=o*u,w(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,w(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,w(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new c(n,0)},t.A=function(t){return T(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,i=l.Md5=o,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,r=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,g,m,v,y,b="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},_={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof b&&b];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var o=0;o<t.length-1;o++){var s=t[o];if(!(s in i))break t;i=i[s]}t=t[t.length-1],o=i[t],n=n(o),n!=o&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function o(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return o(this,(function(t,e){return e}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s=s||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t,e,n){return t.call.apply(t.bind,arguments)}function E(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function T(t,e,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:E,T.apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class O{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function x(t){return/^[\s\xa0]*$/.test(t)}function D(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function R(t){return R[" "](t),t}R[" "]=function(){};var N=-1!=D().indexOf("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&-1==D().indexOf("Edge"))&&!(-1!=D().indexOf("Trident")||-1!=D().indexOf("MSIE"))&&-1==D().indexOf("Edge");function P(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}const U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<U.length;e++)n=U[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function j(t){a.setTimeout((()=>{throw t}),0)}function B(){var t=W;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ${constructor(){this.h=this.g=null}add(t,e){const n=H.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var H=new O((()=>new K),(t=>t.reset()));class K{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let z,q=!1,W=new $,G=()=>{const t=a.Promise.resolve(void 0);z=()=>{t.then(Q)}};var Q=()=>{for(var t;t=B();){try{t.h.call(t.g)}catch(n){j(n)}var e=H;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}q=!1};function Y(){this.s=this.s,this.C=this.C}function X(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},X.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(X.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{R(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}C(Z,X);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.da=this.fa=!1}function it(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=Array.prototype.indexOf.call(i,e,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.da&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}ot.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=at(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new rt(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return ft(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)lt(t,e[o],n,r,i);return null}return n=_t(n),t&&t[et]?t.K(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=u(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ct]=a=new ot(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=dt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)J||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function ft(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)ft(t,e[o],n,r,i);return null}return n=_t(n),t&&t[et]?t.L(e,n,u(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);else r=u(r)?!!r.capture:!!r,n=_t(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=at(o,n,r,i),-1<n&&(it(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(st(n,t),0==n.h&&(n.src=null,e[ct]=null)):it(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function vt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&gt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ct],t instanceof ot?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function wt(){Y.call(this),this.i=new ot(this),this.M=this,this.F=null}function Et(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new X(e,t);else if(e instanceof X)e.target=e.target||t;else{var i=e;e=new X(r,t),F(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Tt(s,r,!0,e)&&i}if(s=e.g=t,i=Tt(s,r,!0,e)&&i,i=Tt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Tt(s,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.da&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.fa&&st(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function St(t,e,n){if("function"===typeof t)n&&(t=T(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=T(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function It(t){t.g=St((()=>{t.g=null,t.i&&(t.i=!1,It(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}C(wt,Y),wt.prototype[et]=!0,wt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.F=null},wt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class Ct extends Y{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(t){Y.call(this),this.h=t,this.g={}}C(At,Y);var kt=[];function Ot(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}At.prototype.N=function(){At.aa.N.call(this),Ot(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xt=a.JSON.stringify,Dt=a.JSON.parse,Rt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Pt(t){return t.h||(t.h=t.i())}function Lt(){}Nt.prototype.h=null;var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ut(){X.call(this,"d")}function Ft(){X.call(this,"c")}C(Ut,X),C(Ft,X);var Vt={},jt=null;function Bt(){return jt=jt||new wt}function $t(t){X.call(this,Vt.La,t)}function Ht(t){const e=Bt();Et(e,new $t(e))}function Kt(t,e){X.call(this,Vt.STAT_EVENT,t),this.stat=e}function zt(t){const e=Bt();Et(e,new Kt(e,t))}function qt(t,e){X.call(this,Vt.Ma,t),this.size=e}function Wt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Gt(){this.g=!0}function Qt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Yt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Xt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return xt(n)}catch(a){return e}}Vt.La="serverreachability",C($t,X),Vt.STAT_EVENT="statevent",C(Kt,X),Vt.Ma="timingevent",C(qt,X),Gt.prototype.xa=function(){this.g=!1},Gt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function re(){}function ie(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oe}function oe(){this.i=null,this.g="",this.h=!1}C(re,Nt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},te=new re;var se={},ae={};function ce(t,e,n){t.L=1,t.v=Ue(Re(e)),t.m=n,t.P=!0,ue(t,null)}function ue(t,e){t.F=Date.now(),de(t),t.A=Re(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Ye(n.i,"t",r),t.C=0,n=t.j.J,t.h=new oe,t.g=Hn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new Ct(T(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(kt[0]=i.toString()),i=kt);for(var o=0;o<i.length;o++){var s=lt(n,i[o],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}e=t.H?M(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ht(),Qt(t.i,t.u,t.A,t.l,t.R,t.m)}function le(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ae:(n=Number(e.substring(n,r)),isNaN(n)?se:(r+=1,r+n>e.length?ae:(e=e.slice(r,r+n),t.C=r+n,e)))}function de(t){t.S=Date.now()+t.I,fe(t,t.I)}function fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Wt(T(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ge(t){0==t.j.G||t.J||Fn(t.j,t)}function me(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,Ot(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ve(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Ee(n.h,t)))if(!t.K&&Ee(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Un(n),Cn(n)}Pn(n),zt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Wt(T(n.Za,n),6e3));if(1>=we(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else jn(n,11)}else if((t.K||n.g==t)&&Un(n),!x(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Te(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Me(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var s=t;if(r.qa=$n(r,r.J?r.ia:null,r.W),s.K){Se(r.h,s);var a=s,c=r.L;c&&(a.I=c),a.B&&(pe(a),de(a)),r.g=s}else Nn(r);0<n.i.length&&kn(n)}else"stop"!=u[0]&&"close"!=u[0]||jn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?jn(n,7):In(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ht(4)}catch(u){}}ie.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==_n(t)?e.j():this.Y(t)},ie.prototype.Y=function(t){try{if(t==this.g)t:{const d=_n(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||wn(this.g)))){this.J||4!=d||7==e||Ht(8==e||0>=f?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(le(this)){var r=wn(this.g);t="";var i=r.length,o=4==_n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){me(this),ge(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,Yt(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,zt(12),me(this),ge(this);break t}Xt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ve(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<s.length;){if(t=he(this,s),t==ae){4==d&&(this.s=4,zt(14),n=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}if(t==se){this.s=4,zt(15),Xt(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}Xt(this.i,this.l,t,null),ve(this,t)}if(le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=s.length||this.h.h||(this.s=1,zt(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),Ln(h),h.M=!0,zt(11))}}else Xt(this.i,this.l,s,"[Invalid Chunked Response]"),me(this),ge(this)}else Xt(this.i,this.l,s,null),ve(this,s);4==d&&me(this),this.o&&!this.J&&(4==d?Fn(this.j,this):(this.o=!1,de(this)))}else En(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),me(this),ge(this)}}}catch(w){}},ie.prototype.cancel=function(){this.J=!0,me(this)},ie.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(Ht(),zt(17)),me(this),this.s=2,ge(this)):fe(this,this.S-t)};var ye=class{constructor(t,e){this.g=t,this.map=e}};function be(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _e(t){return!!t.h||!!t.g&&t.g.size>=t.j}function we(t){return t.h?1:t.g?t.g.size:0}function Ee(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Te(t,e){t.g?t.g.add(e):t.h=e}function Se(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ie(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Ce(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ae(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ke(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ae(t),r=Ce(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}be.prototype.cancel=function(){if(this.i=Ie(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Oe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function De(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof De){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,Pe(this,t.s),this.l=t.l;var e=t.i,n=new qe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Le(this,n),this.m=t.m}else t&&(e=String(t).match(Oe))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=Fe(e[2]||""),this.g=Fe(e[3]||"",!0),Pe(this,e[4]),this.l=Fe(e[5]||"",!0),Le(this,e[6]||"",!0),this.m=Fe(e[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}function Re(t){return new De(t)}function Ne(t,e,n){t.j=n?Fe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Le(t,e,n){e instanceof qe?(t.i=e,Je(t.i,t.h)):(n||(e=Ve(e,Ke)),t.i=new qe(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Ue(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ve(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,je),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function je(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}De.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ve(e,Be,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ve(e,Be,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ve(n,"/"==n.charAt(0)?He:$e,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ve(n,ze)),t.join("")};var Be=/[#\/\?@]/g,$e=/[#\?:]/g,He=/[#\?]/g,Ke=/[#\?@]/g,ze=/#/g;function qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function We(t){t.g||(t.g=new Map,t.h=0,t.i&&xe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ge(t,e){We(t),e=Xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qe(t,e){return We(t),e=Xe(t,e),t.g.has(e)}function Ye(t,e,n){Ge(t,e),0<n.length&&(t.i=null,t.g.set(Xe(t,e),A(n)),t.h+=n.length)}function Xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(We(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ge(this,e),Ye(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Gt;if(a.Image){const r=new Image;r.onload=I(en,n,"TestLoadImage: loaded",!0,e,r),r.onerror=I(en,n,"TestLoadImage: error",!1,e,r),r.onabort=I(en,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=I(en,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function tn(t,e){const n=new Gt,r=new AbortController,i=setTimeout((()=>{r.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(o){}}function nn(){this.g=new Rt}function rn(t,e,n){const r=n||"";try{ke(t,(function(t,n){let i=t;u(t)&&(i=xt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function on(t){this.l=t.Ub||null,this.j=t.eb||!1}function sn(t,e){wt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function cn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,un(t)}function un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ln(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ln(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Me(t,e,n))}function dn(t){wt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=qe.prototype,t.add=function(t,e){We(this),this.i=null,t=Xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){We(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){We(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){We(this);let e=[];if("string"===typeof t)Qe(this,t)&&(e=e.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return We(this),this.i=null,t=Xe(this,t),Qe(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")},C(on,Nt),on.prototype.g=function(){return new sn(this.l,this.j)},on.prototype.i=function(t){return function(){return t}}({}),C(sn,wt),t=sn.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,un(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):un(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,cn(this))},t.Qa=function(t){this.g&&(this.response=t,cn(this))},t.ga=function(){this.g&&cn(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),C(dn,wt);var fn=/^https?$/i,pn=["POST","PUT"];function gn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,mn(t),yn(t)}function mn(t){t.A||(t.A=!0,Et(t,"complete"),Et(t,"error"))}function vn(t){if(t.h&&"undefined"!=typeof s&&(!t.v[1]||4!=_n(t)||2!=t.Z()))if(t.u&&4==_n(t))St(t.Ea,0,t);else if(Et(t,"readystatechange"),4==_n(t)){t.h=!1;try{const s=t.Z();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.D).match(Oe)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!fn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch(c){o=""}t.l=o+" ["+t.Z()+"]",mn(t)}}finally{yn(t)}}}function yn(t,e){if(t.g){bn(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function bn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function _n(t){return t.g?t.g.readyState:0}function wn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(S){return null}}function En(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(x(t[r]))continue;var n=V(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}L(e,(function(t){return t.join(", ")}))}function Tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.Aa=0,this.i=[],this.j=new Gt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,t),this.cb=Tn("retryDelaySeedMs",1e4,t),this.Wa=Tn("forwardChannelMaxRetries",2,t),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new be(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function In(t){if(An(t),3==t.G){var e=t.U++,n=Re(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),Dn(t,n),e=new ie(t,t.j,e),e.L=2,e.v=Ue(Re(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),de(e)}Bn(t)}function Cn(t){t.g&&(Ln(t),t.g.cancel(),t.g=null)}function An(t){Cn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Un(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function kn(t){if(!_e(t.h)&&!t.s){t.s=!0;var e=t.Ga;z||G(),q||(z(),q=!0),W.add(e,t),t.B=0}}function On(t,e){return!(we(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Wt(T(t.Ga,t,e),Vn(t,t.B)),t.B++,!0))}function xn(t,e){var n;n=e?e.l:t.U++;const r=Re(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.T),Dn(t,r),t.m&&t.o&&hn(r,t.m,t.o),n=new ie(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Rn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Te(t.h,n),ce(n,r,e)}function Dn(t,e){t.H&&P(t.H,(function(t,n){Me(e,n,t)})),t.l&&ke({},(function(t,n){Me(e,n,t)}))}function Rn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?T(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].g;const a=i[s].map;if(n-=e,0>n)e=Math.max(0,i[s].g-100),o=!1;else try{rn(a,t,"req"+n+"_")}catch(w){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;z||G(),q||(z(),q=!0),W.add(e,t),t.v=0}}function Pn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Wt(T(t.Fa,t),Vn(t,t.v)),t.v++,!0)}function Ln(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Mn(t){t.g=new ie(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Re(t.qa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.T),Me(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Me(e,"TO",t.ja),Me(e,"TYPE","xmlhttp"),Dn(t,e),t.m&&t.o&&hn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Ue(Re(e)),n.m=null,n.P=!0,ue(n,t)}function Un(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Fn(t,e){var n=null;if(t.g==e){Un(t),Ln(t),t.g=null;var r=2}else{if(!Ee(t.h,e))return;n=e.D,Se(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=Bt(),Et(r,new qt(r,n)),kn(t)}else Nn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&On(t,e)||2==r&&Pn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}function Vn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function jn(t,e){if(t.j.info("Error code "+e),2==e){var n=T(t.fb,t),r=t.Xa;const e=!r;r=new De(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(r,"https"),Ue(r),e?Ze(r.toString(),n):tn(r.toString(),n)}else zt(2);t.G=0,t.l&&t.l.sa(e),Bn(t),An(t)}function Bn(t){if(t.G=0,t.ka=[],t.l){const e=Ie(t.h);0==e.length&&0==t.i.length||(k(t.ka,e),k(t.ka,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ra()}}function $n(t,e,n){var r=n instanceof De?Re(n):new De(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Pe(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new De(null);r&&Ne(o,r),e&&(o.g=e),i&&Pe(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&Me(r,n,e),Me(r,"VER",t.la),Dn(t,r),r}function Hn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new dn(new on({eb:n})):new dn(t.pa),e.Ha(t.J),e}function Kn(){}function zn(){}function qn(t,e){wt.call(this),this.g=new Sn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!x(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function Wn(t){Ut.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Gn(){Ft.call(this),this.status=1}function Qn(t){this.g=t}t=dn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Pt(this.o):Pt(te),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void gn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bn(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){gn(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),yn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),dn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vn(this):this.bb())},t.bb=function(){vn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Dt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=Sn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){zt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=$n(this,null,this.W),kn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ie(this,this.j,t);let o=this.o;if(this.S&&(o?(o=M(o),F(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Rn(this,i,e),n=Re(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),Dn(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(ln(o)))+"&"+e:this.m&&hn(n,this.m,o)),Te(this.h,i),this.Ua&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),i.T=!0,ce(i,n,null)):ce(i,n,e),this.G=2}}else 3==this.G&&(t?xn(this,t):0==this.i.length||_e(this.h)||xn(this))},t.Fa=function(){if(this.u=null,Mn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Wt(T(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),Cn(this),Mn(this))},t.Za=function(){null!=this.C&&(this.C=null,Cn(this),Pn(this),zt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Kn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},zn.prototype.g=function(t,e){return new qn(t,e)},C(qn,wt),qn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){In(this.g)},qn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=xt(t),t=n);e.i.push(new ye(e.Ya++,t)),3==e.G&&kn(e)},qn.prototype.N=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,qn.aa.N.call(this)},C(Wn,Ut),C(Gn,Ft),C(Qn,Kn),Qn.prototype.ua=function(){Et(this.g,"a")},Qn.prototype.ta=function(t){Et(this.g,new Wn(t))},Qn.prototype.sa=function(t){Et(this.g,new Gn)},Qn.prototype.ra=function(){Et(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,y=_.createWebChannelTransport=function(){return new zn},v=_.getStatEventTarget=function(){return Bt()},m=_.Event=Vt,g=_.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,p=_.ErrorCode=ee,ne.COMPLETE="complete",f=_.EventType=ne,Lt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",wt.prototype.listen=wt.prototype.K,d=_.WebChannel=Lt,_.FetchXmlHttpFactory=on,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,h=_.XhrIo=dn}).apply("undefined"!==typeof b?b:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const w="@firebase/firestore";
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
 */class E{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
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
let T="10.14.0";
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
 */const S=new a.Vy("@firebase/firestore");function I(){return S.logLevel}function C(t,...e){if(S.logLevel<=a.$b.DEBUG){const n=e.map(O);S.debug(`Firestore (${T}): ${t}`,...n)}}function A(t,...e){if(S.logLevel<=a.$b.ERROR){const n=e.map(O);S.error(`Firestore (${T}): ${t}`,...n)}}function k(t,...e){if(S.logLevel<=a.$b.WARN){const n=e.map(O);S.warn(`Firestore (${T}): ${t}`,...n)}}function O(t){if("string"==typeof t)return t;try{
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
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
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
 */function x(t="Unexpected state"){const e=`FIRESTORE (${T}) INTERNAL ASSERTION FAILED: `+t;throw A(e),new Error(e)}function D(t,e){t||x()}function R(t,e){return t}
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class L{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class M{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class U{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(E.UNAUTHENTICATED)))}shutdown(){}}class F{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class V{constructor(t){this.t=t,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){D(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new L;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new L,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new L)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(D("string"==typeof e.accessToken),new M(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return D(null===t||"string"==typeof t),new E(t)}}class j{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=E.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class B{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new j(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(E.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ${constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){D(void 0===this.o);const n=t=>{null!=t.error&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,C("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(D("string"==typeof t.token),this.R=t.token,new $(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
function K(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class z{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=K(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function q(t,e){return t<e?-1:t>e?1:0}function W(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class G{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new P(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new G(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Q(t)}static min(){return new Q(new G(0,0))}static max(){return new Q(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Y{constructor(t,e,n){void 0===e?e=0:e>t.length&&x(),void 0===n?n=t.length-e:n>t.length-e&&x(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Y.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Y?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Y{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const J=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Y{construct(t,e,n){return new Z(t,e,n)}static isValidIdentifier(t){return J.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new P(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new P(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(e)}static emptyPath(){return new Z([])}}
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
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(X.fromString(t))}static fromName(t){return new tt(X.fromString(t).popFirst(5))}static empty(){return new tt(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===X.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new X(t.slice()))}}
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
 */class et{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}et.UNKNOWN_ID=-1;function nt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(1e9===r?new G(n+1,0):new G(n,r));return new it(i,tt.empty(),e)}function rt(t){return new it(t.readTime,t.key,-1)}class it{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new it(Q.min(),tt.empty(),-1)}static max(){return new it(Q.max(),tt.empty(),-1)}}function ot(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=tt.comparator(t.documentKey,e.documentKey),0!==n?n:q(t.largestBatchId,e.largestBatchId)
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
 */)}const st="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class at{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function ct(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==st)throw t;C("LocalStore","Unexpectedly lost primary lease")}
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
 */class ut{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ut(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ut?e:ut.resolve(e)}catch(t){return ut.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ut.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ut.reject(e)}static resolve(t){return new ut(((e,n)=>{e(t)}))}static reject(t){return new ut(((e,n)=>{n(t)}))}static waitFor(t){return new ut(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=ut.resolve(!1);for(const n of t)e=e.next((t=>t?ut.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ut(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{o[c]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new ut(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function lt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ht(t){return"IndexedDbTransactionError"===t.name}
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
class dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function ft(t){return null==t}function pt(t){return 0===t&&1/t==-1/0}function gt(t){return"number"==typeof t&&Number.isInteger(t)&&!pt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */dt.oe=-1;const mt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yt=vt,bt=[...yt,"indexConfiguration","indexState","indexEntries"];
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
function _t(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class Tt{constructor(t,e){this.comparator=t,this.root=e||It.EMPTY}insert(t,e){return new Tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,It.BLACK,null,null))}remove(t){return new Tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,It.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new St(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new St(this.root,t,this.comparator,!1)}getReverseIterator(){return new St(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new St(this.root,t,this.comparator,!0)}}class St{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class It{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:It.RED,this.left=null!=r?r:It.EMPTY,this.right=null!=i?i:It.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new It(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return It.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x();if(this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1,It.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,n,r,i){return this}insert(t,e,n){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ct{constructor(t){this.comparator=t,this.data=new Tt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new At(this.data.getIterator())}getIteratorFrom(t){return new At(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ct))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ct(this.comparator);return e.data=t,e}}class At{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class kt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new kt([])}unionWith(t){let e=new Ct(Z.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return W(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Ot extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class xt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ot("Invalid base64 string: "+t):t}}(t);return new xt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new xt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const Dt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(t){if(D(!!t),"string"==typeof t){let e=0;const n=Dt.exec(t);if(D(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Nt(t.seconds),nanos:Nt(t.nanos)}}function Nt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Pt(t){return"string"==typeof t?xt.fromBase64String(t):xt.fromUint8Array(t)}
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
 */function Lt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Mt(t){const e=t.mapValue.fields.__previous_value__;return Lt(e)?Mt(e):e}function Ut(t){const e=Rt(t.mapValue.fields.__local_write_time__.timestampValue);return new G(e.seconds,e.nanos)}
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
 */class Ft{constructor(t,e,n,r,i,o,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class Vt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Vt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Vt&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const jt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lt(t)?4:ne(t)?9007199254740991:te(t)?10:11:x()}function $t(t,e){if(t===e)return!0;const n=Bt(t);if(n!==Bt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ut(t).isEqual(Ut(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Rt(t.timestampValue),r=Rt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Pt(t.bytesValue).isEqual(Pt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Nt(t.geoPointValue.latitude)===Nt(e.geoPointValue.latitude)&&Nt(t.geoPointValue.longitude)===Nt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Nt(t.integerValue)===Nt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Nt(t.doubleValue),r=Nt(e.doubleValue);return n===r?pt(n)===pt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return W(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(_t(n)!==_t(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!$t(n[i],r[i])))return!1;return!0}(t,e);default:return x()}}function Ht(t,e){return void 0!==(t.values||[]).find((t=>$t(t,e)))}function Kt(t,e){if(t===e)return 0;const n=Bt(t),r=Bt(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Nt(t.integerValue||t.doubleValue),r=Nt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return zt(t.timestampValue,e.timestampValue);case 4:return zt(Ut(t),Ut(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Pt(t),r=Pt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=q(n[i],r[i]);if(0!==t)return t}return q(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=q(Nt(t.latitude),Nt(e.latitude));return 0!==n?n:q(Nt(t.longitude),Nt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qt(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,o;const s=t.fields||{},a=e.fields||{},c=null===(n=s.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=q((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(o=null==u?void 0:u.values)||void 0===o?void 0:o.length)||0);return 0!==l?l:qt(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===jt.mapValue&&e===jt.mapValue)return 0;if(t===jt.mapValue)return 1;if(e===jt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=q(r[s],o[s]);if(0!==t)return t;const e=Kt(n[r[s]],i[o[s]]);if(0!==e)return e}return q(r.length,o.length)}(t.mapValue,e.mapValue);default:throw x()}}function zt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return q(t,e);const n=Rt(t),r=Rt(e),i=q(n.seconds,r.seconds);return 0!==i?i:q(n.nanos,r.nanos)}function qt(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Kt(n[i],r[i]);if(t)return t}return q(n.length,r.length)}function Wt(t){return Gt(t)}function Gt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Rt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Pt(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return tt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Gt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Gt(t.fields[i])}`;return n+"}"}(t.mapValue):x()}function Qt(t){return!!t&&"integerValue"in t}function Yt(t){return!!t&&"arrayValue"in t}function Xt(t){return!!t&&"nullValue"in t}function Jt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zt(t){return!!t&&"mapValue"in t}function te(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ee(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ee(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ee(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ne(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class re{constructor(t){this.value=t}static empty(){return new re({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Zt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ee(e)}setAll(t){let e=Z.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ee(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Zt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Zt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){wt(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new re(ee(this.value))}}function ie(t){const e=[];return wt(t.fields,((t,n)=>{const r=new Z([t]);if(Zt(n)){const t=ie(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new kt(e)
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
 */}class oe{constructor(t,e,n,r,i,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new oe(t,0,Q.min(),Q.min(),Q.min(),re.empty(),0)}static newFoundDocument(t,e,n,r){return new oe(t,1,e,Q.min(),n,r,0)}static newNoDocument(t,e){return new oe(t,2,e,Q.min(),Q.min(),re.empty(),0)}static newUnknownDocument(t,e){return new oe(t,3,e,Q.min(),Q.min(),re.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=re.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class se{constructor(t,e){this.position=t,this.inclusive=e}}function ae(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?tt.comparator(tt.fromName(s.referenceValue),n.key):Kt(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function ce(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}
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
 */class ue{constructor(t,e="asc"){this.field=t,this.dir=e}}function le(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class he{}class de extends he{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new _e(t,e,n):"array-contains"===e?new Se(t,n):"in"===e?new Ie(t,n):"not-in"===e?new Ce(t,n):"array-contains-any"===e?new Ae(t,n):new de(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new we(t,n):new Ee(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Kt(e,this.value)):null!==e&&Bt(this.value)===Bt(e)&&this.matchesComparison(Kt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends he{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new fe(t,e)}matches(t){return pe(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pe(t){return"and"===t.op}function ge(t){return me(t)&&pe(t)}function me(t){for(const e of t.filters)if(e instanceof fe)return!1;return!0}function ve(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+Wt(t.value);if(ge(t))return t.filters.map((t=>ve(t))).join(",");{const e=t.filters.map((t=>ve(t))).join(",");return`${t.op}(${e})`}}function ye(t,e){return t instanceof de?function(t,e){return e instanceof de&&t.op===e.op&&t.field.isEqual(e.field)&&$t(t.value,e.value)}(t,e):t instanceof fe?function(t,e){return e instanceof fe&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&ye(n,e.filters[r])),!0)}(t,e):void x()}function be(t){return t instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${Wt(t.value)}`}(t):t instanceof fe?function(t){return t.op.toString()+" {"+t.getFilters().map(be).join(" ,")+"}"}(t):"Filter"}class _e extends de{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class we extends de{constructor(t,e){super(t,"in",e),this.keys=Te("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ee extends de{constructor(t,e){super(t,"not-in",e),this.keys=Te("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Te(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>tt.fromName(t.referenceValue)))}class Se extends de{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yt(e)&&Ht(e.arrayValue,this.value)}}class Ie extends de{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ht(this.value.arrayValue,e)}}class Ce extends de{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ht(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ht(this.value.arrayValue,e)}}class Ae extends de{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ht(this.value.arrayValue,t)))}}
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
 */class ke{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ue=null}}function Oe(t,e=null,n=[],r=[],i=null,o=null,s=null){return new ke(t,e,n,r,i,o,s)}function xe(t){const e=R(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ve(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ft(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Wt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Wt(t))).join(",")),e.ue=t}return e.ue}function De(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!le(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ye(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ce(t.startAt,e.startAt)&&ce(t.endAt,e.endAt)}function Re(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class Ne{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pe(t,e,n,r,i,o,s,a){return new Ne(t,e,n,r,i,o,s,a)}function Le(t){return new Ne(t)}function Me(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ue(t){return null!==t.collectionGroup}function Fe(t){const e=R(t);if(null===e.ce){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Ct(Z.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new ue(r,n))})),t.has(Z.keyField().canonicalString())||e.ce.push(new ue(Z.keyField(),n))}return e.ce}function Ve(t){const e=R(t);return e.le||(e.le=je(e,Fe(t))),e.le}function je(t,e){if("F"===t.limitType)return Oe(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new ue(t.field,e)}));const n=t.endAt?new se(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new se(t.startAt.position,t.startAt.inclusive):null;return Oe(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Be(t,e,n){return new Ne(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $e(t,e){return De(Ve(t),Ve(e))&&t.limitType===e.limitType}function He(t){return`${xe(Ve(t))}|lt:${t.limitType}`}function Ke(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>be(t))).join(", ")}]`),ft(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Wt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Wt(t))).join(",")),`Target(${e})`}(Ve(t))}; limitType=${t.limitType})`}function ze(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Fe(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=ae(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Fe(t),e))&&!(t.endAt&&!function(t,e,n){const r=ae(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Fe(t),e))}(t,e)}function qe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function We(t){return(e,n)=>{let r=!1;for(const i of Fe(t)){const t=Ge(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ge(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Kt(r,i):x()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}
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
 */class Qe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){wt(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Et(this.inner)}size(){return this.innerSize}}
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
 */const Ye=new Tt(tt.comparator);function Xe(){return Ye}const Je=new Tt(tt.comparator);function Ze(...t){let e=Je;for(const n of t)e=e.insert(n.key,n);return e}function tn(t){let e=Je;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function en(){return rn()}function nn(){return rn()}function rn(){return new Qe((t=>t.toString()),((t,e)=>t.isEqual(e)))}const on=new Tt(tt.comparator),sn=new Ct(tt.comparator);function an(...t){let e=sn;for(const n of t)e=e.add(n);return e}const cn=new Ct(q);function un(){return cn}
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
 */function ln(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pt(e)?"-0":e}}function hn(t){return{integerValue:""+t}}function dn(t,e){return gt(e)?hn(e):ln(t,e)}
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
 */class fn{constructor(){this._=void 0}}function pn(t,e,n){return t instanceof vn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Lt(e)&&(e=Mt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof yn?bn(t,e):t instanceof _n?wn(t,e):function(t,e){const n=mn(t,e),r=Tn(n)+Tn(t.Pe);return Qt(n)&&Qt(t.Pe)?hn(r):ln(t.serializer,r)}(t,e)}function gn(t,e,n){return t instanceof yn?bn(t,e):t instanceof _n?wn(t,e):n}function mn(t,e){return t instanceof En?function(t){return Qt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class vn extends fn{}class yn extends fn{constructor(t){super(),this.elements=t}}function bn(t,e){const n=Sn(e);for(const r of t.elements)n.some((t=>$t(t,r)))||n.push(r);return{arrayValue:{values:n}}}class _n extends fn{constructor(t){super(),this.elements=t}}function wn(t,e){let n=Sn(e);for(const r of t.elements)n=n.filter((t=>!$t(t,r)));return{arrayValue:{values:n}}}class En extends fn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Tn(t){return Nt(t.integerValue||t.doubleValue)}function Sn(t){return Yt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function In(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof yn&&e instanceof yn||t instanceof _n&&e instanceof _n?W(t.elements,e.elements,$t):t instanceof En&&e instanceof En?$t(t.Pe,e.Pe):t instanceof vn&&e instanceof vn}(t.transform,e.transform)}class Cn{constructor(t,e){this.version=t,this.transformResults=e}}class An{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new An}static exists(t){return new An(void 0,t)}static updateTime(t){return new An(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class On{}function xn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new jn(t.key,An.none()):new Ln(t.key,t.data,An.none());{const n=t.data,r=re.empty();let i=new Ct(Z.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Mn(t.key,r,new kt(i.toArray()),An.none())}}function Dn(t,e,n){t instanceof Ln?function(t,e,n){const r=t.value.clone(),i=Fn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Mn?function(t,e,n){if(!kn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Fn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Un(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Rn(t,e,n,r){return t instanceof Ln?function(t,e,n,r){if(!kn(t.precondition,e))return n;const i=t.value.clone(),o=Vn(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mn?function(t,e,n,r){if(!kn(t.precondition,e))return n;const i=Vn(t.fieldTransforms,r,e),o=e.data;return o.setAll(Un(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return kn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Nn(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=mn(r.transform,t||null);null!=i&&(null===n&&(n=re.empty()),n.set(r.field,i))}return n||null}function Pn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&W(t,e,((t,e)=>In(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ln extends On{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mn extends On{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Un(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Fn(t,e,n){const r=new Map;D(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,gn(s,a,n[i]))}return r}function Vn(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,pn(t,o,e))}return r}class jn extends On{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bn extends On{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class $n{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Dn(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Rn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Rn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=nn();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=xn(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(Q.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),an())}isEqual(t){return this.batchId===t.batchId&&W(this.mutations,t.mutations,((t,e)=>Pn(t,e)))&&W(this.baseMutations,t.baseMutations,((t,e)=>Pn(t,e)))}}class Hn{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){D(t.mutations.length===n.length);let r=function(){return on}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Hn(t,e,n,r)}}
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
 */class Kn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class zn{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var qn,Wn;function Gn(t){switch(t){default:return x();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Qn(t){if(void 0===t)return A("GRPC error has no .code"),N.UNKNOWN;switch(t){case qn.OK:return N.OK;case qn.CANCELLED:return N.CANCELLED;case qn.UNKNOWN:return N.UNKNOWN;case qn.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case qn.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case qn.INTERNAL:return N.INTERNAL;case qn.UNAVAILABLE:return N.UNAVAILABLE;case qn.UNAUTHENTICATED:return N.UNAUTHENTICATED;case qn.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case qn.NOT_FOUND:return N.NOT_FOUND;case qn.ALREADY_EXISTS:return N.ALREADY_EXISTS;case qn.PERMISSION_DENIED:return N.PERMISSION_DENIED;case qn.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case qn.ABORTED:return N.ABORTED;case qn.OUT_OF_RANGE:return N.OUT_OF_RANGE;case qn.UNIMPLEMENTED:return N.UNIMPLEMENTED;case qn.DATA_LOSS:return N.DATA_LOSS;default:return x()}}(Wn=qn||(qn={}))[Wn.OK=0]="OK",Wn[Wn.CANCELLED=1]="CANCELLED",Wn[Wn.UNKNOWN=2]="UNKNOWN",Wn[Wn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wn[Wn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wn[Wn.NOT_FOUND=5]="NOT_FOUND",Wn[Wn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wn[Wn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wn[Wn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wn[Wn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wn[Wn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wn[Wn.ABORTED=10]="ABORTED",Wn[Wn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wn[Wn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wn[Wn.INTERNAL=13]="INTERNAL",Wn[Wn.UNAVAILABLE=14]="UNAVAILABLE",Wn[Wn.DATA_LOSS=15]="DATA_LOSS";
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
let Yn=null;
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
 */function Xn(){return new TextEncoder}
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
 */const Jn=new r([4294967295,4294967295],0);function Zn(t){const e=Xn().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function tr(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new r([n,i],0),new r([o,s],0)]}class er{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new nr(`Invalid padding: ${e}`);if(n<0)throw new nr(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new nr(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new nr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=r.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(Jn)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=Zn(t),[n,r]=tr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,r,i);if(!this.de(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new er(i,r,e);return n.forEach((t=>o.insert(t))),o}insert(t){if(0===this.Ie)return;const e=Zn(t),[n,r]=tr(e);for(let i=0;i<this.hashCount;i++){const t=this.Ee(n,r,i);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class rr{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ir.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new rr(Q.min(),r,new Tt(q),Xe(),an())}}class ir{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ir(n,e,an(),an(),an())}}
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
 */class or{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class sr{constructor(t,e){this.targetId=t,this.me=e}}class ar{constructor(t,e,n=xt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class cr{constructor(){this.fe=0,this.ge=hr(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=an(),e=an(),n=an();return this.ge.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:x()}})),new ir(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=hr()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,D(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ur{constructor(t){this.Le=t,this.Be=new Map,this.ke=Xe(),this.qe=lr(),this.Qe=new Tt(q)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:x()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const i=r.target;if(Re(i))if(0===n){const t=new tt(i.path);this.Ue(e,t,oe.newNoDocument(t,Q.min()))}else D(1===n);else{const r=this.Ye(e);if(r!==n){const n=this.Ze(t),i=n?this.Xe(n,t,r):1;if(0!==i){this.je(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}null==Yn||Yn.et(function(t,e,n,r,i){var o,s,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(o=null==d?void 0:d.hashCount)&&void 0!==o?o:0,bitmapLength:null!==(c=null===(a=null===(s=null==d?void 0:d.bits)||void 0===s?void 0:s.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
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
 */(r,t.me,this.Le.tt(),n,i))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let o,s;try{o=Pt(n).toUint8Array()}catch(t){if(t instanceof Ot)return k("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{s=new er(o,r,i)}catch(t){return k(t instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===s.Ie?null:s}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.tt(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(o)||(this.Ue(e,n,null),r++)})),r}rt(t){const e=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Re(i.target)){const e=new tt(i.target.path);null!==this.ke.get(e)||this.it(r,e)||this.Ue(r,e,oe.newNoDocument(e,t))}n.be&&(e.set(r,n.ve()),n.Ce())}}));let n=an();this.qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const r=new rr(t,e,this.Qe,this.ke,n);return this.ke=Xe(),this.qe=lr(),this.Qe=new Tt(q),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new cr,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Ct(q),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||C("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new cr),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function lr(){return new Tt(tt.comparator)}function hr(){return new Tt(tt.comparator)}const dr=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fr=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),pr=(()=>{const t={and:"AND",or:"OR"};return t})();class gr{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function mr(t,e){return t.useProto3Json||ft(e)?e:{value:e}}function vr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yr(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function br(t,e){return vr(t,e.toTimestamp())}function _r(t){return D(!!t),Q.fromTimestamp(function(t){const e=Rt(t);return new G(e.seconds,e.nanos)}(t))}function wr(t,e){return Er(t,e).canonicalString()}function Er(t,e){const n=function(t){return new X(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Tr(t){const e=X.fromString(t);return D(qr(e)),e}function Sr(t,e){return wr(t.databaseId,e.path)}function Ir(t,e){const n=Tr(e);if(n.get(1)!==t.databaseId.projectId)throw new P(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(Or(n))}function Cr(t,e){return wr(t.databaseId,e)}function Ar(t){const e=Tr(t);return 4===e.length?X.emptyPath():Or(e)}function kr(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Or(t){return D(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xr(t,e,n){return{name:Sr(t,e),fields:n.value.mapValue.fields}}function Dr(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(D(void 0===e||"string"==typeof e),xt.fromBase64String(e||"")):(D(void 0===e||e instanceof Buffer||e instanceof Uint8Array),xt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?N.UNKNOWN:Qn(t.code);return new P(e,t.message||"")}(s);n=new ar(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ir(t,r.document.name),o=_r(r.document.updateTime),s=r.document.createTime?_r(r.document.createTime):Q.min(),a=new re({mapValue:{fields:r.document.fields}}),c=oe.newFoundDocument(i,o,s,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new or(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ir(t,r.document),o=r.readTime?_r(r.readTime):Q.min(),s=oe.newNoDocument(i,o),a=r.removedTargetIds||[];n=new or([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ir(t,r.document),o=r.removedTargetIds||[];n=new or([],o,i,null)}else{if(!("filter"in e))return x();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,o=new zn(r,i),s=t.targetId;n=new sr(s,o)}}return n}function Rr(t,e){let n;if(e instanceof Ln)n={update:xr(t,e.key,e.value)};else if(e instanceof jn)n={delete:Sr(t,e.key)};else if(e instanceof Mn)n={update:xr(t,e.key,e.data),updateMask:zr(e.fieldMask)};else{if(!(e instanceof Bn))return x();n={verify:Sr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof vn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _n)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof En)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw x()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:br(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:x()}(t,e.precondition)),n}function Nr(t,e){return t&&t.length>0?(D(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?_r(t.updateTime):_r(e);return n.isEqual(Q.min())&&(n=_r(e)),new Cn(n,t.transformResults||[])}(t,e)))):[]}function Pr(t,e){return{documents:[Cr(t,e.path)]}}function Lr(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cr(t,i);const o=function(t){if(0!==t.length)return Kr(fe.create(t,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:$r(t.field),direction:Vr(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=mr(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:i}}function Mr(t){let e=Ar(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){D(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=Fr(t);return e instanceof fe&&ge(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=function(t){return t.map((t=>function(t){return new ue(Hr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ft(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new se(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new se(n,e)}(n.endAt)),Pe(e,i,s,o,a,"F",c,u)}function Ur(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Fr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Hr(t.unaryFilter.field);return de.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Hr(t.unaryFilter.field);return de.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hr(t.unaryFilter.field);return de.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Hr(t.unaryFilter.field);return de.create(i,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(t):void 0!==t.fieldFilter?function(t){return de.create(Hr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return fe.create(t.compositeFilter.filters.map((t=>Fr(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(t):x()}function Vr(t){return dr[t]}function jr(t){return fr[t]}function Br(t){return pr[t]}function $r(t){return{fieldPath:t.canonicalString()}}function Hr(t){return Z.fromServerFormat(t.fieldPath)}function Kr(t){return t instanceof de?function(t){if("=="===t.op){if(Jt(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(Xt(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Jt(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(Xt(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:jr(t.op),value:t.value}}}(t):t instanceof fe?function(t){const e=t.getFilters().map((t=>Kr(t)));return 1===e.length?e[0]:{compositeFilter:{op:Br(t.op),filters:e}}}(t):x()}function zr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function qr(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Wr{constructor(t,e,n,r,i=Q.min(),o=Q.min(),s=xt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(t){return new Wr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
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
 */class Gr{constructor(t){this.ct=t}}function Qr(t){const e=Mr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Be(e,e.limit,"L"):e}
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
class Yr{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(Nt(t.integerValue));else if("doubleValue"in t){const n=Nt(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),pt(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),"string"==typeof n&&(n=Rt(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(Pt(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?ne(t)?this.dt(e,Number.MAX_SAFE_INTEGER):te(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):x()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const r of Object.keys(n))this.Vt(r,e),this.Tt(n[r],e)}wt(t,e){var n,r;const i=t.fields||{};this.dt(e,53);const o="value",s=(null===(r=null===(n=i[o].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(e,15),e.At(Nt(s)),this.Vt(o,e),this.Tt(i[o],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const r of n)this.Tt(r,e)}yt(t,e){this.dt(e,37),tt.fromName(t).path.forEach((t=>{this.dt(e,60),this.Dt(t,e)}))}dt(t,e){t.At(e)}ft(t){t.At(2)}}Yr.vt=new Yr;
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
class Xr{constructor(){this.un=new Jr}addToCollectionParentIndex(t,e){return this.un.add(e),ut.resolve()}getCollectionParents(t,e){return ut.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return ut.resolve()}deleteFieldIndex(t,e){return ut.resolve()}deleteAllFieldIndexes(t){return ut.resolve()}createTargetIndexes(t,e){return ut.resolve()}getDocumentsMatchingTarget(t,e){return ut.resolve(null)}getIndexType(t,e){return ut.resolve(0)}getFieldIndexes(t,e){return ut.resolve([])}getNextCollectionGroupToUpdate(t){return ut.resolve(null)}getMinOffset(t,e){return ut.resolve(it.min())}getMinOffsetFromCollectionGroup(t,e){return ut.resolve(it.min())}updateCollectionGroup(t,e,n){return ut.resolve()}updateIndexEntries(t,e){return ut.resolve()}}class Jr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ct(X.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ct(X.comparator)).toArray()}}
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
 */new Uint8Array(0);class Zr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Zr(t,Zr.DEFAULT_COLLECTION_PERCENTILE,Zr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
class ti{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ti(0)}static kn(){return new ti(-1)}}
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
class ei{constructor(){this.changes=new Qe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ut.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class ni{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class ri{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Rn(n.mutation,t,kt.empty(),G.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,an()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=an()){const r=en();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ze();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=en();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,an())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Xe();const o=rn(),s=function(){return rn()}();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof Mn)?i=i.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),Rn(s.mutation,e,s.mutation.getFieldMask(),G.now())):o.set(e.key,kt.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new ni(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=rn();let r=new Tt(((t,e)=>t-e)),i=an();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||kt.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||an()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=nn();c.forEach((t=>{if(!i.has(t)){const r=xn(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ut.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ue(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):ut.resolve(en());let s=-1,a=i;return o.next((e=>ut.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?ut.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,an()))).next((t=>({batchId:s,changes:tn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next((t=>{let e=Ze();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let o=Ze();return this.indexManager.getCollectionParents(t,i).next((s=>ut.forEach(s,(s=>{const a=function(t,e){return new Ne(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{o=o.insert(t,e)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,oe.newInvalidDocument(r)))}));let n=Ze();return t.forEach(((t,r)=>{const o=i.get(t);void 0!==o&&Rn(o.mutation,r,kt.empty(),G.now()),ze(e,r)&&(n=n.insert(t,r))})),n}))}}
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
 */class ii{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return ut.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:_r(t.createTime)}}(e)),ut.resolve()}getNamedQuery(t,e){return ut.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(t){return{name:t.name,query:Qr(t.bundledQuery),readTime:_r(t.readTime)}}(e)),ut.resolve()}}
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
 */class oi{constructor(){this.overlays=new Tt(tt.comparator),this.Ir=new Map}getOverlay(t,e){return ut.resolve(this.overlays.get(e))}getOverlays(t,e){const n=en();return ut.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),ut.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),ut.resolve()}getOverlaysForCollection(t,e,n){const r=en(),i=e.length+1,o=new tt(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ut.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Tt(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=en(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=en(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return ut.resolve(s)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Kn(e,n));let i=this.Ir.get(e);void 0===i&&(i=an(),this.Ir.set(e,i)),this.Ir.set(e,i.add(n.key))}}
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
 */class si{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(t){return ut.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,ut.resolve()}}
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
 */class ai{constructor(){this.Tr=new Ct(ci.Er),this.dr=new Ct(ci.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new ci(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new ci(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new tt(new X([])),n=new ci(e,t),r=new ci(e,t+1),i=[];return this.dr.forEachInRange([n,r],(t=>{this.Vr(t),i.push(t.key)})),i}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new tt(new X([])),n=new ci(e,t),r=new ci(e,t+1);let i=an();return this.dr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ci(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ci{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return tt.comparator(t.key,e.key)||q(t.wr,e.wr)}static Ar(t,e){return q(t.wr,e.wr)||tt.comparator(t.key,e.key)}}
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
 */class ui{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Ct(ci.Er)}checkEmpty(t){return ut.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $n(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.br=this.br.add(new ci(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return ut.resolve(o)}lookupMutationBatch(t,e){return ut.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.vr(n),i=r<0?0:r;return ut.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ut.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return ut.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ci(e,0),r=new ci(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(t=>{const e=this.Dr(t.wr);i.push(e)})),ut.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ct(q);return e.forEach((t=>{const e=new ci(t,0),r=new ci(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,r],(t=>{n=n.add(t.wr)}))})),ut.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;tt.isDocumentKey(i)||(i=i.child(""));const o=new ci(new tt(i),0);let s=new Ct(q);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.wr)),!0)}),o),ut.resolve(this.Cr(s))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){D(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return ut.forEach(e.mutations,(r=>{const i=new ci(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new ci(e,0),r=this.br.firstAfterOrEqual(n);return ut.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ut.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class li{constructor(t){this.Mr=t,this.docs=function(){return new Tt(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ut.resolve(n?n.document.mutableCopy():oe.newInvalidDocument(e))}getEntries(t,e){let n=Xe();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():oe.newInvalidDocument(t))})),ut.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Xe();const o=e.path,s=new tt(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||ot(rt(s),n)<=0||(r.has(s.key)||ze(e,s))&&(i=i.insert(s.key,s.mutableCopy()))}return ut.resolve(i)}getAllFromCollectionGroup(t,e,n,r){x()}Or(t,e){return ut.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new hi(this)}getSize(t){return ut.resolve(this.size)}}class hi extends ei{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(n)})),ut.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
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
 */class di{constructor(t){this.persistence=t,this.Nr=new Qe((t=>xe(t)),De),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ai,this.targetCount=0,this.kr=ti.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),ut.resolve()}getLastRemoteSnapshotVersion(t){return ut.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ut.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),ut.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),ut.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ti(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,ut.resolve()}updateTargetData(t,e){return this.Kn(e),ut.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,ut.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Nr.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),ut.waitFor(i).next((()=>r))}getTargetCount(t){return ut.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return ut.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),ut.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),ut.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),ut.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return ut.resolve(n)}containsKey(t,e){return ut.resolve(this.Br.containsKey(e))}}
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
 */class fi{constructor(t,e){this.qr={},this.overlays={},this.Qr=new dt(0),this.Kr=!1,this.Kr=!0,this.$r=new si,this.referenceDelegate=t(this),this.Ur=new di(this),this.indexManager=new Xr,this.remoteDocumentCache=function(t){return new li(t)}((t=>this.referenceDelegate.Wr(t))),this.serializer=new Gr(e),this.Gr=new ii(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new oi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new ui(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const r=new pi(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((t=>this.referenceDelegate.jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Hr(t,e){return ut.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class pi extends at{constructor(t){super(),this.currentSequenceNumber=t}}class gi{constructor(t){this.persistence=t,this.Jr=new ai,this.Yr=null}static Zr(t){return new gi(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),ut.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),ut.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),ut.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ut.forEach(this.Xr,(n=>{const r=tt.fromPath(n);return this.ei(t,r).next((t=>{t||e.removeEntry(r,Q.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return ut.or([()=>ut.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
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
class mi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=r}static Wi(t,e){let n=an(),r=an();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new mi(t,e.fromCache,n,r)}}
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
 */class vi{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
 */class yi{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,c.nr)()?8:lt((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Yi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.Zi(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new vi;return this.Xi(t,e,n).next((r=>{if(i.result=r,this.zi)return this.es(t,e,n,r.size)}))})).next((()=>i.result))}es(t,e,n,r){return n.documentReadCount<this.ji?(I()<=a.$b.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),ut.resolve()):(I()<=a.$b.DEBUG&&C("QueryEngine","Query:",Ke(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(I()<=a.$b.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ve(e))):ut.resolve())}Yi(t,e){if(Me(e))return ut.resolve(null);let n=Ve(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Be(e,null,"F"),n=Ve(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=an(...r);return this.Ji.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.ts(e,r);return this.ns(e,o,i,n.readTime)?this.Yi(t,Be(e,null,"F")):this.rs(t,o,e,n)}))))})))))}Zi(t,e,n,r){return Me(e)||r.isEqual(Q.min())?ut.resolve(null):this.Ji.getDocuments(t,n).next((i=>{const o=this.ts(e,i);return this.ns(e,o,n,r)?ut.resolve(null):(I()<=a.$b.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ke(e)),this.rs(t,o,e,nt(r,-1)).next((t=>t)))}))}ts(t,e){let n=new Ct(We(t));return e.forEach(((e,r)=>{ze(t,r)&&(n=n.add(r))})),n}ns(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(t,e,n){return I()<=a.$b.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Ke(e)),this.Ji.getDocumentsMatchingQuery(t,e,it.min(),n)}rs(t,e,n,r){return this.Ji.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class bi{constructor(t,e,n,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Tt(q),this._s=new Qe((t=>xe(t)),De),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ri(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function _i(t,e,n,r){return new bi(t,e,n,r)}async function wi(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=an();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({hs:t,removedBatchIds:i,addedBatchIds:o})))}))}))}function Ei(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=ut.resolve();return o.forEach((t=>{s=s.next((()=>r.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);D(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=an();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ti(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function Si(t,e){const n=R(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const s=[];e.targetChanges.forEach(((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Ur.removeMatchingKeys(t,o.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,o.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(xt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Ur.updateTargetData(t,u))}));let a=Xe(),c=an();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),s.push(Ii(t,o,e.documentUpdates).next((t=>{a=t.Ps,c=t.Is}))),!r.isEqual(Q.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,r)));s.push(e)}return ut.waitFor(s).next((()=>o.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.os=i,t)))}function Ii(t,e,n){let r=an(),i=an();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Xe();return n.forEach(((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Q.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):C("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{Ps:r,Is:i}}))}function Ci(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ai(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Ur.getTargetData(t,e).next((i=>i?(r=i,ut.resolve(r)):n.Ur.allocateTargetId(t).next((i=>(r=new Wr(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.os.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}async function ki(t,e,n){const r=R(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!ht(t))throw t;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Oi(t,e,n){const r=R(t);let i=Q.min(),o=an();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=R(t),i=r._s.get(n);return void 0!==i?ut.resolve(r.os.get(i)):r.Ur.getTargetData(e,n)}(r,t,Ve(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{o=t}))})).next((()=>r.ss.getDocumentsMatchingQuery(t,e,n?i:Q.min(),n?o:an()))).next((t=>(xi(r,qe(e),t),{documents:t,Ts:o})))))}function xi(t,e,n){let r=t.us.get(e)||Q.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.us.set(e,r)}class Di{constructor(){this.activeTargetIds=un()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ri{constructor(){this.so=new Di,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Di,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Ni{_o(t){}shutdown(){}}
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
 */class Pi{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */class Fi{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
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
 */const Vi="WebChannelConnection";class ji extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(t,e,n,r,i){const o=Mi(),s=this.xo(t,e.toUriEncodedString());C("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(t,s,a,n).then((e=>(C("RestConnection",`Received RPC '${t}' ${o}: `,e),e)),(e=>{throw k("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e}))}Lo(t,e,n,r,i,o){return this.Mo(t,e,n,r,i)}Oo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+T}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=Ui[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,r){const i=Mi();return new Promise(((o,s)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();C(Vi,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),o(e);break;case p.TIMEOUT:C(Vi,`RPC '${t}' ${i} timed out`),s(new P(N.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(C(Vi,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(e)>=0?e:N.UNKNOWN}(e.status);s(new P(t,e.message))}else s(new P(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new P(N.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{C(Vi,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);C(Vi,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Bo(t,e,n){const r=Mi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=y(),s=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");C(Vi,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=o.createWebChannel(u,a);let h=!1,f=!1;const p=new Fi({Io:e=>{f?C(Vi,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(C(Vi,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),C(Vi,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},To:()=>l.close()}),b=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return b(l,d.EventType.OPEN,(()=>{f||(C(Vi,`RPC '${t}' stream ${r} transport opened.`),p.yo())})),b(l,d.EventType.CLOSE,(()=>{f||(f=!0,C(Vi,`RPC '${t}' stream ${r} transport closed`),p.So())})),b(l,d.EventType.ERROR,(e=>{f||(f=!0,k(Vi,`RPC '${t}' stream ${r} transport errored:`,e),p.So(new P(N.UNAVAILABLE,"The operation could not be completed")))})),b(l,d.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];D(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){C(Vi,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=qn[t];if(void 0!==e)return Qn(e)}(e),i=s.message;void 0===n&&(n=N.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,p.So(new P(n,i)),l.close()}else C(Vi,`RPC '${t}' stream ${r} received:`,i),p.bo(i)}})),b(s,m.STAT_EVENT,(e=>{e.stat===g.PROXY?C(Vi,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===g.NOPROXY&&C(Vi,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.wo()}),0),p}}
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
 */function Bi(){return"undefined"!=typeof document?document:null}
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
 */function $i(t){return new gr(t,!0)}
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
 */class Hi{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-n);r>0&&C("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
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
 */class Ki{constructor(t,e,n,r,i,o,s,a){this.ui=t,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hi(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(A(e.toString()),A("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===N.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new P(N.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zi extends Ki{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Dr(this.serializer,t),n=function(t){if(!("targetChange"in t))return Q.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Q.min():e.readTime?_r(e.readTime):Q.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=kr(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Re(r)?{documents:Pr(t,r)}:{query:Lr(t,r)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=yr(t,e.resumeToken);const r=mr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Q.min())>0){n.readTime=vr(t,e.snapshotVersion.toTimestamp());const r=mr(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Ur(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=kr(this.serializer),e.removeTarget=t,this.a_(e)}}class qi extends Ki{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return D(!!t.streamToken),this.lastStreamToken=t.streamToken,D(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){D(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Nr(t.writeResults,t.commitTime),n=_r(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=kr(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Rr(this.serializer,t)))};this.a_(e)}}
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
 */class Wi extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new P(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Mo(t,Er(e,n),r,i,o))).catch((t=>{throw"FirebaseError"===t.name?(t.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(N.UNKNOWN,t.toString())}))}Lo(t,e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,s])=>this.connection.Lo(t,Er(e,n),r,o,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(N.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Gi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(A(e),this.D_=!1):C("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
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
 */class Qi{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((t=>{n.enqueueAndForget((async()=>{io(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=R(t);e.L_.add(4),await Xi(e),e.q_.set("Unknown"),e.L_.delete(4),await Yi(e)}(this))}))})),this.q_=new Gi(n,r)}}async function Yi(t){if(io(t))for(const e of t.B_)await e(!0)}async function Xi(t){for(const e of t.B_)await e(!1)}function Ji(t,e){const n=R(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ro(n)?no(n):So(n).r_()&&to(n,e))}function Zi(t,e){const n=R(t),r=So(n);n.N_.delete(e),r.r_()&&eo(n,e),0===n.N_.size&&(r.r_()?r.o_():io(n)&&n.q_.set("Unknown"))}function to(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(t).A_(e)}function eo(t,e){t.Q_.xe(e),So(t).R_(e)}function no(t){t.Q_=new ur({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),So(t).start(),t.q_.v_()}function ro(t){return io(t)&&!So(t).n_()&&t.N_.size>0}function io(t){return 0===R(t).L_.size}function oo(t){t.Q_=void 0}async function so(t){t.q_.set("Online")}async function ao(t){t.N_.forEach(((e,n)=>{to(t,e)}))}async function co(t,e){oo(t),ro(t)?(t.q_.M_(e),no(t)):t.q_.set("Unknown")}async function uo(t,e,n){if(t.q_.set("Online"),e instanceof ar&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.N_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.N_.delete(r),t.Q_.removeTarget(r))}(t,e)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await lo(t,n)}else if(e instanceof or?t.Q_.Ke(e):e instanceof sr?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const e=await Ti(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.N_.get(r);i&&t.N_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.N_.get(e);if(!r)return;t.N_.set(e,r.withResumeToken(xt.EMPTY_BYTE_STRING,r.snapshotVersion)),eo(t,e);const i=new Wr(r.target,e,n,r.sequenceNumber);to(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){C("RemoteStore","Failed to raise snapshot:",e),await lo(t,e)}}async function lo(t,e,n){if(!ht(e))throw e;t.L_.add(1),await Xi(t),t.q_.set("Offline"),n||(n=()=>Ti(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Yi(t)}))}function ho(t,e){return e().catch((n=>lo(t,n,e)))}async function fo(t){const e=R(t),n=Io(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;po(e);)try{const t=await Ci(e.localStore,r);if(null===t){0===e.O_.length&&n.o_();break}r=t.batchId,go(e,t)}catch(t){await lo(e,t)}mo(e)&&vo(e)}function po(t){return io(t)&&t.O_.length<10}function go(t,e){t.O_.push(e);const n=Io(t);n.r_()&&n.V_&&n.m_(e.mutations)}function mo(t){return io(t)&&!Io(t).n_()&&t.O_.length>0}function vo(t){Io(t).start()}async function yo(t){Io(t).p_()}async function bo(t){const e=Io(t);for(const n of t.O_)e.m_(n.mutations)}async function _o(t,e,n){const r=t.O_.shift(),i=Hn.from(r,e,n);await ho(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await fo(t)}async function wo(t,e){e&&Io(t).V_&&await async function(t,e){if(function(t){return Gn(t)&&t!==N.ABORTED}(e.code)){const n=t.O_.shift();Io(t).s_(),await ho(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await fo(t)}}(t,e),mo(t)&&vo(t)}async function Eo(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=io(n);n.L_.add(3),await Xi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Yi(n)}async function To(t,e){const n=R(t);e?(n.L_.delete(2),await Yi(n)):e||(n.L_.add(2),await Xi(n),n.q_.set("Unknown"))}function So(t){return t.K_||(t.K_=function(t,e,n){const r=R(t);return r.w_(),new zi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(t.datastore,t.asyncQueue,{Eo:so.bind(null,t),Ro:ao.bind(null,t),mo:co.bind(null,t),d_:uo.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),ro(t)?no(t):t.q_.set("Unknown")):(await t.K_.stop(),oo(t))}))),t.K_}function Io(t){return t.U_||(t.U_=function(t,e,n){const r=R(t);return r.w_(),new qi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yo.bind(null,t),mo:wo.bind(null,t),f_:bo.bind(null,t),g_:_o.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await fo(t)):(await t.U_.stop(),t.O_.length>0&&(C("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_
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
 */}class Co{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new L,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Co(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ao(t,e){if(A("AsyncQueue",`${e}: ${t}`),ht(t))return new P(N.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class ko{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=Ze(),this.sortedSet=new Tt(this.comparator)}static emptySet(t){return new ko(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ko))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ko;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Oo{constructor(){this.W_=new Tt(tt.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):x():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class xo{constructor(t,e,n,r,i,o,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach((t=>{o.push({type:0,doc:t})})),new xo(t,e,ko.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$e(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Do{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Ro{constructor(){this.queries=No(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=R(t),r=n.queries;n.queries=No(),r.forEach(((t,n)=>{for(const r of n.j_)r.onError(e)}))}(this,new P(N.ABORTED,"Firestore shutting down"))}}function No(){return new Qe((t=>He(t)),$e)}async function Po(t,e){const n=R(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new Do,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Ao(t,`Initialization of query '${Ke(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&Fo(n)}async function Lo(t,e){const n=R(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const t=o.j_.indexOf(e);t>=0&&(o.j_.splice(t,1),0===o.j_.length?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Mo(t,e){const n=R(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(i)&&(r=!0);e.z_=i}}r&&Fo(n)}function Uo(t,e,n){const r=R(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function Fo(t){t.Y_.forEach((t=>{t.next()}))}var Vo,jo;(jo=Vo||(Vo={})).ea="default",jo.Cache="cache";class Bo{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=xo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Vo.Cache}}
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
class $o{constructor(t){this.key=t}}class Ho{constructor(t){this.key=t}}class Ko{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=an(),this.mutatedKeys=an(),this.Aa=We(t),this.Ra=new ko(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Oo,r=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=ze(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Aa(l,a)>0||c&&this.Aa(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(s=!0)),f&&(l?(o=o.add(l),i=d?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ra:o,fa:n,ns:s,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),r=null!=r&&r;const s=e&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==o.length||c?{snapshot:new xo(this.query,t.Ra,i,o,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:s}:{wa:s}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Oo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=an(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Ho(t))})),this.da.forEach((n=>{t.has(n)||e.push(new $o(n))})),e}ba(t){this.Ta=t.Ts,this.da=an();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return xo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class zo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class qo{constructor(t){this.key=t,this.va=!1}}class Wo{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Qe((t=>He(t)),$e),this.Ma=new Map,this.xa=new Set,this.Oa=new Tt(tt.comparator),this.Na=new Map,this.La=new ai,this.Ba={},this.ka=new Map,this.qa=ti.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Go(t,e,n=!0){const r=ms(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Yo(r,e,n,!0),i}async function Qo(t,e){const n=ms(t);await Yo(n,e,!0,!1)}async function Yo(t,e,n,r){const i=await Ai(t.localStore,Ve(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await Xo(t,e,o,"current"===s,i.resumeToken)),t.isPrimaryClient&&n&&Ji(t.remoteStore,i),a}async function Xo(t,e,n,r,i){t.Ka=(e,n,r)=>async function(t,e,n,r){let i=e.view.ma(n);i.ns&&(i=await Oi(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,i))));const o=r&&r.targetChanges.get(e.targetId),s=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,o,s);return ls(t,e.targetId,a.wa),a.snapshot}(t,e,n,r);const o=await Oi(t.localStore,e,!0),s=new Ko(e,o.Ts),a=s.ma(o.documents),c=ir.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=s.applyChanges(a,t.isPrimaryClient,c);ls(t,n,u.wa);const l=new zo(e,n,s);return t.Fa.set(e,l),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function Jo(t,e,n){const r=R(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter((t=>!$e(t,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ki(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zi(r.remoteStore,i.targetId),cs(r,i.targetId)})).catch(ct)):(cs(r,i.targetId),await ki(r.localStore,i.targetId,!0))}async function Zo(t,e){const n=R(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zi(n.remoteStore,r.targetId))}async function ts(t,e,n){const r=vs(t);try{const t=await function(t,e){const n=R(t),r=G.now(),i=e.reduce(((t,e)=>t.add(e.key)),an());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Xe(),c=an();return n.cs.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{o=i;const s=[];for(const t of e){const e=Nn(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new Mn(t.key,e,ie(e.value.mapValue),An.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)})).next((e=>{s=e;const r=e.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:tn(o)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ba[t.currentUser.toKey()];r||(r=new Tt(q)),r=r.insert(e,n),t.Ba[t.currentUser.toKey()]=r}(r,t.batchId,n),await fs(r,t.changes),await fo(r.remoteStore)}catch(t){const e=Ao(t,"Failed to persist write");n.reject(e)}}async function es(t,e){const n=R(t);try{const t=await Si(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Na.get(e);r&&(D(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.va=!0:t.modifiedDocuments.size>0?D(r.va):t.removedDocuments.size>0&&(D(r.va),r.va=!1))})),await fs(n,t,e)}catch(t){await ct(t)}}function ns(t,e,n){const r=R(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=R(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.j_)i.Z_(e)&&(r=!0)})),r&&Fo(n)}(r.eventManager,e),t.length&&r.Ca.d_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rs(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let t=new Tt(tt.comparator);t=t.insert(o,oe.newNoDocument(o,Q.min()));const n=an().add(o),i=new rr(Q.min(),new Map,new Tt(q),t,n);await es(r,i),r.Oa=r.Oa.remove(o),r.Na.delete(e),ds(r)}else await ki(r.localStore,e,!1).then((()=>cs(r,e,n))).catch(ct)}async function is(t,e){const n=R(t),r=e.batch.batchId;try{const t=await Ei(n.localStore,e);as(n,r,null),ss(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fs(n,t)}catch(t){await ct(t)}}async function os(t,e,n){const r=R(t);try{const t=await function(t,e){const n=R(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(D(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);as(r,e,n),ss(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fs(r,t)}catch(n){await ct(n)}}function ss(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function as(t,e,n){const r=R(t);let i=r.Ba[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function cs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||us(t,e)}))}function us(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(Zi(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ds(t))}function ls(t,e,n){for(const r of n)r instanceof $o?(t.La.addReference(r.key,e),hs(t,r)):r instanceof Ho?(C("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||us(t,r.key)):x()}function hs(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(C("SyncEngine","New document in limbo: "+n),t.xa.add(r),ds(t))}function ds(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new tt(X.fromString(e)),r=t.qa.next();t.Na.set(r,new qo(n)),t.Oa=t.Oa.insert(n,r),Ji(t.remoteStore,new Wr(Ve(Le(n.path)),r,"TargetPurposeLimboResolution",dt.oe))}}async function fs(t,e,n){const r=R(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach(((t,a)=>{s.push(r.Ka(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=mi.Wi(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.Ca.d_(i),await async function(t,e){const n=R(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ut.forEach(e,(e=>ut.forEach(e.$i,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ut.forEach(e.Ui,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ht(t))throw t;C("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.os.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(t,i)}}}(r.localStore,o))}async function ps(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const t=await wi(n.localStore,e);n.currentUser=e,function(t,e){t.ka.forEach((t=>{t.forEach((t=>{t.reject(new P(N.CANCELLED,e))}))})),t.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await fs(n,t.hs)}}function gs(t,e){const n=R(t),r=n.Na.get(e);if(r&&r.va)return an().add(r.key);{let t=an();const r=n.Ma.get(e);if(!r)return t;for(const e of r){const r=n.Fa.get(e);t=t.unionWith(r.view.Va)}return t}}function ms(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=es.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rs.bind(null,e),e.Ca.d_=Mo.bind(null,e.eventManager),e.Ca.$a=Uo.bind(null,e.eventManager),e}function vs(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=is.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=os.bind(null,e),e}class ys{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$i(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return _i(this.persistence,new yi,t.initialUser,this.serializer)}Ga(t){return new fi(gi.Zr,this.serializer)}Wa(t){return new Ri}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ys.provider={build:()=>new ys};class bs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ns(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ps.bind(null,this.syncEngine),await To(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ro}()}createDatastore(t){const e=$i(t.databaseInfo.databaseId),n=function(t){return new ji(t)}(t.databaseInfo);return function(t,e,n,r){return new Wi(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Qi(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>ns(this.syncEngine,t,0)),function(){return Pi.D()?new Pi:new Ni}())}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Wo(t,e,n,r,i,o);return s&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=R(t);C("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await Xi(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}bs.provider={build:()=>new bs};
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
class _s{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):A("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
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
class ws{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=E.UNAUTHENTICATED,this.clientId=z.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{C("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(C("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new L;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ao(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Es(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await wi(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Ts(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ss(t);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Eo(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Eo(e.remoteStore,n))),t._onlineComponents=e}async function Ss(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Es(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;k("Error using user provided cache. Falling back to memory cache: "+n),await Es(t,new ys)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Es(t,new ys);return t._offlineComponents}async function Is(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Ts(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Ts(t,new bs))),t._onlineComponents}function Cs(t){return Is(t).then((t=>t.syncEngine))}async function As(t){const e=await Is(t),n=e.eventManager;return n.onListen=Go.bind(null,e.syncEngine),n.onUnlisten=Jo.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Qo.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Zo.bind(null,e.syncEngine),n}function ks(t,e,n={}){const r=new L;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new _s({next:a=>{o.Za(),e.enqueueAndForget((()=>Lo(t,s)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new P(N.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new P(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),s=new Bo(Le(n.path),o,{includeMetadataChanges:!0,_a:!0});return Po(t,s)}(await As(t),t.asyncQueue,e,n,r))),r.promise}
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
function Os(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const xs=new Map;
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
 */function Ds(t,e,n){if(!n)throw new P(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Rs(t,e,n,r){if(!0===e&&!0===r)throw new P(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ns(t){if(!tt.isDocumentKey(t))throw new P(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ps(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":x()}function Ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ps(t);throw new P(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Ms{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new P(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new P(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Rs("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Os(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new P(N.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new P(N.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new P(N.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Us{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ms({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ms(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new U;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=xs.get(t);e&&(C("ComponentProvider","Removing Datastore"),xs.delete(t),e.terminate())}(this),Promise.resolve()}}function Fs(t,e,n,r={}){var i;const o=(t=Ls(t,Us))._getSettings(),s=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&k("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=E.MOCK_USER;else{e=(0,c.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new P(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new E(o)}t._authCredentials=new F(new M(e,n))}}
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
 */class Vs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Vs(this.firestore,t,this._query)}}class js{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new js(this.firestore,t,this._key)}}class Bs extends Vs{constructor(t,e,n){super(t,e,Le(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new js(this.firestore,null,new tt(t))}withConverter(t){return new Bs(this.firestore,t,this._path)}}function $s(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=z.newId()),Ds("doc","path",e),t instanceof Us){const r=X.fromString(e,...n);return Ns(r),new js(t,null,new tt(r))}{if(!(t instanceof js||t instanceof Bs))throw new P(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return Ns(r),new js(t.firestore,t instanceof Bs?t.converter:null,new tt(r))}}
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
class Hs{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hi(this,"async_queue_retry"),this.Vu=()=>{const t=Bi();t&&C("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()},this.mu=t;const e=Bi();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Bi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new L;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ht(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((t=>{this.Eu=t,this.du=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw A("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.du=!1,t))))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Co.createAndSchedule(this,t,e,n,(t=>this.yu(t)));return this.Tu.push(r),r}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let t;do{t=this.mu,await t}while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ks extends Us{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Hs,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Hs(t),this._firestoreClient=void 0,await t}}}function zs(t,e){const n="object"==typeof t?t:(0,o.Sx)(),r="string"==typeof t?t:e||"(default)",i=(0,o.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,c.yU)("firestore");t&&Fs(i,...t)}return i}function qs(t){if(t._terminated)throw new P(N.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ws(t),t._firestoreClient}function Ws(t){var e,n,r;const i=t._freezeSettings(),o=function(t,e,n,r){return new Ft(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Os(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ws(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
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
class Gs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Gs(xt.fromBase64String(t))}catch(t){throw new P(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Gs(xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Qs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Ys{constructor(t){this._methodName=t}}
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
 */class Xs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}
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
 */class Js{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
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
 */const Zs=/^__.*__$/;class ta{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Mn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ln(t,this.data,e,this.fieldTransforms)}}function ea(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class na{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new na(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.Ou(t),r}Nu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return fa(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(0===t.length)throw this.Bu("Document fields must not be empty");if(ea(this.Cu)&&Zs.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class ra{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||$i(t)}Qu(t,e,n,r=!1){return new na({Cu:t,methodName:e,qu:n,path:Z.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ia(t){const e=t._freezeSettings(),n=$i(t._databaseId);return new ra(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oa(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);ua("Data must be an object, but it was:",s,r);const a=aa(r,s);let c,u;if(o.merge)c=new kt(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=la(e,r,n);if(!s.contains(i))throw new P(N.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);pa(t,i)||t.push(i)}c=new kt(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new ta(new re(a),c,u)}function sa(t,e){if(ca(t=(0,c.Ku)(t)))return ua("Unsupported field value:",e,t),aa(t,e);if(t instanceof Ys)return function(t,e){if(!ea(e.Cu))throw e.Bu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Bu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&4!==e.Cu)throw e.Bu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=sa(i,e.Lu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return dn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=G.fromDate(t);return{timestampValue:vr(e.serializer,n)}}if(t instanceof G){const n=new G(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vr(e.serializer,n)}}if(t instanceof Xs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Gs)return{bytesValue:yr(e.serializer,t._byteString)};if(t instanceof js){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:wr(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Js)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Bu("VectorValues must only contain numeric values.");return ln(e.serializer,t)}))}}}}}}(t,e);throw e.Bu(`Unsupported field value: ${Ps(t)}`)}(t,e)}function aa(t,e){const n={};return Et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wt(t,((t,r)=>{const i=sa(r,e.Mu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function ca(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof G||t instanceof Xs||t instanceof Gs||t instanceof js||t instanceof Ys||t instanceof Js)}function ua(t,e,n){if(!ca(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ps(n);throw"an object"===r?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function la(t,e,n){if((e=(0,c.Ku)(e))instanceof Qs)return e._internalPath;if("string"==typeof e)return da(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const ha=new RegExp("[~\\*/\\[\\]]");function da(t,e,n){if(e.search(ha)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qs(...e.split("."))._internalPath}catch(r){throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new P(N.INVALID_ARGUMENT,a+t+c)}function pa(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class ga{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new js(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ma(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(va("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ma extends ga{data(){return super.data()}}function va(t,e){return"string"==typeof e?da(t,e):e instanceof Qs?e._internalPath:e._delegate._internalPath}
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
 */class ya{convertValue(t,e="none"){switch(Bt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Pt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return wt(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertVectorValue(t){var e,n,r;const i=null===(r=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((t=>Nt(t.doubleValue)));return new Js(i)}convertGeoPoint(t){return new Xs(Nt(t.latitude),Nt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Mt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ut(t));default:return null}}convertTimestamp(t){const e=Rt(t);return new G(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);D(qr(n));const r=new Vt(n.get(1),n.get(3)),i=new tt(n.popFirst(5));return r.isEqual(e)||A(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function ba(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
class _a{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wa extends ga{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(va("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ea extends wa{data(t={}){return super.data(t)}}
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
function Ta(t){t=Ls(t,js);const e=Ls(t.firestore,Ks);return ks(qs(e),t._key).then((n=>Aa(e,t,n)))}class Sa extends ya{constructor(t){super(),this.firestore=t}convertBytes(t){return new Gs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new js(this.firestore,null,e)}}function Ia(t,e,n){t=Ls(t,js);const r=Ls(t.firestore,Ks),i=ba(t.converter,e,n);return Ca(r,[oa(ia(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,An.none())])}function Ca(t,e){return function(t,e){const n=new L;return t.asyncQueue.enqueueAndForget((async()=>ts(await Cs(t),e,n))),n.promise}(qs(t),e)}function Aa(t,e,n){const r=n.docs.get(e._key),i=new Sa(t);return new wa(t,i,e._key,r,new _a(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){!function(t){T=t}(o.MF),(0,o.om)(new s.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new Ks(new V(t.getProvider("auth-internal")),new H(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vt(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,o.KO)(w,"4.7.3",t),(0,o.KO)(w,"4.7.3","esm2017")}()}}]);
//# sourceMappingURL=chunk-vendors.b9bcc4e8.js.map