(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3CE+":function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),i=n.n(a),o=n("TJpk"),c=n.n(o);function l(e){var t=e.description,n=e.lang,a=e.meta,o=e.title,l=r.data.site,u=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),T.canUseDOM?t(u):n&&(u=n(u))}var T=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},a}(a.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(T,"canUseDOM",l),T}}},Bl7J:function(e,t,n){"use strict";var r=n("IRj2"),a=n("q1tI"),i=n.n(a),o=(n("n0hJ"),n("XD3k")),c=n.n(o),l=24,u=24,s=function(e){var t=e.height,n=void 0===t?l:t,r=e.fill,a=e.width,o=void 0===a?u:a,c=e.src;return i.a.createElement("svg",{fill:r,height:n,preserveAspectRatio:"xMidYMid meet",role:"img",style:{fill:r},viewBox:"0 10 "+n+" "+o/2,width:o,xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,c.title),i.a.createElement("path",{d:c.path}))},f=function(e){var t=e.height,n=e.fill,r=void 0===n?c.a.hex:n,a=e.width;return s({height:t,fill:r,width:a,src:c.a.get("LinkedIn")})},T=function(e){var t=e.height,n=e.fill,r=void 0===n?c.a.hex:n,a=e.width;return s({height:t,fill:r,width:a,src:c.a.get("Twitter")})},E=(n("bBI7"),40),p=40,d=function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("nav",{className:"footer-navigation"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Service")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Industries")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"About Us")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Contact")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Join us")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/jugendstil-io/"},i.a.createElement(f,{height:E,width:p})),i.a.createElement("a",{target:"_blank",href:"https://twitter.com/jugendstil_io/"},i.a.createElement(T,{height:E,width:p}))))),i.a.createElement("hr",null),i.a.createElement("ul",{className:"location-list"},i.a.createElement("li",null,"Barcelona"),i.a.createElement("li",null,"Berlin"),i.a.createElement("li",null,"London"),i.a.createElement("li",{className:"right"},"© ",(new Date).getFullYear()," Jugendstil. All Rights Reserved."))))},A={purple:"rgb(217, 24, 130)",violet:"rgb(175, 75, 242)",turquoise:"rgb(12, 219, 242)",indigo:"rgb(35, 10, 89)",tacao:"rgb(242, 182, 128)",crusta:"rgb(242, 100, 68)",black:"rgb(13, 13, 13)",gainsboro:"rgb(227, 227, 227)",darkgray:"rgb(167, 167, 167)"},h=(n("mJHl"),function(){return i.a.createElement("nav",{className:"top-navigation"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"JUGENDSTIL.",i.a.createElement("span",{style:{color:A.violet}},"IO"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Service")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Industries")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"About Us")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Contact")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Join us"))))}),m=function(e){e.siteTitle;return i.a.createElement("header",{style:{marginBottom:"1.45rem"}},i.a.createElement(h,null))};m.defaultProps={siteTitle:""};var y=m;n("XjQp"),t.a=function(e){var t=e.children,n=r.data;return i.a.createElement("div",null,i.a.createElement(y,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)),i.a.createElement(d,null))}},C9fy:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},Gytx:function(e,t,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!c(u))return!1;var s=e[u],f=t[u];if(!1===(a=n?n.call(r,s,f,u):void 0)||void 0===a&&s!==f)return!1}return!0}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}')},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),o=f(n("17x9")),c=f(n("8+s/")),l=f(n("bmMU")),u=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,A,h,m=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(d=m,h=A=function(e){function t(){return E(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=c,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=T(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(i.default.Component),A.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var e=d.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},XjQp:function(e,t,n){},"Y++M":function(e,t,n){"use strict";var r=n("DFzH"),a=n("dTG6"),i=n("kiRH");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,u=void 0===l?n:a(l,n);u>c;)t[c++]=e;return t}},bBI7:function(e,t,n){},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=r(t),f=r(n);if(s&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var T=t instanceof Date,E=n instanceof Date;if(T!=E)return!1;if(T&&E)return t.getTime()==n.getTime();var p=t instanceof RegExp,d=n instanceof RegExp;if(p!=d)return!1;if(p&&d)return t.toString()==n.toString();var A=a(t);if((l=A.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!i.call(n,A[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=A[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),i=n("rjfK").f,o=n("chL8").f,c=n("mhTz"),l=n("lb9j"),u=r.RegExp,s=u,f=u.prototype,T=/a/g,E=/a/g,p=new u(T)!==T;if(n("QPJK")&&(!p||n("96qb")((function(){return E[n("sOol")("match")]=!1,u(T)!=T||u(E)==E||"/a/i"!=u(T,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),i=void 0===t;return!n&&r&&e.constructor===u&&i?e:a(p?new s(r&&!i?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&i?l.call(e):t),n?this:f,u)};for(var d=function(e){e in u||i(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},A=o(s),h=0;A.length>h;)d(A[h++]);f.constructor=u,u.prototype=f,n("IYdN")(r,"RegExp",u)}n("to/b")("RegExp")},mJHl:function(e,t,n){},n0hJ:function(e,t,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=l(n("q1tI")),o=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,c.TAG_NAMES.TITLE),n=A(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},d=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),l=0;l<i.length;l++){var u=i[l],s=(0,o.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),m=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,T=e.title,E=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,a),R(T,E);var p={baseTag:M(c.TAG_NAMES.BASE,n),linkTags:M(c.TAG_NAMES.LINK,i),metaTags:M(c.TAG_NAMES.META,o),noscriptTags:M(c.TAG_NAMES.NOSCRIPT,l),scriptTags:M(c.TAG_NAMES.SCRIPT,s),styleTags:M(c.TAG_NAMES.STYLE,f)},d={},A={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(A[e]=p[e].oldTags)})),t&&t(),u(e,d,A)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var u=o[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);a.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},M=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=w(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),i=_(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&S(g),e.defer?g=y((function(){b(e,(function(){g=null}))})):(b(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,T=void 0===f?"":f,E=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,a,r),link:I(c.TAG_NAMES.LINK,i,r),meta:I(c.TAG_NAMES.META,o,r),noscript:I(c.TAG_NAMES.NOSCRIPT,l,r),script:I(c.TAG_NAMES.SCRIPT,u,r),style:I(c.TAG_NAMES.STYLE,s,r),title:I(c.TAG_NAMES.TITLE,{title:T,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:p([c.TAG_PROPERTIES.HREF],e),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,e),defer:A(e,c.HELMET_PROPS.DEFER),encode:A(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,e),linkTags:d(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:d(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-ada0bbd42db320e2cd07.js.map