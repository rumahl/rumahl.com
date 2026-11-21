import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,F as i,I as a,L as o,M as s,N as c,P as l,R as u,j as d,n as f,z as p}from"./iframe-ey0lnv34.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{m=t(),f(),h=t(),g=n(),_={title:`Components/Inputs`,component:c,args:{placeholder:`Type here`,size:`md`,glass:!0,disabled:!1},parameters:{docs:{description:{component:'Text entry. Wraps a native `<input>`; the label and hint are slots.\n\n- `glass` — recessed on a surface (default); `glass={false}` — flat.\n- `floating` — over a picture or another surface (its own island).\n- `status` (neutral / error / success), `loading`, `disabled`, `size` xs–xl.\n\n## Rules\n- **Always pair with a `label`** (or an accessible name) — placeholders are not labels.\n- **Errors are text, not colour.** Use `status="error"` with a hint, never colour alone.\n- Native props (`value`, `onChange`, `name`, `type`…) are forwarded.'}}},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},glass:{control:`boolean`},floating:{control:`boolean`},status:{control:`inline-radio`,options:[`neutral`,`error`,`success`]},disabled:{control:`boolean`},loading:{control:`boolean`},color:{control:`color`},backgroundColor:{control:`color`}}},v={args:{}},y={render:e=>(0,g.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,h.createElement)(c,{...e,key:t,size:t,placeholder:`Size ${t}`}))})},b={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,g.jsx)(c,{placeholder:`Success`,status:`success`,defaultValue:`ok`}),(0,g.jsx)(c,{placeholder:`Error`,error:`This value is required`,defaultValue:``})]})},x={render:()=>(0,g.jsx)(c,{material:`glass`,defaultValue:`Glass input`})},S={render:()=>(0,g.jsx)(c,{disabled:!0,defaultValue:`Disabled`})},C={render:()=>(0,g.jsx)(p,{rows:3,placeholder:`Multiline`,defaultValue:`Line one
Line two`})},w={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,g.jsx)(r,{label:`Unchecked`}),(0,g.jsx)(r,{label:`Checked`,defaultChecked:!0}),(0,g.jsx)(r,{label:`Disabled`,disabled:!0})]})},T={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:8},children:[(0,g.jsx)(a,{name:`demo`,label:`Option A`,defaultChecked:!0}),(0,g.jsx)(a,{name:`demo`,label:`Option B`})]})},E={render:()=>(0,g.jsx)(l,{prefix:`$`,suffix:`/mo`,defaultValue:`12`,"aria-label":`Amount`})},D={render:()=>(0,g.jsxs)(d,{label:`Network`,description:`Applied on the next connection.`,children:[(0,g.jsx)(u,{label:`Automatic`,defaultChecked:!0}),(0,g.jsx)(u,{label:`Metered`})]})},O={render:()=>{let[e,t]=(0,m.useState)([`wifi`]);return(0,g.jsx)(i,{label:`Interfaces`,description:`Pick any that apply.`,value:e,onChange:t,options:[{value:`wifi`,label:`Wi-Fi`},{value:`ethernet`,label:`Ethernet`},{value:`vpn`,label:`VPN`,disabled:!0}]})}},k={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:10},children:[(0,g.jsx)(u,{label:`On`,defaultChecked:!0}),(0,g.jsx)(u,{label:`Off`}),(0,g.jsx)(u,{label:`Disabled`,disabled:!0})]})},A={render:()=>(0,g.jsx)(o,{label:`Opacity`,min:0,max:100,defaultValue:60})},j={render:()=>(0,g.jsx)(s,{label:`Choose file`})},M={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gap:12,width:320},children:[`#0b84ff`,`#22c7a9`,`#f45b85`,`#ff9f0a`].map(e=>(0,g.jsx)(c,{color:e,placeholder:e,defaultValue:e},e))})},N={render:()=>(0,g.jsx)(`div`,{style:{width:320},children:(0,g.jsx)(c,{loading:!0,defaultValue:`Fetching value…`,placeholder:`Loading`})})},P={render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(!1),i=n&&!e.trim()?`This field is required`:void 0;return(0,g.jsx)(c,{placeholder:`Required field`,value:e,onBlur:()=>r(!0),...i?{error:i}:{},onChange:e=>t(e.target.value)})}},F={render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:14,width:340},children:[(0,g.jsx)(c,{placeholder:`Default`}),(0,g.jsx)(c,{placeholder:`Success`,status:`success`,defaultValue:`ok`}),(0,g.jsx)(c,{placeholder:`Error`,error:`This field is required`,defaultValue:`x`}),(0,g.jsx)(c,{placeholder:`Disabled`,disabled:!0,defaultValue:`Cannot edit`}),(0,g.jsx)(u,{label:`Switch on`,defaultChecked:!0}),(0,g.jsx)(u,{label:`Switch off`}),(0,g.jsx)(r,{label:`Checkbox checked`,defaultChecked:!0}),(0,g.jsx)(a,{label:`Radio selected`,defaultChecked:!0}),(0,g.jsx)(o,{label:`Range`,defaultValue:40})]})},I=[`Text`,`Sizes`,`TextValidated`,`Glass`,`Disabled`,`TextArea`,`Checkbox`,`Radio`,`InputGroup`,`FieldGroup`,`MultiSelect`,`Switch`,`Range`,`File`,`Tinted`,`Loading`,`Required`,`States`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 12
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlInput {...args} key={size} size={size} placeholder={\`Size \${size}\`} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      <RumahlInput placeholder="Success" status="success" defaultValue="ok" />
      <RumahlInput placeholder="Error" error="This value is required" defaultValue="" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlInput material="glass" defaultValue="Glass input" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlInput disabled defaultValue="Disabled" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlTextArea rows={3} placeholder="Multiline" defaultValue={"Line one\\nLine two"} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 8
  }}>
      <RumahlCheckbox label="Unchecked" />
      <RumahlCheckbox label="Checked" defaultChecked />
      <RumahlCheckbox label="Disabled" disabled />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 8
  }}>
      <RumahlRadio name="demo" label="Option A" defaultChecked />
      <RumahlRadio name="demo" label="Option B" />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlInputGroup prefix="$" suffix="/mo" defaultValue="12" aria-label="Amount" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlFieldGroup label="Network" description="Applied on the next connection.">
      <RumahlSwitch label="Automatic" defaultChecked />
      <RumahlSwitch label="Metered" />
    </RumahlFieldGroup>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<readonly string[]>(["wifi"]);
    return <RumahlMultiSelect label="Interfaces" description="Pick any that apply." value={value} onChange={setValue} options={[{
      value: "wifi",
      label: "Wi-Fi"
    }, {
      value: "ethernet",
      label: "Ethernet"
    }, {
      value: "vpn",
      label: "VPN",
      disabled: true
    }]} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <RumahlSwitch label="On" defaultChecked />
      <RumahlSwitch label="Off" />
      <RumahlSwitch label="Disabled" disabled />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlRange label="Opacity" min={0} max={100} defaultValue={60} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <RumahlFileInput label="Choose file" />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    width: 320
  }}>
      {["#0b84ff", "#22c7a9", "#f45b85", "#ff9f0a"].map(color => <RumahlInput key={color} color={color} placeholder={color} defaultValue={color} />)}
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <RumahlInput loading defaultValue="Fetching value…" placeholder="Loading" />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);
    const error = touched && !value.trim() ? "This field is required" : undefined;
    return <RumahlInput placeholder="Required field" value={value} onBlur={() => setTouched(true)} {...error ? {
      error
    } : {}} onChange={event => setValue(event.target.value)} />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 14,
    width: 340
  }}>
      <RumahlInput placeholder="Default" />
      <RumahlInput placeholder="Success" status="success" defaultValue="ok" />
      <RumahlInput placeholder="Error" error="This field is required" defaultValue="x" />
      <RumahlInput placeholder="Disabled" disabled defaultValue="Cannot edit" />
      <RumahlSwitch label="Switch on" defaultChecked />
      <RumahlSwitch label="Switch off" />
      <RumahlCheckbox label="Checkbox checked" defaultChecked />
      <RumahlRadio label="Radio selected" defaultChecked />
      <RumahlRange label="Range" defaultValue={40} />
    </div>
}`,...F.parameters?.docs?.source}}}})))()}L();export{w as Checkbox,S as Disabled,D as FieldGroup,j as File,x as Glass,E as InputGroup,N as Loading,O as MultiSelect,T as Radio,A as Range,P as Required,y as Sizes,F as States,k as Switch,v as Text,C as TextArea,b as TextValidated,M as Tinted,I as __namedExportsOrder,_ as default};