(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[5823],{9246:(D,E,e)=>{"use strict";e.r(E),e.d(E,{BrowseByDatePageComponent:()=>f});var g=e(6430),y=e(53426),m=e(25839),B=e(17373),C=e(51163),_=e(77338),U=e(57854),L=e(48358),c=e(1367),n=e(96099),M=e(19349),t=e(70074),x=e(37895),S=e(41633),R=e(10210),j=e(10957),A=e(81588),I=e(88908),F=e(82104),$=e(39592),N=e(76924),V=e(86553);function H(o,p){if(1&o&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"header",7),t.\u0275\u0275element(2,"ds-comcol-page-header",8)(3,"ds-themed-comcol-page-handle",9)(4,"ds-comcol-page-content",10)(5,"ds-comcol-page-content",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(6,"ds-themed-comcol-page-browse-by",12),t.\u0275\u0275elementContainerEnd()),2&o){const r=p.ngIf;t.\u0275\u0275advance(2),t.\u0275\u0275property("name",r.name),t.\u0275\u0275advance(1),t.\u0275\u0275property("content",r.handle)("title",r.type+".page.handle"),t.\u0275\u0275advance(1),t.\u0275\u0275property("content",r.introductoryText)("hasInnerHtml",!0),t.\u0275\u0275advance(1),t.\u0275\u0275property("content",r.sidebarText)("hasInnerHtml",!0)("title","community.page.news"),t.\u0275\u0275advance(1),t.\u0275\u0275property("id",r.id)("contentType",r.type)}}function K(o,p){if(1&o&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,H,7,10,"ng-container",6),t.\u0275\u0275elementContainerEnd()),2&o){const r=p.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==r?null:r.payload)}}const Y=function(o){return{startsWith:o}},Z=function(o,p,r,l){return{collection:o,field:p,startsWith:r,value:l}};function z(o,p){if(1&o){const r=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"ds-browse-by",13),t.\u0275\u0275listener("prev",function(){return t.\u0275\u0275restoreView(r),t.\u0275\u0275nextContext().goPrev()})("next",function(){return t.\u0275\u0275restoreView(r),t.\u0275\u0275nextContext().goNext()}),t.\u0275\u0275pipe(1,"translate"),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275pipe(4,"translate"),t.\u0275\u0275pipe(5,"async"),t.\u0275\u0275pipe(6,"async"),t.\u0275\u0275pipe(7,"async"),t.\u0275\u0275elementEnd()}if(2&o){const r=t.\u0275\u0275nextContext();let l,h;t.\u0275\u0275propertyInterpolate("title",t.\u0275\u0275pipeBind2(1,7,"browse.title",t.\u0275\u0275pureFunction4(25,Z,(null==(l=t.\u0275\u0275pipeBind1(2,10,r.parent$))||null==l.payload?null:l.payload.name)||"",t.\u0275\u0275pipeBind1(3,12,"browse.metadata."+r.browseId),r.startsWith?t.\u0275\u0275pipeBind2(4,14,"browse.startsWith",t.\u0275\u0275pureFunction1(23,Y,'"'+r.startsWith+'"')):"",r.value?'"'+r.value+'"':""))),t.\u0275\u0275propertyInterpolate("parentname",(null==(h=t.\u0275\u0275pipeBind1(5,17,r.parent$))||null==h.payload?null:h.payload.name)||""),t.\u0275\u0275property("objects$",void 0!==r.items$?r.items$:r.browseEntries$)("paginationConfig",t.\u0275\u0275pipeBind1(6,19,r.currentPagination$))("sortConfig",t.\u0275\u0275pipeBind1(7,21,r.currentSort$))("type",r.startsWithType)("startsWithOptions",r.startsWithOptions)}}function W(o,p){1&o&&(t.\u0275\u0275element(0,"ds-themed-loading",14),t.\u0275\u0275pipe(1,"translate")),2&o&&t.\u0275\u0275propertyInterpolate("message",t.\u0275\u0275pipeBind1(1,1,"loading.browse-by-page"))}function O(o,p){if(1&o&&(t.\u0275\u0275elementStart(0,"footer",16)(1,"div"),t.\u0275\u0275element(2,"ds-comcol-page-content",10),t.\u0275\u0275elementEnd()()),2&o){const r=t.\u0275\u0275nextContext().ngIf;t.\u0275\u0275advance(2),t.\u0275\u0275property("content",r.copyrightText)("hasInnerHtml",!0)}}function G(o,p){if(1&o&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,O,3,2,"footer",15),t.\u0275\u0275elementContainerEnd()),2&o){const r=p.ngIf;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",r.copyrightText)}}function i(o,p){if(1&o&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,G,2,1,"ng-container",6),t.\u0275\u0275elementContainerEnd()),2&o){const r=p.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==r?null:r.payload)}}let f=(()=>{class o extends g.BrowseByMetadataPageComponent{constructor(r,l,h,w,b,T,a){super(r,l,h,b,w,a),this.route=r,this.browseService=l,this.dsoService=h,this.router=w,this.paginationService=b,this.cdRef=T,this.appConfig=a,this.defaultMetadataKeys=["dc.date.issued"]}ngOnInit(){const r=new c.o("default",c.S.ASC);this.startsWithType=_.C4.date,this.updatePage((0,g.getBrowseSearchOptions)(this.defaultBrowseId,this.paginationConfig,r,this.fetchThumbnails)),this.currentPagination$=this.paginationService.getCurrentPagination(this.paginationConfig.id,this.paginationConfig),this.currentSort$=this.paginationService.getCurrentSort(this.paginationConfig.id,r),this.subs.push((0,y.a)([this.route.params,this.route.queryParams,this.route.data,this.currentPagination$,this.currentSort$]).pipe((0,L.U)(([l,h,w,b,T])=>[Object.assign({},l,h,w),b,T])).subscribe(([l,h,w])=>{const b=l.browseDefinition?l.browseDefinition.metadataKeys:this.defaultMetadataKeys;this.browseId=l.id||this.defaultBrowseId,this.startsWith=+l.startsWith||l.startsWith;const T=(0,g.browseParamsToOptions)(l,h,w,this.browseId,this.fetchThumbnails);this.updatePageWithItems(T,this.value,void 0),this.updateParent(l.scope),this.updateStartsWithOptions(this.browseId,b,l.scope)}))}updateStartsWithOptions(r,l,h){this.subs.push(this.browseService.getFirstItemFor(r,h).subscribe(w=>{let b=this.appConfig.browseBy.defaultLowerLimit;if((0,m.Uh)(w.payload)){const v=w.payload.firstMetadataValue(l);if((0,m.UE)(v)&&(0,n.qb)(v)){const P=new Date(v);b=isNaN(P.getUTCFullYear())?b:P.getUTCFullYear()}}const T=[],a=(new Date).getUTCFullYear(),d=5*Math.floor((a-this.appConfig.browseBy.oneYearLimit)/5),s=10*Math.floor((a-this.appConfig.browseBy.fiveYearLimit)/10);b-=b<=s?10:b<=d?5:1;let u=a;for(;u>b;)T.push(u),u<=s?u-=10:u<=d?u-=5:u--;(0,m.UE)(T)&&(this.startsWithOptions=T,this.cdRef.detectChanges())}))}}return o.\u0275fac=function(r){return new(r||o)(t.\u0275\u0275directiveInject(x.gz),t.\u0275\u0275directiveInject(B.I),t.\u0275\u0275directiveInject(C.D),t.\u0275\u0275directiveInject(x.F0),t.\u0275\u0275directiveInject(U.N),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(M.q))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["ds-browse-by-date-page"]],features:[t.\u0275\u0275InheritDefinitionFeature],decls:9,vars:8,consts:[[1,"container"],[4,"ngVar"],[1,"comcol-page-browse-section"],[1,"browse-by-metadata","w-100"],["class","col-xs-12 w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","prev","next",4,"ngIf"],[3,"message",4,"ngIf"],[4,"ngIf"],[1,"comcol-header","border-bottom","mb-4","pb-4"],[3,"name"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[3,"id","contentType"],[1,"col-xs-12","w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","prev","next"],[3,"message"],["class","border-top my-5 pt-4",4,"ngIf"],[1,"border-top","my-5","pt-4"]],template:function(r,l){1&r&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275template(1,K,2,1,"ng-container",1),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementStart(3,"section",2)(4,"div",3),t.\u0275\u0275template(5,z,8,30,"ds-browse-by",4),t.\u0275\u0275template(6,W,2,3,"ds-themed-loading",5),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(7,i,2,1,"ng-container",1),t.\u0275\u0275pipe(8,"async"),t.\u0275\u0275elementEnd()),2&r&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("ngVar",t.\u0275\u0275pipeBind1(2,4,l.parent$)),t.\u0275\u0275advance(4),t.\u0275\u0275property("ngIf",l.startsWithOptions),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!l.startsWithOptions),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngVar",t.\u0275\u0275pipeBind1(8,6,l.parent$)))},directives:[S.g,R.O5,j.U,A.g,I.v,F.g,$.B,N.Z],pipes:[R.Ov,V.X$],styles:[""]}),o})()},65823:(D,E,e)=>{"use strict";e.r(E),e.d(E,{BrowseByPageModule:()=>T});var g=e(37895),y=e(51163),m=e(25839),B=e(21160),C=e(48358),_=e(5496),U=e(9237),L=e(49296),c=e(70074),n=e(86553);let M=(()=>{class a{constructor(s,u,v){this.dsoService=s,this.translate=u,this.browseDefinitionService=v}canActivate(s,u){const v=s.data.title,P=s.params.id||s.queryParams.id||s.data.id;let X;X=(0,m.xI)(s.data.browseDefinition)&&(0,m.Uh)(P)?this.browseDefinitionService.findById(P).pipe((0,_.Gp)()):(0,U.of)(s.data.browseDefinition);const J=s.queryParams.scope,Q=s.queryParams.value,k=this.translate.instant("browse.metadata."+P);return X.pipe((0,B.w)(q=>(0,m.Uh)(J)?this.dsoService.findById(J).pipe((0,_.xw)()).pipe((0,C.U)(ee=>(s.data=this.createData(v,P,q,ee.payload.name,k,Q,s),!0))):(s.data=this.createData(v,P,q,"",k,Q,s),(0,U.of)(!0))))}createData(s,u,v,P,X,J,Q){return Object.assign({},Q.data,{title:s,id:u,browseDefinition:v,collection:P,field:X,value:(0,m.Uh)(J)?`"${J}"`:""})}}return a.\u0275fac=function(s){return new(s||a)(c.\u0275\u0275inject(y.D),c.\u0275\u0275inject(n.sK),c.\u0275\u0275inject(L.v))},a.\u0275prov=c.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a})();var t=e(45234),x=e(61562);let S=(()=>{class a{constructor(s,u){this.breadcrumbService=s,this.dataService=u}resolve(s,u){const v=s.queryParams.scope;if((0,m.Uh)(v))return this.dataService.findById(v).pipe((0,_.xw)(),(0,_.xe)(),(0,C.U)(P=>({provider:this.breadcrumbService,key:P,url:(0,x.Y4)(P)})))}}return a.\u0275fac=function(s){return new(s||a)(c.\u0275\u0275inject(t.B),c.\u0275\u0275inject(y.D))},a.\u0275prov=c.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a})();var R=e(64561),j=e(17241);let A=(()=>{class a extends R.t{constructor(s){super(s),this.breadcrumbService=s}resolve(s,u){return s.data=Object.assign({},s.data,{breadcrumbKey:s.data.breadcrumbKey+"."+s.params.id}),super.resolve(s,u)}}return a.\u0275fac=function(s){return new(s||a)(c.\u0275\u0275inject(j.d))},a.\u0275prov=c.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac}),a})();var I=e(46533);function F(a,d){}let $=(()=>{class a extends I.F{getComponentName(){return"BrowseBySwitcherComponent"}importThemedComponent(s){return e(12960)(`./${s}/app/browse-by/browse-by-switcher/browse-by-switcher.component`)}importUnthemedComponent(){return e.e(8592).then(e.bind(e,85012))}}return a.\u0275fac=function(){let d;return function(u){return(d||(d=c.\u0275\u0275getInheritedFactory(a)))(u||a)}}(),a.\u0275cmp=c.\u0275\u0275defineComponent({type:a,selectors:[["ds-themed-browse-by-switcher"]],features:[c.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["vcr",""]],template:function(s,u){1&s&&c.\u0275\u0275template(0,F,0,0,"ng-template",null,0,c.\u0275\u0275templateRefExtractor)},encapsulation:2}),a})(),N=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=c.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=c.\u0275\u0275defineInjector({providers:[A,S],imports:[[g.Bz.forChild([{path:"",resolve:{breadcrumb:S},children:[{path:":id",component:$,canActivate:[M],resolve:{breadcrumb:A},data:{title:"browse.title.page",breadcrumbKey:"browse.metadata"}}]}])]]}),a})();var V=e(10210),H=e(54869),K=e(66004),Y=e(6430),Z=e(9246),z=e(39570),W=e(70655),O=e(23863);function G(a,d){}let i=class extends I.F{getComponentName(){return"BrowseByMetadataPageComponent"}importThemedComponent(d){return e(64818)(`./${d}/app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component`)}importUnthemedComponent(){return Promise.resolve().then(e.bind(e,6430))}};function f(a,d){}i.\u0275fac=function(){let a;return function(s){return(a||(a=c.\u0275\u0275getInheritedFactory(i)))(s||i)}}(),i.\u0275cmp=c.\u0275\u0275defineComponent({type:i,selectors:[["ds-themed-browse-by-metadata-page"]],features:[c.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["vcr",""]],template:function(d,s){1&d&&c.\u0275\u0275template(0,G,0,0,"ng-template",null,0,c.\u0275\u0275templateRefExtractor)},encapsulation:2}),i=(0,W.__decorate)([(0,O.du)(O.Zt.Metadata)],i);let o=class extends I.F{getComponentName(){return"BrowseByDatePageComponent"}importThemedComponent(d){return e(10117)(`./${d}/app/browse-by/browse-by-date-page/browse-by-date-page.component`)}importUnthemedComponent(){return Promise.resolve().then(e.bind(e,9246))}};function p(a,d){}o.\u0275fac=function(){let a;return function(s){return(a||(a=c.\u0275\u0275getInheritedFactory(o)))(s||o)}}(),o.\u0275cmp=c.\u0275\u0275defineComponent({type:o,selectors:[["ds-themed-browse-by-metadata-page"]],features:[c.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["vcr",""]],template:function(d,s){1&d&&c.\u0275\u0275template(0,f,0,0,"ng-template",null,0,c.\u0275\u0275templateRefExtractor)},encapsulation:2}),o=(0,W.__decorate)([(0,O.du)(O.Zt.Date)],o);let r=class extends I.F{getComponentName(){return"BrowseByTitlePageComponent"}importThemedComponent(d){return e(75420)(`./${d}/app/browse-by/browse-by-title-page/browse-by-title-page.component`)}importUnthemedComponent(){return Promise.resolve().then(e.bind(e,54869))}};r.\u0275fac=function(){let a;return function(s){return(a||(a=c.\u0275\u0275getInheritedFactory(r)))(s||r)}}(),r.\u0275cmp=c.\u0275\u0275defineComponent({type:r,selectors:[["ds-themed-browse-by-title-page"]],features:[c.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["vcr",""]],template:function(d,s){1&d&&c.\u0275\u0275template(0,p,0,0,"ng-template",null,0,c.\u0275\u0275templateRefExtractor)},encapsulation:2}),r=(0,W.__decorate)([(0,O.du)(O.Zt.Title)],r);const l=[H.BrowseByTitlePageComponent,Y.BrowseByMetadataPageComponent,Z.BrowseByDatePageComponent,i,o,r];let h=(()=>{class a{static withEntryComponents(){return{ngModule:K.m,providers:l.map(s=>({provide:s}))}}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=c.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=c.\u0275\u0275defineInjector({imports:[[V.ez,z.H,K.m]]}),a})();var w=e(89551),b=e(17373);let T=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=c.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=c.\u0275\u0275defineInjector({providers:[w.S,b.I,M],imports:[[N,h.withEntryComponents()]]}),a})()},54869:(D,E,e)=>{"use strict";e.r(E),e.d(E,{BrowseByTitlePageComponent:()=>G});var g=e(53426),y=e(25839),m=e(6430),B=e(51163),C=e(17373),_=e(1367),U=e(57854),L=e(48358),c=e(19349),n=e(70074),M=e(37895),t=e(41633),x=e(10210),S=e(10957),R=e(81588),j=e(88908),A=e(82104),I=e(39592),F=e(76924),$=e(86553);function N(i,f){if(1&i&&(n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275elementStart(1,"header",7),n.\u0275\u0275element(2,"ds-comcol-page-header",8)(3,"ds-themed-comcol-page-handle",9)(4,"ds-comcol-page-content",10)(5,"ds-comcol-page-content",11),n.\u0275\u0275elementEnd(),n.\u0275\u0275element(6,"ds-themed-comcol-page-browse-by",12),n.\u0275\u0275elementContainerEnd()),2&i){const o=f.ngIf;n.\u0275\u0275advance(2),n.\u0275\u0275property("name",o.name),n.\u0275\u0275advance(1),n.\u0275\u0275property("content",o.handle)("title",o.type+".page.handle"),n.\u0275\u0275advance(1),n.\u0275\u0275property("content",o.introductoryText)("hasInnerHtml",!0),n.\u0275\u0275advance(1),n.\u0275\u0275property("content",o.sidebarText)("hasInnerHtml",!0)("title","community.page.news"),n.\u0275\u0275advance(1),n.\u0275\u0275property("id",o.id)("contentType",o.type)}}function V(i,f){if(1&i&&(n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275template(1,N,7,10,"ng-container",6),n.\u0275\u0275elementContainerEnd()),2&i){const o=f.ngVar;n.\u0275\u0275advance(1),n.\u0275\u0275property("ngIf",null==o?null:o.payload)}}const H=function(i){return{startsWith:i}},K=function(i,f,o,p){return{collection:i,field:f,startsWith:o,value:p}};function Y(i,f){if(1&i){const o=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementStart(0,"ds-browse-by",13),n.\u0275\u0275listener("prev",function(){return n.\u0275\u0275restoreView(o),n.\u0275\u0275nextContext().goPrev()})("next",function(){return n.\u0275\u0275restoreView(o),n.\u0275\u0275nextContext().goNext()}),n.\u0275\u0275pipe(1,"translate"),n.\u0275\u0275pipe(2,"async"),n.\u0275\u0275pipe(3,"translate"),n.\u0275\u0275pipe(4,"translate"),n.\u0275\u0275pipe(5,"async"),n.\u0275\u0275pipe(6,"async"),n.\u0275\u0275pipe(7,"async"),n.\u0275\u0275elementEnd()}if(2&i){const o=n.\u0275\u0275nextContext();let p,r;n.\u0275\u0275propertyInterpolate("title",n.\u0275\u0275pipeBind2(1,7,"browse.title",n.\u0275\u0275pureFunction4(25,K,(null==(p=n.\u0275\u0275pipeBind1(2,10,o.parent$))||null==p.payload?null:p.payload.name)||"",n.\u0275\u0275pipeBind1(3,12,"browse.metadata."+o.browseId),o.startsWith?n.\u0275\u0275pipeBind2(4,14,"browse.startsWith",n.\u0275\u0275pureFunction1(23,H,'"'+o.startsWith+'"')):"",o.value?'"'+o.value+'"':""))),n.\u0275\u0275propertyInterpolate("parentname",(null==(r=n.\u0275\u0275pipeBind1(5,17,o.parent$))||null==r.payload?null:r.payload.name)||""),n.\u0275\u0275property("objects$",void 0!==o.items$?o.items$:o.browseEntries$)("paginationConfig",n.\u0275\u0275pipeBind1(6,19,o.currentPagination$))("sortConfig",n.\u0275\u0275pipeBind1(7,21,o.currentSort$))("type",o.startsWithType)("startsWithOptions",o.startsWithOptions)}}function Z(i,f){1&i&&(n.\u0275\u0275element(0,"ds-themed-loading",14),n.\u0275\u0275pipe(1,"translate")),2&i&&n.\u0275\u0275propertyInterpolate("message",n.\u0275\u0275pipeBind1(1,1,"loading.browse-by-page"))}function z(i,f){if(1&i&&(n.\u0275\u0275elementStart(0,"footer",16)(1,"div"),n.\u0275\u0275element(2,"ds-comcol-page-content",10),n.\u0275\u0275elementEnd()()),2&i){const o=n.\u0275\u0275nextContext().ngIf;n.\u0275\u0275advance(2),n.\u0275\u0275property("content",o.copyrightText)("hasInnerHtml",!0)}}function W(i,f){if(1&i&&(n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275template(1,z,3,2,"footer",15),n.\u0275\u0275elementContainerEnd()),2&i){const o=f.ngIf;n.\u0275\u0275advance(1),n.\u0275\u0275property("ngIf",o.copyrightText)}}function O(i,f){if(1&i&&(n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275template(1,W,2,1,"ng-container",6),n.\u0275\u0275elementContainerEnd()),2&i){const o=f.ngVar;n.\u0275\u0275advance(1),n.\u0275\u0275property("ngIf",null==o?null:o.payload)}}let G=(()=>{class i extends m.BrowseByMetadataPageComponent{constructor(o,p,r,l,h,w){super(o,p,r,l,h,w),this.route=o,this.browseService=p,this.dsoService=r,this.paginationService=l,this.router=h,this.appConfig=w}ngOnInit(){const o=new _.o("dc.title",_.S.ASC);this.updatePage((0,m.getBrowseSearchOptions)(this.defaultBrowseId,this.paginationConfig,o,this.fetchThumbnails)),this.currentPagination$=this.paginationService.getCurrentPagination(this.paginationConfig.id,this.paginationConfig),this.currentSort$=this.paginationService.getCurrentSort(this.paginationConfig.id,o),this.subs.push((0,g.a)([this.route.params,this.route.queryParams,this.currentPagination$,this.currentSort$]).pipe((0,L.U)(([p,r,l,h])=>[Object.assign({},p,r),l,h])).subscribe(([p,r,l])=>{this.startsWith=+p.startsWith||p.startsWith,this.browseId=p.id||this.defaultBrowseId,this.updatePageWithItems((0,m.browseParamsToOptions)(p,r,l,this.browseId,this.fetchThumbnails),void 0,void 0),this.updateParent(p.scope)})),this.updateStartsWithTextOptions()}ngOnDestroy(){this.subs.filter(o=>(0,y.Uh)(o)).forEach(o=>o.unsubscribe())}}return i.\u0275fac=function(o){return new(o||i)(n.\u0275\u0275directiveInject(M.gz),n.\u0275\u0275directiveInject(C.I),n.\u0275\u0275directiveInject(B.D),n.\u0275\u0275directiveInject(U.N),n.\u0275\u0275directiveInject(M.F0),n.\u0275\u0275directiveInject(c.q))},i.\u0275cmp=n.\u0275\u0275defineComponent({type:i,selectors:[["ds-browse-by-title-page"]],features:[n.\u0275\u0275InheritDefinitionFeature],decls:9,vars:8,consts:[[1,"container"],[4,"ngVar"],[1,"comcol-page-browse-section"],[1,"browse-by-metadata","w-100"],["class","col-xs-12 w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","prev","next",4,"ngIf"],[3,"message",4,"ngIf"],[4,"ngIf"],[1,"comcol-header","border-bottom","mb-4","pb-4"],[3,"name"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[3,"id","contentType"],[1,"col-xs-12","w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","prev","next"],[3,"message"],["class","border-top my-5 pt-4",4,"ngIf"],[1,"border-top","my-5","pt-4"]],template:function(o,p){1&o&&(n.\u0275\u0275elementStart(0,"div",0),n.\u0275\u0275template(1,V,2,1,"ng-container",1),n.\u0275\u0275pipe(2,"async"),n.\u0275\u0275elementStart(3,"section",2)(4,"div",3),n.\u0275\u0275template(5,Y,8,30,"ds-browse-by",4),n.\u0275\u0275template(6,Z,2,3,"ds-themed-loading",5),n.\u0275\u0275elementEnd()(),n.\u0275\u0275template(7,O,2,1,"ng-container",1),n.\u0275\u0275pipe(8,"async"),n.\u0275\u0275elementEnd()),2&o&&(n.\u0275\u0275advance(1),n.\u0275\u0275property("ngVar",n.\u0275\u0275pipeBind1(2,4,p.parent$)),n.\u0275\u0275advance(4),n.\u0275\u0275property("ngIf",p.startsWithOptions),n.\u0275\u0275advance(1),n.\u0275\u0275property("ngIf",!p.startsWithOptions),n.\u0275\u0275advance(1),n.\u0275\u0275property("ngVar",n.\u0275\u0275pipeBind1(8,6,p.parent$)))},directives:[t.g,x.O5,S.U,R.g,j.v,A.g,I.B,F.Z],pipes:[x.Ov,$.X$],styles:[""]}),i})()},10117:(D,E,e)=>{var g={"./custom/app/browse-by/browse-by-date-page/browse-by-date-page.component":[43473,3473],"./dspace/app/browse-by/browse-by-date-page/browse-by-date-page.component":[81500,1500],"./gusi/app/browse-by/browse-by-date-page/browse-by-date-page.component":[3763,3763]};function y(m){if(!e.o(g,m))return Promise.resolve().then(()=>{var _=new Error("Cannot find module '"+m+"'");throw _.code="MODULE_NOT_FOUND",_});var B=g[m],C=B[0];return e.e(B[1]).then(()=>e(C))}y.keys=()=>Object.keys(g),y.id=10117,D.exports=y},64818:(D,E,e)=>{var g={"./custom/app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component":[88752,8752],"./dspace/app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component":[75643,5643],"./gusi/app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component":[42534,2534]};function y(m){if(!e.o(g,m))return Promise.resolve().then(()=>{var _=new Error("Cannot find module '"+m+"'");throw _.code="MODULE_NOT_FOUND",_});var B=g[m],C=B[0];return e.e(B[1]).then(()=>e(C))}y.keys=()=>Object.keys(g),y.id=64818,D.exports=y},12960:(D,E,e)=>{var g={"./custom/app/browse-by/browse-by-switcher/browse-by-switcher.component":[8834,8592,8834],"./dspace/app/browse-by/browse-by-switcher/browse-by-switcher.component":[36838,8592,6838],"./gusi/app/browse-by/browse-by-switcher/browse-by-switcher.component":[85913,8592,5913]};function y(m){if(!e.o(g,m))return Promise.resolve().then(()=>{var _=new Error("Cannot find module '"+m+"'");throw _.code="MODULE_NOT_FOUND",_});var B=g[m],C=B[0];return Promise.all(B.slice(1).map(e.e)).then(()=>e(C))}y.keys=()=>Object.keys(g),y.id=12960,D.exports=y},75420:(D,E,e)=>{var g={"./custom/app/browse-by/browse-by-title-page/browse-by-title-page.component":[34295,4295],"./dspace/app/browse-by/browse-by-title-page/browse-by-title-page.component":[15327,5327],"./gusi/app/browse-by/browse-by-title-page/browse-by-title-page.component":[34654,4654]};function y(m){if(!e.o(g,m))return Promise.resolve().then(()=>{var _=new Error("Cannot find module '"+m+"'");throw _.code="MODULE_NOT_FOUND",_});var B=g[m],C=B[0];return e.e(B[1]).then(()=>e(C))}y.keys=()=>Object.keys(g),y.id=75420,D.exports=y}}]);