"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[649],{649:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var n=t(439),a=t(689),c=t(791),u=t(920),o=t(184),s=function(e){var r=e.credits;return(0,o.jsx)("ul",{style:{paddingLeft:20},children:r.map((function(e){var r=e.cast_id,t=e.profile_path,n=e.original_name,a=e.character;return(0,o.jsxs)("li",{style:{width:150},children:[(0,o.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://www.shutterstock.com/image-vector/no-image-available-vector-hand-600w-745639717.jpg",alt:n}),(0,o.jsx)("p",{children:n}),(0,o.jsxs)("p",{children:["Character: ",a]})]},r)}))})},i=function(){var e=(0,c.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],p=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.zv)(p).then((function(e){var r=e.cast;return i(r)}))}),[p]),t.length>0?(0,o.jsx)(s,{credits:t}):(0,o.jsx)("p",{children:"We no have cast for this movie"})}},920:function(e,r,t){t.d(r,{Hg:function(){return o},Pg:function(){return i},q:function(){return s},tx:function(){return v},zv:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var o=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:1,t=o.length>1?o[1]:void 0,e.prev=2,e.next=5,u.Z.get("/trending/movie/day",{params:{page:r,language:t}});case 5:return n=e.sent,a=n.data,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(2),new Error("Oops, there is no movies");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,e.next=4,u.Z.get("/search/movie?page=1&query=".concat(r,"&language=en"));case 4:return t=e.sent,n=t.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Oops, there is no movie");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"?language=en"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/credits?language=en"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(r,"/reviews?language=en"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=649.16424a7f.chunk.js.map