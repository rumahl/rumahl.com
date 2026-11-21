import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{a as i,o as a}from"./blocks-C-Qh5HWO.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Design System/Theme reference`}),`
`,(0,c.jsx)(t.h1,{id:`theme-reference`,children:`Theme reference`}),`
`,(0,c.jsxs)(t.p,{children:[`A theme is `,(0,c.jsx)(t.strong,{children:`data`}),`, not code. It can change anything — from a single accent to a
full restyle — and nothing is locked down. Themes are installed at runtime (a
JSON file via the OS installer) and applied by the shell; a future safety engine
will only warn when a theme would make the OS unusable.`]}),`
`,(0,c.jsx)(t.h2,{id:`layers`,children:`Layers`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tokens`}),` — small changes. `,(0,c.jsx)(t.code,{children:`color.*`}),`, `,(0,c.jsx)(t.code,{children:`shape.*`}),`, `,(0,c.jsx)(t.code,{children:`material.*`}),`, `,(0,c.jsx)(t.code,{children:`motion.*`}),`,
`,(0,c.jsx)(t.code,{children:`typography.*`}),`, `,(0,c.jsx)(t.code,{children:`layout.*`}),`, `,(0,c.jsx)(t.code,{children:`texture.wallpaper`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Recipes`}),` — component families, via CSS variables (below). One value
restyles a whole family.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Plain CSS`}),` — full overrides. `,(0,c.jsx)(t.code,{children:`theme.css`}),` is applied as a stylesheet, so any
documented part can be restyled. No restrictions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Variants`}),` — structure: `,(0,c.jsx)(t.code,{children:`shellLayout`}),` (`,(0,c.jsx)(t.code,{children:`dock`}),` / `,(0,c.jsx)(t.code,{children:`taskbar`}),`),
`,(0,c.jsx)(t.code,{children:`launcherLayout`}),` (`,(0,c.jsx)(t.code,{children:`springboard`}),` / `,(0,c.jsx)(t.code,{children:`drawer`}),`), `,(0,c.jsx)(t.code,{children:`windowChrome`}),` (`,(0,c.jsx)(t.code,{children:`standard`}),` /
`,(0,c.jsx)(t.code,{children:`compact`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Slots`}),` — safe markup for `,(0,c.jsx)(t.code,{children:`dock`}),`, `,(0,c.jsx)(t.code,{children:`menubar`}),`, `,(0,c.jsx)(t.code,{children:`window`}),`, `,(0,c.jsx)(t.code,{children:`desktop`}),`,
`,(0,c.jsx)(t.code,{children:`launcher`}),` (validated data, no arbitrary JS).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`base-native-or-clean`,children:`Base: native or clean`}),`
`,(0,c.jsx)(t.p,{children:`A theme declares which base it builds on:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base: "rumahl"`}),` (default) — build on the native OS look; override only what you need.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base: "clean"`}),` — the recipe variables are reset to transparent/none, so the
native component chrome is stripped. Structure, sizing, focus and semantics
stay intact, so you paint everything yourself — a terminal, a dashboard, any
presentation.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nothing is locked down: any recipe variable or any CSS rule can be overridden.
Structural replacement (e.g. a dashboard instead of the desktop, or a TUI shell)
is done with `,(0,c.jsx)(t.strong,{children:`variants`}),` and `,(0,c.jsx)(t.strong,{children:`slots`}),` (`,(0,c.jsx)(t.code,{children:`desktop`}),`, `,(0,c.jsx)(t.code,{children:`launcher`}),`, `,(0,c.jsx)(t.code,{children:`dock`}),`, `,(0,c.jsx)(t.code,{children:`menubar`}),`,
`,(0,c.jsx)(t.code,{children:`window`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Sample themes in `,(0,c.jsx)(t.code,{children:`packages/shell/themes/`}),` show the range: `,(0,c.jsx)(t.code,{children:`reference.json`}),`
(maximal restyle), `,(0,c.jsx)(t.code,{children:`terminal.json`}),` (`,(0,c.jsx)(t.code,{children:`clean`}),` base, TUI in the browser),
`,(0,c.jsx)(t.code,{children:`dashboard.json`}),` (replaces the desktop with a dashboard).`]}),`
`,(0,c.jsx)(t.h2,{id:`slots-replace-a-region`,children:`Slots: replace a region`}),`
`,(0,c.jsxs)(t.p,{children:[`A theme can replace a shell region with `,(0,c.jsx)(t.strong,{children:`validated markup`}),` (safe data, no
arbitrary JS): `,(0,c.jsx)(t.code,{children:`menubar`}),`, `,(0,c.jsx)(t.code,{children:`dock`}),`, `,(0,c.jsx)(t.code,{children:`desktop`}),`, `,(0,c.jsx)(t.code,{children:`launcher`}),`, `,(0,c.jsx)(t.code,{children:`window`}),`. The shell
provides the data (`,(0,c.jsx)(t.code,{children:`apps`}),`, `,(0,c.jsx)(t.code,{children:`windows`}),`, `,(0,c.jsx)(t.code,{children:`time`}),`, `,(0,c.jsx)(t.code,{children:`user`}),`), actions (`,(0,c.jsx)(t.code,{children:`open-app`}),`,
`,(0,c.jsx)(t.code,{children:`focus-window`}),`, `,(0,c.jsx)(t.code,{children:`toggle-command`}),`, `,(0,c.jsx)(t.code,{children:`open-settings`}),`, `,(0,c.jsx)(t.code,{children:`set-mode`}),`, `,(0,c.jsx)(t.code,{children:`navigate`}),`, …) and
components (`,(0,c.jsx)(t.code,{children:`app-icon`}),`, `,(0,c.jsx)(t.code,{children:`clock`}),`, `,(0,c.jsx)(t.code,{children:`icon`}),`, `,(0,c.jsx)(t.code,{children:`brand`}),`, `,(0,c.jsx)(t.code,{children:`command-button`}),`, …).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`dashboard.json`}),` demonstrates it: instead of the desktop it renders a dashboard
(app grid, running windows, quick actions) via the `,(0,c.jsx)(t.code,{children:`desktop`}),` slot — no shell code
changes. Slots support `,(0,c.jsx)(t.code,{children:`repeat`}),` over data and `,(0,c.jsx)(t.code,{children:`{{…}}`}),` interpolation (text, action
args and component arguments).`]}),`
`,(0,c.jsx)(t.h2,{id:`recipe-variables`,children:`Recipe variables`}),`
`,(0,c.jsxs)(t.p,{children:[`Each group is defined in `,(0,c.jsx)(t.code,{children:`@rumahl/ui/recipes.css`}),` (controls/surfaces live in
`,(0,c.jsx)(t.code,{children:`materials.css`}),` / `,(0,c.jsx)(t.code,{children:`controls.css`}),`). Override any of them from a theme.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Controls`}),` — `,(0,c.jsx)(t.code,{children:`--control-fill`}),`, `,(0,c.jsx)(t.code,{children:`--control-hover`}),`, `,(0,c.jsx)(t.code,{children:`--control-raised`}),`,
`,(0,c.jsx)(t.code,{children:`--control-border`}),`, `,(0,c.jsx)(t.code,{children:`--control-border-hover`}),`, `,(0,c.jsx)(t.code,{children:`--control-inset`}),`,
`,(0,c.jsx)(t.code,{children:`--control-button-shadow`}),`, `,(0,c.jsx)(t.code,{children:`--control-pressed-shadow`}),`,
`,(0,c.jsx)(t.code,{children:`--control-popup-shadow`}),`, `,(0,c.jsx)(t.code,{children:`--control-recess`}),`, `,(0,c.jsx)(t.code,{children:`--control-filter`}),`,
`,(0,c.jsx)(t.code,{children:`--control-thumb`}),`, `,(0,c.jsx)(t.code,{children:`--control-tint`}),`, `,(0,c.jsx)(t.code,{children:`--control-tint-ink`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Surfaces`}),` — `,(0,c.jsx)(t.code,{children:`--surface-base`}),`, `,(0,c.jsx)(t.code,{children:`--surface-fill`}),`, `,(0,c.jsx)(t.code,{children:`--surface-sheen`}),`,
`,(0,c.jsx)(t.code,{children:`--surface-rim`}),`, `,(0,c.jsx)(t.code,{children:`--surface-filter`}),`, `,(0,c.jsx)(t.code,{children:`--surface-edge`}),`, `,(0,c.jsx)(t.code,{children:`--surface-elevation`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Menus`}),` — `,(0,c.jsx)(t.code,{children:`--menu-background`}),`, `,(0,c.jsx)(t.code,{children:`--menu-border`}),`, `,(0,c.jsx)(t.code,{children:`--menu-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--menu-shadow`}),`, `,(0,c.jsx)(t.code,{children:`--menu-backdrop`}),`, `,(0,c.jsx)(t.code,{children:`--menu-padding`}),`, `,(0,c.jsx)(t.code,{children:`--menu-font-size`}),`,
`,(0,c.jsx)(t.code,{children:`--menu-item-height`}),`, `,(0,c.jsx)(t.code,{children:`--menu-item-radius`}),`, `,(0,c.jsx)(t.code,{children:`--menu-item-hover`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Groups`}),` — `,(0,c.jsx)(t.code,{children:`--group-background`}),`, `,(0,c.jsx)(t.code,{children:`--group-border`}),`, `,(0,c.jsx)(t.code,{children:`--group-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--group-shadow`}),`, `,(0,c.jsx)(t.code,{children:`--group-row-height`}),`, `,(0,c.jsx)(t.code,{children:`--group-row-gap`}),`,
`,(0,c.jsx)(t.code,{children:`--group-row-padding`}),`, `,(0,c.jsx)(t.code,{children:`--group-divider`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Window chrome`}),` — `,(0,c.jsx)(t.code,{children:`--window-titlebar-height`}),`, `,(0,c.jsx)(t.code,{children:`--window-titlebar-padding`}),`,
`,(0,c.jsx)(t.code,{children:`--window-titlebar-border`}),`, `,(0,c.jsx)(t.code,{children:`--window-title-size`}),`, `,(0,c.jsx)(t.code,{children:`--window-title-weight`}),`,
`,(0,c.jsx)(t.code,{children:`--window-subtitle-size`}),`, `,(0,c.jsx)(t.code,{children:`--window-control-width`}),`, `,(0,c.jsx)(t.code,{children:`--window-control-height`}),`,
`,(0,c.jsx)(t.code,{children:`--window-control-radius`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Top bar / menubar`}),` — `,(0,c.jsx)(t.code,{children:`--topbar-island-height`}),`, `,(0,c.jsx)(t.code,{children:`--topbar-island-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--topbar-island-background`}),`, `,(0,c.jsx)(t.code,{children:`--topbar-island-border`}),`,
`,(0,c.jsx)(t.code,{children:`--topbar-island-shadow`}),`, `,(0,c.jsx)(t.code,{children:`--topbar-island-backdrop`}),`, `,(0,c.jsx)(t.code,{children:`--topbar-mode-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--topbar-button-size`}),`, `,(0,c.jsx)(t.code,{children:`--topbar-button-radius`}),`; and `,(0,c.jsx)(t.code,{children:`--menubar-island-*`}),`,
`,(0,c.jsx)(t.code,{children:`--menubar-item-*`}),`, `,(0,c.jsx)(t.code,{children:`--menubar-font-size`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Toolbar`}),` — `,(0,c.jsx)(t.code,{children:`--toolbar-min-height`}),`, `,(0,c.jsx)(t.code,{children:`--toolbar-padding`}),`, `,(0,c.jsx)(t.code,{children:`--toolbar-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--toolbar-background`}),`, `,(0,c.jsx)(t.code,{children:`--toolbar-border`}),`, `,(0,c.jsx)(t.code,{children:`--toolbar-shadow`}),`,
`,(0,c.jsx)(t.code,{children:`--toolbar-backdrop`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Chips / badges / notices / trays`}),` — `,(0,c.jsx)(t.code,{children:`--chip-*`}),`, `,(0,c.jsx)(t.code,{children:`--badge-*`}),`, `,(0,c.jsx)(t.code,{children:`--notice-*`}),`,
`,(0,c.jsx)(t.code,{children:`--tray-*`}),` (background, border, radius, shadow, padding, font-size).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lists / tables / accordion / toast / skeleton / tipseen`}),` — `,(0,c.jsx)(t.code,{children:`--list-item-*`}),`,
`,(0,c.jsx)(t.code,{children:`--table-font-size`}),`, `,(0,c.jsx)(t.code,{children:`--accordion-divider`}),`, `,(0,c.jsx)(t.code,{children:`--accordion-trigger-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--toast-*`}),`, `,(0,c.jsx)(t.code,{children:`--skeleton-*`}),`, `,(0,c.jsx)(t.code,{children:`--tipseen-*`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Steps / breadcrumbs / command palette / phone`}),` — `,(0,c.jsx)(t.code,{children:`--step-gap`}),`,
`,(0,c.jsx)(t.code,{children:`--breadcrumbs-gap`}),`, `,(0,c.jsx)(t.code,{children:`--breadcrumbs-font-size`}),`, `,(0,c.jsx)(t.code,{children:`--command-palette-*`}),`
(padding, radius, border, background, shadow, backdrop), `,(0,c.jsx)(t.code,{children:`--phone-*`}),`
(radius, border, background, shadow).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Switch / choice`}),` — `,(0,c.jsx)(t.code,{children:`--switch-radius`}),`, `,(0,c.jsx)(t.code,{children:`--switch-border`}),`,
`,(0,c.jsx)(t.code,{children:`--switch-background`}),`, `,(0,c.jsx)(t.code,{children:`--switch-background-checked`}),`,
`,(0,c.jsx)(t.code,{children:`--switch-border-checked`}),`, `,(0,c.jsx)(t.code,{children:`--switch-thumb`}),`, `,(0,c.jsx)(t.code,{children:`--switch-thumb-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--switch-thumb-shadow`}),`; `,(0,c.jsx)(t.code,{children:`--choice-size`}),`, `,(0,c.jsx)(t.code,{children:`--choice-radius`}),`,
`,(0,c.jsx)(t.code,{children:`--choice-border`}),`, `,(0,c.jsx)(t.code,{children:`--choice-background`}),`, `,(0,c.jsx)(t.code,{children:`--choice-shadow`}),`,
`,(0,c.jsx)(t.code,{children:`--choice-checked-background`}),`, `,(0,c.jsx)(t.code,{children:`--choice-checked-border`}),`, `,(0,c.jsx)(t.code,{children:`--choice-mark`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`glass-is-opt-in`,children:`Glass is opt-in`}),`
`,(0,c.jsxs)(t.p,{children:[`The clean/basic base ships `,(0,c.jsx)(t.strong,{children:`no`}),` glass — a theme enables it exactly where it
wants it:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Add `,(0,c.jsx)(t.code,{children:`class="rumahl-glass"`}),` to an element (a card, panel, menu, dock, hero …).
It takes the current theme's glass and falls back to an opaque surface in
Solid / reduced transparency.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tune it per element by setting the `,(0,c.jsx)(t.code,{children:`--surface-*`}),` recipe on that element
(`,(0,c.jsx)(t.code,{children:`--surface-base`}),`, `,(0,c.jsx)(t.code,{children:`--surface-opacity`}),` / `,(0,c.jsx)(t.code,{children:`--morphism`}),`, `,(0,c.jsx)(t.code,{children:`--surface-sheen`}),`,
`,(0,c.jsx)(t.code,{children:`--surface-rim`}),`, `,(0,c.jsx)(t.code,{children:`--surface-filter`}),`), or globally via the `,(0,c.jsx)(t.code,{children:`material.*`}),` tokens
(`,(0,c.jsx)(t.code,{children:`morphism`}),`, `,(0,c.jsx)(t.code,{children:`opacity`}),`, `,(0,c.jsx)(t.code,{children:`blur`}),`, `,(0,c.jsx)(t.code,{children:`saturation`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Nothing is forced: glass on one surface, several, or none — the theme developer
decides.`}),`
`,(0,c.jsx)(t.h2,{id:`custom-settings-in-personalization`,children:`Custom settings in Personalization`}),`
`,(0,c.jsxs)(t.p,{children:[`Everything in the SDK is `,(0,c.jsx)(t.strong,{children:`opt-in`}),`. A theme may also add its own settings; the
shell renders one control per `,(0,c.jsx)(t.code,{children:`kind`}),` under `,(0,c.jsx)(t.strong,{children:`Personalization → Customize`}),` and
writes the value into the user's appearance tuning:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`choice`}),` — a fixed list of token values (JSON-friendly), e.g. window corners.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`color`}),` — a colour, optionally `,(0,c.jsx)(t.code,{children:`seed: true`}),` to re-derive the palette from it.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`range`}),` — needs `,(0,c.jsx)(t.code,{children:`format`}),`/`,(0,c.jsx)(t.code,{children:`parse`}),` functions, so it is only available to code
themes / first-party themes.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Use `,(0,c.jsx)(t.strong,{children:`tokens`}),` (not hard-coded values) in your theme CSS so a parameter actually
changes the result. The base/clean theme turns off the SDK extras (glass, motion,
effects) — re-enable only what you want, where you want it.`]}),`
`,(0,c.jsx)(t.h2,{id:`security--capabilities`,children:`Security & capabilities`}),`
`,(0,c.jsxs)(t.p,{children:[`Declarative themes (tokens, recipes, variants, slots, CSS) are `,(0,c.jsx)(t.strong,{children:`data`}),` and safe
by construction. A theme may also ship `,(0,c.jsx)(t.strong,{children:`code`}),` (`,(0,c.jsx)(t.code,{children:`code`}),`), which runs with the
theme's trust level. The safety engine scans everything before install:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Blocked`}),`: `,(0,c.jsx)(t.code,{children:`eval`}),`/`,(0,c.jsx)(t.code,{children:`new Function`}),`, `,(0,c.jsx)(t.code,{children:`document.write`}),`, `,(0,c.jsx)(t.code,{children:`document.cookie`}),`,
dynamic `,(0,c.jsx)(t.code,{children:`<script>`}),` injection, `,(0,c.jsx)(t.code,{children:`iframe srcdoc`}),`, and CSS that hides/disables a
critical shell region.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`External resources are blocked`}),`: the OS CSP allows same-origin only
(`,(0,c.jsx)(t.code,{children:`connect-src 'self'`}),`, `,(0,c.jsx)(t.code,{children:`img-src 'self'`}),`, `,(0,c.jsx)(t.code,{children:`default-src 'none'`}),`). Bundle assets
(data: URIs or same-origin) — external URLs in CSS or code are rejected.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Capabilities`}),` — restricted APIs must be declared in `,(0,c.jsx)(t.code,{children:`capabilities`}),`:
`,(0,c.jsx)(t.code,{children:`network`}),` (fetch / XHR / WebSocket), `,(0,c.jsx)(t.code,{children:`storage`}),` (localStorage / sessionStorage /
indexedDB), `,(0,c.jsx)(t.code,{children:`clipboard`}),`, `,(0,c.jsx)(t.code,{children:`notifications`}),`, `,(0,c.jsx)(t.code,{children:`navigation`}),` (window.open / location).
Using an undeclared capability is an error.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Warnings`}),`: executable code, unknown capabilities, full-screen fixed layers.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Code runs in the OS origin (full freedom for dashboards/TUIs), so the scan is a
`,(0,c.jsx)(t.strong,{children:`safety net, not a sandbox`}),` — only install code themes from authors you trust,
and keep the emergency/safe mode available.`]}),`
`,(0,c.jsx)(t.h2,{id:`installing-a-theme-rumahl-os`,children:`Installing a theme (rumahl OS)`}),`
`,(0,c.jsxs)(t.p,{children:[`Preferences → Appearance → Theme → `,(0,c.jsx)(t.strong,{children:`Install theme…`}),` → pick a `,(0,c.jsx)(t.code,{children:`.json`}),` with
`,(0,c.jsx)(t.code,{children:`{ id, name, modes, variants?, tokens, css? }`}),`. It is registered and persisted on
the device. The sample themes live in `,(0,c.jsx)(t.code,{children:`packages/shell/themes/`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};