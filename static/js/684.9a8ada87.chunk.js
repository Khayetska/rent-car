"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{8901:function(e,n,r){r.d(n,{Z:function(){return me}});var t=r(9439),a=r(3433),s=r(2791),i="CarItem_carItem__peU5j",c="CarItem_carImgWrapper__A7EbY",l="CarItem_carImg__QJNP8",o="CarItem_carImgOverlay__UXPGI",u="CarItem_favoriteBtn__YzQF1",d="CarItem_favoriteIcon__uXLoM",m="CarItem_infoWrapper__ypM1R",f="CarItem_basicInfo__0ECZx",_="CarItem_carTitle__1ussX",p="CarItem_carTitleAccent__zeMR4",h="CarItem_extraInfo__87Rj7",x="CarItem_extraInfoText__wIzKC",v="CarItem_moreInfoButton__+11p3",j="ModalWindow_backdrop__uHatM",N="ModalWindow_open__HmxZK",b="ModalWindow_modal__oBSLx",g="ModalWindow_closeButton__UMzUb",I="ModalWindow_closeButtonIcon__rzcMB",C="ModalWindow_carImg__UNG7u",Z="ModalWindow_carTitle__aXvFu",S="ModalWindow_extraInfoText__OmsDH",w="ModalWindow_carDescription__YFcKI",F="ModalWindow_carSybTitle__umm3Q",y="ModalWindow_conditionsList__5uIE-",k="ModalWindow_conditionsItem__8tm0R",M="ModalWindow_rentalButton__ZaufS",L=r.p+"static/media/placeholder.812d057bb23f080130a7.jpeg",T=r(8820),E=r(184),W=j,B=N,z=b,P=g,O=I,R=C,J=Z,K=S,U=w,A=F,G=y,H=k,Y=M;function Q(e){var n=e.isOpen,r=void 0!==n&&n,a=e.onClose,i=e.car,c=i.id,l=i.year,o=i.make,u=i.model,d=i.type,m=i.img,f=i.description,_=i.accessories,p=i.functionalities,h=i.rentalPrice,x=i.engineSize,v=i.fuelConsumption,j=i.rentalConditions,N=i.address,b=i.mileage;(0,s.useEffect)((function(){return document.body.style.overflow="hidden",function(){return document.body.style.overflow="unset"}}),[]),(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[a]);var g=j.split("\n"),I=g[0].split(": "),C=(0,t.Z)(I,2),Z=C[0],S=C[1],w=N.split(","),F=(0,t.Z)(w,3),y=F[1],k=F[2],M=r?"".concat(W," ").concat(B):W;return(0,E.jsx)("div",{className:M,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,E.jsxs)("div",{className:z,children:[(0,E.jsx)("button",{className:P,type:"button",onClick:a,children:(0,E.jsx)(T.oHP,{size:20,className:O})}),(0,E.jsx)("img",{src:null!==m&&void 0!==m?m:L,onError:function(e){e.currentTarget.src=L,e.currentTarget.onerror=null},alt:m?"View of the car for rent":"There is no available image",className:R}),(0,E.jsxs)("h3",{className:J,children:[o," ",(0,E.jsx)("span",{children:u}),", ",l]}),(0,E.jsxs)("ul",{children:[(0,E.jsxs)("li",{className:K,children:[y," | ",k," | Id: ",c," | Year: ",l," | Type: ",d]}),(0,E.jsxs)("li",{className:K,children:["Fuel Consumption: ",v," | Engine Size: ",x]})]}),(0,E.jsx)("p",{className:U,children:f}),(0,E.jsx)("h4",{className:A,children:"Accessories and functionalities:"}),(0,E.jsxs)("ul",{children:[(0,E.jsxs)("li",{className:K,children:[_.map((function(e,n){return n!==_.length-1?"".concat(e," | "):e}))," "]}),(0,E.jsx)("li",{className:K,children:p.map((function(e,n){return n!==_.length-1?"".concat(e," | "):e}))})]}),(0,E.jsx)("h4",{className:A,children:"Rental Conditions:"}),(0,E.jsxs)("ul",{className:G,children:[(0,E.jsxs)("li",{className:H,children:[Z,": ",(0,E.jsx)("span",{children:S})]}),g.map((function(e,n){return 0!==n&&(0,E.jsx)("li",{className:H,children:e},e)})),(0,E.jsxs)("li",{className:H,children:["Mileage: ",(0,E.jsx)("span",{children:Intl.NumberFormat("en").format(b)})]}),(0,E.jsxs)("li",{className:H,children:["Price: ",(0,E.jsxs)("span",{children:[h.split("$"),"$"]})]})]}),(0,E.jsx)("a",{href:"tel:+380730000000",className:Y,children:"Rental car"})]})})}var X=r(6856),V=i,$=m,q=f,D=_,ee=p,ne=h,re=x,te=v,ae=c,se=l,ie=o,ce=u,le=d;function oe(e){var n=e.car,r=e.onToggle,i=e.favCars,c=(0,s.useState)(!1),l=(0,t.Z)(c,2),o=l[0],u=l[1],d=(0,s.useState)(!1),m=(0,t.Z)(d,2),f=m[0],_=m[1],p=n.id,h=n.year,x=n.make,v=n.model,j=n.type,N=n.img,b=n.functionalities,g=n.rentalPrice,I=n.rentalCompany,C=n.address,Z=n.mileage;(0,s.useEffect)((function(){JSON.parse(localStorage.getItem("favorites")).map((function(e){return e.id===p&&_(!0),!0}))}),[p]);var S=C.split(","),w=(0,t.Z)(S,3),F=w[1],y=w[2],k=function(){u(!o)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("li",{className:V,children:[(0,E.jsxs)("div",{children:[(0,E.jsxs)("div",{className:ae,children:[(0,E.jsx)("img",{src:null!==N&&void 0!==N?N:L,className:se,alt:N?"View of the car for rent":"There is no available image",onError:function(e){e.currentTarget.src=L,e.currentTarget.onerror=null}}),(0,E.jsx)("div",{className:ie}),(0,E.jsx)("button",{className:ce,onClick:function(){if(_(!f),f||r((function(e){return[].concat((0,a.Z)(e),[n])})),i.map((function(e){return e.id})).includes(p)){var e=JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.id!==p}));localStorage.setItem("favorites",JSON.stringify(e)),0===e.length&&localStorage.removeItem("favorites"),r((function(e){return e.filter((function(e){return e.id!==p}))})),_(!1)}},children:f?(0,E.jsx)(X.Yqy,{size:20,className:le}):(0,E.jsx)(X.iqB,{size:20,color:"#fff"})})]}),(0,E.jsxs)("div",{className:$,children:[(0,E.jsxs)("div",{className:q,children:[(0,E.jsxs)("h3",{className:D,children:[x," ",v.length>12||x.length>12?(0,E.jsx)("br",{}):"",(0,E.jsx)("span",{className:ee,children:v}),", ",h]}),(0,E.jsx)("p",{className:D,children:g})]}),(0,E.jsxs)("div",{className:ne,children:[(0,E.jsxs)("p",{className:re,children:[F," | ",y," | ",I]}),(0,E.jsxs)("p",{className:re,children:[j," | ",v," | ",Z," |"," ",b[0].length>25?"".concat(b[0].slice(0,25),"..."):b[0]]})]})]})]}),(0,E.jsx)("button",{className:te,onClick:k,children:"Learn more"})]}),o&&(0,E.jsx)(Q,{isOpen:o,onClose:k,car:n})]})}var ue="CarsList_carsList__1WELz",de=r(3409);function me(e){var n=e.cars,r=(0,s.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("favorites")))&&void 0!==e?e:[]})),a=(0,t.Z)(r,2),i=a[0],c=a[1];return(0,s.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(i))}),[i]),(0,E.jsx)("section",{children:(0,E.jsx)(de.Z,{children:(0,E.jsx)("ul",{className:ue,children:n&&n.map((function(e,n){return(0,E.jsx)(oe,{car:e,onToggle:c,favCars:i},e.id+"".concat(n))}))})})})}},1941:function(e,n,r){r.d(n,{Z:function(){return P}});var t=r(1413),a=(r(2791),r(3958)),s=r(1134),i=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land Rover","Tesla","Toyota","Ford","Jeep"]'),c=JSON.parse('["40","50","60","70","80","90","100","110","120","130","140","150","200","250","300","500"]'),l="Filter_section__YPG8d",o="Filter_filterForm__fEGzP",u="Filter_filterInputs__sib2A",d="Filter_select__fxCkI",m="Filter_selectPrice__p8wqa",f="Filter_filterLabel__slSKo",_="Filter_inputsWrapper__gJtmR",p="Filter_inputMileage__kS+41",h="Filter_mileageInputLabel__o-Jgk",x="Filter_mileageInputsWrapper__Kf7Oj",v="Filter_miliageInput__oo1Th",j="Filter_miliageInputTo__VE+XN",N="Filter_searchButton__9K0NE",b=r(184),g=l,I=o,C=u,Z=d,S=m,w=f,F=h,y=p,k=N,M=x,L=v,T=_,E=j,W=c.map((function(e){return{value:e,label:e}})),B=i.map((function(e){return{value:e.toLowerCase(),label:e}})),z={option:function(e,n){return(0,t.Z)((0,t.Z)({},e),{},{color:n.isSelected?"#121417":"#12141733",backgroundColor:n.isFocused?"#F7F7FB":"#fff",borderRadius:"14px"})},control:function(e){return(0,t.Z)((0,t.Z)({},e),{},{backgroundColor:"#F7F7FB",padding:"6px 10px",border:"none",borderRadius:"14px",boxShadow:"none",color:"#121417"})}};function P(e){var n=e.onSubmit,r=(0,s.cI)(),i=r.handleSubmit,c=r.control,l=r.register;return(0,b.jsx)("section",{className:g,children:(0,b.jsxs)("form",{className:I,onSubmit:i(n),children:[(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)(s.Qr,{control:c,name:"brand",render:function(e){var n=e.field,r=n.onChange,t=n.value;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("label",{className:w,children:["Car brand",(0,b.jsx)(a.ZP,{options:B,className:"".concat(Z),styles:z,name:"brand",placeholder:"Enter the text",value:B.find((function(e){return e.value===t})),onChange:function(e){return r(e.value)},"aria-label":"Filter cars by their brand"})]})})}}),(0,b.jsx)(s.Qr,{control:c,name:"price",render:function(e){var n=e.field,r=n.onChange,t=n.value;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("label",{className:w,children:["Price/ 1 hour",(0,b.jsx)(a.ZP,{options:W,className:"".concat(Z," ").concat(S),styles:z,name:"price",placeholder:"To $",value:W.find((function(e){return e.value===t})),onChange:function(e){return r(e.value)},"aria-label":"Filter cars by their price per 1 hour"})]})})}})]}),(0,b.jsxs)("div",{className:M,children:[(0,b.jsx)("legend",{className:w,children:"Car mileage / km"}),(0,b.jsxs)("div",{className:T,children:[(0,b.jsxs)("div",{className:y,children:[(0,b.jsx)("label",{htmlFor:"min",className:F,children:"From"}),(0,b.jsx)("input",(0,t.Z)({type:"number",className:L,step:100},l("min")))]}),(0,b.jsxs)("div",{className:y,children:[(0,b.jsx)("label",{htmlFor:"max",className:F,children:"To"}),(0,b.jsx)("input",(0,t.Z)({type:"number",className:"".concat(L," ").concat(E),step:100},l("max")))]})]})]}),(0,b.jsx)("button",{type:"submit",className:k,children:"Search"})]})})}},1014:function(e,n,r){r.d(n,{I2:function(){return c},Lo:function(){return t},iZ:function(){return a}});var t=function(e,n){return e.filter((function(e){return e.make.toLowerCase()===n}))},a=function(e,n){return e.filter((function(e){return Number(e.rentalPrice.replace("$",""))<=Number(n)}))},s=function(e,n){return e.filter((function(e){return e.mileage>=n}))},i=function(e,n){return e.filter((function(e){return e.mileage<=n}))},c=function(e,n,r,t){if(n&&0!==r){var a=s(e,r);t(i(a,n))}else{if(r>0)t(s(e,r));else if(n>0)t(i(e,n));else;}}},5828:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(3433),a=r(5861),s=r(9439),i=r(4687),c=r.n(i),l=r(2791),o=r(8901),u=r(1243);u.Z.defaults.baseURL="https://650179c8736d26322f5bbf63.mockapi.io";var d=function(){var e=(0,a.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/advert?page=".concat(n,"&limit=8"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/advert");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=r(184);function _(e){var n=e.onClick;return(0,f.jsx)("button",{onClick:n,className:"LoadMore_button__iSGlL",type:"button",children:"Load more"})}var p=r(1941),h=r(1014);function x(){var e=(0,l.useState)([]),n=(0,s.Z)(e,2),r=n[0],i=n[1],u=(0,l.useState)(1),x=(0,s.Z)(u,2),v=x[0],j=x[1],N=(0,l.useState)(!0),b=(0,s.Z)(N,2),g=b[0],I=b[1],C=(0,l.useState)(null),Z=(0,s.Z)(C,2),S=Z[0],w=Z[1],F=(0,l.useState)(null),y=(0,s.Z)(F,2),k=y[0],M=y[1],L=(0,l.useState)(null),T=(0,s.Z)(L,2),E=T[0],W=T[1],B=(0,l.useState)(0),z=(0,s.Z)(B,2),P=z[0],O=z[1],R=(0,l.useState)(0),J=(0,s.Z)(R,2),K=J[0],U=J[1];(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(v);case 3:return n=e.sent,e.next=6,m();case 6:r=e.sent,w(r),i((function(e){return[].concat((0,t.Z)(e),(0,t.Z)(n))})),v===r.length/8&&I(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),(0,l.useEffect)((function(){!function(){if(k&&E){var e=(0,h.Lo)(S,k),n=(0,h.iZ)(e,E);return i(n),void(0===Number(K)&&0===Number(P)||(0,h.I2)(n,K,P,i))}if(k){var r=(0,h.Lo)(S,k);return i(r),void(0===Number(K)&&0===Number(P)||(0,h.I2)(r,K,P,i))}if(E){var t=(0,h.iZ)(S,E);i(t),0===Number(K)&&0===Number(P)||(0,h.I2)(t,K,P,i)}0===Number(K)&&0===Number(P)||(0,h.I2)(S,K,P,i)}()}),[S,k,E,P,K]);var A=!k&&!E;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.Z,{onSubmit:function(e){M(e.brand),W(e.price),O(Number(e.min)),U(Number(e.max))}}),(0,f.jsx)(o.Z,{cars:r}),g&&A&&(0,f.jsx)(_,{onClick:function(){j((function(e){return e+1}))}})]})}}}]);
//# sourceMappingURL=684.9a8ada87.chunk.js.map