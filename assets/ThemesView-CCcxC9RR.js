import{d as i,u as p,o as n,c as o,a as e,t as _,f as c,g as b,v as f,i as x,F as v,h as y,j as h,n as w,k as $,b as s,e as m,w as C}from"./index-_CigL2xd.js";import{_ as k}from"./ExternalLink.vue_vue_type_script_setup_true_lang-Bb1Okfoc.js";const S=t=>t.replace(/-/g," "),V={class:"rounded grid gap-10 place-items-center"},T={class:"text-nowrap text-2xl text-center lowercase"},N=["value"],B=i({__name:"ThemeSwitcher",setup(t){const a=p({attribute:"theme",disableTransition:!1,modes:h});return(d,u)=>(n(),o("div",V,[e("p",T,_(c(S)(c(a))),1),e("div",null,[b(e("select",{"onUpdate:modelValue":u[0]||(u[0]=r=>x(a)?a.value=r:null),class:"p-2 rounded bg-theme-main text-theme-bg border-2 border-transparent focus:border-theme-bg focus:outline-none focus:ring-4 focus:ring-theme-main transition ease-in-out"},[(n(!0),o(v,null,y(c(h),(r,R,g)=>(n(),o("option",{value:r,key:g},_(r),9,N))),128))],512),[[f,c(a)]])])]))}}),D={class:"flex items-center"},M={key:0,class:"lg:text-lg"},l=i({__name:"ColorSwatch",props:{bgClass:String,borderClass:String,label:String},setup(t){return(a,d)=>(n(),o("div",D,[e("div",{class:w(`w-6 h-6 ${t.bgClass} ${t.borderClass} transition-colors duration-300`)},null,2),t.label?(n(),o("p",M,_(t.label),1)):$("",!0)]))}}),j={class:"flex justify-center"},F=i({__name:"ThemeColorsDisplay",setup(t){return(a,d)=>(n(),o("div",j,[s(l,{"bg-class":"bg-theme-bg"}),s(l,{"bg-class":"bg-theme-main"}),s(l,{"bg-class":"bg-theme-accent"}),s(l,{"bg-class":"bg-theme-accent-alt"}),s(l,{"bg-class":"bg-theme-text"})]))}}),U={class:"flex flex-col md:flex-row items-center p-3 gap-y-10"},z={class:"text-2xl max-w-2xl p-3"},E=e("p",{class:"leading-normal text-pretty"},"Use this theme-switcher to change the theme!",-1),H=e("br",null,null,-1),K={class:"leading-normal"},L={class:"grid center p-6 bg-theme-bg-alt rounded-lg"},G=i({__name:"ThemesView",setup(t){return(a,d)=>(n(),o("div",null,[e("div",U,[e("div",z,[E,H,e("p",K,[m(" Heavily inspired by "),s(k,{link:"https://monkeytype.com"},{default:C(()=>[m("monkeytype")]),_:1}),m(". ")])]),e("div",L,[s(B),s(F,{class:"p-4"})])])]))}});export{G as default};