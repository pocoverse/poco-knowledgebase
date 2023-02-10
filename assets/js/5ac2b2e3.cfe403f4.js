"use strict";(self.webpackChunkpoco_knowledgebase=self.webpackChunkpoco_knowledgebase||[]).push([[4709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=i,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6399:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2},l="Test Suite | Add Beneficiary",o={unversionedId:"Test-Cases/PRD-Add-Beneficiary",id:"Test-Cases/PRD-Add-Beneficiary",title:"Test Suite | Add Beneficiary",description:"Add Beneficiary Screen",source:"@site/docs/Test-Cases/PRD-Add-Beneficiary.mdx",sourceDirName:"Test-Cases",slug:"/Test-Cases/PRD-Add-Beneficiary",permalink:"/poco-knowledgebase/docs/Test-Cases/PRD-Add-Beneficiary",draft:!1,editUrl:"https://github.com/vcpoco/poco-knowledgebase/tree/master/docs/Test-Cases/PRD-Add-Beneficiary.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Test Suite | User Registration & Login",permalink:"/poco-knowledgebase/docs/Test-Cases/PRD-user-registeration-login"},next:{title:"Test Suite | Emergency QR Code",permalink:"/poco-knowledgebase/docs/Test-Cases/PRD-Emergency-QR"}},s={},u=[{value:"Add Beneficiary Screen",id:"add-beneficiary-screen",level:2},{value:"Add Beneficiary Minimum Details Page or Beneficiary L1 Details screen",id:"add-beneficiary-minimum-details-page-or-beneficiary-l1-details-screen",level:2},{value:"Home screen",id:"home-screen",level:2},{value:"Add Beneficiary Details Screen",id:"add-beneficiary-details-screen",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-suite--add-beneficiary"},"Test Suite | Add Beneficiary"),(0,i.kt)("h2",{id:"add-beneficiary-screen"},"Add Beneficiary Screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"List of relationships with checkbox to enable it "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  - Father \n  - Mother \n  - Spouse  \n  - Daughter \n  - Son \n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check box against beneficiary relation will enable/disable the \u201cFull Name\u201d field"),(0,i.kt)("li",{parentName:"ul"},"Name field should not allow numbers or special characters except \u201cspaces\u201d and \u201c.\u201d and should be at least 3 characters long."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Buttons to add another Daughter & Son"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Clicking on Daughter will add a Daughter and Son will add Son"),(0,i.kt)("li",{parentName:"ul"},"Ability to remove the Son/Daughter fields created"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Page message \u201cFamily members you want to make Emergency Ready\u201d"))),(0,i.kt)("h2",{id:"add-beneficiary-minimum-details-page-or-beneficiary-l1-details-screen"},"Add Beneficiary Minimum Details Page or Beneficiary L1 Details screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All the beneficiaries added in the \u201cAdd Beneficiary\u201d page must be listed with their names and relation with subscriber and fields of Phone Number, City and Pincode to be filled"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Subscriber himself is a beneficiary with his Name, Relationship (Self), Mobile, City and Pincode pre-filled"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"City name field should not allow numbers or special characters except \u201cspaces\u201d and should be at least 3 characters long.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pincode must be validated as per Indian Pincode system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mobile field must accept valid mobile number ie. 10 digits. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mobile number field must not accept alphabets."),(0,i.kt)("li",{parentName:"ul"},"Country code prefix must be set by the user by selecting the country drop down."),(0,i.kt)("li",{parentName:"ul"},"Default country must be set to India (+91)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u201cSave\u201d button must be disabled till the required details are not filled and validated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Users must be alerted of any wrong or empty field.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upon clicking \u201cSave\u201d button the user should be shown a success message and then redirected to \u201cHome\u201d screen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Page message \u201cLet us know more about your beneficiary/Beneficiaries\u201d"))),(0,i.kt)("h2",{id:"home-screen"},"Home screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI Components",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pococare logo positioned at top left corner. Should redirect to \u201cHome\u201d when clicked"),(0,i.kt)("li",{parentName:"ul"},"Account button positioned at top right corner. "),(0,i.kt)("li",{parentName:"ul"},"Home button positioned at top right corner."),(0,i.kt)("li",{parentName:"ul"},"Congratulations message\n\u201c Congratulations {Subscriber Name}. Welcome to the movement to make Indian Emergency ready.\nYour peace of mind assurance for the entire family.\u201d"),(0,i.kt)("li",{parentName:"ul"},"Table of beneficiaries with Name, Relation, Mobile, City"),(0,i.kt)("li",{parentName:"ul"},"Message before Beneficiary cards \u201c{Subscriber Name}\u2019s Beneficiary/Beneficiaries, You have completed Level 1 details and can use the unique QR code in case of an actual emergency to reach us.\u201d"),(0,i.kt)("li",{parentName:"ul"},"Beneficiary cards with Name, Avatar, Relation, QRCode & Edit button",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Clicking on the QRCode opens a popup and QRCode 2 (Emergency QRCode) is displayed."),(0,i.kt)("li",{parentName:"ul"},"QRCode must be downloadable and printable from the pop up."),(0,i.kt)("li",{parentName:"ul"},"Edit button launches the \u201cAdd Ben Full Details\u201d page with the data from the database."))),(0,i.kt)("li",{parentName:"ul"},"Add Beneficiary button should launch the \u201cAdd Ben Full Details\u201d page with empty fields.")))),(0,i.kt)("h2",{id:"add-beneficiary-details-screen"},"Add Beneficiary Details Screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI Components",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Message \u201cPlease add the required details to help us to be there for you at all times. We need just 10 minutes of your precious time and we are also available over phone and WhatsApp to help you to fill the form.\u201d"),(0,i.kt)("li",{parentName:"ul"},"Preview Profile CTA in top right corner.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"}))),(0,i.kt)("li",{parentName:"ul"},"Form progress status on the left.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On clicking on a Section heading the user needs to be taken to that portion of the form"))))),(0,i.kt)("li",{parentName:"ul"},"Basic Details",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Profile pic on Top Right. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Upload/Change profile pic"))),(0,i.kt)("li",{parentName:"ul"},"Relationship to the subscriber",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Mother \n- Father \n- Father-in-law \n- Mother-in-law \n- Grand Mother \n- Grand Father \n- Spouse \n- Son \n- Daughter \n- Son-in-law \n- Daughter-in-law \n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Full name: Name field should not allow numbers or special characters except \u201cspaces\u201d and \u201c.\u201d and  should be at least 3 characters long."),(0,i.kt)("li",{parentName:"ul"},"Gender (Type Single select): Male, Female, Others"),(0,i.kt)("li",{parentName:"ul"},"Date of birth: Opens a date picker"),(0,i.kt)("li",{parentName:"ul"},"Email: Must accept valid email addresses ",(0,i.kt)("a",{parentName:"li",href:"mailto:xxx@domain.tld"},"xxx@domain.tld")," should be the format. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If an invalid email address is entered the user must be alerted on the window."))))),(0,i.kt)("li",{parentName:"ul"},"Phone number: Mobile field must accept valid mobile number ie. 10 digits. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mobile number field must not accept alphabets.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Country code prefix set by the user by selecting the country "))),(0,i.kt)("li",{parentName:"ul"},"Default country must be set to India (+91)"))),(0,i.kt)("li",{parentName:"ul"},"Toggle: \u201c WhatsApp number is same as Mobile Number\u201d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Toggle should hide/unhide another Mobile number field"),(0,i.kt)("li",{parentName:"ul"},"Toggle in ON state will set Mobile number as whatsapp number"))),(0,i.kt)("li",{parentName:"ul"},"Employment Status: Radio button",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Full Time \n- Part Time \n- Retired \n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Save button should show a toast and navigate to next step in the form"))),(0,i.kt)("li",{parentName:"ul"},"Next button will navigate to the next step in the form"))),(0,i.kt)("li",{parentName:"ul"},"Add Beneficiary Address: UI Components",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Address cards with details, edit and delete button",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add Address button launches Address Form with Input fields",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Address Line 1"),(0,i.kt)("li",{parentName:"ul"},"Address Line 2"),(0,i.kt)("li",{parentName:"ul"},"Landmark"),(0,i.kt)("li",{parentName:"ul"},"City"),(0,i.kt)("li",{parentName:"ul"},"State"),(0,i.kt)("li",{parentName:"ul"},"Pincode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"}," Ambulance reachability "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"}," Lift availability "))))))))),(0,i.kt)("li",{parentName:"ul"},"Add Emergency Contacts: UI Components",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Full Name: Name field should not allow numbers or special characters except \u201cspaces\u201d and \u201c.\u201d and  should be at least 3 characters long."),(0,i.kt)("li",{parentName:"ul"},"Relation with beneficiary. Drop down",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mother "),(0,i.kt)("li",{parentName:"ul"},"Father "),(0,i.kt)("li",{parentName:"ul"},"Father-in-law "),(0,i.kt)("li",{parentName:"ul"},"Mother-in-law "),(0,i.kt)("li",{parentName:"ul"},"Grand Mother "),(0,i.kt)("li",{parentName:"ul"},"Grand Father "),(0,i.kt)("li",{parentName:"ul"},"Spouse "),(0,i.kt)("li",{parentName:"ul"},"Son "),(0,i.kt)("li",{parentName:"ul"},"Daughter "),(0,i.kt)("li",{parentName:"ul"},"Son-in-law "),(0,i.kt)("li",{parentName:"ul"},"Daughter-in-law "))),(0,i.kt)("li",{parentName:"ul"},"Email: Email field must accept valid email addresses ",(0,i.kt)("a",{parentName:"li",href:"mailto:xxx@domain.tld"},"xxx@domain.tld")," should be the format. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If an invalid email address is entered the user must be alerted on the window."))),(0,i.kt)("li",{parentName:"ul"},"Phone number: Mobile field must accept valid mobile number ie. 10 digits. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mobile number field must not accept alphabets.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Default country must be set to India (+91)"))))),(0,i.kt)("li",{parentName:"ul"},"Toggle: \u201c WhatsApp number is same as Mobile Number\u201d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Toggle should hide/unhide another Mobile number field"),(0,i.kt)("li",{parentName:"ul"},"Toggle in ON state will set Mobile number as whatsapp number"))),(0,i.kt)("li",{parentName:"ul"},"Set as priority contact Radio button."),(0,i.kt)("li",{parentName:"ul"},"Emergency Contact Cards: ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- UI Content      \n    - Name of Emergency contact \n    - Email address \n    - Mobile Number \n    - WhatsApp Number \n    - Edit icon \n    - Delete icon \n- Based on the priority set, each banner will have Primary as a tag. \n"))))),(0,i.kt)("li",{parentName:"ul"},"Add Medical History Step: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Chronic Conditions: Dropdown",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- None \n- Type 2 Diabetes Mellitus \n- Hyper Tension \n- Heart Disease \n- Stroke \n- Cancer \n- Chronic Kidney Disease \n- Asthma \n- Epilepsy/Seizures \n- Cholesterol \n- Dialysis \n- Other \n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Current Medication: Radio: Yes/No"),(0,i.kt)("li",{parentName:"ul"},"If Yes, then text field to enter medication or upload prescription."))),(0,i.kt)("li",{parentName:"ul"},"Allergies to Medication: Radio: Yes/No/I don\u2019t know",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Text box to enter"),(0,i.kt)("li",{parentName:"ul"},"Past Medical/Surgical History: Radio: Yes/No",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If Yes, then text field to enter medication or upload prescription."))),(0,i.kt)("li",{parentName:"ul"},"Recent Hospitalization : Radio: Yes/No",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If Yes, then text field to enter medication or upload prescription."))))),(0,i.kt)("li",{parentName:"ul"},"Differently Abled : Radio: Yes/No"),(0,i.kt)("li",{parentName:"ul"},"If Yes, then text field to enter medication or upload prescription."),(0,i.kt)("li",{parentName:"ul"},"Mobility Status : Dropdown",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Immobile (bed-ridden) \n- Mobile (Able to Move) \n- Assisted Mobility (Walker, Wheelchair) \n")))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Insurance details Step",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Upload Insurance Document"),(0,i.kt)("li",{parentName:"ul"},"Policy ID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Policy ID Alphanumeric."))),(0,i.kt)("li",{parentName:"ul"},"Name of Insurance Company",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Alphanumeric"),(0,i.kt)("li",{parentName:"ul"},"Insurance policy card with Policy ID, Name of Insurance Provider, Edit & Delete button"))))),(0,i.kt)("li",{parentName:"ul"},"Add Preferred hospital Step",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hospital Name must be Alphanumeric"),(0,i.kt)("li",{parentName:"ul"},"Speciality must be Alphanumeric"),(0,i.kt)("li",{parentName:"ul"},"Address"),(0,i.kt)("li",{parentName:"ul"},"Phone number: 10 Digit Numeric "),(0,i.kt)("li",{parentName:"ul"},"Additional number: 10 Digit Numeric"),(0,i.kt)("li",{parentName:"ul"},"Submit and Previous buttons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Submit button submits and saved all the form data"),(0,i.kt)("li",{parentName:"ul"},"Previous button navigates to the previous section of the form"))))),(0,i.kt)("li",{parentName:"ul"},"Preview Profile",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sections: ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Name of Beneficiary\n    - Relation of Beneficiary with registering User\n- Basic Information\n    - Email\n    - Mobile Number\n    - WhatsApp Number\n    - Gender\n    - Date of Birth\n    - Age (Either we should have DoB or Age)\n    - Employment Status\n- Addresses\n    - Address Cards\n- Emergency Contacts\n    - Contact Cards\n- Medical Profile\n- Insurance\n    - Cards\n- Preferred Hospitals\n    - Cards\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Edit button to take the user to the Beneficiary Form")))))))}m.isMDXComponent=!0}}]);