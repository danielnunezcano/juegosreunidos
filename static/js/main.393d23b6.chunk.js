(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{11:function(e,n,t){e.exports=t(27)},16:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(4),o=t.n(r),s=(t(16),t(2)),i=t(1),d=function(e){var n=e.props;return n.cards.stop&&n.cards.pointsEnemy>n.cards.points&&n.cards.pointsEnemy<=7.5||n.cards.points>7.5?a.a.createElement("div",{className:"cartelInfo",style:{border:"1vh solid red"},onClick:function(){return n.resetDeck()}},"Has Perdido"):n.cards.stop&&n.cards.pointsEnemy>7.5?a.a.createElement("div",{className:"cartelInfo",style:{border:"1vh solid green"},onClick:function(){return n.resetDeck()}},"Has Ganado"):n.cards.pointsEnemy===n.cards.points&&7.5===n.cards.pointsEnemy?a.a.createElement("div",{className:"cartelInfo",style:{border:"1vh solid grey"},onClick:function(){return n.resetDeck()}},"Empate"):a.a.createElement("div",null)},l=(t(23),function(e){var n=e.type,t=e.left,c=e.top;return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"style",style:{left:"".concat(t,"%"),top:"".concat(c,"px")}},a.a.createElement("img",{src:"".concat("/juegosreunidos","/cards/").concat(n,".svg"),alt:"card"})))}),u=(t(24),function(e){return setInterval(e.addCardEnemy(),1e3)}),m=Object(s.b)((function(e){return Object(i.a)({},e)}),(function(e){return{addCard:function(){return e({type:"ADD_CARD"})},resetDeck:function(){return e({type:"RESET_DECK"})},stop:function(){return e({type:"STOP"})},addCardEnemy:function(){return e({type:"ADD_CARD_ENEMY"})}}}))((function(e){var n=0,t=0,c=function(){return 5*n++};return a.a.createElement("div",null,a.a.createElement(d,{props:e}),e.cards.stop?a.a.createElement("div",null,e.cards.deckGame.map((function(e){return a.a.createElement(l,{type:e,left:c(),top:50})})),e.cards.deckEnemy.map((function(e){return a.a.createElement(l,{type:e,left:5*t++,top:200})}))):e.cards.deckGame.map((function(e){return a.a.createElement(l,{type:e,left:c(),top:50})})),e.cards.points<7.5&&!e.cards.stop?a.a.createElement("div",null,a.a.createElement("div",{onClick:function(){return e.addCard()}},a.a.createElement(l,{type:"bc",left:c(),top:50}))):a.a.createElement("div",null,e.cards.pointsEnemy>e.cards.points||e.cards.pointsEnemy>=7.5||e.cards.points>7.5?a.a.createElement("div",null,clearInterval(u)):u(e)))})),p=(t(25),Object(s.b)((function(e){return Object(i.a)({},e)}),(function(e){return{resetDeck:function(){return e({type:"RESET_DECK"})},stop:function(){return e({type:"STOP"})}}}))((function(e){return a.a.createElement("div",{className:"horizontal"},a.a.createElement("div",{className:"titulo"},"Siete y Media"),e.cards.points>0&&e.cards.points<7.5&&!e.cards.stop&&a.a.createElement("button",{className:"button",onClick:function(){return e.stop()}},"Plantarse"),a.a.createElement("div",{className:"resultado"},a.a.createElement("div",null,"Partidas: ",e.cards.games),a.a.createElement("div",null,"Ganadas: ",e.cards.winGames)))}))),f=t(3),E=t(5),v={cont:0,points:0,games:0,winGames:0,deckGame:[],deckEnemy:[],pointsEnemy:0,stop:!1,deck:["h1","h2","h3","h4","h5","h6","h7","hj","hq","hk","c1","c2","c3","c4","c5","c6","c7","cj","cq","ck","d1","d2","d3","d4","d5","d6","d7","dj","dq","dk","s1","s2","s3","s4","s5","s6","s7","sj","sq","sk"]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_CARD":return Object(i.a)({},e,{cont:e.cont+1,deckGame:[].concat(Object(E.a)(e.deckGame),[e.deck[e.cont]]),points:e.points+(isNaN(e.deck[e.cont][1])?.5:parseInt(e.deck[e.cont][1]))});case"RESET_DECK":return Object(i.a)({},e,{cont:0,deck:e.deck.sort((function(){return Math.random()-.5})),deckGame:[],deckEnemy:[],points:0,pointsEnemy:0,stop:!1,winGames:e.points<8&&e.pointsEnemy>7.5?e.winGames+1:e.winGames,games:e.games+1});case"ADD_CARD_ENEMY":return Object(i.a)({},e,{cont:e.cont+1,stop:!0,deckEnemy:[].concat(Object(E.a)(e.deckEnemy),[e.deck[e.cont]]),pointsEnemy:e.pointsEnemy+(isNaN(e.deck[e.cont][1])?.5:parseInt(e.deck[e.cont][1]))});case"STOP":return Object(i.a)({},e,{cont:e.cont+1,pointsEnemy:e.pointsEnemy+(isNaN(e.deck[e.cont][1])?.5:parseInt(e.deck[e.cont][1])),deckEnemy:[].concat(Object(E.a)(e.deckEnemy),[e.deck[e.cont]]),stop:!0});default:return Object(i.a)({},e,{deck:e.deck.sort((function(){return Math.random()-.5}))})}},y=Object(f.c)(Object(f.b)({cards:k}));t(26);var h=function(){return a.a.createElement(s.a,{store:y},a.a.createElement("div",{className:"App"},a.a.createElement(p,null),a.a.createElement(m,null)))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/juegosreunidos",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/juegosreunidos","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.393d23b6.chunk.js.map