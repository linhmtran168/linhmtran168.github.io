(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{2449:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var o=c(n(7294)),r=c(n(5697)),i=n(6674),u=n(7990);function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,r,c,y,m=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,o,r=d(h);if(n){var i=d(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return t=this,e=o,e&&("object"===a(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)});function h(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,h),m.apply(this,arguments)}return c=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById(u.COMMENT_COUNT_SCRIPT_ID)?p():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),u.COMMENT_COUNT_SCRIPT_ID,t.body)}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.COMMENT_COUNT_SCRIPT_ID,t.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config),n=t.children,r=t.className,i=function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["shortname","config","children","className"]),c=r?" ".concat(r):"";return o.default.createElement("span",s({},i,{className:"".concat(u.COMMENT_COUNT_CLASS).concat(c),"data-disqus-identifier":e.identifier,"data-disqus-url":e.url}),n)}}],f(h.prototype,c),y&&f(h,y),h}(o.default.Component);e.CommentCount=y,y.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string}).isRequired,className:r.default.string,children:r.default.node}},5890:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var o=u(n(7294)),r=u(n(5697)),i=n(7990);function u(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(p,t);var e,n,r,i,u,d=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,o,r=l(p);if(n){var i=l(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return t=this,e=o,e&&("object"===c(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)});function p(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,p),d.apply(this,arguments)}return i=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,r=(t.commentId,t.showMedia,t.showParentComment,function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["width","height","commentId","showMedia","showParentComment"]));return o.default.createElement("iframe",a({},r,{src:this.getSrc(),width:e,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],s(p.prototype,i),u&&s(p,u),p}(o.default.Component);e.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},d.propTypes={commentId:r.default.string.isRequired,showMedia:r.default.bool,showParentComment:r.default.bool,width:r.default.number,height:r.default.number,className:r.default.string}},4811:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var o=c(n(7294)),r=c(n(5697)),i=n(6674),u=n(7990);function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(m,t);var e,n,r,c,p,y=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,o,r=d(m);if(n){var i=d(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return t=this,e=o,e&&("object"===a(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)});function m(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,m),y.apply(this,arguments)}return c=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById(u.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),u.EMBED_SCRIPT_ID,t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)(u.EMBED_SCRIPT_ID,t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var n=t.getElementById(u.THREAD_ID);if(n)for(;n.hasChildNodes();)n.removeChild(n.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),u.CALLBACKS.forEach(function(n){e.callbacks[n]=[t[n]]})}}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["shortname","config"]));return o.default.createElement("div",s({},e,{id:u.THREAD_ID}))}}],f(m.prototype,c),p&&f(m,p),m}(o.default.Component);e.DiscussionEmbed=p,p.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string,categoryID:r.default.string,remoteAuthS3:r.default.string,apiKey:r.default.string,preData:r.default.func,preInit:r.default.func,onInit:r.default.func,onReady:r.default.func,afterRender:r.default.func,preReset:r.default.func,onIdentify:r.default.func,beforeComment:r.default.func,onNewComment:r.default.func,onPaginate:r.default.func}).isRequired}},4573:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Recommendations=void 0;var o=c(n(7294)),r=c(n(5697)),i=n(6674),u=n(7990);function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(m,t);var e,n,r,c,p,y=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,o,r=d(m);if(n){var i=d(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return t=this,e=o,e&&("object"===a(e)||"function"==typeof e)?e:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)});function m(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,m),y.apply(this,arguments)}return c=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.language=t.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(u.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),u.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(u.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(u.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var t=this.props,e=(t.shortname,t.config,function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["shortname","config"]));return o.default.createElement("div",s({},e,{id:u.RECOMMENDATIONS_ID}))}}],f(m.prototype,c),p&&f(m,p),m}(o.default.Component);e.Recommendations=p,p.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string})}},7990:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CALLBACKS=e.RECOMMENDATIONS_SCRIPT_ID=e.RECOMMENDATIONS_ID=e.COMMENT_EMBED_HEIGHT=e.COMMENT_EMBED_WIDTH=e.COMMENT_COUNT_SCRIPT_ID=e.COMMENT_COUNT_CLASS=e.EMBED_SCRIPT_ID=e.THREAD_ID=void 0,e.THREAD_ID="disqus_thread",e.EMBED_SCRIPT_ID="dsq-embed-scr",e.COMMENT_COUNT_CLASS="disqus-comment-count",e.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",e.COMMENT_EMBED_WIDTH=420,e.COMMENT_EMBED_HEIGHT=320,e.RECOMMENDATIONS_ID="disqus_recommendations",e.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",e.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(t,e,n){"use strict";Object.defineProperty(e,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var o=n(2449),r=n(5890),i=n(4811),u=n(4573);o.CommentCount,r.CommentEmbed,i.DiscussionEmbed,u.Recommendations},6674:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(t){return t.remove()})},e.debounce=function(t,e,n){var o;return function(){var r=this,i=arguments,u=function(){o=null,n||t.apply(r,i)},c=n&&!o;window.clearTimeout(o),o=setTimeout(u,e),c&&t.apply(r,i)}},e.isReactElement=c,e.shallowComparison=function t(e,n){var o,r=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw r}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(r.s();!(o=r.n()).done;){var a=o.value;if("object"===i(e[a])){if(t(e[a],n[a]))return!0}else if(e[a]!==n[a]&&!c(e[a]))return!0}}catch(s){r.e(s)}finally{r.f()}return!1};var o,r=(o=n(7294),o&&o.__esModule?o:{default:o});function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function c(t){return!!r.default.isValidElement(t)||!!Array.isArray(t)&&t.some(function(t){return r.default.isValidElement(t)})}},4359:function(){},4315:function(){},9008:function(t,e,n){t.exports=n(5443)},2746:function(t,e,n){let o=n(5893);t.exports.c=o},3659:function(t,e,n){"use strict";n.d(e,{R:function(){return l}});var o={};n.r(o),n.d(o,{MDXContext:function(){return u},MDXProvider:function(){return f},useMDXComponents:function(){return a},withMDXComponents:function(){return c}});var r=n(7294),i=n(2746);let u=r.createContext({});function c(t){return function(e){let n=a(e.components);return r.createElement(t,{...e,allComponents:n})}}function a(t){let e=r.useContext(u);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}let s={};function f({components:t,children:e,disableParentContext:n}){let o=a(t);return n&&(o=t||s),r.createElement(u.Provider,{value:o},e)}function l({compiledSource:t,frontmatter:e,scope:n,components:u={},lazy:c}){let[a,s]=(0,r.useState)(!c||"undefined"==typeof window);(0,r.useEffect)(()=>{if(c){let t=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(t)}},[]);let l=(0,r.useMemo)(()=>{let r=Object.assign({opts:{...o,...i.c}},{frontmatter:e},n),u=Object.keys(r),c=Object.values(r),a=Reflect.construct(Function,u.concat(`${t}`));return a.apply(a,c).default},[n,t]);if(!a)return r.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=r.createElement(f,{components:u},r.createElement(l,null));return c?r.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)})}}]);