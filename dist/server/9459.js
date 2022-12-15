"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=9459,exports.ids=[9459,9537],exports.modules={39537:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoginPageComponent:()=>LoginPageComponent});var rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(39942),rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5796),_core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(80485),_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25839),_core_auth_models_auth_token_info_model__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93373),_core_auth_selectors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55826),_angular_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(70074),_angular_router__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(37895),_ngrx_store__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(93179),_shared_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(40551),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(47241);class LoginPageComponent{constructor(route,store){this.route=route,this.store=store}ngOnInit(){const queryParamsObs=this.route.queryParams,authenticated=this.store.select(_core_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.$8);this.sub=(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(queryParamsObs,authenticated).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.hX)(([params,auth])=>(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.UE)(params.token)||(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.UE)(params.expired)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.qn)(1)).subscribe(([params,auth])=>{const token=params.token;let authToken;auth?(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.UE)(token)&&(authToken=new _core_auth_models_auth_token_info_model__WEBPACK_IMPORTED_MODULE_1__.Y(token),this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.$L(authToken))):(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.UE)(token)?(authToken=new _core_auth_models_auth_token_info_model__WEBPACK_IMPORTED_MODULE_1__.Y(token),this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.LF(authToken))):(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.UE)(params.expired)&&this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.vT("auth.messages.expired"))})}ngOnDestroy(){(0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_6__.Uh)(this.sub)&&this.sub.unsubscribe(),this.store.dispatch(new _core_auth_auth_actions__WEBPACK_IMPORTED_MODULE_0__.wO)}}__name(LoginPageComponent,"LoginPageComponent"),LoginPageComponent.\u0275fac=__name(function(t){return new(t||LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_8__.gz),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Y36(_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.yh))},"LoginPageComponent_Factory"),LoginPageComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_7__.Xpm({type:LoginPageComponent,selectors:[["ds-login-page"]],decls:9,vars:7,consts:[[1,"container","w-100","h-100"],[1,"text-center","mt-5","row","justify-content-center"],["src","assets/gusi/images/favicons/G.png",1,"mb-4","login-logo",3,"alt"],[1,"h3","mb-0","font-weight-normal"],[3,"isStandalonePage"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_7__.TgZ(0,"div",0)(1,"div",1)(2,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_7__._UZ(3,"img",2),_angular_core__WEBPACK_IMPORTED_MODULE_7__.ALo(4,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_7__.TgZ(5,"h1",3),_angular_core__WEBPACK_IMPORTED_MODULE_7__._uU(6),_angular_core__WEBPACK_IMPORTED_MODULE_7__.ALo(7,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_7__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_7__._UZ(8,"ds-log-in",4),_angular_core__WEBPACK_IMPORTED_MODULE_7__.qZA()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_7__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_7__.s9C("alt",_angular_core__WEBPACK_IMPORTED_MODULE_7__.lcZ(4,3,"repository.image.logo")),_angular_core__WEBPACK_IMPORTED_MODULE_7__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_7__.lcZ(7,5,"login.form.header")),_angular_core__WEBPACK_IMPORTED_MODULE_7__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_7__.Q6J("isStandalonePage",!0))},"LoginPageComponent_Template"),directives:[_shared_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__.D],pipes:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.X$],styles:[".login-logo[_ngcontent-%COMP%]{height:var(--ds-login-logo-height);width:var(--ds-login-logo-width)}"]})},49459:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoginPageComponent:()=>LoginPageComponent});var _app_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(39537),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(70074),_app_shared_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40551),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(47241);class LoginPageComponent extends _app_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent{}__name(LoginPageComponent,"LoginPageComponent"),LoginPageComponent.\u0275fac=function(){let \u0275LoginPageComponent_BaseFactory;return __name(function(t){return(\u0275LoginPageComponent_BaseFactory||(\u0275LoginPageComponent_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_2__.n5z(LoginPageComponent)))(t||LoginPageComponent)},"LoginPageComponent_Factory")}(),LoginPageComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_2__.Xpm({type:LoginPageComponent,selectors:[["ds-login-page"]],features:[_angular_core__WEBPACK_IMPORTED_MODULE_2__.qOj],decls:9,vars:7,consts:[[1,"container","w-100","h-100"],[1,"text-center","mt-5","row","justify-content-center"],["src","assets/gusi/images/favicons/G.png",1,"mb-4","login-logo",3,"alt"],[1,"h3","mb-0","font-weight-normal"],[3,"isStandalonePage"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(0,"div",0)(1,"div",1)(2,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_2__._UZ(3,"img",2),_angular_core__WEBPACK_IMPORTED_MODULE_2__.ALo(4,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(5,"h1",3),_angular_core__WEBPACK_IMPORTED_MODULE_2__._uU(6),_angular_core__WEBPACK_IMPORTED_MODULE_2__.ALo(7,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_2__._UZ(8,"ds-log-in",4),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_2__.s9C("alt",_angular_core__WEBPACK_IMPORTED_MODULE_2__.lcZ(4,3,"repository.image.logo")),_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__.lcZ(7,5,"login.form.header")),_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Q6J("isStandalonePage",!0))},"LoginPageComponent_Template"),directives:[_app_shared_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__.D],pipes:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.X$],styles:[".login-logo[_ngcontent-%COMP%]{height:var(--ds-login-logo-height);width:var(--ds-login-logo-width)}"]})}};