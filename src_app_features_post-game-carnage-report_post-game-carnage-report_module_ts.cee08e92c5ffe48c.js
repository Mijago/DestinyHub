"use strict";(self.webpackChunkD2Hub=self.webpackChunkD2Hub||[]).push([["src_app_features_post-game-carnage-report_post-game-carnage-report_module_ts"],{2483:(et,v,o)=>{o.r(v),o.d(v,{PostGameCarnageReportModule:()=>V});var s=o(6895),d=o(3797),y=o(1184),h=o(5861),P=o(9841),Z=o(4482);const{isArray:R}=Array;function x(a){return 1===a.length&&R(a[0])?a[0]:a}var A=o(3268),T=o(9635),G=o(3269);function C(...a){const n=(0,G.jO)(a);return n?(0,T.z)(C(...a),(0,A.Z)(n)):(0,Z.e)((e,r)=>{(0,P.l)([e,...x(a)])(r)})}function D(...a){return C(...a)}var U=o(6489),t=o(4650),N=o(4623),Y=o(1109),c=o(3546),g=o(1576),i=o(671),p=o(7084);function b(a,n){if(1&a&&t._UZ(0,"div",13),2&a){const e=t.oxw(2);t.Udp("background-image","url(https://bungie.net/"+e.activity.displayProperties.icon+")")}}function j(a,n){1&a&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Name"),t.qZA())}function I(a,n){if(1&a&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.AsE(" ",e.player.destinyUserInfo.bungieGlobalDisplayName," #",e.player.destinyUserInfo.bungieGlobalDisplayNameCode," ")}}function S(a,n){1&a&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Kills"),t.qZA())}function M(a,n){if(1&a&&(t.TgZ(0,"mat-cell"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.values.kills.basic.value)," ")}}function O(a,n){if(1&a&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function Q(a,n){1&a&&t._UZ(0,"mat-row")}function z(a,n){1&a&&t._UZ(0,"mat-row")}const L=function(){return["groupHeader"]};function _(a,n){if(1&a&&(t.TgZ(0,"mat-card")(1,"mat-card-title-group"),t.YNc(2,b,1,2,"div",3),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"mat-card-header",4),t._uU(9,"sad"),t.qZA(),t.TgZ(10,"mat-card-content")(11,"mat-table",5),t.ynx(12,6),t.YNc(13,j,2,0,"mat-header-cell",7),t.YNc(14,I,2,2,"mat-cell",8),t.BQk(),t.ynx(15,9),t.YNc(16,S,2,0,"mat-header-cell",7),t.YNc(17,M,3,3,"mat-cell",8),t.BQk(),t.ynx(18,10),t.YNc(19,O,2,1,"mat-cell",8),t.BQk(),t.YNc(20,Q,1,0,"mat-row",11),t.YNc(21,z,1,0,"mat-row",12),t.qZA()()()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.activity.displayProperties.hasIcon),t.xp6(2),t.hij(" ",e.activity.displayProperties.name," "),t.xp6(2),t.hij(" Post Game Carnage Report - ",t.xi3(7,7,e.pgcrDate,"medium")," "),t.xp6(5),t.Q6J("dataSource",e.dataSource),t.xp6(9),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(10,L))("matRowDefWhen",e.isGroup)}}function B(a,n){1&a&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2,"Statistics"),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4,"Some more or less useful statistics to this PGCR"),t.qZA(),t._UZ(5,"mat-card-content"),t.qZA())}function J(a,n){if(1&a&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2,"Raw PGCR Data"),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4,"The raw PGCR data is hidden by default. Click a row to expand it."),t.qZA(),t.TgZ(5,"mat-card-content")(6,"mat-accordion")(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t._uU(10," PGCR Data "),t.qZA()(),t.TgZ(11,"pre",14),t._uU(12),t.ALo(13,"json"),t.qZA()(),t.TgZ(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),t._uU(17," Activity Data "),t.qZA()(),t.TgZ(18,"pre",14),t._uU(19),t.ALo(20,"json"),t.qZA()()()()()),2&a){const e=t.oxw();t.xp6(12),t.Oqu(t.lcZ(13,2,e.pgcr)),t.xp6(7),t.Oqu(t.lcZ(20,4,e.activity))}}const H=[{path:"",component:y.$,children:[{path:":pgcr",component:(()=>{class a{constructor(e,r,l){this.bungieApi=e,this.manifest=r,this.activeRoute=l,this.displayedColumns=["name","kills"],this.pgcr=null,this.teams=[],this.activity=void 0,this.dataSource=[]}isGroup(e,r){return!!r.name}ngOnInit(){var e=this;this.activeRoute.params.pipe(D(this.manifest.ensureManifestTableExists("DestinyActivityDefinition"))).subscribe(function(){var r=(0,h.Z)(function*(l){var k=l[0].pgcr,tt=yield e.bungieApi.getPostGameCarnageReport(k);e.pgcr=tt.Response,e.activity=yield U.s.DestinyActivityDefinition.where("hash").equals(e.pgcr.activityDetails.directorActivityHash).first(),console.log("this.activity",e.activity);var f=[{name:"PvE",players:e.pgcr.entries}];e.pgcr.teams.length>1&&(f=e.pgcr.entries.reduce((m,u)=>(m[u.values.team.basic.value-18].players.push(u),m),[{name:"Alpha",players:[]},{name:"Bravo",players:[]}]));for(let m of f){e.dataSource.push(m);for(let u of m.players)e.dataSource.push(u)}e.teams=f});return function(l){return r.apply(this,arguments)}}())}get pgcrDate(){return this.pgcr?Date.parse(this.pgcr.period):""}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(N.A),t.Y36(Y.W),t.Y36(d.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-pgcrpage"]],decls:9,vars:3,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],[4,"ngIf"],["mat-card-avatar","","style","background-size: cover;",3,"background-image",4,"ngIf"],["color","accent"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","kills"],["matColumnDef","groupHeader"],[4,"matRowDef","matRowDefColumns"],[4,"matRowDef","matRowDefColumns","matRowDefWhen"],["mat-card-avatar","",2,"background-size","cover"],[1,"code"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,_,22,11,"mat-card",2),t.qZA()(),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,B,6,0,"mat-card",2),t.qZA()(),t.TgZ(6,"div",0)(7,"div",1),t.YNc(8,J,21,6,"mat-card",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",null!=r.pgcr&&null!=r.activity),t.xp6(3),t.Q6J("ngIf",null!=r.pgcr&&null!=r.activity),t.xp6(3),t.Q6J("ngIf",null!=r.pgcr&&null!=r.activity))},dependencies:[s.O5,c.a8,c.dk,c.C1,c.dn,c.n5,c.$j,c.kc,g.xw,g.Wh,g.yH,i.BZ,i.fO,i.w1,i.Dz,i.nj,i.ge,i.ev,i.Gk,p.pp,p.ib,p.yz,p.yK,s.Ts,s.uU],styles:[".code[_ngcontent-%COMP%]{font-family:monospace;background-color:#333}"]}),a})()},{path:"**",component:(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-pgcrerror-page"]],decls:2,vars:0,template:function(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"pgcrerror-page works!"),t.qZA())}}),a})()}]}];let W=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.Bz.forChild(H),d.Bz]}),a})();var F=o(5823),$=o(7392),q=o(3683),K=o(6338),X=o(4466);let V=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.ez,W,c.QW,F.o9,$.Ps,q.g0,K.ie,i.p0,X.m]}),a})()}}]);