(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({quiz:"quiz",user:"user"}[e]||e)+"."+{quiz:"d74809f0",user:"cae7ad42"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={quiz:1,user:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({quiz:"quiz",user:"user"}[e]||e)+"."+{quiz:"03161e62",user:"6011cf33"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],m.parentNode.removeChild(m),r(s)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/mtg-art-quiz/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1d53":function(e,t,r){"use strict";var n=r("e83d"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{staticClass:"left branding",attrs:{to:"/"}},[n("img",{attrs:{src:r("9853"),alt:"The 5 color symbols of Magic the Gathering"}})]),n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/user"}},[e._v("User")])],1),n("router-view",{staticClass:"main-view"})],1)},o=[],s=(r("5c0b"),r("2877")),i={},c=Object(s["a"])(i,a,o,!1,null,null,null),u=c.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("welcome")},m=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[e._m(0),r("label",[e._v(" Username "),r("br"),r("input",{domProps:{value:e.user},on:{blur:e.setUser}})]),r("div",{staticClass:"button-container"},[r("q-button",{attrs:{link:"/standard"}},[e._v("Standard")]),r("q-button",{staticClass:"strikethrough",attrs:{link:"/pioneer",disabled:""}},[e._v(" Pioneer "),r("template",{slot:"aside"},[e._v("Coming Soon")])],2),r("q-button",{staticClass:"strikethrough",attrs:{link:"/modern",disabled:""}},[e._v(" Modern "),r("template",{slot:"aside"},[e._v("Coming Later")])],2),r("q-button",{staticClass:"strikethrough",attrs:{link:"/pauper",disabled:""}},[e._v(" Pauper "),r("template",{slot:"aside"},[e._v("To Be Done")])],2)],1)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v(" Welcome to the "),r("br"),r("i",[e._v("Magic : The Gathering")]),r("br"),e._v("Art Quiz ")])}],f=r("9e52"),g=r("2f62"),v={name:"Welcome",components:{QButton:f["a"]},computed:{...Object(g["c"])({user:e=>e.u.username})},methods:{...Object(g["b"])("u",["saveUsername","initializeUser"]),...Object(g["b"])("q",["initializeCards"]),setUser(e){this.saveUsername({name:e.target.value})}},mounted(){this.initializeUser(),this.initializeCards()}},b=v,S=(r("1d53"),Object(s["a"])(b,p,h,!1,null,"1374a0f1",null)),_=S.exports,y={name:"Home",components:{Welcome:_}},q=y,z=Object(s["a"])(q,d,m,!1,null,null,null),C=z.exports;n["a"].use(l["a"]);const w=[{path:"/",name:"Home",component:C},{path:"/user",name:"User",component:()=>r.e("user").then(r.bind(null,"1511"))},{path:"/standard",name:"Standard",props:{format:"standard"},component:()=>r.e("quiz").then(r.bind(null,"2e44"))},{path:"/pioneer",name:"Pioneer",props:{format:"pioneer"},component:()=>r.e("quiz").then(r.bind(null,"2e44"))},{path:"/modern",name:"Modern",props:{format:"modern"},component:()=>r.e("quiz").then(r.bind(null,"2e44"))},{path:"/pauper",name:"Pauper",props:{format:"pauper"},component:()=>r.e("quiz").then(r.bind(null,"2e44"))}],j=new l["a"]({mode:"history",base:"/mtg-art-quiz/",routes:w});var k=j,x=(r("ddb0"),{namespaced:!0,state:{cards:[],names:[],randomSet:[],quizStatus:"empty",qindex:0},mutations:{setCards(e,t){e.cards=t},setNames(e,t){e.names=t},setRandom(e,t){e.randomSet=t},clearRandom(e){e.randomSet=[]},setStatus(e,t){e.quizStatus=t},setIndex(e,t){e.qindex=t}},actions:{async initializeCards({commit:e}){try{e("setStatus","loading");const t=await Promise.all([fetch("./data/standard.json").then(e=>e.json()),fetch("./data/names-standard.json").then(e=>e.json())]);e("setCards",t[0]),e("setNames",t[1]),e("setStatus","loaded")}catch(t){e("setStatus","error"),console.error("Could not initialize. Error: "+t)}},makeRandom({commit:e,state:t},{format:r,count:n=20}){e("setStatus","calculating");const a=t.cards.filter(e=>e[r]),o=new Set,s=[];while(o.size<n)o.add(Math.floor(Math.random()*a.length));o.forEach(e=>{s.push(a[e])}),e("setRandom",s),e("setStatus","ready")},clearRandom({commit:e}){e("clearRandom"),e("setStatus","loaded")},incrementIndex({commit:e,state:t}){let r=t.qindex;r==t.randomSet.length-1?r=-1:r++,e("setIndex",r)},resetIndex({commit:e}){e("setIndex",0)}}}),O={namespaced:!0,state:{username:"",lastScore:0,highScore:0,currentScore:0},mutations:{setUser(e,t){e.username=t},setLastScore(e,t){e.lastScore=t},setCurrentScore(e,t){e.currentScore=t},setHighScore(e,t){e.highScore=t}},actions:{initializeUser({commit:e}){const t=localStorage.getItem("quiz_username");var r,n;t&&(e("setUser",t),e("setLastScore",null!==(r=localStorage.getItem("quiz_lastscore"))&&void 0!==r?r:0),e("setHighScore",null!==(n=localStorage.getItem("quiz_highscore"))&&void 0!==n?n:0))},saveUsername({commit:e},{name:t}){e("setUser",t),localStorage.setItem("quiz_username",t)},saveLastScore({commit:e},{score:t}){e("setLastScore",t),localStorage.setItem("quiz_lastscore",t)},saveCurrentScore({commit:e},{score:t}){e("setCurrentScore",t)},saveHighScore({commit:e,state:t},{score:r}){t.highScore<=r&&(e("setHighScore",r),localStorage.setItem("quiz_highscore",r))},addCurrentScore({commit:e,state:t},{points:r}){e("setCurrentScore",t.currentScore+r)},clearCurrentScore({commit:e}){e("setCurrentScore",0)},clearLastScore({commit:e}){e("setLastScore",0),localStorage.setItem("quiz_lastscore",0)},clearHighScore({commit:e}){e("setHighScore",0),localStorage.setItem("quiz_highscore",0)}}};n["a"].use(g["a"]);var E=new g["a"].Store({modules:{q:x,u:O}});n["a"].config.productionTip=!1,new n["a"]({router:k,store:E,render:e=>e(u)}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},9853:function(e,t,r){e.exports=r.p+"img/mtg-colors.0a14bddb.jpg"},"9c0c":function(e,t,r){},"9e52":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.link?r("router-link",{attrs:{to:e.link,tag:"button"}},[e._t("default")],2):r("button",[e._t("default")],2),r("span",{staticClass:"aside"},[e._t("aside")],2)],1)},a=[],o={props:{link:{type:String,default:""}}},s=o,i=(r("e897"),r("2877")),c=Object(i["a"])(s,n,a,!1,null,"5dc646b6",null);t["a"]=c.exports},e83d:function(e,t,r){},e897:function(e,t,r){"use strict";var n=r("ebbb"),a=r.n(n);a.a},ebbb:function(e,t,r){}});
//# sourceMappingURL=app.4ac6a89e.js.map