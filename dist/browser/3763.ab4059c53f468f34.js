"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[3763],{3763:(O,_,r)=>{r.r(_),r.d(_,{BrowseByDatePageComponent:()=>I});var i=r(9246),e=r(70074),c=r(41633),s=r(10210),l=r(10957),m=r(81588),d=r(88908),g=r(82104),y=r(39592),B=r(76924),C=r(86553);function f(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"header",7),e.\u0275\u0275element(2,"ds-comcol-page-header",8)(3,"ds-themed-comcol-page-handle",9)(4,"ds-comcol-page-content",10)(5,"ds-comcol-page-content",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"ds-themed-comcol-page-browse-by",12),e.\u0275\u0275elementContainerEnd()),2&n){const t=o.ngIf;e.\u0275\u0275advance(2),e.\u0275\u0275property("name",t.name),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",t.handle)("title",t.type+".page.handle"),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",t.introductoryText)("hasInnerHtml",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",t.sidebarText)("hasInnerHtml",!0)("title","community.page.news"),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",t.id)("contentType",t.type)}}function u(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,f,7,10,"ng-container",6),e.\u0275\u0275elementContainerEnd()),2&n){const t=o.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t?null:t.payload)}}const h=function(n){return{startsWith:n}},E=function(n,o,t,a){return{collection:n,field:o,startsWith:t,value:a}};function b(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-browse-by",13),e.\u0275\u0275listener("prev",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().goPrev()})("next",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().goNext()}),e.\u0275\u0275pipe(1,"translate"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();let a,p;e.\u0275\u0275propertyInterpolate("title",e.\u0275\u0275pipeBind2(1,7,"browse.title",e.\u0275\u0275pureFunction4(25,E,(null==(a=e.\u0275\u0275pipeBind1(2,10,t.parent$))||null==a.payload?null:a.payload.name)||"",e.\u0275\u0275pipeBind1(3,12,"browse.metadata."+t.browseId),t.startsWith?e.\u0275\u0275pipeBind2(4,14,"browse.startsWith",e.\u0275\u0275pureFunction1(23,h,'"'+t.startsWith+'"')):"",t.value?'"'+t.value+'"':""))),e.\u0275\u0275propertyInterpolate("parentname",(null==(p=e.\u0275\u0275pipeBind1(5,17,t.parent$))||null==p.payload?null:p.payload.name)||""),e.\u0275\u0275property("objects$",void 0!==t.items$?t.items$:t.browseEntries$)("paginationConfig",e.\u0275\u0275pipeBind1(6,19,t.currentPagination$))("sortConfig",e.\u0275\u0275pipeBind1(7,21,t.currentSort$))("type",t.startsWithType)("startsWithOptions",t.startsWithOptions)}}function v(n,o){1&n&&(e.\u0275\u0275element(0,"ds-themed-loading",14),e.\u0275\u0275pipe(1,"translate")),2&n&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"loading.browse-by-page"))}function P(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"footer",16)(1,"div"),e.\u0275\u0275element(2,"ds-comcol-page-content",10),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext().ngIf;e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.copyrightText)("hasInnerHtml",!0)}}function D(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,P,3,2,"footer",15),e.\u0275\u0275elementContainerEnd()),2&n){const t=o.ngIf;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.copyrightText)}}function w(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,D,2,1,"ng-container",6),e.\u0275\u0275elementContainerEnd()),2&n){const t=o.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t?null:t.payload)}}let I=(()=>{class n extends i.BrowseByDatePageComponent{}return n.\u0275fac=function(){let o;return function(a){return(o||(o=e.\u0275\u0275getInheritedFactory(n)))(a||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-browse-by-date-page"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:9,vars:8,consts:[[1,"container"],[4,"ngVar"],[1,"comcol-page-browse-section"],[1,"browse-by-metadata","w-100"],["class","col-xs-12 w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","prev","next",4,"ngIf"],[3,"message",4,"ngIf"],[4,"ngIf"],[1,"comcol-header","border-bottom","mb-4","pb-4"],[3,"name"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[3,"id","contentType"],[1,"col-xs-12","w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","prev","next"],[3,"message"],["class","border-top my-5 pt-4",4,"ngIf"],[1,"border-top","my-5","pt-4"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,u,2,1,"ng-container",1),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementStart(3,"section",2)(4,"div",3),e.\u0275\u0275template(5,b,8,30,"ds-browse-by",4),e.\u0275\u0275template(6,v,2,3,"ds-themed-loading",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(7,w,2,1,"ng-container",1),e.\u0275\u0275pipe(8,"async"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(2,4,a.parent$)),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",a.startsWithOptions),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!a.startsWithOptions),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(8,6,a.parent$)))},directives:[c.g,s.O5,l.U,m.g,d.v,g.g,y.B,B.Z],pipes:[s.Ov,C.X$],styles:[""]}),n})()}}]);