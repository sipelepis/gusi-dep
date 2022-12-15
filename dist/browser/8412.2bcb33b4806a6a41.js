"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[8412,8723],{20069:(W,M,r)=>{r.d(M,{u:()=>_});var a=r(59492),g=r(45028),x=(r(62610),r(25839)),R=r(53019),T=r(61001),e=r(5496),B=r(24656),L=r(16228),w=r(57017),E=r(70074),b=r(86553),U=r(10210),t=r(61792);function O(f,o){if(1&f&&E.\u0275\u0275element(0,"ds-form",1),2&f){const s=E.\u0275\u0275nextContext();E.\u0275\u0275property("formId","profile-page-metadata-form-id")("formModel",s.formModel)("formGroup",s.formGroup)("displaySubmit",!1)("displayCancel",!1)}}let _=(()=>{class f{constructor(s,m,F,V,l){this.formBuilderService=s,this.translate=m,this.formBuilder=F,this.epersonService=V,this.notificationsService=l,this.formModel=[new a.b1u({id:"email",name:"email",readOnly:!0}),new a.b1u({id:"firstname",name:"eperson.firstname",required:!0,validators:{required:null},errorMessages:{required:"This field is required"}}),new a.b1u({id:"lastname",name:"eperson.lastname",required:!0,validators:{required:null},errorMessages:{required:"This field is required"}}),new a.b1u({id:"phone",name:"eperson.phone"}),new a.nMt({id:"language",name:"eperson.language"})],this.LABEL_PREFIX="profile.metadata.form.label.",this.ERROR_PREFIX="profile.metadata.form.error.",this.NOTIFICATION_PREFIX="profile.metadata.form.notifications."}ngOnInit(){this.form=this.formBuilder.group({email:new g.NI("",{validators:[g.kI.required,g.kI.pattern("^[a-z0-9._%+-]+@ue.edu.ph$")]})}),this.activeLangs=w.N.languages.filter(s=>!0===s.active),this.setFormValues(),this.updateFieldTranslations(),this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()})}setFormValues(){this.formModel.forEach(s=>{s.value="email"===s.name?this.user.email:this.user.firstMetadataValue(s.name),"language"===s.id&&(s.options=this.activeLangs.map(m=>Object.assign({value:m.code,label:m.label})))}),this.formGroup=this.formBuilderService.createFormGroup(this.formModel)}updateFieldTranslations(){this.formModel.forEach(s=>{s.label=this.translate.instant(this.LABEL_PREFIX+s.id),(0,x.UE)(s.validators)&&(s.errorMessages={},Object.keys(s.validators).forEach(m=>{s.errorMessages[m]=this.translate.instant(this.ERROR_PREFIX+s.id+"."+m)}))})}updateProfile(){if(!this.formGroup.valid)return!1;const s=(0,T.cloneDeep)(this.user.metadata);let m=!1;const F=/^[a-z ,.'-]+$/i,V=/^(09|\+639)\d{9}$/;return this.formModel.filter(l=>"email"!==l.id).forEach(l=>{console.log(s[l.name][0]),console.log(l.name),s.hasOwnProperty(l.name)&&s[l.name].length>0?(0,x.Uh)(l.value)?s[l.name][0].value!==l.value&&("eperson.firstname"===l.name||"eperson.lastname"===l.name?F.test(l.value)?(s[l.name][0].value=l.value,m=!0):(l.label=this.translate.instant(this.LABEL_PREFIX+l.id),(0,x.UE)(l.validators)&&(l.errorMessages={},Object.keys(l.validators).forEach(D=>{l.errorMessages[D]=this.translate.instant(this.ERROR_PREFIX+l.id+"."+D)}))):"eperson.phone"===l.name&&(V.test(l.value)?(s[l.name][0].value=l.value,m=!0):(l.label=this.translate.instant(this.LABEL_PREFIX+l.id),(0,x.UE)(l.validators)&&(l.errorMessages={},Object.keys(l.validators).forEach(D=>{l.errorMessages[D]=this.translate.instant(this.ERROR_PREFIX+l.id+"."+D)}))))):(s[l.name]=[],m=!0):(0,x.Uh)(l.value)&&(s[l.name]=[{value:l.value,language:null}],m=!0)}),m&&this.epersonService.update(Object.assign((0,T.cloneDeep)(this.user),{metadata:s})).pipe((0,e.xw)(),(0,e.xe)()).subscribe(l=>{this.user=l,this.setFormValues(),this.notificationsService.success(this.translate.instant(this.NOTIFICATION_PREFIX+"success.title"),this.translate.instant(this.NOTIFICATION_PREFIX+"success.content"))}),m}}return f.\u0275fac=function(s){return new(s||f)(E.\u0275\u0275directiveInject(B.c),E.\u0275\u0275directiveInject(b.sK),E.\u0275\u0275directiveInject(g.qu),E.\u0275\u0275directiveInject(R.k),E.\u0275\u0275directiveInject(L.T))},f.\u0275cmp=E.\u0275\u0275defineComponent({type:f,selectors:[["ds-profile-page-metadata-form"]],inputs:{user:"user"},decls:1,vars:1,consts:[[3,"formId","formModel","formGroup","displaySubmit","displayCancel",4,"ngIf"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel"]],template:function(s,m){1&s&&E.\u0275\u0275template(0,O,1,5,"ds-form",0),2&s&&E.\u0275\u0275property("ngIf",m.formModel)},directives:[U.O5,t.U,g.JL,g.sg],encapsulation:2}),f})()},25619:(W,M,r)=>{r.d(M,{V:()=>Y});var a=r(35841),g=r(77176),A=r(21160),x=r(48358),R=r(27303),T=r(69637),y=r(5496),e=r(70074),B=r(15007),L=r(96007),E=(r(44661),r(84484)),b=r(72262),U=r(91351),t=r(35053),O=r(37895),_=r(10210),f=r(99967),o=r(86553);function s(c,I){if(1&c){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",8)(1,"button",15,16),e.\u0275\u0275listener("click",function(){const C=e.\u0275\u0275restoreView(n).$implicit;return e.\u0275\u0275nextContext().selectItem(C.indexableObject)}),e.\u0275\u0275element(3,"ds-listable-object-component-loader",17),e.\u0275\u0275elementEnd()()}if(2&c){const n=I.$implicit,p=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate("title",n.indexableObject.name),e.\u0275\u0275advance(2),e.\u0275\u0275property("object",n)("viewMode",p.viewMode)("linkType",p.linkTypes.None)}}let m=(()=>{class c extends B.q{constructor(n,p,P,C){super(n,p),this.activeModal=n,this.route=p,this.router=P,this.profileClaimService=C,this.listEntries$=new a.X(null),this.viewMode=E.w.ListElement,this.linkTypes=U.m,this.checked=!1,this.create=new e.EventEmitter}ngOnInit(){this.profileClaimService.searchForSuggestions(this.dso).pipe((0,y.hC)()).subscribe(n=>this.listEntries$.next(n))}selectItem(n){this.close(),this.navigate(n)}navigate(n){this.router.navigate([(0,L.Tt)(n)])}toggleCheckbox(){this.checked=!this.checked}createFromScratch(){this.create.emit(),this.close()}}return c.\u0275fac=function(n){return new(n||c)(e.\u0275\u0275directiveInject(t.Kz),e.\u0275\u0275directiveInject(O.gz),e.\u0275\u0275directiveInject(O.F0),e.\u0275\u0275directiveInject(b.n))},c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["ds-profile-claim-item-modal"]],inputs:{dso:"dso"},outputs:{create:"create"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:27,vars:17,consts:[[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["role","alert",1,"alert","alert-info"],[1,"dropdown-divider"],[1,"scrollable-menu","list-group","container"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md","mt-2"],[1,"modal-footer"],[1,"mr-5"],["type","checkbox",3,"checked","change"],["type","submit",1,"btn","btn-primary","ml-5","mr-2",3,"disabled","click"],[1,"fas","fa-plus"],[1,"list-group-item","list-group-item-action","border-0","list-entry",3,"title","click"],["listEntryElement",""],[3,"object","viewMode","linkType"]],template:function(n,p){if(1&n&&(e.\u0275\u0275elementStart(0,"div")(1,"div",0)(2,"h4"),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",1),e.\u0275\u0275listener("click",function(){return p.close()}),e.\u0275\u0275elementStart(6,"span",2),e.\u0275\u0275text(7,"\xd7"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(8,"div",3)(9,"div",4),e.\u0275\u0275text(10),e.\u0275\u0275pipe(11,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(12,"div",5),e.\u0275\u0275elementStart(13,"div",6),e.\u0275\u0275template(14,s,4,4,"div",7),e.\u0275\u0275pipe(15,"async"),e.\u0275\u0275elementStart(16,"div",8),e.\u0275\u0275element(17,"div",9),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(18,"div",10)(19,"div",11)(20,"input",12),e.\u0275\u0275listener("change",function(){return p.toggleCheckbox()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(21),e.\u0275\u0275pipe(22,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"button",13),e.\u0275\u0275listener("click",function(){return p.createFromScratch()}),e.\u0275\u0275element(24,"i",14),e.\u0275\u0275text(25),e.\u0275\u0275pipe(26,"translate"),e.\u0275\u0275elementEnd()()()),2&n){let P;e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,7,"dso-selector.claim.item.head")),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(11,9,"dso-selector.claim.item.body")," "),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",null==(P=e.\u0275\u0275pipeBind1(15,11,p.listEntries$))?null:P.payload.page),e.\u0275\u0275advance(6),e.\u0275\u0275property("checked",p.checked),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(22,13,"dso-selector.claim.item.not-mine-label")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",!p.checked),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(26,15,"dso-selector.claim.item.create-from-scratch")," ")}},directives:[_.sg,f.p],pipes:[o.X$,_.Ov],encapsulation:2}),c})();var F=r(16228),V=r(28709),D=(r(62610),r(7261)),K=r(25839),j=r(8183),$=r(25366),X=r(41633),G=r(27739);function N(c,I){if(1&c){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p",3)(5,"span",4),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"ui-switch",5),e.\u0275\u0275listener("change",function(){e.\u0275\u0275restoreView(n);const P=e.\u0275\u0275nextContext().ngVar;return e.\u0275\u0275nextContext().toggleProfileVisibility(P)}),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275pipe(10,"translate"),e.\u0275\u0275elementEnd()()()}if(2&c){const n=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,5,"researcher.profile.associated")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,7,"researcher.profile.status")),e.\u0275\u0275advance(2),e.\u0275\u0275property("checkedLabel",e.\u0275\u0275pipeBind1(9,9,"researcher.profile.public.visibility"))("uncheckedLabel",e.\u0275\u0275pipeBind1(10,11,"researcher.profile.private.visibility"))("checked",n.visible)}}function d(c,I){1&c&&(e.\u0275\u0275elementStart(0,"div")(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()),2&c&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,1,"researcher.profile.not.associated")))}function u(c,I){1&c&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",7),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&c&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.action.processing")," "))}function i(c,I){1&c&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",8),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&c&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" \xa0",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.create.new")," "))}function h(c,I){if(1&c){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",6),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext(2).createProfile()}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,u,4,3,"span",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275template(4,i,4,3,"span",1),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275elementEnd()}if(2&c){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(1,3,n.isProcessingCreate())),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(3,5,n.isProcessingCreate())),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(5,7,n.isProcessingCreate()))}}function v(c,I){1&c&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",7),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&c&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.action.processing")," "))}function S(c,I){1&c&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",11),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&c&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" \xa0",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.delete")," "))}function z(c,I){if(1&c){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"button",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const P=e.\u0275\u0275nextContext().ngVar;return e.\u0275\u0275nextContext().viewProfile(P)}),e.\u0275\u0275element(2,"i",9),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",10),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const P=e.\u0275\u0275nextContext().ngVar;return e.\u0275\u0275nextContext().deleteProfile(P)}),e.\u0275\u0275template(6,v,4,3,"span",1),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275template(8,S,4,3,"span",1),e.\u0275\u0275pipe(9,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&c){const n=e.\u0275\u0275nextContext().ngVar,p=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",!n),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(4,5,"researcher.profile.view")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",!n),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(7,7,p.isProcessingDelete())),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(9,9,p.isProcessingDelete()))}}function Q(c,I){if(1&c&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,N,11,13,"div",1),e.\u0275\u0275template(2,d,4,3,"div",1),e.\u0275\u0275template(3,h,6,9,"button",2),e.\u0275\u0275template(4,z,10,11,"ng-container",1),e.\u0275\u0275elementEnd()),2&c){const n=I.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!n),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n)}}let Y=(()=>{class c{constructor(n,p,P,C,J,H,Z){this.researcherProfileService=n,this.profileClaimService=p,this.translationService=P,this.notificationService=C,this.authService=J,this.router=H,this.modalService=Z,this.researcherProfile$=new a.X(null),this.processingDelete$=new a.X(!1),this.processingCreate$=new a.X(!1)}ngOnInit(){this.initResearchProfile()}createProfile(){this.processingCreate$.next(!0),this.authService.getAuthenticatedUserFromStore().pipe((0,g.q)(1),(0,A.w)(n=>this.profileClaimService.hasProfilesToSuggest(n))).subscribe(n=>{if(n){this.processingCreate$.next(!1);const p=this.modalService.open(m);p.componentInstance.dso=this.user,p.componentInstance.create.pipe((0,g.q)(1)).subscribe(()=>{this.createProfileFromScratch()})}else this.createProfileFromScratch()})}viewProfile(n){null!=this.researcherProfileItemId&&this.router.navigate(["items",this.researcherProfileItemId])}deleteProfile(n){const p=this.modalService.open($.Y);p.componentInstance.headerLabel="confirmation-modal.delete-profile.header",p.componentInstance.infoLabel="confirmation-modal.delete-profile.info",p.componentInstance.cancelLabel="confirmation-modal.delete-profile.cancel",p.componentInstance.confirmLabel="confirmation-modal.delete-profile.confirm",p.componentInstance.brandColor="danger",p.componentInstance.confirmIcon="fas fa-trash",p.componentInstance.response.pipe((0,g.q)(1)).subscribe(P=>{P&&(this.processingDelete$.next(!0),this.researcherProfileService.delete(n.id).pipe((0,y.hC)(),(0,x.U)(C=>C.isSuccess)).subscribe(C=>{C&&(this.researcherProfile$.next(null),this.researcherProfileItemId=null),this.processingDelete$.next(!1)}))})}toggleProfileVisibility(n){this.researcherProfileService.setVisibility(n,!n.visible).pipe((0,y.hC)()).subscribe(p=>{p.hasSucceeded?this.researcherProfile$.next(p.payload):this.notificationService.error(null,this.translationService.get("researcher.profile.change-visibility.fail"))})}isProcessingDelete(){return this.processingDelete$.asObservable()}isProcessingCreate(){return this.processingCreate$.asObservable()}createProfileFromScratch(){this.processingCreate$.next(!0),this.researcherProfileService.create().pipe((0,y.hC)()).subscribe(n=>{this.processingCreate$.next(!1),n.isSuccess?(this.initResearchProfile(),this.notificationService.success(null,this.translationService.get("researcher.profile.create.success"))):this.notificationService.error(null,this.translationService.get("researcher.profile.create.fail"))})}initResearchProfile(){this.researcherProfileService.findById(this.user.id,!1,!0,(0,j.l)("item")).pipe((0,y.Gp)(),(0,R.b)(n=>this.researcherProfile$.next(n)),(0,T.z)(n=>this.researcherProfileService.findRelatedItemId(n))).subscribe(n=>{(0,K.UE)(n)&&(this.researcherProfileItemId=n)})}}return c.\u0275fac=function(n){return new(n||c)(e.\u0275\u0275directiveInject(D.E),e.\u0275\u0275directiveInject(b.n),e.\u0275\u0275directiveInject(o.sK),e.\u0275\u0275directiveInject(F.T),e.\u0275\u0275directiveInject(V.e8),e.\u0275\u0275directiveInject(O.F0),e.\u0275\u0275directiveInject(t.FF))},c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["ds-profile-page-researcher-form"]],inputs:{user:"user"},decls:2,vars:3,consts:[[4,"ngVar"],[4,"ngIf"],["class","btn btn-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"align-items-center","researcher-profile-switch"],[1,"mr-3"],[3,"checkedLabel","uncheckedLabel","checked","change"],[1,"btn","btn-primary","mr-2",3,"disabled","click"],[1,"fas","fa-circle-notch","fa-spin"],[1,"fas","fa-plus"],[1,"fas","fa-info-circle"],[1,"btn","btn-danger",3,"disabled","click"],[1,"fas","fa-trash-alt"]],template:function(n,p){1&n&&(e.\u0275\u0275template(0,Q,5,4,"div",0),e.\u0275\u0275pipe(1,"async")),2&n&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,p.researcherProfile$))},directives:[X.g,_.O5,G.ob],pipes:[_.Ov,o.X$],encapsulation:2}),c})()},48723:(W,M,r)=>{r.d(M,{V:()=>O});var a=r(70074),g=r(59492),A=r(25839),x=r(53019),R=r(16228),T=r(48358),y=r(5496),e=r(86553),B=r(7519),L=r(10210),w=r(61792),E=r(45028);function b(_,f){if(1&_&&a.\u0275\u0275element(0,"ds-form",4),2&_){const o=a.\u0275\u0275nextContext();a.\u0275\u0275property("formId",o.FORM_PREFIX)("formModel",o.formModel)("formGroup",o.formGroup)("displaySubmit",!1)("displayCancel",!1)}}function U(_,f){if(1&_&&(a.\u0275\u0275elementStart(0,"div",5),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd()),2&_){const o=a.\u0275\u0275nextContext();a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(2,1,o.FORM_PREFIX+"error.matching-passwords"))}}function t(_,f){if(1&_&&(a.\u0275\u0275elementStart(0,"div",6),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd()),2&_){const o=a.\u0275\u0275nextContext();a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(2,1,o.FORM_PREFIX+"error.empty-password"))}}let O=(()=>{class _{constructor(o,s,m,F){this.formService=o,this.translate=s,this.epersonService=m,this.notificationsService=F,this.isInvalid=new a.EventEmitter,this.passwordValue=new a.EventEmitter,this.currentPasswordValue=new a.EventEmitter,this.formModel=[new g.b1u({id:"password",name:"password",inputType:"password"}),new g.b1u({id:"passwordrepeat",name:"passwordrepeat",inputType:"password"})],this.passwordCanBeEmpty=!0,this.subs=[]}ngOnInit(){"profile.security.form."===this.FORM_PREFIX&&this.formModel.unshift(new g.b1u({id:"current-password",name:"current-password",inputType:"password",required:!0})),this.formGroup=this.formService.createFormGroup(this.formModel,this.passwordCanBeEmpty?{validators:[this.checkPasswordsEqual]}:{validators:[this.checkPasswordsEqual,this.checkPasswordEmpty]}),this.updateFieldTranslations(),this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()}),this.subs.push(this.formGroup.statusChanges.pipe((0,y.ig)(300),(0,T.U)(o=>"VALID"!==o)).subscribe(o=>this.isInvalid.emit(o))),this.subs.push(this.formGroup.valueChanges.pipe((0,y.ig)(300)).subscribe(o=>{this.passwordValue.emit(o.password),"profile.security.form."===this.FORM_PREFIX&&this.currentPasswordValue.emit(o["current-password"])}))}updateFieldTranslations(){this.formModel.forEach(o=>{o.label=this.translate.instant(this.FORM_PREFIX+"label."+o.id)})}checkPasswordsEqual(o){return o.get("password").value===o.get("passwordrepeat").value?null:{notSame:!0}}checkPasswordEmpty(o){const s=o.get("password").value;return(0,A.xb)(s)?{emptyPassword:!0}:null}ngOnDestroy(){this.subs.filter(o=>(0,A.Uh)(o)).forEach(o=>o.unsubscribe())}}return _.\u0275fac=function(o){return new(o||_)(a.\u0275\u0275directiveInject(g.w1X),a.\u0275\u0275directiveInject(e.sK),a.\u0275\u0275directiveInject(x.k),a.\u0275\u0275directiveInject(R.T))},_.\u0275cmp=a.\u0275\u0275defineComponent({type:_,selectors:[["ds-profile-page-security-form"]],inputs:{passwordCanBeEmpty:"passwordCanBeEmpty",FORM_PREFIX:"FORM_PREFIX"},outputs:{isInvalid:"isInvalid",passwordValue:"passwordValue",currentPasswordValue:"currentPasswordValue"},decls:6,vars:7,consts:[[1,"mb-4",3,"type"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel",4,"ngIf"],["id","notSame","class","container-fluid text-danger",4,"ngIf"],["id","emptyPassword","class","container-fluid text-danger",4,"ngIf"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel"],["id","notSame",1,"container-fluid","text-danger"],["id","emptyPassword",1,"container-fluid","text-danger"]],template:function(o,s){1&o&&(a.\u0275\u0275elementStart(0,"ds-alert",0),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd(),a.\u0275\u0275template(3,b,1,5,"ds-form",1),a.\u0275\u0275template(4,U,3,3,"div",2),a.\u0275\u0275template(5,t,3,3,"div",3)),2&o&&(a.\u0275\u0275property("type","alert-info"),a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(2,5,s.FORM_PREFIX+"info")),a.\u0275\u0275advance(2),a.\u0275\u0275property("ngIf",s.formModel),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",s.formGroup.hasError("notSame")),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",(s.formGroup.dirty||s.formGroup.touched)&&s.formGroup.hasError("emptyPassword")))},directives:[B.w,L.O5,w.U,E.JL,E.sg],pipes:[e.X$],encapsulation:2}),_})()},18412:(W,M,r)=>{r.r(M),r.d(M,{ProfilePageComponent:()=>N});var a=r(35841),g=r(20069),A=r(16228),x=r(77007),R=r(21160),T=r(27303),y=r(53019),e=r(5496),B=r(25839),L=r(8183),w=r(28709),E=r(30835),b=r(84705),U=r(82094),t=r(70074),O=r(86553),_=r(41633),f=r(10210),o=r(25619),s=r(48723);function m(d,u){if(1&d&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"h3",12),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",4)(5,"div",5),t.\u0275\u0275text(6),t.\u0275\u0275pipe(7,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"div",6)(9,"div",12),t.\u0275\u0275element(10,"ds-profile-page-researcher-form",7),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementContainerEnd()),2&d){const i=t.\u0275\u0275nextContext(2).ngVar;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,3,"profile.head")),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(7,5,"profile.card.researcher")),t.\u0275\u0275advance(4),t.\u0275\u0275property("user",i)}}function F(d,u){if(1&d){const i=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",13)(1,"div",5),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",6)(5,"ds-profile-page-security-form",14),t.\u0275\u0275listener("isInvalid",function(v){return t.\u0275\u0275restoreView(i),t.\u0275\u0275nextContext(3).setInvalid(v)})("passwordValue",function(v){return t.\u0275\u0275restoreView(i),t.\u0275\u0275nextContext(3).setPasswordValue(v)})("currentPasswordValue",function(v){return t.\u0275\u0275restoreView(i),t.\u0275\u0275nextContext(3).setCurrentPasswordValue(v)}),t.\u0275\u0275elementEnd()()()}2&d&&(t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,2,"profile.card.security")),t.\u0275\u0275advance(3),t.\u0275\u0275property("FORM_PREFIX","profile.security.form."))}function V(d,u){if(1&d&&(t.\u0275\u0275elementStart(0,"li",18),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&d){const i=u.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(i.name)}}function l(d,u){if(1&d&&(t.\u0275\u0275elementStart(0,"div")(1,"h3",15),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"ul",16),t.\u0275\u0275template(5,V,2,1,"li",17),t.\u0275\u0275elementEnd()()),2&d){const i=t.\u0275\u0275nextContext().ngVar;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,2,"profile.groups.head")),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngForOf",i)}}function D(d,u){if(1&d&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,l,6,4,"div",3),t.\u0275\u0275elementContainerEnd()),2&d){const i=u.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",(null==i?null:i.length)>0)}}function K(d,u){if(1&d&&(t.\u0275\u0275elementStart(0,"li",18),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&d){const i=u.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(i.name)}}function j(d,u){if(1&d&&(t.\u0275\u0275elementStart(0,"div",20)(1,"h3",15),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"ul",16),t.\u0275\u0275template(5,K,2,1,"li",17),t.\u0275\u0275elementEnd()()),2&d){const i=t.\u0275\u0275nextContext().ngVar;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,2,"profile.special.groups.head")),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngForOf",i)}}function $(d,u){if(1&d&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,j,6,4,"div",19),t.\u0275\u0275elementContainerEnd()),2&d){const i=u.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",(null==i?null:i.length)>0)}}function X(d,u){if(1&d){const i=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275template(1,m,11,7,"ng-container",3),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementStart(3,"div",4)(4,"div",5),t.\u0275\u0275text(5),t.\u0275\u0275pipe(6,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"div",6),t.\u0275\u0275element(8,"ds-profile-page-metadata-form",7),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(9,F,6,4,"div",8),t.\u0275\u0275pipe(10,"async"),t.\u0275\u0275elementStart(11,"div",9)(12,"button",10),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(i),t.\u0275\u0275nextContext(2).updateProfile()}),t.\u0275\u0275element(13,"i",11),t.\u0275\u0275text(14),t.\u0275\u0275pipe(15,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(16,D,2,1,"ng-container",0),t.\u0275\u0275pipe(17,"async"),t.\u0275\u0275template(18,$,2,1,"ng-container",0),t.\u0275\u0275pipe(19,"async"),t.\u0275\u0275elementEnd()}if(2&d){const i=t.\u0275\u0275nextContext().ngVar,h=t.\u0275\u0275nextContext();let v,S;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(2,7,h.isResearcherProfileEnabled())),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(6,9,"profile.card.identify")),t.\u0275\u0275advance(3),t.\u0275\u0275property("user",i),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(10,11,h.canChangePassword$)),t.\u0275\u0275advance(5),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(15,13,"profile.form.submit"),""),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngVar",null==(v=t.\u0275\u0275pipeBind1(17,15,h.groupsRD$))||null==v.payload?null:v.payload.page),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngVar",null==(S=t.\u0275\u0275pipeBind1(19,17,h.specialGroupsRD$))||null==S.payload?null:S.payload.page)}}function G(d,u){if(1&d&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,X,20,19,"div",1),t.\u0275\u0275elementContainerEnd()),2&d){const i=u.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",i)}}let N=(()=>{class d{constructor(i,h,v,S,z,Q){this.authService=i,this.notificationsService=h,this.translate=v,this.epersonService=S,this.authorizationService=z,this.configurationService=Q,this.NOTIFICATIONS_PREFIX="profile.notifications.",this.PASSWORD_NOTIFICATIONS_PREFIX="profile.security.form.notifications.",this.isResearcherProfileEnabled$=new a.X(!1)}ngOnInit(){this.user$=this.authService.getAuthenticatedUserFromStore().pipe((0,x.h)(i=>(0,B.Uh)(i.id)),(0,R.w)(i=>this.epersonService.findById(i.id,!0,!0,(0,L.l)("groups"))),(0,e.g1)(),(0,e.xe)(),(0,T.b)(i=>this.currentUser=i)),this.groupsRD$=this.user$.pipe((0,R.w)(i=>i.groups)),this.canChangePassword$=this.user$.pipe((0,R.w)(i=>this.authorizationService.isAuthorized(b.i.CanChangePassword,i._links.self.href))),this.specialGroupsRD$=this.authService.getSpecialGroupsFromAuthStatus(),this.configurationService.findByPropertyName("researcher-profile.entity-type").pipe((0,e.hC)()).subscribe(i=>{this.isResearcherProfileEnabled$.next(i.hasSucceeded&&i.payload.values.length>0)})}updateProfile(){const i=this.metadataForm.updateProfile(),h=this.updateSecurity();!i&&!h&&this.notificationsService.warning(this.translate.instant(this.NOTIFICATIONS_PREFIX+"warning.no-changes.title"),this.translate.instant(this.NOTIFICATIONS_PREFIX+"warning.no-changes.content"))}setInvalid(i){this.invalidSecurity=i}updateSecurity(){const i=(0,B.UE)(this.password);return this.invalidSecurity&&this.notificationsService.error(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"error.general")),!this.invalidSecurity&&i&&this.epersonService.patch(this.currentUser,[{op:"add",path:"/password",value:{new_password:this.password,current_password:this.currentPassword}}]).pipe((0,e.hC)()).subscribe(v=>{v.hasSucceeded?this.notificationsService.success(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"success.title"),this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"success.content")):this.notificationsService.error(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"error.title"),this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"error.change-failed"))}),i}setPasswordValue(i){this.password=i}setCurrentPasswordValue(i){this.currentPassword=i}submit(){this.updateProfile()}isResearcherProfileEnabled(){return this.isResearcherProfileEnabled$.asObservable()}}return d.\u0275fac=function(i){return new(i||d)(t.\u0275\u0275directiveInject(w.e8),t.\u0275\u0275directiveInject(A.T),t.\u0275\u0275directiveInject(O.sK),t.\u0275\u0275directiveInject(y.k),t.\u0275\u0275directiveInject(E._),t.\u0275\u0275directiveInject(U.i))},d.\u0275cmp=t.\u0275\u0275defineComponent({type:d,selectors:[["ds-profile-page"]],viewQuery:function(i,h){if(1&i&&t.\u0275\u0275viewQuery(g.u,5),2&i){let v;t.\u0275\u0275queryRefresh(v=t.\u0275\u0275loadQuery())&&(h.metadataForm=v.first)}},decls:2,vars:3,consts:[[4,"ngVar"],["class","container",4,"ngIf"],[1,"container"],[4,"ngIf"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[3,"user"],["class","card mb-4 security-section",4,"ngIf"],[1,"col-12","text-right","pr-0"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-edit"],[1,"mb-4"],[1,"card","mb-4","security-section"],[3,"FORM_PREFIX","isInvalid","passwordValue","currentPasswordValue"],[1,"mt-4"],[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],["data-test","specialGroups",4,"ngIf"],["data-test","specialGroups"]],template:function(i,h){1&i&&(t.\u0275\u0275template(0,G,2,1,"ng-container",0),t.\u0275\u0275pipe(1,"async")),2&i&&t.\u0275\u0275property("ngVar",t.\u0275\u0275pipeBind1(1,1,h.user$))},directives:[_.g,f.O5,o.V,g.u,s.V,f.sg],pipes:[f.Ov,O.X$],styles:[""]}),d})()}}]);