"use strict";(self.webpackChunkmystore=self.webpackChunkmystore||[]).push([[772],{772:function(e,n,t){t.r(n);var r,o,i,a,c,s,d,l,u,p,v,f,m,x,g,h,Z,P,w,E,b,I=t(791),T=t(164),j=t(781),_=t(434),k=t(184),D=function(){return(0,k.jsx)("div",{children:"Processing...."})},R=function(){return(0,k.jsx)(D,{})},y="PROCESSING_VIEW",S="RIGHT_PANEL_VIEW",O={PRODUCT_CATEGORY_VIEW:"PRODUCT_CATEGORY_VIEW",DETAIL_PANEL_VIEW:"DETAIL_PANEL_VIEW"},A=t(168),C=t(444),N=C.ZP.div(r||(r=(0,A.Z)(["\nmargin-left: 200px;\n  padding: 1px 16px;\n  height: 1000px;\n  @media screen and (max-width: 700px) {\n    margin-left: 0;\n  }\n"]))),V=C.ZP.h2(o||(o=(0,A.Z)(["\n  font-size: 1em;\n  text-align: center;\n  color: palevioletred;\n"]))),L=(C.ZP.div(i||(i=(0,A.Z)(['\n&.row::after{\n  content: "";\n  clear: both;\n  display: table;\n\n}\n\n']))),C.ZP.div(a||(a=(0,A.Z)([" \n    display: grid;\n    grid-template-columns: auto auto auto;\n    padding: 10px;\n    margin-top: 0%;\n    margin-left: 0%;\n    background-color: rgb(15 155 197 / 28%);\n  "]))),C.ZP.div(c||(c=(0,A.Z)([" \n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid transparent;\n  font-size: 30px;\n  text-align: center;\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n  display: flex;\n  overflow: scroll;\n  "]))),C.ZP.div(s||(s=(0,A.Z)(['\n  font-family: "Segoe UI", Arial, sans-serif;\n  font-weight: 400;\n  margin: 10px 0px;\n  text-align: center;\n  font-weight: bold;\n  color: #672;\n  font-size: 2rem;\n  '])))),W=C.ZP.img(d||(d=(0,A.Z)(["\n  max-width: 100%;\n  width:auto;\n  height:130px;\n  "]))),z=C.ZP.a(l||(l=(0,A.Z)(["\n\n"]))),U=(C.ZP.p(u||(u=(0,A.Z)(["\n  display: block;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  "]))),C.ZP.img(p||(p=(0,A.Z)(["\n  width: ",";\n  height: ","\n  object-fit: none;\n  src: ",";\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.img}))),G=C.ZP.div(v||(v=(0,A.Z)(['{\n :after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n}']))),F=function(e){return(0,k.jsxs)(N,{id:"rightpanel",className:"content",children:[(0,k.jsx)(V,{children:null===e||void 0===e?void 0:e.selectedProduct}),(0,k.jsx)(fe,{})]})},Y=t(916),M=t(683),H="SET_SELECTED_PRODUCTS",q={previousRightPanelType:"",rightPanelType:"",selectedProduct:"",productOptions:{}},B=(0,Y.P1)((function(e){return e.rightPanelReducer||q}),(function(e){return{productCategoryType:e.productCategoryType,selectedProduct:e.selectedProduct,productOptions:e.productOptions}})),$=function(e){var n=(0,_.v9)(B).selectedProduct;return(0,k.jsx)(F,{selectedProduct:n,children:null===e||void 0===e?void 0:e.children})},J=C.ZP.div(f||(f=(0,A.Z)(["\npadding: 0 6px;\nfloat: left;\nwidth: auto;\n@media only screen and (max-width: 700px) {\n    width: 49.99999%;\n    margin: 6px 0;\n \n}\n@media only screen and (max-width: 500px) {\n    width: 100%;\n}\n\n  "]))),K=C.ZP.div(m||(m=(0,A.Z)(["\n  border: 1px solid #ccc;\n \n"]))),Q=C.ZP.div(x||(x=(0,A.Z)(["\npadding: 15px;\ntext-align: center;\n"]))),X=(C.ZP.div(g||(g=(0,A.Z)(["\n padding: 15px;\n  text-align: center;\n  "]))),C.ZP.section(h||(h=(0,A.Z)(["\n  color: rgb(59 55 55 / 86%);\n  font-weight: 300;\n  font-size: 150%;\n    margin-top: 15px;\n  "])))),ee=(C.ZP.b(Z||(Z=(0,A.Z)(["\n  color: rgb(59 55 55 / 86%);\n  font-weight: 300;\n  "]))),C.ZP.div(P||(P=(0,A.Z)(["\n  display:flex;\n  flex-flow: row wrap;\n  "])))),ne=function(e){return console.log(e),(0,k.jsxs)(I.Fragment,{children:[(0,k.jsxs)(J,{id:"cardContainer",onClick:function(){return e.initiateDetailView(null===e||void 0===e?void 0:e.title)},children:[(0,k.jsx)(K,{id:"cardImage",children:(0,k.jsx)(z,{children:(0,k.jsx)(W,{src:null===e||void 0===e?void 0:e.imgPath})})}),(0,k.jsx)(Q,{children:null===e||void 0===e?void 0:e.title})]}),(0,k.jsx)(G,{})]})},te=function(e){return console.log("productsCategory",null===e||void 0===e?void 0:e.productOptions),(0,k.jsx)(ee,{children:(null===e||void 0===e?void 0:e.productOptions)&&(null===e||void 0===e?void 0:e.productOptions.map((function(n,t){return(0,k.jsx)(ne,{title:null===n||void 0===n?void 0:n.name,imgPath:null===n||void 0===n?void 0:n.imagePath,initiateDetailView:null===e||void 0===e?void 0:e.initiateDetailView},t)})))})},re="INITIATE_PRODUCT_CATEGORY_PROCESSOR",oe=function(){var e=(0,_.I0)(),n=(0,_.v9)(B),t=n.selectedProduct,r={selectedProduct:t,productOptions:n.productOptions,initiateDetailView:function(n){console.log(n),e({type:re,data:n})}};return console.log("selectedProduct",t),(0,k.jsx)(te,(0,M.Z)({},r))},ie=(0,I.memo)(oe),ae="SET_ITEM_DETAIL_DATA",ce={selectedItem:"",selectedName:""},se=(0,Y.P1)((function(e){return e.detailViewReducer||ce}),(function(e){return{selectedName:e.selectedName,itemDetails:e.itemDetails}})),de=C.ZP.div(w||(w=(0,A.Z)(["\npadding: 0.01em 16px;\n"]))),le=function(e){return console.log("DetailViewProps",e),(0,k.jsxs)(I.Fragment,{children:[(0,k.jsxs)(de,{id:"detail-view",children:[(0,k.jsx)(L,{children:null===e||void 0===e?void 0:e.selectedName}),null===e||void 0===e?void 0:e.productOptions.map((function(n){return(null===n||void 0===n?void 0:n.name)===(null===e||void 0===e?void 0:e.selectedName)?(0,k.jsxs)(I.Fragment,{children:[(0,k.jsx)(U,{width:"100%",height:"auto",src:null===n||void 0===n?void 0:n.imagePath}),(0,k.jsxs)(X,{children:[null===n||void 0===n?void 0:n.description," "]})]}):""}))]}),(0,k.jsx)(de,{})]})},ue=function(){console.log("detail view connect");var e=(0,_.v9)(B).productOptions,n={selectedName:(0,_.v9)(se).selectedName,productOptions:e};return(0,k.jsx)(le,(0,M.Z)({},n))},pe=(0,I.memo)(ue),ve=[{id:y,component:(0,k.jsx)(R,{})},{id:S,component:(0,k.jsx)($,{})},{id:O.PRODUCT_CATEGORY_VIEW,component:(0,k.jsx)(ie,{})},{id:O.DETAIL_PANEL_VIEW,component:(0,k.jsx)(pe,{})}],fe=(0,j.qC)(I.memo)((function(){var e,n=(0,_.v9)((function(e){return e.appRouterReducer.viewScreenType})),t=null===(e=ve.find((function(e){return e.id===n})))||void 0===e?void 0:e.component;return t||(0,k.jsx)("div",{})})),me=t(885),xe=C.ZP.nav(E||(E=(0,A.Z)(["\nmargin: 0;\npadding: 0;\nwidth: 200px;\nbackground-color: #f1f1f1;\nposition: fixed;\nheight: 100%;\noverflow: auto;\n@media screen and (max-width: 700px) {\n          width: 100%;\n          height: auto;\n          position: relative;\n       \n      }\n"]))),ge=C.ZP.a(b||(b=(0,A.Z)(["\ndisplay: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n  & .activeProduct{\n    background-color: #04AA6D;\n  color: white;\n  }\n\n  @media screen and (max-width: 700px) {\n    float: left;\n  }\n  @media screen and (max-width: 400px) {\n    text-align: center;\n    float: none;\n \n}\n\n\n\n\n"]))),he=function(e){return console.log("sidebar",e),(0,k.jsx)(xe,{id:"sidebar",children:(null===e||void 0===e?void 0:e.sidebarData)&&(null===e||void 0===e?void 0:e.sidebarData.map((function(n,t){return(0,k.jsx)(ge,{onClick:function(){return null===e||void 0===e?void 0:e.handleMenuSelection(null===n||void 0===n?void 0:n.id,null===n||void 0===n?void 0:n.productName)},className:n.id===(null===e||void 0===e?void 0:e.activeItem)?"activeProduct":"",children:n.productName},t)})))})},Ze="SET_VIEW_SCREEN_TYPE",Pe=function(e){return{type:Ze,data:e}},we=function(e){console.log("sidebarConnect",e);var n=(0,_.I0)(),t=(0,I.useState)(0),r=(0,me.Z)(t,2),o=r[0],i=r[1],a={sidebarData:null===e||void 0===e?void 0:e.sidebarData,activeItem:o,handleMenuSelection:function(t,r){var o,a;i(t),n((a={selectedItem:r,productOptions:null===e||void 0===e||null===(o=e.sidebarData[t-1])||void 0===o?void 0:o.productOptions},{type:H,data:a})),n(Pe(O.PRODUCT_CATEGORY_VIEW))},setActiveItem:i};return(0,k.jsx)(he,(0,M.Z)({},a))},Ee=(0,I.memo)(we),be=function(e){var n;return console.log("container",e),(0,k.jsxs)(I.Fragment,{children:[(0,k.jsx)(Ee,{sidebarData:null===e||void 0===e||null===(n=e.productProps)||void 0===n?void 0:n.products}),(0,k.jsx)($,{})]})},Ie="APP_INITIALIZE_DATA",Te="SET_APP_INITIAL_DATA",je=function(e){return{type:Te,data:e}},_e={appInitialData:!1,appInitialDataObj:{}},ke=(0,Y.P1)((function(e){return e.appInitializeReducer||_e}),(function(e){return{appInitialDataObj:e.appInitialDataObj}})),De=function(){var e=(0,_.I0)();(0,I.useEffect)((function(){e({type:Ie,data:!0})}),[]);var n=(0,_.v9)(ke).appInitialDataObj;return(0,k.jsx)(be,{productProps:n})},Re=(0,I.memo)(De),ye=function(){return(0,k.jsx)(Re,{})},Se=(0,I.memo)(ye),Oe=t(484),Ae=t(398),Ce=t(165),Ne=t(982),Ve=t(780),Le=t(860),We=(0,Ce.Z)().mark(ze);function ze(e){var n,t,r;return(0,Ce.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n={},t={},r=!1,200===(null===e||void 0===e?void 0:e.statusCode)?(r=!0,null!==e&&void 0!==e&&e.data,(0,Le.Z)("data")):(r=!1,null!==e&&void 0!==e&&e.error,(0,Le.Z)("error")),o.abrupt("return",{data:n,error:t,isSuccess:r});case 5:case"end":return o.stop()}}),We)}var Ue=t(861),Ge=t(980);function Fe(e){return Ye.apply(this,arguments)}function Ye(){return(Ye=(0,Ue.Z)((0,Ce.Z)().mark((function e(n){var t;return(0,Ce.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("serviceUrl",n),e.next=3,Ge.Z.get(n);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Me=(0,Ce.Z)().mark(He);function He(){var e,n,t,r,o;return(0,Ce.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("productCategoryTask"),"https://jsonplaceholder.typicode.com/posts",i.next=4,(0,Ve.RE)(Fe,"https://jsonplaceholder.typicode.com/posts");case 4:if(e=i.sent,console.log("response",e),!e){i.next=15;break}return i.next=9,(0,Ve.RE)(ze,e);case 9:return n=i.sent,t=n.isSuccess,r=n.data,o=n.error,console.log("data",r),i.abrupt("return",{isSuccess:t,data:r,error:o});case 15:case"end":return i.stop()}}),Me)}var qe=(0,Ce.Z)().mark(Be);function Be(){var e,n,t;return(0,Ce.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,Ve.RE)(He);case 3:e=r.sent,n=e.isSuccess,t=e.data,n?console.log(t):console.log("no data"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log("some api error");case 12:case"end":return r.stop()}}),qe,null,[[0,9]])}(0,Ve.Fm)("RIGHT_PANEL_VIEW_SCREENS",Be);var $e=(0,Ce.Z)().mark(Je);function Je(e){var n,t,r;return(0,Ce.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n={},t={},r=!1,console.log("transformer::",e),200===(null===e||void 0===e?void 0:e.status)?(r=!0,n=null===e||void 0===e?void 0:e.data):(r=!1,t=null===e||void 0===e?void 0:e.error),console.log("data::",n),o.abrupt("return",{data:n,error:t,isSuccess:r});case 7:case"end":return o.stop()}}),$e)}var Ke=(0,Ce.Z)().mark(Qe);function Qe(){var e,n,t,r,o;return(0,Ce.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("appInitializeTask"),"https://api.mocki.io/v2/c99bba7e/appData",i.next=4,(0,Ve.RE)(Fe,"https://api.mocki.io/v2/c99bba7e/appData");case 4:if(e=i.sent,console.log("response",e),!e){i.next=15;break}return i.next=9,(0,Ve.RE)(Je,e);case 9:return n=i.sent,t=n.isSuccess,r=n.data,o=n.error,console.log("data",r),i.abrupt("return",{isSuccess:t,data:r,error:o});case 15:case"end":return i.stop()}}),Ke)}var Xe=(0,Ce.Z)().mark(en);function en(){var e,n,t;return(0,Ce.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,Ve.RE)(Qe);case 3:if(e=r.sent,n=e.isSuccess,t=e.data,!n){r.next=13;break}return console.log("processor",t),r.next=10,(0,Ve.gz)(je(t));case 10:return r.abrupt("return");case 13:console.log("no data");case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),console.log("some api error");case 19:case"end":return r.stop()}}),Xe,null,[[0,16]])}var nn=[(0,Ve.Fm)(Ie,en)],tn=(0,Ce.Z)().mark(rn);function rn(e){var n,t,r,o;return(0,Ce.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n={},t={},r=!1,200===(null===e||void 0===e?void 0:e.status)?(r=!0,n=null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.itemDetails):(r=!1,t=null===e||void 0===e?void 0:e.error),i.abrupt("return",{data:n,error:t,isSuccess:r});case 5:case"end":return i.stop()}}),tn)}var on=(0,Ce.Z)().mark(an);function an(){var e,n,t,r,o;return(0,Ce.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("detailViewTask process"),"https://api.mocki.io/v2/c99bba7e/itemDetails",i.next=4,(0,Ve.RE)(Fe,"https://api.mocki.io/v2/c99bba7e/itemDetails");case 4:if(e=i.sent,console.log("response",e),!e){i.next=15;break}return i.next=9,(0,Ve.RE)(rn,e);case 9:return n=i.sent,t=n.isSuccess,r=n.data,o=n.error,console.log("data",r),i.abrupt("return",{isSuccess:t,data:r,error:o});case 15:case"end":return i.stop()}}),on)}var cn=function(e){return{type:ae,data:e}},sn=(0,Ce.Z)().mark(dn);function dn(e){return(0,Ce.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("detail view processor",e),void 0===e){n.next=6;break}return n.next=4,(0,Ve.gz)(cn(e));case 4:return n.next=6,(0,Ve.gz)(Pe(O.DETAIL_PANEL_VIEW));case 6:case"end":return n.stop()}}),sn)}var ln=(0,Ce.Z)().mark(un);function un(e){var n,t,r;return(0,Ce.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,(0,Ve.RE)(an);case 3:if(n=o.sent,t=n.isSuccess,r=n.data,!t){o.next=13;break}return r.selectedName=e,o.next=10,(0,Ve.RE)(dn,r);case 10:return o.abrupt("return");case 13:console.log("no data");case 14:o.next=19;break;case 16:o.prev=16,o.t0=o.catch(0),console.log("some api error");case 19:return o.abrupt("return",!0);case 20:case"end":return o.stop()}}),ln,null,[[0,16]])}var pn=[(0,Ve.Fm)(re,un)],vn=(0,Ce.Z)().mark(fn);function fn(){return(0,Ce.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Ve.$6)([].concat((0,Ne.Z)(nn),(0,Ne.Z)(pn)));case 2:case"end":return e.stop()}}),vn)}var mn={viewScreenType:""},xn=(0,j.UY)({appRouterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn,n=arguments.length>1?arguments[1]:void 0;return n.type===Ze?(0,M.Z)((0,M.Z)({},e),{},{viewScreenType:n.data}):e},appInitializeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ie:return(0,M.Z)((0,M.Z)({},e),{},{appInitialData:n.data});case Te:return(0,M.Z)((0,M.Z)({},e),{},{appInitialDataObj:n.data});default:return e}},rightPanelReducer:function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SET_RIGHT_PANEL_SCREEN_TYPE":return(0,M.Z)((0,M.Z)({},t),{},{previousRightPanelType:t.rightPanelType,rightPanelType:r.data});case H:return(0,M.Z)((0,M.Z)({},t),{},{selectedProduct:null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.selectedItem,productOptions:null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.productOptions});default:return t}},detailViewReducer:function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SELECTED_ITEM_DETAIL":return(0,M.Z)((0,M.Z)({},t),{},{selectedItem:r.data});case ae:return(0,M.Z)((0,M.Z)({},t),{},{selectedName:null===(e=r.data)||void 0===e||null===(n=e.selectedName)||void 0===n?void 0:n.data});default:return t}}}),gn=(0,Ae.ZP)(),hn=(0,j.MT)((function(e,n){return xn(e,n)}),{},(0,Oe.Uo)((0,j.md)(gn)));gn.run(fn);var Zn=hn,Pn=function(){return(0,k.jsx)(I.Fragment,{children:(0,k.jsx)(_.zt,{store:Zn,children:(0,k.jsx)(Se,{})})})};T.render((0,k.jsx)(Pn,{}),document.getElementById("app"))}}]);
//# sourceMappingURL=772.93fab446.chunk.js.map