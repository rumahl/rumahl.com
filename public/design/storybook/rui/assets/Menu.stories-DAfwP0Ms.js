import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Gt as r,Ut as i,Wt as a,n as o}from"./iframe-ey0lnv34.js";import{n as s,t as c}from"./_argtypes-9JdYHY1M.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),o(),c(),u=n(),d={title:`Components/Menu`,argTypes:s,parameters:{layout:`centered`,docs:{description:{component:`A compact list of actions or options (popovers, context menus, dropdowns).

- \`MenuDivider\` separates groups; items may carry icons, right-aligned
  shortcuts, or \`danger\`.
- The panel is glass; rows are 30px tall with a 16px icon column reserved **only
  when any item has an icon**.

## Rules
- **One verb per item**; the destructive action goes last and uses \`danger\`.
- **Group related items** — never mix navigation and actions in one menu.
- **Keep it short**; deeper structure belongs in a dialog or a submenu.`}}}},f={render:()=>(0,u.jsxs)(i,{children:[(0,u.jsx)(r,{shortcut:`⌘N`,children:`New window`}),(0,u.jsx)(r,{shortcut:`⌘O`,children:`Open…`}),(0,u.jsx)(a,{}),(0,u.jsx)(r,{children:`Rename`}),(0,u.jsx)(r,{disabled:!0,children:`Move to trash`})]})},p={render:()=>{let[e,t]=(0,l.useState)(!0);return(0,u.jsxs)(i,{children:[(0,u.jsx)(r,{selected:e,onClick:()=>t(e=>!e),children:`Show hidden files`}),(0,u.jsx)(r,{selected:!1,children:`Sort by name`})]})}},m=[`Default`,`Checkable`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem shortcut="⌘N">New window</MenuItem>
      <MenuItem shortcut="⌘O">Open…</MenuItem>
      <MenuDivider />
      <MenuItem>Rename</MenuItem>
      <MenuItem disabled>Move to trash</MenuItem>
    </Menu>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(true);
    return <Menu>
        <MenuItem selected={on} onClick={() => setOn(value => !value)}>Show hidden files</MenuItem>
        <MenuItem selected={false}>Sort by name</MenuItem>
      </Menu>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Checkable,f as Default,m as __namedExportsOrder,d as default};