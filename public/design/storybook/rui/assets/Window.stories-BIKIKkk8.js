import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,xn as r}from"./iframe-ey0lnv34.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`Components/Window`,component:r,args:{title:`System settings`,subtitle:`Personal · Default`,focused:!0,variant:`standard`,children:null},argTypes:{focused:{control:`boolean`},maximized:{control:`boolean`},frameless:{control:`boolean`},flush:{control:`boolean`}},parameters:{layout:`centered`,windowSurface:!1,docs:{description:{component:"The native OS window frame: a 54px titlebar (title + subtitle on one line), the\nwired minimize / maximize / close controls, and a content area on the window\nglass. The caller owns dragging, resizing and stacking.\n\n- `focused`, `maximized`, `frameless`, `flush` (no content padding).\n- `titlebar` — a custom topbar renderer: rebuild the titlebar like Windows or\n  macOS and place the wired `controls` wherever you want.\n\n## Rules\n- **Don't nest a window in a window** — the content is the app.\n- Use `frameless` + `titlebar` for a fully bespoke shell.\n- Wire `onClose` / `onMinimize` / `onMaximize` so the controls work."}}}},o={render:e=>(0,i.jsx)(`div`,{style:{width:760},children:(0,i.jsx)(r,{...e,onClose:()=>{},onMinimize:()=>{},onMaximize:()=>{},children:(0,i.jsx)(`div`,{style:{padding:20,minHeight:300},children:`Window content lives here.`})})})},s={render:e=>(0,i.jsx)(`div`,{style:{width:760},children:(0,i.jsx)(r,{...e,focused:!1,onClose:()=>{},onMinimize:()=>{},onMaximize:()=>{},children:(0,i.jsx)(`div`,{style:{padding:20,minHeight:300},children:`An unfocused window.`})})})},c={render:e=>(0,i.jsx)(`div`,{style:{width:760},children:(0,i.jsx)(r,{...e,frameless:!0,children:(0,i.jsx)(`div`,{style:{padding:20,minHeight:300},children:`Frameless (hosted app).`})})})},l={name:`Custom topbar`,render:e=>(0,i.jsx)(`div`,{style:{width:760},children:(0,i.jsx)(r,{...e,onClose:()=>{},onMinimize:()=>{},onMaximize:()=>{},titlebar:({controls:e})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`strong`,{style:{fontSize:12,fontWeight:700},children:`Files`}),(0,i.jsx)(`nav`,{style:{display:`flex`,gap:2,marginLeft:6},children:[`File`,`Edit`,`View`,`Go`].map(e=>(0,i.jsx)(`button`,{type:`button`,style:{border:0,background:`transparent`,color:`inherit`,font:`inherit`,fontSize:12,padding:`5px 8px`,borderRadius:6,cursor:`pointer`},children:e},e))}),(0,i.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:6},children:[(0,i.jsx)(`span`,{style:{fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:`Search`}),e]})]}),children:(0,i.jsx)(`div`,{style:{padding:20,minHeight:300},children:`The app owns the whole topbar and embeds the window controls in it.`})})})},u=[`Default`,`Unfocused`,`Frameless`,`CustomTopbar`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 760
  }}>
      <Window {...args} onClose={() => {}} onMinimize={() => {}} onMaximize={() => {}}>
        <div style={{
        padding: 20,
        minHeight: 300
      }}>Window content lives here.</div>
      </Window>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 760
  }}>
      <Window {...args} focused={false} onClose={() => {}} onMinimize={() => {}} onMaximize={() => {}}>
        <div style={{
        padding: 20,
        minHeight: 300
      }}>An unfocused window.</div>
      </Window>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 760
  }}>
      <Window {...args} frameless>
        <div style={{
        padding: 20,
        minHeight: 300
      }}>Frameless (hosted app).</div>
      </Window>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Custom topbar",
  render: args => <div style={{
    width: 760
  }}>
      <Window {...args} onClose={() => {}} onMinimize={() => {}} onMaximize={() => {}} titlebar={({
      controls
    }) => <>
            <strong style={{
        fontSize: 12,
        fontWeight: 700
      }}>Files</strong>
            <nav style={{
        display: "flex",
        gap: 2,
        marginLeft: 6
      }}>
              {["File", "Edit", "View", "Go"].map(label => <button key={label} type="button" style={{
          border: 0,
          background: "transparent",
          color: "inherit",
          font: "inherit",
          fontSize: 12,
          padding: "5px 8px",
          borderRadius: 6,
          cursor: "pointer"
        }}>
                  {label}
                </button>)}
            </nav>
            <div style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 6
      }}>
              <span style={{
          fontSize: 11,
          color: "var(--rumahl-ui-color-text-muted)"
        }}>Search</span>
              {controls}
            </div>
          </>}>
        <div style={{
        padding: 20,
        minHeight: 300
      }}>
          The app owns the whole topbar and embeds the window controls in it.
        </div>
      </Window>
    </div>
}`,...l.parameters?.docs?.source},description:{story:`The app rebuilds the topbar itself (like a custom title bar on Windows or
macOS) and places the wired window controls where it wants them.`,...l.parameters?.docs?.description}}}})))()}d();export{l as CustomTopbar,o as Default,c as Frameless,s as Unfocused,u as __namedExportsOrder,a as default};