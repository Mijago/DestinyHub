"use strict";(self.webpackChunkD2Hub=self.webpackChunkD2Hub||[]).push([["src_app_features_playtime-timeline_playtime-timeline_module_ts"],{7462:(L,r,n)=>{n.r(r),n.d(r,{PlaytimeTimelineModule:()=>C});var s=n(6895),m=n(1048),c=n(1184),d=n(5861),o=n(4650),p=n(6625),l=n(1576),y=n(3546),f=n(1731);const g=[{path:"",component:c.$,children:[{path:"",component:(()=>{class e{constructor(t){this.guardianApi=t,this.selectedGuardian=null}ngOnInit(){}selectGuardian(t){var i=this;return(0,d.Z)(function*(){if(i.selectedGuardian=t,null!=t){var u=yield i.guardianApi.getCharacters(t.membershipType,t?.membershipId);console.log(u)}})()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(p.J))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-playtime-report"]],decls:6,vars:1,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["fxLayout","row","fxLayout.sm","column","fxLayout.xs","column","fxLayoutAlign","center none","fxLayoutGap","15px",1,"container"],["fxFlex","100%","fxFlex.gt-lg","100%","fxFlex.sm","95%","fxFlex.xs","95%"],[3,"enableLoggedInUser","onGuardianSelection"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-card")(5,"app-guardian-selection",4),o.NdJ("onGuardianSelection",function(G){return i.selectGuardian(G)}),o.qZA()()()()()()),2&t&&(o.xp6(5),o.Q6J("enableLoggedInUser",!0))},dependencies:[l.xw,l.SQ,l.Wh,l.yH,y.a8,f.Q]}),e})()}]}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.Bz.forChild(g),m.Bz]}),e})();var h=n(5823),P=n(4466),T=n(2533);let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[s.ez,P.m,T.S,v,h.o9]}),e})()}}]);