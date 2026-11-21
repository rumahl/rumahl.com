import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{J as n,K as r,ct as i,n as a}from"./iframe-ey0lnv34.js";var o,s,c,l;function u(){return(u=e((()=>{a(),o=t(),s={title:`Foundations/Accessibility`,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:'# Accessibility\n\nThe kit follows a few rules so apps inherit good behaviour:\n\n- **Focus**: every interactive control shows a visible focus ring\n  (`outline: 2px solid var(--rumahl-ui-color-accent)`); never remove it.\n- **Contrast**: text uses `--rumahl-ui-color-text-primary`/`-muted` against\n  the surface; accent/on-accent pairs are checked by the colour system.\n- **Reduced motion**: animations are disabled under\n  `prefers-reduced-motion: reduce` and `[data-animations="off"]`.\n- **Forced colors**: switches fall back to native rendering.\n- **Names**: icon-only controls take a `label`; extra context for screen\n  readers uses `HiddenText`; composite targets use `Clickable`.\n\nThe a11y addon runs on every story and fails on violations.'}}}},c={render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16,maxWidth:360},children:[(0,o.jsxs)(i,{children:[`Press `,(0,o.jsx)(`kbd`,{children:`Tab`}),` to move focus — the ring is always visible.`]}),(0,o.jsx)(r,{style:{padding:12,border:`1px solid var(--control-border)`},children:(0,o.jsx)(i,{children:`A composite target, keyboard-activatable`})}),(0,o.jsxs)(i,{children:[`Read more `,(0,o.jsx)(n,{children:`about accessibility`})]})]})},l=[`FocusAndHiddenText`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 16,
    maxWidth: 360
  }}>
      <Text>
        Press <kbd>Tab</kbd> to move focus — the ring is always visible.
      </Text>
      <Clickable style={{
      padding: 12,
      border: "1px solid var(--control-border)"
    }}>
        <Text>A composite target, keyboard-activatable</Text>
      </Clickable>
      <Text>
        Read more <HiddenText>about accessibility</HiddenText>
      </Text>
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as FocusAndHiddenText,l as __namedExportsOrder,s as default};