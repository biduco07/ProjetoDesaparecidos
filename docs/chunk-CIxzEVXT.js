import{An as vE,At as ep,Bn as yE,C as Hg,Cn as uE,Ct as cN,D as J,Et as dN,Fn as wp,Ft as gn,G as TN,Gt as iR,H as Rc,It as h,J as UC,K as Te,Kt as jA,L as Oa,Lt as h4,M as N,Mt as fR,Ot as eE,P as N_,Pn as wo,Pt as fr,Q as VN,R as Pr,Rn as xT,Sn as tp,Tt as cp,Un as ze,V as RN,Vn as yc,Vt as ho,W as Sy,Xt as lN,Yt as lI,Zt as lR,_n as sa$1,_t as ac,a as Ae,b as Go,bn as tE,bt as bN,cn as p4,ct as Xf,d as E,en as nE,et as Vg,fn as qD,ft as Z,g as G,gn as sN,gt as _N,hn as rm,it as Wf,j as Mn,jn as vN,k as LD,kn as v,kt as ee,lt as Y,mn as rE,n as $u,nn as nm,ot as XD,p as Eo,r as A_,rn as np,s as Bi$1,sn as on,st as XN,u as Dr,vt as ap,w as Hn,wn as uN,wt as ce,xt as c0,y as GD,yn as sp,yt as at$1,z as Qn}from"./main-E3SZQTYS.js";import{$ as ir,At as ze$1,C as Qi$1,Ct as wu,D as Ta,Dt as yi,E as Sl,Et as ya,F as Zi$1,G as dh,H as ce$1,J as fr$1,M as Xo,O as Ue,Ot as yn,P as Zc,Q as hr,R as be$1,S as Q,St as wl,T as Si$1,U as ch,V as br,X as gn$1,Z as he$1,_ as Na,_t as td,a as Du,at as ku,b as Nu,bt as ur,c as Hi,d as Iu,dt as oo,f as Jp,ft as ot,g as Mi$1,gt as st,h as Mg,i as Cs,it as km,j as Wt,k as Un,kt as yt,lt as nl,m as Ls,mt as rr,n as Ap,nt as jt,o as Eu,pt as qo,q as er,r as Ca,rt as k,s as Fs,st as mh,t as $e,tt as jn,u as Ip,ut as nr,v as Ng,vt as th,wt as xo,xt as ut,y as Ni$1,yt as tr,z as bn}from"./chunk-9jvgbB2g.js";var he=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new ee;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,i){this._multiple=n,this._emitChanges=t,this.compareWith=i,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Ze=(()=>{class a{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||a)};static ɵprov=Z({token:a,factory:a.ɵfac})}return a})();var ki=(()=>{class a{labelPosition=`after`;static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){return Wf({type:a,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(i,o){i&2&&uE(`mdc-form-field--align-end`,o.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,o){i&1&&(TN(),_N(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return a})();var Ve=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Vi={provide:Hi,useExisting:sa$1(()=>Je),multi:!0};var Si=new E(`MatRadioGroup`);var Bi=new E(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Je=(()=>{class a{_changeDetector=h(Bi$1);_value=null;_name=h(ut).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ae;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Ve(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||a)};static ɵdir=Dr({type:a,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,o){if(t&1&&ap(o,Be,5),t&2){let d;nE(d=rE())&&(i._radios=d)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,lI],required:[2,`required`,`required`,lI],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,lI]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[iR([Vi,{provide:Si,useExisting:a}])]})}return a})();var Be=(()=>{class a{_elementRef=h(on);_changeDetector=h(Bi$1);_focusMonitor=h(Si$1);_radioDispatcher=h(Ze);_defaultOptions=h(Bi,{optional:!0});_ngZone=h(J);_renderer=h(fr);_uniqueId=h(ut).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ae;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=yt();_injector=h(ce);constructor(){h(st).load(ya);let e=h(Si,{optional:!0}),t=h(new wp(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=jA(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Ve(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,yc(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`input`],t=[`formField`];return Wf({type:a,selectors:[[`mat-radio-button`]],viewQuery:function(d,p){if(d&1&&tE(e,5)(t,7,on),d&2){let u;nE(u=rE())&&(p._inputElement=u.first),nE(u=rE())&&(p._rippleTrigger=u.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(d,p){d&1&&sp(`focus`,function(){return p._inputElement.nativeElement.focus()}),d&2&&(Xf(`id`,p.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),uE(`mat-primary`,p.color===`primary`)(`mat-accent`,p.color===`accent`)(`mat-warn`,p.color===`warn`)(`mat-mdc-radio-checked`,p.checked)(`mat-mdc-radio-disabled`,p.disabled)(`mat-mdc-radio-disabled-interactive`,p.disabledInteractive)(`_mat-animation-noopable`,p._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,lI],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:jA(o)],checked:[2,`checked`,`checked`,lI],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,lI],required:[2,`required`,`required`,lI],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,lI]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(d,p){d&1&&(TN(),ac(0,`label`,2,0)(2,`span`,3),Rc(3,`span`,4),ac(4,`input`,5,1),sp(`change`,function(_){return p._onInputInteraction(_)}),ep(),ac(6,`span`,6),Rc(7,`span`,7)(8,`span`,8),ep(),ac(9,`span`,9),Rc(10,`span`,10),ep()(),ac(11,`span`,11),_N(12),ep()()),d&2&&(qD(`labelPosition`,p.labelPosition)(`for`,p.inputId),xT(2),uE(`mdc-radio--disabled`,p.disabled),xT(2),qD(`id`,p.inputId)(`checked`,p.checked)(`disabled`,p.disabled&&!p.disabledInteractive)(`required`,p.required),Xf(`name`,p.name)(`value`,p.value)(`aria-label`,p.ariaLabel)(`aria-labelledby`,p.ariaLabelledby)(`aria-describedby`,p.ariaDescribedby)(`aria-disabled`,p.disabled&&p.disabledInteractive?`true`:null),xT(5),qD(`matRippleTrigger`,p._rippleTrigger.nativeElement)(`matRippleDisabled`,p._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[km,ki],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return a})();var Ci=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Eo({type:a});static ɵinj=Qn({imports:[Ca,Be,Q]})}return a})();var wi=(()=>{class a{_animationsDisabled=yt();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||a)};static ɵcmp=Wf({type:a,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&uE(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return a})();var tt=new E(`MAT_OPTION_PARENT_COMPONENT`);var it=new E(`MatOptgroup`);var et=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var le=(()=>{class a{_element=h(on);_changeDetectorRef=h(Bi$1);_parent=h(tt,{optional:!0});group=h(it,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=h(ut).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=at$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ae;_text;_stateChanges=new ee;constructor(){let e=h(st);e.load(ya),e.load(bn),this._signalDisableRipple=!!this._parent&&Oa(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!yn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new et(this,e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],i=[`mat-icon`,`*`];function o(u,_){if(u&1&&Rc(0,`mat-pseudo-checkbox`,1),u&2){let r=bN();qD(`disabled`,r.disabled)(`state`,r.selected?`checked`:`unchecked`)}}function d(u,_){if(u&1&&Rc(0,`mat-pseudo-checkbox`,3),u&2){let r=bN();qD(`disabled`,r.disabled)}}function p(u,_){if(u&1&&(ac(0,`span`,4),XN(1),ep()),u&2){let r=bN();xT(),cp(`(`,r.group.label,`)`)}}return Wf({type:a,selectors:[[`mat-option`]],viewQuery:function(_,r){if(_&1&&tE(e,7),_&2){let g;nE(g=rE())&&(r._text=g.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(_,r){_&1&&sp(`click`,function(){return r._selectViaInteraction()})(`keydown`,function(f){return r._handleKeydown(f)}),_&2&&(XD(`id`,r.id),Xf(`aria-selected`,r.selected)(`aria-disabled`,r.disabled.toString()),uE(`mdc-list-item--selected`,r.selected)(`mat-mdc-option-multiple`,r.multiple)(`mat-mdc-option-active`,r.active)(`mdc-list-item--disabled`,r.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,lI]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:i,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(_,r){_&1&&(TN(t),sN(0,o,1,2,`mat-pseudo-checkbox`,1),_N(1),ac(2,`span`,2,0),_N(4,1),ep(),sN(5,d,1,1,`mat-pseudo-checkbox`,3),sN(6,p,2,1,`span`,4),Rc(7,`div`,5)),_&2&&(cN(r.multiple?0:-1),xT(5),cN(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),xT(),cN(r.group&&r.group._inert?6:-1),xT(),qD(`matRippleTrigger`,r._getHostElement())(`matRippleDisabled`,r.disabled||r.disableRipple))},dependencies:[wi,km],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();function Mi(a,n,e){if(e.length){let t=n.toArray(),i=e.toArray(),o=0;for(let d=0;d<a+1;d++)t[d].group&&t[d].group===i[o]&&o++;return o}return 0}function Ii(a,n,e,t){return a<e?a:a+n>e+t?Math.max(0,a-t+n):e}var Oi=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Eo({type:a});static ɵinj=Qn({imports:[Q]})}return a})();var at=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Eo({type:a});static ɵinj=Qn({imports:[Ca,Oi,le,Q]})}return a})();var Ui=new E(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=h(ce);return()=>fr$1(a)}});var Wi=new E(`MAT_SELECT_CONFIG`);var Yi=new E(`MatSelectTrigger`);var nt=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Pi=(()=>{class a{_viewportRuler=h(he$1);_changeDetectorRef=h(Bi$1);_elementRef=h(on);_dir=h(jt,{optional:!0});_idGenerator=h(ut);_renderer=h(fr);_parentFormField=h(er,{optional:!0});ngControl=h(Wt,{self:!0,optional:!0});_liveAnnouncer=h(Ni$1);_defaultOptions=h(Wi,{optional:!0});_animationsDisabled=yt();_popoverLocation;_initialized=new ee;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,o=Mi(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=Ii(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new nt(this,e)}_scrollStrategyFactory=h(Ui);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new ee;_errorStateTracker;stateChanges=new ee;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=at$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ze$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Go(()=>{let e=this.options;return e?e.changes.pipe($u(e),ze(()=>UC(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ze(()=>this.optionSelectionChanges))});openedChange=new Ae;_openedStream=this.openedChange.pipe(Te(e=>e),G(()=>{}));_closedStream=this.openedChange.pipe(Te(e=>!e),G(()=>{}));selectionChange=new Ae;valueChange=new Ae;constructor(){let e=h(xo),t=h(Zi$1,{optional:!0}),i=h(Qi$1,{optional:!0}),o=h(new wp(`tabindex`),{optional:!0}),d=h(br,{optional:!0}),p=h(oo,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Un(e,p||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=d?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new he(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Hn(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Hn(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe($u(null),Hn(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(gn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,o=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&o&&!yn(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let p=this.selected;d.onKeydown(e);let u=this.selected;u&&p!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,o=i===40||i===38,d=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!yn(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let p=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(p?u.select():u.deselect())})}else{let p=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!yn(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof ur?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Mi$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=UC(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Hn(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),UC(...this.options.map(t=>t._stateChanges)).pipe(Hn(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=ot(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],i=[[[`mat-select-trigger`]],`*`],o=[`mat-select-trigger`,`*`];function d(g,f){if(g&1&&(ac(0,`span`,4),XN(1),ep()),g&2){let m=bN();xT(),yE(m.placeholder)}}function p(g,f){g&1&&_N(0)}function u(g,f){if(g&1&&(ac(0,`span`,11),XN(1),ep()),g&2){let m=bN(2);xT(),yE(m.triggerValue)}}function _(g,f){if(g&1&&(ac(0,`span`,5),sN(1,p,1,0)(2,u,2,1,`span`,11),ep()),g&2){let m=bN();xT(),cN(m.customTrigger?1:2)}}function r(g,f){if(g&1){let m=vN();ac(0,`div`,12,1),sp(`keydown`,function(A){Vg(m);let Fi=bN();return Hg(Fi._handleKeydown(A))}),_N(2,1),ep()}if(g&2){let m=bN();VN(m.panelClass),uE(`mat-select-panel-animations-enabled`,!m._animationsDisabled)(`mat-primary`,m._parentFormField?.color===`primary`)(`mat-accent`,m._parentFormField?.color===`accent`)(`mat-warn`,m._parentFormField?.color===`warn`)(`mat-undefined`,!m._parentFormField?.color),Xf(`id`,m.id+`-panel`)(`aria-multiselectable`,m.multiple)(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,m._getPanelAriaLabelledby())}}return Wf({type:a,selectors:[[`mat-select`]],contentQueries:function(f,m,S){if(f&1&&ap(S,Yi,5)(S,le,5)(S,it,5),f&2){let A;nE(A=rE())&&(m.customTrigger=A.first),nE(A=rE())&&(m.options=A),nE(A=rE())&&(m.optionGroups=A)}},viewQuery:function(f,m){if(f&1&&tE(e,5)(t,5)(td,5),f&2){let S;nE(S=rE())&&(m.trigger=S.first),nE(S=rE())&&(m.panel=S.first),nE(S=rE())&&(m._overlayDir=S.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(f,m){f&1&&sp(`keydown`,function(A){return m._handleKeydown(A)})(`focus`,function(){return m._onFocus()})(`blur`,function(){return m._onBlur()}),f&2&&(Xf(`id`,m.id)(`tabindex`,m.disabled?-1:m.tabIndex)(`aria-controls`,m.panelOpen?m.id+`-panel`:null)(`aria-expanded`,m.panelOpen)(`aria-label`,m.ariaLabel||null)(`aria-required`,m.required.toString())(`aria-disabled`,m.disabled.toString())(`aria-invalid`,m.errorState)(`aria-activedescendant`,m._getAriaActiveDescendant()),uE(`mat-mdc-select-disabled`,m.disabled)(`mat-mdc-select-invalid`,m.errorState)(`mat-mdc-select-required`,m.required)(`mat-mdc-select-empty`,m.empty)(`mat-mdc-select-multiple`,m.multiple)(`mat-select-open`,m.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,lI],disableRipple:[2,`disableRipple`,`disableRipple`,lI],tabIndex:[2,`tabIndex`,`tabIndex`,g=>g==null?0:jA(g)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,lI],placeholder:`placeholder`,required:[2,`required`,`required`,lI],multiple:[2,`multiple`,`multiple`,lI],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,lI],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,jA],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,lI]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[iR([{provide:tr,useExisting:a},{provide:tt,useExisting:a}]),ho],ngContentSelectors:o,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(f,m){if(f&1&&(TN(i),ac(0,`div`,2,0),sp(`click`,function(){return m.open()}),ac(3,`div`,3),sN(4,d,2,1,`span`,4)(5,_,3,1,`span`,5),ep(),ac(6,`div`,6)(7,`div`,7),nm(),ac(8,`svg`,8),Rc(9,`path`,9),ep()()()(),LD(10,r,3,16,`ng-template`,10),sp(`detach`,function(){return m.close()})(`backdropClick`,function(){return m.close()})(`overlayKeydown`,function(A){return m._handleOverlayKeydown(A)})),f&2){let S=RN(1);xT(3),Xf(`id`,m._valueId),xT(),cN(m.empty?4:5),xT(6),qD(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,m._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,m._scrollStrategy)(`cdkConnectedOverlayOrigin`,m._preferredOverlayOrigin||S)(`cdkConnectedOverlayPositions`,m._positions)(`cdkConnectedOverlayWidth`,m._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,m._popoverLocation)}},dependencies:[ur,td],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return a})();var Ni=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Eo({type:a});static ɵinj=Qn({imports:[qo,at,Q,rr,ir,at]})}return a})();var Ki=20;var Qi=new E(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=h(ce);return()=>fr$1(a,{scrollThrottle:Ki})}});var $i=new E(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ei=`tooltip-panel`;var Xi={passive:!0};var Zi=8;var Ji=8;var ea=24;var ta=200;var zi=(()=>{class a{_elementRef=h(on);_ngZone=h(J);_platform=h(k);_ariaDescriber=h(Zc);_focusMonitor=h(Si$1);_dir=h(jt);_injector=h(ce);_viewContainerRef=h(Mn);_mediaMatcher=h(gn$1);_document=h(Y);_renderer=h(fr);_animationsDisabled=yt();_defaultOptions=h($i,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=ia;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ce$1(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=ce$1(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=yi(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=yi(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Zi}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Hn(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new be$1(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Hn(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let d=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&d._origin instanceof on)return this._overlayRef;this._detach()}let t=this._injector.get(Ue).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Ei}`,o=hr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return o.positionChanges.pipe(Hn(this._destroyed)).subscribe(d=>{this._updateCurrentPositionClass(d.connectionPair),this._tooltipInstance&&d.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=$e(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Qi)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Hn(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Hn(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Hn(this._destroyed)).subscribe(d=>{d.preventDefault(),d.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Hn(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(v(v({},i.main),o.main)),this._addOffset(v(v({},i.fallback),o.fallback))])}_addOffset(e){let t=Ji,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=i?-t:t:e.originX===`end`&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`||t==`below`?i={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:o,y:d}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:d}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`?i={overlayX:`center`,overlayY:`bottom`}:t==`below`?i={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:d}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:d}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),yc(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:o}=e,d;if(t===`center`?this._dir&&this._dir.value===`rtl`?d=i===`end`?`left`:`right`:d=i===`start`?`left`:`right`:d=t===`bottom`&&o===`top`?`above`:`below`,d!==this._currentPosition){let p=this._overlayRef;if(p){let u=`${this._cssClassPrefix}-${Ei}-`;p.removePanelClass(u+this._currentPosition),p.addPanelClass(u+d)}this._currentPosition=d}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Xi))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,i=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||yc({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!yn(e):!0;static ɵfac=function(t){return new(t||a)};static ɵdir=Dr({type:a,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,i){t&2&&uE(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return a})();var ia=(()=>{class a{_changeDetectorRef=h(Bi$1);_elementRef=h(on);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=yt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ea&&e.width>=ta}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:i),t.classList.add(e?i:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let d=getComputedStyle(t);(d.getPropertyValue(`animation-duration`)===`0s`||d.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`tooltip`];return Wf({type:a,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,o){if(i&1&&tE(e,7),i&2){let d;nE(d=rE())&&(o._tooltip=d.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,o){i&1&&sp(`mouseleave`,function(p){return o._handleMouseLeave(p)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,o){i&1&&(tp(0,`div`,1,0),eE(`animationend`,function(p){return o._handleAnimationEnd(p)}),tp(2,`div`,2),XN(3),np()()),i&2&&(VN(o.tooltipClass),uE(`mdc-tooltip--multiline`,o._isMultiline),xT(3),yE(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return a})();var Ri=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Eo({type:a});static ɵinj=Qn({imports:[Cs,qo,Q,rr]})}return a})();var be=(()=>{class a{changes=new ee;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*t,d=o<i?Math.min(o+t,i):o+t;return`${o+1} \u2013 ${d} of ${i}`};static ɵfac=function(t){return new(t||a)};static ɵprov=Z({token:a,factory:a.ɵfac})}return a})();var aa=50;var na=new E(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var rt=(()=>{class a{_intl=h(be);_changeDetectorRef=h(Bi$1);_formFieldAppearance;_pageSizeLabelId=h(ut).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new Pr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>jA(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Ae;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=h(na,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:o,hidePageSize:d,showFirstLastButtons:p}=t;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),d!=null&&(this.hidePageSize=d),p!=null&&(this.showFirstLastButtons=p)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:aa),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(u,_){if(u&1&&(ac(0,`mat-option`,17),XN(1),ep()),u&2){let r=_.$implicit;qD(`value`,r),xT(),cp(` `,r,` `)}}function t(u,_){if(u&1){let r=vN();ac(0,`mat-form-field`,14)(1,`mat-select`,16,0),sp(`selectionChange`,function(f){Vg(r);let m=bN(2);return Hg(m._changePageSize(f.value))}),lN(3,e,2,2,`mat-option`,17,uN),ep(),ac(5,`div`,18),sp(`click`,function(){Vg(r);let f=RN(2);return Hg(f.open())}),ep()()}if(u&2){let r=bN(2);qD(`appearance`,r._formFieldAppearance)(`color`,r.color),xT(),qD(`value`,r.pageSize)(`disabled`,r.disabled),GD(`aria-labelledby`,r._pageSizeLabelId),qD(`panelClass`,r.selectConfig.panelClass||``)(`disableOptionCentering`,r.selectConfig.disableOptionCentering),xT(2),dN(r._displayedPageSizeOptions)}}function i(u,_){if(u&1&&(ac(0,`div`,15),XN(1),ep()),u&2){let r=bN(2);xT(),yE(r.pageSize)}}function o(u,_){if(u&1&&(ac(0,`div`,3)(1,`div`,13),XN(2),ep(),sN(3,t,6,7,`mat-form-field`,14),sN(4,i,2,1,`div`,15),ep()),u&2){let r=bN();xT(),Xf(`id`,r._pageSizeLabelId),xT(),cp(` `,r._intl.itemsPerPageLabel,` `),xT(),cN(r._displayedPageSizeOptions.length>1?3:-1),xT(),cN(r._displayedPageSizeOptions.length<=1?4:-1)}}function d(u,_){if(u&1){let r=vN();ac(0,`button`,19),sp(`click`,function(){Vg(r);let f=bN();return Hg(f._buttonClicked(0,f._previousButtonsDisabled()))}),nm(),ac(1,`svg`,8),Rc(2,`path`,20),ep()()}if(u&2){let r=bN();qD(`matTooltip`,r._intl.firstPageLabel)(`matTooltipDisabled`,r._previousButtonsDisabled())(`disabled`,r._previousButtonsDisabled())(`tabindex`,r._previousButtonsDisabled()?-1:null),Xf(`aria-label`,r._intl.firstPageLabel)}}function p(u,_){if(u&1){let r=vN();ac(0,`button`,21),sp(`click`,function(){Vg(r);let f=bN();return Hg(f._buttonClicked(f.getNumberOfPages()-1,f._nextButtonsDisabled()))}),nm(),ac(1,`svg`,8),Rc(2,`path`,22),ep()()}if(u&2){let r=bN();qD(`matTooltip`,r._intl.lastPageLabel)(`matTooltipDisabled`,r._nextButtonsDisabled())(`disabled`,r._nextButtonsDisabled())(`tabindex`,r._nextButtonsDisabled()?-1:null),Xf(`aria-label`,r._intl.lastPageLabel)}}return Wf({type:a,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,jA],length:[2,`length`,`length`,jA],pageSize:[2,`pageSize`,`pageSize`,jA],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,lI],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,lI],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,lI]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(_,r){_&1&&(ac(0,`div`,1)(1,`div`,2),sN(2,o,5,4,`div`,3),ac(3,`div`,4)(4,`div`,5),XN(5),ep(),sN(6,d,3,5,`button`,6),ac(7,`button`,7),sp(`click`,function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),nm(),ac(8,`svg`,8),Rc(9,`path`,9),ep()(),rm(),ac(10,`button`,10),sp(`click`,function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),nm(),ac(11,`svg`,8),Rc(12,`path`,11),ep()(),sN(13,p,3,5,`button`,12),ep()()()),_&2&&(xT(2),cN(r.hidePageSize?-1:2),xT(3),cp(` `,r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length),` `),xT(),cN(r.showFirstLastButtons?6:-1),xT(),qD(`matTooltip`,r._intl.previousPageLabel)(`matTooltipDisabled`,r._previousButtonsDisabled())(`disabled`,r._previousButtonsDisabled())(`tabindex`,r._previousButtonsDisabled()?-1:null),Xf(`aria-label`,r._intl.previousPageLabel),xT(3),qD(`matTooltip`,r._intl.nextPageLabel)(`matTooltipDisabled`,r._nextButtonsDisabled())(`disabled`,r._nextButtonsDisabled())(`tabindex`,r._nextButtonsDisabled()?-1:null),Xf(`aria-label`,r._intl.nextPageLabel),xT(3),cN(r.showFirstLastButtons?13:-1))},dependencies:[nr,Pi,le,Fs,zi],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return a})();var Ai=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Eo({type:a});static ɵinj=Qn({imports:[Ls,Ni,Ri,rt]})}return a})();var qe=class a extends be{itemsPerPageLabel=`Itens por página:`;nextPageLabel=`Próxima página`;previousPageLabel=`Página anterior`;firstPageLabel=`Primeira página`;lastPageLabel=`Última página`;getRangeLabel=(n,e,t)=>{if(t===0||e===0)return`0 de ${t}`;let i=n*e,o=Math.min(i+e,t);return`${i+1} \u2013 ${o} de ${t}`};static ɵfac=(()=>{let n;return function(t){return(n||(n=Sy(a)))(t||a)}})();static ɵprov=N({token:a,factory:a.ɵfac})};var ra=(a,n)=>n.id;function sa(a,n){if(a&1&&(ac(0,`div`,34),XN(1),ep(),ac(2,`div`,34),XN(3),ep()),a&2){let e=n;xT(),cp(` Desaparecidos: `,e.quantPessoasDesaparecidas,` `),xT(2),cp(`Localizados: `,e.quantPessoasEncontradas)}}function la(a,n){if(a&1){let e=vN();ac(0,`div`,32)(1,`mat-icon`,35),XN(2,`error_outline`),ep(),ac(3,`p`),XN(4),ep(),ac(5,`button`,36),sp(`click`,function(){Vg(e);let i=bN();return Hg(i.tentarNovamente())}),ac(6,`mat-icon`),XN(7,`refresh`),ep(),XN(8,` Tentar de novo `),ep()()}a&2&&(xT(4),yE(n))}function da(a,n){if(a&1){let e=vN();ac(0,`li`,40)(1,`mat-card`,41),Rc(2,`img`,42),ac(3,`mat-card-content`)(4,`h3`)(5,`button`,43),sp(`click`,function(){let i=Vg(e).$implicit,o=bN(3);return Hg(o.abrirDetalhes(i.id))}),XN(6),ep()(),ac(7,`div`,44),XN(8),ep(),ac(9,`dl`,45)(10,`div`)(11,`dt`,46),XN(12,`Data:`),ep(),ac(13,`dd`,47),XN(14),lR(15,`date`),ep()(),ac(16,`div`)(17,`dt`,46),XN(18,`Local:`),ep(),ac(19,`dd`,47),XN(20),ep()()()()()()}if(a&2){let e=n.$implicit;xT(2),qD(`src`,e.urlFoto||`./assets/semfoto.jpg`),xT(4),cp(` `,e.nome,` `),xT(2),vE(` `,e.idade,` Anos, `,e.sexo,` `),xT(6),cp(` `,fR(15,6,e.ultimaOcorrencia?.dtDesaparecimento,`dd/MM/yyyy HH:mm`),` `),xT(6),cp(` `,e.ultimaOcorrencia?.localDesaparecimentoConcat,` `)}}function ca(a,n){if(a&1&&(ac(0,`ul`,37),lN(1,da,21,9,`li`,40,ra),ep()),a&2){let e=bN();xT(),dN(e.content)}}function ma(a,n){a&1&&(ac(0,`p`,38),XN(1,` Nenhuma pessoa encontrada com esses filtros. `),ep())}function pa(a,n){if(a&1){let e=vN();sN(0,ca,3,0,`ul`,37)(1,ma,2,0,`p`,38),ac(2,`mat-paginator`,39),sp(`page`,function(i){Vg(e);let o=bN();return Hg(o.handlePagination(i))}),ep()}if(a&2){let e=n,t=bN();cN(e.content?.length?0:1),xT(2),qD(`pageIndex`,t.paginacao().page)(`pageSize`,t.paginacao().size)(`hidePageSize`,!0)(`length`,e.totalElements)}}function ua(a,n){a&1&&(ac(0,`div`,33),Rc(1,`mat-spinner`,48),ep())}var Li=class a{_facade=h(Xo);_fb=h(ku);form;formularioConsulta;localizadosDesaparecidos=h4(this._facade.localizadosDesaparecidos$);listaPessoas=h4(this._facade.listaPessoas$.pipe(Te(n=>!!n?.content)));paginacao=h4(this._facade.controlePaginacao$,{requireSync:!0});erroConsulta=h4(this._facade.erroConsulta$,{initialValue:null});resumoResultados=wo(()=>{let n=this.listaPessoas()?.totalElements;return n==null?``:n===0?`Nenhuma pessoa encontrada.`:n===1?`1 pessoa encontrada.`:`${n} pessoas encontradas.`});constructor(){this.criarForm(),this._facade.loadInitialData(),this._facade.formularioConsulta$.pipe(p4()).subscribe(n=>{n&&(this.formularioConsulta=n,this.criarForm())})}criarForm(){this.form=this._fb.group({nome:[this.formularioConsulta?.nome||``],faixaIdadeInicial:[this.formularioConsulta?.faixaIdadeInicial||``],faixaIdadeFinal:[this.formularioConsulta?.faixaIdadeFinal||``],sexo:[this.formularioConsulta?.sexo||``],status:[this.formularioConsulta?.status||``]})}consultarDesaparecidos(){this._facade.adicionarFormularioState(this.form.value),this._facade.resetPagination(),this._facade.consultarDesaparecidos()}abrirDetalhes(n){this._facade.getIdDetalhes(n)}handlePagination(n){this._facade.handlePagination(n)}tentarNovamente(){this._facade.tentarNovamente()}resetForm(){this.form.reset(),this.consultarDesaparecidos()}static ɵfac=function(e){return new(e||a)};static ɵcmp=Wf({type:a,selectors:[[`app-desaparecidos`]],features:[iR([{provide:be,useClass:qe}])],decls:59,vars:4,consts:[[`aria-label`,`Totalizadores`,1,`flex`,`flex-row`,`flex-wrap`,`gap-x-6`,`justify-evenly`,`py-3`,`pb-5`],[1,`pb-5`],[1,`flex`,`flex-col`,`md:flex-row`],[1,`w-full`,`md:w-3/12`,`rounded-t-lg`],[`id`,`titulo-consulta`,1,`bg-gray-600`,`text-white`,`py-2`,`text-2xl`,`rounded-t-lg`,`justify-normal`],[`role`,`search`,`aria-labelledby`,`titulo-consulta`,1,`bg-gray-200`,`gap-2`,`h-full`,3,`ngSubmit`,`formGroup`],[1,`pt-2`,`px-4`],[`for`,`filtro-nome`,1,`block`,`text-left`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`id`,`filtro-nome`,`type`,`text`,`formControlName`,`nome`,`autocomplete`,`off`,1,`!uppercase`],[`role`,`group`,`aria-labelledby`,`filtro-idade`,1,`px-4`],[`id`,`filtro-idade`,1,`block`,`text-left`,`mb-2`],[`matInput`,``,`type`,`number`,`inputmode`,`numeric`,`formControlName`,`faixaIdadeInicial`,`min`,`0`],[`matInput`,``,`type`,`number`,`inputmode`,`numeric`,`formControlName`,`faixaIdadeFinal`,`min`,`0`],[1,`px-4`],[`id`,`filtro-sexo`,1,`text-left`],[`aria-labelledby`,`filtro-sexo`,`formControlName`,`sexo`,1,`flex`,`flex-col`,`text-start`],[`value`,`MASCULINO`],[`value`,`FEMININO`],[1,`px-4`,`mt-2`],[`id`,`filtro-status`,1,`text-left`],[`aria-labelledby`,`filtro-status`,`formControlName`,`status`,1,`flex`,`flex-col`,`text-start`],[`value`,`DESAPARECIDO`],[`value`,`LOCALIZADO`],[1,`flex`,`flex-col`,`w-6/8`,`gap-3`,`mt-6`,`pb-6`],[`mat-raised-button`,``,`type`,`submit`,1,`!bg-green-700`],[1,`size-10`,`!text-white`],[1,`!text-white`],[`mat-raised-button`,``,`type`,`button`,1,`!bg-red-700`,3,`click`],[`aria-labelledby`,`titulo-resultados`,1,`w-full`,`md:w-9/12`,`px-2`],[`id`,`titulo-resultados`,1,`sr-only`],[`id`,`resumo-resultados`,`aria-live`,`polite`,`aria-atomic`,`true`,1,`sr-only`],[`role`,`alert`,1,`flex`,`flex-col`,`items-center`,`gap-3`,`rounded-lg`,`border`,`border-red-300`,`bg-red-50`,`p-6`,`text-red-800`],[1,`spinner-container`],[1,`text-xl`],[`aria-hidden`,`true`],[`mat-raised-button`,``,`type`,`button`,3,`click`],[`role`,`list`,1,`grid`,`grid-cols-1`,`sm:grid-cols-2`,`lg:grid-cols-3`,`gap-3`,`mt-3`,`md:mt-0`],[1,`py-10`,`text-lg`],[1,`w-full`,3,`page`,`pageIndex`,`pageSize`,`hidePageSize`,`length`],[1,`flex`],[`appearance`,`outlined`,1,`relative`,`w-full`,`focus-within:outline-3`,`focus-within:outline-offset-2`,`focus-within:outline-blue-700`],[`alt`,``,`width`,`300`,`height`,`240`,`loading`,`lazy`,1,`w-full`,`h-60`,`object-cover`,`p-2`,`rounded-t-lg`,3,`src`],[`type`,`button`,1,`cursor-pointer`,`text-sm`,`font-medium`,`after:absolute`,`after:inset-0`,`after:content-['']`,`focus:outline-none`,3,`click`],[1,`text-gray-700`,`text-sm`],[1,`mt-2`,`text-left`],[1,`inline`,`font-semibold`],[1,`inline`],[`diameter`,`50`,`aria-label`,`Carregando a lista de pessoas`]],template:function(e,t){if(e&1&&(ac(0,`section`,0),sN(1,sa,4,2),ep(),Rc(2,`hr`,1),ac(3,`div`,2)(4,`div`,3)(5,`h2`,4),XN(6,` Consulta `),ep(),ac(7,`form`,5),sp(`ngSubmit`,function(){return t.consultarDesaparecidos()}),ac(8,`div`,6)(9,`label`,7),XN(10,`Nome`),ep(),ac(11,`mat-form-field`,8)(12,`input`,9),N_(),ep()()(),ac(13,`div`,10)(14,`span`,11),XN(15,`Faixa Etária`),ep(),ac(16,`mat-form-field`,8)(17,`mat-label`),XN(18,`Idade mínima`),ep(),ac(19,`input`,12),N_(),ep()(),ac(20,`mat-form-field`,8)(21,`mat-label`),XN(22,`Idade máxima`),ep(),ac(23,`input`,13),N_(),ep()()(),ac(24,`div`,14)(25,`p`,15),XN(26,`Sexo`),ep(),ac(27,`mat-radio-group`,16),N_(),ac(28,`mat-radio-button`,17),XN(29,`Masculino`),ep(),ac(30,`mat-radio-button`,18),XN(31,`Feminino`),ep()()(),ac(32,`div`,19)(33,`p`,20),XN(34,`Status`),ep(),ac(35,`mat-radio-group`,21),N_(),ac(36,`mat-radio-button`,22),XN(37,`Desaparecido`),ep(),ac(38,`mat-radio-button`,23),XN(39,`Localizado`),ep()()(),ac(40,`div`,24)(41,`button`,25)(42,`mat-icon`,26),XN(43,`search`),ep(),ac(44,`span`,27),XN(45,` Consultar `),ep()(),ac(46,`button`,28),sp(`click`,function(){return t.resetForm()}),ac(47,`mat-icon`,26),XN(48,`close`),ep(),ac(49,`span`,27),XN(50,` Limpar `),ep()()()()(),ac(51,`section`,29)(52,`h2`,30),XN(53,`Resultados`),ep(),ac(54,`p`,31),XN(55),ep(),sN(56,la,9,1,`div`,32)(57,pa,3,5)(58,ua,2,0,`div`,33),ep()()),e&2){let i,o;xT(),cN((i=t.localizadosDesaparecidos())?1:-1,i),xT(6),qD(`formGroup`,t.form),xT(5),A_(),xT(7),A_(),xT(4),A_(),xT(4),A_(),xT(8),A_(),xT(20),cp(` `,t.resumoResultados(),` `),xT(),cN((o=t.erroConsulta())?56:(o=t.listaPessoas())?57:58,o)}},dependencies:[Ls,Na,Ap,Ip,nr,jn,Du,Eu,Ta,Sl,wu,Nu,nl,Iu,Qi$1,wl,Ci,Je,Be,th,Jp,mh,dh,ch,Mg,Ng,Ai,rt,c0],styles:[`@charset "UTF-8";[_nghost-%COMP%]     .mat-mdc-text-field-wrapper{background-color:#fff}.spinner-container[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999}`]})};export{Li as DesaparecidosComponent};