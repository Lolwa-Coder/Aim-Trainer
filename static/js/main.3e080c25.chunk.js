(this["webpackJsonpaim-trainer"]=this["webpackJsonpaim-trainer"]||[]).push([[0],{15:function(t,e,r){"use strict";r.r(e);var c=r(2),a=r(0),s=r(12),o=r.n(s),n=r(24),i=(r(19),r(1));function j(t){t.brightness;var e=t.color;return Object(i.jsx)("rectAreaLight",{width:3,height:3,color:e,intensity:20,position:[-2,0,5],lookAt:[0,0,0],penumbra:1,castShadow:!0})}function h(t){t.brightness;var e=t.color;return Object(i.jsx)("rectAreaLight",{width:3,height:3,intensity:20,color:e,position:[2,1,4],lookAt:[0,0,0],penumbra:2,castShadow:!0})}function l(t){t.brightness;var e=t.color;return Object(i.jsx)("rectAreaLight",{width:2,height:2,intensity:20,color:e,position:[1,4,-2],rotation:[0,180,0],castShadow:!0})}function b(){return Object(i.jsxs)("mesh",{receiveShadow:!0,rotation:[5,0,0],position:[0,-5,0],children:[Object(i.jsx)("planeBufferGeometry",{attach:"geometry",args:[500,500]}),Object(i.jsx)("meshStandardMaterial",{attach:"material",color:"white"})," "]})}function u(){return Object(i.jsxs)("mesh",{receiveShadow:!0,position:[0,-1,-10],children:[Object(i.jsx)("planeBufferGeometry",{attach:"geometry",args:[500,500]}),Object(i.jsx)("meshStandardMaterial",{attach:"material",color:"white"})]})}function O(){var t=Object(a.useState)(0),e=Object(c.a)(t,2),r=e[0],s=e[1];console.log(r);var o=Object(a.useState)("red"),n=Object(c.a)(o,2),j=n[0],h=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("mesh",{visible:!0,userData:{test:"hello"},position:[3*Math.random()-1.5,2*Math.random()-.5,2-10*Math.random()],castShadow:!0,onClick:function(){s(r+1),h("rgb( "+(250-5*r)+","+5*r+","+5*r+")")},children:[Object(i.jsx)("sphereGeometry",{attach:"geometry",args:[.5,16,16]}),Object(i.jsx)("meshStandardMaterial",{attach:"material",color:j,transparent:!0,roughness:.1,metalness:.1})]})})}function d(){var t=Object(a.useState)(!1),e=Object(c.a)(t,2),r=e[0],s=e[1],o=Object(a.useState)(50),d=Object(c.a)(o,2),x=d[0],m=d[1],g=Object(a.useState)(!1),w=Object(c.a)(g,2),p=w[0],f=w[1],S=Object(a.useState)("white"),v=Object(c.a)(S,2),y=v[0],k=v[1];return!1===r?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{onClick:function(){return s(!0)},children:"MicroFlix"}),Object(i.jsxs)("h2",{children:[" ","shoot 50 bullets and we will guess your rank. ps- it gets darker"]})]}):!0===p?Object(i.jsx)("div",{children:Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Click here to see Ur rank"})})}):Object(i.jsxs)("div",{onClick:function(){m(x-1),k("rgb( "+(50+4*x)+","+(50+4*x)+","+(50+4*x)+")"),x<2&&(m(50),f(!0))},children:[Object(i.jsx)("h3",{className:"unselectable",children:x}),Object(i.jsxs)(n.a,{children:[Object(i.jsx)(b,{color:y}),Object(i.jsx)(u,{color:y}),Object(i.jsx)(j,{color:y}),Object(i.jsx)(l,{color:y}),Object(i.jsx)(h,{color:y}),Object(i.jsx)(O,{})]})]})}var x=document.getElementById("root");o.a.render(Object(i.jsx)(d,{}),x)},19:function(t,e,r){}},[[15,1,2]]]);
//# sourceMappingURL=main.3e080c25.chunk.js.map