(this["webpackJsonpmy-movies-list"]=this["webpackJsonpmy-movies-list"]||[]).push([[0],{53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"loadState",(function(){return f})),n.d(i,"saveState",(function(){return b})),n.d(i,"clearState",(function(){return m}));var o=n(1),a=n(2),c=n.n(a),A=n(21),s=n.n(A),r=n(4),l=n(19),u=n(27),U=n(23),F=(n(48),n(50),n(80),{apiKey:"AIzaSyA6XUq8nOL2vre9ZU4EJShlxA_MOQqjmN4",authDomain:"mymovieslist-86230.firebaseapp.com",databaseURL:"https://mymovieslist-86230.firebaseio.com",projectId:"mymovieslist-86230",storageBucket:"mymovieslist-86230.appspot.com",messagingSenderId:"137868625948",appId:"1:137868625948:web:1409fc04a3064b5cb937d9",measurementId:"G-QEHSQDNN70"}),R=new function t(){var e=this;Object(u.a)(this,t),this.signInWithEmail=function(t,n){return e.auth.signInWithEmailAndPassword(t,n)},this.signUpWithEmail=function(t,n){return e.auth.createUserWithEmailAndPassword(t,n)},this.signInWithGoogle=function(){return U.a.auth().signInWithPopup(new U.a.auth.GoogleAuthProvider)},this.signOut=function(){return e.auth.signOut()},this.addItem=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.dataCollection;return e.db.collection(e.rootCollection).doc(t).collection(i).doc(n.id).set(n)},this.updateItem=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.dataCollection;return e.db.collection(e.rootCollection).doc(t).collection(i).doc(n.id).set(n,{merge:!0})},this.removeItem=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.dataCollection;return e.db.collection(e.rootCollection).doc(t).collection(i).doc(n).delete()},this.getItems=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.dataCollection;return e.db.collection(e.rootCollection).doc(t).collection(n).get()},this.getSettings=function(t){return e.db.collection(e.rootCollection).doc(t).collection(e.settingsCollection).doc(e.commonSettingsDoc).get()},this.updateSettings=function(t,n){return e.db.collection(e.rootCollection).doc(t).collection(e.settingsCollection).doc(e.commonSettingsDoc).set(n,{merge:!0})},U.a.initializeApp(F),this.auth=U.a.auth(),this.db=U.a.firestore(),this.rootCollection="data",this.dataCollection="movies-list",this.settingsCollection="settings",this.commonSettingsDoc="common"},d=new function t(e){var n=this;Object(u.a)(this,t),this.searchMovie=function(t){return fetch("".concat(n.baseUrl,"&s=").concat(t)).then((function(t){return t.json()})).then((function(t){return t}))},this.getMovieInfo=function(t){return fetch("".concat(n.baseUrl,"&i=").concat(t)).then((function(t){return t.json()})).then((function(t){return t}))},this.apiKey=e,this.baseUrl="https://www.omdbapi.com/?apikey=".concat(this.apiKey)}("c1b17339"),j="MyMoviesList",f=function(){try{var t=localStorage.getItem(j);if(null===t)return;return JSON.parse(t)}catch(e){return}},b=function(t){try{var e=JSON.stringify(t);localStorage.setItem(j,e)}catch(n){}},m=function(){localStorage.removeItem(j)},h=R,O=n(36),K=n(8),v=n(18),g="ADD_ITEM",C="UPDATE_ITEM",p="REMOVE_ITEM",x="GET_ITEMS",N="SEARCH_MOVIE",E="GET_MOVIE_INFO",B="SIGN_IN",S="SIGN_OUT",I="GET_SETTINGS",T="UPDATE_SETTINGS",P="ERROR",w="SHOW_MODAL",Q="HIDE_MODAL",H=[],y={},G=[],M={uid:null,isLogged:!1},D={language:"en",theme:"light"},_=n(20),k={auth:{isVisible:!1,data:null},fav:{isVisible:!1,data:null}},X=Object(l.c)({data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0,n=e.type,i=e.payload;switch(n){case g:return[].concat(Object(v.a)(t),[i]);case C:return t.filter((function(t){return t.id===i.id})).length?t.map((function(t){return t.id===i.id?Object(K.a)(Object(K.a)({},t),i):t})):[].concat(Object(v.a)(t),[i]);case p:return t.filter((function(t){return t.id!==i}));case x:return Object(v.a)(i);case S:return[];default:return t}},movieInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0,n=e.type,i=e.payload;switch(n){case E:return Object(K.a)({},i);default:return t}},searchResults:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0,n=e.type,i=e.payload;switch(n){case N:return Object(v.a)(i);default:return t}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return{uid:e.payload.uid,email:e.payload.email,isLogged:!0};case S:return M;default:return t}},settings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0,n=e.type,i=e.payload;switch(n){case I:case T:return Object(K.a)(Object(K.a)({},t),i);default:return t}},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P:return alert(e.payload),e.payload;default:return t}},modals:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0,n=e.type,i=e.payload;switch(n){case w:return Object(K.a)(Object(K.a)({},t),{},Object(_.a)({},i.modalName,{isVisible:!0,data:i.data}));case Q:return Object(K.a)(Object(K.a)({},t),{},Object(_.a)({},i,{isVisible:!1}));default:return t}}}),V=i.loadState(),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,W=Object(l.e)(X,V,L(Object(l.a)(O.a)));W.subscribe((function(){var t=W.getState(),e=t.data,n=t.user,o=t.settings;i.saveState({data:e,user:n,settings:o})}));var Z=W;const z=[{value:"en",label:"EN"},{value:"ua",label:"UA"},{value:"ru",label:"RU"}],Y={en:{SIGN_IN:"Sign In",SIGN_UP:"Sign Up",SIGN_OUT:"Sign Out",SEARCH_MOVIE:"Search",SEARCH_MOVIE_PLACEHOLDER:"Enter movie title",AUTHENIFICATION:"Authenification",YOUR_EMAIL:"Your email",YOUR_PASSWORD:"Your password",CREATE_AN_ACCOUNT:"Create an Account",CONNECT_WITH:"or connect with",TOGGLE_THEME:"Change theme",TOGGLE_LANGUAGE:"Change language",MOVIE_INFO:"Movie info",HOME:"Home",FAVOURITES:"Favourites",WATCH_LATER:"Watch later",WATCHED:"Watched"},ua:{SIGN_IN:"\u0423\u0432\u0456\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c",SIGN_OUT:"\u0412\u0438\u0439\u0442\u0438",SEARCH_MOVIE:"\u0428\u0443\u043a\u0430\u0442\u0438",SEARCH_MOVIE_PLACEHOLDER:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0430",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0456\u0444\u0456\u043a\u0430\u0446\u0456\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441",CONNECT_WITH:"\u0430\u0431\u043e \u0443\u0432\u0456\u0439\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e",TOGGLE_THEME:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0442\u0435\u043c\u0443",TOGGLE_LANGUAGE:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u043c\u043e\u0432\u0443",MOVIE_INFO:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0444\u0456\u043b\u044c\u043c",HOME:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",FAVOURITES:"\u0423\u043b\u044e\u0431\u043b\u0435\u043d\u0435",WATCH_LATER:"\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044c \u043f\u0456\u0437\u043d\u0456\u0448\u0435",WATCHED:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0435"},ru:{SIGN_IN:"\u0412\u043e\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",SIGN_OUT:"\u0412\u044b\u0439\u0442\u0438",SEARCH_MOVIE:"\u0418\u0441\u043a\u0430\u0442\u044c",SEARCH_MOVIE_PLACEHOLDER:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c",CONNECT_WITH:"\u0438\u043b\u0438 \u0432\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e",TOGGLE_THEME:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443",TOGGLE_LANGUAGE:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u044f\u0437\u044b\u043a",MOVIE_INFO:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0444\u0438\u043b\u044c\u043c\u0435",HOME:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",FAVOURITES:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",WATCH_LATER:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u0437\u0436\u0435",WATCHED:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u043e\u0435"}};var q=Object(a.createContext)();q.displayName="Localization";var J=function(t){var e,n=t.children,i=Object(r.c)((function(t){return t.settings.language}));return Object(o.jsx)(q.Provider,{value:(e=i,Y[e]),children:n})};n(53);function $(t){return{type:P,payload:t}}var tt=function(t,e){return function(n){t?h.updateItem(t,e).then((function(){return n({type:C,payload:e})})).catch((function(t){return n($(t.message))})):n({type:C,payload:e})}},et=function(t,e){return function(n){t?h.removeItem(t,e).then((function(){return n({type:p,payload:e})})).catch((function(t){return n($(t.message))})):n({type:p,payload:e})}};function nt(t){return{type:P,payload:t}}function it(t){return{type:P,payload:t}}function ot(t){return{type:B,payload:{uid:t.user.uid,email:t.user.email}}}function at(t){return{type:P,payload:t}}var ct=function(t,e){return function(n){t?h.updateSettings(t,e).then((function(){return n({type:T,payload:e})})).catch((function(t){return n(at(t.message))})):n({type:T,payload:e})}},At=function(t){return{type:w,payload:t}},st=function(t){return{type:Q,payload:t}},rt=(n(54),function(t){var e=t.onClick,n=t.extraClassName,i=t.type,a=t.btnType,c=t.size,A=t.text,s="ui-button ui-button--".concat(a," ui-button--").concat(c," ").concat(n);return Object(o.jsx)("button",{type:i,className:s,onClick:e,children:A})});rt.defaultProps={extraClassName:"",onClick:null,size:"normal",type:"button",btnType:"default",text:"Some Text"};n(55),n(56);var lt=function(t){var e=t.icon,n=t.children,i=t.onClick,a=t.extraClassName,c=t.title,A=t.type,s=a?"ui-icon-button ui-icon-button--".concat(e," ").concat(a):"ui-icon-button ui-icon-button--".concat(e);return Object(o.jsx)("button",{type:A,className:s,onClick:i,title:c,children:n})};lt.defaultProps={icon:"",extraClassName:"",title:"",onClick:null,children:null,type:"button"};n(57);var ut=function(t){var e=t.type,n=t.name,i=t.value,a=t.onChange,c=t.extraClassName,A=t.placeholder,s=t.required,r=c?"ui-input ".concat(c):"ui-input";return Object(o.jsx)("input",{type:e,name:n,value:i,className:r,onChange:a,placeholder:A,required:s})};ut.defaultProps={extraClassName:"",onChange:null,value:"",type:"text",name:"ui-input",placeholder:"",required:!1};n(58);var Ut=function(t){var e=t.value,n=t.onChange,i=t.options,a=t.extraClassName,c=t.title,A=a?"ui-select ".concat(a):"ui-select";return Object(o.jsx)("select",{onChange:n,value:e,className:A,title:c,children:i.map((function(t){return Object(o.jsx)("option",{value:t.value,className:"ui-select__option",children:t.label},t.value)}))})};Ut.defaultProps={extraClassName:"",onChange:null,value:"",title:"",options:[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"}]};var Ft=n(16),Rt=(n(59),function(t){var e=t.extraClassName,n=t.labels,i=t.children,c=t.activeTab,A=t.onTabClick,s="ui-tabs ".concat(e),r=Object(a.useState)(c),l=Object(Ft.a)(r,2),u=l[0],U=l[1];function F(t){U(n.indexOf(t.target.value)),A&&A()}function R(t){return t===u?"ui-tabs__item ui-tabs__item--active":"ui-tabs__item"}return Object(o.jsxs)("div",{className:s,children:[Object(o.jsx)("ol",{className:"ui-tabs__list",children:n.map((function(t,e){return Object(o.jsx)("li",{className:R(e),children:Object(o.jsx)("input",{className:"ui-tabs__btn",type:"button",onClick:F,value:t})},t)}))}),Object(o.jsx)("div",{className:"ui-tabs__content",children:i.map((function(t,e){return e!==u?null:t}))})]})});Rt.defaultProps={extraClassName:"",activeTab:0,labels:[],children:null,onTabClick:null};n(60);var dt=function(t){var e=t.title,n=t.isVisible,i=t.onClose,a=t.children,c=t.extraClassName,s=c?"ui-modal ".concat(c):"ui-modal",r=document.getElementById("modal-root");return Object(A.createPortal)(n&&Object(o.jsx)("div",{className:"ui-modal__overlay",children:Object(o.jsxs)("div",{className:s,children:[Object(o.jsxs)("div",{className:"ui-modal__header",children:[Object(o.jsx)("h4",{className:"ui-modal__title",children:e}),Object(o.jsx)(lt,{extraClassName:"ui-modal__btn-close",icon:"cancel",onClick:i})]}),Object(o.jsx)("div",{className:"ui-modal__content",children:a})]})}),r)};dt.defaultProps={title:"Modal title",isVisible:!1};n(61),n(62);var jt=function(){var t=Object(r.b)(),e=Object(a.useContext)(q),n=Object(r.c)((function(t){return t.settings.language})),i=Object(r.c)((function(t){return t.user.uid}));return Object(o.jsx)(Ut,{value:n,onChange:function(e){var n=e.target.value;t(ct(i,{language:n}))},options:z,extraClassName:"language-selector",title:e.TOGGLE_LANGUAGE})},ft=function(){var t=Object(a.useContext)(q),e=Object(r.b)(),n=Object(r.c)((function(t){return t.settings.theme})),i=Object(r.c)((function(t){return t.user.uid})),c="light"===n?"moon":"sun";return Object(o.jsx)(lt,{icon:c,onClick:function(){e(ct(i,{theme:"light"===n?"dark":"light"}))},title:t.TOGGLE_THEME})},bt=function(){var t=Object(a.useContext)(q),e=Object(r.b)(),n=Object(r.c)((function(t){return t.user.isLogged}));return Object(o.jsx)(lt,{icon:n?"user":"user-o",title:n?t.SIGN_OUT:t.SIGN_IN,onClick:function(){e(n?function(t){h.signOut().then((function(){return t({type:S})})).then((function(){return i.clearState()})).catch((function(e){return t(it(e.message))}))}:At({modalName:"auth",data:null}))}})},mt=(n(63),function(t){var e=t.onSubmit,n=t.onChange,i=t.data,a=i.email,c=i.password,A=t.STR;return Object(o.jsxs)("form",{onSubmit:e,className:"signin-form",children:[Object(o.jsx)(ut,{type:"email",name:"email",value:a,extraClassName:"signin-form__input",placeholder:A.YOUR_EMAIL,onChange:n,required:!0}),Object(o.jsx)(ut,{type:"password",name:"password",extraClassName:"signin-form__input",value:c,placeholder:A.YOUR_PASSWORD,onChange:n,required:!0}),Object(o.jsx)("div",{className:"signin-form__btns",children:Object(o.jsx)(rt,{type:"submit",btnType:"primary",text:A.SIGN_IN,onClick:e})})]})});mt.defaultProps={STR:{YOUR_EMAIL:"Your Email",YOUR_PASSWORD:"Your password",SIGN_IN:"Sign In"}};n(64);var ht=function(t){var e=t.onSubmit,n=t.onChange,i=t.data,a=i.email,c=i.password,A=t.STR;return Object(o.jsxs)("form",{onSubmit:e,className:"signup-form",children:[Object(o.jsx)(ut,{type:"email",name:"email",value:a,extraClassName:"signup-form__input",placeholder:A.YOUR_EMAIL,onChange:n,required:!0}),Object(o.jsx)(ut,{type:"password",name:"password",value:c,extraClassName:"signup-form__input",placeholder:A.YOUR_PASSWORD,onChange:n,required:!0}),Object(o.jsx)("div",{className:"signup-form__btns",children:Object(o.jsx)(rt,{type:"submit",btnType:"primary",text:A.CREATE_AN_ACCOUNT,onClick:e})})]})};ht.defaultProps={STR:{YOUR_EMAIL:"Your Email",YOUR_PASSWORD:"Your password",CREATE_AN_ACCOUNT:"Create an account"}};n(65);var Ot=function(t){var e=t.onSignInWithGoogle,n=t.STR;return Object(o.jsxs)("div",{className:"social-login",children:[Object(o.jsx)("div",{className:"social-login__label",children:n.CONNECT_WITH}),Object(o.jsx)("div",{className:"social-login__btns",children:Object(o.jsx)(lt,{icon:"google",onClick:e,extraClassName:"social-login__btn"})})]})};Ot.defaultProps={STR:{CONNECT_WITH:"or connect with"}};n(66);var Kt=function(){var t=Object(a.useContext)(q),e=Object(r.b)(),n=Object(r.c)((function(t){return t.user.isLogged})),i=Object(r.c)((function(t){return t.modals.auth.isVisible})),c={email:"",password:""},A=Object(a.useState)(c),s=Object(Ft.a)(A,2),l=s[0],u=s[1];function U(t){var e=t.target,n=e.name,i=e.value;u(Object(K.a)(Object(K.a)({},l),{},Object(_.a)({},n,i)))}return Object(a.useEffect)((function(){n&&(u(c),e(st("auth")))}),[n]),Object(o.jsxs)(dt,{isVisible:i,onClose:function(){u(c),e(st("auth"))},title:t.AUTHENIFICATION,children:[Object(o.jsxs)(Rt,{labels:[t.SIGN_IN,t.SIGN_UP],extraClassName:"auth-form__tabs",onTabClick:function(){u(c)},children:[Object(o.jsx)(mt,{onSubmit:function(t){var n,i;l.email&&l.password&&(t.preventDefault(),e((n=l.email,i=l.password,function(t){h.signInWithEmail(n,i).then((function(e){return t(ot(e))})).catch((function(e){return t(it(e.message))}))})))},onChange:U,data:l,STR:t}),Object(o.jsx)(ht,{onSubmit:function(t){var n,i;l.email&&l.password&&(t.preventDefault(),e((n=l.email,i=l.password,function(t){h.signUpWithEmail(n,i).then((function(e){return t(ot(e))})).catch((function(e){return t(it(e.message))}))})))},onChange:U,data:l,STR:t})]}),Object(o.jsx)(Ot,{onSignInWithGoogle:function(){e((function(t){h.signInWithGoogle().then((function(e){return t(ot(e))})).catch((function(e){return t(it(e.message))}))}))},STR:t})]})},vt=(n(67),c.a.memo((function(){var t=Object(a.useContext)(q),e=Object(r.b)(),n=Object(a.useState)(""),i=Object(Ft.a)(n,2),c=i[0],A=i[1];function s(t){c&&(t.preventDefault(),e(function(t){return function(e){d.searchMovie(t).then((function(t){(null===t||void 0===t?void 0:t.Search)?e({type:N,payload:t.Search}):e($(t.Error))})).catch((function(t){return e($(t.message))}))}}(c)))}return Object(o.jsxs)("form",{className:"search-movie-form",onSubmit:s,children:[Object(o.jsx)(ut,{type:"search",value:c,onChange:function(t){A(t.target.value)},extraClassName:"search-movie-form__input",placeholder:t.SEARCH_MOVIE_PLACEHOLDER,required:!0}),Object(o.jsx)(lt,{type:"submit",icon:"search",title:t.SEARCH_MOVIE,extraClassName:"search-movie-form__btn",onClick:s})]})}))),gt=n(7),Ct="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCgoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAeABQAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP38ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoZtq59KKG6UAY/iLx9o3hCSFdV1Ky0958mNZ5QrPjrgenvUmmeM9J1of6HqWn3R7CK5RyfwBr5l/ah1A6h8Zb6MFitnBDAMk4Hy7iB+LGvPTAD/BH+VAH3d5v+y2PUDNCyBzxXxDp/iXVNIZTaalf2u3p5Vy6Y/I1vab8d/GWjj9zr97IPScrPn8XUmgD7Cor5e0v9rnxdY8TLpd5/10tSD+auo/St/S/wBtS8Ur9u8Pwv6m3uGX9GX+tAH0FRXjth+2ToM+BcabrVq3crHHKv5hwf0roNN/aa8G6ltzq72rNxtntpEx9TtwPxNAHoVFc/pXxR8O61j7Lr2jzN6Ldpu/75zn863oZ0uIw8brIp6MpyDQA6igtikLgDrQAtFG4E4zzRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUMMrRTLiZbe3kkb7salj9BQB8a/F7VP7Y+KniKZm3AX8sQIPUIxT/wBlql4R8Dar481KS10mze8miTzHAkVFReOSWIHU465rPvLxtS1G6uP4rmZ5iT3LMWP6k17h+xZpyvJ4guirBlEEIP8ACRl2I/MA/wDAqAPM9S+Bni7Sd3neH9QIUZJi2zD/AMcJrn9R0K+0hlW60++tWbtPC8R/JgD+Vfcu0Uy6lS1tpJJG2xxqWYnoAOTQB8ImVd20fMR1AySPwp2F/wBqvri38RfD3xum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UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z",pt=(n(68),function(t){var e=t.data,n=e.Title,i=e.Year,c=e.Poster,A=e.Runtime,s=e.Genre,r=e.Director,l=e.Country,u=e.Plot,U=e.imdbRating,F=e.Actors,R=t.isVisible,d=t.onClose,j=Object(a.useContext)(q);return Object(o.jsx)(dt,{isVisible:R,onClose:d,title:j.MOVIE_INFO,extraClassName:"movie-modal",children:Object(o.jsxs)("div",{className:"movie-modal__content",children:[Object(o.jsx)("img",{src:"N/A"!==c?c:Ct,alt:n,className:"movie-modal__poster"}),Object(o.jsxs)("div",{className:"movie-modal__details",children:[Object(o.jsx)("h4",{className:"movie-modal__title",children:n}),Object(o.jsx)("p",{className:"movie-modal__plot",children:u}),Object(o.jsxs)("ul",{className:"movie-modal__info",children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Genre:"}),s]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Cast:"}),F]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Director:"}),r]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Country:"}),l]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Duration:"}),A]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Release:"}),i]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Rating:"}),U]})]})]})]})})});pt.defaultProps={STR:{MOVIE_INFO:"Movie info"}};n(69);var xt=c.a.memo((function(t){var e=t.onAddToListClick,n=t.data,i=Object(a.useState)(!1),c=Object(Ft.a)(i,2),A=c[0],s=c[1],r=Object(a.useState)(n||[]),l=Object(Ft.a)(r,2),u=l[0],U=l[1];function F(t){var n=t.target.value;u.includes(n)?(U(u.filter((function(t){return t!==n}))),e(u.filter((function(t){return t!==n})))):(U([].concat(Object(v.a)(u),[n])),e([].concat(Object(v.a)(u),[n]))),s(!A)}return Object(o.jsxs)("div",{className:"movie-list-item-menu",children:[Object(o.jsx)(lt,{onClick:function(){s(!A)},icon:"menu",extraClassName:"movie-list-item-menu__btn"}),A&&Object(o.jsxs)("ul",{className:"movie-list-item-menu__items",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",value:"watch-later",onChange:F,checked:u.includes("watch-later")}),"Watch later"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",value:"watched",onChange:F,checked:u.includes("watched")}),"Watched"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",value:"favourites",onChange:F,checked:u.includes("favourites")}),"Favourites"]})})]})]})})),Nt=(n(70),c.a.memo((function(t){var e=t.data,n=e.Title,i=e.Poster,a=e.Year,c=e.imdbID,A=e.lists,s=t.onAddToListClick,r=t.onShowInfoClick;return Object(o.jsxs)("li",{id:c,className:"movie-list-item",children:[Object(o.jsx)(xt,{data:A,onAddToListClick:function(t){s(c,t)}}),Object(o.jsx)("img",{src:"N/A"!==i?i:Ct,alt:n,width:"320",height:"480",className:"movie-list-item__poster",onClick:function(){r(c)}}),Object(o.jsxs)("div",{className:"movie-list-item__details",children:[Object(o.jsx)("span",{className:"movie-list-item__title",children:n}),Object(o.jsx)("span",{className:"movie-list-item__year",children:a})]})]})}))),Et=(n(71),function(){var t=Object(gt.d)().pathname.slice(1),e=Object(r.b)(),n=Object(r.c)((function(t){return t})),i=n.user.uid,a=n.modals,c=t?Object(r.c)((function(t){return t.data})).filter((function(e){return e.lists.includes(t)})):Object(r.c)((function(t){return t.searchResults})),A=Object(r.c)((function(t){return t.movieInfo}));function s(t,n){var o=c.find((function(e){return e.imdbID===t}));n.length?e(tt(i,Object(K.a)(Object(K.a)({},o),{},{id:t,lists:n}))):e(et(i,t))}function l(t){e(function(t){return function(e){d.getMovieInfo(t).then((function(t){e(t?{type:E,payload:t}:nt(t.Error))})).catch((function(t){return e(nt(t.message))}))}}(t)),e(At({modalName:"fav",data:null}))}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"movie-list",children:Object(o.jsx)("ul",{className:"movie-list__list",children:c.map((function(t){return Object(o.jsx)(Nt,{data:t,onAddToListClick:s,onShowInfoClick:l},t.imdbID)}))})}),Object(o.jsx)(pt,{isVisible:a.fav.isVisible,onClose:function(){e(st("fav"))},data:A})]})});n(75);var Bt=n(15);n(76);const St=()=>Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("div",{className:"header__content wrapper",children:[Object(o.jsx)(Bt.b,{to:"/",className:"header__logo",children:"MyMoviesList"}),Object(o.jsx)(vt,{}),Object(o.jsxs)("div",{className:"header__menu",children:[Object(o.jsx)(jt,{}),Object(o.jsx)(ft,{}),Object(o.jsx)(bt,{})]})]})});n(77),n(78);const It=()=>{const t=Object(a.useContext)(q),[e,n]=Object(a.useState)(!1);return Object(o.jsx)("nav",{className:e?"nav":"nav nav--collapsed",children:Object(o.jsxs)("div",{className:"nav__content",children:[Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)("li",{className:"nav-links__item",children:Object(o.jsx)(Bt.c,{to:"/",exact:!0,className:"nav-links__link nav-links__link--home",title:t.HOME,children:t.HOME})}),Object(o.jsx)("li",{className:"nav-links__item",children:Object(o.jsx)(Bt.c,{to:"favourites",className:"nav-links__link nav-links__link--favourites",title:t.FAVOURITES,children:t.FAVOURITES})}),Object(o.jsx)("li",{className:"nav-links__item",children:Object(o.jsx)(Bt.c,{to:"watch-later",className:"nav-links__link nav-links__link--watch-later",title:t.WATCH_LATER,children:t.WATCH_LATER})}),Object(o.jsx)("li",{className:"nav-links__item",children:Object(o.jsx)(Bt.c,{to:"watched",className:"nav-links__link nav-links__link--watched",title:t.WATCHED,children:t.WATCHED})})]}),Object(o.jsx)(lt,{icon:e?"left-open":"right-open",onClick:function(){n(!e)},extraClassName:"nav__toggler"})]})})};var Tt=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(St,{}),Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(It,{}),Object(o.jsx)("div",{className:"main__content wrapper",children:Object(o.jsx)(Et,{})})]})]})};var Pt=function(){var t=Object(r.c)((function(t){return t.user})),e=t.uid,n=t.isLogged,i=Object(r.c)((function(t){return t.settings.theme}));document.documentElement.setAttribute("data-theme",i);var c=Object(r.b)();return Object(a.useEffect)((function(){n&&(c(function(t){return function(e){h.getItems(t).then((function(t){var n=[];t.forEach((function(t){return n.push(t.data())})),e({type:x,payload:n})})).catch((function(t){return e($(t.message))}))}}(e)),c(function(t){return function(e){h.getSettings(t).then((function(t){t.data()&&e({type:I,payload:t.data()})})).catch((function(t){return e(at(t.message))}))}}(e)))})),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(Bt.a,{children:Object(o.jsx)(Tt,{})}),Object(o.jsx)(Kt,{})]})};s.a.render(Object(o.jsx)(r.a,{store:Z,children:Object(o.jsx)(J,{children:Object(o.jsx)(Pt,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.adda801d.chunk.js.map