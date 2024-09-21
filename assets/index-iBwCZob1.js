import{g as K,m as Z,r as ee,u as f,a as d,C as se,c as le,L as ie,b as re,j as s,B as u}from"./index-DHJHiuqj.js";import{L as te,R as ne,M as oe}from"./index-BcdR0Mqc.js";import{b as m,C as x,g as ce}from"./index-BEuwpjZg.js";const ae=e=>{const{componentCls:i,sizePaddingEdgeHorizontal:a,colorSplit:r,lineWidth:t,textPaddingInline:h,orientationMargin:n,verticalMarginInline:c}=e;return{[i]:Object.assign(Object.assign({},ee(e)),{borderBlockStart:`${f(t)} solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${f(t)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${f(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${i}-with-text`]:{display:"flex",alignItems:"center",margin:`${f(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${f(t)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${i}-with-text-left`]:{"&::before":{width:`calc(${n} * 100%)`},"&::after":{width:`calc(100% - ${n} * 100%)`}},[`&-horizontal${i}-with-text-right`]:{"&::before":{width:`calc(100% - ${n} * 100%)`},"&::after":{width:`calc(${n} * 100%)`}},[`${i}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:h},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${f(t)} 0 0`},[`&-horizontal${i}-with-text${i}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${i}-dashed`]:{borderInlineStartWidth:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:r,borderStyle:"dotted",borderWidth:`${f(t)} 0 0`},[`&-horizontal${i}-with-text${i}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${i}-dotted`]:{borderInlineStartWidth:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${i}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${i}-with-text-left${i}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${i}-inner-text`]:{paddingInlineStart:a}},[`&-horizontal${i}-with-text-right${i}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${i}-inner-text`]:{paddingInlineEnd:a}}})}},me=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),xe=K("Divider",e=>{const i=Z(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[ae(i)]},me,{unitless:{orientationMargin:!0}});var de=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)i.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const B=e=>{const{getPrefixCls:i,direction:a,divider:r}=d.useContext(se),{prefixCls:t,type:h="horizontal",orientation:n="center",orientationMargin:c,className:_,rootClassName:w,children:g,dashed:$,variant:b="solid",plain:S,style:C}=e,z=de(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),o=i("divider",t),[k,I,M]=xe(o),j=!!g,y=n==="left"&&c!=null,v=n==="right"&&c!=null,O=le(o,r==null?void 0:r.className,I,M,`${o}-${h}`,{[`${o}-with-text`]:j,[`${o}-with-text-${n}`]:j,[`${o}-dashed`]:!!$,[`${o}-${b}`]:b!=="solid",[`${o}-plain`]:!!S,[`${o}-rtl`]:a==="rtl",[`${o}-no-default-orientation-margin-left`]:y,[`${o}-no-default-orientation-margin-right`]:v},_,w),N=d.useMemo(()=>typeof c=="number"?c:/^\d+$/.test(c)?Number(c):c,[c]),P=Object.assign(Object.assign({},y&&{marginLeft:N}),v&&{marginRight:N});return k(d.createElement("div",Object.assign({className:O,style:Object.assign(Object.assign({},r==null?void 0:r.style),C)},z,{role:"separator"}),g&&h!=="vertical"&&d.createElement("span",{className:`${o}-inner-text`,style:P},g)))};function pe(){var _,w,g,$,b,S,C,z,o,k,I,M,j,y,v,O,N,P,E,T,W,L,D,H,R,G,V,A,F,Y,Q,U,X,q,J;const[e,i]=d.useState(),[a,r]=d.useState(),{isLoading:t,setLoading:h}=d.useContext(ie),n=re(),c=async()=>{var l;h(!0);try{const p=await ce();p.data&&i((l=p.data)==null?void 0:l.message)}catch(p){r(p.message||p.response.message),console.log(p,"e")}finally{h(!1)}};return d.useEffect(()=>{c()},[]),t?s.jsx(te,{}):a?s.jsxs("div",{className:"font-bold flex flex-col gap-4 text-center mt-16 text-red-500",children:[s.jsx("p",{children:"something went wrong !! check your connection and try again"}),s.jsx("p",{children:a})]}):(console.log(e,"data"),s.jsxs("div",{className:"pb-32",children:[s.jsx("div",{className:" img-cover relative h-[550px] w-full",style:{backgroundImage:`url(${m.concat((e==null?void 0:e.sole_survivor)&&((_=e==null?void 0:e.sole_survivor[0])==null?void 0:_.intro_image))})`},children:s.jsxs("div",{className:"absolute right-4 rounded -bottom-8 h-max-content w-80 bg-orange-300 p-4",children:[s.jsx("h3",{className:" font-bold",children:(e==null?void 0:e.sole_survivor)&&((w=e==null?void 0:e.sole_survivor[0])==null?void 0:w.title)}),s.jsx("p",{className:"leading-relaxed",children:(e==null?void 0:e.sole_survivor)&&((g=e==null?void 0:e.sole_survivor[0])==null?void 0:g.story_description)})]})}),s.jsxs("div",{className:"mt-16 p-6",children:[s.jsx("h2",{className:"underline underline-offset-8 text-lg text-gray-700 font-bold",children:"Quick Statistics"}),s.jsxs("div",{className:"flex mt-10 gap-8 justify-center",children:[s.jsxs(x,{hoverable:!0,bordered:!0,size:"small",className:"flex-0",style:{width:250,height:120,padding:"10px 15px",borderTop:"3px solid orange"},children:[s.jsx("h4",{className:"text-gray-700 font-bold tracking-[1px]",children:"Number of Camps"}),s.jsx("h2",{className:"font-bold text-red-600 ml-2 ",children:(e==null?void 0:e.statistics)&&(($=e==null?void 0:e.statistics)==null?void 0:$.number_of_camps)||0})]}),s.jsxs(x,{hoverable:!0,bordered:!0,size:"small",className:"flex-0",style:{width:250,height:120,padding:"10px 15px",borderTop:"3px solid orange"},children:[s.jsx("h4",{className:"text-gray-700 font-bold tracking-[1px]",children:"Camps In Palestine"}),s.jsx("h2",{className:"font-bold text-red-600 ml-2 ",children:(e==null?void 0:e.statistics)&&((b=e==null?void 0:e.statistics)==null?void 0:b.camps_in_palestine)||0})]}),s.jsxs(x,{hoverable:!0,bordered:!0,size:"small",className:"flex-0",style:{width:250,height:120,padding:"10px 15px",borderTop:"3px solid orange"},children:[s.jsx("h4",{className:"text-gray-700 font-bold tracking-[1px]",children:"Number of Refugees"}),s.jsx("h2",{className:"font-bold text-red-30 ml-2",children:(e==null?void 0:e.statistics)&&((S=e==null?void 0:e.statistics)==null?void 0:S.number_of_refugees)||0})]}),s.jsxs(x,{hoverable:!0,bordered:!0,size:"small",className:"flex-0",style:{width:250,height:120,padding:"10px 15px",borderTop:"3px solid orange"},children:[s.jsx("h4",{className:"text-gray-700 font-bold tracking-[1px]",children:"Refugees In Palestine"}),s.jsx("h2",{className:"font-bold text-red-500 ml-2",children:(e==null?void 0:e.statistics)&&((C=e==null?void 0:e.statistics)==null?void 0:C.refugees_in_palestine)||0})]}),s.jsxs(x,{hoverable:!0,bordered:!0,size:"small",className:"flex-0",style:{width:250,height:120,padding:"10px 15px",borderTop:"3px solid orange"},children:[s.jsx("h4",{className:"text-gray-700 font-bold tracking-[1px]",children:"Refugees out of Palestine"}),s.jsx("h2",{className:"font-bold text-red-400 ml-2",children:(e==null?void 0:e.statistics)&&((z=e==null?void 0:e.statistics)==null?void 0:z.refugees_out_of_palestine)||0})]})]})]}),s.jsxs("div",{className:"mt-10 p-6",children:[s.jsx("h2",{className:"underline underline-offset-8 text-lg text-gray-700 font-bold ",children:"Stories You Should See"}),s.jsx("div",{className:"flex justify-between mt-5",children:s.jsx("p",{className:"text-gray-600 w-[60%] mb-0 ",children:"Israel is trying to wipe out as many Palestinians as possible. This is genocide"})}),s.jsx(ne,{className:"mt-3 p-6",columnsCountBreakPoints:{300:1,750:2,900:4},children:s.jsxs(oe,{gutter:"8px ",children:[" ",(k=(o=e==null?void 0:e.latest_stories)==null?void 0:o.slice(0,8))==null?void 0:k.map(l=>s.jsx(x,{hoverable:!0,bordered:!0,size:"small",className:"relative  group w-full max-w-xs m-1",style:{height:400},cover:s.jsx("img",{alt:"",src:m.concat(l==null?void 0:l.intro_image),className:"object-cover h-48 w-full"}),children:s.jsxs("div",{className:"flex flex-col  p-4",children:[s.jsx("h4",{className:"text-lg font-semibold mb-0",children:l==null?void 0:l.title}),s.jsx("p",{className:"text-gray-500 text-sm",children:l==null?void 0:l.story_description}),s.jsx(u,{onClick:()=>n(`/${l.slug_type}/${l.name}`),className:"bg-orange-300 p-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:"Donate"}),s.jsx("span",{className:"w-max rounded-xl text-gray-500 p-2 text-xs",children:l.published_on})]})}))]})})]}),s.jsxs("div",{className:"mt-6   max-h-[620px] ms-5 me-5  ",children:[s.jsxs("div",{className:"min-h-[420px] flex bg-white rounded-3xl ",children:[s.jsxs("div",{className:"p-6  w-96 flex flex-col leading-relaxed  ",children:[s.jsx("h3",{className:"font-bold",children:(e==null?void 0:e.sole_survivor)&&((I=e==null?void 0:e.sole_survivor[0])==null?void 0:I.title)}),s.jsx("p",{className:" ",children:(e==null?void 0:e.sole_survivor)&&((M=e==null?void 0:e.sole_survivor[0])==null?void 0:M.story_description)})]}),s.jsx("div",{className:"img-opacity relative flex-1 w-32 items-center rounded-l",children:s.jsx("img",{src:m.concat((e==null?void 0:e.sole_survivor)&&((j=e==null?void 0:e.sole_survivor[0])==null?void 0:j.intro_image)),alt:"Background",className:"object-cover w-full h-full "})})]}),s.jsxs("div",{className:"flex mt-2  ",children:[s.jsx("div",{className:"p-6  w-96 flex flex-col leading-relaxed  "}),s.jsx("div",{className:"flex flex-1 w-32 items-center ",children:(v=(y=e==null?void 0:e.sole_survivor)==null?void 0:y.slice(0,4))==null?void 0:v.map(l=>s.jsx(x,{bordered:!0,size:"small",cover:s.jsx("img",{alt:"",src:m.concat(l==null?void 0:l.intro_image)}),hoverable:!0,className:"flex-0 bg-inherit  ",style:{width:300,height:"max-content",padding:"10px 15px"},children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{children:[s.jsx("p",{className:"text-gray-600 font-bold  underline underline-offset-8 ",children:l==null?void 0:l.title}),s.jsx("p",{className:"text-gray-500 text-xs	 ",children:l.published_on})]})})}))})]})]}),s.jsxs("div",{className:"mt-16 pl-10 pt-10 pb-10 pr-0 mb-32 max-h-max",children:[s.jsx("h2",{className:"underline underline-offset-8 text-lg text-gray-700 font-bold flex justify-center",children:"Family Care"}),s.jsxs("div",{className:" flex gap-8 mt-10  min-h-[400px] ",children:[s.jsx("div",{className:" flex-1 w-[55%] max-h-[500px] ",children:s.jsxs("div",{className:"flex flex-col gap-2  ",children:[s.jsxs("div",{className:"relative",children:[s.jsx("img",{alt:"",src:m.concat((e==null?void 0:e.family_care)&&((O=e==null?void 0:e.family_care[0])==null?void 0:O.intro_image)),className:"rounded w-[100%] object-cover  max-h-[350px]"}),s.jsx("h3",{className:" ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white",children:(e==null?void 0:e.family_care)&&((N=e==null?void 0:e.family_care[0])==null?void 0:N.title)})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-gray-500",children:(e==null?void 0:e.family_care)&&((P=e==null?void 0:e.family_care[0])==null?void 0:P.story_description)}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:" w-max rounded-xl text-gray-500 p-1",style:{fontSize:"10px"},children:(e==null?void 0:e.family_care)&&((E=e==null?void 0:e.family_care[0])==null?void 0:E.published_on)}),s.jsx(u,{onClick:()=>{var l;return n(`/family-care/${(e==null?void 0:e.family_care)&&((l=e==null?void 0:e.family_care[0])==null?void 0:l.name)}`)},className:"bg-orange-300 w-32 text-white font-bold ",children:"Donate"})]})]})]})}),s.jsx("div",{className:"flex flex-col w-[25%]   max-h-[400px]",children:s.jsxs("div",{className:"flex flex-col  gap-4 ",children:[s.jsxs("div",{className:"w-[80%] flex flex-col gap-2  max-h-[400px]",children:[s.jsxs("div",{className:"relative",children:[s.jsx("img",{alt:"",src:m.concat((e==null?void 0:e.family_care)&&((T=e==null?void 0:e.family_care[1])==null?void 0:T.intro_image)),className:"rounded w-full object-cover    max-h-[200px] "}),s.jsx("h3",{className:" ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white",children:(e==null?void 0:e.family_care)&&((W=e==null?void 0:e.family_care[1])==null?void 0:W.title)})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-gray-500",children:(e==null?void 0:e.family_care)&&((L=e==null?void 0:e.family_care[0])==null?void 0:L.story_description)}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:" w-max rounded-xl text-gray-500 p-1",style:{fontSize:"12px"},children:(e==null?void 0:e.family_care)&&((D=e==null?void 0:e.family_care[1])==null?void 0:D.published_on)}),s.jsx(u,{onClick:()=>{var l;return n(`/family-care/${(e==null?void 0:e.family_care)&&((l=e==null?void 0:e.family_care[1])==null?void 0:l.name)}`)},className:"bg-orange-300 w-32 text-white font-bold ",children:"Donate"})]})]})]}),s.jsxs("div",{className:"w-[80%] flex flex-col gap-2 ",children:[s.jsxs("div",{className:"relative",children:[s.jsx("img",{alt:"",src:m.concat((e==null?void 0:e.family_care)&&((H=e==null?void 0:e.family_care[2])==null?void 0:H.intro_image)),className:"rounded w-full object-cover  max-h-[200px] "}),s.jsx("h3",{className:" ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white",children:(e==null?void 0:e.family_care)&&((R=e==null?void 0:e.family_care[2])==null?void 0:R.title)})]}),s.jsxs("div",{children:[s.jsx("p",{className:"text-gray-500",children:(e==null?void 0:e.family_care)&&((G=e==null?void 0:e.family_care[2])==null?void 0:G.story_description)}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:" w-max rounded-xl text-gray-500 p-1",style:{fontSize:"12px"},children:(e==null?void 0:e.family_care)&&((V=e==null?void 0:e.family_care[2])==null?void 0:V.published_on)}),s.jsx(u,{onClick:()=>{var l;return n(`/family-care/${(e==null?void 0:e.family_care)&&((l=e==null?void 0:e.family_care[2])==null?void 0:l.name)}`)},className:"bg-orange-300 w-32 text-white font-bold ",children:"Donate"})]})]})]})]})})]})]}),s.jsxs("section",{className:"mt-16 bg-[#203b51e0] pt-6 pb-6",children:[s.jsx(B,{style:{backgroundColor:"white"}}),s.jsx("h2",{className:"pl-6 text-white text-lg text-gray-700 font-bold ",children:"War Victim Care"}),s.jsx("div",{className:"pl-6 flex gap-4 max-w-full	 overflow-x-auto	",children:(F=(A=e==null?void 0:e.war_victims_care)==null?void 0:A.slice(0,5))==null?void 0:F.map(l=>s.jsx(x,{hoverable:!0,size:"small",cover:s.jsx("img",{alt:"",src:m.concat(l==null?void 0:l.intro_image)}),bordered:!0,onClick:()=>n(`/war-victims-care/${l.name}`),className:"flex-0 bg-gray-30",style:{width:300,height:"300"},children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{className:" flex flex-col justify-between",children:[s.jsx("p",{className:"text-gray-600 font-bold  underline underline-offset-8 ",children:l==null?void 0:l.title}),s.jsx("p",{className:"text-gray-500 text-xs	mb-0 ",children:l==null?void 0:l.published_on})]})})}))}),s.jsx(B,{style:{backgroundColor:"white"}})]}),s.jsxs("section",{className:"mt-10 pl-6 pr-6 ",children:[s.jsx("h2",{className:"underline underline-offset-8 text-lg text-gray-700 font-bold flex ",children:"Food Program"}),s.jsxs("div",{className:"flex gap-6 mt-10 pl-10 pr-10",children:[s.jsx("img",{alt:"",src:m.concat((e==null?void 0:e.food_program)&&((Y=e==null?void 0:e.food_program[0])==null?void 0:Y.intro_image)),className:"rounded w-full  object-cover object-center flex-1 max-h-[500px]	 "}),s.jsxs("div",{className:"flex    flex-col gap-4	",children:[s.jsx("h3",{className:"font-semibold",children:(e==null?void 0:e.food_program)&&((Q=e==null?void 0:e.food_program[0])==null?void 0:Q.title)}),s.jsx("p",{className:"w-96 tracking-[2px] text-xs",children:(e==null?void 0:e.food_program)&&((U=e==null?void 0:e.food_program[0])==null?void 0:U.story_description)}),s.jsx(u,{className:"w-32 mt-8",onClick:()=>n("/food-programs"),children:"See More"})]})]})]}),s.jsx(B,{style:{backgroundColor:"#c7b9b9",width:"3px"}}),s.jsxs("section",{className:"mt-16 pl-6 pr-6 ",children:[s.jsx("h2",{className:"underline underline-offset-8 text-lg text-gray-700 font-bold flex  ",children:"Water Supply"}),s.jsxs("div",{className:"flex gap-6 mt-10 pl-10 pr-10",children:[s.jsxs("div",{className:"flex    flex-col gap-4	",children:[s.jsx("h3",{className:"font-semibold",children:(e==null?void 0:e.water_program)&&((X=e==null?void 0:e.water_program[0])==null?void 0:X.title)}),s.jsx("p",{className:"w-96 tracking-[2px] text-xs",children:(e==null?void 0:e.water_program)&&((q=e==null?void 0:e.water_program[0])==null?void 0:q.story_description)}),s.jsx(u,{className:"w-32 mt-8",onClick:()=>n("/water-programs"),children:"See More"})]}),s.jsx("img",{alt:"",src:m.concat((e==null?void 0:e.water_program)&&((J=e==null?void 0:e.water_program[0])==null?void 0:J.intro_image)),className:"rounded w-full  object-cover object-center flex-1 max-h-[500px]	 "})]})]})]}))}export{pe as default};
