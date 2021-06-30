(this.webpackJsonpcrotonia=this.webpackJsonpcrotonia||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(30),c=a.n(s),i=(a(60),a(61),a(83),a(15)),o=(a(84),a(20)),l=a(110),d=a(107),u=a(36),j=a(9),b=a.n(j),p=a(16),m=a(55),h=(a(89),m.a.initializeApp({apiKey:"AIzaSyCFaJschNmmJ_xWr679elmRavNeFeAMkU0",authDomain:"crotonia-8058f.firebaseapp.com",projectId:"crotonia-8058f",storageBucket:"crotonia-8058f.appspot.com",messagingSenderId:"516303607527",appId:"1:516303607527:web:4667048fa93a53925bb442",measurementId:"G-MYDR9SSGLR"}));a(90);function x(){return(x=Object(p.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.auth().signInWithEmailAndPassword(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(p.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.auth().createUserWithEmailAndPassword(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.auth().signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=a(3),v={required:"This field is required",pattern:"Invalid email address",minLength:"Incorrect email or password","auth/user-not-found":"Incorrect email or password","auth/wrong-password":"Incorrect email or password"};function y(){var e=Object(u.a)(),t=e.register,a=e.handleSubmit,n=e.setError,s=e.formState.errors,c=Object(r.useState)(!1),j=Object(i.a)(c,2),b=j[0],p=j[1];return Object(w.jsxs)(l.a,{noValidate:!0,onSubmit:a((function(e){p(!0),function(e,t){return x.apply(this,arguments)}(e.email,e.password).catch((function(e){v[e.code]||(v[e.code]=e.message),console.log(e.code);var t="password";switch(e.code){case"auth/user-not-found":t="email"}n(t,{type:e.code,message:e.message}),p(!1)})).then((function(){p(!1)}))})),children:[Object(w.jsxs)(l.a.Group,{className:"m-2",children:[Object(w.jsx)(l.a.Label,{children:"Email"}),Object(w.jsx)(l.a.Control,Object(o.a)({placeholder:"Enter Email",type:"email"},t("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}))),Object(w.jsx)(l.a.Text,{className:"text-danger small",children:s.email&&v[s.email.type]})]}),Object(w.jsxs)(l.a.Group,{className:"m-2",children:[Object(w.jsx)(l.a.Label,{children:"Password"}),Object(w.jsx)(l.a.Control,Object(o.a)({placeholder:"Enter Password",type:"password"},t("password",{required:!0,minLength:6}))),Object(w.jsx)(l.a.Text,{className:"text-danger small",children:s.password&&v[s.password.type]})]}),Object(w.jsx)(l.a.Group,{className:"m-2",children:Object(w.jsx)(d.a,{disabled:b,type:"submit",children:b?"Loading...":"Login"})})]})}var N=a(108);a(95);function L(){return Object(w.jsxs)(N.a,{className:"login",children:[Object(w.jsx)("div",{className:"display-4 text-center heading ",children:"Login"}),Object(w.jsx)("div",{children:Object(w.jsx)(y,{})})]})}function S(){return Object(w.jsx)("div",{children:"Home"})}var P=a(109),k=a(111),C={name:"",email:"",contestsParticipated:[],contestReports:[]};function E(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.firestore().collection("users").doc(t.email).set(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(p.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.firestore().collection("users").doc(t).get();case 2:if(!(a=e.sent)||!a.exists){e.next=6;break}return r=a.data(),e.abrupt("return",Object(o.a)(Object(o.a)({},C),r));case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=Object(r.createContext)([void 0,function(){}]);function q(){return Object(r.useContext)(A)}function G(e){var t=e.children,a=Object(r.useState)(void 0),n=Object(i.a)(a,2),s=n[0],c=n[1];return Object(r.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e&&e.email?function(e){return T.apply(this,arguments)}(e.email).then((function(e){return c(e)})):c(null)}))}),[]),Object(w.jsx)(A.Provider,{value:[s,c],children:t})}var R=a.p+"static/media/crotoniaLogo.b75b7c25.png";function z(){var e=q(),t=Object(i.a)(e,1)[0];return Object(w.jsxs)(P.a,{className:"px-3",bg:"light",expand:"lg",children:[Object(w.jsx)(P.a.Brand,{children:Object(w.jsx)("img",{alt:"crotonia logo",height:60,src:R})}),Object(w.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(P.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(k.a,{className:"w-100",children:[Object(w.jsx)(k.a.Link,{href:"#",className:"me-auto",children:"Home"}),t&&Object(w.jsx)(k.a.Link,{href:"#",onClick:f,children:"Sign Out"}),!t&&Object(w.jsx)(k.a.Link,{href:"#login",children:"Login"}),!t&&Object(w.jsx)(k.a.Link,{href:"#signup",children:"Register"})]})})]})}var F=a(53),B=a(14),J={required:"This field is required",pattern:"Invalid email address",minLength:"The password must be atleast 6 characters",validate:"Passwords do not match"};function Z(){var e=q(),t=Object(i.a)(e,2)[1],a=Object(r.useState)(!1),n=Object(i.a)(a,2),s=n[0],c=n[1],j=Object(u.a)(),m=j.register,h=j.handleSubmit,x=j.getValues,f=j.setError,g=j.formState.errors;return Object(w.jsxs)(l.a,{noValidate:!0,onSubmit:h((function(e){c(!0);var a=Object(o.a)(Object(o.a)({},C),{},{name:e.name,email:e.email});(function(e,t){return O.apply(this,arguments)})(e.email,e.password).then(Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(a);case 2:return e.next=4,t(a);case 4:c(!1);case 5:case"end":return e.stop()}}),e)})))).catch((function(e){J[e.code]||(J[e.code]=e.message);var t="confirmPassword";switch(e.code){case"auth/user-not-found":t="email"}f(t,{type:e.code,message:e.message}),c(!1)}))})),children:[Object(w.jsxs)(l.a.Group,{className:"m-2",children:[Object(w.jsx)(l.a.Label,{children:"Name"}),Object(w.jsx)(l.a.Control,Object(o.a)({placeholder:"Enter Name"},m("name",{required:!0}))),Object(w.jsx)(l.a.Text,{className:"text-danger small",children:g.name&&J[g.name.type]})]}),Object(w.jsxs)(l.a.Group,{className:"m-2",children:[Object(w.jsx)(l.a.Label,{children:"Email"}),Object(w.jsx)(l.a.Control,Object(o.a)({placeholder:"Enter Email",type:"email"},m("email",{required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}))),Object(w.jsx)(l.a.Text,{className:"text-danger small",children:g.email&&J[g.email.type]})]}),Object(w.jsxs)(l.a.Group,{className:"m-2",children:[Object(w.jsx)(l.a.Label,{children:"Password"}),Object(w.jsx)(l.a.Control,Object(o.a)({placeholder:"Enter Password",type:"password"},m("password",{required:!0,minLength:6}))),Object(w.jsx)(l.a.Text,{className:"text-danger small",children:g.password&&J[g.password.type]})]}),Object(w.jsxs)(l.a.Group,{className:"m-2",children:[Object(w.jsx)(l.a.Label,{children:"Confirm Password"}),Object(w.jsx)(l.a.Control,Object(o.a)({placeholder:"Renter Password",type:"password"},m("confirmPassword",{required:!0,minLength:6,validate:function(e){return e===x("password")}}))),Object(w.jsx)(l.a.Text,{className:"text-danger small",children:g.confirmPassword&&J[g.confirmPassword.type]})]}),Object(w.jsx)(l.a.Group,{className:"m-2",children:Object(w.jsx)(d.a,{disabled:s,type:"submit",children:s?"Loading...":"Sign Up"})})]})}a(96);function D(){return Object(w.jsxs)(N.a,{className:"signup",children:[Object(w.jsx)("div",{className:"display-4 text-center heading",children:"Register"}),Object(w.jsx)("div",{children:Object(w.jsx)(Z,{})})]})}function M(){return Object(w.jsx)("div",{className:"d-flex align-items-center justify-content-center min-vh-100",children:Object(w.jsx)("div",{className:"spinner-border",role:"status"})})}var U=function(){var e=q(),t=Object(i.a)(e,1)[0];return void 0===t?Object(w.jsx)(M,{}):Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(z,{}),Object(w.jsx)(F.a,{children:Object(w.jsxs)(B.d,{children:[Object(w.jsx)(B.b,{path:"/",exact:!0,children:Object(w.jsx)(S,{})}),Object(w.jsx)(B.b,{path:"/login",exact:!0,children:t?Object(w.jsx)(B.a,{to:"/"}):Object(w.jsx)(L,{})}),Object(w.jsx)(B.b,{path:"/signup",exact:!0,children:t?Object(w.jsx)(B.a,{to:"/"}):Object(w.jsx)(D,{})})]})})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(G,{children:Object(w.jsx)(U,{})})}),document.getElementById("root")),V()},83:function(e,t,a){},84:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.cbb3afac.chunk.js.map