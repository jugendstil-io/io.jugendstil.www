(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+aF5":function(e){e.exports=JSON.parse('[{"address":{"city":"London","country":"GB","line01":"20-22 Wenlock Road","zipCode":"N1 7GU"},"email":"hello@jugendstil.io","github":"https://github.com/jugendstil-io","hq":true,"instagram":"https://www.instagram.com/jugendstil_io/","linkedin":"https://www.linkedin.com/company/jugendstil-io/","telephone":"+44 20 3818 5838","twitter":"https://twitter.com/jugendstil_io/"},{"address":{"city":"Barcelona","country":"ES","line01":"Carrer de Joan Blanques, 66","zipCode":"08024"},"email":"hola@jugendstil.io","hq":false,"telephone":"+44 20 3818 5838"},{"address":{"city":"Berlin","country":"DE","line01":"Friedrichstrasse 185-190","zipCode":"10117"},"email":"hallo@jugendstil.io","hq":false,"telephone":"+44 20 3818 5838"}]')},"3CE+":function(e,t,n){"use strict";var r=n("eIoE"),a=n("q1tI"),i=n.n(a),o=n("TJpk"),l=n.n(o);function c(e){var t=e.description,n=e.lang,a=e.meta,o=e.title,c=e.image,u=e.openGraph,s=r.data.site,f=t||s.siteMetadata.description,E=[{name:"description",content:f},{property:"og:title",content:u&&u.title||o},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:u&&u.title||o},{name:"twitter:description",content:f}];if(c){var T=new URL(s.siteMetadata.siteUrl);T.pathname=c,a.push({name:"og:image",content:T}),a.push({name:"twitter:image",content:T})}return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s - "+s.siteMetadata.title,meta:E.concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},"4i4B":function(e,t,n){"use strict";t.a={ABOUT_US:"/#about-us",CAREER:{CV_DROP:"https://docs.google.com/forms/d/e/1FAIpQLSfI-7IQTJI7McwkvLZZGp4HHWrFmbeXPW9A-bhCN2Nb3As1JQ/viewform"},CONTACT:"/contact",HOME:"/",MODERN_SLAVERY_STATEMENT:"/modern-slavery-statement",PRIVACY_STATEMENT:"/privacy-statement",SERVICE:{CUSTOMER_EXPERIENCE:"/service/customer-experience",DEVOPS:"/service/devops",ENTERPRISE_SOFTWARE_DEVELOPMENT:"/service/software-engineering",INDEX:"/#services"},THOUGHTS_ON_PROGRAMMING:"/thoughts-on-programming"}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),E.canUseDOM?t(u):n&&(u=n(u))}var E=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){s.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},l.render=function(){return i.createElement(r,this.props)},a}(a.Component);return l(E,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(E,"canUseDOM",c),E}}},C9fy:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},Fzi1:function(e,t,n){"use strict";n("v9g0"),n("pJf4");var r=n("q1tI"),a=n.n(r),i=(n("n0hJ"),n("XD3k")),o=n.n(i),l=24,c=24,u=function(e){var t=e.height,n=void 0===t?l:t,r=e.fill,i=e.width,o=void 0===i?c:i,u=e.src;return a.a.createElement("svg",{fill:r,height:n,preserveAspectRatio:"xMidYMid meet",role:"img",style:{fill:r},viewBox:"0 10 "+n+" "+o/2,width:o,xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("title",null,u.title),a.a.createElement("path",{d:u.path}))},s=function(e){var t=e.height,n=e.fill,r=void 0===n?o.a.hex:n,a=e.width;return u({height:t,fill:r,width:a,src:o.a.get("GitHub")})},f=function(e){var t=e.height,n=e.fill,r=void 0===n?o.a.hex:n,a=e.width;return u({height:t,fill:r,width:a,src:o.a.get("Instagram")})},E=function(e){var t=e.height,n=e.fill,r=void 0===n?o.a.hex:n,a=e.width;return u({height:t,fill:r,width:a,src:o.a.get("LinkedIn")})},T=function(e){var t=e.height,n=e.fill,r=void 0===n?o.a.hex:n,a=e.width;return u({height:t,fill:r,width:a,src:o.a.get("Twitter")})},p=n("4i4B"),d=n("+aF5"),A=(n("bBI7"),40),h=40,m=[{url:p.a.SERVICE.INDEX,name:"Services"},{url:p.a.ABOUT_US,name:"About Us"},{url:p.a.THOUGHTS_ON_PROGRAMMING,name:"Thoughts"},{url:p.a.CONTACT,name:"Contact"}];t.a=function(){return a.a.createElement("footer",{className:"page-footer"},a.a.createElement("div",{className:"wrapper"},a.a.createElement("nav",{className:"footer-navigation"},a.a.createElement("ul",null,m.map((function(e){return a.a.createElement("li",{key:e.url},a.a.createElement("a",{href:e.url},e.name))})),a.a.createElement("li",{className:"visible-sm visible-md visible-lg"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:d.find((function(e){return!0===e.hq})).linkedin,rel:"noreferrer",target:"_blank"},a.a.createElement(E,{height:A,width:h})),a.a.createElement("a",{href:d.find((function(e){return!0===e.hq})).twitter,rel:"noreferrer",target:"_blank"},a.a.createElement(T,{height:A,width:h})),a.a.createElement("a",{href:d.find((function(e){return!0===e.hq})).github,rel:"noreferrer",target:"_blank"},a.a.createElement(s,{height:A,width:h})),a.a.createElement("a",{href:d.find((function(e){return!0===e.hq})).instagram,rel:"noreferrer",target:"_blank"},a.a.createElement(f,{height:A,width:h}))))))),a.a.createElement("hr",null),a.a.createElement("div",{className:"footer-legal"},a.a.createElement("span",{className:"visible-sm visible-md visible-lg"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:p.a.PRIVACY_STATEMENT},"Privacy Statement")),a.a.createElement("li",null,a.a.createElement("a",{href:p.a.MODERN_SLAVERY_STATEMENT},"Modern Slavery Statement")),a.a.createElement("li",{className:"right"},"© ",(new Date).getFullYear()," Jugendstil_IO. All Rights Reserved."))),a.a.createElement("span",{className:"visible-xs hidden-sm hidden-md hidden-lg"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:p.a.PRIVACY_STATEMENT},"Privacy Statement")),a.a.createElement("li",null,a.a.createElement("a",{href:p.a.MODERN_SLAVERY_STATEMENT},"Modern Slavery Statement")),a.a.createElement("li",null)),a.a.createElement("p",{style:{fontSize:"x-small",paddingTop:"1.3rem"}},"© ",(new Date).getFullYear()," Jugendstil_IO. All Rights Reserved.")))))}},Gytx:function(e,t,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!l(u))return!1;var s=e[u],f=t[u];if(!1===(a=n?n.call(r,s,f,u):void 0)||void 0===a&&s!==f)return!1}return!0}},LbRr:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=(n("pJf4"),n("mJHl"),n("Ott7")),o=n.n(i),l=n("4i4B"),c=n("TJpk"),u=n.n(c);n("yJcA");var s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n.toggle=n.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.toggle=function(){this.setState({isOpen:!this.state.isOpen})},i.render=function(){var e=this.state.isOpen;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{bodyAttributes:{class:e?"overflow-hidden":""}}),a.a.createElement("div",{className:r.componentId+" "+(this.state.isOpen?"open":"closed")},!e&&a.a.createElement("div",{className:r.componentId+"-icon",onClick:this.toggle},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)),e&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:r.componentId+"-icon",onClick:this.toggle},a.a.createElement("span",null),a.a.createElement("span",null)),a.a.createElement("div",null,a.a.createElement("a",{onClick:this.toggle,href:l.a.SERVICE.INDEX},"Services"),a.a.createElement("a",{onClick:this.toggle,href:l.a.ABOUT_US},"Abouts Us"),a.a.createElement("a",{onClick:this.toggle,href:l.a.THOUGHTS_ON_PROGRAMMING},"Thoughts"),a.a.createElement("a",{onClick:this.toggle,href:l.a.CONTACT},"Contact")))))},r}(a.a.Component);s.componentId="burger-menu";var f=[{name:"Services",url:l.a.SERVICE.INDEX},{name:"About Us",url:l.a.ABOUT_US},{name:"Contact",url:l.a.CONTACT}],E=function(){return a.a.createElement("nav",{className:"top-navigation",role:"navigation"},a.a.createElement("a",{className:"logo",href:"/"},a.a.createElement("img",{alt:"Jugendstil_IO",src:o.a,width:140})),a.a.createElement("span",{className:"visible-sm visible-md visible-lg"},a.a.createElement("ul",{className:"menu-link-list"},f.map((function(e){return a.a.createElement("li",{className:"menu-link-item",key:e.url},a.a.createElement("a",{href:e.url},e.name))})))),a.a.createElement("span",{className:"visible-xs hidden-sm hidden-md hidden-lg"},a.a.createElement(s,{className:"burger-menu",items:f})))},T=function(){return a.a.createElement("header",null,a.a.createElement(E,null))};T.defaultProps={siteTitle:""};t.a=T},Ott7:function(e,t){e.exports="data:image/png;base64,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"},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),o=f(n("17x9")),l=f(n("8+s/")),c=f(n("bmMU")),u=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,A,h,m=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),g=(d=m,h=A=function(e){function t(){return T(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=l,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=E(a,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=E(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(i.default.Component),A.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var e=d.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},"Y++M":function(e,t,n){"use strict";var r=n("DFzH"),a=n("dTG6"),i=n("kiRH");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,u=void 0===c?n:a(c,n);u>l;)t[l++]=e;return t}},bBI7:function(e,t,n){},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,u,s=r(t),f=r(n);if(s&&f){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(s!=f)return!1;var E=t instanceof Date,T=n instanceof Date;if(E!=T)return!1;if(E&&T)return t.getTime()==n.getTime();var p=t instanceof RegExp,d=n instanceof RegExp;if(p!=d)return!1;if(p&&d)return t.toString()==n.toString();var A=a(t);if((c=A.length)!==a(n).length)return!1;for(l=c;0!=l--;)if(!i.call(n,A[l]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(u=A[l])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},eIoE:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"@jugendstil_io","description":"Jugendstil_IO helps businesses master the digital reinvention of the industry when they use advanced digital technologies to transform core operations and unlock new revenue streams and business models. We support every aspect of our clients\' multi-phase transformation, including workforce, customer experience, Research and development, engineering, manufacturing, business support, and ecosystems.","siteUrl":"https://jugendstil.io","title":"Jugendstil_IO"}}}}')},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),i=n("rjfK").f,o=n("chL8").f,l=n("mhTz"),c=n("lb9j"),u=r.RegExp,s=u,f=u.prototype,E=/a/g,T=/a/g,p=new u(E)!==E;if(n("QPJK")&&(!p||n("96qb")((function(){return T[n("sOol")("match")]=!1,u(E)!=E||u(T)==T||"/a/i"!=u(E,"i")})))){u=function(e,t){var n=this instanceof u,r=l(e),i=void 0===t;return!n&&r&&e.constructor===u&&i?e:a(p?new s(r&&!i?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&i?c.call(e):t),n?this:f,u)};for(var d=function(e){e in u||i(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},A=o(s),h=0;A.length>h;)d(A[h++]);f.constructor=u,u.prototype=f,n("IYdN")(r,"RegExp",u)}n("to/b")("RegExp")},mJHl:function(e,t,n){},n0hJ:function(e,t,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),o=c(n("MgzW")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,l.TAG_NAMES.TITLE),n=A(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return A(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},d=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var u=i[c],s=(0,o.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),m=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},y=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,E=e.title,T=e.titleAttributes;P(l.TAG_NAMES.BODY,r),P(l.TAG_NAMES.HTML,a),R(E,T);var p={baseTag:w(l.TAG_NAMES.BASE,n),linkTags:w(l.TAG_NAMES.LINK,i),metaTags:w(l.TAG_NAMES.META,o),noscriptTags:w(l.TAG_NAMES.NOSCRIPT,c),scriptTags:w(l.TAG_NAMES.SCRIPT,s),styleTags:w(l.TAG_NAMES.STYLE,f)},d={},A={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(A[e]=p[e].oldTags)})),t&&t(),u(e,d,A)},O=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=O(e)),P(l.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var E=i.length-1;E>=0;E--)n.removeAttribute(i[E]);a.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},I=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},N=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=M(n,r),[i.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=I(n),i=O(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+s(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){y&&v(y),e.defer?y=g((function(){b(e,(function(){y=null}))})):(b(e),y=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,E=void 0===f?"":f,T=e.titleAttributes;return{base:N(l.TAG_NAMES.BASE,t,r),bodyAttributes:N(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(l.ATTRIBUTE_NAMES.HTML,a,r),link:N(l.TAG_NAMES.LINK,i,r),meta:N(l.TAG_NAMES.META,o,r),noscript:N(l.TAG_NAMES.NOSCRIPT,c,r),script:N(l.TAG_NAMES.SCRIPT,u,r),style:N(l.TAG_NAMES.STYLE,s,r),title:N(l.TAG_NAMES.TITLE,{title:E,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:A(e,l.HELMET_PROPS.DEFER),encode:A(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:d(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:d(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:d(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=S}).call(this,n("yLpj"))},yJcA:function(e,t,n){},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-413f927b30caf814eae8.js.map