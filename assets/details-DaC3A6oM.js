import{a,L as g,d as p,b as x,j as e,e as l}from"./index-DHJHiuqj.js";import{E,D as j}from"./index-BWQcszTM.js";import{c as D}from"./index-BEuwpjZg.js";function S(){const[i,d]=a.useState({}),{isLoading:f,setLoading:o}=a.useContext(g),[r,c]=a.useState(),{id:s}=p(),u=async()=>{var n;o(!0);try{const t=await D(s);t.data&&d((n=t.data)==null?void 0:n.data)}catch(t){c(t.message||t.response.message)}finally{o(!1)}},m=x();return a.useEffect(()=>{s&&s!="undefined"?u():m("/food-programs")},[]),f?e.jsx(l,{}):r?e.jsx(E,{error:r}):e.jsx(j,{...i})}export{S as default};
