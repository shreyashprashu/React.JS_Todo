(this.webpackJsonpmy_reactjs_app=this.webpackJsonpmy_reactjs_app||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),c=a.n(i),s=(a(14),a(6)),o=a(4),u=a(5),l=a(1),m=a(8),d=a(7);a(15),a(16),a(17);var p=function(e){var t=e.passItems.map((function(t){return r.a.createElement("div",{className:"renderList",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.updateItem(a.target.value,t.key)}}),r.a.createElement("button",{onClick:function(){e.deleteItem(t.key)}},"Del")))}));return r.a.createElement("div",null,t)},h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.handleInput=n.handleInput.bind(Object(l.a)(n)),n.addItem=n.addItem.bind(Object(l.a)(n)),n.deleteItem=n.deleteItem.bind(Object(l.a)(n)),n.updateItem=n.updateItem.bind(Object(l.a)(n)),n}return Object(u.a)(a,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),""!==t.text){var a=[].concat(Object(s.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"updateItem",value:function(e,t){var a=this.state.items;a.map((function(a){return a.key===t&&(a.text=e),null})),this.setState({items:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"type here...",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add")),r.a.createElement(p,{passItems:this.state.items,deleteItem:this.deleteItem,updateItem:this.updateItem})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.9f5a5536.chunk.js.map