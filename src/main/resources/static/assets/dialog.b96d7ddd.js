import{d as S,E as T,c as $,a as p,f as R,p as h,g as r,n as t,u as e,t as V,h as k,e as i,b as x,q as U,k as I,i as F,j as Z,G,r as z,v as J,P as Q,Q as W,I as Y,T as H,W as X}from"./index.6488467e.js";import{u as ee,a as oe,E as ae}from"./index.62a50e96.js";import{E as le,_ as M,L as te,M as ie,u as re,w as se}from"./base.5246a87f.js";import{d as ne,a as de,b as ge,c as pe,u as ce}from"./overlay.590b2912.js";import{u as fe}from"./index.47487db2.js";import{F as me,E as ue}from"./focus-trap.13160972.js";import{c as ve}from"./refs.cf25bef5.js";const L=Symbol("dialogInjectionKey"),be=["aria-label"],ye=["id"],he={name:"ElDialogContent"},ke=S({...he,props:ne,emits:de,setup(w){const C=w,{t:c}=fe(),{Close:_}=te,{dialogRef:s,headerRef:f,bodyId:E,ns:l,style:m}=T(L),{focusTrapRef:b}=T(me),y=ve(b,s),u=$(()=>C.draggable);return ee(s,f,u),(a,n)=>(p(),R("div",{ref:e(y),class:t([e(l).b(),e(l).is("fullscreen",a.fullscreen),e(l).is("draggable",e(u)),{[e(l).m("center")]:a.center},a.customClass]),style:F(e(m)),tabindex:"-1",onClick:n[1]||(n[1]=Z(()=>{},["stop"]))},[h("header",{ref_key:"headerRef",ref:f,class:t(e(l).e("header"))},[r(a.$slots,"header",{},()=>[h("span",{role:"heading",class:t(e(l).e("title"))},V(a.title),3)]),a.showClose?(p(),R("button",{key:0,"aria-label":e(c)("el.dialog.close"),class:t(e(l).e("headerbtn")),type:"button",onClick:n[0]||(n[0]=D=>a.$emit("close"))},[k(e(le),{class:t(e(l).e("close"))},{default:i(()=>[(p(),x(U(a.closeIcon||e(_))))]),_:1},8,["class"])],10,be)):I("v-if",!0)],2),h("div",{id:e(E),class:t(e(l).e("body"))},[r(a.$slots,"default")],10,ye),a.$slots.footer?(p(),R("footer",{key:0,class:t(e(l).e("footer"))},[r(a.$slots,"footer")],2)):I("v-if",!0)],6))}});var we=M(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Ce=["aria-label","aria-labelledby","aria-describedby"],_e={name:"ElDialog"},Ee=S({..._e,props:ge,emits:pe,setup(w,{expose:C}){const c=w,_=G();ie({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},$(()=>!!_.title));const s=re("dialog"),f=z(),E=z(),l=z(),{visible:m,titleId:b,bodyId:y,style:u,rendered:a,zIndex:n,afterEnter:D,afterLeave:B,beforeLeave:N,handleClose:A,onModalClick:j,onOpenAutoFocus:q,onCloseAutoFocus:O,onCloseRequested:P}=ce(c,f);J(L,{dialogRef:f,headerRef:E,bodyId:y,ns:s,rendered:a,style:u});const d=oe(j),K=$(()=>c.draggable&&!c.fullscreen);return C({visible:m,dialogContentRef:l}),(o,g)=>(p(),x(X,{to:"body",disabled:!o.appendToBody},[k(H,{name:"dialog-fade",onAfterEnter:e(D),onAfterLeave:e(B),onBeforeLeave:e(N),persisted:""},{default:i(()=>[Q(k(e(ae),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e(n)},{default:i(()=>[h("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(b),"aria-describedby":e(y),class:t(`${e(s).namespace.value}-overlay-dialog`),onClick:g[0]||(g[0]=(...v)=>e(d).onClick&&e(d).onClick(...v)),onMousedown:g[1]||(g[1]=(...v)=>e(d).onMousedown&&e(d).onMousedown(...v)),onMouseup:g[2]||(g[2]=(...v)=>e(d).onMouseup&&e(d).onMouseup(...v))},[k(e(ue),{loop:"",trapped:e(m),"focus-start-el":"container",onFocusAfterTrapped:e(q),onFocusAfterReleased:e(O),onReleaseRequested:e(P)},{default:i(()=>[e(a)?(p(),x(we,{key:0,ref_key:"dialogContentRef",ref:l,"custom-class":o.customClass,center:o.center,"close-icon":o.closeIcon,draggable:e(K),fullscreen:o.fullscreen,"show-close":o.showClose,style:F(e(u)),title:o.title,onClose:e(A)},Y({header:i(()=>[o.$slots.title?r(o.$slots,"title",{key:1}):r(o.$slots,"header",{key:0,close:e(A),titleId:e(b),titleClass:e(s).e("title")})]),default:i(()=>[r(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:i(()=>[r(o.$slots,"footer")])}:void 0]),1032,["custom-class","center","close-icon","draggable","fullscreen","show-close","style","title","onClose"])):I("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onReleaseRequested"])],42,Ce)]),_:3},8,["mask","overlay-class","z-index"]),[[W,e(m)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Re=M(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Se=se(Re);export{Se as E};
