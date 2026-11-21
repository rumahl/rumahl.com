import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Fn as r,Hn as i,Kn as a,Xn as o,gn as s,n as c}from"./iframe-ey0lnv34.js";import{n as l,t as u}from"./_argtypes-9JdYHY1M.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{d=t(),c(),o(),u(),f=n(),p={title:`Components/ToggleTile`,component:s,args:{label:`Dark mode`,active:!1},argTypes:{...l,active:{control:`boolean`},color:{control:`color`}},parameters:{layout:`centered`,docs:{description:{component:`A large quick-setting tile (control-center style).

## Rules
- For **on/off quick settings** with an icon and a noun label.
- \`active\` is the on state; keep the label a noun.`}}}},m={render:e=>(0,f.jsx)(s,{...e,icon:(0,f.jsx)(i,{}),onClick:()=>{}})},h={render:()=>{let[e,t]=(0,d.useState)({dark:!0,animations:!0,vpn:!1});return(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:8,width:300},children:[{id:`dark`,label:`Dark mode`,icon:(0,f.jsx)(i,{})},{id:`animations`,label:`Animations`,icon:(0,f.jsx)(r,{})},{id:`vpn`,label:`Protection`,icon:(0,f.jsx)(a,{}),description:`Always on`}].map(n=>(0,f.jsx)(s,{label:n.label,icon:n.icon,...n.description?{description:n.description}:{},active:e[n.id],onClick:()=>t(e=>({...e,[n.id]:!e[n.id]}))},n.id))})}},g=[`Default`,`ControlCenter`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleTile {...args} icon={<MoonIcon />} onClick={() => {}} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<Record<string, boolean>>({
      dark: true,
      animations: true,
      vpn: false
    });
    const tiles = [{
      id: "dark",
      label: "Dark mode",
      icon: <MoonIcon />
    }, {
      id: "animations",
      label: "Animations",
      icon: <BoltIcon />
    }, {
      id: "vpn",
      label: "Protection",
      icon: <ShieldIcon />,
      description: "Always on"
    }];
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      width: 300
    }}>
        {tiles.map(tile => <ToggleTile key={tile.id} label={tile.label} icon={tile.icon} {...tile.description ? {
        description: tile.description
      } : {}} active={state[tile.id]} onClick={() => setState(current => ({
        ...current,
        [tile.id]: !current[tile.id]
      }))} />)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as ControlCenter,m as Default,g as __namedExportsOrder,p as default};