System.register(["./index-legacy-Dj9_KWAJ.js"],(function(e,t){"use strict";var n,a,l,o,r,s,d,i,c,u,p,f,h,x;return{setters:[e=>{n=e._,a=e.o,l=e.c,o=e.w,r=e.v,s=e.a,d=e.t,i=e.r,c=e.b,u=e.d,p=e.n,f=e.F,h=e.e,x=e.f}],execute:function(){var t=document.createElement("style");t.textContent=".pane-gap[data-v-07ef37c1]{border:1px solid var(--el-color-danger);height:14px;width:100%;text-align:right;font-size:10px;box-sizing:border-box}.pane-gap span[data-v-07ef37c1]{margin-right:8px;user-select:none}.pane[data-v-844da33b]{user-select:none;flex:1;flex-shrink:1;flex-basis:0;border:1px solid var(--el-color-danger);aspect-ratio:1/1;display:flex;justify-content:center;align-items:center;box-sizing:border-box;width:4%}.pane .content[data-v-844da33b]{font-size:18px}.pane .truncated[data-v-844da33b]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.end-with-rbd[data-v-844da33b]{justify-content:flex-end}.end-with-rbd .content[data-v-844da33b]{margin-right:-8px}.row[data-v-ce4e6c2f]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap}.pane-paper[data-v-65316146]{height:100%;background-color:#fff}.pane-paper .content[data-v-65316146]{margin:5px}.is-horizontal{display:none!important}.container[data-v-71fbef55]{display:flex;max-width:100%;overflow:hidden}.container .textarea[data-v-71fbef55]{flex:11;margin:10px}.container .textarea .input[data-v-71fbef55]{width:100%;height:100%;font-size:1.3rem}.container .result[data-v-71fbef55]{flex:11;margin:10px}.container .btn-group[data-v-71fbef55]{display:flex;align-items:center;flex:1;justify-content:center}\n/*$vite$:1*/",document.head.appendChild(t);const v={class:"pane-gap"},m=["{","[","(","《","'",'"',"‘","“","（","<"],g=["}","]",")","》","'",'"',",",".",";",":","!","?","？","’","”","。","，","！","）",">","、","：","；"],b=["0","1","2","3","4","5","6","7","8","9"],w=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"],y={class:"content truncated"},I=["textContent"],C={key:1,ref:"content",class:"content"},_=["textContent"],P={class:"row"},V={class:"content"},k={class:"container"},z={class:"result"},j={class:"textarea"};e("default",n({components:{PanePaper:n({name:"PanePaper",props:{modelValue:String},components:{PaneGap:n({name:"PaneGap",props:{baseIndex:{type:Number,default:0},latestIndex:{type:Number,default:999999}},data:()=>({})},[["render",function(e,t,n,i,c,u){return a(),l("div",v,[o(s("span",null,d(25*n.baseIndex),513),[[r,25*n.baseIndex%100==0&&0!=n.baseIndex||n.baseIndex==n.latestIndex]])])}],["__scopeId","data-v-07ef37c1"]]),PaneRow:n({name:"PaneRow",props:{row:Array},components:{Pane:n({name:"Pane",props:{content:String},data:()=>({text:"",endWithBd:!1}),watch:{content(e){this.text=e,this.calcIsEndBd()}},mounted(){this.text=this.content,this.calcIsEndBd()},computed:{isEnWord(){return this.text?.match(/^[a-zA-Z]+$/)}},methods:{calcIsEndBd(){this.endWithBd=!!this.text?.match(/.+[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3010|\u3011|\u007e]$/)}}},[["render",function(e,t,n,o,r,f){const h=i("el-tooltip");return a(),l("div",{class:p({pane:!0,"end-with-rbd":r.endWithBd}),ref:"pane"},[f.isEnWord?(a(),c(h,{key:0,effect:"dark",content:r.text,placement:"bottom"},{default:u((()=>[s("div",y,[s("span",{textContent:d(r.text)},null,8,I)])])),_:1},8,["content"])):(a(),l("div",C,[s("span",{textContent:d(n.content)},null,8,_)],512))],2)}],["__scopeId","data-v-844da33b"]])}},[["render",function(e,t,n,o,r,s){const d=i("Pane");return a(),l("div",P,[(a(),l(f,null,h(25,(e=>x(d,{content:n.row[e-1]},null,8,["content"]))),64))])}],["__scopeId","data-v-ce4e6c2f"]])},watch:{modelValue(e){this.calcContent(e)}},data:()=>({rows:[]}),mounted(){this.calcContent(this.modelValue)},methods:{calcContent(e){this.rows=[];const t=e.replaceAll("\r","").replaceAll("\t","").replaceAll(" ","");let n=0,a=0,l=[];for(;n<t.length;){let e=[],o="";for(;e.length<25;){let l=t[a+n]||"";if("\n"===l){const t=25-e.length;if(25==t){n++;break}for(let n=0;n<t;n++)e.push(" ");n++;break}if(w.includes(l)){if(o+=l,a++,w.includes(t[a+n]))continue;e.push(o),o=""}else if(b.includes(l))o+=l,a++;else{if(g.includes(l))o+=l,e.push(o),o="";else{if(m.includes(l)&&24===e.length){o+=l,a++;continue}if(o+=l,24===e.length&&g.includes(t[a+n+1])){a++;continue}e.push(o),o=""}a++}}a>0&&l.push(e),a=0,n+=e.filter((e=>" "!=e)).join("").length}this.rows=l;for(let o=l.length;o<4;o++)l.push(new Array(25))}}},[["render",function(e,t,n,d,p,v){const m=i("pane-gap"),g=i("pane-row"),b=i("el-scrollbar");return a(),c(b,{class:"pane-paper","wrap-style":"overflow-x: hidden"},{default:u((()=>[s("div",V,[o(x(m,null,null,512),[[r,p.rows.length>0]]),(a(!0),l(f,null,h(p.rows,((e,t)=>(a(),l(f,{key:t},[x(g,{row:e},null,8,["row"]),x(m,{"base-index":t+1,"latest-index":p.rows.length},null,8,["base-index","latest-index"])],64)))),128))])])),_:1})}],["__scopeId","data-v-65316146"]])},props:{baseIndex:{type:Number,default:1}},data:()=>({value:""}),mounted(){this.getContent()},methods:{saveContent(){var e;e=this.value,localStorage.setItem("article",e)},getContent(){this.value=localStorage.getItem("article")||""}}},[["render",function(e,t,n,o,r,d){const c=i("pane-paper"),u=i("el-input");return a(),l("div",k,[s("div",z,[x(c,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e)},null,8,["modelValue"])]),s("div",j,[x(u,{placeholder:"输入要统计的字符串",modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),class:"input",type:"textarea",clearable:"",resize:"none","input-style":"height: 100%",onChange:d.saveContent},null,8,["modelValue","onChange"])])])}],["__scopeId","data-v-71fbef55"]]))}}}));