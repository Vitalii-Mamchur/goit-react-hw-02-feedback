(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(4),i=n.n(c),o=(n(14),n(5)),s=n(6),d=n(7),u=n(9),b=n(8),l=n(1),j=n.n(l),h=n(0),g=function(e){var t=e.title,n=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:t}),n]})};g.prototype={title:j.a.string.isRequired,children:j.a.string.isRequired};var p=g,v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{className:"button",name:e,type:"button",onClick:n,children:e},e)}))})};v.prototype={options:j.a.string.isRequired,onLeaveFeedback:j.a.string.isRequired};var O=v,f=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,c=e.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",a]}),Object(h.jsxs)("p",{children:["Total: ",r]}),Object(h.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]})};f.prototype={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired};var k=f,m=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})};m.prototype={message:j.a.string.isRequired};var x=m,F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good,a=0;return t&&n&&(a=Math.round(100*n/t)),a},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,r=this.countTotalFeedback(),c=this.countPositiveFeedbackPercentage(),i=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:i,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(p,{title:"Statistics",children:0===r?Object(h.jsx)(x,{message:"No feedback given"}):Object(h.jsx)(k,{good:t,neutral:n,bad:a,total:r,positivePercentage:c})})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c78fd778.chunk.js.map