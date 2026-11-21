import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{St as n,n as r,s as i}from"./iframe-ey0lnv34.js";import{n as a,t as o}from"./_argtypes-9JdYHY1M.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),s=t(),c={title:`Components/Notice`,component:i,args:{title:`Information`,children:`A new version is available.`,tone:`info`},argTypes:{...a,tone:{control:`inline-radio`,options:[`info`,`warning`,`danger`]},color:{control:`color`},backgroundColor:{control:`color`}},parameters:{layout:`centered`,docs:{description:{component:`An inline, full-width message: info, warning or danger, with an optional action.

## Rules
- Inline for **contextual** messages; a Toast for transient events.
- Lead with the consequence; keep the action beside the text.
- Don't use \`danger\` for non-critical information.`}}}},l={},u={args:{tone:`danger`,title:`Action needed`,action:(0,s.jsx)(n,{size:`sm`,children:`Fix now`})}},d={render:()=>(0,s.jsxs)(`div`,{style:{display:`grid`,gap:12,width:460},children:[(0,s.jsx)(i,{title:`Information`,children:`A new version is available.`}),(0,s.jsx)(i,{title:`Warning`,tone:`warning`,children:`Storage is running low.`}),(0,s.jsx)(i,{title:`Action needed`,tone:`danger`,action:(0,s.jsx)(n,{size:`sm`,children:`Fix now`}),children:`The backup could not be completed.`})]})},f={render:()=>(0,s.jsx)(`div`,{style:{display:`grid`,gap:12,width:460},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,s.jsxs)(i,{size:e,title:`Size ${e}`,children:[`Callout at size `,e,`.`]},e))})},p=[`Default`,`WithAction`,`Tones`,`Sizes`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "danger",
    title: "Action needed",
    action: <Button size="sm">Fix now</Button>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    width: 460
  }}>
      <RumahlNotice title="Information">A new version is available.</RumahlNotice>
      <RumahlNotice title="Warning" tone="warning">Storage is running low.</RumahlNotice>
      <RumahlNotice title="Action needed" tone="danger" action={<Button size="sm">Fix now</Button>}>
        The backup could not be completed.
      </RumahlNotice>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    width: 460
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlNotice key={size} size={size} title={\`Size \${size}\`}>
          Callout at size {size}.
        </RumahlNotice>)}
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Default,f as Sizes,d as Tones,u as WithAction,p as __namedExportsOrder,c as default};