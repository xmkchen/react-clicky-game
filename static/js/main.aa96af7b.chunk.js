(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{punny:"i'm soy into you",image:"https://i.imgur.com/LSJcXTQ.png"},{punny:"love you, pho real",image:"https://i.imgur.com/JdqY8IA.jpg"},{punny:"i hate it when bay leaves",image:"https://i.imgur.com/FYgKxIy.png"},{punny:"keep calm and curry on",image:"https://i.imgur.com/14KuCau.jpg"},{punny:"sorry i was salty",image:"https://i.imgur.com/OVpSlWL.png"},{punny:"good chives only",image:"https://i.imgur.com/EHwbFw3.png"},{punny:"words cannot espresso how much you mean to me",image:"https://i.imgur.com/fHaZkO0.jpg"},{punny:"i cannoli be happy when i am with you",image:"https://i.imgur.com/xU8CoyA.jpg"},{punny:"you've stolen a pizza my heart",image:"https://i.imgur.com/jHFwT9a.jpg"},{punny:"this might sound cheesy... but i think you're really grate",image:"https://i.imgur.com/QMPHgYo.jpg"},{punny:"you always know how to make everything butter",image:"https://i.imgur.com/tUaB1ER.jpg"},{punny:"if you were a fruit, you'd be a fine-apple",image:"https://i.imgur.com/Iik8mmT.jpg"}]},,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(15),n(4)),u=n(5),s=n(7),l=n(6),m=n(8),p=(n(16),n(17),n(1)),g=(n(18),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(19),function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-bar nav-justified"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},r.a.createElement("i",{class:"fa fa-refresh","aria-hidden":"true"})," Reset ")),r.a.createElement("li",{className:-1!==e.message.indexOf("incorrectly")?"desc-incorrect":-1!==e.message.indexOf("correctly")?"desc-correct":"desc-normal"},e.message),r.a.createElement("li",null,"Score: ",r.a.createElement("span",{style:{color:"#fdd53e"}},e.currentScore)," / 12"),r.a.createElement("li",null,"Top Score: ",e.topScore)))}),y=(n(20),function(e){return r.a.createElement("div",{className:"titlebox"},r.a.createElement("h1",null,"Be Punstoppable"),r.a.createElement("p",null,"Click on a pun card to earn points, but don't click on any more than once"))}),f=(n(21),function(e){return r.a.createElement("footer",{class:"footer-text"},r.a.createElement("div",null,r.a.createElement("span",null,"\xa9 2019 Kathy Chen "),r.a.createElement("a",{href:"https://github.com/xmkchen"}," / github")))}),d=(n(22),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("a",{onClick:function(){return e.selectPun(e.punny)},className:0===e.currentScore},r.a.createElement("img",{alt:e.punny,src:e.image}))))}),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={message:"Click any pun card to begin!",topScore:0,currentScore:0,puns:p,unselectedPuns:p},n.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}},n.selectPun=function(e){if(void 0===n.state.unselectedPuns.find(function(t){return t.punny===e}))n.setState({message:"WRONG!",topScore:n.state.currentScore>n.state.topScore?n.state.currentScore:n.state.topScore,currentScore:0,puns:p,unselectedPuns:p});else{var t=n.state.unselectedPuns.filter(function(t){return t.punny!==e});n.setState({message:"CORRECT!",currentScore:n.state.currentScore+1,puns:p,unselectedPuns:t})}n.shuffleArray(p)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g,null,r.a.createElement(h,{message:this.state.message,currentScore:this.state.currentScore,topScore:this.state.topScore}),r.a.createElement(y,null),this.state.puns.map(function(t){return r.a.createElement(d,{punny:t.punny,image:t.image,selectPun:e.selectPun,currentScore:e.state.currentScore})}),r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.aa96af7b.chunk.js.map