import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Rt as r,n as i}from"./iframe-ey0lnv34.js";import{n as a,t as o}from"./_argtypes-9JdYHY1M.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{s=t(),i(),o(),c=n(),l={title:`Components/Chip`,component:r,args:{children:`Design`,selected:!1},argTypes:{...a,selected:{control:`boolean`}},parameters:{docs:{description:{component:`A compact, selectable token — filters, tags, quick choices.

- \`selected\` toggles the accent tint; provide \`onClick\` to make it interactive.

## Rules
- Chips are for **filtering / multi-select**, not for actions (use a Button).
- Keep labels to one or two words.
- Signal selection with the accent fill, never colour alone.`}}}},u={},d={args:{selected:!0}},f={render:e=>(0,c.jsx)(r,{...e,onRemove:()=>{},children:`Removable`})},p={render:()=>{let e=[`Design`,`Engineering`,`Marketing`,`Support`],[t,n]=(0,s.useState)([`Design`]);return(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:e.map(e=>(0,c.jsx)(r,{selected:t.includes(e),onClick:()=>n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),children:e},e))})}},m=[`Default`,`Selected`,`Removable`,`FilterGroup`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Chip {...args} onRemove={() => {}}>Removable</Chip>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = ["Design", "Engineering", "Marketing", "Support"];
    const [active, setActive] = useState<string[]>(["Design"]);
    return <div style={{
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }}>
        {options.map(option => <Chip key={option} selected={active.includes(option)} onClick={() => setActive(current => current.includes(option) ? current.filter(value => value !== option) : [...current, option])}>
            {option}
          </Chip>)}
      </div>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as Default,p as FilterGroup,f as Removable,d as Selected,m as __namedExportsOrder,l as default};