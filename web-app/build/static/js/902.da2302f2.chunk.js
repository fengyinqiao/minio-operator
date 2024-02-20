"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[902],{5578:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(2791),s=i(184);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(i){return(0,s.jsx)(n.Suspense,{fallback:t,children:(0,s.jsx)(e,{...i})})}}},6028:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(2791),s=i(9434),a=i(9945),o=i(1320),l=i(7995),r=i(8057),c=i(184);const d=e=>{let{onClose:t,modalOpen:i,title:d,children:x,wideLimit:p=!0,titleIcon:u=null,iconColor:h="default",sx:m}=e;const f=(0,o.TL)(),[b,g]=(0,n.useState)(!1),v=(0,s.v9)((e=>e.system.modalSnackBar));(0,n.useEffect)((()=>{f((0,l.MK)(""))}),[f]),(0,n.useEffect)((()=>{if(v){if(""===v.message)return void g(!1);"error"!==v.type&&g(!0)}}),[v]);let j="";return v&&(j=v.detailedErrorMsg,(""===v.detailedErrorMsg||v.detailedErrorMsg.length<5)&&(j=v.message)),(0,c.jsxs)(a.cFD,{onClose:t,open:i,title:d,titleIcon:u,widthLimit:p,sx:m,iconColor:h,children:[(0,c.jsx)(r.Z,{isModal:!0}),(0,c.jsx)(a.A9Q,{onClose:()=>{g(!1),f((0,l.MK)(""))},open:b,message:j,mode:"inline",variant:"error"===v.type?"error":"default",autoHideDuration:"error"===v.type?10:5,condensed:!0}),x]})}},4902:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var n=i(2791),s=i(9945),a=i(7689),o=i(6087),l=i(8290),r=i(8182),c=i(6444),d=i(6181),x=i.n(d),p=i(184);const u=c.ZP.div((e=>{let{theme:t}=e;return{display:"grid",margin:"0 1.5rem 0 1.5rem",gridTemplateColumns:"1fr 1fr 1fr 1fr",["@media (max-width: ".concat(s.Egj.sm,"px)")]:{gridTemplateColumns:"1fr 1fr 1fr"},"&.paid-plans-only":{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},"& .features-col":{flex:1,minWidth:"260px","@media (max-width: 600px)":{display:"none"}},"& .xs-only":{display:"none"},"& .button-box":{display:"flex",alignItems:"center",justifyContent:"center",padding:"5px 0px 25px 0px",borderLeft:"1px solid ".concat(x()(t,"borderColor","#EAEAEA"))},"& .plan-header":{height:"99px",borderBottom:"1px solid ".concat(x()(t,"borderColor","#EAEAEA"))},"& .feature-title":{height:"25px",paddingLeft:"26px",fontSize:"14px",background:x()(t,"signalColors.disabled","#E5E5E5"),color:x()(t,"signalColors.main","#07193E"),"@media (max-width: 600px)":{"& .feature-title-info .xs-only":{display:"block"}}},"& .feature-name":{minHeight:"60px",padding:"5px",borderBottom:"1px solid ".concat(x()(t,"borderColor","#EAEAEA")),display:"flex",alignItems:"center",paddingLeft:"26px",fontSize:"14px"},"& .feature-item":{display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",minHeight:"60px",padding:"0 15px 0 15px",borderBottom:"1px solid ".concat(x()(t,"borderColor","#EAEAEA")),borderLeft:"1px solid ".concat(x()(t,"borderColor","#EAEAEA")),fontSize:"14px","& .link-text":{color:"#2781B0",cursor:"pointer",textDecoration:"underline"},"&.icon-yes":{width:"15px",height:"15px"}},"& .feature-item-info":{flex:1,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"space-around",textAlign:"center","@media (max-width: 600px)":{justifyContent:"space-evenly",width:"100%","& .xs-only":{display:"block"},"& .plan-feature":{textAlign:"center",paddingRight:"10px"}}},"& .plan-col":{minWidth:"260px",flex:1},"& .active-plan-col":{background:"".concat(x()(t,"boxBackground","#FDFDFD")," 0% 0% no-repeat padding-box"),boxShadow:" 0px 3px 20px #00000038","& .plan-header":{backgroundColor:x()(t,"signalColors.info","#2781B0")},"& .feature-title":{background:x()(t,"signalColors.disabled","#E5E5E5"),color:x()(t,"fontColor","#000")}}}})),h=c.ZP.div((e=>{let{theme:t}=e;return{display:"flex",alignItems:"flex-start",justifyContent:"center",flexFlow:"column",borderLeft:"1px solid ".concat(x()(t,"borderColor","#EAEAEA")),borderBottom:"0px !important","& .plan-header":{display:"flex",alignItems:"center",justifyContent:"center",flexFlow:"column"},"& .title-block":{display:"flex",alignItems:"center",flexFlow:"column",width:"100%","& .title-main":{display:"flex",alignItems:"center",justifyContent:"center",flex:1},"& .iconContainer":{"& .min-icon":{minWidth:140,width:"100%",maxHeight:55,height:"100%"}}},"& .open-source":{fontSize:"14px",display:"flex",marginBottom:"5px",alignItems:"center","& .min-icon":{marginRight:"8px",height:"12px",width:"12px"}},"& .cur-plan-text":{fontSize:"12px",textTransform:"uppercase"},"@media (max-width: 600px)":{cursor:"pointer","& .title-block":{"& .title":{fontSize:"14px",fontWeight:600}}},"&.active, &.active.xs-active":{color:"#ffffff",position:"relative","& .min-icon":{fill:"#ffffff"},"&:before":{content:"' '",position:"absolute",width:"100%",height:"18px",backgroundColor:x()(t,"signalColors.info","#2781B0"),display:"block",top:-16},"& .iconContainer":{"& .min-icon":{marginTop:"-12px"}}},"&.active":{backgroundColor:x()(t,"signalColors.info","#2781B0"),color:"#ffffff"},"&.xs-active":{background:"#eaeaea"}}})),m=c.ZP.div((e=>{let{theme:t}=e;return{border:"1px solid ".concat(x()(t,"borderColor","#EAEAEA")),borderTop:"0px",marginBottom:"45px","&::-webkit-scrollbar":{width:"5px",height:"5px"},"&::-webkit-scrollbar-track":{background:"#F0F0F0",borderRadius:0,boxShadow:"inset 0px 0px 0px 0px #F0F0F0"},"&::-webkit-scrollbar-thumb":{background:"#777474",borderRadius:0},"&::-webkit-scrollbar-thumb:hover":{background:"#5A6375"}}})),f=e=>{let{isActive:t,isXsViewActive:i,title:n,onClick:s,children:a}=e;const o=n.toLowerCase();return(0,p.jsx)(h,{className:(0,r.Z)({"plan-header":!0,active:t,"xs-active":i}),onClick:()=>{s&&s(o)},children:a})},b=e=>(0,p.jsx)(s.xuv,{className:"feature-title",children:(0,p.jsx)(s.xuv,{className:"feature-title-info",children:(0,p.jsxs)("div",{className:"xs-only",children:[e.featureLabel," "]})})}),g=e=>(0,p.jsx)(s.xuv,{className:"feature-item",style:e.style,children:(0,p.jsxs)(s.xuv,{className:"feature-item-info",children:[(0,p.jsx)("div",{className:"xs-only",children:(0,l.BK)(e.featureLabel||"")}),(0,p.jsxs)(s.xuv,{className:"plan-feature",children:[(0,p.jsx)("div",{children:(0,l.BK)(e.label||"")}),(0,l.BK)(e.detail),(0,p.jsxs)("div",{className:"xs-only",children:[e.xsLabel," "]})]})]})}),v=e=>{var t;let{licenseInfo:i}=e;const[a,o]=(0,n.useState)(window.innerWidth>=s.Egj.sm);(0,n.useEffect)((()=>{const e=()=>{let e=!1;window.innerWidth>=s.Egj.sm&&(e=!0),o(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);let r=i?null===i||void 0===i||null===(t=i.plan)||void 0===t?void 0:t.toLowerCase():"community";const c=r===l.a6.COMMUNITY,d=r===l.a6.STANDARD,x=r===l.a6.ENTERPRISE,h=l.eo.includes(r),[v,j]=(0,n.useState)("");let y=v===l.a6.COMMUNITY,w=v===l.a6.STANDARD,A=v===l.a6.ENTERPRISE;const N=(e,t,i,n)=>{let a="community"!==r?"https://subnet.min.io":e;return(0,p.jsx)(s.zxk,{id:"license-action-".concat(e),variant:i,style:{marginTop:"12px",width:"80%"},disabled:r!==l.a6.COMMUNITY&&r!==n,onClick:e=>{e.preventDefault(),window.open("".concat(a,"?ref=op"),"_blank")},label:t})},k=e=>{j(e)};(0,n.useEffect)((()=>{j(a?r||"community":"")}),[a,r]);const S=l.Of;return(0,p.jsx)(n.Fragment,{children:(0,p.jsxs)(m,{children:[(0,p.jsx)(s.xuv,{className:"title-blue-bar",sx:{height:"8px",borderBottom:"8px solid rgb(6 48 83)"}}),(0,p.jsxs)(u,{className:h?"paid-plans-only":"",children:[(0,p.jsx)(s.xuv,{className:"features-col",children:S.map((e=>{const t=e.featureTitleRow;return e.isHeader?h?(0,p.jsxs)(s.xuv,{className:"plan-header",sx:{fontSize:"14px",paddingLeft:"26px",display:"flex",alignItems:"center",justifyContent:"flex-start",borderBottom:"0px !important","& .link-text":{color:"#2781B0",cursor:"pointer",textDecoration:"underline"},"& .min-icon":{marginRight:"10px",color:"#2781B0",fill:"#2781B0"}},children:[(0,p.jsx)(s.jR_,{}),(0,p.jsxs)("a",{href:"https://subnet.min.io/terms-and-conditions/".concat(r),rel:"noopener",className:"link-text",children:["View License agreement ",(0,p.jsx)("br",{}),"for the registered plan."]})]},"plan-header-".concat(e.desc)):(0,p.jsx)(s.xuv,{className:"plan-header",sx:{fontSize:"14px",paddingLeft:"26px",display:"flex",alignItems:"center",justifyContent:"flex-start",borderBottom:"0px !important"},children:e.label},"plan-header-label-".concat(e.desc)):t?(0,p.jsx)(s.xuv,{className:"feature-title",sx:{fontSize:"14px",fontWeight:600,textTransform:"uppercase"},children:(0,p.jsxs)("div",{children:[(0,l.BK)(e.desc)," "]})},"plan-descript-".concat(e.desc)):(0,p.jsx)(s.xuv,{className:"feature-name",style:e.style,children:(0,p.jsxs)("div",{children:[(0,l.BK)(e.desc)," "]})},"plan-feature-name-".concat(e.desc))}))}),h?null:(0,p.jsxs)(s.xuv,{className:"plan-col ".concat(c?"active-plan-col":"non-active-plan-col"),children:[l.RY.map(((e,t)=>{const i=S[t].desc,{featureTitleRow:n,isHeader:o}=e;return o?(0,p.jsx)(f,{isActive:c,isXsViewActive:y,title:"community",onClick:a?k:null,children:(0,p.jsx)(s.xuv,{className:"title-block",children:(0,p.jsx)(s.xuv,{className:"title-main",children:(0,p.jsx)("div",{className:"iconContainer",children:(0,p.jsx)(s.H_l,{style:{width:117}})})})})},"community-header"):n?(0,p.jsx)(b,{featureLabel:i},"title-row-".concat(e.id)):(0,p.jsx)(g,{featureLabel:i,label:e.label,detail:e.detail,xsLabel:e.xsLabel,style:e.style},"pricing-feature-".concat(e.id))})),(0,p.jsx)(s.xuv,{className:"button-box",children:N("https://slack.min.io","Join Slack","regular",l.a6.COMMUNITY)})]}),(0,p.jsxs)(s.xuv,{className:"plan-col ".concat(d?"active-plan-col":"non-active-plan-col"),children:[l.zR.map(((e,t)=>{const i=S[t].desc,n=e.featureTitleRow;return e.isHeader?(0,p.jsx)(f,{isActive:d,isXsViewActive:w,title:"Standard",onClick:a?k:null,children:(0,p.jsx)(s.xuv,{className:"title-block",children:(0,p.jsx)(s.xuv,{className:"title-main",children:(0,p.jsx)("div",{className:"iconContainer",children:(0,p.jsx)(s.tKS,{})})})})},"standard-header"):n?(0,p.jsx)(b,{featureLabel:i},"feature-title-row-".concat(e.id)):(0,p.jsx)(g,{featureLabel:i,label:e.label,detail:e.detail,xsLabel:e.xsLabel,style:e.style},"feature-item-".concat(e.id))})),(0,p.jsx)(s.xuv,{className:"button-box",children:N("https://min.io/signup",l.eo.includes(r)?"Login to SUBNET":"Subscribe","callAction",l.a6.STANDARD)})]}),(0,p.jsxs)(s.xuv,{className:"plan-col ".concat(x?"active-plan-col":"non-active-plan-col"),children:[l.u9.map(((e,t)=>{const i=S[t].desc,{featureTitleRow:n,isHeader:o,yesIcon:l}=e;return o?(0,p.jsx)(f,{isActive:x,isXsViewActive:A,title:"Enterprise",onClick:a?k:null,children:(0,p.jsx)(s.xuv,{className:"title-block",children:(0,p.jsx)(s.xuv,{className:"title-main",children:(0,p.jsx)("div",{className:"iconContainer",children:(0,p.jsx)(s.cSV,{})})})})},"enterprise-header"):n?(0,p.jsx)(b,{featureLabel:i},"feature-title-row2-".concat(e.id)):l?(0,p.jsx)(s.xuv,{className:"feature-item",children:(0,p.jsxs)(s.xuv,{className:"feature-item-info",children:[(0,p.jsx)("div",{className:"xs-only"}),(0,p.jsx)(s.xuv,{className:"plan-feature",children:(0,p.jsx)(s.rE2,{})})]})},"ent-feature-yes".concat(e.id)):(0,p.jsx)(g,{featureLabel:i,label:e.label,detail:e.detail,style:e.style},"pricing-feature-item-".concat(e.id))})),(0,p.jsx)(s.xuv,{className:"button-box",children:N("https://min.io/signup",l.eo.includes(r)?"Login to SUBNET":"Subscribe","callAction",l.a6.ENTERPRISE)})]})]})]})})};var j=i(4440),y=i(5578),w=i(9435),A=i(1207);const N=(0,y.Z)(n.lazy((()=>i.e(223).then(i.bind(i,5223))))),k=()=>{const e=(0,a.s0)(),[t,i]=(0,n.useState)(!1),[r,c]=(0,n.useState)(),[d,x]=(0,n.useState)(0),[u,h]=(0,n.useState)(!1),[m,f]=(0,n.useState)(!0);(0,n.useState)(!1);const[b,g]=(0,n.useState)(!1),[y,k]=(0,n.useState)(!1),S=r&&b,E=(0,l.Y0)();(0,n.useEffect)((()=>{!S&&!E&&!m&&!u&&k(!0)}),[S,E,m,u]);const C=(0,n.useCallback)((()=>{u||(h(!0),A.Z.invoke("GET","/api/v1/subnet/info").then((e=>{e&&("STANDARD"===e.plan?x(1):"ENTERPRISE"===e.plan?x(2):x(1),c(e)),g(!0),h(!1)})).catch((()=>{g(!1),h(!1)})))}),[u]);return(0,n.useEffect)((()=>{m&&(C(),f(!1))}),[C,m,f]),u?(0,p.jsx)(s.rjZ,{item:!0,xs:12,children:(0,p.jsx)(s.kod,{})}):(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)(w.Z,{label:"MinIO License and Support plans",actions:(0,p.jsx)(n.Fragment,{children:!S&&(0,p.jsx)(s.zxk,{id:"login-with-subnet",onClick:()=>e(o.gA.REGISTER_SUPPORT),style:{fontSize:"14px",display:"flex",alignItems:"center",textDecoration:"none"},icon:(0,p.jsx)(s.e0j,{}),variant:"callAction",children:"Register your cluster"})})}),(0,p.jsxs)(s.Xgh,{children:[(0,p.jsx)(s.rjZ,{item:!0,xs:12,children:S&&(0,p.jsx)(j.Z,{email:null===r||void 0===r?void 0:r.email})}),(0,p.jsx)(v,{activateProductModal:t,closeModalAndFetchLicenseInfo:()=>{i(!1),C()},licenseInfo:r,currentPlanID:d,setActivateProductModal:i}),(0,p.jsx)(N,{isOpen:y,onClose:()=>{k(!1)}})]})]})}},3713:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(2791),s=i(6444),a=i(6181),o=i.n(a),l=i(184);const r=s.ZP.a((e=>{let{theme:t}=e;return{color:o()(t,"linkColor","#2781B0"),fontWeight:600}})),c=()=>(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)("h2",{children:"What is the GNU AGPL v3?"}),(0,l.jsxs)("p",{children:['The GNU AGPL v3 is short for the "GNU Affero General Public License v3." It is a common open source license certified by the Free Software Foundation and the Open Source Initiative. You can get a copy of the GNU AGPL v3 license with MinIO source code or at\xa0',(0,l.jsx)(r,{href:"https://min.io/compliance?ref=op",target:"_blank",children:"https://www.gnu.org/licenses/agpl-3.0.en.html"}),"."]}),(0,l.jsx)("h2",{children:"What does it mean for me to comply with the GNU AGPL v3?"}),(0,l.jsx)("p",{children:"When you host or distribute MinIO over a network, the AGPL v3 applies to you. Any distribution or copying of MinIO software modified or not has to comply with the obligations specified in the AGPL v3. Otherwise, you may risk infringing MinIO\u2019s copyrights."}),(0,l.jsx)("h2",{children:"Making combined or derivative works of MinIO"}),(0,l.jsx)("p",{children:"Combining MinIO software as part of a larger software stack triggers your GNU AGPL v3 obligations."}),(0,l.jsx)("p",{children:"The method of combining does not matter. When MinIO is linked to a larger software stack in any form, including statically, dynamically, pipes, or containerized and invoked remotely, the AGPL v3 applies to your use. What triggers the AGPL v3 obligations is the exchanging data between the larger stack and MinIO."}),(0,l.jsx)("h2",{children:"Talking to your Legal Counsel"}),(0,l.jsx)("p",{children:"If you have questions, we recommend that you talk to your own attorney for legal advice. Purchasing a commercial license from MinIO removes the AGPL v3 obligations from MinIO software."})]})},8824:(e,t,i)=>{i.d(t,{Z:()=>o});i(2791);var n=i(9434),s=i(7995),a=i(184);const o=()=>{const e=(0,n.v9)(s.bf)?"op":"con";return(0,a.jsx)("a",{className:"link-text",href:"https://min.io/compliance?ref=".concat(e),children:"GNU AGPL v3"})}},8290:(e,t,i)=>{i.d(t,{RY:()=>m,u9:()=>b,Of:()=>h,a6:()=>p,eo:()=>g,zR:()=>f,Y0:()=>w,BK:()=>v,NI:()=>y});var n=i(9945),s=i(8824),a=i(9563),o=i(1320),l=(i(2791),i(6028)),r=i(3713),c=i(9434),d=i(184);const x=()=>{const e=(0,o.TL)(),t=(0,c.v9)((e=>e.license.faqModalOpen));return(0,d.jsx)(l.Z,{modalOpen:t,title:"License FAQ",onClose:()=>{e((0,a.eu)())},children:(0,d.jsx)(r.Z,{})})},p={COMMUNITY:"community",STANDARD:"standard",ENTERPRISE:"enterprise"},u=e=>{let{text:t,anchor:i}=e;return(0,d.jsx)("a",{href:"https://min.io/product/subnet?ref=op#".concat(i),className:"link-text",target:"_blank",rel:"noopener ",style:{color:"#2781B0"},children:t})},h=[{label:"License ",isHeader:!0},{label:"",isHeader:!1,style:{height:"400px",verticalAlign:"top",alignItems:"start"}},{desc:"Features",featureTitleRow:!0},{desc:"Unit Price"},{desc:()=>(0,d.jsx)(u,{anchor:"sa-long-term-support",text:"Software Release"})},{desc:"SLA"},{desc:"Support"},{desc:"Critical Security and Bug Detection"},{desc:()=>(0,d.jsx)(u,{anchor:"sa-panic-button",text:"Panic Button"})},{desc:()=>(0,d.jsx)(u,{anchor:"sa-healthcheck",text:"Health Diagnostics"})},{desc:"Annual Architecture Review"},{desc:"Annual Performance Review"},{desc:"Indemnification"},{desc:"Security and Policy Review"}],m=[{label:"Community",isHeader:!0,style:{borderBottom:0}},{label:()=>(0,d.jsx)(n.xuv,{sx:{textAlign:"left"},children:(0,d.jsxs)("span",{children:["Designed for developers who are building open source applications in compliance with the ",(0,d.jsx)(s.Z,{})," license, MinIO Trademarks and are able to self support themselves. It is fully featured. If you distribute, host or create derivative works of the MinIO software over the network, the ",(0,d.jsx)(s.Z,{})," license requires that you also distribute the complete, corresponding source code of the combined work under the same ",(0,d.jsx)(s.Z,{})," license. This requirement applies whether or not you modified MinIO.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{className:"link-text",onClick:()=>{o.ZP.dispatch((0,a.hm)())},children:"Compliance FAQ"}),(0,d.jsx)(x,{})]})}),isHeader:!1,style:{height:"400px",borderBottom:0}},{id:"com_feat_title",featureTitleRow:!0},{id:"com_license_cost"},{id:"com_release",label:"Upstream"},{id:"com_sla",label:"No SLA"},{id:"com_support",label:"Community:",detail:"Slack + Github"},{id:"com_security",label:"Self"},{id:"com_panic",xsLabel:"N/A"},{id:"com_diag",xsLabel:"N/A"},{id:"com_arch",xsLabel:"N/A"},{id:"com_perf",xsLabel:"N/A"},{id:"com_indemnity",xsLabel:"N/A"},{id:"com_sec_policy",xsLabel:"N/A"}],f=[{label:"Standard",isHeader:!0,style:{borderBottom:0}},{isHeader:!1,label:()=>(0,d.jsxs)(n.xuv,{sx:{marginTop:"-85px",textAlign:"left"},children:[(0,d.jsxs)("span",{children:["Designed for customers who require a commercial license and can mostly self-support but want the peace of mind that comes with the MinIO Subscription Network\u2019s suite of operational capabilities and direct-to-engineer interaction. The Standard version is fully featured but with SLA limitations. ",(0,d.jsx)("br",{})," ",(0,d.jsx)("br",{})," To learn more about the MinIO Subscription Network"]})," ",(0,d.jsx)("a",{href:"https://min.io/product/subnet?ref=op",className:"link-text",target:"_blank",rel:"noopener",children:"click here"}),"."]}),style:{height:"400px",borderBottom:0}},{id:"std_feat_title",featureTitleRow:!0},{id:"std_license_cost",label:()=>(0,d.jsx)(n.xuv,{sx:{fontSize:"16px",fontWeight:600},children:"$10 per TiB per month"}),detail:()=>(0,d.jsx)(n.xuv,{sx:{fontSize:"14px",fontWeight:400,marginBottom:"5px"},children:"(Minimum of 200TiB)"})},{id:"std_release",label:"1 Year Long Term Support"},{id:"std_sla",label:"<48 Hours",detail:"(Local Business Hours)"},{id:"std_support",label:"L4 Direct Engineering",detail:"support via SUBNET"},{id:"std_security",label:"Continuous Scan and Alert"},{id:"std_panic",label:"1 Per year"},{id:"std_diag",label:"24/7/365"},{id:"std_arch",xsLabel:"N/A"},{id:"std_perf",xsLabel:"N/A"},{id:"std_indemnity",xsLabel:"N/A"},{id:"std_sec_policy",xsLabel:"N/A"}],b=[{label:"Enterprise",isHeader:!0,style:{borderBottom:0}},{isHeader:!1,label:()=>(0,d.jsxs)(n.xuv,{sx:{marginTop:"-135px",textAlign:"left"},children:[(0,d.jsxs)("span",{children:["Designed for mission critical environments where both a license and strict SLAs are required. The Enterprise version is fully featured but comes with additional capabilities. ",(0,d.jsx)("br",{})," ",(0,d.jsx)("br",{})," To learn more about the MinIO Subscription Network"]})," ",(0,d.jsx)("a",{href:"https://min.io/product/subnet?ref=op",className:"link-text",target:"_blank",rel:"noopener",children:"click here"}),"."]}),style:{height:"400px",borderBottom:0}},{id:"end_feat_title",featureTitleRow:!0},{id:"ent_license_cost",label:()=>(0,d.jsx)(n.xuv,{sx:{fontSize:"16px",fontWeight:600},children:"$20 per TiB per month"}),detail:()=>(0,d.jsx)(n.xuv,{sx:{fontSize:"14px",fontWeight:400,marginBottom:"5px"},children:"(Minimum of 100TiB)"})},{id:"ent_release",label:"5 Years Long Term Support"},{id:"ent_sla",label:"<1 hour"},{id:"ent_support",label:"L4 Direct Engineering support via",detail:"SUBNET, Phone, Web Conference"},{id:"ent_security",label:"Continuous Scan and Alert"},{id:"ent_panic",label:"Unlimited"},{id:"ent_diag",label:"24/7/365"},{id:"ent_arch",yesIcon:!0},{id:"ent_perf",yesIcon:!0},{id:"ent_indemnity",yesIcon:!0},{id:"ent_sec_policy",yesIcon:!0}],g=[p.STANDARD,p.ENTERPRISE],v=e=>"function"===typeof e?e():e,j="agpl_minio_license_consent",y=()=>{localStorage.setItem(j,"true")},w=()=>"true"===localStorage.getItem(j)},4440:(e,t,i)=>{i.d(t,{Z:()=>a});i(2791);var n=i(9945),s=i(184);const a=e=>{let{email:t=""}=e;return(0,s.jsxs)(n.xuv,{sx:{height:"67px",color:"#ffffff",display:"flex",position:"relative",top:"-30px",left:"-32px",width:"calc(100% + 64px)",alignItems:"center",justifyContent:"space-between",backgroundColor:"#2781B0",padding:"0 25px 0 25px","& .registered-box, .reg-badge-box":{display:"flex",alignItems:"center",justifyContent:"flex-start"},"& .reg-badge-box":{marginLeft:"20px","& .min-icon":{fill:"#2781B0"}}},children:[(0,s.jsxs)(n.xuv,{className:"registered-box",children:[(0,s.jsx)(n.xuv,{sx:{fontSize:"16px",fontWeight:400},children:"Register status:"}),(0,s.jsxs)(n.xuv,{className:"reg-badge-box",children:[(0,s.jsx)(n.SA,{}),(0,s.jsx)(n.xuv,{sx:{fontWeight:600},children:"Registered"})]})]}),(0,s.jsxs)(n.xuv,{className:"registered-acc-box",sx:{alignItems:"center",justifyContent:"flex-start",display:"flex",["@media (max-width: ".concat(n.Egj.sm,"px)")]:{display:"none"}},children:[(0,s.jsx)(n.xuv,{sx:{fontSize:"16px",fontWeight:400},children:"Registered to:"}),(0,s.jsx)(n.xuv,{sx:{marginLeft:"8px",fontWeight:600},children:t})]})]})}},8182:(e,t,i)=>{function n(e){var t,i,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=n(e[t]))&&(s&&(s+=" "),s+=i);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}i.d(t,{Z:()=>s});const s=function(){for(var e,t,i=0,s="";i<arguments.length;)(e=arguments[i++])&&(t=n(e))&&(s&&(s+=" "),s+=t);return s}}}]);
//# sourceMappingURL=902.da2302f2.chunk.js.map