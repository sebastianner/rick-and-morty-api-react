(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{24:function(t,e,c){},35:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),r=c(17),s=c.n(r),i=(c(24),c(3)),o=c(4),j=c(6),l=c(5),u=c(9),d=c(2),h=c(0);var b=function(t){return Object(h.jsx)("div",{className:"mb-6",children:Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("img",{className:"m-0 m-auto",src:"https://lyricstranslate.com/files/styles/large/public/Rick_and_Morty_logo.png?itok=5No-A7PV",alt:"rick and morty"})})})};var O=function(t){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(b,{}),t.children]})},p=c(10),x=c.n(p),m=c(12),f=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)(n.a.Fragment,{children:Object(h.jsxs)("div",{className:"relative w-60 rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500",children:[Object(h.jsx)("img",{className:"object-fill",src:this.props.character.image,alt:""}),Object(h.jsx)("div",{className:"absolute bottom-0 p-1 w-full bg-gray-900 bg-opacity",children:Object(h.jsx)("h1",{className:"mt-4 text-2xl text-white",children:this.props.character.name})})]})})}}]),c}(a.Component),v=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this;return Object(h.jsx)(n.a.Fragment,{children:this.props.state.data.results.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/".concat(e.id),children:Object(h.jsx)(f,{character:e,state:t.props.state})})},e.id)}))})}}]),c}(a.Component),g=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)(n.a.Fragment,{children:Object(h.jsxs)("div",{className:"lds-roller",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})}}]),c}(a.Component);var y=function(t){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("ul",{className:"grid grid-col justify-center gap-5",children:Object(h.jsx)(v,{state:t.state})}),t.state.loading&&Object(h.jsx)("div",{className:"flex justify-center mt-10",children:Object(h.jsx)(g,{})})]})},k=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(t){var a;return Object(i.a)(this,c),(a=e.call(this,t)).fetchCharacters=Object(m.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({loading:!0,error:null}),t.prev=1,t.next=4,fetch("https://rickandmortyapi.com/api/character?page=".concat(a.state.nextPage)).then((function(t){return t.json()}));case 4:e=t.sent,a.setState({data:{info:e.info,results:[].concat(a.state.data.results,e.results)},loading:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),a.state={nextPage:1,loading:!0,error:null,data:{results:[]}},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.fetchCharacters(),window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-1&&(t.setState({nextPage:"".concat(parseInt(t.state.nextPage)+1)}),t.fetchCharacters())}}},{key:"render",value:function(){return this.state.data.results===[]?"Error: No data was found":this.state.error?"Error: ".concat(this.state.error.message):Object(h.jsx)(y,{state:this.state})}}]),c}(a.Component),w=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this.props.state.data,e=Object.keys(t);return this.props.state.loading?Object(h.jsx)("div",{className:"vh flex justify-center items-center",children:Object(h.jsx)(g,{})}):Object(h.jsx)(n.a.Fragment,{children:Object(h.jsxs)("div",{className:"flex justify-center gap-20 mt-10",children:[Object(h.jsxs)("div",{className:"flex flex-col justify-center",children:[Object(h.jsx)("h2",{children:"".concat(e[1]," : ").concat(t.name)}),"Alive"===t.status?Object(h.jsx)("p",{children:"".concat(e[2]," : ").concat(t.status)}):Object(h.jsx)("p",{className:"text-red-600",children:"".concat(e[2]," : ").concat(t.status)}),Object(h.jsx)("p",{children:"".concat(e[3]," : ").concat(t.species)}),Object(h.jsx)("p",{children:"".concat(e[5]," : ").concat(t.gender)}),Object(h.jsx)("p",{children:"".concat(e[6]," : ").concat(t.origin.name)}),Object(h.jsx)("p",{children:"".concat(e[7]," : ").concat(t.location.name)})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:t.image,alt:"".concat(t.name," Image")})})]})})}}]),c}(a.Component),N=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(t){var a;return Object(i.a)(this,c),(a=e.call(this,t)).fetchCharacter=Object(m.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://rickandmortyapi.com/api/character/".concat(a.props.match.params.charid)).then((function(t){return t.json()}));case 3:e=t.sent,a.setState({data:e,loading:!1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a.setState({loading:!1,error:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),a.state={data:{},loading:!0,error:null},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.fetchCharacter()}},{key:"render",value:function(){return Object(h.jsx)(w,{state:this.state})}}]),c}(a.Component),C=function(t){Object(j.a)(c,t);var e=Object(l.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)(u.a,{children:Object(h.jsx)(O,{children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",component:k}),Object(h.jsx)(d.a,{exact:!0,path:"/:charid",component:N})]})})})}}]),c}(n.a.Component);s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e6c71af4.chunk.js.map