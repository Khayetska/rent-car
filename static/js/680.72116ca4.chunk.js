"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{8901:function(e,n,r){r.d(n,{Z:function(){return me}});var a=r(9439),t=r(3433),s=r(2791),i="CarItem_carItem__peU5j",l="CarItem_carImgWrapper__A7EbY",c="CarItem_carImg__QJNP8",o="CarItem_carImgOverlay__UXPGI",u="CarItem_favoriteBtn__YzQF1",d="CarItem_favoriteIcon__uXLoM",m="CarItem_infoWrapper__ypM1R",f="CarItem_basicInfo__0ECZx",_="CarItem_carTitle__1ussX",h="CarItem_carTitleAccent__zeMR4",x="CarItem_extraInfo__87Rj7",p="CarItem_extraInfoText__wIzKC",N="CarItem_moreInfoButton__+11p3",j="ModalWindow_backdrop__uHatM",v="ModalWindow_open__HmxZK",g="ModalWindow_modal__oBSLx",b="ModalWindow_closeButton__UMzUb",I="ModalWindow_closeButtonIcon__rzcMB",C="ModalWindow_carImg__UNG7u",F="ModalWindow_carTitle__aXvFu",S="ModalWindow_extraInfoText__OmsDH",w="ModalWindow_carDescription__YFcKI",y="ModalWindow_carSybTitle__umm3Q",Z="ModalWindow_conditionsList__5uIE-",M="ModalWindow_conditionsItem__8tm0R",k="ModalWindow_rentalButton__ZaufS",T=r.p+"static/media/placeholder.812d057bb23f080130a7.jpeg",E=r(8820),W=r(184),L=j,B=v,z=g,P=b,J=I,O=C,R=F,K=S,Y=w,A=y,G=Z,H=M,U=k;function X(e){var n=e.isOpen,r=void 0!==n&&n,t=e.onClose,i=e.car,l=i.id,c=i.year,o=i.make,u=i.model,d=i.type,m=i.img,f=i.description,_=i.accessories,h=i.functionalities,x=i.rentalPrice,p=i.engineSize,N=i.fuelConsumption,j=i.rentalConditions,v=i.address,g=i.mileage;(0,s.useEffect)((function(){return document.body.style.overflow="hidden",function(){return document.body.style.overflow="unset"}}),[]),(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);var b=j.split("\n"),I=b[0].split(": "),C=(0,a.Z)(I,2),F=C[0],S=C[1],w=v.split(","),y=(0,a.Z)(w,3),Z=y[1],M=y[2],k=r?"".concat(L," ").concat(B):L;return(0,W.jsx)("div",{className:k,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,W.jsxs)("div",{className:z,children:[(0,W.jsx)("button",{className:P,type:"button",onClick:t,children:(0,W.jsx)(E.oHP,{size:20,className:J})}),(0,W.jsx)("img",{src:null!==m&&void 0!==m?m:T,onError:function(e){e.currentTarget.src=T,e.currentTarget.onerror=null},alt:m?"View of the car for rent":"There is no available image",className:O}),(0,W.jsxs)("h3",{className:R,children:[o," ",(0,W.jsx)("span",{children:u}),", ",c]}),(0,W.jsxs)("ul",{children:[(0,W.jsxs)("li",{className:K,children:[Z," | ",M," | Id: ",l," | Year: ",c," | Type: ",d]}),(0,W.jsxs)("li",{className:K,children:["Fuel Consumption: ",N," | Engine Size: ",p]})]}),(0,W.jsx)("p",{className:Y,children:f}),(0,W.jsx)("h4",{className:A,children:"Accessories and functionalities:"}),(0,W.jsxs)("ul",{children:[(0,W.jsxs)("li",{className:K,children:[_.map((function(e,n){return n!==_.length-1?"".concat(e," | "):e}))," "]}),(0,W.jsx)("li",{className:K,children:h.map((function(e,n){return n!==_.length-1?"".concat(e," | "):e}))})]}),(0,W.jsx)("h4",{className:A,children:"Rental Conditions:"}),(0,W.jsxs)("ul",{className:G,children:[(0,W.jsxs)("li",{className:H,children:[F,": ",(0,W.jsx)("span",{children:S})]}),b.map((function(e,n){return 0!==n&&(0,W.jsx)("li",{className:H,children:e},e)})),(0,W.jsxs)("li",{className:H,children:["Mileage: ",(0,W.jsx)("span",{children:Intl.NumberFormat("en").format(g)})]}),(0,W.jsxs)("li",{className:H,children:["Price: ",(0,W.jsxs)("span",{children:[x.split("$"),"$"]})]})]}),(0,W.jsx)("a",{href:"tel:+380730000000",className:U,children:"Rental car"})]})})}var Q=r(6856),V=i,$=m,q=f,D=_,ee=h,ne=x,re=p,ae=N,te=l,se=c,ie=o,le=u,ce=d;function oe(e){var n=e.car,r=e.onToggle,i=e.favCars,l=(0,s.useState)(!1),c=(0,a.Z)(l,2),o=c[0],u=c[1],d=(0,s.useState)(!1),m=(0,a.Z)(d,2),f=m[0],_=m[1],h=n.id,x=n.year,p=n.make,N=n.model,j=n.type,v=n.img,g=n.functionalities,b=n.rentalPrice,I=n.rentalCompany,C=n.address,F=n.mileage;(0,s.useEffect)((function(){JSON.parse(localStorage.getItem("favorites")).map((function(e){return e.id===h&&_(!0),!0}))}),[h]);var S=C.split(","),w=(0,a.Z)(S,3),y=w[1],Z=w[2],M=function(){u(!o)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("li",{className:V,children:[(0,W.jsxs)("div",{children:[(0,W.jsxs)("div",{className:te,children:[(0,W.jsx)("img",{src:null!==v&&void 0!==v?v:T,className:se,alt:v?"View of the car for rent":"There is no available image",onError:function(e){e.currentTarget.src=T,e.currentTarget.onerror=null}}),(0,W.jsx)("div",{className:ie}),(0,W.jsx)("button",{className:le,onClick:function(){if(_(!f),f||r((function(e){return[].concat((0,t.Z)(e),[n])})),i.map((function(e){return e.id})).includes(h)){var e=JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.id!==h}));localStorage.setItem("favorites",JSON.stringify(e)),0===e.length&&localStorage.removeItem("favorites"),r((function(e){return e.filter((function(e){return e.id!==h}))})),_(!1)}},children:f?(0,W.jsx)(Q.Yqy,{size:20,className:ce}):(0,W.jsx)(Q.iqB,{size:20,color:"#fff"})})]}),(0,W.jsxs)("div",{className:$,children:[(0,W.jsxs)("div",{className:q,children:[(0,W.jsxs)("h3",{className:D,children:[p," ",N.length>12||p.length>12?(0,W.jsx)("br",{}):"",(0,W.jsx)("span",{className:ee,children:N}),", ",x]}),(0,W.jsx)("p",{className:D,children:b})]}),(0,W.jsxs)("div",{className:ne,children:[(0,W.jsxs)("p",{className:re,children:[y," | ",Z," | ",I]}),(0,W.jsxs)("p",{className:re,children:[j," | ",N," | ",F," |"," ",g[0].length>25?"".concat(g[0].slice(0,25),"..."):g[0]]})]})]})]}),(0,W.jsx)("button",{className:ae,onClick:M,children:"Learn more"})]}),o&&(0,W.jsx)(X,{isOpen:o,onClose:M,car:n})]})}var ue="CarsList_carsList__1WELz",de=r(3409);function me(e){var n=e.cars,r=(0,s.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("favorites")))&&void 0!==e?e:[]})),t=(0,a.Z)(r,2),i=t[0],l=t[1];return(0,s.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(i))}),[i]),(0,W.jsx)("section",{children:(0,W.jsx)(de.Z,{children:(0,W.jsx)("ul",{className:ue,children:n&&n.map((function(e,n){return(0,W.jsx)(oe,{car:e,onToggle:l,favCars:i},e.id+"".concat(n))}))})})})}},1941:function(e,n,r){r.d(n,{Z:function(){return P}});var a=r(1413),t=(r(2791),r(3958)),s=r(1134),i=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land Rover","Tesla","Toyota","Ford","Jeep"]'),l=JSON.parse('["40","50","60","70","80","90","100","110","120","130","140","150","200","250","300","500"]'),c="Filter_section__YPG8d",o="Filter_filterForm__fEGzP",u="Filter_filterInputs__sib2A",d="Filter_select__fxCkI",m="Filter_selectPrice__p8wqa",f="Filter_filterLabel__slSKo",_="Filter_inputsWrapper__gJtmR",h="Filter_inputMileage__kS+41",x="Filter_mileageInputLabel__o-Jgk",p="Filter_mileageInputsWrapper__Kf7Oj",N="Filter_miliageInput__oo1Th",j="Filter_miliageInputTo__VE+XN",v="Filter_searchButton__9K0NE",g=r(184),b=c,I=o,C=u,F=d,S=m,w=f,y=x,Z=h,M=v,k=p,T=N,E=_,W=j,L=l.map((function(e){return{value:e,label:e}})),B=i.map((function(e){return{value:e.toLowerCase(),label:e}})),z={option:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{color:n.isSelected?"#121417":"#12141733",backgroundColor:n.isFocused?"#F7F7FB":"#fff",borderRadius:"14px"})},control:function(e){return(0,a.Z)((0,a.Z)({},e),{},{backgroundColor:"#F7F7FB",padding:"6px 10px",border:"none",borderRadius:"14px",boxShadow:"none",color:"#121417"})}};function P(e){var n=e.onSubmit,r=(0,s.cI)(),i=r.handleSubmit,l=r.control,c=r.register;return(0,g.jsx)("section",{className:b,children:(0,g.jsxs)("form",{className:I,onSubmit:i(n),children:[(0,g.jsxs)("div",{className:C,children:[(0,g.jsx)(s.Qr,{control:l,name:"brand",render:function(e){var n=e.field,r=n.onChange,a=n.value;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("label",{className:w,children:["Car brand",(0,g.jsx)(t.ZP,{options:B,className:"".concat(F),styles:z,name:"brand",placeholder:"Enter the text",value:B.find((function(e){return e.value===a})),onChange:function(e){return r(e.value)},"aria-label":"Filter cars by their brand"})]})})}}),(0,g.jsx)(s.Qr,{control:l,name:"price",render:function(e){var n=e.field,r=n.onChange,a=n.value;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("label",{className:w,children:["Price/ 1 hour",(0,g.jsx)(t.ZP,{options:L,className:"".concat(F," ").concat(S),styles:z,name:"price",placeholder:"To $",value:L.find((function(e){return e.value===a})),onChange:function(e){return r(e.value)},"aria-label":"Filter cars by their price per 1 hour"})]})})}})]}),(0,g.jsxs)("div",{className:k,children:[(0,g.jsx)("legend",{className:w,children:"Car mileage / km"}),(0,g.jsxs)("div",{className:E,children:[(0,g.jsxs)("div",{className:Z,children:[(0,g.jsx)("label",{htmlFor:"min",className:y,children:"From"}),(0,g.jsx)("input",(0,a.Z)({type:"number",className:T,step:100},c("min")))]}),(0,g.jsxs)("div",{className:Z,children:[(0,g.jsx)("label",{htmlFor:"max",className:y,children:"To"}),(0,g.jsx)("input",(0,a.Z)({type:"number",className:"".concat(T," ").concat(W),step:100},c("max")))]})]})]}),(0,g.jsx)("button",{type:"submit",className:M,children:"Search"})]})})}},1014:function(e,n,r){r.d(n,{I2:function(){return l},Lo:function(){return a},iZ:function(){return t}});var a=function(e,n){return e.filter((function(e){return e.make.toLowerCase()===n}))},t=function(e,n){return e.filter((function(e){return Number(e.rentalPrice.replace("$",""))<=Number(n)}))},s=function(e,n){return e.filter((function(e){return e.mileage>=n}))},i=function(e,n){return e.filter((function(e){return e.mileage<=n}))},l=function(e,n,r,a){if(n&&0!==r){var t=s(e,r);a(i(t,n))}else{if(r>0)a(s(e,r));else if(n>0)a(i(e,n));else;}}},361:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var a=r(9439),t=r(2791),s=r(8901),i=r(1941),l="NoContentFav_background__GJTWR",c="NoContentFav_text__WzL4X",o=r(3409),u=r(184),d=l,m=c;function f(){return(0,u.jsx)("section",{className:d,children:(0,u.jsx)(o.Z,{children:(0,u.jsx)("p",{className:m,children:"You haven't added any cars to your favorites"})})})}var _=r(1014);function h(){var e=(0,t.useState)([]),n=(0,a.Z)(e,2),r=n[0],l=n[1],c=(0,t.useState)(null),o=(0,a.Z)(c,2),d=o[0],m=o[1],h=(0,t.useState)(null),x=(0,a.Z)(h,2),p=x[0],N=x[1],j=(0,t.useState)(0),v=(0,a.Z)(j,2),g=v[0],b=v[1],I=(0,t.useState)(0),C=(0,a.Z)(I,2),F=C[0],S=C[1];(0,t.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"));l(e)}),[]),(0,t.useEffect)((function(){!function(){if(d&&p){var e=(0,_.Lo)(r,d),n=(0,_.iZ)(e,p);return l(n),void(0===Number(F)&&0===Number(g)||(0,_.I2)(n,F,g,l))}if(d){var a=(0,_.Lo)(r,d);return l(a),void(0===Number(F)&&0===Number(g)||(0,_.I2)(a,F,g,l))}if(p){var t=(0,_.iZ)(r,p);l(t),0===Number(F)&&0===Number(g)||(0,_.I2)(t,F,g,l)}0===Number(F)&&0===Number(g)||(0,_.I2)(r,F,g,l)}()}),[d,p,F,g]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z,{onSubmit:function(e){m(e.brand),N(e.price),b(Number(e.min)),S(Number(e.max))}}),r.length>0?(0,u.jsx)(s.Z,{cars:r}):(0,u.jsx)(f,{})]})}}}]);
//# sourceMappingURL=680.72116ca4.chunk.js.map