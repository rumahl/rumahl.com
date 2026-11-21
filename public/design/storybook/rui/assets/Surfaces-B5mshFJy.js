import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{a as i,o as a}from"./blocks-C-Qh5HWO.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Design System/Surfaces`}),`
`,(0,c.jsx)(t.h1,{id:`surfaces--materials`,children:`Surfaces & materials`}),`
`,(0,c.jsxs)(t.p,{children:[`The window system the shell renders. The values below are the ones the shipped OS
uses (derived from `,(0,c.jsx)(t.code,{children:`shell/src/styles.css`}),` and `,(0,c.jsx)(t.code,{children:`reference.css`}),`), and the tokens are
mirrored into `,(0,c.jsx)(t.code,{children:`@rumahl/ui`}),` so Storybook and the OS read from one source.`]}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Layer`}),(0,c.jsx)(`th`,{children:`Recipe`}),(0,c.jsx)(`th`,{children:`Notes`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Desktop`})}),(0,c.jsx)(`td`,{children:`wallpaper image`}),(0,c.jsx)(`td`,{children:`the picture behind everything`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Window`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`color-mix(in srgb, surface-strong 82%, transparent)`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`backdrop-filter: blur(45px) saturate(1.65)`}),`, radius 23, hairline `,(0,c.jsx)(`code`,{children:`--stroke`}),`, drop shadow, top sheen`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Sidebar`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`color-mix(in srgb, surface-strong 55%, transparent)`})}),(0,c.jsxs)(`td`,{children:[`the `,(0,c.jsx)(`code`,{children:`--side`}),` surface`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Content`})}),(0,c.jsx)(`td`,{children:`transparent`}),(0,c.jsx)(`td`,{children:`the window glass shows through`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Group`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`--row`}),` + `,(0,c.jsx)(`code`,{children:`--divider`}),` hairline`]}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`rgba(255,255,255,0.047)`}),` dark / `,(0,c.jsx)(`code`,{children:`0.41`}),` light, radius 15`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Floating`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`surface-strong × --material-opacity`}),` + sheen + rim`]}),(0,c.jsx)(`td`,{children:`over pictures and content`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(`strong`,{children:`Solid`})}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`code`,{children:`surface-strong`}),` (opaque)`]}),(0,c.jsx)(`td`,{children:`no blur, no recess`})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`Tokens: `,(0,c.jsx)(t.code,{children:`--rumahl-ui-color-window-background`}),`, `,(0,c.jsx)(t.code,{children:`--rumahl-ui-color-side`}),`,
`,(0,c.jsx)(t.code,{children:`--rumahl-ui-color-row`}),`, `,(0,c.jsx)(t.code,{children:`--rumahl-ui-color-divider`}),`, `,(0,c.jsx)(t.code,{children:`--rumahl-ui-color-surface-strong`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`the-cascade-rule-important`,children:`The cascade rule (important)`}),`
`,(0,c.jsxs)(t.p,{children:[`The shell imports `,(0,c.jsx)(t.code,{children:`reference/reference.css`}),` `,(0,c.jsxs)(t.strong,{children:[`without a `,(0,c.jsx)(t.code,{children:`@layer`})]}),`, while
everything else (`,(0,c.jsx)(t.code,{children:`materials.css`}),`, `,(0,c.jsx)(t.code,{children:`new-design.css`}),`, `,(0,c.jsx)(t.code,{children:`default-theme.css`}),`, …) lives
inside `,(0,c.jsx)(t.code,{children:`@layer(presentation)`}),`. `,(0,c.jsx)(t.strong,{children:`Unlayered rules beat layered ones`}),`, so the
reference chrome wins and the window / sidebar pick up the `,(0,c.jsx)(t.em,{children:`palette-derived`}),`
`,(0,c.jsx)(t.code,{children:`surface-strong`}),` — `,(0,c.jsx)(t.strong,{children:`not`}),` the fixed `,(0,c.jsx)(t.code,{children:`--nd-*`}),` navy from `,(0,c.jsx)(t.code,{children:`new-design.css`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Consequences:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`The window is the theme's strong surface at 82%, so it follows the accent and
the light/dark mode.`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`new-design.css`}),`'s `,(0,c.jsx)(t.code,{children:`--nd-window`}),` / `,(0,c.jsx)(t.code,{children:`--nd-side`}),` never apply to the shipped window;
treat them as reference-only.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`rules`,children:`Rules`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Window glass is never the content.`}),` Content sits on the window glass or on a
group surface — it is transparent by default.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Material is for chrome.`}),` Sidebars, toolbars, the window frame, menus, the
dock and popovers carry the material. Content areas are plain.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`floating`}),` only over a picture or another surface.`]}),` Never recessed; the
specular highlight sits on top of a translucent fill.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Solid is a first-class material.`}),` It removes recess, blur and depth; use it
for the flat desktop look or reduced-transparency preferences.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reduced transparency wins.`}),` `,(0,c.jsx)(t.code,{children:`prefers-reduced-transparency: reduce`}),` turns every
glass surface into an opaque `,(0,c.jsx)(t.code,{children:`surface-strong`}),` surface.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};