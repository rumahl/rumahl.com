import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{N as r,O as i,Pt as a,R as o,St as s,ct as c,en as l,n as u,nt as d,ut as f}from"./iframe-ey0lnv34.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{p=t(),u(),m=n(),h={title:`Layout/App/Onboarding`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Onboarding / wizard (app style)

A template/inspiration for a guided setup: a step indicator, one form per
step and a footer with Back/Continue. Content on the surface.`}}}},g=[{id:`device`,label:`Device`},{id:`account`,label:`Account`},{id:`done`,label:`Done`}],_={render:()=>{let[e,t]=(0,p.useState)(`device`),n=g.findIndex(t=>t.id===e);return(0,m.jsxs)(`div`,{style:{height:560,display:`flex`,flexDirection:`column`},children:[(0,m.jsx)(`div`,{style:{padding:`22px 30px 0`},children:(0,m.jsx)(a,{steps:g,active:e})}),(0,m.jsx)(`div`,{style:{flex:1,overflow:`auto`,padding:`24px 30px`,maxWidth:560,display:`grid`,gap:16,alignContent:`start`},children:e===`device`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Set up this device`,description:`Name it and choose where it lives.`}),(0,m.jsxs)(`label`,{style:{display:`grid`,gap:8},children:[(0,m.jsx)(c,{size:`sm`,children:`Device name`}),(0,m.jsx)(r,{defaultValue:`Alex's phone`})]}),(0,m.jsxs)(`label`,{style:{display:`grid`,gap:8},children:[(0,m.jsx)(c,{size:`sm`,children:`Region`}),(0,m.jsx)(i,{label:`Region`,value:`eu`,onChange:()=>{},options:[{value:`eu`,label:`Europe`},{value:`us`,label:`United States`}]})]})]}):e===`account`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Your account`,description:`Sign in to sync your workspace.`}),(0,m.jsxs)(`label`,{style:{display:`grid`,gap:8},children:[(0,m.jsx)(c,{size:`sm`,children:`Email`}),(0,m.jsx)(r,{type:`email`,defaultValue:`alex@rumahl.dev`})]}),(0,m.jsx)(o,{label:`Send me product updates`,defaultChecked:!0})]}):(0,m.jsx)(l,{title:`You're all set`,description:`Your device is ready to use.`})}),(0,m.jsx)(d,{}),(0,m.jsxs)(f,{align:`center`,justify:`between`,gap:3,style:{padding:16},children:[(0,m.jsx)(s,{onClick:()=>t(g[Math.max(n-1,0)].id),disabled:n===0,children:`Back`}),(0,m.jsx)(s,{variant:`primary`,onClick:()=>t(g[Math.min(n+1,g.length-1)].id),disabled:n===g.length-1,children:`Continue`})]})]})}},v=[`Default`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState("device");
    const index = STEPS.findIndex(s => s.id === step);
    const next = () => setStep(STEPS[Math.min(index + 1, STEPS.length - 1)]!.id);
    const back = () => setStep(STEPS[Math.max(index - 1, 0)]!.id);
    return <div style={{
      height: 560,
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        padding: "22px 30px 0"
      }}>
          <Steps steps={STEPS} active={step} />
        </div>
        <div style={{
        flex: 1,
        overflow: "auto",
        padding: "24px 30px",
        maxWidth: 560,
        display: "grid",
        gap: 16,
        alignContent: "start"
      }}>
          {step === "device" ? <>
              <PageHeader title="Set up this device" description="Name it and choose where it lives." />
              <label style={{
            display: "grid",
            gap: 8
          }}>
                <Text size="sm">Device name</Text>
                <RumahlInput defaultValue="Alex's phone" />
              </label>
              <label style={{
            display: "grid",
            gap: 8
          }}>
                <Text size="sm">Region</Text>
                <RumahlSelect label="Region" value="eu" onChange={() => {}} options={[{
              value: "eu",
              label: "Europe"
            }, {
              value: "us",
              label: "United States"
            }]} />
              </label>
            </> : step === "account" ? <>
              <PageHeader title="Your account" description="Sign in to sync your workspace." />
              <label style={{
            display: "grid",
            gap: 8
          }}>
                <Text size="sm">Email</Text>
                <RumahlInput type="email" defaultValue="alex@rumahl.dev" />
              </label>
              <RumahlSwitch label="Send me product updates" defaultChecked />
            </> : <PageHeader title="You're all set" description="Your device is ready to use." />}
        </div>
        <Divider />
        <Flex align="center" justify="between" gap={3} style={{
        padding: 16
      }}>
          <Button onClick={back} disabled={index === 0}>
            Back
          </Button>
          <Button variant="primary" onClick={next} disabled={index === STEPS.length - 1}>
            Continue
          </Button>
        </Flex>
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Default,v as __namedExportsOrder,h as default};