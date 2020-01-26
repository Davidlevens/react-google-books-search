(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(62)},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(22),r=n.n(l),c=(n(29),n(5)),i=n(6),s=n(8),u=n(7),m=n(9),h=(n(31),function(e){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar fixed-top"},o.a.createElement("ul",{className:"nav navbar-nav navbar-left"},o.a.createElement("li",null,o.a.createElement("a",{href:"/searchBooks",style:{color:"white",textDecoration:"none",fontSize:"20px"}},"Google Books Search"))),o.a.createElement("ul",{className:"nav navbar-nav navbar-right"},o.a.createElement("li",null,o.a.createElement("a",{href:"/saveBooks",style:{color:"white",textDecoration:"none",fontSize:"20px"}},"Your Saved Books")))))}),d=n(12),f=(n(33),function(e){e.children;return o.a.createElement("div",{style:{textAlign:"center"},className:"jumbotron"},o.a.createElement("img",{src:"/images/books.jpg",alt:"books-logo",style:{height:"200px"}}))}),g=function(e){return o.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":""),style:{marginTop:"80px"}},e.children)},E=function(e){return o.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},p=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return o.a.createElement("div",{className:t},e.children)},v=(n(35),function(e){return o.a.createElement("div",{className:"card text-center",style:{marginBottom:"20px"}},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,e.heading)),o.a.createElement("div",{className:"card-body text-left"},e.children))}),k=(n(37),function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},o.a.createElement("input",{autocomplete:"off",style:{textAlign:"left"},onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search for a Book, Author, or Topic",id:"search"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-lg search-button"},"Search")))}),b=function(e){return o.a.createElement("span",null,o.a.createElement("div",{className:"col-md-4",style:{float:"left",marginTop:"20px"}},o.a.createElement("img",{className:"image is-128xauto",src:e.src,alt:e.title}),o.a.createElement("h3",{className:"heading-title"},e.title),e.subtitle&&o.a.createElement("h5",{className:"heading-subtitle"},e.subtitle),o.a.createElement("p",null,o.a.createElement("strong",null,"Author(s):")," ",e.authors),o.a.createElement("p",null,o.a.createElement("strong",null,"Publish Date:")," ",e.date),o.a.createElement("p",null,o.a.createElement("strong",null,"Google Books Link:")," ",o.a.createElement("a",{href:e.link,target:"_blank"},e.title)),o.a.createElement("button",{onClick:e.handleSaveBook,className:"btn btn-lg save-btn",style:{marginBottom:"30px"}},"Save Book")),o.a.createElement("div",{className:"col-md-8",style:{float:"right",marginTop:"20px"}},o.a.createElement("p",{className:"p-article",style:{marginBottom:"30px"}},o.a.createElement("strong",null,"Description:")," ",e.description)),o.a.createElement("hr",{style:{clear:"both"}}))},B=n(23),y=n(11),w=n.n(y),N={searchBooks:function(e){return w.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return w()("/api/books")},saveBook:function(e){return w.a.post("/api/books",Object(B.a)({},e,{image:e.src}))},deleteBook:function(e){return w.a.delete("api/books/"+e)}},x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],search:""},n.searchBooks=function(e){N.searchBooks(e).then(function(e){return n.setState({books:e.data.items,search:""},console.log(e.data.items))}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(d.a)({},a,t))},n.handleFormSubmit=function(e){e.preventDefault(),n.searchBooks(n.state.search)},n.deleteBook=function(e){N.deleteBook(e).then(function(e){return console.log(e.status)}).catch(function(e){return console.log(e)})},n.handleSaveBook=function(e){N.saveBook(e).then(function(e){return alert("Book Saved!")}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(g,null,o.a.createElement(E,null,o.a.createElement(p,{size:"md-12"},o.a.createElement(f,null))),o.a.createElement(E,null,o.a.createElement(p,{size:"md-12"},o.a.createElement(v,{heading:"Google Books Search"},o.a.createElement(k,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})))),o.a.createElement(E,null,o.a.createElement(p,{size:"md-12"},this.state.books.length?o.a.createElement(v,{heading:"Results"},this.state.books.map(function(t){return o.a.createElement(b,{key:t.id,src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:null,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,authors:t.volumeInfo.authors?t.volumeInfo.authors.join(", "):"N/A",date:t.volumeInfo.publishedDate,description:t.volumeInfo.description,link:t.volumeInfo.infoLink,handleSaveBook:function(){return e.handleSaveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,src:t.volumeInfo.imageLinks.thumbnail,authors:t.volumeInfo.authors,date:t.volumeInfo.publishedDate,description:t.volumeInfo.description,link:t.volumeInfo.infoLink})}})})):o.a.createElement(v,{heading:"Search Results"}))))}}]),t}(a.Component),j=(n(57),function(e){return o.a.createElement("span",null,o.a.createElement("div",{className:"col-md-4",style:{float:"left",marginTop:"20px"}},o.a.createElement("p",null,o.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}})),o.a.createElement("h3",{className:"heading-title"},e.title),e.subtitle&&o.a.createElement("h5",{className:"heading-subtitle"},e.subtitle),o.a.createElement("p",null,o.a.createElement("strong",null,"Author(s):")," ",e.authors),o.a.createElement("p",null,o.a.createElement("strong",null,"Publish Date:")," ",e.date),o.a.createElement("p",null,o.a.createElement("strong",null,"Google Books Link:")," ",o.a.createElement("a",{href:e.link,target:"_blank"},e.title)),o.a.createElement("button",{onClick:e.handleDeleteBook,className:"btn btn-lg delete-btn",style:{marginBottom:"30px"}},"Delete")),o.a.createElement("div",{className:"col-md-8",style:{float:"right",marginTop:"20px"}},o.a.createElement("p",{className:"p-article",style:{marginBottom:"30px"}},o.a.createElement("strong",null,"Description:")," ",e.description)),o.a.createElement("hr",{style:{clear:"both"}}))}),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},n.loadBooks=function(){N.getBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n.handleDeleteBook=function(e){N.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.getBooks().then(function(t){return e.setState({books:t.data},console.log(t.data))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement(g,null,o.a.createElement(E,null,o.a.createElement(p,{size:"md-12"},o.a.createElement(f,null))),o.a.createElement(E,null,o.a.createElement(p,{size:"md-12"},this.state.books.length?o.a.createElement(v,{heading:"Saved Books"},this.state.books.map(function(t){return o.a.createElement(j,{key:t._id,src:t.image,title:t.title,subtitle:t.subtitle,authors:t.authors.join(", "),date:t.date,description:t.description,link:t.link,handleDeleteBook:function(){return e.handleDeleteBook(t._id)}})})):o.a.createElement(v,{heading:"Saved Books"}))))}}]),t}(a.Component),I=function(){return o.a.createElement(g,null,o.a.createElement(E,null,o.a.createElement(p,{size:"md-12"},o.a.createElement(f,null))))},O=n(65),D=n(68),C=n(67),A=n(66),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,null,o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(D.a,null,o.a.createElement(C.a,{path:"/searchBooks",component:x}),o.a.createElement(C.a,{path:"/saveBooks",component:S}),o.a.createElement(C.a,{path:"/noMatch",component:I}),o.a.createElement(A.a,{from:"/",exact:!0,to:"/searchBooks"}))))}}]),t}(a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(z,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");L?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):T(e)})}}()}},[[24,2,1]]]);
//# sourceMappingURL=main.c4cd17e0.chunk.js.map