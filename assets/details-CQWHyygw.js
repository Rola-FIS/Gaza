import{a,L as g,d as p,b as x,j as e,e as l}from"./index-DHJHiuqj.js";import{E,D as j}from"./index-BWQcszTM.js";import{c as D}from"./index-BEuwpjZg.js";function S(){const[i,f]=a.useState({}),{isLoading:c,setLoading:r}=a.useContext(g),[o,d]=a.useState(),{id:s}=p(),u=async()=>{var n;r(!0);try{const t=await D(s);t.data&&f((n=t.data)==null?void 0:n.data)}catch(t){d(t.message||t.response.message)}finally{r(!1)}},m=x();return a.useEffect(()=>{s&&s!="undefined"?u():m("/food-programs")},[]),c?e.jsx(l,{}):o?e.jsx(E,{error:o}):e.jsx(j,{...i})}export{S as default};
