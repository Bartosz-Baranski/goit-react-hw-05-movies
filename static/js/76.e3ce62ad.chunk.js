"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(e,t,s){s.r(t),s.d(t,{Cast:function(){return u}});var a=s(861),c=s(439),r=s(757),i=s.n(r),n=s(340),l=s(791),o=s(689),d=s(185),m={},h=s(184),u=function(){var e=(0,l.useState)([]),t=(0,c.Z)(e,2),s=t[0],r=t[1],u=(0,o.bx)();return(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.Z.get("https://api.themoviedb.org/3/movie/".concat(u,"/credits?api_key=").concat("0ff4fc9e76b445d056f12e20a2c7c06f","&language=en-US"));case 3:t=e.sent,r(t.data.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[u]),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:m.castTittleBox,children:(0,h.jsx)("h2",{className:m.castTittle,children:"Cast"})}),(0,h.jsx)("div",{className:m.actorsBox,children:s.map((function(e){return(0,h.jsx)("div",{children:e.profile_path?(0,h.jsx)("ul",{className:m.listOfActors,children:(0,h.jsxs)("li",{className:m.movieElement,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.profile_path),alt:e.name}),(0,h.jsx)("p",{className:m.actorName,children:e.name})]},e.id)}):(0,h.jsx)("ul",{className:m.listOfActors,children:(0,h.jsxs)("li",{className:m.movieElement,children:[(0,h.jsx)("div",{className:m.emptyImage,children:(0,h.jsx)(d._Tb,{size:"150px"})}),(0,h.jsx)("div",{children:(0,h.jsx)("p",{className:m.actorName,children:e.name})})]},e.id)})},e.credit_id)}))})]})}}}]);
//# sourceMappingURL=76.e3ce62ad.chunk.js.map