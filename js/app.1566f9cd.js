(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-store/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05a4":function(t,e,n){"use strict";var o=n("72c1"),r=n.n(o);r.a},1:function(t,e){},1712:function(t,e,n){"use strict";var o=n("3c62"),r=n.n(o);r.a},"30ce":function(t,e,n){"use strict";var o=n("eb66"),r=n.n(o);r.a},"3c62":function(t,e,n){},"44d1":function(t,e,n){},"4ead":function(t,e,n){"use strict";var o=n("44d1"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("ul",{staticClass:"header"},[n("router-link",{attrs:{to:"/",tag:"li"}},[n("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/projects/max_808/065fea46998397.Y3JvcCwyMTgzLDE3MDksNDgsMA.png",alt:""}})]),n("li",{staticClass:"store"},[n("modal-login")],1)],1),n("hr"),n("ul",{staticClass:"gender"},[n("router-link",{attrs:{to:"/",tag:"li"}},[n("h4",[t._v("MEN")])]),n("router-link",{attrs:{to:"/Women",tag:"li"}},[n("h4",[t._v("WOMEN")])])],1),n("hr"),n("router-view")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"modal-btn",on:{click:function(e){return e.preventDefault(),t.show(e)}}},[n("i",[n("svg",{staticClass:"bi bi-bucket-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z","clip-rule":"evenodd"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42z","clip-rule":"evenodd"}})])])]),n("modal",{attrs:{name:"modal-login"}},[n("div",{staticClass:"close-modal"},[n("button",{on:{click:function(e){return t.$modal.hide("modal-login")}}},[n("svg",{staticClass:"bi bi-x-octagon",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z","clip-rule":"evenodd"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z","clip-rule":"evenodd"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z","clip-rule":"evenodd"}})])])]),t.isCheckoutSection?t._e():n("div",t._l(t.posts,(function(e){return n("div",{key:e.id,staticClass:"box"},[n("ul",{staticClass:"modal-post"},[n("li",{staticClass:"modal-image"},[n("img",{attrs:{src:e.image,alt:""}})]),n("li",{staticClass:"modal-information"},[n("p",[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.costs))])]),n("li",{staticClass:"modal-remove"},[n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.removeFromCart(e.id)}}},[t._v("Remove")])])])])})),0),t.isCheckoutSection?n("div",[n("p",[t._v(t._s(t.cartEmptyLabel))])]):t._e()])],1)},i=[],c={data:function(){return{cartEmptyLabel:"Your cart is empty",isCheckoutSection:!1}},methods:{show:function(){this.$modal.show("modal-login")},hide:function(){this.$modal.hide("modal-login")},removeFromCart:function(t){var e={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",e)}},computed:{posts:function(){return this.$store.getters.postsAdded}}},u=c,l=(n("1712"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,"02a84fdf",null),f=d.exports,p={components:{ModalLogin:f}},m=p,h=(n("05a4"),Object(l["a"])(m,r,s,!1,null,"e2be0e0e",null)),v=h.exports,g=n("9483");Object(g["a"])("".concat("/vue-store/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("ul",{staticClass:"allposts"},t._l(t.allPosts,(function(e,o){return n("li",{key:o},[n("router-link",{key:e.id,staticClass:"shoes-side",attrs:{to:{name:"Add",params:{id:e.id}}}},[n("div",{staticClass:"shoes"},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:e.image,alt:""}})]),n("a",{staticClass:"post-cost"},[n("p",[t._v(t._s(e.name)+" ")])]),n("div",{staticClass:"posts"},[n("h5",[t._v(t._s(e.costs))])])])])],1)})),0)])},C=[],_=(n("96cf"),n("1da1")),k=n("2f62"),y={data:function(){return{posts:[]}},computed:Object(k["b"])(["allPosts"]),mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("fetchPosts");case 1:case"end":return e.stop()}}),e)})))()}},j=y,A=(n("6ba0"),Object(l["a"])(j,w,C,!1,null,"b50eba3c",null)),O=A.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("ul",t._l(t.allPosts,(function(e){return n("router-link",{key:e.id,attrs:{to:"/",tag:"li"}},[n("h2",[t._v(t._s(e.name))]),n("figure",{staticClass:"image"},[n("img",{attrs:{src:e.image,alt:""}})])])})),1)])},P=[],$={data:function(){return{cars:[{name:"zafar"},{name:"munis"},{name:"qummi"}]}},computed:Object(k["b"])(["allPosts"]),mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("fetchPosts");case 1:case"end":return e.stop()}}),e)})))()}},M=$,E=(n("30ce"),Object(l["a"])(M,x,P,!1,null,"8665e02e",null)),T=E.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.allPosts,(function(e,o){return n("ul",{key:o},[t.postId==e.id?n("div",{staticClass:"addside"},[n("li",{key:o,staticClass:"col-4 addphoto"},[n("img",{attrs:{src:e.image,alt:""}})]),n("li",{staticClass:"col-4 addphoto"},[n("img",{attrs:{src:e.front,alt:""}})]),n("li",{staticClass:"col-4 addinformation"},[n("p",[t._v(t._s(e.name))]),n("h5",[t._v(t._s(e.costs))]),t.isAddedBtn?n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(n){return t.addToCart(e.id)}}},[t._v("Add to Cart")]):t._e()])]):t._e()])})),0)},L=[],S={data:function(){return{postId:this.$route.params.id}},computed:Object(k["b"])(["allPosts"]),mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("fetchPosts"),t.$store.dispatch("addToCart");case 2:case"end":return e.stop()}}),e)})))()},methods:{addToCart:function(t){var e={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",e)},isAddedBtn:function(){return this.product.isAddedBtn}}},R=S,z=(n("4ead"),Object(l["a"])(R,B,L,!1,null,"54567887",null)),F=z.exports;o["default"].use(b["a"]);var N=[{path:"/",name:"Home",component:O},{path:"/Women",name:"Women",component:T},{path:"/Add/:id",name:"Add",component:F}],D=new b["a"]({mode:"history",base:"/vue-store/",routes:N}),H=D;n("4de4"),n("7db0"),n("4160"),n("d3b7"),n("159b");o["default"].use(k["a"]);var W=new k["a"].Store({state:{posts:[]},mutations:{updatePosts:function(t,e){t.posts=e},addToCart:function(t,e){t.posts.forEach((function(t){e===t.id&&(t.isAddedToCart=!0)}))},removeFromCart:function(t,e){t.posts.forEach((function(t){e===t.id&&(t.isAddedToCart=!1)}))},setAddedBtn:function(t,e){t.posts.forEach((function(t){e.id===t.id&&(t.isAddedBtn=e.status)}))},showCheckoutModal:function(t,e){t.systemInfo.openCheckoutModal=e}},actions:{fetchPosts:function(t){return Object(_["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/posts");case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,t.commit("updatePosts",o);case 7:case"end":return e.stop()}}),e)})))()}},modules:{},getters:{allPosts:function(t){return t.posts},post:function(t){return function(e){return t.posts.find((function(t){return t.id===e}))}},postsAdded:function(t){return t.posts.filter((function(t){return t.isAddedToCart}))}}}),I=n("5f5b"),J=n("b1e0"),q=n("28dd"),V=n("1881"),Y=n.n(V);o["default"].use(Y.a),o["default"].use(I["a"]),o["default"].use(q["a"]),o["default"].use(J["a"]),o["default"].config.productionTip=!1,o["default"].http.options.root="http://localhost:3000/",new o["default"]({router:H,store:W,render:function(t){return t(v)}}).$mount("#app")},"6ba0":function(t,e,n){"use strict";var o=n("8861"),r=n.n(o);r.a},"72c1":function(t,e,n){},8861:function(t,e,n){},eb66:function(t,e,n){}});
//# sourceMappingURL=app.1566f9cd.js.map