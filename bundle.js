!function(){var e=function(e,t){if(e)try{var n=document.querySelector(e);n&&n.scrollIntoView(t)}catch(i){}},t=function(e){if("undefined"==typeof document)throw new Error("document-ready only runs in the browser");var t=document.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);document.addEventListener("DOMContentLoaded",(function(){e()}))},n="undefined"!=typeof window;function i(e){this.hasWindow=e,this.hasIdle=this.hasWindow&&window.requestIdleCallback,this.method=this.hasIdle?window.requestIdleCallback.bind(window):this.setTimeout,this.scheduled=!1,this.queue=[]}i.prototype.push=function(e){this.queue.push(e),this.schedule()},i.prototype.schedule=function(){if(!this.scheduled){this.scheduled=!0;var e=this;this.method((function(t){for(;e.queue.length&&t.timeRemaining()>0;)e.queue.shift()(t);e.scheduled=!1,e.queue.length&&e.schedule()}))}},i.prototype.setTimeout=function(e){setTimeout(e,0,{timeRemaining:function(){return 1}})};var r,o=function(){var e;return n?(window._nanoScheduler||(window._nanoScheduler=new i(!0)),e=window._nanoScheduler):e=new i,e}();a.disabled=!0;try{r=window.performance,a.disabled="true"===window.localStorage.DISABLE_NANOTIMING||!r.mark}catch(be){}function a(e){if(a.disabled)return s;var t=(1e4*r.now()).toFixed()%Number.MAX_SAFE_INTEGER,n="start-"+t+"-"+e;function i(i){var a="end-"+t+"-"+e;r.mark(a),o.push((function(){var o=null;try{var s=e+" ["+t+"]";r.measure(s,n,a),r.clearMarks(n),r.clearMarks(a)}catch(be){o=be}i&&i(o,e)}))}return r.mark(n),i.uuid=t,i}function s(e){e&&o.push((function(){e(new Error("nanotiming: performance API unavailable"))}))}var l=a,h={};function u(){if(!(this instanceof u))return new u;this.trie={nodes:{}}}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}h=u,u.prototype.create=function(e){var t=e.replace(/^\//,"").split("/");return function e(n,i){var r=c(t,n)&&t[n];if(!1===r)return i;var o=null;return/^:|^\*/.test(r)?(c(i.nodes,"$$")?o=i.nodes.$$:(o={nodes:{}},i.nodes.$$=o),"*"===r[0]&&(i.wildcard=!0),i.name=r.replace(/^:|^\*/,"")):c(i.nodes,r)?o=i.nodes[r]:(o={nodes:{}},i.nodes[r]=o),e(n+1,o)}(0,this.trie)},u.prototype.match=function(e){var t=e.replace(/^\//,"").split("/"),n={},i=function e(i,r){if(void 0!==r){var o=t[i];if(void 0===o)return r;if(c(r.nodes,o))return e(i+1,r.nodes[o]);if(r.name){try{n[r.name]=decodeURIComponent(o)}catch(be){return e(i,void 0)}return e(i+1,r.nodes.$$)}if(r.wildcard){try{n.wildcard=decodeURIComponent(t.slice(i).join("/"))}catch(be){return e(i,void 0)}return r.nodes.$$}return e(i+1)}}(0,this.trie);if(i)return(i=Object.assign({},i)).params=n,i},u.prototype.mount=function(e,t){var n=e.replace(/^\//,"").split("/"),i=null,r=null;if(1===n.length)r=n[0],i=this.create(r);else{var o=n.join("/");r=n[0],i=this.create(o)}Object.assign(i.nodes,t.nodes),t.name&&(i.name=t.name),i.nodes[""]&&(Object.keys(i.nodes[""]).forEach((function(e){"nodes"!==e&&(i[e]=i.nodes[""][e])})),Object.assign(i.nodes,i.nodes[""].nodes),delete i.nodes[""].nodes)};var d={},p=/file:\/\//.test("object"==typeof window&&window.location&&window.location.origin),f=new RegExp("^(file://|/)(.*.html?/?)?"),m=new RegExp("^(http(s)?(://))?(www.)?[a-zA-Z0-9-_.]+(:[0-9]{1,5})?(/{1})?"),v=new RegExp("#"),g=new RegExp("[?].*$");function y(e){if(!(this instanceof y))return new y(e);e=e||{},this.router=function e(t){if(!(this instanceof e))return new e(t);var n=(t||"").replace(/^\//,""),i=h();return r._trie=i,r.on=function(e,t){if(e=e||"/",t._wayfarer&&t._trie)i.mount(e,t._trie.trie);else{var n=i.create(e);n.cb=t,n.route=e}return r},r.emit=r,r.match=o,r._wayfarer=!0,r;function r(e){var t=o(e),n=new Array(arguments.length);n[0]=t.params;for(var i=1;i<n.length;i++)n[i]=arguments[i];return t.cb.apply(t.cb,n)}function o(e){var t=i.match(e);if(t&&t.cb)return new a(t);var r=i.match(n);if(r&&r.cb)return new a(r);throw new Error("route '"+e+"' did not match")}function a(e){this.cb=e.cb,this.route=e.route,this.params=e.params}}(e.default||"/404")}function b(e,t){return e=t?e.replace(f,""):e.replace(m,""),decodeURI(e.replace(g,"").replace(v,"/"))}d=y,y.prototype.on=function(e,t){e=e.replace(/^[#/]/,""),this.router.on(e,t)},y.prototype.emit=function(e){return e=b(e,p),this.router.emit(e)},y.prototype.match=function(e){return e=b(e,p),this.router.match(e)};function w(e,t){if(!e)throw new Error(t||"AssertionError")}w.notEqual=function(e,t,n){},w.notOk=function(e,t){},w.equal=function(e,t,n){},w.ok=w;var _=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","onanimationend","onanimationiteration","onanimationstart","oncontextmenu","onfocusin","onfocusout"],A=_.length;function $(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}function x(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName||T(e)!==T(t)?e:(function(e,t){var n=e.nodeType,i=e.nodeName;1===n&&function(e,t){for(var n=t.attributes,i=e.attributes,r=null,o=null,a=null,s=null,l=i.length-1;l>=0;--l)a=(s=i[l]).name,r=s.namespaceURI,o=s.value,r?(a=s.localName||a,t.getAttributeNS(r,a)!==o&&t.setAttributeNS(r,a,o)):t.hasAttribute(a)?t.getAttribute(a)!==o&&("null"===o||"undefined"===o?t.removeAttribute(a):t.setAttribute(a,o)):t.setAttribute(a,o);for(var h=n.length-1;h>=0;--h)!1!==(s=n[h]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),3!==n&&8!==n||t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;$(e,t,"checked"),$(e,t,"disabled"),e.indeterminate!==t.indeterminate&&(t.indeterminate=e.indeterminate),"file"!==t.type&&(n!==i&&(t.setAttribute("value",n),t.value=n),"null"===n&&(t.value="",t.removeAttribute("value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value"))}(e,t):"OPTION"===i?function(e,t){$(e,t,"selected")}(e,t):"TEXTAREA"===i&&function(e,t){var n=e.value;if(n!==t.value&&(t.value=n),t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t),function(e,t){for(var n=0;n<A;n++){var i=_[n];e[i]?t[i]=e[i]:t[i]&&(t[i]=void 0)}}(e,t)}(e,t),E(e,t),t):null:e}function T(e){return e.dataset?e.dataset.nanomorphComponentId:void 0}function E(e,t){for(var n,i,r,o,a=0,s=0;n=t.childNodes[s],i=e.childNodes[s-a],n||i;s++)if(i)if(n)if(S(i,n))(r=x(i,n))!==n&&(t.replaceChild(r,n),a++);else{o=null;for(var l=s;l<t.childNodes.length;l++)if(S(t.childNodes[l],i)){o=t.childNodes[l];break}o?((r=x(i,o))!==o&&a++,t.insertBefore(r,n)):i.id||n.id?(t.insertBefore(i,n),a++):(r=x(i,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),s--}function S(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&3===e.type&&e.nodeValue===t.nodeValue}var k=function(e,t,n){return n&&n.childrenOnly?(E(t,e),e):x(t,e)},L=/([^?=&]+)(=([^&]*))?/g,N=/(noopener|noreferrer) (noopener|noreferrer)/,C=/^[\w-_]+:/,O={};function P(e){if(!(this instanceof P))return new P(e);this._name=e||"nanobus",this._starListeners=[],this._listeners={}}O=P,P.prototype.emit=function(e){for(var t=[],n=1,i=arguments.length;n<i;n++)t.push(arguments[n]);var r=l(this._name+"('"+e.toString()+"')"),o=this._listeners[e];return o&&o.length>0&&this._emit(this._listeners[e],t),this._starListeners.length>0&&this._emit(this._starListeners,e,t,r.uuid),r(),this},P.prototype.on=P.prototype.addListener=function(e,t){return"*"===e?this._starListeners.push(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)),this},P.prototype.prependListener=function(e,t){return"*"===e?this._starListeners.unshift(t):(this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].unshift(t)),this},P.prototype.once=function(e,t){var n=this;return this.on(e,(function i(){t.apply(n,arguments),n.removeListener(e,i)})),this},P.prototype.prependOnceListener=function(e,t){var n=this;return this.prependListener(e,(function i(){t.apply(n,arguments),n.removeListener(e,i)})),this},P.prototype.removeListener=function(e,t){return"*"===e?(this._starListeners=this._starListeners.slice(),n(this._starListeners,t)):(void 0!==this._listeners[e]&&(this._listeners[e]=this._listeners[e].slice()),n(this._listeners[e],t));function n(e,t){if(e){var n=e.indexOf(t);return-1!==n?(function(e,t,n){var i,r=e.length;if(!(t>=r||0===n)){var o=r-(n=t+n>r?r-t:n);for(i=t;i<o;++i)e[i]=e[i+n];e.length=o}}(e,n,1),!0):void 0}}},P.prototype.removeAllListeners=function(e){return e?"*"===e?this._starListeners=[]:this._listeners[e]=[]:(this._starListeners=[],this._listeners={}),this},P.prototype.listeners=function(e){var t="*"!==e?this._listeners[e]:this._starListeners,n=[];if(t)for(var i=t.length,r=0;r<i;r++)n.push(t[r]);return n},P.prototype._emit=function(e,t,n,i){if(void 0!==e&&0!==e.length){void 0===n&&(n=t,t=null),t&&(n=void 0!==i?[t].concat(n,i):[t].concat(n));for(var r=e.length,o=0;o<r;o++){var a=e[o];a.apply(a,n)}}};var I={};function D(e){if(!(this instanceof D))return new D(e);"number"==typeof e&&(e={max:e}),e||(e={}),this.cache={},this.head=this.tail=null,this.length=0,this.max=e.max||1e3,this.maxAge=e.maxAge||0}I=D,Object.defineProperty(D.prototype,"keys",{get:function(){return Object.keys(this.cache)}}),D.prototype.clear=function(){this.cache={},this.head=this.tail=null,this.length=0},D.prototype.remove=function(e){if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){var t=this.cache[e];return delete this.cache[e],this._unlink(e,t.prev,t.next),t.value}},D.prototype._unlink=function(e,t,n){this.length--,0===this.length?this.head=this.tail=null:this.head===e?(this.head=t,this.cache[this.head].next=null):this.tail===e?(this.tail=n,this.cache[this.tail].prev=null):(this.cache[t].next=n,this.cache[n].prev=t)},D.prototype.peek=function(e){if(this.cache.hasOwnProperty(e)){var t=this.cache[e];if(this._checkAge(e,t))return t.value}},D.prototype.set=function(e,t){var n;if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){if((n=this.cache[e]).value=t,this.maxAge&&(n.modified=Date.now()),e===this.head)return t;this._unlink(e,n.prev,n.next)}else n={value:t,modified:0,next:null,prev:null},this.maxAge&&(n.modified=Date.now()),this.cache[e]=n,this.length===this.max&&this.evict();return this.length++,n.next=null,n.prev=this.head,this.head&&(this.cache[this.head].next=e),this.head=e,this.tail||(this.tail=e),t},D.prototype._checkAge=function(e,t){return!(this.maxAge&&Date.now()-t.modified>this.maxAge&&(this.remove(e),1))},D.prototype.get=function(e){if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){var t=this.cache[e];if(this._checkAge(e,t))return this.head!==e&&(e===this.tail?(this.tail=t.next,this.cache[this.tail].prev=null):this.cache[t.prev].next=t.next,this.cache[t.next].prev=t.prev,this.cache[this.head].next=e,t.prev=this.head,t.next=null,this.head=e),t.value}},D.prototype.evict=function(){this.tail&&this.remove(this.tail)};var M={};function F(e,t,n){this.cache="number"==typeof n?new I(n):n||new I(100),this.state=e,this.emit=t}function R(e){return new(e.bind.apply(e,arguments))}M=F,F.prototype.render=function(e,t){var n=this.cache.get(t);if(!n){for(var i=[],r=2,o=arguments.length;r<o;r++)i.push(arguments[r]);i.unshift(e,t,this.state,this.emit),n=R.apply(R,i),this.cache.set(t,n)}return n};var V=j,q={};function j(e){var t=l("choo.constructor");if(!(this instanceof j))return new j(e);e=e||{};var n=this;this._events={DOMCONTENTLOADED:"DOMContentLoaded",DOMTITLECHANGE:"DOMTitleChange",REPLACESTATE:"replaceState",PUSHSTATE:"pushState",NAVIGATE:"navigate",POPSTATE:"popState",RENDER:"render"},this._historyEnabled=void 0===e.history||e.history,this._hrefEnabled=void 0===e.href||e.href,this._hashEnabled=void 0!==e.hash&&e.hash,this._hasWindow="undefined"!=typeof window,this._cache=e.cache,this._loaded=!1,this._stores=[function(e){n.emitter.prependListener(n._events.DOMTITLECHANGE,(function(t){e.title=t,n._hasWindow&&(document.title=t)}))}],this._tree=null;var i={events:this._events,components:{}};this._hasWindow?(this.state=window.initialState?Object.assign({},window.initialState,i):i,delete window.initialState):this.state=i,this.router=d({curry:!0}),this.emitter=O("choo.emit"),this.emit=this.emitter.emit.bind(this.emitter),this._hasWindow&&(this.state.title=document.title),t()}j.prototype.route=function(e,t){var n=l("choo.route('"+e+"')");this.router.on(e,t),n()},j.prototype.use=function(e){var t=this;this._stores.push((function(n){var i="choo.use";i=e.storeName?i+"("+e.storeName+")":i;var r=l(i);e(n,t.emitter,t),r()}))},j.prototype.start=function(){var n,i,r=l("choo.start"),o=this;return this._historyEnabled&&(this.emitter.prependListener(this._events.NAVIGATE,(function(){o._matchRoute(o.state),o._loaded&&(o.emitter.emit(o._events.RENDER),setTimeout(e.bind(null,window.location.hash),0))})),this.emitter.prependListener(this._events.POPSTATE,(function(){o.emitter.emit(o._events.NAVIGATE)})),this.emitter.prependListener(this._events.PUSHSTATE,(function(e){window.history.pushState(q,null,e),o.emitter.emit(o._events.NAVIGATE)})),this.emitter.prependListener(this._events.REPLACESTATE,(function(e){window.history.replaceState(q,null,e),o.emitter.emit(o._events.NAVIGATE)})),window.onpopstate=function(){o.emitter.emit(o._events.POPSTATE)},o._hrefEnabled&&(n=function(t){var n=t.href,i=t.hash;n!==window.location.href?o.emitter.emit(o._events.PUSHSTATE,n):!o._hashEnabled&&i&&e(i)},i=i||window.document,window.addEventListener("click",(function(e){if(!(e.button&&0!==e.button||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.defaultPrevented)){var t=function e(t){if(t&&t!==i)return"a"!==t.localName||void 0===t.href?e(t.parentNode):t}(e.target);t&&(window.location.protocol!==t.protocol||window.location.hostname!==t.hostname||window.location.port!==t.port||t.hasAttribute("data-nanohref-ignore")||t.hasAttribute("download")||"_blank"===t.getAttribute("target")&&N.test(t.getAttribute("rel"))||C.test(t.getAttribute("href"))||(e.preventDefault(),n(t)))}})))),this._setCache(this.state),this._matchRoute(this.state),this._stores.forEach((function(e){e(o.state)})),this._tree=this._prerender(this.state),this.emitter.prependListener(o._events.RENDER,function(e,t){t||(t=window.requestAnimationFrame);var n=!1,i=null;return function(){null!==i||n||(n=!0,t((function(){n=!1;for(var t=i.length,r=new Array(t),o=0;o<t;o++)r[o]=i[o];e.apply(e,r),i=null}))),i=arguments}}((function(){var e=l("choo.render"),t=o._prerender(o.state),n=l("choo.morph");k(o._tree,t),n(),e()}))),t((function(){o.emitter.emit(o._events.DOMCONTENTLOADED),o._loaded=!0})),r(),this._tree},j.prototype.mount=function(e){var n=l("choo.mount('"+e+"')");if("object"!=typeof window)return this.selector=e,n(),this;var i=this;t((function(){var t=l("choo.render"),n=i.start();i._tree="string"==typeof e?document.querySelector(e):e;var r=l("choo.morph");k(i._tree,n),r(),t()})),n()},j.prototype.toString=function(e,t){(t=t||{}).components=t.components||{},t.events=Object.assign({},t.events,this._events),this._setCache(t),this._matchRoute(t,e),this.emitter.removeAllListeners(),this._stores.forEach((function(e){e(t)}));var n=this._prerender(t);return"string"==typeof n.outerHTML?n.outerHTML:n.toString()},j.prototype._matchRoute=function(e,t){var n,i;t?(n=t.replace(/\?.+$/,"").replace(/\/$/,""),this._hashEnabled||(n=n.replace(/#.+$/,"")),i=t):(n=window.location.pathname.replace(/\/$/,""),this._hashEnabled&&(n+=window.location.hash.replace(/^#/,"/")),i=window.location.search);var r=this.router.match(n);this._handler=r.cb,e.href=n,e.query=function(e){var t={};return e.replace(/^.*\?/,"").replace(L,(function(e,n,i,r){var o=decodeURIComponent(r),a=decodeURIComponent(n);t.hasOwnProperty(a)?Array.isArray(t[a])?t[a].push(o):t[a]=[t[a],o]:t[a]=o})),t}(i),e.route=r.route,e.params=r.params},j.prototype._prerender=function(e){var t=l("choo.prerender('"+e.route+"')"),n=this._handler(e,this.emit);return t(),n},j.prototype._setCache=function(e){var t=new M(e,this.emitter.emit.bind(this.emitter),this._cache);function n(e,n){for(var i=[],r=0,o=arguments.length;r<o;r++)i.push(arguments[r]);return t.render.apply(t,i)}e.cache=n,n.toJSON=function(){return null}};var H={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};function G(e){return 9===e||10===e}var z=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=function(e){return function(t,n,i){for(var r in n)r in H&&(n[H[r]]=n[r],delete n[r]);return e(t,n,i)}}(e)),function(r){for(var o=1,a="",s=arguments.length,l=[],h=0;h<r.length;h++)if(h<s-1){var u=arguments[h+1],c=$(r[h]),d=o;10===d&&(d=8),9===d&&(d=8),7===d&&(d=8),4===d&&(d=5),2===d?"/"===a?(c.push([2,"/",u]),a=""):c.push([2,u]):13===d&&t.comments?a+=String(u):13!==d&&c.push([0,d,u]),l.push.apply(l,c)}else l.push.apply(l,$(r[h]));var p,f=[null,{},[]],m=[[f,-1]];for(h=0;h<l.length;h++){var v=m[m.length-1][0],g=(c=l[h])[0];if(2===g&&/^\//.test(c[1])){var y=m[m.length-1][1];m.length>1&&(m.pop(),m[m.length-1][0][2][y]=e(v[0],v[1],v[2].length?v[2]:void 0))}else if(2===g){var b=[c[1],{},[]];v[2].push(b),m.push([b,v[2].length-1])}else if(5===g||0===g&&5===c[1]){for(var w,_="";h<l.length;h++)if(5===l[h][0])_=n(_,l[h][1]);else{if(0!==l[h][0]||5!==l[h][1])break;if("object"!=typeof l[h][2]||_)_=n(_,l[h][2]);else for(w in l[h][2])l[h][2].hasOwnProperty(w)&&!v[1][w]&&(v[1][w]=l[h][2][w])}11===l[h][0]&&h++;for(var A=h;h<l.length;h++)if(8===l[h][0]||5===l[h][0])v[1][_]?""===l[h][1]||(v[1][_]=n(v[1][_],l[h][1])):v[1][_]=i(l[h][1]);else{if(0!==l[h][0]||8!==l[h][1]&&5!==l[h][1]){!_.length||v[1][_]||h!==A||3!==l[h][0]&&12!==l[h][0]||(v[1][_]=_.toLowerCase()),3===l[h][0]&&h--;break}v[1][_]?""===l[h][2]||(v[1][_]=n(v[1][_],l[h][2])):v[1][_]=i(l[h][2])}}else if(5===g)v[1][c[1]]=!0;else if(0===g&&5===c[1])v[1][c[2]]=!0;else if(3===g)p=v[0],B.test(p)&&m.length&&(y=m[m.length-1][1],m.pop(),m[m.length-1][0][2][y]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(0===g&&1===c[1])void 0===c[2]||null===c[2]?c[2]="":c[2]||(c[2]=n("",c[2])),Array.isArray(c[2][0])?v[2].push.apply(v[2],c[2]):v[2].push(c[2]);else if(1===g)v[2].push(c[1]);else if(11!==g&&12!==g)throw new Error("unhandled: "+g)}if(f[2].length>1&&/^\s*$/.test(f[2][0])&&f[2].shift(),f[2].length>2||2===f[2].length&&/\S/.test(f[2][1])){if(t.createFragment)return t.createFragment(f[2]);throw new Error("multiple root elements must be wrapped in an enclosing tag")}return Array.isArray(f[2][0])&&"string"==typeof f[2][0][0]&&Array.isArray(f[2][0][2])&&(f[2][0]=e(f[2][0][0],f[2][0][1],f[2][0][2])),f[2][0];function $(e){var n=[];7===o&&(o=4);for(var i=0;i<e.length;i++){var r=e.charAt(i);1===o&&"<"===r?(a.length&&n.push([1,a]),a="",o=2):">"!==r||G(o)||13===o?13===o&&/-$/.test(a)&&"-"===r?(t.comments&&n.push([8,a.substr(0,a.length-1)]),a="",o=1):2===o&&/^!--$/.test(a)?(t.comments&&n.push([2,a],[5,"comment"],[11]),a=r,o=13):1===o||13===o?a+=r:2===o&&"/"===r&&a.length||(2===o&&/\s/.test(r)?(a.length&&n.push([2,a]),a="",o=4):2===o?a+=r:4===o&&/[^\s"'=/]/.test(r)?(o=5,a=r):4===o&&/\s/.test(r)?(a.length&&n.push([5,a]),n.push([12])):5===o&&/\s/.test(r)?(n.push([5,a]),a="",o=6):5===o&&"="===r?(n.push([5,a],[11]),a="",o=7):5===o?a+=r:6!==o&&4!==o||"="!==r?6!==o&&4!==o||/\s/.test(r)?7===o&&'"'===r?o=10:7===o&&"'"===r?o=9:10===o&&'"'===r||9===o&&"'"===r?(n.push([8,a],[12]),a="",o=4):7!==o||/\s/.test(r)?8===o&&/\s/.test(r)?(n.push([8,a],[12]),a="",o=4):8!==o&&9!==o&&10!==o||(a+=r):(o=8,i--):(n.push([12]),/[\w-]/.test(r)?(a+=r,o=5):o=4):(n.push([11]),o=7)):(2===o&&a.length?n.push([2,a]):5===o?n.push([5,a]):8===o&&a.length&&n.push([8,a]),n.push([3]),a="",o=1)}return 1===o&&a.length?(n.push([1,a]),a=""):8===o&&a.length||10===o&&a.length||9===o&&a.length?(n.push([8,a]),a=""):5===o&&(n.push([5,a]),a=""),n}};function i(e){return"function"==typeof e||"string"==typeof e||e&&"object"==typeof e||null==e?e:n("",e)}},B=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9\x7f-\uffff_:-]+)*$"),U=/\n[\s]+$/,W=/^\n[\s]+/,J=/[\s]+$/,K=/^[\s]+/,X=/[\n\s]+/g,Z=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Q=["code","pre","textarea"],Y=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],ee=["async","autofocus","autoplay","checked","controls","default","defaultchecked","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","novalidate","open","playsinline","readonly","required","reversed","selected"],te=["indeterminate"],ne=function(e){function t(t,n,i){var r;-1!==Y.indexOf(t)&&(n.namespace="http://www.w3.org/2000/svg");var o=!1;n.namespace&&(o=n.namespace,delete n.namespace);var a=!1;if(n.is&&(a=n.is,delete n.is),o)r=a?e.createElementNS(o,t,{is:a}):e.createElementNS(o,t);else{if("!--"===t)return e.createComment(n.comment);r=a?e.createElement(t,{is:a}):e.createElement(t)}for(var s in n)if(n.hasOwnProperty(s)){var l=s.toLowerCase(),h=n[s];if("classname"===l&&(l="class",s="class"),"htmlFor"===s&&(s="for"),-1!==ee.indexOf(l))if("true"===String(h))h=l;else if("false"===String(h))continue;"on"===l.slice(0,2)||-1!==te.indexOf(l)?r[s]=h:o?"xlink:href"===s?r.setAttributeNS("http://www.w3.org/1999/xlink",s,h):/^xmlns($|:)/i.test(s)||r.setAttributeNS(null,s,h):r.setAttribute(s,h)}return function e(t,n){if(Array.isArray(n))for(var i,r,o=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var h=n[s];if(Array.isArray(h))e(t,h);else{("number"==typeof h||"boolean"==typeof h||"function"==typeof h||h instanceof Date||h instanceof RegExp)&&(h=h.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof h)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=h:(h=t.ownerDocument.createTextNode(h),t.appendChild(h),u=h),s===l-1&&(a=!1,-1===Z.indexOf(o)&&-1===Q.indexOf(o)?""===(i=u.nodeValue.replace(W,"").replace(J,"").replace(U,"").replace(X," "))?t.removeChild(u):u.nodeValue=i:-1===Q.indexOf(o)&&(r=0===s?"":" ",i=u.nodeValue.replace(W,r).replace(K," ").replace(J,"").replace(U,"").replace(X," "),u.nodeValue=i));else if(h&&h.nodeType){a&&(a=!1,-1===Z.indexOf(o)&&-1===Q.indexOf(o)?""===(i=u.nodeValue.replace(W,"").replace(U," ").replace(X," "))?t.removeChild(u):u.nodeValue=i:-1===Q.indexOf(o)&&(i=u.nodeValue.replace(K," ").replace(W,"").replace(U," ").replace(X," "),u.nodeValue=i));var c=h.nodeName;c&&(o=c.toLowerCase()),t.appendChild(h)}}}}(r,i),r}var n=z(t,{comments:!0,createFragment:function t(n){for(var i=e.createDocumentFragment(),r=0;r<n.length;r++)null!=n[r]&&(Array.isArray(n[r])?i.appendChild(t(n[r])):("string"==typeof n[r]&&(n[r]=e.createTextNode(n[r])),i.appendChild(n[r])));return i}});return n.default=n,n.createComment=t,n}(document);function ie(e){let t=[];for(let n=1;n<19&&""!==e[n];n++)t.push(e[n]);return t}function re(e){let t=[];for(let n=1;n<e.length;n++)t.push(parseFloat(e[n],10));return t}var oe={matrixifyEmbellishments:function(e){let t=[],n=[],i=[];for(let r=0;r<e.length;r++){let o=e[r];0!==o.length&&("1000"===o[0]?(n.push([parseInt(o[0],10),...re(o)]),t.push({matrix:n,info:{options:ie(i),url:i[19],name:i[20],queryParams:i[21],compatibleProducts:i[22]}}),n=[],i=[]):"Quantity"===o[0]?i=o:n.push([parseInt(o[0],10),...re(o)]))}return t},matrixifyProducts:function(e){let t=[],n=[],i=[];for(let r=0;r<e.length;r++){let o=e[r];0!==o.length&&("1000"===o[0]?(n.push([parseInt(o[0],10),parseFloat(o[1],10)]),t.push({matrix:n,info:{locations:i[2].split(",").map(e=>e.trim()),size:i[3],color:i[4],description:i[5],category:i[6],brand:i[7],sku:i[8],url:i[9]}}),n=[],i=[]):"Quantity"===o[0]?i=o:n.push([parseInt(o[0],10),parseFloat(o[1],10)]))}return t}};const{jsPDF:ae}=window.jspdf,{matrixifyEmbellishments:se,matrixifyProducts:le}=oe,he=V();let ue={embellishments:[],"T-shirts":[],Totes:[],Hats:[],Mugs:[]};function ce(e){return`https://sheets.googleapis.com/v4/spreadsheets/1oJSXBPovD_5P0d5ZeRbMlsTHu8OMAl1OSFyL4-B-J0o/values/${e}?key=AIzaSyCp-tauNvZJ9H0GihLCwkWFqGDv2haad9E`}const de={url:ce("Embellishments"),name:"embellishments"},pe={url:ce("T-shirts"),name:"T-shirts"},fe={url:ce("Totes"),name:"Totes"},me={url:ce("Hats"),name:"Hats"},ve={url:ce("Mugs"),name:"Mugs"},ge=[ye(de),ye(pe),ye(fe),ye(me),ye(ve)];function ye(e){return fetch(e.url).then(e=>e.json()).then(t=>{"embellishments"===e.name?ue[e.name]=se(t.values):ue[e.name]=le(t.values)})}ne``,Promise.all(ge).then(()=>{he.mount(".quote_body")}),he.use((e,t)=>{e.data={embellishmentIndex:"nothing",embellishment:null,productType:"nothing",products:null,productCount:"500",locations:{}},t.on("DOMContentLoaded",(function(){""!==e.query.technique&&(foundEmbellishment=ue.embellishments.find(t=>t.info.queryParams.split("=")[1]===e.query.technique),foundEmbellishment&&(e.data.embellishmentIndex=ue.embellishments.indexOf(foundEmbellishment),e.data.embellishment=foundEmbellishment,e.data.productType=foundEmbellishment.info.compatibleProducts.split(",")[0].trim(),e.data.products=ue[e.data.productType],t.emit("render")))}))}),he.route("/custom-quote/",(e,t)=>{const n=ne`
  <select name="product_type" oninput=${function(n){"nothing"===n.target.value&&(e.data.embellishmentIndex="nothing",e.data.embellishment=null,e.data.productCount="nothing",e.data.locations={}),e.data.productType=n.target.value,e.data.products=ue[n.target.value],t("render")}} size="6">
    <option value="nothing">
      Select one
    </option>
    <option value="T-shirts" ${"T-shirts"==e.data.productType?"selected":""}>
      T-Shirts
    </option>
    <option value="Totes" ${"Totes"==e.data.productType?"selected":""}>
      Totes
    </option>
    <option value="Hats" ${"Hats"==e.data.productType?"selected":""}>
      Hats
    </option>
    <option value="Mugs" ${"Mugs"==e.data.productType?"selected":""}>
      Mugs
    </option>
  </select>
  `,i=ue.embellishments.reduce((t,n,i)=>-1!==n.info.compatibleProducts.indexOf(e.data.productType)?(t.push({embellishment:n,idx:i}),t):t,[]).map(({embellishment:t,idx:n})=>`\n    <option value="${n}" ${e.data.embellishmentIndex==n?"selected":""}>\n      ${t.info.name}\n    </option>\n    `),r=ne(i),o=ne`
  <select name="embellishment" oninput=${function(n){"nothing"===n.target.value&&(e.data.productCount="nothing"),e.data.locations={},e.data.embellishmentIndex="nothing"===n.target.value?"nothing":parseInt(n.target.value,10),e.data.embellishment=ue.embellishments[e.data.embellishmentIndex],t("render")}} size="4">
    <option value="nothing" ${"nothing"==e.data.embellishmentIndex?"selected":""}>
      Select one
    </option>
    ${r}
  </select>
  `,a=e.data.embellishment?ne`<a href="${e.data.embellishment.info.url}" target="_blank" rel="noopener noreferrer">View ${e.data.embellishment.info.name}</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" style="margin-left: 0.75rem;"><path fill="#FFF" stroke="#06D" stroke-width="10" d="m43,35H5v60h60V57M45,5v10l10,10-30,30 20,20 30-30 10,10h10V5z"/></svg>`:"",s=e.data.embellishment?e.data.embellishment.matrix.map(n=>ne`
    <input type="radio" oninput=${function(n){"nothing"===n.target.value&&(e.data.locations={}),e.data.productCount=n.target.value,t("render")}} id="pc-${n[0]}" name="productCount" value="${n[0]}" ${e.data.productCount==n[0]?"checked":""} >
    <label for="${n[0]}">${n[0]}</label>
    `):"",l=e.data.embellishment?ne`
  <div>
    <span>Select quantity</span> ${s}
  </div>
  `:"";let h="";if(e.data.embellishment&&"nothing"!==e.data.productCount){const t=Object.values(e.data.locations).filter(e=>"nothing"!==e).reduce((t,n)=>t+e.data.embellishment.matrix.find(t=>t[0]==parseInt(e.data.productCount,10))[e.data.embellishment.info.options.indexOf(n)+1],0);let n="";const i=e.data.products.reduce((i,r,o)=>{const a=r.matrix.find(t=>t[0]==parseInt(e.data.productCount,10))[1]+t;return r.info.category!==n?i[n=r.info.category]=[ne`
        <tr class="category-row">
          <th headers="category" scope="rowgroup" colspan="5">
            ${n}
          </th>
        </tr>
        <tr class=${"T-shirts"==e.data.productType?"product-row":""}>
          <td headers="size">
            ${r.info.size}
          </td>
          <td headers="link">
            <a href="${r.info.url}" target="_blank" rel="noopener noreferrer">${r.info.description}</a> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" style="margin-left: 0.75rem;"><path fill="#FFF" stroke="#06D" stroke-width="10" d="m43,35H5v60h60V57M45,5v10l10,10-30,30 20,20 30-30 10,10h10V5z"/></svg>
          </td>
          <td headers="colors">
            ${r.info.color}
          </td>
          <td headers="brand">
            ${r.info.brand}
          </td>
          <td headers="price">
            $${a.toFixed(2)}
          </td>
        </tr>
        `]:i[n].push(ne`
        <tr class=${"T-shirts"==e.data.productType?"product-row":""}>
          <td headers="size">
            ${r.info.size}
          </td>
          <td headers="link">
            <a href="${r.info.url}" target="_blank" rel="noopener noreferrer">${r.info.description}</a> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" style="margin-left: 0.75rem;"><path fill="#FFF" stroke="#06D" stroke-width="10" d="m43,35H5v60h60V57M45,5v10l10,10-30,30 20,20 30-30 10,10h10V5z"/></svg>
          </td>
          <td headers="colors">
            ${r.info.color}
          </td>
          <td headers="brand">
            ${r.info.brand}
          </td>
          <td headers="price">
            $${a.toFixed(2)}
          </td>
        </tr>
        `),i},{}),r=Object.keys(i).map(e=>ne`
      <tbody>
        ${i[e]}
      </tbody>
      `);h=ne`
    <table id="priceTable">
      <thead>
        <tr>
          <th id="size">
            Size
          </th>
          <th id="link">
            Link
          </th>
          <th id="colors">
            Colors
          </th>
          <th id="brand">
            Brand
          </th>
          <th id="price">
            Price
          </th>
        </tr>
      </thead>
      ${r}
    </table>

    <button class="et_pb_button" onclick=${function(){const t=document.getElementById("priceTable");let n=[];if(t&&t.children){for(let e=1;e<t.rows.length;e++){let i={};for(let n=0;n<t.rows[e].cells.length;n++){i[t.rows[0].cells[n].innerHTML]=t.rows[e].cells[n].innerText}i=i.Link?Object.assign(i,{Product:i.Link}):Object.assign(i,{Product:`----==== ${i.Size} ====----`,Brand:"-",Price:"-"}),n.push(i)}let i=new Date,r=new ae("p","mm","a4"),o=r.canvas;o.width=400,o.height=300,canvg(o,document.getElementById("svg").outerHTML,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0}),r.setFontSize(19),r.text(`Quote [${i.toDateString()}]`,110,20),r.setFontSize(13),r.text(`${e.data.productType} count: ${e.data.productCount}`,10,50),r.text("Embellishment: "+e.data.embellishment.info.name,10,60),r.text("Printing locations:",10,70);let a=Object.keys(e.data.locations);for(let t=0;t<a.length;t++){let n=a[t],i=t%2==0?10:100,o=t>1?90:80;r.text(`${n}: ${e.data.locations[n]}`,i,o)}r.table(10,100,n,[{name:"Product",align:"center",width:140},{name:"Brand",align:"center",width:60},{name:"Price",align:"center",width:40}],{printHeaders:!0});let s=i.getMonth().toString().padStart(2,"0"),l=i.getDate().toString().padStart(2,"0"),h=i.getFullYear();r.save(`worX_Printing_Cooperative_quote_${s}${l}${h}.pdf`)}}}>Download PDF</button>
    `}const u=e.data.embellishment?e.data.products[0].info.locations.map(t=>ne`
      <div class="form-select">
        <label for="location_${t}">${t}</label>
        ${function(t){return ne`
    <select name="location_${t}" data-location=${t} oninput=${f}>
      <option value="nothing">
        Select one
      </option>
      ${function(t){const n=e.data.embellishment.info.options.map(n=>`\n      <option value='${n}' ${e.data.locations[t]==n?"selected":""}>\n        ${n}\n      </option>\n      `);return ne(n)}(t)}
    </select>
    `}(t)}
      </div>
    `):"",c="nothing"!==e.data.productType?ne`
    <div class="form-select">
      <label for="embellishment">Select print type</label>
      ${o}
      ${a}
    </div>
  `:"",d=e.data.embellishment?ne`
    <div class="form-select">
      ${l}
    </div>
  `:"",p=e.data.embellishment?ne`
    <p>Select locations for printing:</p>
    <div class="form-group">
      ${u}
    </div>
  `:"";return ne`
  <div>
    <div class="form-select">
      <label for="product_type">Select product type</label>
      ${n}
    </div>

    ${c}

    ${d}

    ${p}

    ${h}
  </div>
  `;function f(n){printingLocation=n.target.dataset.location,e.data.locations[printingLocation]=n.target.value,t("render")}})}();