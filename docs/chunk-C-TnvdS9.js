import{$ as Qc,$t as ii,B as Ln,C as FE,Cn as oC,Ct as YA,D as Hm,Dn as p,E as HR,Et as Yi,Fn as ry,Ft as ae,G as Nc,Gt as fe,Ht as eC,J as O6,Jn as xO,Kn as wF,L as L6,Lt as b,Mt as _t,N as J$1,O as Hn$1,On as pg,P as JA,Pt as aN,Q as QN,Qt as iR,R as LA,Rn as sl,S as F6,Sn as ny,St as Xt,T as Gh,Tn as oe,U as N,Un as vC,V as Lt$1,Vn as tR,Vt as bu,Wt as es,X as PI,Y as P6,Yn as xe,Yt as ht,Z as PO,Zn as y,Zt as iN,_n as nR,_t as WE,at as Rh,bt as Xe,c as BA,ct as TR,d as Co,dt as UR,en as ip,er as z,et as Qt,fn as le,ft as Uh,gn as nC,gt as W,h as DF,hn as mb,ht as Vh,i as AR,in as jh,it as Re,jn as rC,k as IC,kn as qE,l as CC,ln as lC,m as DC,mn as mR,n as $m,nr as ze,nt as R6,o as Ao,on as k6,ot as Rs,p as D,pt as Un$1,r as A,rn as jO,rr as zh,rt as RR,sn as kA,t as qe,tt as R$1,un as lM,ut as UA,v as Dn$1,vn as ne,vt as X,wt as Yc,y as E_,yn as ni,yt as XE,z as LR,zt as bn$1}from"./main-D4GPG3XA.js";import{$ as si,A as Zh,B as hh,C as Wi,D as Y,F as bo,G as mo,H as jn$1,I as ee,J as or,L as fe$1,M as al,N as be,P as bh,Q as rl,R as he,S as Vo,T as Xe$1,U as kr,V as ie,W as lt$1,Y as qb,Z as re,_ as Ui,a as Io,at as yt,b as Vi,c as Lh,d as P,et as st$1,f as Pn$1,h as St,it as xi,j as Zn$1,k as Yn,m as Rr,o as J$2,ot as zh$1,p as Qr,q as ns,r as Fa,rt as xe$1,s as Jn$1,t as $e,u as No,v as Uo,w as Xb,x as Vn$1,y as Ut,z as hg}from"./chunk-CyzHNgmZ.js";var J=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Tt=(()=>{class n extends xe$1{_elementRef=p(Xe);_focusTrapFactory=p(Fa);_config;_interactivityChecker=p(bo);_ngZone=p(ne);_focusMonitor=p(he);_renderer=p(ht);_changeDetectorRef=p(Hn$1);_injector=p(le);_platform=p(P);_document=p(X);_portalOutlet;_focusTrapped=new J$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=p(J,{optional:!0})||new J,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{i(),o(),e.removeAttribute(`tabindex`)},i=this._renderer.listen(e,`blur`,a),o=this._renderer.listen(e,`mousedown`,a)})),e.focus(t)}_focusByCssSelector(e,t){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,t)}_trapFocus(e){this._isDestroyed||Yi(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let a=xi(),i=this._elementRef.nativeElement;(!a||a===this._document.body||a===i||i.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=xi();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=xi()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,a){}return Rh({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(a,i){if(a&1&&nC(Wi,7),a&2){let o;rC(o=oC())&&(i._portalOutlet=o.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(a,i){a&2&&Ao(`id`,i._config.id||null)(`role`,i._config.role)(`aria-modal`,i._config.ariaModal)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null)},features:[ze],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(a,i){a&1&&FE(0,e,0,0,`ng-template`,0)},dependencies:[Wi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var se=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new J$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(r,e){this.overlayRef=r,this.config=e,this.disableClose=e.disableClose,this.backdropClick=r.backdropClick(),this.keydownEvents=r.keydownEvents(),this.outsidePointerEvents=r.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!yt(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=r.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(r,e){if(this._canClose(r)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(r),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(r=``,e=``){return this.overlayRef.updateSize({width:r,height:e}),this}addPanelClass(r){return this.overlayRef.addPanelClass(r),this}removePanelClass(r){return this.overlayRef.removePanelClass(r),this}_canClose(r){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(r,e,this.componentInstance))}};var fn=new D(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=p(le);return()=>kr(n)}});var bn=new D(`DialogData`);var yn=new D(`DefaultDialogConfig`);function vn(n){let r=xe(n),e=new fe;return{valueSignal:r,get value(){return r()},change:e,ngOnDestroy(){e.complete()}}}var Nt=(()=>{class n{_injector=p(le);_defaultOptions=p(yn,{optional:!0});_parentDialog=p(n,{optional:!0,skipSelf:!0});_overlayContainer=p(Rr);_idGenerator=p(lt$1);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new J$1;_afterOpenedAtThisLevel=new J$1;_ariaHiddenElements=new Map;_scrollStrategy=p(fn);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=ii(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(bu(void 0)));open(e,t){let a=this._defaultOptions||new J;t=y(y({},a),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let i=this._getOverlayConfig(t),o=re(this._injector,i),d=new se(o,t),s=this._attachContainer(o,d,t);if(d.containerInstance=s,!this.openDialogs.length){let g=this._overlayContainer.getContainerElement();s._focusTrapped?s._focusTrapped.pipe(bn$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(g)}):this._hideNonDialogContentFromAssistiveTechnology(g)}return this._attachDialogContent(e,d,s,t),this.openDialogs.push(d),d.closed.subscribe(()=>this._removeOpenDialog(d,!0)),this.afterOpened.next(d),d}closeAll(){Vt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Vt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Vt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new ie({positionStrategy:e.positionStrategy||Zn$1().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,a){let i=a.injector||a.viewContainerRef?.injector,o=[{provide:J,useValue:a},{provide:se,useValue:t},{provide:Yn,useValue:e}],d;a.container?typeof a.container==`function`?d=a.container:(d=a.container.type,o.push(...a.container.providers(a))):d=Tt;let s=new Ut(d,a.viewContainerRef,le.create({parent:i||this._injector,providers:o}));return e.attach(s).instance}_attachDialogContent(e,t,a,i){if(e instanceof Co){let o=this._createInjector(i,t,a,void 0),d={$implicit:i.data,dialogRef:t};i.templateContext&&(d=y(y({},d),typeof i.templateContext==`function`?i.templateContext():i.templateContext)),a.attachTemplatePortal(new ee(e,null,d,o))}else{let o=this._createInjector(i,t,a,this._injector),d=a.attachComponentPortal(new Ut(e,i.viewContainerRef,o,null,i.bindings));t.componentRef=d,t.componentInstance=d.instance}}_createInjector(e,t,a,i){let o=e.injector||e.viewContainerRef?.injector,d=[{provide:bn,useValue:e.data},{provide:se,useValue:t}];return e.providers&&(typeof e.providers==`function`?d.push(...e.providers(t,e,a)):d.push(...e.providers)),e.direction&&(!o||!o.get(St,null,{optional:!0}))&&d.push({provide:St,useValue:vn(e.direction)}),le.create({parent:o||i,providers:d})}_removeOpenDialog(e,t){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((i,o)=>{i?o.setAttribute(`aria-hidden`,i):o.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let a=t.length-1;a>-1;a--){let i=t[a];i!==e&&i.nodeName!==`SCRIPT`&&i.nodeName!==`STYLE`&&!i.hasAttribute(`aria-live`)&&!i.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(i,i.getAttribute(`aria-hidden`)),i.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=W({token:n,factory:n.ɵfac})}return n})();function Vt(n,r){let e=n.length;for(;e--;)r(n[e])}var Ua=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Xt({type:n});static ɵinj=_t({providers:[Nt],imports:[Jn$1,Ui,Io,Ui]})}return n})();var ot=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Ft=`mdc-dialog--open`;var Za=`mdc-dialog--opening`;var Xa=`mdc-dialog--closing`;var Dn=150;var Cn=75;var wn=(()=>{class n extends Tt{_animationStateChanged=new fe;_animationsEnabled=!J$2();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?en(this._config.enterAnimationDuration)??Dn:0;_exitAnimationDuration=this._animationsEnabled?en(this._config.exitAnimationDuration)??Cn:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ja,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Za,Ft)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ft),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ft),this._animationsEnabled?(this._hostElement.style.setProperty(Ja,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Xa)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Za,Xa)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(a){return(e||(e=Ln(n)))(a||n)}})();static ɵcmp=(function(){function e(t,a){}return Rh({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(a,i){a&2&&(XE(`id`,i._config.id),Ao(`aria-modal`,i._config.ariaModal)(`role`,i._config.role)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null),es(`_mat-animation-noopable`,!i._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,i._actionSectionCount>0))},features:[ze],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(a,i){a&1&&(Nc(0,`div`,0)(1,`div`,1),FE(2,e,0,0,`ng-template`,2),jh()())},dependencies:[Wi],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Ja=`--mat-dialog-transition-duration`;function en(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?fe$1(n.substring(0,n.length-2)):n.endsWith(`s`)?fe$1(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var rt=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(rt||{});var ye=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ni(1);_beforeClosed=new ni(1);_result;_closeFallbackTimeout;_state=rt.OPEN;_closeInteractionType;constructor(r,e,t){this._ref=r,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=r.id,r.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(Re(a=>a.state===`opened`),bn$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(Re(a=>a.state===`closed`),bn$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),r.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),mb(this.backdropClick(),this.keydownEvents().pipe(Re(a=>a.keyCode===27&&!this.disableClose&&!yt(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),kn(this,a.type===`keydown`?`keyboard`:`mouse`))})}close(r){let e=this._config.closePredicate;e&&!e(r,this._config,this.componentInstance)||(this._result=r,this._containerInstance._animationStateChanged.pipe(Re(t=>t.state===`closing`),bn$1(1)).subscribe(t=>{this._beforeClosed.next(r),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=rt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(r){let e=this._ref.config.positionStrategy;return r&&(r.left||r.right)?r.left?e.left(r.left):e.right(r.right):e.centerHorizontally(),r&&(r.top||r.bottom)?r.top?e.top(r.top):e.bottom(r.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(r=``,e=``){return this._ref.updateSize(r,e),this}addPanelClass(r){return this._ref.addPanelClass(r),this}removePanelClass(r){return this._ref.removePanelClass(r),this}getState(){return this._state}_finishDialogClose(){this._state=rt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function kn(n,r,e){return n._closeInteractionType=r,n.close(e)}var Ot=new D(`MatMdcDialogData`);var xn=new D(`mat-mdc-dialog-default-options`);var An=new D(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p(le);return()=>kr(n)}});var st=(()=>{class n{_defaultOptions=p(xn,{optional:!0});_scrollStrategy=p(An);_parentDialog=p(n,{optional:!0,skipSelf:!0});_idGenerator=p(lt$1);_injector=p(le);_dialog=p(Nt);_animationsDisabled=J$2();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new J$1;_afterOpenedAtThisLevel=new J$1;dialogConfigClass=ot;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ii(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(bu(void 0)));constructor(){this._dialogRefConstructor=ye,this._dialogContainerType=wn,this._dialogDataToken=Ot}open(e,t){let a;t=y(y({},this._defaultOptions||new ot),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let i=this._dialog.open(e,N(y({},t),{positionStrategy:Zn$1(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:J,useValue:t}]},templateContext:()=>({dialogRef:a}),providers:(o,d,s)=>(a=new this._dialogRefConstructor(o,t,s),a.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:s},{provide:this._dialogDataToken,useValue:d.data},{provide:this._dialogRefConstructor,useValue:a},{provide:se,useValue:null}])}));return a.componentRef=i.componentRef,a.componentInstance=i.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(a);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=W({token:n,factory:n.ɵfac})}return n})();var tn=(()=>{class n{_dialogRef=p(ye,{optional:!0});_elementRef=p(Xe);_dialog=p(st);ngOnInit(){this._dialogRef||(this._dialogRef=Mn(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=ae({type:n})}return n})();var an=(()=>{class n extends tn{id=p(lt$1).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(a){return(e||(e=Ln(n)))(a||n)}})();static ɵdir=ae({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,a){t&2&&XE(`id`,a.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[ze]})}return n})();var nn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=ae({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[QN([ns])]})}return n})();var rn=(()=>{class n extends tn{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(a){return(e||(e=Ln(n)))(a||n)}})();static ɵdir=ae({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,a){t&2&&es(`mat-mdc-dialog-actions-align-start`,a.align===`start`)(`mat-mdc-dialog-actions-align-center`,a.align===`center`)(`mat-mdc-dialog-actions-align-end`,a.align===`end`)},inputs:{align:`align`},features:[ze]})}return n})();function Mn(n,r){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?r.find(t=>t.id===e.id):null}var lt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Xt({type:n});static ɵinj=_t({providers:[st],imports:[Ua,Jn$1,Ui,Y]})}return n})();var ve=`Method not implemented`;var H=class{locale;_localeChanges=new J$1;localeChanges=this._localeChanges;setTime(r,e,t,a){throw new Error(ve)}getHours(r){throw new Error(ve)}getMinutes(r){throw new Error(ve)}getSeconds(r){throw new Error(ve)}parseTime(r,e){throw new Error(ve)}addSeconds(r,e){throw new Error(ve)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareDate(r,e):t==a}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),a=this.isValid(e);return t&&a?!this.compareTime(r,e):t==a}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}};var Pe=new D(`mat-date-formats`);var ke=(()=>{class n{changes=new J$1;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||n)};static ɵprov=W({token:n,factory:n.ɵfac})}return n})();var In=0;var Be=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=In++;cssClasses;constructor(r,e,t,a,i,o=r,d){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=d,this.cssClasses=i instanceof Set?Array.from(i):i}};var En={passive:!1,capture:!0};var dt={passive:!0,capture:!0};var on={passive:!0};var we=(()=>{class n{_elementRef=p(Xe);_ngZone=p(ne);_platform=p(P);_intl=p(ke);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new fe;previewChange=new fe;activeDateChange=new fe;dragStarted=new fe;dragEnded=new fe;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=p(le);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=p(ht),t=p(lt$1);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),p(st$1).load(Pn$1),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,i=[e.listen(a,`touchmove`,this._touchmoveHandler,En),e.listen(a,`mouseenter`,this._enterHandler,dt),e.listen(a,`focus`,this._enterHandler,dt),e.listen(a,`mouseleave`,this._leaveHandler,dt),e.listen(a,`blur`,this._leaveHandler,dt),e.listen(a,`mousedown`,this._mousedownHandler,on),e.listen(a,`touchstart`,this._mousedownHandler,on)];this._platform.isBrowser&&i.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=i})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:i}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?i-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/i}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/i}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){Yi(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Lt(e,this.startValue,this.endValue)}_isRangeEnd(e){return Bt(e,this.startValue,this.endValue)}_isInRange(e){return Yt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Lt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let i=this.rows[t][a-1];if(!i){let o=this.rows[t-1];i=o&&o[o.length-1]}return i&&!this._isRangeEnd(i.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let i=this.rows[t][a+1];if(!i){let o=this.rows[t+1];i=o&&o[0]}return i&&!this._isRangeStart(i.compareValue)}_isComparisonEnd(e){return Bt(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Yt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Lt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Bt(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Yt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=sn(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Pt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Pt(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=sn(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Pt(e);if(t){let a=t.getAttribute(`data-mat-row`),i=t.getAttribute(`data-mat-col`);if(a&&i)return this.rows[parseInt(a)]?.[parseInt(i)]||null}return null}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(s,g){return this._trackRow(g)}let t=(s,g)=>g.id;function a(s,g){if(s&1&&(Vh(0,`tr`,0)(1,`td`,3),TR(2),Uh()()),s&2){let c=JA();lM(),lC(`padding-top`,c._cellPadding)(`padding-bottom`,c._cellPadding),Ao(`colspan`,c.numCols),lM(),zh(` `,c.label,` `)}}function i(s,g){if(s&1&&(Vh(0,`td`,3),TR(1),Uh()),s&2){let c=JA(2);lC(`padding-top`,c._cellPadding)(`padding-bottom`,c._cellPadding),Ao(`colspan`,c._firstRowOffset),lM(),zh(` `,c._firstRowOffset>=c.labelMinRequiredCells?c.label:``,` `)}}function o(s,g){if(s&1){let c=YA();Vh(0,`td`,6)(1,`button`,7),eC(`click`,function(P){let y=Hm(c).$implicit,mt=JA(2);return $m(mt._cellClicked(y,P))})(`focus`,function(P){let y=Hm(c).$implicit,mt=JA(2);return $m(mt._emitActiveDateChange(y,P))}),Vh(2,`span`,8),TR(3),Uh(),WE(4,`span`,9),Uh()()}if(s&2){let c=g.$implicit,f=g.$index,P=JA().$index,y=JA();lC(`width`,y._cellWidth)(`padding-top`,y._cellPadding)(`padding-bottom`,y._cellPadding),Ao(`data-mat-row`,P)(`data-mat-col`,f),lM(),mR(c.cssClasses),es(`mat-calendar-body-disabled`,!c.enabled)(`mat-calendar-body-active`,y._isActiveCell(P,f))(`mat-calendar-body-range-start`,y._isRangeStart(c.compareValue))(`mat-calendar-body-range-end`,y._isRangeEnd(c.compareValue))(`mat-calendar-body-in-range`,y._isInRange(c.compareValue))(`mat-calendar-body-comparison-bridge-start`,y._isComparisonBridgeStart(c.compareValue,P,f))(`mat-calendar-body-comparison-bridge-end`,y._isComparisonBridgeEnd(c.compareValue,P,f))(`mat-calendar-body-comparison-start`,y._isComparisonStart(c.compareValue))(`mat-calendar-body-comparison-end`,y._isComparisonEnd(c.compareValue))(`mat-calendar-body-in-comparison-range`,y._isInComparisonRange(c.compareValue))(`mat-calendar-body-preview-start`,y._isPreviewStart(c.compareValue))(`mat-calendar-body-preview-end`,y._isPreviewEnd(c.compareValue))(`mat-calendar-body-in-preview`,y._isInPreview(c.compareValue)),XE(`tabIndex`,y._isActiveCell(P,f)?0:-1),Ao(`aria-label`,c.ariaLabel)(`aria-disabled`,!c.enabled||null)(`aria-pressed`,y._isSelected(c.compareValue))(`aria-current`,y.todayValue===c.compareValue?`date`:null)(`aria-describedby`,y._getDescribedby(c.compareValue)),lM(),es(`mat-calendar-body-selected`,y._isSelected(c.compareValue))(`mat-calendar-body-comparison-identical`,y._isComparisonIdentical(c.compareValue))(`mat-calendar-body-today`,y.todayValue===c.compareValue),lM(),zh(` `,c.displayValue,` `)}}function d(s,g){if(s&1&&(Vh(0,`tr`,1),kA(1,i,2,6,`td`,4),UA(2,o,5,49,`td`,5,t),Uh()),s&2){let c=g.$implicit,f=g.$index,P=JA();lM(),LA(f===0&&P._firstRowOffset?1:-1),lM(),BA(c)}}return Rh({type:n,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[Qt],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(g,c){g&1&&(kA(0,a,3,6,`tr`,0),UA(1,d,4,1,`tr`,1,e,!0),Vh(3,`span`,2),TR(4),Uh(),Vh(5,`span`,2),TR(6),Uh(),Vh(7,`span`,2),TR(8),Uh(),Vh(9,`span`,2),TR(10),Uh()),g&2&&(LA(c._firstRowOffset<c.labelMinRequiredCells?0:-1),lM(),BA(c.rows),lM(2),XE(`id`,c._startDateLabelId),lM(),zh(` `,c.startDateAccessibleName,`
`),lM(),XE(`id`,c._endDateLabelId),lM(),zh(` `,c.endDateAccessibleName,`
`),lM(),XE(`id`,c._comparisonStartDateLabelId),lM(),DC(` `,c.comparisonDateAccessibleName,` `,c.startDateAccessibleName,`
`),lM(),XE(`id`,c._comparisonEndDateLabelId),lM(),DC(` `,c.comparisonDateAccessibleName,` `,c.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})})()}return n})();function Rt(n){return n?.nodeName===`TD`}function Pt(n){let r;return Rt(n)?r=n:Rt(n.parentNode)?r=n.parentNode:Rt(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute(`data-mat-row`)!=null?r:null}function Lt(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function Bt(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function Yt(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function sn(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var R=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}};var ct=(()=>{class n{selection;_adapter;_selectionChanged=new J$1;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){Yc()};static ɵprov=A({token:n,factory:n.ɵfac})}return n})();var Vn=(()=>{class n extends ct{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||n)(b(H))};static ɵprov=A({token:n,factory:n.ɵfac})}return n})();var Tn={provide:ct,useFactory:()=>p(ct,{optional:!0,skipSelf:!0})||new Vn(p(H))};var pn=new D(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var zt=7;var Nn=0;var ln=(()=>{class n{_changeDetectorRef=p(Hn$1);_dateFormats=p(Pe,{optional:!0});_dateAdapter=p(H,{optional:!0});_dir=p(St,{optional:!0});_rangeStrategy=p(pn,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new fe;_userSelection=new fe;dragStarted=new fe;dragEnded=new fe;activeDateChange=new fe;_matCalendarBody;_monthLabel=xe(``);_weeks=xe([]);_firstWeekOffset=xe(0);_rangeStart=xe(null);_rangeEnd=xe(null);_comparisonRangeStart=xe(null);_comparisonRangeEnd=xe(null);_previewStart=xe(null);_previewEnd=xe(null);_isRange=xe(!1);_todayDate=xe(null);_weekdays=xe([]);constructor(){p(st$1).load(be),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(bu(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),i,o;this._selected instanceof R?(i=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):i=o=this._getDateInCurrentMonth(this._selected),(i!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!yt(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((zt+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%zt),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,i=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),i=this._dateAdapter.getDayOfWeekNames(`long`).map((o,d)=>({long:o,narrow:t[d],id:Nn++}));this._weekdays.set(i.slice(e).concat(i.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let i=0,o=this._firstWeekOffset();i<e;i++,o++){o==zt&&(a.push([]),o=0);let d=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),i+1),s=this._shouldEnableDate(d),g=this._dateAdapter.format(d,this._dateFormats.display.dateA11yLabel),c=this.dateClass?this.dateClass(d,`month`):void 0;a[a.length-1].push(new Be(i+1,t[i],g,s,c,this._getCellCompareValue(d),d))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),i=this._dateAdapter.getDate(e);return new Date(t,a,i).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof R?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=(a,i)=>i.id;function t(a,i){if(a&1&&(Nc(0,`th`,2)(1,`span`,6),TR(2),jh(),Nc(3,`span`,3),TR(4),jh()()),a&2){let o=i.$implicit;lM(2),vC(o.long),lM(2),vC(o.narrow)}}return Rh({type:n,selectors:[[`mat-month-view`]],viewQuery:function(i,o){if(i&1&&nC(we,5),i&2){let d;rC(d=oC())&&(o._matCalendarBody=d.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[Qt],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(i,o){i&1&&(Nc(0,`table`,0)(1,`thead`,1)(2,`tr`),UA(3,t,5,2,`th`,2,e),jh(),Nc(5,`tr`,3),Qc(6,`th`,4),jh()(),Nc(7,`tbody`,5),Un$1(`selectedValueChange`,function(s){return o._dateSelected(s)})(`activeDateChange`,function(s){return o._updateActiveDate(s)})(`previewChange`,function(s){return o._previewChanged(s)})(`dragStarted`,function(s){return o.dragStarted.emit(s)})(`dragEnded`,function(s){return o._dragEnded(s)})(`keyup`,function(s){return o._handleCalendarBodyKeyup(s)})(`keydown`,function(s){return o._handleCalendarBodyKeydown(s)}),jh()()),i&2&&(lM(3),BA(o._weekdays()),lM(4),qE(`label`,o._monthLabel())(`rows`,o._weeks())(`todayValue`,o._todayDate())(`startValue`,o._rangeStart())(`endValue`,o._rangeEnd())(`comparisonStart`,o._comparisonRangeStart())(`comparisonEnd`,o._comparisonRangeEnd())(`previewStart`,o._previewStart())(`previewEnd`,o._previewEnd())(`isRange`,o._isRange())(`labelMinRequiredCells`,3)(`activeCell`,o._dateAdapter.getDate(o.activeDate)-1)(`startDateAccessibleName`,o.startDateAccessibleName)(`endDateAccessibleName`,o.endDateAccessibleName))},dependencies:[we],encapsulation:2})})()}return n})();var T=24;var Ht=4;var dn=(()=>{class n{_changeDetectorRef=p(Hn$1);_dateAdapter=p(H,{optional:!0});_dir=p(St,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),mn(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new fe;yearSelected=new fe;activeDateChange=new fe;_matCalendarBody;_years=xe([]);_todayYear=xe(0);_selectedYear=xe(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(bu(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let i=0,o=[];i<T;i++)o.push(t+i),o.length==Ht&&(a.push(o.map(d=>this._createCellForYear(d))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),i=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Ht);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ht);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,T-Le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-T*10:-T);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?T*10:T);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Le(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),i=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new Be(e,a,a,this._shouldEnableYear(e),i)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof R){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=Rh({type:n,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,a){if(t&1&&nC(we,5),t&2){let i;rC(i=oC())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(Nc(0,`table`,0)(1,`thead`,1)(2,`tr`),Qc(3,`th`,2),jh()(),Nc(4,`tbody`,3),Un$1(`selectedValueChange`,function(o){return a._yearSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),jh()()),t&2&&(lM(4),qE(`rows`,a._years())(`todayValue`,a._todayYear())(`startValue`,a._selectedYear())(`endValue`,a._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._getActiveCell()))},dependencies:[we],encapsulation:2})}return n})();function mn(n,r,e,t,a){let i=n.getYear(r),o=n.getYear(e),d=un(n,t,a);return Math.floor((i-d)/T)===Math.floor((o-d)/T)}function Le(n,r,e,t){return Fn(n.getYear(r)-un(n,e,t),T)}function un(n,r,e){let t=0;return e?t=n.getYear(e)-T+1:r&&(t=n.getYear(r)),t}function Fn(n,r){return(n%r+r)%r}var cn=(()=>{class n{_changeDetectorRef=p(Hn$1);_dateFormats=p(Pe,{optional:!0});_dateAdapter=p(H,{optional:!0});_dir=p(St,{optional:!0});_rerenderSubscription=oe.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new fe;monthSelected=new fe;activeDateChange=new fe;_matCalendarBody;_months=xe([]);_yearLabel=xe(``);_todayMonth=xe(null);_selectedMonth=xe(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(bu(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let i=this._getDateFromMonth(t);this.selectedChange.emit(i)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,`year`):void 0;return new Be(e,t.toLocaleUpperCase(),i,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let i=a;this._dateAdapter.getMonth(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),i=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>i}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),i=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<i}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof R?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=Rh({type:n,selectors:[[`mat-year-view`]],viewQuery:function(t,a){if(t&1&&nC(we,5),t&2){let i;rC(i=oC())&&(a._matCalendarBody=i.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(Nc(0,`table`,0)(1,`thead`,1)(2,`tr`),Qc(3,`th`,2),jh()(),Nc(4,`tbody`,3),Un$1(`selectedValueChange`,function(o){return a._monthSelected(o)})(`activeDateChange`,function(o){return a._updateActiveDate(o)})(`keyup`,function(o){return a._handleCalendarBodyKeyup(o)})(`keydown`,function(o){return a._handleCalendarBodyKeydown(o)}),jh()()),t&2&&(lM(4),qE(`label`,a._yearLabel())(`rows`,a._months())(`todayValue`,a._todayMonth())(`startValue`,a._selectedMonth())(`endValue`,a._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._dateAdapter.getMonth(a.activeDate)))},dependencies:[we],encapsulation:2})}return n})();var hn=(()=>{class n{_intl=p(ke);calendar=p(jt);_dateAdapter=p(H,{optional:!0});_dateFormats=p(Pe,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){p(st$1).load(be);let e=p(Hn$1);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-T))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:T))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):mn(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Le(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+T-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1))]}_periodButtonLabelId=p(lt$1).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){return Rh({type:n,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:[`*`],decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(a,i){a&1&&(tR(),Nc(0,`div`,0)(1,`div`,1)(2,`span`,2),TR(3),jh(),Nc(4,`button`,3),Un$1(`click`,function(){return i.currentPeriodClicked()}),Nc(5,`span`,4),TR(6),jh(),ny(),Nc(7,`svg`,5),Qc(8,`polygon`,6),jh()(),ry(),Qc(9,`div`,7),nR(10),Nc(11,`button`,8),Un$1(`click`,function(){return i.previousClicked()}),ny(),Nc(12,`svg`,9),Qc(13,`path`,10),jh()(),ry(),Nc(14,`button`,11),Un$1(`click`,function(){return i.nextClicked()}),ny(),Nc(15,`svg`,9),Qc(16,`path`,12),jh()()()()),a&2&&(lM(2),qE(`id`,i._periodButtonLabelId),lM(),vC(i.periodButtonDescription),lM(),Ao(`aria-label`,i.periodButtonLabel)(`aria-describedby`,i._periodButtonLabelId),lM(2),vC(i.periodButtonText),lM(),es(`mat-calendar-invert`,i.calendar.currentView!==`month`),lM(4),qE(`disabled`,!i.previousEnabled())(`matTooltip`,i.prevButtonLabel),Ao(`aria-label`,i.prevButtonLabel),lM(3),qE(`disabled`,!i.nextEnabled())(`matTooltip`,i.nextButtonLabel),Ao(`aria-label`,i.nextButtonLabel))},dependencies:[or,Vo,hg],encapsulation:2})})()}return n})();var jt=(()=>{class n{_dateAdapter=p(H,{optional:!0});_dateFormats=p(Pe,{optional:!0});_changeDetectorRef=p(Hn$1);_elementRef=p(Xe);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof R?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new fe;yearSelected=new fe;monthSelected=new fe;viewChanged=new fe(!0);_userSelection=new fe;_userDragDrop=new fe;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new J$1;constructor(){this._intlChanges=p(ke).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ut(this.headerComponent||hn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,i=t||a||e.dateFilter;if(i&&!i.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(xi())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof R||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(o,d){}function t(o,d){if(o&1){let s=YA();Nc(0,`mat-month-view`,4),IC(`activeDateChange`,function(c){Hm(s);let f=JA();return AR(f.activeDate,c)||(f.activeDate=c),$m(c)}),Un$1(`_userSelection`,function(c){Hm(s);let f=JA();return $m(f._dateSelected(c))})(`dragStarted`,function(c){Hm(s);let f=JA();return $m(f._dragStarted(c))})(`dragEnded`,function(c){Hm(s);let f=JA();return $m(f._dragEnded(c))}),jh()}if(o&2){let s=JA();CC(`activeDate`,s.activeDate),qE(`selected`,s.selected)(`dateFilter`,s.dateFilter)(`maxDate`,s.maxDate)(`minDate`,s.minDate)(`dateClass`,s.dateClass)(`comparisonStart`,s.comparisonStart)(`comparisonEnd`,s.comparisonEnd)(`startDateAccessibleName`,s.startDateAccessibleName)(`endDateAccessibleName`,s.endDateAccessibleName)(`activeDrag`,s._activeDrag)}}function a(o,d){if(o&1){let s=YA();Nc(0,`mat-year-view`,5),IC(`activeDateChange`,function(c){Hm(s);let f=JA();return AR(f.activeDate,c)||(f.activeDate=c),$m(c)}),Un$1(`monthSelected`,function(c){Hm(s);let f=JA();return $m(f._monthSelectedInYearView(c))})(`selectedChange`,function(c){Hm(s);let f=JA();return $m(f._goToDateInView(c,`month`))}),jh()}if(o&2){let s=JA();CC(`activeDate`,s.activeDate),qE(`selected`,s.selected)(`dateFilter`,s.dateFilter)(`maxDate`,s.maxDate)(`minDate`,s.minDate)(`dateClass`,s.dateClass)}}function i(o,d){if(o&1){let s=YA();Nc(0,`mat-multi-year-view`,6),IC(`activeDateChange`,function(c){Hm(s);let f=JA();return AR(f.activeDate,c)||(f.activeDate=c),$m(c)}),Un$1(`yearSelected`,function(c){Hm(s);let f=JA();return $m(f._yearSelectedInMultiYearView(c))})(`selectedChange`,function(c){Hm(s);let f=JA();return $m(f._goToDateInView(c,`year`))}),jh()}if(o&2){let s=JA();CC(`activeDate`,s.activeDate),qE(`selected`,s.selected)(`dateFilter`,s.dateFilter)(`maxDate`,s.maxDate)(`minDate`,s.minDate)(`dateClass`,s.dateClass)}}return Rh({type:n,selectors:[[`mat-calendar`]],viewQuery:function(d,s){if(d&1&&nC(ln,5)(cn,5)(dn,5),d&2){let g;rC(g=oC())&&(s.monthView=g.first),rC(g=oC())&&(s.yearView=g.first),rC(g=oC())&&(s.multiYearView=g.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[Dn$1([Tn]),Qt],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(d,s){if(d&1&&(FE(0,e,0,0,`ng-template`,0),Nc(1,`div`,1),kA(2,t,1,11,`mat-month-view`,2)(3,a,1,6,`mat-year-view`,3)(4,i,1,6,`mat-multi-year-view`,3),jh()),d&2){let g;qE(`cdkPortalOutlet`,s._calendarHeaderPortal),lM(2),LA((g=s.currentView)===`month`?2:g===`year`?3:g===`multi-year`?4:-1)}},dependencies:[Wi,mo,ln,cn,dn],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();var On=(()=>{class n{_elementRef=p(Xe);_animationsDisabled=J$2();_changeDetectorRef=p(Hn$1);_globalModel=p(ct);_dateAdapter=p(H);_ngZone=p(ne);_rangeSelectionStrategy=p(pn,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new J$1;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(p(st$1).load(be),this._closeButtonText=p(ke).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=p(ht);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,i=t instanceof R;if(i&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(i||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,a){}return Rh({type:n,selectors:[[`mat-datepicker-content`]],viewQuery:function(a,i){if(a&1&&nC(jt,5),a&2){let o;rC(o=oC())&&(i._calendar=o.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(a,i){a&2&&(mR(i.color?`mat-`+i.color:``),es(`mat-datepicker-content-touch`,i.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!i._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(a,i){a&1&&(Nc(0,`div`,0)(1,`mat-calendar`,1),Un$1(`yearSelected`,function(d){return i.datepicker._selectYear(d)})(`monthSelected`,function(d){return i.datepicker._selectMonth(d)})(`viewChanged`,function(d){return i.datepicker._viewChanged(d)})(`_userSelection`,function(d){return i._handleUserSelection(d)})(`_userDragDrop`,function(d){return i._handleUserDragDrop(d)}),jh(),FE(2,e,0,0,`ng-template`,2),Nc(3,`button`,3),Un$1(`focus`,function(){return i._closeButtonFocused=!0})(`blur`,function(){return i._closeButtonFocused=!1})(`click`,function(){return i.datepicker.close()}),TR(4),jh()()),a&2&&(es(`mat-datepicker-content-container-with-custom-header`,i.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,i._actionsPortal),Ao(`aria-modal`,!0)(`aria-labelledby`,i._dialogLabelId??void 0),lM(),mR(i.datepicker.panelClass),qE(`id`,i.datepicker.id)(`startAt`,i.datepicker.startAt)(`startView`,i.datepicker.startView)(`minDate`,i.datepicker._getMinDate())(`maxDate`,i.datepicker._getMaxDate())(`dateFilter`,i.datepicker._getDateFilter())(`headerComponent`,i.datepicker.calendarHeaderComponent)(`selected`,i._getSelected())(`dateClass`,i.datepicker.dateClass)(`comparisonStart`,i.comparisonStart)(`comparisonEnd`,i.comparisonEnd)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName),lM(),qE(`cdkPortalOutlet`,i._actionsPortal),lM(),es(`cdk-visually-hidden`,!i._closeButtonFocused),qE(`color`,i.color||`primary`),lM(),vC(i._closeButtonText))},dependencies:[No,jt,Wi,or],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})})()}return n})();var Rn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=ae({type:n,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return n})();var Pn=(()=>{class n{_intl=p(ke);_changeDetectorRef=p(Hn$1);_stateChanges=oe.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=p(new ip(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:R$1(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:R$1(),a=this.datepicker?mb(this.datepicker.openedStream,this.datepicker.closedStream):R$1();this._stateChanges.unsubscribe(),this._stateChanges=mb(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`button`],t=[[[``,`matDatepickerToggleIcon`,``]]],a=[`[matDatepickerToggleIcon]`];function i(o,d){o&1&&(ny(),Nc(0,`svg`,2),Qc(1,`path`,3),jh())}return Rh({type:n,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(d,s,g){if(d&1&&Gh(g,Rn,5),d&2){let c;rC(c=oC())&&(s._customIcon=c.first)}},viewQuery:function(d,s){if(d&1&&nC(e,5),d&2){let g;rC(g=oC())&&(s._button=g.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(d,s){d&1&&Un$1(`click`,function(c){return s._open(c)}),d&2&&(Ao(`tabindex`,null)(`data-mat-calendar`,s.datepicker?s.datepicker.id:null),es(`mat-datepicker-toggle-active`,s.datepicker&&s.datepicker.opened)(`mat-accent`,s.datepicker&&s.datepicker.color===`accent`)(`mat-warn`,s.datepicker&&s.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,sl],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[Qt],ngContentSelectors:a,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(d,s){d&1&&(tR(t),Nc(0,`button`,1,0),kA(2,i,2,0,`svg`,2),nR(3),jh()),d&2&&(qE(`tabIndex`,s.disabled?-1:s.tabIndex)(`disabled`,s.disabled)(`disableRipple`,s.disableRipple),Ao(`aria-haspopup`,s.datepicker?`dialog`:null)(`aria-label`,s.ariaLabel||s._intl.openCalendarLabel)(`aria-expanded`,s.datepicker?s.datepicker.opened:null),lM(2),LA(s._customIcon?-1:2))},dependencies:[Vo],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})})()}return n})();var gn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Xt({type:n});static ɵinj=_t({providers:[ke],imports:[Uo,Jn$1,Io,Ui,On,Pn,hn,Y,$e]})}return n})();var zn=()=>({color:`white`});var Hn=(n,r)=>r.arquivo;function jn(n,r){if(n&1&&Qc(0,`img`,19),n&2){let e=JA(),t=e.$implicit,a=e.$index;qE(`alt`,RR(`Imagem `,a+1))(`src`,t.preview)}}function $n(n,r){if(n&1){let e=YA();Nc(0,`div`,18),kA(1,jn,1,3,`img`,19),Nc(2,`button`,20),Un$1(`click`,function(){let a=Hm(e).$index,i=JA(2);return $m(i.removeImage(a))}),TR(3,`X`),jh()()}if(n&2){let e=r.$implicit;lM(),LA(e.preview?1:-1)}}function Gn(n,r){if(n&1&&(Nc(0,`div`)(1,`h3`),TR(2,`Imagens Salvas:`),jh(),Nc(3,`div`,17),UA(4,$n,4,1,`div`,18,Hn),jh()()),n&2){let e=JA();lM(4),BA(e.imagens())}}var pt=class n{_fb=p(k6);_facade=p(Qr);_alert=p(si);dialogRef=p(ye);data=p(Ot);form;imagens=xe([]);constructor(){this.criarForm()}criarForm(){this.form=this._fb.group({informacao:[``,[pg.required]],data:[``,[pg.required]],ocoId:[this.data.id],files:[],descricao:[this.data.descricao]})}onFilesSelected(r){let e=r.target;e?.files?.length&&Array.from(e.files).forEach(t=>{let a={arquivo:t,preview:``};this.imagens.update(o=>[...o,a]);let i=new FileReader;i.onload=()=>{let o=i.result;this.imagens.update(d=>d.map(s=>s===a?N(y({},s),{preview:o}):s))},i.readAsDataURL(t)})}removeImage(r){this.imagens.update(e=>e.filter((t,a)=>a!==r))}onSend(){let r=new FormData,e=this.convertDate(this.form.value.data);if(this.form.value.informacao.length==0)this._alert.showError(`Campo Informação obrigatório!`);else{r.append(`ocoId`,this.form.value.ocoId),r.append(`descricao`,this.form.value.descricao),r.append(`informacao`,this.form.value.informacao),r.append(`data`,e);for(let{arquivo:t}of this.imagens())r.append(`files`,t);this.dialogRef.close(),this.form.reset(),this._facade.postOcorrencia(r)}}onClose(){this.dialogRef.close()}convertDate(r){let e=r.substring(0,2),t=r.substring(2,4);return`${r.substring(4,8)}-${t}-${e}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=Rh({type:n,selectors:[[`app-desaparecidos-detalhe-dialog`]],decls:32,vars:4,consts:[[`fileInput`,``],[`mat-dialog-title`,``,1,`font-semibold`,`flex`,`text-center`],[1,`gap-2`,`h-full`,3,`formGroup`],[1,`pt-2`,`px-4`],[1,`w-full`],[`matInput`,``,`type`,`text`,`formControlName`,`informacao`],[1,`w-50`],[`matInput`,``,`mask`,`00/00/0000`,`placeholder`,`dd/mm/aaaa`,`type`,`text`,`formControlName`,`data`,`dropcharacterspecial`,`false`],[1,`pt-2`,`px-4`,`flex`,`flex-col`],[`mat-raised-button`,``,`color`,`green`,1,`mr-auto`,`!bg-green-600`,3,`click`],[3,`ngStyle`],[1,`text-white`],[1,`text-xs`],[`type`,`file`,`accept`,`image/*`,`multiple`,``,2,`display`,`none`,3,`change`],[`mat-dialog-actions`,``,1,`flex`,`w-full`,`justify-between`],[`mat-raised-button`,``,1,`ml-auto`,3,`click`],[`mat-raised-button`,``,1,`ml-auto`,`!bg-green-600`,3,`click`],[1,`flex`,`flex-wrap`,`gap-2`],[1,`relative`],[`width`,`200`,3,`src`,`alt`],[1,`delete-btn`,3,`click`]],template:function(e,t){if(e&1){let a=YA();Nc(0,`div`,1),TR(1,`Formulário`),jh(),Nc(2,`mat-dialog-content`)(3,`form`,2)(4,`div`,3)(5,`mat-form-field`,4)(6,`mat-label`),TR(7,`Informação`),jh(),Nc(8,`input`,5),iN(),jh()()(),Nc(9,`div`,3)(10,`mat-form-field`,6)(11,`mat-label`),TR(12,`Data Localizado`),jh(),Nc(13,`input`,7),iN(),jh()()(),Nc(14,`div`,8)(15,`button`,9),Un$1(`click`,function(){Hm(a);let o=iR(23);return $m(o.click())}),Nc(16,`mat-icon`,10),TR(17,`cloud_upload`),jh(),Nc(18,`div`,11),TR(19,`Enviar Imagem`),jh()(),Nc(20,`mat-hint`,12),TR(21,`PNG, JPG, JPEG - 3MB!`),jh(),Nc(22,`input`,13,0),Un$1(`change`,function(o){return t.onFilesSelected(o)}),jh()(),Nc(24,`div`,3),kA(25,Gn,6,0,`div`),jh()()(),Nc(26,`div`,14)(27,`button`,15),Un$1(`click`,function(){return t.onClose()}),TR(28,`Fechar`),jh(),Nc(29,`button`,16),Un$1(`click`,function(){return t.onSend()}),Nc(30,`div`,11),TR(31,`Enviar`),jh()()()}e&2&&(lM(3),qE(`formGroup`,t.form),lM(5),aN(),lM(5),aN(),lM(3),qE(`ngStyle`,LR(3,zn)),lM(9),LA(t.imagens().length?25:-1))},dependencies:[PI,PO,Zh,Uo,or,lt,an,rn,nn,bh,hh,Vi,Vn$1,jn$1,F6,P6,E_,R6,O6,L6,DF,wF,zh$1,Lh,gn,Xe$1,qe],styles:[`.relative[_ngcontent-%COMP%]{position:relative}.delete-btn[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px;background-color:red;color:#fff;border:none;border-radius:50%;width:20px;height:20px;font-size:14px;display:flex;justify-content:center;align-items:center;cursor:pointer}`]})};function Kn(n,r){if(n&1){let e=YA();Nc(0,`div`,0)(1,`mat-icon`,2),TR(2,`error_outline`),jh(),Nc(3,`p`),TR(4),jh(),Nc(5,`button`,3),Un$1(`click`,function(){Hm(e);let a=JA();return $m(a.tentarNovamente())}),Nc(6,`mat-icon`),TR(7,`refresh`),jh(),TR(8,` Tentar de novo `),jh()()}n&2&&(lM(4),vC(r))}function qn(n,r){n&1&&(Nc(0,`span`,4),TR(1,`Localizado`),jh())}function Wn(n,r){n&1&&(Nc(0,`span`,5),TR(1,`Desaparecido`),jh())}function Qn(n,r){if(n&1&&(Nc(0,`div`,13)(1,`span`,14),TR(2,`Data Localizado:`),jh(),TR(3),UR(4,`date`),jh(),Nc(5,`div`,13)(6,`span`,14),TR(7,`Encontrado Vivo?`),jh(),TR(8),jh()),n&2){let e=JA();lM(3),zh(` `,HR(4,2,e.ultimaOcorrencia?.dataLocalizacao,`dd/MM/yyyy `),` `),lM(5),zh(` `,e.ultimaOcorrencia?.encontradoVivo?`Sim`:`Não`,` `)}}function Un(n,r){if(n&1&&(Nc(0,`div`,13)(1,`span`,14),TR(2,`Vestimenta:`),jh(),TR(3),jh()),n&2){let e=JA(2);lM(3),zh(` `,e.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido,` `)}}function Zn(n,r){if(n&1&&(Nc(0,`div`,13)(1,`span`,14),TR(2,`Informações:`),jh(),TR(3),jh()),n&2){let e=JA(2);lM(3),zh(` `,e.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao,` `)}}function Xn(n,r){if(n&1){let e=YA();Nc(0,`div`,13)(1,`span`,14),TR(2,`Data:`),jh(),TR(3),UR(4,`date`),jh(),Nc(5,`div`,13)(6,`span`,14),TR(7,`Local:`),jh(),TR(8),jh(),kA(9,Un,4,1,`div`,13),kA(10,Zn,4,1,`div`,13),Nc(11,`div`,15),TR(12),jh(),Nc(13,`button`,16),Un$1(`click`,function(){Hm(e);let a=JA(2);return $m(a.openDialog())}),Nc(14,`span`,17),TR(15,`Encontrou Essa Pessoa?`),jh()()}if(n&2){let e=JA(),t=JA();lM(3),zh(` `,HR(4,5,e.ultimaOcorrencia?.dtDesaparecimento,`dd/MM/yyyy HH:mm:ss`),` `),lM(5),zh(` `,e.ultimaOcorrencia?.localDesaparecimentoConcat,` `),lM(),LA(e.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido?9:-1),lM(),LA(e.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao?10:-1),lM(2),zh(` Desaparecido Há `,t.dataPercorrida(),` Dias. `)}}function Jn(n,r){if(n&1&&(kA(0,qn,2,0,`span`,4)(1,Wn,2,0,`span`,5),Nc(2,`div`,6)(3,`div`),Qc(4,`img`,7),jh(),Nc(5,`div`,8)(6,`div`,9),TR(7),jh(),Nc(8,`div`,10),TR(9),jh(),Qc(10,`hr`,11),Nc(11,`div`,12),TR(12,`Dados sobre o Desaparecimento`),jh(),kA(13,Qn,9,5)(14,Xn,16,8),jh()()),n&2){let e=r;LA(e.ultimaOcorrencia?.dataLocalizacao?0:1),lM(2),qE(`ngClass`,e.ultimaOcorrencia?.dataLocalizacao?`border-green-600`:`border-red-600`),lM(2),qE(`src`,e.urlFoto||`./assets/semfoto.jpg`)(`alt`,`Imagem do indivíduo: `+e.nome),lM(3),vC(e.nome),lM(2),DC(` `,e.idade,` Anos - `,e.sexo,` `),lM(4),LA(e.ultimaOcorrencia?.dataLocalizacao?13:14)}}function ei(n,r){n&1&&(Nc(0,`div`,1),Qc(1,`mat-spinner`,18),jh())}var ti=864e5;var _n=class n{dialog=p(st);_facade=p(Qr);router=p(Rs);id;pessoa=rl(this._facade.detalhePessoa$.pipe(z(r=>Object.keys(r).length>0?r:null)),{initialValue:null});erro=rl(this._facade.erroDetalhe$,{initialValue:null});dataPercorrida=Lt$1(()=>{let r=this.pessoa()?.ultimaOcorrencia?.dtDesaparecimento;return r?Math.round((Date.now()-new Date(r).getTime())/ti):null});constructor(){this._facade.idDetalhe$.pipe(al()).subscribe(r=>{isNaN(Number(r))?this.router.navigate([`/`]):this.id=r})}tentarNovamente(){this._facade.tentarCarregarDetalheNovamente()}openDialog(){let r=this.pessoa();this.dialog.open(pt,{data:{id:r?.ultimaOcorrencia?.ocoId,descricao:r?.nome},width:`600px`})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Rh({type:n,selectors:[[`app-desaparecidos-detalhe`]],decls:3,vars:1,consts:[[`role`,`alert`,1,`mt-3`,`flex`,`flex-col`,`items-center`,`gap-3`,`rounded-lg`,`border`,`border-red-300`,`bg-red-50`,`p-6`,`text-red-800`],[1,`flex`,`justify-center`,`py-10`],[`aria-hidden`,`true`],[`mat-raised-button`,``,`type`,`button`,3,`click`],[1,`bg-green-600`,`pt-1`,`px-2`,`text-white`,`text-3xl`,`mt-3`,`rounded-t-lg`],[1,`bg-red-600`,`pt-1`,`px-2`,`text-white`,`text-3xl`,`mt-3`,`rounded-t-lg`],[1,`flex`,`flex-row`,`py-2`,`border-4`,`rounded-lg`,`px-2`,3,`ngClass`],[`height`,`128`,1,`w-full`,`h-120`,`object-cover`,`p-2`,`max-w-lg`,3,`src`,`alt`],[1,`flex`,`flex-col`,`text-left`,`mt-1`],[1,`font-semibold`,`text-2xl`],[1,`font-semibold`,`text-xl`],[1,`my-2`],[1,`font-semibold`,`text-xl`,`my-2`],[1,`flex`,`flex-row`],[1,`pr-1`,`font-semibold`],[1,`py-2`,`font-bold`,`text-xl`,`text-red-500`],[`mat-raised-button`,``,1,`!bg-red-600`,`w-60`,`py-3`,3,`click`],[1,`text-white`],[`diameter`,`50`,`aria-label`,`Carregando os dados da pessoa`]],template:function(e,t){if(e&1&&kA(0,Kn,9,1,`div`,0)(1,Jn,15,8)(2,ei,2,0,`div`,1),e&2){let a;LA((a=t.erro())?0:(a=t.pessoa())?1:2,a)}},dependencies:[xO,Zh,Uo,or,lt,zh$1,Lh,Xb,qb,jO],encapsulation:2})};export{_n as DesaparecidosDetalheComponent};