(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,a,t){"use strict";a.__esModule=!0,a.isInAmpMode=i,a.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var n,r=(n=t("q1tI"))&&n.__esModule?n:{default:n},o=t("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.ampFirst,t=void 0!==a&&a,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return t||r&&i}},"0GOX":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n).a.createElement;a.a=function(e){return r("nav",{className:e.className},r("div",{className:"menu-container"},r("ul",{className:"menu"},e.children)))}},"8Kt/":function(e,a,t){"use strict";t("lSNA");a.__esModule=!0,a.defaultHead=c,a.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=s();if(a&&a.has(e))return a.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(t,r,o):t[r]=e[r]}t.default=e,a&&a.set(e,t);return t}(t("q1tI")),o=(n=t("Xuae"))&&n.__esModule?n:{default:n},i=t("lwAK"),l=t("FYa8"),u=t("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[r.default.createElement("meta",{charSet:"utf-8"})];return e||a.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),a}function f(e,a){return"string"===typeof a||"number"===typeof a?e:a.type===r.default.Fragment?e.concat(r.default.Children.toArray(a.props.children).reduce((function(e,a){return"string"===typeof a||"number"===typeof a?e:e.concat(a)}),[])):e.concat(a)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,a){return e.reduce((function(e,a){var t=r.default.Children.toArray(a.props.children);return e.concat(t)}),[]).reduce(f,[]).reverse().concat(c(a.inAmpMode)).filter(function(){var e=new Set,a=new Set,t=new Set,n={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":a.has(r.type)?o=!1:a.add(r.type);break;case"meta":for(var l=0,u=p.length;l<u;l++){var s=p[l];if(r.props.hasOwnProperty(s))if("charSet"===s)t.has(s)?o=!1:t.add(s);else{var c=r.props[s],f=n[s]||new Set;f.has(c)?o=!1:(f.add(c),n[s]=f)}}}return o}}()).reverse().map((function(e,a){var t=e.key||a;return r.default.cloneElement(e,{key:t})}))}function d(e){var a=e.children,t=(0,r.useContext)(i.AmpStateContext),n=(0,r.useContext)(l.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(t)},a)}d.rewind=function(){};var m=d;a.default=m},Bnag:function(e,a){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,a){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,a,t){var n=t("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},JQZb:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("nOHt"),i=t("YFqc"),l=t.n(i),u=r.a.createElement;a.a=function(e){var a=e.href,t=e.className,n=e.exact,r=e.children,i=Object(o.useRouter)().pathname.split("/").filter((function(e){return e})),s=a.toString().split("/").filter((function(e){return e})),c=i.length>=s.length&&s.every((function(e,a){return i[a]===e}))&&(!n||s.length===i.length),f="".concat(t," ").concat(c?"current-menu-item":"");return u("li",{className:"menu-item ".concat(f)},u(l.a,{href:a},u("a",null,r)))}},RIqP:function(e,a,t){var n=t("Ijbi"),r=t("EbDI"),o=t("ZhPi"),i=t("Bnag");e.exports=function(e){return n(e)||r(e)||o(e)||i()}},Xuae:function(e,a,t){"use strict";var n=t("RIqP"),r=t("lwsE"),o=t("W8MJ"),i=(t("PJYZ"),t("7W2i")),l=t("a1gu"),u=t("Nsbk");function s(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=u(e);if(a){var r=u(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return l(this,t)}}a.__esModule=!0,a.default=void 0;var c=t("q1tI"),f=function(e){i(t,e);var a=s(t);function t(e){var o;return r(this,t),(o=a.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(c.Component);a.default=f},YFqc:function(e,a,t){e.exports=t("cTJO")},apO0:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),o=t("8Kt/"),i=t.n(o),l=t("YFqc"),u=t.n(l),s=t("0GOX"),c=t("JQZb"),f=r.a.createElement,p=function(){return f(s.a,{className:"menu_wrapper"},f(c.a,{href:"/approach"},"Approach"),f(c.a,{href:"/volunteer"},"Volunteer"),f(c.a,{href:"/give"},"Give"),f(c.a,{href:"/adanubook"},"Book"),f(c.a,{href:"/blog"},"Blog"),f(c.a,{href:"/about"},"About"))},h=t("nOHt"),d=r.a.createElement,m=function(e){var a=e.href,t=e.className,n=e.title,r=e.children,o=t||"";return Object(h.useRouter)().pathname===a&&(o="".concat(t," current-menu-item")),d("li",{className:"menu-item ".concat(o)},d(u.a,{href:a},d("a",null,n)),d("ul",{className:"sub-menu"},r))},g=r.a.createElement,v=function(e){return g(s.a,{className:"mobile_menu_wrapper ".concat(e.showMenu?"mobile_show":"mobile_hide")},g(c.a,{href:"/approach"},"Approach"),g(m,{href:"/volunteer",title:"Volunteer"},g(c.a,{href:"/about/ghana"},"Ghana"),g(c.a,{href:"/volunteer/what-you-should-know"},"What you should know"),g(c.a,{href:"/volunteer/health-and-security"},"Health and Security"),g(c.a,{href:"/volunteer/book-your-trip"},"Book your trip"),g(c.a,{href:"/volunteer/trip-reviews"},"Trip Reviews")),g(m,{href:"/give",title:"Give"},g(c.a,{href:"/give/support"},"Support a community"),g(c.a,{href:"/give/giving-in-ghana"},"Giving in Ghana"),g(c.a,{href:"https://pushpay.com/pay/adanurenton"},"Donate")),g(c.a,{href:"/adanubook"},"Book"),g(c.a,{href:"/blog"},"Blog"),g(m,{href:"/about",title:"About"},g(c.a,{href:"/about/team"},"Team"),g(c.a,{href:"/about/financials"},"Financials"),g(c.a,{href:"/about/partners"},"Partnerships"),g(c.a,{href:"/category/press"},"Press")),g(m,{href:"/contact",title:"Contact"},g(c.a,{href:"/privacy-policy"},"Privacy Policy")))},b=r.a.createElement,y=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return b("div",{className:"header-wrapper"},b("header",{className:"green"},b(u.a,{href:"/"},b("a",{className:"logo yellow"},"Adanu")),b("a",{className:"mobile hamburger",onClick:function(){return t(!a)}},"Menu"),b(p,null),b("div",{className:"social"},b("a",{className:"donate",href:"https://pushpay.com/pay/adanurenton"},"donate"),b("ul",{className:"social_icons"},b("li",null,b("a",{href:"https://itunes.apple.com/us/app/adanu/id1165156556?mt=8",className:"shop"},b("img",{src:"images/shop.png"}))),b("li",null,b("a",{href:"https://www.facebook.com/AdanuGhana/",className:"fb"},b("img",{src:"images/facebook.png"}))),b("li",null,b("a",{href:"https://twitter.com/adanughana",className:"tw"},b("img",{src:"images/twitter.png"}))),b("li",null,b("a",{href:"http://instagram.com/AdanuGhana",className:"instagram"},b("img",{src:"images/instagram.png"})))))),b(v,{showMenu:a}))},w=r.a.createElement,_=function(){return w("footer",null,w("nav",{className:"footer_menus"},w("ul",{className:"six"},w("li",{className:"ul_head"},w(u.a,{href:"/approach"},w("a",null,"Approach"))),w("li",null,w(u.a,{href:"/approach"},w("a",null,"Our Model")))),w("ul",{className:"six"},w("li",{className:"ul_head"},w(u.a,{href:"/volunteer"},w("a",null,"Volunteer"))),w("li",null,w(u.a,{href:"/about/ghana"},w("a",null,"Ghana"))),w("li",null,w(u.a,{href:"/volunteer"},w("a",null,"Offerings"))),w("li",null,w(u.a,{href:"/volunteer/what-you-should-know"},w("a",null,"FAQ")))),w("ul",{className:"six"},w("li",{className:"ul_head"},w(u.a,{href:"/give"},w("a",null,"Give"))),w("li",null,w(u.a,{href:"/give"},w("a",null,"Ways to give"))),w("li",null,w(u.a,{href:"/give/support"},w("a",null,"Support a community"))),w("li",null,w("a",{href:"https://pushpay.com/pay/adanurenton"},"Donate"))),w("ul",{className:"six"},w("li",{className:"ul_head"},w(u.a,{href:"/about"},w("a",null,"About"))),w("li",null,w(u.a,{href:"/about/team"},w("a",null,"Team"))),w("li",null,w(u.a,{href:"/about/financials"},w("a",null,"Financials"))),w("li",null,w(u.a,{href:"/partners"},w("a",null,"Partnerships"))),w("li",null,w(u.a,{href:"/category/press"},w("a",null,"Press")))),w("ul",{className:"six"},w("li",{className:"ul_head"},w(u.a,{href:"/contact"},w("a",null,"Contact"))),w("li",null,w("a",{href:"tel:425-272-3157/+233555552992"},"425-272-3157/+233555552992")),w("li",null,w("a",{href:"mailto:AdanuGhana@adanu.org/office@adanu.org"},"AdanuGhana@adanu.org/office@adanu.org")),w("div",{id:"mc_embed_signup"},w("form",{action:"http://adanu.us8.list-manage.com/subscribe/post?u=8424bffe1e6f6a5fc1a13c32d&id=4d62196ecb",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},w("div",{id:"mc_embed_signup_scroll"},w("div",{style:{position:"absolute",left:"-5000px"}},w("input",{type:"text",name:"b_8424bffe1e6f6a5fc1a13c32d_bbc79d83f5",tabIndex:-1,value:""})),w("div",{className:"clear"},w("input",{type:"submit",value:"Subscribe to Adanu newsletter",name:"subscribe",id:"mc-embedded-subscribe",className:"button"})))))),w("ul",{className:"six social_foot"},w("li",{className:"ul_head"},w(u.a,{href:"#"},w("a",null,"Connect"))),w("ul",{className:"social_narrow"},w("li",null,w("a",{href:"https://itunes.apple.com/us/app/adanu/id1165156556?mt=8",target:"_blank",className:"twoup_1"},w("img",{src:"images/shop_yellow.png"}))),w("li",null,w("a",{href:"https://www.facebook.com/AdanuGhana/",target:"_blank",className:"twoup_2"},w("img",{src:"images/facebook_yellow.png"}))),w("li",{className:"clr"},w("a",{href:"https://twitter.com/adanughana",target:"_blank",className:"twoup_3"},w("img",{src:"images/twitter_yellow.png"}))),w("li",null,w("a",{href:"http://instagram.com/AdanuGhana",target:"_blank",className:"twoup_4"},w("img",{src:"images/instagram_yellow.png"})))))),w("div",{className:"basestrip"},w("span",{className:"copyright"},"\xa92018 Adanu"),w("span",{className:"privacypolicy"},w(u.a,{href:"/privacy-policy"},w("a",null,"Privacy Policy"))),w("span",{className:"strapline"},"inspiring communities together")),w("div",{className:"basestrip align-middle"},w("a",{href:"http://www.guidestar.org/organizations/46-1989395/american-friends- divog.aspx"},w("img",{src:"images/GuideStar_logo_lightfont-e1459799299128.png"}))))},N=r.a.createElement;a.a=function(e){return N("div",null,N(i.a,null,N("title",null,"Adanu | ",e.title," |inspiring communities together"),N("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}),N("base",{href:"".concat("/adanu","/")}),N("link",{rel:"shortcut icon",href:"favicon.ico"}),N("script",{src:"http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"}),N("script",{src:"http://malsup.github.com/jquery.cycle2.js"})),N(y,null),e.children,N(_,null))}},cTJO:function(e,a,t){"use strict";var n=t("J4zp"),r=t("284h");a.__esModule=!0,a.default=void 0;var o,i=r(t("q1tI")),l=t("elyg"),u=t("nOHt"),s=new Map,c=window.IntersectionObserver,f={};var p=function(e,a){var t=o||(c?o=new c((function(e){e.forEach((function(e){if(s.has(e.target)){var a=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),a())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,a),function(){try{t.unobserve(e)}catch(a){console.error(a)}s.delete(e)}):function(){}};function h(e,a,t,n){(0,l.isLocalURL)(a)&&(e.prefetch(a,t,n).catch((function(e){0})),f[a+"%"+t]=!0)}var d=function(e){var a=!1!==e.prefetch,t=i.default.useState(),r=n(t,2),o=r[0],s=r[1],d=(0,u.useRouter)(),m=d&&d.pathname||"/",g=i.default.useMemo((function(){var a=(0,l.resolveHref)(m,e.href);return{href:a,as:e.as?(0,l.resolveHref)(m,e.as):a}}),[m,e.href,e.as]),v=g.href,b=g.as;i.default.useEffect((function(){if(a&&c&&o&&o.tagName&&(0,l.isLocalURL)(v)&&!f[v+"%"+b])return p(o,(function(){h(d,v,b)}))}),[a,o,v,b,d]);var y=e.children,w=e.replace,_=e.shallow,N=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var k=i.Children.only(y),M={ref:function(e){e&&s(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,a,t,n,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),a[r?"replace":"push"](t,n,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,v,b,w,_,N)}};return a&&(M.onMouseEnter=function(e){(0,l.isLocalURL)(v)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),h(d,v,b,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(M.href=(0,l.addBasePath)(b)),i.default.cloneElement(k,M)};a.default=d},lSNA:function(e,a){e.exports=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}},lwAK:function(e,a,t){"use strict";var n;a.__esModule=!0,a.AmpStateContext=void 0;var r=((n=t("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});a.AmpStateContext=r}}]);