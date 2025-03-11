"use strict";(self.webpackChunkcapella_documentation=self.webpackChunkcapella_documentation||[]).push([[6008],{6074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Cambria FTC/API/methods/AddEvent","title":"LiveControlAPI","description":"Broadcast Manager Endpoint:","source":"@site/docs/Cambria FTC/03-API/methods/AddEvent.md","sourceDirName":"Cambria FTC/03-API/methods","slug":"/Cambria FTC/API/methods/AddEvent","permalink":"/CapellaSystems.github.io/docs/Cambria FTC/API/methods/AddEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cambria FTC/03-API/methods/AddEvent.md","tags":[],"version":"current","frontMatter":{},"sidebar":"FTCSidebar","previous":{"title":"YouTubeStreamFormat","permalink":"/CapellaSystems.github.io/docs/Cambria FTC/API/event_attributes/YouTubeStreamFormat"},"next":{"title":"AddMachines","permalink":"/CapellaSystems.github.io/docs/Cambria FTC/API/methods/AddMachines"}}');var r=n(4848),d=n(8453);const i={},c="LiveControlAPI",o={},l=[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"HTTP Method",id:"http-method",level:2},{value:"HTTP XML Response",id:"http-xml-response",level:2},{value:"HTTP Status Codes",id:"http-status-codes",level:2}];function h(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"livecontrolapi",children:"LiveControlAPI"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Broadcast Manager Endpoint:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"http://machineName:8753/CambriaBM/v1/LiveControl"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Stream Manager Endpoint:"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"http://machineName:8757/CambriaLM/v1/LiveControl"})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Control live event streams by starting, stopping, or switching inputs and outputs."}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["The control command to execute (e.g., ",(0,r.jsx)(t.code,{children:"Start"}),", ",(0,r.jsx)(t.code,{children:"Stop"}),", ",(0,r.jsx)(t.code,{children:"SwitchInput"}),")."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"EventID"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"The ID of the event to control."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"http-method",children:"HTTP Method"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"POST"})}),"\n",(0,r.jsx)(t.h2,{id:"http-xml-response",children:"HTTP XML Response"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Parent"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Content"})}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"Container of the response"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Status"})}),(0,r.jsx)(t.td,{children:"Content"}),(0,r.jsx)(t.td,{children:"Logs of the API call"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"http-status-codes",children:"HTTP Status Codes"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:"Successfully processed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"400"}),(0,r.jsx)(t.td,{children:"Invalid parameters"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Event not found"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5xx"}),(0,r.jsx)(t.td,{children:"Server error while executing control command"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const r={},d=s.createContext(r);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);