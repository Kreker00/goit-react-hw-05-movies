"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[710],{713:(n,e,t)=>{t.d(e,{Hx:()=>l,Y5:()=>s,cl:()=>i,wr:()=>o,xc:()=>c});var a=t(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3";const r="api_key=8f33823ca84e1a0e665e0e760de9426d",o=async()=>{const{data:n}=await a.Z.get("/trending/movie/day?".concat(r));return n},i=async n=>{const{data:e}=await a.Z.get("/search/movie?".concat(r,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));return e},s=async n=>{const{data:e}=await a.Z.get("/movie/".concat(n,"?").concat(r,"&language=en-US"));return e},c=async n=>{const{data:e}=await a.Z.get("/movie/".concat(n,"/credits?").concat(r,"&language=en-US"));return e.cast},l=async n=>{const{data:e}=await a.Z.get("/movie/".concat(n,"/reviews?").concat(r,"&language=en-US"));return e.results}},710:(n,e,t)=>{t.r(e),t.d(e,{default:()=>B});var a,r,o,i,s,c,l,d,x,p,h,g,u=t(791),m=t(689),v=t(87),Z=t(713),f=t(168),j=t(978);const w=j.ZP.div(a||(a=(0,f.Z)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),b=(j.ZP.button(r||(r=(0,f.Z)(["\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n"]))),j.ZP.div(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n"])))),y=j.ZP.img(i||(i=(0,f.Z)(["\n  height: auto;\n  max-width: 300px;\n  height: auto;\n  margin-right: 20px;\n"]))),P=j.ZP.h2(s||(s=(0,f.Z)(["\n  margin: 10px 0;\n"]))),k=j.ZP.p(c||(c=(0,f.Z)(["\n  margin: 5px 0;\n"]))),U=j.ZP.span(l||(l=(0,f.Z)(["\n  margin: 10px 0;\n"]))),_=j.ZP.span(d||(d=(0,f.Z)(["\n  margin: 10px 0;\n"]))),S=j.ZP.div(x||(x=(0,f.Z)(["\n  margin-top: 20px;\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]))),C=j.ZP.h3(p||(p=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),R=j.ZP.ul(h||(h=(0,f.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 10px;\n"]))),q=j.ZP.li(g||(g=(0,f.Z)(["\n  margin-bottom: 10px;\n"])));var A,E;const H=j.ZP.button(A||(A=(0,f.Z)(["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-bottom: 5px;\n\n  :hover {\n    color: white;\n    background-color: tomato;\n  }\n"]))),O=(0,j.ZP)(v.rU)(E||(E=(0,f.Z)(["\n  text-decoration: none;\n"])));var Y=t(184);const z=n=>{let{to:e}=n;return(0,Y.jsx)(O,{to:e,children:(0,Y.jsx)(H,{children:" Come Back"})})},B=()=>{var n,e;const{movieId:t}=(0,m.UO)(),a=(0,m.TH)(),[r,o]=(0,u.useState)(null),i=(0,u.useRef)(a);if((0,u.useEffect)((()=>{(async()=>{try{const n=await(0,Z.Y5)(t);o(n)}catch(n){console.error("Error fetching movie details:",n.message)}})()}),[t]),!r)return;const{poster_path:s,title:c,genres:l,overview:d,vote_average:x,release_date:p}=r;return(0,Y.jsxs)(w,{children:[(0,Y.jsx)(z,{to:null!==(n=null===(e=i.current.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"}),(0,Y.jsxs)(b,{children:[(0,Y.jsx)("div",{children:(0,Y.jsx)(y,{src:s?"https://image.tmdb.org/t/p/w300".concat(s):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:c})}),(0,Y.jsxs)("div",{children:[(0,Y.jsxs)(P,{children:[c," ",null===p||void 0===p?void 0:p.substr(0,4)]}),(0,Y.jsxs)(k,{children:["User Score: ",Math.floor(10*x),"%"]}),(0,Y.jsxs)(U,{children:[(0,Y.jsx)("h2",{children:"Overview"}),(0,Y.jsx)("p",{children:d})]}),(0,Y.jsxs)(_,{children:[(0,Y.jsx)("h2",{children:"Genres"}),(0,Y.jsx)("ul",{children:l.map((n=>{let{id:e,name:t}=n;return(0,Y.jsx)("li",{children:t},e)}))})]})]})]}),(0,Y.jsxs)(S,{children:[(0,Y.jsx)(C,{children:"Additional information"}),(0,Y.jsxs)(R,{children:[(0,Y.jsx)(q,{children:(0,Y.jsx)(v.rU,{to:"cast",children:"Cast"})}),(0,Y.jsx)(q,{children:(0,Y.jsx)(v.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,Y.jsx)(m.j3,{})]})}}}]);
//# sourceMappingURL=710.983dc0e6.chunk.js.map