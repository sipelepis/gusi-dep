(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[5237],{93459:(y,f,e)=>{"use strict";e.d(f,{m:()=>R});var c=e(31241),s=e(93498),a=e(60602),p=e(39300),n=e(54004),i=e(40367),P=e(24702),C=e(37500),O=e(68285),d=e(47229),E=e(5e3);let u=(()=>{class l{parse(r,o){const h=o.payload,g=Object.assign(new C.Y,h);return new d.tp(o.statusCode,void 0,g)}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275prov=E.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var v=e(43015),m=e(40520);let R=(()=>{class l{constructor(r,o,h){this.requestService=r,this.rdbService=o,this.halService=h,this.linkPath="registrations",this.searchByTokenPath="/search/findByToken?token="}getRegistrationEndpoint(){return this.halService.getEndpoint(this.linkPath)}getTokenSearchEndpoint(r){return this.halService.getEndpoint(this.linkPath).pipe((0,p.h)(o=>(0,P.UE)(o)),(0,n.U)(o=>`${o}${this.searchByTokenPath}${r}`))}registerEmail(r,o=null){const h=new C.Y;h.email=r;const g=this.requestService.generateRequestId(),M=this.getRegistrationEndpoint(),D=Object.create({});let I=new m.WM;return o&&(I=I.append("x-recaptcha-token",o)),D.headers=I,M.pipe((0,i.s)(T=>(0,P.Uh)(T)),(0,n.U)(T=>{const U=new a.xo(g,T,h,D);this.requestService.send(U)})).subscribe(),this.rdbService.buildFromRequestUUID(g).pipe((0,O.hC)())}searchByToken(r){const o=this.requestService.generateRequestId(),h=this.getTokenSearchEndpoint(r).pipe((0,i.s)(g=>(0,P.Uh)(g)));return h.subscribe(g=>{const M=new a.Gl(o,g);Object.assign(M,{getResponseParser:()=>u}),this.requestService.send(M,!0)}),this.rdbService.buildSingle(h).pipe((0,n.U)(g=>g.hasSucceeded&&(0,P.Uh)(g.payload)?Object.assign(g,{payload:Object.assign(g.payload,{token:r})}):g))}}return l.\u0275fac=function(r){return new(r||l)(E.\u0275\u0275inject(c.s),E.\u0275\u0275inject(v.Q),E.\u0275\u0275inject(s.q))},l.\u0275prov=E.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8136:(y,f,e)=>{"use strict";e.d(f,{K:()=>a});const s={RESOLVED:(0,e(79472).d)("dspace/resolver/RESOLVED")};class a{constructor(n,i){this.type=s.RESOLVED,this.payload={url:n,dso:i}}}},59508:(y,f,e)=>{"use strict";e.d(f,{o:()=>O});var c=e(83639),s=e(54004),a=e(24702),p=e(40747),n=e(27102),i=e(5e3),P=e(65620),C=e(74202);let O=(()=>{class d extends n.I{constructor(u,v,m){super(u,v,m),this.itemService=u,this.store=v,this.router=m}resolve(u,v){return super.resolve(u,v).pipe((0,s.U)(m=>{if(m.hasSucceeded&&(0,a.Uh)(m.payload)){const R=v.url,l=this.router.parseUrl((0,p.Tt)(m.payload)).toString();if(!R.startsWith(l)){const t=m.payload.uuid,r=R.substring(R.indexOf(t)+t.length,R.length);this.router.navigateByUrl(l+r)}}return m}))}}return d.\u0275fac=function(u){return new(u||d)(i.\u0275\u0275inject(c.S),i.\u0275\u0275inject(P.yh),i.\u0275\u0275inject(C.F0))},d.\u0275prov=i.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac}),d})()},27102:(y,f,e)=>{"use strict";e.d(f,{H:()=>C,I:()=>O});var c=e(83639),s=e(93369),a=e(68285),p=e(8136),n=e(5e3),i=e(65620),P=e(74202);const C=[(0,s.l)("owningCollection",{},(0,s.l)("parentCommunity",{},(0,s.l)("parentCommunity"))),(0,s.l)("relationships"),(0,s.l)("version",{},(0,s.l)("versionhistory")),(0,s.l)("thumbnail")];let O=(()=>{class d{constructor(u,v,m){this.itemService=u,this.store=v,this.router=m}resolve(u,v){const m=this.itemService.findById(u.params.id,!0,!1,...C).pipe((0,a.hC)());return m.subscribe(R=>{this.store.dispatch(new p.K(v.url,R.payload))}),m}}return d.\u0275fac=function(u){return new(u||d)(n.\u0275\u0275inject(c.S),n.\u0275\u0275inject(i.yh),n.\u0275\u0275inject(P.F0))},d.\u0275prov=n.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac}),d})()},5448:(y,f,e)=>{"use strict";e.r(f),e.d(f,{RegisterPageModule:()=>l});var c=e(69808),s=e(57981),a=e(74202),p=e(25330),n=e(5e3);function i(t,r){}let P=(()=>{class t extends p.F{getComponentName(){return"RegisterEmailComponent"}importThemedComponent(o){return e(46137)(`./${o}/app/register-page/register-email/register-email.component`)}importUnthemedComponent(){return e.e(8592).then(e.bind(e,11923))}}return t.\u0275fac=function(){let r;return function(h){return(r||(r=n.\u0275\u0275getInheritedFactory(t)))(h||t)}}(),t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["ds-themed-register-email"]],features:[n.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["vcr",""]],template:function(o,h){1&o&&n.\u0275\u0275template(0,i,0,0,"ng-template",null,0,n.\u0275\u0275templateRefExtractor)},encapsulation:2}),t})();var C=e(59508),O=e(15402);function d(t,r){}let E=(()=>{class t extends p.F{getComponentName(){return"CreateProfileComponent"}importThemedComponent(o){return e(98912)(`./${o}/app/register-page/create-profile/create-profile.component`)}importUnthemedComponent(){return e.e(7151).then(e.bind(e,67151))}}return t.\u0275fac=function(){let r;return function(h){return(r||(r=n.\u0275\u0275getInheritedFactory(t)))(h||t)}}(),t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["ds-themed-create-profile"]],features:[n.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["vcr",""]],template:function(o,h){1&o&&n.\u0275\u0275template(0,d,0,0,"ng-template",null,0,n.\u0275\u0275templateRefExtractor)},encapsulation:2}),t})();var u=e(26831);let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=n.\u0275\u0275defineInjector({providers:[C.o],imports:[[a.Bz.forChild([{path:"",component:P,data:{title:"register-email.title"}},{path:":token",component:E,canActivate:[u.E,O.J]}])]]}),t})();var m=e(4734),R=e(56980);let l=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=n.\u0275\u0275defineInjector({providers:[],imports:[[c.ez,s.m,v,m.E,R.ProfilePageModule]]}),t})()},98912:(y,f,e)=>{var c={"./custom/app/register-page/create-profile/create-profile.component":[51611,7151,1611]};function s(a){if(!e.o(c,a))return Promise.resolve().then(()=>{var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i});var p=c[a],n=p[0];return Promise.all(p.slice(1).map(e.e)).then(()=>e(n))}s.keys=()=>Object.keys(c),s.id=98912,y.exports=s},46137:(y,f,e)=>{var c={"./custom/app/register-page/register-email/register-email.component":[39454,8592,9454]};function s(a){if(!e.o(c,a))return Promise.resolve().then(()=>{var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i});var p=c[a],n=p[0];return Promise.all(p.slice(1).map(e.e)).then(()=>e(n))}s.keys=()=>Object.keys(c),s.id=46137,y.exports=s}}]);