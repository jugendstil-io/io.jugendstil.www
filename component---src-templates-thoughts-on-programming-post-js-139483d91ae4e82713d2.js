(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Bl7J:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("Fzi1"),c=t("LbRr");t("XjQp");a.a=function(e){var a=e.className,t=e.children;return l.a.createElement("div",{className:a},l.a.createElement(c.a,null),l.a.createElement("main",null,t),l.a.createElement(n.a,null))}},NXVO:function(e,a,t){},Rsa3:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return s}));t("E5k/"),t("sC2a");var r=t("q1tI"),l=t.n(r),n=t("Bl7J"),c=t("3CE+"),i=(t("NXVO"),t("4i4B"));a.default=function(e){var a=e.data,t=e.pageContext,r=a.allFile.edges.map((function(e){return e.node})).pop(),s=Object.assign({},Object.assign(Object.assign({},t.current.thought),{},{image:{sizes:r.childImageSharp.fluid.sizes,src:r.childImageSharp.fluid.src,srcSet:r.childImageSharp.fluid.srcSet}}));if(!Array.isArray(s.description))throw Error('Property "description" of thought '+s.id+" must be of type array.");var m,o=new Intl.DateTimeFormat("en",{year:"numeric",month:"long",day:"2-digit"}).formatToParts(new Date(s.createdAt)),u=o[0].value,g=o[2].value,h=o[4].value,p=s.description.map((function(e){return l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}})}));return l.a.createElement(n.a,{className:"thoughts-on-programming-detail-page"},l.a.createElement(c.a,{title:"Thought by "+s.author+": "+s.quote,description:(m=s.description.join(" "),m.replace(/<[^>]*>?/gm,"")),image:s.image.src,openGraph:{title:"Thought by: "+s.author}}),l.a.createElement("section",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-9 col-md-9 col-lg-9"},l.a.createElement("h1",{className:"thought-title"},l.a.createElement("small",null,"Thought by:",l.a.createElement("br",null))," ",s.author),l.a.createElement("ul",{className:"breadcrumb"},l.a.createElement("li",null,l.a.createElement("a",{href:i.a.THOUGHTS_ON_PROGRAMMING},"Thoughts On Programming")),l.a.createElement("li",null,l.a.createElement("em",null,u," ",g,", ",h))),p,l.a.createElement("figure",{className:"thought"},l.a.createElement("img",{alt:s.quote,src:s.image.src,srcSet:s.image.srcSet,sizes:s.image.sizes}),l.a.createElement("figcaption",null,s.quote)))),l.a.createElement("div",{className:"row"},l.a.createElement("nav",{className:"col-xs-12 col-sm-9 col-md-9 col-lg-9"},l.a.createElement("ul",{className:"prev-next-navigation"},t.prev&&l.a.createElement("li",{className:"prev"},l.a.createElement("a",{rel:"prev",href:t.prev.path},"← Prev")),t.next&&l.a.createElement("li",{className:"next"},l.a.createElement("a",{rel:"next",href:t.next.path},"Next →")))))))};var s="2232205932"},XjQp:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-thoughts-on-programming-post-js-139483d91ae4e82713d2.js.map