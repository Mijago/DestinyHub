"use strict";(self.webpackChunkD2Hub=self.webpackChunkD2Hub||[]).push([[873],{1184:(w,C,o)=>{o.d(C,{$:()=>Q});var r=o(727),p=o(5963),t=o(4650),v=o(2289),b=o(394),x=o(4649),y=o(6074),T=o(559),M=o(6895),g=o(8622),A=o(5829),P=o(7392),f=o(3267),D=o(3683),_=o(4633),U=o(3238),k=o(3162),h=o(1561),Z=o(4859),I=o(2673),L=o(266);function E(m,u){if(1&m){const c=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(c),t.oxw();const d=t.MAs(41);return t.KtG(d.toggle())}),t.TgZ(1,"mat-icon"),t._uU(2,"menu"),t.qZA()()}}function O(m,u){if(1&m){const c=t.EpF();t.ynx(0),t.TgZ(1,"button",30),t.NdJ("click",function(){t.CHM(c);const d=t.oxw();return t.KtG(d.authService.startLogin())}),t.TgZ(2,"mat-icon"),t._uU(3,"login"),t.qZA()(),t.BQk()}}const a=function(){return["/account/profile"]},e=function(){return["/auth/login"]};function n(m,u){if(1&m){const c=t.EpF();t.ynx(0),t.TgZ(1,"button",31)(2,"mat-icon",32),t._uU(3,"notifications"),t.qZA()(),t.TgZ(4,"mat-menu",12,33)(6,"a",34)(7,"span"),t._uU(8,"You have new tasks"),t.qZA()(),t.TgZ(9,"a",34)(10,"span"),t._uU(11,"You have a new message"),t.qZA()()(),t.TgZ(12,"button",35)(13,"mat-icon"),t._uU(14,"person"),t.qZA(),t.TgZ(15,"span",36),t._uU(16),t.ALo(17,"async"),t.ALo(18,"async"),t.qZA()(),t.TgZ(19,"mat-menu",12,37)(21,"a",38)(22,"mat-icon"),t._uU(23,"person"),t.qZA(),t.TgZ(24,"span"),t._uU(25,"Account"),t.qZA()(),t.TgZ(26,"a",39),t.NdJ("click",function(){t.CHM(c);const d=t.oxw();return t.KtG(d.authService.logOut())}),t.TgZ(27,"mat-icon"),t._uU(28,"exit_to_app"),t.qZA(),t.TgZ(29,"span"),t._uU(30,"Log out"),t.qZA()()(),t.BQk()}if(2&m){const c=t.MAs(5),i=t.MAs(20),d=t.oxw();let s;t.xp6(1),t.Q6J("matMenuTriggerFor",c),t.xp6(3),t.Q6J("overlapTrigger",!1),t.xp6(8),t.Q6J("matMenuTriggerFor",i),t.xp6(4),t.AsE(" ",null==(s=t.lcZ(17,8,d.authService.userData))||null==s.bungieNetUser?null:s.bungieNetUser.cachedBungieGlobalDisplayName,"#",null==(s=t.lcZ(18,10,d.authService.userData))||null==s.bungieNetUser?null:s.bungieNetUser.cachedBungieGlobalDisplayNameCode," "),t.xp6(3),t.Q6J("overlapTrigger",!1),t.xp6(2),t.Q6J("routerLink",t.DdM(12,a)),t.xp6(5),t.Q6J("routerLink",t.DdM(13,e))}}function l(m,u){1&m&&t._UZ(0,"mat-progress-bar",40)}const S=function(){return["/"]},B=function(){return["/trials"]},F=function(){return["/about"]};let Q=(()=>{class m{constructor(c,i,d,s,K,H){this.changeDetectorRef=c,this.media=i,this.authService=d,this.spinnerService=s,this.themeService=K,this.authGuard=H,this.autoLogoutSubscription=new r.w0,this.userName="",this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>c.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){const c=(0,p.H)(2e3,5e3);this.autoLogoutSubscription=c.subscribe(()=>{this.authGuard.canActivate()});const i=this.authService.currentUser;i&&(this.userName=i.bungieNetUser.cachedBungieGlobalDisplayName+"#"+i.bungieNetUser.cachedBungieGlobalDisplayNameCode)}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}}return m.\u0275fac=function(c){return new(c||m)(t.Y36(t.sBO),t.Y36(v.vx),t.Y36(b.F),t.Y36(x.V),t.Y36(y.f),t.Y36(T.g))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-layout"]],decls:60,vars:23,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click",4,"ngIf"],["matTooltip","Home",1,"navbar-brand",3,"routerLink"],["href","https://twitter.com/MijagoCoding/","matTooltip","Birb App","target","_blank"],["alt","Me on twitter","src","assets/logos/logo-twitter.png",1,"logo-twitter"],["href","https://ko-fi.com/mijago","matTooltip","If you like my work, you can always buy me a coffee!","target","_blank"],["alt","Ko-Fi","src","assets/logos/logo-kofi.png",1,"logo-twitter"],["href","http://discord.d2armorpicker.com/","matTooltip","Visit me at the development & support discord.","target","_blank"],["alt","Discord","src","assets/logos/logo-discord.png",1,"logo-twitter"],[1,"navbar-spacer"],["mat-icon-button","","aria-label","Change Theme Menu",3,"matMenuTriggerFor"],["xPosition","before","yPosition","above",3,"overlapTrigger"],["themeMenu","matMenu"],["mat-menu-item","",3,"click"],["svgIcon","titan",1,"titan-color"],["svgIcon","warlock",1,"warlock-color"],["svgIcon","hunter",1,"hunter-color"],[4,"ngIf"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],["id","push-bottom","mat-list-item","","routerLinkActive","active",3,"routerLink"],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"matMenuTriggerFor"],["matBadge","2","matBadgeColor","accent"],["notificationMenu","matMenu"],["mat-menu-item",""],["mat-button","",3,"matMenuTriggerFor"],["fxShow","","fxHide.xs",""],["userMenu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",3,"routerLink","click"],["color","accent","mode","indeterminate"]],template:function(c,i){if(1&c&&(t.TgZ(0,"div",0)(1,"mat-toolbar",1),t.YNc(2,E,3,0,"button",2),t.TgZ(3,"a",3)(4,"h1"),t._uU(5," Destiny Hub "),t.TgZ(6,"small"),t._uU(7,"by Mijago"),t.qZA(),t.TgZ(8,"a",4),t._UZ(9,"img",5),t.qZA(),t.TgZ(10,"a",6),t._UZ(11,"img",7),t.qZA(),t.TgZ(12,"a",8),t._UZ(13,"img",9),t.qZA()()(),t._UZ(14,"span",10),t.TgZ(15,"button",11)(16,"mat-icon"),t._uU(17,"format_color_fill"),t.qZA()(),t.TgZ(18,"mat-menu",12,13)(20,"a",14),t.NdJ("click",function(){return i.themeService.activateTheme("theme-titan")}),t.TgZ(21,"mat-icon",15),t._uU(22,"titan"),t.qZA(),t.TgZ(23,"span"),t._uU(24,"Titan"),t.qZA()(),t.TgZ(25,"a",14),t.NdJ("click",function(){return i.themeService.activateTheme("theme-warlock")}),t.TgZ(26,"mat-icon",16),t._uU(27,"warlock"),t.qZA(),t.TgZ(28,"span"),t._uU(29,"Warlock"),t.qZA()(),t.TgZ(30,"a",14),t.NdJ("click",function(){return i.themeService.activateTheme("theme-hunter")}),t.TgZ(31,"mat-icon",17),t._uU(32,"hunter"),t.qZA(),t.TgZ(33,"span"),t._uU(34,"Hunter"),t.qZA()()(),t.YNc(35,O,4,0,"ng-container",18),t.ALo(36,"async"),t.YNc(37,n,31,14,"ng-container",18),t.ALo(38,"async"),t.qZA(),t.TgZ(39,"mat-sidenav-container",19)(40,"mat-sidenav",20,21)(42,"mat-nav-list")(43,"h3",22),t._uU(44,"Home"),t.qZA(),t.TgZ(45,"a",23)(46,"mat-icon",24),t._uU(47," analytics "),t.qZA(),t.TgZ(48,"p",25),t._uU(49," Trials Statistics "),t.qZA()(),t.TgZ(50,"a",26)(51,"mat-icon",24),t._uU(52," info_outline "),t.qZA(),t.TgZ(53,"p",25),t._uU(54," About "),t.qZA()()()(),t.TgZ(55,"mat-sidenav-content",27)(56,"div",28),t.YNc(57,l,1,0,"mat-progress-bar",29),t.ALo(58,"async"),t.qZA(),t._UZ(59,"router-outlet"),t.qZA()()()),2&c){const d=t.MAs(19);t.ekj("example-is-mobile",i.mobileQuery.matches),t.xp6(2),t.Q6J("ngIf",i.mobileQuery.matches),t.xp6(1),t.Q6J("routerLink",t.DdM(20,S)),t.xp6(12),t.Q6J("matMenuTriggerFor",d),t.xp6(3),t.Q6J("overlapTrigger",!1),t.xp6(17),t.Q6J("ngIf",!t.lcZ(36,14,i.authService.loggedIn)),t.xp6(2),t.Q6J("ngIf",t.lcZ(38,16,i.authService.loggedIn)),t.xp6(3),t.Q6J("opened",!i.mobileQuery.matches)("mode",i.mobileQuery.matches?"over":"side")("fixedInViewport",i.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(21,B)),t.xp6(5),t.Q6J("routerLink",t.DdM(22,F)),t.xp6(7),t.Q6J("ngIf",t.lcZ(58,18,i.spinnerService.visibility))}},dependencies:[M.O5,g.lC,g.yS,g.Od,A.b8,P.Hw,f.JX,f.TM,f.Rh,D.Ye,_.Hk,_.Tg,U.X2,_.Nh,_.gs,k.pW,h.VK,h.OP,h.p6,Z.lW,I.k,L.gM,M.Ov],styles:[".titan-color[_ngcontent-%COMP%]{color:#c62828!important}.warlock-color[_ngcontent-%COMP%]{color:#ffc107!important}.hunter-color[_ngcontent-%COMP%]{color:#64b5f6!important}.navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid rgba(238,238,238,0);box-shadow:6px 0 6px #0000001a}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}.logo-twitter[_ngcontent-%COMP%]{width:17px}"]}),m})()},3546:(w,C,o)=>{o.d(C,{$j:()=>A,C1:()=>E,G2:()=>D,QW:()=>O,a8:()=>I,dk:()=>L,dn:()=>M,kc:()=>Z,n5:()=>g});var r=o(4650),p=o(3238);const t=["*",[["mat-card-footer"]]],v=["*","mat-card-footer"],b=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],x=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],y=[[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],[["img"]],"*"],T=["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","img","*"];let M=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=r.lG2({type:a,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),a})(),g=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=r.lG2({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),a})(),A=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=r.lG2({type:a,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),a})(),D=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=r.lG2({type:a,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),a})(),Z=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=r.lG2({type:a,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),a})(),I=(()=>{class a{constructor(n){this._animationMode=n}}return a.\u0275fac=function(n){return new(n||a)(r.Y36(r.QbO,8))},a.\u0275cmp=r.Xpm({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(n,l){2&n&&r.ekj("_mat-animation-noopable","NoopAnimations"===l._animationMode)},exportAs:["matCard"],ngContentSelectors:v,decls:2,vars:0,template:function(n,l){1&n&&(r.F$t(t),r.Hsn(0),r.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),a})(),L=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=r.Xpm({type:a,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:x,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(n,l){1&n&&(r.F$t(b),r.Hsn(0),r.TgZ(1,"div",0),r.Hsn(2,1),r.qZA(),r.Hsn(3,2))},encapsulation:2,changeDetection:0}),a})(),E=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=r.Xpm({type:a,selectors:[["mat-card-title-group"]],hostAttrs:[1,"mat-card-title-group"],ngContentSelectors:T,decls:4,vars:0,template:function(n,l){1&n&&(r.F$t(y),r.TgZ(0,"div"),r.Hsn(1),r.qZA(),r.Hsn(2,1),r.Hsn(3,2))},encapsulation:2,changeDetection:0}),a})(),O=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[p.BQ,p.BQ]}),a})()}}]);