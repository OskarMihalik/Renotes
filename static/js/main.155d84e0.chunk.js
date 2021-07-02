(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{127:function(e,t){},134:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),c=n.n(a),i=(n(98),n(57)),s=n(58),l=n(29),d=(n(99),n(172)),u=n(187),j=n(174),b=n(5),p=Object(d.a)((function(){return{root:{height:10,flexGrow:1,width:"100%"},treeDiv:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"98%"}}})),f=function(e){var t=e.notes,n=e.onNoteClick,r=e.returnActiveNote,o=p();return Object(b.jsx)(j.a,{className:o.root,multiSelect:!1,selected:r()?r().id:"",children:t.map((function(e){return Object(b.jsx)("div",{className:o.treeDiv,children:Object(b.jsx)(u.a,{nodeId:e.id,size:"small",label:e.name?e.name:"...",onLabelClick:function(){return n(e.id)},color:"secondary"})},e.id)}))})},O=n(182),m=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"row",alignContent:"flex-start"},title:{flexBasis:"65%",padding:"5px 5px"},date:{flexBasis:"35%",padding:"5px 5px"},resize:{fontSize:15}}}));function x(e){var t=e.returnActiveNote,n=e.onNoteTitleChange,r=m();return Object(b.jsxs)("div",{className:r.root,children:[Object(b.jsx)(O.a,{id:"title",className:r.title,placeholder:"title",fullWidth:!0,variant:"outlined",size:"small",value:t()?t().name:"",onChange:n,InputProps:{classes:{input:r.resize}}}),Object(b.jsx)(O.a,{id:"date",className:r.date,placeholder:"date",fullWidth:!0,variant:"outlined",size:"small",disabled:!0,value:t()?t().date:"",InputProps:{classes:{input:r.resize}}})]})}var h=n(73),g=n.n(h),v=(n(129),n(18)),N=Object(d.a)((function(e){return{root:{padding:"5px 5px"},editorDark:{"& .CodeMirror":{color:e.palette.text.primary,borderColor:e.palette.text.secondary,backgroundColor:"inherit",height:"92vh"},"& .cm-s-easymde .CodeMirror-cursor":{borderColor:e.palette.text.primary},"& .editor-toolbar":{borderColor:e.palette.text.primary},"& .editor-toolbar > *":{color:e.palette.text.primary},"& .editor-toolbar > .active, .editor-toolbar > button:hover, .editor-preview pre, .cm-s-easymde .cm-comment":{backgroundColor:e.palette.background.paper},"& .editor-preview":{backgroundColor:e.palette.background.default}}}})),C=function(e){var t=e.returnActiveNote,n=e.onNoteContentChange,o=Object(v.a)(),a=N(o),c=Object(r.useMemo)((function(){return{autofocus:!0,spellChecker:!1,hideIcons:["side-by-side","fullscreen"]}}),[]);return Object(b.jsx)("div",{className:a.root,children:Object(b.jsx)("div",{className:a.editorDark,children:Object(b.jsx)(g.a,{options:c,value:t()?t().content:"",onChange:n})})})},k=n(74),y=n(184),S=n(75),w=n.n(S),D=n(76),I=n.n(D),z=n(186),A=n(178),T=n(176),M=n(177),P=function(e){var t=e.isDeletePopupOpen,n=e.deletePopupOpenClose,r=e.deleteNote;return Object(b.jsxs)(z.a,{open:t,onClose:n,children:[Object(b.jsx)(T.a,{id:"delete-note?",children:Object(b.jsx)(M.a,{children:"Are you sure you want to delete your note?"})}),Object(b.jsxs)(A.a,{children:[Object(b.jsx)(y.a,{variant:"contained",color:"primary",size:"small",onClick:function(){n()},children:"No"}),Object(b.jsx)(y.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){r(),n()},children:"Yes"})]})]})},F=n(78),J=n.n(F),R=n(77),B=n.n(R),E=Object(d.a)((function(){return{root:{display:"flex",flexDirection:"column",textTransform:"none"},element:{transform:"rotate(-90deg)",margin:"12px 0px",padding:"12px 0px",maxWidth:"40px",maxHeight:"30px",minWidth:"40px",minHeight:"30px",fontSize:10}}})),L=function(e){var t=e.changeNotesHidden,n=e.addNote,o=e.deleteNote,a=e.returnActiveNote,c=e.notes,i=e.changeTheme,s=e.prefersDarkMode,d=e.setNotes,u=E(),j=Object(r.useState)(!1),p=Object(l.a)(j,2),f=p[0],O=p[1],m=function(){a()&&O(!f)},x=Object(r.useRef)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P,{isDeletePopupOpen:f,deletePopupOpenClose:m,deleteNote:o}),Object(b.jsxs)("div",{className:u.root,children:[Object(b.jsx)(y.a,{onClick:t,className:u.element,children:"Notes"}),Object(b.jsx)(y.a,{className:u.element,onClick:function(){var e=document.createElement("a"),t=new Blob([JSON.stringify(c)],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="notes.txt",e.click()},children:"Export"}),Object(b.jsx)(y.a,{className:u.element,onClick:function(){return x.current.click()},children:"Import"}),Object(b.jsx)("input",{ref:x,type:"file",accept:".txt",hidden:!0,style:{display:"none"},onChange:function(e){var t=new FileReader;t.readAsBinaryString(e.target.files[0]),t.onloadend=function(){d(JSON.parse(t.result))}}}),Object(b.jsx)(y.a,{className:u.element,onClick:function(){n({name:"new note",content:""})},children:Object(b.jsx)(w.a,{})}),Object(b.jsx)(y.a,{className:u.element,onClick:function(){m()},children:Object(b.jsx)(I.a,{style:{transform:"rotate(90deg)"}})}),Object(b.jsx)(y.a,{className:u.element,onClick:function(){i()},children:s?Object(b.jsx)(B.a,{style:{transform:"rotate(90deg)"}}):Object(b.jsx)(J.a,{style:{transform:"rotate(90deg)"}})})]})]})},H=n(82),W=n(181),G=n(183),U=n(179),Y=n(180),_=n(79);var q=function(){var e=Object(U.a)("(prefers-color-scheme: dark)"),t=Object(r.useState)(e),n=Object(l.a)(t,2),o=n[0],a=n[1],c=Object(r.useMemo)((function(){return Object(H.a)({palette:{type:o?"dark":"light"}})}),[o]),d=Object(r.useState)([{id:"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",name:"first note",date:"Tue Jun 08 2021 15:15:42 GMT+0200 (Central European Summer Time)",content:""}]),u=Object(l.a)(d,2),j=u[0],p=u[1];Object(r.useEffect)((function(){var e=localStorage.getItem("notes"),t=JSON.parse(e);t&&p(t)}),[]),Object(r.useEffect)((function(){var e=JSON.stringify(j);localStorage.setItem("notes",e)}),[j]);var O=Object(r.useState)(0),m=Object(l.a)(O,2),h=m[0],g=m[1],v=Object(r.useState)(!1),N=Object(l.a)(v,2),y=N[0],S=N[1],w=function(e){var t=Object(k.v4)(),n=Date().toLocaleString(),r=Object(s.a)({id:t,date:n},e);p([].concat(Object(i.a)(j),[r]))},D=function(){if(j.length>0){var e=Object(i.a)(j);e.splice(h,1),g(j.length>1?h-1:-1),p(e)}},I=function(){return h>=0?j[h]:null};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)("title",{children:"Renotes"})}),Object(b.jsxs)(Y.a,{theme:c,children:[Object(b.jsx)(W.a,{}),Object(b.jsxs)(G.a,{className:y?"parent hidden":"parent",children:[Object(b.jsx)(G.a,{borderRight:1,className:"sidebar",children:Object(b.jsx)(L,{changeNotesHidden:function(){S(!y)},addNote:w,deleteNote:D,returnActiveNote:I,notes:j,changeTheme:function(){return a(!o),o},prefersDarkMode:o,setNotes:p})}),Object(b.jsx)(G.a,{borderRight:1,className:y?"treeview hidden":"treeview",children:Object(b.jsx)(f,{notes:j,onNoteClick:function(e){g(j.findIndex((function(t){return t.id===e})))},noteIndex:h,returnActiveNote:I})}),Object(b.jsx)(G.a,{className:"toolbar",children:Object(b.jsx)(x,{addNote:w,returnActiveNote:I,deleteNote:D,onNoteTitleChange:function(e){var t=j.map((function(e){return e}));t[h]=Object(s.a)(Object(s.a)({},t[h]),{},{name:e.target.value}),p(t)}})}),Object(b.jsx)(G.a,{className:"note",children:Object(b.jsx)(C,{returnActiveNote:I,onNoteContentChange:function(e){if(h>=0){var t=Object(i.a)(j);t[h].content=e,p(t)}},prefersDarkMode:o,custom_theme:c})})]})]})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),K()},98:function(e,t,n){},99:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.155d84e0.chunk.js.map