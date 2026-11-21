import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,u as i}from"./iframe-ey0lnv34.js";import{n as a,t as o}from"./_argtypes-9JdYHY1M.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{s=t(),r(),o(),c=n(),l={title:`Components/Tabs`,component:i,args:{label:`Settings sections`,value:`general`,onChange:()=>{},tabs:[]},argTypes:{...a,size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]}},parameters:{layout:`centered`,docs:{description:{component:`Switch between related views in place.

## Rules
- Tabs switch **content in place** — they are not navigation.
- 2–7 short, parallel labels.
- The active tab is clear; for a sequence use **Steps**, not tabs.`}}}},u={render:e=>{let[t,n]=(0,s.useState)(`general`);return(0,c.jsx)(`div`,{style:{width:420},children:(0,c.jsx)(i,{...e,value:t,onChange:n,tabs:[{id:`general`,label:`General`,content:(0,c.jsx)(`p`,{children:`General settings.`})},{id:`network`,label:`Network`,content:(0,c.jsx)(`p`,{children:`Network settings.`})},{id:`about`,label:`About`,content:(0,c.jsx)(`p`,{children:`About this device.`}),disabled:!0}]})})}},d={render:()=>{let[e,t]=(0,s.useState)(`a`);return(0,c.jsx)(`div`,{style:{display:`grid`,gap:16,width:440},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(n=>(0,c.jsx)(i,{size:n,label:`Sections ${n}`,value:e,onChange:t,tabs:[{id:`a`,label:`General`,content:(0,c.jsx)(`p`,{children:`General.`})},{id:`b`,label:`Network`,content:(0,c.jsx)(`p`,{children:`Network.`})}]},n))})}},f={render:()=>{let[e,t]=(0,s.useState)(`overview`);return(0,c.jsx)(`div`,{style:{width:620},children:(0,c.jsx)(i,{label:`Sections`,value:e,onChange:t,tabs:[{id:`overview`,label:`Overview`,content:(0,c.jsx)(`p`,{children:`Overview.`})},{id:`activity`,label:`Activity`,content:(0,c.jsx)(`p`,{children:`Activity.`})},{id:`members`,label:`Members`,content:(0,c.jsx)(`p`,{children:`Members.`})},{id:`billing`,label:`Billing`,content:(0,c.jsx)(`p`,{children:`Billing.`})},{id:`settings`,label:`Settings`,content:(0,c.jsx)(`p`,{children:`Settings.`})},{id:`archive`,label:`Archive`,content:(0,c.jsx)(`p`,{children:`Archive.`}),disabled:!0}]})})}},p=[`Default`,`Sizes`,`Many`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("general");
    return <div style={{
      width: 420
    }}>
        <RumahlTabs {...args} value={value} onChange={setValue} tabs={[{
        id: "general",
        label: "General",
        content: <p>General settings.</p>
      }, {
        id: "network",
        label: "Network",
        content: <p>Network settings.</p>
      }, {
        id: "about",
        label: "About",
        content: <p>About this device.</p>,
        disabled: true
      }]} />
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("a");
    return <div style={{
      display: "grid",
      gap: 16,
      width: 440
    }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlTabs key={size} size={size} label={\`Sections \${size}\`} value={value} onChange={setValue} tabs={[{
        id: "a",
        label: "General",
        content: <p>General.</p>
      }, {
        id: "b",
        label: "Network",
        content: <p>Network.</p>
      }]} />)}
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("overview");
    return <div style={{
      width: 620
    }}>
        <RumahlTabs label="Sections" value={value} onChange={setValue} tabs={[{
        id: "overview",
        label: "Overview",
        content: <p>Overview.</p>
      }, {
        id: "activity",
        label: "Activity",
        content: <p>Activity.</p>
      }, {
        id: "members",
        label: "Members",
        content: <p>Members.</p>
      }, {
        id: "billing",
        label: "Billing",
        content: <p>Billing.</p>
      }, {
        id: "settings",
        label: "Settings",
        content: <p>Settings.</p>
      }, {
        id: "archive",
        label: "Archive",
        content: <p>Archive.</p>,
        disabled: true
      }]} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as Default,f as Many,d as Sizes,p as __namedExportsOrder,l as default};