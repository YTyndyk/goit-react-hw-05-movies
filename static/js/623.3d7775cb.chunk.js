"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{49:function(e,t,r){r.d(t,{e:function(){return s}});var n,a=r(689),u=r(87),c=r(168),o=r(444).ZP.li(n||(n=(0,c.Z)(["\n  padding-bottom: 5px;\n"]))),i=r(184),s=function(e){var t=e.movies,r=(0,a.TH)();return(0,i.jsx)("ul",{children:t.map((function(e){var t=e.title,n=e.id,a=e.name;return(0,i.jsx)(o,{children:(0,i.jsx)(u.Link,{to:"/movies/".concat(n),state:{from:r},children:t||a})},n)}))})}},920:function(e,t,r){r.d(t,{Hg:function(){return o},Pg:function(){return s},q:function(){return i},tx:function(){return v},zv:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n,a,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,r=o.length>1?o[1]:void 0,e.prev=2,e.next=5,c.Z.get("/trending/movie/day",{params:{page:t,language:r}});case 5:return n=e.sent,a=n.data,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(2),new Error("Oops, there is no movies");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,e.next=4,c.Z.get("/search/movie?page=1&query=".concat(t,"&language=en"));case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Oops, there is no movie");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"?language=en"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/credits?language=en"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/reviews?language=en"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Oops, there is no movie");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},623:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n,a=r(433),u=r(439),c=r(791),o=r(920),i=r(168),s=r(444).ZP.input(n||(n=(0,i.Z)(["\n  height: 25px;\n  font-size: 20px;\n  margin-right: 10px;\n"]))),p=r(184),v=function(e){var t=e.onSubmit;return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.target.elements.query;r.value?(t(r.value),e.target.reset()):alert("Plese, fill the input!")},children:[(0,p.jsx)(s,{type:"text",name:"query",required:!0}),(0,p.jsx)("button",{style:{height:31,fontSize:20},type:"submit",children:"Search movie"})]})},f=r(87),l=r(49),h="idle",d="panding",m="rejected",g="resolved",x=function(){var e=(0,c.useState)([]),t=(0,u.Z)(e,2),r=t[0],n=t[1],i=(0,c.useState)(h),s=(0,u.Z)(i,2),x=s[0],w=s[1],Z=(0,f.useSearchParams)(),b=(0,u.Z)(Z,2),y=b[0],k=b[1];(0,c.useEffect)((function(){var e=y.get("query");e&&(w(d),(0,o.q)(e).then((function(e){n((0,a.Z)(e.results)),w(g)})).catch((function(e){console.error(e),w(m)})))}),[y]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{onSubmit:function(e){k({query:e})}}),x===d&&(0,p.jsx)("p",{children:"Loading..."}),x===g&&(0,p.jsx)(l.e,{movies:r})]})}}}]);
//# sourceMappingURL=623.3d7775cb.chunk.js.map