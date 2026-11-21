import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Cn as r,En as i,Fn as a,Hn as o,Kn as s,L as c,Wn as l,Xn as u,gn as d,n as f,ot as p}from"./iframe-ey0lnv34.js";var m,h,g,_,v;function y(){return(y=e((()=>{m=t(),f(),u(),h=n(),g={title:`Layout/App/Control center`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Control centre (app style)

A template/inspiration: a grid of quick toggles plus sliders. Material marks
the tiles; the rest sits on the surface.`}}}},_={render:()=>{let[e,t]=(0,m.useState)({dark:!0,performance:!1,vpn:!0}),n=e=>t(t=>({...t,[e]:!t[e]}));return(0,h.jsxs)(`div`,{style:{height:560,padding:24,display:`grid`,alignContent:`start`,gap:16,maxWidth:440},children:[(0,h.jsx)(p,{level:5,children:`Control centre`}),(0,h.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:10},children:[(0,h.jsx)(d,{label:`Dark mode`,icon:(0,h.jsx)(o,{}),active:e.dark,onClick:()=>n(`dark`)}),(0,h.jsx)(d,{label:`Performance`,icon:(0,h.jsx)(a,{}),active:e.performance,onClick:()=>n(`performance`)}),(0,h.jsx)(d,{label:`Protection`,icon:(0,h.jsx)(s,{}),description:`Always on`,active:e.vpn,onClick:()=>n(`vpn`)}),(0,h.jsx)(d,{label:`Focus`,icon:(0,h.jsx)(l,{}),onClick:()=>n(`focus`)})]}),(0,h.jsxs)(r,{children:[(0,h.jsx)(i,{title:`Brightness`,children:(0,h.jsx)(`div`,{style:{width:170},children:(0,h.jsx)(c,{label:`Brightness`,defaultValue:70})})}),(0,h.jsx)(i,{title:`Volume`,children:(0,h.jsx)(`div`,{style:{width:170},children:(0,h.jsx)(c,{label:`Volume`,defaultValue:40})})})]})]})}},v=[`Default`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<Record<string, boolean>>({
      dark: true,
      performance: false,
      vpn: true
    });
    const toggle = (id: string) => setState(current => ({
      ...current,
      [id]: !current[id]
    }));
    return <div style={{
      height: 560,
      padding: 24,
      display: "grid",
      alignContent: "start",
      gap: 16,
      maxWidth: 440
    }}>
        <Heading level={5}>Control centre</Heading>
        <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }}>
          <ToggleTile label="Dark mode" icon={<MoonIcon />} active={state.dark} onClick={() => toggle("dark")} />
          <ToggleTile label="Performance" icon={<BoltIcon />} active={state.performance} onClick={() => toggle("performance")} />
          <ToggleTile label="Protection" icon={<ShieldIcon />} description="Always on" active={state.vpn} onClick={() => toggle("vpn")} />
          <ToggleTile label="Focus" icon={<SearchIcon />} onClick={() => toggle("focus")} />
        </div>
        <GroupContainer>
          <GroupRow title="Brightness">
            <div style={{
            width: 170
          }}>
              <RumahlRange label="Brightness" defaultValue={70} />
            </div>
          </GroupRow>
          <GroupRow title="Volume">
            <div style={{
            width: 170
          }}>
              <RumahlRange label="Volume" defaultValue={40} />
            </div>
          </GroupRow>
        </GroupContainer>
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Default,v as __namedExportsOrder,g as default};