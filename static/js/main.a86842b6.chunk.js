(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{428:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(57),i=n.n(s),r=n(25),o=(n(98),n(11)),l=n(19),j=n(88),u=n.n(j),b=n(3),d=function(e){var t=e.value,n=e.img;return Object(b.jsx)(r.b,{to:"/".concat(t),children:Object(b.jsx)(u.a,{className:"Tilt",options:{reverse:!0,speed:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",reset:!0,transition:!0,scale:1},children:Object(b.jsx)("div",{className:"operation-btn ",children:n})})})},p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:"home",children:[Object(b.jsx)("h1",{children:"CALCULATOR"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{value:"add",img:Object(b.jsx)(l.e,{})}),Object(b.jsx)(d,{value:"subtract",img:Object(b.jsx)(l.c,{})}),Object(b.jsx)(d,{value:"multiply",img:Object(b.jsx)(l.g,{})}),Object(b.jsx)(d,{value:"divide",img:Object(b.jsx)(l.a,{})})]})]})})},O=function(){return Object(b.jsx)("section",{className:"home",children:Object(b.jsx)("h1",{children:"404 page not found"})})},m=n(90),h=n(31),x=a.a.createContext(),f=function(e){var t=e.children,n=Object(c.useState)(0),a=Object(h.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(0),o=Object(h.a)(r,2),l=o[0],j=o[1],u=Object(c.useState)("Adding"),d=Object(h.a)(u,2),p=d[0],O=d[1],m=Object(c.useState)(0),f=Object(h.a)(m,2),v=f[0],g=f[1];return Object(b.jsx)(x.Provider,{value:{firstNumber:s,setFirstNumber:i,secondNumber:l,setSecondNumber:j,operator:p,setOperator:O,answer:v,setAnswer:g},children:t})},v=function(e){var t=e.operation,n=void 0===t?"Adding":t,a=Object(c.useContext)(x),s=a.firstNumber,i=a.secondNumber,o=a.setFirstNumber,j=a.setSecondNumber,u=a.operator,d=a.setOperator,p=a.answer,O=a.setAnswer,h=Object(c.useRef)(null);return Object(c.useEffect)((function(){d(n),o(0),j(0),"Dividing"===n&&(o(1),j(1))}),[n,o,d,j]),Object(c.useEffect)((function(){switch(u){case"Adding":O(s+i);break;case"Subtracting":O(s-i);break;case"Multiplying":O(s*i);break;case"Dividing":0===i?(alert("Dividing By Zero Not Allowed"),O("infinity")):O(parseFloat(s/i));break;default:o(0),j(0),O(0)}}),[s,i,u,o,j,O]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{children:Object(b.jsxs)("title",{children:[n," - Calculator"]})}),Object(b.jsxs)("section",{className:"layout",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)(l.b,{className:"home-icon"})}),Object(b.jsxs)("h1",{children:[n," Two Numbers"]}),Object(b.jsxs)("div",{className:"number-inputs",children:[Object(b.jsxs)("div",{className:"quantity",children:[Object(b.jsx)("input",{type:"number",placeholder:"0",value:s,onChange:function(e){e.preventDefault(),o(parseInt(e.target.value))},ref:h}),Object(b.jsxs)("div",{className:"button-div",children:[Object(b.jsx)(l.d,{onClick:function(e){e.preventDefault(),o(s-1)}}),Object(b.jsx)(l.f,{onClick:function(e){e.preventDefault(),o(s+1)}})]})]}),Object(b.jsxs)("div",{className:"quantity",children:[Object(b.jsx)("input",{type:"number",placeholder:"0",value:i,onChange:function(e){e.preventDefault(),j(parseInt(e.target.value))}}),Object(b.jsxs)("div",{className:"button-div",children:[Object(b.jsx)(l.d,{onClick:function(e){e.preventDefault(),j(i-1)}}),Object(b.jsx)(l.f,{onClick:function(e){e.preventDefault(),j(i+1)}})]})]})]}),Object(b.jsxs)("div",{className:"answer-div",children:[Object(b.jsx)("button",{className:"btn-operation",children:"Answer"}),Object(b.jsx)("h2",{children:p})]})]})]})},g=n(93),N=n.n(g),y={particles:{number:{value:156,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:0,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:0,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},w=n.p+"static/media/astronaut-1.29efc8d5.png",k=n.p+"static/media/moon.32026a29.png",C=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N.a,{className:"particles",params:y}),Object(b.jsx)("img",{src:w,alt:"Astronaut waving hand",className:"Pic1"}),Object(b.jsx)("img",{src:k,alt:"moon",className:"Pic2"})]})};var A=function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/gh-pages-url",component:p}),Object(b.jsx)(o.a,{path:"/calculator-react-project/add",render:function(){return Object(b.jsx)(v,{operation:"Adding"})}}),Object(b.jsx)(o.a,{path:"/calculator-react-project/subtract",render:function(){return Object(b.jsx)(v,{operation:"Subtracting"})}}),Object(b.jsx)(o.a,{path:"/calculator-react-project/multiply",render:function(){return Object(b.jsx)(v,{operation:"Multiplying"})}}),Object(b.jsx)(o.a,{path:"/calculator-react-project/divide",render:function(){return Object(b.jsx)(v,{operation:"Dividing"})}}),Object(b.jsx)(o.a,{path:"*",component:O})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,429)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(f,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(A,{})})}),document.getElementById("root")),D()},98:function(e,t,n){}},[[428,1,2]]]);
//# sourceMappingURL=main.a86842b6.chunk.js.map