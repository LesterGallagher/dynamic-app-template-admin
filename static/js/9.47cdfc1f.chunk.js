(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1115:function(e,t,n){"use strict";var a=n(941),r=n.n(a),o=n(945),s=n.n(o),l=n(857),c=n(856),i=n(98),p=n.n(i),u=n(2),b=n.n(u),d=n(1),m=n.n(d),f=n(943),h=n.n(f),y=(n(877),n(858)),v=n(873),g=n(961),j={onEnter:b.a.func,onEntering:b.a.func,onEntered:b.a.func,onExit:b.a.func,onExiting:b.a.func,onExited:b.a.func},O={$bs_panel:b.a.shape({headingId:b.a.string,bodyId:b.a.string,bsClass:b.a.string,expanded:b.a.bool})},E=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props.children,t=this.context.$bs_panel||{},n=t.headingId,a=t.bodyId,r=t.bsClass,o=t.expanded,s=Object(y.f)(this.props),c=s[0],i=s[1];return c.bsClass=r||c.bsClass,n&&a&&(i.id=a,i.role=i.role||"tabpanel",i["aria-labelledby"]=n),m.a.createElement(g.a,Object(l.a)({in:o},i),m.a.createElement("div",{className:Object(y.e)(c,"collapse")},e))},t}(m.a.Component);E.propTypes=j,E.contextTypes=O;var C=Object(y.a)("panel",E),x={collapsible:b.a.bool.isRequired},_={$bs_panel:b.a.shape({bsClass:b.a.string})},T=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=e.collapsible,r=(this.context.$bs_panel||{}).bsClass,o=Object(y.g)(this.props,["collapsible"]),s=o[0],c=o[1];s.bsClass=r||s.bsClass;var i=m.a.createElement("div",Object(l.a)({},c,{className:p()(n,Object(y.e)(s,"body"))}),t);return a&&(i=m.a.createElement(C,null,i)),i},t}(m.a.Component);T.propTypes=x,T.defaultProps={collapsible:!1},T.contextTypes=_;var k=Object(y.a)("panel",T),A=n(859),N=n(878),w=n.n(N),I={componentClass:w.a},$={$bs_panel:b.a.shape({headingId:b.a.string,bsClass:b.a.string})},P=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=e.componentClass,r=Object(A.a)(e,["children","className","componentClass"]),o=this.context.$bs_panel||{},s=o.headingId,c=o.bsClass,i=Object(y.f)(r),u=i[0],b=i[1];return u.bsClass=c||u.bsClass,s&&(b.role=b.role||"tab",b.id=s),m.a.createElement(a,Object(l.a)({},b,{className:p()(n,Object(y.e)(u,"heading"))}),t)},t}(m.a.Component);P.propTypes=I,P.defaultProps={componentClass:"div"},P.contextTypes=$;var K=Object(y.a)("panel",P),S=n(898),M=n(924),R=n(875),W={onClick:b.a.func,componentClass:w.a},B={componentClass:M.a},L={$bs_panel:b.a.shape({bodyId:b.a.string,onToggle:b.a.func,expanded:b.a.bool})},U=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleToggle=t.handleToggle.bind(Object(S.a)(Object(S.a)(t))),t}Object(c.a)(t,e);var n=t.prototype;return n.handleToggle=function(e){var t=(this.context.$bs_panel||{}).onToggle;t&&t(e)},n.render=function(){var e=this.props,t=e.onClick,n=e.className,a=e.componentClass,r=Object(A.a)(e,["onClick","className","componentClass"]),o=this.context.$bs_panel||{},s=o.expanded,l=o.bodyId,c=a;return r.onClick=Object(R.a)(t,this.handleToggle),r["aria-expanded"]=s,r.className=p()(n,!s&&"collapsed"),l&&(r["aria-controls"]=l),m.a.createElement(c,r)},t}(m.a.Component);U.propTypes=W,U.defaultProps=B,U.contextTypes=L;var F=U,D={componentClass:w.a,toggle:b.a.bool},G={$bs_panel:b.a.shape({bsClass:b.a.string})},H=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=e.toggle,r=e.componentClass,o=Object(A.a)(e,["children","className","toggle","componentClass"]),s=(this.context.$bs_panel||{}).bsClass,c=Object(y.f)(o),i=c[0],u=c[1];return i.bsClass=s||i.bsClass,a&&(t=m.a.createElement(F,null,t)),m.a.createElement(r,Object(l.a)({},u,{className:p()(n,Object(y.e)(i,"title"))}),t)},t}(m.a.Component);H.propTypes=D,H.defaultProps={componentClass:"div"},H.contextTypes=G;var q=Object(y.a)("panel",H),V={$bs_panel:b.a.shape({bsClass:b.a.string})},J=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=(this.context.$bs_panel||{}).bsClass,r=Object(y.f)(this.props),o=r[0],s=r[1];return o.bsClass=a||o.bsClass,m.a.createElement("div",Object(l.a)({},s,{className:p()(n,Object(y.e)(o,"footer"))}),t)},t}(m.a.Component);J.contextTypes=V;var Q=Object(y.a)("panel",J),Y=Object.prototype.hasOwnProperty,z=function(e,t){return e?e+"--"+t:null},X={expanded:b.a.bool,onToggle:b.a.func,eventKey:b.a.any,id:b.a.string},Z={$bs_panelGroup:b.a.shape({getId:b.a.func,activeKey:b.a.any,onToggle:b.a.func})},ee={$bs_panel:b.a.shape({headingId:b.a.string,bodyId:b.a.string,bsClass:b.a.string,onToggle:b.a.func,expanded:b.a.bool})},te=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleToggle=function(e){var n=t.context.$bs_panelGroup,a=!t.getExpanded();n&&n.onToggle?n.onToggle(t.props.eventKey,a,e):t.props.onToggle(a,e)},t}Object(c.a)(t,e);var n=t.prototype;return n.getChildContext=function(){var e,t=this.props,n=t.eventKey,a=t.id,r=null==n?a:n;if(null!==r){var o=this.context.$bs_panelGroup,s=o&&o.getId||z;e={headingId:s(r,"heading"),bodyId:s(r,"body")}}return{$bs_panel:Object(l.a)({},e,{bsClass:this.props.bsClass,expanded:this.getExpanded(),onToggle:this.handleToggle})}},n.getExpanded=function(){var e=this.context.$bs_panelGroup;return e&&Y.call(e,"activeKey")?e.activeKey===this.props.eventKey:!!this.props.expanded},n.render=function(){var e=this.props,t=e.className,n=e.children,a=Object(y.g)(this.props,["onToggle","eventKey","expanded"]),r=a[0],o=a[1];return m.a.createElement("div",Object(l.a)({},o,{className:p()(t,Object(y.d)(r))}),n)},t}(m.a.Component);te.propTypes=X,te.contextTypes=Z,te.childContextTypes=ee;var ne=h()(Object(y.a)("panel",Object(y.c)(s()(v.d).concat([v.e.DEFAULT,v.e.PRIMARY]),v.e.DEFAULT,te)),{expanded:"onToggle"});r()(ne,{Heading:K,Title:q,Body:k,Footer:Q,Toggle:F,Collapse:C});t.a=ne},1207:function(e,t,n){e.exports={AppsList:"AppsList_AppsList__3Wa3P"}},1208:function(e,t,n){e.exports={AppsBadge:"AppsBadge_AppsBadge__1-VYo"}},1506:function(e,t,n){"use strict";n.r(t);var a=n(199),r=n.n(a),o=n(246),s=n(47),l=n(48),c=n(50),i=n(49),p=n(51),u=n(1),b=n.n(u),d=n(1207),m=n.n(d),f=(u.Component,n(903),n(85)),h=n(100),y=n(58),v=n(1208),g=n.n(v),j=n(1115),O=n(1162),E=n(99),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.appKey,n=(e.uiTemplate,e.appPublic,e.linkTo);return b.a.createElement("div",{className:g.a.AppsBadge},b.a.createElement(j.a,null,b.a.createElement(j.a.Heading,null,t),b.a.createElement(j.a.Body,null,b.a.createElement(O.a,{to:n,componentClass:E.b},"Aanpassen"))))}}]),t}(u.Component),x=n(949),_=n(69),T=n(950),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.appKey,n=e.appPublic,a=_.d.replace(":appId",t);return b.a.createElement("div",null,b.a.createElement(C,{linkTo:a,appPublic:n,appKey:t}))}}]),t}(u.Component),A=Object(y.d)(Object(h.b)(function(e){return{auth:e.firebase.auth}}),Object(f.firebaseConnect)(function(e){var t=e.appKey,n=e.auth;return["/users/".concat(n.uid,"/apps/").concat(t,"/public")]}),Object(h.b)(function(e,t){return{appPublic:Object(x.get)(e.firebase,"users/".concat(e.firebase.auth.uid,"/apps/").concat(t.appKey,"/public"),T.a)}}))(k),N=n(904),w=n(391),I=n(1041),$=n.n(I),P=n(1146),K=n(1496),S=n(1497),M=n(1178),R=n(1179),W=n(1492),B=n(68),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).getAppsShallow=Object(o.a)(r.a.mark(function e(){var t,a,o,s,l,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),t=n.props.firebase,e.next=4,t.auth().currentUser.getIdToken(!1);case 4:return a=e.sent,o=n.props.auth.uid,e.next=8,fetch("https://dynamic-template-app.firebaseio.com/users/".concat(o,"/apps.json?shallow=true&auth=").concat(a));case 8:return s=e.sent,e.next=11,s.json();case 11:l=e.sent,c=Object.keys(l||{}),n.setState({keys:c,loading:!1});case 14:case"end":return e.stop()}},e)})),n.state={keys:[]},e.isAuthenticated&&n.getAppsShallow(),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){this.props.isAuthenticated&&!1===e.isAuthenticated&&this.getAppsShallow()}},{key:"render",value:function(){var e=this,t=this.state,n=t.keys;return t.loading?b.a.createElement(w.a,null):b.a.createElement(N.a,null,b.a.createElement(P.a,{style:{paddingTop:"20px"}},b.a.createElement(K.a,null,b.a.createElement(S.a,{xs:12,sm:6,md:4,lg:4},b.a.createElement(j.a,null,b.a.createElement(j.a.Heading,null,"Nieuwe App"),b.a.createElement(j.a.Body,null,"Maak een nieuwe app.",b.a.createElement("br",null),b.a.createElement("br",null),b.a.createElement(M.a,null,b.a.createElement(R.a,null,"Naam van je nieuwe app"),b.a.createElement(W.a,{componentClass:"input",type:"text",inputRef:function(t){return e.ref=t}}))),b.a.createElement(j.a.Footer,null,b.a.createElement(O.a,{onClick:function(){var t,n=(t=e.ref.value,$()(t,{replacement:"-",remove:null,lower:!0}));e.props.history.push(_.e.replace(":appId",n))},bsStyle:"primary"},"Maak"))))),b.a.createElement(K.a,null,n.map(function(e){return b.a.createElement(S.a,{xs:12,sm:6,md:4,lg:3},b.a.createElement(A,{key:e,appKey:e}))}))))}}]),t}(u.Component),U=Object(y.d)(Object(f.firebaseConnect)(),B.f,Object(h.b)(function(e){return{auth:e.firebase.auth}}));t.default=U(L)},878:function(e,t,n){"use strict";t.__esModule=!0;var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=s(n(1)),o=s(n(925));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(function(e,t,n,o,s){var l=e[t],c="undefined"===typeof l?"undefined":a(l);return r.default.isValidElement(l)?new Error("Invalid "+o+" `"+s+"` of type ReactElement supplied to `"+n+"`, expected an element type (a string or a ReactClass)."):"function"!==c&&"string"!==c?new Error("Invalid "+o+" `"+s+"` of value `"+l+"` supplied to `"+n+"`, expected an element type (a string or a ReactClass)."):null})},883:function(e,t,n){"use strict";var a=n(47),r=n(48),o=n(50),s=n(49),l=n(51),c=n(1),i=n.n(c),p=n(906),u=n.n(p),b=n(907),d=n.n(b),m=n(1505),f=n(1494),h=n(1495),y=n(99),v=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this))).state={},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.navbarItems;return i.a.createElement("div",{className:d.a.Navbar},i.a.createElement(m.a,{fluid:!0,staticTop:!0,inverse:!0,className:d.a.navbar},i.a.createElement(m.a.Header,null,i.a.createElement(m.a.Brand,null,"ESStudio App Maker ",i.a.createElement("small",null,"(door Sem Postma)"))),i.a.createElement(f.a,null,e.map(function(e,t){var n=e.title,a=e.route;return i.a.createElement(h.a,{componentClass:y.b,href:a,to:a,eventKey:t,key:t},n)}))))}}]),t}(c.Component),g=n(908),j=n.n(g),O=(c.Component,function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this))).state={},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.navbarItems,n=e.children;return i.a.createElement("div",{className:u.a.Layout},i.a.createElement(v,{navbarItems:t}),i.a.createElement("div",null,n))}}]),t}(c.Component));O.defaultProps={navbarItems:[]};t.a=O},903:function(e,t,n){"use strict";var a=n(47),r=n(48),o=n(50),s=n(49),l=n(51),c=n(1),i=n.n(c),p=n(883),u=n(69),b=[{title:"Home",route:u.b},{title:"Signin",route:u.c},{title:"Apps",route:u.a}],d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.children;return i.a.createElement(p.a,{navbarItems:b},e)}}]),t}(c.Component);t.a=d},904:function(e,t,n){"use strict";var a=n(47),r=n(48),o=n(50),s=n(49),l=n(51),c=n(1),i=n.n(c),p=n(905),u=n.n(p),b=(n(883),n(1146)),d=n(1496),m=n(1497),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this))).state={},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:u.a.Page},i.a.createElement(b.a,{fluid:!0},i.a.createElement(d.a,null,i.a.createElement(m.a,{xs:12,className:"nopadding"},this.props.children))))}}]),t}(c.Component),h=n(903),y=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(f,null,this.props.children))}}]),t}(c.Component);t.a=y},905:function(e,t,n){e.exports={Page:"Page_Page__wqF6Q"}},906:function(e,t,n){e.exports={Layout:"Layout_Layout__2Na2U"}},907:function(e,t,n){e.exports={Navbar:"Navbar_Navbar__1bVh3",navbar:"Navbar_navbar__WWOoy"}},908:function(e,t,n){e.exports={Footer:"Footer_Footer__3Ea7l"}},925:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){function t(t,n,a,r,o,s){var l=r||"<<anonymous>>",c=s||a;if(null==n[a])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+l+"`."):null;for(var i=arguments.length,p=Array(i>6?i-6:0),u=6;u<i;u++)p[u-6]=arguments[u];return e.apply(void 0,[n,a,l,o,c].concat(p))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}},950:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={title:"Mijn nieuwe app!",description:"Dit is mijn nieuwe app",logoStorageRef:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP",primaryThemeColor:"#ec6e08"}}}]);
//# sourceMappingURL=9.47cdfc1f.chunk.js.map