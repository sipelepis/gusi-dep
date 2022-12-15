"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=200,exports.ids=[200,8496],exports.modules={98496:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComcolPageBrowseByComponent:()=>ComcolPageBrowseByComponent});var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5796),_community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18595),_collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10954),_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63281),_core_browse_browse_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17373),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(70074),_angular_router__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(37895),_angular_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10210),_angular_forms__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(45028),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(47241);function ComcolPageBrowseByComponent_a_6_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(0,"a",8),_angular_core__WEBPACK_IMPORTED_MODULE_2__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_2__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA()),2&rf){const option_r2=ctx.$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_2__.Q6J("routerLink",option_r2.routerLink)("queryParams",option_r2.params),_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__.lcZ(2,3,option_r2.label))}}function ComcolPageBrowseByComponent_option_10_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(0,"option",9),_angular_core__WEBPACK_IMPORTED_MODULE_2__.ALo(1,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_2__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_2__.ALo(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA()),2&rf){const option_r3=ctx.$implicit,ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_2__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_2__.Q6J("ngValue",option_r3.id),_angular_core__WEBPACK_IMPORTED_MODULE_2__.uIk("selected",_angular_core__WEBPACK_IMPORTED_MODULE_2__.lcZ(1,3,ctx_r1.currentOptionId$)===option_r3.id?"selected":null),_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__.lcZ(3,5,option_r3.label))}}__name(ComcolPageBrowseByComponent_a_6_Template,"ComcolPageBrowseByComponent_a_6_Template"),__name(ComcolPageBrowseByComponent_option_10_Template,"ComcolPageBrowseByComponent_option_10_Template");class ComcolPageBrowseByComponent{constructor(route,router,browseService){this.route=route,this.router=router,this.browseService=browseService}ngOnInit(){this.browseService.getBrowseDefinitions().pipe((0,_core_shared_operators__WEBPACK_IMPORTED_MODULE_0__.hC)()).subscribe(browseDefListRD=>{browseDefListRD.hasSucceeded&&(this.allOptions=browseDefListRD.payload.page.map(config=>({id:config.id,label:`browse.comcol.by.${config.id}`,routerLink:`/browse/${config.id}`,params:{scope:this.id}})),"collection"===this.contentType?this.allOptions=[{id:this.id,label:"collection.page.browse.recent.head",routerLink:(0,_collection_page_collection_page_routing_paths__WEBPACK_IMPORTED_MODULE_3__.MI)(this.id)},...this.allOptions]:"community"===this.contentType&&(this.allOptions=[{id:this.id,label:"community.all-lists.head",routerLink:(0,_community_page_community_page_routing_paths__WEBPACK_IMPORTED_MODULE_4__.Ke)(this.id)},...this.allOptions]))}),this.currentOptionId$=this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.UI)(params=>params.id))}onSelectChange(newId){const selectedOption=this.allOptions.find(option=>option.id===newId);this.router.navigate([selectedOption.routerLink],{queryParams:selectedOption.params})}}__name(ComcolPageBrowseByComponent,"ComcolPageBrowseByComponent"),ComcolPageBrowseByComponent.\u0275fac=__name(function(t){return new(t||ComcolPageBrowseByComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_6__.gz),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_6__.F0),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Y36(_core_browse_browse_service__WEBPACK_IMPORTED_MODULE_1__.I))},"ComcolPageBrowseByComponent_Factory"),ComcolPageBrowseByComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_2__.Xpm({type:ComcolPageBrowseByComponent,selectors:[["ds-comcol-page-browse-by"]],inputs:{id:"id",contentType:"contentType"},decls:11,vars:8,consts:[[1,"comcol-browse-label","h5"],["aria-label","Browse Community or Collection",1,"comcol-browse","mb-4"],[1,"d-none","d-sm-block"],[1,"list-group","list-group-horizontal"],["class","list-group-item","routerLinkActive","active",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"d-block","d-sm-none"],["name","browse-type","aria-label","Browse Community or Collection",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink","queryParams"],[3,"ngValue"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(0,"h2",0),_angular_core__WEBPACK_IMPORTED_MODULE_2__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_2__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(3,"nav",1)(4,"div",2)(5,"div",3),_angular_core__WEBPACK_IMPORTED_MODULE_2__.YNc(6,ComcolPageBrowseByComponent_a_6_Template,3,5,"a",4),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_2__.TgZ(7,"div",5)(8,"select",6),_angular_core__WEBPACK_IMPORTED_MODULE_2__.NdJ("ngModelChange",__name(function($event){return ctx.onSelectChange($event)},"ComcolPageBrowseByComponent_Template_select_ngModelChange_8_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_2__.ALo(9,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_2__.YNc(10,ComcolPageBrowseByComponent_option_10_Template,4,7,"option",7),_angular_core__WEBPACK_IMPORTED_MODULE_2__.qZA()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_2__.lcZ(2,4,"browse.comcol.head")),_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(5),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Q6J("ngForOf",ctx.allOptions),_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Q6J("ngModel",_angular_core__WEBPACK_IMPORTED_MODULE_2__.lcZ(9,6,ctx.currentOptionId$)),_angular_core__WEBPACK_IMPORTED_MODULE_2__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_2__.Q6J("ngForOf",ctx.allOptions))},"ComcolPageBrowseByComponent_Template"),directives:[_angular_common__WEBPACK_IMPORTED_MODULE_7__.sg,_angular_router__WEBPACK_IMPORTED_MODULE_6__.yS,_angular_router__WEBPACK_IMPORTED_MODULE_6__.Od,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.EJ,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.JJ,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.On,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Kr],pipes:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.X$,_angular_common__WEBPACK_IMPORTED_MODULE_7__.Ov],styles:["a[_ngcontent-%COMP%]{color:#da1212}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus{color:#da1212}a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:focus{text-decoration:underline;box-shadow:none}a[_ngcontent-%COMP%]:disabled{color:#da1212}.list-group-item.active[_ngcontent-%COMP%]{color:#fff!important;background-color:#da1212!important;border-color:#da1212!important}"]})},30200:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComcolPageBrowseByComponent:()=>ComcolPageBrowseByComponent});var _app_shared_comcol_comcol_page_browse_by_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(98496),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70074),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10210),_angular_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37895),_angular_forms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(45028),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(47241);function ComcolPageBrowseByComponent_a_6_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"a",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()),2&rf){const option_r2=ctx.$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("routerLink",option_r2.routerLink)("queryParams",option_r2.params),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(2,3,option_r2.label))}}function ComcolPageBrowseByComponent_option_10_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"option",9),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(1,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()),2&rf){const option_r3=ctx.$implicit,ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngValue",option_r3.id),_angular_core__WEBPACK_IMPORTED_MODULE_1__.uIk("selected",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(1,3,ctx_r1.currentOptionId$)===option_r3.id?"selected":null),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(3,5,option_r3.label))}}__name(ComcolPageBrowseByComponent_a_6_Template,"ComcolPageBrowseByComponent_a_6_Template"),__name(ComcolPageBrowseByComponent_option_10_Template,"ComcolPageBrowseByComponent_option_10_Template");class ComcolPageBrowseByComponent extends _app_shared_comcol_comcol_page_browse_by_comcol_page_browse_by_component__WEBPACK_IMPORTED_MODULE_0__.ComcolPageBrowseByComponent{}__name(ComcolPageBrowseByComponent,"ComcolPageBrowseByComponent"),ComcolPageBrowseByComponent.\u0275fac=function(){let \u0275ComcolPageBrowseByComponent_BaseFactory;return __name(function(t){return(\u0275ComcolPageBrowseByComponent_BaseFactory||(\u0275ComcolPageBrowseByComponent_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_1__.n5z(ComcolPageBrowseByComponent)))(t||ComcolPageBrowseByComponent)},"ComcolPageBrowseByComponent_Factory")}(),ComcolPageBrowseByComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Xpm({type:ComcolPageBrowseByComponent,selectors:[["ds-comcol-page-browse-by"]],features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.qOj],decls:11,vars:8,consts:[[1,"comcol-browse-label","h5"],["aria-label","Browse Community or Collection",1,"comcol-browse","mb-4"],[1,"d-none","d-sm-block"],[1,"list-group","list-group-horizontal"],["class","list-group-item","routerLinkActive","active",3,"routerLink","queryParams",4,"ngFor","ngForOf"],[1,"d-block","d-sm-none"],["name","browse-type","aria-label","Browse Community or Collection",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink","queryParams"],[3,"ngValue"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(0,"h2",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(3,"nav",1)(4,"div",2)(5,"div",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(6,ComcolPageBrowseByComponent_a_6_Template,3,5,"a",4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.TgZ(7,"div",5)(8,"select",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("ngModelChange",__name(function($event){return ctx.onSelectChange($event)},"ComcolPageBrowseByComponent_Template_select_ngModelChange_8_listener")),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ALo(9,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.YNc(10,ComcolPageBrowseByComponent_option_10_Template,4,7,"option",7),_angular_core__WEBPACK_IMPORTED_MODULE_1__.qZA()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(2,4,"browse.comcol.head")),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(5),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngForOf",ctx.allOptions),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngModel",_angular_core__WEBPACK_IMPORTED_MODULE_1__.lcZ(9,6,ctx.currentOptionId$)),_angular_core__WEBPACK_IMPORTED_MODULE_1__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Q6J("ngForOf",ctx.allOptions))},"ComcolPageBrowseByComponent_Template"),directives:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.sg,_angular_router__WEBPACK_IMPORTED_MODULE_3__.yS,_angular_router__WEBPACK_IMPORTED_MODULE_3__.Od,_angular_forms__WEBPACK_IMPORTED_MODULE_4__.EJ,_angular_forms__WEBPACK_IMPORTED_MODULE_4__.JJ,_angular_forms__WEBPACK_IMPORTED_MODULE_4__.On,_angular_forms__WEBPACK_IMPORTED_MODULE_4__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Kr],pipes:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.X$,_angular_common__WEBPACK_IMPORTED_MODULE_2__.Ov],styles:["a[_ngcontent-%COMP%]{color:#da1212}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus{color:#da1212}a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:focus{text-decoration:underline;box-shadow:none}a[_ngcontent-%COMP%]:disabled{color:#da1212}.list-group-item.active[_ngcontent-%COMP%]{color:#fff!important;background-color:#da1212!important;border-color:#da1212!important}"]})}};