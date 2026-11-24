(()=>{var wt=class extends Error{constructor(e){let t=Error,i=t.stackTraceLimit;i&&(t.stackTraceLimit=0),super(),i&&(t.stackTraceLimit=i),this.source=e}},Zn=class extends Error{constructor(e,t){try{var i=String(t instanceof Error?t.message:t)}catch{}super(i,{cause:t}),this.source=e}};function zs(n){return n instanceof Zn?n.cause:n}var Re={},Pc={},ph=typeof Proxy=="function",Vs={},mh=Symbol("refresh"),Di=Set;function Nc(n){let e=n.pe;for(;e;)e.R|=32,Nc(e),e=e.Ge}function Lc(n){n.l&=-33,pr(n)}var Zo;function Gs(n){try{n()}catch(e){Zo||=[e],Rt()}}function Ko(n){let e=Zo;if(Zo=void 0,e&&!n)throw e[0]}function Kn(n,e=!1,t){let i=n.R;if(i&64)return;e&&(!t&&n.T!==null&&(n.T.me!==null||n.T.Le!==null)&&Kn(n,!1,!0),n.R=i|64,n.X&&(Xs(n),(n.m&1&&n.T?.Re!=null||i&2048||An.length)&&Rt()));let r=t?n.T.me:n.pe;for(t?n.T.me=null:n.pe=null;r;)r.l&=-33,wn(r,bt),Ws(r),r.Me=r,Kn(r,!0),r=r.Ge;if(t||(n.be=0),e&&!t&&!(i&32)&&n._parent!==null&&!(n._parent.R&64)){let s=n.Me,o=n.Ge;s!==null?s.Ge=o:n._parent.pe=o,o!==null&&(o.Me=s),n.Me=null}if(Xm(n,t),e&&n.ze){let s=n.ze;n.ze=void 0,Gs(s)}}function Jo(n,e){let t=n.pe;e.Me=null,e.Ge=t,t!==null&&(t.Me=e),n.pe=e}function Xm(n,e){let t=e?n.T.Le:n.ke;if(t)if(e?n.T.Le=null:n.ke=null,Array.isArray(t))for(let i=t.length-1;i>=0;i--)Gs(t[i]);else Gs(t)}function qm(n,e){for(;n.l&4&&n._parent;)n=n._parent;if(n.id!=null)return Ym(n.id,e?n.be++:n.be);throw new Error}function jo(n){return qm(n,!0)}function Qo(n,e,t){return n?.id??(e?t?.id:t?.id!=null?jo(t):void 0)}function Ym(n,e){let t=e.toString(36),i=t.length-1;return n+(i?String.fromCharCode(64+i):"")+t}function hn(){return rt}function Qr(n,e=rt){return e&&(e.ke?Array.isArray(e.ke)?e.ke.push(n):e.ke=[e.ke,n]:e.ke=n),n}function xh(n=!0){Kn(this,n),Zo&&!it.Y&&Ko()}function Fn(n){let e=rt,t=n?.transparent??!1,i={id:Qo(n,t,e),l:t?4:0,R:0,Qe:!0,Ke:e?.Qe?e.Ke:e,pe:null,Ge:null,Me:null,ke:null,A:e?.A||Vs,be:0,T:null,_parent:e,dispose:xh};return e&&Jo(e,i),i}function ea(n,e){let t=Fn(e);return Wt(t,()=>n(xh.bind(t,!0)))}var kc=null,et=null,zc=null,Vc=null,$m=null,na=null,Zm=null,Km=null,Jm=null,rs=null;var _r=null,ua=!1;var Mh=null,ki=null,Eh=null,Th=null,Gc=null;function Ah(n,e,t,i,r){Mh=n,ki=e,Eh=t,Th=i,Gc=r}var Ks=null;var Hc=null,jm=null;var _h=null,Qm=null;var Ft=null,kn=null,Wc=null,Xc=null,wh=null,qc=null,ia=null,fa=null;var Rh,Yc;var Ni=[];function e0(n,e=null){let t={ln:[],rn:[[],[]],fn:[],eo:null,_parent:e,P:n,Pe:null,tt:0,nt:!1,nn:null,Ue:!1,un:!1,I:null};return n||Ni.push(t),t}var Qe=null;function pi(n){Qe=n}var xt=null,Li=null;function $c(n,e){if(it.Y&&!e||xt!==null)return Rn(n);Li===null?Li=Jt(n):Ch(Jt(n),Li),Rt()}function ft(n){return n.T.Re=Jt(n.T.Re)}function t0(n){return n=Jt(n),Ni.indexOf(n)!==-1?n:null}function Jt(n){for(;n.eo!==null;)n=n.eo;return n}function Rn(n){if(et&&n?.P)return;let e=xt;e===null?xt=n===null?e0(!1):Jt(n):n!==null&&Ch(Jt(n),e),it.Y||Rt()}var Zc=[];function Ch(n,e){n=Jt(n),e=Jt(e),!(n===e||n.P||e.P)&&(Ft&&eu&&Zc.push(n,e.nt),n.eo=e,e.tt+=n.tt,e.nt||=n.nt,mr(e.ln,n.ln),mr(e.rn[0],n.rn[0]),mr(e.rn[1],n.rn[1]),mr(e.fn,n.fn),n.I!==null&&mr(e.I??=[],n.I),Ni.splice(Ni.indexOf(n),1))}function n0(n){return n.tt!==0||i0(n.ln,n)||!!Jm?.(n)}var yh=null;function i0(n,e,t){for(let i=0;i<n.length;i++){let r=n[i];if(!(!(r.m&1)||r.R&64||r.l&8192||r.T.Re!==null&&ft(r)!==e||t&&!t(r,e)||ua&&e.P&&r.T.se&&ts(r))){if(r.i===1){if(!(Ft&&r.l&-2147483648&&!e.P)&&vh(r,yh??e))return!0;continue}for(let s=r.o;s!==null;s=s.t){let o=s.u;if((o.i===1&&o.m&1&&!(Ft&&o.l&-2147483648&&!e.P)||o.R&2048||o.l&16384&&o.m===1)&&(s.Ne===o.de||o.T?.U!=null)&&!(o.R&64)&&vh(o,yh??e))return!0}}}return!1}function vh(n,e){return!Eh?.(n)&&!(n.R&32&&r0(n,e))}function r0(n,e){for(;n?.R&32;)n=n._parent;return n?.l&256&&n.T?.Re!=null&&ft(n)===Jt(e)}var qs=[];function Ih(n){qs.push(n)}var ta=[];function Ph(n){wn(n,bt),n.R&=-4,ta.push(n)}function Js(n,e){n.l|=256,Dh(n,e)}function Dh(n,e){let t=Pt(n);t.Re!==e&&(t.Re=e,e.ln.push(n))}function Nh(n,e){for(let t=n.pe;t!==null;t=t.Ge)t.T?.Re?.P||(t.X!==void 0&&(t.l&256||Js(t,e),t.l|=1048576),Nh(t,e))}function Kc(n,e,t){for(let i=n.pe;i!==null;i=i.Ge)(i.l&2304)===256&&ft(i)!==e&&t(i),Kc(i,e,t)}function ha(n){n.T.Re=null,n.l&=-257}var bt={et:new Array(2e3).fill(void 0),p:!1,Fe:0,Et:0},Et=0,ra=!1,sa=!1,bh=!1,Oc=0;var Jc=0;var Lh=0;var Oh=2147483647;function Rt(){if(sa){s0();return}ra||(ra=!0,!Oc&&!it.Y&&queueMicrotask(Gt))}var da=Symbol.for("solid-js/root-error-hook"),Uh="[REACTIVITY_HALTED]";function pa(n){if(sa)return;sa=!0,Ko(!0);let e=Uh,t=n!==void 0&&globalThis.reportError;t||n===void 0?console.error(e):console.error(e,n),t&&t(n)}function s0(){bh||(bh=!0,console.error(Uh))}var jt=class n{rn=[[],[]];Y=!1;flush(){if(!this.Y){this.Y=!0,Gh(),Qe=null,Li=null;try{zh(),ia&&ia(),Uc(bt,n._e),this.settle(),Et++,ra=bt.Et>=bt.Fe||An.length!==0,this.run(1),this.run(2)}finally{this.Y=!1,Li=null}}}settle(){Zm?.()&&Uc(bt,n._e);let e=xt;xt=null,$m?.(e);let t=e!==null&&!e.P?Jt(e):null;if(t!==null){let a=An.length;for(let l=0;l<a;l++){let u=An[l];if(!(u.l&2304)&&(u.T===null||u.T.Re===null||!u.T.Re.P)){if(u.ue===Re&&u.m&4&&u.i!==1)continue;if(u.ue!==Re&&!(u.m&5)&&u.T?.me==null&&u.T?.Le==null&&!u.T?.Te&&to(u,u.le,u.ue)){u.ue=Re,u.l&=-129;continue}Js(u,t)}u.l&128&&Nh(u,t)}An.length=0,Hc?.(t);let c=ta.splice(0);if(Ft){c.sort((l,u)=>l.he-u.he);for(let l=0;l<c.length;l++)(c[l].R&96)===32&&c[l].l&32768&&dn(c[l])}}else{u0();for(let a=0;a<qs.length;a++){let c=qs[a];c.T?.U==null&&!c.Ae&&jn(c)}}qs.length&&(qs.length=0);let i=this.rn,r=null;na&&(this.rn=r=[[],[]],na(t),oa.length&&(oa.length=0)),this.rn=[[],[]];for(let a=Ni.length-1;a>=0;a--){let c=Ni[a];n0(c)||(Ni.splice(a,1),Km?.(c),a0(c),a=Ni.length)}jm?.();let s=t&&t0(t);Qm?.(s);let o=s!==null;for(let a=0;a<2;a++)o&&mr(s.rn[a],i[a]),this.rn[a]=o||r?.[a].length||this.rn[a].length?(r?r[a]:[]).concat(o?[]:i[a],this.rn[a]):i[a];if(ta.length!==0){let a=ta.splice(0).sort((c,l)=>c.he-l.he);for(let c=0;c<a.length;c++)a[c].R&64||dn(a[c])}Th?.()}run(e){let t=this.rn[e-1];t.length&&(this.rn[e-1]=[],f0(t,e))}enqueue(e,t,i=Qe){e&&(i?.P?i:this).rn[e-1].push(t),Rt()}notify(e,t,i,r){return Mh?.(e,i&t,r)?!0:t&1?(i&1&&Qe===null&&Rn(null),!0):!1}};function o0(n){let e;for(let t=0;t<n.fn.length;t++){let i=n.fn[t],r=i.T?.U?.source;if(!(i.R&64||i.m&2&&(i.i||!(i.l&8388608))&&r!==i&&(r?.m??2)&2)&&(i.R&2048||Ft&&i.l&32768)){e=1,n.P||(i.R&=-2049),i.Ae=!1;for(let s=i.pe;s!==null;s=s.Ge)s.i&&(s.Ae=!1);rs?.(i),Cn(i)}}return n.fn.length=0,e}function a0(n){let e=o0(n);_h&&n.I!==null&&_h(n.I);for(let t=0;t<n.ln.length;t++){let i=n.ln[t];i.T.Re===null||ft(i)!==n||(i.T.Re=null,kh(i))}xt===n&&(xt=null),e?it.rn[1].push(()=>Sh(n)):Sh(n)}function Sh(n){for(let e=0;e<2;e++)mr(it.rn[e],n.rn[e]),n.rn[e]=[]}function mr(n,e){for(let t=0;t<e.length;t++)n.push(e[t])}var An=[],Fh=[],oa=[];function jc(n,e){e.fn.push(n),n.R|=2048}function js(n){An.push(n),it.Y||Vh()}var Qs=0;function ma(){Qs++}function eo(n){n.we=Qs;let t=(n.l&512)!==0&&n.T?.De!==void 0;for(let i=n.o;i!==null;i=i.t){let r=i.u;if(r.R&4&&i.Ne===r.de&&(i!==r._||!n.X)&&(r.R|=4096),t&&r.l&8){r.R|=256;continue}Cn(r),r.R&8388608&&yr(r._parent,1)}}function ts(n,e=new Di){return[...n.T.se??[n]].every(t=>t===n?t.T.Ve:e.has(t)||(e.add(t),ts(t,e)))}function Bh(n,e){eo(n),n.l&4096&&jt.lo?.(n,e);for(let t=n.o;t!==null;t=t.t){let i=t.u,r=i.T?.Re,s=i.i===1,o;(i.m&5)===1&&(r?(i.l&2304)===256:s)&&(o=!!r&&Jt(r)===Jt(e._parent),i.i?s&&!o&&ts(i):o||ts(i))&&Dh(i,r=e),s&&n.l&32768&&(i.l|=32768,i.R&=-65537),(r?.P?l0(r,e):i.i)&&(i.R|=65536)}}function Qc(n){n.Ae=!0,it.enqueue(n.i,n.W??=jt.q.bind(null,n))}function l0(n,e){return n===e||n.nn!==null&&n.nn===e.nn}function aa(n){return n.ue!==Re&&(n.le=n.ue,n.ue=Re)}function c0(n){return!(n.m&4)&&!!n.T?.Ee&&!n.T.Ve&&(n.ue=Re,!0)}function kh(n){if(!n.X){n.l&=-385,aa(n);return}let e=(n.m&1)!==0&&(n.ue===Re||c0(n)),t=n.l&2097152;if(!e&&n.T&&(n.T.Te=null),n.l=e?n.l&-1048833|1024:n.l&-3147137,t){let i=n.ue;n.ue=Re,n.ie=Et+1,zi(n,2,i)}else aa(n)&&(n.m&=-5,n.T!=null&&(n.T.Ve=!1,n.T.je=Re),n.i&&n.i!==3&&Qc(n));n.Ie=!1,n.R&=-1025,n.T?.U==null&&jn(n),n.m&1||(n.m&=-5),!e&&n.T!=null&&(n.T.me!==null||n.T.Le!==null)&&jt.Ce(n,!1,!0)}function u0(){for(let n=0;n<An.length;n++){let e=An[n];e.l&2304||kh(e)}An.length=0}var it=new jt;function Gt(n){if(Jc>0)return n?n():void 0;if(n){Oc++;try{return n()}finally{try{Gt()}finally{Oc--}}}if(!it.Y&&!sa){for(;ra;)it.flush();Ko()}}function f0(n,e){for(let t=0;t<n.length;t++)n[t](e)}function Cn(n){bt.Fe>n.he&&(bt.Fe=n.he),xa(n,bt)}function Hh(n,e){let t=(n._parent?.Qe?n._parent.Ke?.he:n._parent?.he)??-1;t>=n.he&&(n.he=t+1);let i=n.he,r=e.et[i];if(r===void 0)e.et[i]=n;else{let s=r.We;s.ve=n,n.We=s,r.We=n}i>e.Et&&(e.Et=i)}function xa(n,e){let t=n.R;t&12||(t&1?n.R=t&-4|2|8:(n.R=t|8,e.p&&yr(n)),t&16||Hh(n,e))}function ga(n,e){let t=n.R;t&28||(n.R=t|16,Hh(n,e))}function wn(n,e){let t=n.R;if(!(t&24))return;n.R=t&-25;let i=n.he;if(n.We===n)e.et[i]=void 0;else{let r=n.ve,s=e.et[i],o=r??s;n===s?e.et[i]=r:n.We.ve=r,o.We=n.We}n.We=n,n.ve=void 0}function Wh(n){if(!n.p){n.p=!0;for(let e=0;e<=n.Et;e++)for(let t=n.et[e];t!==void 0;t=t.ve)t.R&8&&yr(t)}}function yr(n,e=2){let t=n.R;if(!((t&3)>=e)){n.R=t&-4|e;for(let i=n.o;i!==null;i=i.t)yr(i.u,1)}}function Uc(n,e){for(n.p=!1,n.Fe=0;n.Fe<=n.Et;n.Fe++){let t=n.et[n.Fe];for(;t!==void 0;)t.R&8?e(t):h0(t,n),t=n.et[n.Fe]}n.Et=0}function h0(n,e){wn(n,e);let t=n.he;for(let i=n.C;i;i=i.G){let r=i.S;r.X&&r.he>=t&&(t=r.he+1)}if(n.he!==t){n.he=t,no(n,t);for(let i=n.o;i!==null;i=i.t)i.u!==n._parent&&ga(i.u,e)}}function no(n,e){for(let t=n.pe;t;t=t.Ge)if(t.Qe)no(t,e);else if(t.he<=e){let i=t.R&24;wn(t,bt),t.he=e+1,i&&(i&8?xa:ga)(t,bt),no(t,e+1)}}var d0;function p0(n){let e=n.S,t=n.G,i=n.t,r=n.en;return i!==null?i.en=r:e.Ze=r,r!==null?r.t=i:(e.o=i,i===null&&(e.l&4096?d0(e):e.T?.Ye&&Gs(e.T.Ye),e.X&&e.l&32&&!(e.R&32)&&!(e.m&1)&&(ro?ro.push(e):pr(e)))),t}function jn(n){let e=n._,t=e!==null?e.G:n.C;if(t!==null){do t=p0(t);while(t!==null);e!==null?e.G=null:n.C=null}}function Ws(n){n.C&&(n._=null,jn(n))}var ro=null,tu=n=>ro=n;function pr(n){wn(n,bt),Ws(n),Kn(n,!0)}var io=new Di;function zh(){if(io.size!==0){for(let n of io)!n.o&&n.l&32&&!(n.m&1)&&!(n.R&96)&&pr(n);io.clear()}}function vr(n,e){let t=e._;if(t!==null&&t.S===n)return;let i=null,r=e.R&4;if(r&&(i=t!==null?t.G:e.C,i!==null&&i.S===n))return i.Ne=e.de,e._=i;let s=n.Ze;if(s!==null&&s.u===e&&(!r||s.Ne===e.de))return;let o=e._=n.Ze={S:n,u:e,G:i,en:s,t:null,Ne:e.de};t!==null?t.G=o:e.C=o,s!==null?s.t=o:n.o=o,ma()}function Xh(n,e){return n.T?.se?.has(e)?!1:((Pt(n).se??=new Di).add(e),!0)}function iu(n,e){let t=n.T?.se;return t?.delete(e)?(t.size||(n.T.se=void 0),!0):!1}function Xs(n){n.T!==null&&(n.T.Ee=null)}function ou(n){n.T!==null&&(n.T.se=void 0)}function au(n,e){for(let t=n.C;t;t=t.G){let i=t.S;if(!(i.R&64)&&(i===e?i.m&1:i.T?.se?.has(e)))return!0}return!1}function lu(n,e){Pt(n).fe=!0,e.source&&Xh(n,e.source),n.m&2||br(n,e.source,e)}function br(n,e,t){if(!e){n.T!==null&&(n.T.U=null);return}let i=t instanceof wt&&t.source===e?t:n.T?.U;Pt(n).U=i instanceof wt&&i.source===e?i:new wt(e)}function ru(n,e){for(let t=n.o;t!==null;t=t.t)e(t.u,t)}function cu(n,e){let t=new Di,i=r=>{let s=t.has(r);e(r,s)!==!1&&!s&&(t.add(r),ru(r,i))};ru(n,i)}function oo(n){n.X&&n.l&32&&!n.o&&!(n.R&32)&&!(n.m&1)&&(n.R&8?n.R|=4194304:pr(n))}function m0(n){let e;if(cu(n,(t,i)=>{!i&&!t.o&&t.l&32&&(e??=[]).push(t)}),e)for(let t of e)oo(t)}function uu(n,e,t){return!(n.l&256||t&&n.R&16384&&it.Y&&!n.rr)||Qe?!1:(ou(n),n.T&&(n.T.fe=!1),(n.m&=6)&2||br(n),n.ue=e instanceof Zn?e:new Zn(n,e),n.l|=2097280,xi(n),Rt(),!0)}function qh(n,e){let t=!1;cu(n,(i,r)=>{!r&&i.T?.U===e&&(Cn(i),t=!0)}),t&&Rt()}function xi(n,e=n){iu(n,e);let t=!1,i;if(cu(n,(r,s)=>{if(s||e!==n&&au(r,e)||!iu(r,e))return kn&&(r.l&32768?Cn(r):Wc(r,n)),!1;r.ie=Et;let o=r.T?.se?.values().next().value,a=r.m&2;o?a||br(r,o):(r.m&=-2,a||br(r),r.l&256&&!(e.m&1)&&Rn(ft(r)),r.T?.fe?(Cn(r),t=!0):Hc&&r.rr?.st(),r.T!==null&&(r.T.fe=!1),!r.o&&r.l&32&&(i??=[]).push(r),Wc?.(r,n))}),i)for(let r of i)oo(r);t&&Rt()}function so(n){return n!=null&&typeof n=="object"&&typeof n.then=="function"}function Yh(n){let e=n.T?.Se;e!=null&&(n.T.Se=null,e())}function $h(n,e,t,i){let r=!1,s=!1;if(typeof e=="object"&&e!==null&&mn(()=>{r=e[Symbol.asyncIterator],s=!r&&so(e)}),!s&&!r)return n.T!==null&&(n.T.Ee=null,kn&&(n.l&=-536870913)),n.Ie=!1,e;Pt(n).Ee=e,kn&&(n.l|=536870912),n.T.ce=Lh||Oh,n.T.se=void 0;let o,a=p=>{if(n.T?.Ee!==e)return;let x=p instanceof wt;if(x&&n.Ie){Xs(n),lu(n,p),n.ie=Et;return}(x||!uu(n,p))&&(zi(n,x?1:2,p),x||Kn(n,!1,!0)),x&&xi(n),n.ie=Et,x||m0(n),i?.(p,x)},c=(p,x)=>{if(n.T?.Ee!==e||n.R&2&&!(kn&&n.m&4))return;let g=kn&&An.some(f=>f.ue!==Re),m=n.m&4;if(x0(n),t){if(!t(p,m,a))return}else zn(n,()=>p);n.ue===Re&&(n.Ie=!1,jn(n)),xi(n),Rt(),(x||!g)&&Gt(),x?.()},l=()=>n.l&32&&!n.o&&!(n.m&1)?(pr(n),!0):!1,u=(p,x)=>{let g=p[Symbol.asyncIterator](),m=!1,f=!1,A=!x,_=()=>{if(!f){f=!0;try{let R=g.return?.();so(R)&&R.then(void 0,()=>{})}catch{}}};Qr(_,x),Pt(n).Se=_;let E=()=>{try{l()||T()}catch(R){a(R)}},T=()=>{let R,O,S=!1,v=!1,C=!0,k=g.next();if((so(k)?k:{then:X=>{X(k)}}).then(X=>{if(C&&A)R=X,S=!0,X.done&&(f=!0);else{if(n.T?.Ee!==e)return;X.done?(f=!0,m?(Rt(),Gt()):c(void 0),l()):(m=!0,c(X.value,E))}},X=>{C&&A?(O=X,v=!0):n.T?.Ee===e&&(f=!0,a(X),l())}),C=!1,v){if(f=!0,a(O),A)throw O;return!0}return S&&!R.done?(o=R.value,m=!0,T()):S&&R.done},M=T();return A=!1,m||M},h=null,d=(p,x)=>{let g=!1;if(typeof p=="object"&&p!==null&&mn(()=>{g=p[Symbol.asyncIterator]}),!g)return!1;o=void 0;let m=u(p,x);return x||(h=m),!0};if(s){let p=!1,x=!1,g,m=!0;if(e.then(f=>{if(m)o=f,p=!0;else{try{if(n.T?.Ee===e&&!(n.R&64)&&d(f,n))return;c(f)}catch(A){a(A)}l()}},f=>{m?(g=f,x=!0):(a(f),l())}),m=!1,x)throw a(g),g;p?d(o)||(n.Ie=!1):h=!1}if(r&&d(e),h!==null){if(!h){if(n.Ie)return n.le;throw new wt(rt)}n.Ie=!1}return o}function fu(n,e=!1){n.T?.se&&ou(n),n.T?.fe&&(n.T.fe=!1),n.m=e?0:n.m&4,n.T?.U&&br(n);let t=hu(n);t&&t.call(n)}function x0(n,e=!1){let t=n.T?.se;t&&(t.delete(n),t.size)?(n.T.fe=!1,e&&(n.m=1),br(n,t.values().next().value)):fu(n,e)}function zi(n,e,t){e===2&&!(t instanceof Zn)&&!(t instanceof wt)&&(t=new Zn(n,t));let i=e===1&&t instanceof wt&&t.source;if(i?(n.m&2&&(n.T.Te=n.T.U),Xh(n,i)):ou(n),n.m=e|(e===2?n.m&12?8:0:e===1&&n.m&8?4:n.m&4),i?br(n,i,t):Pt(n).U=t,ua&&e===1&&n.l&8192){Qe===null&&Rn(n.R&8192?null:ft(n)._parent);return}let r=hu(n);if(r){r.call(n);return}g0(n,e,t)}function g0(n,e,t){let i=e===1&&t instanceof wt&&t.source;ru(n,(r,s)=>{if(r.ie=Et,r.l&16384||kn&&(r.l&32768||i&&r.l&2097152)&&!(i&&kn(r,n))||e===1&&s.Ne!==r.de){e!==1&&iu(r,n)&&xi(r,n),Cn(r),Rt();return}if(i&&r.T?.se?.has(i)){Qe===null&&(r.l&2304)===256&&it.Y&&!ki?.(r,i.ie===Et)&&Rn(ft(r));return}(i||e!==1&&(r.T?.U!==t||r.T?.se))&&(et&&Qe!==null?et(r,Qe,!0,n):(js(r),e===1&&(r.l&2304)===256&&!r.i&&(ua&&r.m&1&&ts(r)?ha(r):Rn(ft(r)))),zi(r,e,t),r.rr?.st(e,t))})}jt._e=n=>{n.i===3?(wn(n,bt),n.Ae=!0,it.enqueue(2,n.Z)):n.R&32&&!(n.R&65536)?Ph(n):et&&n.R&32&&S0(n)?(wn(n,bt),n.R&=-65540):rs&&n.T?.He&&rs(n,1)||dn(n)};function S0(n){let e=n._parent;for(;e.R&32;)e=e._parent;return(e.l&10240)===2048||e.i&&e.T?.Re?.P}jt.Ce=Kn;var Kt=!1,rt=null,Sr=!1,du,M0=null;function rd(n){for(;n;){if(n.Oe)return!0;n=n._parent}return!1}function dn(n,e=!1){ma();let t=n.i,i,r=Re,s=Qe,o=du,a=et&&(du=e&&(s||o));if(rs&&!e&&n.T){let v=n.T.He;(v?v!==n.T.Ee&&(n.T.He=void 0,1):n.l&2048&&!(n.R&65536))&&rs(n,2)}if(et){let v=e?yu(rt):null,C=v?.R|0;(C&32768||v&&(v.l&16777216&&v.m&4||v.i===1&&v._&&sd(v,k=>k.l&32768,v._)))&&(n.l|=16777216),pi((n.R&65536||(n.l&10240)===2048)&&n.T?.Re?.P?n.T.Re:s?._parent.Pe!=s&&C&4?s:null)}let c=n.l&2097152,l;if(!e){if(wn(n,bt),et&&!t&&(n.m&1||(n.l&1610612992)===536871168)&&(n.l&=-32769),n.T!==null&&(n.T.Ee=null,Yh(n)),n.l&256){let v=ft(n);v.P||n.l&524288||(!(n.l&(32768|1<<23))||Ft&&!(n.l&1<<23)&&Ea(n,v)?$c(v,ki?.(n,n.m&4)):v!==xt&&!(n.m&4||n.l&1048576)&&((r=n.ue)!==Re&&eo(n),n.ue=Re,n.l&=-257))}if(t===3||n.l&128){let v=ro;tu(i=[]),Kn(n),tu(v)}else(n.pe!==null||n.ke!==null)&&E0(n);fa&&(l=n.C!==null,n.T!==null&&(n.l&2097152||n.T.Ft!==void 0)&&fa(n)),n.l&2097152&&(n.ue=Re,n.l^=2097152)}let u=n.m&4,h=n.m&2&&n.T?.U,p=(n.m&1)!==0&&n.T?.se,x=n.T?.se?.has(n),g=!1,m=(n.R&8192)!==0&&!((n.m&1||n.ue!==Re&&!(n.R&1024))&&n.T!==null&&!n.T.Ve),f=rt;rt=n,n._=null,n.de++;let A=n.R&4194304;n.R=4|n.R&8224,n.ie=Et;let _=n.ue!==Re?n.ue:n.le,E=n.he,T=!1,M=!1,R=Kt;Kt=!0;try{if(n.l&64)_=n.X(_),n.T!==null&&(n.T.Ee=null),n.Ie=!1;else{let v=n.T?.Ee,C=n.X(_),k=typeof C=="object"&&C!==null,W=n.T?.Ee!==v;_=W||!k?C:$h(n,C),!W&&!k&&(n.T!==null&&(n.T.Ee=null,kn&&(n.l&=-536870913)),n.Ie=!1)}(n.m!==0||n.T!==null)&&!(_r&&n.m&1&&_r(n,null,!0))&&fu(n,e)}catch(v){let C=v instanceof wt;if(kn&&(!C||n.Ie)&&(n.l&=-536870913),C&&n.Ie)lu(n,v);else if((C||!(g=uu(n,v,!0)))&&(C&&(Pt(n).fe=!0),zi(n,C?1:2,v),C&&x&&!n.T?.Ee&&xi(n)),(C||g)&&p)for(let k of p)k!==n&&!(n.T?.se?.has(k)&&(k.m&1||au(n,k)))&&xi(n,k)}finally{if(Kt=R,et&&(du=o),T=(n.R&4096)!==0,M=!!(n.R&(a?s||t||!(n.m&1)?16512:0:128)),Ft&&(n.l=n.l&1073709055|n.R&32768|(n.R&2097152)<<9|(n.R&1048576)<<11),n.R=n.R&936032|(e?n.R&256:0),rt=f,i)for(let v of i)oo(v);l&&!m&&n.m&1&&(m=!!fa(n,1)),n.T!==null&&(n.T.Ve=m&&(n.m&1)!==0)}if(n.R&64){Ws(n),Xs(n),et&&pi(s);return}let O=et?Qe:null,S=!!n.T?.U||g;if(et&&O!==null&&(et(n,O,e,S)?pi(O):O=null),!S){let v=n.ue===Re,C=v?n.le:n.ue,k=xt??Li,W=v&&u&&!t||!!n.T?.Te||!!(h&&k)||!!c||O!==null&&n._parent?.l&256||!to(n,C,_);if(t&&W&&!(n.R&262144&&!n.Ae&&Object.is(n.ge,_))&&v&&(n.Ae=!n.T?.U,e||it.enqueue(t,n.W??=jt.q.bind(null,n),O)),!(zc&&!e&&O===null&&n.l&8192&&zc(n,_,S))){if(!S){if(W)O!==null?(t&&n.ue===Re?n.le=_:n.ue=_,e&&!t&&(n.m|=4)):(e?!(k!==null&&(M||yu(f)?.R&128)):t&&n.ue===Re)?n.le=_:(n.ue=_,h&&(n.T.Te=h),e&&(Js(n,k),n.m|=4,ki?.(n,!a&&xt))),n.o!==null&&(O!==null?Bh(n,O):eo(n));else if(n.he!=E)for(let X=n.o;X!==null;X=X.t)ga(X.u,bt)}}if(!W&&!n.T?.U&&(h&&qh(n,h),p))for(let X of p)X!==n&&xi(n,X);x&&!(n.m&5)&&xi(n)}if(e&&O===null&&M&&n.m&1){let v=xt??Li;v&&!v.P&&(t&&ki?.(n)===2||Js(n,v))}!n.T?.U&&(O!==null||n.ue===Re)&&!(t&&n.Ae)&&(e||t===3?jn(n):Ih(n)),(n.ue!==Re||n.T!==null&&(n.T.me!==null||n.T.Le!==null)||(n.m&5)!==0&&(!e||(n.m&1)!==0))&&(n.l|=128,O===null&&js(n)),et&&pi(s),T&&(Cn(n),Rt()),Xc&&r!==Re&&Object.is(_,r)&&Xc(n),A&&oo(n)}function xu(n){if(!(n.R&68)){if(n.R&1)for(let e=n.C;e;e=e.G){let t=e.S;if(t.X&&xu(t),n.R&2)break}(n.R&2||n.T?.U&&n.ie<Et&&!n.T?.Ee)&&dn(n),n.R=n.R&937336}}function In(n,e){let t=e?.transparent??!1,i=e!==null&&typeof e=="object"&&"loadingValue"in e,r={id:Qo(e,t,rt),l:(t?4:0)|(e?.ownedWrite?1:0)|(!rt||e?.lazy?32:0)|(e?.sync?64:0)|(e?.ae?2:0)|(e?.xe??0)|(Sr&&rd(rt)?8:0),ye:e?.equals??as,ke:null,A:rt?.A??Vs,be:0,X:n,le:i?e.loadingValue:void 0,he:0,ve:void 0,We:null,C:null,_:null,de:0,o:null,Ze:null,_parent:rt,Ge:null,Me:null,pe:null,R:e?.lazy?512:0,m:i?0:4,ie:Et,ue:Re,we:-1,Ie:i,T:null};return e?.unobserved&&(Pt(r).Ye=e.unobserved),cd(r,e),r}function Pt(n){return n.T??={Ee:null,Se:null,U:void 0,fe:void 0,se:void 0,Ye:void 0,De:void 0,me:null,Le:null,Re:null,Ve:!1,je:Re,Be:-1,ce:0,Ue:!1,I:0,Te:null}}var eu=null;function gu(n,e){Ft&&!xt&&(eu=n,Zc.length=0),n.R|=128,(e.m&4||n.i!==1)&&$c(ft(e),!n.i&&n.m&4||ki?.(n))}function Zh(n,e){let t=Ft&&n.l&32768,i=et&&Qe!==null;if(et&&n.l&16777216&&n.m&4&&(!i||e.m&1))return gu(n,e),!1;if(!(t&&qc(n,e))&&!((!i||n.m&4&&e.m&1)&&!t&&(!(n.l&1<<23)||e.l&1024))){let r=ft(e);if(i&&Qe.over&&Jt(Qe.over)===r&&!t)return!1;if(!(!i&&r===xt&&!t||Ea(n,r)))return jc(n,r),(i||t)&&_r(n,e),!0}return gu(n,e),!1}function Ea(n,e){return(n.m&4||n.l&1048576)&&n.l&256&&ft(n)===e}function sd(n,e,t){for(let i=n.C;i!==null;i=i===t?null:i.G)if(e(i.S))return 1}var _u;function Kh(n,e){return e.ue!==Re&&n.l&32768&&!sd(n,t=>t===e)}function yu(n){return n!==null&&n.Qe?n.Ke:n}function E0(n){Nc(n);let e=Pt(n);e.Le=n.ke,e.me=n.pe,n.ke=null,n.pe=null,n.be=0}function od(n,e,t,i,r){let s=r?.transparent??!1,o={id:Qo(r,s,rt),l:i<<23|(s?4:0)|(r?.ownedWrite?1:0)|(r?.sync?64:0)|(r?.xe??0)|(Sr&&rd(rt)?8:0),ye:!1,ke:null,A:rt?.A??Vs,be:0,X:n,le:void 0,he:0,ve:void 0,We:null,C:null,_:null,de:0,o:null,Ze:null,_parent:rt,Ge:null,Me:null,pe:null,R:512,m:4,ie:Et,ue:Re,we:-1,Ie:!1,Ae:!1,ge:void 0,qe:e,Je:t,ze:void 0,i,T:null};return r?.unobserved&&(Pt(o).Ye=r.unobserved),cd(o,T0),o}var ad=null;function ld(n){ad=n}function hu(n){return n.i?ad:null}var T0={lazy:!0};function cd(n,e){n.We=n;let t=rt?.Qe?rt.Ke:rt;rt&&Jo(rt,n),t&&(n.he=t.he+1),Rh?.(n),!e?.lazy&&dn(n,!0),Sr&&!e?.lazy&&!(n.m&1)&&!(n.l&2)&&Mu(n,n.le)}function gi(n,e){let t={ye:e?.equals??as,l:(e?.ownedWrite?1:0)|(e?.ae?2:0),le:n,o:null,Ze:null,ie:Et,ue:Re,we:-1,T:null};return e?.unobserved&&(Pt(t).Ye=e.unobserved),Sr&&!(t.l&2)&&Mu(t,n),t}function as(n,e){return n===e}var Ma=null;function mn(n,e){let t=Kt;Kt=!1;try{return Yc?Yc(n):n()}finally{Kt=t}}var vu=0;function Ta(n){vu++;try{mn(n)}finally{vu--}}var ud=!1;function A0(n,e){if(n.R&512)n.R&=-513,dn(n,!0);else if(n.R&64&&n.l&32){let t=n._parent;if(t!==null){if(t.R&64){n.l&=-33;return}n.R&32||Jo(t,n)}dn(n,!0)}}function w0(n,e){return!e||n.ue===Re||e.l&16}var uo=!1;function Vh(){uo=!0}function R0(n){return it.Y||n.ue===Re||n.l&4194304?Re:n.l&256?n.T.Be===Et?n.T.je:Re:n.le}function C0(n){let e=n.T;e.Be!==Et&&(ia&&Fh.push(n),e.je=n.ue,e.Be=Et,uo=!0)}var ya=[];function I0(n){return n.R|=4096,!0}function Gh(){if(uo=!1,ya.length!==0){for(let n of ya)n.l&=-4194305;ya.length=0}}function P0(n,e){n.he>=bt.Fe||n.R&1?(yr(e),Wh(bt),xu(n)):e.l&65536&&xu(n);let t=n.he;n._parent===e?n.R|=8388608:t>=e.he&&no(e,e.he=t+1)}function D0(n,e,t){return Qe===null&&n.m&t.m&4&&e.ue!==Re&&!(e.l&2097408)&&!n.i&&(n.R&4096||n.ue===Re&&n.T?.$e!==Et&&(!(n.m&1)||n.T?.se?.delete(t.T.U.source))&&(Pt(n).$e=Et,n.R|=4096))}function Mr(n){let e=rt;if(e?.Qe&&(e=e.Ke),Ma!==null)return Ma(n,e);if(typeof n.X=="function"&&A0(n),!n.X&&n.T?.De===void 0&&!Sr&&(!uo||n.ue===Re)&&!(n.l&2048))return e&&(et&&(_u=Kt&&Kh(e,n)),Kt&&vr(n,e),n.l&256&&!(e.l&16)&&Zh(e,n))||!e||n.ue===Re||e.l&16||n.ue===n.le&&Object.is(n.ue,n.le)||(Ft&&e.l&32768||et&&Qe?.folded)&&dd(e,n)?n.le:(hd(e),n.ue);let t=!1,i;if(e){if(et&&(_u=Kt&&Kh(e,n)),Kt&&(i=vr(n,e),n.X)){if(P0(n,e),Ft&&(e.m&4?e.l&256||xt:e.l&1048576)&&(e.i===1&&n.l&32768&&!(n.m&5)&&(e.R|=1048576),(n.l&1619034112)===32768&&!(e.l&536870912))){let s=Jt(e.l&256?ft(e):xt),o=Pt(n);o.Dt!==s&&(o.Dt=s,dn(n))}Ft&&!e.i&&(e.R|=n.l&32768&(n.m&1&&(e.l&128||e.m&4)?e.l:-1))}n.l&256&&!(n.l&2048)&&!(e.l&16)&&(n.m&4?gu(e,n):t=Zh(e,n))}if(kc&&n.l&2048){let s=kc(e,n);if(s!==Re)return s}if(Sr&&e&&e.l&8){let s=n.T?.De;if(s!==void 0&&!(n.m&2)){let o=s===Pc?void 0:s;return(n.ue!==Re?n.ue:n.le)!==o&&(e.R|=256),o}}if(et&&n.m&1&&!t&&!(n.l&2048)&&!(n.m&4)&&(e!==null&&e.l&32768&&!(e.l&16777216&&e.m&4)?t=Ft(e,n):Qe!==null&&(!(e?.m&4)||N0(e))&&(t=_r(e,n,!0))),n.m&1&&!t){if(e){if(!(e.l&16)||n.m&4){if(Ft&&D0(e,n,n))return n.ue;throw!Kt&&!ud&&n!==e&&vr(n,e),n.T?.U}}else if(n.m&4)throw n.T?.U}if(n.X&&n.m&2){if(i&&n.ie<Et&&!(n.R&32))return dn(n),Mr(n);throw!t&&n.l&2097152&&Jh(n,e),n.T?.U}(t||!e)&&fd(n);let r=Jh(n,t?null:e);return!e&&typeof n.X=="function"&&n.l&32&&!(n.m&1)&&!n.o&&(io.add(n),Rt()),r}function N0(n){let e=n._parent;return Qe._parent?.Pe!==Qe&&e?.X&&!(e.m&4|e.l&8388608)}function fd(n){if(n.T?.Te)throw n.T.Te}function Jh(n,e){if(n.ue!==Re&&n.m&4&&(!e||ud||e.l&16)){if(vu>0){let i=yu(rt);if(i&&n.l&256&&Ea(i,ft(n)))return n.ue}throw new wt(null)}let t=e&&uo?R0(n):Re;if(t!==Re)return I0(e),t;if(w0(n,e)||Ft&&e.l&32768&&!(n.m&4)&&dd(e,n)&&!fd(n))return n.le;if(hd(e,n),n.l&2097152)throw n.ue;return n.ue}function hd(n,e){e?.m&4||(_r&&Qe!==null&&_r(n,null),n.R|=16384,na&&(Qe!==null||n.i&&n.l&32768)&&oa.push(n))}function dd(n,e){return xt===null||Ea(n,xt)||(e?.l&2304)===256||Ft&&qc(n,e)?!1:(et&&e&&_u&&Qe&&n.R>>24!=1&&(Qe.Gt=1),jc(n,xt),!0)}function L0(n){it.Y||n.l&4194304||(n.l|=4194304,ya.push(n))}function O0(n,e){n.l&2||n.X!==void 0||n.T?.De!==void 0||Mu(n,e)}function Mu(n,e){Pt(n).De=e===void 0?Pc:e,n.l|=512,M0.add(n)}var jh=null;function to(n,e,t){if(n.ye===as)return e===t;try{return n.ye&&n.ye(e,t)}catch(i){if(!(i instanceof wt))return zi(n,2,i),!0}}function zn(n,e){jh!==null&&jh(n);let t=n.ue===Re?n.le:n.ue;if(typeof e=="function"&&(e=e(t)),Vc&&n.l&2048)return Vc(n,e);n.l&256&&Rn(ft(n));let i=Ft?n.ye!==as:null;if(!(!!(n.m&4)||!!n.T?.Te||(i===!1?t!==e:!to(n,t,e))))return e;Sr&&O0(n,t);let s=n.ue!==Re;return s?n.l&256&&!it.Y&&C0(n):js(n),n.ue=i&&s&&!(n.m&4||n.T?.Te)&&to(n,n.le,e)?n.le:e,rt!==null&&L0(n),n.X!==void 0&&(n.ie=Et),s&&n.we===Qs||(eo(n),Rt()),e}function pd(n,e){let t=n.l&256&&!(n.R&1024)&&ft(n)!==xt;if(t&&typeof e=="function"){let i=e(n.le);e=()=>i}return n.m&2&&(n.T.Te=n.T.U,zi(n,0)),e=zn(n,e),n.l&=-2097153,t?(n.R=n.R&-2|2,xa(n,bt),Rt()):n.ue!==Re&&(n.R|=1024),e}function Wt(n,e){let t=rt,i=Kt;rt=n,Kt=!1;try{return e()}finally{rt=t,Kt=i}}var Eu=null;function wu(n,e,t,i){let r=!!i?.user,s=od(n,e,t,r?2:1,i);dn(s,!0),i?.defer?aa(s):s.ue===Re&&(s.T?.Re?.P||s.i===2||i?.schedule?it.enqueue(s.i,Au.bind(null,s),s.T?.Re):Au(s,0))}function U0(){let n=this.m,e=this.T?.U;if(n&2){if(it.notify(this,1,0),this.i===2){this.m&2&&Qc(this);return}Tu(this,zs(e))}else this.i===2?n&1&&this.Ae&&!e?.source?.T?.Ve&&(Pt(this).fe=!(this.Ae=!1)):this.i===1&&it.notify(this,3,n,e)}function Tu(n,e,t){if(!it.notify(n,2,2))throw pa(e),e}function Au(n,e){if(!n.Ae||n.R&64||e&&Gc?.(n)||e&&wh?.(n))return;if(n.m&2&&n.i===2){let r=zs(n.T?.U);n.ge=n.le,n.Ae=!1;try{n.Je?n.Je(r,()=>{let s=n.ze;n.ze=void 0,s?.()}):console.error(r)}catch(s){Tu(n,s)}return}let t=n.T?.U==null,i=n.ze;n.ze=void 0;try{i?.();let r=n.qe(n.le,n.ge);n.ze=r}catch(r){Pt(n).U=new Zn(n,r),n.m|=2,Tu(n,r)}finally{n.ge=n.le,n.Ae=!1,t&&jn(n)}}jt.q=Au;ld(U0);var F0,md=new WeakSet;function B0(n){for(let e=n;e;e=e._parent){let t=e[da];if(t!==void 0)return t}return F0}function xd(n){let e=[];for(let t=n;t;t=t._parent){let i=t._name;typeof i=="string"&&i.length&&e.push(i)}return e.length?e.reverse():void 0}function gd(n,e,t){if(n!==null&&(typeof n=="object"||typeof n=="function")){if(md.has(n))return;md.add(n)}let r=B0(e);if(r===void 0)return;let s={},o=xd(e),a=xd(t)??o;a!==void 0&&(s.ownerPath=a),o!==void 0&&(s.boundaryPath=o);try{r(n,s)}catch(c){console.error(c)}}var Aa=Symbol(0);var Hi=Symbol(0),sn=Symbol(0),Er=Symbol(0);var dM=Object.prototype;function _d(n){return Reflect.ownKeys(n).filter(e=>Object.prototype.propertyIsEnumerable.call(n,e))}var yd=null;function Tr(n){return Qr(n)}function Vn(n){let e=Mr.bind(null,n);return e[mh]=n,e}function Ru(n,e){if(typeof n=="function"){let i=In(n,e);return i.l&=-33,[Vn(i),pd.bind(null,i)]}let t=gi(n,e);return Eu!==null&&Eu(t),[Vn(t),zn.bind(null,t)]}function fo(n,e){return Vn(In(n,e))}function Cu(n,e,t){wu(n,e.effect||e,e.error,{user:!0,...t})}function Iu(n,e,t){wu(n,e,void 0,t)}function Ra(n,e,t){let i=typeof t?.keyed=="function"?t.keyed:void 0,r=e.length>1,s=e,o={H:Fn(),it:0,st:n,ot:[],ft:s,ht:[],ln:[],Xe:i,ct:i||t?.keyed===!1?[]:void 0,lt:r&&t?.keyed!==!1?[]:void 0,ut:t?.keyed===!1,L:t?.fallback},a=In(H0.bind(o),void 0);return a.l&=-33,Vn(a)}var wa={ownedWrite:!0};function k0(n,e,t,i){let r=n.ot,s=n.it-1,o=[],a=[],c=[],l=256,u=i,h=i;for(;u<=s&&h<=t-1;){let d=r[u],p=e[h];if(d===p){let f=u;do h++;while(++u<=s&&h<t&&r[u]===e[h]);c.push(f,h-u+f,u-f);continue}let x=-1,g=Math.min(32-o.length,s-u,l);for(let f=1;f<=g;f++)if(r[u+f]===p){x=f;break}l-=x===-1?g:x;let m=-1;g=Math.min(32-a.length,t-1-h,l);for(let f=1;f<=g;f++)if(e[h+f]===d){m=f;break}if(l-=m===-1?g:m,x!==-1&&(m===-1||x<=m)){for(;x-- >0;)o.push(u++);continue}if(m!==-1){for(;m-- >0;)a.push(h++);continue}if(l<=0||o.length===32||a.length===32)return!1;o.push(u++),a.push(h++)}for(;u<=s;u++){if(o.length===32)return!1;o.push(u)}for(;h<=t-1;h++){if(a.length===32)return!1;a.push(h)}return z0(n,e,t,i,o,a,c)}function z0(n,e,t,i,r,s,o){let a=n.ot,c,l,u;if(s.length!==0)for(u=new Array(r.length),l=0;l<s.length;l++){let g=-1;for(c=0;c<r.length;c++)if(!u[c]&&a[r[c]]===e[s[l]]){g=c;break}if(g===-1)return!1;u[g]=!0,s[l]=s[l]<<6|g}for(c=0;c<r.length;c++){let g=a[r[c]];if(g===void 0)return!1;for(l=i-1;(l=a.indexOf(g,l+1))!==-1;)if(!r.includes(l))return!1}let h=n.ht,d=n.ln,p=h.slice(0,t),x=d.slice(0,t);for(let g=0;g<o.length;g+=3){let m=o[g],f=o[g+1];if(m!==f)for(let A=0;A<o[g+2];A++)p[f+A]=h[m+A],x[f+A]=d[m+A]}for(l=0;l<s.length;l++){let g=s[l]>>6,m=r[s[l]&63];p[g]=h[m],x[g]=d[m]}for(n.ht=p,n.ln=x,n.it=t,n.ot=e,c=0;c<r.length;c++)(u===void 0||!u[c])&&d[r[c]].dispose();return!0}function V0(n,e,t,i,r,s,o,a,c){let l=n.Xe,u=n.ot,h=n.ln,d=[],p=t;for(let x=t;x<=r;p++,x++){let g=l?l(e[x]):e[x];for(;p<=i&&(l?l(u[p]):u[p])!==g;)d.push(h[p++]);if(p>i)return o.fill(void 0),null;s[x]=n.ht[p],o[x-t]=h[p],a&&(a[x-t]=n.ct[p]),c&&(c[x-t]=n.lt[p])}for(;p<=i;p++)d.push(h[p]);return d}function G0(n,e,t,i,r,s,o,a,c){let l=n.ln,u=n.ct,h=n.lt,d=n.it,p=t-d,x,g;if(p>0)for(l.length=t,u&&(u.length=t),h&&(h.length=t),x=d-1,g=t-1;x>r;x--,g--)l[g]=l[x],u&&(u[g]=u[x]),h&&(h[g]=h[x]);else if(p<0){for(x=r+1,g=s+1;x<d;x++,g++)l[g]=l[x],u&&(u[g]=u[x]),h&&(h[g]=h[x]);l.length=t,u&&(u.length=t),h&&(h.length=t)}for(g=i;g<=s;g++)l[g]=o[g-i],u&&Pu(u[g]=a[g-i],e[g]),h&&zn(h[g]=c[g-i],g);for(g=s+1;g<t;g++)u&&Pu(u[g],e[g]),h&&p!==0&&zn(h[g],g)}var Pu=(n,e)=>n.le===e&&n.ue===Re||zn(n,e);function H0(){this.H.Ke=hn();let n=this.st()||[];n[Aa],n=yd?.(n[Hi])??n;let e=n.length;return Wt(this.H,W0.bind(this,n,e)),this.ht}function W0(n,e){let t=n.slice(0),i,r,s,o,a,c=this.ct?this.ut?()=>(o[s]=gi(t[r],wa),this.ft(Vn(o[s]),r)):()=>(o[s]=gi(t[r],wa),a&&(a[s]=gi(r,wa)),this.ft(Vn(o[s]),a?Vn(a[s]):void 0)):this.lt?()=>{let l=t[r];return a[s]=gi(r,wa),this.ft(l,Vn(a[s]))}:()=>{let l=t[r];return this.ft(l)};if(e===0)this.it!==0&&(this.H.dispose(!1),this.ln=[],this.ot=[],this.ht=[],this.it=0,this.ct&&(this.ct=[]),this.lt&&(this.lt=[])),this.L&&!this.ht.length&&(this.ln[0]?.dispose(),this.ht[0]=Wt(this.ln[0]=Fn(),this.L));else if(this.it===0){let l=new Array(e),u=new Array(e);o=this.ct&&new Array(e),a=this.lt&&new Array(e);try{for(r=0;r<e;r++)s=r,l[r]=Wt(u[r]=Fn(),c)}catch(h){for(i=0;i<=r;i++)u[i]?.dispose();throw h}this.ln[0]&&this.ln[0].dispose(),this.ht=l,this.ln=u,o&&(this.ct=o),a&&(this.lt=a),this.ot=t,this.it=e}else{let l,u,h,d,p,x,g,m,f,A;for(l=0,u=Math.min(this.it,e);l<u&&(this.ot[l]===t[l]||this.ct&&vd(this.Xe,this.ot[l],t[l]));l++)this.ct&&Pu(this.ct[l],t[l]);for(u=this.it-1,h=e-1;u>=l&&h>=l&&(this.ot[u]===t[h]||this.ct&&vd(this.Xe,this.ot[u],t[h]));u--,h--);if(l===e&&this.it===e){this.ot=t;return}if(e<=this.it&&u-l>64&&this.ct===void 0&&this.lt===void 0){let O=l+(h-l>>1),S=t[O],v=Math.min(u,O+32),C=Math.max(l,O-32);for(;C<=v&&this.ot[C]!==S;)C++;if(C<=v&&k0(this,t,e,l))return}let _=e-this.it,E=h-l+1,T=new Array(e),M=new Array(E);o=this.ct?new Array(E):void 0,a=this.lt?new Array(E):void 0;let R=_<0?V0(this,t,l,u,h,T,M,o,a):null;if(R!==null)R.length!==0&&(m=R);else{for(x=new Map,g=new Array(E),r=h;r>=l;r--)d=t[r],p=this.Xe?this.Xe(d):d,i=x.get(p),g[r-l]=i===void 0?-1:i,x.set(p,r);for(i=l;i<=u;i++)d=this.ot[i],p=this.Xe?this.Xe(d):d,r=x.get(p),r!==void 0&&r!==-1?(T[r]=this.ht[i],M[r-l]=this.ln[i],o&&(o[r-l]=this.ct[i]),a&&(a[r-l]=this.lt[i]),r=g[r-l],x.set(p,r)):(m??=[]).push(this.ln[i]);try{for(r=l;r<=h;r++)M[r-l]===void 0&&((f??=[]).push(M[r-l]=Fn()),s=r-l,T[r]=Wt(M[r-l],c))}catch(O){if(f)for(i=0;i<f.length;i++)f[i].dispose();throw O}}for(i=0;i<l;i++)T[i]=this.ht[i];for(r=h+1;r<e;r++)T[r]=this.ht[r-_];if(G0(this,t,e,l,u,h,M,o,a),this.ht=T,this.it=e,this.ot=t,m)for(i=0;i<m.length;i++)m[i].dispose()}}function vd(n,e,t){return n?n(e)===n(t):!0}function Ar(n,e){if(typeof n=="function"&&!n.length){if(e?.doNotUnwrap)return n;do n=n();while(typeof n=="function"&&!n.length)}if(!(e?.skipNonRendered&&(n==null||n===!0||n===!1||n===""))){if(Array.isArray(n)){let t=[];return Du(n,t,e)?()=>{let i=[];return Du(t,i,{...e,doNotUnwrap:!1}),i}:t}return n}}function Du(n,e=[],t){let i=null,r=!1;for(let s=0;s<n.length;s++)try{let o=n[s];if(typeof o=="function"&&!o.length){if(t?.doNotUnwrap){e.push(o),r=!0;continue}do o=o();while(typeof o=="function"&&!o.length)}Array.isArray(o)?r=Du(o,e,t)||r:t?.skipNonRendered&&(o==null||o===!0||o===!1||o==="")||e.push(o)}catch(o){if(!(o instanceof wt))throw o;i=o}if(i)throw i;return r}var Lu=Symbol(""),bd=Symbol(""),Qt=null;var Rr=new Set,ls=n=>n.A[Lu],Ou=n=>!!n&&(n.i===2&&n.L||Ou(n._parent)),Wi=n=>n.i===2||!n.D||n.h||Ou(n._parent),Md=n=>!!n&&(n.i&1?Wi(n):Md(n._parent)),Ed=(n,e)=>n.i|1|(Ou(n._parent)&&e.A?.[Lu]===n?2:0);function Cr(n,e,t=e){n.F.set(e,t),Rr.add(n)}function Ca(n,e,t,i=e){if(n.i===2){let r=et?Qe??(e.T?.Re?.P?ft(e):null):null;et&&!n.L&&(n.P=r),t??=e.T?.U,i=t?.source??e,i.R&64&&(i=e);let s=zs(t);et&&r&&et(n.U,r,!0,!1),zn(n.U,s),gd(s,n.H,i)}else n.D=!1;Cr(n,e,i),n.h&&Nu(n),n.L||ho(n),Qt&&n.v!==null&&Qt.V(n.v)}function Nu(n){n.D=!1,n.P=n.B;let e=n.j;!n.P&&e.l&256&&ft(e)!==xt&&ha(e),et&&n.P!==null&&n.j!==null&&et(n.j,n.P,!0,!1)}function ho(n){n.j!==null&&!(n.j.R&96)&&(Cn(n.j),Rt())}function Sd(n,e,t){if(e===0){if(Rr.size)for(let i=ls(n);i;i=i._parent)!(i.F.get(n)?.m&Ed(i,n))&&i.F.delete(n)&&!Fu(i,0)&&(i.L&&ho(i),Qt&&i.v!==null&&Qt.V(i.v));return!1}for(let i=ls(n);i;i=i._parent){if(!(i.i&e)){i.L&&i.i>e&&Cr(i,n);continue}if(Wi(i))return Ca(i,n,t),i.h?2:!0;Cr(i,n)}return!1}function X0(n){for(let e=ls(n);e;e=e._parent)if(e.i&1&&Wi(e))return e.h}function Uu(n,e){for(let r=ls(n);r;r=r._parent)if(r.L)return r;let t,i=n.o;if(e||n.l&16384)for(e||=new Set,t=n.i!=1;i&&(t=e.size==e.add(i.u).size||Uu(i.u,e));)i=i.t;return t}function q0(n){let e=Uu(n);return e===void 0||e.j.l&(et?2304:256)?!1:((e.M??=new Set).add(n),!0)}function Y0(n){if(n.M!==null){for(let e of n.M){let t=e.i;it.enqueue(t===3?2:t,t===3?e.Z:e.W??=jt.q.bind(null,e))}n.M=null}}function $0(n,e,t){if(!(t.m&3||e.m&2)){for(let i=ls(e);i&&i!==n;i=i._parent)if(i.i&1&&Wi(i))return!(i.j.l&256)}return!1}function Td(n,e,t){for(let i=n.C,r;i;i=i.G)if((r=i.S)===e||(t||=new Set).size<t.add(r).size&&Td(r,e,t))return 1}function Fu(n,e){let t=n.i|1;for(let[i,r]of n.F){if(!((i.R|r.R)&64)){let s=Ed(n,i);if((i.m&s||r.m&s&&Td(i,r))&&!(t&2&&$0(n,i,r))||t&2&&r.l&2097152||i.l&32768&&i.R&8){if(e===0)break;continue}if((r!==n.K||n.h)&&(r.l&2304)===256){if(!e||!n.D)continue;Rn(ft(r))}}n.F.delete(i)}return n.F.size}function Z0(){for(let n of Rr){let e=n.j.R;if(e&64){Rr.delete(n);continue}if(e&32)continue;if(!n.D){for(let[i]of n.F)for(let r of i.m&1?i.T?.se||[]:[i])if(!(r.l&256))for(let s=r.C;s;s=s.G){let o=s.S;o.l&256&&(r===i||!ft(o).tt)&&Cr(n,o)}}Fu(n);let t=n.j;n.i&1&&!n.D&&t.l&256&&[...n.F].every(([,i])=>!(i.m&1)&&i.l&256&&ft(i)===ft(t))&&(n.F.clear(),n.D=!0),n.h=!1,n.F.size===0&&(Rr.delete(n),n.L&&ho(n),Qt&&n.v!==null&&Qt.V(n.v))}}function K0(n){if(!n.D){n.L&&n.P===null&&n.B===null&&Qe!==null&&(n.B=Qe,Nu(n),ho(n));return}n.h=!0,n.j.l&=-8388609;let e=Qe;e===null&&it.Y&&hn().l&32768&&(Rn(null),e=jt.J(xt)),n.B=e,Rr.add(n);let t=n.F.size;Kc(n.H,xt,i=>Cr(n,i));for(let[i]of n.F)if(n.F.size!==t||i.m&1&&!(i.R&64)){for(let r=n._parent;r!==null;r=r._parent)if(r.i&1)for(let[s]of n.F)r.F.delete(s);Nu(n),ho(n);return}}function J0(n,e,t,i){let r=Fn(),s={i:n,_parent:ls(r)??null,H:r,K:null,j:null,F:new Map,D:n===2,h:!1,B:null,P:null,L:!1,M:null,v:null,$:!1,ee:!1,U:n===2?gi(void 0,j0):null,ne:t,re:null},o=n===1?r.A[bd]:null;if(hn()&&Qr(()=>{Rr.delete(s),Qt&&o&&Qt.oe(o,s)}),i){let u=!1;Wt(r,()=>In(()=>{try{let h=i()}catch(h){if(!(h instanceof wt)){if(!it.notify(hn(),2,2,h))throw pa(h),h;return}}u?K0(s):u=!0})).l|=16384}let a={...r.A,[Lu]:s};Qt!==null&&(a[bd]=null),r.A=a;let c=Wt(r,()=>{let u=In(e);return In(()=>Ar(Mr(u)))});s.K=c,Qt&&o&&Qt.te(o,s);let l=In(()=>{let u=hn();if(et&&s.i===2&&(s.L&&u.l&2048&&(s.P??=ft(u)),s.P!==null&&(pi(s.P),u.R|=131072,s.P=null)),!s.h&&!(u.l&256)&&(u.l|=8388608),s.$&&(vr(c,u),Qt&&s.v!==null&&Qt.V(s.v),s.$)){if(s.ee){s.L=!0;return}return wr(s)}let h=et&&!s.D&&u.l&256&&u.le!==s.re?.le,d=c.m&3;if(d!==0){if(vr(c,u),d&n){if(Wi(s))return Ca(s,c,void 0),wr(s);Cr(s,c)}if(n===2&&s.L&&!Md(s))return wr(s);throw c.T.U}if(Wi(s)&&(s.F.size!==0&&u.m&4&&!(u.l&256)||Fu(s,!0)!==0&&!h))return wr(s);let p;try{p=Mr(c),s.U&&mn(()=>so(p))}catch(m){if(m instanceof wt?n===1:n===2){if(Wi(s))return Ca(s,c,m),wr(s);Cr(s,c)}throw m}if(Wi(s)&&(c.m&n&1&&Ca(s,c),s.F.size!==0))return h&&Qe?p:wr(s);s.D=!0,s.L&&Ks&&Ks(),s.L=!1;let x=s.re,g=()=>{!s.L&&s.re===x&&(x.m&2&&Rt(),Lc(x),s.re=null)};if(x!==null&&(s.j.le!==x.le?g():it.enqueue(1,g)),Y0(s),Qt&&s.v!==null){let m=s.v;s.v=null,Qt.V(m)}return p},{ae:!0});return l.l|=16384,c.l|=8388608,s.j=l,Vn(l)}function wr(n){let e=hn();n.P!==null&&(pi(n.P),e.R|=131072,n.P=null),!n.L&&Ks&&Ks(),n.L=!0,n.re===null&&(n.re=Wt(e._parent,()=>In(()=>n.ne(n),{id:e.id,lazy:1})));let t=Qe,i=e.R,r=Mr(n.re);return pi(t),e.R^=(e.R^i)&163840,r}var j0={ownedWrite:!0,ae:!0};function Bu(n,e,t){return J0(1,n,()=>e(),t?.on)}Ah(Sd,(n,e)=>!e&&(n.m&4?Sd(n,1):X0(n)),Uu,Z0,q0);function ku(){return!0}var xn=0,Ht=1,qi=2,Yi=3,Gn=4,Q0=Object.freeze({});function Xi(n,e){return e===Yi?(n=n())||Q0:n}var Qn=class{source;kind;hidden;table=0;keys=void 0;descs=void 0;constructor(e,t,i){this.source=e,this.kind=t,this.hidden=i}};function ei(n,e){let t=n.hidden;return typeof t=="function"?t(e):t.includes(e)}function Da(n){return Xi(n.source,n.kind)}function Na(n){return n[Er]}function zu(n,e){if(e===xn)return Object.keys(n);if(e===qi||n[sn]===n){let t=n[Hi];return(t?.px===n?t:Reflect).ownKeys(n)}return Object.keys(n)}function La(n,e){if(e===Ht){if(n.kind===Gn)return Nd(n.source,!1,n);let t=zu(Da(n),n.kind),i=[];for(let r=0;r<t.length;r++)ei(n,t[r])||i.push(t[r]);return i}return zu(Xi(n,e),e)}function Pr(n,e,t){return e===Ht?ei(n,t)?!1:n.kind===Gn?Pd(n.source,t):t in Da(n):t in Xi(n,e)}function mo(n,e,t){return e===Ht?ei(n,t)?void 0:n.kind===Gn?po(n.source,t):Da(n)[t]:Xi(n,e)[t]}function Gu(n,e){return e===xn?!0:e!==Ht?!1:n.kind===xn?!0:n.kind===Gn&&Hu(n.source)}function Hu(n){let e=n.sources,t=n.kinds;for(let i=0;i<e.length;i++)if(!Gu(e[i],t[i]))return!1;return!0}function Oa(n){if(!(sn in n))return!0;let e=Na(n);return e instanceof Ir?Hu(e):e!==void 0&&Gu(e,Ht)}function Ia(n,e=!0){return{configurable:!0,enumerable:e,get:n,set:ku}}function Wu(n,e,t,i=!1){if(e===Ht)return ei(n,t)?void 0:Wu(n.source,n.kind,t,i);if(e===Gn)return Dd(n,t);if(e===Yi)return i||t in Xi(n,e)?Ia(()=>Xi(n,e)[t]):void 0;if(e===qi)return Na(n)!==void 0?Reflect.getOwnPropertyDescriptor(n,t):i||t in n?Ia(()=>n[t]):void 0;let r=Reflect.getOwnPropertyDescriptor(n,t);if(r!==void 0)return r.get!==void 0||r.set!==void 0?Ia(()=>n[t],r.enumerable):r.configurable?r:{configurable:!0,enumerable:r.enumerable,writable:!0,value:r.value}}var Ir=class{sources;kinds;table=0;keys=void 0;descs=void 0;constructor(e,t){this.sources=e,this.kinds=t}};function Dr(n){return n&&sn in n?n[Er]:void 0}function Ua(n){if(!n||!(sn in n))return;let e=Na(n);return e instanceof Qn?ex(e):e===void 0?void 0:Fa(e)}function Fa(n){let e=n.table;if(typeof e!="object"){let t=n.sources,i=n.kinds;for(let r=0;r<t.length;r++)if(!Gu(t[r],i[r])){n.table=null;return}e=new Map,Xu(e,n,void 0),n.table=e}return e===null?void 0:e}function Xu(n,e,t){let i=e.sources,r=e.kinds;for(let s=0;s<i.length;s++){let o=i[s];if(r[s]===Ht){if(o.kind===Gn){t===void 0?t=[o]:t.push(o),Xu(n,o.source,t),t.pop();continue}let a=o.source,c=Reflect.ownKeys(a);for(let l=0;l<c.length;l++){let u=c[l];!ei(o,u)&&!Vu(t,u)&&Ad(n,u,a)}}else{let a=Reflect.ownKeys(o);for(let c=0;c<a.length;c++){let l=a[c];Vu(t,l)||Ad(n,l,o)}}}}function Vu(n,e){if(n!==void 0){for(let t=n.length-1;t>=0;t--)if(ei(n[t],e))return!0}return!1}function Ad(n,e,t){n.has(e)&&n.delete(e),n.set(e,t)}function ex(n){let e=n.table;if(typeof e!="object"){let t=n.source;if(n.kind===Gn){if(!Hu(t)){n.table=null;return}e=new Map,Xu(e,t,[n])}else if(n.kind===xn){e=new Map;let i=Reflect.ownKeys(t);for(let r=0;r<i.length;r++){let s=i[r];ei(n,s)||e.set(s,t)}}else{n.table=null;return}n.table=e}return e===null?void 0:e}var tx=Object.prototype.propertyIsEnumerable;function nx(n,e){let t=n.keys;if(t===void 0){t=n.keys=[];for(let[i,r]of e)tx.call(r,i)&&t.push(i)}return t}function Rd(n,e,t){let i=e.get(t);if(i===void 0)return;let r=n.descs;r===void 0&&(r=n.descs=new Map);let s=r.get(t);return s===void 0?(s=Wu(i,xn,t),s===void 0?void 0:(r.set(t,s),s)):s.get!==void 0?s:{configurable:!0,enumerable:s.enumerable,writable:s.writable,value:i[t]}}var Cd=16;function wd(n){let e=n.table;if(typeof e=="object")return e===null?void 0:e;if(e+1<Cd){n.table=e+1;return}return Fa(n)}function qu(n){let e=n.table;return typeof e=="object"&&e!==null?e:void 0}var Pa=Symbol();function Id(n,e){let t=qu(n);if(t!==void 0){let s=t.get(e);return s===void 0?Pa:s[e]}let i=n.sources,r=n.kinds;for(let s=i.length-1;s>=0;s--){let o=r[s];if(o===xn){let a=i[s];if(e in a)return a[e];continue}if(o===Ht){let a=i[s];if(ei(a,e))continue;if(a.kind===Gn){let l=Id(a.source,e);if(l!==Pa)return l;continue}let c=Da(a);if(e in c)return c[e]}else{let a=Xi(i[s],o);if(e in a)return a[e]}}return Pa}function po(n,e){let t=Id(n,e);return t===Pa?void 0:t}function Pd(n,e){let t=qu(n);if(t!==void 0)return t.has(e);let i=n.sources,r=n.kinds;for(let s=i.length-1;s>=0;s--)if(Pr(i[s],r[s],e))return!0;return!1}function Dd(n,e){let t=qu(n);if(t!==void 0)return Rd(n,t,e);let i=n.sources,r=n.kinds;for(let s=i.length-1;s>=0;s--)if(Pr(i[s],r[s],e))return Wu(i[s],r[s],e,!0)??Ia(()=>po(n,e))}function Nd(n,e,t){let i=[];return Ld(n,t===void 0?void 0:[t],e,i,null),i}function Ld(n,e,t,i,r){let s=n.sources,o=n.kinds;for(let a=0;a<s.length;a++){let c=s[a],l=o[a],u;if(l===Ht){if(c.kind===Gn){e===void 0?e=[c]:e.push(c),Ld(c.source,e,t,i,r),e.pop();continue}u=c,l=c.kind,c=c.source}c=Xi(c,l);let h=t?_d(c):zu(c,l);for(let d=0;d<h.length;d++){let p=h[d];u!==void 0&&ei(u,p)||Vu(e,p)||ix(i,r,p,c)}}}function ix(n,e,t,i){let r=n.indexOf(t);r!==-1&&(n.splice(r,1),e!==null&&e.splice(r,1)),n.push(t),e!==null&&e.push(i)}function rx(n,e){let t=Fa(n);if(t===void 0)return Nd(n,!0,e);let i=nx(n,t);if(e===void 0)return i;let r=[];for(let s=0;s<i.length;s++)ei(e,i[s])||r.push(i[s]);return r}var sx={get(n,e,t){if(typeof e=="symbol"){if(e===sn)return t;if(e===Er)return n;if(e===Hi)return}let i=n.table,r;if(typeof i!="object"){if(i+1<Cd){n.table=i+1;let o=n.sources,a=n.kinds;for(let c=o.length-1;c>=0;c--){if(a[c]!==xn)return po(n,e);let l=o[c][e];if(l!==void 0||e in o[c])return l}return}if(r=Fa(n),r===void 0)return po(n,e)}else{if(i===null)return po(n,e);r=i}let s=r.get(e);return s===void 0?void 0:s[e]},has(n,e){if(e===sn)return!0;if(e===Hi||e===Er)return!1;let t=wd(n);return t!==void 0?t.has(e):Pd(n,e)},set:ku,deleteProperty:ku,getOwnPropertyDescriptor(n,e){if(e===sn||e===Hi||e===Er)return;let t=wd(n);return t!==void 0?Rd(n,t,e):Dd(n,e)},ownKeys(n){return rx(n)}};function Ba(...n){if(n.length===1&&typeof n[0]!="function")return n[0];let e=new Array(n.length),t=new Array(n.length),i=0,r,s=0;for(let h=0;h<n.length;h++){let d=n[h];if(d){if(s++,r=d,typeof d=="function"){e[i]=fo(d),t[i++]=Yi;continue}if(sn in d){let p=Na(d);if(p instanceof Ir)for(let x=0;x<p.sources.length;x++)e[i]=p.sources[x],t[i++]=p.kinds[x];else p!==void 0?(e[i]=p,t[i++]=Ht):(e[i]=d,t[i++]=qi);continue}e[i]=d,t[i++]=xn}}if(i!==e.length&&(e.length=i,t.length=i),ph)return s===1&&typeof r!="function"?r:new Proxy(new Ir(e,t),sx);let o=Object.create(null),a=!1,c=e.length-1;for(let h=c;h>=0;h--){let d=e[h];if(!d){h===c&&c--;continue}let p=Object.getOwnPropertyNames(d);for(let x=p.length-1;x>=0;x--){let g=p[x];if(!(g==="__proto__"||g==="constructor")&&!o[g]){a=a||h!==c;let m=Object.getOwnPropertyDescriptor(d,g);o[g]=m.get?{enumerable:!0,configurable:!0,get:m.get.bind(d)}:m}}}if(!a)return e[c];let l={},u=Object.keys(o);for(let h=u.length-1;h>=0;h--){let d=u[h],p=o[d];p.get?Object.defineProperty(l,d,p):l[d]=p.value}return l}var Ux={hydrating:!1,registry:void 0,done:!1};var Fx;var Bx,kx;var ka=(...n)=>(Fx||fo)(...n),Pn=Ru;var Fd=ea,Bd=Iu,kd=(...n)=>(Bx||Cu)(...n);var zx=(n,e,t)=>(kx||Bu)(n,e,t);function zd(n,e,t,i){return mn(()=>n(e||{}))}function za(n){let e="fallback"in n?{keyed:n.keyed,fallback:()=>n.fallback}:{keyed:n.keyed},t=hn(),i,r=()=>Wt(t,()=>Ra(()=>n.each,n.children,e));return Ux.hydrating&&(i=r()),()=>(i??(i=r()))()}function Vd(n){let e="on"in n?{on:()=>n.on}:void 0;return zx(()=>n.children,()=>n.fallback,e)}var Vx={transparent:!0,sync:!0},Gx={sync:!0},xo=(n,e,t)=>Bd(n,e,t?{sync:!0,...t,transparent:!t.scope}:Vx),Hx=n=>ka(()=>n(),Gx),Va=(n,e)=>n,Gd={};function Hd({createElement:n,createTextNode:e,createSentinel:t=()=>e(""),isTextNode:i,replaceText:r,insertNode:s,removeNode:o,cleanupNodes:a,setProperty:c,getParentNode:l,getFirstChild:u,getNextSibling:h}){function d(P,I,U,L,V){let q=V&&V.onUpdate,Q=V;if(q){let{onUpdate:ge,...Oe}=V;Q=Oe}Q=Va(Q);let ne=U!==void 0;if(ne&&!L&&(L=[]),typeof I!="function"&&(I=x(I,ne,!0),typeof I!="function")){p(P,I,L,U),q&&q(I);return}if(ne&&L.length===0){let ge=t();s(P,ge,U),L=[ge]}let de=L;xo(ge=>{let Oe=x(I(),ne,!0);return typeof Oe!="function"?Oe:(xo(()=>x(Oe,ne),$=>{p(P,$,de,U),de=$,q&&q(de)},ge!==void 0&&!(V&&V.schedule)?{...Q,schedule:!0}:Q),Gd)},ge=>{ge!==Gd&&(p(P,ge,de,U),de=ge,q&&q(de))},Q)}function p(P,I,U,L){if(I===U)return;let V=typeof I,q=L!==void 0;if(V==="string"||V==="number"){let Q=typeof U;Q==="string"||Q==="number"?r(u(P),I):m(P,U,L,e(I))}else I==null?m(P,U,L):Array.isArray(I)?I.length===0?m(P,U,L):Array.isArray(U)?U.length===0?f(P,I,L):g(P,U,I):U==null?f(P,I):g(P,q&&U||[u(P)],I):Array.isArray(U)?m(P,U,q?L:null,I):U==null||!u(P)?s(P,I):A(P,I,u(P))}function x(P,I,U){if(P=Ar(P,{skipNonRendered:!0,doNotUnwrap:U}),U&&typeof P=="function")return P;if(I&&!Array.isArray(P)?P=[P??""]:I&&!P.length&&(P=[t()]),Array.isArray(P))for(let L=0,V=P.length;L<V;L++){let q=P[L],Q=typeof q;(Q==="string"||Q==="number")&&(P[L]=e(q))}return P}function g(P,I,U){let L=U.length,V=I.length,q=L,Q=0,ne=0,de=h(I[V-1]),ge=null,Oe=$=>$&&l($)===P;for(;Q<V||ne<q;){if(I[Q]===U[ne]&&Oe(I[Q])){Q++,ne++;continue}for(;I[V-1]===U[q-1]&&Oe(I[V-1]);)V--,q--;if(V===Q){let $=q<L?ne?h(U[ne-1]):U[q-ne]:de;for(;ne<q;)s(P,U[ne++],$)}else if(q===ne)for(;Q<V;)(!ge||!ge.has(I[Q]))&&o(P,I[Q]),Q++;else if(I[Q]===U[q-1]&&U[ne]===I[V-1]){let $=I[Q];do if(s(P,I[--V],$),ne++,Q>=V-1||ne>=q)break;while(I[Q]===U[q-1]&&U[ne]===I[V-1])}else{if(!ge){ge=new Map;let J=ne;for(;J<q;)ge.set(U[J],J++)}let $=ge.get(I[Q]);if($!=null)if(ne<$&&$<q){let J=Q,me=1,Be;for(;++J<V&&J<q&&!((Be=ge.get(I[J]))==null||Be!==$+me);)me++;if(me>$-ne){let Se=I[Q];for(;ne<$;)s(P,U[ne++],Se)}else A(P,U[ne++],I[Q++])}else Q++;else o(P,I[Q++])}}}function m(P,I,U,L){if(U===void 0){let V;for(;V=u(P);)o(P,V);return L&&s(P,L),""}if(I.length){let V=!1;for(let q=I.length-1;q>=0;q--){let Q=I[q];if(L!==Q){let ne=l(Q)===P;L&&!V&&!q?ne?A(P,L,Q):s(P,L,U):ne&&o(P,Q)}else V=!0}}else L&&s(P,L,U)}function f(P,I,U){for(let L=0,V=I.length;L<V;L++)s(P,I[L],U)}function A(P,I,U){s(P,I,U),o(P,U)}function _(P,I){if(Array.isArray(P))for(let U=0,L=P.length;U<L;U++)_(P[U],I);else P!=null&&typeof P!="string"&&typeof P!="number"&&I.push(P);return I}function E(P,I){let U=_(I,[]);if(!U.length&&(typeof I=="string"||typeof I=="number")){let L=u(P);L&&U.push(L)}return U}function T(P,I){for(let U=0,L=I.length;U<L;U++){let V=I[U];l(V)===P&&o(P,V)}}function M(P,I,U,L){let V={},q=ne=>{for(let de in V)de in ne||(de!=="ref"&&c(P,de,void 0,V[de]),delete V[de]);for(let de in ne){let ge=ne[de];ge!==V[de]&&(de==="ref"?(typeof ge=="function"||Array.isArray(ge))&&X(()=>ge,P):c(P,de,ge,V[de]),V[de]=ge)}},Q=()=>Va(L);if(Array.isArray(I))return U||d(P,()=>{for(let ne=I.length-1;ne>=0;ne--){let de=R(I[ne]);if(de!=null&&O(de,"children"))return S(de,"children")}},void 0,void 0,Q()),xo(()=>v({},I,void 0),q,Va(L)),V;if(!U)if(typeof I!="function"&&I!=null&&Oa(I)){let ne=Object.getOwnPropertyDescriptor(I,"children");ne!==void 0&&(ne.get===void 0?d(P,ne.value,void 0,void 0,Q()):d(P,()=>I.children,void 0,void 0,Q()))}else d(P,()=>{let ne=R(I);return ne!=null?S(ne,"children"):void 0},void 0,void 0,Q());return xo(()=>{let ne=R(I),de={},ge=Ua(ne);if(ge!==void 0){for(let[Oe,$]of ge)typeof Oe!="string"||Oe==="children"||(de[Oe]=$[Oe]);return de}if(ne!=null){let Oe=Dr(ne);Oe instanceof Qn?k(de,Oe,Ht):Oe!==void 0?v(de,Oe.sources,Oe.kinds):k(de,ne,sn in ne?qi:xn)}return de},q,Va(L)),V}function R(P){return typeof P=="function"?P():P}function O(P,I){let U=Dr(P);return U instanceof Qn?Pr(U,Ht,I):I in P}function S(P,I){let U=Dr(P);return U instanceof Qn?mo(U,Ht,I):P[I]}function v(P,I,U){let L=[],V=[];for(let q=0;q<I.length;q++)C(L,V,I[q],U!==void 0?U[q]:Yi);for(let q=0;q<L.length;q++)k(P,L[q],V[q],L,V,q+1);return P}function C(P,I,U,L){if(L!==Yi){P.push(U),I.push(L);return}if(U=R(U),U==null)return;let V=Dr(U);if(V instanceof Qn)P.push(V),I.push(Ht);else if(V!==void 0){let q=V.sources,Q=V.kinds;for(let ne=0;ne<q.length;ne++)C(P,I,q[ne],Q[ne])}else P.push(U),I.push(sn in U?qi:xn)}function k(P,I,U,L,V,q){let Q=La(I,U);e:for(let ne=0;ne<Q.length;ne++){let de=Q[ne];if(!(typeof de!="string"||de==="children")){if(L!==void 0){for(let ge=q;ge<L.length;ge++)if(Pr(L[ge],V[ge],de))continue e}P[de]=mo(I,U,de)}}return P}function W(P,I){Array.isArray(P)?P.flat(1/0).forEach(U=>U&&U(I)):P(I)}function X(P,I){let U=mn(P);Ta(()=>W(U,I))}return{render(P,I){let U,L=!1,V=[],q=a||T;try{Fd(Q=>{U=Q;let ne=P();d(I,()=>ne,void 0,void 0,{schedule:!0,onUpdate(ge){V=E(I,ge)}})}),Gt()}catch(Q){throw U&&U(),q(I,V),Q}return()=>{L||(L=!0,U(),q(I,V),V=[])}},insert:d,spread:M,createElement:n,createTextNode:e,insertNode:s,setProp(P,I,U,L){return c(P,I,U,L),U},mergeProps:Ba,effect:xo,memo:Hx,createComponent:zd,applyRef:W,ref:X}}var cp=0,Ef=1,up=2;var Tf=1,fp=2,oi=3,Ti=0,en=1,ai=2,li=0,Br=1,Af=2,wf=3,Rf=4,hp=5,tr=100,dp=101,pp=102,mp=103,xp=104,gp=200,_p=201,yp=202,vp=203,al=204,ll=205,bp=206,Sp=207,Mp=208,Ep=209,Tp=210,Ap=211,wp=212,Rp=213,Cp=214,Pl=0,Dl=1,Nl=2,kr=3,Ll=4,Ol=5,Ul=6,Fl=7,Cf=0,Ip=1,Pp=2,Ci=0,Dp=1,Np=2,Lp=3,Op=4,Up=5,Fp=6,Bp=7;var If=300,Wr=301,Xr=302,Bl=303,kl=304,Bo=306,cl=1e3,ni=1001,ul=1002,an=1003,kp=1004;var ko=1005;var bn=1006,zl=1007;var ar=1008;var ci=1009,Pf=1010,Df=1011,Cs=1012,Vl=1013,lr=1014,ui=1015,qr=1016,Gl=1017,Hl=1018,Is=1020,Nf=35902,Lf=35899,Of=1021,Uf=1022,Ln=1023,Ss=1026,Ps=1027,Ff=1028,Wl=1029,Xl=1030,ql=1031;var Yl=1033,zo=33776,Vo=33777,Go=33778,Ho=33779,$l=35840,Zl=35841,Kl=35842,Jl=35843,jl=36196,Ql=37492,ec=37496,tc=37808,nc=37809,ic=37810,rc=37811,sc=37812,oc=37813,ac=37814,lc=37815,cc=37816,uc=37817,fc=37818,hc=37819,dc=37820,pc=37821,mc=36492,xc=36494,gc=36495,_c=36283,yc=36284,vc=36285,bc=36286;var So=2300,fl=2301,ol=2302,gf=2400,_f=2401,yf=2402;var zp=3200,Vp=3201;var Gp=0,Hp=1,Ii="",yn="srgb",zr="srgb-linear",Mo="linear",st="srgb";var Fr=7680;var vf=519,Wp=512,Xp=513,qp=514,Bf=515,Yp=516,$p=517,Zp=518,Kp=519,bf=35044;var kf="300 es",qn=2e3,Eo=2001;function zf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jp(){let n=To("canvas");return n.style.display="block",n}var Wd={},Ms=null;function Vf(...n){let e="THREE."+n.shift();Ms?Ms("log",e,...n):console.log(e,...n)}function ke(...n){let e="THREE."+n.shift();Ms?Ms("warn",e,...n):console.warn(e,...n)}function We(...n){let e="THREE."+n.shift();Ms?Ms("error",e,...n):console.error(e,...n)}function Es(...n){let e=n.join(" ");e in Wd||(Wd[e]=!0,ke(...n))}function jp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yu=Math.PI/180,hl=180/Math.PI;function Wo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Wx(n,e){return(n%e+e)%e}function $u(n,e,t){return(1-t)*n+t*e}function go(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var tt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(h!==g||c!==d||l!==p||u!==x){let m=c*d+l*p+u*x+h*g;m<0&&(d=-d,p=-p,x=-x,g=-g,m=-m);let f=1-a;if(m<.9995){let A=Math.acos(m),_=Math.sin(A);f=Math.sin(f*A)/_,a=Math.sin(a*A)/_,c=c*f+d*a,l=l*f+p*a,u=u*f+x*a,h=h*f+g*a}else{c=c*f+d*a,l=l*f+p*a,u=u*f+x*a,h=h*f+g*a;let A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*h+c*p-l*d,e[t+1]=c*x+u*d+l*h-a*p,e[t+2]=l*x+u*p+a*d-c*h,e[t+3]=u*x-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),p=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h+d*p*x;break;case"YZX":this._x=d*u*h+l*p*x,this._y=l*p*h+d*u*x,this._z=l*u*x-d*p*h,this._w=l*u*h-d*p*x;break;case"XZY":this._x=d*u*h-l*p*x,this._y=l*p*h-d*u*x,this._z=l*u*x+d*p*h,this._w=l*u*h+d*p*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zu=new Y,Xd=new wi,Ge=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],x=i[8],g=r[0],m=r[3],f=r[6],A=r[1],_=r[4],E=r[7],T=r[2],M=r[5],R=r[8];return s[0]=o*g+a*A+c*T,s[3]=o*m+a*_+c*M,s[6]=o*f+a*E+c*R,s[1]=l*g+u*A+h*T,s[4]=l*m+u*_+h*M,s[7]=l*f+u*E+h*R,s[2]=d*g+p*A+x*T,s[5]=d*m+p*_+x*M,s[8]=d*f+p*E+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,x=t*h+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=h*g,e[1]=(r*l-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ku=new Ge,qd=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xx(){let n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Ei(r.r),r.g=Ei(r.g),r.b=Ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?Mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:e,whitePoint:i,transfer:Mo,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}var Je=Xx();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var cs,dl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cs===void 0&&(cs=To("canvas")),cs.width=e.width,cs.height=e.height;let r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=cs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ei(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qx=0,Ts=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ju(r[o].image)):s.push(Ju(r[o]))}else s=Ju(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ju(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Yx=0,ju=new Y,ln=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ni,r=ni,s=bn,o=ar,a=Ln,c=ci,l=n.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Wo(),this.name="",this.source=new Ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cl:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cl:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=If;ln.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],x=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,E=(p+1)/2,T=(f+1)/2,M=(u+d)/4,R=(h+g)/4,O=(x+m)/4;return _>E&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=R/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=M/r,s=O/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=O/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(h-g)/A,this.z=(d-u)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new ln(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ts(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends pl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ao=class extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Ha.subVectors(this.max,_o),us.subVectors(e.a,_o),fs.subVectors(e.b,_o),hs.subVectors(e.c,_o),$i.subVectors(fs,us),Zi.subVectors(hs,fs),Nr.subVectors(us,hs);let t=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-Nr.z,Nr.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,Nr.z,0,-Nr.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-Nr.y,Nr.x,0];return!Qu(t,us,fs,hs,Ha)||(t=[1,0,0,0,1,0,0,0,1],!Qu(t,us,fs,hs,Ha))?!1:(Wa.crossVectors($i,Zi),t=[Wa.x,Wa.y,Wa.z],Qu(t,us,fs,hs,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Hn=new Y,Ga=new nr,us=new Y,fs=new Y,hs=new Y,$i=new Y,Zi=new Y,Nr=new Y,_o=new Y,Ha=new Y,Wa=new Y,Lr=new Y;function Qu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Lr.fromArray(n,s);let a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=e.dot(Lr),l=t.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var $x=new nr,yo=new Y,ef=new Y,As=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$x.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(ef)),this.expandByPoint(yo.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yi=new Y,tf=new Y,Xa=new Y,Ki=new Y,nf=new Y,qa=new Y,rf=new Y,wo=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){tf.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(tf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Xa),a=Ki.dot(this.direction),c=-Ki.dot(Xa),l=Ki.lengthSq(),u=Math.abs(1-o*o),h,d,p,x;if(u>0)if(h=o*c-a,d=o*a-c,x=s*u,h>=0)if(d>=-x)if(d<=x){let g=1/u;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=x?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(tf).addScaledVector(Xa,d),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){nf.subVectors(t,e),qa.subVectors(i,e),rf.crossVectors(nf,qa);let o=this.direction.dot(rf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(qa.crossVectors(Ki,qa));if(c<0)return null;let l=a*this.direction.dot(nf.cross(Ki));if(l<0||c+l>o)return null;let u=-a*Ki.dot(rf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class n{constructor(e,t,i,r,s,o,a,c,l,u,h,d,p,x,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,d,p,x,g,m)}set(e,t,i,r,s,o,a,c,l,u,h,d,p,x,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*h,x=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+x*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=x+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,p=c*h,x=l*u,g=l*h;t[0]=d+g*a,t[4]=x*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,p=c*h,x=l*u,g=l*h;t[0]=d-g*a,t[4]=-o*h,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,p=o*h,x=a*u,g=a*h;t[0]=c*u,t[4]=x*l-p,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=p*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,x=a*c,g=a*l;t[0]=c*u,t[4]=g-d*h,t[8]=x*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+x,t[10]=d-g*h}else if(e.order==="XZY"){let d=o*c,p=o*l,x=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,Kx)}lookAt(e,t,i){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ji.crossVectors(i,gn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ji.crossVectors(i,gn)),Ji.normalize(),Ya.crossVectors(gn,Ji),r[0]=Ji.x,r[4]=Ya.x,r[8]=gn.x,r[1]=Ji.y,r[5]=Ya.y,r[9]=gn.y,r[2]=Ji.z,r[6]=Ya.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],A=i[3],_=i[7],E=i[11],T=i[15],M=r[0],R=r[4],O=r[8],S=r[12],v=r[1],C=r[5],k=r[9],W=r[13],X=r[2],P=r[6],I=r[10],U=r[14],L=r[3],V=r[7],q=r[11],Q=r[15];return s[0]=o*M+a*v+c*X+l*L,s[4]=o*R+a*C+c*P+l*V,s[8]=o*O+a*k+c*I+l*q,s[12]=o*S+a*W+c*U+l*Q,s[1]=u*M+h*v+d*X+p*L,s[5]=u*R+h*C+d*P+p*V,s[9]=u*O+h*k+d*I+p*q,s[13]=u*S+h*W+d*U+p*Q,s[2]=x*M+g*v+m*X+f*L,s[6]=x*R+g*C+m*P+f*V,s[10]=x*O+g*k+m*I+f*q,s[14]=x*S+g*W+m*U+f*Q,s[3]=A*M+_*v+E*X+T*L,s[7]=A*R+_*C+E*P+T*V,s[11]=A*O+_*k+E*I+T*q,s[15]=A*S+_*W+E*U+T*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*p-i*c*p)+g*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*h-t*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],A=h*m*l-g*d*l+g*c*p-a*m*p-h*c*f+a*d*f,_=x*d*l-u*m*l-x*c*p+o*m*p+u*c*f-o*d*f,E=u*g*l-x*h*l+x*a*p-o*g*p-u*a*f+o*h*f,T=x*h*c-u*g*c-x*a*d+o*g*d+u*a*m-o*h*m,M=t*A+i*_+r*E+s*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/M;return e[0]=A*R,e[1]=(g*d*s-h*m*s-g*r*p+i*m*p+h*r*f-i*d*f)*R,e[2]=(a*m*s-g*c*s+g*r*l-i*m*l-a*r*f+i*c*f)*R,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*p-i*c*p)*R,e[4]=_*R,e[5]=(u*m*s-x*d*s+x*r*p-t*m*p-u*r*f+t*d*f)*R,e[6]=(x*c*s-o*m*s-x*r*l+t*m*l+o*r*f-t*c*f)*R,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*R,e[8]=E*R,e[9]=(x*h*s-u*g*s-x*i*p+t*g*p+u*i*f-t*h*f)*R,e[10]=(o*g*s-x*a*s+x*i*l-t*g*l-o*i*f+t*a*f)*R,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*p-t*a*p)*R,e[12]=T*R,e[13]=(u*g*r-x*h*r+x*i*d-t*g*d-u*i*m+t*h*m)*R,e[14]=(x*a*r-o*g*r-x*i*c+t*g*c+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,x=s*h,g=o*u,m=o*h,f=a*h,A=c*l,_=c*u,E=c*h,T=i.x,M=i.y,R=i.z;return r[0]=(1-(g+f))*T,r[1]=(p+E)*T,r[2]=(x-_)*T,r[3]=0,r[4]=(p-E)*M,r[5]=(1-(d+f))*M,r[6]=(m+A)*M,r[7]=0,r[8]=(x+_)*R,r[9]=(m-A)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ds.set(r[0],r[1],r[2]).length(),o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);let l=1/s,u=1/o,h=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r),x,g;if(c)x=s/(o-s),g=o*s/(o-s);else if(a===qn)x=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Eo)x=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qn,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r),x,g;if(c)x=1/(o-s),g=o/(o-s);else if(a===qn)x=-2/(o-s),g=-(o+s)/(o-s);else if(a===Eo)x=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ds=new Y,Wn=new Lt,Zx=new Y(0,0,0),Kx=new Y(1,1,1),Ji=new Y,Ya=new Y,gn=new Y,$d=new Lt,Zd=new wi,si=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jx=0,Kd=new Y,ps=new wi,vi=new Lt,$a=new Y,vo=new Y,jx=new Y,Qx=new wi,Jd=new Y(1,0,0),jd=new Y(0,1,0),Qd=new Y(0,0,1),ep={type:"added"},eg={type:"removed"},ms={type:"childadded",child:null},sf={type:"childremoved",child:null},cn=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new Y,t=new si,i=new wi,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ge}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$a.copy(e):$a.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(vo,$a,this.up):vi.lookAt($a,vo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(vi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ep),ms.child=e,this.dispatchEvent(ms),ms.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eg),sf.child=e,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ep),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};cn.DEFAULT_UP=new Y(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new Y,bi=new Y,of=new Y,Si=new Y,xs=new Y,gs=new Y,tp=new Y,af=new Y,lf=new Y,cf=new Y,uf=new Ct,ff=new Ct,hf=new Ct,er=class n{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),bi.subVectors(i,t),of.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(bi),c=Xn.dot(of),l=bi.dot(bi),u=bi.dot(of),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(l*c-a*u)*d,x=(o*u-a*c)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return uf.setScalar(0),ff.setScalar(0),hf.setScalar(0),uf.fromBufferAttribute(e,t),ff.fromBufferAttribute(e,i),hf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(uf,s.x),o.addScaledVector(ff,s.y),o.addScaledVector(hf,s.z),o}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),bi.subVectors(e,t),Xn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Xn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;xs.subVectors(r,i),gs.subVectors(s,i),af.subVectors(e,i);let c=xs.dot(af),l=gs.dot(af);if(c<=0&&l<=0)return t.copy(i);lf.subVectors(e,r);let u=xs.dot(lf),h=gs.dot(lf);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(xs,o);cf.subVectors(e,s);let p=xs.dot(cf),x=gs.dot(cf);if(x>=0&&p<=x)return t.copy(s);let g=p*l-c*x;if(g<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(i).addScaledVector(gs,a);let m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return tp.subVectors(s,r),a=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(tp,a);let f=1/(m+g+d);return o=g*f,a=d*f,t.copy(i).addScaledVector(xs,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Za={h:0,s:0,l:0};function df(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var nt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Wx(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=df(o,s,e+1/3),this.g=df(o,s,e),this.b=df(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let i=Qp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Je.workingToColorSpace(qt.copy(this),e),Math.round(Ke(qt.r*255,0,255))*65536+Math.round(Ke(qt.g*255,0,255))*256+Math.round(Ke(qt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(qt.copy(this),t);let i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=yn){Je.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,r=qt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Za);let i=$u(ji.h,Za.h,t),r=$u(ji.s,Za.s,t),s=$u(ji.l,Za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new nt;nt.NAMES=Qp;var tg=0,Vr=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Br,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gr=class extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new Y,Ka=new tt,ng=0,vn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ng++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bf,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=go(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bf&&(e.usage=this.usage),e}};var Ro=class extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Co=class extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ii=class extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}},ig=0,Dn=new Lt,pf=new cn,_s=new Y,_n=new nr,bo=new nr,Bt=new Y,Ri=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?Co:Ro)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ii(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(_n.min,bo.min),_n.expandByPoint(Bt),Bt.addVectors(_n.max,bo.max),_n.expandByPoint(Bt)):(_n.expandByPoint(bo.min),_n.expandByPoint(bo.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Bt.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(e,l),Bt.add(_s)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new Y,c[O]=new Y;let l=new Y,u=new Y,h=new Y,d=new tt,p=new tt,x=new tt,g=new Y,m=new Y;function f(O,S,v){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,v),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,S),x.fromBufferAttribute(s,v),u.sub(l),h.sub(l),p.sub(d),x.sub(d);let C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(C),a[O].add(g),a[S].add(g),a[v].add(g),c[O].add(m),c[S].add(m),c[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,S=A.length;O<S;++O){let v=A[O],C=v.start,k=v.count;for(let W=C,X=C+k;W<X;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let _=new Y,E=new Y,T=new Y,M=new Y;function R(O){T.fromBufferAttribute(r,O),M.copy(T);let S=a[O];_.copy(S),_.sub(T.multiplyScalar(T.dot(S))).normalize(),E.crossVectors(M,S);let C=E.dot(c[O])<0?-1:1;o.setXYZW(O,_.x,_.y,_.z,C)}for(let O=0,S=A.length;O<S;++O){let v=A[O],C=v.start,k=v.count;for(let W=C,X=C+k;W<X;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new Y,s=new Y,o=new Y,a=new Y,c=new Y,l=new Y,u=new Y,h=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),p=0,x=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let f=0;f<u;f++)d[x++]=l[p++]}return new vn(d,u,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},np=new Lt,Or=new wo,Ja=new As,ip=new Y,ja=new Y,Qa=new Y,el=new Y,mf=new Y,tl=new Y,rp=new Y,nl=new Y,Sn=class extends cn{constructor(e=new Ri,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){tl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(mf.fromBufferAttribute(h,e),o?tl.addScaledVector(mf,u):tl.addScaledVector(mf.sub(t),u))}t.add(tl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Ja.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Ja,ip)===null||Or.origin.distanceToSquared(ip)>(e.far-e.near)**2))&&(np.copy(s).invert(),Or.copy(e.ray).applyMatrix4(np),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){let m=d[x],f=o[m.materialIndex],A=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,T=_;E<T;E+=3){let M=a.getX(E),R=a.getX(E+1),O=a.getX(E+2);r=il(this,f,e,i,l,u,h,M,R,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let A=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);r=il(this,o,e,i,l,u,h,A,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){let m=d[x],f=o[m.materialIndex],A=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=A,T=_;E<T;E+=3){let M=E,R=E+1,O=E+2;r=il(this,f,e,i,l,u,h,M,R,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let A=m,_=m+1,E=m+2;r=il(this,o,e,i,l,u,h,A,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function rg(n,e,t,i,r,s,o,a){let c;if(e.side===en?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ti,a),c===null)return null;nl.copy(a),nl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(nl);return l<t.near||l>t.far?null:{distance:l,point:nl.clone(),object:n}}function il(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ja),n.getVertexPosition(c,Qa),n.getVertexPosition(l,el);let u=rg(n,e,t,i,ja,Qa,el,rp);if(u){let h=new Y;er.getBarycoord(rp,ja,Qa,el,h),r&&(u.uv=er.getInterpolatedAttribute(r,a,c,l,h,new tt)),s&&(u.uv1=er.getInterpolatedAttribute(s,a,c,l,h,new tt)),o&&(u.normal=er.getInterpolatedAttribute(o,a,c,l,h,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new Y,materialIndex:0};er.getNormal(ja,Qa,el,d.normal),u.face=d,u.barycoord=h}return u}var ir=class n extends Ri{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ii(l,3)),this.setAttribute("normal",new ii(u,3)),this.setAttribute("uv",new ii(h,2));function x(g,m,f,A,_,E,T,M,R,O,S){let v=E/R,C=T/O,k=E/2,W=T/2,X=M/2,P=R+1,I=O+1,U=0,L=0,V=new Y;for(let q=0;q<I;q++){let Q=q*C-W;for(let ne=0;ne<P;ne++){let de=ne*v-k;V[g]=de*A,V[m]=Q*_,V[f]=X,l.push(V.x,V.y,V.z),V[g]=0,V[m]=0,V[f]=M>0?1:-1,u.push(V.x,V.y,V.z),h.push(ne/R),h.push(1-q/O),U+=1}}for(let q=0;q<O;q++)for(let Q=0;Q<R;Q++){let ne=d+Q+P*q,de=d+Q+P*(q+1),ge=d+(Q+1)+P*(q+1),Oe=d+(Q+1)+P*q;c.push(ne,de,Oe),c.push(de,ge,Oe),L+=6}a.addGroup(p,L,S),p+=L,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=Yr(n[t]);for(let r in i)e[r]=i[r]}return e}function sg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var em={clone:Yr,merge:Yt},og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Io=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new Y,sp=new tt,op=new tt,Nt=class extends Io{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,sp,op),t.subVectors(op,sp)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ys=-90,vs=1,xl=class extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Nt(ys,vs,e,t);r.layers=this.layers,this.add(r);let s=new Nt(ys,vs,e,t);s.layers=this.layers,this.add(s);let o=new Nt(ys,vs,e,t);o.layers=this.layers,this.add(o);let a=new Nt(ys,vs,e,t);a.layers=this.layers,this.add(a);let c=new Nt(ys,vs,e,t);c.layers=this.layers,this.add(c);let l=new Nt(ys,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Po=class extends ln{constructor(e=[],t=Wr,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gl=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Po(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:li});s.uniforms.tEquirect.value=t;let o=new Sn(r,s),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=bn),new xl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Mi=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Yn=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var rr=class extends ln{constructor(e=null,t=1,i=1,r,s,o,a,c,l=an,u=an,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xf=new Y,cg=new Y,ug=new Ge,ti=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=xf.subVectors(i,t).cross(cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ug.getNormalMatrix(e),r=this.coplanarPoint(xf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new As,fg=new tt(.5,.5),rl=new Y,Do=class{constructor(e=new ti,t=new ti,i=new ti,r=new ti,s=new ti,o=new ti){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],x=s[8],g=s[9],m=s[10],f=s[11],A=s[12],_=s[13],E=s[14],T=s[15];if(r[0].setComponents(l-o,p-u,f-x,T-A).normalize(),r[1].setComponents(l+o,p+u,f+x,T+A).normalize(),r[2].setComponents(l+a,p+h,f+g,T+_).normalize(),r[3].setComponents(l-a,p-h,f-g,T-_).normalize(),i)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,f-m,T-E).normalize();else if(r[4].setComponents(l-c,p-d,f-m,T-E).normalize(),t===qn)r[5].setComponents(l+c,p+d,f+m,T+E).normalize();else if(t===Eo)r[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);let t=fg.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var No=class extends ln{constructor(e,t,i=lr,r,s,o,a=an,c=an,l,u=Ss,h=1){if(u!==Ss&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lo=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Oo=class n extends Ri{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,p=[],x=[],g=[],m=[];for(let f=0;f<u;f++){let A=f*d-o;for(let _=0;_<l;_++){let E=_*h-s;x.push(E,-A,0),g.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){let _=A+l*f,E=A+l*(f+1),T=A+1+l*(f+1),M=A+1+l*f;p.push(_,E,M),p.push(E,T,M)}this.setIndex(p),this.setAttribute("position",new ii(x,3)),this.setAttribute("normal",new ii(g,3)),this.setAttribute("uv",new ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var _l=class extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yl=class extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Hr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vl=class extends Hr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gf,endingEnd:gf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _f:s=e,a=2*t-i;break;case yf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case _f:o=e,c=2*i-t;break;case yf:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(i-t)/(r-t),g=x*x,m=g*x,f=-d*m+2*d*g-d*x,A=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,_=(-1-p)*m+(1.5+p)*g+.5*x,E=p*m-p*g;for(let T=0;T!==a;++T)s[T]=f*o[u+T]+A*o[l+T]+_*o[c+T]+E*o[h+T];return s}},bl=class extends Hr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}},Sl=class extends Hr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sl(t,this.TimeBufferType),this.values=sl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sl(e.times,Array),values:sl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case fl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){We("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&hg(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ol,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*i,d=h-i,p=h+i;for(let x=0;x!==i;++x){let g=t[h+x];if(g!==t[d+x]||g!==t[p+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=fl;var sr=class extends Mn{constructor(e,t,i){super(e,t,i)}};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=So;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}};Ml.prototype.ValueTypeName="color";var El=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}};El.prototype.ValueTypeName="number";var Tl=class extends Hr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)wi.slerpFlat(s,0,o,l-a,o,l,c);return s}},Uo=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};Uo.prototype.ValueTypeName="quaternion";Uo.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Mn{constructor(e,t,i){super(e,t,i)}};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=So;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}};Al.prototype.ValueTypeName="vector";var wl=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],x=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tm=new wl,Rl=class{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cl=class extends Io{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Il=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Hf="\\[\\]\\.:\\/",dg=new RegExp("["+Hf+"]","g"),Wf="[^"+Hf+"]",pg="[^"+Hf.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",Wf),xg=/(WCOD+)?/.source.replace("WCOD",pg),gg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),yg=new RegExp("^"+mg+xg+gg+_g+"$"),vg=["material","materials","bones","map"],Sf=class{constructor(e,t,i){let r=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dg,"")}static parseTrackName(e){let t=yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);vg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Sf;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OE=new Float32Array(1);var ap=new Lt,Fo=class{constructor(e,t,i=0,r=1/0){this.ray=new wo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,t=!0,i=[]){return Mf(e,this,i,t),i.sort(lp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Mf(e[r],this,i,t);return i.sort(lp),i}};function lp(n,e){return n.distance-e.distance}function Mf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Mf(s[o],e,t,!0)}}function Xf(n,e,t,i){let r=bg(i);switch(t){case Of:return n*e;case Ff:return n*e/r.components*r.byteLength;case Wl:return n*e/r.components*r.byteLength;case Xl:return n*e*2/r.components*r.byteLength;case ql:return n*e*2/r.components*r.byteLength;case Uf:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case Yl:return n*e*4/r.components*r.byteLength;case zo:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Jl:return Math.max(n,16)*Math.max(e,8)/4;case $l:case Kl:return Math.max(n,8)*Math.max(e,8)/2;case jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mc:case xc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _c:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bg(n){switch(n){case ci:case Pf:return{byteLength:1,components:1};case Cs:case Df:case qr:return{byteLength:2,components:1};case Gl:case Hl:return{byteLength:2,components:4};case lr:case Vl:case ui:return{byteLength:4,components:1};case Nf:case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Em(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mg(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){let x=h[d],g=h[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){let g=h[p];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tg=`#ifdef USE_ALPHAHASH
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
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
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
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
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
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
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
#endif`,Bg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yg=`#define PI 3.141592653589793
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
} // validated`,$g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",t_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
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
}`,h_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m_=`uniform bool receiveShadow;
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
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,g_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
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
#endif`,S_=`uniform sampler2D dfgLUT;
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
}`,M_=`
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ly=`float getShadowMask() {
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
}`,cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
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
}`,Iy=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Dy=`#define DISTANCE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,By=`uniform vec3 diffuse;
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
}`,ky=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,Vy=`#define MATCAP
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
}`,Gy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Wy=`#define NORMAL
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
}`,Xy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Yy=`#define STANDARD
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
}`,$y=`#define STANDARD
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
}`,Zy=`#define TOON
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
}`,Ky=`#define TOON
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
}`,Jy=`uniform float size;
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
}`,jy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,ev=`uniform vec3 color;
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
}`,tv=`uniform float rotation;
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
}`,nv=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Eg,alphahash_pars_fragment:Tg,alphamap_fragment:Ag,alphamap_pars_fragment:wg,alphatest_fragment:Rg,alphatest_pars_fragment:Cg,aomap_fragment:Ig,aomap_pars_fragment:Pg,batching_pars_vertex:Dg,batching_vertex:Ng,begin_vertex:Lg,beginnormal_vertex:Og,bsdfs:Ug,iridescence_fragment:Fg,bumpmap_pars_fragment:Bg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Gg,color_fragment:Hg,color_pars_fragment:Wg,color_pars_vertex:Xg,color_vertex:qg,common:Yg,cube_uv_reflection_fragment:$g,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Kg,displacementmap_vertex:Jg,emissivemap_fragment:jg,emissivemap_pars_fragment:Qg,colorspace_fragment:e_,colorspace_pars_fragment:t_,envmap_fragment:n_,envmap_common_pars_fragment:i_,envmap_pars_fragment:r_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:x_,envmap_vertex:o_,fog_vertex:a_,fog_pars_vertex:l_,fog_fragment:c_,fog_pars_fragment:u_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:h_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:p_,lights_pars_begin:m_,lights_toon_fragment:g_,lights_toon_pars_fragment:__,lights_phong_fragment:y_,lights_phong_pars_fragment:v_,lights_physical_fragment:b_,lights_physical_pars_fragment:S_,lights_fragment_begin:M_,lights_fragment_maps:E_,lights_fragment_end:T_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:C_,map_fragment:I_,map_pars_fragment:P_,map_particle_fragment:D_,map_particle_pars_fragment:N_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:O_,morphinstance_vertex:U_,morphcolor_vertex:F_,morphnormal_vertex:B_,morphtarget_pars_vertex:k_,morphtarget_vertex:z_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:H_,normal_pars_vertex:W_,normal_vertex:X_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:$_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:K_,opaque_fragment:J_,packing:j_,premultiplied_alpha_fragment:Q_,project_vertex:ey,dithering_fragment:ty,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:oy,shadowmap_vertex:ay,shadowmask_pars_fragment:ly,skinbase_vertex:cy,skinning_pars_vertex:uy,skinning_vertex:fy,skinnormal_vertex:hy,specularmap_fragment:dy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:xy,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:yy,uv_pars_vertex:vy,uv_vertex:by,worldpos_vertex:Sy,background_vert:My,background_frag:Ey,backgroundCube_vert:Ty,backgroundCube_frag:Ay,cube_vert:wy,cube_frag:Ry,depth_vert:Cy,depth_frag:Iy,distanceRGBA_vert:Py,distanceRGBA_frag:Dy,equirect_vert:Ny,equirect_frag:Ly,linedashed_vert:Oy,linedashed_frag:Uy,meshbasic_vert:Fy,meshbasic_frag:By,meshlambert_vert:ky,meshlambert_frag:zy,meshmatcap_vert:Vy,meshmatcap_frag:Gy,meshnormal_vert:Hy,meshnormal_frag:Wy,meshphong_vert:Xy,meshphong_frag:qy,meshphysical_vert:Yy,meshphysical_frag:$y,meshtoon_vert:Zy,meshtoon_frag:Ky,points_vert:Jy,points_frag:jy,shadow_vert:Qy,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},fi={basic:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Yt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Yt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Yt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Yt([ce.common,ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Yt([ce.lights,ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};fi.physical={uniforms:Yt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Sc={r:0,b:0,g:0},$r=new si,iv=new Lt;function rv(n,e,t,i,r,s,o){let a=new nt(0),c=s===!0?0:1,l,u,h=null,d=0,p=null;function x(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E}function g(_){let E=!1,T=x(_);T===null?f(a,c):T&&T.isColor&&(f(T,1),E=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,E){let T=x(E);T&&(T.isCubeTexture||T.mapping===Bo)?(u===void 0&&(u=new Sn(new ir(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Yr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$r.copy(E.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler($r)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==st,(h!==T||d!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Sn(new Oo(2,2),new Nn({name:"BackgroundMaterial",uniforms:Yr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Je.getTransfer(T.colorSpace)!==st,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,E){_.getRGB(Sc,Gf(n)),i.buffers.color.setClear(Sc.r,Sc.g,Sc.b,E,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(a,c)},render:g,addToRenderList:m,dispose:A}}function sv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(v,C,k,W,X){let P=!1,I=h(W,k,C);s!==I&&(s=I,l(s.object)),P=p(v,W,k,X),P&&x(v,W,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,E(v,C,k,W),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,C,k){let W=k.wireframe===!0,X=i[v.id];X===void 0&&(X={},i[v.id]=X);let P=X[C.id];P===void 0&&(P={},X[C.id]=P);let I=P[W];return I===void 0&&(I=d(c()),P[W]=I),I}function d(v){let C=[],k=[],W=[];for(let X=0;X<t;X++)C[X]=0,k[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:W,object:v,attributes:{},index:null}}function p(v,C,k,W){let X=s.attributes,P=C.attributes,I=0,U=k.getAttributes();for(let L in U)if(U[L].location>=0){let q=X[L],Q=P[L];if(Q===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),q===void 0||q.attribute!==Q||Q&&q.data!==Q.data)return!0;I++}return s.attributesNum!==I||s.index!==W}function x(v,C,k,W){let X={},P=C.attributes,I=0,U=k.getAttributes();for(let L in U)if(U[L].location>=0){let q=P[L];q===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(q=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(q=v.instanceColor));let Q={};Q.attribute=q,q&&q.data&&(Q.data=q.data),X[L]=Q,I++}s.attributes=X,s.attributesNum=I,s.index=W}function g(){let v=s.newAttributes;for(let C=0,k=v.length;C<k;C++)v[C]=0}function m(v){f(v,0)}function f(v,C){let k=s.newAttributes,W=s.enabledAttributes,X=s.attributeDivisors;k[v]=1,W[v]===0&&(n.enableVertexAttribArray(v),W[v]=1),X[v]!==C&&(n.vertexAttribDivisor(v,C),X[v]=C)}function A(){let v=s.newAttributes,C=s.enabledAttributes;for(let k=0,W=C.length;k<W;k++)C[k]!==v[k]&&(n.disableVertexAttribArray(k),C[k]=0)}function _(v,C,k,W,X,P,I){I===!0?n.vertexAttribIPointer(v,C,k,X,P):n.vertexAttribPointer(v,C,k,W,X,P)}function E(v,C,k,W){g();let X=W.attributes,P=k.getAttributes(),I=C.defaultAttributeValues;for(let U in P){let L=P[U];if(L.location>=0){let V=X[U];if(V===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(V=v.instanceColor)),V!==void 0){let q=V.normalized,Q=V.itemSize,ne=e.get(V);if(ne===void 0)continue;let de=ne.buffer,ge=ne.type,Oe=ne.bytesPerElement,$=ge===n.INT||ge===n.UNSIGNED_INT||V.gpuType===Vl;if(V.isInterleavedBufferAttribute){let J=V.data,me=J.stride,Be=V.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<L.locationSize;Se++)f(L.location+Se,J.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<L.locationSize;Se++)m(L.location+Se);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Se=0;Se<L.locationSize;Se++)_(L.location+Se,Q/L.locationSize,ge,q,me*Oe,(Be+Q/L.locationSize*Se)*Oe,$)}else{if(V.isInstancedBufferAttribute){for(let J=0;J<L.locationSize;J++)f(L.location+J,V.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let J=0;J<L.locationSize;J++)m(L.location+J);n.bindBuffer(n.ARRAY_BUFFER,de);for(let J=0;J<L.locationSize;J++)_(L.location+J,Q/L.locationSize,ge,q,Q*Oe,Q/L.locationSize*J*Oe,$)}}else if(I!==void 0){let q=I[U];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(L.location,q);break;case 3:n.vertexAttrib3fv(L.location,q);break;case 4:n.vertexAttrib4fv(L.location,q);break;default:n.vertexAttrib1fv(L.location,q)}}}}A()}function T(){O();for(let v in i){let C=i[v];for(let k in C){let W=C[k];for(let X in W)u(W[X].object),delete W[X];delete C[k]}delete i[v]}}function M(v){if(i[v.id]===void 0)return;let C=i[v.id];for(let k in C){let W=C[k];for(let X in W)u(W[X].object),delete W[X];delete C[k]}delete i[v.id]}function R(v){for(let C in i){let k=i[C];if(k[v.id]===void 0)continue;let W=k[v.id];for(let X in W)u(W[X].object),delete W[X];delete k[v.id]}}function O(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:A}}function ov(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,i,1)}function c(l,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let x=0;for(let g=0;g<h;g++)x+=u[g]*d[g];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function av(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let O=R===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ci&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ui&&!O)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:T,maxSamples:M}}function lv(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ti,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):l();else{let A=s?0:i,_=A*4,E=f.clippingState||null;c.value=E,E=u(x,d,_,p);for(let T=0;T!==_;++T)E[T]=t[T];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,x){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=c.value,x!==!0||m===null){let f=p+g*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,E=p;_!==g;++_,E+=4)o.copy(h[_]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function cv(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=Wr:a===kl&&(o.mapping=Xr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bl||a===kl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new gl(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var cr=4,nm=[.125,.215,.35,.446,.526,.582],Kr=20,uv=256,Xo=new Cl,im=new nt,qf=null,Yf=0,$f=0,Zf=!1,fv=new Y,Ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=fv}=s;qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qf,Yf,$f),this._renderer.xr.enabled=Zf,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:qr,format:Ln,colorSpace:zr,depthBuffer:!1},r=rm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hv(s)),this._blurMaterial=pv(s,e,t),this._ggxMaterial=dv(s,e,t)}return r}_compileMaterial(e){let t=new Sn(new Ri,e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,i,r,s){let c=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(im),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new ir,new Gr({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,f=!1,A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,f=!0):(m.color.copy(im),f=!0);for(let _=0;_<6;_++){let E=_%3;E===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[_],s.y,s.z)):E===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[_]));let T=this._cubeSize;Ds(r,E*T,_>2?T:0,T,T),h.setRenderTarget(r),f&&h.render(g,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Wr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ds(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Xo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=.05+l*.95,p=h*d,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-cr?i-x+cr:0),f=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,Ds(s,m,f,3*g,2*g),r.setRenderTarget(s),r.render(a,Xo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,Ds(e,m,f,3*g,2*g),r.setRenderTarget(e),r.render(a,Xo)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[r];h.material=l;let d=l.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),g=s/x,m=isFinite(s)?1+Math.floor(u*g):Kr;m>Kr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);let f=[],A=0;for(let R=0;R<Kr;++R){let O=R/g,S=Math.exp(-O*O/2);f.push(S),R===0?A+=S:R<m&&(A+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;let E=this._sizeLods[r],T=3*E*(r>_-cr?r-_+cr:0),M=4*(this._cubeSize-E);Ds(t,T,M,3*E,2*E),c.setRenderTarget(t),c.render(h,Xo)}};function hv(n){let e=[],t=[],i=[],r=n,s=n-cr+1+nm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-cr?c=nm[o-n+cr-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,g=3,m=2,f=1,A=new Float32Array(g*x*p),_=new Float32Array(m*x*p),E=new Float32Array(f*x*p);for(let M=0;M<p;M++){let R=M%3*2/3-1,O=M>2?0:-1,S=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];A.set(S,g*x*M),_.set(d,m*x*M);let v=[M,M,M,M,M,M];E.set(v,f*x*M)}let T=new Ri;T.setAttribute("position",new vn(A,g)),T.setAttribute("uv",new vn(_,m)),T.setAttribute("faceIndex",new vn(E,f)),i.push(new Sn(T,null)),r>cr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function rm(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dv(n,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function pv(n,e,t){let i=new Float32Array(Kr),r=new Y(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function sm(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function om(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function mv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bl||c===kl,u=c===Wr||c===Xr;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ec(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Ec(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function gv(n,e,t,i){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,x=h.attributes.position,g=0;if(p!==null){let A=p.array;g=p.version;for(let _=0,E=A.length;_<E;_+=3){let T=A[_+0],M=A[_+1],R=A[_+2];d.push(T,M,M,R,R,T)}}else if(x!==void 0){let A=x.array;g=x.version;for(let _=0,E=A.length/3-1;_<E;_+=3){let T=_+0,M=_+1,R=_+2;d.push(T,M,M,R,R,T)}}else return;let m=new(zf(d)?Co:Ro)(d,1);m.version=g;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function _v(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function l(d,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,d*o,x),t.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];t.update(m,i,1)}function h(d,p,x,g){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,g,0,x);let f=0;for(let A=0;A<x;A++)f+=p[A]*g[A];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function yv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vv(n,e,t){let i=new WeakMap,r=new Ct;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],_=0;p===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let E=a.attributes.position.count*_,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let M=new Float32Array(E*T*4*h),R=new Ao(M,E,T,h);R.type=ui,R.needsUpdate=!0;let O=_*4;for(let v=0;v<h;v++){let C=m[v],k=f[v],W=A[v],X=E*T*4*v;for(let P=0;P<C.count;P++){let I=P*O;p===!0&&(r.fromBufferAttribute(C,P),M[X+I+0]=r.x,M[X+I+1]=r.y,M[X+I+2]=r.z,M[X+I+3]=0),x===!0&&(r.fromBufferAttribute(k,P),M[X+I+4]=r.x,M[X+I+5]=r.y,M[X+I+6]=r.z,M[X+I+7]=0),g===!0&&(r.fromBufferAttribute(W,P),M[X+I+8]=r.x,M[X+I+9]=r.y,M[X+I+10]=r.z,M[X+I+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new tt(E,T)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function bv(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Tm=new ln,am=new No(1,1),Am=new Ao,wm=new ml,Rm=new Po,lm=[],cm=[],um=new Float32Array(16),fm=new Float32Array(9),hm=new Float32Array(4);function Ls(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ac(n,e){let t=cm[e];t===void 0&&(t=new Int32Array(e),cm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Av(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;hm.set(i),n.uniformMatrix2fv(this.addr,!1,hm),Ut(t,i)}}function wv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;fm.set(i),n.uniformMatrix3fv(this.addr,!1,fm),Ut(t,i)}}function Rv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ot(t,i))return;um.set(i),n.uniformMatrix4fv(this.addr,!1,um),Ut(t,i)}}function Cv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Nv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Fv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(am.compareFunction=Bf,s=am):s=Tm,t.setTexture2D(e||s,r)}function Bv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wm,r)}function kv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rm,r)}function zv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Am,r)}function Vv(n){switch(n){case 5126:return Sv;case 35664:return Mv;case 35665:return Ev;case 35666:return Tv;case 35674:return Av;case 35675:return wv;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Iv;case 35668:case 35672:return Pv;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Lv;case 36295:return Ov;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return zv}}function Gv(n,e){n.uniform1fv(this.addr,e)}function Hv(n,e){let t=Ls(e,this.size,2);n.uniform2fv(this.addr,t)}function Wv(n,e){let t=Ls(e,this.size,3);n.uniform3fv(this.addr,t)}function Xv(n,e){let t=Ls(e,this.size,4);n.uniform4fv(this.addr,t)}function qv(n,e){let t=Ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yv(n,e){let t=Ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $v(n,e){let t=Ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zv(n,e){n.uniform1iv(this.addr,e)}function Kv(n,e){n.uniform2iv(this.addr,e)}function Jv(n,e){n.uniform3iv(this.addr,e)}function jv(n,e){n.uniform4iv(this.addr,e)}function Qv(n,e){n.uniform1uiv(this.addr,e)}function eb(n,e){n.uniform2uiv(this.addr,e)}function tb(n,e){n.uniform3uiv(this.addr,e)}function nb(n,e){n.uniform4uiv(this.addr,e)}function ib(n,e,t){let i=this.cache,r=e.length,s=Ac(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tm,s[o])}function rb(n,e,t){let i=this.cache,r=e.length,s=Ac(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wm,s[o])}function sb(n,e,t){let i=this.cache,r=e.length,s=Ac(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rm,s[o])}function ob(n,e,t){let i=this.cache,r=e.length,s=Ac(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Am,s[o])}function ab(n){switch(n){case 5126:return Gv;case 35664:return Hv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return $v;case 5124:case 35670:return Zv;case 35667:case 35671:return Kv;case 35668:case 35672:return Jv;case 35669:case 35673:return jv;case 5125:return Qv;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ob}}var Jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vv(t.type)}},jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ab(t.type)}},Qf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Kf=/(\w+)(\])?(\[|\.)?/g;function dm(n,e){n.seq.push(e),n.map[e.id]=e}function lb(n,e,t){let i=n.name,r=i.length;for(Kf.lastIndex=0;;){let s=Kf.exec(i),o=Kf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){dm(t,l===void 0?new Jf(a,n,e):new jf(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Qf(a),dm(t,h)),t=h}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lb(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function pm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var cb=37297,ub=0;function fb(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var mm=new Ge;function hb(n){Je._getMatrix(mm,Je.workingColorSpace,n);let e=`mat3( ${mm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Mo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fb(n.getShaderSource(e),a)}else return s}function db(n,e){let t=hb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pb(n,e){let t;switch(e){case Dp:t="Linear";break;case Np:t="Reinhard";break;case Lp:t="Cineon";break;case Op:t="ACESFilmic";break;case Fp:t="AgX";break;case Bp:t="Neutral";break;case Up:t="Custom";break;default:ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mc=new Y;function mb(){Je.getLuminanceCoefficients(Mc);let n=Mc.x.toFixed(4),e=Mc.y.toFixed(4),t=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function gb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _b(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qo(n){return n!==""}function gm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(n){return n.replace(yb,bb)}var vb=new Map;function bb(n,e){let t=He[e];if(t===void 0){let i=vb.get(e);if(i!==void 0)t=He[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eh(t)}var Sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(n){return n.replace(Sb,Mb)}function Mb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ab(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Xr&&(e="ENVMAP_MODE_REFRACTION"),e}function wb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case Pp:e="ENVMAP_BLENDING_ADD";break}return e}function Rb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Cb(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Eb(t),l=Tb(t),u=Ab(t),h=wb(t),d=Rb(t),p=xb(t),x=gb(s),g=r.createProgram(),m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(qo).join(`
`),f.length>0&&(f+=`
`)):(m=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),f=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?He.tonemapping_pars_fragment:"",t.toneMapping!==Ci?pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),o=eh(o),o=gm(o,t),o=_m(o,t),a=eh(a),a=gm(a,t),a=_m(a,t),o=ym(o),a=ym(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=A+m+o,E=A+f+a,T=pm(r,r.VERTEX_SHADER,_),M=pm(r,r.FRAGMENT_SHADER,E);r.attachShader(g,T),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(C){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(g)||"",W=r.getShaderInfoLog(T)||"",X=r.getShaderInfoLog(M)||"",P=k.trim(),I=W.trim(),U=X.trim(),L=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,T,M);else{let q=xm(r,T,"vertex"),Q=xm(r,M,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+q+`
`+Q)}else P!==""?ke("WebGLProgram: Program Info Log:",P):(I===""||U==="")&&(V=!1);V&&(C.diagnostics={runnable:L,programLog:P,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:f}})}r.deleteShader(T),r.deleteShader(M),O=new Ns(r,g),S=_b(r,g)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,cb)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ub++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=M,this}var Ib=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new nh(e),t.set(e,i)),i}},nh=class{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}};function Pb(n,e,t,i,r,s,o){let a=new ws,c=new th,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,C,k,W){let X=k.fog,P=W.geometry,I=S.isMeshStandardMaterial?k.environment:null,U=(S.isMeshStandardMaterial?t:e).get(S.envMap||I),L=U&&U.mapping===Bo?U.image.height:null,V=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&ke("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=q!==void 0?q.length:0,ne=0;P.morphAttributes.position!==void 0&&(ne=1),P.morphAttributes.normal!==void 0&&(ne=2),P.morphAttributes.color!==void 0&&(ne=3);let de,ge,Oe,$;if(V){let ot=fi[V];de=ot.vertexShader,ge=ot.fragmentShader}else de=S.vertexShader,ge=S.fragmentShader,c.update(S),Oe=c.getVertexShaderID(S),$=c.getFragmentShaderID(S);let J=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Be=W.isInstancedMesh===!0,Se=W.isBatchedMesh===!0,qe=!!S.map,zt=!!S.matcap,Xe=!!U,mt=!!S.aoMap,D=!!S.lightMap,Ye=!!S.bumpMap,$e=!!S.normalMap,ht=!!S.displacementMap,ve=!!S.emissiveMap,gt=!!S.metalnessMap,Te=!!S.roughnessMap,Ve=S.anisotropy>0,w=S.clearcoat>0,y=S.dispersion>0,z=S.iridescence>0,K=S.sheen>0,ee=S.transmission>0,Z=Ve&&!!S.anisotropyMap,Me=w&&!!S.clearcoatMap,ue=w&&!!S.clearcoatNormalMap,Ae=w&&!!S.clearcoatRoughnessMap,be=z&&!!S.iridescenceMap,te=z&&!!S.iridescenceThicknessMap,se=K&&!!S.sheenColorMap,De=K&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,pe=!!S.specularColorMap,Ue=!!S.specularIntensityMap,N=ee&&!!S.transmissionMap,fe=ee&&!!S.thicknessMap,oe=!!S.gradientMap,ae=!!S.alphaMap,ie=S.alphaTest>0,j=!!S.alphaHash,_e=!!S.extensions,ze=Ci;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ze=n.toneMapping);let dt={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:de,fragmentShader:ge,defines:S.defines,customVertexShaderID:Oe,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Se,batchingColor:Se&&W._colorsTexture!==null,instancing:Be,instancingColor:Be&&W.instanceColor!==null,instancingMorph:Be&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:zr,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:zt,envMap:Xe,envMapMode:Xe&&U.mapping,envMapCubeUVHeight:L,aoMap:mt,lightMap:D,bumpMap:Ye,normalMap:$e,displacementMap:d&&ht,emissiveMap:ve,normalMapObjectSpace:$e&&S.normalMapType===Hp,normalMapTangentSpace:$e&&S.normalMapType===Gp,metalnessMap:gt,roughnessMap:Te,anisotropy:Ve,anisotropyMap:Z,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:y,iridescence:z,iridescenceMap:be,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:pe,specularIntensityMap:Ue,transmission:ee,transmissionMap:N,thicknessMap:fe,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Br&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:ie,alphaHash:j,combine:S.combine,mapUv:qe&&g(S.map.channel),aoMapUv:mt&&g(S.aoMap.channel),lightMapUv:D&&g(S.lightMap.channel),bumpMapUv:Ye&&g(S.bumpMap.channel),normalMapUv:$e&&g(S.normalMap.channel),displacementMapUv:ht&&g(S.displacementMap.channel),emissiveMapUv:ve&&g(S.emissiveMap.channel),metalnessMapUv:gt&&g(S.metalnessMap.channel),roughnessMapUv:Te&&g(S.roughnessMap.channel),anisotropyMapUv:Z&&g(S.anisotropyMap.channel),clearcoatMapUv:Me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(S.sheenRoughnessMap.channel),specularMapUv:Ce&&g(S.specularMap.channel),specularColorMapUv:pe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ue&&g(S.specularIntensityMap.channel),transmissionMapUv:N&&g(S.transmissionMap.channel),thicknessMapUv:fe&&g(S.thicknessMap.channel),alphaMapUv:ae&&g(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&($e||Ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!P.attributes.uv&&(qe||ae),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ne,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&S.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function f(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(v,S),_(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function A(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function _(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){let v=x[S.type],C;if(v){let k=fi[v];C=em.clone(k.uniforms)}else C=S.uniforms;return C}function T(S,v){let C;for(let k=0,W=u.length;k<W;k++){let X=u[k];if(X.cacheKey===v){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Cb(n,v,S,s),u.push(C)),C}function M(S){if(--S.usedTimes===0){let v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function R(S){c.remove(S)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:T,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:O}}function Db(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Nb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sm(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,x,g,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function a(h,d,p,x,g,m){let f=o(h,d,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(h,d,p,x,g,m){let f=o(h,d,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Nb),i.length>1&&i.sort(d||bm),r.length>1&&r.sort(d||bm)}function u(){for(let h=e,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Lb(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Sm,n.set(i,[o])):r>=s.length?(o=new Sm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ob(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new nt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function Ub(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Fb=0;function Bb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kb(n){let e=new Ob,t=Ub(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Y);let r=new Y,s=new Lt,o=new Lt;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,x=0,g=0,m=0,f=0,A=0,_=0,E=0,T=0,M=0,R=0;l.sort(Bb);for(let S=0,v=l.length;S<v;S++){let C=l[S],k=C.color,W=C.intensity,X=C.distance,P=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=k.r*W,h+=k.g*W,d+=k.b*W;else if(C.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(C.sh.coefficients[I],W);R++}else if(C.isDirectionalLight){let I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let U=C.shadow,L=t.get(C);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=P,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=I,p++}else if(C.isSpotLight){let I=e.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(k).multiplyScalar(W),I.distance=X,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,i.spot[g]=I;let U=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,U.updateMatrices(C),C.castShadow&&M++),i.spotLightMatrix[g]=U.matrix,C.castShadow){let L=t.get(C);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,i.spotShadow[g]=L,i.spotShadowMap[g]=P,E++}g++}else if(C.isRectAreaLight){let I=e.get(C);I.color.copy(k).multiplyScalar(W),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=I,m++}else if(C.isPointLight){let I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){let U=C.shadow,L=t.get(C);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,L.shadowCameraNear=U.camera.near,L.shadowCameraFar=U.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=P,i.pointShadowMatrix[x]=C.shadow.matrix,_++}i.point[x]=I,x++}else if(C.isHemisphereLight){let I=e.get(C);I.skyColor.copy(C.color).multiplyScalar(W),I.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[f]=I,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let O=i.hash;(O.directionalLength!==p||O.pointLength!==x||O.spotLength!==g||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==A||O.numPointShadows!==_||O.numSpotShadows!==E||O.numSpotMaps!==T||O.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,O.directionalLength=p,O.pointLength=x,O.spotLength=g,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=A,O.numPointShadows=_,O.numSpotShadows=E,O.numSpotMaps=T,O.numLightProbes=R,i.version=Fb++)}function c(l,u){let h=0,d=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){let _=l[f];if(_.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(_.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:i}}function Mm(n){let e=new kb(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function zb(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Mm(n),e.set(r,[a])):s>=o.length?(a=new Mm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
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
}`;function Hb(n,e,t){let i=new Do,r=new tt,s=new tt,o=new Ct,a=new _l({depthPacking:Vp}),c=new yl,l={},u=t.maxTextureSize,h={[Ti]:en,[en]:Ti,[ai]:ai},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Vb,fragmentShader:Gb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ri;x.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Sn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let f=this.type;this.render=function(M,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),k=n.state;k.setBlending(li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let W=f!==oi&&this.type===oi,X=f===oi&&this.type!==oi;for(let P=0,I=M.length;P<I;P++){let U=M[P],L=U.shadow;if(L===void 0){ke("WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let V=L.getFrameExtents();if(r.multiply(V),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,L.mapSize.y=s.y)),L.map===null||W===!0||X===!0){let Q=this.type!==oi?{minFilter:an,magFilter:an}:{};L.map!==null&&L.map.dispose(),L.map=new ri(r.x,r.y,Q),L.map.texture.name=U.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();let q=L.getViewportCount();for(let Q=0;Q<q;Q++){let ne=L.getViewport(Q);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),k.viewport(o),L.updateMatrices(U,Q),i=L.getFrustum(),E(R,O,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===oi&&A(L,O),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,v,C)};function A(M,R){let O=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ri(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,O,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,O,p,g,null)}function _(M,R,O,S){let v=null,C=O.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)v=C;else if(v=O.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=v.uuid,W=R.uuid,X=l[k];X===void 0&&(X={},l[k]=X);let P=X[W];P===void 0&&(P=v.clone(),X[W]=P,R.addEventListener("dispose",T)),v=P}if(v.visible=R.visible,v.wireframe=R.wireframe,S===oi?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let k=n.properties.get(v);k.light=O}return v}function E(M,R,O,S,v){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===oi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld);let W=e.update(M),X=M.material;if(Array.isArray(X)){let P=W.groups;for(let I=0,U=P.length;I<U;I++){let L=P[I],V=X[L.materialIndex];if(V&&V.visible){let q=_(M,V,S,v);M.onBeforeShadow(n,M,R,O,W,q,L),n.renderBufferDirect(O,null,W,q,M,L),M.onAfterShadow(n,M,R,O,W,q,L)}}}else if(X.visible){let P=_(M,X,S,v);M.onBeforeShadow(n,M,R,O,W,P,null),n.renderBufferDirect(O,null,W,P,M,null),M.onAfterShadow(n,M,R,O,W,P,null)}}let k=M.children;for(let W=0,X=k.length;W<X;W++)E(k[W],R,O,S,v)}function T(M){M.target.removeEventListener("dispose",T);for(let O in l){let S=l[O],v=M.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var Wb={[Pl]:Dl,[Nl]:Ul,[Ll]:Fl,[kr]:Ol,[Dl]:Pl,[Ul]:Nl,[Fl]:Ll,[Ol]:kr};function Xb(n,e){function t(){let N=!1,fe=new Ct,oe=null,ae=new Ct(0,0,0,0);return{setMask:function(ie){oe!==ie&&!N&&(n.colorMask(ie,ie,ie,ie),oe=ie)},setLocked:function(ie){N=ie},setClear:function(ie,j,_e,ze,dt){dt===!0&&(ie*=ze,j*=ze,_e*=ze),fe.set(ie,j,_e,ze),ae.equals(fe)===!1&&(n.clearColor(ie,j,_e,ze),ae.copy(fe))},reset:function(){N=!1,oe=null,ae.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,oe=null,ae=null,ie=null;return{setReversed:function(j){if(fe!==j){let _e=e.get("EXT_clip_control");j?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),fe=j;let ze=ie;ie=null,this.setClear(ze)}},getReversed:function(){return fe},setTest:function(j){j?J(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(j){oe!==j&&!N&&(n.depthMask(j),oe=j)},setFunc:function(j){if(fe&&(j=Wb[j]),ae!==j){switch(j){case Pl:n.depthFunc(n.NEVER);break;case Dl:n.depthFunc(n.ALWAYS);break;case Nl:n.depthFunc(n.LESS);break;case kr:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Ol:n.depthFunc(n.GEQUAL);break;case Ul:n.depthFunc(n.GREATER);break;case Fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=j}},setLocked:function(j){N=j},setClear:function(j){ie!==j&&(fe&&(j=1-j),n.clearDepth(j),ie=j)},reset:function(){N=!1,oe=null,ae=null,ie=null,fe=!1}}}function r(){let N=!1,fe=null,oe=null,ae=null,ie=null,j=null,_e=null,ze=null,dt=null;return{setTest:function(ot){N||(ot?J(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(ot){fe!==ot&&!N&&(n.stencilMask(ot),fe=ot)},setFunc:function(ot,$n,Un){(oe!==ot||ae!==$n||ie!==Un)&&(n.stencilFunc(ot,$n,Un),oe=ot,ae=$n,ie=Un)},setOp:function(ot,$n,Un){(j!==ot||_e!==$n||ze!==Un)&&(n.stencilOp(ot,$n,Un),j=ot,_e=$n,ze=Un)},setLocked:function(ot){N=ot},setClear:function(ot){dt!==ot&&(n.clearStencil(ot),dt=ot)},reset:function(){N=!1,fe=null,oe=null,ae=null,ie=null,j=null,_e=null,ze=null,dt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,p=[],x=null,g=!1,m=null,f=null,A=null,_=null,E=null,T=null,M=null,R=new nt(0,0,0),O=0,S=!1,v=null,C=null,k=null,W=null,X=null,P=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,U=0,L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(L)[1]),I=U>=1):L.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),I=U>=2);let V=null,q={},Q=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),de=new Ct().fromArray(Q),ge=new Ct().fromArray(ne);function Oe(N,fe,oe,ae){let ie=new Uint8Array(4),j=n.createTexture();n.bindTexture(N,j),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<oe;_e++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(fe+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return j}let $={};$[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(kr),Ye(!1),$e(Ef),J(n.CULL_FACE),mt(li);function J(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function me(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Be(N,fe){return h[N]!==fe?(n.bindFramebuffer(N,fe),h[N]=fe,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(N,fe){let oe=p,ae=!1;if(N){oe=d.get(fe),oe===void 0&&(oe=[],d.set(fe,oe));let ie=N.textures;if(oe.length!==ie.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let j=0,_e=ie.length;j<_e;j++)oe[j]=n.COLOR_ATTACHMENT0+j;oe.length=ie.length,ae=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ae=!0);ae&&n.drawBuffers(oe)}function qe(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let zt={[tr]:n.FUNC_ADD,[dp]:n.FUNC_SUBTRACT,[pp]:n.FUNC_REVERSE_SUBTRACT};zt[mp]=n.MIN,zt[xp]=n.MAX;let Xe={[gp]:n.ZERO,[_p]:n.ONE,[yp]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[Tp]:n.SRC_ALPHA_SATURATE,[Mp]:n.DST_COLOR,[bp]:n.DST_ALPHA,[vp]:n.ONE_MINUS_SRC_COLOR,[ll]:n.ONE_MINUS_SRC_ALPHA,[Ep]:n.ONE_MINUS_DST_COLOR,[Sp]:n.ONE_MINUS_DST_ALPHA,[Ap]:n.CONSTANT_COLOR,[wp]:n.ONE_MINUS_CONSTANT_COLOR,[Rp]:n.CONSTANT_ALPHA,[Cp]:n.ONE_MINUS_CONSTANT_ALPHA};function mt(N,fe,oe,ae,ie,j,_e,ze,dt,ot){if(N===li){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),N!==hp){if(N!==m||ot!==S){if((f!==tr||E!==tr)&&(n.blendEquation(n.FUNC_ADD),f=tr,E=tr),ot)switch(N){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Af:n.blendFunc(n.ONE,n.ONE);break;case wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Af:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wf:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rf:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}A=null,_=null,T=null,M=null,R.set(0,0,0),O=0,m=N,S=ot}return}ie=ie||fe,j=j||oe,_e=_e||ae,(fe!==f||ie!==E)&&(n.blendEquationSeparate(zt[fe],zt[ie]),f=fe,E=ie),(oe!==A||ae!==_||j!==T||_e!==M)&&(n.blendFuncSeparate(Xe[oe],Xe[ae],Xe[j],Xe[_e]),A=oe,_=ae,T=j,M=_e),(ze.equals(R)===!1||dt!==O)&&(n.blendColor(ze.r,ze.g,ze.b,dt),R.copy(ze),O=dt),m=N,S=!1}function D(N,fe){N.side===ai?me(n.CULL_FACE):J(n.CULL_FACE);let oe=N.side===en;fe&&(oe=!oe),Ye(oe),N.blending===Br&&N.transparent===!1?mt(li):mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let ae=N.stencilWrite;a.setTest(ae),ae&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){v!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),v=N)}function $e(N){N!==cp?(J(n.CULL_FACE),N!==C&&(N===Ef?n.cullFace(n.BACK):N===up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),C=N}function ht(N){N!==k&&(I&&n.lineWidth(N),k=N)}function ve(N,fe,oe){N?(J(n.POLYGON_OFFSET_FILL),(W!==fe||X!==oe)&&(n.polygonOffset(fe,oe),W=fe,X=oe)):me(n.POLYGON_OFFSET_FILL)}function gt(N){N?J(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Te(N){N===void 0&&(N=n.TEXTURE0+P-1),V!==N&&(n.activeTexture(N),V=N)}function Ve(N,fe,oe){oe===void 0&&(V===null?oe=n.TEXTURE0+P-1:oe=V);let ae=q[oe];ae===void 0&&(ae={type:void 0,texture:void 0},q[oe]=ae),(ae.type!==N||ae.texture!==fe)&&(V!==oe&&(n.activeTexture(oe),V=oe),n.bindTexture(N,fe||$[N]),ae.type=N,ae.texture=fe)}function w(){let N=q[V];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function K(){try{n.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function ee(){try{n.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function ue(){try{n.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Ae(){try{n.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function be(){try{n.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function te(){try{n.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function se(N){de.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function De(N){ge.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function Ce(N,fe){let oe=l.get(fe);oe===void 0&&(oe=new WeakMap,l.set(fe,oe));let ae=oe.get(N);ae===void 0&&(ae=n.getUniformBlockIndex(fe,N.name),oe.set(N,ae))}function pe(N,fe){let ae=l.get(fe).get(N);c.get(fe)!==ae&&(n.uniformBlockBinding(fe,ae,N.__bindingPointIndex),c.set(fe,ae))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},V=null,q={},h={},d=new WeakMap,p=[],x=null,g=!1,m=null,f=null,A=null,_=null,E=null,T=null,M=null,R=new nt(0,0,0),O=0,S=!1,v=null,C=null,k=null,W=null,X=null,de.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:me,bindFramebuffer:Be,drawBuffers:Se,useProgram:qe,setBlending:mt,setMaterial:D,setFlipSided:Ye,setCullFace:$e,setLineWidth:ht,setPolygonOffset:ve,setScissorTest:gt,activeTexture:Te,bindTexture:Ve,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:be,texImage3D:te,updateUBOMapping:Ce,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:Me,scissor:se,viewport:De,reset:Ue}}function qb(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,y){return p?new OffscreenCanvas(w,y):To("canvas")}function g(w,y,z){let K=1,ee=Ve(w);if((ee.width>z||ee.height>z)&&(K=z/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor(K*ee.width),Me=Math.floor(K*ee.height);h===void 0&&(h=x(Z,Me));let ue=y?x(Z,Me):h;return ue.width=Z,ue.height=Me,ue.getContext("2d").drawImage(w,0,0,Z,Me),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Me+")."),ue}else return"data"in w&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(w,y,z,K,ee=!1){if(w!==null){if(n[w]!==void 0)return n[w];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=y;if(y===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),y===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),y===n.RGBA){let Me=ee?Mo:Je.getTransfer(K);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=Me===st?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(w,y){let z;return w?y===null||y===lr||y===Is?z=n.DEPTH24_STENCIL8:y===ui?z=n.DEPTH32F_STENCIL8:y===Cs&&(z=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===lr||y===Is?z=n.DEPTH_COMPONENT24:y===ui?z=n.DEPTH_COMPONENT32F:y===Cs&&(z=n.DEPTH_COMPONENT16),z}function T(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function M(w){let y=w.target;y.removeEventListener("dispose",M),O(y),y.isVideoTexture&&u.delete(y)}function R(w){let y=w.target;y.removeEventListener("dispose",R),v(y)}function O(w){let y=i.get(w);if(y.__webglInit===void 0)return;let z=w.source,K=d.get(z);if(K){let ee=K[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(w),Object.keys(K).length===0&&d.delete(z)}i.remove(w)}function S(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let z=w.source,K=d.get(z);delete K[y.__cacheKey],o.memory.textures--}function v(w){let y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let ee=0;ee<y.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=w.textures;for(let K=0,ee=z.length;K<ee;K++){let Z=i.get(z[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(w)}let C=0;function k(){C=0}function W(){let w=C;return w>=r.maxTextures&&ke("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function X(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function P(w,y){let z=i.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let K=w.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,w,y);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function I(w,y){let z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){$(z,w,y);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function U(w,y){let z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){$(z,w,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function L(w,y){let z=i.get(w);if(w.version>0&&z.__version!==w.version){J(z,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}let V={[cl]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},q={[an]:n.NEAREST,[kp]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[zl]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},Q={[Wp]:n.NEVER,[Kp]:n.ALWAYS,[Xp]:n.LESS,[Bf]:n.LEQUAL,[qp]:n.EQUAL,[Zp]:n.GEQUAL,[Yp]:n.GREATER,[$p]:n.NOTEQUAL};function ne(w,y){if(y.type===ui&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bn||y.magFilter===zl||y.magFilter===ko||y.magFilter===ar||y.minFilter===bn||y.minFilter===zl||y.minFilter===ko||y.minFilter===ar)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,V[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,V[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,V[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,q[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Q[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===an||y.minFilter!==ko&&y.minFilter!==ar||y.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function de(w,y){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",M));let K=y.source,ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));let Z=X(y);if(Z!==w.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[Z].usedTimes++;let Me=ee[w.__cacheKey];Me!==void 0&&(ee[w.__cacheKey].usedTimes--,Me.usedTimes===0&&S(y)),w.__cacheKey=Z,w.__webglTexture=ee[Z].texture}return z}function ge(w,y,z){return Math.floor(Math.floor(w/z)/y)}function Oe(w,y,z,K){let Z=w.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,K,y.data);else{Z.sort((te,se)=>te.start-se.start);let Me=0;for(let te=1;te<Z.length;te++){let se=Z[Me],De=Z[te],Ce=se.start+se.count,pe=ge(De.start,y.width,4),Ue=ge(se.start,y.width,4);De.start<=Ce+1&&pe===Ue&&ge(De.start+De.count-1,y.width,4)===pe?se.count=Math.max(se.count,De.start+De.count-se.start):(++Me,Z[Me]=De)}Z.length=Me+1;let ue=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let te=0,se=Z.length;te<se;te++){let De=Z[te],Ce=Math.floor(De.start/4),pe=Math.ceil(De.count/4),Ue=Ce%y.width,N=Math.floor(Ce/y.width),fe=pe,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Ue,N,fe,oe,z,K,y.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function $(w,y,z){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);let ee=de(w,y),Z=y.source;t.bindTexture(K,w.__webglTexture,n.TEXTURE0+z);let Me=i.get(Z);if(Z.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let ue=Je.getPrimaries(Je.workingColorSpace),Ae=y.colorSpace===Ii?null:Je.getPrimaries(y.colorSpace),be=y.colorSpace===Ii||ue===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let te=g(y.image,!1,r.maxTextureSize);te=Te(y,te);let se=s.convert(y.format,y.colorSpace),De=s.convert(y.type),Ce=_(y.internalFormat,se,De,y.colorSpace,y.isVideoTexture);ne(K,y);let pe,Ue=y.mipmaps,N=y.isVideoTexture!==!0,fe=Me.__version===void 0||ee===!0,oe=Z.dataReady,ae=T(y,te);if(y.isDepthTexture)Ce=E(y.format===Ps,y.type),fe&&(N?t.texStorage2D(n.TEXTURE_2D,1,Ce,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ce,te.width,te.height,0,se,De,null));else if(y.isDataTexture)if(Ue.length>0){N&&fe&&t.texStorage2D(n.TEXTURE_2D,ae,Ce,Ue[0].width,Ue[0].height);for(let ie=0,j=Ue.length;ie<j;ie++)pe=Ue[ie],N?oe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,De,pe.data):t.texImage2D(n.TEXTURE_2D,ie,Ce,pe.width,pe.height,0,se,De,pe.data);y.generateMipmaps=!1}else N?(fe&&t.texStorage2D(n.TEXTURE_2D,ae,Ce,te.width,te.height),oe&&Oe(y,te,se,De)):t.texImage2D(n.TEXTURE_2D,0,Ce,te.width,te.height,0,se,De,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Ce,Ue[0].width,Ue[0].height,te.depth);for(let ie=0,j=Ue.length;ie<j;ie++)if(pe=Ue[ie],y.format!==Ln)if(se!==null)if(N){if(oe)if(y.layerUpdates.size>0){let _e=Xf(pe.width,pe.height,y.format,y.type);for(let ze of y.layerUpdates){let dt=pe.data.subarray(ze*_e/pe.data.BYTES_PER_ELEMENT,(ze+1)*_e/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ze,pe.width,pe.height,1,se,dt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ce,pe.width,pe.height,te.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,se,De,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ce,pe.width,pe.height,te.depth,0,se,De,pe.data)}else{N&&fe&&t.texStorage2D(n.TEXTURE_2D,ae,Ce,Ue[0].width,Ue[0].height);for(let ie=0,j=Ue.length;ie<j;ie++)pe=Ue[ie],y.format!==Ln?se!==null?N?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ce,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?oe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,De,pe.data):t.texImage2D(n.TEXTURE_2D,ie,Ce,pe.width,pe.height,0,se,De,pe.data)}else if(y.isDataArrayTexture)if(N){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Ce,te.width,te.height,te.depth),oe)if(y.layerUpdates.size>0){let ie=Xf(te.width,te.height,y.format,y.type);for(let j of y.layerUpdates){let _e=te.data.subarray(j*ie/te.data.BYTES_PER_ELEMENT,(j+1)*ie/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,se,De,_e)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,De,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,te.width,te.height,te.depth,0,se,De,te.data);else if(y.isData3DTexture)N?(fe&&t.texStorage3D(n.TEXTURE_3D,ae,Ce,te.width,te.height,te.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,De,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,te.width,te.height,te.depth,0,se,De,te.data);else if(y.isFramebufferTexture){if(fe)if(N)t.texStorage2D(n.TEXTURE_2D,ae,Ce,te.width,te.height);else{let ie=te.width,j=te.height;for(let _e=0;_e<ae;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ce,ie,j,0,se,De,null),ie>>=1,j>>=1}}else if(Ue.length>0){if(N&&fe){let ie=Ve(Ue[0]);t.texStorage2D(n.TEXTURE_2D,ae,Ce,ie.width,ie.height)}for(let ie=0,j=Ue.length;ie<j;ie++)pe=Ue[ie],N?oe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,se,De,pe):t.texImage2D(n.TEXTURE_2D,ie,Ce,se,De,pe);y.generateMipmaps=!1}else if(N){if(fe){let ie=Ve(te);t.texStorage2D(n.TEXTURE_2D,ae,Ce,ie.width,ie.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,De,te)}else t.texImage2D(n.TEXTURE_2D,0,Ce,se,De,te);m(y)&&f(K),Me.__version=Z.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function J(w,y,z){if(y.image.length!==6)return;let K=de(w,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let Z=i.get(ee);if(ee.version!==Z.__version||K===!0){t.activeTexture(n.TEXTURE0+z);let Me=Je.getPrimaries(Je.workingColorSpace),ue=y.colorSpace===Ii?null:Je.getPrimaries(y.colorSpace),Ae=y.colorSpace===Ii||Me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let be=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!be&&!te?se[j]=g(y.image[j],!0,r.maxCubemapSize):se[j]=te?y.image[j].image:y.image[j],se[j]=Te(y,se[j]);let De=se[0],Ce=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),Ue=_(y.internalFormat,Ce,pe,y.colorSpace),N=y.isVideoTexture!==!0,fe=Z.__version===void 0||K===!0,oe=ee.dataReady,ae=T(y,De);ne(n.TEXTURE_CUBE_MAP,y);let ie;if(be){N&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ue,De.width,De.height);for(let j=0;j<6;j++){ie=se[j].mipmaps;for(let _e=0;_e<ie.length;_e++){let ze=ie[_e];y.format!==Ln?Ce!==null?N?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,Ue,ze.width,ze.height,0,ze.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,ze.width,ze.height,Ce,pe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,Ue,ze.width,ze.height,0,Ce,pe,ze.data)}}}else{if(ie=y.mipmaps,N&&fe){ie.length>0&&ae++;let j=Ve(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(te){N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,Ce,pe,se[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,se[j].width,se[j].height,0,Ce,pe,se[j].data);for(let _e=0;_e<ie.length;_e++){let dt=ie[_e].image[j].image;N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,dt.width,dt.height,Ce,pe,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,Ue,dt.width,dt.height,0,Ce,pe,dt.data)}}else{N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,pe,se[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,Ce,pe,se[j]);for(let _e=0;_e<ie.length;_e++){let ze=ie[_e];N?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,Ce,pe,ze.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,Ue,Ce,pe,ze.image[j])}}}m(y)&&f(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function me(w,y,z,K,ee,Z){let Me=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),Ae=_(z.internalFormat,Me,ue,z.colorSpace),be=i.get(y),te=i.get(z);if(te.__renderTarget=y,!be.__hasExternalTextures){let se=Math.max(1,y.width>>Z),De=Math.max(1,y.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,Ae,se,De,y.depth,0,Me,ue,null):t.texImage2D(ee,Z,Ae,se,De,0,Me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ve(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,te.__webglTexture,0,ht(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,te.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(w,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let K=y.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Z=E(y.stencilBuffer,ee),Me=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=ht(y);ve(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Z,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Z,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,w)}else{let K=y.textures;for(let ee=0;ee<K.length;ee++){let Z=K[ee],Me=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),Ae=_(Z.internalFormat,Me,ue,Z.colorSpace),be=ht(y);z&&ve(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Ae,y.width,y.height):ve(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,Ae,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),P(y.depthTexture,0);let ee=K.__webglTexture,Z=ht(y);if(y.depthTexture.format===Ss)ve(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Ps)ve(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(w){let y=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let K=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=K}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let K=w.texture.mipmaps;K&&K.length>0?Se(y.__webglFramebuffer[0],w):Se(y.__webglFramebuffer,w)}else if(z){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),Be(y.__webglDepthbuffer[K],w,!1);else{let ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else{let K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Be(y.__webglDepthbuffer,w,!1);else{let ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(w,y,z){let K=i.get(w);y!==void 0&&me(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&qe(w)}function Xe(w){let y=w.texture,z=i.get(w),K=i.get(y);w.addEventListener("dispose",R);let ee=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<y.mipmaps.length;Ae++)z.__webglFramebuffer[ue][Ae]=n.createFramebuffer()}else z.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)z.__webglFramebuffer[ue]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ue=0,Ae=ee.length;ue<Ae;ue++){let be=i.get(ee[ue]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ve(w)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){let Ae=ee[ue];z.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ue]);let be=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),se=_(Ae.internalFormat,be,te,Ae.colorSpace,w.isXRRenderTarget===!0),De=ht(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,se,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,z.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ne(n.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)me(z.__webglFramebuffer[ue][Ae],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else me(z.__webglFramebuffer[ue],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,Ae=ee.length;ue<Ae;ue++){let be=ee[ue],te=i.get(be),se=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),ne(se,be),me(z.__webglFramebuffer,w,be,n.COLOR_ATTACHMENT0+ue,se,0),m(be)&&f(se)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),ne(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let Ae=0;Ae<y.mipmaps.length;Ae++)me(z.__webglFramebuffer[Ae],w,y,n.COLOR_ATTACHMENT0,ue,Ae);else me(z.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,ue,0);m(y)&&f(ue),t.unbindTexture()}w.depthBuffer&&qe(w)}function mt(w){let y=w.textures;for(let z=0,K=y.length;z<K;z++){let ee=y[z];if(m(ee)){let Z=A(w),Me=i.get(ee).__webglTexture;t.bindTexture(Z,Me),f(Z),t.unbindTexture()}}}let D=[],Ye=[];function $e(w){if(w.samples>0){if(ve(w)===!1){let y=w.textures,z=w.width,K=w.height,ee=n.COLOR_BUFFER_BIT,Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(w),ue=y.length>1;if(ue)for(let be=0;be<y.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Ae=w.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let be=0;be<y.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);let te=i.get(y[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,ee,n.NEAREST),c===!0&&(D.length=0,Ye.length=0,D.push(n.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(D.push(Z),Ye.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let be=0;be<y.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);let te=i.get(y[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ht(w){return Math.min(r.maxSamples,w.samples)}function ve(w){let y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(w){let y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Te(w,y){let z=w.colorSpace,K=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==zr&&z!==Ii&&(Je.getTransfer(z)===st?(K!==Ln||ee!==ci)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",z)),y}function Ve(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=P,this.setTexture2DArray=I,this.setTexture3D=U,this.setTextureCube=L,this.rebindTextures=zt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ve}function Yb(n,e){function t(i,r=Ii){let s,o=Je.getTransfer(r);if(i===ci)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pf)return n.BYTE;if(i===Df)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===Vl)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===qr)return n.HALF_FLOAT;if(i===Of)return n.ALPHA;if(i===Uf)return n.RGB;if(i===Ln)return n.RGBA;if(i===Ss)return n.DEPTH_COMPONENT;if(i===Ps)return n.DEPTH_STENCIL;if(i===Ff)return n.RED;if(i===Wl)return n.RED_INTEGER;if(i===Xl)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===zo||i===Vo||i===Go||i===Ho)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Zl||i===Kl||i===Jl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$l)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jl||i===Ql||i===ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jl||i===Ql)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ec)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===hc||i===dc||i===pc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===xc||i===gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===yc||i===vc||i===bc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_c)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var $b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
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

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Nn({vertexShader:$b,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends Ai{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,x=null,g=typeof XRWebGLBinding<"u",m=new ih,f={},A=t.getContextAttributes(),_=null,E=null,T=[],M=[],R=new tt,O=null,S=new Nt;S.viewport=new Ct;let v=new Nt;v.viewport=new Ct;let C=[S,v],k=new Il,W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=T[$];return J===void 0&&(J=new Rs,T[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=T[$];return J===void 0&&(J=new Rs,T[$]=J),J.getGripSpace()},this.getHand=function($){let J=T[$];return J===void 0&&(J=new Rs,T[$]=J),J.getHandSpace()};function P($){let J=M.indexOf($.inputSource);if(J===-1)return;let me=T[J];me!==void 0&&(me.update($.inputSource,$.frame,l||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",U);for(let $=0;$<T.length;$++){let J=M[$];J!==null&&(M[$]=null,T[$].disconnect(J))}W=null,X=null,m.reset();for(let $ in f)delete f[$];e.setRenderTarget(_),p=null,d=null,h=null,r=null,E=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",I),r.addEventListener("inputsourceschange",U),A.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Be=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=A.stencil?Ps:Ss,Be=A.stencil?Is:lr);let qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ri(d.textureWidth,d.textureHeight,{format:Ln,type:ci,depthTexture:new No(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ri(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U($){for(let J=0;J<$.removed.length;J++){let me=$.removed[J],Be=M.indexOf(me);Be>=0&&(M[Be]=null,T[Be].disconnect(me))}for(let J=0;J<$.added.length;J++){let me=$.added[J],Be=M.indexOf(me);if(Be===-1){for(let qe=0;qe<T.length;qe++)if(qe>=M.length){M.push(me),Be=qe;break}else if(M[qe]===null){M[qe]=me,Be=qe;break}if(Be===-1)break}let Se=T[Be];Se&&Se.connect(me)}}let L=new Y,V=new Y;function q($,J,me){L.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);let Be=L.distanceTo(V),Se=J.projectionMatrix.elements,qe=me.projectionMatrix.elements,zt=Se[14]/(Se[10]-1),Xe=Se[14]/(Se[10]+1),mt=(Se[9]+1)/Se[5],D=(Se[9]-1)/Se[5],Ye=(Se[8]-1)/Se[0],$e=(qe[8]+1)/qe[0],ht=zt*Ye,ve=zt*$e,gt=Be/(-Ye+$e),Te=gt*-Ye;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Te),$.translateZ(gt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Ve=zt+gt,w=Xe+gt,y=ht-Te,z=ve+(Be-Te),K=mt*Xe/w*Ve,ee=D*Xe/w*Ve;$.projectionMatrix.makePerspective(y,z,K,ee,Ve,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,me=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=v.near=S.near=J,k.far=v.far=S.far=me,(W!==k.near||X!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),W=k.near,X=k.far),k.layers.mask=$.layers.mask|6,S.layers.mask=k.layers.mask&3,v.layers.mask=k.layers.mask&5;let Be=$.parent,Se=k.cameras;Q(k,Be);for(let qe=0;qe<Se.length;qe++)Q(Se[qe],Be);Se.length===2?q(k,S,v):k.projectionMatrix.copy(S.projectionMatrix),ne($,k,Be)};function ne($,J,me){me===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return f[$]};let de=null;function ge($,J){if(u=J.getViewerPose(l||o),x=J,u!==null){let me=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Be=!1;me.length!==k.cameras.length&&(k.cameras.length=0,Be=!0);for(let Xe=0;Xe<me.length;Xe++){let mt=me[Xe],D=null;if(p!==null)D=p.getViewport(mt);else{let $e=h.getViewSubImage(d,mt);D=$e.viewport,Xe===0&&(e.setRenderTargetTextures(E,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(E))}let Ye=C[Xe];Ye===void 0&&(Ye=new Nt,Ye.layers.enable(Xe),Ye.viewport=new Ct,C[Xe]=Ye),Ye.matrix.fromArray(mt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(mt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(D.x,D.y,D.width,D.height),Xe===0&&(k.matrix.copy(Ye.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Be===!0&&k.cameras.push(Ye)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let Xe=h.getDepthInformation(me[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(Se&&Se.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let Xe=0;Xe<me.length;Xe++){let mt=me[Xe].camera;if(mt){let D=f[mt];D||(D=new Lo,f[mt]=D);let Ye=h.getCameraImage(mt);D.sourceTexture=Ye}}}}for(let me=0;me<T.length;me++){let Be=M[me],Se=T[me];Be!==null&&Se!==void 0&&Se.update(Be,J,l||o)}de&&de($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}let Oe=new Em;Oe.setAnimationLoop(ge),this.setAnimationLoop=function($){de=$},this.dispose=function(){}}},Zr=new si,Kb=new Lt;function Jb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Gf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,A,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=e.get(f),_=A.envMap,E=A.envMapRotation;_&&(m.envMap.value=_,Zr.copy(E),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.envMapRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(Zr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jb(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,_){let E=_.program;i.uniformBlockBinding(A,E)}function l(A,_){let E=r[A.id];E===void 0&&(x(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));let T=_.program;i.updateUBOMapping(A,T);let M=e.render.frame;s[A.id]!==M&&(d(A),s[A.id]=M)}function u(A){let _=h();A.__bindingPointIndex=_;let E=n.createBuffer(),T=A.__size,M=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let _=r[A.id],E=A.uniforms,T=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,R=E.length;M<R;M++){let O=Array.isArray(E[M])?E[M]:[E[M]];for(let S=0,v=O.length;S<v;S++){let C=O[S];if(p(C,M,S,T)===!0){let k=C.__offset,W=Array.isArray(C.value)?C.value:[C.value],X=0;for(let P=0;P<W.length;P++){let I=W[P],U=g(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,k+X,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,_,E,T){let M=A.value,R=_+"_"+E;if(T[R]===void 0)return typeof M=="number"||typeof M=="boolean"?T[R]=M:T[R]=M.clone(),!0;{let O=T[R];if(typeof M=="number"||typeof M=="boolean"){if(O!==M)return T[R]=M,!0}else if(O.equals(M)===!1)return O.copy(M),!0}return!1}function x(A){let _=A.uniforms,E=0,T=16;for(let R=0,O=_.length;R<O;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let v=0,C=S.length;v<C;v++){let k=S[v],W=Array.isArray(k.value)?k.value:[k.value];for(let X=0,P=W.length;X<P;X++){let I=W[X],U=g(I),L=E%T,V=L%U.boundary,q=L+V;E+=V,q!==0&&T-q<U.storage&&(E+=T-q),k.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=U.storage}}}let M=E%T;return M>0&&(E+=T-M),A.__size=E,A.__cache={},this}function g(A){let _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",A),_}function m(A){let _=A.target;_.removeEventListener("dispose",m);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(let A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var Qb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Pi=null;function eS(){return Pi===null&&(Pi=new rr(Qb,32,32,Xl,qr),Pi.minFilter=bn,Pi.magFilter=bn,Pi.wrapS=ni,Pi.wrapT=ni,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var ur=class{constructor(e={}){let{canvas:t=Jp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=new Set([Yl,ql,Wl]),g=new Set([ci,lr,Cs,Is,Gl,Hl]),m=new Uint32Array(4),f=new Int32Array(4),A=null,_=null,E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,R=!1;this._outputColorSpace=yn;let O=0,S=0,v=null,C=-1,k=null,W=new Ct,X=new Ct,P=null,I=new nt(0),U=0,L=t.width,V=t.height,q=1,Q=null,ne=null,de=new Ct(0,0,L,V),ge=new Ct(0,0,L,V),Oe=!1,$=new Do,J=!1,me=!1,Be=new Lt,Se=new Y,qe=new Ct,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function mt(){return v===null?q:1}let D=i;function Ye(b,F){return t.getContext(b,F)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){let F="webgl2";if(D=Ye(F,b),D===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let $e,ht,ve,gt,Te,Ve,w,y,z,K,ee,Z,Me,ue,Ae,be,te,se,De,Ce,pe,Ue,N,fe;function oe(){$e=new xv(D),$e.init(),Ue=new Yb(D,$e),ht=new av(D,$e,e,Ue),ve=new Xb(D,$e),ht.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),gt=new yv(D),Te=new Db,Ve=new qb(D,$e,ve,Te,ht,Ue,gt),w=new cv(M),y=new mv(M),z=new Mg(D),N=new sv(D,z),K=new gv(D,z,gt,N),ee=new bv(D,K,z,gt),De=new vv(D,ht,Ve),be=new lv(Te),Z=new Pb(M,w,y,$e,ht,N,be),Me=new Jb(M,Te),ue=new Lb,Ae=new zb($e),se=new rv(M,w,y,ve,ee,p,c),te=new Hb(M,ee,ht),fe=new jb(D,gt,ht,ve),Ce=new ov(D,$e,gt),pe=new _v(D,$e,gt),gt.programs=Z.programs,M.capabilities=ht,M.extensions=$e,M.properties=Te,M.renderLists=ue,M.shadowMap=te,M.state=ve,M.info=gt}oe();let ae=new rh(M,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=$e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=$e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(L,V,!1))},this.getSize=function(b){return b.set(L,V)},this.setSize=function(b,F,G=!0){if(ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,V=F,t.width=Math.floor(b*q),t.height=Math.floor(F*q),G===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(L*q,V*q).floor()},this.setDrawingBufferSize=function(b,F,G){L=b,V=F,q=G,t.width=Math.floor(b*G),t.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(W)},this.getViewport=function(b){return b.copy(de)},this.setViewport=function(b,F,G,H){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,F,G,H),ve.viewport(W.copy(de).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,F,G,H){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,F,G,H),ve.scissor(X.copy(ge).multiplyScalar(q).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){ve.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,G=!0){let H=0;if(b){let B=!1;if(v!==null){let re=v.texture.format;B=x.has(re)}if(B){let re=v.texture.type,he=g.has(re),ye=se.getClearColor(),xe=se.getClearAlpha(),Pe=ye.r,Le=ye.g,Ee=ye.b;he?(m[0]=Pe,m[1]=Le,m[2]=Ee,m[3]=xe,D.clearBufferuiv(D.COLOR,0,m)):(f[0]=Pe,f[1]=Le,f[2]=Ee,f[3]=xe,D.clearBufferiv(D.COLOR,0,f))}else H|=D.COLOR_BUFFER_BIT}F&&(H|=D.DEPTH_BUFFER_BIT),G&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),se.dispose(),ue.dispose(),Ae.dispose(),Te.dispose(),w.dispose(),y.dispose(),ee.dispose(),N.dispose(),fe.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ah),ae.removeEventListener("sessionend",lh),hr.stop()};function ie(b){b.preventDefault(),Vf("WebGLRenderer: Context Lost."),R=!0}function j(){Vf("WebGLRenderer: Context Restored."),R=!1;let b=gt.autoReset,F=te.enabled,G=te.autoUpdate,H=te.needsUpdate,B=te.type;oe(),gt.autoReset=b,te.enabled=F,te.autoUpdate=G,te.needsUpdate=H,te.type=B}function _e(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){let F=b.target;F.removeEventListener("dispose",ze),dt(F)}function dt(b){ot(b),Te.remove(b)}function ot(b){let F=Te.get(b).programs;F!==void 0&&(F.forEach(function(G){Z.releaseProgram(G)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,G,H,B,re){F===null&&(F=zt);let he=B.isMesh&&B.matrixWorld.determinant()<0,ye=km(b,F,G,H,B);ve.setMaterial(H,he);let xe=G.index,Pe=1;if(H.wireframe===!0){if(xe=K.getWireframeAttribute(G),xe===void 0)return;Pe=2}let Le=G.drawRange,Ee=G.attributes.position,Ze=Le.start*Pe,at=(Le.start+Le.count)*Pe;re!==null&&(Ze=Math.max(Ze,re.start*Pe),at=Math.min(at,(re.start+re.count)*Pe)),xe!==null?(Ze=Math.max(Ze,0),at=Math.min(at,xe.count)):Ee!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,Ee.count));let Tt=at-Ze;if(Tt<0||Tt===1/0)return;N.setup(B,H,ye,G,xe);let At,ut=Ce;if(xe!==null&&(At=z.get(xe),ut=pe,ut.setIndex(At)),B.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*mt()),ut.setMode(D.LINES)):ut.setMode(D.TRIANGLES);else if(B.isLine){let we=H.linewidth;we===void 0&&(we=1),ve.setLineWidth(we*mt()),B.isLineSegments?ut.setMode(D.LINES):B.isLineLoop?ut.setMode(D.LINE_LOOP):ut.setMode(D.LINE_STRIP)}else B.isPoints?ut.setMode(D.POINTS):B.isSprite&&ut.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let we=B._multiDrawStarts,_t=B._multiDrawCounts,je=B._multiDrawCount,un=xe?z.get(xe).bytesPerElement:1,jr=Te.get(H).currentProgram.getUniforms();for(let fn=0;fn<je;fn++)jr.setValue(D,"_gl_DrawID",fn),ut.render(we[fn]/un,_t[fn])}else if(B.isInstancedMesh)ut.renderInstances(Ze,Tt,B.count);else if(G.isInstancedBufferGeometry){let we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,we);ut.renderInstances(Ze,Tt,_t)}else ut.render(Ze,Tt)};function $n(b,F,G){b.transparent===!0&&b.side===ai&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,$o(b,F,G),b.side=Ti,b.needsUpdate=!0,$o(b,F,G),b.side=ai):$o(b,F,G)}this.compile=function(b,F,G=null){G===null&&(G=b),_=Ae.get(G),_.init(F),T.push(_),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();let H=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let re=B.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let ye=re[he];$n(ye,G,B),H.add(ye)}else $n(re,G,B),H.add(re)}),_=T.pop(),H},this.compileAsync=function(b,F,G=null){let H=this.compile(b,F,G);return new Promise(B=>{function re(){if(H.forEach(function(he){Te.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){B(b);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Un=null;function Bm(b){Un&&Un(b)}function ah(){hr.stop()}function lh(){hr.start()}let hr=new Em;hr.setAnimationLoop(Bm),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(b){Un=b,ae.setAnimationLoop(b),b===null?hr.stop():hr.start()},ae.addEventListener("sessionstart",ah),ae.addEventListener("sessionend",lh),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,F,v),_=Ae.get(b,T.length),_.init(F),T.push(_),Be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Be,qn,F.reversedDepth),me=this.localClippingEnabled,J=be.init(this.clippingPlanes,me),A=ue.get(b,E.length),A.init(),E.push(A),ae.enabled===!0&&ae.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&Cc(re,F,-1/0,M.sortObjects)}Cc(b,F,0,M.sortObjects),A.finish(),M.sortObjects===!0&&A.sort(Q,ne),Xe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Xe&&se.addToRenderList(A,b),this.info.render.frame++,J===!0&&be.beginShadows();let G=_.state.shadowsArray;te.render(G,b,F),J===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=A.opaque,B=A.transmissive;if(_.setupLights(),F.isArrayCamera){let re=F.cameras;if(B.length>0)for(let he=0,ye=re.length;he<ye;he++){let xe=re[he];uh(H,B,b,xe)}Xe&&se.render(b);for(let he=0,ye=re.length;he<ye;he++){let xe=re[he];ch(A,b,xe,xe.viewport)}}else B.length>0&&uh(H,B,b,F),Xe&&se.render(b),ch(A,b,F);v!==null&&S===0&&(Ve.updateMultisampleRenderTarget(v),Ve.updateRenderTargetMipmap(v)),b.isScene===!0&&b.onAfterRender(M,b,F),N.resetDefaultState(),C=-1,k=null,T.pop(),T.length>0?(_=T[T.length-1],J===!0&&be.setGlobalState(M.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?A=E[E.length-1]:A=null};function Cc(b,F,G,H){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){H&&qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);let he=ee.update(b),ye=b.material;ye.visible&&A.push(b,he,ye,G,qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){let he=ee.update(b),ye=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),qe.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),qe.copy(he.boundingSphere.center)),qe.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(ye)){let xe=he.groups;for(let Pe=0,Le=xe.length;Pe<Le;Pe++){let Ee=xe[Pe],Ze=ye[Ee.materialIndex];Ze&&Ze.visible&&A.push(b,he,Ze,G,qe.z,Ee)}}else ye.visible&&A.push(b,he,ye,G,qe.z,null)}}let re=b.children;for(let he=0,ye=re.length;he<ye;he++)Cc(re[he],F,G,H)}function ch(b,F,G,H){let{opaque:B,transmissive:re,transparent:he}=b;_.setupLightsView(G),J===!0&&be.setGlobalState(M.clippingPlanes,G),H&&ve.viewport(W.copy(H)),B.length>0&&Yo(B,F,G),re.length>0&&Yo(re,F,G),he.length>0&&Yo(he,F,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function uh(b,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[H.id]===void 0&&(_.state.transmissionRenderTarget[H.id]=new ri(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?qr:ci,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let re=_.state.transmissionRenderTarget[H.id],he=H.viewport||W;re.setSize(he.z*M.transmissionResolutionScale,he.w*M.transmissionResolutionScale);let ye=M.getRenderTarget(),xe=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(re),M.getClearColor(I),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear(),Xe&&se.render(G);let Le=M.toneMapping;M.toneMapping=Ci;let Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),_.setupLightsView(H),J===!0&&be.setGlobalState(M.clippingPlanes,H),Yo(b,G,H),Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let at=0,Tt=F.length;at<Tt;at++){let At=F[at],{object:ut,geometry:we,material:_t,group:je}=At;if(_t.side===ai&&ut.layers.test(H.layers)){let un=_t.side;_t.side=en,_t.needsUpdate=!0,fh(ut,G,H,we,_t,je),_t.side=un,_t.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re))}M.setRenderTarget(ye,xe,Pe),M.setClearColor(I,U),Ee!==void 0&&(H.viewport=Ee),M.toneMapping=Le}function Yo(b,F,G){let H=F.isScene===!0?F.overrideMaterial:null;for(let B=0,re=b.length;B<re;B++){let he=b[B],{object:ye,geometry:xe,group:Pe}=he,Le=he.material;Le.allowOverride===!0&&H!==null&&(Le=H),ye.layers.test(G.layers)&&fh(ye,F,G,xe,Le,Pe)}}function fh(b,F,G,H,B,re){b.onBeforeRender(M,F,G,H,B,re),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(M,F,G,H,b,re),B.transparent===!0&&B.side===ai&&B.forceSinglePass===!1?(B.side=en,B.needsUpdate=!0,M.renderBufferDirect(G,F,H,B,b,re),B.side=Ti,B.needsUpdate=!0,M.renderBufferDirect(G,F,H,B,b,re),B.side=ai):M.renderBufferDirect(G,F,H,B,b,re),b.onAfterRender(M,F,G,H,B,re)}function $o(b,F,G){F.isScene!==!0&&(F=zt);let H=Te.get(b),B=_.state.lights,re=_.state.shadowsArray,he=B.state.version,ye=Z.getParameters(b,B.state,re,F,G),xe=Z.getProgramCacheKey(ye),Pe=H.programs;H.environment=b.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(b.isMeshStandardMaterial?y:w).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",ze),Pe=new Map,H.programs=Pe);let Le=Pe.get(xe);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===he)return dh(b,ye),Le}else ye.uniforms=Z.getUniforms(b),b.onBeforeCompile(ye,M),Le=Z.acquireProgram(ye,xe),Pe.set(xe,Le),H.uniforms=ye.uniforms;let Ee=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=be.uniform),dh(b,ye),H.needsLights=Vm(b),H.lightsStateVersion=he,H.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function hh(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Ns.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function dh(b,F){let G=Te.get(b);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function km(b,F,G,H,B){F.isScene!==!0&&(F=zt),Ve.resetTextureUnits();let re=F.fog,he=H.isMeshStandardMaterial?F.environment:null,ye=v===null?M.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:zr,xe=(H.isMeshStandardMaterial?y:w).get(H.envMap||he),Pe=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!G.morphAttributes.position,Ze=!!G.morphAttributes.normal,at=!!G.morphAttributes.color,Tt=Ci;H.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Tt=M.toneMapping);let At=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=At!==void 0?At.length:0,we=Te.get(H),_t=_.state.lights;if(J===!0&&(me===!0||b!==k)){let Zt=b===k&&H.id===C;be.setState(H,b,Zt)}let je=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==_t.state.version||we.outputColorSpace!==ye||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==xe||H.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==be.numPlanes||we.numIntersection!==be.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==Ee||we.morphNormals!==Ze||we.morphColors!==at||we.toneMapping!==Tt||we.morphTargetsCount!==ut)&&(je=!0):(je=!0,we.__version=H.version);let un=we.currentProgram;je===!0&&(un=$o(H,F,B));let jr=!1,fn=!1,ks=!1,yt=un.getUniforms(),tn=we.uniforms;if(ve.useProgram(un.program)&&(jr=!0,fn=!0,ks=!0),H.id!==C&&(C=H.id,fn=!0),jr||k!==b){ve.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),yt.setValue(D,"projectionMatrix",b.projectionMatrix),yt.setValue(D,"viewMatrix",b.matrixWorldInverse);let nn=yt.map.cameraPosition;nn!==void 0&&nn.setValue(D,Se.setFromMatrixPosition(b.matrixWorld)),ht.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,fn=!0,ks=!0)}if(B.isSkinnedMesh){yt.setOptional(D,B,"bindMatrix"),yt.setOptional(D,B,"bindMatrixInverse");let Zt=B.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),yt.setValue(D,"boneTexture",Zt.boneTexture,Ve))}B.isBatchedMesh&&(yt.setOptional(D,B,"batchingTexture"),yt.setValue(D,"batchingTexture",B._matricesTexture,Ve),yt.setOptional(D,B,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",B._indirectTexture,Ve),yt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",B._colorsTexture,Ve));let Tn=G.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&De.update(B,G,un),(fn||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,yt.setValue(D,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(tn.envMap.value=xe,tn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=eS()),fn&&(yt.setValue(D,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&zm(tn,ks),re&&H.fog===!0&&Me.refreshFogUniforms(tn,re),Me.refreshMaterialUniforms(tn,H,q,V,_.state.transmissionRenderTarget[b.id]),Ns.upload(D,hh(we),tn,Ve)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ns.upload(D,hh(we),tn,Ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(D,"center",B.center),yt.setValue(D,"modelViewMatrix",B.modelViewMatrix),yt.setValue(D,"normalMatrix",B.normalMatrix),yt.setValue(D,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Zt=H.uniformsGroups;for(let nn=0,Ic=Zt.length;nn<Ic;nn++){let dr=Zt[nn];fe.update(dr,un),fe.bind(dr,un)}}return un}function zm(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Vm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(b,F,G){let H=Te.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Te.get(b.texture).__webglTexture=F,Te.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let G=Te.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let Gm=D.createFramebuffer();this.setRenderTarget=function(b,F=0,G=0){v=b,O=F,S=G;let H=!0,B=null,re=!1,he=!1;if(b){let xe=Te.get(b);if(xe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)Ve.setupRenderTarget(b);else if(xe.__hasExternalTextures)Ve.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ee=b.depthTexture;if(xe.__boundDepthTexture!==Ee){if(Ee!==null&&Te.has(Ee)&&(b.width!==Ee.image.width||b.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(b)}}let Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);let Le=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?B=Le[F][G]:B=Le[F],re=!0):b.samples>0&&Ve.useMultisampledRTT(b)===!1?B=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?B=Le[G]:B=Le,W.copy(b.viewport),X.copy(b.scissor),P=b.scissorTest}else W.copy(de).multiplyScalar(q).floor(),X.copy(ge).multiplyScalar(q).floor(),P=Oe;if(G!==0&&(B=Gm),ve.bindFramebuffer(D.FRAMEBUFFER,B)&&H&&ve.drawBuffers(b,B),ve.viewport(W),ve.scissor(X),ve.setScissorTest(P),re){let xe=Te.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,G)}else if(he){let xe=F;for(let Pe=0;Pe<b.textures.length;Pe++){let Le=Te.get(b.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,G,xe)}}else if(b!==null&&G!==0){let xe=Te.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,G)}C=-1},this.readRenderTargetPixels=function(b,F,G,H,B,re,he,ye=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){ve.bindFramebuffer(D.FRAMEBUFFER,xe);try{let Pe=b.textures[ye],Le=Pe.format,Ee=Pe.type;if(!ht.textureFormatReadable(Le)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ee)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-H&&G>=0&&G<=b.height-B&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(F,G,H,B,Ue.convert(Le),Ue.convert(Ee),re))}finally{let Pe=v!==null?Te.get(v).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,F,G,H,B,re,he,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe)if(F>=0&&F<=b.width-H&&G>=0&&G<=b.height-B){ve.bindFramebuffer(D.FRAMEBUFFER,xe);let Pe=b.textures[ye],Le=Pe.format,Ee=Pe.type;if(!ht.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(F,G,H,B,Ue.convert(Le),Ue.convert(Ee),0);let at=v!==null?Te.get(v).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,at);let Tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jp(D,Tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Ze),D.deleteSync(Tt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,G=0){let H=Math.pow(2,-G),B=Math.floor(b.image.width*H),re=Math.floor(b.image.height*H),he=F!==null?F.x:0,ye=F!==null?F.y:0;Ve.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,he,ye,B,re),ve.unbindTexture()};let Hm=D.createFramebuffer(),Wm=D.createFramebuffer();this.copyTextureToTexture=function(b,F,G=null,H=null,B=0,re=null){re===null&&(B!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=B,B=0):re=0);let he,ye,xe,Pe,Le,Ee,Ze,at,Tt,At=b.isCompressedTexture?b.mipmaps[re]:b.image;if(G!==null)he=G.max.x-G.min.x,ye=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,Le=G.min.y,Ee=G.isBox3?G.min.z:0;else{let Tn=Math.pow(2,-B);he=Math.floor(At.width*Tn),ye=Math.floor(At.height*Tn),b.isDataArrayTexture?xe=At.depth:b.isData3DTexture?xe=Math.floor(At.depth*Tn):xe=1,Pe=0,Le=0,Ee=0}H!==null?(Ze=H.x,at=H.y,Tt=H.z):(Ze=0,at=0,Tt=0);let ut=Ue.convert(F.format),we=Ue.convert(F.type),_t;F.isData3DTexture?(Ve.setTexture3D(F,0),_t=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ve.setTexture2DArray(F,0),_t=D.TEXTURE_2D_ARRAY):(Ve.setTexture2D(F,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let je=D.getParameter(D.UNPACK_ROW_LENGTH),un=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jr=D.getParameter(D.UNPACK_SKIP_PIXELS),fn=D.getParameter(D.UNPACK_SKIP_ROWS),ks=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee);let yt=b.isDataArrayTexture||b.isData3DTexture,tn=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let Tn=Te.get(b),Zt=Te.get(F),nn=Te.get(Tn.__renderTarget),Ic=Te.get(Zt.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ic.__webglFramebuffer);for(let dr=0;dr<xe;dr++)yt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,B,Ee+dr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,re,Tt+dr)),D.blitFramebuffer(Pe,Le,he,ye,Ze,at,he,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||Te.has(b)){let Tn=Te.get(b),Zt=Te.get(F);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Hm),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wm);for(let nn=0;nn<xe;nn++)yt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tn.__webglTexture,B,Ee+nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tn.__webglTexture,B),tn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zt.__webglTexture,re,Tt+nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zt.__webglTexture,re),B!==0?D.blitFramebuffer(Pe,Le,he,ye,Ze,at,he,ye,D.COLOR_BUFFER_BIT,D.NEAREST):tn?D.copyTexSubImage3D(_t,re,Ze,at,Tt+nn,Pe,Le,he,ye):D.copyTexSubImage2D(_t,re,Ze,at,Pe,Le,he,ye);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else tn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(_t,re,Ze,at,Tt,he,ye,xe,ut,we,At.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,re,Ze,at,Tt,he,ye,xe,ut,At.data):D.texSubImage3D(_t,re,Ze,at,Tt,he,ye,xe,ut,we,At):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,Ze,at,he,ye,ut,we,At.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,Ze,at,At.width,At.height,ut,At.data):D.texSubImage2D(D.TEXTURE_2D,re,Ze,at,he,ye,ut,we,At);D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,un),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jr),D.pixelStorei(D.UNPACK_SKIP_ROWS,fn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ks),re===0&&F.generateMipmaps&&D.generateMipmap(_t),ve.unbindTexture()},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&Ve.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ve.setTextureCube(b,0):b.isData3DTexture?Ve.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ve.setTexture2DArray(b,0):Ve.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){O=0,S=0,v=null,ve.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var tS={scene:Yn,group:Mi,mesh:Sn,boxGeometry:ir,meshBasicMaterial:Gr,dataTexture:rr},hi={created:0,recreated:0,disposed:0,cancelledDisposals:0,textNodes:0},Rc=new WeakMap,sh=new Set;function Cm(n){return sh.add(n),()=>sh.delete(n)}var Os=class{constructor(e,t){this.tag=e,this.object=t,this.parent=void 0,this.children=[],this.props={},this.attachment=void 0,this.pendingDispose=!1,this.handlers=void 0,t&&Rc.set(t,this)}};function Im(n,e){let t=tS[n];if(!t)throw new Error(`Unknown three element <${n}>.`);return hi.created++,new t(...e??[])}function nS(n){let e=n.object;if(e.isMaterial)return"material";if(e.isBufferGeometry)return"geometry";if(e.isTexture)return"map"}function iS(n){return n.props.attach??nS(n)}function wc(n,e){let t=e.object.isObject3D?void 0:iS(e);if(t){e.attachment={target:n.object,key:t,previous:n.object[t]},n.object[t]=e.object,n.object.isMaterial&&(n.object.needsUpdate=!0);return}if(!(e.object.isObject3D&&n.object.isObject3D))throw new Error(`<${e.tag}> cannot go inside <${n.tag}> without an attach prop.`);e.object.removeFromParent();let i=n.children,r;for(let a=i.indexOf(e)+1;a<i.length;a++){let c=i[a].object;if(c?.isObject3D&&c.parent===n.object){r=c;break}}let s=n.object.children,o=r?s.indexOf(r):s.length;s.splice(o,0,e.object),e.object.parent=n.object,e.object.dispatchEvent({type:"added"}),n.object.dispatchEvent({type:"childadded",child:e.object})}function Us(n){if(n.attachment){let{target:e,key:t,previous:i}=n.attachment;e[t]===n.object&&(e[t]=i),e.isMaterial&&(e.needsUpdate=!0),n.attachment=void 0}else n.object?.isObject3D&&n.object.removeFromParent()}function Pm(n){for(let e of n.children)Pm(e);for(let e of sh)e(n);n.handlers=void 0,Us(n),typeof n.object?.dispose=="function"&&!n.object.isScene&&(n.object.dispose(),hi.disposed++),n.children=[],n.parent=void 0}function rS(n){n.pendingDispose=!0,queueMicrotask(()=>{n.pendingDispose&&(n.pendingDispose=!1,Pm(n))})}function oh(n,e,t){if(n.props[e]=t,e==="attach")return;if(/^on[A-Z]/.test(e)){n.handlers??={},t?n.handlers[e]=t:delete n.handlers[e];return}let i=n.object,r=i[e];r&&typeof r.set=="function"&&!r.isTexture?Array.isArray(t)?r.set(...t):r.set(t):i[e]=t}function sS(n,e){let t=n.object,i=n.parent,r=i&&(n.attachment||t.parent===i.object);r&&Us(n),n.object=Im(n.tag,e),Rc.set(n.object,n),hi.recreated++;for(let[s,o]of Object.entries(n.props))s!=="args"&&oh(n,s,o);for(let s of n.children)Us(s),wc(n,s);t.isObject3D&&(n.object.position.copy(t.position),n.object.quaternion.copy(t.quaternion),n.object.scale.copy(t.scale)),r&&wc(i,n),typeof t.dispose=="function"&&(t.dispose(),hi.disposed++)}var{render:Fs,createElement:ct,createComponent:En,insertNode:kt,insert:On,effect:Jr,memo:fr,setProp:$t,spread:vw,mergeProps:bw}=Hd({createElement(n,e){let t=new Os(n,Im(n,e?.args));for(let[i,r]of Object.entries(e??{}))i==="args"?t.props.args=r:oh(t,i,r);return t},createTextNode(n){hi.textNodes++;let e=new Os("#text",void 0);return e.props.text=n,e},isTextNode:n=>n.tag==="#text",replaceText(n,e){n.props.text=e},setProperty(n,e,t,i){if(e==="args"){let r=n.props.args;if(n.props.args=t,r!==void 0&&JSON.stringify(r)===JSON.stringify(t)||i===void 0&&r===void 0&&(t?.length??0)===0)return;sS(n,t);return}if(e==="attach"&&n.attachment&&t!==n.props.attach){let r=n.parent;Us(n),n.props.attach=t,wc(r,n);return}oh(n,e,t)},getParentNode:n=>n.parent,getFirstChild:n=>n.children[0],getNextSibling(n){let e=n.parent?.children;return e?.[e.indexOf(n)+1]},insertNode(n,e,t){if(!(e instanceof Os))throw new TypeError("The three renderer only accepts its own nodes.");if(e===t)return;if(e.pendingDispose&&(e.pendingDispose=!1,hi.cancelledDisposals++),e.parent){let r=e.parent.children;r.splice(r.indexOf(e),1),Us(e)}let i=t==null?n.children.length:n.children.indexOf(t);n.children.splice(i,0,e),e.parent=n,e.tag!=="#text"&&n.tag!=="#text"&&wc(n,e)},removeNode(n,e){let t=n.children.indexOf(e);t>=0&&n.children.splice(t,1),e.parent=void 0,e.tag!=="#text"&&(Us(e),rS(e))}});function Bs(n,e="root"){if(!(n instanceof cn))throw new TypeError("The root must be an Object3D.");return new Os(e,n)}function Dm({load:n,dispose:e=t=>t?.dispose?.()}){let t=new Map,i={loads:0,hits:0,disposed:0,lateDisposed:0};function r(o){t.delete(o.key),o.dead=!0,o.settled&&(e(o.value),i.disposed++)}function s(o){let a=t.get(o);a?i.hits++:(i.loads++,a={key:o,refs:0,value:void 0,settled:!1,dead:!1},a.promise=Promise.resolve(n(o)).then(l=>(a.value=l,a.settled=!0,a.dead&&(e(l),i.disposed++,i.lateDisposed++),l)),t.set(o,a)),a.refs++;let c=!1;return{key:o,promise:a.promise,get value(){return a.value},release(){c||(c=!0,!(--a.refs>0)&&queueMicrotask(()=>{a.refs===0&&!a.dead&&r(a)}))}}}return{acquire:s,stats:i,refs:o=>t.get(o)?.refs??0,keys:()=>[...t.keys()]}}function Nm(n,e,t="committed"){let i,r=ka(async()=>{let s=n.acquire(e());return Tr(()=>{(t==="naive"||s!==i)&&s.release()}),await s.promise,s});return t==="committed"&&kd(()=>r(),s=>(i=s,()=>s.release())),()=>r().value}var oS={red:[214,69,65],green:[64,160,90],blue:[52,110,200],gray:[120,120,120]};function aS({auto:n}){let e=new Map,t={auto:n,calls:[],pending:()=>[...e.keys()],load(i){return t.calls.push(i),new Promise(r=>{let s=()=>{e.delete(i);let[o,a,c]=oS[i],l=new Uint8Array(16).map((h,d)=>d%4===3?255:[o,a,c][d%4]+((d>>2)%3===0?40:0)),u=new rr(l,2,2);u.needsUpdate=!0,u.userData={key:i,disposed:!1},u.addEventListener("dispose",()=>{u.userData.disposed=!0}),r(u),t.onLoad?.()};e.set(i,s),t.auto&&setTimeout(()=>e.get(i)?.(),700)})},resolve(i){e.get(i)?.()}};return t}function Lm(){let n=aS({auto:!new URLSearchParams(location.search).has("manual")});n.onLoad=()=>setTimeout(m,0);let e=Dm({load:_=>n.load(_)}),[t,i]=Pn("red"),[r,s]=Pn("committed"),[o,a]=Pn({left:!0,middle:!0,right:!0});function c(_){let E=Nm(e,()=>_.textureKey,_.mode);var T=ct("mesh",{rotation:[.5,.6,0]}),M=ct("boxGeometry"),R=ct("meshBasicMaterial");return kt(T,M),kt(T,R),Jr(()=>({e:_.name,t:[_.x,0,0],a:E()}),({e:O,t:S,a:v},C)=>{O!==C?.e&&$t(T,"name",O,C?.e),S!==C?.t&&$t(T,"position",S,C?.t),v!==C?.a&&$t(R,"map",v,C?.a)}),T}function l(_){return En(Vd,{get fallback(){var E=ct("mesh",{rotation:[.5,.6,0]}),T=ct("boxGeometry"),M=ct("meshBasicMaterial",{color:"#999999",wireframe:!0});return kt(E,T),kt(E,M),Jr(()=>({e:_.name+"-loading",t:[_.x,0,0]}),({e:R,t:O},S)=>{R!==S?.e&&$t(E,"name",R,S?.e),O!==S?.t&&$t(E,"position",O,S?.t)}),E},get children(){return En(c,{get name(){return _.name},get x(){return _.x},get textureKey(){return _.textureKey},get mode(){return _.mode}})}})}let u=document.querySelector("#async-canvas"),h=new Yn,d=new Nt(45,u.width/u.height,.1,100);d.position.set(0,0,6);let p=new ur({canvas:u,antialias:!0,preserveDrawingBuffer:!0});p.setClearColor(16053492),Fs(()=>(()=>{var _=ct("group",{name:"async-world"});return On(_,En(za,{get each(){return[r()]},children:E=>(()=>{var T=ct("group",{name:"mode-"+E});return On(T,(()=>{var M=fr(()=>!!o().left);return()=>M()?En(l,{name:"left",x:-2,get textureKey(){return t()},mode:E}):void 0})(),null),On(T,(()=>{var M=fr(()=>!!o().middle);return()=>M()?En(l,{name:"middle",x:0,get textureKey(){return t()},mode:E}):void 0})(),null),On(T,(()=>{var M=fr(()=>!!o().right);return()=>M()?En(l,{name:"right",x:2,textureKey:"gray",mode:E}):void 0})(),null),T})()})),_})(),Bs(h));function x(){let _={};for(let E of["left","middle","right"]){let T=h.getObjectByName(E),M=h.getObjectByName(E+"-loading");_[E]=T?.parent?{shown:"textured",map:T.material.map?.userData.key??null,mapDisposed:T.material.map?.userData.disposed??null}:M?.parent?{shown:"loading"}:{shown:"none"}}return{mode:r(),shared:t(),slots:_,refs:Object.fromEntries(e.keys().map(E=>[E,e.refs(E)])),cache:{...e.stats},loader:{calls:[...n.calls],pending:n.pending()},memory:{...p.info.memory},renderer:{...hi}}}let g=document.querySelector("#async-status");async function m(){for(let T=0;T<4;T++)Gt(),await new Promise(M=>setTimeout(M,0));Gt(),p.render(h,d);let _=x(),E=T=>_.slots[T].shown==="textured"?`${T} ${_.slots[T].map}${_.slots[T].mapDisposed?" (DISPOSED)":""}`:`${T} ${_.slots[T].shown}`;return g.textContent=`${_.mode} \xB7 ${["left","middle","right"].map(E).join(" \xB7 ")} \xB7 loads ${_.cache.loads} \xB7 disposed ${_.cache.disposed} (late ${_.cache.lateDisposed}) \xB7 GPU textures ${_.memory.textures}`,_}let f=["red","green","blue"],A={nextShared:()=>(i(_=>f[(f.indexOf(_)+1)%f.length]),m()),setShared:_=>(i(_),m()),toggle:_=>(a(E=>({...E,[_]:!E[_]})),m()),setMode:_=>(s(_),m()),resolve:_=>(n.resolve(_),m()),snapshot:x,commit:m};window.__async=A;for(let _ of document.querySelectorAll("button[data-async]")){let[E,T]=_.dataset.async.split(":");_.addEventListener("click",()=>{if(E==="setMode"){let M=r()==="committed"?"naive":"committed";return _.textContent=`Release strategy: ${M}`,A.setMode(M)}return A[E](T)}),_.disabled=!1}m()}function Om({canvas:n,camera:e,scene:t,afterEvent:i=()=>{}}){let r=new Fo,s=new tt,o=[],a=new Map,c=new Set,l={raycasts:0,delivered:0,dropped:0};function u(_){let E=n.getBoundingClientRect();return s.set((_.clientX-E.left)/E.width*2-1,-((_.clientY-E.top)/E.height)*2+1),r.setFromCamera(s,e),l.raycasts++,r.intersectObject(t,!0)}function h(_){let E=[];for(let T=_;T;T=T.parent){let M=Rc.get(T);M?.handlers&&E.push(M)}return E}function d(_,E,T,M,R,O){let S=_.handlers?.[E];S&&(l.delivered++,S({type:E,nativeEvent:T,pointerId:T.pointerId,object:M?.object,eventObject:_.object,point:M?.point,distance:M?.distance,intersections:R,stopPropagation(){O.stopped=!0},setPointerCapture(){a.set(T.pointerId,_);try{n.setPointerCapture(T.pointerId)}catch{}},releasePointerCapture(){x(T.pointerId)}}))}function p(_,E,T,M){let R={stopped:!1},O=new Set;for(let S of T)for(let v of h(S.object))if(!O.has(v)&&(O.add(v),!(M&&!M.has(v))&&(d(v,_,E,S,T,R),R.stopped)))return}function x(_){a.delete(_);try{n.releasePointerCapture(_)}catch{}}function g(_,E){let T=E.length?h(E[0].object):[];for(let M of o)T.includes(M)||d(M,"onPointerOut",_,void 0,E,{stopped:!1});for(let M of T)o.includes(M)||d(M,"onPointerOver",_,E[0],E,{stopped:!1});o=T}let m={pointermove(_){let E=u(_),T=a.get(_.pointerId);if(T){let M=E.find(R=>h(R.object).includes(T));d(T,"onPointerMove",_,M,E,{stopped:!1});return}g(_,E),p("onPointerMove",_,E)},pointerdown(_){let E=u(_);c=new Set(E.flatMap(T=>h(T.object))),p("onPointerDown",_,E)},pointerup(_){let E=u(_),T=a.get(_.pointerId);if(T){let M=E.find(R=>h(R.object).includes(T));d(T,"onPointerUp",_,M,E,{stopped:!1}),x(_.pointerId),g(_,E);return}p("onPointerUp",_,E)},click(_){let E=u(_);p("onClick",_,E,c),c=new Set},pointerleave(_){a.has(_.pointerId)||g(_,[])}},f={};for(let[_,E]of Object.entries(m))f[_]=T=>{E(T),i(_)},n.addEventListener(_,f[_]);let A=Cm(_=>{let E=o.length+a.size+c.size;o=o.filter(T=>T!==_);for(let[T,M]of a)M===_&&x(T);c.delete(_),l.dropped+=E-(o.length+a.size+c.size)});return{stats:l,debug:()=>({hoveredNodes:o.map(_=>_.object.name),captured:[...a.values()].map(_=>_.object.name)}),dispose(){for(let[_,E]of Object.entries(f))n.removeEventListener(_,E);A()}}}var lS={A:"#e4572e",B:"#2973b2"},cS="#ffd166";function Um(){let[n,e]=Pn(!0),[t,i]=Pn(null),r={clicks:{A:0,B:0},groupClicks:0,over:{A:0,B:0},out:{A:0,B:0},dragMoves:{A:0,B:0}};function s(m){let f;Tr(()=>{t()===m.id&&i(null)});var A=ct("mesh",{rotation:[.5,.6,0],onPointerOver:()=>{r.over[m.id]++,i(m.id)},onPointerOut:()=>{r.out[m.id]++,t()===m.id&&i(null)},onClick:T=>{r.clicks[m.id]++,m.id==="B"&&T.stopPropagation()},onPointerDown:T=>{f=T.nativeEvent.clientX,T.setPointerCapture()},onPointerMove:T=>{f!==void 0&&(T.eventObject.rotation.y+=(T.nativeEvent.clientX-f)*.02,f=T.nativeEvent.clientX,r.dragMoves[m.id]++)},onPointerUp:()=>{f=void 0}}),_=ct("boxGeometry"),E=ct("meshBasicMaterial");return kt(A,_),kt(A,E),Jr(()=>({e:m.id,t:[m.x,.2,0],a:t()===m.id?cS:lS[m.id]}),({e:T,t:M,a:R},O)=>{T!==O?.e&&$t(A,"name",T,O?.e),M!==O?.t&&$t(A,"position",M,O?.t),R!==O?.a&&$t(E,"color",R,O?.a)}),A}let o=document.querySelector("#events-canvas"),a=new Yn,c=new Nt(45,o.width/o.height,.1,100);c.position.set(0,0,6);let l=new ur({canvas:o,antialias:!0,preserveDrawingBuffer:!0});l.setClearColor(16053492),Fs(()=>(()=>{var m=ct("group",{name:"world"}),f=ct("mesh",{name:"fixed",position:[0,-1.4,0],scale:[5,.1,1]}),A=ct("boxGeometry"),_=ct("meshBasicMaterial",{color:"#888888"});return kt(m,f),kt(f,A),kt(f,_),On(m,(()=>{var E=fr(()=>!!n());return()=>E()?(()=>{var T=ct("group",{name:"slots",onClick:()=>{r.groupClicks++}});return On(T,En(s,{id:"A",x:-1.1}),null),On(T,En(s,{id:"B",x:1.1}),null),T})():void 0})(),null),m})(),Bs(a));let u=Om({canvas:o,camera:c,scene:a,afterEvent:()=>x()});function h(){let m=a.getObjectByName("slots")?.children??[];return{order:m.map(f=>f.name),rotationsY:m.map(f=>f.rotation.y),colors:m.map(f=>f.material.color.getHexString()),memory:{...l.info.memory},events:{hovered:t(),log:structuredClone(r),...u.debug(),stats:{...u.stats}}}}function d(m){let f=a.getObjectByName(m);if(!f)return null;let A=f.getWorldPosition(new Y).project(c),_=o.getBoundingClientRect();return{x:_.left+(A.x+1)/2*_.width,y:_.top+(1-A.y)/2*_.height}}let p=document.querySelector("#event-status");async function x(){Gt(),await Promise.resolve(),await Promise.resolve(),l.render(a,c);let m=h(),f=m.events;return p.textContent=`hovered ${f.hovered??"-"} \xB7 captured ${f.captured.join(", ")||"-"} \xB7 clicks A ${f.log.clicks.A}, B ${f.log.clicks.B}, group ${f.log.groupClicks} \xB7 drag moves A ${f.log.dragMoves.A}, B ${f.log.dragMoves.B} \xB7 raycasts ${f.stats.raycasts}`,m}let g={toggle:()=>(e(m=>!m),x()),snapshot:h,commit:x,screenOf:d};window.__events=g;for(let m of document.querySelectorAll("button[data-events]"))m.addEventListener("click",()=>g[m.dataset.events]()),m.disabled=!1;x()}var uS={A:[228,87,46],B:[41,115,178]},fS=n=>new Uint8Array(Array.from({length:4},(e,t)=>t%3===0?[...uS[n],255]:[255,255,255,255]).flat());function Fm(){let[n,e]=Pn(["A","B"]),[t,i]=Pn(1),[r,s]=Pn("#ffffff"),[o,a]=Pn(!0);function c(f){let A=()=>(n().indexOf(f.id)-.5)*2.2;var _=ct("mesh",{rotation:[.5,.6,0]}),E=ct("boxGeometry"),T=ct("meshBasicMaterial"),M=ct("dataTexture",{needsUpdate:!0});return kt(_,E),kt(_,T),kt(T,M),Jr(()=>({e:f.id,t:[A(),.2,0],a:[t(),1,1],o:r(),i:[fS(f.id),2,2]}),({e:R,t:O,a:S,o:v,i:C},k)=>{R!==k?.e&&$t(_,"name",R,k?.e),O!==k?.t&&$t(_,"position",O,k?.t),S!==k?.a&&$t(E,"args",S,k?.a),v!==k?.o&&$t(T,"color",v,k?.o),C!==k?.i&&$t(M,"args",C,k?.i)}),_}let l=document.querySelector("#main-canvas"),u=new Yn,h=new Nt(45,l.width/l.height,.1,100);h.position.set(0,0,6);let d=new ur({canvas:l,antialias:!0,preserveDrawingBuffer:!0});d.setClearColor(16053492),Fs(()=>(()=>{var f=ct("group",{name:"world"}),A=ct("mesh",{name:"fixed",position:[0,-1.4,0],scale:[5,.1,1]}),_=ct("boxGeometry"),E=ct("meshBasicMaterial",{color:"#888888"});return kt(f,A),kt(A,_),kt(A,E),On(f,(()=>{var T=fr(()=>!!o());return()=>T()?(()=>{var M=ct("group",{name:"slots"});return On(M,En(za,{get each(){return n()},children:R=>En(c,{id:R})})),M})():void 0})(),null),f})(),Bs(u));function p(){let f=u.getObjectByName("slots")?.children??[];return{order:f.map(A=>A.name),meshUuids:f.map(A=>A.uuid),geometryUuids:f.map(A=>A.geometry.uuid),widths:f.map(A=>A.geometry.parameters.width),mapsAttached:f.map(A=>!!A.material.map?.isDataTexture),sceneChildren:u.children.map(A=>A.name),memory:{...d.info.memory},stats:{...hi}}}let x=document.querySelector("#main-status");async function g(){Gt(),await Promise.resolve(),await Promise.resolve(),d.render(u,h);let f=p();return x.textContent=`slots ${f.order.join(", ")||"(none)"} \xB7 width ${f.widths[0]??"-"} \xB7 geometries ${f.memory.geometries} \xB7 textures ${f.memory.textures} \xB7 created ${f.stats.created} \xB7 recreated ${f.stats.recreated} \xB7 disposed ${f.stats.disposed}`,f}let m={swap:()=>(e(f=>[...f].reverse()),g()),widen:()=>(i(f=>f===1?2:1),g()),recolor:()=>(s(f=>f==="#ffffff"?"#ffe08a":"#ffffff"),g()),toggle:()=>(a(f=>!f),g()),async cycle(f=100){for(let A=0;A<f;A++)await m.toggle(),await m.toggle(),await m.swap(),await m.widen();return g()},snapshot:p,commit:g};window.__three=m;for(let f of document.querySelectorAll("button[data-action]"))f.addEventListener("click",()=>m[f.dataset.action]()),f.disabled=!1;g()}for(let[n,e]of[[Fm,"main-status"],[Um,"event-status"],[Lm,"async-status"]])try{n()}catch(t){console.error(t);let i=document.getElementById(e);i.dataset.error="true",i.textContent=`This example could not start: ${t.message}. It needs JavaScript and WebGL.`}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
