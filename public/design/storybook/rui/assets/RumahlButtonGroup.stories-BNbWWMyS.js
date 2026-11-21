import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{E as r,n as i}from"./iframe-ey0lnv34.js";function a(){let[e,t]=(0,o.useState)(`list`),[n,i]=(0,o.useState)([`list`,`grid`]);return(0,s.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{children:`Single selection · drag to move`}),(0,s.jsx)(r,{label:`Single view`,options:c,value:e,onChange:t})]}),(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h3`,{children:`Multiple selection · toggle independently`}),(0,s.jsx)(r,{label:`Visible views`,options:c,multiple:!0,value:n,onChange:i})]})]})}var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o=t(),i(),s=n(),c=[{value:`list`,label:`List`},{value:`grid`,label:`Grid`},{value:`columns`,label:`Columns`,disabled:!0}],l={title:`Components/Button group`,parameters:{docs:{description:{component:`Segmented actions that read as one control.

## Rules
- 2–5 mutually exclusive choices (or a small toolbar).
- The selected option is accent-tinted; keep labels parallel.
- For 4+ options, consider a **Select**.`}}}},u={render:()=>{let[e,t]=(0,o.useState)(`list`);return(0,s.jsx)(r,{label:`Layout`,options:c,value:e,onChange:t})}},d={render:()=>{let[e,t]=(0,o.useState)([`grid`]);return(0,s.jsx)(r,{label:`Views`,multiple:!0,options:c,value:e,onChange:e=>t(e)})}},f={render:()=>(0,s.jsx)(r,{label:`Actions`,mode:`actions`,options:[{value:`cut`,label:`Cut`},{value:`copy`,label:`Copy`},{value:`paste`,label:`Paste`}],onChange:()=>{}})},p={render:()=>(0,s.jsx)(a,{})},m=[`xs`,`sm`,`md`,`lg`,`xl`],h={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:16},children:m.map(e=>(0,s.jsx)(r,{label:`Layout (${e})`,size:e,options:c,value:`list`,onChange:()=>{}},e))})},g=[`SingleSelection`,`MultipleToggle`,`Actions`,`SingleAndMultiple`,`Sizes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("list");
    return <RumahlButtonGroup label="Layout" options={OPTIONS} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<readonly string[]>(["grid"]);
    return <RumahlButtonGroup label="Views" multiple options={OPTIONS} value={value} onChange={next => setValue(next)} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlButtonGroup label="Actions" mode="actions" options={[{
    value: "cut",
    label: "Cut"
  }, {
    value: "copy",
    label: "Copy"
  }, {
    value: "paste",
    label: "Paste"
  }]} onChange={() => {}} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SelectionComparison />
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16
  }}>
      {SIZES.map(size => <RumahlButtonGroup key={size} label={\`Layout (\${size})\`} size={size} options={OPTIONS} value="list" onChange={() => {}} />)}
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as Actions,d as MultipleToggle,p as SingleAndMultiple,u as SingleSelection,h as Sizes,g as __namedExportsOrder,l as default};