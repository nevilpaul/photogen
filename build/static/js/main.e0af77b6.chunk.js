(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(2),r=a.n(l),o=(a(14),a(3)),s=a(4),c=a(6),d=a(5),m=a(7),g=(a(15),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handle_over=function(e){e.preventDefault(),e.stopPropagation()},a.handle_enter=function(e){e.preventDefault(),e.stopPropagation(),void 0!==e.target.parentNode.children[1].children[0]?e.target.parentNode.children[1].children[0].style.display="none":console.log("no child")},a.handle_drop=function(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer,n=t.files[0];a.setState({imagefile:n});var i=t.files.length;if(n.type.startsWith("image/")&&1===i){var l=new FileReader;l.addEventListener("load",function(){a.setState({imageResult:l.result})},!1),l.readAsDataURL(n)}},a.clicked_event=function(e){e.preventDefault();var t=document.getElementById("dragImage"),n=e.target;console.log(n);var i=n.files[0];console.log(i),a.setState({imagefile:i});var l=n.files.length;if(i.type.startsWith("image/")&&1===l){var r=new FileReader;r.addEventListener("load",function(){t.style.display="none",a.setState({imageResult:r.result})},!1),r.readAsDataURL(i)}},a.clickImageChanger=function(e){document.getElementById("imageUpload").click()},a.state={imagefile:"",imageResult:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.imageResult;return i.a.createElement("div",{className:"App"},i.a.createElement("h2",null,"Image Classifier | php_ml"),i.a.createElement("div",{className:"place",onDragOver:this.handle_over.bind(this),onDragEnter:this.handle_enter.bind(this),onDrop:this.handle_drop.bind(this)},""===e?"":i.a.createElement("img",{src:e,alt:"",className:"imageScaler"}),i.a.createElement("div",{className:"dragImage",id:"dragImage",onClick:this.clickImageChanger.bind(this)},i.a.createElement("p",null,"Select Image to upload Or drag and drop video files")),i.a.createElement("input",{className:"file",type:"file",name:"imageUpload",id:"imageUpload",onChange:this.clicked_event.bind(this)})),i.a.createElement("button",{className:"name",type:"button",value:"submition"},"Classify"))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e0af77b6.chunk.js.map