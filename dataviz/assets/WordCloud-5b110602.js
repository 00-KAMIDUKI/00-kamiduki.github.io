import{d as ot,o as at,c as U,i as V,g as X,h as it,m as st,e as ut}from"./index-8d234f16.js";import{l as lt,s as Y}from"./linear-bba21991.js";import{m as ct}from"./max-adfc8a60.js";function ft(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ht(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}),n}var yt={value:function(){}};function tt(){for(var t=0,e=arguments.length,n={},r;t<e;++t){if(!(r=arguments[t]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new R(n)}function R(t){this._=t}function pt(t,e){return t.trim().split(/^|\s+/).map(function(n){var r="",a=n.indexOf(".");if(a>=0&&(r=n.slice(a+1),n=n.slice(0,a)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}R.prototype=tt.prototype={constructor:R,on:function(t,e){var n=this._,r=pt(t+"",n),a,s=-1,c=r.length;if(arguments.length<2){for(;++s<c;)if((a=(t=r[s]).type)&&(a=xt(n[a],t.name)))return a;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<c;)if(a=(t=r[s]).type)n[a]=J(n[a],t.name,e);else if(e==null)for(a in n)n[a]=J(n[a],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new R(t)},call:function(t,e){if((a=arguments.length-2)>0)for(var n=new Array(a),r=0,a,s;r<a;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],r=0,a=s.length;r<a;++r)s[r].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],a=0,s=r.length;a<s;++a)r[a].value.apply(e,n)}};function xt(t,e){for(var n=0,r=t.length,a;n<r;++n)if((a=t[n]).name===e)return a.value}function J(t,e,n){for(var r=0,a=t.length;r<a;++r)if(t[r].name===e){t[r]=yt,t=t.slice(0,r).concat(t.slice(r+1));break}return n!=null&&t.push({name:e,value:n}),t}const mt=Object.freeze(Object.defineProperty({__proto__:null,dispatch:tt},Symbol.toStringTag,{value:"Module"})),gt=ht(mt),vt=gt.dispatch,B=Math.PI/180,wt={archimedean:et,rectangular:Pt},C=64,W=2048;var dt=function(){var t=[256,256],e=Mt,n=_t,r=$t,a=K,s=K,c=St,p=bt,y=et,m=[],d=1/0,f=vt("word","end"),x=null,M=Math.random,o={},S=Et;o.canvas=function(i){return arguments.length?(S=z(i),o):S},o.start=function(){var i=P(S()),l=Tt((t[0]>>5)*t[1]),g=null,v=m.length,b=-1,O=[],_=m.map(function(h,u){return h.text=e.call(this,h,u),h.font=n.call(this,h,u),h.style=a.call(this,h,u),h.weight=s.call(this,h,u),h.rotate=c.call(this,h,u),h.size=~~r.call(this,h,u),h.padding=p.call(this,h,u),h}).sort(function(h,u){return u.size-h.size});return x&&clearInterval(x),x=setInterval(I,0),I(),o;function I(){for(var h=Date.now();Date.now()-h<d&&++b<v&&x;){var u=_[b];u.x=t[0]*(M()+.5)>>1,u.y=t[1]*(M()+.5)>>1,zt(i,u,_,b),u.hasText&&T(l,u,g)&&(O.push(u),f.call("word",o,u),g?It(g,u):g=[{x:u.x+u.x0,y:u.y+u.y0},{x:u.x+u.x1,y:u.y+u.y1}],u.x-=t[0]>>1,u.y-=t[1]>>1)}b>=v&&(o.stop(),f.call("end",o,O,g))}},o.stop=function(){x&&(clearInterval(x),x=null);for(const i of m)delete i.sprite;return o};function P(i){const l=i.getContext("2d",{willReadFrequently:!0});i.width=i.height=1;const g=Math.sqrt(l.getImageData(0,0,1,1).data.length>>2);return i.width=(C<<5)/g,i.height=W/g,l.fillStyle=l.strokeStyle="red",{context:l,ratio:g}}function T(i,l,g){t[0],t[1];for(var v=l.x,b=l.y,O=Math.sqrt(t[0]*t[0]+t[1]*t[1]),_=y(t),I=M()<.5?1:-1,h=-I,u,k,w;(u=_(h+=I))&&(k=~~u[0],w=~~u[1],!(Math.min(Math.abs(k),Math.abs(w))>=O));)if(l.x=v+k,l.y=b+w,!(l.x+l.x0<0||l.y+l.y0<0||l.x+l.x1>t[0]||l.y+l.y1>t[1])&&(!g||kt(l,g))&&!Ot(l,i,t[0])){for(var $=l.sprite,D=l.width>>5,N=t[0]>>5,G=l.x-(D<<4),H=G&127,nt=32-H,rt=l.y1-l.y0,L=(l.y+l.y0)*N+(G>>5),q,F=0;F<rt;F++){q=0;for(var E=0;E<=D;E++)i[L+E]|=q<<nt|(E<D?(q=$[F*D+E])>>>H:0);L+=N}return!0}return!1}return o.timeInterval=function(i){return arguments.length?(d=i??1/0,o):d},o.words=function(i){return arguments.length?(m=i,o):m},o.size=function(i){return arguments.length?(t=[+i[0],+i[1]],o):t},o.font=function(i){return arguments.length?(n=z(i),o):n},o.fontStyle=function(i){return arguments.length?(a=z(i),o):a},o.fontWeight=function(i){return arguments.length?(s=z(i),o):s},o.rotate=function(i){return arguments.length?(c=z(i),o):c},o.text=function(i){return arguments.length?(e=z(i),o):e},o.spiral=function(i){return arguments.length?(y=wt[i]||i,o):y},o.fontSize=function(i){return arguments.length?(r=z(i),o):r},o.padding=function(i){return arguments.length?(p=z(i),o):p},o.random=function(i){return arguments.length?(M=i,o):M},o.on=function(){var i=f.on.apply(f,arguments);return i===f?o:i},o};function Mt(t){return t.text}function _t(){return"serif"}function K(){return"normal"}function $t(t){return Math.sqrt(t.value)}function St(){return(~~(random()*6)-3)*30}function bt(){return 1}function zt(t,e,n,r){if(!e.sprite){var a=t.context,s=t.ratio;a.clearRect(0,0,(C<<5)/s,W/s);var c=0,p=0,y=0,m=n.length;for(--r;++r<m;){e=n[r],a.save(),a.font=e.style+" "+e.weight+" "+~~((e.size+1)/s)+"px "+e.font;const u=a.measureText(e.text),k=-Math.floor(u.width/2);let w=(u.width+1)*s,$=e.size<<1;if(e.rotate){var d=Math.sin(e.rotate*B),f=Math.cos(e.rotate*B),x=w*f,M=w*d,o=$*f,S=$*d;w=Math.max(Math.abs(x+S),Math.abs(x-S))+31>>5<<5,$=~~Math.max(Math.abs(M+o),Math.abs(M-o))}else w=w+31>>5<<5;if($>y&&(y=$),c+w>=C<<5&&(c=0,p+=y,y=0),p+$>=W)break;a.translate((c+(w>>1))/s,(p+($>>1))/s),e.rotate&&a.rotate(e.rotate*B),a.fillText(e.text,k,0),e.padding&&(a.lineWidth=2*e.padding,a.strokeText(e.text,k,0)),a.restore(),e.width=w,e.height=$,e.xoff=c,e.yoff=p,e.x1=w>>1,e.y1=$>>1,e.x0=-e.x1,e.y0=-e.y1,e.hasText=!0,c+=w}for(var P=a.getImageData(0,0,(C<<5)/s,W/s).data,T=[];--r>=0;)if(e=n[r],!!e.hasText){for(var i=e.width,l=i>>5,g=e.y1-e.y0,v=0;v<g*l;v++)T[v]=0;if(c=e.xoff,c==null)return;p=e.yoff;for(var b=0,O=-1,_=0;_<g;_++){for(var v=0;v<i;v++){var I=l*_+(v>>5),h=P[(p+_)*(C<<5)+(c+v)<<2]?1<<31-v%32:0;T[I]|=h,b|=h}b?O=_:(e.y0++,g--,_--,p++)}e.y1=e.y0+O,e.sprite=T.slice(0,(e.y1-e.y0)*l)}}}function Ot(t,e,n){n>>=5;for(var r=t.sprite,a=t.width>>5,s=t.x-(a<<4),c=s&127,p=32-c,y=t.y1-t.y0,m=(t.y+t.y0)*n+(s>>5),d,f=0;f<y;f++){d=0;for(var x=0;x<=a;x++)if((d<<p|(x<a?(d=r[f*a+x])>>>c:0))&e[m+x])return!0;m+=n}return!1}function It(t,e){var n=t[0],r=t[1];e.x+e.x0<n.x&&(n.x=e.x+e.x0),e.y+e.y0<n.y&&(n.y=e.y+e.y0),e.x+e.x1>r.x&&(r.x=e.x+e.x1),e.y+e.y1>r.y&&(r.y=e.y+e.y1)}function kt(t,e){return t.x+t.x1>e[0].x&&t.x+t.x0<e[1].x&&t.y+t.y1>e[0].y&&t.y+t.y0<e[1].y}function et(t){var e=t[0]/t[1];return function(n){return[e*(n*=.1)*Math.cos(n),n*Math.sin(n)]}}function Pt(t){var e=4,n=e*t[0]/t[1],r=0,a=0;return function(s){var c=s<0?-1:1;switch(Math.sqrt(1+4*c*s)-c&3){case 0:r+=n;break;case 1:a+=e;break;case 2:r-=n;break;default:a-=e;break}return[r,a]}}function Tt(t){for(var e=[],n=-1;++n<t;)e[n]=0;return e}function Et(){return document.createElement("canvas")}function z(t){return typeof t=="function"?t:function(){return t}}const At=ft(dt),Ct=["transform"],Q=1.8,A=800,Z="word-cloud-container",j="inner",qt=ot({__name:"WordCloud",setup(t){const e=A/Q;async function n(){let s;s||(s=(await it.get("/api/words")).data);const c=ct(s,y=>y.popular+y.wanted),p=st(s,y=>y.popular+y.wanted);return{data:s,max:c,min:p}}const r=async()=>{const{data:s,max:c,min:p}=await n(),y=lt([p,c],[3,50]),m=f=>{const x=Y(`#${j}`),M=x.selectAll("text").data(f).enter().append("text").text(o=>o.text).attr("fill",ut).attr("font-size",o=>o.size).attr("font-family",o=>o.font).attr("text-anchor","middle").attr("transform",o=>`translate(${o.x},${o.y}) rotate(0)`).on("mouseover",(o,S)=>{x.selectAll("text").attr("opacity",P=>P.category==S.category?1:.14),m(f)}).on("mouseleave",()=>{x.selectAll("text").attr("opacity",1),m(f)});M.append("title").text(o=>`Category: ${o.category}
${o.popular} respondents ${o.category=="OpSys"?"are personally using":"have worked with"} ${o.text}
${o.wanted} respondents ${o.category=="OpSys"?"are professionally using":"want to work with"} ${o.text}`),M.transition().duration(750).delay((o,S)=>S*5).attr("transform",o=>`translate(${o.x},${o.y}) rotate(${o.rotate})`)},d=()=>{const f=Math.random();return f<.25?60:f>.75?-60:0};At().size([A,e]).words(s).text(f=>f.word).padding(0).rotate(d).font("Ubuntu").fontSize(f=>y(f.popular+f.wanted)).on("end",m).start()},a=()=>{const s=window.innerWidth,c={right:.05*s,left:.05*s},p=s-c.left-c.right,y=p/Q,m=y;Y(`#${Z}`).select("svg").attr("width",s).attr("height",m).select("g").attr("transform",`translate(${c.left},0) scale(${p/A},${y/e})`)};return at(()=>{r(),a(),window.addEventListener("resize",a)}),(s,c)=>(X(),U("div",{id:Z},[(X(),U("svg",{width:A,height:e},[V("g",null,[V("g",{id:j,transform:`translate(${A/2},${e/2})`},null,8,Ct)])]))]))}});export{qt as default};