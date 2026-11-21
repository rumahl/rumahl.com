import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ct as r,Gn as i,Jn as a,St as o,Xn as s,n as c}from"./iframe-ey0lnv34.js";import{n as l,t as u}from"./_argtypes-9JdYHY1M.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{c(),s(),u(),d=t(),f=n(),p={title:`Components/Button`,component:o,args:{children:`Button`,variant:`secondary`,size:`md`,glass:!0},parameters:{docs:{description:{component:"The primary action control. A row of actions where **one** action is committed.\n\n- **secondary** — the everyday action (default, glass).\n- **primary** — accent-tinted; use **one per view / region**.\n- **ghost** — no fill; low emphasis (toolbars, inline).\n- **danger** — destructive; never the default action.\n\n## States & props\n- `floating` — sits over a picture or another surface (its own island). Never\n  nest a floating button in a recessed surface.\n- `glass={false}` — flat fill; `active` — pressed/toggled; `loading` / `success`\n  — in-place feedback that keeps the width.\n- `size` xs–xl, `leftIcon`/`rightIcon`, `color` / `backgroundColor`,\n  `leftFlat`/`rightFlat` (join adjacent buttons), `insetFocus`.\n\n## Rules\n- **Do** keep labels short and verb-first (\"Save changes\").\n- **Do** give icon-only buttons an accessible name (`aria-label`).\n- **Don't** use `danger` for non-destructive actions.\n- **Don't** put more than one `primary` in a group.\n- Native DOM props (`onClick`, `type`, `aria-*`…) are forwarded."}}},argTypes:{...l,variant:{control:`inline-radio`,options:[`primary`,`secondary`,`ghost`,`danger`]},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},floating:{control:`boolean`},glass:{control:`boolean`},disabled:{control:`boolean`},loading:{control:`boolean`},success:{control:`boolean`},active:{control:`boolean`},insetFocus:{control:`boolean`},leftFlat:{control:`boolean`},rightFlat:{control:`boolean`},noSidePadding:{control:`boolean`},marginLeft:{control:`boolean`},marginRight:{control:`boolean`},preventClickAnimation:{control:`boolean`},blurOnMouseUp:{control:`boolean`},children:{control:`text`},successText:{control:`text`},color:{control:`color`},backgroundColor:{control:`color`}}},m={},h={args:{variant:`primary`}},g={args:{variant:`ghost`}},_={args:{variant:`danger`}},v={args:{size:`sm`}},y={args:{disabled:!0}},b={args:{title:`Helpful hint`}},x={render:e=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,d.createElement)(o,{...e,key:t,size:t},`Size `,t))})},S={args:{variant:`primary`,floating:!0},parameters:{windowSurface:!1},render:e=>(0,f.jsx)(o,{...e})},C={args:{glass:!1,variant:`primary`}},w=[`#0b84ff`,`#22c7a9`,`#f45b85`,`#ff9f0a`,`#8b5cf6`],T={render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:w.map(e=>(0,f.jsx)(o,{variant:`primary`,color:e,children:e},e))})},E={render:()=>(0,f.jsx)(`div`,{style:{display:`grid`,gap:12},children:[`secondary`,`ghost`,`primary`,`danger`].map(e=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`center`},children:[(0,f.jsx)(`span`,{style:{width:72,fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:e}),w.map(t=>(0,f.jsx)(o,{variant:e,color:t,children:`Colored`},t))]},e))})},D={render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:w.map(e=>(0,f.jsx)(o,{backgroundColor:e,children:e},e))})},O={args:{loading:!0,variant:`primary`}},k={args:{success:!0,successText:`Saved`,variant:`primary`}},A={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,f.jsx)(o,{variant:`primary`,leftIcon:(0,f.jsx)(a,{}),children:`Create`}),(0,f.jsx)(o,{rightIcon:(0,f.jsx)(i,{}),children:`Settings`}),(0,f.jsx)(o,{variant:`ghost`,leftIcon:(0,f.jsx)(a,{}),rightIcon:(0,f.jsx)(i,{}),children:`Both`})]})},j={args:{active:!0}},M={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`},children:[(0,f.jsx)(o,{variant:`secondary`,rightFlat:!0,marginRight:!0,children:`Back`}),(0,f.jsx)(o,{variant:`secondary`,leftFlat:!0,children:`Forward`})]})},N={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`,alignItems:`center`},children:[(0,f.jsx)(o,{variant:`secondary`,children:`Secondary`}),(0,f.jsx)(o,{variant:`primary`,children:`Primary`}),(0,f.jsx)(o,{variant:`danger`,children:`Danger`}),(0,f.jsx)(o,{variant:`ghost`,children:`Ghost`})]})},P={parameters:{windowSurface:!1},render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`,alignItems:`center`},children:[(0,f.jsx)(o,{variant:`secondary`,floating:!0,children:`Secondary`}),(0,f.jsx)(o,{variant:`primary`,floating:!0,children:`Primary`}),(0,f.jsx)(o,{variant:`danger`,floating:!0,children:`Danger`}),(0,f.jsx)(o,{variant:`ghost`,floating:!0,children:`Ghost`})]})},F={render:()=>(0,f.jsx)(r,{href:`#example`,variant:`primary`,children:`Open link`})},I={render:()=>(0,f.jsxs)(`div`,{style:{display:`grid`,gap:20,maxWidth:560},children:[(0,f.jsx)(`p`,{style:{margin:0,fontSize:13,color:`var(--rumahl-ui-color-text-muted)`},children:`Compare Glass, Floating and Solid using the material toolbar. Hover or focus each action to inspect its state.`}),[`primary`,`danger`].map(e=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`,alignItems:`center`},children:[(0,f.jsx)(o,{variant:e,children:e===`primary`?`Save changes`:`Delete workspace`}),(0,f.jsx)(o,{variant:e,size:`sm`,children:`Small`}),(0,f.jsx)(o,{variant:e,disabled:!0,children:`Disabled`}),(0,f.jsx)(r,{variant:e,href:`#example`,children:`Link`})]},e))]})},L={render:(e,t)=>(0,f.jsxs)(`div`,{className:`shell`,"data-material":`glass`,"data-scheme":t.globals.scheme===`dark`?`dark`:`light`,style:{display:`grid`,gap:20,maxWidth:600},children:[(0,f.jsx)(`p`,{style:{margin:0,fontSize:13},children:`Switch Light / Dark in the toolbar to compare the original colour with the tinted glass surface.`}),[`#00c98d`,`#0088ff`,`#e832ba`,`#f27b16`].map(e=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:14,alignItems:`center`,flexWrap:`wrap`,"--rumahl-ui-color-accent":e},children:[(0,f.jsx)(`span`,{"aria-label":`Original pigment ${e}`,style:{width:28,height:28,borderRadius:6,background:e}}),(0,f.jsx)(o,{children:`Empty glass`}),(0,f.jsx)(o,{variant:`primary`,style:{"--glass-inner-glow":`0%`,"--glass-outer-glow":`0%`},children:`Without glow`}),(0,f.jsx)(o,{variant:`primary`,children:`Soft glow`}),(0,f.jsx)(o,{variant:`primary`,disabled:!0,children:`Disabled`})]},e))]})},R=[`Secondary`,`Primary`,`Ghost`,`Danger`,`Small`,`Disabled`,`WithTooltip`,`Sizes`,`Floating`,`Flat`,`Colors`,`ColoredVariants`,`BackgroundColor`,`Loading`,`Success`,`WithIcons`,`Active`,`Joined`,`AllVariants`,`OverImage`,`AsLink`,`ColoredStates`,`GlassSaturation`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Helpful hint"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Button {...args} key={size} size={size}>
          Size {size}
        </Button>)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    floating: true
  },
  parameters: {
    windowSurface: false
  },
  render: args => <Button {...args} />
}`,...S.parameters?.docs?.source},description:{story:`Floats over the desktop picture (the preview background image).`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    glass: false,
    variant: "primary"
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }}>
      {PALETTE.map(color => <Button key={color} variant="primary" color={color}>
          {color}
        </Button>)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12
  }}>
      {(["secondary", "ghost", "primary", "danger"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      gap: 10,
      alignItems: "center"
    }}>
          <span style={{
        width: 72,
        fontSize: 11,
        color: "var(--rumahl-ui-color-text-muted)"
      }}>{variant}</span>
          {PALETTE.map(color => <Button key={color} variant={variant} color={color}>
              Colored
            </Button>)}
        </div>)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }}>
      {PALETTE.map(color => <Button key={color} backgroundColor={color}>
          {color}
        </Button>)}
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    variant: "primary"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    success: true,
    successText: "Saved",
    variant: "primary"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }}>
      <Button variant="primary" leftIcon={<SparkIcon />}>Create</Button>
      <Button rightIcon={<SettingsIcon />}>Settings</Button>
      <Button variant="ghost" leftIcon={<SparkIcon />} rightIcon={<SettingsIcon />}>Both</Button>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex"
  }}>
      <Button variant="secondary" rightFlat marginRight>Back</Button>
      <Button variant="secondary" leftFlat>Forward</Button>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center"
  }}>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    windowSurface: false
  },
  render: () => <div style={{
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center"
  }}>
      <Button variant="secondary" floating>Secondary</Button>
      <Button variant="primary" floating>Primary</Button>
      <Button variant="danger" floating>Danger</Button>
      <Button variant="ghost" floating>Ghost</Button>
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Only floating controls belong over the desktop picture.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonLink href="#example" variant="primary">Open link</ButtonLink>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 20,
    maxWidth: 560
  }}>
      <p style={{
      margin: 0,
      fontSize: 13,
      color: "var(--rumahl-ui-color-text-muted)"
    }}>
        Compare Glass, Floating and Solid using the material toolbar. Hover or focus each action to inspect its state.
      </p>
      {(["primary", "danger"] as const).map(variant => <div key={variant} style={{
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center"
    }}>
          <Button variant={variant}>{variant === "primary" ? "Save changes" : "Delete workspace"}</Button>
          <Button variant={variant} size="sm">Small</Button>
          <Button variant={variant} disabled>Disabled</Button>
          <ButtonLink variant={variant} href="#example">Link</ButtonLink>
        </div>)}
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Switch the material toolbar to compare the same states without changing content.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: (_args, context) => <div className="shell" data-material="glass" data-scheme={context.globals.scheme === "dark" ? "dark" : "light"} style={{
    display: "grid",
    gap: 20,
    maxWidth: 600
  }}>
      <p style={{
      margin: 0,
      fontSize: 13
    }}>Switch Light / Dark in the toolbar to compare the original colour with the tinted glass surface.</p>
      {["#00c98d", "#0088ff", "#e832ba", "#f27b16"].map(color => <div key={color} style={{
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap",
      "--rumahl-ui-color-accent": color
    } as CSSProperties}>
          <span aria-label={\`Original pigment \${color}\`} style={{
        width: 28,
        height: 28,
        borderRadius: 6,
        background: color
      }} />
          <Button>Empty glass</Button>
          <Button variant="primary" style={{
        "--glass-inner-glow": "0%",
        "--glass-outer-glow": "0%"
      } as CSSProperties}>Without glow</Button>
          <Button variant="primary">Soft glow</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>)}
    </div>
}`,...L.parameters?.docs?.source}}}})))()}z();export{j as Active,N as AllVariants,F as AsLink,D as BackgroundColor,I as ColoredStates,E as ColoredVariants,T as Colors,_ as Danger,y as Disabled,C as Flat,S as Floating,g as Ghost,L as GlassSaturation,M as Joined,O as Loading,P as OverImage,h as Primary,m as Secondary,x as Sizes,v as Small,k as Success,A as WithIcons,b as WithTooltip,R as __namedExportsOrder,p as default};