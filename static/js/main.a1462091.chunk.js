(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),s=n(10),o=n(2),u=n(3),l=n(4),b=n(6),d=n(5),h=n(8),j=n(11),m=n(0),f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.handleSubmit=function(t){if(t.preventDefault(),e.checkIfDuplicate())return alert("".concat(e.state.name," already exist in your contacts!"));e.props.onSubmit(Object(h.a)(Object(h.a)({},e.state),{},{id:Object(j.a)(3)})),e.reset()},e.checkIfDuplicate=function(){return e.props.allContacts.some((function(t){return t.name===e.state.name}))},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.handleChange,t=this.state,n=this.handleSubmit,a=t.name,r=t.number,c=Object.values(this.state).some((function(e){return!e}));return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:a,onChange:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:" Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ",required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:r,onChange:e,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:" Phone number must be digits and can contain spaces, dashes, parentheses and can start with + ",required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",disabled:c,children:"Add contact"})]})}}]),n}(a.Component),O=f,p=function(e){var t=e.onChange,n=e.value;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Find contacts by name"}),Object(m.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(e){return t(e.target.value)}})]})},v=function(e){var t=e.lists,n=e.onClick;e.items;return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,r=e.id;return Object(m.jsxs)("li",{children:[t,": ",a,Object(m.jsx)("button",{type:"button",id:r,onClick:n,children:"delete"})]},r)}))})})},x=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"}],filter:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.handleCreate=function(t){e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.handleDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t.target.id}))}}))},e.handleFilter=function(t){return e.setState({filter:t})},e.getFilter=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.handleCreate,t=this.handleDelete,n=this.handleFilter,a=this.getFilter,r=this.state,c=r.filter,i=r.contacts;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{allContacts:i,onSubmit:e}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(p,{value:c,onChange:n}),Object(m.jsx)(v,{lists:a(),onClick:t})]})}}]),n}(r.a.Component),g=x,C=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(g,{})})})};n(17);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a1462091.chunk.js.map