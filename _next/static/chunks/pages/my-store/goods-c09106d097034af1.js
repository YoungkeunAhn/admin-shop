(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373],{290:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});r(7294);var t=r(9496),i=r(7655),c=r(282),a=r(1163),s=r(5893),l=[{value:"menu",title:"\uba54\ub274\uba85"},{value:"summary",title:"\uac04\ub2e8\uc124\uba85"}];function o(){var e=(0,a.useRouter)();return(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(c.Z,{color:"primary",variant:"contained",onClick:function(){e.push("/my-store/goods/add-view")},children:"\ucd94\uac00\ud558\uae30"}),(0,s.jsx)(t.Z,{menuList:l,onSearch:function(e,n){alert("type: ".concat(e," value: ").concat(n))}})]})}var u=r(6902);function d(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{}),(0,s.jsx)(u.Z,{})]})}var h=r(591);function m(){return(0,s.jsx)(h.Z,{title:"\uba54\ub274 \uad00\ub9ac",children:(0,s.jsx)(d,{})})}},9496:function(e,n,r){"use strict";r.d(n,{Z:function(){return j}});var t=r(253),i=r(4436),c=r(6394),a=r(4105),s=r(5639),l=r(3426),o=r(282),u=r(7294),d=r(1120),h=r(5154),m=(0,d.Z)((function(e){return(0,h.Z)({root:{},selectForm:{minWidth:120},input:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},btn:{width:100,height:40,"& span":{fontWeight:600}}})})),g=r(5893);function j(e){var n=m(),r=e.onSearch,d=e.menuList,h=(0,u.useState)(""),j=h[0],f=h[1],Z=(0,u.useState)("all"),x=Z[0],p=Z[1];return(0,g.jsxs)(t.Z,{display:"flex",children:[(0,g.jsxs)(i.Z,{size:"small",variant:"outlined",className:n.selectForm,children:[(0,g.jsx)(c.Z,{disableAnimation:!0}),(0,g.jsxs)(a.Z,{onChange:function(e){p(e.target.value)},value:x,children:[(0,g.jsx)(s.Z,{value:"all",children:"\uc804\uccb4"}),d.map((function(e,n){return(0,g.jsx)(s.Z,{value:e.value,children:e.title},n)}))]})]}),(0,g.jsx)(l.Z,{size:"small",variant:"outlined",className:n.input,value:j,onChange:function(e){f(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&r(j,x)}}),(0,g.jsx)(o.Z,{variant:"contained",color:"primary",size:"small",className:n.btn,onClick:function(){return r(j,x)},children:"\uac80\uc0c9"})]})}},7655:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(9895),i=r(6010),c=(r(7294),r(1120)),a=r(5154),s=(0,c.Z)((function(e){return(0,a.Z)({root:{padding:e.spacing(2,1),marginBottom:e.spacing(4),display:"flex",justifyContent:"space-between",alignItems:"center"}})})),l=r(5893);function o(e){var n=e.children,r=e.className,c=s();return(0,l.jsx)(t.Z,{className:(0,i.Z)(c.root,r),children:n})}},6902:function(e,n,r){"use strict";r.d(n,{Z:function(){return O},t:function(){return b}});var t=r(9499),i=r(1649),c=r(2302),a=r(3750),s=r(7394),l=r(8222),o=r(9613),u=r(7294),d=r(253),h=r(7812),m=r(4319),g=r(4722),j=r(1120),f=r(5154),Z=(0,j.Z)((function(e){return(0,f.Z)({root:{},imgBox:{width:140,height:85,margin:e.spacing(0,"auto"),"& img":{width:"100%",height:"100%",objectFit:"contain"}}})})),x=r(5893);function p(e){var n=e.seq,r=e.image,t=e.name,i=e.summary,c=e.price,a=e.sale,o=e.date,u=e.hidden,j=e.onRemove,f=Z();return(0,x.jsxs)(s.Z,{children:[(0,x.jsx)(l.Z,{align:"center",children:n}),(0,x.jsx)(l.Z,{align:"center",children:(0,x.jsx)(d.Z,{className:f.imgBox,children:(0,x.jsx)("img",{src:0!==r.length?"/".concat(r):"/noImage.png",alt:"thumbnail image"})})}),(0,x.jsx)(l.Z,{align:"center",children:t}),(0,x.jsx)(l.Z,{align:"center",style:{minWidth:200},children:i}),(0,x.jsxs)(l.Z,{align:"center",children:[c,"\uc6d0"]}),(0,x.jsx)(l.Z,{align:"center",children:0!==a?"".concat(a,"%"):"-"}),(0,x.jsx)(l.Z,{align:"center",children:o}),(0,x.jsx)(l.Z,{align:"center",children:0===u?"\uc228\uae40":"\uac8c\uc2dc\uc911"}),(0,x.jsx)(l.Z,{align:"center",children:(0,x.jsx)(h.Z,{size:"small",children:(0,x.jsx)(m.Z,{fontSize:"small",color:"primary"})})}),(0,x.jsx)(l.Z,{align:"center",children:(0,x.jsx)(h.Z,{size:"small",onClick:function(){return j(t)},children:(0,x.jsx)(g.Z,{fontSize:"small"})})})]})}function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?v(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var b=[{image:"original_chicken.jpg",name:"\uc624\ub9ac\uc9c0\ub110 \uce58\ud0a8",summary:"\uae30\ubcf8 \uba54\ub274 \uc785\ub2c8\ub2e4.",date:"2021-01-01",price:19e3,sale:10,hidden:1},{image:"source_chicken.png",name:"\uc591\ub150 \uce58\ud0a8",summary:"\uae30\ubcf8 \uba54\ub274 \uc785\ub2c8\ub2e4.",date:"2021-01-01",price:2e4,sale:10,hidden:1},{image:"ganjang_chicken.jpg",name:"\uac04\uc7a5 \uce58\ud0a8",summary:"\uae30\ubcf8 \uba54\ub274 \uc785\ub2c8\ub2e4.",date:"2021-01-01",price:2e4,sale:0,hidden:1},{image:"oven_chicken.jpg",name:"\uc624\ube10 \uce58\ud0a8",summary:"\uae30\ubcf8 \uba54\ub274 \uc785\ub2c8\ub2e4.",date:"2021-01-01",price:21e3,sale:10,hidden:1}];function O(){var e=(0,u.useState)(b),n=e[0],r=e[1],t=function(e){confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&r(n.filter((function(n){return n.name!==e})))};return(0,x.jsx)(i.Z,{children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(a.Z,{children:(0,x.jsxs)(s.Z,{children:[(0,x.jsx)(l.Z,{align:"center",children:"NO"}),(0,x.jsx)(l.Z,{align:"center",children:"\uc378\ub124\uc77c \uc774\ubbf8\uc9c0"}),(0,x.jsx)(l.Z,{align:"center",children:"\uba54\ub274\uba85"}),(0,x.jsx)(l.Z,{align:"center",children:"\uac04\ub2e8 \uc124\uba85"}),(0,x.jsx)(l.Z,{align:"center",children:"\uac00\uaca9"}),(0,x.jsx)(l.Z,{align:"center",children:"\ud560\uc778\uc728"}),(0,x.jsx)(l.Z,{align:"center",children:"\ub4f1\ub85d\uc77c"}),(0,x.jsx)(l.Z,{align:"center",children:"\uac8c\uc2dc \uc0c1\ud0dc"}),(0,x.jsx)(l.Z,{align:"center",children:"\uc218\uc815"}),(0,x.jsx)(l.Z,{align:"center",children:"\uc0ad\uc81c"})]})}),(0,x.jsx)(o.Z,{children:n.map((function(e,n){return(0,x.jsx)(p,y(y({seq:n+1},e),{},{onRemove:t}),n)}))})]})})}},2418:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-store/goods",function(){return r(290)}])}},function(e){e.O(0,[312,426,289,931,893,774,888,179],(function(){return n=2418,e(e.s=n);var n}));var n=e.O();_N_E=n}]);