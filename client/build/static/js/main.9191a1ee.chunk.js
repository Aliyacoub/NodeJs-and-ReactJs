(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(30),o=n.n(s),i=(n(36),n(37),n(6)),c=n(7),h=n(9),l=n(8),u=n(13),j=n(3),b=(n(38),n(2)),d=n(4),m=n.n(d),p=n(0),O=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).logout=a.logout.bind(Object(b.a)(a)),a}return Object(c.a)(n,[{key:"logout",value:function(){localStorage.removeItem("token"),localStorage.removeItem("id"),m.a.defaults.headers.common={Authorization:""},this.props.history.push("/")}},{key:"render",value:function(){return localStorage.getItem("token")?Object(p.jsx)("div",{className:"navbar",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/",children:" \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 "})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/post/create",children:" \u0627\u0646\u0634\u0627\u0621 \u062a\u062f\u0648\u064a\u0646\u0629 "})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#logout",onClick:this.logout,children:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c"})})]})}):Object(p.jsx)("div",{className:"navbar",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/",children:" \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 "})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/Login",children:" \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 "})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/Register",children:" \u0627\u0644\u062a\u0633\u062c\u064a\u0644  "})})]})})}}]),n}(r.a.Component),g=Object(j.f)(O),v=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={posts:[],error:"",isLoading:!0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"fetchPosts",value:function(){var t=this;m.a.get("/api/posts").then((function(e){t.setState({posts:e.data,error:"",isLoading:!1})})).catch((function(e){t.setState({error:e.response.data.message})}))}},{key:"render",value:function(){return this.state.isLoading?Object(p.jsx)("h4",{children:"\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0625\u0646\u062a\u0638\u0627\u0631"}):this.state.error?Object(p.jsx)("blockquote",{children:this.state.error}):this.state.posts.length<1?Object(p.jsx)("h4",{children:"\u0644\u0627\u064a\u0648\u062c\u062f \u062a\u062f\u0648\u064a\u0646\u0627\u062a"}):this.state.posts.map((function(t){return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"column",children:[Object(p.jsx)("h4",{children:t.title}),Object(p.jsx)("h6",{className:"title",children:t.author.name}),Object(p.jsx)("p",{children:t.content.substr(0,120)}),Object(p.jsx)(u.b,{to:"/post/view/"+t._id,children:Object(p.jsx)("button",{className:"button-primary button-outline",children:"\u0627\u0641\u0631\u0623 \u0627\u0644\u0645\u0632\u064a\u062f"})}),Object(p.jsx)("hr",{})]})},t._id)}))}}]),n}(r.a.Component),x=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),a=e.call(this,t),localStorage.getItem("token")&&a.props.history.push("/"),a.onChangeEmail=a.onChangeEmail.bind(Object(b.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.renderError=a.renderError.bind(Object(b.a)(a)),a.state={email:"",password:"",error:""},a}return Object(c.a)(n,[{key:"onChangeEmail",value:function(t){this.setState({email:t.target.value,error:""})}},{key:"onChangePassword",value:function(t){this.setState({password:t.target.value,error:""})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n={email:this.state.email,password:this.state.password};m.a.post("/api/auth",n).then((function(t){localStorage.setItem("token",t.data.token),localStorage.setItem("_id",t.data._id),m.a.defaults.headers.common={Authorization:t.data.token},e.props.history.push("/")})).catch((function(t){e.setState({error:t.response.data.message})}))}},{key:"renderError",value:function(){return this.state.error?Object(p.jsx)("blockquote",{children:this.state.error}):""}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"column column-50 offset-25",children:[Object(p.jsx)("h4",{children:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644"}),Object(p.jsx)("hr",{}),this.renderError(),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsx)("label",{children:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),Object(p.jsx)("input",{type:"email",value:this.state.email,onChange:this.onChangeEmail}),Object(p.jsx)("label",{children:" \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),Object(p.jsx)("input",{type:"password",value:this.state.password,onChange:this.onChangePassword}),Object(p.jsx)("input",{className:"button-primary",type:"submit",value:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644"})]})]})}}]),n}(r.a.Component),f=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),a=e.call(this,t),localStorage.getItem("token")&&a.props.history.push("/"),a.onChangeName=a.onChangeName.bind(Object(b.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(b.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.renderError=a.renderError.bind(Object(b.a)(a)),a.state={name:"",email:"",password:"",error:""},a}return Object(c.a)(n,[{key:"onChangeName",value:function(t){this.setState({name:t.target.value,error:""})}},{key:"onChangeEmail",value:function(t){this.setState({email:t.target.value,error:""})}},{key:"onChangePassword",value:function(t){this.setState({password:t.target.value,error:""})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n={name:this.state.name,email:this.state.email,password:this.state.password};m.a.post("/api/register",n).then((function(t){localStorage.setItem("token",t.data.token),localStorage.setItem("_id",t.data._id),m.a.defaults.headers.common={Authorization:t.data.token},e.props.history.push("/")})).catch((function(t){e.setState({error:t.response.data.message})}))}},{key:"renderError",value:function(){return this.state.error?Object(p.jsx)("blockquote",{children:this.state.error}):""}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"column column-50 offset-25",children:[Object(p.jsx)("h4",{children:"\u0627\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"}),Object(p.jsx)("hr",{}),this.renderError(),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsx)("label",{children:"\u0627\u0644\u0627\u0633\u0645"}),Object(p.jsx)("input",{type:"text",value:this.state.name,onChange:this.onChangeName}),Object(p.jsx)("label",{children:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}),Object(p.jsx)("input",{type:"email",value:this.state.email,onChange:this.onChangeEmail}),Object(p.jsx)("label",{children:" \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}),Object(p.jsx)("input",{type:"password",value:this.state.password,onChange:this.onChangePassword}),Object(p.jsx)("input",{className:"button-primary",type:"submit",value:"\u0627\u0644\u062a\u0633\u062c\u064a\u0644"})]})]})}}]),n}(r.a.Component),C=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),a=e.call(this,t),localStorage.getItem("token")||a.props.history.push("/Login"),a.onChangeTitle=a.onChangeTitle.bind(Object(b.a)(a)),a.onChangeContent=a.onChangeContent.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.renderError=a.renderError.bind(Object(b.a)(a)),a.state={title:"",content:"",error:""},a}return Object(c.a)(n,[{key:"onChangeTitle",value:function(t){this.setState({title:t.target.value,error:""})}},{key:"onChangeContent",value:function(t){this.setState({content:t.target.value,error:""})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n={title:this.state.title,content:this.state.content};m.a.post("/api/posts",n).then((function(t){e.props.history.push("/")})).catch((function(t){e.setState({error:t.response.data.message})}))}},{key:"renderError",value:function(){return this.state.error?Object(p.jsx)("blockquote",{children:this.state.error}):""}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"column column-50 offset-25",children:[Object(p.jsx)("h4",{children:" \u0627\u0646\u0634\u0627\u0621 \u0627\u0644\u062a\u062f\u0648\u064a\u0646\u0629"}),Object(p.jsx)("hr",{}),this.renderError(),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsx)("label",{children:" \u0627\u0644\u0639\u0646\u0648\u0627\u0646"}),Object(p.jsx)("input",{type:"text",value:this.state.title,onChange:this.onChangeTitle}),Object(p.jsx)("label",{children:" \u0627\u0644\u0645\u062d\u062a\u0648\u0649"}),Object(p.jsx)("textarea",{value:this.state.content,onChange:this.onChangeContent}),Object(p.jsx)("input",{className:"button-primary",type:"submit",value:" \u0627\u0646\u0634\u0627\u0621 \u0627\u0644\u062a\u062f\u0648\u064a\u0646\u0629"})]})]})}}]),n}(r.a.Component),S=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).deletePost=a.deletePost.bind(Object(b.a)(a)),a.onChangeComment=a.onChangeComment.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={post:{},comment:"",commentError:"",error:""},a}return Object(c.a)(n,[{key:"onChangeComment",value:function(t){this.setState({comment:t.target.value,commentError:""})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n={content:this.state.comment};m.a.post("/api/comments/"+this.props.match.params.id,n).then((function(t){var n=e.state.post;n.comments.push({_id:t.data._id,content:t.data.content,author:{_id:localStorage.getItem("_id")}}),e.setState({post:n,commentError:"",comment:""})})).catch((function(t){e.setState({commentError:Object(p.jsx)("blockquote",{children:t.response.data.message})})}))}},{key:"deletePost",value:function(){var t=this;m.a.delete("/api/posts/"+this.state.post._id).then((function(e){t.props.history.push("/")}))}},{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;m.a.get("/api/posts/"+e).then((function(e){t.setState({post:e.data,error:""})})).catch((function(e){t.setState({error:e.response.data.message})}))}},{key:"renderActions",value:function(){if(localStorage.getItem("token")&&localStorage.getItem("_id")===this.state.post.author._id)return Object(p.jsxs)("span",{children:[Object(p.jsx)(u.b,{to:"/post/edit/"+this.state.post._id,children:Object(p.jsx)("button",{children:"\u062a\u0639\u062f\u064a\u0644"})}),Object(p.jsx)("button",{onClick:this.deletePost,children:"\u062d\u0630\u0641"})]})}},{key:"renderComments",value:function(){var t=Object(p.jsx)("p",{children:"\u0644\u0627\u064a\u0648\u062c\u062f \u062a\u0639\u0644\u064a\u0642\u0627\u062a."});return this.state.post.comments.length&&(t=this.state.post.comments.map((function(t){return Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{className:"title",children:t.author._id===localStorage.getItem("_id")?"\u0623\u0646\u0627":t.author.name}),Object(p.jsx)("br",{}),t.content]},t._id)}))),t}},{key:"renderCommentForm",value:function(){return localStorage.getItem("token")?Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"\u0625\u0636\u0627\u0641\u0629 \u062a\u0639\u0644\u064a\u0642"}),this.state.commentError,Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsx)("textarea",{value:this.state.comment,onChange:this.onChangeComment}),Object(p.jsx)("input",{className:"button-primary",type:"submit",value:"\u0625\u0631\u0633\u0627\u0644"})]})]}):Object(p.jsx)("p",{children:"\u0627\u0644\u0631\u062c\u0627\u0621 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0644\u062a\u0639\u0644\u064a\u0642 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u062a\u062f\u0648\u064a\u0646\u0629."})}},{key:"render",value:function(){return this.state.error?Object(p.jsx)("blockquote",{children:this.state.error}):this.state.post.title?Object(p.jsxs)("div",{className:"column",children:[Object(p.jsx)("h4",{children:this.state.post.title}),Object(p.jsx)("h6",{className:"title",children:this.state.post.author.name}),Object(p.jsx)("p",{children:this.state.post.content}),this.renderActions(),Object(p.jsx)("hr",{}),Object(p.jsx)("h4",{children:"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a"}),this.renderComments(),this.renderCommentForm()]}):Object(p.jsx)("h4",{children:"\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0625\u0646\u062a\u0638\u0627\u0631"})}}]),n}(r.a.Component),y=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),a=e.call(this,t),localStorage.getItem("token")||a.props.history.push("/Login"),a.onChangeTitle=a.onChangeTitle.bind(Object(b.a)(a)),a.onChangeContent=a.onChangeContent.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.renderError=a.renderError.bind(Object(b.a)(a)),a.state={title:"",content:"",authorId:"",isLoading:!0,error:""},a}return Object(c.a)(n,[{key:"onChangeTitle",value:function(t){this.setState({title:t.target.value,error:""})}},{key:"onChangeContent",value:function(t){this.setState({content:t.target.value,error:""})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n={title:this.state.title,content:this.state.content};m.a.put("/api/posts/"+this.props.match.params.id,n).then((function(t){e.props.history.push("/")})).catch((function(t){e.setState({error:t.response.data.message})}))}},{key:"componentDidMount",value:function(){var t=this;m.a.get("/api/posts/"+this.props.match.params.id).then((function(e){t.setState({title:e.data.title,content:e.data.content,authorId:e.data.author._id,isLoading:!1})}))}},{key:"renderError",value:function(){return this.state.error?Object(p.jsx)("blockquote",{children:this.state.error}):""}},{key:"render",value:function(){return this.state.isLoading?Object(p.jsx)("h4",{children:"\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0627\u0646\u062a\u0636\u0627\u0631"}):localStorage.getItem("_id")!==this.state.authorId?Object(p.jsx)("blockquote",{children:"\u062e\u0637\u0627 404"}):Object(p.jsxs)("div",{className:"column column-50 offset-25",children:[Object(p.jsx)("h4",{children:" \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u062a\u062f\u0648\u064a\u0646\u0629"}),Object(p.jsx)("hr",{}),this.renderError(),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsx)("label",{children:" \u0627\u0644\u0639\u0646\u0648\u0627\u0646"}),Object(p.jsx)("input",{type:"text",value:this.state.title,onChange:this.onChangeTitle}),Object(p.jsx)("label",{children:" \u0627\u0644\u0645\u062d\u062a\u0648\u0649"}),Object(p.jsx)("textarea",{value:this.state.content,onChange:this.onChangeContent}),Object(p.jsx)("input",{className:"button-primary",type:"submit",value:" \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u062a\u062f\u0648\u064a\u0646\u0629"})]})]})}}]),n}(r.a.Component),k=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var a;Object(i.a)(this,n),a=e.call(this,t);var r=localStorage.getItem("token");return m.a.defaults.headers.common={Authorization:r},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(p.jsx)(j.a,{path:"/Login",component:x}),Object(p.jsx)(j.a,{path:"/Register",component:f}),Object(p.jsx)(j.a,{path:"/post/create",component:C}),Object(p.jsx)(j.a,{path:"/post/view/:id",component:S}),Object(p.jsx)(j.a,{path:"/post/edit/:id",component:y})]})})})]})})}}]),n}(r.a.Component),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),s(t),o(t)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),E()}},[[63,1,2]]]);
//# sourceMappingURL=main.9191a1ee.chunk.js.map