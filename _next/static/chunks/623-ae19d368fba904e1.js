(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{2449:function(g,c,b){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.CommentCount=void 0;var e=i(b(7294)),a=i(b(5697)),f=b(6674),h=b(7990);function i(a){return a&&a.__esModule?a:{"default":a}}function j(a){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function k(){return(k=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function l(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}function m(a,b){return(m=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function n(a){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}var o=(0,f.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),d=function(g){!function(b,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),a&&m(b,a)}(d,g);var i,p,a,b,c,q=(i=d,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}(),function(){var c,a,b,d=n(i);if(p){var e=n(this).constructor;b=Reflect.construct(d,arguments,e)}else b=d.apply(this,arguments);return c=this,(a=b)&&("object"===j(a)||"function"==typeof a)?a:function b(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(c)});function d(){return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,d),q.apply(this,arguments)}return a=d,b=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(a){return this.props!==a&&(0,f.shallowComparison)(this.props,a)}},{key:"componentDidUpdate",value:function(a){this.props.shortname!==a.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var a=window.document;a.getElementById(h.COMMENT_COUNT_SCRIPT_ID)?o():(0,f.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),h.COMMENT_COUNT_SCRIPT_ID,a.body)}},{key:"cleanInstance",value:function(){var a=window.document;(0,f.removeScript)(h.COMMENT_COUNT_SCRIPT_ID,a.body),window.DISQUSWIDGETS=void 0,(0,f.removeResources)()}},{key:"render",value:function(){var a=this.props,b=(a.shortname,a.config),d=a.children,c=a.className,f=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["shortname","config","children","className"]),g=c?" ".concat(c):"";return e.default.createElement("span",k({},f,{className:"".concat(h.COMMENT_COUNT_CLASS).concat(g),"data-disqus-identifier":b.identifier,"data-disqus-url":b.url}),d)}}],l(a.prototype,b),c&&l(a,c),d}(e.default.Component);c.CommentCount=d,d.propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string}).isRequired,className:a.default.string,children:a.default.node}},5890:function(g,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.CommentEmbed=void 0;var f=h(c(7294)),a=h(c(5697)),e=c(7990);function h(a){return a&&a.__esModule?a:{"default":a}}function i(a){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function j(){return(j=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function k(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}function l(a,b){return(l=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function m(a){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}var d=function(e){!function(b,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),a&&l(b,a)}(d,e);var g,h,a,b,c,n=(g=d,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}(),function(){var c,a,b,d=m(g);if(h){var e=m(this).constructor;b=Reflect.construct(d,arguments,e)}else b=d.apply(this,arguments);return c=this,(a=b)&&("object"===i(a)||"function"==typeof a)?a:function b(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(c)});function d(){return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,d),n.apply(this,arguments)}return a=d,b=[{key:"getSrc",value:function(){var a=Number(this.props.commentId).toString(36),b=this.props.showParentComment?"1":"0",c=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(a,"?p=").concat(b,"&m=").concat(c)}},{key:"render",value:function(){var a=this.props,b=a.width,c=a.height,d=(a.commentId,a.showMedia,a.showParentComment,function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["width","height","commentId","showMedia","showParentComment"]));return f.default.createElement("iframe",j({},d,{src:this.getSrc(),width:b,height:c,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],k(a.prototype,b),c&&k(a,c),d}(f.default.Component);b.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:e.COMMENT_EMBED_WIDTH,height:e.COMMENT_EMBED_HEIGHT},d.propTypes={commentId:a.default.string.isRequired,showMedia:a.default.bool,showParentComment:a.default.bool,width:a.default.number,height:a.default.number,className:a.default.string}},4811:function(f,c,b){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.DiscussionEmbed=void 0;var e=i(b(7294)),a=i(b(5697)),g=b(6674),h=b(7990);function i(a){return a&&a.__esModule?a:{"default":a}}function j(a){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function k(){return(k=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function l(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}function m(a,b){return(m=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function n(a){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}var d=function(f){!function(b,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),a&&m(b,a)}(d,f);var i,o,a,b,c,p=(i=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}(),function(){var c,a,b,d=n(i);if(o){var e=n(this).constructor;b=Reflect.construct(d,arguments,e)}else b=d.apply(this,arguments);return c=this,(a=b)&&("object"===j(a)||"function"==typeof a)?a:function b(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(c)});function d(){return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,d),p.apply(this,arguments)}return a=d,b=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(a){return this.props!==a&&(0,g.shallowComparison)(this.props,a)}},{key:"componentDidUpdate",value:function(a){this.props.shortname!==a.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var a=window.document;window&&window.DISQUS&&a.getElementById(h.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,g.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),h.EMBED_SCRIPT_ID,a.body))}},{key:"cleanInstance",value:function(){var b=window.document;(0,g.removeScript)(h.EMBED_SCRIPT_ID,b.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(c){window.DISQUS=void 0}var a=b.getElementById(h.THREAD_ID);if(a)for(;a.hasChildNodes();)a.removeChild(a.firstChild);(0,g.removeResources)()}},{key:"getDisqusConfig",value:function(a){return function(){var b=this;this.page.identifier=a.identifier,this.page.url=a.url,this.page.title=a.title,this.page.category_id=a.categoryID,this.page.remote_auth_s3=a.remoteAuthS3,this.page.api_key=a.apiKey,a.language&&(this.language=a.language),h.CALLBACKS.forEach(function(c){b.callbacks[c]=[a[c]]})}}},{key:"render",value:function(){var a=this.props,b=(a.shortname,a.config,function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["shortname","config"]));return e.default.createElement("div",k({},b,{id:h.THREAD_ID}))}}],l(a.prototype,b),c&&l(a,c),d}(e.default.Component);c.DiscussionEmbed=d,d.propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,language:a.default.string,categoryID:a.default.string,remoteAuthS3:a.default.string,apiKey:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},4573:function(f,c,b){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.Recommendations=void 0;var e=i(b(7294)),a=i(b(5697)),g=b(6674),h=b(7990);function i(a){return a&&a.__esModule?a:{"default":a}}function j(a){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function k(){return(k=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function l(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}function m(a,b){return(m=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function n(a){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}var d=function(f){!function(b,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),a&&m(b,a)}(d,f);var i,o,a,b,c,p=(i=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}(),function(){var c,a,b,d=n(i);if(o){var e=n(this).constructor;b=Reflect.construct(d,arguments,e)}else b=d.apply(this,arguments);return c=this,(a=b)&&("object"===j(a)||"function"==typeof a)?a:function b(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(c)});function d(){return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,d),p.apply(this,arguments)}return a=d,b=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(a){return this.props!==a&&(0,g.shallowComparison)(this.props,a)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(a){return function(){this.page.identifier=a.identifier,this.page.url=a.url,this.page.title=a.title,this.language=a.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(h.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,g.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),h.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,g.removeScript)(h.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(b){window.DISQUS_RECOMMENDATIONS=void 0}var a=window.document.getElementById(h.RECOMMENDATIONS_ID);if(a)for(;a.hasChildNodes();)a.removeChild(a.firstChild);(0,g.removeResources)()}},{key:"render",value:function(){var a=this.props,b=(a.shortname,a.config,function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["shortname","config"]));return e.default.createElement("div",k({},b,{id:h.RECOMMENDATIONS_ID}))}}],l(a.prototype,b),c&&l(a,c),d}(e.default.Component);c.Recommendations=d,d.propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,language:a.default.string})}},7990:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CALLBACKS=a.RECOMMENDATIONS_SCRIPT_ID=a.RECOMMENDATIONS_ID=a.COMMENT_EMBED_HEIGHT=a.COMMENT_EMBED_WIDTH=a.COMMENT_COUNT_SCRIPT_ID=a.COMMENT_COUNT_CLASS=a.EMBED_SCRIPT_ID=a.THREAD_ID=void 0,a.THREAD_ID="disqus_thread",a.EMBED_SCRIPT_ID="dsq-embed-scr",a.COMMENT_COUNT_CLASS="disqus-comment-count",a.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",a.COMMENT_EMBED_WIDTH=420,a.COMMENT_EMBED_HEIGHT=320,a.RECOMMENDATIONS_ID="disqus_recommendations",a.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",a.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},3944:function(g,b,a){"use strict";Object.defineProperty(b,"qw",{enumerable:!0,get:function(){return e.DiscussionEmbed}});var c=a(2449),d=a(5890),e=a(4811),f=a(4573);c.CommentCount,d.CommentEmbed,e.DiscussionEmbed,f.Recommendations},6674:function(d,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.insertScript=function(b,c,d){var a=window.document.createElement("script");return a.async=!0,a.src=b,a.id=c,d.appendChild(a),a},a.removeScript=function(b,c){var a=window.document.getElementById(b);a&&c.removeChild(a)},a.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(a){return a.remove()})},a.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;window.clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},a.isReactElement=h,a.shallowComparison=i;var b,e=(b=c(7294))&&b.__esModule?b:{"default":b};function f(a){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function g(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function h(a){return!!e.default.isValidElement(a)|| !!Array.isArray(a)&&a.some(function(a){return e.default.isValidElement(a)})}function i(b,d){var e,c=function(a){if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(a=function(a,c){if(a){if("string"==typeof a)return g(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return g(a,c)}}(a))){var c=0,b=function(){};return{s:b,n:function(){return c>=a.length?{done:!0}:{done:!1,value:a[c++]}},e:function(a){throw a},f:b}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,e,f=!0,h=!1;return{s:function(){d=a[Symbol.iterator]()},n:function(){var a=d.next();return f=a.done,a},e:function(a){h=!0,e=a},f:function(){try{f||null==d.return||d.return()}finally{if(h)throw e}}}}(new Set(Object.keys(b),Object.keys(d)));try{for(c.s();!(e=c.n()).done;){var a=e.value;if("object"===f(b[a])){if(i(b[a],d[a]))return!0}else if(b[a]!==d[a]&&!h(b[a]))return!0}}catch(j){c.e(j)}finally{c.f()}return!1}},7563:function(){},3941:function(){},9008:function(a,c,b){a.exports=b(3121)}}])