import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{An as r,Gn as i,Ln as a,On as o,Wn as s,Xn as c,jn as l,kn as u,n as d,zn as f}from"./iframe-ey0lnv34.js";var p,m,h,g,_;function v(){return(v=e((()=>{p=t(),d(),c(),m=n(),h={title:`Layout/App/Command center`,parameters:{layout:`fullscreen`,docs:{description:{component:`# Command-center app layout

A template/inspiration for an overlay: a dimmed backdrop with the rumahl OS
\`CommandPalette\` centred on top (search + results). Layer it over any other
layout for a spotlight / ⌘K surface.`}}}},g={render:()=>{let[e,t]=(0,p.useState)(`cal`);return(0,m.jsxs)(`div`,{style:{position:`relative`,height:500,overflow:`hidden`,background:`radial-gradient(ellipse at 70% 10%, #79b6ae66, transparent 60%), linear-gradient(135deg, #2b6cb0, #1f6f5c)`},children:[(0,m.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`#0b0d1240`,backdropFilter:`blur(2px)`}}),(0,m.jsx)(`div`,{style:{position:`relative`,display:`flex`,justifyContent:`center`,paddingTop:90},children:(0,m.jsxs)(o,{value:e,onChange:t,label:`Command palette`,placeholder:`Search commands, apps and files`,hint:`Esc`,style:{width:620,maxWidth:`92%`},children:[(0,m.jsx)(r,{title:`Commands`,children:(0,m.jsxs)(u,{icon:(0,m.jsx)(s,{}),shortcut:`↵`,selected:!0,children:[`Search for “`,e,`”`]})}),(0,m.jsx)(l,{}),(0,m.jsxs)(r,{title:`Apps`,children:[(0,m.jsx)(u,{icon:(0,m.jsx)(f,{}),shortcut:`⌘1`,children:`Calendar`}),(0,m.jsx)(u,{icon:(0,m.jsx)(a,{}),shortcut:`⌘2`,children:`Calculator`}),(0,m.jsx)(u,{icon:(0,m.jsx)(i,{}),shortcut:`⌘,`,children:`Open settings`})]})]})})]})}},_=[`Default`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState("cal");
    return <div style={{
      position: "relative",
      height: 500,
      overflow: "hidden",
      background: "radial-gradient(ellipse at 70% 10%, #79b6ae66, transparent 60%), linear-gradient(135deg, #2b6cb0, #1f6f5c)"
    }}>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "#0b0d1240",
        backdropFilter: "blur(2px)"
      }} />
        <div style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        paddingTop: 90
      }}>
          <CommandPalette value={query} onChange={setQuery} label="Command palette" placeholder="Search commands, apps and files" hint="Esc" style={{
          width: 620,
          maxWidth: "92%"
        }}>
            <CommandPaletteSection title="Commands">
              <CommandPaletteItem icon={<SearchIcon />} shortcut="↵" selected>
                Search for “{query}”
              </CommandPaletteItem>
            </CommandPaletteSection>
            <CommandPaletteSeparator />
            <CommandPaletteSection title="Apps">
              <CommandPaletteItem icon={<GridIcon />} shortcut="⌘1">
                Calendar
              </CommandPaletteItem>
              <CommandPaletteItem icon={<DocumentIcon />} shortcut="⌘2">
                Calculator
              </CommandPaletteItem>
              <CommandPaletteItem icon={<SettingsIcon />} shortcut="⌘,">
                Open settings
              </CommandPaletteItem>
            </CommandPaletteSection>
          </CommandPalette>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Default,_ as __namedExportsOrder,h as default};