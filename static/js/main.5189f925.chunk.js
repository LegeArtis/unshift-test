(this["webpackJsonpunshift-test"]=this["webpackJsonpunshift-test"]||[]).push([[0],{30:function(e,t,n){e.exports=n(49)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),l=n(20),i=n(14),s=(n(39),n(2)),u=n(3),m=n(8),b=n(7),d=n(9),h=(n(40),o.a.createContext()),p=h.Provider,g=h.Consumer,f=function(){return function(e){return function(t){return o.a.createElement(g,null,(function(n){return o.a.createElement(e,Object.assign({},t,{blogstoreService:n}))}))}}},v=(n(41),function(){return o.a.createElement("div",{className:"lds-css ng-scope"},o.a.createElement("div",{className:"lds-disk"},o.a.createElement("div",null,o.a.createElement("div",null),o.a.createElement("div",null))))}),y=n(11),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={blogReady:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.blogstoreService,a=t.blogLoaded;n.getAllBlog().then((function(t){a(t),e.setState({blogReady:!0})}))}},{key:"render",value:function(){if(!this.state.blogReady)return o.a.createElement(v,null);var e=this.props.blog.map((function(e,t){return o.a.createElement("li",{className:"all_blog_element",key:t},o.a.createElement(y.a,{to:"/posts/".concat(e.id)},e.title))}));return o.a.createElement("ul",{className:"all_blog_list"},e)}}]),t}(a.Component),O={blogLoaded:function(e){return{type:"BLOG_LOADED",payload:e}}},j=Object(l.b)((function(e){return{blog:e.blog}}),O)(f()(E)),_=n(29),k=n(15),S=(n(43),n(44),function(e){var t=e.text,n=void 0===t?"Error Indicator":t;return o.a.createElement("div",{className:"error"},n)}),C=(n(45),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.blog,n=e.onSubmit,a=e.deleteBlog,r=t.comments.map((function(e,t){return o.a.createElement("li",{className:"comments_li",key:t},e.body)}));return o.a.createElement("div",{className:"blog_view_block"},o.a.createElement("div",{className:"blog_view_edit_block"},o.a.createElement("button",{className:"blog_view_edit_btn"},o.a.createElement(y.a,{to:"/edit/".concat(t.id)},"edit")),o.a.createElement("button",{className:"blog_view_edit_btn",onClick:a},"delete")),o.a.createElement("h1",{className:"blog_view_header"}," ",t.title," "),o.a.createElement("p",{className:"blog_view_body"}," ",t.body," "),o.a.createElement("h2",{className:"blog_view_header"},"Comments"),o.a.createElement("ul",null,r),o.a.createElement("form",{className:"comments_form",onSubmit:n},o.a.createElement("textarea",{className:"blog_view_input",required:!0,name:"comment",placeholder:"comments"}),o.a.createElement("input",{className:"blog_view_button",type:"submit",value:"send"})))}}]),t}(a.Component));function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={blogReady:!1,blogItem:void 0,errorLink:!1,redirect:!1},n.deleteBlog=function(e){var t=n.props,a=t.blogstoreService,o=t.blogId;a.deleteBlog(o).then((function(e){e.ok&&n.setState({redirect:!0})}))},n.onSubmit=function(e){e.preventDefault();var t={postId:n.state.blogItem.id,body:e.target.comment.value};n.props.blogstoreService.addComment(t).then((function(e){e.ok&&n.setState((function(e){var n=e.blogItem;return{blogItem:x({},n,{comments:[].concat(Object(_.a)(n.comments),[t])})}}))})),e.target.comment.value=""},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.blogstoreService,a=t.blogId;n.getBlogWithComments(a).then((function(t){t.title?e.setState({blogReady:!0,blogItem:t}):e.setState({blogReady:!0,errorLink:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.blogReady,n=e.blogItem,a=e.errorLink,r=e.redirect;return t?r?o.a.createElement(i.a,{to:"/main"}):a?o.a.createElement(S,{text:"I can not download this blog. Check link or it is problem with our server :("}):o.a.createElement(C,{blog:n,onSubmit:this.onSubmit,deleteBlog:this.deleteBlog}):o.a.createElement(v,null)}}]),t}(a.Component),B=f()(w),D=(n(46),function(){return o.a.createElement("div",{className:"app_header"},o.a.createElement(y.a,{to:"/main"},o.a.createElement("h1",{className:"app_link"},"All blog ")),o.a.createElement(y.a,{to:"/add-blog"},o.a.createElement("h1",{className:"app_link"},"Add blog ")))}),I=(n(47),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",text:""},n.onSubmit=function(e){e.preventDefault();var t={title:e.target.title.value,body:e.target.text.value};n.props.blogstoreService.addBlog(t).then((function(e){e.ok&&n.setState({title:"",text:""})}))},n.onChange=function(e){n.setState(Object(k.a)({},e.target.name,e.target.value))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.text;return o.a.createElement("form",{className:"add_blog_form",onSubmit:this.onSubmit},o.a.createElement("input",{className:"add_blog_title center",value:t,onChange:this.onChange,type:"text",required:!0,name:"title",placeholder:"title"}),o.a.createElement("textarea",{className:"add_blog_text center",value:n,onChange:this.onChange,name:"text",required:!0,placeholder:"blog text"}),o.a.createElement("input",{className:"add_blog_button center",type:"submit",value:"add blog"}))}}]),t}(a.Component)),L=f()(I),P=(n(48),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",text:"",id:void 0,errorLink:!1,edited:!1},n.onSubmit=function(e){e.preventDefault();var t={title:e.target.title.value,body:e.target.text.value};n.props.blogstoreService.editBlog(t,n.state.id).then((function(e){e.ok&&n.setState({edited:!0})}))},n.onChange=function(e){n.setState(Object(k.a)({},e.target.name,e.target.value))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.blogstoreService,a=t.blogId;n.getBlogWithComments(a).then((function(t){t.title?e.setState({title:t.title,text:t.body,id:t.id}):e.setState({errorLink:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.text,a=e.errorLink,r=e.edited,c=e.id;return r?o.a.createElement(i.a,{to:"/posts/".concat(c)}):a?o.a.createElement(S,{text:"I can not edit this blog. Check link or it is problem with our server :("}):o.a.createElement("form",{className:"add_blog_form",onSubmit:this.onSubmit},o.a.createElement("input",{className:"add_blog_title center",value:t,onChange:this.onChange,type:"text",required:!0,name:"title",placeholder:"title"}),o.a.createElement("textarea",{className:"add_blog_text center",value:n,onChange:this.onChange,name:"text",required:!0,placeholder:"blog text"}),o.a.createElement("input",{className:"add_blog_button center",type:"submit",value:"edit blog"}))}}]),t}(a.Component)),A=f()(P),T=function(){return o.a.createElement("div",{className:"main"},o.a.createElement(D,null),o.a.createElement(i.b,{path:"/main",exact:!0,component:j}),o.a.createElement(i.b,{path:"/add-blog",exact:!0,component:L}),o.a.createElement(i.b,{path:"/posts/:id",exact:!0,component:function(e){var t=e.match;return o.a.createElement(B,{blogId:t.params.id})}}),o.a.createElement(i.b,{path:"/edit/:id",exact:!0,component:function(e){var t=e.match;return o.a.createElement(A,{blogId:t.params.id})}}))},R=function(){function e(){Object(s.a)(this,e),this.url="https://bloggy-api.herokuapp.com"}return Object(u.a)(e,[{key:"getAllBlog",value:function(){return fetch("".concat(this.url,"/posts")).then((function(e){return e.json()}))}},{key:"getBlogWithComments",value:function(e){return fetch("".concat(this.url,"/posts/").concat(e,"?_embed=comments")).then((function(e){return e.json()}))}},{key:"addComment",value:function(e){return fetch("".concat(this.url,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"addBlog",value:function(e){return fetch("".concat(this.url,"/posts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"deleteBlog",value:function(e){return fetch("".concat(this.url,"/posts/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}},{key:"editBlog",value:function(e,t){return fetch("".concat(this.url,"/posts/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}]),e}(),q=n(19),J={blog:[]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BLOG_LOADED":case"BLOG_DELETE":return{blog:t.payload};default:return e}},M=Object(q.b)(G),W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(S,null):this.props.children}}]),t}(a.Component),U=n(5),z=new R,F=Object(U.a)();c.a.render(o.a.createElement(l.a,{store:M},o.a.createElement(W,null,o.a.createElement(p,{value:z},o.a.createElement(i.c,{basename:"/unshift-test",history:F},o.a.createElement(T,null))))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5189f925.chunk.js.map