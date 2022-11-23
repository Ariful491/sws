import{o as d,g as x,F as v,q as N,c as j,n as S,b as o,L as M,k as f,d as t,t as s,i as _,u as B,a as u,w as p,H as I,p as h,f as w,e as k,h as $,s as C,x as V}from"./app.be0612ae.js";import{_ as z}from"./AuthenticatedLayout.7aff926e.js";import{_ as T,a as U}from"./InputLabel.67936cca.js";import{_ as E}from"./PrimaryButton.4e94481a.js";import"./ApplicationLogo.1207fcd1.js";const H={key:0,class:"flex shadow-md bg-white border-t rounded-xl py-2 justify-center mt-4 space-x-4"},A={__name:"Pagination",props:{data:{type:Object,default:()=>({})}},setup(e){return(r,n)=>e.data.links.length>3?(d(),x("div",H,[(d(!0),x(v,null,N(e.data.links,(l,c)=>(d(),j(o(M),{key:c,class:S(["px-4 py-3 text-sm leading-4 bg-white rounded hover:bg-white focus:text-indigo-500 hover:shadow",{"bg-indigo-200 text-red":l.active}]),href:l.url,innerHTML:l.label},null,8,["class","href","innerHTML"]))),128))])):f("",!0)}},O={key:0,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},R=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),P={class:"fixed inset-0 z-10 overflow-y-auto"},q={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Q={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-screen-xl"},Y={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Z={class:"sm:flex sm:items-start"},G={class:"px-3 mr-4 py-5"},J={class:"max-w-md divide-y divide-gray-200 dark:divide-gray-700"},K={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},W={class:"flex items-center space-x-4"},X=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," ID ")],-1),tt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},et={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},st={class:"flex items-center space-x-4"},at=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," City ")],-1),ot={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},it={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},lt={class:"flex items-center space-x-4"},dt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," City Ascii ")],-1),nt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},rt={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},ct={class:"flex items-center space-x-4"},xt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," State Id ")],-1),mt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},_t={class:"px-3 mr-4 py-5"},ut={class:"max-w-md divide-y divide-gray-200 dark:divide-gray-700"},ht={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},gt={class:"flex items-center space-x-4"},yt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," State Name ")],-1),pt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},ft={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},bt={class:"flex items-center space-x-4"},vt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," County Fips ")],-1),wt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},kt={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},$t={class:"flex items-center space-x-4"},Ct=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," County Name ")],-1),Nt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},jt={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},St={class:"flex items-center space-x-4"},Mt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Latitude ")],-1),Dt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},Ft={class:"px-3 mr-4 py-5"},Lt={class:"max-w-md divide-y divide-gray-200 dark:divide-gray-700"},Bt={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},It={class:"flex items-center space-x-4"},Vt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Longitude ")],-1),zt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},Tt={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},Ut={class:"flex items-center space-x-4"},Et=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Population ")],-1),Ht={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},At={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},Ot={class:"flex items-center space-x-4"},Rt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Density ")],-1),Pt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},qt={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},Qt={class:"flex items-center space-x-4"},Yt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Source ")],-1),Zt={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},Gt={class:"px-3 mr-4 py-5"},Jt={class:"max-w-md divide-y divide-gray-200 dark:divide-gray-700"},Kt={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},Wt={class:"flex items-center space-x-4"},Xt=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Military ")],-1),te={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},ee={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},se={class:"flex items-center space-x-4"},ae=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Incorporated ")],-1),oe={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},ie={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},le={class:"flex items-center space-x-4"},de=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Timezone ")],-1),ne={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},re={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},ce={class:"flex items-center space-x-4"},xe=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Ranking ")],-1),me={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},_e={class:"px-3 mr-4 py-5"},ue={class:"max-w-md divide-y divide-gray-200 dark:divide-gray-700"},he={class:"px-2 py-3 m-2 shadow rounded-lg sm:pb-4"},ge={class:"flex items-center space-x-4"},ye=t("div",{class:"flex-1 min-w-0"},[t("p",{class:"font-extrabold text-gray-900 truncate dark:text-gray-400"}," Zips ")],-1),pe={class:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"},fe={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},be={__name:"CustomModal",props:{item:Object},setup(e){return(r,n)=>e.item?(d(),x("div",O,[R,t("div",P,[t("div",q,[t("div",Q,[t("div",Y,[t("div",Z,[t("div",G,[t("ul",J,[t("li",K,[t("div",W,[X,t("div",tt,s(e.item.id),1)])]),t("li",et,[t("div",st,[at,t("div",ot,s(e.item.city),1)])]),t("li",it,[t("div",lt,[dt,t("div",nt,s(e.item.city_ascii),1)])]),t("li",rt,[t("div",ct,[xt,t("div",mt,s(e.item.state_id),1)])])])]),t("div",_t,[t("ul",ut,[t("li",ht,[t("div",gt,[yt,t("div",pt,s(e.item.state_name),1)])]),t("li",ft,[t("div",bt,[vt,t("div",wt,s(e.item.countu_filps),1)])]),t("li",kt,[t("div",$t,[Ct,t("div",Nt,s(e.item.county_name),1)])]),t("li",jt,[t("div",St,[Mt,t("div",Dt,s(e.item.lat),1)])])])]),t("div",Ft,[t("ul",Lt,[t("li",Bt,[t("div",It,[Vt,t("div",zt,s(e.item.lng),1)])]),t("li",Tt,[t("div",Ut,[Et,t("div",Ht,s(e.item.population),1)])]),t("li",At,[t("div",Ot,[Rt,t("div",Pt,s(e.item.density),1)])]),t("li",qt,[t("div",Qt,[Yt,t("div",Zt,s(e.item.source),1)])])])]),t("div",Gt,[t("ul",Jt,[t("li",Kt,[t("div",Wt,[Xt,t("div",te,s(e.item.military),1)])]),t("li",ee,[t("div",se,[ae,t("div",oe,s(e.item.incorporated),1)])]),t("li",ie,[t("div",le,[de,t("div",ne,s(e.item.timezone),1)])]),t("li",re,[t("div",ce,[xe,t("div",me,s(e.item.ranking),1)])])])]),t("div",_e,[t("ul",ue,[t("li",he,[t("div",ge,[ye,t("div",pe,s(e.item.zips),1)])])])])])]),t("div",fe,[t("button",{type:"button",onClick:n[0]||(n[0]=l=>r.$emit("modalNull")),class:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"},"Close")])])])])])):f("",!0)}},ve=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," City ",-1),we={class:"py-12"},ke={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},$e={class:"bg-white p-2 overflow-hidden shadow-sm sm:rounded-lg"},Ce={key:0,class:"bg-green-100 rounded flex w-1/2 mx-auto my-5 transition-all justify-between px-3 py-3 shadow-md",role:"alert"},Ne={class:"h-6 transition-all text-gray-700 font-bold"},je=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 text-gray-600 font-bold cursor-pointer hover:text-gray-900 transition-all h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Se=[je],Me={key:1,class:"bg-red-100 rounded flex w-1/2 mx-auto my-5 transition-all justify-between px-3 py-3 shadow-md",role:"alert"},De={class:"h-6 transition-all text-gray-700 font-bold"},Fe=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 text-gray-600 font-bold cursor-pointer hover:text-gray-900 transition-all h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Le=[Fe],Be=["onSubmit"],Ie={class:"px-4 my-3 block flex justify-center"},Ve={class:"my-auto px-6"},ze=t("input",{class:"block ring-4 ring-gray-100 text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"excel",name:"excel_file",type:"file"},null,-1),Te={class:"flex items-center"},Ue=t("hr",null,null,-1),Ee=["onSubmit"],He={class:"px-4 my-3 block flex justify-center"},Ae=t("div",{class:"my-auto"},[t("label",{class:"text-gray-500 mr-5"}," State Name : ")],-1),Oe={class:"mr-60"},Re=t("div",{class:"my-auto"},[t("label",{class:"text-gray-500 mr-5"}," County Name : ")],-1),Pe=t("div",null,[t("button",{type:"submit",class:"px-4 ring ring-indigo-500 ring-4 bg-indigo-800 py-2 text-white border-2 hover:ring-indigo-900 hover:bg-gray-700 hover:transition-all rounded-xl ml-3"}," Search")],-1),qe=t("hr",null,null,-1),Qe={class:"p-6 bg-white border mt-4 rounded-3xl shadow border-gray-100"},Ye={class:"overflow-x-auto relative shadow-md sm:rounded-lg"},Ze={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},Ge=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"py-3 px-6"}," # "),t("th",{scope:"col",class:"py-3 px-6"}," City "),t("th",{scope:"col",class:"py-3 px-6"}," State Name "),t("th",{scope:"col",class:"py-3 px-6"}," County Name "),t("th",{scope:"col",class:"py-3 px-6 text-center"},[t("span",null," Action ")])])],-1),Je={scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Ke={class:"py-4 px-6"},We={class:"py-4 px-6"},Xe={class:"py-4 px-6"},ts={class:"py-4 px-6 text-center"},es=["onClick"],ns={__name:"Index",props:{items:Object},setup(e){let r=_("Upload"),n=_(!1),l=_(""),c=_(""),m=_(""),g=_(route().params.state),y=_(route().params.county);const D=B({excelFile:""}),F=()=>{n.value=!0,r.value="uploading";let b=document.getElementById("file_input"),i=new FormData(b);axios.post("/cities",i).then(function(a){n.value=!1,r.value="Done",l.value=a.data.success,console.log(a),document.getElementById("excel").value=null}).catch(function(a){n.value=!1,r.value="Upload Again",c.value=a.response.data.errors.excel_file[0]})};function L(){V.Inertia.visit("cities",{data:{state:g.value,county:y.value}})}return(b,i)=>(d(),x(v,null,[u(o(I),{title:"Dashboard"}),u(z,null,{header:p(()=>[ve]),default:p(()=>[t("div",we,[t("div",ke,[t("div",$e,[o(l)?(d(),x("div",Ce,[t("div",Ne,s(o(l)),1),t("div",{onClick:i[0]||(i[0]=a=>h(l)?l.value="":l="")},Se)])):f("",!0),o(c)?(d(),x("div",Me,[t("div",De,s(o(c)),1),t("div",{onClick:i[1]||(i[1]=a=>h(c)?c.value="":c="")},Le)])):f("",!0),t("form",{onSubmit:w(F,["prevent"]),id:"file_input"},[t("div",Ie,[t("div",Ve,[u(T,{for:"excel",value:"Upload Your Excel File : "})]),t("div",null,[ze,u(U,{class:"mt-2",message:o(D).errors.excelFile},null,8,["message"])]),t("div",Te,[(d(),j(E,{class:S(["ml-4",{"opacity-25":o(n)}]),key:o(r),disabled:o(n)},{default:p(()=>[k(s(o(r)),1)]),_:1},8,["class","disabled"]))])])],40,Be),Ue,t("form",{onSubmit:w(L,["prevent"])},[t("div",He,[Ae,t("div",Oe,[$(t("input",{placeholder:"State Name","onUpdate:modelValue":i[2]||(i[2]=a=>h(g)?g.value=a:g=a),class:"block cursor-auto ring-4 ring-gray-100 text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",type:"text"},null,512),[[C,o(g)]])]),Re,t("div",null,[$(t("input",{placeholder:"County Name","onUpdate:modelValue":i[3]||(i[3]=a=>h(y)?y.value=a:y=a),class:"block cursor-auto ring-4 ring-gray-100 text-sm text-gray-900 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",type:"text"},null,512),[[C,o(y)]])]),Pe,u(o(M),{href:b.route("cities.index"),class:"px-8 ring ring-green-500 ring-4 bg-green-800 py-2 text-yellow-400 font-extrabold border-2 hover:ring-green-900 hover:bg-green-700 hover:transition-all rounded-xl ml-3"},{default:p(()=>[k(" Reset ")]),_:1},8,["href"])])],40,Ee),qe,t("div",Qe,[t("div",Ye,[t("table",Ze,[Ge,t("tbody",null,[(d(!0),x(v,null,N(e.items.data,a=>(d(),x("tr",{key:a.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[t("th",Je,s(a.id),1),t("td",Ke,s(a.city),1),t("td",We,s(a.state_name),1),t("td",Xe,s(a.county_name),1),t("td",ts,[t("button",{onClick:ss=>h(m)?m.value=a:m=a,class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},"View",8,es)])]))),128))])])])]),u(A,{data:e.items},null,8,["data"])])])]),u(be,{item:o(m),onModalNull:i[4]||(i[4]=a=>h(m)?m.value="":m="")},null,8,["item"])]),_:1})],64))}};export{ns as default};
