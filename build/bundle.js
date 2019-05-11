!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=9)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("query-string")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("socket.io-client")},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";n.r(t);n(8);var o,r=n(2),c=n.n(r),a=n(5),i=n.n(a),l=n(0),u=n.n(l),s=n(6),f=n.n(s),p=n(1),m=n(3),d=n(4),y=n.n(d),b=n(7),h=n.n(b);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return o=this,n=!(r=(e=O(t)).call.apply(e,[this].concat(a)))||"object"!==v(r)&&"function"!=typeof r?E(o):r,w(E(n),"endpoint","https://knowledgetalk.co.kr:9000/SignalServer"),w(E(n),"option",{secure:!0,reconnect:!0,rejectUnauthorized:!1,transports:["websocket"]}),w(E(n),"handleSocketConnected",function(){console.log("socket connected!!")}),w(E(n),"handleSocketDisconnected",function(){console.log("socket disconnected!!")}),w(E(n),"handleSocketResponse",function(e){switch(e.eventOp){case"Login":console.log("[Login response]",e);break;default:console.warn("Event op error")}}),n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,l["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){(o=h()(this.endpoint,this.option)).on("connect",this.handleSocketConnected),o.on("disconnect",this.handleSocketDisconnected),o.on("gigagenie",this.handleSocketResponse)}},{key:"render",value:function(){return u.a.createElement("header",{id:"header"},u.a.createElement("div",{className:"header-left"},u.a.createElement("div",{className:"logo"},"LOGO")),u.a.createElement("div",{className:"header-right"},u.a.createElement("div",{className:"call-end"},"강의종료")))}}])&&g(n.prototype,r),c&&g(n,c),t}(),_=function(e){var t=e.children;return u.a.createElement("div",{style:{width:"1240px",height:"90%",marginTop:0,marginBottom:0,marginRight:"auto",marginLeft:"auto"}},t)};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(e){var n,r,c,a,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,c=x(t).call(this,e),n=!c||"object"!==k(c)&&"function"!=typeof c?N(r):c,a=N(n),l=function(){"caller"===n.userType&&o.emit("gigagenie",{eventOp:"Login",reqNo:"1",reqDate:"1",userId:"t1",userPw:"e3b98a4da31a127d4bde6e43033f66ba274cab0eb7eb1c70ec41402bf6273dd8",deviceType:"pc"}),"callee"===n.userType&&o.emit("gigagenie",{eventOp:"Login",reqNo:"1",reqDate:"1",userId:"t2",userPw:"e3b98a4da31a127d4bde6e43033f66ba274cab0eb7eb1c70ec41402bf6273dd8",deviceType:"pc"})},(i="login")in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l;var u=y.a.parse(n.props.location.search);return console.log("[Query parameter]",u),n.userType=u.userType||"callee",n.room=u.room,n.student=u.student,n.room=u.room,n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,u.a.Component),n=t,(r=[{key:"exampleMethod",value:function(){console.log("JS is running")}},{key:"componentDidMount",value:function(){this.login()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(j,null),u.a.createElement(_,null,u.a.createElement("section",{className:"left-section"},u.a.createElement("div",{className:"local-video"},u.a.createElement("video",{muted:!0,autoPlay:!0,src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"})),u.a.createElement("div",{className:"remote-video"},u.a.createElement("video",{muted:!0,autoPlay:!0,src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}))),u.a.createElement("section",{className:"right-section"},u.a.createElement("nav",null,u.a.createElement("div",{className:"chat-btn"},"채팅하기"),u.a.createElement("div",{className:"book-btn"},"교재보기")),u.a.createElement("div",{className:"chat-field"},u.a.createElement("div",{className:"message-field"},u.a.createElement("div",{className:"message-left"},u.a.createElement("span",null,"왼쪽 메세지")),u.a.createElement("div",{className:"message-right"},u.a.createElement("span",null,"오른쪽 메세지"))),u.a.createElement("div",{className:"submit-field"},u.a.createElement("input",{type:"text",placeholder:"type a message..."}),u.a.createElement("div",{className:"send-btn"},"Send"))))))}}])&&P(n.prototype,r),c&&P(n,c),t}();function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,M(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,u.a.Component),n=t,(o=[{key:"render",value:function(){return u.a.createElement(p.Switch,null,u.a.createElement(p.Route,{path:"/",render:function(e){return u.a.createElement(q,e)}}))}}])&&C(n.prototype,o),r&&C(n,r),t}(),I=c()(),z=process.env.PORT||3e3;I.use(i.a.json()),I.use(c.a.static("build/public")),I.use(c.a.static("public")),I.get("/ybmnet",function(e,t){var n=f.a.renderToString(u.a.createElement(p.StaticRouter,{location:e.url,context:{}},u.a.createElement(B,null))),o=m.Helmet.renderStatic(),r="\n    <html>\n        <head>\n            ".concat(o.meta.toString(),"\n            ").concat(o.title.toString(),'\n            <link rel="stylesheet" type="text/css" href="css/reset.css">\n            <link rel="stylesheet" type="text/css" href="css/style.css">\n        </head>\n        <body>\n            <div id="root">\n                ').concat(n,'\n            </div>\n            <script src="client_bundle.js"><\/script>\n        </body>\n    </html>\n    \n    ');t.send(r)}),I.listen(z,function(){console.log("Server is running on ".concat(z))})}]);