(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"5M6V":function(e,t,n){"use strict";var r=n("nKUr"),a=function(e){var t=e.children;return Object(r.jsx)("div",{className:"sm:w-5/6 lg:w-1/2 mx-auto h-full flex p-3",children:t})},o=n("YFqc"),c=n.n(o),i=n("ma3e"),u=n("Lnxd"),s=function(){return Object(r.jsx)(u.b.Provider,{value:{className:"inline"},children:Object(r.jsx)("footer",{className:"border-t layout-separator mt-5 mb-10",children:Object(r.jsx)(a,{children:Object(r.jsxs)("div",{className:"flex lg:flex-row flex-col flex-wrap justify-between pt-4",children:[Object(r.jsx)("div",{className:"lg:w-1/4 w-auto",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"https://github.com/".concat("linhmtran168"),children:Object(r.jsxs)("a",{className:"hover:underline",children:[Object(r.jsx)(i.a,{})," ","linhmtran168"]})})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"https://twitter.com/".concat("day_dreamer168"),children:Object(r.jsxs)("a",{className:"hover:underline",children:[Object(r.jsx)(i.b,{})," ","day_dreamer168"]})})})]})}),Object(r.jsx)("div",{className:"lg:w-2/4 w-auto",children:Object(r.jsx)("p",{className:"font-thin",children:"This is a blog where a lazy developer ranting about his developer\u2018s life and his never ending journey in the land of knowledge."})})]})})})})},l=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)(c.a,{href:"/about",children:Object(r.jsx)("a",{className:"hover:underline",children:"About"})})})},f=(n("LEOp"),function(){return Object(r.jsx)("header",{className:"border-b layout-separator",children:Object(r.jsx)(a,{children:Object(r.jsxs)("div",{className:"flex flex-row items-baseline justify-between leading-loose w-full pt-3",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"hover:underline font-semibold text-2xl",children:"A Lazy Developer\u2018s Blog"})}),Object(r.jsx)(l,{})]})})})});t.a=function(e){var t=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:"mt-5",children:Object(r.jsx)(a,{children:t})}),Object(r.jsx)(s,{})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var s=d[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},LEOp:function(e,t,n){},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var r=n("q1tI"),a=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.a.createContext&&a.a.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return function(t){return a.a.createElement(l,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.a.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,r=e.attr,o=e.size,c=e.title,s=u(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&a.a.createElement("title",null,c),e.children)};return void 0!==c?a.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(o)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),u=n("vNVm"),s={};function l(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var j=o.Children.only(h),g=j&&"object"===typeof j&&j.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),O=r(x,2),w=O[0],M=O[1],_=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,o.useEffect)((function(){var e=M&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,M,y,t,n]);var C={ref:_,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:u}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,v,m,b,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};return(e.passHref||"a"===j.type&&!("href"in j.props))&&(C.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(j,C)};t.default=f},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){o.unobserve(e),0===c.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var u=new Map}}]);