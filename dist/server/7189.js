"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=7189,exports.ids=[7189],exports.modules={83772:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Breadcrumb});class Breadcrumb{constructor(text,url){this.text=text,this.url=url}}__name(Breadcrumb,"Breadcrumb")},98655:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>I18nBreadcrumbResolver});var _i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(43001),_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24702),_shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(78056),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5e3);class I18nBreadcrumbResolver{constructor(breadcrumbService){this.breadcrumbService=breadcrumbService}resolve(route,state){const key=route.data.breadcrumbKey;if((0,_shared_empty_util__WEBPACK_IMPORTED_MODULE_1__.xI)(key))throw new Error('You provided an i18nBreadcrumbResolver for url "'+route.url+"\" but no breadcrumbKey in the route's data");const fullPath=(0,_shared_utils_route_utils__WEBPACK_IMPORTED_MODULE_2__.i)(route);return{provider:this.breadcrumbService,key,url:fullPath}}}__name(I18nBreadcrumbResolver,"I18nBreadcrumbResolver"),I18nBreadcrumbResolver.\u0275fac=__name(function(t){return new(t||I18nBreadcrumbResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.LFG(_i18n_breadcrumbs_service__WEBPACK_IMPORTED_MODULE_0__.d))},"I18nBreadcrumbResolver_Factory"),I18nBreadcrumbResolver.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_3__.Yz7({token:I18nBreadcrumbResolver,factory:I18nBreadcrumbResolver.\u0275fac,providedIn:"root"})},43001:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>I18nBreadcrumbsService});var _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(83772),rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76477),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5e3);class I18nBreadcrumbsService{getBreadcrumbs(key,url){return(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([new _breadcrumbs_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.a(key+".breadcrumbs",url)])}}__name(I18nBreadcrumbsService,"I18nBreadcrumbsService"),I18nBreadcrumbsService.\u0275fac=__name(function(t){return new(t||I18nBreadcrumbsService)},"I18nBreadcrumbsService_Factory"),I18nBreadcrumbsService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_2__.Yz7({token:I18nBreadcrumbsService,factory:I18nBreadcrumbsService.\u0275fac,providedIn:"root"})},27189:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HealthPageModule:()=>HealthPageModule});var HealthStatus,HealthStatus2,common=__webpack_require__(69808),ng_bootstrap=__webpack_require__(13707),ngx_translate_core=__webpack_require__(42466),router=__webpack_require__(74202),i18n_breadcrumb_resolver=__webpack_require__(98655),cjs=__webpack_require__(76477),operators=__webpack_require__(83292),dspace_rest_service=__webpack_require__(94621),hal_endpoint_service=__webpack_require__(93498),core=__webpack_require__(5e3);class HealthService{constructor(halService,restService){this.halService=halService,this.restService=restService}getHealth(){return this.halService.getEndpoint("/actuator").pipe((0,operators.UI)(restURL=>restURL+"/health"),(0,operators.wt)(endpoint=>this.restService.get(endpoint)))}getInfo(){return this.halService.getEndpoint("/actuator").pipe((0,operators.UI)(restURL=>restURL+"/info"),(0,operators.wt)(endpoint=>this.restService.get(endpoint)))}}function HealthStatusComponent_i_1_Template(rf,ctx){1&rf&&(core._UZ(0,"i",4),core.ALo(1,"translate")),2&rf&&core.s9C("ngbTooltip",core.lcZ(1,1,"health-page.status.ok.info"))}function HealthStatusComponent_i_2_Template(rf,ctx){1&rf&&(core._UZ(0,"i",5),core.ALo(1,"translate")),2&rf&&core.s9C("ngbTooltip",core.lcZ(1,1,"health-page.status.warning.info"))}function HealthStatusComponent_i_3_Template(rf,ctx){1&rf&&(core._UZ(0,"i",6),core.ALo(1,"translate")),2&rf&&core.s9C("ngbTooltip",core.lcZ(1,1,"health-page.status.error.info"))}__name(HealthService,"HealthService"),HealthService.\u0275fac=__name(function(t){return new(t||HealthService)(core.LFG(hal_endpoint_service.q),core.LFG(dspace_rest_service.Y))},"HealthService_Factory"),HealthService.\u0275prov=core.Yz7({token:HealthService,factory:HealthService.\u0275fac,providedIn:"root"}),(HealthStatus2=HealthStatus||(HealthStatus={})).UP="UP",HealthStatus2.UP_WITH_ISSUES="UP_WITH_ISSUES",HealthStatus2.DOWN="DOWN",__name(HealthStatusComponent_i_1_Template,"HealthStatusComponent_i_1_Template"),__name(HealthStatusComponent_i_2_Template,"HealthStatusComponent_i_2_Template"),__name(HealthStatusComponent_i_3_Template,"HealthStatusComponent_i_3_Template");class HealthStatusComponent{constructor(){this.HealthStatus=HealthStatus}}__name(HealthStatusComponent,"HealthStatusComponent"),HealthStatusComponent.\u0275fac=__name(function(t){return new(t||HealthStatusComponent)},"HealthStatusComponent_Factory"),HealthStatusComponent.\u0275cmp=core.Xpm({type:HealthStatusComponent,selectors:[["ds-health-status"]],inputs:{status:"status"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","fa fa-check-circle text-success ml-2 mt-1","container","body",3,"ngbTooltip",4,"ngSwitchCase"],["class","fa fa-exclamation-triangle text-warning ml-2 mt-1","container","body",3,"ngbTooltip",4,"ngSwitchCase"],["class","fa fa-times-circle text-danger ml-2 mt-1","container","body",3,"ngbTooltip",4,"ngSwitchCase"],["container","body",1,"fa","fa-check-circle","text-success","ml-2","mt-1",3,"ngbTooltip"],["container","body",1,"fa","fa-exclamation-triangle","text-warning","ml-2","mt-1",3,"ngbTooltip"],["container","body",1,"fa","fa-times-circle","text-danger","ml-2","mt-1",3,"ngbTooltip"]],template:__name(function(rf,ctx){1&rf&&(core.ynx(0,0),core.YNc(1,HealthStatusComponent_i_1_Template,2,3,"i",1),core.YNc(2,HealthStatusComponent_i_2_Template,2,3,"i",2),core.YNc(3,HealthStatusComponent_i_3_Template,2,3,"i",3),core.BQk()),2&rf&&(core.Q6J("ngSwitch",ctx.status),core.xp6(1),core.Q6J("ngSwitchCase",ctx.HealthStatus.UP),core.xp6(1),core.Q6J("ngSwitchCase",ctx.HealthStatus.UP_WITH_ISSUES),core.xp6(1),core.Q6J("ngSwitchCase",ctx.HealthStatus.DOWN))},"HealthStatusComponent_Template"),directives:[common.RF,common.n9,ng_bootstrap._L],pipes:[ngx_translate_core.X$],styles:[""]});var aletr_type=__webpack_require__(74711),alert_component=__webpack_require__(38605),object_ngfor_pipe=__webpack_require__(43928);function HealthComponentComponent_ng_container_0_div_1_span_6_Template(rf,ctx){1&rf&&core._UZ(0,"span",13)}function HealthComponentComponent_ng_container_0_div_1_span_7_Template(rf,ctx){1&rf&&core._UZ(0,"span",14)}function HealthComponentComponent_ng_container_0_div_1_Template(rf,ctx){if(1&rf){const _r9=core.EpF();core.TgZ(0,"div",2)(1,"div",3),core.NdJ("click",__name(function(){return core.CHM(_r9),core.MAs(9).toggle()},"HealthComponentComponent_ng_container_0_div_1_Template_div_click_1_listener")),core.TgZ(2,"button",4),core.NdJ("click",__name(function($event){return $event.preventDefault()},"HealthComponentComponent_ng_container_0_div_1_Template_button_click_2_listener")),core._uU(3),core.ALo(4,"titlecase"),core.qZA(),core.TgZ(5,"div",5),core.YNc(6,HealthComponentComponent_ng_container_0_div_1_span_6_Template,1,0,"span",6),core.YNc(7,HealthComponentComponent_ng_container_0_div_1_span_7_Template,1,0,"span",7),core.qZA()(),core.TgZ(8,"div",8,9)(10,"div",10)(11,"div",11),core._UZ(12,"ds-health-component",12),core.qZA()()()()}if(2&rf){const entry_r4=ctx.$implicit,_r7=core.MAs(9),ctx_r3=core.oxw(2);core.xp6(2),core.uIk("aria-expanded",!_r7.collapsed),core.xp6(1),core.hij(" ",core.lcZ(4,7,entry_r4.key)," "),core.xp6(3),core.Q6J("ngIf",_r7.collapsed),core.xp6(1),core.Q6J("ngIf",!_r7.collapsed),core.xp6(1),core.Q6J("ngbCollapse",ctx_r3.isCollapsed),core.xp6(4),core.Q6J("healthComponent",entry_r4.value)("healthComponentName",entry_r4.key)}}function HealthComponentComponent_ng_container_0_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,HealthComponentComponent_ng_container_0_div_1_Template,13,9,"div",1),core.ALo(2,"dsObjNgFor"),core.BQk()),2&rf){const ctx_r0=core.oxw();core.xp6(1),core.Q6J("ngForOf",core.lcZ(2,1,null==ctx_r0.healthComponent?null:ctx_r0.healthComponent.components))}}function HealthComponentComponent_ng_container_1_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",16)(1,"p",17)(2,"span",18),core._uU(3),core.ALo(4,"titlecase"),core.qZA(),core._uU(5),core.qZA()()),2&rf){const item_r12=ctx.$implicit,ctx_r11=core.oxw(2);core.xp6(3),core.Oqu(core.lcZ(4,2,ctx_r11.getPropertyLabel(item_r12.key))),core.xp6(2),core.hij(" : ",item_r12.value,"")}}function HealthComponentComponent_ng_container_1_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,HealthComponentComponent_ng_container_1_div_1_Template,6,4,"div",15),core.ALo(2,"dsObjNgFor"),core.BQk()),2&rf){const ctx_r1=core.oxw();core.xp6(1),core.Q6J("ngForOf",core.lcZ(2,1,null==ctx_r1.healthComponent?null:ctx_r1.healthComponent.details))}}function HealthComponentComponent_ng_container_2_Template(rf,ctx){if(1&rf&&(core.ynx(0),core._UZ(1,"ds-alert",19),core.BQk()),2&rf){const ctx_r2=core.oxw();core.xp6(1),core.Q6J("content","health-page.section.no-issues")("type",ctx_r2.AlertTypeEnum.Info)}}__name(HealthComponentComponent_ng_container_0_div_1_span_6_Template,"HealthComponentComponent_ng_container_0_div_1_span_6_Template"),__name(HealthComponentComponent_ng_container_0_div_1_span_7_Template,"HealthComponentComponent_ng_container_0_div_1_span_7_Template"),__name(HealthComponentComponent_ng_container_0_div_1_Template,"HealthComponentComponent_ng_container_0_div_1_Template"),__name(HealthComponentComponent_ng_container_0_Template,"HealthComponentComponent_ng_container_0_Template"),__name(HealthComponentComponent_ng_container_1_div_1_Template,"HealthComponentComponent_ng_container_1_div_1_Template"),__name(HealthComponentComponent_ng_container_1_Template,"HealthComponentComponent_ng_container_1_Template"),__name(HealthComponentComponent_ng_container_2_Template,"HealthComponentComponent_ng_container_2_Template");class HealthComponentComponent{constructor(translate){this.translate=translate,this.AlertTypeEnum=aletr_type.N,this.isCollapsed=!1}getPropertyLabel(property){const translationKey=`health-page.property.${property}`,translation=this.translate.instant(translationKey);return translation===translationKey?property:translation}}function HealthPanelComponent_ngb_panel_6_ng_template_1_span_7_Template(rf,ctx){1&rf&&core._UZ(0,"span",14)}function HealthPanelComponent_ngb_panel_6_ng_template_1_span_8_Template(rf,ctx){1&rf&&core._UZ(0,"span",15)}function HealthPanelComponent_ngb_panel_6_ng_template_1_Template(rf,ctx){if(1&rf){const _r9=core.EpF();core.TgZ(0,"div",8),core.NdJ("click",__name(function(){core.CHM(_r9);const entry_r2=core.oxw().$implicit;return core.oxw(),core.MAs(5).toggle(entry_r2.key)},"HealthPanelComponent_ngb_panel_6_ng_template_1_Template_div_click_0_listener")),core.TgZ(1,"button",9),core.NdJ("click",__name(function($event){return $event.preventDefault()},"HealthPanelComponent_ngb_panel_6_ng_template_1_Template_button_click_1_listener")),core._uU(2),core.ALo(3,"titlecase"),core.qZA(),core.TgZ(4,"div",10),core._UZ(5,"ds-health-status",1),core.TgZ(6,"div",11),core.YNc(7,HealthPanelComponent_ngb_panel_6_ng_template_1_span_7_Template,1,0,"span",12),core.YNc(8,HealthPanelComponent_ngb_panel_6_ng_template_1_span_8_Template,1,0,"span",13),core.qZA()()()}if(2&rf){const entry_r2=core.oxw().$implicit,ctx_r3=core.oxw(),_r0=core.MAs(5);core.xp6(1),core.uIk("aria-expanded",!_r0.isExpanded(entry_r2.key)),core.xp6(1),core.hij(" ",core.lcZ(3,5,ctx_r3.getPanelLabel(entry_r2.key))," "),core.xp6(3),core.Q6J("status",null==entry_r2.value?null:entry_r2.value.status),core.xp6(2),core.Q6J("ngIf",_r0.isExpanded(entry_r2.key)),core.xp6(1),core.Q6J("ngIf",!_r0.isExpanded(entry_r2.key))}}function HealthPanelComponent_ngb_panel_6_ng_template_2_Template(rf,ctx){if(1&rf&&core._UZ(0,"ds-health-component",16),2&rf){const entry_r2=core.oxw().$implicit;core.Q6J("healthComponent",entry_r2.value)("healthComponentName",entry_r2.key)}}function HealthPanelComponent_ngb_panel_6_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngb-panel",5),core.YNc(1,HealthPanelComponent_ngb_panel_6_ng_template_1_Template,9,7,"ng-template",6),core.YNc(2,HealthPanelComponent_ngb_panel_6_ng_template_2_Template,1,2,"ng-template",7),core.qZA()),2&rf){const entry_r2=ctx.$implicit;core.Q6J("id",entry_r2.key)}}__name(HealthComponentComponent,"HealthComponentComponent"),HealthComponentComponent.\u0275fac=__name(function(t){return new(t||HealthComponentComponent)(core.Y36(ngx_translate_core.sK))},"HealthComponentComponent_Factory"),HealthComponentComponent.\u0275cmp=core.Xpm({type:HealthComponentComponent,selectors:[["ds-health-component"]],inputs:{healthComponent:"healthComponent",healthComponentName:"healthComponentName"},decls:3,vars:3,consts:[[4,"ngIf"],["class","mb-3 border-bottom","data-test","collapse",4,"ngFor","ngForOf"],["data-test","collapse",1,"mb-3","border-bottom"],[1,"w-100","d-flex","justify-content-between","collapse-toggle",3,"click"],["type","button","aria-controls","collapseExample",1,"btn","btn-link","p-0",3,"click"],[1,"d-inline-block"],["class","fas fa-chevron-down",4,"ngIf"],["class","fas fa-chevron-up",4,"ngIf"],[3,"ngbCollapse"],["collapse","ngbCollapse"],[1,"card","border-0"],[1,"card-body"],[3,"healthComponent","healthComponentName"],[1,"fas","fa-chevron-down"],[1,"fas","fa-chevron-up"],["data-test","details",4,"ngFor","ngForOf"],["data-test","details"],["data-test","property"],[1,"font-weight-bold"],[3,"content","type"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,HealthComponentComponent_ng_container_0_Template,3,3,"ng-container",0),core.YNc(1,HealthComponentComponent_ng_container_1_Template,3,3,"ng-container",0),core.YNc(2,HealthComponentComponent_ng_container_2_Template,2,2,"ng-container",0)),2&rf&&(core.Q6J("ngIf",null==ctx.healthComponent?null:ctx.healthComponent.components),core.xp6(1),core.Q6J("ngIf",null==ctx.healthComponent?null:ctx.healthComponent.details),core.xp6(1),core.Q6J("ngIf",!(null!=ctx.healthComponent&&ctx.healthComponent.details||null!=ctx.healthComponent&&ctx.healthComponent.components)))},"HealthComponentComponent_Template"),directives:[common.O5,common.sg,ng_bootstrap._D,HealthComponentComponent,alert_component.w],pipes:[object_ngfor_pipe.C,common.rS],styles:[".collapse-toggle[_ngcontent-%COMP%]{cursor:pointer}"]}),__name(HealthPanelComponent_ngb_panel_6_ng_template_1_span_7_Template,"HealthPanelComponent_ngb_panel_6_ng_template_1_span_7_Template"),__name(HealthPanelComponent_ngb_panel_6_ng_template_1_span_8_Template,"HealthPanelComponent_ngb_panel_6_ng_template_1_span_8_Template"),__name(HealthPanelComponent_ngb_panel_6_ng_template_1_Template,"HealthPanelComponent_ngb_panel_6_ng_template_1_Template"),__name(HealthPanelComponent_ngb_panel_6_ng_template_2_Template,"HealthPanelComponent_ngb_panel_6_ng_template_2_Template"),__name(HealthPanelComponent_ngb_panel_6_Template,"HealthPanelComponent_ngb_panel_6_Template");class HealthPanelComponent{constructor(translate){this.translate=translate}ngOnInit(){this.activeId=Object.keys(this.healthResponse.components)[0]}getPanelLabel(panelKey){const translationKey=`health-page.section.${panelKey}.title`,translation=this.translate.instant(translationKey);return translation===translationKey?panelKey:translation}}function HealthInfoComponentComponent_div_0_div_1_span_6_Template(rf,ctx){1&rf&&core._UZ(0,"span",15)}function HealthInfoComponentComponent_div_0_div_1_span_7_Template(rf,ctx){1&rf&&core._UZ(0,"span",16)}function HealthInfoComponentComponent_div_0_div_1_Template(rf,ctx){if(1&rf){const _r8=core.EpF();core.TgZ(0,"div",4)(1,"div",5),core.NdJ("click",__name(function(){return core.CHM(_r8),core.MAs(9).toggle()},"HealthInfoComponentComponent_div_0_div_1_Template_div_click_1_listener")),core.TgZ(2,"button",6),core.NdJ("click",__name(function($event){return $event.preventDefault()},"HealthInfoComponentComponent_div_0_div_1_Template_button_click_2_listener")),core._uU(3),core.ALo(4,"titlecase"),core.qZA(),core.TgZ(5,"div",7),core.YNc(6,HealthInfoComponentComponent_div_0_div_1_span_6_Template,1,0,"span",8),core.YNc(7,HealthInfoComponentComponent_div_0_div_1_span_7_Template,1,0,"span",9),core.qZA()(),core.TgZ(8,"div",10,11)(10,"div",12)(11,"div",13),core._UZ(12,"ds-health-info-component",14),core.qZA()()()()}if(2&rf){const _r6=core.MAs(9),entry_r1=core.oxw().$implicit,ctx_r2=core.oxw();core.xp6(2),core.uIk("aria-expanded",!_r6.collapsed),core.xp6(1),core.hij(" ",core.lcZ(4,8,entry_r1.key)," "),core.xp6(3),core.Q6J("ngIf",_r6.collapsed),core.xp6(1),core.Q6J("ngIf",!_r6.collapsed),core.xp6(1),core.Q6J("ngbCollapse",ctx_r2.isCollapsed),core.xp6(4),core.Q6J("healthInfoComponent",entry_r1.value)("healthInfoComponentName",entry_r1.key)("isNested",!0)}}function HealthInfoComponentComponent_div_0_ng_container_2_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.TgZ(1,"p",17)(2,"span",18),core._uU(3),core.ALo(4,"titlecase"),core.qZA(),core._uU(5),core.qZA(),core.BQk()),2&rf){const entry_r1=core.oxw().$implicit,ctx_r3=core.oxw();core.xp6(3),core.Oqu(core.lcZ(4,2,ctx_r3.getPropertyLabel(entry_r1.key))),core.xp6(2),core.hij(" : ",entry_r1.value,"")}}function HealthInfoComponentComponent_div_0_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",1),core.YNc(1,HealthInfoComponentComponent_div_0_div_1_Template,13,10,"div",2),core.YNc(2,HealthInfoComponentComponent_div_0_ng_container_2_Template,6,4,"ng-container",3),core.qZA()),2&rf){const entry_r1=ctx.$implicit,ctx_r0=core.oxw();core.xp6(1),core.Q6J("ngIf",entry_r1&&!ctx_r0.isPlainProperty(entry_r1.value)),core.xp6(1),core.Q6J("ngIf",entry_r1&&ctx_r0.isPlainProperty(entry_r1.value))}}__name(HealthPanelComponent,"HealthPanelComponent"),HealthPanelComponent.\u0275fac=__name(function(t){return new(t||HealthPanelComponent)(core.Y36(ngx_translate_core.sK))},"HealthPanelComponent_Factory"),HealthPanelComponent.\u0275cmp=core.Xpm({type:HealthPanelComponent,selectors:[["ds-health-panel"]],inputs:{healthResponse:"healthResponse"},decls:8,vars:8,consts:[[1,"h4"],[3,"status"],[3,"activeIds"],["acc","ngbAccordion"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],["ngbPanelHeader",""],["ngbPanelContent",""],["ngbPanelToggle","","data-test","component",1,"w-100","d-flex","justify-content-between","collapse-toggle",3,"click"],["type","button","aria-controls","collapsePanels",1,"btn","btn-link","p-0",3,"click"],[1,"text-right","d-flex"],[1,"ml-3","d-inline-block"],["class","fas fa-chevron-up fa-fw",4,"ngIf"],["class","fas fa-chevron-down fa-fw",4,"ngIf"],[1,"fas","fa-chevron-up","fa-fw"],[1,"fas","fa-chevron-down","fa-fw"],[3,"healthComponent","healthComponentName"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"p",0),core._uU(1),core.ALo(2,"translate"),core._UZ(3,"ds-health-status",1),core.qZA(),core.TgZ(4,"ngb-accordion",2,3),core.YNc(6,HealthPanelComponent_ngb_panel_6_Template,3,1,"ngb-panel",4),core.ALo(7,"dsObjNgFor"),core.qZA()),2&rf&&(core.xp6(1),core.hij("",core.lcZ(2,4,"health-page.status")," : "),core.xp6(2),core.Q6J("status",ctx.healthResponse.status),core.xp6(1),core.Q6J("activeIds",ctx.activeId),core.xp6(2),core.Q6J("ngForOf",core.lcZ(7,6,ctx.healthResponse.components)))},"HealthPanelComponent_Template"),directives:[HealthStatusComponent,ng_bootstrap.gY,common.sg,ng_bootstrap.Gk,ng_bootstrap.k9,common.O5,ng_bootstrap.gW,HealthComponentComponent],pipes:[ngx_translate_core.X$,object_ngfor_pipe.C,common.rS],styles:[".collapse-toggle[_ngcontent-%COMP%]{cursor:pointer}"]}),__name(HealthInfoComponentComponent_div_0_div_1_span_6_Template,"HealthInfoComponentComponent_div_0_div_1_span_6_Template"),__name(HealthInfoComponentComponent_div_0_div_1_span_7_Template,"HealthInfoComponentComponent_div_0_div_1_span_7_Template"),__name(HealthInfoComponentComponent_div_0_div_1_Template,"HealthInfoComponentComponent_div_0_div_1_Template"),__name(HealthInfoComponentComponent_div_0_ng_container_2_Template,"HealthInfoComponentComponent_div_0_ng_container_2_Template"),__name(HealthInfoComponentComponent_div_0_Template,"HealthInfoComponentComponent_div_0_Template");class HealthInfoComponentComponent extends HealthComponentComponent{constructor(){super(...arguments),this.isNested=!1,this.isCollapsed=!1}isPlainProperty(entry){return"string"==typeof entry}}function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_7_Template(rf,ctx){1&rf&&core._UZ(0,"span",14)}function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_8_Template(rf,ctx){1&rf&&core._UZ(0,"span",15)}function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template(rf,ctx){if(1&rf){const _r10=core.EpF();core.TgZ(0,"div",7),core.NdJ("click",__name(function(){core.CHM(_r10);const entry_r3=core.oxw().$implicit;return core.oxw(),core.MAs(2).toggle(entry_r3.key)},"HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template_div_click_0_listener")),core.TgZ(1,"button",8),core.NdJ("click",__name(function($event){return $event.preventDefault()},"HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template_button_click_1_listener")),core._uU(2),core.ALo(3,"titlecase"),core.qZA(),core.TgZ(4,"div",9),core._UZ(5,"ds-health-status",10),core.TgZ(6,"div",11),core.YNc(7,HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_7_Template,1,0,"span",12),core.YNc(8,HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_8_Template,1,0,"span",13),core.qZA()()()}if(2&rf){const entry_r3=core.oxw().$implicit;core.oxw();const _r1=core.MAs(2),ctx_r4=core.oxw();core.xp6(1),core.uIk("aria-expanded",!_r1.isExpanded(entry_r3.key)),core.xp6(1),core.hij(" ",core.lcZ(3,5,ctx_r4.getPanelLabel(entry_r3.key))," "),core.xp6(3),core.Q6J("status",null==entry_r3.value?null:entry_r3.value.status),core.xp6(2),core.Q6J("ngIf",_r1.isExpanded(entry_r3.key)),core.xp6(1),core.Q6J("ngIf",!_r1.isExpanded(entry_r3.key))}}function HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_2_Template(rf,ctx){if(1&rf&&core._UZ(0,"ds-health-info-component",16),2&rf){const entry_r3=core.oxw().$implicit;core.Q6J("healthInfoComponentName",entry_r3.key)("healthInfoComponent",entry_r3.value)}}function HealthInfoComponent_ng_container_0_ngb_panel_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngb-panel",4),core.YNc(1,HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template,9,7,"ng-template",5),core.YNc(2,HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_2_Template,1,2,"ng-template",6),core.qZA()),2&rf){const entry_r3=ctx.$implicit;core.Q6J("id",entry_r3.key)}}function HealthInfoComponent_ng_container_0_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.TgZ(1,"ngb-accordion",1,2),core.YNc(3,HealthInfoComponent_ng_container_0_ngb_panel_3_Template,3,1,"ngb-panel",3),core.ALo(4,"dsObjNgFor"),core.qZA(),core.BQk()),2&rf){const ctx_r0=core.oxw();core.xp6(1),core.Q6J("activeIds",ctx_r0.activeId),core.xp6(2),core.Q6J("ngForOf",core.lcZ(4,2,ctx_r0.healthInfoResponse))}}__name(HealthInfoComponentComponent,"HealthInfoComponentComponent"),HealthInfoComponentComponent.\u0275fac=function(){let \u0275HealthInfoComponentComponent_BaseFactory;return __name(function(t){return(\u0275HealthInfoComponentComponent_BaseFactory||(\u0275HealthInfoComponentComponent_BaseFactory=core.n5z(HealthInfoComponentComponent)))(t||HealthInfoComponentComponent)},"HealthInfoComponentComponent_Factory")}(),HealthInfoComponentComponent.\u0275cmp=core.Xpm({type:HealthInfoComponentComponent,selectors:[["ds-health-info-component"]],inputs:{healthInfoComponent:"healthInfoComponent",healthInfoComponentName:"healthInfoComponentName",isNested:"isNested"},features:[core.qOj],decls:2,vars:3,consts:[["data-test","collapse",4,"ngFor","ngForOf"],["data-test","collapse"],["class","mb-3 border-bottom",4,"ngIf"],[4,"ngIf"],[1,"mb-3","border-bottom"],[1,"w-100","d-flex","justify-content-between","collapse-toggle",3,"click"],["type","button","aria-controls","collapseExample",1,"btn","btn-link","p-0",3,"click"],[1,"d-inline-block"],["class","fas fa-chevron-down",4,"ngIf"],["class","fas fa-chevron-up",4,"ngIf"],[3,"ngbCollapse"],["collapse","ngbCollapse"],[1,"card","border-0"],[1,"card-body"],["data-test","info-component",3,"healthInfoComponent","healthInfoComponentName","isNested"],[1,"fas","fa-chevron-down"],[1,"fas","fa-chevron-up"],["data-test","property"],[1,"font-weight-bold"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,HealthInfoComponentComponent_div_0_Template,3,2,"div",0),core.ALo(1,"dsObjNgFor")),2&rf&&core.Q6J("ngForOf",core.lcZ(1,1,ctx.healthInfoComponent))},"HealthInfoComponentComponent_Template"),directives:[common.sg,common.O5,ng_bootstrap._D,HealthInfoComponentComponent],pipes:[object_ngfor_pipe.C,common.rS],styles:[".collapse-toggle[_ngcontent-%COMP%]{cursor:pointer}"]}),__name(HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_7_Template,"HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_7_Template"),__name(HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_8_Template,"HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_span_8_Template"),__name(HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template,"HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_1_Template"),__name(HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_2_Template,"HealthInfoComponent_ng_container_0_ngb_panel_3_ng_template_2_Template"),__name(HealthInfoComponent_ng_container_0_ngb_panel_3_Template,"HealthInfoComponent_ng_container_0_ngb_panel_3_Template"),__name(HealthInfoComponent_ng_container_0_Template,"HealthInfoComponent_ng_container_0_Template");class HealthInfoComponent{constructor(translate){this.translate=translate}ngOnInit(){this.activeId=Object.keys(this.healthInfoResponse)[0]}getPanelLabel(panelKey){const translationKey=`health-page.section-info.${panelKey}.title`,translation=this.translate.instant(translationKey);return translation===translationKey?panelKey:translation}}function HealthPageComponent_div_0_div_4_ng_template_7_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",10),core._UZ(1,"ds-health-panel",11),core.ALo(2,"async"),core.qZA()),2&rf){const ctx_r4=core.oxw(3);core.xp6(1),core.Q6J("healthResponse",core.lcZ(2,1,ctx_r4.healthResponse))}}function HealthPageComponent_div_0_div_4_ng_template_12_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",12),core._UZ(1,"ds-health-info",13),core.ALo(2,"async"),core.qZA()),2&rf){const ctx_r5=core.oxw(3);core.xp6(1),core.Q6J("healthInfoResponse",core.lcZ(2,1,ctx_r5.healthInfoResponse))}}function HealthPageComponent_div_0_div_4_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div")(1,"ul",4,5)(3,"li",6)(4,"a",7),core._uU(5),core.ALo(6,"translate"),core.qZA(),core.YNc(7,HealthPageComponent_div_0_div_4_ng_template_7_Template,3,3,"ng-template",8),core.qZA(),core.TgZ(8,"li",6)(9,"a",7),core._uU(10),core.ALo(11,"translate"),core.qZA(),core.YNc(12,HealthPageComponent_div_0_div_4_ng_template_12_Template,3,3,"ng-template",8),core.qZA()(),core._UZ(13,"div",9),core.qZA()),2&rf){const _r3=core.MAs(2);core.xp6(1),core.Q6J("activeId","status"),core.xp6(2),core.Q6J("ngbNavItem","status"),core.xp6(2),core.Oqu(core.lcZ(6,6,"health-page.status-tab")),core.xp6(3),core.Q6J("ngbNavItem","info"),core.xp6(2),core.Oqu(core.lcZ(11,8,"health-page.info-tab")),core.xp6(3),core.Q6J("ngbNavOutlet",_r3)}}function HealthPageComponent_div_0_ds_alert_7_Template(rf,ctx){1&rf&&core._UZ(0,"ds-alert",14),2&rf&&core.Q6J("type","alert-danger")("content","health-page.error.msg")}function HealthPageComponent_div_0_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",1)(1,"h2"),core._uU(2),core.ALo(3,"translate"),core.qZA(),core.YNc(4,HealthPageComponent_div_0_div_4_Template,14,10,"div",2),core.ALo(5,"async"),core.ALo(6,"async"),core.YNc(7,HealthPageComponent_div_0_ds_alert_7_Template,1,2,"ds-alert",3),core.ALo(8,"async"),core.ALo(9,"async"),core.qZA()),2&rf){const ctx_r0=core.oxw();core.xp6(2),core.Oqu(core.lcZ(3,3,"health-page.heading")),core.xp6(2),core.Q6J("ngIf",core.lcZ(5,5,ctx_r0.healthResponse)&&core.lcZ(6,7,ctx_r0.healthInfoResponse)),core.xp6(3),core.Q6J("ngIf",!core.lcZ(8,9,ctx_r0.healthResponse)||!core.lcZ(9,11,ctx_r0.healthInfoResponse))}}__name(HealthInfoComponent,"HealthInfoComponent"),HealthInfoComponent.\u0275fac=__name(function(t){return new(t||HealthInfoComponent)(core.Y36(ngx_translate_core.sK))},"HealthInfoComponent_Factory"),HealthInfoComponent.\u0275cmp=core.Xpm({type:HealthInfoComponent,selectors:[["ds-health-info"]],inputs:{healthInfoResponse:"healthInfoResponse"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"activeIds"],["acc","ngbAccordion"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],["ngbPanelHeader",""],["ngbPanelContent",""],["ngbPanelToggle","","data-test","info-component",1,"w-100","d-flex","justify-content-between","collapse-toggle",3,"click"],["type","button","aria-controls","collapsePanels",1,"btn","btn-link","p-0",3,"click"],[1,"text-right","d-flex"],[3,"status"],[1,"ml-3","d-inline-block"],["class","fas fa-chevron-up fa-fw",4,"ngIf"],["class","fas fa-chevron-down fa-fw",4,"ngIf"],[1,"fas","fa-chevron-up","fa-fw"],[1,"fas","fa-chevron-down","fa-fw"],[3,"healthInfoComponentName","healthInfoComponent"]],template:__name(function(rf,ctx){1&rf&&core.YNc(0,HealthInfoComponent_ng_container_0_Template,5,4,"ng-container",0),2&rf&&core.Q6J("ngIf",ctx.healthInfoResponse)},"HealthInfoComponent_Template"),directives:[common.O5,ng_bootstrap.gY,common.sg,ng_bootstrap.Gk,ng_bootstrap.k9,HealthStatusComponent,ng_bootstrap.gW,HealthInfoComponentComponent],pipes:[object_ngfor_pipe.C,common.rS],styles:[".collapse-toggle[_ngcontent-%COMP%]{cursor:pointer}"]}),__name(HealthPageComponent_div_0_div_4_ng_template_7_Template,"HealthPageComponent_div_0_div_4_ng_template_7_Template"),__name(HealthPageComponent_div_0_div_4_ng_template_12_Template,"HealthPageComponent_div_0_div_4_ng_template_12_Template"),__name(HealthPageComponent_div_0_div_4_Template,"HealthPageComponent_div_0_div_4_Template"),__name(HealthPageComponent_div_0_ds_alert_7_Template,"HealthPageComponent_div_0_ds_alert_7_Template"),__name(HealthPageComponent_div_0_Template,"HealthPageComponent_div_0_Template");class HealthPageComponent{constructor(healthDataService){this.healthDataService=healthDataService,this.healthInfoResponse=new cjs.BehaviorSubject(null),this.healthResponse=new cjs.BehaviorSubject(null),this.healthResponseInitialised=new cjs.BehaviorSubject(!1),this.healthInfoResponseInitialised=new cjs.BehaviorSubject(!1)}ngOnInit(){this.healthDataService.getHealth().pipe((0,operators.qn)(1)).subscribe({next:data=>{this.healthResponse.next(data.payload),this.healthResponseInitialised.next(!0)},error:()=>{this.healthResponse.next(null),this.healthResponseInitialised.next(!0)}}),this.healthDataService.getInfo().pipe((0,operators.qn)(1)).subscribe({next:data=>{this.healthInfoResponse.next(data.payload),this.healthInfoResponseInitialised.next(!0)},error:()=>{this.healthInfoResponse.next(null),this.healthInfoResponseInitialised.next(!0)}})}}__name(HealthPageComponent,"HealthPageComponent"),HealthPageComponent.\u0275fac=__name(function(t){return new(t||HealthPageComponent)(core.Y36(HealthService))},"HealthPageComponent_Factory"),HealthPageComponent.\u0275cmp=core.Xpm({type:HealthPageComponent,selectors:[["ds-health-page"]],decls:3,vars:5,consts:[["class","container",4,"ngIf"],[1,"container"],[4,"ngIf"],[3,"type","content",4,"ngIf"],["ngbNav","",1,"nav-tabs",3,"activeId"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"],["id","status"],[3,"healthResponse"],["id","info"],[3,"healthInfoResponse"],[3,"type","content"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,HealthPageComponent_div_0_Template,10,13,"div",0),core.ALo(1,"async"),core.ALo(2,"async")),2&rf&&core.Q6J("ngIf",core.lcZ(1,1,ctx.healthResponseInitialised)&&core.lcZ(2,3,ctx.healthInfoResponseInitialised))},"HealthPageComponent_Template"),directives:[common.O5,ng_bootstrap.Pz,ng_bootstrap.nv,ng_bootstrap.Vx,ng_bootstrap.uN,HealthPanelComponent,HealthInfoComponent,ng_bootstrap.tO,alert_component.w],pipes:[common.Ov,ngx_translate_core.X$],styles:[""]});var site_administrator_guard=__webpack_require__(97874);class HealthPageRoutingModule{}__name(HealthPageRoutingModule,"HealthPageRoutingModule"),HealthPageRoutingModule.\u0275fac=__name(function(t){return new(t||HealthPageRoutingModule)},"HealthPageRoutingModule_Factory"),HealthPageRoutingModule.\u0275mod=core.oAB({type:HealthPageRoutingModule}),HealthPageRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild([{path:"",resolve:{breadcrumb:i18n_breadcrumb_resolver.t},data:{breadcrumbKey:"health",title:"health-page.title"},canActivate:[site_administrator_guard.X],component:HealthPageComponent}])]]});var shared_module=__webpack_require__(57981);class HealthPageModule{}__name(HealthPageModule,"HealthPageModule"),HealthPageModule.\u0275fac=__name(function(t){return new(t||HealthPageModule)},"HealthPageModule_Factory"),HealthPageModule.\u0275mod=core.oAB({type:HealthPageModule}),HealthPageModule.\u0275inj=core.cJS({imports:[[common.ez,HealthPageRoutingModule,ng_bootstrap.IJ,shared_module.m,ngx_translate_core.aw]]})}};