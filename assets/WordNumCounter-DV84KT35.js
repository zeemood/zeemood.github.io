import{_ as h,o as r,c as d,w,v as b,a as u,t as v,n as I,r as i,F as m,b as $,d as p,e as P,f as V}from"./index-NMwLgS9j.js";const B={name:"PaneGap",props:{baseIndex:{type:Number,default:0}},data(){return{}}},A={class:"pane-gap"};function C(l,n,e,c,t,s){return r(),d("div",A,[w(u("span",null,v(e.baseIndex*25),513),[[b,e.baseIndex*25%100==0&&e.baseIndex!=0]])])}const y=h(B,[["render",C],["__scopeId","data-v-4420a089"]]),N=["{","[","(","《","'",'"',"‘","“","（","<"],f=["}","]",")","》","'",'"',",",".",";",":","!","?","？","’","”","。","，","！","）",">"],k=["0","1","2","3","4","5","6","7","8","9"],E={name:"Pane",props:{content:String},data(){return{text:"",endWithBd:!1}},watch:{content(l){this.text=l,this.calcIsEndBd()}},mounted(){this.text=this.content,this.calcIsEndBd()},methods:{calcIsEndBd(){var n,e;let l=!!((n=this.text)!=null&&n.match(/^[0-9]+/));this.endWithBd=((e=this.text)==null?void 0:e.length)==2&&f.includes(this.text[this.text.length-1])&&!l}}},S={class:"content"},W=["textContent"];function R(l,n,e,c,t,s){return r(),d("div",{class:I({pane:!0,"end-with-rbd":t.endWithBd})},[u("div",S,[u("span",{textContent:v(e.content)},null,8,W)])],2)}const z=h(E,[["render",R],["__scopeId","data-v-bdb5fdad"]]),D={name:"PaneRow",props:{row:Array},components:{Pane:z}},F={class:"row"};function G(l,n,e,c,t,s){const o=i("Pane");return r(),d("div",F,[(r(),d(m,null,$(25,a=>p(o,{content:e.row[a-1]},null,8,["content"])),64))])}const L=h(D,[["render",G],["__scopeId","data-v-ce4e6c2f"]]),U={name:"PanePaper",props:{modelValue:String},components:{PaneGap:y,PaneRow:L},watch:{modelValue(l){this.calcContent(l)}},data(){return{rows:[]}},mounted(){this.calcContent(this.modelValue)},methods:{calcContent(l){this.rows=[];const n=l.replaceAll("\r","").replaceAll("\n","").replaceAll("	","").replaceAll(" ","");let e=0,c=0,t=[];for(;e<n.length;){let s=[],o="";for(;s.length<25;){let a=n[c+e]||"";if(k.includes(a)){o+=a,c++;continue}else if(f.includes(a))o+=a,s.push(o),o="";else if(N.includes(a)&&s.length===24){o+=a,c++;continue}else{if(o+=a,s.length===24&&f.includes(n[c+e+1])){c++;continue}s.push(o),o=""}c++}t.push(s),c=0,e+=s.join("").length}this.rows=t;for(let s=t.length;s<4;s++)t.push(new Array(25))}}},j={class:"content"};function q(l,n,e,c,t,s){const o=i("pane-gap"),a=i("pane-row"),_=i("el-scrollbar");return r(),P(_,{class:"pane-paper"},{default:V(()=>[u("div",j,[w(p(o,null,null,512),[[b,t.rows.length>0]]),(r(!0),d(m,null,$(t.rows,(g,x)=>(r(),d(m,{key:x},[p(a,{row:g},null,8,["row"]),p(o,{"base-index":x+1},null,8,["base-index"])],64))),128))])]),_:1})}const H=h(U,[["render",q],["__scopeId","data-v-d1949f21"]]),J={components:{PanePaper:H},props:{baseIndex:{type:Number,default:1}},data(){return{value:""}}},K={class:"container"},M={class:"result"},O={class:"textarea"};function Q(l,n,e,c,t,s){const o=i("pane-paper"),a=i("el-input");return r(),d("div",K,[u("div",M,[p(o,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=_=>t.value=_)},null,8,["modelValue"])]),u("div",O,[p(a,{placeholder:"输入要统计的字符串",modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=_=>t.value=_),class:"input",type:"textarea",clearable:"",resize:"none","input-style":"height: 100%"},null,8,["modelValue"])])])}const X=h(J,[["render",Q],["__scopeId","data-v-38bab5d5"]]);export{X as default};
