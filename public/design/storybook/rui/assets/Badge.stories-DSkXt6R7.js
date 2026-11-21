import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,o as r}from"./iframe-ey0lnv34.js";import{n as i,t as a}from"./_argtypes-9JdYHY1M.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),o=t(),s={title:`Components/Badge`,component:r,args:{children:`Success`,tone:`success`},argTypes:{...i,tone:{control:`inline-radio`,options:[`neutral`,`success`,`warning`,`danger`]},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},color:{control:`color`},backgroundColor:{control:`color`}},parameters:{layout:`centered`,docs:{description:{component:`A small, **read-only** status pill (a word, a tone, an optional dot).

## Rules
- Badges show **status** — they are not buttons (use a Chip to filter/select).
- Keep to one or two words.
- Tones are semantic (neutral / success / warning / danger) — never decorative.`}}}},c={},l={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:8},children:[`neutral`,`success`,`warning`,`danger`].map(e=>(0,o.jsx)(r,{tone:e,children:e},e))})},u={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`,flexWrap:`wrap`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,o.jsxs)(r,{size:e,tone:`success`,children:[`Size `,e]},e))})},d=[`Default`,`Tones`,`Sizes`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8
  }}>
      {(["neutral", "success", "warning", "danger"] as const).map(tone => <RumahlBadge key={tone} tone={tone}>
          {tone}
        </RumahlBadge>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <RumahlBadge key={size} size={size} tone="success">
          Size {size}
        </RumahlBadge>)}
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Default,u as Sizes,l as Tones,d as __namedExportsOrder,s as default};