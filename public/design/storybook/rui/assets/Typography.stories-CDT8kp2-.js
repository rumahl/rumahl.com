import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{lr as n,sr as r}from"./iframe-ey0lnv34.js";function i(){let{tokens:e}=n();return(0,o.jsxs)(`div`,{style:{display:`grid`,gap:28,padding:24,maxWidth:720},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:`typography.display`}),(0,o.jsx)(`div`,{style:{fontFamily:e[`typography.display`],fontSize:48,fontWeight:500,letterSpacing:`-.02em`},children:`Good evening`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:`typography.family`}),(0,o.jsxs)(`div`,{style:{fontFamily:e[`typography.family`]},children:[(0,o.jsx)(`p`,{style:{fontSize:18,margin:`0 0 6px`},children:`The quick brown fox jumps over the lazy dog.`}),(0,o.jsx)(`p`,{style:{fontSize:14,margin:`0 0 6px`},children:`The quick brown fox jumps over the lazy dog.`}),(0,o.jsx)(`p`,{style:{fontSize:12,margin:0},children:`The quick brown fox jumps over the lazy dog.`})]})]}),(0,o.jsx)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`6px 16px`,fontSize:12},children:[`typography.family`,`typography.display`,`typography.scale`].map(t=>(0,o.jsxs)(`div`,{style:{display:`contents`},children:[(0,o.jsx)(`dt`,{style:{color:`var(--rumahl-ui-color-text-muted)`},children:t}),(0,o.jsx)(`dd`,{style:{margin:0,overflowWrap:`anywhere`},children:e[t]})]},t))})]})}function a(){let{tokens:e}=n(),t=e[`typography.family`]??`system-ui, sans-serif`;return(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16,padding:24,maxWidth:760},children:[(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12,fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:[(0,o.jsx)(`span`,{style:{width:48},children:`token`}),(0,o.jsx)(`span`,{style:{width:40},children:`px`}),(0,o.jsx)(`span`,{children:`sample`})]}),l.map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:12},children:[(0,o.jsx)(`code`,{style:{width:48,fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:e.name}),(0,o.jsx)(`span`,{style:{width:40,fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:e.px}),(0,o.jsx)(`span`,{style:{fontFamily:t,fontSize:e.px,lineHeight:1.2},children:`The quick brown fox jumps over the lazy dog.`})]},e.name))]})}var o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=t(),s={title:`Foundations/Typography`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"# Typography\n\nTypography roles. `typography.family` is the UI face and `typography.display`\nthe statement face; both are font-stack tokens a theme can override. Sizes are\ntokenised and shared across the shell; the UI uses tight tracking\n(−0.01…−0.03em) as sizes grow.\n\n## Rules\n\n- **Use the text roles** (`Text`, `Heading`) and the type scale — avoid ad-hoc\n  `font-size`.\n- **`display` is for statement headings only**; body and controls use\n  `family`.\n- **Muted, not lighter.** Secondary text uses\n  `--rumahl-ui-color-text-muted`, not a reduced-opacity primary.\n- **Keep line length in check** (~65–75ch) for reading content."}}}},c={render:()=>(0,o.jsx)(i,{}),parameters:{docs:{source:{language:`tsx`,code:`import { Heading, Text } from "@rumahl/ui/components";

<Heading level={1}>Page title</Heading>
<Text>Body copy uses the UI face.</Text>
<Text tone="muted">Secondary text uses the muted role.</Text>`}}}},l=[{name:`xl`,px:30},{name:`lg`,px:24},{name:`md`,px:20},{name:`sm`,px:16},{name:`base`,px:14},{name:`xs`,px:12},{name:`2xs`,px:11}],u={name:`Scale`,render:()=>(0,o.jsx)(a,{}),parameters:{docs:{source:{code:`/* Typography tokens */
--rumahl-ui-typography-family: ...;   /* UI face */
--rumahl-ui-typography-display: ...;  /* statement face */`}}}},d=[`Specimens`,`Scale_`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Specimen />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { Heading, Text } from "@rumahl/ui/components";

<Heading level={1}>Page title</Heading>
<Text>Body copy uses the UI face.</Text>
<Text tone="muted">Secondary text uses the muted role.</Text>\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Scale",
  render: () => <Scale />,
  parameters: {
    docs: {
      source: {
        code: \`/* Typography tokens */
--rumahl-ui-typography-family: ...;   /* UI face */
--rumahl-ui-typography-display: ...;  /* statement face */\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Scale_,c as Specimens,d as __namedExportsOrder,s as default};