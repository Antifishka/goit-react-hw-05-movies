"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[451],{451:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r,a,c,i,s=n(5861),u=n(885),o=n(7757),p=n.n(o),h=n(2791),f=n(7689),l=n(4390),d=n(3524),v=n(168),x=n(6444),g=x.ZP.li(r||(r=(0,v.Z)(["\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), \n   0 1px 1px 0 rgb(0 0 0 / 14%),\n   0 2px 1px -1px rgb(0 0 0 / 12%);\n"]))),m=x.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 4px;\n  text-align: center;\n  font-size: 12px;\n"]))),w=x.ZP.p(c||(c=(0,v.Z)(["\n  margin-top: auto;\n"]))),y=n(184),b=function(e){var t=e.id,n=e.imagePath,r=e.name,a=e.character;return(0,y.jsxs)(g,{children:[(0,y.jsx)("img",{src:n,alt:r,width:"100"}),(0,y.jsxs)(m,{children:[(0,y.jsx)("h4",{children:r}),(0,y.jsxs)(w,{children:["Character:",(0,y.jsx)("br",{}),a]})]})]},t)},Z=x.ZP.ul(i||(i=(0,v.Z)(["\n  padding: 16px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 100px);\n  gap: 16px;\n"]))),k=function(){var e=(0,f.UO)().movieId,t=(0,h.useState)([]),n=(0,u.Z)(t,2),r=n[0],a=n[1];return(0,h.useEffect)((function(){function t(){return(t=(0,s.Z)(p().mark((function t(){var n,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.fetchMovieCredits(e);case 3:n=t.sent,r=n.length>16?n.slice(0,16):n,console.log(r),a(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r?(0,y.jsx)(Z,{children:r.map((function(e){var t=e.id,n=e.profile_path,r=e.original_name,a=e.character;return(0,y.jsx)(b,{id:t,imagePath:n?d.MH+n:d.si,name:r,character:a})}))}):null}},3524:function(e,t,n){n.d(t,{AG:function(){return c},MH:function(){return r},si:function(){return a}});var r="https://image.tmdb.org/t/p/w500",a="https://via.placeholder.com/100x150",c="https://placehold.jp/200x300.png"},4390:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),i=n(1044).ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e09f06c48afcb3ebfd8a25b0b6965d1e",language:"en-US"}});function s(){return(s=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day");case 2:if(t=e.sent,(n=t.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie?query=".concat(t));case 2:if(n=e.sent,(r=n.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits"));case 2:if(n=e.sent,(r=n.data.cast).length){e.next=6;break}throw new Error("Not found cast...");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={fetchTrendingMovies:function(){return s.apply(this,arguments)},fetchMovieById:function(e){return u.apply(this,arguments)},fetchSearchMovies:function(e){return o.apply(this,arguments)},fetchMovieCredits:function(e){return p.apply(this,arguments)},fetchMovieReviews:function(e){return h.apply(this,arguments)}};t.Z=f}}]);
//# sourceMappingURL=451.5a754478.chunk.js.map