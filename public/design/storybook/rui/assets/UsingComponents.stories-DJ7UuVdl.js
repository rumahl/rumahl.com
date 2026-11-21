import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{E as r,N as i,O as a,R as o,St as s,V as c,c as l,l as u,n as d,o as f,s as p,u as m}from"./iframe-ey0lnv34.js";var h,g,_,v,y;function b(){return(b=e((()=>{h=t(),d(),g=n(),_={title:`Guides/Using components`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`The control vocabulary and how to start with each one.`}}}},v={render:()=>{let[e,t]=(0,h.useState)(`auto`),[n,d]=(0,h.useState)(`general`),[_,v]=(0,h.useState)(3),[y,b]=(0,h.useState)(``),[x,S]=(0,h.useState)(!0);return(0,g.jsxs)(`div`,{style:{display:`grid`,gap:16,width:420},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,g.jsx)(s,{variant:`primary`,children:`Primary`}),(0,g.jsx)(s,{children:`Secondary`}),(0,g.jsx)(s,{variant:`danger`,glass:!1,children:`Danger flat`})]}),(0,g.jsx)(i,{placeholder:`Input`}),(0,g.jsx)(a,{label:`Select`,value:e,onChange:t,options:[{value:`auto`,label:`Auto`},{value:`manual`,label:`Manual`}]}),(0,g.jsx)(o,{label:`Switch`,checked:x,onChange:e=>S(e.target.checked)}),(0,g.jsx)(l,{label:`Search`,clearLabel:`Clear`,value:y,onChange:b}),(0,g.jsx)(u,{label:`Count`,decreaseLabel:`Less`,increaseLabel:`More`,value:_,onChange:v}),(0,g.jsx)(r,{label:`Layout`,value:`list`,options:[{value:`list`,label:`List`},{value:`grid`,label:`Grid`}],onChange:()=>{}}),(0,g.jsx)(m,{label:`Sections`,value:n,onChange:d,tabs:[{id:`general`,label:`General`,content:(0,g.jsx)(`p`,{style:{margin:0},children:`General settings.`})},{id:`network`,label:`Network`,content:(0,g.jsx)(`p`,{style:{margin:0},children:`Network settings.`})}]}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,g.jsx)(f,{tone:`success`,children:`Success`}),(0,g.jsx)(f,{tone:`warning`,children:`Warning`})]}),(0,g.jsx)(p,{title:`Notice`,tone:`info`,children:`Callouts share the control material.`}),(0,g.jsx)(c,{label:`Progress`,value:64})]})}},y=[`Catalog`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("auto");
    const [tab, setTab] = useState("general");
    const [count, setCount] = useState(3);
    const [query, setQuery] = useState("");
    const [on, setOn] = useState(true);
    return <div style={{
      display: "grid",
      gap: 16,
      width: 420
    }}>
        <div style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }}>
          <Button variant="primary">Primary</Button>
          <Button>Secondary</Button>
          <Button variant="danger" glass={false}>Danger flat</Button>
        </div>
        <RumahlInput placeholder="Input" />
        <RumahlSelect label="Select" value={value} onChange={setValue} options={[{
        value: "auto",
        label: "Auto"
      }, {
        value: "manual",
        label: "Manual"
      }]} />
        <RumahlSwitch label="Switch" checked={on} onChange={event => setOn(event.target.checked)} />
        <RumahlSearch label="Search" clearLabel="Clear" value={query} onChange={setQuery} />
        <RumahlStepper label="Count" decreaseLabel="Less" increaseLabel="More" value={count} onChange={setCount} />
        <RumahlButtonGroup label="Layout" value="list" options={[{
        value: "list",
        label: "List"
      }, {
        value: "grid",
        label: "Grid"
      }]} onChange={() => {}} />
        <RumahlTabs label="Sections" value={tab} onChange={setTab} tabs={[{
        id: "general",
        label: "General",
        content: <p style={{
          margin: 0
        }}>General settings.</p>
      }, {
        id: "network",
        label: "Network",
        content: <p style={{
          margin: 0
        }}>Network settings.</p>
      }]} />
        <div style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }}>
          <RumahlBadge tone="success">Success</RumahlBadge>
          <RumahlBadge tone="warning">Warning</RumahlBadge>
        </div>
        <RumahlNotice title="Notice" tone="info">Callouts share the control material.</RumahlNotice>
        <RumahlProgress label="Progress" value={64} />
      </div>;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Catalog,y as __namedExportsOrder,_ as default};