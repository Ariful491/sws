import{u as n,o as d,c as l,w as t,a,b as o,H as c,d as e,e as f,n as p,f as u}from"./app.be0612ae.js";import{_}from"./GuestLayout.216b8d2f.js";import{_ as w,a as b}from"./InputLabel.67936cca.js";import{_ as h}from"./PrimaryButton.4e94481a.js";import{_ as x}from"./TextInput.17eaa5d5.js";import"./ApplicationLogo.1207fcd1.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},H={__name:"ConfirmPassword",setup(y){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(w,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(b,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",v,[a(h,{class:p(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[f(" Confirm ")]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{H as default};