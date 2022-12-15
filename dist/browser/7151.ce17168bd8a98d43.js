"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[7151,1389],{31389:(F,E,n)=>{n.d(E,{V:()=>D});var r=n(5e3),s=n(8108),h=n(24702),O=n(45061),x=n(82596),y=n(54004),g=n(68285),_=n(86956),I=n(38605),P=n(69808),e=n(63311),f=n(93075);function M(o,m){if(1&o&&r.\u0275\u0275element(0,"ds-form",4),2&o){const a=r.\u0275\u0275nextContext();r.\u0275\u0275property("formId",a.FORM_PREFIX)("formModel",a.formModel)("formGroup",a.formGroup)("displaySubmit",!1)("displayCancel",!1)}}function C(o,m){if(1&o&&(r.\u0275\u0275elementStart(0,"div",5),r.\u0275\u0275text(1),r.\u0275\u0275pipe(2,"translate"),r.\u0275\u0275elementEnd()),2&o){const a=r.\u0275\u0275nextContext();r.\u0275\u0275advance(1),r.\u0275\u0275textInterpolate(r.\u0275\u0275pipeBind1(2,1,a.FORM_PREFIX+"error.matching-passwords"))}}function u(o,m){if(1&o&&(r.\u0275\u0275elementStart(0,"div",6),r.\u0275\u0275text(1),r.\u0275\u0275pipe(2,"translate"),r.\u0275\u0275elementEnd()),2&o){const a=r.\u0275\u0275nextContext();r.\u0275\u0275advance(1),r.\u0275\u0275textInterpolate(r.\u0275\u0275pipeBind1(2,1,a.FORM_PREFIX+"error.empty-password"))}}let D=(()=>{class o{constructor(a,l,v,S){this.formService=a,this.translate=l,this.epersonService=v,this.notificationsService=S,this.isInvalid=new r.EventEmitter,this.passwordValue=new r.EventEmitter,this.currentPasswordValue=new r.EventEmitter,this.formModel=[new s.b1u({id:"password",name:"password",inputType:"password"}),new s.b1u({id:"passwordrepeat",name:"passwordrepeat",inputType:"password"})],this.passwordCanBeEmpty=!0,this.subs=[]}ngOnInit(){"profile.security.form."===this.FORM_PREFIX&&this.formModel.unshift(new s.b1u({id:"current-password",name:"current-password",inputType:"password",required:!0})),this.formGroup=this.formService.createFormGroup(this.formModel,this.passwordCanBeEmpty?{validators:[this.checkPasswordsEqual]}:{validators:[this.checkPasswordsEqual,this.checkPasswordEmpty]}),this.updateFieldTranslations(),this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()}),this.subs.push(this.formGroup.statusChanges.pipe((0,g.ig)(300),(0,y.U)(a=>"VALID"!==a)).subscribe(a=>this.isInvalid.emit(a))),this.subs.push(this.formGroup.valueChanges.pipe((0,g.ig)(300)).subscribe(a=>{this.passwordValue.emit(a.password),"profile.security.form."===this.FORM_PREFIX&&this.currentPasswordValue.emit(a["current-password"])}))}updateFieldTranslations(){this.formModel.forEach(a=>{a.label=this.translate.instant(this.FORM_PREFIX+"label."+a.id)})}checkPasswordsEqual(a){return a.get("password").value===a.get("passwordrepeat").value?null:{notSame:!0}}checkPasswordEmpty(a){const l=a.get("password").value;return(0,h.xb)(l)?{emptyPassword:!0}:null}ngOnDestroy(){this.subs.filter(a=>(0,h.Uh)(a)).forEach(a=>a.unsubscribe())}}return o.\u0275fac=function(a){return new(a||o)(r.\u0275\u0275directiveInject(s.w1X),r.\u0275\u0275directiveInject(_.sK),r.\u0275\u0275directiveInject(O.k),r.\u0275\u0275directiveInject(x.T))},o.\u0275cmp=r.\u0275\u0275defineComponent({type:o,selectors:[["ds-profile-page-security-form"]],inputs:{passwordCanBeEmpty:"passwordCanBeEmpty",FORM_PREFIX:"FORM_PREFIX"},outputs:{isInvalid:"isInvalid",passwordValue:"passwordValue",currentPasswordValue:"currentPasswordValue"},decls:6,vars:7,consts:[[1,"mb-4",3,"type"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel",4,"ngIf"],["id","notSame","class","container-fluid text-danger",4,"ngIf"],["id","emptyPassword","class","container-fluid text-danger",4,"ngIf"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel"],["id","notSame",1,"container-fluid","text-danger"],["id","emptyPassword",1,"container-fluid","text-danger"]],template:function(a,l){1&a&&(r.\u0275\u0275elementStart(0,"ds-alert",0),r.\u0275\u0275text(1),r.\u0275\u0275pipe(2,"translate"),r.\u0275\u0275elementEnd(),r.\u0275\u0275template(3,M,1,5,"ds-form",1),r.\u0275\u0275template(4,C,3,3,"div",2),r.\u0275\u0275template(5,u,3,3,"div",3)),2&a&&(r.\u0275\u0275property("type","alert-info"),r.\u0275\u0275advance(1),r.\u0275\u0275textInterpolate(r.\u0275\u0275pipeBind1(2,5,l.FORM_PREFIX+"info")),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngIf",l.formModel),r.\u0275\u0275advance(1),r.\u0275\u0275property("ngIf",l.formGroup.hasError("notSame")),r.\u0275\u0275advance(1),r.\u0275\u0275property("ngIf",(l.formGroup.dirty||l.formGroup.touched)&&l.formGroup.hasError("emptyPassword")))},directives:[I.w,P.O5,e.U,f.JL,f.sg],pipes:[_.X$],encapsulation:2}),o})()},67151:(F,E,n)=>{n.r(E),n.d(E,{CreateProfileComponent:()=>w});var r=n(54004),s=n(93075),h=n(45061),O=n(36146),x=n(64200),y=n(82596),g=n(21540),_=n(24702),I=n(58876),P=n(68285),e=n(5e3),f=n(86956),M=n(65620),C=n(74202),u=n(69808),D=n(31389);function o(i,p){1&i&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&i&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,"register-page.create-profile.identification.first-name.error")," "))}function m(i,p){if(1&i&&(e.\u0275\u0275elementStart(0,"div",25),e.\u0275\u0275template(1,o,3,3,"span",26),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.firstName.errors&&t.firstName.errors.required)}}function a(i,p){1&i&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&i&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,"register-page.create-profile.identification.last-name.error")," "))}function l(i,p){if(1&i&&(e.\u0275\u0275elementStart(0,"div",25),e.\u0275\u0275template(1,a,3,3,"span",26),e.\u0275\u0275elementEnd()),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.lastName.errors&&t.lastName.errors.required)}}function v(i,p){if(1&i&&(e.\u0275\u0275elementStart(0,"option",21),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&i){const t=p.$implicit;e.\u0275\u0275property("value",t.code),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.label)}}function S(i,p){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1)(1,"h3",2),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",5)(9,"div",6)(10,"div",7)(11,"label",8),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"span",9),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"async"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(17,"form",10),e.\u0275\u0275listener("ngSubmit",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().submitEperson()}),e.\u0275\u0275elementStart(18,"div",11)(19,"div",6)(20,"div",7)(21,"label",12),e.\u0275\u0275text(22),e.\u0275\u0275pipe(23,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(24,"input",13),e.\u0275\u0275template(25,m,2,1,"div",14),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(26,"div",6)(27,"div",7)(28,"label",15),e.\u0275\u0275text(29),e.\u0275\u0275pipe(30,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(31,"input",16),e.\u0275\u0275template(32,l,2,1,"div",14),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(33,"div",6)(34,"div",7)(35,"label",17),e.\u0275\u0275text(36),e.\u0275\u0275pipe(37,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(38,"input",18),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"div",6)(40,"div",7)(41,"label",19),e.\u0275\u0275text(42),e.\u0275\u0275pipe(43,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"select",20),e.\u0275\u0275element(45,"option",21),e.\u0275\u0275template(46,v,2,2,"option",22),e.\u0275\u0275elementEnd()()()()()()(),e.\u0275\u0275elementStart(47,"div",3)(48,"div",4),e.\u0275\u0275text(49),e.\u0275\u0275pipe(50,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(51,"div",5)(52,"ds-profile-page-security-form",23),e.\u0275\u0275listener("isInvalid",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().setInValid(d)})("passwordValue",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().setPasswordValue(d)}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(53,"div",6)(54,"div",7)(55,"button",24),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().submitEperson()}),e.\u0275\u0275text(56),e.\u0275\u0275pipe(57,"translate"),e.\u0275\u0275elementEnd()()()()}if(2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,22,"register-page.create-profile.header")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,24,"register-page.create-profile.identification.header")),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(13,26,"register-page.create-profile.identification.email")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(16,28,t.registration$).email),e.\u0275\u0275advance(2),e.\u0275\u0275classMap("ng-invalid"),e.\u0275\u0275property("formGroup",t.userInfoForm),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(23,30,"register-page.create-profile.identification.first-name")),e.\u0275\u0275advance(2),e.\u0275\u0275property("className",t.firstName.invalid&&(t.firstName.dirty||t.firstName.touched)?"form-control is-invalid":"form-control"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.firstName.invalid&&(t.firstName.dirty||t.firstName.touched)),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(30,32,"register-page.create-profile.identification.last-name")),e.\u0275\u0275advance(2),e.\u0275\u0275property("className",t.lastName.invalid&&(t.lastName.dirty||t.lastName.touched)?"form-control is-invalid":"form-control"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.lastName.invalid&&(t.lastName.dirty||t.lastName.touched)),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(37,34,"register-page.create-profile.identification.contact")),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(43,36,"register-page.create-profile.identification.language")),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",""),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.activeLangs),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(50,38,"register-page.create-profile.security.header")),e.\u0275\u0275advance(3),e.\u0275\u0275property("passwordCanBeEmpty",!1)("FORM_PREFIX","register-page.create-profile.security."),e.\u0275\u0275advance(3),e.\u0275\u0275property("disabled",t.isInValidPassword||t.userInfoForm.invalid),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(57,40,"register-page.create-profile.submit"))}}let w=(()=>{class i{constructor(t,c,d,T,R,B,N,A){this.translateService=t,this.ePersonDataService=c,this.store=d,this.router=T,this.route=R,this.formBuilder=B,this.notificationsService=N,this.endUserAgreementService=A,this.isInValidPassword=!0,this.NOTIFICATIONS_PREFIX="register-page.create-profile.submit."}ngOnInit(){this.registration$=this.route.data.pipe((0,r.U)(t=>t.registration),(0,P.Gp)()),this.registration$.subscribe(t=>{this.email=t.email,this.token=t.token}),this.activeLangs=g.N.languages.filter(t=>!0===t.active),this.userInfoForm=this.formBuilder.group({firstName:new s.NI("",{validators:[s.kI.required]}),lastName:new s.NI("",{validators:[s.kI.required]}),contactPhone:new s.NI(""),language:new s.NI("")})}setInValid(t){this.isInValidPassword=t||(0,_.xb)(this.password)}setPasswordValue(t){this.password=t,this.isInValidPassword=this.isInValidPassword||(0,_.xb)(this.password)}get firstName(){return this.userInfoForm.get("firstName")}get lastName(){return this.userInfoForm.get("lastName")}get contactPhone(){return this.userInfoForm.get("contactPhone")}get language(){return this.userInfoForm.get("language")}submitEperson(){if(!this.userInfoForm.invalid&&!this.isInValidPassword){const t={metadata:{"eperson.firstname":[{value:this.firstName.value}],"eperson.lastname":[{value:this.lastName.value}],"eperson.phone":[{value:this.contactPhone.value}],"eperson.language":[{value:this.language.value}]},email:this.email,password:this.password,canLogIn:!0,requireCertificate:!1};this.endUserAgreementService.isCookieAccepted()&&(t.metadata[I.DJ]=[{value:String(!0)}],this.endUserAgreementService.removeCookieAccepted());const c=Object.assign(new O.T,t);this.ePersonDataService.createEPersonForToken(c,this.token).pipe((0,P.hC)()).subscribe(d=>{d.hasSucceeded?(this.notificationsService.success(this.translateService.get(this.NOTIFICATIONS_PREFIX+"success.head"),this.translateService.get(this.NOTIFICATIONS_PREFIX+"success.content")),this.store.dispatch(new x.zn(this.email,this.password)),this.router.navigate(["/home"])):this.notificationsService.error(this.translateService.get(this.NOTIFICATIONS_PREFIX+"error.head"),d.errorMessage)})}}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(f.sK),e.\u0275\u0275directiveInject(h.k),e.\u0275\u0275directiveInject(M.yh),e.\u0275\u0275directiveInject(C.F0),e.\u0275\u0275directiveInject(C.gz),e.\u0275\u0275directiveInject(s.qu),e.\u0275\u0275directiveInject(y.T),e.\u0275\u0275directiveInject(I.u4))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ds-create-profile"]],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"mb-4"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-12"],["for","email",1,"font-weight-bold"],["id","email"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","id","firstName","formControlName","firstName",3,"className"],["class","invalid-feedback show-feedback",4,"ngIf"],["for","lastName"],["id","lastName","formControlName","lastName",3,"className"],["for","contactPhone"],["id","contactPhone","formControlName","contactPhone",1,"form-control"],["for","language"],["id","language","formControlName","language",1,"form-control"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"passwordCanBeEmpty","FORM_PREFIX","isInvalid","passwordValue"],[1,"btn","btn-default","btn-primary",3,"disabled","click"],[1,"invalid-feedback","show-feedback"],[4,"ngIf"]],template:function(t,c){1&t&&(e.\u0275\u0275template(0,S,58,42,"div",0),e.\u0275\u0275pipe(1,"async")),2&t&&e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,1,c.registration$))},directives:[u.O5,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,s.EJ,s.YN,s.Kr,u.sg,D.V],pipes:[u.Ov,f.X$],styles:[""]}),i})()}}]);