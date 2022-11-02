"use strict";(self.webpackChunkD2Hub=self.webpackChunkD2Hub||[]).push([["default-src_app_shared_components_guardian-selection_guardian-selection_component_ts-src_app_-595650"],{1731:(R,x,a)=>{a.d(x,{Q:()=>u});var g=a(5861),t=a(4650),e=a(4006),A=a(9300),U=a(8372),I=a(3900),_=a(9646),y=a(262),f=a(3905),v=a(4004),T=a(2340),L=a(529),O=a(945);let P=(()=>{class o{constructor(n,i){this.http=n,this.logger=i}search(n){var i=this;return(0,g.Z)(function*(){return(yield i.searchWithTrialsReport(n))??(yield i.searchWithBungieApi(n))})()}searchWithTrialsReport(n){var i=this;return(0,g.Z)(function*(){const c="https://elastic.destinytrialsreport.com/players/0/"+encodeURIComponent(encodeURIComponent(n));let p=i.http.get(c).pipe((0,y.K)(Z=>(i.logger.error(`Trials Report: could not fetch guardians for name "${n}" `,Z),(0,_.of)(null))));return yield(0,f.z)(p)})()}searchWithBungieApi(n){var i=this;return(0,g.Z)(function*(){const c=`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${encodeURIComponent(n)}/`;let p=i.http.get(c,{headers:{"X-API-Key":T.N.bungie.apiKey}}).pipe((0,y.K)(l=>(i.logger.error(`Trials Report: could not fetch guardians for name "${n}" `,l),(0,_.of)(null))),(0,v.U)(l=>null==l?l:l.Response));const Z=yield(0,f.z)(p);if(null==Z)return Z;Z.map(l=>({emblemHash:"",membershipId:l.membershipId,membershipType:l.membershipType,bungieName:l.bungieGlobalDisplayName+"#"+l.bungieGlobalDisplayNameCode,displayName:l.displayName,crossSaveOverride:{membershipId:"",membershipType:l.crossSaveOverride}}))})()}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(L.eN),t.LFG(O.Kf))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=a(394),h=a(6895),E=a(7392),b=a(4859),C=a(9549),M=a(7957),S=a(3238),D=a(266),m=a(7331);function G(o,r){if(1&o&&t._UZ(0,"img",4),2&o){const n=t.oxw();t.ekj("centered",n.centered)("fullWidth",!n.centered)}}function N(o,r){if(1&o&&t._UZ(0,"img",5),2&o){const n=t.oxw();t.ekj("centered",n.centered)("fullWidth",!n.centered)}}function Q(o,r){if(1&o&&t._UZ(0,"img",6),2&o){const n=t.oxw();t.ekj("centered",n.centered)("fullWidth",!n.centered)}}function J(o,r){if(1&o&&t._UZ(0,"img",7),2&o){const n=t.oxw();t.ekj("centered",n.centered)("fullWidth",!n.centered)}}let W=(()=>{class o{constructor(){this.centered=!1,this.membershipType=0}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-platform-icon"]],inputs:{centered:"centered",membershipType:"membershipType"},decls:4,vars:4,consts:[["class","user-chip-icon","src","https://bungie.net//img/theme/bungienet/icons/steamLogo.png","aria-hidden","",3,"centered","fullWidth",4,"ngIf"],["class","user-chip-icon","src","https://bungie.net//img/theme/bungienet/icons/xboxLiveLogo.png","aria-hidden","",3,"centered","fullWidth",4,"ngIf"],["class","user-chip-icon","src","https://bungie.net//img/theme/bungienet/icons/psnLogo.png","aria-hidden","",3,"centered","fullWidth",4,"ngIf"],["class","user-chip-icon","src","https://bungie.net//img/theme/destiny/icons/icon_stadia.png","aria-hidden","",3,"centered","fullWidth",4,"ngIf"],["src","https://bungie.net//img/theme/bungienet/icons/steamLogo.png","aria-hidden","",1,"user-chip-icon"],["src","https://bungie.net//img/theme/bungienet/icons/xboxLiveLogo.png","aria-hidden","",1,"user-chip-icon"],["src","https://bungie.net//img/theme/bungienet/icons/psnLogo.png","aria-hidden","",1,"user-chip-icon"],["src","https://bungie.net//img/theme/destiny/icons/icon_stadia.png","aria-hidden","",1,"user-chip-icon"]],template:function(n,i){1&n&&(t.YNc(0,G,1,4,"img",0),t.YNc(1,N,1,4,"img",1),t.YNc(2,Q,1,4,"img",2),t.YNc(3,J,1,4,"img",3)),2&n&&(t.Q6J("ngIf",3==i.membershipType),t.xp6(1),t.Q6J("ngIf",1==i.membershipType),t.xp6(1),t.Q6J("ngIf",2==i.membershipType),t.xp6(1),t.Q6J("ngIf",5==i.membershipType))},dependencies:[h.O5],styles:[".user-chip-icon.fullWidth[_ngcontent-%COMP%]{height:100%}.user-chip-icon.centered[_ngcontent-%COMP%]{height:25px;vertical-align:middle;margin-right:8px}"]}),o})();function F(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"mat-chip",9,10),t.NdJ("removed",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.selectGuardian(null))})("selectionChange",function(){t.CHM(n);const c=t.MAs(1);return t.KtG(c.select())}),t._UZ(2,"app-platform-icon",11),t._uU(3),t.TgZ(4,"button",12)(5,"mat-icon"),t._uU(6,"cancel"),t.qZA()()()}if(2&o){const n=t.oxw();t.xp6(2),t.Q6J("membershipType",n.selectedGuardian.membershipType)("centered",!1),t.xp6(1),t.hij(" ",n.selectedGuardian.bungieName," ")}}function K(o,r){if(1&o&&t._UZ(0,"input",13,14),2&o){const n=t.oxw(),i=t.MAs(8),c=t.MAs(4);t.Q6J("formControl",n.guardianSearchFormControl)("matAutocomplete",i)("matChipInputFor",c)}}function B(o,r){if(1&o&&(t.TgZ(0,"mat-option",15),t._UZ(1,"app-platform-icon",16),t._uU(2),t.qZA()),2&o){const n=r.$implicit;t.Q6J("value",n),t.xp6(1),t.Q6J("membershipType",n.membershipType)("centered",!0),t.xp6(1),t.hij(" ",n.bungieName," ")}}function s(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.selectAuthGuardian())}),t.TgZ(1,"mat-icon"),t._uU(2,"person"),t.qZA()()}if(2&o){const n=t.oxw();t.Q6J("disabled",!!n.selectedGuardian)}}let u=(()=>{class o{constructor(n,i){this.guardianSearch=n,this.auth=i,this.enableLoggedInUser=!1,this.onGuardianSelection=new t.vpe,this.guardianSearchFormControl=new e.NI,this.selectedGuardian=null,this.guardians=this.guardianSearchFormControl.valueChanges.pipe((0,A.h)(c=>"string"==typeof c),(0,U.b)(500),(0,I.w)(c=>""==c?(0,_.of)([]):this.searchUsers(c)))}ngOnInit(){}searchUsers(n){var i=this;return(0,g.Z)(function*(){return i.guardianSearch.search(n)})()}selectAuthGuardian(){this.selectGuardian({bnetId:0,crossSaveOverride:void 0,displayName:"",emblemHash:"",lastPlayed:"",membershipId:this.auth.currentUser.primaryMembershipId??0,membershipType:3,score:0,bungieName:"Mijago#8686"})}selectGuardian(n){this.guardianSearchFormControl.setValue(""),this.selectedGuardian=n,this.onGuardianSelection.next(n)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(P),t.Y36(d.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-guardian-selection"]],inputs:{enableLoggedInUser:"enableLoggedInUser"},outputs:{onGuardianSelection:"onGuardianSelection"},decls:12,vars:6,consts:[["appearance","fill",1,"example-chip-list"],["aria-label","Select a Guardian"],["chipList",""],["color","primary","selected","",3,"removed","selectionChange",4,"ngIf"],["placeholder","Guardian#1234",3,"formControl","matAutocomplete","matChipInputFor",4,"ngIf"],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["matSuffix","","mat-icon-button","","aria-label","Select yourself","matTooltip","Select yourself.",3,"disabled","click",4,"ngIf"],["color","primary","selected","",3,"removed","selectionChange"],["chip","matChip"],["matChipAvatar","",3,"membershipType","centered"],["matChipRemove",""],["placeholder","Guardian#1234",3,"formControl","matAutocomplete","matChipInputFor"],["guardianInput",""],[3,"value"],[3,"membershipType","centered"],["matSuffix","","mat-icon-button","","aria-label","Select yourself","matTooltip","Select yourself.",3,"disabled","click"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2,"Select a Guardian"),t.qZA(),t.TgZ(3,"mat-chip-list",1,2),t.YNc(5,F,7,3,"mat-chip",3),t.YNc(6,K,2,3,"input",4),t.qZA(),t.TgZ(7,"mat-autocomplete",5,6),t.NdJ("optionSelected",function(p){return i.selectGuardian(p.option.value)}),t.YNc(9,B,3,4,"mat-option",7),t.ALo(10,"async"),t.qZA(),t.YNc(11,s,3,1,"button",8),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngIf",i.selectedGuardian),t.xp6(1),t.Q6J("ngIf",!i.selectedGuardian),t.xp6(3),t.Q6J("ngForOf",t.lcZ(10,4,i.guardians)),t.xp6(2),t.Q6J("ngIf",i.enableLoggedInUser&&i.auth.isLoggedIn))},dependencies:[h.sg,h.O5,e.Fj,e.JJ,e.oH,E.Hw,b.lW,C.KE,C.hX,C.R9,M.XC,M.ZL,S.ey,D.gM,m.qn,m.HS,m.oH,m.qH,m.EC,W,h.Ov],styles:[".example-chip-list[_ngcontent-%COMP%]{width:100%}"]}),o})()},1184:(R,x,a)=>{a.d(x,{$:()=>B});var g=a(727),t=a(5963),e=a(4650),A=a(2289),U=a(394),I=a(4649),_=a(6074),y=a(559),f=a(6895),v=a(1048),T=a(3267),L=a(7392),O=a(3683),P=a(4859),d=a(4633),h=a(3238),E=a(3162),b=a(8255),C=a(266),M=a(2673);function S(s,u){if(1&s){const o=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(o),e.oxw();const n=e.MAs(41);return e.KtG(n.toggle())}),e.TgZ(1,"mat-icon"),e._uU(2,"menu"),e.qZA()()}}function D(s,u){if(1&s){const o=e.EpF();e.ynx(0),e.TgZ(1,"button",30),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.authService.startLogin())}),e.TgZ(2,"mat-icon"),e._uU(3,"login"),e.qZA()(),e.BQk()}}const m=function(){return["/account/profile"]},G=function(){return["/auth/login"]};function N(s,u){if(1&s){const o=e.EpF();e.ynx(0),e.TgZ(1,"button",31)(2,"mat-icon",32),e._uU(3,"notifications"),e.qZA()(),e.TgZ(4,"mat-menu",12,33)(6,"a",34)(7,"span"),e._uU(8,"You have new tasks"),e.qZA()(),e.TgZ(9,"a",34)(10,"span"),e._uU(11,"You have a new message"),e.qZA()()(),e.TgZ(12,"button",35)(13,"mat-icon"),e._uU(14,"person"),e.qZA(),e.TgZ(15,"span",36),e._uU(16),e.ALo(17,"async"),e.ALo(18,"async"),e.qZA()(),e.TgZ(19,"mat-menu",12,37)(21,"a",38)(22,"mat-icon"),e._uU(23,"person"),e.qZA(),e.TgZ(24,"span"),e._uU(25,"Account"),e.qZA()(),e.TgZ(26,"a",39),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.authService.logOut())}),e.TgZ(27,"mat-icon"),e._uU(28,"exit_to_app"),e.qZA(),e.TgZ(29,"span"),e._uU(30,"Log out"),e.qZA()()(),e.BQk()}if(2&s){const o=e.MAs(5),r=e.MAs(20),n=e.oxw();let i;e.xp6(1),e.Q6J("matMenuTriggerFor",o),e.xp6(3),e.Q6J("overlapTrigger",!1),e.xp6(8),e.Q6J("matMenuTriggerFor",r),e.xp6(4),e.AsE(" ",null==(i=e.lcZ(17,8,n.authService.userData))||null==i.bungieNetUser?null:i.bungieNetUser.cachedBungieGlobalDisplayName,"#",null==(i=e.lcZ(18,10,n.authService.userData))||null==i.bungieNetUser?null:i.bungieNetUser.cachedBungieGlobalDisplayNameCode," "),e.xp6(3),e.Q6J("overlapTrigger",!1),e.xp6(2),e.Q6J("routerLink",e.DdM(12,m)),e.xp6(5),e.Q6J("routerLink",e.DdM(13,G))}}function Q(s,u){1&s&&e._UZ(0,"mat-progress-bar",40)}const J=function(){return["/"]},W=function(){return["/rewards"]},F=function(){return["/trials"]},K=function(){return["/about"]};let B=(()=>{class s{constructor(o,r,n,i,c,p){this.changeDetectorRef=o,this.media=r,this.authService=n,this.spinnerService=i,this.themeService=c,this.authGuard=p,this.autoLogoutSubscription=new g.w0,this.userName="",this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>o.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){const o=(0,t.H)(2e3,5e3);this.autoLogoutSubscription=o.subscribe(()=>{this.authGuard.canActivate()});const r=this.authService.currentUser;r&&(this.userName=r.bungieNetUser.cachedBungieGlobalDisplayName+"#"+r.bungieNetUser.cachedBungieGlobalDisplayNameCode)}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(e.sBO),e.Y36(A.vx),e.Y36(U.F),e.Y36(I.V),e.Y36(_.f),e.Y36(y.g))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-layout"]],decls:67,vars:25,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click",4,"ngIf"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],["href","https://twitter.com/MijagoCoding/","matTooltip","Birb App","target","_blank"],["alt","Me on twitter","src","assets/logos/logo-twitter.png",1,"logo-twitter"],["href","https://ko-fi.com/mijago","matTooltip","If you like my work, you can always buy me a coffee!","target","_blank"],["alt","Ko-Fi","src","assets/logos/logo-kofi.png",1,"logo-twitter"],["href","http://discord.d2armorpicker.com/","matTooltip","Visit me at the development & support discord.","target","_blank"],["alt","Discord","src","assets/logos/logo-discord.png",1,"logo-twitter"],[1,"navbar-spacer"],["mat-icon-button","","aria-label","Change Theme Menu",3,"matMenuTriggerFor"],["xPosition","before","yPosition","above",3,"overlapTrigger"],["themeMenu","matMenu"],["mat-menu-item","",3,"click"],["svgIcon","titan",1,"titan-color"],["svgIcon","warlock",1,"warlock-color"],["svgIcon","hunter",1,"hunter-color"],[4,"ngIf"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],["id","push-bottom","mat-list-item","","routerLinkActive","active",3,"routerLink"],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["matBadge","2","matBadgeColor","accent"],["notificationMenu","matMenu"],["mat-menu-item",""],["mat-button","",3,"matMenuTriggerFor"],["fxShow","","fxHide.xs",""],["userMenu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",3,"routerLink","click"],["color","accent","mode","indeterminate"]],template:function(o,r){if(1&o&&(e.TgZ(0,"div",0)(1,"mat-toolbar",1),e.YNc(2,S,3,0,"button",2),e.TgZ(3,"a",3)(4,"h1"),e._uU(5," Destiny Hub "),e.TgZ(6,"small"),e._uU(7,"by Mijago"),e.qZA(),e.TgZ(8,"a",4),e._UZ(9,"img",5),e.qZA(),e.TgZ(10,"a",6),e._UZ(11,"img",7),e.qZA(),e.TgZ(12,"a",8),e._UZ(13,"img",9),e.qZA()()(),e._UZ(14,"span",10),e.TgZ(15,"button",11)(16,"mat-icon"),e._uU(17,"format_color_fill"),e.qZA()(),e.TgZ(18,"mat-menu",12,13)(20,"a",14),e.NdJ("click",function(){return r.themeService.activateTheme("theme-titan")}),e.TgZ(21,"mat-icon",15),e._uU(22,"titan"),e.qZA(),e.TgZ(23,"span"),e._uU(24,"Titan"),e.qZA()(),e.TgZ(25,"a",14),e.NdJ("click",function(){return r.themeService.activateTheme("theme-warlock")}),e.TgZ(26,"mat-icon",16),e._uU(27,"warlock"),e.qZA(),e.TgZ(28,"span"),e._uU(29,"Warlock"),e.qZA()(),e.TgZ(30,"a",14),e.NdJ("click",function(){return r.themeService.activateTheme("theme-hunter")}),e.TgZ(31,"mat-icon",17),e._uU(32,"hunter"),e.qZA(),e.TgZ(33,"span"),e._uU(34,"Hunter"),e.qZA()()(),e.YNc(35,D,4,0,"ng-container",18),e.ALo(36,"async"),e.YNc(37,N,31,14,"ng-container",18),e.ALo(38,"async"),e.qZA(),e.TgZ(39,"mat-sidenav-container",19)(40,"mat-sidenav",20,21)(42,"mat-nav-list")(43,"h3",22),e._uU(44,"Home"),e.qZA(),e.TgZ(45,"a",23)(46,"mat-icon",24),e._uU(47," qr_code "),e.qZA(),e.TgZ(48,"p",25),e._uU(49,"Bungie Reward Codes"),e.qZA()(),e.TgZ(50,"h3",22),e._uU(51,"Statistics"),e.qZA(),e.TgZ(52,"a",23)(53,"mat-icon",24),e._uU(54," analytics "),e.qZA(),e.TgZ(55,"p",25),e._uU(56," Trials Statistics "),e.qZA()(),e.TgZ(57,"a",26)(58,"mat-icon",24),e._uU(59," info_outline "),e.qZA(),e.TgZ(60,"p",25),e._uU(61," About "),e.qZA()()()(),e.TgZ(62,"mat-sidenav-content",27)(63,"div",28),e.YNc(64,Q,1,0,"mat-progress-bar",29),e.ALo(65,"async"),e.qZA(),e._UZ(66,"router-outlet"),e.qZA()()()),2&o){const n=e.MAs(19);e.ekj("example-is-mobile",r.mobileQuery.matches),e.xp6(2),e.Q6J("ngIf",r.mobileQuery.matches),e.xp6(1),e.Q6J("routerLink",e.DdM(21,J)),e.xp6(12),e.Q6J("matMenuTriggerFor",n),e.xp6(3),e.Q6J("overlapTrigger",!1),e.xp6(17),e.Q6J("ngIf",!e.lcZ(36,15,r.authService.loggedIn)),e.xp6(2),e.Q6J("ngIf",e.lcZ(38,17,r.authService.loggedIn)),e.xp6(3),e.Q6J("opened",!r.mobileQuery.matches)("mode",r.mobileQuery.matches?"over":"side")("fixedInViewport",r.mobileQuery.matches),e.xp6(5),e.Q6J("routerLink",e.DdM(22,W)),e.xp6(7),e.Q6J("routerLink",e.DdM(23,F)),e.xp6(5),e.Q6J("routerLink",e.DdM(24,K)),e.xp6(7),e.Q6J("ngIf",e.lcZ(65,19,r.spinnerService.visibility))}},dependencies:[f.O5,v.lC,v.yS,v.Od,T.JX,T.TM,T.Rh,L.Hw,O.Ye,P.lW,d.Hk,d.Tg,h.X2,d.Nh,d.gs,E.pW,b.VK,b.OP,b.p6,C.gM,M.k,f.Ov],styles:[".titan-color[_ngcontent-%COMP%]{color:#c62828!important}.warlock-color[_ngcontent-%COMP%]{color:#ffc107!important}.hunter-color[_ngcontent-%COMP%]{color:#64b5f6!important}.navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid rgba(238,238,238,0);box-shadow:6px 0 6px #0000001a}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}.logo-twitter[_ngcontent-%COMP%]{width:17px}"]}),s})()}}]);