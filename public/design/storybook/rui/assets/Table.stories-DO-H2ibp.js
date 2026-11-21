import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,o as r,vt as i}from"./iframe-ey0lnv34.js";import{n as a,t as o}from"./_argtypes-9JdYHY1M.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),o(),s=t(),c={title:`Components/Table`,component:i,argTypes:a,args:{getRowKey:e=>String(e.name),columns:[{key:`name`,header:`Name`},{key:`size`,header:`Size`,align:`end`},{key:`status`,header:`Status`}],rows:[{name:`Files`,size:`1.2 GB`,status:`ok`},{name:`Photos`,size:`8.4 GB`,status:`ok`},{name:`Backups`,size:`42.1 GB`,status:`warning`},{name:`Cache`,size:`512 MB`,status:`ok`}]},parameters:{docs:{description:{component:`Tabular data with aligned columns.

## Rules
- Align numbers to the **end**, text to the start.
- Keep only the columns you need; the first column identifies the row.
- Prefer hairline row separators over heavy zebra/boxing.`}}}},l={},u={args:{striped:!0}},d={args:{columns:[{key:`name`,header:`Name`},{key:`size`,header:`Size`,align:`end`},{key:`status`,header:`Status`,render:e=>(0,s.jsx)(r,{tone:e.status===`ok`?`success`:`warning`,children:String(e.status)})}]}},f=[`Default`,`Striped`,`WithRender`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "name",
      header: "Name"
    }, {
      key: "size",
      header: "Size",
      align: "end"
    }, {
      key: "status",
      header: "Status",
      render: row => <RumahlBadge tone={row.status === "ok" ? "success" : "warning"}>{String(row.status)}</RumahlBadge>
    }]
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,u as Striped,d as WithRender,f as __namedExportsOrder,c as default};