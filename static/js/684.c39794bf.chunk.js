"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{2065:function(e,a,n){n.d(a,{Z:function(){return me}});var r=n(9439),l=n(3433),t=n(2791),s="CarItem_carItem__peU5j",i="CarItem_infoWrapper__ypM1R",c="CarItem_basicInfo__0ECZx",o="CarItem_carTitle__1ussX",u="CarItem_carTitleAccent__zeMR4",d="CarItem_extraInfo__87Rj7",m="CarItem_extraInfoText__wIzKC",f="CarItem_moreInfoButton__+11p3",v="ModalWindow_backdrop__uHatM",_="ModalWindow_open__HmxZK",h="ModalWindow_modal__oBSLx",b="ModalWindow_closeButton__UMzUb",p="ModalWindow_closeButtonIcon__rzcMB",x="ModalWindow_carImg__UNG7u",j="ModalWindow_carTitle__aXvFu",g="ModalWindow_extraInfoText__OmsDH",N="ModalWindow_carDescription__YFcKI",I="ModalWindow_carSybTitle__umm3Q",C="ModalWindow_conditionsList__5uIE-",w="ModalWindow_conditionsItem__8tm0R",y="ModalWindow_rentalButton__ZaufS",S=n.p+"static/media/placeholder.812d057bb23f080130a7.jpeg",Z=n(8820),k=n(184),M=v,F=_,B=h,L=b,E=p,W=x,z=j,T=g,P=N,R=I,O=C,K=w,A=y;function H(e){var a=e.isOpen,n=void 0!==a&&a,l=e.onClose,s=e.car,i=s.id,c=s.year,o=s.make,u=s.model,d=s.type,m=s.img,f=s.description,v=s.accessories,_=s.functionalities,h=s.rentalPrice,b=s.engineSize,p=s.fuelConsumption,x=s.rentalConditions,j=s.address,g=s.mileage;(0,t.useEffect)((function(){return document.body.style.overflow="hidden",function(){return document.body.style.overflow="unset"}}),[]),(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&l()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[l]);var N=x.split("\n"),I=N[0].split(": "),C=(0,r.Z)(I,2),w=C[0],y=C[1],H=j.split(","),J=(0,r.Z)(H,3),U=J[1],G=J[2],$=n?"".concat(M," ").concat(F):M;return(0,k.jsx)("div",{className:$,onClick:function(e){e.currentTarget===e.target&&l()},children:(0,k.jsxs)("div",{className:B,children:[(0,k.jsx)("button",{className:L,type:"button",onClick:l,children:(0,k.jsx)(Z.oHP,{size:20,className:E})}),(0,k.jsx)("img",{src:null!==m&&void 0!==m?m:S,alt:m?"View of the car for rent":"There is no available image",className:W}),(0,k.jsxs)("h3",{className:z,children:[o," ",(0,k.jsx)("span",{children:u}),", ",c]}),(0,k.jsxs)("ul",{children:[(0,k.jsxs)("li",{className:T,children:[U," | ",G," | Id: ",i," | Year: ",c," | Type: ",d]}),(0,k.jsxs)("li",{className:T,children:["Fuel Consumption: ",p," | Engine Size: ",b]})]}),(0,k.jsx)("p",{className:P,children:f}),(0,k.jsx)("h4",{className:R,children:"Accessories and functionalities:"}),(0,k.jsxs)("ul",{children:[(0,k.jsxs)("li",{className:T,children:[v.map((function(e,a){return a!==v.length-1?"".concat(e," | "):e}))," "]}),(0,k.jsx)("li",{className:T,children:_.map((function(e,a){return a!==v.length-1?"".concat(e," | "):e}))})]}),(0,k.jsx)("h4",{className:R,children:"Rental Conditions:"}),(0,k.jsxs)("ul",{className:O,children:[(0,k.jsxs)("li",{className:K,children:[w,": ",(0,k.jsx)("span",{children:y})]}),N.map((function(e,a){return 0!==a&&(0,k.jsx)("li",{className:K,children:e},e)})),(0,k.jsxs)("li",{className:K,children:["Mileage: ",(0,k.jsx)("span",{children:Intl.NumberFormat("en").format(g)})]}),(0,k.jsxs)("li",{className:K,children:["Price: ",(0,k.jsxs)("span",{children:[h.split("$"),"$"]})]})]}),(0,k.jsx)("a",{href:"tel:+380730000000",className:A,children:"Rental car"})]})})}var J="CarItemImg_carImgWrapper__TAdII",U="CarItemImg_carImg__+2kig",G="CarItemImg_carImgOverlay__Pzgr-",$="CarItemImg_favoriteBtn__DBIvK",Y="CarItemImg_favoriteIcon__uNBs2",q=n(6856),D=J,Q=U,V=G,X=$,ee=Y,ae=s,ne=i,re=c,le=o,te=u,se=d,ie=m,ce=f;function oe(e){var a=e.car,n=e.onToggle,s=e.favCars,i=(0,t.useState)(!1),c=(0,r.Z)(i,2),o=c[0],u=c[1],d=(0,t.useState)(!1),m=(0,r.Z)(d,2),f=m[0],v=m[1],_=a.id,h=a.year,b=a.make,p=a.model,x=a.type,j=a.img,g=a.functionalities,N=a.rentalPrice,I=a.rentalCompany,C=a.address,w=a.mileage;(0,t.useEffect)((function(){JSON.parse(localStorage.getItem("favorites")).map((function(e){return e.id===_&&v(!0),!0}))}),[_]);var y=C.split(","),Z=(0,r.Z)(y,3),M=Z[1],F=Z[2],B=function(){u(!o)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("li",{className:ae,children:[(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:D,children:[(0,k.jsx)("img",{src:null!==j&&void 0!==j?j:S,className:Q,alt:j?"View of the car for rent":"There is no available image"}),(0,k.jsx)("div",{className:V}),(0,k.jsx)("button",{className:X,onClick:function(){if(v(!f),f||n((function(e){return[].concat((0,l.Z)(e),[a])})),s.map((function(e){return e.id})).includes(_)){var e=JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.id!==_}));localStorage.setItem("favorites",JSON.stringify(e)),0===e.length&&localStorage.removeItem("favorites"),n((function(e){return e.filter((function(e){return e.id!==_}))})),v(!1)}},children:f?(0,k.jsx)(q.Yqy,{size:20,className:ee}):(0,k.jsx)(q.iqB,{size:20,color:"#fff"})})]}),(0,k.jsxs)("div",{className:ne,children:[(0,k.jsxs)("div",{className:re,children:[(0,k.jsxs)("h3",{className:le,children:[b," ",p.length>12||b.length>12?(0,k.jsx)("br",{}):"",(0,k.jsx)("span",{className:te,children:p}),", ",h]}),(0,k.jsx)("p",{className:le,children:N})]}),(0,k.jsxs)("div",{className:se,children:[(0,k.jsxs)("p",{className:ie,children:[M," | ",F," | ",I]}),(0,k.jsxs)("p",{className:ie,children:[x," | ",p," | ",w," |"," ",g[0].length>25?"".concat(g[0].slice(0,25),"..."):g[0]]})]})]})]}),(0,k.jsx)("button",{className:ce,onClick:B,children:"Learn more"})]}),o&&(0,k.jsx)(H,{isOpen:o,onClose:B,car:a})]})}var ue="CarsList_carsList__1WELz",de=n(3409);function me(e){var a=e.cars,n=(0,t.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("favorites")))&&void 0!==e?e:[]})),l=(0,r.Z)(n,2),s=l[0],i=l[1];return(0,t.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(s))}),[s]),(0,k.jsx)("section",{children:(0,k.jsx)(de.Z,{children:(0,k.jsx)("ul",{className:ue,children:a&&a.map((function(e,a){return(0,k.jsx)(oe,{car:e,onToggle:i,favCars:s},e.id+"".concat(a))}))})})})}},9204:function(e,a,n){n.d(a,{Z:function(){return C}});var r=n(1413),l=(n(2791),n(3958)),t=n(1134),s="Filter_section__YPG8d",i="Filter_filterForm__fEGzP",c="Filter_filterInputs__sib2A",o="Filter_select__fxCkI",u="Filter_selectPrice__p8wqa",d="Filter_filterLabel__slSKo",m="Filter_searchButton__9K0NE",f=n(184),v=s,_=i,h=c,b=o,p=u,x=d,j=m,g=[{value:"buick",label:"Buick"},{value:"volvo",label:"Volvo"},{value:"hummer",label:"HUMMER"},{value:"subaru",label:"Subaru"},{value:"mitsubishi",label:"Mitsubishi"},{value:"nissan",label:"Nissan"},{value:"lincoln",label:"Lincoln"},{value:"gmc",label:"GMC"},{value:"hyundai",label:"Hyundai"},{value:"mini",label:"MINI"},{value:"bentley",label:"Bentley"},{value:"mercedes-benz",label:"Mercedes-Benz"},{value:"aston martin",label:"Aston Martin"},{value:"pontiac",label:"Pontiac"},{value:"lamborghini",label:"Lamborghini"},{value:"audi",label:"Audi"},{value:"bmw",label:"BMW"},{value:"chevrolet",label:"Chevrolet"},{value:"mercedes-benz",label:"Mercedes-Benz"},{value:"chrysler",label:"Chrysler"},{value:"kia",label:"Kia"},{value:"land rover",label:"Land Rover"},{value:"tesla",label:"Tesla"},{value:"toyota",label:"Toyota"},{value:"ford",label:"Ford"},{value:"jeep",label:"Jeep"}],N=[{value:"40",label:"40"},{value:"50",label:"50"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"},{value:"100",label:"100"},{value:"110",label:"110"},{value:"120",label:"120"},{value:"130",label:"130"},{value:"140",label:"140"},{value:"150",label:"150"},{value:"200",label:"200"},{value:"250",label:"250"},{value:"300",label:"300"},{value:"500",label:"500"}],I={option:function(e,a){return(0,r.Z)((0,r.Z)({},e),{},{color:a.isSelected?"#121417":"#12141733",backgroundColor:a.isFocused?"#F7F7FB":"#fff",borderRadius:"14px"})},control:function(e){return(0,r.Z)((0,r.Z)({},e),{},{backgroundColor:"#F7F7FB",padding:"6px 10px",border:"none",borderRadius:"14px",boxShadow:"none",color:"#121417"})}};function C(e){var a=e.onSubmit,n=(0,t.cI)(),r=n.handleSubmit,s=n.control;return(0,f.jsx)("section",{className:v,children:(0,f.jsxs)("form",{className:_,onSubmit:r(a),children:[(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)(t.Qr,{control:s,name:"brand",render:function(e){var a=e.field,n=a.onChange,r=a.value;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("label",{className:x,children:["Car brand",(0,f.jsx)(l.ZP,{options:g,className:"".concat(b),styles:I,name:"brand",placeholder:"Enter the text",value:g.find((function(e){return e.value===r})),onChange:function(e){return n(e.value)}})]})})}}),(0,f.jsx)(t.Qr,{control:s,name:"price",render:function(e){var a=e.field,n=a.onChange,r=a.value;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("label",{className:x,children:["Price/ 1 hour",(0,f.jsx)(l.ZP,{options:N,className:"".concat(b," ").concat(p),styles:I,name:"price",placeholder:"To $",value:N.find((function(e){return e.value===r})),onChange:function(e){return n(e.value)}})]})})}})]}),(0,f.jsx)("button",{type:"submit",className:j,children:"Search"})]})})}},5828:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var r=n(3433),l=n(5861),t=n(9439),s=n(4687),i=n.n(s),c=n(2791),o=n(2065),u=n(1243);u.Z.defaults.baseURL="https://650179c8736d26322f5bbf63.mockapi.io";var d=function(){var e=(0,l.Z)(i().mark((function e(a){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/advert?page=".concat(a,"&limit=8"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),m=function(){var e=(0,l.Z)(i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/advert");case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=n(184);function v(e){var a=e.onClick;return(0,f.jsx)("button",{onClick:a,className:"LoadMore_button__iSGlL",type:"button",children:"Load more"})}var _=n(9204);function h(){var e=(0,c.useState)([]),a=(0,t.Z)(e,2),n=a[0],s=a[1],u=(0,c.useState)(1),h=(0,t.Z)(u,2),b=h[0],p=h[1],x=(0,c.useState)(!0),j=(0,t.Z)(x,2),g=j[0],N=j[1],I=(0,c.useState)(null),C=(0,t.Z)(I,2),w=C[0],y=C[1],S=(0,c.useState)(null),Z=(0,t.Z)(S,2),k=Z[0],M=Z[1],F=(0,c.useState)(null),B=(0,t.Z)(F,2),L=B[0],E=B[1];(0,c.useEffect)((function(){function e(){return(e=(0,l.Z)(i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(b);case 3:return a=e.sent,e.next=6,m();case 6:n=e.sent,y(n),s((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(a))})),b===n.length/8&&N(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),(0,c.useEffect)((function(){!function(){try{if(k&&L){var e=w.filter((function(e){return e.make.toLowerCase()===k})).filter((function(e){return e.rentalPrice.replace("$","")<=L}));return void s(e)}if(k){var a=w.filter((function(e){return e.make.toLowerCase()===k}));return void s(a)}if(L){var n=w.filter((function(e){return e.rentalPrice.replace("$","")<=L}));s(n)}}catch(r){console.log(r.message)}}()}),[w,k,L]);var W=!k&&!L;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(_.Z,{onSubmit:function(e){M(e.brand),E(e.price)}}),(0,f.jsx)(o.Z,{cars:n}),g&&W&&(0,f.jsx)(v,{onClick:function(){p((function(e){return e+1}))}})]})}}}]);
//# sourceMappingURL=684.c39794bf.chunk.js.map