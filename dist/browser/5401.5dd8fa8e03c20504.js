"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[5401],{35401:(x,i,c)=>{c.r(i),c.d(i,{BreadcrumbsComponent:()=>P});var l=c(48378),e=c(70074),_=c(41633),o=c(10210),d=c(37895),p=c(86553);function u(t,n){1&t&&e.\u0275\u0275elementContainer(0)}function s(t,n){1&t&&e.\u0275\u0275elementContainer(0)}function b(t,n){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,s,1,0,"ng-container",6),e.\u0275\u0275elementContainerEnd()),2&t){const r=n.$implicit,a=n.last;e.\u0275\u0275nextContext(2);const m=e.\u0275\u0275reference(4),M=e.\u0275\u0275reference(6);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",a?M:m)("ngTemplateOutletContext",r)}}const g=function(){return{text:"home.breadcrumbs",url:"/"}};function C(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"nav",4)(1,"ol",5),e.\u0275\u0275template(2,u,1,0,"ng-container",6),e.\u0275\u0275template(3,b,2,2,"ng-container",7),e.\u0275\u0275elementEnd()()),2&t){const r=e.\u0275\u0275nextContext().ngVar,a=e.\u0275\u0275reference(4),m=e.\u0275\u0275reference(6);e.\u0275\u0275advance(2),e.\u0275\u0275property("ngTemplateOutlet",(null==r?null:r.length)>0?a:m)("ngTemplateOutletContext",e.\u0275\u0275pureFunction0(3,g)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",r)}}function v(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"li",8)(1,"div",9)(2,"a",10),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd()()()),2&t){const r=n.text,a=n.url;e.\u0275\u0275advance(2),e.\u0275\u0275property("routerLink",a),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,2,r))}}function O(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"li",11)(1,"div",9)(2,"div",12),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd()()()),2&t){const r=n.text;e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,1,r))}}function f(t,n){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,C,4,4,"nav",1),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275template(3,v,5,4,"ng-template",null,2,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(5,O,5,3,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementContainerEnd()),2&t){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(2,1,r.showBreadcrumbs$))}}let P=(()=>{class t extends l.BreadcrumbsComponent{}return t.\u0275fac=function(){let n;return function(a){return(n||(n=e.\u0275\u0275getInheritedFactory(t)))(a||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ds-breadcrumbs"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[[4,"ngVar"],["aria-label","breadcrumb","class","nav-breadcrumb",4,"ngIf"],["breadcrumb",""],["activeBreadcrumb",""],["aria-label","breadcrumb",1,"nav-breadcrumb"],[1,"container","breadcrumb"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf"],[1,"breadcrumb-item"],[1,"breadcrumb-item-limiter"],[1,"text-truncate",3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"text-truncate"]],template:function(r,a){1&r&&(e.\u0275\u0275template(0,f,7,3,"ng-container",0),e.\u0275\u0275pipe(1,"async")),2&r&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,a.breadcrumbs$))},directives:[_.g,o.O5,o.tP,o.sg,d.yS],pipes:[o.Ov,p.X$],styles:['@charset "UTF-8";.nav-breadcrumb[_ngcontent-%COMP%]{background-color:var(--ds-breadcrumb-bg)}.breadcrumb[_ngcontent-%COMP%]{border-radius:0;margin-top:calc(-1 * var(--ds-content-spacing));padding-bottom:var(--ds-content-spacing/3);padding-top:var(--ds-content-spacing/3);background-color:var(--ds-breadcrumb-bg)}li.breadcrumb-item[_ngcontent-%COMP%]{display:flex}.breadcrumb-item-limiter[_ngcontent-%COMP%]{display:inline-block;max-width:var(--ds-breadcrumb-max-length)}.breadcrumb-item-limiter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{max-width:100%;display:block}li.breadcrumb-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:var(--cs-a-col)!important}li.breadcrumb-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus   [_ngcontent-%COMP%]:hover{color:var(--cs-a-col-hover)}a[_ngcontent-%COMP%]{color:var(--cs-a-col)!important}a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus   [_ngcontent-%COMP%]:hover{color:var(--cs-a-col-hover)}li.breadcrumb-item.active[_ngcontent-%COMP%]{color:var(--ds-breadcrumb-link-active-color)!important}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"\\2022"!important}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{display:block}']}),t})()}}]);