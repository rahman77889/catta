!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Catta=t():e.Catta=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return"function"==typeof e}function u(e,t){return Object.keys(e).map(function(n){var o=e[n];return t(o,n)})}function a(e,t){if(e){var n=u(e,function(e,n){if("object"===("undefined"==typeof e?"undefined":l(e))){var r=t?[].concat(o(t)):[];return r.push(n),a(e,r)}if(e=encodeURIComponent(e),t){var i=void 0;return i=t.length>1?t[0]+"["+t.slice(1).join("][")+"]["+n+"]":t[0]+"["+n+"]",escape(i)+"="+e}return n+"="+e});return n.join("&")}}function c(e,t){var n=/\?/.test(e);return t.forEach(function(t){void 0!==t&&("object"===("undefined"==typeof t?"undefined":l(t))?u(t,function(t,o){n?e+="&"+o+"="+t:(e+="?"+o+"="+t,n=!0)}):n?e+="&"+t:(e+="?"+t,n=!0))}),e}function f(e,t){if(void 0!==t&&null!==t){if("object"!==("undefined"==typeof t?"undefined":l(t)))return{contentType:d.text,data:t};if(t instanceof HTMLFormElement){if(b.formData&&"post"===e)return{data:new FormData(t)};var n={},o=!0,r=!1,i=void 0;try{for(var u,c=t.elements[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var f=u.value,s=f.name,p=f.tagName,y=f.type,m=f.value,h=(f.files,f.checked),w=f.selectedOptions;if(s){if("post"===e&&"file"===y)throw new Error(v.NOT_SUPPORT("FormData"));if("select-multiple"===y||"select-one"===y){var R=!0,T=!1,O=void 0;try{for(var g,j=w[Symbol.iterator]();!(R=(g=j.next()).done);R=!0){var E=g.value;n[s]=E.value}}catch(e){T=!0,O=e}finally{try{!R&&j.return&&j.return()}finally{if(T)throw O}}}else"checkbox"===y||"radio"===y?h&&(n[s]=m):"INPUT"===p&&(n[s]=m)}}}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return{contentType:d.simple,data:a(n)}}return{contentType:d.simple,data:a(t)}}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.serialize=a,t.combineUrlQuery=c,t.getRequestData=f;var d={simple:"application/x-www-form-urlencoded",multipart:"multipart/form-data",text:"text/plain"},p={method:"get",type:"",timeout:3,resultType:"json",cross:!0,withCookie:!0},y=t.noop=function(){},m=t.has=function(e,t){return t.split(".").every(function(t){if("object"===("undefined"==typeof e?"undefined":l(e))&&e.hasOwnProperty(t))return e=e[t],!0})},h=t.assign=function(){return"function"!=typeof Object.assign?function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return o.forEach(function(e){if(null!=e)for(var n in e)m(e,n)&&(t[n]=e[n])}),t}:Object.assign}();!function(){"function"!=typeof window.Promise&&!function(){var e=function(){this.onResolved.apply(this,arguments)},t=function(){this.onRejected.apply(this,arguments)};window.Promise=function(){function n(o){r(this,n),this.onResolved=this.onRejected=y,o(e.bind(this),t.bind(this))}return s(n,[{key:"then",value:function(e){this.onResolved=e}},{key:"catch",value:function(e){this.onRejected=e}}]),n}()}()}();var v=t.ERROR={REQUEST:"[Request Error]: the request was failed, please confirm remote origin is correct",TIMEOUT:"[Timeout Error]: the request has been take over given time",UPLOAD_FILE:"[Upload File Error]: Can't upload file without FormData support",NOT_SUPPORT:function(e){return"["+e+" Not Support]: your browser do not support "+e}},b=(t.initOpts=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"==typeof e&&(e={target:e}),t?h(p,e):h({},p,e)},t.isSupport={globalFetch:i(window.fetch),formData:i(window.FormData)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=(0,o.initOpts)(e),new Promise(function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE)if(200===r.status){var i=void 0;i="json"===e.resultType?JSON.parse(r.responseText):r.responseText,t(i)}else n(0===r.status?o.ERROR.TIMEOUT:o.ERROR.REQUEST)};var i=(0,o.getRequestData)(e.method,e.data);"get"===e.method&&i&&(e.target=(0,o.combineUrlQuery)(e.target,[i.data])),r.open(e.method.toUpperCase(),e.target),r.timeout=1e3*e.timeout+50,r.withCredentials=e.withCookie,i&&i.contentType&&r.setRequestHeader("Content-Type",i.contentType),"post"===e.method&&i?r.send(i.data):r.send()})};var o=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=(0,o.initOpts)(e),new Promise(function(t,n){o.isSupport.globalFetch?!function(){var r={};if(r.method=e.method.toUpperCase(),r.mode=e.cross?"cors":"same-origin",r.credentials=e.withCookie?"include":"omit",e.data){var i=(0,o.getRequestData)(e.method,e.data);i&&i.contentType&&(r.headers=e.headers||{"Content-Type":i.contentType}),"post"===e.method?r.body=i.data:e.target=(0,o.combineUrlQuery)(e.target,[i.data])}var u=window.setTimeout(function(){n(o.ERROR.TIMEOUT)},1e3*e.timeout+50);fetch(e.target,r).then(function(n){window.clearTimeout(u);var o=void 0;o="response"===e.resultType?n:"json"===e.resultType?n.json():n.text(),t(o)}).catch(function(e){window.clearTimeout(u),n(o.ERROR.REQUEST,e)})}():n(o.ERROR.NOT_SUPPORT("GlobalFetch"))})};var o=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=(0,o.initOpts)(e),new Promise(function(t,n){var r=String(Math.random()).replace(".",""),i=(0,o.has)(e,"jsonp.callbackFuncName")||"jsonp"+r,u=e.target,a=(0,o.getRequestData)("get",e.data),c=document.body||document.head,f=document.createElement("script");f.src=(0,o.combineUrlQuery)(u,[{callback:i},a&&a.data]),f.onerror=function(){n(o.ERROR.REQUEST),window.clearTimeout(s)},c.appendChild(f);var s=window.setTimeout(function(){n(o.ERROR.TIMEOUT)},1e3*e.timeout+50);window[i]=function(){window.clearTimeout(s),t.apply(void 0,arguments),window[i]=void 0,c.removeChild(f)}})};var o=n(0)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){h[e]=t}function i(e){(0,f.initOpts)(e,!0)}function u(e){return(0,l.default)(e)}function a(e){return(0,m.default)(e)}function c(e){return(0,p.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e=(0,f.initOpts)(e),"ajax"===e.type)return(0,l.default)(e);if("jsonp"===e.type)return(0,m.default)(e);if("fetch"===e.type)return(0,p.default)(e);for(var t in h){var n=h[t];if(n.detector(e))return n.processor(e)}return f.isSupport.globalFetch?(0,p.default)(e):(0,l.default)(e)},t.customAdapter=r,t.globalConfig=i,t.ajax=u,t.jsonp=a,t.fetch=c;var f=n(0),s=n(1),l=o(s),d=n(2),p=o(d),y=n(3),m=o(y),h={}}])});