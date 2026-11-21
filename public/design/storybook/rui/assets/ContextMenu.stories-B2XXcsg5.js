import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Bt as r,Gn as i,Ht as a,Ln as o,Rn as s,Xn as c,ct as l,n as u}from"./iframe-ey0lnv34.js";var d,f,p,m,h;function g(){return(g=e((()=>{d=t(),u(),c(),f=n(),p={title:`Components/ContextMenu`,component:r,args:{open:!1,x:0,y:0,items:[{id:`open`,label:`Open`,icon:(0,f.jsx)(o,{}),shortcut:`⌘O`},{id:`open-with`,label:`Open in new window`,icon:(0,f.jsx)(s,{})},{id:`rename`,label:`Rename`,shortcut:`↵`},`separator`,{id:`info`,label:`Get info`,icon:(0,f.jsx)(i,{})},{id:`trash`,label:`Move to trash`,danger:!0,disabled:!1}],onClose:()=>{}},parameters:{layout:`centered`,docs:{description:{component:`A right-click menu opened at the pointer.

## Rules
- Actions for the item under the pointer; **one verb per item**.
- Destructive action last with \`danger\`.
- Pair with \`useContextMenu\`; close on outside click, Escape, scroll.`}}}},m={render:()=>{let e=a(),[t,n]=(0,d.useState)(),c=[{id:`open`,label:`Open`,icon:(0,f.jsx)(o,{}),shortcut:`⌘O`,onSelect:()=>n(`Open`)},{id:`open-with`,label:`Open in new window`,icon:(0,f.jsx)(s,{}),onSelect:()=>n(`Open in new window`)},{id:`rename`,label:`Rename`,shortcut:`↵`,onSelect:()=>n(`Rename`)},`separator`,{id:`info`,label:`Get info`,icon:(0,f.jsx)(i,{}),onSelect:()=>n(`Get info`)},{id:`trash`,label:`Move to trash`,danger:!0,onSelect:()=>n(`Move to trash`)}];return(0,f.jsxs)(`div`,{style:{display:`grid`,gap:14,justifyItems:`center`},children:[(0,f.jsx)(`div`,{onContextMenu:e.onContextMenu,style:{display:`grid`,placeItems:`center`,width:320,height:180,border:`1px dashed var(--control-border)`,borderRadius:14},children:(0,f.jsx)(l,{tone:`muted`,children:`Right-click anywhere in this area`})}),t?(0,f.jsxs)(l,{size:`sm`,tone:`accent`,children:[`Selected: `,t]}):null,(0,f.jsx)(r,{open:e.open,x:e.x,y:e.y,onClose:e.close,items:c})]})}},h=[`Default`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const menu = useContextMenu();
    const [selected, setSelected] = useState<string>();
    const items: ContextMenuEntry[] = [{
      id: "open",
      label: "Open",
      icon: <DocumentIcon />,
      shortcut: "⌘O",
      onSelect: () => setSelected("Open")
    }, {
      id: "open-with",
      label: "Open in new window",
      icon: <ExternalLinkIcon />,
      onSelect: () => setSelected("Open in new window")
    }, {
      id: "rename",
      label: "Rename",
      shortcut: "↵",
      onSelect: () => setSelected("Rename")
    }, "separator", {
      id: "info",
      label: "Get info",
      icon: <SettingsIcon />,
      onSelect: () => setSelected("Get info")
    }, {
      id: "trash",
      label: "Move to trash",
      danger: true,
      onSelect: () => setSelected("Move to trash")
    }];
    return <div style={{
      display: "grid",
      gap: 14,
      justifyItems: "center"
    }}>
        <div onContextMenu={menu.onContextMenu} style={{
        display: "grid",
        placeItems: "center",
        width: 320,
        height: 180,
        border: "1px dashed var(--control-border)",
        borderRadius: 14
      }}>
          <Text tone="muted">Right-click anywhere in this area</Text>
        </div>
        {selected ? <Text size="sm" tone="accent">
            Selected: {selected}
          </Text> : null}
        <ContextMenu open={menu.open} x={menu.x} y={menu.y} onClose={menu.close} items={items} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Default,h as __namedExportsOrder,p as default};