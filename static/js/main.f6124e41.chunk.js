(this["webpackJsonpkeep-app"]=this["webpackJsonpkeep-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(42)},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(9),r=n.n(c),u=(n(35),n(27)),o=n(16),m=(n(36),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Keep App")))}),i=function(){var e=(new Date).getFullYear();return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("p",null,"copyright \xa9 ",e)))},s=n(18),E=n(21),f=n(57),p=n(25),b=n.n(p),d=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(!1),m=Object(o.a)(u,2),i=m[0],p=m[1],d=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(s.a)({},n,a))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_note",onDoubleClick:function(){p(!1)}},l.a.createElement("form",null,i?l.a.createElement("input",{type:"text",name:"title",placeholder:"Title",autoComplete:"off",value:c.title,onChange:d}):null,l.a.createElement("textarea",{rows:"",column:"",name:"content",placeholder:"write a note...",value:c.content,onChange:d,onClick:function(){p(!0)}}),i?l.a.createElement(f.a,{onClick:function(){e.passNote(c),r({title:"",content:""})},className:"mui-button"},l.a.createElement(b.a,{className:"btn_sign"})):null)))},g=n(26),v=n.n(g),h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title," "),l.a.createElement("br",null),l.a.createElement("p",null," ",e.content),l.a.createElement("button",{className:"btn",onClick:function(){e.deleteItem(e.id)}},l.a.createElement(v.a,{className:"deleteIcon"}))))};var j=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(d,{passNote:function(e){c((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(h,{key:t,id:t,title:e.title,content:e.content,deleteItem:r})})),l.a.createElement(i,null))};r.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f6124e41.chunk.js.map