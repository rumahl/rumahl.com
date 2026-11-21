import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Gt as r,Ut as i,Wt as a,n as o,rn as s}from"./iframe-ey0lnv34.js";var c,l,u,d,f;function p(){return(p=e((()=>{c=t(),o(),l=n(),u={title:`Components/AnchoredPopover`,component:s,args:{anchor:{current:null},open:!1,children:null},parameters:{layout:`centered`,docs:{description:{component:`A popover positioned relative to an anchor element.

## Rules
- Anchored to its trigger; flips and clamps to stay on screen.
- Glass panel, elevated; closes on outside click / Escape.
- For action lists use **Menu**; for coach-marks use **Tipseen**.`}}}},d={render:()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`button`,{ref:e,type:`button`,className:`btn btn--secondary`,"aria-haspopup":`menu`,"aria-expanded":t,onClick:()=>n(e=>!e),children:`Options ▾`}),(0,l.jsx)(s,{anchor:e,open:t,children:(0,l.jsxs)(i,{children:[(0,l.jsx)(r,{shortcut:`⌘R`,children:`Rename`}),(0,l.jsx)(r,{shortcut:`⌘D`,children:`Duplicate`}),(0,l.jsx)(a,{}),(0,l.jsx)(r,{children:`Delete`})]})})]})}},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const anchor = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);
    return <div>
        <button ref={anchor} type="button" className="btn btn--secondary" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(value => !value)}>
          Options ▾
        </button>
        <AnchoredPopover anchor={anchor} open={open}>
          <Menu>
            <MenuItem shortcut="⌘R">Rename</MenuItem>
            <MenuItem shortcut="⌘D">Duplicate</MenuItem>
            <MenuDivider />
            <MenuItem>Delete</MenuItem>
          </Menu>
        </AnchoredPopover>
      </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Default,f as __namedExportsOrder,u as default};