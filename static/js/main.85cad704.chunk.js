(this["webpackJsonphello-world-part-four"]=this["webpackJsonphello-world-part-four"]||[]).push([[0],{241:function(t,e,n){},259:function(t,e){},261:function(t,e){},266:function(t,e){},267:function(t,e){},293:function(t,e){},295:function(t,e){},305:function(t,e){},307:function(t,e){},317:function(t,e){},319:function(t,e){},334:function(t,e){},436:function(t,e){},438:function(t,e){},443:function(t,e){},445:function(t,e){},452:function(t,e){},464:function(t,e){},467:function(t,e){},472:function(t,e){},559:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"initMessage","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"oldStr","type":"string"},{"indexed":false,"internalType":"string","name":"newStr","type":"string"}],"name":"UpdatedMessages","type":"event"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newMessage","type":"string"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},560:function(t,e,n){},561:function(t,e,n){"use strict";n.r(e);var r=n(23),a=n.n(r),s=n(222),c=n.n(s),u=(n(241),n(14)),i=n(33),o=n(67),l=n(12);n(243).config();var p=(0,n(562).createAlchemyWeb3)("wss://eth-goerli.g.alchemy.com/v2/y7PVXGDkWx1F_olSlXCEwVz2ayltSG3J"),d=n(559),b="0x339e36A17321621B83ba746dB6a09e554Ee26915",h=new p.eth.Contract(d,b),f=function(){var t=Object(i.a)(Object(u.a)().mark((function t(){var e;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.methods.message().call();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(Object(u.a)().mark((function t(){var e,n;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=14;break}return t.prev=1,t.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return e=t.sent,n={status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above.",address:e[0]},t.abrupt("return",n);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",{address:"",status:"\ud83d\ude25 "+t.t0.message});case 12:t.next=15;break;case 14:return t.abrupt("return",{address:"",status:Object(l.jsx)("span",{children:Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(i.a)(Object(u.a)().mark((function t(){var e;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=17;break}return t.prev=1,t.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((e=t.sent).length>0)){t.next=9;break}return t.abrupt("return",{address:e[0],status:"\ud83d\udc46\ud83c\udffd Write a message in the text-field above."});case 9:return t.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the top right button."});case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",{address:"",status:"\ud83d\ude25 "+t.t0.message});case 15:t.next=18;break;case 17:return t.abrupt("return",{address:"",status:Object(l.jsx)("span",{children:Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(i.a)(Object(u.a)().mark((function t(e,n){var r,a;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.ethereum&&null!==e){t.next=2;break}return t.abrupt("return",{status:"\ud83d\udca1 Connect your Metamask wallet to update the message on the blockchain."});case 2:if(""!==n.trim()){t.next=4;break}return t.abrupt("return",{status:"\u274c Your message cannot be an empty string."});case 4:return r={to:b,from:e,data:h.methods.update(n).encodeABI()},t.prev=5,t.next=8,window.ethereum.request({method:"eth_sendTransaction",params:[r]});case 8:return a=t.sent,t.abrupt("return",{status:Object(l.jsxs)("span",{children:["\u2705"," ",Object(l.jsx)("a",{target:"_blank",href:"https://ropsten.etherscan.io/tx/".concat(a),children:"View the status of your transaction on Etherscan!"}),Object(l.jsx)("br",{}),"\u2139\ufe0f Once the transaction is verified by the network, the message will be updated automatically."]})});case 12:return t.prev=12,t.t0=t.catch(5),t.abrupt("return",{status:"\ud83d\ude25 "+t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}(),x=n.p+"static/media/alchemylogo.9821dc1c.svg",O=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],s=Object(r.useState)(""),c=Object(o.a)(s,2),p=c[0],d=c[1],b=Object(r.useState)("No connection to the network."),O=Object(o.a)(b,2),w=O[0],v=O[1],y=Object(r.useState)(""),k=Object(o.a)(y,2),M=k[0],C=k[1];function S(){window.ethereum?window.ethereum.on("accountsChanged",(function(t){t.length>0?(a(t[0]),d("\ud83d\udc46\ud83c\udffd Write a message in the text-field above.")):(a(""),d("\ud83e\udd8a Connect to Metamask using the top right button."))})):d(Object(l.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(l.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}Object(r.useEffect)(Object(i.a)(Object(u.a)().mark((function t(){var e,n,r,s;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return e=t.sent,v(e),h.events.UpdatedMessages({},(function(t,e){t?d("\ud83d\ude25 "+t.message):(v(e.returnValues[1]),C(""),d("\ud83c\udf89 Your message has been updated!"))})),t.next=7,m();case 7:n=t.sent,r=n.address,s=n.status,a(r),d(s),S();case 13:case"end":return t.stop()}}),t)}))),[]);var T=function(){var t=Object(i.a)(Object(u.a)().mark((function t(){var e;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e=t.sent,d(e.status),a(e.address);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(i.a)(Object(u.a)().mark((function t(){var e,r;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n,M);case 2:e=t.sent,r=e.status,d(r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"container",children:[Object(l.jsx)("img",{id:"logo",src:x}),Object(l.jsx)("button",{id:"walletButton",onClick:T,children:n.length>0?"Connected: "+String(n).substring(0,6)+"..."+String(n).substring(38):Object(l.jsx)("span",{children:"Connect Wallet"})}),Object(l.jsx)("h2",{style:{paddingTop:"50px"},children:"Current Message:"}),Object(l.jsx)("p",{children:w}),Object(l.jsx)("h2",{style:{paddingTop:"18px"},children:"New Message:"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",placeholder:"Update the message in your smart contract.",onChange:function(t){return C(t.target.value)},value:M}),Object(l.jsx)("p",{id:"status",children:p}),Object(l.jsx)("button",{id:"publish",onClick:E,children:"Update"})]})]})};n(560);var w=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(O,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,566)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),s(t),c(t)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),v()}},[[561,1,2]]]);
//# sourceMappingURL=main.85cad704.chunk.js.map