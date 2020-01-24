(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(50)},27:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(19),r=n.n(l),c=(n(27),function(e){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar fixed-top",style:{marginBottom:"40px",backgroundColor:"forestgreen",height:"50px"}},o.a.createElement("ul",{className:"nav navbar-nav navbar-left"},o.a.createElement("li",null,o.a.createElement("a",{href:"/",style:{color:"white",textDecoration:"none",fontSize:"20px"}},"Google Books Search"))),o.a.createElement("ul",{className:"nav navbar-nav navbar-right"},o.a.createElement("li",null,o.a.createElement("a",{href:"/savedbooks",style:{color:"white",textDecoration:"none",fontSize:"20px"}},"Your Saved Books")))))}),i=n(20),s=n(6),u=n(7),m=n(10),h=n(8),d=n(11),f=function(e){e.children;return o.a.createElement("div",{style:{textAlign:"center",backgroundColor:"forestgreen"},className:"jumbotron"},o.a.createElement("img",{src:"/images/books.jpg",alt:"books-logo",style:{height:"200px"}}))},g=function(e){return o.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":""),style:{marginTop:"80px"}},e.children)},p=function(e){return o.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},v=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return o.a.createElement("div",{className:t},e.children)},E=function(e){return o.a.createElement("div",{className:"card text-center",style:{marginBottom:"20px"}},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,e.heading)),o.a.createElement("div",{className:"card-body text-left"},e.children))},k=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},o.a.createElement("input",{style:{textAlign:"left"},onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search for a Book, Author, or Topic",id:"search"}),o.a.createElement("br",null),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))},b=function(e){return o.a.createElement("span",null,o.a.createElement("div",{className:"col-md-4",style:{float:"left",marginTop:"20px"}},o.a.createElement("p",null,o.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}})),o.a.createElement("p",{style:{fontSize:"30px"}},e.title),o.a.createElement("p",null,o.a.createElement("strong",null,"Author(s):")," ",e.authors),o.a.createElement("p",null,o.a.createElement("strong",null,"Publish Date:")," ",e.date),o.a.createElement("p",null,o.a.createElement("strong",null,"Google Books Link:")," ",o.a.createElement("a",{href:e.link,target:"_blank"},e.title)),o.a.createElement("button",{onClick:e.handleSaveBook,className:"btn btn-primary save-btn",style:{marginBottom:"30px"}},"Save Book")),o.a.createElement("div",{className:"col-md-8",style:{float:"right",marginTop:"20px"}},o.a.createElement("p",{style:{marginBottom:"30px"}},o.a.createElement("strong",null,"Description:")," ",e.description)),o.a.createElement("hr",{style:{clear:"both"}}))},B=n(5),y=n.n(B),w={getBooks:function(e){return y.a.get("/api/google",{params:{q:"title:"+e}})},getSavedBooks:function(){return y.a.get("/api//books")},deleteBook:function(e){return y.a.delete("/api//books/"+e)},saveBook:function(e){return y.a.post("/api//books",e)}},x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],search:""},n.searchBooks=function(e){w.searchBooks(e).then(function(e){return n.setState({books:e.data.items,search:""},console.log(e.data.items))}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(i.a)({},a,t))},n.handleFormSubmit=function(e){e.preventDefault(),n.searchBooks(n.state.search)},n.deleteBook=function(e){w.deleteBook(e).then(function(e){return console.log(e.status)}).catch(function(e){return console.log(e)})},n.handleSaveBook=function(e){w.saveBook(e).then(function(e){return alert("Book Saved!")}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(g,null,o.a.createElement(p,null,o.a.createElement(v,{size:"md-12"},o.a.createElement(f,null))),o.a.createElement(p,null,o.a.createElement(v,{size:"md-12"},o.a.createElement(E,{heading:"Google Books Search"},o.a.createElement(k,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})))),o.a.createElement(p,null,o.a.createElement(v,{size:"md-12"},this.state.books.length?o.a.createElement(E,{heading:"Results"},this.state.books.map(function(t){return o.a.createElement(b,{key:t.id,src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",title:t.volumeInfo.title,authors:t.volumeInfo.authors?t.volumeInfo.authors.join(", "):"N/A",date:t.volumeInfo.publishedDate,description:t.volumeInfo.description,link:t.volumeInfo.infoLink,handleSaveBook:function(){return e.handleSaveBook({title:t.volumeInfo.title,src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",authors:t.volumeInfo.authors,date:t.volumeInfo.publishedDate,description:t.volumeInfo.description,link:t.volumeInfo.infoLink})}})})):o.a.createElement(E,{heading:"Search Results"}))))}}]),t}(a.Component),S=function(e){return o.a.createElement("span",null,o.a.createElement("div",{className:"col-md-4",style:{float:"left",marginTop:"20px"}},o.a.createElement("p",null,o.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}})),o.a.createElement("p",{style:{fontSize:"30px"}},e.title),o.a.createElement("p",null,o.a.createElement("strong",null,"Author(s):")," ",e.authors),o.a.createElement("p",null,o.a.createElement("strong",null,"Publish Date:")," ",e.date),o.a.createElement("p",null,o.a.createElement("strong",null,"Google Books Link:")," ",o.a.createElement("a",{href:e.link,target:"_blank"},e.title)),o.a.createElement("button",{onClick:e.handleDeleteBook,className:"btn btn-warning delete-btn",style:{marginBottom:"30px"}},"Delete")),o.a.createElement("div",{className:"col-md-8",style:{float:"right",marginTop:"20px"}},o.a.createElement("p",{style:{marginBottom:"30px"}},o.a.createElement("strong",null,"Description:")," ",e.description)),o.a.createElement("hr",{style:{clear:"both"}}))},N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},n.loadBooks=function(){w.getBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n.handleDeleteBook=function(e){w.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.getBooks().then(function(t){return e.setState({books:t.data},console.log(t.data))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement(g,null,o.a.createElement(p,null,o.a.createElement(v,{size:"md-12"},this.state.books.length?o.a.createElement(E,{heading:"Saved Books"},this.state.books.map(function(t){return o.a.createElement(S,{key:t._id,src:t?t.src:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",title:t.title,authors:t.authors.join(", "),date:t.date,description:t.description,link:t.link,handleDeleteBook:function(){return e.handleDeleteBook(t._id)}})})):o.a.createElement(E,{heading:"Saved Books"}))))}}]),t}(a.Component),I=function(){return o.a.createElement(g,null,o.a.createElement(p,null,o.a.createElement(v,{size:"md-12"},o.a.createElement(f,null))))},j=n(53),D=n(55),C=n(54),O=function(){return o.a.createElement(j.a,null,o.a.createElement("div",null,o.a.createElement(c,null),o.a.createElement(D.a,null,o.a.createElement(C.a,{exact:!0,path:"/searchBooks",component:x}),o.a.createElement(C.a,{exact:!0,path:"/saveBooks",component:N}),o.a.createElement(C.a,{component:I}))))},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");z?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):A(e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.8f0a7844.chunk.js.map