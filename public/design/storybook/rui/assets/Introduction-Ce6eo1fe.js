import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{a as i,o as a}from"./blocks-C-Qh5HWO.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Design System/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`rumahl-ui-design-system`,children:`rumahl UI Design System`}),`
`,(0,c.jsxs)(t.p,{children:[`rumahl UI is the design system behind rumahl OS and its apps. It is `,(0,c.jsx)(t.strong,{children:`OS-near`}),`:
the components and surfaces are exactly the ones the desktop shell uses, extracted
into a reusable, themeable library. This Storybook is the living reference — every
rule below is rendered by the same code that ships in the OS.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Everything is driven by `,(0,c.jsx)(t.code,{children:`--rumahl-ui-*`}),` design tokens, applied by `,(0,c.jsx)(t.code,{children:`ThemeProvider`}),`.
A palette engine derives a full palette (surfaces, text, accent scale) from a
single `,(0,c.jsx)(t.strong,{children:`accent seed`}),` and a `,(0,c.jsx)(t.strong,{children:`mode`}),` (light/dark), so a custom theme restyles the
whole UI by overriding tokens — no component code changes.`]}),`
`,(0,c.jsx)(t.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Content lives on the work surface.`}),` Material (glass) is reserved for
navigation and controls — never for the content itself. A settings pane is a
plain surface; the sidebar, toolbars and the window frame carry the material.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Floating is an element state.`}),` Anything that sits `,(0,c.jsx)(t.em,{children:`over`}),` a picture or another
surface sets `,(0,c.jsx)(t.code,{children:`floating`}),` — a specular, translucent glass. It is not a separate
"mode"; the same component just becomes floating.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`One floating control is its own island.`}),` A single control floats on its own
round island; a bar or island is used only when several controls sit adjacent.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Floating glass flies.`}),` Floating controls use the same shell material as the
dock / menu bar (`,(0,c.jsx)(t.code,{children:`Glass → Transparenz → Solid`}),`), so they read as part of the OS
rather than a foreign opaque chip.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Apps bring their own window.`}),` A whole app either supplies its own window
surface (`,(0,c.jsx)(t.code,{children:`Window`}),`, `,(0,c.jsx)(t.code,{children:`AppLayout`}),`) or fills the view with the app background.
Component demos sit on the app background; apps that ship a window sit on the
desktop picture.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Focus rings are inset`}),` (`,(0,c.jsx)(t.code,{children:`outline-offset: -2px`}),`) so they never break layout.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-the-docs-are-organised`,children:`How the docs are organised`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Foundations`}),` — colour, typography, shape, spacing, elevation, motion,
materials, accessibility, icons.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Components`}),` — every control, with native DOM props forwarded and documented.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`System`}),` — the OS chrome (window, menu bar, tray, toolbar…).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Layout`}),` — app and mobile templates composed from the components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hooks`}),` — the shared React hooks.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Guides`}),` — getting started, theming, architecture, quality.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Start with `,(0,c.jsx)(t.strong,{children:`Design System / Surfaces`}),` for the material and window rules, then
explore the Foundations and Components.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};