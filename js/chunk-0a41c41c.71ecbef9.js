(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a41c41c"],{"2b42":function(t,a,e){},"3d47":function(t,a,e){"use strict";var s=e("a1e8"),i=e.n(s);a["default"]=i.a},"4bcf":function(t,a,e){"use strict";e("2b42")},"5a5f":function(t,a,e){"use strict";e("80a9")},6148:function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"py-md-4"},[e("nav",{staticClass:"navbar sticky-top navbar-expand-lg"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dyson_logo.svg/1280px-Dyson_logo.svg.png",width:"100",alt:""}})]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("ion-icon",{attrs:{name:"apps-outline"}})],1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/about-us"}},[t._v("Aboout Us")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/have-an-issue"}},[t._v("Have an issue?")])],1)]),e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link  btnd btn-outlined-success my-2 my-sm-0 px-md-4 py-1 btn-rounded",attrs:{to:"/login",type:"submit"}},[t._v("Login")])],1),e("li",{staticClass:"nav-item ml-md-3"},[e("router-link",{staticClass:"nav-link btnd btn-outlined-success my-2 my-sm-0 px-md-4 py-1 btn-rounded",attrs:{to:"/sign-up",type:"submit"}},[t._v("Sign Up")])],1)])])],1)])])},i=[]},"62d2":function(t,a,e){"use strict";e("7a99")},"7a99":function(t,a,e){},"7c0d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("div",{staticClass:"main-padding"},[e("LandingNavbar")],1),e("div",{staticClass:"div bg-anon main-padding py-5"},[e("div",{staticClass:"card shadow border-0"},[e("div",{staticClass:"d-flex align-items-ceter"},[e("div",{staticClass:"d-none d-md-block p-3 p-md-4",staticStyle:{flex:"1","background-color":"var(--bgColor2)"}},[e("p",[e("ion-icon",{attrs:{name:"star-half-outline"}}),e("ion-icon",{attrs:{name:"star-half-outline"}})],1),e("p",{staticClass:"h2 font-weight-bold my-5"},[t._v("Sign up to get started")]),e("p",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ullam consequuntur debitis impedit optio porro necessitatibus earum odio, aliquid accusamu ")])]),t.firstShow?e("div",{staticClass:"p-3 py-4 p-md-5",staticStyle:{flex:"2"}},[e("p",{staticClass:"lead h2 font-weight-bold mb-4"},[t._v(" Tell us about your self ")]),e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.showSecond(a)}}},[e("label",{attrs:{for:"customerName"}},[t._v("First Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.details.firstName,expression:"details.firstName"}],attrs:{type:"text",id:"customerName",name:"customerName",required:""},domProps:{value:t.details.firstName},on:{input:function(a){a.target.composing||t.$set(t.details,"firstName",a.target.value)}}}),e("br"),e("label",{attrs:{for:"customerName"}},[t._v("Last Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.details.lastName,expression:"details.lastName"}],attrs:{type:"text",id:"customerName",name:"customerName",required:""},domProps:{value:t.details.lastName},on:{input:function(a){a.target.composing||t.$set(t.details,"lastName",a.target.value)}}}),e("br"),e("label",{attrs:{for:"customerEmail"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.details.email,expression:"details.email"}],attrs:{type:"email",id:"customerEmail",name:"customerEmail",required:""},domProps:{value:t.details.email},on:{input:function(a){a.target.composing||t.$set(t.details,"email",a.target.value)}}}),e("br"),e("button",{attrs:{id:"customerOrder"}},[t._v(" Continue ")]),e("button",{staticClass:"customerOrder2"},[e("router-link",{attrs:{to:"/login"}},[t._v(" Back to login ")])],1)])])]):t._e(),t.firstShow?t._e():e("div",{staticClass:"p-3 py-4 p-md-5",staticStyle:{flex:"2"}},[e("p",{staticClass:"lead h2 font-weight-bold mb-md-4"},[t._v(" A little more information ")]),e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.startLoading(a)}}},[e("br"),e("label",{attrs:{for:"country"}},[t._v("Country")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.details.country,expression:"details.country"}],attrs:{type:"text",id:"country",name:"country",required:""},domProps:{value:t.details.country},on:{input:function(a){a.target.composing||t.$set(t.details,"country",a.target.value)}}}),e("br"),e("label",{attrs:{for:"customerPhone"}},[t._v("Phone Number")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.details.phoneNumber,expression:"details.phoneNumber"}],attrs:{type:"tel",id:"customerPhone",name:"customerPhone",required:""},domProps:{value:t.details.phoneNumber},on:{input:function(a){a.target.composing||t.$set(t.details,"phoneNumber",a.target.value)}}}),e("br"),e("label",{attrs:{for:"password"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.details.password,expression:"details.password"}],attrs:{type:"password",id:"password",name:"password",required:""},domProps:{value:t.details.password},on:{input:function(a){a.target.composing||t.$set(t.details,"password",a.target.value)}}}),e("br"),t.loading?t._e():e("div",{attrs:{disabled:t.loading},on:{click:t.goBack}},[e("button",[t._v(" Back ")])]),t.loading?e("button",{staticClass:"customerOrder2",attrs:{disabled:t.loading}},[t._m(0),t._v(" Loading ")]):t._e(),t.loading?t._e():e("button",{staticClass:"customerOrder2",attrs:{disabled:t.loading}},[t._v(" Sign Up ")])])])])])])]),e("LandingFooter")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],n=e("ed92"),o=e("8ea7"),r=e("d8b3"),l={name:"Home",components:{LandingNavbar:n["default"],HomeBanner:o["a"],LandingFooter:r["a"]},data:function(){return{firstShow:!0,loading:!1,details:{firstName:"",lastName:"",email:"",country:"",password:""}}},methods:{showSecond:function(){this.firstShow=!1},goBack:function(){this.firstShow=!0,console.log("akjsdk")},startLoading:function(){this.loading=!0}}},d=l,c=(e("4bcf"),e("62d2"),e("2877")),u=Object(c["a"])(d,s,i,!1,null,"28217222",null);a["default"]=u.exports},"7d11":function(t,a,e){"use strict";e("d37e")},"80a9":function(t,a,e){},"8ea7":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-6 col-sm-10"},[e("p",{staticClass:"display-4 font-weight-bold",attrs:{"data-aos":"fade-left","data-aos-delay":"520"}},[t._v(" Exchange Gift Cards for cash ")]),e("p",{staticClass:"lead",attrs:{"data-aos":"fade-up","data-aos-delay":"550"}},[t._v(" Cardonia makes it safe and easy to exchange your Gift Cards, Bitcoin, Ethereum, Ripple, Litecoin and other cryptocurrencies using your local currency. ")]),e("div",{attrs:{"data-aos":"fade-down","data-aos-delay":"560"}},[e("router-link",{staticClass:"btnd btn-outlined-success mr-2",attrs:{to:"#"}},[t._v("Get Started")]),e("router-link",{staticClass:"btnd btn-outlined-success",attrs:{to:"#"}},[e("ion-icon",{attrs:{name:"logo-android"}}),t._v(" Download App ")],1)],1)]),t._m(0)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-5 d-none d-md-block"},[e("div",{staticClass:"text-right",attrs:{"data-aos":"fade-in","data-aos-delay":"550"}},[e("img",{staticClass:"w-10",attrs:{src:"assets/landinghomebg.png",alt:""}})])])}],n={name:"HomeBanner"},o=n,r=(e("7d11"),e("2877")),l=Object(r["a"])(o,s,i,!1,null,"a409feb4",null);a["a"]=l.exports},a1e8:function(t,a,e){var s=e("1157");s(document).on("scroll",(function(){s(document).scrollTop()>86?s("#navbar").addClass("shrink"):s("#navbar").removeClass("shrink")}))},d37e:function(t,a,e){},d8b3:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"main-padding text-muted py-5",staticStyle:{"background-color":"black"}},[e("div",{staticClass:"row justify-content-between align-items-center my-4"},[t._m(0),e("div",{staticClass:"col-md-3 "},[e("div",[e("ion-icon",{attrs:{size:"large",name:"logo-facebook"}}),e("span",{staticClass:"d-inline-block mx-1"}),e("ion-icon",{attrs:{size:"large",name:"logo-twitter"}}),e("span",{staticClass:"d-inline-block mx-1"}),e("ion-icon",{attrs:{size:"large",name:"logo-instagram"}}),e("span",{staticClass:"d-inline-block mx-1"}),e("ion-icon",{attrs:{size:"large",name:"logo-whatsapp"}})],1),t._m(1),t._m(2)])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"text-left"},[e("p",{staticClass:"h2"},[e("img",{staticClass:"w-25",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dyson_logo.svg/1280px-Dyson_logo.svg.png",alt:""}})]),e("p",{staticClass:"h5 font-weight-bold"},[t._v(" Your Security is our Priority ")]),e("p",[t._v(" Easyflip uses the highest levels of Internet Security, and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud. ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a",{staticClass:"text-white mt-2 d-inline-block",attrs:{href:"#"}},[t._v("+234 905 555 5003")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a",{staticClass:"text-white mt-2 d-inline-block",attrs:{href:"#"}},[t._v("easyflip@gmail.com")])])}],n={name:"LandingFooter"},o=n,r=e("2877"),l=Object(r["a"])(o,s,i,!1,null,"67c7628e",null);a["a"]=l.exports},ed92:function(t,a,e){"use strict";var s=e("6148"),i=e("3d47"),n=(e("5a5f"),e("2877")),o=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"621560f4",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-0a41c41c.71ecbef9.js.map