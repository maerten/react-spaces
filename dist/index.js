"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),cssElementQueries=require("css-element-queries"),PropTypes=require("prop-types");function _interopNamespace(n){if(n&&n.__esModule)return n;var r=Object.create(null);return n&&Object.keys(n).forEach(function(e){if("default"!==e){var t=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(r,e,t.get?t:{enumerable:!0,get:function(){return n[e]}})}}),r.default=n,Object.freeze(r)}var React__namespace=_interopNamespace(React),PropTypes__namespace=_interopNamespace(PropTypes);function styleInject(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var css_248z='.spaces-centered-vertically {\r\n\tposition: relative;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.spaces-centered {\r\n\tposition: relative;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n\ttext-align: center;\r\n}\r\n\r\n.spaces-clearfix:after {\r\n\tcontent: "";\r\n\tdisplay: table;\r\n\tclear: both;\r\n}\r\n\r\n.spaces-resize-handle {\r\n\tposition: absolute;\r\n\tz-index: 9999;\r\n\tbackground: transparent;\r\n}\r\n\r\n.spaces-resize-handle:before {\r\n\tcontent: "";\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tz-index: 2;\r\n}\r\n\r\n.spaces-resize-handle:after {\r\n\tcontent: "";\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n}\r\n\r\n.spaces-touch-handle {\r\n\tposition: absolute;\r\n\tz-index: 9998;\r\n\tpointer-events: all;\r\n\tbackground: transparent;\r\n}\r\n\r\n.spaces-resize-handle.resize-left {\r\n\ttop: 0;\r\n\tbottom: 0;\r\n}\r\n\r\n.spaces-resize-handle.resize-left:before {\r\n\tcursor: w-resize;\r\n}\r\n\r\n.spaces-touch-handle.resize-left {\r\n\ttop: 0;\r\n\tbottom: 0;\r\n}\r\n\r\n.spaces-resize-handle.resize-right {\r\n\ttop: 0;\r\n\tbottom: 0;\r\n}\r\n\r\n.spaces-resize-handle.resize-right:before {\r\n\tcursor: e-resize;\r\n}\r\n\r\n.spaces-touch-handle.resize-right {\r\n\ttop: 0;\r\n\tbottom: 0;\r\n}\r\n\r\n.spaces-resize-handle.resize-top {\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n\r\n.spaces-resize-handle.resize-top:before {\r\n\tcursor: n-resize;\r\n}\r\n\r\n.spaces-touch-handle.resize-top {\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n\r\n.spaces-resize-handle.resize-bottom {\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n\r\n.spaces-resize-handle.resize-bottom:before {\r\n\tcursor: s-resize;\r\n}\r\n\r\n.spaces-touch-handle.resize-bottom {\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n\r\n.spaces-space {\r\n\toverflow: hidden;\r\n\ttouch-action: none;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.spaces-resizing .spaces-space {\r\n\ttransition: none !important;\r\n}\r\n\r\n.spaces-space .spaces-space-inner {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.spaces-space.scrollable .spaces-space-inner {\r\n\toverflow: auto;\r\n\ttouch-action: auto;\r\n}\r\n';styleInject(css_248z);var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function __extends(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var Orientation,MoveEvent,EndEvent,__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function __spreadArray(e,t,n){if(n||2===arguments.length)for(var r,o=0,s=t.length;o<s;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function shortuuid(){var e=46656*Math.random()|0,t=46656*Math.random()|0;return("000"+e.toString(36)).slice(-3)+("000"+t.toString(36)).slice(-3)}function getSizeString(e){return"string"==typeof e?e:e+"px"}function css(e,t){if(0===e.size&&0===e.adjusted.length&&0===e.resized)return"0px";var n=[];return void 0!==e.size&&n.push(getSizeString(e.size)),e.adjusted.forEach(function(e){return n.push(getSizeString(e))}),0!==e.resized&&n.push(getSizeString(e.resized)),0!==n.length?1===n.length?n[0]:t?n.join(" + "):"calc("+n.join(" + ")+")":void 0}function coalesce(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.find(function(e){return null!=e})}function adjustmentsEqual(e,t){if(e.length!==t.length)return!1;for(var n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function throttle(n,r){var o=!1;return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];o||(n.apply(void 0,e),o=!0,setTimeout(function(){o=!1},r))}}function styleDefinition(e){var t=[],n=e.position,r=css(e.left),o=css(e.top),s=css(e.right),i=css(e.bottom),a=css(e.width),p=css(e.height),c=e.zIndex,u=[];n&&u.push("position: "+n+";"),r&&u.push("left: "+r+";"),o&&u.push("top: "+o+";"),s&&u.push("right: "+s+";"),i&&u.push("bottom: "+i+";"),a&&u.push("width: "+a+";"),p&&u.push("height: "+p+";"),c&&u.push("z-index: "+c+";"),e.allowOverflow&&u.push("overflow: visible;"),0<u.length&&t.push("#"+e.id+" { "+u.join(" ")+" }"),e.scrollable&&t.push("#"+e.id+" > .spaces-space-inner { overflow: auto; touch-action: auto; }");var l=0,h=e.touchHandleSize/2-e.handleSize/2;switch(e.handlePlacement){case exports.ResizeHandlePlacement.Inside:case exports.ResizeHandlePlacement.OverlayInside:l=e.handleSize,e.type===exports.Type.Positioned&&(l=0);break;case exports.ResizeHandlePlacement.OverlayBoundary:l=e.handleSize/2}return e.type===exports.Type.Positioned?(e.canResizeLeft&&t.push("#"+e.id+"-ml { left: calc("+css(e.left,!0)+" - "+l+"px); width: "+e.handleSize+"px; top: "+css(e.top)+"; bottom: "+css(e.bottom)+"; height: "+css(e.height)+"; }"),e.canResizeTop&&(t.push("#"+e.id+"-mt { top: calc("+css(e.top,!0)+" - "+l+"px); height: "+e.handleSize+"px; left: "+css(e.left)+"; right: "+css(e.right)+"; width: "+css(e.width)+"; }"),t.push("#"+e.id+"-mt:after { top: -"+h+"px; bottom: -"+h+"px; left: "+css(e.left)+"; right: "+css(e.right)+"; width: "+css(e.width)+"; }")),e.canResizeRight&&(t.push("#"+e.id+"-mr:after { left: -"+h+"px; right: -"+h+"px; top: 0; bottom: 0; }"),e.width.size?t.push("#"+e.id+"-mr { left: calc("+css(e.left,!0)+" + "+css(e.width,!0)+" - "+e.handleSize+"px + "+l+"px); width: "+e.handleSize+"px; top: "+css(e.top)+"; bottom: "+css(e.bottom)+"; height: "+css(e.height)+"; }"):t.push("#"+e.id+"-mr { right: calc("+css(e.right,!0)+" - "+l+"px); width: "+e.handleSize+"px; top: "+css(e.top)+"; bottom: "+css(e.bottom)+"; height: "+css(e.height)+"; }"),t.push("#"+e.id+"-mr:after { left: -"+h+"px; right: -"+h+"px; top: 0; bottom: 0; }")),e.canResizeBottom&&(e.height.size?t.push("#"+e.id+"-mb { top: calc("+css(e.top,!0)+" + "+css(e.height,!0)+" - "+e.handleSize+"px + "+l+"px); height: "+e.handleSize+"px; left: "+css(e.left)+"; right: "+css(e.right)+"; width: "+css(e.width)+"; }"):t.push("#"+e.id+"-mb { bottom: calc("+css(e.bottom,!0)+" - "+l+"px); height: "+e.handleSize+"px; left: "+css(e.left)+"; right: "+css(e.right)+"; width: "+css(e.width)+"; }"),t.push("#"+e.id+"-mb:after { top: -"+h+"px; bottom: -"+h+"px; left: 0; right: 0; }"))):(e.canResizeLeft&&(t.push("#"+e.id+"-ml { right: calc("+css(e.right,!0)+" + "+css(e.width,!0)+" - "+l+"px); width: "+e.handleSize+"px; }"),t.push("#"+e.id+"-ml:after { left: -"+h+"px; right: -"+h+"px; top: 0; bottom: 0; }")),e.canResizeTop&&(t.push("#"+e.id+"-mt { bottom: calc("+css(e.bottom,!0)+" + "+css(e.height,!0)+" - "+l+"px); height: "+e.handleSize+"px; }"),t.push("#"+e.id+"-mt:after { top: -"+h+"px; bottom: -"+h+"px; left: 0; right: 0; }")),e.canResizeRight&&(t.push("#"+e.id+"-mr { left: calc("+css(e.left,!0)+" + "+css(e.width,!0)+" - "+l+"px); width: "+e.handleSize+"px; }"),t.push("#"+e.id+"-mr:after { left: -"+h+"px; right: -"+h+"px; top: 0; bottom: 0; }")),e.canResizeBottom&&(t.push("#"+e.id+"-mb { top: calc("+css(e.top,!0)+" + "+css(e.height,!0)+" - "+l+"px); height: "+e.handleSize+"px; }"),t.push("#"+e.id+"-mb:after { top: -"+h+"px; bottom: -"+h+"px; left: 0; right: 0; }"))),t.join(" ")}function updateStyleDefinition(e){var t=styleDefinition(e),n=document.getElementById("style_"+e.id);if(n)n.innerHTML!==t&&(n.innerHTML=t);else{var r=document.createElement("style");r.id="style_"+e.id,r.innerHTML=t,document.head.appendChild(r)}}function removeStyleDefinition(e){var t=document.getElementById("style_"+e.id);t&&document.head.removeChild(t)}exports.Type=void 0,function(e){e.ViewPort="viewport",e.Fixed="fixed",e.Fill="fill",e.Positioned="positioned",e.Anchored="anchored",e.Custom="custom"}(exports.Type||(exports.Type={})),exports.AnchorType=void 0,function(e){e.Left="anchor-left",e.Right="anchor-right",e.Top="anchor-top",e.Bottom="anchor-bottom"}(exports.AnchorType||(exports.AnchorType={})),function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical"}(Orientation=Orientation||{}),exports.ResizeType=void 0,function(e){e.Left="resize-left",e.Right="resize-right",e.Top="resize-top",e.Bottom="resize-bottom",e.TopLeft="resize-topleft",e.TopRight="resize-topright",e.BottomLeft="resize-bottomleft",e.BottomRight="resize-bottomright"}(exports.ResizeType||(exports.ResizeType={})),exports.ResizeHandlePlacement=void 0,function(e){e.OverlayInside="overlay-inside",e.Inside="inside",e.OverlayBoundary="overlay-boundary"}(exports.ResizeHandlePlacement||(exports.ResizeHandlePlacement={})),exports.CenterType=void 0,function(e){e.None="none",e.Vertical="vertical",e.HorizontalVertical="horizontalVertical"}(exports.CenterType||(exports.CenterType={})),function(e){e.Mouse="mousemove",e.Touch="touchmove"}(MoveEvent=MoveEvent||{}),function(e){e.Mouse="mouseup",e.Touch="touchend"}(EndEvent=EndEvent||{});var RESIZE_THROTTLE=0;function isHorizontal(e){return e===exports.ResizeType.Left||e===exports.ResizeType.Right}function createAdjuster(o,s,i,a){var p=function(){if(o===exports.ResizeType.Left)return s.left;if(o===exports.ResizeType.Right)return s.right;if(o===exports.ResizeType.Bottom)return s.bottom;if(o===exports.ResizeType.Top)return s.top;throw new Error("unknown resize type")}(),c=o===exports.ResizeType.Right||o===exports.ResizeType.Bottom?function(e){return-e}:function(e){return e},u=isHorizontal(o)?s.width:s.height,l=p.resized,h=u.resized,e=s.element.getBoundingClientRect(),t=isHorizontal(o)?e.width:e.height,d=coalesce(s.minimumSize,20)-t+0,f=s.maximumSize?s.maximumSize-t+0:void 0;return function(e,t){var n=(isHorizontal(o)?i:a)-(isHorizontal(o)?e:t),r=c(n);s.type!==exports.Type.Positioned&&((r=Math.max(c(n),d))<d&&(r=d),"number"==typeof f&&f<r&&(r=f)),void 0!==p.size?(p.resized=c(-n)+l,u.size&&(u.resized=c(n)+h)):u.resized=r+h}}function createResize(_){return{startResize:function(e,n,r,o,s,i,a){if(r.onResizeStart){var t=r.onResizeStart(n);if("boolean"==typeof t&&!t)return}var p=i(e),c=createAdjuster(n,r,p.x,p.y);r.resizing=!0,r.updateParent();function u(e,t){c(e,t),_.updateStyles(r)}function l(e){f=!0;var t=i(e);h=t.x,d=t.y,e.preventDefault(),throttle(function(e,t){return window.requestAnimationFrame(function(){return u(e,t)})},RESIZE_THROTTLE)(h,d)}var h=0,d=0,f=!1,m=function(){f&&u(h,d),window.removeEventListener(s,l),window.removeEventListener(o,m),r.resizing=!1,r.updateParent();var e=a||r.onResizeEnd;if(e){var t=r.element.getBoundingClientRect();e(Math.floor(isHorizontal(n)?t.width:t.height),t,n)}};window.addEventListener(s,l),window.addEventListener(o,m)}}}function createDrag(z){return{startDrag:function(e,s,o,i,n,a){if(s.element){var t=n(e),r=0===s.left.adjusted.length?0:s.left.adjusted[0],p=0===s.top.adjusted.length?0:s.top.adjusted[0],c=t.x-r,u=t.y-p,l=0,h=0,d=!1,f=function(e,t){return r=-(c-e),o=-(u-t),(n=s).left.adjusted=[r],n.top.adjusted=[o],n.right.size&&(n.right.adjusted=[-r]),n.bottom.size&&(n.bottom.adjusted=[-o]),void z.updateStyles(n);var n,r,o},m=throttle(f,5),_=function(e){d=!0;var t=n(e);l=t.x,h=t.y,e.preventDefault(),m(l,h)},y=function(){var e,t;if(d&&f(l,h),window.removeEventListener(i,_),window.removeEventListener(o,y),a){var n=s.parentId&&(null===(e=z.getSpace(s.parentId))||void 0===e?void 0:e.element.getBoundingClientRect())||{left:0,top:0,right:0,bottom:0,width:0,height:0},r={left:(t=s.element.getBoundingClientRect()).left,top:t.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height};a(__assign(__assign({},r),{left:r.left-n.left,top:r.top-n.top}),d)}};window.addEventListener(i,_),window.addEventListener(o,y)}}}}var spaceDefaults={id:"",zIndex:0,scrollable:!1,resizing:!1,allowOverflow:!1,centerContent:"none",dimension:{left:0,top:0,right:0,bottom:0,width:0,height:0,x:0,y:0,toJSON:function(){return""}},handleSize:5,touchHandleSize:5,handlePlacement:exports.ResizeHandlePlacement.OverlayInside,adjustLeft:function(){return!1},adjustRight:function(){return!1},adjustTop:function(){return!1},adjustBottom:function(){return!1},adjustEdge:function(){return!1},anchoredChildren:function(){return[]}},anchorTypes=[exports.AnchorType.Left,exports.AnchorType.Top,exports.AnchorType.Right,exports.AnchorType.Bottom];function getPosition(e){return e===exports.Type.ViewPort?"fixed":e===exports.Type.Fixed?"relative":"absolute"}function getOrientation(e){return e===exports.AnchorType.Bottom||e===exports.AnchorType.Top?Orientation.Vertical:Orientation.Horizontal}function anchorUpdates(e){return[{anchor:exports.AnchorType.Left,update:e.adjustLeft},{anchor:exports.AnchorType.Top,update:e.adjustTop},{anchor:exports.AnchorType.Right,update:e.adjustRight},{anchor:exports.AnchorType.Bottom,update:e.adjustBottom}]}function sizeInfoDefault(e){return{size:e,adjusted:[],resized:0}}function createStore(){function x(t){return o().find(function(e){return e.id===t})}function R(o){for(var e,i,n=function(e,t,n){return n.indexOf(e)===t},s=(e=o.children,i=[],anchorTypes.forEach(function(t){var s=e.filter(function(e){return void 0!==e.anchor&&e.anchor===t});s.map(function(e){return e.zIndex}).filter(n).forEach(function(t){var e=s.filter(function(e){return e.zIndex===t}),n=e.filter(function(e){return void 0!==e.order}),r=e.filter(function(e){return void 0===e.order}),o=0<n.length?n.map(function(e){return e.order}).reduce(function(e,t){return Math.max(e,t)}):0;i=__spreadArray(__spreadArray([],i,!0),__spreadArray(__spreadArray([],n,!0),r.map(function(e,t){return __assign(__assign({},e),{order:o+t+1})}),!0),!0)})}),__spreadArray(__spreadArray([],i,!0),e.filter(function(e){return void 0===e.anchor}),!0)),t=function(){var n=s[a],r=!1;if(n.type===exports.Type.Fill)anchorUpdates(n).forEach(function(e){var t=[];o.anchoredChildren(s,e.anchor,n.zIndex).forEach(function(e){e.orientation===Orientation.Vertical?(e.height.size&&t.push(e.height.size),e.height.resized&&t.push(e.height.resized)):(e.width.size&&t.push(e.width.size),e.width.resized&&t.push(e.width.resized))}),e.update(t)&&(r=!0)});else if(n.type===exports.Type.Anchored){var t=[];o.anchoredChildren(s,n.anchor,n.zIndex).filter(function(e){return e.id!==n.id&&e.order<=n.order}).forEach(function(e){e.orientation===Orientation.Vertical?(e.height.size&&t.push(e.height.size),e.height.resized&&t.push(e.height.resized)):(e.width.size&&t.push(e.width.size),e.width.resized&&t.push(e.width.resized))}),n.adjustEdge(t)&&(r=!0)}r&&updateStyleDefinition(n)},a=0,r=s.length;a<r;a++)t()}var r=[],o=function(){return r},h={getSpaces:o,getSpace:x,addSpace:function(e){if(o().push(e),e.parentId){var t=x(e.parentId);t&&(t.children.push(e),R(t))}updateStyleDefinition(e)},removeSpace:function(t){var e;if(e=o().filter(function(e){return e.id!==t.id}),r=e,t.parentId){var n=x(t.parentId);n&&(n.children=n.children.filter(function(e){return e.id!==t.id}),R(n))}removeStyleDefinition(t)},updateStyles:function(e){if(e.parentId){var t=x(e.parentId);t&&R(t)}updateStyleDefinition(e)},updateSpace:function(e,t){var n=t.type,r=t.anchor,o=t.order,s=t.zIndex,i=t.scrollable,a=t.position,p=t.centerContent,c=t.minimumSize,u=t.maximumSize,l=t.handleSize,h=t.touchHandleSize,d=t.handlePlacement,f=t.allowOverflow,m=a&&a.leftResizable||!1,_=a&&a.rightResizable||!1,y=a&&a.topResizable||!1,z=a&&a.bottomResizable||!1,g=!1;if(e.type!==n&&(e.type=n,e.position=getPosition(n),g=!0),e.anchor!==r&&(e.anchor=r,e.orientation=getOrientation(r),g=!0,n===exports.Type.Anchored&&(r===exports.AnchorType.Left?e.adjustEdge=e.adjustLeft:r===exports.AnchorType.Top?e.adjustEdge=e.adjustTop:r===exports.AnchorType.Right?e.adjustEdge=e.adjustRight:r===exports.AnchorType.Bottom&&(e.adjustEdge=e.adjustBottom))),e.left.size!==(a&&a.left)&&(e.left.size=a&&a.left,e.left.resized=0,e.left.adjusted=[],g=!0),e.right.size!==(a&&a.right)&&(e.right.size=a&&a.right,e.right.resized=0,e.right.adjusted=[],g=!0),e.top.size!==(a&&a.top)&&(e.top.size=a&&a.top,e.top.resized=0,e.top.adjusted=[],g=!0),e.bottom.size!==(a&&a.bottom)&&(e.bottom.size=a&&a.bottom,e.bottom.resized=0,e.bottom.adjusted=[],g=!0),e.width.size!==(a&&a.width)&&(e.width.size=a&&a.width,e.width.resized=0,e.width.adjusted=[],g=!0),e.height.size!==(a&&a.height)&&(e.height.size=a&&a.height,e.height.resized=0,e.height.adjusted=[],g=!0),coalesce(e.order,0)!==coalesce(o,0)&&(e.order=coalesce(o,0),g=!0),coalesce(e.zIndex,0)!==coalesce(s,0)&&(e.zIndex=coalesce(s,0),g=!0),coalesce(e.scrollable,!1)!==coalesce(i,!1)&&(e.scrollable=coalesce(i,!1),g=!0),e.minimumSize!==c&&(e.minimumSize=c,g=!0),e.maximumSize!==u&&(e.maximumSize=u,g=!0),coalesce(e.centerContent,exports.CenterType.None)!==coalesce(p,exports.CenterType.None)&&(e.centerContent=coalesce(p,exports.CenterType.None),g=!0),e.handleSize!==l&&(e.handleSize=l||spaceDefaults.handleSize,g=!0),e.touchHandleSize!==h&&(e.touchHandleSize=h||spaceDefaults.touchHandleSize,g=!0),e.handlePlacement!==d&&(e.handlePlacement=d||spaceDefaults.handlePlacement,g=!0),e.canResizeBottom!==z&&(e.canResizeBottom=z,g=!0),e.canResizeTop!==y&&(e.canResizeTop=y,g=!0),e.canResizeLeft!==m&&(e.canResizeLeft=m,g=!0),e.canResizeRight!==_&&(e.canResizeRight=_,g=!0),e.allowOverflow!==f&&(e.allowOverflow=f||spaceDefaults.allowOverflow,g=!0),g){if(e.parentId){var T=x(e.parentId);T&&R(T)}updateStyleDefinition(e)}},createSpace:function(){return{}},startMouseResize:function(){return null},startTouchResize:function(){return null},startMouseDrag:function(){return null},startTouchDrag:function(){return null}},s=createResize(h),i=createDrag(h);return h.createSpace=function(t,e,n){var r=e.position,o=e.anchor,s=e.type,i=__rest(e,["position","anchor","type"]),a=r&&r.rightResizable||!1,p=r&&r.leftResizable||!1,c=r&&r.bottomResizable||!1,u=r&&r.topResizable||!1,l=__assign(__assign(__assign({},spaceDefaults),i),{store:h,update:n,updateParent:function(){if(t){var e=h.getSpace(t);e&&e.update()}},parentId:t,children:[],anchor:o,type:s,orientation:getOrientation(o),position:getPosition(s),left:sizeInfoDefault(r&&r.left),right:sizeInfoDefault(r&&r.right),top:sizeInfoDefault(r&&r.top),bottom:sizeInfoDefault(r&&r.bottom),width:sizeInfoDefault(r&&r.width),height:sizeInfoDefault(r&&r.height),canResizeLeft:a,canResizeRight:p,canResizeTop:c,canResizeBottom:u});return l.anchoredChildren=function(e,t,n){return e.filter(function(e){return e.type===exports.Type.Anchored&&e.anchor===t&&e.zIndex===n})},l.adjustLeft=function(e){return!adjustmentsEqual(l.left.adjusted,e)&&(l.left.adjusted=e,!0)},l.adjustRight=function(e){return!adjustmentsEqual(l.right.adjusted,e)&&(l.right.adjusted=e,!0)},l.adjustTop=function(e){return!adjustmentsEqual(l.top.adjusted,e)&&(l.top.adjusted=e,!0)},l.adjustBottom=function(e){return!adjustmentsEqual(l.bottom.adjusted,e)&&(l.bottom.adjusted=e,!0)},s===exports.Type.Anchored&&(o===exports.AnchorType.Left?l.adjustEdge=l.adjustLeft:o===exports.AnchorType.Top?l.adjustEdge=l.adjustTop:o===exports.AnchorType.Right?l.adjustEdge=l.adjustRight:o===exports.AnchorType.Bottom&&(l.adjustEdge=l.adjustBottom)),l},h.startMouseResize=function(e,t,n,r){s.startResize(n,e,t,EndEvent.Mouse,MoveEvent.Mouse,function(e){return{x:e.clientX,y:e.clientY}},r)},h.startTouchResize=function(e,t,n,r){s.startResize(n,e,t,EndEvent.Touch,MoveEvent.Touch,function(e){return{x:e.touches[0].clientX,y:e.touches[0].clientY}},r)},h.startMouseDrag=function(e,t,n){i.startDrag(t,e,EndEvent.Mouse,MoveEvent.Mouse,function(e){return{x:e.clientX,y:e.clientY}},n)},h.startTouchDrag=function(e,t,n){i.startDrag(t,e,EndEvent.Touch,MoveEvent.Touch,function(e){return{x:e.touches[0].clientX,y:e.touches[0].clientY}},n)},h}var useEffectOnce=function(e){var t=React.useRef(),n=React.useRef(!1),r=React.useRef(!1),o=React.useState(0);o[0];var s=o[1];n.current&&(r.current=!0),React.useEffect(function(){return n.current||(t.current=e(),n.current=!0),s(function(e){return e+1}),function(){r.current&&t.current&&t.current()}},[])},ParentContext=React__namespace.createContext(void 0),DOMRectContext=React__namespace.createContext(void 0),LayerContext=React__namespace.createContext(void 0),OptionsContext=React__namespace.createContext({}),currentStore=createStore(),commonProps={id:PropTypes__namespace.string,className:PropTypes__namespace.string,style:PropTypes__namespace.oneOfType([PropTypes__namespace.object,PropTypes__namespace.array]),as:PropTypes__namespace.any,centerContent:PropTypes__namespace.oneOf([exports.CenterType.None,exports.CenterType.Vertical,exports.CenterType.HorizontalVertical]),zIndex:PropTypes__namespace.number,scrollable:PropTypes__namespace.bool,trackSize:PropTypes__namespace.bool,allowOverflow:PropTypes__namespace.bool,handleRender:PropTypes__namespace.func,onClick:PropTypes__namespace.func,onDoubleClick:PropTypes__namespace.func,onMouseDown:PropTypes__namespace.func,onMouseEnter:PropTypes__namespace.func,onMouseLeave:PropTypes__namespace.func,onMouseMove:PropTypes__namespace.func,onTouchStart:PropTypes__namespace.func,onTouchMove:PropTypes__namespace.func,onTouchEnd:PropTypes__namespace.func};function useForceUpdate(){var e=React__namespace.useState(0)[1];return React__namespace.useCallback(function(){e(function(e){return e+1})},[])}function useSpace(e){var n=currentStore,t=useForceUpdate(),r=React__namespace.useContext(ParentContext),o=React__namespace.useContext(LayerContext),s=React__namespace.useContext(OptionsContext).debug,i=React__namespace.useState(e.id||"s"+shortuuid())[0],a=React__namespace.useRef(),p=React__namespace.useRef(),c=React__namespace.useState(),u=c[0],l=c[1],h=n.getSpace(i);s&&console.table(n.getSpaces());var d=__assign(__assign({},e),{id:i,zIndex:coalesce(e.zIndex,o)});h?n.updateSpace(h,d):(h=n.createSpace(r,d,t),n.addSpace(h));var f=useSpaceResizeHandles(n,h);return useEffectOnce(function(){var t=a.current.getBoundingClientRect();return h.dimension=__assign(__assign({},t),{left:Math.floor(t.left),top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),width:Math.floor(t.width),height:Math.floor(t.height),x:Math.floor(t.x),y:Math.floor(t.y)}),l(h.dimension),e.trackSize&&(p.current=new cssElementQueries.ResizeSensor(a.current,function(e){h.dimension=__assign(__assign({},t),{width:Math.floor(e.width),height:Math.floor(e.height)}),l(h.dimension)})),function(){p.current&&p.current.detach(),n.removeSpace(h)}}),{space:h,resizeHandles:f,domRect:u,elementRef:a}}function useSpaceResizeHandles(t,n){var e=[];return n.canResizeLeft&&e.push({id:n.id+"-ml",key:"left",className:"spaces-resize-handle resize-left",onMouseDown:function(e){return t.startMouseResize(exports.ResizeType.Left,n,e)},onTouchStart:function(e){return t.startTouchResize(exports.ResizeType.Left,n,e)}}),n.canResizeRight&&e.push({id:n.id+"-mr",key:"right",className:"spaces-resize-handle resize-right",onMouseDown:function(e){return t.startMouseResize(exports.ResizeType.Right,n,e)},onTouchStart:function(e){return t.startTouchResize(exports.ResizeType.Right,n,e)}}),n.canResizeTop&&e.push({id:n.id+"-mt",key:"top",className:"spaces-resize-handle resize-top",onMouseDown:function(e){return t.startMouseResize(exports.ResizeType.Top,n,e)},onTouchStart:function(e){return t.startTouchResize(exports.ResizeType.Top,n,e)}}),n.canResizeBottom&&e.push({id:n.id+"-mb",key:"bottom",className:"spaces-resize-handle resize-bottom",onMouseDown:function(e){return t.startMouseResize(exports.ResizeType.Bottom,n,e)},onTouchStart:function(e){return t.startTouchResize(exports.ResizeType.Bottom,n,e)}}),{mouseHandles:e}}function useCurrentSpace(){var n=currentStore,e=React__namespace.useContext(ParentContext),r=e?n.getSpace(e):void 0,t=React__namespace.useContext(DOMRectContext),o=React__namespace.useContext(LayerContext),s=React__namespace.useCallback(function(e,t){return r?n.startMouseDrag(r,e,t):null},[e]),i=React__namespace.useCallback(function(e,t){return r?n.startTouchDrag(r,e,t):null},[e]),a=React__namespace.useCallback(function(){return r?n.updateStyles(r):null},[e]);return{size:__assign(__assign({},{width:0,height:0,x:0,y:0}),t),layer:o||0,startMouseDrag:s,startTouchDrag:i,forceUpdate:a}}var Centered=function(e){return React__namespace.createElement("div",{className:"spaces-centered"},e.children)},CenteredVertically=function(e){return React__namespace.createElement("div",{className:"spaces-centered-vertically"},e.children)};function applyCentering(e,t){switch(t){case exports.CenterType.Vertical:return React__namespace.createElement(CenteredVertically,null,e);case exports.CenterType.HorizontalVertical:return React__namespace.createElement(Centered,null,e)}return e}var Space=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.render=function(){return React__namespace.createElement(SpaceInner,__assign({},this.props,{wrapperInstance:this}))},t}(React__namespace.Component),SpaceInner=function(e){e.id||e.wrapperInstance._react_spaces_uniqueid||(e.wrapperInstance._react_spaces_uniqueid="s"+shortuuid());var t=e.style,n=e.className,r=e.onClick,o=e.onDoubleClick,s=e.onMouseDown,i=e.onMouseEnter,a=e.onMouseLeave,p=e.onMouseMove,c=e.onTouchStart,u=e.onTouchMove,l=e.onTouchEnd,h=e.children,d=e.handleRender,f={onClick:r,onDoubleClick:o,onMouseDown:s,onMouseEnter:i,onMouseLeave:a,onMouseMove:p,onTouchStart:c,onTouchMove:u,onTouchEnd:l},m=useSpace(__assign(__assign({},e),{id:e.id||e.wrapperInstance._react_spaces_uniqueid})),_=m.space,y=m.domRect,z=m.elementRef,g=m.resizeHandles;useEffectOnce(function(){_.element=z.current});var T=n?n.split(" ").map(function(e){return e.trim()}):[],x=__spreadArray(__spreadArray(__spreadArray(__spreadArray([],["spaces-space",_.children.find(function(e){return e.resizing})?"spaces-resizing":void 0],!1),[_.type===exports.Type.Fixed?"spaces-fixedsize-layout":void 0],!1),[_.type===exports.Type.ViewPort?"spaces-fullpage-layout":void 0],!1),T.map(function(e){return e+"-container"}),!0).filter(function(e){return e}),R=__spreadArray(__spreadArray([],["spaces-space-inner"],!1),T,!0),b=t;_.handlePlacement===exports.ResizeHandlePlacement.Inside&&(b=__assign(__assign({},t),{left:_.anchor===exports.AnchorType.Right?_.handleSize:void 0,right:_.anchor===exports.AnchorType.Left?_.handleSize:void 0,top:_.anchor===exports.AnchorType.Bottom?_.handleSize:void 0,bottom:_.anchor===exports.AnchorType.Top?_.handleSize:void 0}));var v=applyCentering(h,e.centerContent);return React__namespace.createElement(React__namespace.Fragment,null,g.mouseHandles.map(function(e){return(null==d?void 0:d(e))||React__namespace.createElement("div",__assign({},e))}),React__namespace.createElement(e.as||"div",__assign({id:_.id,ref:z,className:x.join(" ")},f),React__namespace.createElement("div",{className:R.join(" "),style:b},React__namespace.createElement(ParentContext.Provider,{value:_.id},React__namespace.createElement(LayerContext.Provider,{value:void 0},React__namespace.createElement(DOMRectContext.Provider,{value:y},v))))))},resizableProps=__assign(__assign({},commonProps),{size:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]).isRequired,order:PropTypes__namespace.number,handleSize:PropTypes__namespace.number,touchHandleSize:PropTypes__namespace.number,handlePlacement:PropTypes__namespace.oneOf([exports.ResizeHandlePlacement.Inside,exports.ResizeHandlePlacement.OverlayBoundary,exports.ResizeHandlePlacement.OverlayInside]),handleRender:PropTypes__namespace.func,minimumSize:PropTypes__namespace.number,maximumSize:PropTypes__namespace.number,onResizeStart:PropTypes__namespace.func,onResizeEnd:PropTypes__namespace.func}),anchoredProps=__assign(__assign({},resizableProps),{resizable:PropTypes__namespace.bool}),LeftResizable=function(e){var t=e.children,n=e.size,r=__rest(e,["children","size"]);return React__namespace.createElement(Space,__assign({},r,{type:exports.Type.Anchored,anchor:exports.AnchorType.Left,position:{left:0,top:0,bottom:0,rightResizable:!0,width:n}}),t)};LeftResizable.propTypes=resizableProps;var Left=function(e){var t=e.size,n=e.children,r=e.resizable,o=__rest(e,["size","children","resizable"]);return React__namespace.createElement(Space,__assign({},o,{type:exports.Type.Anchored,anchor:exports.AnchorType.Left,position:{left:0,top:0,bottom:0,rightResizable:r,width:t}}),n)};Left.propTypes=anchoredProps;var TopResizable=function(e){var t=e.children,n=e.size,r=__rest(e,["children","size"]);return React__namespace.createElement(Space,__assign({},r,{type:exports.Type.Anchored,anchor:exports.AnchorType.Top,position:{left:0,top:0,right:0,bottomResizable:!0,height:n}}),t)};TopResizable.propTypes=resizableProps;var Top=function(e){var t=e.size,n=e.children,r=e.resizable,o=__rest(e,["size","children","resizable"]);return React__namespace.createElement(Space,__assign({},o,{type:exports.Type.Anchored,anchor:exports.AnchorType.Top,position:{left:0,top:0,right:0,bottomResizable:r,height:t}}),n)};Top.propTypes=anchoredProps;var RightResizable=function(e){var t=e.children,n=e.size,r=__rest(e,["children","size"]);return React__namespace.createElement(Space,__assign({},r,{type:exports.Type.Anchored,anchor:exports.AnchorType.Right,position:{bottom:0,top:0,right:0,leftResizable:!0,width:n}}),t)};RightResizable.propTypes=resizableProps;var Right=function(e){var t=e.size,n=e.children,r=e.resizable,o=__rest(e,["size","children","resizable"]);return React__namespace.createElement(Space,__assign({},o,{type:exports.Type.Anchored,anchor:exports.AnchorType.Right,position:{bottom:0,top:0,right:0,leftResizable:r,width:t}}),n)};Right.propTypes=anchoredProps;var BottomResizable=function(e){var t=e.children,n=e.size,r=__rest(e,["children","size"]);return React__namespace.createElement(Space,__assign({},r,{type:exports.Type.Anchored,anchor:exports.AnchorType.Bottom,position:{bottom:0,left:0,right:0,topResizable:!0,height:n}}),t)};BottomResizable.propTypes=resizableProps;var Bottom=function(e){var t=e.size,n=e.children,r=e.resizable,o=__rest(e,["size","children","resizable"]);return React__namespace.createElement(Space,__assign({},o,{type:exports.Type.Anchored,anchor:exports.AnchorType.Bottom,position:{bottom:0,left:0,right:0,topResizable:r,height:t}}),n)};Bottom.propTypes=anchoredProps;var customProps=__assign(__assign({},anchoredProps),{type:PropTypes__namespace.oneOf([exports.Type.Positioned,exports.Type.Fill,exports.Type.Anchored]),anchor:PropTypes__namespace.oneOf([exports.AnchorType.Left,exports.AnchorType.Top,exports.AnchorType.Right,exports.AnchorType.Bottom]),anchorSize:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),left:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),top:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),right:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),bottom:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),width:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),height:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),resizeTypes:PropTypes__namespace.array}),Custom=function(e){var t,n=e.children,r=e.type,o=e.left,s=e.top,i=e.right,a=e.bottom,p=e.width,c=e.height,u=e.anchorSize,l=e.anchor,h=e.resizable,d=e.resizeTypes,f=__rest(e,["children","type","left","top","right","bottom","width","height","anchorSize","anchor","resizable","resizeTypes"]);return(r=r||exports.Type.Fill)===exports.Type.Positioned?t={left:o,top:s,right:i,bottom:a,width:p,height:c,leftResizable:d&&d.includes(exports.ResizeType.Left),topResizable:d&&d.includes(exports.ResizeType.Top),rightResizable:d&&d.includes(exports.ResizeType.Right),bottomResizable:d&&d.includes(exports.ResizeType.Bottom)}:r=l===exports.AnchorType.Left?(t={left:0,top:0,bottom:0,width:u,rightResizable:h},exports.Type.Anchored):l===exports.AnchorType.Right?(t={right:0,top:0,bottom:0,width:u,leftResizable:h},exports.Type.Anchored):l===exports.AnchorType.Top?(t={left:0,top:0,right:0,height:u,bottomResizable:h},exports.Type.Anchored):l===exports.AnchorType.Bottom?(t={left:0,bottom:0,right:0,height:u,topResizable:h},exports.Type.Anchored):(t={left:0,top:0,bottom:0,right:0},exports.Type.Fill),React__namespace.createElement(Space,__assign({},f,{type:r,anchor:l,position:t}),n)};Custom.propTypes=customProps;var Fill=function(e){return React__namespace.createElement(Space,__assign({},e,{type:exports.Type.Fill,position:{left:0,top:0,right:0,bottom:0}}),e.children)};Fill.propTypes=commonProps;var Fixed=function(e){var t=e.width,n=e.height,r=e.children,o=__rest(e,["width","height","children"]);return React__namespace.createElement(Space,__assign({},o,{type:exports.Type.Fixed,position:{width:t,height:n}}),r)};Fixed.propTypes=__assign(__assign({},commonProps),{width:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),height:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]).isRequired});var Layer=function(e){return React__namespace.createElement(LayerContext.Provider,{value:e.zIndex},e.children)};Layer.propTypes={zIndex:PropTypes__namespace.number.isRequired};var Positioned=function(e){var t=e.left,n=e.top,r=e.right,o=e.bottom,s=e.width,i=e.height,a=e.resizable,p=__rest(e,["left","top","right","bottom","width","height","resizable"]),c=a||[];return React__namespace.createElement(Space,__assign({},p,{type:exports.Type.Positioned,position:{left:t,leftResizable:c.includes(exports.ResizeType.Left),top:n,topResizable:c.includes(exports.ResizeType.Top),right:r,rightResizable:c.includes(exports.ResizeType.Right),bottom:o,bottomResizable:c.includes(exports.ResizeType.Bottom),width:s,height:i}}),p.children)};Positioned.propTypes=__assign(__assign({},commonProps),{left:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),top:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),right:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),bottom:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),width:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),height:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),resizable:PropTypes__namespace.array});var Info=function(e){var t=React__namespace.useContext(DOMRectContext);return t?e.children(t):e.children({left:0,top:0,right:0,bottom:0,width:0,height:0,x:0,y:0,toJSON:function(){return""}})},ViewPort=function(e){var t=e.left,n=e.top,r=e.right,o=e.bottom,s=e.children,i=__rest(e,["left","top","right","bottom","children"]);return React__namespace.createElement(Space,__assign({},i,{type:exports.Type.ViewPort,position:{left:t||0,top:n||0,right:r||0,bottom:o||0}}),s)};ViewPort.propTypes=__assign(__assign({},commonProps),{left:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),top:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),right:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number]),bottom:PropTypes__namespace.oneOfType([PropTypes__namespace.string,PropTypes__namespace.number])});var Options=function(e){var t=e.children,n=__rest(e,["children"]);return React__namespace.createElement(OptionsContext.Provider,{value:n},t)};exports.Bottom=Bottom,exports.BottomResizable=BottomResizable,exports.Centered=Centered,exports.CenteredVertically=CenteredVertically,exports.Custom=Custom,exports.Fill=Fill,exports.Fixed=Fixed,exports.Info=Info,exports.Layer=Layer,exports.Left=Left,exports.LeftResizable=LeftResizable,exports.Options=Options,exports.Positioned=Positioned,exports.Right=Right,exports.RightResizable=RightResizable,exports.Top=Top,exports.TopResizable=TopResizable,exports.ViewPort=ViewPort,exports.anchoredProps=anchoredProps,exports.resizableProps=resizableProps,exports.useCurrentSpace=useCurrentSpace;
//# sourceMappingURL=index.js.map
