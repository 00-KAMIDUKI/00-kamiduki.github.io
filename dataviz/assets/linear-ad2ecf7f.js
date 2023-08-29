import{S as U,w as fn,x as cn,y as q,z as Y,A as Z,B as hn}from"./index-c5f0b3eb.js";function E(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function sn(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function nn(n){let t,e,r;n.length!==2?(t=E,e=(u,c)=>E(n(u),c),r=(u,c)=>n(u)-c):(t=n===E||n===sn?n:ln,e=n,r=n);function i(u,c,o=0,m=u.length){if(o<m){if(t(c,c)!==0)return m;do{const h=o+m>>>1;e(u[h],c)<0?o=h+1:m=h}while(o<m)}return o}function f(u,c,o=0,m=u.length){if(o<m){if(t(c,c)!==0)return m;do{const h=o+m>>>1;e(u[h],c)<=0?o=h+1:m=h}while(o<m)}return o}function a(u,c,o=0,m=u.length){const h=i(u,c,o,m-1);return h>o&&r(u[h-1],c)>-r(u[h],c)?h-1:h}return{left:i,center:a,right:f}}function ln(){return 0}function mn(n){return n===null?NaN:+n}const dn=nn(E),gn=dn.right;nn(mn).center;const yn=gn,Mn=Math.sqrt(50),pn=Math.sqrt(10),wn=Math.sqrt(2);function F(n,t,e){const r=(t-n)/Math.max(0,e),i=Math.floor(Math.log10(r)),f=r/Math.pow(10,i),a=f>=Mn?10:f>=pn?5:f>=wn?2:1;let u,c,o;return i<0?(o=Math.pow(10,-i)/a,u=Math.round(n*o),c=Math.round(t*o),u/o<n&&++u,c/o>t&&--c,o=-o):(o=Math.pow(10,i)*a,u=Math.round(n/o),c=Math.round(t/o),u*o<n&&++u,c*o>t&&--c),c<u&&.5<=e&&e<2?F(n,t,e*2):[u,c,o]}function kn(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const r=t<n,[i,f,a]=r?F(t,n,e):F(n,t,e);if(!(f>=i))return[];const u=f-i+1,c=new Array(u);if(r)if(a<0)for(let o=0;o<u;++o)c[o]=(f-o)/-a;else for(let o=0;o<u;++o)c[o]=(f-o)*a;else if(a<0)for(let o=0;o<u;++o)c[o]=(i+o)/-a;else for(let o=0;o<u;++o)c[o]=(i+o)*a;return c}function I(n,t,e){return t=+t,n=+n,e=+e,F(n,t,e)[2]}function Nn(n,t,e){t=+t,n=+n,e=+e;const r=t<n,i=r?I(t,n,e):I(n,t,e);return(r?-1:1)*(i<0?1/-i:i)}function Wn(n){return typeof n=="string"?new U([[document.querySelector(n)]],[document.documentElement]):new U([[n]],fn)}function xn(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(f){for(i=0;i<e;++i)r[i]=n[i]*(1-f)+t[i]*f;return r}}function An(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Sn(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),f=new Array(e),a;for(a=0;a<r;++a)i[a]=B(n[a],t[a]);for(;a<e;++a)f[a]=t[a];return function(u){for(a=0;a<r;++a)f[a]=i[a](u);return f}}function vn(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function bn(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=B(n[i],t[i]):r[i]=t[i];return function(f){for(i in e)r[i]=e[i](f);return r}}function B(n,t){var e=typeof t,r;return t==null||e==="boolean"?cn(t):(e==="number"?q:e==="string"?(r=Y(t))?(t=r,Z):hn:t instanceof Y?Z:t instanceof Date?vn:An(t)?xn:Array.isArray(t)?Sn:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?bn:q)(n,t)}function jn(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function zn(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function R(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function S(n){return n=R(Math.abs(n)),n?n[1]:NaN}function Pn(n,t){return function(e,r){for(var i=e.length,f=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),f.push(e.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return f.reverse().join(t)}}function $n(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var En=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function D(n){if(!(t=En.exec(n)))throw new Error("invalid format: "+n);var t;return new C({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}D.prototype=C.prototype;function C(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}C.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Fn(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var tn;function Rn(n,t){var e=R(n,t);if(!e)return n+"";var r=e[0],i=e[1],f=i-(tn=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return f===a?r:f>a?r+new Array(f-a+1).join("0"):f>0?r.slice(0,f)+"."+r.slice(f):"0."+new Array(1-f).join("0")+R(n,Math.max(0,t+f-1))[0]}function H(n,t){var e=R(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const J={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:zn,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>H(n*100,t),r:H,s:Rn,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function K(n){return n}var Q=Array.prototype.map,W=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Dn(n){var t=n.grouping===void 0||n.thousands===void 0?K:Pn(Q.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",f=n.numerals===void 0?K:$n(Q.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",u=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function o(h){h=D(h);var l=h.fill,p=h.align,y=h.sign,v=h.symbol,N=h.zero,b=h.width,T=h.comma,w=h.precision,G=h.trim,d=h.type;d==="n"?(T=!0,d="g"):J[d]||(w===void 0&&(w=12),G=!0,d="g"),(N||l==="0"&&p==="=")&&(N=!0,l="0",p="=");var on=v==="$"?e:v==="#"&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",an=v==="$"?r:/[%p]/.test(d)?a:"",O=J[d],un=/[defgprs%]/.test(d);w=w===void 0?6:/[gprs]/.test(d)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function V(s){var k=on,g=an,x,X,j;if(d==="c")g=O(s)+g,s="";else{s=+s;var z=s<0||1/s<0;if(s=isNaN(s)?c:O(Math.abs(s),w),G&&(s=Fn(s)),z&&+s==0&&y!=="+"&&(z=!1),k=(z?y==="("?y:u:y==="-"||y==="("?"":y)+k,g=(d==="s"?W[8+tn/3]:"")+g+(z&&y==="("?")":""),un){for(x=-1,X=s.length;++x<X;)if(j=s.charCodeAt(x),48>j||j>57){g=(j===46?i+s.slice(x+1):s.slice(x))+g,s=s.slice(0,x);break}}}T&&!N&&(s=t(s,1/0));var P=k.length+s.length+g.length,M=P<b?new Array(b-P+1).join(l):"";switch(T&&N&&(s=t(M+s,M.length?b-g.length:1/0),M=""),p){case"<":s=k+s+g+M;break;case"=":s=k+M+s+g;break;case"^":s=M.slice(0,P=M.length>>1)+k+s+g+M.slice(P);break;default:s=M+k+s+g;break}return f(s)}return V.toString=function(){return h+""},V}function m(h,l){var p=o((h=D(h),h.type="f",h)),y=Math.max(-8,Math.min(8,Math.floor(S(l)/3)))*3,v=Math.pow(10,-y),N=W[8+y/3];return function(b){return p(v*b)+N}}return{format:o,formatPrefix:m}}var $,rn,en;Tn({thousands:",",grouping:[3],currency:["$",""]});function Tn(n){return $=Dn(n),rn=$.format,en=$.formatPrefix,$}function qn(n){return Math.max(0,-S(Math.abs(n)))}function In(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(S(t)/3)))*3-S(Math.abs(n)))}function Ln(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,S(t)-S(n))+1}function Bn(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function Cn(n){return function(){return n}}function Gn(n){return+n}var _=[0,1];function A(n){return n}function L(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:Cn(isNaN(t)?NaN:.5)}function On(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function Vn(n,t,e){var r=n[0],i=n[1],f=t[0],a=t[1];return i<r?(r=L(i,r),f=e(a,f)):(r=L(r,i),f=e(f,a)),function(u){return f(r(u))}}function Xn(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),f=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=L(n[a],n[a+1]),f[a]=e(t[a],t[a+1]);return function(u){var c=yn(n,u,1,r)-1;return f[c](i[c](u))}}function Un(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Yn(){var n=_,t=_,e=B,r,i,f,a=A,u,c,o;function m(){var l=Math.min(n.length,t.length);return a!==A&&(a=On(n[0],n[l-1])),u=l>2?Xn:Vn,c=o=null,h}function h(l){return l==null||isNaN(l=+l)?f:(c||(c=u(n.map(r),t,e)))(r(a(l)))}return h.invert=function(l){return a(i((o||(o=u(t,n.map(r),q)))(l)))},h.domain=function(l){return arguments.length?(n=Array.from(l,Gn),m()):n.slice()},h.range=function(l){return arguments.length?(t=Array.from(l),m()):t.slice()},h.rangeRound=function(l){return t=Array.from(l),e=jn,m()},h.clamp=function(l){return arguments.length?(a=l?!0:A,m()):a!==A},h.interpolate=function(l){return arguments.length?(e=l,m()):e},h.unknown=function(l){return arguments.length?(f=l,h):f},function(l,p){return r=l,i=p,m()}}function Zn(){return Yn()(A,A)}function Hn(n,t,e,r){var i=Nn(n,t,e),f;switch(r=D(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(f=In(i,a))&&(r.precision=f),en(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(f=Ln(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=f-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(f=qn(i))&&(r.precision=f-(r.type==="%")*2);break}}return rn(r)}function Jn(n){var t=n.domain;return n.ticks=function(e){var r=t();return kn(r[0],r[r.length-1],e??10)},n.tickFormat=function(e,r){var i=t();return Hn(i[0],i[i.length-1],e??10,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,f=r.length-1,a=r[i],u=r[f],c,o,m=10;for(u<a&&(o=a,a=u,u=o,o=i,i=f,f=o);m-- >0;){if(o=I(a,u,e),o===c)return r[i]=a,r[f]=u,t(r);if(o>0)a=Math.floor(a/o)*o,u=Math.ceil(u/o)*o;else if(o<0)a=Math.ceil(a*o)/o,u=Math.floor(u*o)/o;else break;c=o}return n},n}function Kn(){var n=Zn();return n.copy=function(){return Un(n,Kn())},Bn.apply(n,arguments),Jn(n)}export{kn as a,rn as b,Un as c,D as f,Bn as i,Kn as l,Wn as s,Yn as t};
