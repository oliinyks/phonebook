"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[418],{4406:function(e,t,n){n.d(t,{Z:function(){return s}});var a="Button_button__DKOwf",r=n(184);function s(e){var t=e.children;return(0,r.jsx)("button",{className:a,children:t})}},4418:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(2706),r=n(885),s=n(2791),i=n(4406),c=n(5984),o=n(8174),u="Form_label__Hu0fD",l="Form_input__3M8A7",d=n(184);function m(){var e=(0,a.Jx)().data,t=(0,a.Lr)(),n=(0,r.Z)(t,2),m=n[0],h=n[1].isLoading,x=(0,s.useState)(""),_=(0,r.Z)(x,2),f=_[0],b=_[1],p=(0,s.useState)(""),j=(0,r.Z)(p,2),v=j[0],g=j[1],C=(0,c.x0)(),N=(0,c.x0)(),F=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":b(a);break;case"number":g(a);break;default:return}},w=function(){b(""),g("")};return(0,d.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),e.map((function(e){return e.name})).some((function(e){return e.toLowerCase()===f.toLowerCase()})))return o.Am.error("You already have a contact with that name");var n={id:(0,c.x0)(),name:f,number:v};m(n),o.Am.success("You have just created a new contact"),w()},children:[(0,d.jsx)("label",{className:u,htmlFor:C,children:"Name"}),(0,d.jsx)("input",{className:l,type:"text",value:f,onChange:F,name:"name",id:C,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:u,htmlFor:N,children:"Number"}),(0,d.jsx)("input",{className:l,type:"tel",value:v,onChange:F,name:"number",id:N,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)(i.Z,{type:"submit",disabled:h,children:h?"Adding contact...":"Add contact"})]})}var h=n(1413),x=n(5048),_=function(e){return e.filter},f="OneContact_item__Y0Xsd",b="OneContact_button__i5HbT",p=n(8014),j=n(9126);function v(e){var t=e.id,n=e.name,s=e.number,i=(0,a.Nt)(),c=(0,r.Z)(i,2),u=c[0],l=c[1].isLoading;return(0,d.jsxs)("li",{className:f,children:[(0,d.jsxs)("p",{children:[n,": ",s]}),(0,d.jsx)("button",{type:"button",className:b,onClick:function(){return u(t),void o.Am.success("You have just deleted a contact")},children:l?(0,d.jsx)(p.VbM,{}):(0,d.jsx)(j.fZX,{})})]},t)}var g="ContactList_items__dBi8j";function C(){var e=(0,x.v9)(_),t=(0,a.Jx)(),n=t.data,r=void 0===n?[]:n,s=t.isFetching;return(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)("p",{children:"Loading..."}),(0,d.jsx)("ul",{className:g,children:function(){var t=e.toLowerCase();return r.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(e){return(0,d.jsx)(v,(0,h.Z)({},e),e.id)}))})]})}var N=(0,n(5273).oM)({name:"filter",initialState:"",reducers:{setFilter:function(e,t){return t.payload}}}),F=N.actions.setFilter,w=(N.reducer,"Filter_label__GKAq6"),A="Filter_input__1Oxp3";function L(){var e=(0,x.v9)(_),t=(0,c.x0)(),n=(0,x.I0)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("label",{className:w,htmlFor:t,children:"Find contacts by name"}),(0,d.jsx)("input",{className:A,type:"text",value:e,id:t,onChange:function(e){var t=e.currentTarget.value;n(F(t))}})]})}var Z={title:"Contacts_title__LxdN4",subtitle:"Contacts_subtitle__YZry6"};function y(){var e=(0,a.Jx)(),t=e.data,n=void 0===t?[]:t,r=e.isLoading;return(0,d.jsxs)("section",{children:[(0,d.jsx)("h1",{className:Z.title,children:"Your phonebook"}),(0,d.jsx)(m,{}),(0,d.jsx)("h2",{className:Z.subtitle,children:"Contacts"}),n.length>0?(0,d.jsxs)(d.Fragment,{children:[r&&(0,d.jsx)("p",{children:"Loading..."}),(0,d.jsx)(L,{}),(0,d.jsx)(C,{})]}):(0,d.jsx)("p",{className:Z.text,children:"You have no contacts"})]})}}}]);
//# sourceMappingURL=418.f97e8805.chunk.js.map