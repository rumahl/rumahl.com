import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t}from"./tint-DPSZuAKu.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{lr as r,sr as i}from"./iframe-ey0lnv34.js";function a(){let{tokens:e}=r(),t=Object.entries(e).filter(([e])=>e.startsWith(`color.`));return(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:14,padding:24},children:t.map(([e,t])=>(0,s.jsxs)(`div`,{style:{border:`1px solid var(--rumahl-ui-color-outline)`,borderRadius:12,overflow:`hidden`},children:[(0,s.jsx)(`div`,{style:{height:64,background:t}}),(0,s.jsxs)(`div`,{style:{padding:`8px 10px`},children:[(0,s.jsx)(`strong`,{style:{fontSize:12},children:e}),(0,s.jsx)(`div`,{style:{fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:t})]})]},e))})}function o(){let{tokens:e}=r(),n=e[`color.accent`]??`#28694c`,i=t(n).primary.light;return(0,s.jsx)(`div`,{style:{display:`grid`,gap:8,padding:24},children:i.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,s.jsx)(`span`,{style:{width:48,fontSize:11,color:`var(--rumahl-ui-color-text-muted)`},children:e.shade}),(0,s.jsx)(`span`,{style:{width:140,height:22,borderRadius:6,background:e.hex}}),(0,s.jsx)(`code`,{style:{fontSize:11},children:e.hex})]},e.shade))})}var s,c,l,u,d,f;function p(){return(p=e((()=>{i(),s=n(),c={title:`Foundations/Color`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Colour tokens projected onto the document root as `--rumahl-ui-color-*`. Use the Appearance/Material toolbars to see how they resolve."}}}},l=`import { useTheme } from "@rumahl/ui";

export function Swatches() {
  const { tokens } = useTheme();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
      {Object.entries(tokens)
        .filter(([key]) => key.startsWith("color."))
        .map(([key, value]) => (
          <div key={key} style={{ border: "1px solid var(--rumahl-ui-color-outline)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ height: 64, background: value }} />
            <div style={{ padding: "8px 10px" }}>
              <strong style={{ fontSize: 12 }}>{key}</strong>
              <div style={{ fontSize: 11, color: "var(--rumahl-ui-color-text-muted)" }}>{value}</div>
            </div>
          </div>
        ))}
    </div>
  );
}`,u={render:()=>(0,s.jsx)(a,{}),parameters:{docs:{source:{language:`tsx`,code:l}}}},d={render:()=>(0,s.jsx)(o,{}),parameters:{docs:{source:{language:`tsx`,code:`import { generateColorShades } from "@rumahl/ui";

// The accent scale is derived from the seed accent colour.
const shades = generateColorShades("#28694c").primary.light;
// -> [{ level: 50, hex: "…" }, …]`}}}},f=[`Roles`,`AccentScale`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Swatches />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: SWATCH_CODE
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Shades />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: \`import { generateColorShades } from "@rumahl/ui";

// The accent scale is derived from the seed accent colour.
const shades = generateColorShades("#28694c").primary.light;
// -> [{ level: 50, hex: "…" }, …]\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as AccentScale,u as Roles,f as __namedExportsOrder,c as default};