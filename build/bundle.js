!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=9)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.START_CLASS="START_CLASS",t.STOP_CLASS="STOP_CLASS",t.START_P2P="START_P2P",t.STOP_P2P="STOP_P2P",t.SEND_MESSAGE="SEND_MESSAGE",t.ADD_MESSAGE="ADD_MESSAGE",t.UPDATE_PEER_OBJECT="UPDATE_PEER_OBJECT",t.LOGIN_SUCCESS="LOGIN_SUCCESS",t.LOGIN_FAILURE="LOGIN_FAILURE",t.UPDATE_ROOM_INFO="UPDATE_ROOM_INFO",t.OPEN_WEBSOCKET="OPEN_WEBSOCKET",t.DISCONNECT_WEBSOCKET="DISCONNECT_WEBSOCKET",t.CONNECT_SOCKET_ERROR="CONNECT_SOCKET_ERROR",t.UPDATE_SOCKET_OBJECT="UPDATE_SOCKET_OBJECT"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.disconnectWebSocket=t.connectSocketError=t.updateWebSocket=t.updateRoomInfo=t.updatePeer=t.openWebSocket=t.addMessage=t.sendMessage=t.stopClass=t.startClass=t.loginSuccess=t.loginFailure=void 0;var r=n(2);n(6),t.loginFailure=function(e){return{type:r.LOGIN_FAILURE,payload:e}},t.loginSuccess=function(){return{type:r.LOGIN_SUCCESS}},t.startClass=function(){return{type:r.START_CLASS}},t.stopClass=function(){return{type:r.STOP_CLASS}},t.sendMessage=function(e){return{type:r.SEND_MESSAGE,payload:e}},t.addMessage=function(e){return{type:r.ADD_MESSAGE,payload:e}},t.openWebSocket=function(){return{type:r.OPEN_WEBSOCKET}},t.updatePeer=function(e){return{type:r.UPDATE_PEER_OBJECT,payload:e}},t.updateRoomInfo=function(e){return{type:r.UPDATE_ROOM_INFO,payload:e}},t.updateWebSocket=function(e){return{type:r.UPDATE_SOCKET_OBJECT,payload:e}},t.connectSocketError=function(){return{type:r.CONNECT_SOCKET_ERROR}},t.disconnectWebSocket=function(){return{type:r.DISCONNECT_WEBSOCKET}}},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderContainer=t.socket=void 0;var r,o=n(0),u=i(o),a=n(1),c=(i(n(18)),n(3));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n,o,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=this,u=(e=f(t)).call.apply(e,[this].concat(i)),n=!u||"object"!==l(u)&&"function"!=typeof u?p(o):u,y(p(n),"endpoint","http://localhost:3333"),y(p(n),"option",{}),y(p(n),"peer",""),y(p(n),"configuration",{iceServers:[{url:"stun:stun2.1.google.com:19302"}]}),y(p(n),"startClass",function(){var e=n.props,t=e.dispatch,o=e.localVideo,u=e.remoteVideo,a=n.props.socket.socket,i=n.props.user,l=i.student,s=i.teacher;try{console.log({eventOp:"Call",reqNo:"1",reqDate:"2",userId:s,targetId:[l],serviceType:"multi",reqDeviceType:"pc"}),a.emit("gigagenie",{eventOp:"Call",reqNo:"1",reqDate:"2",userId:s,targetId:[l],serviceType:"multi",reqDeviceType:"pc"})}catch(e){console.error(e)}(r=new RTCPeerConnection(n.configuration)).onaddstream=function(e){console.log("========= LOG START event.stream ======="),console.log(e.stream),console.log("========= LOG END ========="),u.current.srcObject=e.stream},r.onicecandidate=function(e){var t=n.props.socket.socket,r=n.props.user,o=r.teacher,u=r.room;e.candidate&&t.emit({eventOp:"Candidate",candidate:e.candidate,reqDate:"20190513180621947",reqNo:"201905131806249972",usage:"cam",useMediaSvr:"N",roomId:u,userId:o})};navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(e){r.addStream(e),t((0,c.updatePeer)(r)),o.current.srcObject=e}).catch(function(e){console.error("error in get usermedia",e)})}),y(p(n),"stopClass",function(){n.props.stopClass()}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.Component),n=t,(a=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.video,r=t.user;return u.default.createElement("header",{id:"header"},u.default.createElement("div",{className:"header-left"},u.default.createElement("div",{className:"logo"},"LOGO")),u.default.createElement("div",{className:"header-right"},"caller"===r.type?null:n.inClass?u.default.createElement("div",{className:"call-btn",onClick:e.stopClass},"강의종료"):u.default.createElement("div",{className:"call-btn",onClick:e.startClass},"강의시작")))}}])&&s(n.prototype,a),i&&s(n,i),t}(),m=(0,a.connect)(function(e){return{video:e.video,user:e.user,socket:e.socket}})(b);t.socket=void 0,t.HeaderContainer=m},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";n(10);var r=p(n(11)),o=p(n(12)),u=p(n(0)),a=p(n(13)),c=(n(4),n(5)),i=p(n(14)),l=n(1),s=n(8),f=p(n(24));function p(e){return e&&e.__esModule?e:{default:e}}var d=(0,r.default)(),y=process.env.PORT||3e3;d.use(o.default.json()),d.use(r.default.static("build/public")),d.use(r.default.static("public")),d.get("/ybmnet",function(e,t){var n=(0,s.createStore)(f.default),r=e.query,o={room:r.room,student:r.student,teacher:r.teacher,type:r.type},p=a.default.renderToString(u.default.createElement(l.Provider,{store:n},u.default.createElement(i.default,null))),d=c.Helmet.renderStatic(),y="\n    <html>\n        <head>\n            ".concat(d.meta.toString(),"\n            ").concat(d.title.toString(),'\n            <link rel="stylesheet" type="text/css" href="css/reset.css">\n            <link rel="stylesheet" type="text/css" href="css/style.css">\n\n        </head>\n        <body>\n            <div id="root">\n                ').concat(p,"\n            </div>\n            <script>\n                window.__PRELOADED_STATE__  = ").concat(JSON.stringify(o),'\n            <\/script>\n            <script src="client_bundle.js"><\/script>\n        </body>\n    </html>\n    ');t.send(y)}),d.listen(y,function(){console.log("Server is running on ".concat(y))})},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),o=(n(4),n(15),u(n(16)));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,l(t).apply(this,arguments))}var n,u,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.default.Component),n=t,(u=[{key:"render",value:function(){return r.default.createElement(o.default,null)}}])&&c(n.prototype,u),a&&c(n,a),t}();t.default=f},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=s(r),u=(n(5),s(n(17)),n(1)),a=n(6),c=s(n(19)),i=s(n(20)),l=n(3);function s(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=d(this,y(t).call(this,e));var o={};return console.log("[Query parameter]",o),n.userType=o.userType||"callee",n.room=o.room,n.student=o.student,n.room=o.room,n.localVideoRef=(0,r.createRef)(),n.remoteVideoRef=(0,r.createRef)(),n}var n,u,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.default.Component),n=t,(u=[{key:"exampleMethod",value:function(){console.log("JS is running")}},{key:"componentDidMount",value:function(){this.props.openWebSocket()}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement(a.HeaderContainer,{localVideo:this.localVideoRef,remoteVideo:this.remoteVideoRef}),o.default.createElement(c.default,null,o.default.createElement("section",{className:"left-section"},o.default.createElement("div",{className:"local-video"},o.default.createElement("video",{ref:this.localVideoRef,id:"local",muted:!0,autoPlay:!0})),o.default.createElement("div",{className:"remote-video"},o.default.createElement("video",{ref:this.remoteVideoRef,id:"remote",muted:!0,autoPlay:!0}))),o.default.createElement("section",{className:"right-section"},o.default.createElement("nav",null,o.default.createElement("div",{className:"chat-btn"},"채팅하기"),o.default.createElement("div",{className:"book-btn"},"교재보기")),o.default.createElement(i.default,null))))}}])&&p(n.prototype,u),l&&p(n,l),t}();t.default=(0,u.connect)(function(e){return{video:e.video,socket:e.socket}},function(e){return{startClass:function(){return e((0,l.startClass)())},openWebSocket:function(){return e((0,l.openWebSocket)())}}})(m)},function(e,t){e.exports=require("query-string")},function(e,t){e.exports=require("socket.io-client")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.children;return u.default.createElement("div",{style:{width:"1240px",height:"90%",marginTop:0,marginBottom:0,marginRight:"auto",marginLeft:"auto"}},t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(0)),o=n(1),u=c(n(21)),a=n(3);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.default.Component),n=t,(o=[{key:"render",value:function(){return r.default.createElement(u.default,this.props)}}])&&l(n.prototype,o),a&&l(n,a),t}();t.default=(0,o.connect)(function(e){return{chat:e.chat}},function(e){return{sendMessage:function(t){var n=t.user,r=t.message;return e((0,a.sendMessage)({user:n,message:r}))}}})(d)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=(a(n(7)),a(n(22))),u=a(n(23));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,s(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.default.Component),n=t,(a=[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.chat,n=e.sendMessage;return r.default.createElement("div",{className:"chat-field"},r.default.createElement("div",{className:"message-field"},t.messages.map(function(e,t){var n=e.user,o=e.message;return r.default.createElement(u.default,{key:t,you:!0,message:o,username:n})})),r.default.createElement(o.default,{sendMessage:n}))}}])&&i(n.prototype,a),c&&i(n,c),t}();p.propTypes={},p.defaultProps={},t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return r=this,o=(e=i(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==a(o)&&"function"!=typeof o?l(r):o,f(l(n),"state",{value:""}),f(l(n),"onChange",function(e){n.setState({input:e.target.value})}),f(l(n),"onSubmit",function(e){e.preventDefault();var t=n.state.input;if(!t)return alert("enter a message before send");n.props.sendMessage({user:"teacher",message:t}),n.setState({input:""})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,u.default.Component),n=t,(r=[{key:"render",value:function(){var e=this.state.input;return u.default.createElement("form",{className:"submit-field",onSubmit:this.onSubmit},u.default.createElement("input",{type:"text",placeholder:"type a message...",onChange:this.onChange,value:e}),u.default.createElement("button",{type:"submit",className:"send-btn"},"Send"))}}])&&c(n.prototype,r),o&&c(n,o),t}();t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),u=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.you,n=e.message,u=e.username;return o.default.createElement(r.Fragment,null,t?o.default.createElement("div",{className:"message-left"},o.default.createElement("span",null,n," - (",u,")")):o.default.createElement("div",{className:"message-right"},o.default.createElement("span",null,n," - (",u,")")))};c.propTypes={you:u.default.bool.isRequired,message:u.default.string.isRequired,username:u.default.string.isRequired},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=i(n(25)),u=i(n(26)),a=i(n(27)),c=i(n(28));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.combineReducers)({video:o.default,user:u.default,chat:a.default,socket:c.default});t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={inClass:!1,peer:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.UPDATE_PEER_OBJECT:return o({},e,{peer:t.payload});case r.START_CLASS:return o({},e,{inClass:!0});case r.STOP_CLASS:return o({},e,{inClass:!1});default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={room:"",teacher:"",student:"",type:"",logined:"",message:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.LOGIN_SUCCESS:return o({},e,{logined:!0});case r.LOGIN_FAILURE:return o({},e,{logined:!1,message:t.payload});case r.UPDATE_ROOM_INFO:return o({},e,{room:t.payload});default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={messages:[{user:"teacher",message:"hello"},{user:"student",message:"hi"},{user:"teacher",message:"how are u"},{user:"student",message:"so far so good you"},{user:"teacher",message:"me too, thx"}]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SEND_MESSAGE:return u({},e);case r.ADD_MESSAGE:return u({},e,{messages:[].concat(o(e.messages),[t.payload])});default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o={socket:"",connected:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.UPDATE_SOCKET_OBJECT:return{socket:t.payload,connected:!0};case r.CONNECT_SOCKET_ERROR:case r.DISCONNECT_WEBSOCKET:return{socket:"",connected:!1};default:return e}}}]);