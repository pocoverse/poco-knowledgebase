"use strict";(self.webpackChunkpoco_knowledgebase=self.webpackChunkpoco_knowledgebase||[]).push([[5647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return a?i.createElement(m,r(r({ref:t},p),{},{components:a})):i.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const l={sidebar_position:9},r="PRD | PERK Generation",o={unversionedId:"Documentations/PERK-Generation",id:"Documentations/PERK-Generation",title:"PRD | PERK Generation",description:"Objective",source:"@site/docs/Documentations/PERK-Generation.mdx",sourceDirName:"Documentations",slug:"/Documentations/PERK-Generation",permalink:"/poco-knowledgebase/docs/Documentations/PERK-Generation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Documentations/PERK-Generation.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"PERK-SOP",permalink:"/poco-knowledgebase/docs/Documentations/PERK-SOP"},next:{title:"PRD | Cab Software",permalink:"/poco-knowledgebase/docs/Documentations/PRD-EmailGenerator"}},s={},c=[{value:"Objective",id:"objective",level:2},{value:"Why are we building?",id:"why-are-we-building",level:2},{value:"Who are we building it for?",id:"who-are-we-building-it-for",level:2},{value:"Features",id:"features",level:2},{value:"Template",id:"template",level:2},{value:"Generation of ERP",id:"generation-of-erp",level:2},{value:"List of Hospitals:",id:"list-of-hospitals",level:2},{value:"How to use the ERP?",id:"how-to-use-the-erp",level:2},{value:"In case of Emergency, things to do:",id:"in-case-of-emergency-things-to-do",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Technical specification:",id:"technical-specification",level:2},{value:"Release criteria:",id:"release-criteria",level:2},{value:"Timeline:",id:"timeline",level:2},{value:"Open questions?",id:"open-questions",level:2},{value:"Future features?",id:"future-features",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prd--perk-generation"},"PRD | PERK Generation"),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"To automate the PERK generation by leveraging the App script feature of Google Sheet. "),(0,n.kt)("h2",{id:"why-are-we-building"},"Why are we building?"),(0,n.kt)("p",null,"PERK Generation tool will help in creating and delivering an ERP for the subscribers & beneficiary at a faster pace as compared to now. "),(0,n.kt)("h2",{id:"who-are-we-building-it-for"},"Who are we building it for?"),(0,n.kt)("p",null,"The Operations team will use the PERK Automation tool to generate the PERK for beneficiaries registered on the Pococare platform."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fetch data from Google sheet"),(0,n.kt)("li",{parentName:"ul"},"Data to be represented in the provided template order"),(0,n.kt)("li",{parentName:"ul"},"Highlight the data in case more information is required"),(0,n.kt)("li",{parentName:"ul"},"Create hyperlink for the links available in the PERK")),(0,n.kt)("h2",{id:"template"},"Template"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Template for the order of how the collected and processed data will be represented in the ERP.",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1oRh48QB1zxNnoAkGjCj0spVsWXEb8Ibi/edit#slide=id.p8"},"ERP_Template.pptx")," / ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1CaUfs035Iu4PTtVFuj8JujYLDszytTlBIWREpBR_mQA/edit#slide=id.g162a845c73d_0_1"},"Reference-Template")),(0,n.kt)("li",{parentName:"ul"},"Template of the Excel sheet in which all the collected and processed data will be updated for all the users. ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1TqvWk3MvvP-v-Pv5fTQV_JzhXRR4j8fU3Xvi4sK07aU/edit#gid=0"},"ERP Data Source Template")),(0,n.kt)("li",{parentName:"ul"},"Sheet 2 of the above ERP Data Source Template contains the template for Hospital Mapping. "),(0,n.kt)("li",{parentName:"ul"},"Sheet 3 of ERP Data Source Template contains the ERP Tracker sheet with the link attached for all the ERPs generated. ")),(0,n.kt)("h2",{id:"generation-of-erp"},"Generation of ERP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For every unique beneficiary, a new ERP file will be generated and the link for the same will be made available in the sub-sheet ERP tracker in the Data source sheet.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Based on the data available in the data source sheet, it will be fetched for the respective beneficiary. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We have four types of data available with us: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Complete data provided by subscribers"),(0,n.kt)("li",{parentName:"ul"},"Incomplete data provided by subscribers"),(0,n.kt)("li",{parentName:"ul"},"Processed data provided by Pococare Ops team. "),(0,n.kt)("li",{parentName:"ul"},"Constant data provided by the Pococare team. This includes slides for \u201cHow to use ERP\u201d and \u201cwhat to do in case of Emergency\u201d. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ERP will include  the following  details:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Basic Details"),(0,n.kt)("li",{parentName:"ul"},"Name of Beneficiary"),(0,n.kt)("li",{parentName:"ul"},"Age of beneficiary"),(0,n.kt)("li",{parentName:"ul"},"Gender of beneficiary"),(0,n.kt)("li",{parentName:"ul"},"Complete Address of Beneficiary\nBased on the gender of the beneficiary, a respective image will be updated in the ERP. The image details will be provided by Sanket Jha ")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Emergency Contact",(0,n.kt)("br",null),"\nWe will have two emergency contacts in the ERP. Primary emergency contact and Secondary Emergency. For respective emergency contacts, we will have the following details: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name of Emergency contact")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Relation with the beneficiary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"WhatsApp of the emergency contact")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Mobile number of the emergency contact. "),(0,n.kt)("p",{parentName:"li"},"Exceptions: In case the user does not provide the emergency contact details, it needs to be highlighted, \u201cTo be Updated\u201d. ")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Medical Profile ",(0,n.kt)("br",null),"\nMedical profile will have all the details regarding the current chronic conditions, past medical or surgical history of the beneficiary, and recent hospitalizations.  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Chronic conditions"),(0,n.kt)("li",{parentName:"ul"},"Active Medications"),(0,n.kt)("li",{parentName:"ul"},"Allergy to Medications"),(0,n.kt)("li",{parentName:"ul"},"Past surgical/medical history"),(0,n.kt)("li",{parentName:"ul"},"Recent hospitalization"),(0,n.kt)("li",{parentName:"ul"},"Mobility")))),(0,n.kt)("p",null,"Exceptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In case a user has mentioned \u201cYes\u201d under active medication, but has not provided the details of medicine, the missing data will be highlighted, for the user to provide more details for the same. "),(0,n.kt)("li",{parentName:"ul"},"In case the user has mentioned \u201cyes\u201d under allergy to medication but has not provided details for which medicine they are allergic to; we must highlight for the user to provide more details. "),(0,n.kt)("li",{parentName:"ul"},"For the recent hospitalization, if the user has mentioned, \u201cyes\u201d but not provided details/cause of hospitalization, that data will be highlighted. "),(0,n.kt)("li",{parentName:"ul"},"Similarly for Past medical/surgical history and for differently abled.")),(0,n.kt)("p",null,"Any data for which the user has given a response, and the response is not sufficient, the incomplete/ missing data will be highlighted in the ERP. "),(0,n.kt)("h2",{id:"list-of-hospitals"},"List of Hospitals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For every beneficiary, the ops team is identifying all the nearby hospitals to which the beneficiary can be taken in case of emergency. "),(0,n.kt)("li",{parentName:"ul"},"For the case where one subscriber has multiple beneficiaries but from the same locations, the list of hospitals will be the same. "),(0,n.kt)("li",{parentName:"ul"},"In case one subscriber has multiple beneficiaries from multiple locations, the hospital list will be based on the location of a particular beneficiary. "),(0,n.kt)("li",{parentName:"ul"},"For every hospital, we will have a checklist of specialties and their certifications. "),(0,n.kt)("li",{parentName:"ul"},"The hospital listing sheet in the data source sheet will be mapped with the Beneficiary name, and will have address, distance, and specialty checklist available. "),(0,n.kt)("li",{parentName:"ul"},"Based on the beneficiary\u2019s name, the hospital data will be fetched and will be represented in the ERP in a similar manner as in the template. ")),(0,n.kt)("h2",{id:"how-to-use-the-erp"},"How to use the ERP?"),(0,n.kt)("p",null,"The content of this slide is constant and will remain the same for all the beneficiaries. "),(0,n.kt)("h2",{id:"in-case-of-emergency-things-to-do"},"In case of Emergency, things to do:"),(0,n.kt)("p",null,"Content of this slide is constant and will remain the same for all the beneficiaries. "),(0,n.kt)("h2",{id:"appendix"},"Appendix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Appendix will comprise of the additional documents that the subscriber must have provided. This includes Prescription, Discharge summary, and Insurance policy document. "),(0,n.kt)("li",{parentName:"ul"},"ERP will have a link for all the documents that the user can access. The links need to be hyperlinked for each document. For e.g., For the prescription, the link will be hyperlinked as \u201cBeneficiary Name e-Prescription\u201d. "),(0,n.kt)("li",{parentName:"ul"},"In case user has not uploaded any documents, in that case the Appendix slide will be highlighted as \u201cTo be updated\u201d")),(0,n.kt)("h2",{id:"technical-specification"},"Technical specification:"),(0,n.kt)("p",null,"App script feature of Google suite will be leveraged to create the document. "),(0,n.kt)("h2",{id:"release-criteria"},"Release criteria:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Functionality: Final ERP is generated based on the data available in the source sheet. "),(0,n.kt)("li",{parentName:"ul"},"Reliability: ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"}," 80% reliability factor ")),". We have to review the ERP generated before delivering them to the users. ")),(0,n.kt)("h2",{id:"timeline"},"Timeline:"),(0,n.kt)("h2",{id:"open-questions"},"Open questions?"),(0,n.kt)("h2",{id:"future-features"},"Future features?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ERP files generated should be saved in the respective ERP folders. "),(0,n.kt)("li",{parentName:"ul"},"The program should automatically detect the row and run the automation for it. "),(0,n.kt)("li",{parentName:"ul"},"In case of any edit in the beneficiary details in the source sheet, instead of creating a new file, the script should overwrite the existing file. "),(0,n.kt)("li",{parentName:"ul"},"Script can dynamically adjust the rows and columns in the hospital list sheet. "),(0,n.kt)("li",{parentName:"ul"},"Hospital list sheets should have a checkbox for the speciality that are available at respective hospitals. "),(0,n.kt)("li",{parentName:"ul"},"Automatically a new subscriber/beneficiary is added and the ERP should be generated for them.")))}d.isMDXComponent=!0}}]);