"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{65:function(e,a,n){n.d(a,{Z:function(){return ue}});var s=n(439),t=n(433),r=n(791),i="CarItem_carItem__peU5j",c="CarItem_infoWrapper__ypM1R",l="CarItem_basicInfo__0ECZx",o="CarItem_carTitle__1ussX",d="CarItem_carTitleAccent__zeMR4",m="CarItem_extraInfo__87Rj7",u="CarItem_extraInfoText__wIzKC",_="CarItem_moreInfoButton__+11p3",f="ModalWindow_backdrop__uHatM",h="ModalWindow_open__HmxZK",x="ModalWindow_modal__oBSLx",j="ModalWindow_closeButton__UMzUb",p="ModalWindow_closeButtonIcon__rzcMB",g="ModalWindow_carImg__UNG7u",v="ModalWindow_carTitle__aXvFu",N="ModalWindow_extraInfoText__OmsDH",I="ModalWindow_carDescription__YFcKI",C="ModalWindow_carSybTitle__umm3Q",w="ModalWindow_conditionsList__5uIE-",S="ModalWindow_conditionsItem__8tm0R",y="ModalWindow_rentalButton__ZaufS",b=n.p+"static/media/placeholder.812d057bb23f080130a7.jpeg",M=n(820),W=n(184),k=f,Z=h,T=x,z=j,E=p,B=g,O=v,L=N,F=I,J=C,R=w,P=S,H=y;function K(e){var a=e.isOpen,n=void 0!==a&&a,t=e.onClose,i=e.car,c=i.id,l=i.year,o=i.make,d=i.model,m=i.type,u=i.img,_=i.description,f=i.accessories,h=i.functionalities,x=i.rentalPrice,j=i.engineSize,p=i.fuelConsumption,g=i.rentalConditions,v=i.address,N=i.mileage;(0,r.useEffect)((function(){return document.body.style.overflow="hidden",function(){return document.body.style.overflow="unset"}}),[]),(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);var I=g.split("\n"),C=I[0].split(": "),w=(0,s.Z)(C,2),S=w[0],y=w[1],K=v.split(","),U=(0,s.Z)(K,3),Y=U[1],A=U[2],D=n?"".concat(k," ").concat(Z):k;return(0,W.jsx)("div",{className:D,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,W.jsxs)("div",{className:T,children:[(0,W.jsx)("button",{className:z,type:"button",onClick:t,children:(0,W.jsx)(M.oHP,{size:20,className:E})}),(0,W.jsx)("img",{src:null!==u&&void 0!==u?u:b,alt:u?"View of the car for rent":"There is no available image",className:B}),(0,W.jsxs)("h3",{className:O,children:[o," ",(0,W.jsx)("span",{children:d}),", ",l]}),(0,W.jsxs)("ul",{children:[(0,W.jsxs)("li",{className:L,children:[Y," | ",A," | Id: ",c," | Year: ",l," | Type: ",m]}),(0,W.jsxs)("li",{className:L,children:["Fuel Consumption: ",p," | Engine Size: ",j]})]}),(0,W.jsx)("p",{className:F,children:_}),(0,W.jsx)("h4",{className:J,children:"Accessories and functionalities:"}),(0,W.jsxs)("ul",{children:[(0,W.jsxs)("li",{className:L,children:[f.map((function(e,a){return a!==f.length-1?"".concat(e," | "):e}))," "]}),(0,W.jsx)("li",{className:L,children:h.map((function(e,a){return a!==f.length-1?"".concat(e," | "):e}))})]}),(0,W.jsx)("h4",{className:J,children:"Rental Conditions:"}),(0,W.jsxs)("ul",{className:R,children:[(0,W.jsxs)("li",{className:P,children:[S,": ",(0,W.jsx)("span",{children:y})]}),I.map((function(e,a){return 0!==a&&(0,W.jsx)("li",{className:P,children:e},e)})),(0,W.jsxs)("li",{className:P,children:["Mileage: ",(0,W.jsx)("span",{children:Intl.NumberFormat("en").format(N)})]}),(0,W.jsxs)("li",{className:P,children:["Price: ",(0,W.jsxs)("span",{children:[x.split("$"),"$"]})]})]}),(0,W.jsx)("a",{href:"tel:+380730000000",className:H,children:"Rental car"})]})})}var U="CarItemImg_carImgWrapper__TAdII",Y="CarItemImg_carImg__+2kig",A="CarItemImg_carImgOverlay__Pzgr-",D="CarItemImg_favoriteBtn__DBIvK",X="CarItemImg_favoriteIcon__uNBs2",q=n(856),G=U,V=Y,$=A,Q=D,ee=X,ae=i,ne=c,se=l,te=o,re=d,ie=m,ce=u,le=_;function oe(e){var a=e.car,n=e.onToggle,i=e.favCars,c=(0,r.useState)(!1),l=(0,s.Z)(c,2),o=l[0],d=l[1],m=(0,r.useState)(!1),u=(0,s.Z)(m,2),_=u[0],f=u[1],h=a.id,x=a.year,j=a.make,p=a.model,g=a.type,v=a.img,N=a.functionalities,I=a.rentalPrice,C=a.rentalCompany,w=a.address,S=a.mileage;(0,r.useEffect)((function(){JSON.parse(localStorage.getItem("favorites")).map((function(e){return e.id===h&&f(!0),!0}))}),[h]);var y=w.split(","),M=(0,s.Z)(y,3),k=M[1],Z=M[2],T=function(){d(!o)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("li",{className:ae,children:[(0,W.jsxs)("div",{children:[(0,W.jsxs)("div",{className:G,children:[(0,W.jsx)("img",{src:null!==v&&void 0!==v?v:b,className:V,alt:v?"View of the car for rent":"There is no available image"}),(0,W.jsx)("div",{className:$}),(0,W.jsx)("button",{className:Q,onClick:function(){if(f(!_),_||n((function(e){return[].concat((0,t.Z)(e),[a])})),i.map((function(e){return e.id})).includes(h)){var e=JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.id!==h}));localStorage.setItem("favorites",JSON.stringify(e)),0===e.length&&localStorage.removeItem("favorites"),n((function(e){return e.filter((function(e){return e.id!==h}))})),f(!1)}},children:_?(0,W.jsx)(q.Yqy,{size:20,className:ee}):(0,W.jsx)(q.iqB,{size:20,color:"#fff"})})]}),(0,W.jsxs)("div",{className:ne,children:[(0,W.jsxs)("div",{className:se,children:[(0,W.jsxs)("h3",{className:te,children:[j," ",p.length>12||j.length>12?(0,W.jsx)("br",{}):"",(0,W.jsx)("span",{className:re,children:p}),", ",x]}),(0,W.jsx)("p",{className:te,children:I})]}),(0,W.jsxs)("div",{className:ie,children:[(0,W.jsxs)("p",{className:ce,children:[k," | ",Z," | ",C]}),(0,W.jsxs)("p",{className:ce,children:[g," | ",p," | ",S," |"," ",N[0].length>25?"".concat(N[0].slice(0,25),"..."):N[0]]})]})]})]}),(0,W.jsx)("button",{className:le,onClick:T,children:"Learn more"})]}),o&&(0,W.jsx)(K,{isOpen:o,onClose:T,car:a})]})}var de="CarsList_carsList__1WELz",me=n(409);function ue(e){var a=e.cars,n=(0,r.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("favorites")))&&void 0!==e?e:[]})),t=(0,s.Z)(n,2),i=t[0],c=t[1];return(0,r.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(i))}),[i]),(0,W.jsx)("section",{children:(0,W.jsx)(me.Z,{children:(0,W.jsx)("ul",{className:de,children:a&&a.map((function(e,a){return(0,W.jsx)(oe,{car:e,onToggle:c,favCars:i},e.id+"".concat(a))}))})})})}},361:function(e,a,n){n.r(a),n.d(a,{default:function(){return _}});var s=n(439),t=n(65),r=n(791),i="NoContentFav_background__GJTWR",c="NoContentFav_text__WzL4X",l=n(409),o=n(184),d=i,m=c;function u(){return(0,o.jsx)("section",{className:d,children:(0,o.jsx)(l.Z,{children:(0,o.jsx)("p",{className:m,children:"You haven't added any cars to your favorites"})})})}function _(){var e=(0,r.useState)([]),a=(0,s.Z)(e,2),n=a[0],i=a[1];return(0,r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"));i(e)}),[]),(0,o.jsx)(o.Fragment,{children:n.length>0?(0,o.jsx)(t.Z,{cars:n}):(0,o.jsx)(u,{})})}}}]);
//# sourceMappingURL=680.c6738948.chunk.js.map