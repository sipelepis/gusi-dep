"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=3868,exports.ids=[3868],exports.modules={23868:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ForgotEmailComponent:()=>ForgotEmailComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5e3),_register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59860);class ForgotEmailComponent{}__name(ForgotEmailComponent,"ForgotEmailComponent"),ForgotEmailComponent.\u0275fac=__name(function(t){return new(t||ForgotEmailComponent)},"ForgotEmailComponent_Factory"),ForgotEmailComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:ForgotEmailComponent,selectors:[["ds-forgot-email"]],decls:1,vars:1,consts:[[3,"MESSAGE_PREFIX"]],template:__name(function(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__._UZ(0,"ds-register-email-form",0),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("MESSAGE_PREFIX","forgot-email.form")},"ForgotEmailComponent_Template"),directives:[_register_email_form_register_email_form_component__WEBPACK_IMPORTED_MODULE_0__.Z],styles:[""]})},59860:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>RegisterEmailFormComponent});var _core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(93459),_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(82596),_angular_forms__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(93075),_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(59656),_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13730),_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(24702),rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(76477),rxjs_operators__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(83292),_core_google_recaptcha_google_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20036),_shared_alert_aletr_type__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(74711),_shared_cookies_klaro_service__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(92834),_core_services_cookie_service__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(57388),_angular_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(5e3),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(42466),_angular_router__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(74202),_angular_common__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(69808),_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(38605),_shared_google_recaptcha_google_recaptcha_component__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(88235);function RegisterEmailFormComponent_div_15_span_1_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(0,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()),2&rf){const ctx_r6=_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw(2);_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(2,1,ctx_r6.MESSAGE_PREFIX+".email.error.required")," ")}}function RegisterEmailFormComponent_div_15_span_2_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(0,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()),2&rf){const ctx_r7=_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw(2);_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(2,1,ctx_r7.MESSAGE_PREFIX+".email.error.pattern")," ")}}function RegisterEmailFormComponent_div_15_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(0,"div",12),_angular_core__WEBPACK_IMPORTED_MODULE_10__.YNc(1,RegisterEmailFormComponent_div_15_span_1_Template,3,3,"span",13),_angular_core__WEBPACK_IMPORTED_MODULE_10__.YNc(2,RegisterEmailFormComponent_div_15_span_2_Template,3,3,"span",13),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()),2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("ngIf",ctx_r0.email.errors&&ctx_r0.email.errors.required),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("ngIf",ctx_r0.email.errors&&ctx_r0.email.errors.pattern)}}function RegisterEmailFormComponent_ds_alert_19_Template(rf,ctx){if(1&rf){const _r9=_angular_core__WEBPACK_IMPORTED_MODULE_10__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(0,"ds-alert",14),_angular_core__WEBPACK_IMPORTED_MODULE_10__._UZ(1,"p",15),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(3,"p",16)(4,"a",17),_angular_core__WEBPACK_IMPORTED_MODULE_10__.NdJ("click",__name(function(){return _angular_core__WEBPACK_IMPORTED_MODULE_10__.CHM(_r9),_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw().klaroService.showSettings()},"RegisterEmailFormComponent_ds_alert_19_Template_a_click_4_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(5),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(6,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()()()}if(2&rf){const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("type",ctx_r1.AlertTypeEnum.Warning),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("innerHTML",_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(2,3,ctx_r1.MESSAGE_PREFIX+".google-recaptcha.must-accept-cookies"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.oJD),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(6,5,ctx_r1.MESSAGE_PREFIX+".google-recaptcha.open-cookie-settings"))}}function RegisterEmailFormComponent_div_20_Template(rf,ctx){if(1&rf){const _r11=_angular_core__WEBPACK_IMPORTED_MODULE_10__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(0,"div",18)(1,"ds-google-recaptcha",19),_angular_core__WEBPACK_IMPORTED_MODULE_10__.NdJ("executeRecaptcha",__name(function($event){return _angular_core__WEBPACK_IMPORTED_MODULE_10__.CHM(_r11),_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw().register($event)},"RegisterEmailFormComponent_div_20_Template_ds_google_recaptcha_executeRecaptcha_1_listener"))("checkboxChecked",__name(function($event){return _angular_core__WEBPACK_IMPORTED_MODULE_10__.CHM(_r11),_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw().onCheckboxChecked($event)},"RegisterEmailFormComponent_div_20_Template_ds_google_recaptcha_checkboxChecked_1_listener"))("showNotification",__name(function($event){return _angular_core__WEBPACK_IMPORTED_MODULE_10__.CHM(_r11),_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw().showNotification($event)},"RegisterEmailFormComponent_div_20_Template_ds_google_recaptcha_showNotification_1_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(2,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()()}if(2&rf){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("captchaMode",_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(2,1,ctx_r2.googleRecaptchaService.captchaMode()))}}function RegisterEmailFormComponent_ng_container_22_Template(rf,ctx){if(1&rf){const _r15=_angular_core__WEBPACK_IMPORTED_MODULE_10__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_10__.ynx(0),_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(1,"button",20),_angular_core__WEBPACK_IMPORTED_MODULE_10__.NdJ("click",__name(function(){return _angular_core__WEBPACK_IMPORTED_MODULE_10__.CHM(_r15),_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw().register()},"RegisterEmailFormComponent_ng_container_22_Template_button_click_1_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_10__.BQk()}if(2&rf){const ctx_r3=_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("disabled",ctx_r3.form.invalid||ctx_r3.registrationVerification&&!ctx_r3.isRecaptchaCookieAccepted()||ctx_r3.disableUntilChecked),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(3,2,ctx_r3.MESSAGE_PREFIX+".submit")," ")}}function RegisterEmailFormComponent_ng_template_25_Template(rf,ctx){if(1&rf){const _r17=_angular_core__WEBPACK_IMPORTED_MODULE_10__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(0,"button",20),_angular_core__WEBPACK_IMPORTED_MODULE_10__.NdJ("click",__name(function(){return _angular_core__WEBPACK_IMPORTED_MODULE_10__.CHM(_r17),_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw().executeRecaptcha()},"RegisterEmailFormComponent_ng_template_25_Template_button_click_0_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()}if(2&rf){const ctx_r5=_angular_core__WEBPACK_IMPORTED_MODULE_10__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("disabled",ctx_r5.form.invalid),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(2,2,ctx_r5.MESSAGE_PREFIX+".submit")," ")}}__name(RegisterEmailFormComponent_div_15_span_1_Template,"RegisterEmailFormComponent_div_15_span_1_Template"),__name(RegisterEmailFormComponent_div_15_span_2_Template,"RegisterEmailFormComponent_div_15_span_2_Template"),__name(RegisterEmailFormComponent_div_15_Template,"RegisterEmailFormComponent_div_15_Template"),__name(RegisterEmailFormComponent_ds_alert_19_Template,"RegisterEmailFormComponent_ds_alert_19_Template"),__name(RegisterEmailFormComponent_div_20_Template,"RegisterEmailFormComponent_div_20_Template"),__name(RegisterEmailFormComponent_ng_container_22_Template,"RegisterEmailFormComponent_ng_container_22_Template"),__name(RegisterEmailFormComponent_ng_template_25_Template,"RegisterEmailFormComponent_ng_template_25_Template");class RegisterEmailFormComponent{constructor(epersonRegistrationService,notificationService,translateService,router,formBuilder,configService,googleRecaptchaService,cookieService,klaroService,changeDetectorRef,notificationsService){this.epersonRegistrationService=epersonRegistrationService,this.notificationService=notificationService,this.translateService=translateService,this.router=router,this.formBuilder=formBuilder,this.configService=configService,this.googleRecaptchaService=googleRecaptchaService,this.cookieService=cookieService,this.klaroService=klaroService,this.changeDetectorRef=changeDetectorRef,this.notificationsService=notificationsService,this.AlertTypeEnum=_shared_alert_aletr_type__WEBPACK_IMPORTED_MODULE_5__.N,this.registrationVerification=!1,this.checkboxCheckedSubject$=new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(!1),this.disableUntilChecked=!0}captchaVersion(){return this.googleRecaptchaService.captchaVersion()}captchaMode(){return this.googleRecaptchaService.captchaMode()}ngOnInit(){this.form=this.formBuilder.group({email:new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NI("",{validators:[_angular_forms__WEBPACK_IMPORTED_MODULE_12__.kI.required,_angular_forms__WEBPACK_IMPORTED_MODULE_12__.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]})}),this.configService.findByPropertyName("registration.verification.enabled").pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_3__.Gp)(),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.UI)(res=>"true"===(null==res?void 0:res.values[0].toLowerCase()))).subscribe(res=>{this.registrationVerification=res}),this.disableUntilCheckedFcn().subscribe(res=>{this.disableUntilChecked=res,this.changeDetectorRef.detectChanges()})}executeRecaptcha(){this.googleRecaptchaService.executeRecaptcha()}register(tokenV2){this.form.invalid||(this.registrationVerification?(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.captchaVersion(),this.captchaMode()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([captchaVersion,captchaMode])=>"v3"===captchaVersion?this.googleRecaptchaService.getRecaptchaToken("register_email"):"v2"===captchaVersion&&"checkbox"===captchaMode?(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.googleRecaptchaService.getRecaptchaTokenResponse()):"v2"===captchaVersion&&"invisible"===captchaMode?(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(tokenV2):(console.error(`Invalid reCaptcha configuration: version = ${captchaVersion}, mode = ${captchaMode}`),void this.showNotification("error"))),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.qn)(1)).subscribe(token=>{(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.UE)(token)?this.registration(token):(console.error("reCaptcha error"),this.showNotification("error"))}):this.registration())}registration(captchaToken=null){(captchaToken?this.epersonRegistrationService.registerEmail(this.email.value,captchaToken):this.epersonRegistrationService.registerEmail(this.email.value)).subscribe(response=>{response.hasSucceeded?(this.notificationService.success(this.translateService.get(`${this.MESSAGE_PREFIX}.success.head`),this.translateService.get(`${this.MESSAGE_PREFIX}.success.content`,{email:this.email.value})),this.router.navigate(["/home"])):this.notificationService.error(this.translateService.get(`${this.MESSAGE_PREFIX}.error.head`),this.translateService.get(`${this.MESSAGE_PREFIX}.error.content`,{email:this.email.value}))})}isRecaptchaCookieAccepted(){const klaroAnonymousCookie=this.cookieService.get("klaro-anonymous");return!!(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_14__.UE)(klaroAnonymousCookie)&&klaroAnonymousCookie[_core_google_recaptcha_google_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__.LI]}disableUntilCheckedFcn(){const checked$=this.checkboxCheckedSubject$.asObservable();return(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.captchaVersion(),this.captchaMode(),checked$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([captchaVersion,captchaMode,checked])=>"v2"===captchaVersion&&"checkbox"===captchaMode?(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(!checked):(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(!1)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.O4)(!0))}get email(){return this.form.get("email")}onCheckboxChecked(checked){this.checkboxCheckedSubject$.next(checked)}showNotification(key){const notificationTitle=this.translateService.get(this.MESSAGE_PREFIX+".google-recaptcha.notification.title"),notificationErrorMsg=this.translateService.get(this.MESSAGE_PREFIX+".google-recaptcha.notification.message.error"),notificationExpiredMsg=this.translateService.get(this.MESSAGE_PREFIX+".google-recaptcha.notification.message.expired");switch(key){case"expired":this.notificationsService.warning(notificationTitle,notificationExpiredMsg);break;case"error":this.notificationsService.error(notificationTitle,notificationErrorMsg);break;default:console.warn(`Unimplemented notification '${key}' from reCaptcha service`)}}}__name(RegisterEmailFormComponent,"RegisterEmailFormComponent"),RegisterEmailFormComponent.\u0275fac=__name(function(t){return new(t||RegisterEmailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_core_data_eperson_registration_service__WEBPACK_IMPORTED_MODULE_0__.m),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.T),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.sK),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_16__.F0),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.qu),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_core_data_configuration_data_service__WEBPACK_IMPORTED_MODULE_2__.i),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_core_google_recaptcha_google_recaptcha_service__WEBPACK_IMPORTED_MODULE_4__.v0),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_core_services_cookie_service__WEBPACK_IMPORTED_MODULE_7__.N),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_shared_cookies_klaro_service__WEBPACK_IMPORTED_MODULE_6__.D,8),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_10__.sBO),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Y36(_shared_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_1__.T))},"RegisterEmailFormComponent_Factory"),RegisterEmailFormComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_10__.Xpm({type:RegisterEmailFormComponent,selectors:[["ds-register-email-form"]],inputs:{MESSAGE_PREFIX:"MESSAGE_PREFIX"},decls:27,vars:27,consts:[[1,"container"],[3,"formGroup"],[1,"form-group"],[1,"row"],[1,"col-12"],["for","email",1,"font-weight-bold"],["type","text","id","email","formControlName","email",3,"className"],["class","invalid-feedback show-feedback",4,"ngIf"],[3,"type",4,"ngIf"],["class","my-3",4,"ngIf"],[4,"ngIf","ngIfElse"],["v2Invisible",""],[1,"invalid-feedback","show-feedback"],[4,"ngIf"],[3,"type"],[1,"m-0",3,"innerHTML"],[1,"m-0"],["href","javascript:void(0);",3,"click"],[1,"my-3"],[3,"captchaMode","executeRecaptcha","checkboxChecked","showNotification"],[1,"btn","btn-primary",3,"disabled","click"]],template:__name(function(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(0,"div",0)(1,"h2"),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(4,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(5),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(6,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(7,"form",1)(8,"div",2)(9,"div",3)(10,"div",4)(11,"label",5),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(12),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(13,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_10__._UZ(14,"input",6),_angular_core__WEBPACK_IMPORTED_MODULE_10__.YNc(15,RegisterEmailFormComponent_div_15_Template,3,2,"div",7),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_10__.TgZ(16,"div",4),_angular_core__WEBPACK_IMPORTED_MODULE_10__._uU(17),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(18,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()()(),_angular_core__WEBPACK_IMPORTED_MODULE_10__.YNc(19,RegisterEmailFormComponent_ds_alert_19_Template,7,7,"ds-alert",8),_angular_core__WEBPACK_IMPORTED_MODULE_10__.YNc(20,RegisterEmailFormComponent_div_20_Template,3,3,"div",9),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(21,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.YNc(22,RegisterEmailFormComponent_ng_container_22_Template,4,4,"ng-container",10),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(23,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.ALo(24,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.YNc(25,RegisterEmailFormComponent_ng_template_25_Template,3,4,"ng-template",null,11,_angular_core__WEBPACK_IMPORTED_MODULE_10__.W1O),_angular_core__WEBPACK_IMPORTED_MODULE_10__.qZA()()),2&rf){const _r4=_angular_core__WEBPACK_IMPORTED_MODULE_10__.MAs(26);_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(3,13,ctx.MESSAGE_PREFIX+".header")),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(6,15,ctx.MESSAGE_PREFIX+".info")),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Tol("ng-invalid"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("formGroup",ctx.form),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(5),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(13,17,ctx.MESSAGE_PREFIX+".email")),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("className",ctx.email.invalid&&(ctx.email.dirty||ctx.email.touched)?"form-control is-invalid":"form-control"),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("ngIf",ctx.email.invalid&&(ctx.email.dirty||ctx.email.touched)),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(18,19,ctx.MESSAGE_PREFIX+".email.hint")," "),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("ngIf",ctx.registrationVerification&&!ctx.isRecaptchaCookieAccepted()),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("ngIf",ctx.isRecaptchaCookieAccepted()&&"v2"===_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(21,21,ctx.googleRecaptchaService.captchaVersion())),_angular_core__WEBPACK_IMPORTED_MODULE_10__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_10__.Q6J("ngIf",!("v2"===_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(23,23,ctx.googleRecaptchaService.captchaVersion())&&"invisible"===_angular_core__WEBPACK_IMPORTED_MODULE_10__.lcZ(24,25,ctx.googleRecaptchaService.captchaMode())))("ngIfElse",_r4)}},"RegisterEmailFormComponent_Template"),directives:[_angular_forms__WEBPACK_IMPORTED_MODULE_12__._Y,_angular_forms__WEBPACK_IMPORTED_MODULE_12__.JL,_angular_forms__WEBPACK_IMPORTED_MODULE_12__.sg,_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Fj,_angular_forms__WEBPACK_IMPORTED_MODULE_12__.JJ,_angular_forms__WEBPACK_IMPORTED_MODULE_12__.u,_angular_common__WEBPACK_IMPORTED_MODULE_17__.O5,_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__.w,_shared_google_recaptcha_google_recaptcha_component__WEBPACK_IMPORTED_MODULE_9__.C],pipes:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.X$,_angular_common__WEBPACK_IMPORTED_MODULE_17__.Ov],encapsulation:2})}};