"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{49:function(e,r,n){n.d(r,{e:function(){return s}});var t,a=n(689),u=n(87),c=n(168),o=n(444).ZP.li(t||(t=(0,c.Z)(["\n  padding-bottom: 5px;\n"]))),i=n(184),s=function(e){var r=e.movies,n=(0,a.TH)();return(0,i.jsx)("ul",{children:r.map((function(e){var r=e.title,t=e.id,a=e.name;return(0,i.jsx)(o,{children:(0,i.jsx)(u.Link,{to:"/movies/".concat(t),state:{from:n},children:r||a})},t)}))})}},920:function(e,r,n){n.d(r,{Hg:function(){return o},Pg:function(){return s},q:function(){return i},tx:function(){return v},zv:function(){return p}});var t=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var o=function(){var e=(0,t.Z)(u().mark((function e(){var r,n,t,a,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1?o[1]:void 0,e.prev=2,e.next=5,c.Z.get("/trending/movie/day",{params:{page:r,language:n}});case 5:return t=e.sent,a=t.data,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(2),new Error("Oops, there is no movies");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(){var r,n,t,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,e.next=4,c.Z.get("/search/movie?page=1&query=".concat(r,"&language=en"));case 4:return n=e.sent,t=n.data,e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Oops, there is no movie");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"?language=en"));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/credits?language=en"));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/reviews?language=en"));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},266:function(e,r,n){n.r(r);var t=n(433),a=n(439),u=n(920),c=n(791),o=n(49),i=n(184),s="idle",p="panding",v="rejected",f="resolved";r.default=function(){var e=(0,c.useState)([]),r=(0,a.Z)(e,2),n=r[0],l=r[1],h=(0,c.useState)(s),d=(0,a.Z)(h,2),m=d[0],g=d[1];return(0,c.useEffect)((function(){g(p),(0,u.Hg)().then((function(e){l((0,t.Z)(e.results)),g(f)})).catch((function(e){console.error(e),g(v)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{style:{fontSize:30},children:" Trending Today"}),m===f&&(0,i.jsx)(o.e,{movies:n})]})}}}]);
//# sourceMappingURL=266.33528272.chunk.js.map