(this["webpackJsonpax1-cards"]=this["webpackJsonpax1-cards"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),d=a.n(r),c=(a(14),a(1)),i=a(2),o=a(3),u=a(6),h=a(5),l=(a(15),a(4)),f={maxHeight:"34vh",minHeight:"34vh",maxWidth:"100vw",padding:0};function C(){for(var e=[],t=function(t){[11,12,13,1].forEach((function(a){e.push({rank:a,suit:t})}))},a=0;a<4;++a)t(a);return function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(e)}var p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.topCard;if(!e)return s.a.createElement("p",null);var t=e.rank,a=[20,12,15,10][e.suit],n={11:"Jump Squats",12:"Mountain Climbers",13:"High Knees",1:"Heels to the Heavens"}[t];return s.a.createElement("p",{style:{fontSize:"24px",textAlign:"center"}},"".concat(a," ").concat(n))}}]),a}(s.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={cards:C(),usedCards:[]},n.handleUpdateCards=n.handleUpdateCards.bind(Object(c.a)(n)),n.handleResetCards=n.handleResetCards.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleUpdateCards",value:function(e){var t=this.state.cards[this.state.cards.length-1];this.setState((function(e){return{cards:e.cards.slice(0,e.cards.length-1),usedCards:e.usedCards.concat(t)}}))}},{key:"handleResetCards",value:function(e){if(this.state.cards.length){var t=this.state.usedCards[this.state.usedCards.length-1];this.setState((function(e){return{cards:e.cards.concat(t),usedCards:e.usedCards.slice(0,e.usedCards.length-1)}}))}else this.setState((function(e){return{cards:C(),usedCards:[]}}))}},{key:"render",value:function(){return s.a.createElement("div",{style:{margin:"0 16px"}},s.a.createElement(l.Hand,{cards:this.state.cards,hidden:!1,style:f,cardOffset:10,onClick:this.handleUpdateCards}),s.a.createElement(l.Hand,{cards:this.state.usedCards,hidden:!1,style:f,cardOffset:10,onClick:this.handleResetCards}),s.a.createElement(p,{topCard:this.state.usedCards.length&&this.state.usedCards[this.state.usedCards.length-1]}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.2b2b41ec.chunk.js.map