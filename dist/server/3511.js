"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=3511,exports.ids=[3511],exports.modules={3511:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EditCommunityPageModule:()=>EditCommunityPageModule});var common=__webpack_require__(10210),shared_module=__webpack_require__(66004),edit_comcol_page_component=__webpack_require__(31583),community_page_routing_paths=__webpack_require__(18595),core=__webpack_require__(70074),router=__webpack_require__(37895),ngx_translate_core=__webpack_require__(47241);const _c0=__name(function(a0){return{active:a0}},"_c0"),_c1=__name(function(a0){return[a0]},"_c1");function EditCommunityPageComponent_li_15_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"li",13)(1,"a",14),core._uU(2),core.ALo(3,"translate"),core.qZA()()),2&rf){const page_r2=ctx.$implicit,ctx_r0=core.oxw();core.xp6(1),core.Q6J("ngClass",core.VKq(5,_c0,page_r2===ctx_r0.currentPage))("routerLink",core.VKq(7,_c1,"./"+page_r2)),core.xp6(1),core.hij(" ",core.lcZ(3,3,ctx_r0.type+".edit.tabs."+page_r2+".head")," ")}}function EditCommunityPageComponent_a_20_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"a",15),core.ALo(1,"async"),core._UZ(2,"i",16),core._uU(3),core.ALo(4,"translate"),core.qZA()),2&rf){const ctx_r1=core.oxw();let tmp_0_0;core.Q6J("routerLink",ctx_r1.getPageUrl(null==(tmp_0_0=core.lcZ(1,2,ctx_r1.dsoRD$))?null:tmp_0_0.payload)),core.xp6(3),core.hij(" ",core.lcZ(4,4,ctx_r1.type+".edit.return")," ")}}__name(EditCommunityPageComponent_li_15_Template,"EditCommunityPageComponent_li_15_Template"),__name(EditCommunityPageComponent_a_20_Template,"EditCommunityPageComponent_a_20_Template");class EditCommunityPageComponent extends edit_comcol_page_component.x{constructor(router2,route){super(router2,route),this.router=router2,this.route=route,this.type="community"}getPageUrl(community){return(0,community_page_routing_paths.Ke)(community.id)}}__name(EditCommunityPageComponent,"EditCommunityPageComponent"),EditCommunityPageComponent.\u0275fac=__name(function(t){return new(t||EditCommunityPageComponent)(core.Y36(router.F0),core.Y36(router.gz))},"EditCommunityPageComponent_Factory"),EditCommunityPageComponent.\u0275cmp=core.Xpm({type:EditCommunityPageComponent,selectors:[["ds-edit-community"]],features:[core.qOj],decls:21,vars:11,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"d-flex","justify-content-between","border-bottom"],[1,"btn","btn-danger",3,"routerLink"],[1,"fas","fa-trash"],[1,"pt-2"],[1,"nav","nav-tabs","justify-content-start","mb-2"],["class","nav-item",4,"ngFor","ngForOf"],[1,"tab-pane","active"],[1,"mb-4"],[1,"col-12","text-right"],["class","btn btn-outline-secondary",3,"routerLink",4,"ngIf"],[1,"nav-item"],[1,"nav-link",3,"ngClass","routerLink"],[1,"btn","btn-outline-secondary",3,"routerLink"],[1,"fas","fa-arrow-left"]],template:__name(function(rf,ctx){if(1&rf&&(core.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),core._uU(5),core.ALo(6,"translate"),core.qZA(),core.TgZ(7,"div")(8,"a",4),core.ALo(9,"async"),core._UZ(10,"i",5),core._uU(11),core.ALo(12,"translate"),core.qZA()()(),core.TgZ(13,"div",6)(14,"ul",7),core.YNc(15,EditCommunityPageComponent_li_15_Template,4,9,"li",8),core.qZA(),core.TgZ(16,"div",9)(17,"div",10),core._UZ(18,"router-outlet"),core.qZA(),core.TgZ(19,"div",11),core.YNc(20,EditCommunityPageComponent_a_20_Template,5,6,"a",12),core.qZA()()()()()()),2&rf){let tmp_1_0;core.xp6(5),core.Oqu(core.lcZ(6,5,ctx.type+".edit.head")),core.xp6(3),core.Q6J("routerLink",("community"===ctx.type?"/communities/":"/collections/")+(null==(tmp_1_0=core.lcZ(9,7,ctx.dsoRD$))?null:tmp_1_0.payload.uuid)+"/delete"),core.xp6(3),core.hij(" ",core.lcZ(12,9,ctx.type+".edit.delete"),""),core.xp6(4),core.Q6J("ngForOf",ctx.pages),core.xp6(5),core.Q6J("ngIf",!ctx.hideReturnButton)}},"EditCommunityPageComponent_Template"),directives:[router.yS,common.sg,common.mk,router.lC,common.O5],pipes:[ngx_translate_core.X$,common.Ov],encapsulation:2});var comcol_metadata_component=__webpack_require__(49466),community_model=__webpack_require__(70920),community_data_service=__webpack_require__(63749),notifications_service=__webpack_require__(16228),community_form_component=__webpack_require__(34075);class CommunityMetadataComponent extends comcol_metadata_component.Z{constructor(communityDataService,router2,route,notificationsService,translate){super(communityDataService,router2,route,notificationsService,translate),this.communityDataService=communityDataService,this.router=router2,this.route=route,this.notificationsService=notificationsService,this.translate=translate,this.frontendURL="/communities/",this.type=community_model.S.type}}__name(CommunityMetadataComponent,"CommunityMetadataComponent"),CommunityMetadataComponent.\u0275fac=__name(function(t){return new(t||CommunityMetadataComponent)(core.Y36(community_data_service.w),core.Y36(router.F0),core.Y36(router.gz),core.Y36(notifications_service.T),core.Y36(ngx_translate_core.sK))},"CommunityMetadataComponent_Factory"),CommunityMetadataComponent.\u0275cmp=core.Xpm({type:CommunityMetadataComponent,selectors:[["ds-community-metadata"]],features:[core.qOj],decls:2,vars:3,consts:[[3,"dso","submitForm","back","finish"]],template:__name(function(rf,ctx){if(1&rf&&(core.TgZ(0,"ds-community-form",0),core.NdJ("submitForm",__name(function($event){return ctx.onSubmit($event)},"CommunityMetadataComponent_Template_ds_community_form_submitForm_0_listener"))("back",__name(function(){return ctx.navigateToHomePage()},"CommunityMetadataComponent_Template_ds_community_form_back_0_listener"))("finish",__name(function(){return ctx.navigateToHomePage()},"CommunityMetadataComponent_Template_ds_community_form_finish_0_listener")),core.ALo(1,"async"),core.qZA()),2&rf){let tmp_0_0;core.Q6J("dso",null==(tmp_0_0=core.lcZ(1,1,ctx.dsoRD$))?null:tmp_0_0.payload)}},"CommunityMetadataComponent_Template"),directives:[community_form_component.C],pipes:[common.Ov],encapsulation:2});var operators=__webpack_require__(5796),shared_operators=__webpack_require__(63281),comcol_role_component=__webpack_require__(1808);function CommunityRolesComponent_ds_comcol_role_0_Template(rf,ctx){if(1&rf&&(core._UZ(0,"ds-comcol-role",1),core.ALo(1,"async")),2&rf){const comcolRole_r1=ctx.$implicit,ctx_r0=core.oxw();core.Q6J("dso",core.lcZ(1,2,ctx_r0.community$))("comcolRole",comcolRole_r1)}}__name(CommunityRolesComponent_ds_comcol_role_0_Template,"CommunityRolesComponent_ds_comcol_role_0_Template");class CommunityRolesComponent{constructor(route){this.route=route}ngOnInit(){this.dsoRD$=this.route.parent.data.pipe((0,operators.Ps)(),(0,operators.UI)(data=>data.dso)),this.community$=this.dsoRD$.pipe((0,shared_operators.xw)(),(0,shared_operators.xe)()),this.comcolRoles$=this.community$.pipe((0,operators.UI)(community=>[{name:"community-admin",href:community._links.adminGroup.href}]))}}__name(CommunityRolesComponent,"CommunityRolesComponent"),CommunityRolesComponent.\u0275fac=__name(function(t){return new(t||CommunityRolesComponent)(core.Y36(router.gz))},"CommunityRolesComponent_Factory"),CommunityRolesComponent.\u0275cmp=core.Xpm({type:CommunityRolesComponent,selectors:[["ds-community-roles"]],decls:2,vars:3,consts:[[3,"dso","comcolRole",4,"ngFor","ngForOf"],[3,"dso","comcolRole"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,CommunityRolesComponent_ds_comcol_role_0_Template,2,4,"ds-comcol-role",0),core.ALo(1,"async")),2&rf&&core.Q6J("ngForOf",core.lcZ(1,1,ctx.comcolRoles$))},"CommunityRolesComponent_Template"),directives:[common.sg,comcol_role_component.b],pipes:[common.Ov],encapsulation:2});var dso_name_service=__webpack_require__(53043),empty_util=__webpack_require__(25839),curation_form_component=__webpack_require__(12141);const community_curate_component_c0=__name(function(a0){return{community:a0}},"community_curate_component_c0");class CommunityCurateComponent{constructor(route,dsoNameService){this.route=route,this.dsoNameService=dsoNameService}ngOnInit(){this.dsoRD$=this.route.parent.data.pipe((0,operators.qn)(1),(0,operators.UI)(data=>data.dso)),this.communityName$=this.dsoRD$.pipe((0,operators.hX)(rd=>(0,empty_util.Uh)(rd)),(0,operators.UI)(rd=>this.dsoNameService.getName(rd.payload)))}}__name(CommunityCurateComponent,"CommunityCurateComponent"),CommunityCurateComponent.\u0275fac=__name(function(t){return new(t||CommunityCurateComponent)(core.Y36(router.gz),core.Y36(dso_name_service._))},"CommunityCurateComponent_Factory"),CommunityCurateComponent.\u0275cmp=core.Xpm({type:CommunityCurateComponent,selectors:[["ds-community-curate"]],decls:7,vars:11,consts:[[1,"container"],[3,"dsoHandle"]],template:__name(function(rf,ctx){if(1&rf&&(core.TgZ(0,"div",0)(1,"h3"),core._uU(2),core.ALo(3,"translate"),core.ALo(4,"async"),core.qZA(),core._UZ(5,"ds-curation-form",1),core.ALo(6,"async"),core.qZA()),2&rf){let tmp_1_0;core.xp6(2),core.Oqu(core.xi3(3,2,"community.curate.header",core.VKq(9,community_curate_component_c0,core.lcZ(4,5,ctx.communityName$)))),core.xp6(3),core.Q6J("dsoHandle",null==(tmp_1_0=core.lcZ(6,7,ctx.dsoRD$))?null:tmp_1_0.payload.handle)}},"CommunityCurateComponent_Template"),directives:[curation_form_component._],pipes:[ngx_translate_core.X$,common.Ov],encapsulation:2});var i18n_breadcrumb_resolver=__webpack_require__(64561),resource_policies_component=__webpack_require__(45452);class CommunityAuthorizationsComponent{constructor(route){this.route=route}ngOnInit(){this.dsoRD$=this.route.parent.parent.data.pipe((0,operators.Ps)(),(0,operators.UI)(data=>data.dso))}}__name(CommunityAuthorizationsComponent,"CommunityAuthorizationsComponent"),CommunityAuthorizationsComponent.\u0275fac=__name(function(t){return new(t||CommunityAuthorizationsComponent)(core.Y36(router.gz))},"CommunityAuthorizationsComponent_Factory"),CommunityAuthorizationsComponent.\u0275cmp=core.Xpm({type:CommunityAuthorizationsComponent,selectors:[["ds-community-authorizations"]],decls:3,vars:4,consts:[[1,"container"],[3,"resourceType","resourceUUID"]],template:__name(function(rf,ctx){if(1&rf&&(core.TgZ(0,"div",0),core._UZ(1,"ds-resource-policies",1),core.ALo(2,"async"),core.qZA()),2&rf){let tmp_1_0;core.xp6(1),core.Q6J("resourceType","community")("resourceUUID",null==(tmp_1_0=core.lcZ(2,2,ctx.dsoRD$))||null==tmp_1_0.payload?null:tmp_1_0.payload.id)}},"CommunityAuthorizationsComponent_Template"),directives:[resource_policies_component.F],pipes:[common.Ov],encapsulation:2});var resource_policy_target_resolver=__webpack_require__(37443),resource_policy_create_component=__webpack_require__(91870),resource_policy_resolver=__webpack_require__(66057),resource_policy_edit_component=__webpack_require__(40279),single_feature_authorization_guard=__webpack_require__(18043),authorization_data_service=__webpack_require__(30835),auth_service=__webpack_require__(28709),cjs=__webpack_require__(39942),feature_id=__webpack_require__(84705);class CommunityAdministratorGuard extends single_feature_authorization_guard.C{constructor(authorizationService,router2,authService){super(authorizationService,router2,authService),this.authorizationService=authorizationService,this.router=router2,this.authService=authService}getFeatureID(route,state){return(0,cjs.of)(feature_id.i.IsCommunityAdmin)}}__name(CommunityAdministratorGuard,"CommunityAdministratorGuard"),CommunityAdministratorGuard.\u0275fac=__name(function(t){return new(t||CommunityAdministratorGuard)(core.LFG(authorization_data_service._),core.LFG(router.F0),core.LFG(auth_service.e8))},"CommunityAdministratorGuard_Factory"),CommunityAdministratorGuard.\u0275prov=core.Yz7({token:CommunityAdministratorGuard,factory:CommunityAdministratorGuard.\u0275fac,providedIn:"root"});class EditCommunityPageRoutingModule{}__name(EditCommunityPageRoutingModule,"EditCommunityPageRoutingModule"),EditCommunityPageRoutingModule.\u0275fac=__name(function(t){return new(t||EditCommunityPageRoutingModule)},"EditCommunityPageRoutingModule_Factory"),EditCommunityPageRoutingModule.\u0275mod=core.oAB({type:EditCommunityPageRoutingModule}),EditCommunityPageRoutingModule.\u0275inj=core.cJS({providers:[resource_policy_resolver.b,resource_policy_target_resolver.a],imports:[[router.Bz.forChild([{path:"",resolve:{breadcrumb:i18n_breadcrumb_resolver.t},data:{breadcrumbKey:"community.edit"},component:EditCommunityPageComponent,canActivate:[CommunityAdministratorGuard],children:[{path:"",redirectTo:"metadata",pathMatch:"full"},{path:"metadata",component:CommunityMetadataComponent,data:{title:"community.edit.tabs.metadata.title",hideReturnButton:!0,showBreadcrumbs:!0}},{path:"roles",component:CommunityRolesComponent,data:{title:"community.edit.tabs.roles.title",showBreadcrumbs:!0}},{path:"curate",component:CommunityCurateComponent,data:{title:"community.edit.tabs.curate.title",showBreadcrumbs:!0}},{path:"authorizations",data:{showBreadcrumbs:!0},children:[{path:"create",resolve:{resourcePolicyTarget:resource_policy_target_resolver.a},component:resource_policy_create_component.v,data:{title:"resource-policies.create.page.title"}},{path:"edit",resolve:{resourcePolicy:resource_policy_resolver.b},component:resource_policy_edit_component.x,data:{title:"resource-policies.edit.page.title"}},{path:"",component:CommunityAuthorizationsComponent,data:{title:"community.edit.tabs.authorizations.title",showBreadcrumbs:!0,hideReturnButton:!0}}]}]}])]]});var community_form_module=__webpack_require__(72057),resource_policies_module=__webpack_require__(36331),comcol_module=__webpack_require__(39570);class EditCommunityPageModule{}__name(EditCommunityPageModule,"EditCommunityPageModule"),EditCommunityPageModule.\u0275fac=__name(function(t){return new(t||EditCommunityPageModule)},"EditCommunityPageModule_Factory"),EditCommunityPageModule.\u0275mod=core.oAB({type:EditCommunityPageModule}),EditCommunityPageModule.\u0275inj=core.cJS({imports:[[common.ez,shared_module.m,EditCommunityPageRoutingModule,community_form_module.T,comcol_module.H,resource_policies_module.q]]})}};