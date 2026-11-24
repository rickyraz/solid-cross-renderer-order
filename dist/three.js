(()=>{var At=class extends Error{constructor(e){let n=Error,i=n.stackTraceLimit;i&&(n.stackTraceLimit=0),super(),i&&(n.stackTraceLimit=i),this.source=e}},Xn=class extends Error{constructor(e,n){try{var i=String(n instanceof Error?n.message:n)}catch{}super(i,{cause:n}),this.source=e}};function Hs(t){return t instanceof Xn?t.cause:t}var Re={},Gc={},Oh=typeof Proxy=="function",Ws={},Uh=Symbol("refresh"),Pi=Set;function Wc(t){let e=t.pe;for(;e;)e.R|=32,Wc(e),e=e.Ge}function Xc(t){t.l&=-33,pr(t)}var ea;function Xs(t){try{t()}catch(e){ea||=[e],wt()}}function ta(t){let e=ea;if(ea=void 0,e&&!t)throw e[0]}function qn(t,e=!1,n){let i=t.R;if(i&64)return;e&&(!n&&t.T!==null&&(t.T.me!==null||t.T.Le!==null)&&qn(t,!1,!0),t.R=i|64,t.X&&($s(t),(t.m&1&&t.T?.Re!=null||i&2048||Mn.length)&&wt()));let r=n?t.T.me:t.pe;for(n?t.T.me=null:t.pe=null;r;)r.l&=-33,En(r,vt),Ys(r),r.Me=r,qn(r,!0),r=r.Ge;if(n||(t.be=0),e&&!n&&!(i&32)&&t._parent!==null&&!(t._parent.R&64)){let s=t.Me,o=t.Ge;s!==null?s.Ge=o:t._parent.pe=o,o!==null&&(o.Me=s),t.Me=null}if(m0(t,n),e&&t.ze){let s=t.ze;t.ze=void 0,Xs(s)}}function na(t,e){let n=t.pe;e.Me=null,e.Ge=n,n!==null&&(n.Me=e),t.pe=e}function m0(t,e){let n=e?t.T.Le:t.ke;if(n)if(e?t.T.Le=null:t.ke=null,Array.isArray(n))for(let i=n.length-1;i>=0;i--)Xs(n[i]);else Xs(n)}function x0(t,e){for(;t.l&4&&t._parent;)t=t._parent;if(t.id!=null)return g0(t.id,e?t.be++:t.be);throw new Error}function ia(t){return x0(t,!0)}function ra(t,e,n){return t?.id??(e?n?.id:n?.id!=null?ia(n):void 0)}function g0(t,e){let n=e.toString(36),i=n.length-1;return t+(i?String.fromCharCode(64+i):"")+n}function un(){return rt}function jr(t,e=rt){return e&&(e.ke?Array.isArray(e.ke)?e.ke.push(t):e.ke=[e.ke,t]:e.ke=t),t}function Fh(t=!0){qn(this,t),ea&&!it.Y&&ta()}function Ln(t){let e=rt,n=t?.transparent??!1,i={id:ra(t,n,e),l:n?4:0,R:0,Qe:!0,Ke:e?.Qe?e.Ke:e,pe:null,Ge:null,Me:null,ke:null,A:e?.A||Ws,be:0,T:null,_parent:e,dispose:Fh};return e&&na(e,i),i}function sa(t,e){let n=Ln(e);return Gt(n,()=>t(Fh.bind(n,!0)))}var Kc=null,et=null,Jc=null,jc=null,_0=null,aa=null,y0=null,v0=null,b0=null,is=null;var _r=null,ma=!1;var Wh=null,Bi=null,Xh=null,qh=null,Qc=null;function Yh(t,e,n,i,r){Wh=t,Bi=e,Xh=n,qh=i,Qc=r}var Qs=null;var eu=null,S0=null;var kh=null,M0=null;var Ut=null,Un=null,tu=null,nu=null,$h=null,iu=null,la=null,xa=null;var Zh,ru;var Di=[];function E0(t,e=null){let n={ln:[],rn:[[],[]],fn:[],eo:null,_parent:e,P:t,Pe:null,tt:0,nt:!1,nn:null,Ue:!1,un:!1,I:null};return t||Di.push(n),n}var Qe=null;function hi(t){Qe=t}var mt=null,Ni=null;function su(t,e){if(it.Y&&!e||mt!==null)return Tn(t);Ni===null?Ni=$t(t):Kh($t(t),Ni),wt()}function ut(t){return t.T.Re=$t(t.T.Re)}function T0(t){return t=$t(t),Di.indexOf(t)!==-1?t:null}function $t(t){for(;t.eo!==null;)t=t.eo;return t}function Tn(t){if(et&&t?.P)return;let e=mt;e===null?mt=t===null?E0(!1):$t(t):t!==null&&Kh($t(t),e),it.Y||wt()}var ou=[];function Kh(t,e){t=$t(t),e=$t(e),!(t===e||t.P||e.P)&&(Ut&&fu&&ou.push(t,e.nt),t.eo=e,e.tt+=t.tt,e.nt||=t.nt,mr(e.ln,t.ln),mr(e.rn[0],t.rn[0]),mr(e.rn[1],t.rn[1]),mr(e.fn,t.fn),t.I!==null&&mr(e.I??=[],t.I),Di.splice(Di.indexOf(t),1))}function A0(t){return t.tt!==0||w0(t.ln,t)||!!b0?.(t)}var zh=null;function w0(t,e,n){for(let i=0;i<t.length;i++){let r=t[i];if(!(!(r.m&1)||r.R&64||r.l&8192||r.T.Re!==null&&ut(r)!==e||n&&!n(r,e)||ma&&e.P&&r.T.se&&es(r))){if(r.i===1){if(!(Ut&&r.l&-2147483648&&!e.P)&&Vh(r,zh??e))return!0;continue}for(let s=r.o;s!==null;s=s.t){let o=s.u;if((o.i===1&&o.m&1&&!(Ut&&o.l&-2147483648&&!e.P)||o.R&2048||o.l&16384&&o.m===1)&&(s.Ne===o.de||o.T?.U!=null)&&!(o.R&64)&&Vh(o,zh??e))return!0}}}return!1}function Vh(t,e){return!Xh?.(t)&&!(t.R&32&&R0(t,e))}function R0(t,e){for(;t?.R&32;)t=t._parent;return t?.l&256&&t.T?.Re!=null&&ut(t)===$t(e)}var Zs=[];function Jh(t){Zs.push(t)}var oa=[];function jh(t){En(t,vt),t.R&=-4,oa.push(t)}function eo(t,e){t.l|=256,Qh(t,e)}function Qh(t,e){let n=It(t);n.Re!==e&&(n.Re=e,e.ln.push(t))}function ed(t,e){for(let n=t.pe;n!==null;n=n.Ge)n.T?.Re?.P||(n.X!==void 0&&(n.l&256||eo(n,e),n.l|=1048576),ed(n,e))}function au(t,e,n){for(let i=t.pe;i!==null;i=i.Ge)(i.l&2304)===256&&ut(i)!==e&&n(i),au(i,e,n)}function ga(t){t.T.Re=null,t.l&=-257}var vt={et:new Array(2e3).fill(void 0),p:!1,Fe:0,Et:0},Mt=0,ca=!1,ua=!1,Gh=!1,qc=0;var lu=0;var td=0;var nd=2147483647;function wt(){if(ua){C0();return}ca||(ca=!0,!qc&&!it.Y&&queueMicrotask(Kt))}var _a=Symbol.for("solid-js/root-error-hook"),id="[REACTIVITY_HALTED]";function ya(t){if(ua)return;ua=!0,ta(!0);let e=id,n=t!==void 0&&globalThis.reportError;n||t===void 0?console.error(e):console.error(e,t),n&&n(t)}function C0(){Gh||(Gh=!0,console.error(id))}var Zt=class t{rn=[[],[]];Y=!1;flush(){if(!this.Y){this.Y=!0,cd(),Qe=null,Ni=null;try{ad(),la&&la(),Yc(vt,t._e),this.settle(),Mt++,ca=vt.Et>=vt.Fe||Mn.length!==0,this.run(1),this.run(2)}finally{this.Y=!1,Ni=null}}}settle(){y0?.()&&Yc(vt,t._e);let e=mt;mt=null,_0?.(e);let n=e!==null&&!e.P?$t(e):null;if(n!==null){let a=Mn.length;for(let l=0;l<a;l++){let u=Mn[l];if(!(u.l&2304)&&(u.T===null||u.T.Re===null||!u.T.Re.P)){if(u.ue===Re&&u.m&4&&u.i!==1)continue;if(u.ue!==Re&&!(u.m&5)&&u.T?.me==null&&u.T?.Le==null&&!u.T?.Te&&ro(u,u.le,u.ue)){u.ue=Re,u.l&=-129;continue}eo(u,n)}u.l&128&&ed(u,n)}Mn.length=0,eu?.(n);let c=oa.splice(0);if(Ut){c.sort((l,u)=>l.he-u.he);for(let l=0;l<c.length;l++)(c[l].R&96)===32&&c[l].l&32768&&fn(c[l])}}else{L0();for(let a=0;a<Zs.length;a++){let c=Zs[a];c.T?.U==null&&!c.Ae&&$n(c)}}Zs.length&&(Zs.length=0);let i=this.rn,r=null;aa&&(this.rn=r=[[],[]],aa(n),fa.length&&(fa.length=0)),this.rn=[[],[]];for(let a=Di.length-1;a>=0;a--){let c=Di[a];A0(c)||(Di.splice(a,1),v0?.(c),P0(c),a=Di.length)}S0?.();let s=n&&T0(n);M0?.(s);let o=s!==null;for(let a=0;a<2;a++)o&&mr(s.rn[a],i[a]),this.rn[a]=o||r?.[a].length||this.rn[a].length?(r?r[a]:[]).concat(o?[]:i[a],this.rn[a]):i[a];if(oa.length!==0){let a=oa.splice(0).sort((c,l)=>c.he-l.he);for(let c=0;c<a.length;c++)a[c].R&64||fn(a[c])}qh?.()}run(e){let n=this.rn[e-1];n.length&&(this.rn[e-1]=[],O0(n,e))}enqueue(e,n,i=Qe){e&&(i?.P?i:this).rn[e-1].push(n),wt()}notify(e,n,i,r){return Wh?.(e,i&n,r)?!0:n&1?(i&1&&Qe===null&&Tn(null),!0):!1}};function I0(t){let e;for(let n=0;n<t.fn.length;n++){let i=t.fn[n],r=i.T?.U?.source;if(!(i.R&64||i.m&2&&(i.i||!(i.l&8388608))&&r!==i&&(r?.m??2)&2)&&(i.R&2048||Ut&&i.l&32768)){e=1,t.P||(i.R&=-2049),i.Ae=!1;for(let s=i.pe;s!==null;s=s.Ge)s.i&&(s.Ae=!1);is?.(i),An(i)}}return t.fn.length=0,e}function P0(t){let e=I0(t);kh&&t.I!==null&&kh(t.I);for(let n=0;n<t.ln.length;n++){let i=t.ln[n];i.T.Re===null||ut(i)!==t||(i.T.Re=null,od(i))}mt===t&&(mt=null),e?it.rn[1].push(()=>Hh(t)):Hh(t)}function Hh(t){for(let e=0;e<2;e++)mr(it.rn[e],t.rn[e]),t.rn[e]=[]}function mr(t,e){for(let n=0;n<e.length;n++)t.push(e[n])}var Mn=[],rd=[],fa=[];function cu(t,e){e.fn.push(t),t.R|=2048}function to(t){Mn.push(t),it.Y||ld()}var no=0;function va(){no++}function io(t){t.we=no;let n=(t.l&512)!==0&&t.T?.De!==void 0;for(let i=t.o;i!==null;i=i.t){let r=i.u;if(r.R&4&&i.Ne===r.de&&(i!==r._||!t.X)&&(r.R|=4096),n&&r.l&8){r.R|=256;continue}An(r),r.R&8388608&&yr(r._parent,1)}}function es(t,e=new Pi){return[...t.T.se??[t]].every(n=>n===t?n.T.Ve:e.has(n)||(e.add(n),es(n,e)))}function sd(t,e){io(t),t.l&4096&&Zt.lo?.(t,e);for(let n=t.o;n!==null;n=n.t){let i=n.u,r=i.T?.Re,s=i.i===1,o;(i.m&5)===1&&(r?(i.l&2304)===256:s)&&(o=!!r&&$t(r)===$t(e._parent),i.i?s&&!o&&es(i):o||es(i))&&Qh(i,r=e),s&&t.l&32768&&(i.l|=32768,i.R&=-65537),(r?.P?D0(r,e):i.i)&&(i.R|=65536)}}function uu(t){t.Ae=!0,it.enqueue(t.i,t.W??=Zt.q.bind(null,t))}function D0(t,e){return t===e||t.nn!==null&&t.nn===e.nn}function ha(t){return t.ue!==Re&&(t.le=t.ue,t.ue=Re)}function N0(t){return!(t.m&4)&&!!t.T?.Ee&&!t.T.Ve&&(t.ue=Re,!0)}function od(t){if(!t.X){t.l&=-385,ha(t);return}let e=(t.m&1)!==0&&(t.ue===Re||N0(t)),n=t.l&2097152;if(!e&&t.T&&(t.T.Te=null),t.l=e?t.l&-1048833|1024:t.l&-3147137,n){let i=t.ue;t.ue=Re,t.ie=Mt+1,ki(t,2,i)}else ha(t)&&(t.m&=-5,t.T!=null&&(t.T.Ve=!1,t.T.je=Re),t.i&&t.i!==3&&uu(t));t.Ie=!1,t.R&=-1025,t.T?.U==null&&$n(t),t.m&1||(t.m&=-5),!e&&t.T!=null&&(t.T.me!==null||t.T.Le!==null)&&Zt.Ce(t,!1,!0)}function L0(){for(let t=0;t<Mn.length;t++){let e=Mn[t];e.l&2304||od(e)}Mn.length=0}var it=new Zt;function Kt(t){if(lu>0)return t?t():void 0;if(t){qc++;try{return t()}finally{try{Kt()}finally{qc--}}}if(!it.Y&&!ua){for(;ca;)it.flush();ta()}}function O0(t,e){for(let n=0;n<t.length;n++)t[n](e)}function An(t){vt.Fe>t.he&&(vt.Fe=t.he),ba(t,vt)}function ud(t,e){let n=(t._parent?.Qe?t._parent.Ke?.he:t._parent?.he)??-1;n>=t.he&&(t.he=n+1);let i=t.he,r=e.et[i];if(r===void 0)e.et[i]=t;else{let s=r.We;s.ve=t,t.We=s,r.We=t}i>e.Et&&(e.Et=i)}function ba(t,e){let n=t.R;n&12||(n&1?t.R=n&-4|2|8:(t.R=n|8,e.p&&yr(t)),n&16||ud(t,e))}function Sa(t,e){let n=t.R;n&28||(t.R=n|16,ud(t,e))}function En(t,e){let n=t.R;if(!(n&24))return;t.R=n&-25;let i=t.he;if(t.We===t)e.et[i]=void 0;else{let r=t.ve,s=e.et[i],o=r??s;t===s?e.et[i]=r:t.We.ve=r,o.We=t.We}t.We=t,t.ve=void 0}function fd(t){if(!t.p){t.p=!0;for(let e=0;e<=t.Et;e++)for(let n=t.et[e];n!==void 0;n=n.ve)n.R&8&&yr(n)}}function yr(t,e=2){let n=t.R;if(!((n&3)>=e)){t.R=n&-4|e;for(let i=t.o;i!==null;i=i.t)yr(i.u,1)}}function Yc(t,e){for(t.p=!1,t.Fe=0;t.Fe<=t.Et;t.Fe++){let n=t.et[t.Fe];for(;n!==void 0;)n.R&8?e(n):U0(n,t),n=t.et[t.Fe]}t.Et=0}function U0(t,e){En(t,e);let n=t.he;for(let i=t.C;i;i=i.G){let r=i.S;r.X&&r.he>=n&&(n=r.he+1)}if(t.he!==n){t.he=n,so(t,n);for(let i=t.o;i!==null;i=i.t)i.u!==t._parent&&Sa(i.u,e)}}function so(t,e){for(let n=t.pe;n;n=n.Ge)if(n.Qe)so(n,e);else if(n.he<=e){let i=n.R&24;En(n,vt),n.he=e+1,i&&(i&8?ba:Sa)(n,vt),so(n,e+1)}}var F0;function B0(t){let e=t.S,n=t.G,i=t.t,r=t.en;return i!==null?i.en=r:e.Ze=r,r!==null?r.t=i:(e.o=i,i===null&&(e.l&4096?F0(e):e.T?.Ye&&Xs(e.T.Ye),e.X&&e.l&32&&!(e.R&32)&&!(e.m&1)&&(ao?ao.push(e):pr(e)))),n}function $n(t){let e=t._,n=e!==null?e.G:t.C;if(n!==null){do n=B0(n);while(n!==null);e!==null?e.G=null:t.C=null}}function Ys(t){t.C&&(t._=null,$n(t))}var ao=null,hu=t=>ao=t;function pr(t){En(t,vt),Ys(t),qn(t,!0)}var oo=new Pi;function ad(){if(oo.size!==0){for(let t of oo)!t.o&&t.l&32&&!(t.m&1)&&!(t.R&96)&&pr(t);oo.clear()}}function vr(t,e){let n=e._;if(n!==null&&n.S===t)return;let i=null,r=e.R&4;if(r&&(i=n!==null?n.G:e.C,i!==null&&i.S===t))return i.Ne=e.de,e._=i;let s=t.Ze;if(s!==null&&s.u===e&&(!r||s.Ne===e.de))return;let o=e._=t.Ze={S:t,u:e,G:i,en:s,t:null,Ne:e.de};n!==null?n.G=o:e.C=o,s!==null?s.t=o:t.o=o,va()}function hd(t,e){return t.T?.se?.has(e)?!1:((It(t).se??=new Pi).add(e),!0)}function pu(t,e){let n=t.T?.se;return n?.delete(e)?(n.size||(t.T.se=void 0),!0):!1}function $s(t){t.T!==null&&(t.T.Ee=null)}function gu(t){t.T!==null&&(t.T.se=void 0)}function _u(t,e){for(let n=t.C;n;n=n.G){let i=n.S;if(!(i.R&64)&&(i===e?i.m&1:i.T?.se?.has(e)))return!0}return!1}function yu(t,e){It(t).fe=!0,e.source&&hd(t,e.source),t.m&2||br(t,e.source,e)}function br(t,e,n){if(!e){t.T!==null&&(t.T.U=null);return}let i=n instanceof At&&n.source===e?n:t.T?.U;It(t).U=i instanceof At&&i.source===e?i:new At(e)}function mu(t,e){for(let n=t.o;n!==null;n=n.t)e(n.u,n)}function vu(t,e){let n=new Pi,i=r=>{let s=n.has(r);e(r,s)!==!1&&!s&&(n.add(r),mu(r,i))};mu(t,i)}function co(t){t.X&&t.l&32&&!t.o&&!(t.R&32)&&!(t.m&1)&&(t.R&8?t.R|=4194304:pr(t))}function k0(t){let e;if(vu(t,(n,i)=>{!i&&!n.o&&n.l&32&&(e??=[]).push(n)}),e)for(let n of e)co(n)}function bu(t,e,n){return!(t.l&256||n&&t.R&16384&&it.Y&&!t.rr)||Qe?!1:(gu(t),t.T&&(t.T.fe=!1),(t.m&=6)&2||br(t),t.ue=e instanceof Xn?e:new Xn(t,e),t.l|=2097280,pi(t),wt(),!0)}function dd(t,e){let n=!1;vu(t,(i,r)=>{!r&&i.T?.U===e&&(An(i),n=!0)}),n&&wt()}function pi(t,e=t){pu(t,e);let n=!1,i;if(vu(t,(r,s)=>{if(s||e!==t&&_u(r,e)||!pu(r,e))return Un&&(r.l&32768?An(r):tu(r,t)),!1;r.ie=Mt;let o=r.T?.se?.values().next().value,a=r.m&2;o?a||br(r,o):(r.m&=-2,a||br(r),r.l&256&&!(e.m&1)&&Tn(ut(r)),r.T?.fe?(An(r),n=!0):eu&&r.rr?.st(),r.T!==null&&(r.T.fe=!1),!r.o&&r.l&32&&(i??=[]).push(r),tu?.(r,t))}),i)for(let r of i)co(r);n&&wt()}function lo(t){return t!=null&&typeof t=="object"&&typeof t.then=="function"}function pd(t){let e=t.T?.Se;e!=null&&(t.T.Se=null,e())}function md(t,e,n,i){let r=!1,s=!1;if(typeof e=="object"&&e!==null&&dn(()=>{r=e[Symbol.asyncIterator],s=!r&&lo(e)}),!s&&!r)return t.T!==null&&(t.T.Ee=null,Un&&(t.l&=-536870913)),t.Ie=!1,e;It(t).Ee=e,Un&&(t.l|=536870912),t.T.ce=td||nd,t.T.se=void 0;let o,a=p=>{if(t.T?.Ee!==e)return;let x=p instanceof At;if(x&&t.Ie){$s(t),yu(t,p),t.ie=Mt;return}(x||!bu(t,p))&&(ki(t,x?1:2,p),x||qn(t,!1,!0)),x&&pi(t),t.ie=Mt,x||k0(t),i?.(p,x)},c=(p,x)=>{if(t.T?.Ee!==e||t.R&2&&!(Un&&t.m&4))return;let g=Un&&Mn.some(d=>d.ue!==Re),m=t.m&4;if(z0(t),n){if(!n(p,m,a))return}else Fn(t,()=>p);t.ue===Re&&(t.Ie=!1,$n(t)),pi(t),wt(),(x||!g)&&Kt(),x?.()},l=()=>t.l&32&&!t.o&&!(t.m&1)?(pr(t),!0):!1,u=(p,x)=>{let g=p[Symbol.asyncIterator](),m=!1,d=!1,A=!x,b=()=>{if(!d){d=!0;try{let D=g.return?.();lo(D)&&D.then(void 0,()=>{})}catch{}}};jr(b,x),It(t).Se=b;let T=()=>{try{l()||w()}catch(D){a(D)}},w=()=>{let D,B,S=!1,y=!1,P=!0,k=g.next();if((lo(k)?k:{then:X=>{X(k)}}).then(X=>{if(P&&A)D=X,S=!0,X.done&&(d=!0);else{if(t.T?.Ee!==e)return;X.done?(d=!0,m?(wt(),Kt()):c(void 0),l()):(m=!0,c(X.value,T))}},X=>{P&&A?(B=X,y=!0):t.T?.Ee===e&&(d=!0,a(X),l())}),P=!1,y){if(d=!0,a(B),A)throw B;return!0}return S&&!D.done?(o=D.value,m=!0,w()):S&&D.done},M=w();return A=!1,m||M},f=null,h=(p,x)=>{let g=!1;if(typeof p=="object"&&p!==null&&dn(()=>{g=p[Symbol.asyncIterator]}),!g)return!1;o=void 0;let m=u(p,x);return x||(f=m),!0};if(s){let p=!1,x=!1,g,m=!0;if(e.then(d=>{if(m)o=d,p=!0;else{try{if(t.T?.Ee===e&&!(t.R&64)&&h(d,t))return;c(d)}catch(A){a(A)}l()}},d=>{m?(g=d,x=!0):(a(d),l())}),m=!1,x)throw a(g),g;p?h(o)||(t.Ie=!1):f=!1}if(r&&h(e),f!==null){if(!f){if(t.Ie)return t.le;throw new At(rt)}t.Ie=!1}return o}function Su(t,e=!1){t.T?.se&&gu(t),t.T?.fe&&(t.T.fe=!1),t.m=e?0:t.m&4,t.T?.U&&br(t);let n=Mu(t);n&&n.call(t)}function z0(t,e=!1){let n=t.T?.se;n&&(n.delete(t),n.size)?(t.T.fe=!1,e&&(t.m=1),br(t,n.values().next().value)):Su(t,e)}function ki(t,e,n){e===2&&!(n instanceof Xn)&&!(n instanceof At)&&(n=new Xn(t,n));let i=e===1&&n instanceof At&&n.source;if(i?(t.m&2&&(t.T.Te=t.T.U),hd(t,i)):gu(t),t.m=e|(e===2?t.m&12?8:0:e===1&&t.m&8?4:t.m&4),i?br(t,i,n):It(t).U=n,ma&&e===1&&t.l&8192){Qe===null&&Tn(t.R&8192?null:ut(t)._parent);return}let r=Mu(t);if(r){r.call(t);return}V0(t,e,n)}function V0(t,e,n){let i=e===1&&n instanceof At&&n.source;mu(t,(r,s)=>{if(r.ie=Mt,r.l&16384||Un&&(r.l&32768||i&&r.l&2097152)&&!(i&&Un(r,t))||e===1&&s.Ne!==r.de){e!==1&&pu(r,t)&&pi(r,t),An(r),wt();return}if(i&&r.T?.se?.has(i)){Qe===null&&(r.l&2304)===256&&it.Y&&!Bi?.(r,i.ie===Mt)&&Tn(ut(r));return}(i||e!==1&&(r.T?.U!==n||r.T?.se))&&(et&&Qe!==null?et(r,Qe,!0,t):(to(r),e===1&&(r.l&2304)===256&&!r.i&&(ma&&r.m&1&&es(r)?ga(r):Tn(ut(r)))),ki(r,e,n),r.rr?.st(e,n))})}Zt._e=t=>{t.i===3?(En(t,vt),t.Ae=!0,it.enqueue(2,t.Z)):t.R&32&&!(t.R&65536)?jh(t):et&&t.R&32&&q0(t)?(En(t,vt),t.R&=-65540):is&&t.T?.He&&is(t,1)||fn(t)};function q0(t){let e=t._parent;for(;e.R&32;)e=e._parent;return(e.l&10240)===2048||e.i&&e.T?.Re?.P}Zt.Ce=qn;var Yt=!1,rt=null,Sr=!1,Eu,Y0=null;function Td(t){for(;t;){if(t.Oe)return!0;t=t._parent}return!1}function fn(t,e=!1){va();let n=t.i,i,r=Re,s=Qe,o=Eu,a=et&&(Eu=e&&(s||o));if(is&&!e&&t.T){let y=t.T.He;(y?y!==t.T.Ee&&(t.T.He=void 0,1):t.l&2048&&!(t.R&65536))&&is(t,2)}if(et){let y=e?Iu(rt):null,P=y?.R|0;(P&32768||y&&(y.l&16777216&&y.m&4||y.i===1&&y._&&Ad(y,k=>k.l&32768,y._)))&&(t.l|=16777216),hi((t.R&65536||(t.l&10240)===2048)&&t.T?.Re?.P?t.T.Re:s?._parent.Pe!=s&&P&4?s:null)}let c=t.l&2097152,l;if(!e){if(En(t,vt),et&&!n&&(t.m&1||(t.l&1610612992)===536871168)&&(t.l&=-32769),t.T!==null&&(t.T.Ee=null,pd(t)),t.l&256){let y=ut(t);y.P||t.l&524288||(!(t.l&(32768|1<<23))||Ut&&!(t.l&1<<23)&&Ca(t,y)?su(y,Bi?.(t,t.m&4)):y!==mt&&!(t.m&4||t.l&1048576)&&((r=t.ue)!==Re&&io(t),t.ue=Re,t.l&=-257))}if(n===3||t.l&128){let y=ao;hu(i=[]),qn(t),hu(y)}else(t.pe!==null||t.ke!==null)&&$0(t);xa&&(l=t.C!==null,t.T!==null&&(t.l&2097152||t.T.Ft!==void 0)&&xa(t)),t.l&2097152&&(t.ue=Re,t.l^=2097152)}let u=t.m&4,f=t.m&2&&t.T?.U,p=(t.m&1)!==0&&t.T?.se,x=t.T?.se?.has(t),g=!1,m=(t.R&8192)!==0&&!((t.m&1||t.ue!==Re&&!(t.R&1024))&&t.T!==null&&!t.T.Ve),d=rt;rt=t,t._=null,t.de++;let A=t.R&4194304;t.R=4|t.R&8224,t.ie=Mt;let b=t.ue!==Re?t.ue:t.le,T=t.he,w=!1,M=!1,D=Yt;Yt=!0;try{if(t.l&64)b=t.X(b),t.T!==null&&(t.T.Ee=null),t.Ie=!1;else{let y=t.T?.Ee,P=t.X(b),k=typeof P=="object"&&P!==null,W=t.T?.Ee!==y;b=W||!k?P:md(t,P),!W&&!k&&(t.T!==null&&(t.T.Ee=null,Un&&(t.l&=-536870913)),t.Ie=!1)}(t.m!==0||t.T!==null)&&!(_r&&t.m&1&&_r(t,null,!0))&&Su(t,e)}catch(y){let P=y instanceof At;if(Un&&(!P||t.Ie)&&(t.l&=-536870913),P&&t.Ie)yu(t,y);else if((P||!(g=bu(t,y,!0)))&&(P&&(It(t).fe=!0),ki(t,P?1:2,y),P&&x&&!t.T?.Ee&&pi(t)),(P||g)&&p)for(let k of p)k!==t&&!(t.T?.se?.has(k)&&(k.m&1||_u(t,k)))&&pi(t,k)}finally{if(Yt=D,et&&(Eu=o),w=(t.R&4096)!==0,M=!!(t.R&(a?s||n||!(t.m&1)?16512:0:128)),Ut&&(t.l=t.l&1073709055|t.R&32768|(t.R&2097152)<<9|(t.R&1048576)<<11),t.R=t.R&936032|(e?t.R&256:0),rt=d,i)for(let y of i)co(y);l&&!m&&t.m&1&&(m=!!xa(t,1)),t.T!==null&&(t.T.Ve=m&&(t.m&1)!==0)}if(t.R&64){Ys(t),$s(t),et&&hi(s);return}let B=et?Qe:null,S=!!t.T?.U||g;if(et&&B!==null&&(et(t,B,e,S)?hi(B):B=null),!S){let y=t.ue===Re,P=y?t.le:t.ue,k=mt??Ni,W=y&&u&&!n||!!t.T?.Te||!!(f&&k)||!!c||B!==null&&t._parent?.l&256||!ro(t,P,b);if(n&&W&&!(t.R&262144&&!t.Ae&&Object.is(t.ge,b))&&y&&(t.Ae=!t.T?.U,e||it.enqueue(n,t.W??=Zt.q.bind(null,t),B)),!(Jc&&!e&&B===null&&t.l&8192&&Jc(t,b,S))){if(!S){if(W)B!==null?(n&&t.ue===Re?t.le=b:t.ue=b,e&&!n&&(t.m|=4)):(e?!(k!==null&&(M||Iu(d)?.R&128)):n&&t.ue===Re)?t.le=b:(t.ue=b,f&&(t.T.Te=f),e&&(eo(t,k),t.m|=4,Bi?.(t,!a&&mt))),t.o!==null&&(B!==null?sd(t,B):io(t));else if(t.he!=T)for(let X=t.o;X!==null;X=X.t)Sa(X.u,vt)}}if(!W&&!t.T?.U&&(f&&dd(t,f),p))for(let X of p)X!==t&&pi(t,X);x&&!(t.m&5)&&pi(t)}if(e&&B===null&&M&&t.m&1){let y=mt??Ni;y&&!y.P&&(n&&Bi?.(t)===2||eo(t,y))}!t.T?.U&&(B!==null||t.ue===Re)&&!(n&&t.Ae)&&(e||n===3?$n(t):Jh(t)),(t.ue!==Re||t.T!==null&&(t.T.me!==null||t.T.Le!==null)||(t.m&5)!==0&&(!e||(t.m&1)!==0))&&(t.l|=128,B===null&&to(t)),et&&hi(s),w&&(An(t),wt()),nu&&r!==Re&&Object.is(b,r)&&nu(t),A&&co(t)}function wu(t){if(!(t.R&68)){if(t.R&1)for(let e=t.C;e;e=e.G){let n=e.S;if(n.X&&wu(n),t.R&2)break}(t.R&2||t.T?.U&&t.ie<Mt&&!t.T?.Ee)&&fn(t),t.R=t.R&937336}}function wn(t,e){let n=e?.transparent??!1,i=e!==null&&typeof e=="object"&&"loadingValue"in e,r={id:ra(e,n,rt),l:(n?4:0)|(e?.ownedWrite?1:0)|(!rt||e?.lazy?32:0)|(e?.sync?64:0)|(e?.ae?2:0)|(e?.xe??0)|(Sr&&Td(rt)?8:0),ye:e?.equals??os,ke:null,A:rt?.A??Ws,be:0,X:t,le:i?e.loadingValue:void 0,he:0,ve:void 0,We:null,C:null,_:null,de:0,o:null,Ze:null,_parent:rt,Ge:null,Me:null,pe:null,R:e?.lazy?512:0,m:i?0:4,ie:Mt,ue:Re,we:-1,Ie:i,T:null};return e?.unobserved&&(It(r).Ye=e.unobserved),Id(r,e),r}function It(t){return t.T??={Ee:null,Se:null,U:void 0,fe:void 0,se:void 0,Ye:void 0,De:void 0,me:null,Le:null,Re:null,Ve:!1,je:Re,Be:-1,ce:0,Ue:!1,I:0,Te:null}}var fu=null;function Ru(t,e){Ut&&!mt&&(fu=t,ou.length=0),t.R|=128,(e.m&4||t.i!==1)&&su(ut(e),!t.i&&t.m&4||Bi?.(t))}function xd(t,e){let n=Ut&&t.l&32768,i=et&&Qe!==null;if(et&&t.l&16777216&&t.m&4&&(!i||e.m&1))return Ru(t,e),!1;if(!(n&&iu(t,e))&&!((!i||t.m&4&&e.m&1)&&!n&&(!(t.l&1<<23)||e.l&1024))){let r=ut(e);if(i&&Qe.over&&$t(Qe.over)===r&&!n)return!1;if(!(!i&&r===mt&&!n||Ca(t,r)))return cu(t,r),(i||n)&&_r(t,e),!0}return Ru(t,e),!1}function Ca(t,e){return(t.m&4||t.l&1048576)&&t.l&256&&ut(t)===e}function Ad(t,e,n){for(let i=t.C;i!==null;i=i===n?null:i.G)if(e(i.S))return 1}var Cu;function gd(t,e){return e.ue!==Re&&t.l&32768&&!Ad(t,n=>n===e)}function Iu(t){return t!==null&&t.Qe?t.Ke:t}function $0(t){Wc(t);let e=It(t);e.Le=t.ke,e.me=t.pe,t.ke=null,t.pe=null,t.be=0}function wd(t,e,n,i,r){let s=r?.transparent??!1,o={id:ra(r,s,rt),l:i<<23|(s?4:0)|(r?.ownedWrite?1:0)|(r?.sync?64:0)|(r?.xe??0)|(Sr&&Td(rt)?8:0),ye:!1,ke:null,A:rt?.A??Ws,be:0,X:t,le:void 0,he:0,ve:void 0,We:null,C:null,_:null,de:0,o:null,Ze:null,_parent:rt,Ge:null,Me:null,pe:null,R:512,m:4,ie:Mt,ue:Re,we:-1,Ie:!1,Ae:!1,ge:void 0,qe:e,Je:n,ze:void 0,i,T:null};return r?.unobserved&&(It(o).Ye=r.unobserved),Id(o,Z0),o}var Rd=null;function Cd(t){Rd=t}function Mu(t){return t.i?Rd:null}var Z0={lazy:!0};function Id(t,e){t.We=t;let n=rt?.Qe?rt.Ke:rt;rt&&na(rt,t),n&&(t.he=n.he+1),Zh?.(t),!e?.lazy&&fn(t,!0),Sr&&!e?.lazy&&!(t.m&1)&&!(t.l&2)&&Lu(t,t.le)}function mi(t,e){let n={ye:e?.equals??os,l:(e?.ownedWrite?1:0)|(e?.ae?2:0),le:t,o:null,Ze:null,ie:Mt,ue:Re,we:-1,T:null};return e?.unobserved&&(It(n).Ye=e.unobserved),Sr&&!(n.l&2)&&Lu(n,t),n}function os(t,e){return t===e}var Ra=null;function dn(t,e){let n=Yt;Yt=!1;try{return ru?ru(t):t()}finally{Yt=n}}var Pu=0;function Ia(t){Pu++;try{dn(t)}finally{Pu--}}var Pd=!1;function K0(t,e){if(t.R&512)t.R&=-513,fn(t,!0);else if(t.R&64&&t.l&32){let n=t._parent;if(n!==null){if(n.R&64){t.l&=-33;return}t.R&32||na(n,t)}fn(t,!0)}}function J0(t,e){return!e||t.ue===Re||e.l&16}var po=!1;function ld(){po=!0}function j0(t){return it.Y||t.ue===Re||t.l&4194304?Re:t.l&256?t.T.Be===Mt?t.T.je:Re:t.le}function Q0(t){let e=t.T;e.Be!==Mt&&(la&&rd.push(t),e.je=t.ue,e.Be=Mt,po=!0)}var Ea=[];function ex(t){return t.R|=4096,!0}function cd(){if(po=!1,Ea.length!==0){for(let t of Ea)t.l&=-4194305;Ea.length=0}}function tx(t,e){t.he>=vt.Fe||t.R&1?(yr(e),fd(vt),wu(t)):e.l&65536&&wu(t);let n=t.he;t._parent===e?t.R|=8388608:n>=e.he&&so(e,e.he=n+1)}function nx(t,e,n){return Qe===null&&t.m&n.m&4&&e.ue!==Re&&!(e.l&2097408)&&!t.i&&(t.R&4096||t.ue===Re&&t.T?.$e!==Mt&&(!(t.m&1)||t.T?.se?.delete(n.T.U.source))&&(It(t).$e=Mt,t.R|=4096))}function Mr(t){let e=rt;if(e?.Qe&&(e=e.Ke),Ra!==null)return Ra(t,e);if(typeof t.X=="function"&&K0(t),!t.X&&t.T?.De===void 0&&!Sr&&(!po||t.ue===Re)&&!(t.l&2048))return e&&(et&&(Cu=Yt&&gd(e,t)),Yt&&vr(t,e),t.l&256&&!(e.l&16)&&xd(e,t))||!e||t.ue===Re||e.l&16||t.ue===t.le&&Object.is(t.ue,t.le)||(Ut&&e.l&32768||et&&Qe?.folded)&&Ld(e,t)?t.le:(Nd(e),t.ue);let n=!1,i;if(e){if(et&&(Cu=Yt&&gd(e,t)),Yt&&(i=vr(t,e),t.X)){if(tx(t,e),Ut&&(e.m&4?e.l&256||mt:e.l&1048576)&&(e.i===1&&t.l&32768&&!(t.m&5)&&(e.R|=1048576),(t.l&1619034112)===32768&&!(e.l&536870912))){let s=$t(e.l&256?ut(e):mt),o=It(t);o.Dt!==s&&(o.Dt=s,fn(t))}Ut&&!e.i&&(e.R|=t.l&32768&(t.m&1&&(e.l&128||e.m&4)?e.l:-1))}t.l&256&&!(t.l&2048)&&!(e.l&16)&&(t.m&4?Ru(e,t):n=xd(e,t))}if(Kc&&t.l&2048){let s=Kc(e,t);if(s!==Re)return s}if(Sr&&e&&e.l&8){let s=t.T?.De;if(s!==void 0&&!(t.m&2)){let o=s===Gc?void 0:s;return(t.ue!==Re?t.ue:t.le)!==o&&(e.R|=256),o}}if(et&&t.m&1&&!n&&!(t.l&2048)&&!(t.m&4)&&(e!==null&&e.l&32768&&!(e.l&16777216&&e.m&4)?n=Ut(e,t):Qe!==null&&(!(e?.m&4)||ix(e))&&(n=_r(e,t,!0))),t.m&1&&!n){if(e){if(!(e.l&16)||t.m&4){if(Ut&&nx(e,t,t))return t.ue;throw!Yt&&!Pd&&t!==e&&vr(t,e),t.T?.U}}else if(t.m&4)throw t.T?.U}if(t.X&&t.m&2){if(i&&t.ie<Mt&&!(t.R&32))return fn(t),Mr(t);throw!n&&t.l&2097152&&_d(t,e),t.T?.U}(n||!e)&&Dd(t);let r=_d(t,n?null:e);return!e&&typeof t.X=="function"&&t.l&32&&!(t.m&1)&&!t.o&&(oo.add(t),wt()),r}function ix(t){let e=t._parent;return Qe._parent?.Pe!==Qe&&e?.X&&!(e.m&4|e.l&8388608)}function Dd(t){if(t.T?.Te)throw t.T.Te}function _d(t,e){if(t.ue!==Re&&t.m&4&&(!e||Pd||e.l&16)){if(Pu>0){let i=Iu(rt);if(i&&t.l&256&&Ca(i,ut(t)))return t.ue}throw new At(null)}let n=e&&po?j0(t):Re;if(n!==Re)return ex(e),n;if(J0(t,e)||Ut&&e.l&32768&&!(t.m&4)&&Ld(e,t)&&!Dd(t))return t.le;if(Nd(e,t),t.l&2097152)throw t.ue;return t.ue}function Nd(t,e){e?.m&4||(_r&&Qe!==null&&_r(t,null),t.R|=16384,aa&&(Qe!==null||t.i&&t.l&32768)&&fa.push(t))}function Ld(t,e){return mt===null||Ca(t,mt)||(e?.l&2304)===256||Ut&&iu(t,e)?!1:(et&&e&&Cu&&Qe&&t.R>>24!=1&&(Qe.Gt=1),cu(t,mt),!0)}function rx(t){it.Y||t.l&4194304||(t.l|=4194304,Ea.push(t))}function sx(t,e){t.l&2||t.X!==void 0||t.T?.De!==void 0||Lu(t,e)}function Lu(t,e){It(t).De=e===void 0?Gc:e,t.l|=512,Y0.add(t)}var yd=null;function ro(t,e,n){if(t.ye===os)return e===n;try{return t.ye&&t.ye(e,n)}catch(i){if(!(i instanceof At))return ki(t,2,i),!0}}function Fn(t,e){yd!==null&&yd(t);let n=t.ue===Re?t.le:t.ue;if(typeof e=="function"&&(e=e(n)),jc&&t.l&2048)return jc(t,e);t.l&256&&Tn(ut(t));let i=Ut?t.ye!==os:null;if(!(!!(t.m&4)||!!t.T?.Te||(i===!1?n!==e:!ro(t,n,e))))return e;Sr&&sx(t,n);let s=t.ue!==Re;return s?t.l&256&&!it.Y&&Q0(t):to(t),t.ue=i&&s&&!(t.m&4||t.T?.Te)&&ro(t,t.le,e)?t.le:e,rt!==null&&rx(t),t.X!==void 0&&(t.ie=Mt),s&&t.we===no||(io(t),wt()),e}function Od(t,e){let n=t.l&256&&!(t.R&1024)&&ut(t)!==mt;if(n&&typeof e=="function"){let i=e(t.le);e=()=>i}return t.m&2&&(t.T.Te=t.T.U,ki(t,0)),e=Fn(t,e),t.l&=-2097153,n?(t.R=t.R&-2|2,ba(t,vt),wt()):t.ue!==Re&&(t.R|=1024),e}function Gt(t,e){let n=rt,i=Yt;rt=t,Yt=!1;try{return e()}finally{rt=n,Yt=i}}var Ou=null;function Bu(t,e,n,i){let r=!!i?.user,s=wd(t,e,n,r?2:1,i);fn(s,!0),i?.defer?ha(s):s.ue===Re&&(s.T?.Re?.P||s.i===2||i?.schedule?it.enqueue(s.i,Fu.bind(null,s),s.T?.Re):Fu(s,0))}function ox(){let t=this.m,e=this.T?.U;if(t&2){if(it.notify(this,1,0),this.i===2){this.m&2&&uu(this);return}Uu(this,Hs(e))}else this.i===2?t&1&&this.Ae&&!e?.source?.T?.Ve&&(It(this).fe=!(this.Ae=!1)):this.i===1&&it.notify(this,3,t,e)}function Uu(t,e,n){if(!it.notify(t,2,2))throw ya(e),e}function Fu(t,e){if(!t.Ae||t.R&64||e&&Qc?.(t)||e&&$h?.(t))return;if(t.m&2&&t.i===2){let r=Hs(t.T?.U);t.ge=t.le,t.Ae=!1;try{t.Je?t.Je(r,()=>{let s=t.ze;t.ze=void 0,s?.()}):console.error(r)}catch(s){Uu(t,s)}return}let n=t.T?.U==null,i=t.ze;t.ze=void 0;try{i?.();let r=t.qe(t.le,t.ge);t.ze=r}catch(r){It(t).U=new Xn(t,r),t.m|=2,Uu(t,r)}finally{t.ge=t.le,t.Ae=!1,n&&$n(t)}}Zt.q=Fu;Cd(ox);var ax,Ud=new WeakSet;function lx(t){for(let e=t;e;e=e._parent){let n=e[_a];if(n!==void 0)return n}return ax}function Fd(t){let e=[];for(let n=t;n;n=n._parent){let i=n._name;typeof i=="string"&&i.length&&e.push(i)}return e.length?e.reverse():void 0}function Bd(t,e,n){if(t!==null&&(typeof t=="object"||typeof t=="function")){if(Ud.has(t))return;Ud.add(t)}let r=lx(e);if(r===void 0)return;let s={},o=Fd(e),a=Fd(n)??o;a!==void 0&&(s.ownerPath=a),o!==void 0&&(s.boundaryPath=o);try{r(t,s)}catch(c){console.error(c)}}var Pa=Symbol(0);var Gi=Symbol(0),nn=Symbol(0),Er=Symbol(0);var jM=Object.prototype;function kd(t){return Reflect.ownKeys(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}var zd=null;function Tr(t){return jr(t)}function Bn(t){let e=Mr.bind(null,t);return e[Uh]=t,e}function ku(t,e){if(typeof t=="function"){let i=wn(t,e);return i.l&=-33,[Bn(i),Od.bind(null,i)]}let n=mi(t,e);return Ou!==null&&Ou(n),[Bn(n),Fn.bind(null,n)]}function mo(t,e){return Bn(wn(t,e))}function zu(t,e,n){Bu(t,e.effect||e,e.error,{user:!0,...n})}function Vu(t,e,n){Bu(t,e,void 0,n)}function Na(t,e,n){let i=typeof n?.keyed=="function"?n.keyed:void 0,r=e.length>1,s=e,o={H:Ln(),it:0,st:t,ot:[],ft:s,ht:[],ln:[],Xe:i,ct:i||n?.keyed===!1?[]:void 0,lt:r&&n?.keyed!==!1?[]:void 0,ut:n?.keyed===!1,L:n?.fallback},a=wn(dx.bind(o),void 0);return a.l&=-33,Bn(a)}var Da={ownedWrite:!0};function cx(t,e,n,i){let r=t.ot,s=t.it-1,o=[],a=[],c=[],l=256,u=i,f=i;for(;u<=s&&f<=n-1;){let h=r[u],p=e[f];if(h===p){let d=u;do f++;while(++u<=s&&f<n&&r[u]===e[f]);c.push(d,f-u+d,u-d);continue}let x=-1,g=Math.min(32-o.length,s-u,l);for(let d=1;d<=g;d++)if(r[u+d]===p){x=d;break}l-=x===-1?g:x;let m=-1;g=Math.min(32-a.length,n-1-f,l);for(let d=1;d<=g;d++)if(e[f+d]===h){m=d;break}if(l-=m===-1?g:m,x!==-1&&(m===-1||x<=m)){for(;x-- >0;)o.push(u++);continue}if(m!==-1){for(;m-- >0;)a.push(f++);continue}if(l<=0||o.length===32||a.length===32)return!1;o.push(u++),a.push(f++)}for(;u<=s;u++){if(o.length===32)return!1;o.push(u)}for(;f<=n-1;f++){if(a.length===32)return!1;a.push(f)}return ux(t,e,n,i,o,a,c)}function ux(t,e,n,i,r,s,o){let a=t.ot,c,l,u;if(s.length!==0)for(u=new Array(r.length),l=0;l<s.length;l++){let g=-1;for(c=0;c<r.length;c++)if(!u[c]&&a[r[c]]===e[s[l]]){g=c;break}if(g===-1)return!1;u[g]=!0,s[l]=s[l]<<6|g}for(c=0;c<r.length;c++){let g=a[r[c]];if(g===void 0)return!1;for(l=i-1;(l=a.indexOf(g,l+1))!==-1;)if(!r.includes(l))return!1}let f=t.ht,h=t.ln,p=f.slice(0,n),x=h.slice(0,n);for(let g=0;g<o.length;g+=3){let m=o[g],d=o[g+1];if(m!==d)for(let A=0;A<o[g+2];A++)p[d+A]=f[m+A],x[d+A]=h[m+A]}for(l=0;l<s.length;l++){let g=s[l]>>6,m=r[s[l]&63];p[g]=f[m],x[g]=h[m]}for(t.ht=p,t.ln=x,t.it=n,t.ot=e,c=0;c<r.length;c++)(u===void 0||!u[c])&&h[r[c]].dispose();return!0}function fx(t,e,n,i,r,s,o,a,c){let l=t.Xe,u=t.ot,f=t.ln,h=[],p=n;for(let x=n;x<=r;p++,x++){let g=l?l(e[x]):e[x];for(;p<=i&&(l?l(u[p]):u[p])!==g;)h.push(f[p++]);if(p>i)return o.fill(void 0),null;s[x]=t.ht[p],o[x-n]=f[p],a&&(a[x-n]=t.ct[p]),c&&(c[x-n]=t.lt[p])}for(;p<=i;p++)h.push(f[p]);return h}function hx(t,e,n,i,r,s,o,a,c){let l=t.ln,u=t.ct,f=t.lt,h=t.it,p=n-h,x,g;if(p>0)for(l.length=n,u&&(u.length=n),f&&(f.length=n),x=h-1,g=n-1;x>r;x--,g--)l[g]=l[x],u&&(u[g]=u[x]),f&&(f[g]=f[x]);else if(p<0){for(x=r+1,g=s+1;x<h;x++,g++)l[g]=l[x],u&&(u[g]=u[x]),f&&(f[g]=f[x]);l.length=n,u&&(u.length=n),f&&(f.length=n)}for(g=i;g<=s;g++)l[g]=o[g-i],u&&Gu(u[g]=a[g-i],e[g]),f&&Fn(f[g]=c[g-i],g);for(g=s+1;g<n;g++)u&&Gu(u[g],e[g]),f&&p!==0&&Fn(f[g],g)}var Gu=(t,e)=>t.le===e&&t.ue===Re||Fn(t,e);function dx(){this.H.Ke=un();let t=this.st()||[];t[Pa],t=zd?.(t[Gi])??t;let e=t.length;return Gt(this.H,px.bind(this,t,e)),this.ht}function px(t,e){let n=t.slice(0),i,r,s,o,a,c=this.ct?this.ut?()=>(o[s]=mi(n[r],Da),this.ft(Bn(o[s]),r)):()=>(o[s]=mi(n[r],Da),a&&(a[s]=mi(r,Da)),this.ft(Bn(o[s]),a?Bn(a[s]):void 0)):this.lt?()=>{let l=n[r];return a[s]=mi(r,Da),this.ft(l,Bn(a[s]))}:()=>{let l=n[r];return this.ft(l)};if(e===0)this.it!==0&&(this.H.dispose(!1),this.ln=[],this.ot=[],this.ht=[],this.it=0,this.ct&&(this.ct=[]),this.lt&&(this.lt=[])),this.L&&!this.ht.length&&(this.ln[0]?.dispose(),this.ht[0]=Gt(this.ln[0]=Ln(),this.L));else if(this.it===0){let l=new Array(e),u=new Array(e);o=this.ct&&new Array(e),a=this.lt&&new Array(e);try{for(r=0;r<e;r++)s=r,l[r]=Gt(u[r]=Ln(),c)}catch(f){for(i=0;i<=r;i++)u[i]?.dispose();throw f}this.ln[0]&&this.ln[0].dispose(),this.ht=l,this.ln=u,o&&(this.ct=o),a&&(this.lt=a),this.ot=n,this.it=e}else{let l,u,f,h,p,x,g,m,d,A;for(l=0,u=Math.min(this.it,e);l<u&&(this.ot[l]===n[l]||this.ct&&Vd(this.Xe,this.ot[l],n[l]));l++)this.ct&&Gu(this.ct[l],n[l]);for(u=this.it-1,f=e-1;u>=l&&f>=l&&(this.ot[u]===n[f]||this.ct&&Vd(this.Xe,this.ot[u],n[f]));u--,f--);if(l===e&&this.it===e){this.ot=n;return}if(e<=this.it&&u-l>64&&this.ct===void 0&&this.lt===void 0){let B=l+(f-l>>1),S=n[B],y=Math.min(u,B+32),P=Math.max(l,B-32);for(;P<=y&&this.ot[P]!==S;)P++;if(P<=y&&cx(this,n,e,l))return}let b=e-this.it,T=f-l+1,w=new Array(e),M=new Array(T);o=this.ct?new Array(T):void 0,a=this.lt?new Array(T):void 0;let D=b<0?fx(this,n,l,u,f,w,M,o,a):null;if(D!==null)D.length!==0&&(m=D);else{for(x=new Map,g=new Array(T),r=f;r>=l;r--)h=n[r],p=this.Xe?this.Xe(h):h,i=x.get(p),g[r-l]=i===void 0?-1:i,x.set(p,r);for(i=l;i<=u;i++)h=this.ot[i],p=this.Xe?this.Xe(h):h,r=x.get(p),r!==void 0&&r!==-1?(w[r]=this.ht[i],M[r-l]=this.ln[i],o&&(o[r-l]=this.ct[i]),a&&(a[r-l]=this.lt[i]),r=g[r-l],x.set(p,r)):(m??=[]).push(this.ln[i]);try{for(r=l;r<=f;r++)M[r-l]===void 0&&((d??=[]).push(M[r-l]=Ln()),s=r-l,w[r]=Gt(M[r-l],c))}catch(B){if(d)for(i=0;i<d.length;i++)d[i].dispose();throw B}}for(i=0;i<l;i++)w[i]=this.ht[i];for(r=f+1;r<e;r++)w[r]=this.ht[r-b];if(hx(this,n,e,l,u,f,M,o,a),this.ht=w,this.it=e,this.ot=n,m)for(i=0;i<m.length;i++)m[i].dispose()}}function Vd(t,e,n){return t?t(e)===t(n):!0}function Ar(t,e){if(typeof t=="function"&&!t.length){if(e?.doNotUnwrap)return t;do t=t();while(typeof t=="function"&&!t.length)}if(!(e?.skipNonRendered&&(t==null||t===!0||t===!1||t===""))){if(Array.isArray(t)){let n=[];return Hu(t,n,e)?()=>{let i=[];return Hu(n,i,{...e,doNotUnwrap:!1}),i}:n}return t}}function Hu(t,e=[],n){let i=null,r=!1;for(let s=0;s<t.length;s++)try{let o=t[s];if(typeof o=="function"&&!o.length){if(n?.doNotUnwrap){e.push(o),r=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?r=Hu(o,e,n)||r:n?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof At))throw o;i=o}if(i)throw i;return r}var Xu=Symbol(""),Gd=Symbol(""),Jt=null;var Rr=new Set,as=t=>t.A[Xu],qu=t=>!!t&&(t.i===2&&t.L||qu(t._parent)),Hi=t=>t.i===2||!t.D||t.h||qu(t._parent),Wd=t=>!!t&&(t.i&1?Hi(t):Wd(t._parent)),Xd=(t,e)=>t.i|1|(qu(t._parent)&&e.A?.[Xu]===t?2:0);function Cr(t,e,n=e){t.F.set(e,n),Rr.add(t)}function La(t,e,n,i=e){if(t.i===2){let r=et?Qe??(e.T?.Re?.P?ut(e):null):null;et&&!t.L&&(t.P=r),n??=e.T?.U,i=n?.source??e,i.R&64&&(i=e);let s=Hs(n);et&&r&&et(t.U,r,!0,!1),Fn(t.U,s),Bd(s,t.H,i)}else t.D=!1;Cr(t,e,i),t.h&&Wu(t),t.L||xo(t),Jt&&t.v!==null&&Jt.V(t.v)}function Wu(t){t.D=!1,t.P=t.B;let e=t.j;!t.P&&e.l&256&&ut(e)!==mt&&ga(e),et&&t.P!==null&&t.j!==null&&et(t.j,t.P,!0,!1)}function xo(t){t.j!==null&&!(t.j.R&96)&&(An(t.j),wt())}function Hd(t,e,n){if(e===0){if(Rr.size)for(let i=as(t);i;i=i._parent)!(i.F.get(t)?.m&Xd(i,t))&&i.F.delete(t)&&!$u(i,0)&&(i.L&&xo(i),Jt&&i.v!==null&&Jt.V(i.v));return!1}for(let i=as(t);i;i=i._parent){if(!(i.i&e)){i.L&&i.i>e&&Cr(i,t);continue}if(Hi(i))return La(i,t,n),i.h?2:!0;Cr(i,t)}return!1}function mx(t){for(let e=as(t);e;e=e._parent)if(e.i&1&&Hi(e))return e.h}function Yu(t,e){for(let r=as(t);r;r=r._parent)if(r.L)return r;let n,i=t.o;if(e||t.l&16384)for(e||=new Set,n=t.i!=1;i&&(n=e.size==e.add(i.u).size||Yu(i.u,e));)i=i.t;return n}function xx(t){let e=Yu(t);return e===void 0||e.j.l&(et?2304:256)?!1:((e.M??=new Set).add(t),!0)}function gx(t){if(t.M!==null){for(let e of t.M){let n=e.i;it.enqueue(n===3?2:n,n===3?e.Z:e.W??=Zt.q.bind(null,e))}t.M=null}}function _x(t,e,n){if(!(n.m&3||e.m&2)){for(let i=as(e);i&&i!==t;i=i._parent)if(i.i&1&&Hi(i))return!(i.j.l&256)}return!1}function qd(t,e,n){for(let i=t.C,r;i;i=i.G)if((r=i.S)===e||(n||=new Set).size<n.add(r).size&&qd(r,e,n))return 1}function $u(t,e){let n=t.i|1;for(let[i,r]of t.F){if(!((i.R|r.R)&64)){let s=Xd(t,i);if((i.m&s||r.m&s&&qd(i,r))&&!(n&2&&_x(t,i,r))||n&2&&r.l&2097152||i.l&32768&&i.R&8){if(e===0)break;continue}if((r!==t.K||t.h)&&(r.l&2304)===256){if(!e||!t.D)continue;Tn(ut(r))}}t.F.delete(i)}return t.F.size}function yx(){for(let t of Rr){let e=t.j.R;if(e&64){Rr.delete(t);continue}if(e&32)continue;if(!t.D){for(let[i]of t.F)for(let r of i.m&1?i.T?.se||[]:[i])if(!(r.l&256))for(let s=r.C;s;s=s.G){let o=s.S;o.l&256&&(r===i||!ut(o).tt)&&Cr(t,o)}}$u(t);let n=t.j;t.i&1&&!t.D&&n.l&256&&[...t.F].every(([,i])=>!(i.m&1)&&i.l&256&&ut(i)===ut(n))&&(t.F.clear(),t.D=!0),t.h=!1,t.F.size===0&&(Rr.delete(t),t.L&&xo(t),Jt&&t.v!==null&&Jt.V(t.v))}}function vx(t){if(!t.D){t.L&&t.P===null&&t.B===null&&Qe!==null&&(t.B=Qe,Wu(t),xo(t));return}t.h=!0,t.j.l&=-8388609;let e=Qe;e===null&&it.Y&&un().l&32768&&(Tn(null),e=Zt.J(mt)),t.B=e,Rr.add(t);let n=t.F.size;au(t.H,mt,i=>Cr(t,i));for(let[i]of t.F)if(t.F.size!==n||i.m&1&&!(i.R&64)){for(let r=t._parent;r!==null;r=r._parent)if(r.i&1)for(let[s]of t.F)r.F.delete(s);Wu(t),xo(t);return}}function bx(t,e,n,i){let r=Ln(),s={i:t,_parent:as(r)??null,H:r,K:null,j:null,F:new Map,D:t===2,h:!1,B:null,P:null,L:!1,M:null,v:null,$:!1,ee:!1,U:t===2?mi(void 0,Sx):null,ne:n,re:null},o=t===1?r.A[Gd]:null;if(un()&&jr(()=>{Rr.delete(s),Jt&&o&&Jt.oe(o,s)}),i){let u=!1;Gt(r,()=>wn(()=>{try{let f=i()}catch(f){if(!(f instanceof At)){if(!it.notify(un(),2,2,f))throw ya(f),f;return}}u?vx(s):u=!0})).l|=16384}let a={...r.A,[Xu]:s};Jt!==null&&(a[Gd]=null),r.A=a;let c=Gt(r,()=>{let u=wn(e);return wn(()=>Ar(Mr(u)))});s.K=c,Jt&&o&&Jt.te(o,s);let l=wn(()=>{let u=un();if(et&&s.i===2&&(s.L&&u.l&2048&&(s.P??=ut(u)),s.P!==null&&(hi(s.P),u.R|=131072,s.P=null)),!s.h&&!(u.l&256)&&(u.l|=8388608),s.$&&(vr(c,u),Jt&&s.v!==null&&Jt.V(s.v),s.$)){if(s.ee){s.L=!0;return}return wr(s)}let f=et&&!s.D&&u.l&256&&u.le!==s.re?.le,h=c.m&3;if(h!==0){if(vr(c,u),h&t){if(Hi(s))return La(s,c,void 0),wr(s);Cr(s,c)}if(t===2&&s.L&&!Wd(s))return wr(s);throw c.T.U}if(Hi(s)&&(s.F.size!==0&&u.m&4&&!(u.l&256)||$u(s,!0)!==0&&!f))return wr(s);let p;try{p=Mr(c),s.U&&dn(()=>lo(p))}catch(m){if(m instanceof At?t===1:t===2){if(Hi(s))return La(s,c,m),wr(s);Cr(s,c)}throw m}if(Hi(s)&&(c.m&t&1&&La(s,c),s.F.size!==0))return f&&Qe?p:wr(s);s.D=!0,s.L&&Qs&&Qs(),s.L=!1;let x=s.re,g=()=>{!s.L&&s.re===x&&(x.m&2&&wt(),Xc(x),s.re=null)};if(x!==null&&(s.j.le!==x.le?g():it.enqueue(1,g)),gx(s),Jt&&s.v!==null){let m=s.v;s.v=null,Jt.V(m)}return p},{ae:!0});return l.l|=16384,c.l|=8388608,s.j=l,Bn(l)}function wr(t){let e=un();t.P!==null&&(hi(t.P),e.R|=131072,t.P=null),!t.L&&Qs&&Qs(),t.L=!0,t.re===null&&(t.re=Gt(e._parent,()=>wn(()=>t.ne(t),{id:e.id,lazy:1})));let n=Qe,i=e.R,r=Mr(t.re);return hi(n),e.R^=(e.R^i)&163840,r}var Sx={ownedWrite:!0,ae:!0};function Zu(t,e,n){return bx(1,t,()=>e(),n?.on)}Yh(Hd,(t,e)=>!e&&(t.m&4?Hd(t,1):mx(t)),Yu,yx,xx);function Ku(){return!0}var pn=0,Vt=1,Xi=2,qi=3,kn=4,Mx=Object.freeze({});function Wi(t,e){return e===qi?(t=t())||Mx:t}var Zn=class{source;kind;hidden;table=0;keys=void 0;descs=void 0;constructor(e,n,i){this.source=e,this.kind=n,this.hidden=i}};function Kn(t,e){let n=t.hidden;return typeof n=="function"?n(e):n.includes(e)}function Fa(t){return Wi(t.source,t.kind)}function Ba(t){return t[Er]}function Ju(t,e){if(e===pn)return Object.keys(t);if(e===Xi||t[nn]===t){let n=t[Gi];return(n?.px===t?n:Reflect).ownKeys(t)}return Object.keys(t)}function ka(t,e){if(e===Vt){if(t.kind===kn)return ep(t.source,!1,t);let n=Ju(Fa(t),t.kind),i=[];for(let r=0;r<n.length;r++)Kn(t,n[r])||i.push(n[r]);return i}return Ju(Wi(t,e),e)}function Pr(t,e,n){return e===Vt?Kn(t,n)?!1:t.kind===kn?jd(t.source,n):n in Fa(t):n in Wi(t,e)}function _o(t,e,n){return e===Vt?Kn(t,n)?void 0:t.kind===kn?go(t.source,n):Fa(t)[n]:Wi(t,e)[n]}function Qu(t,e){return e===pn?!0:e!==Vt?!1:t.kind===pn?!0:t.kind===kn&&ef(t.source)}function ef(t){let e=t.sources,n=t.kinds;for(let i=0;i<e.length;i++)if(!Qu(e[i],n[i]))return!1;return!0}function za(t){if(!(nn in t))return!0;let e=Ba(t);return e instanceof Ir?ef(e):e!==void 0&&Qu(e,Vt)}function Oa(t,e=!0){return{configurable:!0,enumerable:e,get:t,set:Ku}}function tf(t,e,n,i=!1){if(e===Vt)return Kn(t,n)?void 0:tf(t.source,t.kind,n,i);if(e===kn)return Qd(t,n);if(e===qi)return i||n in Wi(t,e)?Oa(()=>Wi(t,e)[n]):void 0;if(e===Xi)return Ba(t)!==void 0?Reflect.getOwnPropertyDescriptor(t,n):i||n in t?Oa(()=>t[n]):void 0;let r=Reflect.getOwnPropertyDescriptor(t,n);if(r!==void 0)return r.get!==void 0||r.set!==void 0?Oa(()=>t[n],r.enumerable):r.configurable?r:{configurable:!0,enumerable:r.enumerable,writable:!0,value:r.value}}var Ir=class{sources;kinds;table=0;keys=void 0;descs=void 0;constructor(e,n){this.sources=e,this.kinds=n}};function Dr(t){return t&&nn in t?t[Er]:void 0}function Va(t){if(!t||!(nn in t))return;let e=Ba(t);return e instanceof Zn?Ex(e):e===void 0?void 0:Ga(e)}function Ga(t){let e=t.table;if(typeof e!="object"){let n=t.sources,i=t.kinds;for(let r=0;r<n.length;r++)if(!Qu(n[r],i[r])){t.table=null;return}e=new Map,nf(e,t,void 0),t.table=e}return e===null?void 0:e}function nf(t,e,n){let i=e.sources,r=e.kinds;for(let s=0;s<i.length;s++){let o=i[s];if(r[s]===Vt){if(o.kind===kn){n===void 0?n=[o]:n.push(o),nf(t,o.source,n),n.pop();continue}let a=o.source,c=Reflect.ownKeys(a);for(let l=0;l<c.length;l++){let u=c[l];!Kn(o,u)&&!ju(n,u)&&Yd(t,u,a)}}else{let a=Reflect.ownKeys(o);for(let c=0;c<a.length;c++){let l=a[c];ju(n,l)||Yd(t,l,o)}}}}function ju(t,e){if(t!==void 0){for(let n=t.length-1;n>=0;n--)if(Kn(t[n],e))return!0}return!1}function Yd(t,e,n){t.has(e)&&t.delete(e),t.set(e,n)}function Ex(t){let e=t.table;if(typeof e!="object"){let n=t.source;if(t.kind===kn){if(!ef(n)){t.table=null;return}e=new Map,nf(e,n,[t])}else if(t.kind===pn){e=new Map;let i=Reflect.ownKeys(n);for(let r=0;r<i.length;r++){let s=i[r];Kn(t,s)||e.set(s,n)}}else{t.table=null;return}t.table=e}return e===null?void 0:e}var Tx=Object.prototype.propertyIsEnumerable;function Ax(t,e){let n=t.keys;if(n===void 0){n=t.keys=[];for(let[i,r]of e)Tx.call(r,i)&&n.push(i)}return n}function Zd(t,e,n){let i=e.get(n);if(i===void 0)return;let r=t.descs;r===void 0&&(r=t.descs=new Map);let s=r.get(n);return s===void 0?(s=tf(i,pn,n),s===void 0?void 0:(r.set(n,s),s)):s.get!==void 0?s:{configurable:!0,enumerable:s.enumerable,writable:s.writable,value:i[n]}}var Kd=16;function $d(t){let e=t.table;if(typeof e=="object")return e===null?void 0:e;if(e+1<Kd){t.table=e+1;return}return Ga(t)}function rf(t){let e=t.table;return typeof e=="object"&&e!==null?e:void 0}var Ua=Symbol();function Jd(t,e){let n=rf(t);if(n!==void 0){let s=n.get(e);return s===void 0?Ua:s[e]}let i=t.sources,r=t.kinds;for(let s=i.length-1;s>=0;s--){let o=r[s];if(o===pn){let a=i[s];if(e in a)return a[e];continue}if(o===Vt){let a=i[s];if(Kn(a,e))continue;if(a.kind===kn){let l=Jd(a.source,e);if(l!==Ua)return l;continue}let c=Fa(a);if(e in c)return c[e]}else{let a=Wi(i[s],o);if(e in a)return a[e]}}return Ua}function go(t,e){let n=Jd(t,e);return n===Ua?void 0:n}function jd(t,e){let n=rf(t);if(n!==void 0)return n.has(e);let i=t.sources,r=t.kinds;for(let s=i.length-1;s>=0;s--)if(Pr(i[s],r[s],e))return!0;return!1}function Qd(t,e){let n=rf(t);if(n!==void 0)return Zd(t,n,e);let i=t.sources,r=t.kinds;for(let s=i.length-1;s>=0;s--)if(Pr(i[s],r[s],e))return tf(i[s],r[s],e,!0)??Oa(()=>go(t,e))}function ep(t,e,n){let i=[];return tp(t,n===void 0?void 0:[n],e,i,null),i}function tp(t,e,n,i,r){let s=t.sources,o=t.kinds;for(let a=0;a<s.length;a++){let c=s[a],l=o[a],u;if(l===Vt){if(c.kind===kn){e===void 0?e=[c]:e.push(c),tp(c.source,e,n,i,r),e.pop();continue}u=c,l=c.kind,c=c.source}c=Wi(c,l);let f=n?kd(c):Ju(c,l);for(let h=0;h<f.length;h++){let p=f[h];u!==void 0&&Kn(u,p)||ju(e,p)||wx(i,r,p,c)}}}function wx(t,e,n,i){let r=t.indexOf(n);r!==-1&&(t.splice(r,1),e!==null&&e.splice(r,1)),t.push(n),e!==null&&e.push(i)}function Rx(t,e){let n=Ga(t);if(n===void 0)return ep(t,!0,e);let i=Ax(t,n);if(e===void 0)return i;let r=[];for(let s=0;s<i.length;s++)Kn(e,i[s])||r.push(i[s]);return r}var Cx={get(t,e,n){if(typeof e=="symbol"){if(e===nn)return n;if(e===Er)return t;if(e===Gi)return}let i=t.table,r;if(typeof i!="object"){if(i+1<Kd){t.table=i+1;let o=t.sources,a=t.kinds;for(let c=o.length-1;c>=0;c--){if(a[c]!==pn)return go(t,e);let l=o[c][e];if(l!==void 0||e in o[c])return l}return}if(r=Ga(t),r===void 0)return go(t,e)}else{if(i===null)return go(t,e);r=i}let s=r.get(e);return s===void 0?void 0:s[e]},has(t,e){if(e===nn)return!0;if(e===Gi||e===Er)return!1;let n=$d(t);return n!==void 0?n.has(e):jd(t,e)},set:Ku,deleteProperty:Ku,getOwnPropertyDescriptor(t,e){if(e===nn||e===Gi||e===Er)return;let n=$d(t);return n!==void 0?Zd(t,n,e):Qd(t,e)},ownKeys(t){return Rx(t)}};function Ha(...t){if(t.length===1&&typeof t[0]!="function")return t[0];let e=new Array(t.length),n=new Array(t.length),i=0,r,s=0;for(let f=0;f<t.length;f++){let h=t[f];if(h){if(s++,r=h,typeof h=="function"){e[i]=mo(h),n[i++]=qi;continue}if(nn in h){let p=Ba(h);if(p instanceof Ir)for(let x=0;x<p.sources.length;x++)e[i]=p.sources[x],n[i++]=p.kinds[x];else p!==void 0?(e[i]=p,n[i++]=Vt):(e[i]=h,n[i++]=Xi);continue}e[i]=h,n[i++]=pn}}if(i!==e.length&&(e.length=i,n.length=i),Oh)return s===1&&typeof r!="function"?r:new Proxy(new Ir(e,n),Cx);let o=Object.create(null),a=!1,c=e.length-1;for(let f=c;f>=0;f--){let h=e[f];if(!h){f===c&&c--;continue}let p=Object.getOwnPropertyNames(h);for(let x=p.length-1;x>=0;x--){let g=p[x];if(!(g==="__proto__"||g==="constructor")&&!o[g]){a=a||f!==c;let m=Object.getOwnPropertyDescriptor(h,g);o[g]=m.get?{enumerable:!0,configurable:!0,get:m.get.bind(h)}:m}}}if(!a)return e[c];let l={},u=Object.keys(o);for(let f=u.length-1;f>=0;f--){let h=u[f],p=o[h];p.get?Object.defineProperty(l,h,p):l[h]=p.value}return l}var og={hydrating:!1,registry:void 0,done:!1};var ag;var lg,cg;var Wa=(...t)=>(ag||mo)(...t),Jn=ku;var rp=sa,sp=Vu,op=(...t)=>(lg||zu)(...t);var ug=(t,e,n)=>(cg||Zu)(t,e,n);function ap(t,e,n,i){return dn(()=>t(e||{}))}function Xa(t){let e="fallback"in t?{keyed:t.keyed,fallback:()=>t.fallback}:{keyed:t.keyed},n=un(),i,r=()=>Gt(n,()=>Na(()=>t.each,t.children,e));return og.hydrating&&(i=r()),()=>(i??(i=r()))()}function lp(t){let e="on"in t?{on:()=>t.on}:void 0;return ug(()=>t.children,()=>t.fallback,e)}var fg={transparent:!0,sync:!0},hg={sync:!0},yo=(t,e,n)=>sp(t,e,n?{sync:!0,...n,transparent:!n.scope}:fg),dg=t=>Wa(()=>t(),hg),qa=(t,e)=>t,cp={};function up({createElement:t,createTextNode:e,createSentinel:n=()=>e(""),isTextNode:i,replaceText:r,insertNode:s,removeNode:o,cleanupNodes:a,setProperty:c,getParentNode:l,getFirstChild:u,getNextSibling:f}){function h(C,R,O,L,V){let q=V&&V.onUpdate,Q=V;if(q){let{onUpdate:ge,...Oe}=V;Q=Oe}Q=qa(Q);let ne=O!==void 0;if(ne&&!L&&(L=[]),typeof R!="function"&&(R=x(R,ne,!0),typeof R!="function")){p(C,R,L,O),q&&q(R);return}if(ne&&L.length===0){let ge=n();s(C,ge,O),L=[ge]}let de=L;yo(ge=>{let Oe=x(R(),ne,!0);return typeof Oe!="function"?Oe:(yo(()=>x(Oe,ne),$=>{p(C,$,de,O),de=$,q&&q(de)},ge!==void 0&&!(V&&V.schedule)?{...Q,schedule:!0}:Q),cp)},ge=>{ge!==cp&&(p(C,ge,de,O),de=ge,q&&q(de))},Q)}function p(C,R,O,L){if(R===O)return;let V=typeof R,q=L!==void 0;if(V==="string"||V==="number"){let Q=typeof O;Q==="string"||Q==="number"?r(u(C),R):m(C,O,L,e(R))}else R==null?m(C,O,L):Array.isArray(R)?R.length===0?m(C,O,L):Array.isArray(O)?O.length===0?d(C,R,L):g(C,O,R):O==null?d(C,R):g(C,q&&O||[u(C)],R):Array.isArray(O)?m(C,O,q?L:null,R):O==null||!u(C)?s(C,R):A(C,R,u(C))}function x(C,R,O){if(C=Ar(C,{skipNonRendered:!0,doNotUnwrap:O}),O&&typeof C=="function")return C;if(R&&!Array.isArray(C)?C=[C??""]:R&&!C.length&&(C=[n()]),Array.isArray(C))for(let L=0,V=C.length;L<V;L++){let q=C[L],Q=typeof q;(Q==="string"||Q==="number")&&(C[L]=e(q))}return C}function g(C,R,O){let L=O.length,V=R.length,q=L,Q=0,ne=0,de=f(R[V-1]),ge=null,Oe=$=>$&&l($)===C;for(;Q<V||ne<q;){if(R[Q]===O[ne]&&Oe(R[Q])){Q++,ne++;continue}for(;R[V-1]===O[q-1]&&Oe(R[V-1]);)V--,q--;if(V===Q){let $=q<L?ne?f(O[ne-1]):O[q-ne]:de;for(;ne<q;)s(C,O[ne++],$)}else if(q===ne)for(;Q<V;)(!ge||!ge.has(R[Q]))&&o(C,R[Q]),Q++;else if(R[Q]===O[q-1]&&O[ne]===R[V-1]){let $=R[Q];do if(s(C,R[--V],$),ne++,Q>=V-1||ne>=q)break;while(R[Q]===O[q-1]&&O[ne]===R[V-1])}else{if(!ge){ge=new Map;let J=ne;for(;J<q;)ge.set(O[J],J++)}let $=ge.get(R[Q]);if($!=null)if(ne<$&&$<q){let J=Q,me=1,Be;for(;++J<V&&J<q&&!((Be=ge.get(R[J]))==null||Be!==$+me);)me++;if(me>$-ne){let Se=R[Q];for(;ne<$;)s(C,O[ne++],Se)}else A(C,O[ne++],R[Q++])}else Q++;else o(C,R[Q++])}}}function m(C,R,O,L){if(O===void 0){let V;for(;V=u(C);)o(C,V);return L&&s(C,L),""}if(R.length){let V=!1;for(let q=R.length-1;q>=0;q--){let Q=R[q];if(L!==Q){let ne=l(Q)===C;L&&!V&&!q?ne?A(C,L,Q):s(C,L,O):ne&&o(C,Q)}else V=!0}}else L&&s(C,L,O)}function d(C,R,O){for(let L=0,V=R.length;L<V;L++)s(C,R[L],O)}function A(C,R,O){s(C,R,O),o(C,O)}function b(C,R){if(Array.isArray(C))for(let O=0,L=C.length;O<L;O++)b(C[O],R);else C!=null&&typeof C!="string"&&typeof C!="number"&&R.push(C);return R}function T(C,R){let O=b(R,[]);if(!O.length&&(typeof R=="string"||typeof R=="number")){let L=u(C);L&&O.push(L)}return O}function w(C,R){for(let O=0,L=R.length;O<L;O++){let V=R[O];l(V)===C&&o(C,V)}}function M(C,R,O,L){let V={},q=ne=>{for(let de in V)de in ne||(de!=="ref"&&c(C,de,void 0,V[de]),delete V[de]);for(let de in ne){let ge=ne[de];ge!==V[de]&&(de==="ref"?(typeof ge=="function"||Array.isArray(ge))&&X(()=>ge,C):c(C,de,ge,V[de]),V[de]=ge)}},Q=()=>qa(L);if(Array.isArray(R))return O||h(C,()=>{for(let ne=R.length-1;ne>=0;ne--){let de=D(R[ne]);if(de!=null&&B(de,"children"))return S(de,"children")}},void 0,void 0,Q()),yo(()=>y({},R,void 0),q,qa(L)),V;if(!O)if(typeof R!="function"&&R!=null&&za(R)){let ne=Object.getOwnPropertyDescriptor(R,"children");ne!==void 0&&(ne.get===void 0?h(C,ne.value,void 0,void 0,Q()):h(C,()=>R.children,void 0,void 0,Q()))}else h(C,()=>{let ne=D(R);return ne!=null?S(ne,"children"):void 0},void 0,void 0,Q());return yo(()=>{let ne=D(R),de={},ge=Va(ne);if(ge!==void 0){for(let[Oe,$]of ge)typeof Oe!="string"||Oe==="children"||(de[Oe]=$[Oe]);return de}if(ne!=null){let Oe=Dr(ne);Oe instanceof Zn?k(de,Oe,Vt):Oe!==void 0?y(de,Oe.sources,Oe.kinds):k(de,ne,nn in ne?Xi:pn)}return de},q,qa(L)),V}function D(C){return typeof C=="function"?C():C}function B(C,R){let O=Dr(C);return O instanceof Zn?Pr(O,Vt,R):R in C}function S(C,R){let O=Dr(C);return O instanceof Zn?_o(O,Vt,R):C[R]}function y(C,R,O){let L=[],V=[];for(let q=0;q<R.length;q++)P(L,V,R[q],O!==void 0?O[q]:qi);for(let q=0;q<L.length;q++)k(C,L[q],V[q],L,V,q+1);return C}function P(C,R,O,L){if(L!==qi){C.push(O),R.push(L);return}if(O=D(O),O==null)return;let V=Dr(O);if(V instanceof Zn)C.push(V),R.push(Vt);else if(V!==void 0){let q=V.sources,Q=V.kinds;for(let ne=0;ne<q.length;ne++)P(C,R,q[ne],Q[ne])}else C.push(O),R.push(nn in O?Xi:pn)}function k(C,R,O,L,V,q){let Q=ka(R,O);e:for(let ne=0;ne<Q.length;ne++){let de=Q[ne];if(!(typeof de!="string"||de==="children")){if(L!==void 0){for(let ge=q;ge<L.length;ge++)if(Pr(L[ge],V[ge],de))continue e}C[de]=_o(R,O,de)}}return C}function W(C,R){Array.isArray(C)?C.flat(1/0).forEach(O=>O&&O(R)):C(R)}function X(C,R){let O=dn(C);Ia(()=>W(O,R))}return{render(C,R){let O,L=!1,V=[],q=a||w;try{rp(Q=>{O=Q;let ne=C();h(R,()=>ne,void 0,void 0,{schedule:!0,onUpdate(ge){V=T(R,ge)}})}),Kt()}catch(Q){throw O&&O(),q(R,V),Q}return()=>{L||(L=!0,O(),q(R,V),V=[])}},insert:h,spread:M,createElement:t,createTextNode:e,insertNode:s,setProp(C,R,O,L){return c(C,R,O,L),O},mergeProps:Ha,effect:yo,memo:dg,createComponent:ap,applyRef:W,ref:X}}var Ip=0,Of=1,Pp=2;var Uf=1,Dp=2,ii=3,Mi=0,jt=1,ri=2,si=0,Br=1,Ff=2,Bf=3,kf=4,Np=5,er=100,Lp=101,Op=102,Up=103,Fp=104,Bp=200,kp=201,zp=202,Vp=203,hl=204,dl=205,Gp=206,Hp=207,Wp=208,Xp=209,qp=210,Yp=211,$p=212,Zp=213,Kp=214,Ul=0,Fl=1,Bl=2,kr=3,kl=4,zl=5,Vl=6,Gl=7,zf=0,Jp=1,jp=2,Ri=0,Qp=1,em=2,tm=3,nm=4,im=5,rm=6,sm=7;var Vf=300,Wr=301,Xr=302,Hl=303,Wl=304,Vo=306,pl=1e3,Qn=1001,ml=1002,sn=1003,om=1004;var Go=1005;var yn=1006,Xl=1007;var or=1008;var oi=1009,Gf=1010,Hf=1011,Rs=1012,ql=1013,ar=1014,ai=1015,qr=1016,Yl=1017,$l=1018,Cs=1020,Wf=35902,Xf=35899,qf=1021,Yf=1022,In=1023,bs=1026,Is=1027,$f=1028,Zl=1029,Kl=1030,Jl=1031;var jl=1033,Ho=33776,Wo=33777,Xo=33778,qo=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,rc=37492,sc=37496,oc=37808,ac=37809,lc=37810,cc=37811,uc=37812,fc=37813,hc=37814,dc=37815,pc=37816,mc=37817,xc=37818,gc=37819,_c=37820,yc=37821,vc=36492,bc=36494,Sc=36495,Mc=36283,Ec=36284,Tc=36285,Ac=36286;var To=2300,xl=2301,fl=2302,Rf=2400,Cf=2401,If=2402;var am=3200,lm=3201;var cm=0,um=1,Ci="",gn="srgb",zr="srgb-linear",Ao="linear",st="srgb";var Fr=7680;var Pf=519,fm=512,hm=513,dm=514,Zf=515,pm=516,mm=517,xm=518,gm=519,Df=35044;var Kf="300 es",Hn=2e3,wo=2001;function Jf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ro(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function _m(){let t=Ro("canvas");return t.style.display="block",t}var fp={},Ss=null;function jf(...t){let e="THREE."+t.shift();Ss?Ss("log",e,...t):console.log(e,...t)}function ke(...t){let e="THREE."+t.shift();Ss?Ss("warn",e,...t):console.warn(e,...t)}function We(...t){let e="THREE."+t.shift();Ss?Ss("error",e,...t):console.error(e,...t)}function Ms(...t){let e=t.join(" ");e in fp||(fp[e]=!0,ke(...t))}function ym(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var Ei=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sf=Math.PI/180,gl=180/Math.PI;function Yo(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function pg(t,e){return(t%e+e)%e}function of(t,e,n){return(1-n)*t+n*e}function vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var tt=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ti=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a<=0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(a>=1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=g;return}if(f!==g||c!==h||l!==p||u!==x){let m=c*h+l*p+u*x+f*g;m<0&&(h=-h,p=-p,x=-x,g=-g,m=-m);let d=1-a;if(m<.9995){let A=Math.acos(m),b=Math.sin(A);d=Math.sin(d*A)/b,a=Math.sin(a*A)/b,c=c*d+h*a,l=l*d+p*a,u=u*d+x*a,f=f*d+g*a}else{c=c*d+h*a,l=l*d+p*a,u=u*d+x*a,f=f*d+g*a;let A=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=A,l*=A,u*=A,f*=A}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*f+c*p-l*h,e[n+1]=c*x+u*h+l*f-a*p,e[n+2]=l*x+u*p+a*h-c*f,e[n+3]=u*x-a*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),p=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*p*x,this._y=l*p*f-h*u*x,this._z=l*u*x+h*p*f,this._w=l*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+l*p*x,this._y=l*p*f-h*u*x,this._z=l*u*x-h*p*f,this._w=l*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-l*p*x,this._y=l*p*f+h*u*x,this._z=l*u*x+h*p*f,this._w=l*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-l*p*x,this._y=l*p*f+h*u*x,this._z=l*u*x-h*p*f,this._w=l*u*f+h*p*x;break;case"YZX":this._x=h*u*f+l*p*x,this._y=l*p*f+h*u*x,this._z=l*u*x-h*p*f,this._w=l*u*f-h*p*x;break;case"XZY":this._x=h*u*f-l*p*x,this._y=l*p*f-h*u*x,this._z=l*u*x+h*p*f,this._w=l*u*f+h*p*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-n;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hp.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},af=new Y,hp=new Ti,Ge=class t{constructor(e,n,i,r,s,o,a,c,l){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l)}set(e,n,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],x=i[8],g=r[0],m=r[3],d=r[6],A=r[1],b=r[4],T=r[7],w=r[2],M=r[5],D=r[8];return s[0]=o*g+a*A+c*w,s[3]=o*m+a*b+c*M,s[6]=o*d+a*T+c*D,s[1]=l*g+u*A+f*w,s[4]=l*m+u*b+f*M,s[7]=l*d+u*T+f*D,s[2]=h*g+p*A+x*w,s[5]=h*m+p*b+x*M,s[8]=h*d+p*T+x*D,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,p=l*s-o*c,x=n*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=f*g,e[1]=(r*l-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(u*n-r*c)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*c-l*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lf.makeScale(e,n)),this}rotate(e){return this.premultiply(lf.makeRotation(-e)),this}translate(e,n){return this.premultiply(lf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lf=new Ge,dp=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){let t={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=vs(r.r),r.g=vs(r.g),r.b=vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?Ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[zr]:{primaries:e,whitePoint:i,transfer:Ao,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),t}var Je=mg();function Si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ls,_l=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Ro("canvas")),ls.width=e.width,ls.height=e.height;let r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Ro("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Si(n[i]/255)*255):n[i]=Si(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xg=0,Es=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cf(r[o].image)):s.push(cf(r[o]))}else s=cf(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_l.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var gg=0,uf=new Y,on=class t extends Ei{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Qn,r=Qn,s=yn,o=or,a=In,c=oi,l=t.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Yo(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Vf;on.DEFAULT_ANISOTROPY=1;var Rt=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],x=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let b=(l+1)/2,T=(p+1)/2,w=(d+1)/2,M=(u+h)/4,D=(f+g)/4,B=(x+m)/4;return b>T&&b>w?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=M/i,s=D/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=M/r,s=B/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=B/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-x)*(m-x)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(f-g)/A,this.z=(h-u)/A,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Ei{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);let r={width:e,height:n,depth:i.depth},s=new on(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new Es(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends yl{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Co=class extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),$a.subVectors(this.max,bo),cs.subVectors(e.a,bo),us.subVectors(e.b,bo),fs.subVectors(e.c,bo),Yi.subVectors(us,cs),$i.subVectors(fs,us),Nr.subVectors(cs,fs);let n=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-Nr.z,Nr.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,Nr.z,0,-Nr.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-Nr.y,Nr.x,0];return!ff(n,cs,us,fs,$a)||(n=[1,0,0,0,1,0,0,0,1],!ff(n,cs,us,fs,$a))?!1:(Za.crossVectors(Yi,$i),n=[Za.x,Za.y,Za.z],ff(n,cs,us,fs,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],zn=new Y,Ya=new tr,cs=new Y,us=new Y,fs=new Y,Yi=new Y,$i=new Y,Nr=new Y,bo=new Y,$a=new Y,Za=new Y,Lr=new Y;function ff(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Lr.fromArray(t,s);let a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=e.dot(Lr),l=n.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var _g=new tr,So=new Y,hf=new Y,Ts=class{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):_g.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);let n=So.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(So,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(hf)),this.expandByPoint(So.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gi=new Y,df=new Y,Ka=new Y,Zi=new Y,pf=new Y,Ja=new Y,mf=new Y,Io=class{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){df.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),Zi.copy(this.origin).sub(df);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Ka),a=Zi.dot(this.direction),c=-Zi.dot(Ka),l=Zi.lengthSq(),u=Math.abs(1-o*o),f,h,p,x;if(u>0)if(f=o*c-a,h=o*a-c,x=s*u,f>=0)if(h>=-x)if(h<=x){let g=1/u;f*=g,h*=g,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(df).addScaledVector(Ka,h),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){pf.subVectors(n,e),Ja.subVectors(i,e),mf.crossVectors(pf,Ja);let o=this.direction.dot(mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let c=a*this.direction.dot(Ja.crossVectors(Zi,Ja));if(c<0)return null;let l=a*this.direction.dot(pf.cross(Zi));if(l<0||c+l>o)return null;let u=-a*Zi.dot(mf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class t{constructor(e,n,i,r,s,o,a,c,l,u,f,h,p,x,g,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l,u,f,h,p,x,g,m)}set(e,n,i,r,s,o,a,c,l,u,f,h,p,x,g,m){let d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*f,x=a*u,g=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=p+x*l,n[5]=h-g*l,n[9]=-a*c,n[2]=g-h*l,n[6]=x+p*l,n[10]=o*c}else if(e.order==="YXZ"){let h=c*u,p=c*f,x=l*u,g=l*f;n[0]=h+g*a,n[4]=x*a-p,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=g+h*a,n[10]=o*c}else if(e.order==="ZXY"){let h=c*u,p=c*f,x=l*u,g=l*f;n[0]=h-g*a,n[4]=-o*f,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){let h=o*u,p=o*f,x=a*u,g=a*f;n[0]=c*u,n[4]=x*l-p,n[8]=h*l+g,n[1]=c*f,n[5]=g*l+h,n[9]=p*l-x,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,x=a*c,g=a*l;n[0]=c*u,n[4]=g-h*f,n[8]=x*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=p*f+x,n[10]=h-g*f}else if(e.order==="XZY"){let h=o*c,p=o*l,x=a*c,g=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+g,n[5]=o*u,n[9]=p*f-x,n[2]=x*f-p,n[6]=a*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,vg)}lookAt(e,n,i){let r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ki.crossVectors(i,mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ki.crossVectors(i,mn)),Ki.normalize(),ja.crossVectors(mn,Ki),r[0]=Ki.x,r[4]=ja.x,r[8]=mn.x,r[1]=Ki.y,r[5]=ja.y,r[9]=mn.y,r[2]=Ki.z,r[6]=ja.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],d=i[14],A=i[3],b=i[7],T=i[11],w=i[15],M=r[0],D=r[4],B=r[8],S=r[12],y=r[1],P=r[5],k=r[9],W=r[13],X=r[2],C=r[6],R=r[10],O=r[14],L=r[3],V=r[7],q=r[11],Q=r[15];return s[0]=o*M+a*y+c*X+l*L,s[4]=o*D+a*P+c*C+l*V,s[8]=o*B+a*k+c*R+l*q,s[12]=o*S+a*W+c*O+l*Q,s[1]=u*M+f*y+h*X+p*L,s[5]=u*D+f*P+h*C+p*V,s[9]=u*B+f*k+h*R+p*q,s[13]=u*S+f*W+h*O+p*Q,s[2]=x*M+g*y+m*X+d*L,s[6]=x*D+g*P+m*C+d*V,s[10]=x*B+g*k+m*R+d*q,s[14]=x*S+g*W+m*O+d*Q,s[3]=A*M+b*y+T*X+w*L,s[7]=A*D+b*P+T*C+w*V,s[11]=A*B+b*k+T*R+w*q,s[15]=A*S+b*W+T*O+w*Q,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],d=e[15];return x*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*p-i*c*p)+g*(+n*c*p-n*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+n*l*f-n*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+d*(-r*a*u-n*c*f+n*a*h+r*o*f-i*o*h+i*c*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],d=e[15],A=f*m*l-g*h*l+g*c*p-a*m*p-f*c*d+a*h*d,b=x*h*l-u*m*l-x*c*p+o*m*p+u*c*d-o*h*d,T=u*g*l-x*f*l+x*a*p-o*g*p-u*a*d+o*f*d,w=x*f*c-u*g*c-x*a*h+o*g*h+u*a*m-o*f*m,M=n*A+i*b+r*T+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/M;return e[0]=A*D,e[1]=(g*h*s-f*m*s-g*r*p+i*m*p+f*r*d-i*h*d)*D,e[2]=(a*m*s-g*c*s+g*r*l-i*m*l-a*r*d+i*c*d)*D,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*p-i*c*p)*D,e[4]=b*D,e[5]=(u*m*s-x*h*s+x*r*p-n*m*p-u*r*d+n*h*d)*D,e[6]=(x*c*s-o*m*s-x*r*l+n*m*l+o*r*d-n*c*d)*D,e[7]=(o*h*s-u*c*s+u*r*l-n*h*l-o*r*p+n*c*p)*D,e[8]=T*D,e[9]=(x*f*s-u*g*s-x*i*p+n*g*p+u*i*d-n*f*d)*D,e[10]=(o*g*s-x*a*s+x*i*l-n*g*l-o*i*d+n*a*d)*D,e[11]=(u*a*s-o*f*s-u*i*l+n*f*l+o*i*p-n*a*p)*D,e[12]=w*D,e[13]=(u*g*r-x*f*r+x*i*h-n*g*h-u*i*m+n*f*m)*D,e[14]=(x*a*r-o*g*r-x*i*c+n*g*c+o*i*m-n*a*m)*D,e[15]=(o*f*r-u*a*r+u*i*c-n*f*c-o*i*h+n*a*h)*D,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,f=a+a,h=s*l,p=s*u,x=s*f,g=o*u,m=o*f,d=a*f,A=c*l,b=c*u,T=c*f,w=i.x,M=i.y,D=i.z;return r[0]=(1-(g+d))*w,r[1]=(p+T)*w,r[2]=(x-b)*w,r[3]=0,r[4]=(p-T)*M,r[5]=(1-(h+d))*M,r[6]=(m+A)*M,r[7]=0,r[8]=(x+b)*D,r[9]=(m-A)*D,r[10]=(1-(h+g))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=hs.set(r[0],r[1],r[2]).length(),o=hs.set(r[4],r[5],r[6]).length(),a=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);let l=1/s,u=1/o,f=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Hn,c=!1){let l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r),x,g;if(c)x=s/(o-s),g=o*s/(o-s);else if(a===Hn)x=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wo)x=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Hn,c=!1){let l=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r),x,g;if(c)x=1/(o-s),g=o/(o-s);else if(a===Hn)x=-2/(o-s),g=-(o+s)/(o-s);else if(a===wo)x=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},hs=new Y,Vn=new Dt,yg=new Y(0,0,0),vg=new Y(1,1,1),Ki=new Y,ja=new Y,mn=new Y,mp=new Dt,xp=new Ti,ni=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bg=0,gp=new Y,ds=new Ti,_i=new Dt,Qa=new Y,Mo=new Y,Sg=new Y,Mg=new Ti,_p=new Y(1,0,0),yp=new Y(0,1,0),vp=new Y(0,0,1),bp={type:"added"},Eg={type:"removed"},ps={type:"childadded",child:null},xf={type:"childremoved",child:null},an=class t extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new Y,n=new ni,i=new Ti,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ge}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(_p,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,n){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_p,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Mo,Qa,this.up):_i.lookAt(Qa,Mo,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(_i),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bp),ps.child=e,this.dispatchEvent(ps),ps.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Eg),xf.child=e,this.dispatchEvent(xf),xf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bp),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,Sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};an.DEFAULT_UP=new Y(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new Y,yi=new Y,gf=new Y,vi=new Y,ms=new Y,xs=new Y,Sp=new Y,_f=new Y,yf=new Y,vf=new Y,bf=new Rt,Sf=new Rt,Mf=new Rt,Qi=class t{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),yi.subVectors(i,n),gf.subVectors(e,n);let o=Gn.dot(Gn),a=Gn.dot(yi),c=Gn.dot(gf),l=yi.dot(yi),u=yi.dot(gf),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(l*c-a*u)*h,x=(o*u-a*c)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,o){return bf.setScalar(0),Sf.setScalar(0),Mf.setScalar(0),bf.fromBufferAttribute(e,n),Sf.fromBufferAttribute(e,i),Mf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bf,s.x),o.addScaledVector(Sf,s.y),o.addScaledVector(Mf,s.z),o}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),yi.subVectors(e,n),Gn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;ms.subVectors(r,i),xs.subVectors(s,i),_f.subVectors(e,i);let c=ms.dot(_f),l=xs.dot(_f);if(c<=0&&l<=0)return n.copy(i);yf.subVectors(e,r);let u=ms.dot(yf),f=xs.dot(yf);if(u>=0&&f<=u)return n.copy(r);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(ms,o);vf.subVectors(e,s);let p=ms.dot(vf),x=xs.dot(vf);if(x>=0&&p<=x)return n.copy(s);let g=p*l-c*x;if(g<=0&&l>=0&&x<=0)return a=l/(l-x),n.copy(i).addScaledVector(xs,a);let m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return Sp.subVectors(s,r),a=(f-u)/(f-u+(p-x)),n.copy(r).addScaledVector(Sp,a);let d=1/(m+g+h);return o=g*d,a=h*d,n.copy(i).addScaledVector(ms,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},el={h:0,s:0,l:0};function Ef(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var nt=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=pg(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ef(o,s,e+1/3),this.g=Ef(o,s,e),this.b=Ef(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){let i=vm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Je.workingToColorSpace(Wt.copy(this),e),Math.round(Ke(Wt.r*255,0,255))*65536+Math.round(Ke(Wt.g*255,0,255))*256+Math.round(Ke(Wt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Wt.copy(this),n);let i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=gn){Je.workingToColorSpace(Wt.copy(this),e);let n=Wt.r,i=Wt.g,r=Wt.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL(el);let i=of(Ji.h,el.h,n),r=of(Ji.s,el.s,n),s=of(Ji.l,el.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new nt;nt.NAMES=vm;var Tg=0,Vr=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Br,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=dl,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hl&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gr=class extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new Y,tl=new tt,Ag=0,_n=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ag++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Df,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}};var Po=class extends _n{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Do=class extends _n{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var ei=class extends _n{constructor(e,n,i){super(new Float32Array(e),n,i)}},wg=0,Rn=new Dt,Tf=new an,gs=new Y,xn=new tr,Eo=new tr,Ft=new Y,Ai=class t extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?Do:Po)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ei(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(xn.min,Eo.min),xn.expandByPoint(Ft),Ft.addVectors(xn.max,Eo.max),xn.expandByPoint(Ft)):(xn.expandByPoint(Eo.min),xn.expandByPoint(Eo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ft.fromBufferAttribute(a,l),c&&(gs.fromBufferAttribute(e,l),Ft.add(gs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new Y,c[B]=new Y;let l=new Y,u=new Y,f=new Y,h=new tt,p=new tt,x=new tt,g=new Y,m=new Y;function d(B,S,y){l.fromBufferAttribute(i,B),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,B),p.fromBufferAttribute(s,S),x.fromBufferAttribute(s,y),u.sub(l),f.sub(l),p.sub(h),x.sub(h);let P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),a[B].add(g),a[S].add(g),a[y].add(g),c[B].add(m),c[S].add(m),c[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,S=A.length;B<S;++B){let y=A[B],P=y.start,k=y.count;for(let W=P,X=P+k;W<X;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let b=new Y,T=new Y,w=new Y,M=new Y;function D(B){w.fromBufferAttribute(r,B),M.copy(w);let S=a[B];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),T.crossVectors(M,S);let P=T.dot(c[B])<0?-1:1;o.setXYZW(B,b.x,b.y,b.z,P)}for(let B=0,S=A.length;B<S;++B){let y=A[B],P=y.start,k=y.count;for(let W=P,X=P+k;W<X;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new Y,s=new Y,o=new Y,a=new Y,c=new Y,l=new Y,u=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){let x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),p=0,x=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let d=0;d<u;d++)h[x++]=l[p++]}return new _n(h,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);n.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=e(h,i);c.push(p)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(n))}let s=e.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mp=new Dt,Or=new Io,nl=new Ts,Ep=new Y,il=new Y,rl=new Y,sl=new Y,Af=new Y,ol=new Y,Tp=new Y,al=new Y,vn=class extends an{constructor(e=new Ai,n=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ol.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],f=s[c];u!==0&&(Af.fromBufferAttribute(f,e),o?ol.addScaledVector(Af,u):ol.addScaledVector(Af.sub(n),u))}n.add(ol)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(nl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(nl,Ep)===null||Or.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(Mp.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Mp),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){let m=h[x],d=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,w=b;T<w;T+=3){let M=a.getX(T),D=a.getX(T+1),B=a.getX(T+2);r=ll(this,d,e,i,l,u,f,M,D,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,d=g;m<d;m+=3){let A=a.getX(m),b=a.getX(m+1),T=a.getX(m+2);r=ll(this,o,e,i,l,u,f,A,b,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){let m=h[x],d=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=A,w=b;T<w;T+=3){let M=T,D=T+1,B=T+2;r=ll(this,d,e,i,l,u,f,M,D,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let x=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=x,d=g;m<d;m+=3){let A=m,b=m+1,T=m+2;r=ll(this,o,e,i,l,u,f,A,b,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function Rg(t,e,n,i,r,s,o,a){let c;if(e.side===jt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Mi,a),c===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(al);return l<n.near||l>n.far?null:{distance:l,point:al.clone(),object:t}}function ll(t,e,n,i,r,s,o,a,c,l){t.getVertexPosition(a,il),t.getVertexPosition(c,rl),t.getVertexPosition(l,sl);let u=Rg(t,e,n,i,il,rl,sl,Tp);if(u){let f=new Y;Qi.getBarycoord(Tp,il,rl,sl,f),r&&(u.uv=Qi.getInterpolatedAttribute(r,a,c,l,f,new tt)),s&&(u.uv1=Qi.getInterpolatedAttribute(s,a,c,l,f,new tt)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,c,l,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new Y,materialIndex:0};Qi.getNormal(il,rl,sl,h.normal),u.face=h,u.barycoord=f}return u}var nr=class t extends Ai{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ei(l,3)),this.setAttribute("normal",new ei(u,3)),this.setAttribute("uv",new ei(f,2));function x(g,m,d,A,b,T,w,M,D,B,S){let y=T/D,P=w/B,k=T/2,W=w/2,X=M/2,C=D+1,R=B+1,O=0,L=0,V=new Y;for(let q=0;q<R;q++){let Q=q*P-W;for(let ne=0;ne<C;ne++){let de=ne*y-k;V[g]=de*A,V[m]=Q*b,V[d]=X,l.push(V.x,V.y,V.z),V[g]=0,V[m]=0,V[d]=M>0?1:-1,u.push(V.x,V.y,V.z),f.push(ne/D),f.push(1-q/B),O+=1}}for(let q=0;q<B;q++)for(let Q=0;Q<D;Q++){let ne=h+Q+C*q,de=h+Q+C*(q+1),ge=h+(Q+1)+C*(q+1),Oe=h+(Q+1)+C*q;c.push(ne,de,Oe),c.push(de,ge,Oe),L+=6}a.addGroup(p,L,S),p+=L,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){let e={};for(let n=0;n<t.length;n++){let i=Yr(t[n]);for(let r in i)e[r]=i[r]}return e}function Cg(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qf(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var bm={clone:Yr,merge:Xt},Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=Cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},No=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new Y,Ap=new tt,wp=new tt,Bt=class extends No{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,Ap,wp),n.subVectors(wp,Ap)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},_s=-90,ys=1,bl=class extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(_s,ys,e,n);r.layers=this.layers,this.add(r);let s=new Bt(_s,ys,e,n);s.layers=this.layers,this.add(s);let o=new Bt(_s,ys,e,n);o.layers=this.layers,this.add(o);let a=new Bt(_s,ys,e,n);a.layers=this.layers,this.add(a);let c=new Bt(_s,ys,e,n);c.layers=this.layers,this.add(c);let l=new Bt(_s,ys,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(let l of n)this.remove(l);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Lo=class extends on{constructor(e=[],n=Wr,i,r,s,o,a,c,l,u){super(e,n,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sl=class extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lo(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nr(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:si});s.uniforms.tEquirect.value=n;let o=new vn(r,s),a=n.minFilter;return n.minFilter===or&&(n.minFilter=yn),new bl(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},bi=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dg={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let m=n.getJointPose(g,i),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;l.inputState.pinching&&h>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}};var wi=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var ir=class extends on{constructor(e=null,n=1,i=1,r,s,o,a,c,l=sn,u=sn,f,h){super(null,o,a,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wf=new Y,Ng=new Y,Lg=new Ge,jn=class{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=wf.subVectors(i,n).cross(Ng.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Lg.getNormalMatrix(e),r=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new Ts,Og=new tt(.5,.5),cl=new Y,Oo=class{constructor(e=new jn,n=new jn,i=new jn,r=new jn,s=new jn,o=new jn){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],p=s[7],x=s[8],g=s[9],m=s[10],d=s[11],A=s[12],b=s[13],T=s[14],w=s[15];if(r[0].setComponents(l-o,p-u,d-x,w-A).normalize(),r[1].setComponents(l+o,p+u,d+x,w+A).normalize(),r[2].setComponents(l+a,p+f,d+g,w+b).normalize(),r[3].setComponents(l-a,p-f,d-g,w-b).normalize(),i)r[4].setComponents(c,h,m,T).normalize(),r[5].setComponents(l-c,p-h,d-m,w-T).normalize();else if(r[4].setComponents(l-c,p-h,d-m,w-T).normalize(),n===Hn)r[5].setComponents(l+c,p+h,d+m,w+T).normalize();else if(n===wo)r[5].setComponents(c,h,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);let n=Og.distanceTo(e.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Uo=class extends on{constructor(e,n,i=ar,r,s,o,a=sn,c=sn,l,u=bs,f=1){if(u!==bs&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:f};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Fo=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Bo=class t extends Ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=n/c,p=[],x=[],g=[],m=[];for(let d=0;d<u;d++){let A=d*h-o;for(let b=0;b<l;b++){let T=b*f-s;x.push(T,-A,0),g.push(0,0,1),m.push(b/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<a;A++){let b=A+l*d,T=A+l*(d+1),w=A+1+l*(d+1),M=A+1+l*d;p.push(b,T,M),p.push(T,w,M)}this.setIndex(p),this.setAttribute("position",new ei(x,3)),this.setAttribute("normal",new ei(g,3)),this.setAttribute("uv",new ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ml=class extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ul(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Ug(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Hr=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tl=class extends Hr{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rf,endingEnd:Rf}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cf:s=e,a=2*n-i;break;case If:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Cf:o=e,c=2*i-n;break;case If:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=n}let l=(i-n)*.5,u=this.valueSize;this._weightPrev=l/(n-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,x=(i-n)/(r-n),g=x*x,m=g*x,d=-h*m+2*h*g-h*x,A=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*x+1,b=(-1-p)*m+(1.5+p)*g+.5*x,T=p*m-p*g;for(let w=0;w!==a;++w)s[w]=d*o[u+w]+A*o[l+w]+b*o[c+w]+T*o[f+w];return s}},Al=class extends Hr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-n)/(r-n),f=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*f+o[c+h]*u;return s}},wl=class extends Hr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ul(n,this.TimeBufferType),this.values=ul(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:ul(e.times,Array),values:ul(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case To:n=this.InterpolantFactoryMethodDiscrete;break;case xl:n=this.InterpolantFactoryMethodLinear;break;case fl:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){We("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Ug(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*i,h=f-i,p=f+i;for(let x=0;x!==i;++x){let g=n[f+x];if(g!==n[h+x]||g!==n[p+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let p=0;p!==i;++p)n[h+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)n[c+l]=n[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=xl;var rr=class extends bn{constructor(e,n,i){super(e,n,i)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=To;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends bn{constructor(e,n,i,r){super(e,n,i,r)}};Rl.prototype.ValueTypeName="color";var Cl=class extends bn{constructor(e,n,i,r){super(e,n,i,r)}};Cl.prototype.ValueTypeName="number";var Il=class extends Hr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-n)/(r-n),l=e*a;for(let u=l+a;l!==u;l+=4)Ti.slerpFlat(s,0,o,l-a,o,l,c);return s}},ko=class extends bn{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends bn{constructor(e,n,i){super(e,n,i)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=To;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends bn{constructor(e,n,i,r){super(e,n,i,r)}};Pl.prototype.ValueTypeName="vector";var Dl=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],x=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sm=new Dl,Nl=class{constructor(e){this.manager=e!==void 0?e:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ll=class extends No{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Ol=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var eh="\\[\\]\\.:\\/",Fg=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",Bg="[^"+eh.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",th),zg=/(WCOD+)?/.source.replace("WCOD",Bg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Hg=new RegExp("^"+kg+zg+Vg+Gg+"$"),Wg=["material","materials","bones","map"],Nf=class{constructor(e,n,i){let r=i||dt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},dt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(e){let n=Hg.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Wg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=n.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Nf;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vT=new Float32Array(1);var Rp=new Dt,zo=class{constructor(e,n,i=0,r=1/0){this.ray=new Io(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):We("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Rp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rp),this}intersectObject(e,n=!0,i=[]){return Lf(e,this,i,n),i.sort(Cp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Lf(e[r],this,i,n);return i.sort(Cp),i}};function Cp(t,e){return t.distance-e.distance}function Lf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)Lf(s[o],e,n,!0)}}function nh(t,e,n,i){let r=Xg(i);switch(n){case qf:return t*e;case $f:return t*e/r.components*r.byteLength;case Zl:return t*e/r.components*r.byteLength;case Kl:return t*e*2/r.components*r.byteLength;case Jl:return t*e*2/r.components*r.byteLength;case Yf:return t*e*3/r.components*r.byteLength;case In:return t*e*4/r.components*r.byteLength;case jl:return t*e*4/r.components*r.byteLength;case Ho:case Wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xo:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(t,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(t,8)*Math.max(e,8)/2;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vc:case bc:case Sc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mc:case Ec:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xg(t){switch(t){case oi:case Gf:return{byteLength:1,components:1};case Rs:case Hf:case qr:return{byteLength:2,components:1};case Yl:case $l:return{byteLength:2,components:4};case ar:case ql:case ai:return{byteLength:4,components:1};case Wf:case Xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Xm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Yg(t){let e=new WeakMap;function n(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(t.bindBuffer(l,a),f.length===0)t.bufferSubData(l,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){let x=f[h],g=f[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++h,f[h]=g)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){let g=f[p];t.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_v=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:$g,alphahash_pars_fragment:Zg,alphamap_fragment:Kg,alphamap_pars_fragment:Jg,alphatest_fragment:jg,alphatest_pars_fragment:Qg,aomap_fragment:e_,aomap_pars_fragment:t_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:r_,beginnormal_vertex:s_,bsdfs:o_,iridescence_fragment:a_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:f_,clipping_planes_vertex:h_,color_fragment:d_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:x_,common:g_,cube_uv_reflection_fragment:__,defaultnormal_vertex:y_,displacementmap_pars_vertex:v_,displacementmap_vertex:b_,emissivemap_fragment:S_,emissivemap_pars_fragment:M_,colorspace_fragment:E_,colorspace_pars_fragment:T_,envmap_fragment:A_,envmap_common_pars_fragment:w_,envmap_pars_fragment:R_,envmap_pars_vertex:C_,envmap_physical_pars_fragment:z_,envmap_vertex:I_,fog_vertex:P_,fog_pars_vertex:D_,fog_fragment:N_,fog_pars_fragment:L_,gradientmap_pars_fragment:O_,lightmap_pars_fragment:U_,lights_lambert_fragment:F_,lights_lambert_pars_fragment:B_,lights_pars_begin:k_,lights_toon_fragment:V_,lights_toon_pars_fragment:G_,lights_phong_fragment:H_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:q_,lights_fragment_begin:Y_,lights_fragment_maps:$_,lights_fragment_end:Z_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:Q_,map_fragment:ey,map_pars_fragment:ty,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:sy,morphinstance_vertex:oy,morphcolor_vertex:ay,morphnormal_vertex:ly,morphtarget_pars_vertex:cy,morphtarget_vertex:uy,normal_fragment_begin:fy,normal_fragment_maps:hy,normal_pars_fragment:dy,normal_pars_vertex:py,normal_vertex:my,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:yy,iridescence_pars_fragment:vy,opaque_fragment:by,packing:Sy,premultiplied_alpha_fragment:My,project_vertex:Ey,dithering_fragment:Ty,dithering_pars_fragment:Ay,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ry,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Iy,shadowmap_vertex:Py,shadowmask_pars_fragment:Dy,skinbase_vertex:Ny,skinning_pars_vertex:Ly,skinning_vertex:Oy,skinnormal_vertex:Uy,specularmap_fragment:Fy,specularmap_pars_fragment:By,tonemapping_fragment:ky,tonemapping_pars_fragment:zy,transmission_fragment:Vy,transmission_pars_fragment:Gy,uv_pars_fragment:Hy,uv_pars_vertex:Wy,uv_vertex:Xy,worldpos_vertex:qy,background_vert:Yy,background_frag:$y,backgroundCube_vert:Zy,backgroundCube_frag:Ky,cube_vert:Jy,cube_frag:jy,depth_vert:Qy,depth_frag:ev,distanceRGBA_vert:tv,distanceRGBA_frag:nv,equirect_vert:iv,equirect_frag:rv,linedashed_vert:sv,linedashed_frag:ov,meshbasic_vert:av,meshbasic_frag:lv,meshlambert_vert:cv,meshlambert_frag:uv,meshmatcap_vert:fv,meshmatcap_frag:hv,meshnormal_vert:dv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:xv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:yv,meshtoon_frag:vv,points_vert:bv,points_frag:Sv,shadow_vert:Mv,shadow_frag:Ev,sprite_vert:Tv,sprite_frag:Av},ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},li={basic:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([ce.common,ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([ce.lights,ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};li.physical={uniforms:Xt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var wc={r:0,b:0,g:0},$r=new ni,wv=new Dt;function Rv(t,e,n,i,r,s,o){let a=new nt(0),c=s===!0?0:1,l,u,f=null,h=0,p=null;function x(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?n:e).get(T)),T}function g(b){let T=!1,w=x(b);w===null?d(a,c):w&&w.isColor&&(d(w,1),T=!0);let M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(b,T){let w=x(T);w&&(w.isCubeTexture||w.mapping===Vo)?(u===void 0&&(u=new vn(new nr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Yr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$r.copy(T.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wv.makeRotationFromEuler($r)),u.material.toneMapped=Je.getTransfer(w.colorSpace)!==st,(f!==w||h!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,p=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new vn(new Bo(2,2),new Cn({name:"BackgroundMaterial",uniforms:Yr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Je.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,p=t.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,T){b.getRGB(wc,Qf(t)),i.buffers.color.setClear(wc.r,wc.g,wc.b,T,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),c=T,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(a,c)},render:g,addToRenderList:m,dispose:A}}function Cv(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(y,P,k,W,X){let C=!1,R=f(W,k,P);s!==R&&(s=R,l(s.object)),C=p(y,W,k,X),C&&x(y,W,k,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,T(y,P,k,W),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function l(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,P,k){let W=k.wireframe===!0,X=i[y.id];X===void 0&&(X={},i[y.id]=X);let C=X[P.id];C===void 0&&(C={},X[P.id]=C);let R=C[W];return R===void 0&&(R=h(c()),C[W]=R),R}function h(y){let P=[],k=[],W=[];for(let X=0;X<n;X++)P[X]=0,k[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,P,k,W){let X=s.attributes,C=P.attributes,R=0,O=k.getAttributes();for(let L in O)if(O[L].location>=0){let q=X[L],Q=C[L];if(Q===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;R++}return s.attributesNum!==R||s.index!==W}function x(y,P,k,W){let X={},C=P.attributes,R=0,O=k.getAttributes();for(let L in O)if(O[L].location>=0){let q=C[L];q===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));let Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),X[L]=Q,R++}s.attributes=X,s.attributesNum=R,s.index=W}function g(){let y=s.newAttributes;for(let P=0,k=y.length;P<k;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){let k=s.newAttributes,W=s.enabledAttributes,X=s.attributeDivisors;k[y]=1,W[y]===0&&(t.enableVertexAttribArray(y),W[y]=1),X[y]!==P&&(t.vertexAttribDivisor(y,P),X[y]=P)}function A(){let y=s.newAttributes,P=s.enabledAttributes;for(let k=0,W=P.length;k<W;k++)P[k]!==y[k]&&(t.disableVertexAttribArray(k),P[k]=0)}function b(y,P,k,W,X,C,R){R===!0?t.vertexAttribIPointer(y,P,k,X,C):t.vertexAttribPointer(y,P,k,W,X,C)}function T(y,P,k,W){g();let X=W.attributes,C=k.getAttributes(),R=P.defaultAttributeValues;for(let O in C){let L=C[O];if(L.location>=0){let V=X[O];if(V===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),V!==void 0){let q=V.normalized,Q=V.itemSize,ne=e.get(V);if(ne===void 0)continue;let de=ne.buffer,ge=ne.type,Oe=ne.bytesPerElement,$=ge===t.INT||ge===t.UNSIGNED_INT||V.gpuType===ql;if(V.isInterleavedBufferAttribute){let J=V.data,me=J.stride,Be=V.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<L.locationSize;Se++)d(L.location+Se,J.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<L.locationSize;Se++)m(L.location+Se);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Se=0;Se<L.locationSize;Se++)b(L.location+Se,Q/L.locationSize,ge,q,me*Oe,(Be+Q/L.locationSize*Se)*Oe,$)}else{if(V.isInstancedBufferAttribute){for(let J=0;J<L.locationSize;J++)d(L.location+J,V.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let J=0;J<L.locationSize;J++)m(L.location+J);t.bindBuffer(t.ARRAY_BUFFER,de);for(let J=0;J<L.locationSize;J++)b(L.location+J,Q/L.locationSize,ge,q,Q*Oe,Q/L.locationSize*J*Oe,$)}}else if(R!==void 0){let q=R[O];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(L.location,q);break;case 3:t.vertexAttrib3fv(L.location,q);break;case 4:t.vertexAttrib4fv(L.location,q);break;default:t.vertexAttrib1fv(L.location,q)}}}}A()}function w(){B();for(let y in i){let P=i[y];for(let k in P){let W=P[k];for(let X in W)u(W[X].object),delete W[X];delete P[k]}delete i[y]}}function M(y){if(i[y.id]===void 0)return;let P=i[y.id];for(let k in P){let W=P[k];for(let X in W)u(W[X].object),delete W[X];delete P[k]}delete i[y.id]}function D(y){for(let P in i){let k=i[P];if(k[y.id]===void 0)continue;let W=k[y.id];for(let X in W)u(W[X].object),delete W[X];delete k[y.id]}}function B(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:m,disableUnusedAttributes:A}}function Iv(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];n.update(p,i,1)}function c(l,u,f,h){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g]*h[g];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Pv(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==In&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let B=D===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==oi&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ai&&!B)}function c(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",u=c(l);u!==l&&(ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,M=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:w,maxSamples:M}}function Dv(t){let e=this,n=null,i=0,r=!1,s=!1,o=new jn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){let x=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):l();else{let A=s?0:i,b=A*4,T=d.clippingState||null;c.value=T,T=u(x,h,b,p);for(let w=0;w!==b;++w)T[w]=n[w];d.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,x){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=c.value,x!==!0||m===null){let d=p+g*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,T=p;b!==g;++b,T+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Nv(t){let e=new WeakMap;function n(o,a){return a===Hl?o.mapping=Wr:a===Wl&&(o.mapping=Xr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Hl||a===Wl)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sl(c.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",r),n(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var lr=4,Mm=[.125,.215,.35,.446,.526,.582],Kr=20,Lv=256,$o=new Ll,Em=new nt,ih=null,rh=0,sh=0,oh=!1,Ov=new Y,Cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){let{size:o=256,position:a=Ov}=s;ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:qr,format:In,colorSpace:zr,depthBuffer:!1},r=Tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uv(s)),this._blurMaterial=Bv(s,e,n),this._ggxMaterial=Fv(s,e,n)}return r}_compileMaterial(e){let n=new vn(new Ai,e);this._renderer.compile(n,$o)}_sceneToCubeUV(e,n,i,r,s){let c=new Bt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Em),f.toneMapping=Ri,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new nr,new Gr({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,d=!1,A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(Em),d=!0);for(let b=0;b<6;b++){let T=b%3;T===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):T===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));let w=this._cubeSize;Ps(r,T*w,b>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(g,c),f.render(e,c)}f.toneMapping=p,f.autoClear=h,e.background=A}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Wr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ps(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,$o)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=.05+l*.95,p=f*h,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-lr?i-x+lr:0),d=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-n,Ps(s,m,d,3*g,2*g),r.setRenderTarget(s),r.render(a,$o),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,Ps(e,m,d,3*g,2*g),r.setRenderTarget(e),r.render(a,$o)}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=l;let h=l.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),g=s/x,m=isFinite(s)?1+Math.floor(u*g):Kr;m>Kr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);let d=[],A=0;for(let D=0;D<Kr;++D){let B=D/g,S=Math.exp(-B*B/2);d.push(S),D===0?A+=S:D<m&&(A+=2*S)}for(let D=0;D<d.length;D++)d[D]=d[D]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=x,h.mipInt.value=b-i;let T=this._sizeLods[r],w=3*T*(r>b-lr?r-b+lr:0),M=4*(this._cubeSize-T);Ps(n,w,M,3*T,2*T),c.setRenderTarget(n),c.render(f,$o)}};function Uv(t){let e=[],n=[],i=[],r=t,s=t-lr+1+Mm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>t-lr?c=Mm[o-t+lr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,g=3,m=2,d=1,A=new Float32Array(g*x*p),b=new Float32Array(m*x*p),T=new Float32Array(d*x*p);for(let M=0;M<p;M++){let D=M%3*2/3-1,B=M>2?0:-1,S=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];A.set(S,g*x*M),b.set(h,m*x*M);let y=[M,M,M,M,M,M];T.set(y,d*x*M)}let w=new Ai;w.setAttribute("position",new _n(A,g)),w.setAttribute("uv",new _n(b,m)),w.setAttribute("faceIndex",new _n(T,d)),i.push(new vn(w,null)),r>lr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Tm(t,e,n){let i=new ti(t,e,n);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Fv(t,e,n){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Bv(t,e,n){let i=new Float32Array(Kr),r=new Y(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Am(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function wm(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kv(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Hl||c===Wl,u=c===Wr||c===Xr;if(l||u){let f=e.get(a),h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Cc(t)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Cc(t)),f=l?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zv(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Ms("WebGLRenderer: "+i+" extension not supported."),r}}}function Vv(t,e,n,i){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function c(f){let h=f.attributes;for(let p in h)e.update(h[p],t.ARRAY_BUFFER)}function l(f){let h=[],p=f.index,x=f.attributes.position,g=0;if(p!==null){let A=p.array;g=p.version;for(let b=0,T=A.length;b<T;b+=3){let w=A[b+0],M=A[b+1],D=A[b+2];h.push(w,M,M,D,D,w)}}else if(x!==void 0){let A=x.array;g=x.version;for(let b=0,T=A.length/3-1;b<T;b+=3){let w=b+0,M=b+1,D=b+2;h.push(w,M,M,D,D,w)}}else return;let m=new(Jf(h)?Do:Po)(h,1);m.version=g;let d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Gv(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function l(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];n.update(m,i,1)}function f(h,p,x,g){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/o,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,g,0,x);let d=0;for(let A=0;A<x;A++)d+=p[A]*g[A];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Hv(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Wv(t,e,n){let i=new WeakMap,r=new Rt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let S=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],b=0;p===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let T=a.attributes.position.count*b,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let M=new Float32Array(T*w*4*f),D=new Co(M,T,w,f);D.type=ai,D.needsUpdate=!0;let B=b*4;for(let y=0;y<f;y++){let P=m[y],k=d[y],W=A[y],X=T*w*4*y;for(let C=0;C<P.count;C++){let R=C*B;p===!0&&(r.fromBufferAttribute(P,C),M[X+R+0]=r.x,M[X+R+1]=r.y,M[X+R+2]=r.z,M[X+R+3]=0),x===!0&&(r.fromBufferAttribute(k,C),M[X+R+4]=r.x,M[X+R+5]=r.y,M[X+R+6]=r.z,M[X+R+7]=0),g===!0&&(r.fromBufferAttribute(W,C),M[X+R+8]=r.x,M[X+R+9]=r.y,M[X+R+10]=r.z,M[X+R+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new tt(T,w)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Xv(t,e,n,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}var qm=new on,Rm=new Uo(1,1),Ym=new Co,$m=new vl,Zm=new Lo,Cm=[],Im=[],Pm=new Float32Array(16),Dm=new Float32Array(9),Nm=new Float32Array(4);function Ls(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pc(t,e){let n=Im[e];n===void 0&&(n=new Int32Array(e),Im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qv(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Yv(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function $v(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function Zv(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function Kv(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;Nm.set(i),t.uniformMatrix2fv(this.addr,!1,Nm),Lt(n,i)}}function Jv(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;Dm.set(i),t.uniformMatrix3fv(this.addr,!1,Dm),Lt(n,i)}}function jv(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Nt(n,i))return;Pm.set(i),t.uniformMatrix4fv(this.addr,!1,Pm),Lt(n,i)}}function Qv(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function tb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function nb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function ib(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function sb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function ob(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function ab(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rm.compareFunction=Zf,s=Rm):s=qm,n.setTexture2D(e||s,r)}function lb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$m,r)}function cb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zm,r)}function ub(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ym,r)}function fb(t){switch(t){case 5126:return qv;case 35664:return Yv;case 35665:return $v;case 35666:return Zv;case 35674:return Kv;case 35675:return Jv;case 35676:return jv;case 5124:case 35670:return Qv;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return sb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function hb(t,e){t.uniform1fv(this.addr,e)}function db(t,e){let n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function pb(t,e){let n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function mb(t,e){let n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function xb(t,e){let n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gb(t,e){let n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _b(t,e){let n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yb(t,e){t.uniform1iv(this.addr,e)}function vb(t,e){t.uniform2iv(this.addr,e)}function bb(t,e){t.uniform3iv(this.addr,e)}function Sb(t,e){t.uniform4iv(this.addr,e)}function Mb(t,e){t.uniform1uiv(this.addr,e)}function Eb(t,e){t.uniform2uiv(this.addr,e)}function Tb(t,e){t.uniform3uiv(this.addr,e)}function Ab(t,e){t.uniform4uiv(this.addr,e)}function wb(t,e,n){let i=this.cache,r=e.length,s=Pc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||qm,s[o])}function Rb(t,e,n){let i=this.cache,r=e.length,s=Pc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||$m,s[o])}function Cb(t,e,n){let i=this.cache,r=e.length,s=Pc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zm,s[o])}function Ib(t,e,n){let i=this.cache,r=e.length,s=Pc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ym,s[o])}function Pb(t){switch(t){case 5126:return hb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return xb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return yb;case 35667:case 35671:return vb;case 35668:case 35672:return bb;case 35669:case 35673:return Sb;case 5125:return Mb;case 36294:return Eb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Ib}}var lh=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fb(n.type)}},ch=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Pb(n.type)}},uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},ah=/(\w+)(\])?(\[|\.)?/g;function Lm(t,e){t.seq.push(e),t.map[e.id]=e}function Db(t,e,n){let i=t.name,r=i.length;for(ah.lastIndex=0;;){let s=ah.exec(i),o=ah.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Lm(n,l===void 0?new lh(a,t,e):new ch(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new uh(a),Lm(n,f)),n=f}}}var Ds=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Db(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function Om(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Nb=37297,Lb=0;function Ob(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Um=new Ge;function Ub(t){Je._getMatrix(Um,Je.workingColorSpace,t);let e=`mat3( ${Um.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Ao:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fm(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Ob(t.getShaderSource(e),a)}else return s}function Fb(t,e){let n=Ub(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Bb(t,e){let n;switch(e){case Qp:n="Linear";break;case em:n="Reinhard";break;case tm:n="Cineon";break;case nm:n="ACESFilmic";break;case rm:n="AgX";break;case sm:n="Neutral";break;case im:n="Custom";break;default:ke("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Rc=new Y;function kb(){Je.getLuminanceCoefficients(Rc);let t=Rc.x.toFixed(4),e=Rc.y.toFixed(4),n=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function Vb(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Gb(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zo(t){return t!==""}function Bm(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(t){return t.replace(Hb,Xb)}var Wb=new Map;function Xb(t,e){let n=He[e];if(n===void 0){let i=Wb.get(e);if(i!==void 0)n=He[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fh(n)}var qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(t){return t.replace(qb,Yb)}function Yb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $b(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Zb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kb(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===Xr&&(e="ENVMAP_MODE_REFRACTION"),e}function Jb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zf:e="ENVMAP_BLENDING_MULTIPLY";break;case Jp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function jb(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Qb(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,c=$b(n),l=Zb(n),u=Kb(n),f=Jb(n),h=jb(n),p=zb(n),x=Vb(s),g=r.createProgram(),m,d,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Zo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Zo).join(`
`),d.length>0&&(d+=`
`)):(m=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),d=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?He.tonemapping_pars_fragment:"",n.toneMapping!==Ri?Bb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Fb("linearToOutputTexel",n.outputColorSpace),kb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),o=fh(o),o=Bm(o,n),o=km(o,n),a=fh(a),a=Bm(a,n),a=km(a,n),o=zm(o),a=zm(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=A+m+o,T=A+d+a,w=Om(r,r.VERTEX_SHADER,b),M=Om(r,r.FRAGMENT_SHADER,T);r.attachShader(g,w),r.attachShader(g,M),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function D(P){if(t.debug.checkShaderErrors){let k=r.getProgramInfoLog(g)||"",W=r.getShaderInfoLog(w)||"",X=r.getShaderInfoLog(M)||"",C=k.trim(),R=W.trim(),O=X.trim(),L=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,w,M);else{let q=Fm(r,w,"vertex"),Q=Fm(r,M,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+q+`
`+Q)}else C!==""?ke("WebGLProgram: Program Info Log:",C):(R===""||O==="")&&(V=!1);V&&(P.diagnostics={runnable:L,programLog:C,vertexShader:{log:R,prefix:m},fragmentShader:{log:O,prefix:d}})}r.deleteShader(w),r.deleteShader(M),B=new Ds(r,g),S=Gb(r,g)}let B;this.getUniforms=function(){return B===void 0&&D(this),B};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,Nb)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=M,this}var eS=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new dh(e),n.set(e,i)),i}},dh=class{constructor(e){this.id=eS++,this.code=e,this.usedTimes=0}};function tS(t,e,n,i,r,s,o){let a=new As,c=new hh,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures,p=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,k,W){let X=k.fog,C=W.geometry,R=S.isMeshStandardMaterial?k.environment:null,O=(S.isMeshStandardMaterial?n:e).get(S.envMap||R),L=O&&O.mapping===Vo?O.image.height:null,V=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&ke("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Q=q!==void 0?q.length:0,ne=0;C.morphAttributes.position!==void 0&&(ne=1),C.morphAttributes.normal!==void 0&&(ne=2),C.morphAttributes.color!==void 0&&(ne=3);let de,ge,Oe,$;if(V){let ot=li[V];de=ot.vertexShader,ge=ot.fragmentShader}else de=S.vertexShader,ge=S.fragmentShader,c.update(S),Oe=c.getVertexShaderID(S),$=c.getFragmentShaderID(S);let J=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),Be=W.isInstancedMesh===!0,Se=W.isBatchedMesh===!0,qe=!!S.map,kt=!!S.matcap,Xe=!!O,pt=!!S.aoMap,I=!!S.lightMap,Ye=!!S.bumpMap,$e=!!S.normalMap,ft=!!S.displacementMap,ve=!!S.emissiveMap,xt=!!S.metalnessMap,Te=!!S.roughnessMap,Ve=S.anisotropy>0,E=S.clearcoat>0,_=S.dispersion>0,z=S.iridescence>0,K=S.sheen>0,ee=S.transmission>0,Z=Ve&&!!S.anisotropyMap,Me=E&&!!S.clearcoatMap,ue=E&&!!S.clearcoatNormalMap,Ae=E&&!!S.clearcoatRoughnessMap,be=z&&!!S.iridescenceMap,te=z&&!!S.iridescenceThicknessMap,se=K&&!!S.sheenColorMap,De=K&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,pe=!!S.specularColorMap,Ue=!!S.specularIntensityMap,N=ee&&!!S.transmissionMap,fe=ee&&!!S.thicknessMap,oe=!!S.gradientMap,ae=!!S.alphaMap,ie=S.alphaTest>0,j=!!S.alphaHash,_e=!!S.extensions,ze=Ri;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ze=t.toneMapping);let ht={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:de,fragmentShader:ge,defines:S.defines,customVertexShaderID:Oe,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Se,batchingColor:Se&&W._colorsTexture!==null,instancing:Be,instancingColor:Be&&W.instanceColor!==null,instancingMorph:Be&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:zr,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:kt,envMap:Xe,envMapMode:Xe&&O.mapping,envMapCubeUVHeight:L,aoMap:pt,lightMap:I,bumpMap:Ye,normalMap:$e,displacementMap:h&&ft,emissiveMap:ve,normalMapObjectSpace:$e&&S.normalMapType===um,normalMapTangentSpace:$e&&S.normalMapType===cm,metalnessMap:xt,roughnessMap:Te,anisotropy:Ve,anisotropyMap:Z,clearcoat:E,clearcoatMap:Me,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:_,iridescence:z,iridescenceMap:be,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:pe,specularIntensityMap:Ue,transmission:ee,transmissionMap:N,thicknessMap:fe,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Br&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:ie,alphaHash:j,combine:S.combine,mapUv:qe&&g(S.map.channel),aoMapUv:pt&&g(S.aoMap.channel),lightMapUv:I&&g(S.lightMap.channel),bumpMapUv:Ye&&g(S.bumpMap.channel),normalMapUv:$e&&g(S.normalMap.channel),displacementMapUv:ft&&g(S.displacementMap.channel),emissiveMapUv:ve&&g(S.emissiveMap.channel),metalnessMapUv:xt&&g(S.metalnessMap.channel),roughnessMapUv:Te&&g(S.roughnessMap.channel),anisotropyMapUv:Z&&g(S.anisotropyMap.channel),clearcoatMapUv:Me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(S.sheenRoughnessMap.channel),specularMapUv:Ce&&g(S.specularMap.channel),specularColorMapUv:pe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ue&&g(S.specularIntensityMap.channel),transmissionMapUv:N&&g(S.transmissionMap.channel),thicknessMapUv:fe&&g(S.thicknessMap.channel),alphaMapUv:ae&&g(S.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&($e||Ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!C.attributes.uv&&(qe||ae),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&S.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function d(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(A(y,S),b(y,S),y.push(t.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function A(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function T(S){let y=x[S.type],P;if(y){let k=li[y];P=bm.clone(k.uniforms)}else P=S.uniforms;return P}function w(S,y){let P;for(let k=0,W=u.length;k<W;k++){let X=u[k];if(X.cacheKey===y){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Qb(t,y,S,s),u.push(P)),P}function M(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function D(S){c.remove(S)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:w,releaseProgram:M,releaseShaderCache:D,programs:u,dispose:B}}function nS(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,c){t.get(o)[a]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,x,g,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function a(f,h,p,x,g,m){let d=o(f,h,p,x,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function c(f,h,p,x,g,m){let d=o(f,h,p,x,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function l(f,h){n.length>1&&n.sort(f||iS),i.length>1&&i.sort(h||Gm),r.length>1&&r.sort(h||Gm)}function u(){for(let f=e,h=t.length;f<h;f++){let p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function rS(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new Hm,t.set(i,[o])):r>=s.length?(o=new Hm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sS(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new nt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function oS(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var aS=0;function lS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cS(t){let e=new sS,n=oS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Y);let r=new Y,s=new Dt,o=new Dt;function a(l){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,x=0,g=0,m=0,d=0,A=0,b=0,T=0,w=0,M=0,D=0;l.sort(lS);for(let S=0,y=l.length;S<y;S++){let P=l[S],k=P.color,W=P.intensity,X=P.distance,C=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*W,f+=k.g*W,h+=k.b*W;else if(P.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(P.sh.coefficients[R],W);D++}else if(P.isDirectionalLight){let R=e.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,L=n.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=C,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=R,p++}else if(P.isSpotLight){let R=e.get(P);R.position.setFromMatrixPosition(P.matrixWorld),R.color.copy(k).multiplyScalar(W),R.distance=X,R.coneCos=Math.cos(P.angle),R.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),R.decay=P.decay,i.spot[g]=R;let O=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,O.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[g]=O.matrix,P.castShadow){let L=n.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,i.spotShadow[g]=L,i.spotShadowMap[g]=C,T++}g++}else if(P.isRectAreaLight){let R=e.get(P);R.color.copy(k).multiplyScalar(W),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=R,m++}else if(P.isPointLight){let R=e.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity),R.distance=P.distance,R.decay=P.decay,P.castShadow){let O=P.shadow,L=n.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=C,i.pointShadowMatrix[x]=P.shadow.matrix,b++}i.point[x]=R,x++}else if(P.isHemisphereLight){let R=e.get(P);R.skyColor.copy(P.color).multiplyScalar(W),R.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[d]=R,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let B=i.hash;(B.directionalLength!==p||B.pointLength!==x||B.spotLength!==g||B.rectAreaLength!==m||B.hemiLength!==d||B.numDirectionalShadows!==A||B.numPointShadows!==b||B.numSpotShadows!==T||B.numSpotMaps!==w||B.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+w-M,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=D,B.directionalLength=p,B.pointLength=x,B.spotLength=g,B.rectAreaLength=m,B.hemiLength=d,B.numDirectionalShadows=A,B.numPointShadows=b,B.numSpotShadows=T,B.numSpotMaps=w,B.numLightProbes=D,i.version=aS++)}function c(l,u){let f=0,h=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){let b=l[d];if(b.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(b.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function Wm(t){let e=new cS(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}let l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function uS(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Wm(t),e.set(r,[a])):s>=o.length?(a=new Wm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var fS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dS(t,e,n){let i=new Oo,r=new tt,s=new tt,o=new Rt,a=new Ml({depthPacking:lm}),c=new El,l={},u=n.maxTextureSize,f={[Mi]:jt,[jt]:Mi,[ri]:ri},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:fS,fragmentShader:hS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ai;x.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new vn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let d=this.type;this.render=function(M,D,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let S=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),k=t.state;k.setBlending(si),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let W=d!==ii&&this.type===ii,X=d===ii&&this.type!==ii;for(let C=0,R=M.length;C<R;C++){let O=M[C],L=O.shadow;if(L===void 0){ke("WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let V=L.getFrameExtents();if(r.multiply(V),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,L.mapSize.y=s.y)),L.map===null||W===!0||X===!0){let Q=this.type!==ii?{minFilter:sn,magFilter:sn}:{};L.map!==null&&L.map.dispose(),L.map=new ti(r.x,r.y,Q),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();let q=L.getViewportCount();for(let Q=0;Q<q;Q++){let ne=L.getViewport(Q);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),k.viewport(o),L.updateMatrices(O,Q),i=L.getFrustum(),T(D,B,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===ii&&A(L,B),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,y,P)};function A(M,D){let B=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ti(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(D,null,B,h,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(D,null,B,p,g,null)}function b(M,D,B,S){let y=null,P=B.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)y=P;else if(y=B.isPointLight===!0?c:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let k=y.uuid,W=D.uuid,X=l[k];X===void 0&&(X={},l[k]=X);let C=X[W];C===void 0&&(C=y.clone(),X[W]=C,D.addEventListener("dispose",w)),y=C}if(y.visible=D.visible,y.wireframe=D.wireframe,S===ii?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:f[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=t.properties.get(y);k.light=B}return y}function T(M,D,B,S,y){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===ii)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld);let W=e.update(M),X=M.material;if(Array.isArray(X)){let C=W.groups;for(let R=0,O=C.length;R<O;R++){let L=C[R],V=X[L.materialIndex];if(V&&V.visible){let q=b(M,V,S,y);M.onBeforeShadow(t,M,D,B,W,q,L),t.renderBufferDirect(B,null,W,q,M,L),M.onAfterShadow(t,M,D,B,W,q,L)}}}else if(X.visible){let C=b(M,X,S,y);M.onBeforeShadow(t,M,D,B,W,C,null),t.renderBufferDirect(B,null,W,C,M,null),M.onAfterShadow(t,M,D,B,W,C,null)}}let k=M.children;for(let W=0,X=k.length;W<X;W++)T(k[W],D,B,S,y)}function w(M){M.target.removeEventListener("dispose",w);for(let B in l){let S=l[B],y=M.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var pS={[Ul]:Fl,[Bl]:Vl,[kl]:Gl,[kr]:zl,[Fl]:Ul,[Vl]:Bl,[Gl]:kl,[zl]:kr};function mS(t,e){function n(){let N=!1,fe=new Rt,oe=null,ae=new Rt(0,0,0,0);return{setMask:function(ie){oe!==ie&&!N&&(t.colorMask(ie,ie,ie,ie),oe=ie)},setLocked:function(ie){N=ie},setClear:function(ie,j,_e,ze,ht){ht===!0&&(ie*=ze,j*=ze,_e*=ze),fe.set(ie,j,_e,ze),ae.equals(fe)===!1&&(t.clearColor(ie,j,_e,ze),ae.copy(fe))},reset:function(){N=!1,oe=null,ae.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,oe=null,ae=null,ie=null;return{setReversed:function(j){if(fe!==j){let _e=e.get("EXT_clip_control");j?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),fe=j;let ze=ie;ie=null,this.setClear(ze)}},getReversed:function(){return fe},setTest:function(j){j?J(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(j){oe!==j&&!N&&(t.depthMask(j),oe=j)},setFunc:function(j){if(fe&&(j=pS[j]),ae!==j){switch(j){case Ul:t.depthFunc(t.NEVER);break;case Fl:t.depthFunc(t.ALWAYS);break;case Bl:t.depthFunc(t.LESS);break;case kr:t.depthFunc(t.LEQUAL);break;case kl:t.depthFunc(t.EQUAL);break;case zl:t.depthFunc(t.GEQUAL);break;case Vl:t.depthFunc(t.GREATER);break;case Gl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=j}},setLocked:function(j){N=j},setClear:function(j){ie!==j&&(fe&&(j=1-j),t.clearDepth(j),ie=j)},reset:function(){N=!1,oe=null,ae=null,ie=null,fe=!1}}}function r(){let N=!1,fe=null,oe=null,ae=null,ie=null,j=null,_e=null,ze=null,ht=null;return{setTest:function(ot){N||(ot?J(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(ot){fe!==ot&&!N&&(t.stencilMask(ot),fe=ot)},setFunc:function(ot,Wn,Nn){(oe!==ot||ae!==Wn||ie!==Nn)&&(t.stencilFunc(ot,Wn,Nn),oe=ot,ae=Wn,ie=Nn)},setOp:function(ot,Wn,Nn){(j!==ot||_e!==Wn||ze!==Nn)&&(t.stencilOp(ot,Wn,Nn),j=ot,_e=Wn,ze=Nn)},setLocked:function(ot){N=ot},setClear:function(ot){ht!==ot&&(t.clearStencil(ot),ht=ot)},reset:function(){N=!1,fe=null,oe=null,ae=null,ie=null,j=null,_e=null,ze=null,ht=null}}}let s=new n,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},f={},h=new WeakMap,p=[],x=null,g=!1,m=null,d=null,A=null,b=null,T=null,w=null,M=null,D=new nt(0,0,0),B=0,S=!1,y=null,P=null,k=null,W=null,X=null,C=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,O=0,L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(L)[1]),R=O>=1):L.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),R=O>=2);let V=null,q={},Q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),de=new Rt().fromArray(Q),ge=new Rt().fromArray(ne);function Oe(N,fe,oe,ae){let ie=new Uint8Array(4),j=t.createTexture();t.bindTexture(N,j),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<oe;_e++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(fe+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return j}let $={};$[t.TEXTURE_2D]=Oe(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=Oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=Oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=Oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(kr),Ye(!1),$e(Of),J(t.CULL_FACE),pt(si);function J(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function me(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Be(N,fe){return f[N]!==fe?(t.bindFramebuffer(N,fe),f[N]=fe,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(N,fe){let oe=p,ae=!1;if(N){oe=h.get(fe),oe===void 0&&(oe=[],h.set(fe,oe));let ie=N.textures;if(oe.length!==ie.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let j=0,_e=ie.length;j<_e;j++)oe[j]=t.COLOR_ATTACHMENT0+j;oe.length=ie.length,ae=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,ae=!0);ae&&t.drawBuffers(oe)}function qe(N){return x!==N?(t.useProgram(N),x=N,!0):!1}let kt={[er]:t.FUNC_ADD,[Lp]:t.FUNC_SUBTRACT,[Op]:t.FUNC_REVERSE_SUBTRACT};kt[Up]=t.MIN,kt[Fp]=t.MAX;let Xe={[Bp]:t.ZERO,[kp]:t.ONE,[zp]:t.SRC_COLOR,[hl]:t.SRC_ALPHA,[qp]:t.SRC_ALPHA_SATURATE,[Wp]:t.DST_COLOR,[Gp]:t.DST_ALPHA,[Vp]:t.ONE_MINUS_SRC_COLOR,[dl]:t.ONE_MINUS_SRC_ALPHA,[Xp]:t.ONE_MINUS_DST_COLOR,[Hp]:t.ONE_MINUS_DST_ALPHA,[Yp]:t.CONSTANT_COLOR,[$p]:t.ONE_MINUS_CONSTANT_COLOR,[Zp]:t.CONSTANT_ALPHA,[Kp]:t.ONE_MINUS_CONSTANT_ALPHA};function pt(N,fe,oe,ae,ie,j,_e,ze,ht,ot){if(N===si){g===!0&&(me(t.BLEND),g=!1);return}if(g===!1&&(J(t.BLEND),g=!0),N!==Np){if(N!==m||ot!==S){if((d!==er||T!==er)&&(t.blendEquation(t.FUNC_ADD),d=er,T=er),ot)switch(N){case Br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ff:t.blendFunc(t.ONE,t.ONE);break;case Bf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case Br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ff:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bf:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kf:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}A=null,b=null,w=null,M=null,D.set(0,0,0),B=0,m=N,S=ot}return}ie=ie||fe,j=j||oe,_e=_e||ae,(fe!==d||ie!==T)&&(t.blendEquationSeparate(kt[fe],kt[ie]),d=fe,T=ie),(oe!==A||ae!==b||j!==w||_e!==M)&&(t.blendFuncSeparate(Xe[oe],Xe[ae],Xe[j],Xe[_e]),A=oe,b=ae,w=j,M=_e),(ze.equals(D)===!1||ht!==B)&&(t.blendColor(ze.r,ze.g,ze.b,ht),D.copy(ze),B=ht),m=N,S=!1}function I(N,fe){N.side===ri?me(t.CULL_FACE):J(t.CULL_FACE);let oe=N.side===jt;fe&&(oe=!oe),Ye(oe),N.blending===Br&&N.transparent===!1?pt(si):pt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let ae=N.stencilWrite;a.setTest(ae),ae&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){y!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),y=N)}function $e(N){N!==Ip?(J(t.CULL_FACE),N!==P&&(N===Of?t.cullFace(t.BACK):N===Pp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),P=N}function ft(N){N!==k&&(R&&t.lineWidth(N),k=N)}function ve(N,fe,oe){N?(J(t.POLYGON_OFFSET_FILL),(W!==fe||X!==oe)&&(t.polygonOffset(fe,oe),W=fe,X=oe)):me(t.POLYGON_OFFSET_FILL)}function xt(N){N?J(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function Te(N){N===void 0&&(N=t.TEXTURE0+C-1),V!==N&&(t.activeTexture(N),V=N)}function Ve(N,fe,oe){oe===void 0&&(V===null?oe=t.TEXTURE0+C-1:oe=V);let ae=q[oe];ae===void 0&&(ae={type:void 0,texture:void 0},q[oe]=ae),(ae.type!==N||ae.texture!==fe)&&(V!==oe&&(t.activeTexture(oe),V=oe),t.bindTexture(N,fe||$[N]),ae.type=N,ae.texture=fe)}function E(){let N=q[V];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function z(){try{t.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function K(){try{t.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function ee(){try{t.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Me(){try{t.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function ue(){try{t.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Ae(){try{t.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function be(){try{t.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function te(){try{t.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function se(N){de.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function De(N){ge.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function Ce(N,fe){let oe=l.get(fe);oe===void 0&&(oe=new WeakMap,l.set(fe,oe));let ae=oe.get(N);ae===void 0&&(ae=t.getUniformBlockIndex(fe,N.name),oe.set(N,ae))}function pe(N,fe){let ae=l.get(fe).get(N);c.get(fe)!==ae&&(t.uniformBlockBinding(fe,ae,N.__bindingPointIndex),c.set(fe,ae))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},V=null,q={},f={},h=new WeakMap,p=[],x=null,g=!1,m=null,d=null,A=null,b=null,T=null,w=null,M=null,D=new nt(0,0,0),B=0,S=!1,y=null,P=null,k=null,W=null,X=null,de.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:me,bindFramebuffer:Be,drawBuffers:Se,useProgram:qe,setBlending:pt,setMaterial:I,setFlipSided:Ye,setCullFace:$e,setLineWidth:ft,setPolygonOffset:ve,setScissorTest:xt,activeTexture:Te,bindTexture:Ve,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:be,texImage3D:te,updateUBOMapping:Ce,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:Me,scissor:se,viewport:De,reset:Ue}}function xS(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,u=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return p?new OffscreenCanvas(E,_):Ro("canvas")}function g(E,_,z){let K=1,ee=Ve(E);if((ee.width>z||ee.height>z)&&(K=z/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Z=Math.floor(K*ee.width),Me=Math.floor(K*ee.height);f===void 0&&(f=x(Z,Me));let ue=_?x(Z,Me):f;return ue.width=Z,ue.height=Me,ue.getContext("2d").drawImage(E,0,0,Z,Me),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Me+")."),ue}else return"data"in E&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){t.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(E,_,z,K,ee=!1){if(E!==null){if(t[E]!==void 0)return t[E];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=_;if(_===t.RED&&(z===t.FLOAT&&(Z=t.R32F),z===t.HALF_FLOAT&&(Z=t.R16F),z===t.UNSIGNED_BYTE&&(Z=t.R8)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.R8UI),z===t.UNSIGNED_SHORT&&(Z=t.R16UI),z===t.UNSIGNED_INT&&(Z=t.R32UI),z===t.BYTE&&(Z=t.R8I),z===t.SHORT&&(Z=t.R16I),z===t.INT&&(Z=t.R32I)),_===t.RG&&(z===t.FLOAT&&(Z=t.RG32F),z===t.HALF_FLOAT&&(Z=t.RG16F),z===t.UNSIGNED_BYTE&&(Z=t.RG8)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RG8UI),z===t.UNSIGNED_SHORT&&(Z=t.RG16UI),z===t.UNSIGNED_INT&&(Z=t.RG32UI),z===t.BYTE&&(Z=t.RG8I),z===t.SHORT&&(Z=t.RG16I),z===t.INT&&(Z=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),z===t.UNSIGNED_INT&&(Z=t.RGB32UI),z===t.BYTE&&(Z=t.RGB8I),z===t.SHORT&&(Z=t.RGB16I),z===t.INT&&(Z=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),z===t.UNSIGNED_INT&&(Z=t.RGBA32UI),z===t.BYTE&&(Z=t.RGBA8I),z===t.SHORT&&(Z=t.RGBA16I),z===t.INT&&(Z=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),_===t.RGBA){let Me=ee?Ao:Je.getTransfer(K);z===t.FLOAT&&(Z=t.RGBA32F),z===t.HALF_FLOAT&&(Z=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Z=Me===st?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(E,_){let z;return E?_===null||_===ar||_===Cs?z=t.DEPTH24_STENCIL8:_===ai?z=t.DEPTH32F_STENCIL8:_===Rs&&(z=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ar||_===Cs?z=t.DEPTH_COMPONENT24:_===ai?z=t.DEPTH_COMPONENT32F:_===Rs&&(z=t.DEPTH_COMPONENT16),z}function w(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==sn&&E.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function M(E){let _=E.target;_.removeEventListener("dispose",M),B(_),_.isVideoTexture&&u.delete(_)}function D(E){let _=E.target;_.removeEventListener("dispose",D),y(_)}function B(E){let _=i.get(E);if(_.__webglInit===void 0)return;let z=E.source,K=h.get(z);if(K){let ee=K[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(E),Object.keys(K).length===0&&h.delete(z)}i.remove(E)}function S(E){let _=i.get(E);t.deleteTexture(_.__webglTexture);let z=E.source,K=h.get(z);delete K[_.__cacheKey],o.memory.textures--}function y(E){let _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let ee=0;ee<_.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(_.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)t.deleteFramebuffer(_.__webglFramebuffer[K]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=E.textures;for(let K=0,ee=z.length;K<ee;K++){let Z=i.get(z[K]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(E)}let P=0;function k(){P=0}function W(){let E=P;return E>=r.maxTextures&&ke("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function X(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function C(E,_){let z=i.get(E);if(E.isVideoTexture&&xt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let K=E.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,E,_);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function R(E,_){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){$(z,E,_);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function O(E,_){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){$(z,E,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function L(E,_){let z=i.get(E);if(E.version>0&&z.__version!==E.version){J(z,E,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}let V={[pl]:t.REPEAT,[Qn]:t.CLAMP_TO_EDGE,[ml]:t.MIRRORED_REPEAT},q={[sn]:t.NEAREST,[om]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[Xl]:t.LINEAR_MIPMAP_NEAREST,[or]:t.LINEAR_MIPMAP_LINEAR},Q={[fm]:t.NEVER,[gm]:t.ALWAYS,[hm]:t.LESS,[Zf]:t.LEQUAL,[dm]:t.EQUAL,[xm]:t.GEQUAL,[pm]:t.GREATER,[mm]:t.NOTEQUAL};function ne(E,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===Xl||_.magFilter===Go||_.magFilter===or||_.minFilter===yn||_.minFilter===Xl||_.minFilter===Go||_.minFilter===or)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,V[_.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,V[_.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,V[_.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,q[_.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,q[_.minFilter]),_.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Q[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==Go&&_.minFilter!==or||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function de(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",M));let K=_.source,ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));let Z=X(_);if(Z!==E.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[Z].usedTimes++;let Me=ee[E.__cacheKey];Me!==void 0&&(ee[E.__cacheKey].usedTimes--,Me.usedTimes===0&&S(_)),E.__cacheKey=Z,E.__webglTexture=ee[Z].texture}return z}function ge(E,_,z){return Math.floor(Math.floor(E/z)/_)}function Oe(E,_,z,K){let Z=E.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,K,_.data);else{Z.sort((te,se)=>te.start-se.start);let Me=0;for(let te=1;te<Z.length;te++){let se=Z[Me],De=Z[te],Ce=se.start+se.count,pe=ge(De.start,_.width,4),Ue=ge(se.start,_.width,4);De.start<=Ce+1&&pe===Ue&&ge(De.start+De.count-1,_.width,4)===pe?se.count=Math.max(se.count,De.start+De.count-se.start):(++Me,Z[Me]=De)}Z.length=Me+1;let ue=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let te=0,se=Z.length;te<se;te++){let De=Z[te],Ce=Math.floor(De.start/4),pe=Math.ceil(De.count/4),Ue=Ce%_.width,N=Math.floor(Ce/_.width),fe=pe,oe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ue,N,fe,oe,z,K,_.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,be)}}function $(E,_,z){let K=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=t.TEXTURE_3D);let ee=de(E,_),Z=_.source;n.bindTexture(K,E.__webglTexture,t.TEXTURE0+z);let Me=i.get(Z);if(Z.version!==Me.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);let ue=Je.getPrimaries(Je.workingColorSpace),Ae=_.colorSpace===Ci?null:Je.getPrimaries(_.colorSpace),be=_.colorSpace===Ci||ue===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let te=g(_.image,!1,r.maxTextureSize);te=Te(_,te);let se=s.convert(_.format,_.colorSpace),De=s.convert(_.type),Ce=b(_.internalFormat,se,De,_.colorSpace,_.isVideoTexture);ne(K,_);let pe,Ue=_.mipmaps,N=_.isVideoTexture!==!0,fe=Me.__version===void 0||ee===!0,oe=Z.dataReady,ae=w(_,te);if(_.isDepthTexture)Ce=T(_.format===Is,_.type),fe&&(N?n.texStorage2D(t.TEXTURE_2D,1,Ce,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Ce,te.width,te.height,0,se,De,null));else if(_.isDataTexture)if(Ue.length>0){N&&fe&&n.texStorage2D(t.TEXTURE_2D,ae,Ce,Ue[0].width,Ue[0].height);for(let ie=0,j=Ue.length;ie<j;ie++)pe=Ue[ie],N?oe&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,De,pe.data):n.texImage2D(t.TEXTURE_2D,ie,Ce,pe.width,pe.height,0,se,De,pe.data);_.generateMipmaps=!1}else N?(fe&&n.texStorage2D(t.TEXTURE_2D,ae,Ce,te.width,te.height),oe&&Oe(_,te,se,De)):n.texImage2D(t.TEXTURE_2D,0,Ce,te.width,te.height,0,se,De,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Ce,Ue[0].width,Ue[0].height,te.depth);for(let ie=0,j=Ue.length;ie<j;ie++)if(pe=Ue[ie],_.format!==In)if(se!==null)if(N){if(oe)if(_.layerUpdates.size>0){let _e=nh(pe.width,pe.height,_.format,_.type);for(let ze of _.layerUpdates){let ht=pe.data.subarray(ze*_e/pe.data.BYTES_PER_ELEMENT,(ze+1)*_e/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,ze,pe.width,pe.height,1,se,ht)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Ce,pe.width,pe.height,te.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?oe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,se,De,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Ce,pe.width,pe.height,te.depth,0,se,De,pe.data)}else{N&&fe&&n.texStorage2D(t.TEXTURE_2D,ae,Ce,Ue[0].width,Ue[0].height);for(let ie=0,j=Ue.length;ie<j;ie++)pe=Ue[ie],_.format!==In?se!==null?N?oe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Ce,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?oe&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,De,pe.data):n.texImage2D(t.TEXTURE_2D,ie,Ce,pe.width,pe.height,0,se,De,pe.data)}else if(_.isDataArrayTexture)if(N){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Ce,te.width,te.height,te.depth),oe)if(_.layerUpdates.size>0){let ie=nh(te.width,te.height,_.format,_.type);for(let j of _.layerUpdates){let _e=te.data.subarray(j*ie/te.data.BYTES_PER_ELEMENT,(j+1)*ie/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,se,De,_e)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,De,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,te.width,te.height,te.depth,0,se,De,te.data);else if(_.isData3DTexture)N?(fe&&n.texStorage3D(t.TEXTURE_3D,ae,Ce,te.width,te.height,te.depth),oe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,De,te.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,te.width,te.height,te.depth,0,se,De,te.data);else if(_.isFramebufferTexture){if(fe)if(N)n.texStorage2D(t.TEXTURE_2D,ae,Ce,te.width,te.height);else{let ie=te.width,j=te.height;for(let _e=0;_e<ae;_e++)n.texImage2D(t.TEXTURE_2D,_e,Ce,ie,j,0,se,De,null),ie>>=1,j>>=1}}else if(Ue.length>0){if(N&&fe){let ie=Ve(Ue[0]);n.texStorage2D(t.TEXTURE_2D,ae,Ce,ie.width,ie.height)}for(let ie=0,j=Ue.length;ie<j;ie++)pe=Ue[ie],N?oe&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,se,De,pe):n.texImage2D(t.TEXTURE_2D,ie,Ce,se,De,pe);_.generateMipmaps=!1}else if(N){if(fe){let ie=Ve(te);n.texStorage2D(t.TEXTURE_2D,ae,Ce,ie.width,ie.height)}oe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,De,te)}else n.texImage2D(t.TEXTURE_2D,0,Ce,se,De,te);m(_)&&d(K),Me.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,z){if(_.image.length!==6)return;let K=de(E,_),ee=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+z);let Z=i.get(ee);if(ee.version!==Z.__version||K===!0){n.activeTexture(t.TEXTURE0+z);let Me=Je.getPrimaries(Je.workingColorSpace),ue=_.colorSpace===Ci?null:Je.getPrimaries(_.colorSpace),Ae=_.colorSpace===Ci||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let be=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!be&&!te?se[j]=g(_.image[j],!0,r.maxCubemapSize):se[j]=te?_.image[j].image:_.image[j],se[j]=Te(_,se[j]);let De=se[0],Ce=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),Ue=b(_.internalFormat,Ce,pe,_.colorSpace),N=_.isVideoTexture!==!0,fe=Z.__version===void 0||K===!0,oe=ee.dataReady,ae=w(_,De);ne(t.TEXTURE_CUBE_MAP,_);let ie;if(be){N&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Ue,De.width,De.height);for(let j=0;j<6;j++){ie=se[j].mipmaps;for(let _e=0;_e<ie.length;_e++){let ze=ie[_e];_.format!==In?Ce!==null?N?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,ze.width,ze.height,Ce,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,Ue,ze.width,ze.height,0,ze.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,ze.width,ze.height,Ce,pe,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,Ue,ze.width,ze.height,0,Ce,pe,ze.data)}}}else{if(ie=_.mipmaps,N&&fe){ie.length>0&&ae++;let j=Ve(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(te){N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,Ce,pe,se[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,se[j].width,se[j].height,0,Ce,pe,se[j].data);for(let _e=0;_e<ie.length;_e++){let ht=ie[_e].image[j].image;N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,ht.width,ht.height,Ce,pe,ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,Ue,ht.width,ht.height,0,Ce,pe,ht.data)}}else{N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,pe,se[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,Ce,pe,se[j]);for(let _e=0;_e<ie.length;_e++){let ze=ie[_e];N?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,Ce,pe,ze.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,Ue,Ce,pe,ze.image[j])}}}m(_)&&d(t.TEXTURE_CUBE_MAP),Z.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function me(E,_,z,K,ee,Z){let Me=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),Ae=b(z.internalFormat,Me,ue,z.colorSpace),be=i.get(_),te=i.get(z);if(te.__renderTarget=_,!be.__hasExternalTextures){let se=Math.max(1,_.width>>Z),De=Math.max(1,_.height>>Z);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Z,Ae,se,De,_.depth,0,Me,ue,null):n.texImage2D(ee,Z,Ae,se,De,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,te.__webglTexture,0,ft(_)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,te.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(E,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,E),_.depthBuffer){let K=_.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Z=T(_.stencilBuffer,ee),Me=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=ft(_);ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Z,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Z,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Z,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,E)}else{let K=_.textures;for(let ee=0;ee<K.length;ee++){let Z=K[ee],Me=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),Ae=b(Z.internalFormat,Me,ue,Z.colorSpace),be=ft(_);z&&ve(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Ae,_.width,_.height):ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,Ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),C(_.depthTexture,0);let ee=K.__webglTexture,Z=ft(_);if(_.depthTexture.format===bs)ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Is)ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(E){let _=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=K}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let K=E.texture.mipmaps;K&&K.length>0?Se(_.__webglFramebuffer[0],E):Se(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=t.createRenderbuffer(),Be(_.__webglDepthbuffer[K],E,!1);else{let ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}else{let K=E.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Be(_.__webglDepthbuffer,E,!1);else{let ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function kt(E,_,z){let K=i.get(E);_!==void 0&&me(K.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&qe(E)}function Xe(E){let _=E.texture,z=i.get(E),K=i.get(_);E.addEventListener("dispose",D);let ee=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=_.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)z.__webglFramebuffer[ue][Ae]=t.createFramebuffer()}else z.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)z.__webglFramebuffer[ue]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,Ae=ee.length;ue<Ae;ue++){let be=i.get(ee[ue]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&ve(E)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){let Ae=ee[ue];z.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);let be=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),se=b(Ae.internalFormat,be,te,Ae.colorSpace,E.isXRRenderTarget===!0),De=ft(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,se,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ne(t.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)me(z.__webglFramebuffer[ue][Ae],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else me(z.__webglFramebuffer[ue],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,Ae=ee.length;ue<Ae;ue++){let be=ee[ue],te=i.get(be),se=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,te.__webglTexture),ne(se,be),me(z.__webglFramebuffer,E,be,t.COLOR_ATTACHMENT0+ue,se,0),m(be)&&d(se)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,K.__webglTexture),ne(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)me(z.__webglFramebuffer[Ae],E,_,t.COLOR_ATTACHMENT0,ue,Ae);else me(z.__webglFramebuffer,E,_,t.COLOR_ATTACHMENT0,ue,0);m(_)&&d(ue),n.unbindTexture()}E.depthBuffer&&qe(E)}function pt(E){let _=E.textures;for(let z=0,K=_.length;z<K;z++){let ee=_[z];if(m(ee)){let Z=A(E),Me=i.get(ee).__webglTexture;n.bindTexture(Z,Me),d(Z),n.unbindTexture()}}}let I=[],Ye=[];function $e(E){if(E.samples>0){if(ve(E)===!1){let _=E.textures,z=E.width,K=E.height,ee=t.COLOR_BUFFER_BIT,Z=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(E),ue=_.length>1;if(ue)for(let be=0;be<_.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Ae=E.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let be=0;be<_.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);let te=i.get(_[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,z,K,0,0,z,K,ee,t.NEAREST),c===!0&&(I.length=0,Ye.length=0,I.push(t.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.resolveDepthBuffer===!1&&(I.push(Z),Ye.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<_.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);let te=i.get(_[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let _=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ft(E){return Math.min(r.maxSamples,E.samples)}function ve(E){let _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(E){let _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function Te(E,_){let z=E.colorSpace,K=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==zr&&z!==Ci&&(Je.getTransfer(z)===st?(K!==In||ee!==oi)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",z)),_}function Ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=C,this.setTexture2DArray=R,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=kt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ve}function gS(t,e){function n(i,r=Ci){let s,o=Je.getTransfer(r);if(i===oi)return t.UNSIGNED_BYTE;if(i===Yl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$l)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gf)return t.BYTE;if(i===Hf)return t.SHORT;if(i===Rs)return t.UNSIGNED_SHORT;if(i===ql)return t.INT;if(i===ar)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===qr)return t.HALF_FLOAT;if(i===qf)return t.ALPHA;if(i===Yf)return t.RGB;if(i===In)return t.RGBA;if(i===bs)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===$f)return t.RED;if(i===Zl)return t.RED_INTEGER;if(i===Kl)return t.RG;if(i===Jl)return t.RG_INTEGER;if(i===jl)return t.RGBA_INTEGER;if(i===Ho||i===Wo||i===Xo||i===qo)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===ec||i===tc||i===nc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===rc||i===sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ic||i===rc)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===hc||i===dc||i===pc||i===mc||i===xc||i===gc||i===_c||i===yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===oc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_c)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===bc||i===Sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===Ec||i===Tc||i===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var _S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Fo(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Cn({vertexShader:_S,fragmentShader:yS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new Bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends Ei{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,x=null,g=typeof XRWebGLBinding<"u",m=new ph,d={},A=n.getContextAttributes(),b=null,T=null,w=[],M=[],D=new tt,B=null,S=new Bt;S.viewport=new Rt;let y=new Bt;y.viewport=new Rt;let P=[S,y],k=new Ol,W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=w[$];return J===void 0&&(J=new ws,w[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=w[$];return J===void 0&&(J=new ws,w[$]=J),J.getGripSpace()},this.getHand=function($){let J=w[$];return J===void 0&&(J=new ws,w[$]=J),J.getHandSpace()};function C($){let J=M.indexOf($.inputSource);if(J===-1)return;let me=w[J];me!==void 0&&(me.update($.inputSource,$.frame,l||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function R(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",O);for(let $=0;$<w.length;$++){let J=M[$];J!==null&&(M[$]=null,w[$].disconnect(J))}W=null,X=null,m.reset();for(let $ in d)delete d[$];e.setRenderTarget(b),p=null,h=null,f=null,r=null,T=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",R),r.addEventListener("inputsourceschange",O),A.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(D),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Be=null,Se=null;A.depth&&(Se=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=A.stencil?Is:bs,Be=A.stencil?Cs:ar);let qe={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new ti(h.textureWidth,h.textureHeight,{format:In,type:oi,depthTexture:new Uo(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ti(p.framebufferWidth,p.framebufferHeight,{format:In,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O($){for(let J=0;J<$.removed.length;J++){let me=$.removed[J],Be=M.indexOf(me);Be>=0&&(M[Be]=null,w[Be].disconnect(me))}for(let J=0;J<$.added.length;J++){let me=$.added[J],Be=M.indexOf(me);if(Be===-1){for(let qe=0;qe<w.length;qe++)if(qe>=M.length){M.push(me),Be=qe;break}else if(M[qe]===null){M[qe]=me,Be=qe;break}if(Be===-1)break}let Se=w[Be];Se&&Se.connect(me)}}let L=new Y,V=new Y;function q($,J,me){L.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);let Be=L.distanceTo(V),Se=J.projectionMatrix.elements,qe=me.projectionMatrix.elements,kt=Se[14]/(Se[10]-1),Xe=Se[14]/(Se[10]+1),pt=(Se[9]+1)/Se[5],I=(Se[9]-1)/Se[5],Ye=(Se[8]-1)/Se[0],$e=(qe[8]+1)/qe[0],ft=kt*Ye,ve=kt*$e,xt=Be/(-Ye+$e),Te=xt*-Ye;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Te),$.translateZ(xt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Ve=kt+xt,E=Xe+xt,_=ft-Te,z=ve+(Be-Te),K=pt*Xe/E*Ve,ee=I*Xe/E*Ve;$.projectionMatrix.makePerspective(_,z,K,ee,Ve,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,me=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=y.near=S.near=J,k.far=y.far=S.far=me,(W!==k.near||X!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),W=k.near,X=k.far),k.layers.mask=$.layers.mask|6,S.layers.mask=k.layers.mask&3,y.layers.mask=k.layers.mask&5;let Be=$.parent,Se=k.cameras;Q(k,Be);for(let qe=0;qe<Se.length;qe++)Q(Se[qe],Be);Se.length===2?q(k,S,y):k.projectionMatrix.copy(S.projectionMatrix),ne($,k,Be)};function ne($,J,me){me===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=gl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return d[$]};let de=null;function ge($,J){if(u=J.getViewerPose(l||o),x=J,u!==null){let me=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Be=!1;me.length!==k.cameras.length&&(k.cameras.length=0,Be=!0);for(let Xe=0;Xe<me.length;Xe++){let pt=me[Xe],I=null;if(p!==null)I=p.getViewport(pt);else{let $e=f.getViewSubImage(h,pt);I=$e.viewport,Xe===0&&(e.setRenderTargetTextures(T,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(T))}let Ye=P[Xe];Ye===void 0&&(Ye=new Bt,Ye.layers.enable(Xe),Ye.viewport=new Rt,P[Xe]=Ye),Ye.matrix.fromArray(pt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(pt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(I.x,I.y,I.width,I.height),Xe===0&&(k.matrix.copy(Ye.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Be===!0&&k.cameras.push(Ye)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=i.getBinding();let Xe=f.getDepthInformation(me[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(Se&&Se.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<me.length;Xe++){let pt=me[Xe].camera;if(pt){let I=d[pt];I||(I=new Fo,d[pt]=I);let Ye=f.getCameraImage(pt);I.sourceTexture=Ye}}}}for(let me=0;me<w.length;me++){let Be=M[me],Se=w[me];Be!==null&&Se!==void 0&&Se.update(Be,J,l||o)}de&&de($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}let Oe=new Xm;Oe.setAnimationLoop(ge),this.setAnimationLoop=function($){de=$},this.dispose=function(){}}},Zr=new ni,vS=new Dt;function bS(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Qf(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,b,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,A,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=e.get(d),b=A.envMap,T=A.envMapRotation;b&&(m.envMap.value=b,Zr.copy(T),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(Zr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,A,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=b*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SS(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,b){let T=b.program;i.uniformBlockBinding(A,T)}function l(A,b){let T=r[A.id];T===void 0&&(x(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",m));let w=b.program;i.updateUBOMapping(A,w);let M=e.render.frame;s[A.id]!==M&&(h(A),s[A.id]=M)}function u(A){let b=f();A.__bindingPointIndex=b;let T=t.createBuffer(),w=A.__size,M=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,w,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){let b=r[A.id],T=A.uniforms,w=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let M=0,D=T.length;M<D;M++){let B=Array.isArray(T[M])?T[M]:[T[M]];for(let S=0,y=B.length;S<y;S++){let P=B[S];if(p(P,M,S,w)===!0){let k=P.__offset,W=Array.isArray(P.value)?P.value:[P.value],X=0;for(let C=0;C<W.length;C++){let R=W[C],O=g(R);typeof R=="number"||typeof R=="boolean"?(P.__data[0]=R,t.bufferSubData(t.UNIFORM_BUFFER,k+X,P.__data)):R.isMatrix3?(P.__data[0]=R.elements[0],P.__data[1]=R.elements[1],P.__data[2]=R.elements[2],P.__data[3]=0,P.__data[4]=R.elements[3],P.__data[5]=R.elements[4],P.__data[6]=R.elements[5],P.__data[7]=0,P.__data[8]=R.elements[6],P.__data[9]=R.elements[7],P.__data[10]=R.elements[8],P.__data[11]=0):(R.toArray(P.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,b,T,w){let M=A.value,D=b+"_"+T;if(w[D]===void 0)return typeof M=="number"||typeof M=="boolean"?w[D]=M:w[D]=M.clone(),!0;{let B=w[D];if(typeof M=="number"||typeof M=="boolean"){if(B!==M)return w[D]=M,!0}else if(B.equals(M)===!1)return B.copy(M),!0}return!1}function x(A){let b=A.uniforms,T=0,w=16;for(let D=0,B=b.length;D<B;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let y=0,P=S.length;y<P;y++){let k=S[y],W=Array.isArray(k.value)?k.value:[k.value];for(let X=0,C=W.length;X<C;X++){let R=W[X],O=g(R),L=T%w,V=L%O.boundary,q=L+V;T+=V,q!==0&&w-q<O.storage&&(T+=w-q),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=O.storage}}}let M=T%w;return M>0&&(T+=w-M),A.__size=T,A.__cache={},this}function g(A){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){let b=A.target;b.removeEventListener("dispose",m);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(let A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var MS=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Ii=null;function ES(){return Ii===null&&(Ii=new ir(MS,32,32,Kl,qr),Ii.minFilter=yn,Ii.magFilter=yn,Ii.wrapS=Qn,Ii.wrapT=Qn,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Ns=class{constructor(e={}){let{canvas:n=_m(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=new Set([jl,Jl,Zl]),g=new Set([oi,ar,Rs,Cs,Yl,$l]),m=new Uint32Array(4),d=new Int32Array(4),A=null,b=null,T=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1;this._outputColorSpace=gn;let B=0,S=0,y=null,P=-1,k=null,W=new Rt,X=new Rt,C=null,R=new nt(0),O=0,L=n.width,V=n.height,q=1,Q=null,ne=null,de=new Rt(0,0,L,V),ge=new Rt(0,0,L,V),Oe=!1,$=new Oo,J=!1,me=!1,Be=new Dt,Se=new Y,qe=new Rt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function pt(){return y===null?q:1}let I=i;function Ye(v,U){return n.getContext(v,U)}try{let v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"181"}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",_e,!1),I===null){let U="webgl2";if(I=Ye(U,v),I===null)throw Ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw v("WebGLRenderer: "+v.message),v}let $e,ft,ve,xt,Te,Ve,E,_,z,K,ee,Z,Me,ue,Ae,be,te,se,De,Ce,pe,Ue,N,fe;function oe(){$e=new zv(I),$e.init(),Ue=new gS(I,$e),ft=new Pv(I,$e,e,Ue),ve=new mS(I,$e),ft.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),xt=new Hv(I),Te=new nS,Ve=new xS(I,$e,ve,Te,ft,Ue,xt),E=new Nv(M),_=new kv(M),z=new Yg(I),N=new Cv(I,z),K=new Vv(I,z,xt,N),ee=new Xv(I,K,z,xt),De=new Wv(I,ft,Ve),be=new Dv(Te),Z=new tS(M,E,_,$e,ft,N,be),Me=new bS(M,Te),ue=new rS,Ae=new uS($e),se=new Rv(M,E,_,ve,ee,p,c),te=new dS(M,ee,ft),fe=new SS(I,xt,ft,ve),Ce=new Iv(I,$e,xt),pe=new Gv(I,$e,xt),xt.programs=Z.programs,M.capabilities=ft,M.extensions=$e,M.properties=Te,M.renderLists=ue,M.shadowMap=te,M.state=ve,M.info=xt}oe();let ae=new mh(M,I);this.xr=ae,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(v){v!==void 0&&(q=v,this.setSize(L,V,!1))},this.getSize=function(v){return v.set(L,V)},this.setSize=function(v,U,G=!0){if(ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}L=v,V=U,n.width=Math.floor(v*q),n.height=Math.floor(U*q),G===!0&&(n.style.width=v+"px",n.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(L*q,V*q).floor()},this.setDrawingBufferSize=function(v,U,G){L=v,V=U,q=G,n.width=Math.floor(v*G),n.height=Math.floor(U*G),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(W)},this.getViewport=function(v){return v.copy(de)},this.setViewport=function(v,U,G,H){v.isVector4?de.set(v.x,v.y,v.z,v.w):de.set(v,U,G,H),ve.viewport(W.copy(de).multiplyScalar(q).round())},this.getScissor=function(v){return v.copy(ge)},this.setScissor=function(v,U,G,H){v.isVector4?ge.set(v.x,v.y,v.z,v.w):ge.set(v,U,G,H),ve.scissor(X.copy(ge).multiplyScalar(q).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(v){ve.setScissorTest(Oe=v)},this.setOpaqueSort=function(v){Q=v},this.setTransparentSort=function(v){ne=v},this.getClearColor=function(v){return v.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,G=!0){let H=0;if(v){let F=!1;if(y!==null){let re=y.texture.format;F=x.has(re)}if(F){let re=y.texture.type,he=g.has(re),ye=se.getClearColor(),xe=se.getClearAlpha(),Pe=ye.r,Le=ye.g,Ee=ye.b;he?(m[0]=Pe,m[1]=Le,m[2]=Ee,m[3]=xe,I.clearBufferuiv(I.COLOR,0,m)):(d[0]=Pe,d[1]=Le,d[2]=Ee,d[3]=xe,I.clearBufferiv(I.COLOR,0,d))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),G&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),se.dispose(),ue.dispose(),Ae.dispose(),Te.dispose(),E.dispose(),_.dispose(),ee.dispose(),N.dispose(),fe.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Rh),ae.removeEventListener("sessionend",Ch),hr.stop()};function ie(v){v.preventDefault(),jf("WebGLRenderer: Context Lost."),D=!0}function j(){jf("WebGLRenderer: Context Restored."),D=!1;let v=xt.autoReset,U=te.enabled,G=te.autoUpdate,H=te.needsUpdate,F=te.type;oe(),xt.autoReset=v,te.enabled=U,te.autoUpdate=G,te.needsUpdate=H,te.type=F}function _e(v){We("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ze(v){let U=v.target;U.removeEventListener("dispose",ze),ht(U)}function ht(v){ot(v),Te.remove(v)}function ot(v){let U=Te.get(v).programs;U!==void 0&&(U.forEach(function(G){Z.releaseProgram(G)}),v.isShaderMaterial&&Z.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,G,H,F,re){U===null&&(U=kt);let he=F.isMesh&&F.matrixWorld.determinant()<0,ye=c0(v,U,G,H,F);ve.setMaterial(H,he);let xe=G.index,Pe=1;if(H.wireframe===!0){if(xe=K.getWireframeAttribute(G),xe===void 0)return;Pe=2}let Le=G.drawRange,Ee=G.attributes.position,Ze=Le.start*Pe,at=(Le.start+Le.count)*Pe;re!==null&&(Ze=Math.max(Ze,re.start*Pe),at=Math.min(at,(re.start+re.count)*Pe)),xe!==null?(Ze=Math.max(Ze,0),at=Math.min(at,xe.count)):Ee!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Ee.count));let Et=at-Ze;if(Et<0||Et===1/0)return;N.setup(F,H,ye,G,xe);let Tt,ct=Ce;if(xe!==null&&(Tt=z.get(xe),ct=pe,ct.setIndex(Tt)),F.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*pt()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(F.isLine){let we=H.linewidth;we===void 0&&(we=1),ve.setLineWidth(we*pt()),F.isLineSegments?ct.setMode(I.LINES):F.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else F.isPoints?ct.setMode(I.POINTS):F.isSprite&&ct.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ms("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let we=F._multiDrawStarts,gt=F._multiDrawCounts,je=F._multiDrawCount,ln=xe?z.get(xe).bytesPerElement:1,Jr=Te.get(H).currentProgram.getUniforms();for(let cn=0;cn<je;cn++)Jr.setValue(I,"_gl_DrawID",cn),ct.render(we[cn]/ln,gt[cn])}else if(F.isInstancedMesh)ct.renderInstances(Ze,Et,F.count);else if(G.isInstancedBufferGeometry){let we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,we);ct.renderInstances(Ze,Et,gt)}else ct.render(Ze,Et)};function Wn(v,U,G){v.transparent===!0&&v.side===ri&&v.forceSinglePass===!1?(v.side=jt,v.needsUpdate=!0,Qo(v,U,G),v.side=Mi,v.needsUpdate=!0,Qo(v,U,G),v.side=ri):Qo(v,U,G)}this.compile=function(v,U,G=null){G===null&&(G=v),b=Ae.get(G),b.init(U),w.push(b),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(b.pushLight(F),F.castShadow&&b.pushShadow(F))}),v!==G&&v.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(b.pushLight(F),F.castShadow&&b.pushShadow(F))}),b.setupLights();let H=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let re=F.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let ye=re[he];Wn(ye,G,F),H.add(ye)}else Wn(re,G,F),H.add(re)}),b=w.pop(),H},this.compileAsync=function(v,U,G=null){let H=this.compile(v,U,G);return new Promise(F=>{function re(){if(H.forEach(function(he){Te.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){F(v);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Nn=null;function l0(v){Nn&&Nn(v)}function Rh(){hr.stop()}function Ch(){hr.start()}let hr=new Xm;hr.setAnimationLoop(l0),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(v){Nn=v,ae.setAnimationLoop(v),v===null?hr.stop():hr.start()},ae.addEventListener("sessionstart",Rh),ae.addEventListener("sessionend",Ch),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,U,y),b=Ae.get(v,w.length),b.init(U),w.push(b),Be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Be,Hn,U.reversedDepth),me=this.localClippingEnabled,J=be.init(this.clippingPlanes,me),A=ue.get(v,T.length),A.init(),T.push(A),ae.enabled===!0&&ae.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&zc(re,U,-1/0,M.sortObjects)}zc(v,U,0,M.sortObjects),A.finish(),M.sortObjects===!0&&A.sort(Q,ne),Xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Xe&&se.addToRenderList(A,v),this.info.render.frame++,J===!0&&be.beginShadows();let G=b.state.shadowsArray;te.render(G,v,U),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=A.opaque,F=A.transmissive;if(b.setupLights(),U.isArrayCamera){let re=U.cameras;if(F.length>0)for(let he=0,ye=re.length;he<ye;he++){let xe=re[he];Ph(H,F,v,xe)}Xe&&se.render(v);for(let he=0,ye=re.length;he<ye;he++){let xe=re[he];Ih(A,v,xe,xe.viewport)}}else F.length>0&&Ph(H,F,v,U),Xe&&se.render(v),Ih(A,v,U);y!==null&&S===0&&(Ve.updateMultisampleRenderTarget(y),Ve.updateRenderTargetMipmap(y)),v.isScene===!0&&v.onAfterRender(M,v,U),N.resetDefaultState(),P=-1,k=null,w.pop(),w.length>0?(b=w[w.length-1],J===!0&&be.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?A=T[T.length-1]:A=null};function zc(v,U,G,H){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||$.intersectsSprite(v)){H&&qe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Be);let he=ee.update(v),ye=v.material;ye.visible&&A.push(v,he,ye,G,qe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||$.intersectsObject(v))){let he=ee.update(v),ye=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),qe.copy(v.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),qe.copy(he.boundingSphere.center)),qe.applyMatrix4(v.matrixWorld).applyMatrix4(Be)),Array.isArray(ye)){let xe=he.groups;for(let Pe=0,Le=xe.length;Pe<Le;Pe++){let Ee=xe[Pe],Ze=ye[Ee.materialIndex];Ze&&Ze.visible&&A.push(v,he,Ze,G,qe.z,Ee)}}else ye.visible&&A.push(v,he,ye,G,qe.z,null)}}let re=v.children;for(let he=0,ye=re.length;he<ye;he++)zc(re[he],U,G,H)}function Ih(v,U,G,H){let{opaque:F,transmissive:re,transparent:he}=v;b.setupLightsView(G),J===!0&&be.setGlobalState(M.clippingPlanes,G),H&&ve.viewport(W.copy(H)),F.length>0&&jo(F,U,G),re.length>0&&jo(re,U,G),he.length>0&&jo(he,U,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ph(v,U,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[H.id]===void 0&&(b.state.transmissionRenderTarget[H.id]=new ti(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?qr:oi,minFilter:or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let re=b.state.transmissionRenderTarget[H.id],he=H.viewport||W;re.setSize(he.z*M.transmissionResolutionScale,he.w*M.transmissionResolutionScale);let ye=M.getRenderTarget(),xe=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(re),M.getClearColor(R),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),Xe&&se.render(G);let Le=M.toneMapping;M.toneMapping=Ri;let Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),J===!0&&be.setGlobalState(M.clippingPlanes,H),jo(v,G,H),Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let at=0,Et=U.length;at<Et;at++){let Tt=U[at],{object:ct,geometry:we,material:gt,group:je}=Tt;if(gt.side===ri&&ct.layers.test(H.layers)){let ln=gt.side;gt.side=jt,gt.needsUpdate=!0,Dh(ct,G,H,we,gt,je),gt.side=ln,gt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re))}M.setRenderTarget(ye,xe,Pe),M.setClearColor(R,O),Ee!==void 0&&(H.viewport=Ee),M.toneMapping=Le}function jo(v,U,G){let H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=v.length;F<re;F++){let he=v[F],{object:ye,geometry:xe,group:Pe}=he,Le=he.material;Le.allowOverride===!0&&H!==null&&(Le=H),ye.layers.test(G.layers)&&Dh(ye,U,G,xe,Le,Pe)}}function Dh(v,U,G,H,F,re){v.onBeforeRender(M,U,G,H,F,re),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(M,U,G,H,v,re),F.transparent===!0&&F.side===ri&&F.forceSinglePass===!1?(F.side=jt,F.needsUpdate=!0,M.renderBufferDirect(G,U,H,F,v,re),F.side=Mi,F.needsUpdate=!0,M.renderBufferDirect(G,U,H,F,v,re),F.side=ri):M.renderBufferDirect(G,U,H,F,v,re),v.onAfterRender(M,U,G,H,F,re)}function Qo(v,U,G){U.isScene!==!0&&(U=kt);let H=Te.get(v),F=b.state.lights,re=b.state.shadowsArray,he=F.state.version,ye=Z.getParameters(v,F.state,re,U,G),xe=Z.getProgramCacheKey(ye),Pe=H.programs;H.environment=v.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(v.isMeshStandardMaterial?_:E).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",ze),Pe=new Map,H.programs=Pe);let Le=Pe.get(xe);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===he)return Lh(v,ye),Le}else ye.uniforms=Z.getUniforms(v),v.onBeforeCompile(ye,M),Le=Z.acquireProgram(ye,xe),Pe.set(xe,Le),H.uniforms=ye.uniforms;let Ee=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=be.uniform),Lh(v,ye),H.needsLights=f0(v),H.lightsStateVersion=he,H.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function Nh(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=Ds.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Lh(v,U){let G=Te.get(v);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function c0(v,U,G,H,F){U.isScene!==!0&&(U=kt),Ve.resetTextureUnits();let re=U.fog,he=H.isMeshStandardMaterial?U.environment:null,ye=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:zr,xe=(H.isMeshStandardMaterial?_:E).get(H.envMap||he),Pe=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!G.morphAttributes.position,Ze=!!G.morphAttributes.normal,at=!!G.morphAttributes.color,Et=Ri;H.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Et=M.toneMapping);let Tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=Tt!==void 0?Tt.length:0,we=Te.get(H),gt=b.state.lights;if(J===!0&&(me===!0||v!==k)){let qt=v===k&&H.id===P;be.setState(H,v,qt)}let je=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==gt.state.version||we.outputColorSpace!==ye||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==xe||H.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==be.numPlanes||we.numIntersection!==be.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==Ee||we.morphNormals!==Ze||we.morphColors!==at||we.toneMapping!==Et||we.morphTargetsCount!==ct)&&(je=!0):(je=!0,we.__version=H.version);let ln=we.currentProgram;je===!0&&(ln=Qo(H,U,F));let Jr=!1,cn=!1,Gs=!1,_t=ln.getUniforms(),Qt=we.uniforms;if(ve.useProgram(ln.program)&&(Jr=!0,cn=!0,Gs=!0),H.id!==P&&(P=H.id,cn=!0),Jr||k!==v){ve.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),_t.setValue(I,"projectionMatrix",v.projectionMatrix),_t.setValue(I,"viewMatrix",v.matrixWorldInverse);let en=_t.map.cameraPosition;en!==void 0&&en.setValue(I,Se.setFromMatrixPosition(v.matrixWorld)),ft.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,cn=!0,Gs=!0)}if(F.isSkinnedMesh){_t.setOptional(I,F,"bindMatrix"),_t.setOptional(I,F,"bindMatrixInverse");let qt=F.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),_t.setValue(I,"boneTexture",qt.boneTexture,Ve))}F.isBatchedMesh&&(_t.setOptional(I,F,"batchingTexture"),_t.setValue(I,"batchingTexture",F._matricesTexture,Ve),_t.setOptional(I,F,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",F._indirectTexture,Ve),_t.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",F._colorsTexture,Ve));let Sn=G.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&De.update(F,G,ln),(cn||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,_t.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qt.envMap.value=xe,Qt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=ES()),cn&&(_t.setValue(I,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&u0(Qt,Gs),re&&H.fog===!0&&Me.refreshFogUniforms(Qt,re),Me.refreshMaterialUniforms(Qt,H,q,V,b.state.transmissionRenderTarget[v.id]),Ds.upload(I,Nh(we),Qt,Ve)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ds.upload(I,Nh(we),Qt,Ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(I,"center",F.center),_t.setValue(I,"modelViewMatrix",F.modelViewMatrix),_t.setValue(I,"normalMatrix",F.normalMatrix),_t.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let qt=H.uniformsGroups;for(let en=0,Vc=qt.length;en<Vc;en++){let dr=qt[en];fe.update(dr,ln),fe.bind(dr,ln)}}return ln}function u0(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function f0(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(v,U,G){let H=Te.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Te.get(v.texture).__webglTexture=U,Te.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let G=Te.get(v);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};let h0=I.createFramebuffer();this.setRenderTarget=function(v,U=0,G=0){y=v,B=U,S=G;let H=!0,F=null,re=!1,he=!1;if(v){let xe=Te.get(v);if(xe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)Ve.setupRenderTarget(v);else if(xe.__hasExternalTextures)Ve.rebindTextures(v,Te.get(v.texture).__webglTexture,Te.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ee=v.depthTexture;if(xe.__boundDepthTexture!==Ee){if(Ee!==null&&Te.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(v)}}let Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);let Le=Te.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][G]:F=Le[U],re=!0):v.samples>0&&Ve.useMultisampledRTT(v)===!1?F=Te.get(v).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[G]:F=Le,W.copy(v.viewport),X.copy(v.scissor),C=v.scissorTest}else W.copy(de).multiplyScalar(q).floor(),X.copy(ge).multiplyScalar(q).floor(),C=Oe;if(G!==0&&(F=h0),ve.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&ve.drawBuffers(v,F),ve.viewport(W),ve.scissor(X),ve.setScissorTest(C),re){let xe=Te.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,G)}else if(he){let xe=U;for(let Pe=0;Pe<v.textures.length;Pe++){let Le=Te.get(v.textures[Pe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,G,xe)}}else if(v!==null&&G!==0){let xe=Te.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,G)}P=-1},this.readRenderTargetPixels=function(v,U,G,H,F,re,he,ye=0){if(!(v&&v.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){ve.bindFramebuffer(I.FRAMEBUFFER,xe);try{let Pe=v.textures[ye],Le=Pe.format,Ee=Pe.type;if(!ft.textureFormatReadable(Le)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ee)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-H&&G>=0&&G<=v.height-F&&(v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(U,G,H,F,Ue.convert(Le),Ue.convert(Ee),re))}finally{let Pe=y!==null?Te.get(y).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,U,G,H,F,re,he,ye=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe)if(U>=0&&U<=v.width-H&&G>=0&&G<=v.height-F){ve.bindFramebuffer(I.FRAMEBUFFER,xe);let Pe=v.textures[ye],Le=Pe.format,Ee=Pe.type;if(!ft.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(U,G,H,F,Ue.convert(Le),Ue.convert(Ee),0);let at=y!==null?Te.get(y).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,at);let Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ym(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re),I.deleteBuffer(Ze),I.deleteSync(Et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,G=0){let H=Math.pow(2,-G),F=Math.floor(v.image.width*H),re=Math.floor(v.image.height*H),he=U!==null?U.x:0,ye=U!==null?U.y:0;Ve.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,he,ye,F,re),ve.unbindTexture()};let d0=I.createFramebuffer(),p0=I.createFramebuffer();this.copyTextureToTexture=function(v,U,G=null,H=null,F=0,re=null){re===null&&(F!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=F,F=0):re=0);let he,ye,xe,Pe,Le,Ee,Ze,at,Et,Tt=v.isCompressedTexture?v.mipmaps[re]:v.image;if(G!==null)he=G.max.x-G.min.x,ye=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,Le=G.min.y,Ee=G.isBox3?G.min.z:0;else{let Sn=Math.pow(2,-F);he=Math.floor(Tt.width*Sn),ye=Math.floor(Tt.height*Sn),v.isDataArrayTexture?xe=Tt.depth:v.isData3DTexture?xe=Math.floor(Tt.depth*Sn):xe=1,Pe=0,Le=0,Ee=0}H!==null?(Ze=H.x,at=H.y,Et=H.z):(Ze=0,at=0,Et=0);let ct=Ue.convert(U.format),we=Ue.convert(U.type),gt;U.isData3DTexture?(Ve.setTexture3D(U,0),gt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ve.setTexture2DArray(U,0),gt=I.TEXTURE_2D_ARRAY):(Ve.setTexture2D(U,0),gt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let je=I.getParameter(I.UNPACK_ROW_LENGTH),ln=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jr=I.getParameter(I.UNPACK_SKIP_PIXELS),cn=I.getParameter(I.UNPACK_SKIP_ROWS),Gs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee);let _t=v.isDataArrayTexture||v.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let Sn=Te.get(v),qt=Te.get(U),en=Te.get(Sn.__renderTarget),Vc=Te.get(qt.__renderTarget);ve.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vc.__webglFramebuffer);for(let dr=0;dr<xe;dr++)_t&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(v).__webglTexture,F,Ee+dr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,re,Et+dr)),I.blitFramebuffer(Pe,Le,he,ye,Ze,at,he,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||Te.has(v)){let Sn=Te.get(v),qt=Te.get(U);ve.bindFramebuffer(I.READ_FRAMEBUFFER,d0),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,p0);for(let en=0;en<xe;en++)_t?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,F,Ee+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,F),Qt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.__webglTexture,re,Et+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qt.__webglTexture,re),F!==0?I.blitFramebuffer(Pe,Le,he,ye,Ze,at,he,ye,I.COLOR_BUFFER_BIT,I.NEAREST):Qt?I.copyTexSubImage3D(gt,re,Ze,at,Et+en,Pe,Le,he,ye):I.copyTexSubImage2D(gt,re,Ze,at,Pe,Le,he,ye);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qt?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(gt,re,Ze,at,Et,he,ye,xe,ct,we,Tt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,re,Ze,at,Et,he,ye,xe,ct,Tt.data):I.texSubImage3D(gt,re,Ze,at,Et,he,ye,xe,ct,we,Tt):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,re,Ze,at,he,ye,ct,we,Tt.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,re,Ze,at,Tt.width,Tt.height,ct,Tt.data):I.texSubImage2D(I.TEXTURE_2D,re,Ze,at,he,ye,ct,we,Tt);I.pixelStorei(I.UNPACK_ROW_LENGTH,je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ln),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jr),I.pixelStorei(I.UNPACK_SKIP_ROWS,cn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gs),re===0&&U.generateMipmaps&&I.generateMipmap(gt),ve.unbindTexture()},this.initRenderTarget=function(v){Te.get(v).__webglFramebuffer===void 0&&Ve.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ve.setTextureCube(v,0):v.isData3DTexture?Ve.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ve.setTexture2DArray(v,0):Ve.setTexture2D(v,0),ve.unbindTexture()},this.resetState=function(){B=0,S=0,y=null,ve.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}};var TS={scene:wi,group:bi,mesh:vn,boxGeometry:nr,meshBasicMaterial:Gr,dataTexture:ir},ci={created:0,recreated:0,disposed:0,cancelledDisposals:0,textNodes:0},Nc=new WeakMap,xh=new Set;function Km(t){return xh.add(t),()=>xh.delete(t)}var Os=class{constructor(e,n){this.tag=e,this.object=n,this.parent=void 0,this.children=[],this.props={},this.attachment=void 0,this.pendingDispose=!1,this.handlers=void 0,n&&Nc.set(n,this)}};function Jm(t,e){let n=TS[t];if(!n)throw new Error(`Unknown three element <${t}>.`);return ci.created++,new n(...e??[])}function AS(t){let e=t.object;if(e.isMaterial)return"material";if(e.isBufferGeometry)return"geometry";if(e.isTexture)return"map"}function wS(t){return t.props.attach??AS(t)}function Dc(t,e){let n=e.object.isObject3D?void 0:wS(e);if(n){e.attachment={target:t.object,key:n,previous:t.object[n]},t.object[n]=e.object,t.object.isMaterial&&(t.object.needsUpdate=!0);return}if(!(e.object.isObject3D&&t.object.isObject3D))throw new Error(`<${e.tag}> cannot go inside <${t.tag}> without an attach prop.`);e.object.removeFromParent();let i=t.children,r;for(let a=i.indexOf(e)+1;a<i.length;a++){let c=i[a].object;if(c?.isObject3D&&c.parent===t.object){r=c;break}}let s=t.object.children,o=r?s.indexOf(r):s.length;s.splice(o,0,e.object),e.object.parent=t.object,e.object.dispatchEvent({type:"added"}),t.object.dispatchEvent({type:"childadded",child:e.object})}function Us(t){if(t.attachment){let{target:e,key:n,previous:i}=t.attachment;e[n]===t.object&&(e[n]=i),e.isMaterial&&(e.needsUpdate=!0),t.attachment=void 0}else t.object?.isObject3D&&t.object.removeFromParent()}function jm(t){for(let e of t.children)jm(e);for(let e of xh)e(t);t.handlers=void 0,Us(t),typeof t.object?.dispose=="function"&&!t.object.isScene&&(t.object.dispose(),ci.disposed++),t.children=[],t.parent=void 0}function RS(t){t.pendingDispose=!0,queueMicrotask(()=>{t.pendingDispose&&(t.pendingDispose=!1,jm(t))})}function gh(t,e,n){if(t.props[e]=n,e==="attach")return;if(/^on[A-Z]/.test(e)){t.handlers??={},n?t.handlers[e]=n:delete t.handlers[e];return}let i=t.object,r=i[e];r&&typeof r.set=="function"&&!r.isTexture?Array.isArray(n)?r.set(...n):r.set(n):i[e]=n}function CS(t,e){let n=t.object,i=t.parent,r=i&&(t.attachment||n.parent===i.object);r&&Us(t),t.object=Jm(t.tag,e),Nc.set(t.object,t),ci.recreated++;for(let[s,o]of Object.entries(t.props))s!=="args"&&gh(t,s,o);for(let s of t.children)Us(s),Dc(t,s);n.isObject3D&&(t.object.position.copy(n.position),t.object.quaternion.copy(n.quaternion),t.object.scale.copy(n.scale)),r&&Dc(i,t),typeof n.dispose=="function"&&(n.dispose(),ci.disposed++)}var{render:Lc,createElement:Ot,createComponent:ui,insertNode:Pn,insert:cr,effect:Ko,memo:Fs,setProp:Dn,spread:s3,mergeProps:o3}=up({createElement(t,e){let n=new Os(t,Jm(t,e?.args));for(let[i,r]of Object.entries(e??{}))i==="args"?n.props.args=r:gh(n,i,r);return n},createTextNode(t){ci.textNodes++;let e=new Os("#text",void 0);return e.props.text=t,e},isTextNode:t=>t.tag==="#text",replaceText(t,e){t.props.text=e},setProperty(t,e,n,i){if(e==="args"){let r=t.props.args;if(t.props.args=n,r!==void 0&&JSON.stringify(r)===JSON.stringify(n)||i===void 0&&r===void 0&&(n?.length??0)===0)return;CS(t,n);return}if(e==="attach"&&t.attachment&&n!==t.props.attach){let r=t.parent;Us(t),t.props.attach=n,Dc(r,t);return}gh(t,e,n)},getParentNode:t=>t.parent,getFirstChild:t=>t.children[0],getNextSibling(t){let e=t.parent?.children;return e?.[e.indexOf(t)+1]},insertNode(t,e,n){if(!(e instanceof Os))throw new TypeError("The three renderer only accepts its own nodes.");if(e===n)return;if(e.pendingDispose&&(e.pendingDispose=!1,ci.cancelledDisposals++),e.parent){let r=e.parent.children;r.splice(r.indexOf(e),1),Us(e)}let i=n==null?t.children.length:t.children.indexOf(n);t.children.splice(i,0,e),e.parent=t,e.tag!=="#text"&&t.tag!=="#text"&&Dc(t,e)},removeNode(t,e){let n=t.children.indexOf(e);n>=0&&t.children.splice(n,1),e.parent=void 0,e.tag!=="#text"&&(Us(e),RS(e))}});function Oc(t,e="root"){if(!(t instanceof an))throw new TypeError("The root must be an Object3D.");return new Os(e,t)}function Qm({canvas:t,camera:e,scene:n,afterEvent:i=()=>{}}){let r=new zo,s=new tt,o=[],a=new Map,c=new Set,l={raycasts:0,delivered:0,dropped:0};function u(b){let T=t.getBoundingClientRect();return s.set((b.clientX-T.left)/T.width*2-1,-((b.clientY-T.top)/T.height)*2+1),r.setFromCamera(s,e),l.raycasts++,r.intersectObject(n,!0)}function f(b){let T=[];for(let w=b;w;w=w.parent){let M=Nc.get(w);M?.handlers&&T.push(M)}return T}function h(b,T,w,M,D,B){let S=b.handlers?.[T];S&&(l.delivered++,S({type:T,nativeEvent:w,pointerId:w.pointerId,object:M?.object,eventObject:b.object,point:M?.point,distance:M?.distance,intersections:D,stopPropagation(){B.stopped=!0},setPointerCapture(){a.set(w.pointerId,b);try{t.setPointerCapture(w.pointerId)}catch{}},releasePointerCapture(){x(w.pointerId)}}))}function p(b,T,w,M){let D={stopped:!1},B=new Set;for(let S of w)for(let y of f(S.object))if(!B.has(y)&&(B.add(y),!(M&&!M.has(y))&&(h(y,b,T,S,w,D),D.stopped)))return}function x(b){a.delete(b);try{t.releasePointerCapture(b)}catch{}}function g(b,T){let w=T.length?f(T[0].object):[];for(let M of o)w.includes(M)||h(M,"onPointerOut",b,void 0,T,{stopped:!1});for(let M of w)o.includes(M)||h(M,"onPointerOver",b,T[0],T,{stopped:!1});o=w}let m={pointermove(b){let T=u(b),w=a.get(b.pointerId);if(w){let M=T.find(D=>f(D.object).includes(w));h(w,"onPointerMove",b,M,T,{stopped:!1});return}g(b,T),p("onPointerMove",b,T)},pointerdown(b){let T=u(b);c=new Set(T.flatMap(w=>f(w.object))),p("onPointerDown",b,T)},pointerup(b){let T=u(b),w=a.get(b.pointerId);if(w){let M=T.find(D=>f(D.object).includes(w));h(w,"onPointerUp",b,M,T,{stopped:!1}),x(b.pointerId),g(b,T);return}p("onPointerUp",b,T)},click(b){let T=u(b);p("onClick",b,T,c),c=new Set},pointerleave(b){a.has(b.pointerId)||g(b,[])}},d={};for(let[b,T]of Object.entries(m))d[b]=w=>{T(w),i(b)},t.addEventListener(b,d[b]);let A=Km(b=>{let T=o.length+a.size+c.size;o=o.filter(w=>w!==b);for(let[w,M]of a)M===b&&x(w);c.delete(b),l.dropped+=T-(o.length+a.size+c.size)});return{stats:l,debug:()=>({hoveredNodes:o.map(b=>b.object.name),captured:[...a.values()].map(b=>b.object.name)}),dispose(){for(let[b,T]of Object.entries(d))t.removeEventListener(b,T);A()}}}function e0({load:t,dispose:e=n=>n?.dispose?.()}){let n=new Map,i={loads:0,hits:0,disposed:0,lateDisposed:0};function r(o){n.delete(o.key),o.dead=!0,o.settled&&(e(o.value),i.disposed++)}function s(o){let a=n.get(o);a?i.hits++:(i.loads++,a={key:o,refs:0,value:void 0,settled:!1,dead:!1},a.promise=Promise.resolve(t(o)).then(l=>(a.value=l,a.settled=!0,a.dead&&(e(l),i.disposed++,i.lateDisposed++),l)),n.set(o,a)),a.refs++;let c=!1;return{key:o,promise:a.promise,get value(){return a.value},release(){c||(c=!0,!(--a.refs>0)&&queueMicrotask(()=>{a.refs===0&&!a.dead&&r(a)}))}}}return{acquire:s,stats:i,refs:o=>n.get(o)?.refs??0,keys:()=>[...n.keys()]}}function t0(t,e,n="committed"){let i,r=Wa(async()=>{let s=t.acquire(e());return Tr(()=>{(n==="naive"||s!==i)&&s.release()}),await s.promise,s});return n==="committed"&&op(()=>r(),s=>(i=s,()=>s.release())),()=>r().value}var IS={red:[214,69,65],green:[64,160,90],blue:[52,110,200],gray:[120,120,120]};function PS({auto:t}){let e=new Map,n={auto:t,calls:[],pending:()=>[...e.keys()],load(i){return n.calls.push(i),new Promise(r=>{let s=()=>{e.delete(i);let[o,a,c]=IS[i],l=new Uint8Array(16).map((f,h)=>h%4===3?255:[o,a,c][h%4]+((h>>2)%3===0?40:0)),u=new ir(l,2,2);u.needsUpdate=!0,u.userData={key:i,disposed:!1},u.addEventListener("dispose",()=>{u.userData.disposed=!0}),r(u)};e.set(i,s),n.auto&&setTimeout(()=>e.get(i)?.(),700)})},resolve(i){e.get(i)?.()}};return n}var Bs=PS({auto:!new URLSearchParams(location.search).has("manual")}),Uc=e0({load:t=>Bs.load(t)}),[bh,n0]=Jn("red"),[Eh,DS]=Jn("committed"),[_h,NS]=Jn({left:!0,middle:!0,right:!0});function LS(t){let e=t0(Uc,()=>t.textureKey,t.mode);var n=Ot("mesh",{rotation:[.5,.6,0]}),i=Ot("boxGeometry"),r=Ot("meshBasicMaterial");return Pn(n,i),Pn(n,r),Ko(()=>({e:t.name,t:[t.x,0,0],a:e()}),({e:s,t:o,a},c)=>{s!==c?.e&&Dn(n,"name",s,c?.e),o!==c?.t&&Dn(n,"position",o,c?.t),a!==c?.a&&Dn(r,"map",a,c?.a)}),n}function yh(t){return ui(lp,{get fallback(){var e=Ot("mesh",{rotation:[.5,.6,0]}),n=Ot("boxGeometry"),i=Ot("meshBasicMaterial",{color:"#999999",wireframe:!0});return Pn(e,n),Pn(e,i),Ko(()=>({e:t.name+"-loading",t:[t.x,0,0]}),({e:r,t:s},o)=>{r!==o?.e&&Dn(e,"name",r,o?.e),s!==o?.t&&Dn(e,"position",s,o?.t)}),e},get children(){return ui(LS,{get name(){return t.name},get x(){return t.x},get textureKey(){return t.textureKey},get mode(){return t.mode}})}})}var Sh=document.querySelector("#async-canvas"),Fc=new wi,i0=new Bt(45,Sh.width/Sh.height,.1,100);i0.position.set(0,0,6);var Th=new Ns({canvas:Sh,antialias:!0,preserveDrawingBuffer:!0});Th.setClearColor(16053492);Lc(()=>(()=>{var t=Ot("group",{name:"async-world"});return cr(t,ui(Xa,{get each(){return[Eh()]},children:e=>(()=>{var n=Ot("group",{name:"mode-"+e});return cr(n,(()=>{var i=Fs(()=>!!_h().left);return()=>i()?ui(yh,{name:"left",x:-2,get textureKey(){return bh()},mode:e}):void 0})(),null),cr(n,(()=>{var i=Fs(()=>!!_h().middle);return()=>i()?ui(yh,{name:"middle",x:0,get textureKey(){return bh()},mode:e}):void 0})(),null),cr(n,(()=>{var i=Fs(()=>!!_h().right);return()=>i()?ui(yh,{name:"right",x:2,textureKey:"gray",mode:e}):void 0})(),null),n})()})),t})(),Oc(Fc));function r0(){let t={};for(let e of["left","middle","right"]){let n=Fc.getObjectByName(e),i=Fc.getObjectByName(e+"-loading");t[e]=n?.parent?{shown:"textured",map:n.material.map?.userData.key??null,mapDisposed:n.material.map?.userData.disposed??null}:i?.parent?{shown:"loading"}:{shown:"none"}}return{mode:Eh(),shared:bh(),slots:t,refs:Object.fromEntries(Uc.keys().map(e=>[e,Uc.refs(e)])),cache:{...Uc.stats},loader:{calls:[...Bs.calls],pending:Bs.pending()},memory:{...Th.info.memory},renderer:{...ci}}}var OS=document.querySelector("#async-status");async function ur(){for(let n=0;n<4;n++)Kt(),await new Promise(i=>setTimeout(i,0));Kt(),Th.render(Fc,i0);let t=r0(),e=n=>t.slots[n].shown==="textured"?`${n} ${t.slots[n].map}${t.slots[n].mapDisposed?" (DISPOSED)":""}`:`${n} ${t.slots[n].shown}`;return OS.textContent=`${t.mode} \xB7 ${["left","middle","right"].map(e).join(" \xB7 ")} \xB7 loads ${t.cache.loads} \xB7 disposed ${t.cache.disposed} (late ${t.cache.lateDisposed}) \xB7 GPU textures ${t.memory.textures}`,t}var vh=["red","green","blue"],Mh={nextShared:()=>(n0(t=>vh[(vh.indexOf(t)+1)%vh.length]),ur()),setShared:t=>(n0(t),ur()),toggle:t=>(NS(e=>({...e,[t]:!e[t]})),ur()),setMode:t=>(DS(t),ur()),resolve:t=>(Bs.resolve(t),ur()),snapshot:r0,commit:ur};window.__async=Mh;var US=Bs.load;Bs.load=t=>US(t).then(e=>(setTimeout(ur,0),e));for(let t of document.querySelectorAll("button[data-async]")){let[e,n]=t.dataset.async.split(":");t.addEventListener("click",()=>{if(e==="setMode"){let i=Eh()==="committed"?"naive":"committed";return t.textContent=`Release strategy: ${i}`,Mh.setMode(i)}return Mh[e](n)}),t.disabled=!1}ur();var[o0,FS]=Jn(["A","B"]),[BS,kS]=Jn(1),[zS,VS]=Jn("#ffffff"),[GS,HS]=Jn(!0),WS={A:[228,87,46],B:[41,115,178]},XS=t=>new Uint8Array(Array.from({length:4},(e,n)=>n%3===0?[...WS[t],255]:[255,255,255,255]).flat()),[Bc,Ah]=Jn(null),ks={clicks:{A:0,B:0},groupClicks:0,over:{A:0,B:0},out:{A:0,B:0},dragMoves:{A:0,B:0}};function qS(t){let e=()=>(o0().indexOf(t.id)-.5)*2.2,n;Tr(()=>{Bc()===t.id&&Ah(null)});var i=Ot("mesh",{rotation:[.5,.6,0],onPointerOver:()=>{ks.over[t.id]++,Ah(t.id)},onPointerOut:()=>{ks.out[t.id]++,Bc()===t.id&&Ah(null)},onClick:a=>{ks.clicks[t.id]++,t.id==="B"&&a.stopPropagation()},onPointerDown:a=>{n=a.nativeEvent.clientX,a.setPointerCapture()},onPointerMove:a=>{n!==void 0&&(a.eventObject.rotation.y+=(a.nativeEvent.clientX-n)*.02,n=a.nativeEvent.clientX,ks.dragMoves[t.id]++)},onPointerUp:()=>{n=void 0}}),r=Ot("boxGeometry"),s=Ot("meshBasicMaterial"),o=Ot("dataTexture",{needsUpdate:!0});return Pn(i,r),Pn(i,s),Pn(s,o),Ko(()=>({e:t.id,t:[e(),.2,0],a:[BS(),1,1],o:Bc()===t.id?"#ffd166":zS(),i:[XS(t.id),2,2]}),({e:a,t:c,a:l,o:u,i:f},h)=>{a!==h?.e&&Dn(i,"name",a,h?.e),c!==h?.t&&Dn(i,"position",c,h?.t),l!==h?.a&&Dn(r,"args",l,h?.a),u!==h?.o&&Dn(s,"color",u,h?.o),f!==h?.i&&Dn(o,"args",f,h?.i)}),i}var Jo=document.querySelector("canvas"),Vs=new wi,kc=new Bt(45,Jo.width/Jo.height,.1,100);kc.position.set(0,0,6);var wh=new Ns({canvas:Jo,antialias:!0,preserveDrawingBuffer:!0});wh.setClearColor(16053492);Lc(()=>(()=>{var t=Ot("group",{name:"world"}),e=Ot("mesh",{name:"fixed",position:[0,-1.4,0],scale:[5,.1,1]}),n=Ot("boxGeometry"),i=Ot("meshBasicMaterial",{color:"#888888"});return Pn(t,e),Pn(e,n),Pn(e,i),cr(t,(()=>{var r=Fs(()=>!!GS());return()=>r()?(()=>{var s=Ot("group",{name:"slots",onClick:()=>{ks.groupClicks++}});return cr(s,ui(Xa,{get each(){return o0()},children:o=>ui(qS,{id:o})})),s})():void 0})(),null),t})(),Oc(Vs));var YS=()=>Vs.getObjectByName("slots");function a0(){let t=YS()?.children??[];return{order:t.map(e=>e.name),meshUuids:t.map(e=>e.uuid),geometryUuids:t.map(e=>e.geometry.uuid),widths:t.map(e=>e.geometry.parameters.width),mapsAttached:t.map(e=>!!e.material.map?.isDataTexture),sceneChildren:Vs.children.map(e=>e.name),rotationsY:t.map(e=>e.rotation.y),colors:t.map(e=>e.material.color.getHexString()),memory:{...wh.info.memory},stats:{...ci},events:{hovered:Bc(),log:structuredClone(ks),...s0.debug(),stats:{...s0.stats}}}}function $S(t){let e=Vs.getObjectByName(t);if(!e)return null;let n=e.getWorldPosition(new Y).project(kc),i=Jo.getBoundingClientRect();return{x:i.left+(n.x+1)/2*i.width,y:i.top+(1-n.y)/2*i.height}}var s0=Qm({canvas:Jo,camera:kc,scene:Vs,afterEvent:()=>fr()}),ZS=document.querySelector("#event-status"),KS=document.querySelector("output");async function fr(){Kt(),await Promise.resolve(),await Promise.resolve(),wh.render(Vs,kc);let t=a0();KS.textContent=`slots ${t.order.join(", ")||"(none)"} \xB7 width ${t.widths[0]??"-"} \xB7 geometries ${t.memory.geometries} \xB7 textures ${t.memory.textures} \xB7 created ${t.stats.created} \xB7 recreated ${t.stats.recreated} \xB7 disposed ${t.stats.disposed}`;let e=t.events;return ZS.textContent=`hovered ${e.hovered??"-"} \xB7 captured ${e.captured.join(", ")||"-"} \xB7 clicks A ${e.log.clicks.A}, B ${e.log.clicks.B}, group ${e.log.groupClicks} \xB7 drag moves A ${e.log.dragMoves.A}, B ${e.log.dragMoves.B} \xB7 raycasts ${e.stats.raycasts}`,t}var zs={swap:()=>(FS(t=>[...t].reverse()),fr()),widen:()=>(kS(t=>t===1?2:1),fr()),recolor:()=>(VS(t=>t==="#ffffff"?"#ffe08a":"#ffffff"),fr()),toggle:()=>(HS(t=>!t),fr()),async cycle(t=100){for(let e=0;e<t;e++)await zs.toggle(),await zs.toggle(),await zs.swap(),await zs.widen();return fr()},snapshot:a0,commit:fr,screenOf:$S};window.__three=zs;for(let t of document.querySelectorAll("button[data-action]"))t.addEventListener("click",()=>zs[t.dataset.action]()),t.disabled=!1;fr();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
