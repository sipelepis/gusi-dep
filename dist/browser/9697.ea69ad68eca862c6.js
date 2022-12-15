"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[9697],{69697:(P,c,s)=>{s.r(c),s.d(c,{ObjectListComponent:()=>f});var r=s(60906),e=s(70074),p=s(99292),a=s(10210),m=s(25751),d=s(6183),g=s(99967),b=s(86481);function C(i,_){if(1&i){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-selectable-list-item-control",8),e.\u0275\u0275listener("deselectObject",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext(3).deselectObject.emit(l)})("selectObject",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext(3).selectObject.emit(l)}),e.\u0275\u0275elementEnd()}if(2&i){const o=e.\u0275\u0275nextContext(),t=o.index,l=o.$implicit,n=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("index",t)("object",l)("selectionConfig",n.selectionConfig)}}function j(i,_){if(1&i){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-importable-list-item-control",9),e.\u0275\u0275listener("importObject",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext(3).importObject.emit(l)}),e.\u0275\u0275elementEnd()}if(2&i){const o=e.\u0275\u0275nextContext().$implicit,t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("object",o)("importConfig",t.importConfig)}}function u(i,_){if(1&i){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"li",4),e.\u0275\u0275pipe(1,"dsBrowserOnly"),e.\u0275\u0275template(2,C,1,3,"ds-selectable-list-item-control",5),e.\u0275\u0275template(3,j,1,2,"ds-importable-list-item-control",6),e.\u0275\u0275elementStart(4,"ds-listable-object-component-loader",7),e.\u0275\u0275listener("contentChange",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext(2).contentChange.emit(l)}),e.\u0275\u0275elementEnd()()}if(2&i){const o=_.$implicit,t=_.index,l=_.last,n=e.\u0275\u0275nextContext(2);e.\u0275\u0275classProp("border-bottom",n.hasBorder&&!l),e.\u0275\u0275attribute("data-test",e.\u0275\u0275pipeBind1(1,11,"list-object")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.selectable),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.importable),e.\u0275\u0275advance(1),e.\u0275\u0275property("object",o)("viewMode",n.viewMode)("index",t)("context",n.context)("linkType",n.linkType)("listID",null==n.selectionConfig?null:n.selectionConfig.listId)}}const O=function(i){return{"ml-4":i}};function h(i,_){if(1&i&&(e.\u0275\u0275elementStart(0,"ul",2),e.\u0275\u0275template(1,u,5,13,"li",3),e.\u0275\u0275elementEnd()),2&i){const o=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,O,o.selectable)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==o.objects||null==o.objects.payload?null:o.objects.payload.page)}}let f=(()=>{class i extends r.ObjectListComponent{}return i.\u0275fac=function(){let _;return function(t){return(_||(_=e.\u0275\u0275getInheritedFactory(i)))(t||i)}}(),i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ds-object-list"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:10,consts:[[3,"paginationOptions","pageInfoState","collectionSize","objects","sortOptions","hideGear","hidePagerWhenSinglePage","hidePaginationDetail","showPaginator","pageChange","pageSizeChange","sortDirectionChange","sortFieldChange","paginationChange","prev","next"],["class","list-unstyled",3,"ngClass",4,"ngIf"],[1,"list-unstyled",3,"ngClass"],["class","mt-4 mb-4 d-flex",3,"border-bottom",4,"ngFor","ngForOf"],[1,"mt-4","mb-4","d-flex"],[3,"index","object","selectionConfig","deselectObject","selectObject",4,"ngIf"],[3,"object","importConfig","importObject",4,"ngIf"],[3,"object","viewMode","index","context","linkType","listID","contentChange"],[3,"index","object","selectionConfig","deselectObject","selectObject"],[3,"object","importConfig","importObject"]],template:function(o,t){1&o&&(e.\u0275\u0275elementStart(0,"ds-pagination",0),e.\u0275\u0275listener("pageChange",function(n){return t.onPageChange(n)})("pageSizeChange",function(n){return t.onPageSizeChange(n)})("sortDirectionChange",function(n){return t.onSortDirectionChange(n)})("sortFieldChange",function(n){return t.onSortFieldChange(n)})("paginationChange",function(n){return t.onPaginationChange(n)})("prev",function(){return t.goPrev()})("next",function(){return t.goNext()}),e.\u0275\u0275template(1,h,2,4,"ul",1),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("paginationOptions",t.config)("pageInfoState",null==t.objects?null:t.objects.payload)("collectionSize",null==t.objects||null==t.objects.payload?null:t.objects.payload.totalElements)("objects",t.objects)("sortOptions",t.sortConfig)("hideGear",t.hideGear)("hidePagerWhenSinglePage",t.hidePagerWhenSinglePage)("hidePaginationDetail",t.hidePaginationDetail)("showPaginator",t.showPaginator),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.objects?null:t.objects.hasSucceeded))},directives:[p.Q,a.O5,a.mk,a.sg,m._,d.C,g.p],pipes:[b.g],styles:["ds-selectable-list-item-control[_ngcontent-%COMP%]{z-index:1}"]}),i})()}}]);