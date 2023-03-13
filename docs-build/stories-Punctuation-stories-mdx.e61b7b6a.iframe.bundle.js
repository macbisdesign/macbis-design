"use strict";(self.webpackChunkmacbisdesign=self.webpackChunkmacbisdesign||[]).push([[443],{"./src/stories/Punctuation.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return Punctuation_stories}});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),Tabs=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js"),Tab=__webpack_require__("./node_modules/@mui/material/Tab/Tab.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TabPanel(props){const{children:children,value:value,index:index,...other}=props;return(0,jsx_runtime.jsx)("div",{role:"tabpanel",hidden:value!==index,id:`simple-tabpanel-${index}`,"aria-labelledby":`simple-tab-${index}`,...other,children:value===index&&(0,jsx_runtime.jsx)(Box.Z,{sx:{p:3},children:(0,jsx_runtime.jsx)(Typography.Z,{children:children})})})}function a11yProps(index){return{id:`simple-tab-${index}`,"aria-controls":`simple-tabpanel-${index}`}}function PunctuationTabs(){const[value,setValue]=react.useState(0);return(0,jsx_runtime.jsx)("div",{style:{borderRadius:"4px",boxShadow:"0px 2px 6px rgba(0, 0, 0, 0.1)",padding:"4rem 20px",border:"1px solid hsla(203, 50%, 30%, 0.15)"},children:(0,jsx_runtime.jsxs)(Box.Z,{sx:{width:"100%"},children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,jsx_runtime.jsxs)(Tabs.Z,{value:value,onChange:(event,newValue)=>{setValue(newValue)},variant:"scrollable",scrollButtons:"auto","aria-label":"basic tabs example",children:[(0,jsx_runtime.jsx)(Tab.Z,{label:"Bullet Points",...a11yProps(0)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Colons",...a11yProps(1)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Commas",...a11yProps(2)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Contractions",...a11yProps(3)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Dashes",...a11yProps(4)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Exclamation marks",...a11yProps(5)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Hyphens",...a11yProps(6)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Periods",...a11yProps(7)}),(0,jsx_runtime.jsx)(Tab.Z,{label:"Quotation marks",...a11yProps(8)})]})}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:0,children:[(0,jsx_runtime.jsx)("h2",{children:"Bullet Points"}),(0,jsx_runtime.jsx)("h3",{children:"General Guidance"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Capitalize first word"}),(0,jsx_runtime.jsx)("li",{children:"Keep them brief"}),(0,jsx_runtime.jsx)("li",{children:"Stick with standard bullets and avoid nesting "}),(0,jsx_runtime.jsx)("li",{children:"Only add a period at the end if the bullet is a complete sentence."}),(0,jsx_runtime.jsx)("li",{children:"Be consistent within a list. Either make each bullet a complete sentence, or make them all not sentences. This list is not a good example of that guidance."})]}),"Use sentence case (only capitalize the first word and proper nouns and acronyms) in titles, headings, menu items, labels, and buttons."]}),(0,jsx_runtime.jsx)("h3",{children:"Accessibility Notes"}),(0,jsx_runtime.jsx)("p",{children:"Breaking up larger blocks of text makes it easier to scan and read. Screen readers recognize bullets, but won’t always distinguish between levels of indentation, so avoid nesting bullets within a list."})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:1,children:[(0,jsx_runtime.jsx)("h2",{children:"Colons"}),(0,jsx_runtime.jsx)("p",{children:"Colons can be used to introduce a bulleted list or numbered steps."})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:2,children:[(0,jsx_runtime.jsx)("h2",{children:"Commas"}),(0,jsx_runtime.jsx)("h3",{children:"General Guidance"}),(0,jsx_runtime.jsx)("p",{children:"Use a serial (or “Oxford”) comma to separate items in a list. Don’t use commas in place of connecting words like “and,” “or,” “because,” and so on."}),(0,jsx_runtime.jsx)("h3",{children:"Examples"}),(0,jsx_runtime.jsx)("p",{children:"[To be added]"})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:3,children:[(0,jsx_runtime.jsx)("h2",{children:"Contractions"}),(0,jsx_runtime.jsx)("h3",{children:"General Guidance"}),(0,jsx_runtime.jsxs)("p",{children:["Use common contractions; they convey a more conversational tone. Common contractions include:",(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Can’t, won’t, wouldn’t"}),(0,jsx_runtime.jsx)("li",{children:"It’s, that’s, who’s"}),(0,jsx_runtime.jsx)("li",{children:"They’re, we’re"})]})]})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:4,children:[(0,jsx_runtime.jsx)("h2",{children:"Dashes"}),(0,jsx_runtime.jsx)("h3",{children:"General Guidance"}),(0,jsx_runtime.jsx)("p",{children:"There are three similar-looking dash types, but they have distinct applications."}),(0,jsx_runtime.jsx)("h3",{children:"Em dash"}),(0,jsx_runtime.jsx)("p",{children:"Em dashes are similar to parentheses or commas: use one at the beginning and end of a clause when commas would make the sentence confusing. They should be used sparingly. If there’s a way to simplify or break apart a sentence to make it easier to understand, that’s always better than adding more punctuation."}),(0,jsx_runtime.jsx)("h3",{children:"En Dash"}),(0,jsx_runtime.jsx)("p",{children:"En dashes are used to indicate a range of things. Leave a space between the en dash and words or numbers on either side of it."}),(0,jsx_runtime.jsx)("h3",{children:"Hyphens"}),(0,jsx_runtime.jsx)("p",{children:"The shortest dash, a hyphen connects words that modify a noun. It can also be used in long strings of numbers or letters to create visual breaks. No spaces between the words and the hyphen."}),(0,jsx_runtime.jsx)("h3",{children:"Accessibility notes"}),(0,jsx_runtime.jsx)("p",{children:"Screen readers do not reliably read dashes the same way. If there is a clear way to do it, it is preferable to write content without dashes. For example, instead of Monday - Friday, write Monday to Friday."})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:5,children:[(0,jsx_runtime.jsx)("h2",{children:"Exclamation marks"}),(0,jsx_runtime.jsx)("p",{children:"Depending on the situation, exclamation marks can cause users anxiety. If we use them, it should be in the context of a decisively positive action, such as completing a complicated series of tasks."})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:6,children:[(0,jsx_runtime.jsx)("h2",{children:"Hyphens"}),(0,jsx_runtime.jsxs)("p",{children:["See ",(0,jsx_runtime.jsx)("a",{children:"dashes."})]})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:7,children:[(0,jsx_runtime.jsx)("h2",{children:"Periods"}),(0,jsx_runtime.jsx)("h3",{children:"General Guidance"}),(0,jsx_runtime.jsx)("p",{children:"Avoid periods in headers, titles, buttons, field descriptions, and menu names."}),(0,jsx_runtime.jsx)("p",{children:"Only use periods in a bulleted list when each item in the list is a complete sentence."})]}),(0,jsx_runtime.jsxs)(TabPanel,{value:value,index:8,children:[(0,jsx_runtime.jsx)("h2",{children:"Quotation marks"}),(0,jsx_runtime.jsx)("h3",{children:"General Guidance"}),(0,jsx_runtime.jsx)("p",{children:"Use quotation marks for direct quotes. Don’t use them to denote UI labels."})]})]})})}TabPanel.displayName="TabPanel",PunctuationTabs.displayName="PunctuationTabs",PunctuationTabs.__docgenInfo={description:"",methods:[],displayName:"PunctuationTabs"};var dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Content/Punctuation",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Content/Punctuation"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"punctuation",children:"Punctuation"}),"\n",(0,jsx_runtime.jsx)(PunctuationTabs,{})]})}}};var Punctuation_stories=componentMeta}}]);