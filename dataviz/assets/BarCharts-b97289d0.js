import{d as it,u as mt,o as wt,q as xt,c as J,i as k,a as S,b as q,f as yt,m as _t,g as C,e as G,h as et,r as bt,l as kt,R as vt,s as Mt,t as $t,F as Ot}from"./index-320ee3fa.js";import{m as Y}from"./utils-00b87a78.js";import{i as ct,l as I,s as v}from"./linear-1760f104.js";import{m as nt}from"./max-adfc8a60.js";class at extends Map{constructor(a,r=Lt){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),a!=null)for(const[n,o]of a)this.set(n,o)}get(a){return super.get(rt(this,a))}has(a){return super.has(rt(this,a))}set(a,r){return super.set(St(this,a),r)}delete(a){return super.delete(Wt(this,a))}}function rt({_intern:e,_key:a},r){const n=a(r);return e.has(n)?e.get(n):r}function St({_intern:e,_key:a},r){const n=a(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function Wt({_intern:e,_key:a},r){const n=a(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function Lt(e){return e!==null&&typeof e=="object"?e.valueOf():e}function zt(e,a,r){e=+e,a=+a,r=(o=arguments.length)<2?(a=e,e=0,1):o<3?1:+r;for(var n=-1,o=Math.max(0,Math.ceil((a-e)/r))|0,i=new Array(o);++n<o;)i[n]=e+n*r;return i}const ot=Symbol("implicit");function lt(){var e=new at,a=[],r=[],n=ot;function o(i){let d=e.get(i);if(d===void 0){if(n!==ot)return n;e.set(i,d=a.push(i)-1)}return r[d%r.length]}return o.domain=function(i){if(!arguments.length)return a.slice();a=[],e=new at;for(const d of i)e.has(d)||e.set(d,a.push(d)-1);return o},o.range=function(i){return arguments.length?(r=Array.from(i),o):r.slice()},o.unknown=function(i){return arguments.length?(n=i,o):n},o.copy=function(){return lt(a,r).unknown(n)},ct.apply(o,arguments),o}function ut(){var e=lt().unknown(void 0),a=e.domain,r=e.range,n=0,o=1,i,d,w=!1,c=0,p=0,x=.5;delete e.unknown;function h(){var s=a().length,g=o<n,m=g?o:n,y=g?n:o;i=(y-m)/Math.max(1,s-c+p*2),w&&(i=Math.floor(i)),m+=(y-m-i*(s-c))*x,d=i*(1-c),w&&(m=Math.round(m),d=Math.round(d));var l=zt(s).map(function(u){return m+i*u});return r(g?l.reverse():l)}return e.domain=function(s){return arguments.length?(a(s),h()):a()},e.range=function(s){return arguments.length?([n,o]=s,n=+n,o=+o,h()):[n,o]},e.rangeRound=function(s){return[n,o]=s,n=+n,o=+o,w=!0,h()},e.bandwidth=function(){return d},e.step=function(){return i},e.round=function(s){return arguments.length?(w=!!s,h()):w},e.padding=function(s){return arguments.length?(c=Math.min(1,p=+s),h()):c},e.paddingInner=function(s){return arguments.length?(c=Math.min(1,s),h()):c},e.paddingOuter=function(s){return arguments.length?(p=+s,h()):p},e.align=function(s){return arguments.length?(x=Math.max(0,Math.min(1,s)),h()):x},e.copy=function(){return ut(a(),[n,o]).round(w).paddingInner(c).paddingOuter(p).align(x)},ct.apply(h(),arguments)}const At={id:"gradient-right"},Bt=["stop-color"],Gt=["stop-color"],It={id:"gradient-left"},Ct=["stop-color"],Pt=["stop-color"],st="bar-container",Rt=it({__name:"Bar",props:{category:{}},setup(e){const a=e;mt(c=>({"36d154b0":S(q),"3aa7d972":S(yt)}));let r,n;const o=(c,p)=>c>p?c:p,i=(c,p)=>c<p?c:p,d=async()=>{r||(r=(await et.get("/api/words")).data,n=(await et.get("/api/count")).data)},w=async(c,p)=>{await d();const x=r.filter(t=>Y(t.category,c)).sort((t,f)=>f.popular+f.wanted-t.popular-t.wanted),h=window.innerHeight,s=window.innerWidth,g=_t([40,.032*s+12]),m=.01*s+10,y={top:.025*h+32,left:4.7*g+5,right:4.7*g+18,bottom:0},l=s-y.left-y.right,u=l*.08+32,K=x.length*(g+m)-m,dt=y.top+y.bottom+K,L=50,z=400,P=ut().domain(x.map(t=>t.word)).range([0,K]).padding(m/(g+m)),A=I().domain([0,nt(x.map(t=>t.popular))]).range([0,.5*l-u/2]),M=I().domain([0,nt(x.map(t=>t.wanted))]).range([0,.5*l-u/2]),Q=v(`#${st}`).select("svg").attr("width",s).attr("height",dt);Q.select("g").remove();const R=Q.append("g").attr("transform",`translate(${y.left},${y.top})`),Z=I([150,2e3],[0,u+2])(s),tt=i(l*.1+10.5,g*.8);R.append("text").attr("x",(l+Z)/2).text(Y("OpSys",c)?"Personal Use":"Have Worked With").attr("fill",q).attr("font-size",tt),R.append("text").attr("x",(l-Z)/2).text(Y("OpSys",c)?"Professional Use":"Want to Work With").attr("text-anchor","end").attr("fill",q).attr("font-size",tt);const E=R.selectAll("g").data(x).enter().append("g").attr("transform",t=>`translate(0,${P(t.word)||0})`),$=t=>`${(t/n*100).toFixed(2)}%`,pt=t=>{const f=(b,U)=>{const W=v(b.parentElement),[ht,j,X]=W.selectAll("text").attr("opacity",1);v(j).text(_=>`${_.wanted} / ${$(_.wanted)}`),v(X).text(_=>`${$(_.popular)} / ${_.popular}`)},V=(b,U)=>{const W=v(b.parentElement),[ht,j,X]=W.selectAll("text").attr("opacity",B);v(j).text(_=>$(_.wanted)),v(X).text(_=>$(_.popular))};t.forEach(b=>b.on("mouseover",function(U,W){f(this)}).on("mouseleave",function(U,W){V(this)}))},F=E.append("rect").attr("x",.5*(l+u)).attr("width",t=>o(A(t.popular),1)).attr("height",P.bandwidth()).attr("fill","url(#gradient-right)").attr("rx",5),T=E.append("rect").attr("x",t=>.5*(l-u)-M(t.wanted)).attr("width",t=>o(M(t.wanted),1)).attr("height",P.bandwidth()).attr("fill","url(#gradient-left)").attr("rx",5),H=E.append("g").attr("transform",`translate(0, ${.65*g})`),O=10,B=.6,gt=t=>{const V=I([500,2e3],[1.2,.46])(s),b=g*.5-t.word.length**.8*V;return b>10.5?b:10.5},ft=H.append("text").attr("x",.5*l).attr("class","bar-label").attr("font-size",t=>gt(t)).attr("text-anchor","middle").attr("opacity",B).text(t=>t.word),D=H.append("text").attr("x",t=>.5*(l-u)-M(t.wanted)-O).attr("class","bar-label").attr("font-size",g*.6).attr("text-anchor","end").attr("opacity",B).text(t=>$(t.wanted)),N=H.append("text").attr("x",t=>.5*(l+u)+A(t.popular)+O).attr("class","bar-label").attr("font-size",g*.6).attr("opacity",B).text(t=>$(t.popular));pt([D,ft,N,T,F]),p&&(D.attr("x",.5*(l-u)-O),D.transition().duration(z).delay((t,f)=>f*L).attr("x",t=>.5*(l-u)-M(t.wanted)-O),N.attr("x",.5*(l+u)+O),N.transition().duration(z).delay((t,f)=>f*L).attr("x",t=>.5*(l+u)+A(t.popular)+O),F.attr("width",0),F.transition().duration(z).delay((t,f)=>f*L).attr("width",t=>o(A(t.popular),1)),T.attr("width",0).attr("x",.5*(l-u)),T.transition().duration(z).delay((t,f)=>f*L).attr("x",t=>.5*(l-u)-M(t.wanted)).attr("width",t=>o(M(t.wanted),1)))};return wt(()=>{w(a.category,!0),window.addEventListener("resize",()=>{w(a.category,!1)})}),xt(()=>{w(a.category,!0)}),(c,p)=>(C(),J("div",{id:st},[(C(),J("svg",null,[k("defs",null,[k("linearGradient",At,[k("stop",{offset:"0%","stop-color":S(G),"stop-opacity":"0.8"},null,8,Bt),k("stop",{offset:"85%","stop-color":S(G)},null,8,Gt)]),k("linearGradient",It,[k("stop",{offset:"15%","stop-color":S(G)},null,8,Ct),k("stop",{offset:"100%","stop-color":S(G),"stop-opacity":"0.8"},null,8,Pt)])])]))]))}});const Dt=it({__name:"BarCharts",props:{category:{}},setup(e){e.category||bt.push("/bar/language");const r=["Language","Database","Platform","WebFrame","MiscTech","ToolsTech","NEWCollabTools","OpSys","OfficeStackAsync","OfficeStackSync","AISearch","AIDev"];return(n,o)=>(C(),J(Ot,null,[kt(vt,{base:"/bar",paths:r.map(i=>i.toLowerCase()),texts:r},null,8,["paths"]),n.category?(C(),Mt(Rt,{key:0,category:n.category},null,8,["category"])):$t("",!0)],64))}});export{Dt as default};
