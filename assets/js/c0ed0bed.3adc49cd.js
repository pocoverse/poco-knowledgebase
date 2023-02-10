"use strict";(self.webpackChunkpoco_knowledgebase=self.webpackChunkpoco_knowledgebase||[]).push([[3943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="PRD | Emergency QR Code for beneficiary",l={unversionedId:"Documentations/PRD-Emergency-QR",id:"Documentations/PRD-Emergency-QR",title:"PRD | Emergency QR Code for beneficiary",description:"Why are we building?",source:"@site/docs/Documentations/PRD-Emergency-QR.mdx",sourceDirName:"Documentations",slug:"/Documentations/PRD-Emergency-QR",permalink:"/poco-knowledgebase/docs/Documentations/PRD-Emergency-QR",draft:!1,editUrl:"https://github.com/vcpoco/poco-knowledgebase/tree/master/docs/Documentations/PRD-Emergency-QR.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PRD | Beneficiary Onboarding",permalink:"/poco-knowledgebase/docs/Documentations/PRD-Beneficiary-Onboarding"},next:{title:"PRD | Integration With Freshsales",permalink:"/poco-knowledgebase/docs/Documentations/PRD-Integration-Freshsale"}},c={},s=[{value:"Why are we building?",id:"why-are-we-building",level:2},{value:"Objective",id:"objective",level:2},{value:"User Story",id:"user-story",level:2},{value:"User Type",id:"user-type",level:2},{value:"Features",id:"features",level:2},{value:"Screen Descriptions",id:"screen-descriptions",level:2},{value:"User Flow",id:"user-flow",level:2},{value:"Design Specs",id:"design-specs",level:2},{value:"Technical Specifications",id:"technical-specifications",level:2},{value:"Non-Functional requirements",id:"non-functional-requirements",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prd--emergency-qr-code-for-beneficiary"},"PRD | Emergency QR Code for beneficiary"),(0,r.kt)("h2",{id:"why-are-we-building"},"Why are we building?"),(0,r.kt)("p",null,"All the beneficiary added on the Pococare platform will get an individual unique QR code for them. These unique QR Code can be scanned to raise the emergency request for the respective beneficiary. "),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow the users to raise emergency request with ease.")),(0,r.kt)("h2",{id:"user-story"},"User Story"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beneficiary users will get a unique QR code."),(0,r.kt)("li",{parentName:"ul"},"Users can share their QR Code to Print/Save as Image."),(0,r.kt)("li",{parentName:"ul"},"Users will scan QR Code to raise the emergency"),(0,r.kt)("li",{parentName:"ul"},"Users will get connected to the Pococare Agent via Call routing"),(0,r.kt)("li",{parentName:"ul"},"Pococare Agent will know the details of beneficiary for which the QR code is scanned."),(0,r.kt)("li",{parentName:"ul"},"Pococare Agent will get a list of hospitals that are around the area shared by the scanner. ")),(0,r.kt)("h2",{id:"user-type"},"User Type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beneficiary Users: User who are added as Family member/beneficiary including self on Pococare platform."),(0,r.kt)("li",{parentName:"ul"},"General individuals: People who are/can be around the beneficiary at any particular time"),(0,r.kt)("li",{parentName:"ul"},"Pococare Agents")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unique QR Code for every beneficiary. "),(0,r.kt)("li",{parentName:"ul"},"QR Code can be printed/ saved as Image or Shared via WhatsApp"),(0,r.kt)("li",{parentName:"ul"},"QR code is scanned to raise the Emergency"),(0,r.kt)("li",{parentName:"ul"},"Detect/Ask for the location access of the Scanner"),(0,r.kt)("li",{parentName:"ul"},"Route the phone call between the Scanner and Pococare Agent"),(0,r.kt)("li",{parentName:"ul"},"Timer to identify if the scanner has not provided their Mobile Number")),(0,r.kt)("h2",{id:"screen-descriptions"},"Screen Descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"S.No"),(0,r.kt)("th",{parentName:"tr",align:null},"Screen Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique QR Code screen"),(0,r.kt)("td",{parentName:"tr",align:null},"Text: Scan during my medical emergency ",(0,r.kt)("br",null),"Unique QR code of the beneficiary ",(0,r.kt)("br",null)," Button : \u201cShare\u201d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Location Access Screen"),(0,r.kt)("td",{parentName:"tr",align:null},"Pop up to ask for the location access by the pococare.com ",(0,r.kt)("br",null)," Block ",(0,r.kt)("br",null),"Allow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Insert Phone Number screen"),(0,r.kt)("td",{parentName:"tr",align:null},"Text: Hello from Pococare Heartbeat Team ",(0,r.kt)("br",null),"Thank You for scanning the QR code for the registered beneficiary to notify an emergency. ",(0,r.kt)("br",null),"Please enter your 10 digit mobile number, our agent will call you right away. ",(0,r.kt)("br",null),"Input field: Mobile number input field.",(0,r.kt)("br",null),"Error message to be displayed, if the phone number provided is less than 10 digits. ",(0,r.kt)("br",null),"Button: \u201cReceive Call\u201d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Acknowledgment Screen"),(0,r.kt)("td",{parentName:"tr",align:null},"Thank You Sir/Madam. Pococare heartbeat team has been alerted. We will call you to get more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Call Made to The to Beneficiary Screen"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"user-flow"},"User Flow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"}," Unique QR Generation ")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," User who are registering for first time on the platform "))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"     - Level 1 details of beneficiary are added > A Unique QR code will be generated for all the beneficiaries.\n")),(0,r.kt)("admonition",{parentName:"li",title:"Note :-",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Level 1 details include: Name, Relation, Mobile, City, Pincode"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Beneficiaries added from the Home screen "))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   - Lands on Home screen > Add Beneficiary > Provides Basic details > Save> A unique QR code is generated for the added beneficiary. \n")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"}," Sharing of QR Code for saving as Image/Printing/or Sharing over Message ")," "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   - Lands on Home Screen > Clicks on QR Code Icon for respective beneficiary > Lands on unique QR code screen > Share button > Save as Image\n   - Lands on Home Screen > Clicks on QR Code Icon for respective beneficiary > Lands on unique QR code screen > Share button > Print\n   - Lands on Home Screen > Clicks on QR Code Icon for respective beneficiary > Lands on unique QR code screen > Share button > Send over WhatsApp\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"}," Scanning of QR to raise Emergency request: ")," "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Scanner provides the Mobile Number and Location Access "))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  - Unique QR Code > Scanned by Nearby/passerby individual > Scanner lands on Location access Screen > Allows the location access > Insert the mobile Number > Thank You screen. \n")),(0,r.kt)("p",{parentName:"li"},"  Once the location access and Mobile number is provided by the scanner ",(0,r.kt)("br",null)," Pococare heartbeat team get an alert, and a call is routed between the Pococare Agent and the number provided by the Scanner. Pococare team gets the details of the beneficiary for whom the emergency is raised and also gets the list of nearby hospital around the location provided by the Scanner.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Scanner provides the Mobile Number but not location Access "))," "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   - Unique QR Code > Scanned by Nearby/passerby individual > Scanner lands on Location access Screen > Blocks the location access > Insert the mobile Number > Thank You screen.\n")),(0,r.kt)("p",{parentName:"li"},"  Mobile number is provided by the scanner ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"Pococare heartbeat team get an alert, and a call is routed between the Pococare Agent and the number provided by the Scanner. Pococare team gets the details of the beneficiary for whom the emergency is raised")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Scanner does not provide the location access and Mobile Number "))," "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"   - Unique QR Code > Scanned by Nearby/passerby individual > Scanner lands on Location access Screen > Blocks the location access > Does not Insert the mobile Number > Call made to beneficiary Screen\n")),(0,r.kt)("p",{parentName:"li"},"  If the scanner is not providing their mobile number, then the call will be routed between the Pococare Agent and Beneficiary for whom the QR is scanned. The Pococare Agent will not have the list of hospital near to the Scanning location. "))))),(0,r.kt)("h2",{id:"design-specs"},"Design Specs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wireframe"),(0,r.kt)("li",{parentName:"ul"},"Design")),(0,r.kt)("h2",{id:"technical-specifications"},"Technical Specifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Front End: "),(0,r.kt)("li",{parentName:"ul"},"Back End: "),(0,r.kt)("li",{parentName:"ul"},"Database: "),(0,r.kt)("li",{parentName:"ul"},"Call Routing API"),(0,r.kt)("li",{parentName:"ul"},"Location identification API"),(0,r.kt)("li",{parentName:"ul"},"Hospital Listing API")),(0,r.kt)("h2",{id:"non-functional-requirements"},"Non-Functional requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QR should be scanned by every camera device having scanning functionality. "),(0,r.kt)("li",{parentName:"ul"},"The location access should be as precise as possible")))}p.isMDXComponent=!0}}]);