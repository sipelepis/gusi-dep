"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[1216],{31216:(ce,D,a)=>{a.r(D),a.d(D,{RequestCopyModule:()=>pe});var l=a(10210),N=a(66004),u=a(37895),g=a(12102),p=a(5496),e=a(70074);let E=(()=>{class n{constructor(t){this.itemRequestDataService=t}resolve(t,i){return this.itemRequestDataService.findById(t.params.token).pipe((0,p.hC)())}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject(g.a))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();var m=a(48358),y=a(21160),h=a(28709),f=a(69810),V=a(61562);function b(n){return new f.R((0,V.vv)(),n).toString()}const B="deny",$="grant";var C=a(89551),A=a(96007),R=a(59846),q=a(53043),S=a(41633),I=a(76924),v=a(86553);const w=function(n,s){return{url:n,name:s}};function z(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"p",5),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",6)(9,"a",7),e.\u0275\u0275pipe(10,"async"),e.\u0275\u0275pipe(11,"translate"),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"a",8),e.\u0275\u0275pipe(15,"async"),e.\u0275\u0275pipe(16,"translate"),e.\u0275\u0275text(17),e.\u0275\u0275pipe(18,"translate"),e.\u0275\u0275elementEnd()()()),2&n){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind2(2,8,"grant-deny-request-copy.intro1",e.\u0275\u0275pureFunction2(29,w,e.\u0275\u0275pipeBind1(3,11,t.itemUrl$),e.\u0275\u0275pipeBind1(4,13,t.itemName$))),e.\u0275\u0275sanitizeHtml),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,15,"grant-deny-request-copy.intro2")),e.\u0275\u0275advance(3),e.\u0275\u0275propertyInterpolate("title",e.\u0275\u0275pipeBind1(11,19,"grant-deny-request-copy.grant")),e.\u0275\u0275property("routerLink",e.\u0275\u0275pipeBind1(10,17,t.grantRoute$)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(13,21,"grant-deny-request-copy.grant")," "),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("title",e.\u0275\u0275pipeBind1(16,25,"grant-deny-request-copy.deny")),e.\u0275\u0275property("routerLink",e.\u0275\u0275pipeBind1(15,23,t.denyRoute$)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(18,27,"grant-deny-request-copy.deny")," ")}}function J(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",9)(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p",10)(5,"a",11),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd()()()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,"grant-deny-request-copy.processed")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,4,"grant-deny-request-copy.home-page")))}function P(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,z,19,32,"div",3),e.\u0275\u0275template(2,J,8,6,"div",4),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.payload.decisionDate),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.payload.decisionDate)}}function Y(n,s){1&n&&e.\u0275\u0275element(0,"ds-themed-loading")}function H(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"div",1)(1,"h3",2),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,P,3,2,"div",3),e.\u0275\u0275template(5,Y,1,0,"ds-themed-loading",3),e.\u0275\u0275elementEnd()),2&n){const t=s.ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,3,"grant-deny-request-copy.header")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t&&t.hasSucceeded),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t||(null==t?null:t.isLoading))}}let G=(()=>{class n{constructor(t,i,r,o,d){this.router=t,this.route=i,this.authService=r,this.itemDataService=o,this.nameService=d}ngOnInit(){this.itemRequestRD$=this.route.data.pipe((0,m.U)(t=>t.request),(0,p.hC)(),(0,R.Gh)(this.router,this.authService)),this.itemRD$=this.itemRequestRD$.pipe((0,p.Gp)(),(0,y.w)(t=>this.itemDataService.findById(t.itemId))),this.itemName$=this.itemRD$.pipe((0,p.Gp)(),(0,m.U)(t=>this.nameService.getName(t))),this.itemUrl$=this.itemRD$.pipe((0,p.Gp)(),(0,m.U)(t=>(0,A.Tt)(t))),this.denyRoute$=this.itemRequestRD$.pipe((0,p.Gp)(),(0,m.U)(t=>function L(n){return new f.R(b(n),B).toString()}(t.token))),this.grantRoute$=this.itemRequestRD$.pipe((0,p.Gp)(),(0,m.U)(t=>function k(n){return new f.R(b(n),$).toString()}(t.token)))}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(u.F0),e.\u0275\u0275directiveInject(u.gz),e.\u0275\u0275directiveInject(h.e8),e.\u0275\u0275directiveInject(C.S),e.\u0275\u0275directiveInject(q._))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-grant-deny-request-copy"]],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"mb-4"],[4,"ngIf"],["class","processed-message",4,"ngIf"],[3,"innerHTML"],[1,"btn-group"],[1,"btn","btn-outline-primary",3,"routerLink","title"],[1,"btn","btn-outline-danger",3,"routerLink","title"],[1,"processed-message"],[1,"text-center"],["routerLink","/home",1,"btn","btn-primary"]],template:function(t,i){1&t&&(e.\u0275\u0275template(0,H,6,5,"div",0),e.\u0275\u0275pipe(1,"async")),2&t&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,i.itemRequestRD$))},directives:[S.g,l.O5,u.yS,I.Z],pipes:[l.Ov,v.X$],styles:[""]}),n})();var T=a(53426),M=a(25839),U=a(16228);class X{constructor(s,t){this.subject=s,this.message=t}}var c=a(45028);function Z(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",11),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,"grant-deny-request-copy.email.subject.empty")," "))}function K(n,s){1&n&&(e.\u0275\u0275elementStart(0,"div",11),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,"grant-deny-request-copy.email.message.empty")," "))}const O=function(n){return{"is-invalid":n}},Q=["*"];let F=(()=>{class n{constructor(t){this.location=t,this.send=new e.EventEmitter}submit(){this.send.emit(new X(this.subject,this.message))}return(){this.location.back()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(l.Ye))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-email-request-copy"]],inputs:{subject:"subject",message:"message"},outputs:{send:"send"},ngContentSelectors:Q,decls:25,vars:29,consts:[[1,"form-group"],["for","subject"],["type","text","id","subject","name","subject",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["class","invalid-feedback",4,"ngIf"],["for","message"],["id","message","rows","8","name","message",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-primary",3,"disabled","title","click"],[1,"fas","fa-envelope"],[1,"btn","btn-outline-secondary","mr-1",3,"title","click"],[1,"fas","fa-arrow-left"],[1,"invalid-feedback"]],template:function(t,i){1&t&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"form")(1,"div",0)(2,"label",1),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"input",2),e.\u0275\u0275listener("ngModelChange",function(o){return i.subject=o}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,Z,3,3,"div",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",0)(8,"label",4),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"textarea",5),e.\u0275\u0275listener("ngModelChange",function(o){return i.message=o}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(12,K,3,3,"div",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(13),e.\u0275\u0275elementStart(14,"div",6)(15,"button",7),e.\u0275\u0275listener("click",function(){return i.submit()}),e.\u0275\u0275pipe(16,"translate"),e.\u0275\u0275element(17,"i",8),e.\u0275\u0275text(18),e.\u0275\u0275pipe(19,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"button",9),e.\u0275\u0275listener("click",function(){return i.return()}),e.\u0275\u0275pipe(21,"translate"),e.\u0275\u0275element(22,"i",10),e.\u0275\u0275text(23),e.\u0275\u0275pipe(24,"translate"),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,13,"grant-deny-request-copy.email.subject")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(25,O,!i.subject||0===i.subject.length))("ngModel",i.subject),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.subject||0===i.subject.length),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(10,15,"grant-deny-request-copy.email.message")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(27,O,!i.message||0===i.message.length))("ngModel",i.message),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i.message||0===i.message.length),e.\u0275\u0275advance(3),e.\u0275\u0275propertyInterpolate("title",e.\u0275\u0275pipeBind1(16,17,"grant-deny-request-copy.email.send")),e.\u0275\u0275property("disabled",!i.message||0===i.message.length||!i.subject||0===i.subject.length),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(19,19,"grant-deny-request-copy.email.send")," "),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("title",e.\u0275\u0275pipeBind1(21,21,"grant-deny-request-copy.email.back")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(24,23,"grant-deny-request-copy.email.back")," "))},directives:[c._Y,c.JL,c.F,c.Fj,l.mk,c.JJ,c.On,l.O5],pipes:[v.X$],styles:[""]}),n})();function W(n,s){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"ds-email-request-copy",4),e.\u0275\u0275listener("send",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext(2).deny(r)}),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,3,"deny-request-copy.intro")),e.\u0275\u0275advance(2),e.\u0275\u0275property("subject",e.\u0275\u0275pipeBind1(5,5,t.subject$))("message",e.\u0275\u0275pipeBind1(6,7,t.message$))}}function ee(n,s){1&n&&e.\u0275\u0275element(0,"ds-themed-loading")}function te(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"div",1)(1,"h3",2),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,W,7,9,"div",3),e.\u0275\u0275template(5,ee,1,0,"ds-themed-loading",3),e.\u0275\u0275elementEnd()),2&n){const t=s.ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,3,"deny-request-copy.header")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t&&t.hasSucceeded),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t||(null==t?null:t.isLoading))}}let ne=(()=>{class n{constructor(t,i,r,o,d,_,j,x){this.router=t,this.route=i,this.authService=r,this.translateService=o,this.itemDataService=d,this.nameService=_,this.itemRequestService=j,this.notificationsService=x}ngOnInit(){this.itemRequestRD$=this.route.data.pipe((0,m.U)(i=>i.request),(0,p.hC)(),(0,R.Gh)(this.router,this.authService));const t=(0,T.a)(this.itemRequestRD$.pipe((0,p.Gp)()),this.authService.getAuthenticatedUserFromStore()).pipe((0,y.w)(([i,r])=>this.itemDataService.findById(i.itemId).pipe((0,p.Gp)(),(0,m.U)(o=>{const d=o.firstMetadataValue("dc.identifier.uri");return Object.assign({recipientName:i.requestName,itemUrl:(0,M.UE)(d)?d:o.handle,itemName:this.nameService.getName(o),authorName:r.name,authorEmail:r.email})}))));this.subject$=this.translateService.get("deny-request-copy.email.subject"),this.message$=t.pipe((0,y.w)(i=>this.translateService.get("deny-request-copy.email.message",i)))}deny(t){this.itemRequestRD$.pipe((0,p.Gp)(),(0,y.w)(i=>this.itemRequestService.deny(i.token,t)),(0,p.hC)()).subscribe(i=>{i.hasSucceeded?(this.notificationsService.success(this.translateService.get("deny-request-copy.success")),this.router.navigateByUrl("/")):this.notificationsService.error(this.translateService.get("deny-request-copy.error"),i.errorMessage)})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(u.F0),e.\u0275\u0275directiveInject(u.gz),e.\u0275\u0275directiveInject(h.e8),e.\u0275\u0275directiveInject(v.sK),e.\u0275\u0275directiveInject(C.S),e.\u0275\u0275directiveInject(q._),e.\u0275\u0275directiveInject(g.a),e.\u0275\u0275directiveInject(U.T))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-deny-request-copy"]],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"mb-4"],[4,"ngIf"],[3,"subject","message","send"]],template:function(t,i){1&t&&(e.\u0275\u0275template(0,te,6,5,"div",0),e.\u0275\u0275pipe(1,"async")),2&t&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,i.itemRequestRD$))},directives:[S.g,l.O5,F,I.Z],pipes:[l.Ov,v.X$],styles:[""]}),n})();function ie(n,s){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"ds-email-request-copy",4),e.\u0275\u0275listener("send",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext(2).grant(r)}),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"form",5)(11,"div",6)(12,"input",7),e.\u0275\u0275listener("ngModelChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext(2).suggestOpenAccess=r}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"label",8),e.\u0275\u0275text(14),e.\u0275\u0275pipe(15,"translate"),e.\u0275\u0275elementEnd()()()()()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,6,"grant-request-copy.intro")),e.\u0275\u0275advance(2),e.\u0275\u0275property("subject",e.\u0275\u0275pipeBind1(5,8,t.subject$))("message",e.\u0275\u0275pipeBind1(6,10,t.message$)),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(9,12,"grant-deny-request-copy.email.permissions.info")),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",t.suggestOpenAccess),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(15,14,"grant-deny-request-copy.email.permissions.label"))}}function se(n,s){1&n&&e.\u0275\u0275element(0,"ds-themed-loading")}function ae(n,s){if(1&n&&(e.\u0275\u0275elementStart(0,"div",1)(1,"h3",2),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,ie,16,16,"div",3),e.\u0275\u0275template(5,se,1,0,"ds-themed-loading",3),e.\u0275\u0275elementEnd()),2&n){const t=s.ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,3,"grant-request-copy.header")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t&&t.hasSucceeded),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t||(null==t?null:t.isLoading))}}let re=(()=>{class n{constructor(t,i,r,o,d,_,j,x){this.router=t,this.route=i,this.authService=r,this.translateService=o,this.itemDataService=d,this.nameService=_,this.itemRequestService=j,this.notificationsService=x,this.suggestOpenAccess=!1}ngOnInit(){this.itemRequestRD$=this.route.data.pipe((0,m.U)(i=>i.request),(0,p.hC)(),(0,R.Gh)(this.router,this.authService));const t=(0,T.a)(this.itemRequestRD$.pipe((0,p.Gp)()),this.authService.getAuthenticatedUserFromStore()).pipe((0,y.w)(([i,r])=>this.itemDataService.findById(i.itemId).pipe((0,p.Gp)(),(0,m.U)(o=>{const d=o.firstMetadataValue("dc.identifier.uri");return Object.assign({recipientName:i.requestName,itemUrl:(0,M.UE)(d)?d:o.handle,itemName:this.nameService.getName(o),authorName:r.name,authorEmail:r.email})}))));this.subject$=this.translateService.get("grant-request-copy.email.subject"),this.message$=t.pipe((0,y.w)(i=>this.translateService.get("grant-request-copy.email.message",i)))}grant(t){this.itemRequestRD$.pipe((0,p.Gp)(),(0,y.w)(i=>this.itemRequestService.grant(i.token,t,this.suggestOpenAccess)),(0,p.hC)()).subscribe(i=>{i.hasSucceeded?(this.notificationsService.success(this.translateService.get("grant-request-copy.success")),this.router.navigateByUrl("/")):this.notificationsService.error(this.translateService.get("grant-request-copy.error"),i.errorMessage)})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(u.F0),e.\u0275\u0275directiveInject(u.gz),e.\u0275\u0275directiveInject(h.e8),e.\u0275\u0275directiveInject(v.sK),e.\u0275\u0275directiveInject(C.S),e.\u0275\u0275directiveInject(q._),e.\u0275\u0275directiveInject(g.a),e.\u0275\u0275directiveInject(U.T))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-grant-request-copy"]],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"mb-4"],[4,"ngIf"],[3,"subject","message","send"],[1,"mb-3"],[1,"form-check"],["type","checkbox","value","","id","permissions","name","permissions",1,"form-check-input",3,"ngModel","ngModelChange"],["for","permissions",1,"form-check-label"]],template:function(t,i){1&t&&(e.\u0275\u0275template(0,ae,6,5,"div",0),e.\u0275\u0275pipe(1,"async")),2&t&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,i.itemRequestRD$))},directives:[S.g,l.O5,F,c._Y,c.JL,c.F,c.Wl,c.JJ,c.On,I.Z],pipes:[l.Ov,v.X$],styles:[""]}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({providers:[E,G],imports:[[u.Bz.forChild([{path:":token",resolve:{request:E},children:[{path:"",component:G},{path:B,component:ne},{path:$,component:re}]}])]]}),n})(),pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({providers:[],imports:[[l.ez,N.m,oe]]}),n})()}}]);