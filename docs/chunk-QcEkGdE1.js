import{$ as QE,$n as zP,$t as eN,An as pb,B as MA,C as H6,Cn as ne$1,Dt as Xm,E as Hn,G as Nh,Gn as xA,Hn as ts,In as se,J as Oe,Jt as dF,Kn as xR,L as Lm,Ln as st,M as Je,N as Jm,Nn as rp,Nt as Zi,Ot as Xt,Pt as Zr,Q as QA,Qn as zA,R as Ln,Rn as su,T as Hh,Tt as XM,U as NO,Ut as bt,W as Nc,Xt as de,_ as E6,_t as Un,a as AA,an as hC,b as G6,bt as WA,cn as he,ct as RR,dn as j6,en as ee,f as D,g as Dn,gn as kt$1,gt as UE,ht as UA,i as A,in as gF,j as JE,jn as pt,kn as p,kt as YA,l as B6,ln as hg,m as DR,n as $6,on as hF,ot as RA,p as D6,pn as jm,q as OA,qn as xo,r as $h,tn as fC,tt as Qc,u as BE,un as iO,vt as V6,wt as XE,xn as nM,y as Fh,yt as W}from"./main-YX5JUFS7.js";import{$ as xh,C as Tn,D as Zb,E as Y,H as pe,I as gf,J as th,K as st$1,N as et,O as Zn,Q as vf,Y as ti,a as Fn,c as Jf,d as Oh,g as Qr,h as Qo,j as ar,l as No,m as Qa,nt as zn,p as Q,r as Ah,rt as zo,s as Ho,tt as zi,u as Ob,v as Rb,w as Ue,x as Sh,y as Rh}from"./chunk-D47HfnMJ.js";var vt=(()=>{class a{labelPosition=`after`;static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){return Nh({type:a,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,m){r&2&&ts(`mdc-form-field--align-end`,m.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,m){r&1&&(WA(),YA(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})})()}return a})();var ie=class{source;value;constructor(s,e){this.source=s,this.value=e}};var zt={provide:hg,useExisting:st(()=>le),multi:!0};var yt=new D(`MatRadioGroup`);var Mt=new D(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var le=(()=>{class a{_changeDetector=p(Hn);_value=null;_name=p(et).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new he;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ie(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||a)};static ɵdir=de({type:a,selectors:[[`mat-radio-group`]],contentQueries:function(t,r,m){if(t&1&&Hh(m,ne,5),t&2){let b;XE(b=JE())&&(r._radios=b)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,su],required:[2,`required`,`required`,su],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,su]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Dn([zt,{provide:yt,useExisting:a}])]})}return a})();var ne=(()=>{class a{_elementRef=p(pt);_changeDetector=p(Hn);_focusMonitor=p(pe);_radioDispatcher=p(Qo);_defaultOptions=p(Mt,{optional:!0});_ngZone=p(ne$1);_renderer=p(kt$1);_uniqueId=p(et).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new he;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Q();_injector=p(se);constructor(){p(st$1).load(Tn);let e=p(yt,{optional:!0}),t=p(new rp(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=iO(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ie(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,Zi(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`input`],t=[`formField`];return Nh({type:a,selectors:[[`mat-radio-button`]],viewQuery:function(b,l){if(b&1&&QE(e,5)(t,7,pt),b&2){let p;XE(p=JE())&&(l._inputElement=p.first),XE(p=JE())&&(l._rippleTrigger=p.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(b,l){b&1&&Un(`focus`,function(){return l._inputElement.nativeElement.focus()}),b&2&&(xo(`id`,l.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),ts(`mat-primary`,l.color===`primary`)(`mat-accent`,l.color===`accent`)(`mat-warn`,l.color===`warn`)(`mat-mdc-radio-checked`,l.checked)(`mat-mdc-radio-disabled`,l.disabled)(`mat-mdc-radio-disabled-interactive`,l.disabledInteractive)(`_mat-animation-noopable`,l._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,su],tabIndex:[2,`tabIndex`,`tabIndex`,m=>m==null?0:iO(m)],checked:[2,`checked`,`checked`,su],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,su],required:[2,`required`,`required`,su],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,su]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(b,l){b&1&&(WA(),Nc(0,`label`,2,0)(2,`span`,3),Qc(3,`span`,4),Nc(4,`input`,5,1),Un(`change`,function(y){return l._onInputInteraction(y)}),Fh(),Nc(6,`span`,6),Qc(7,`span`,7)(8,`span`,8),Fh(),Nc(9,`span`,9),Qc(10,`span`,10),Fh()(),Nc(11,`span`,11),YA(12),Fh()()),b&2&&(BE(`labelPosition`,l.labelPosition)(`for`,l.inputId),nM(2),ts(`mdc-radio--disabled`,l.disabled),nM(2),BE(`id`,l.inputId)(`checked`,l.checked)(`disabled`,l.disabled&&!l.disabledInteractive)(`required`,l.required),xo(`name`,l.name)(`value`,l.value)(`aria-label`,l.ariaLabel)(`aria-labelledby`,l.ariaLabelledby)(`aria-describedby`,l.ariaDescribedby)(`aria-disabled`,l.disabled&&l.disabledInteractive?`true`:null),nM(5),BE(`matRippleTrigger`,l._rippleTrigger.nativeElement)(`matRippleDisabled`,l._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[Qa,vt],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})})()}return a})();var xt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Xt({type:a});static ɵinj=bt({imports:[Fn,ne,Y]})}return a})();var kt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Xt({type:a});static ɵinj=bt({imports:[No,Zn,Y,Ue]})}return a})();var $=(()=>{class a{changes=new ee;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,r)=>{if(r==0||t==0)return`0 of ${r}`;r=Math.max(r,0);let m=e*t,b=m<r?Math.min(m+t,r):m+t;return`${m+1} \u2013 ${b} of ${r}`};static ɵfac=function(t){return new(t||a)};static ɵprov=W({token:a,factory:a.ɵfac})}return a})();var Dt=50;var Nt=new D(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var ce=(()=>{class a{_intl=p($);_changeDetectorRef=p(Hn);_formFieldAppearance;_pageSizeLabelId=p(et).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new Zr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>iO(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new he;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=p(Nt,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:r,pageSizeOptions:m,hidePageSize:b,showFirstLastButtons:l}=t;r!=null&&(this._pageSize=r),m!=null&&(this._pageSizeOptions=m),b!=null&&(this.hidePageSize=b),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Dt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(p,y){if(p&1&&(Nc(0,`mat-option`,17),DR(1),Fh()),p&2){let n=y.$implicit;BE(`value`,n),nM(),$h(` `,n,` `)}}function t(p,y){if(p&1){let n=UA();Nc(0,`mat-form-field`,14)(1,`mat-select`,16,0),Un(`selectionChange`,function(k){Lm(n);let Ct=zA(2);return jm(Ct._changePageSize(k.value))}),OA(3,e,2,2,`mat-option`,17,RA),Fh(),Nc(5,`div`,18),Un(`click`,function(){Lm(n);let k=QA(2);return jm(k.open())}),Fh()()}if(p&2){let n=zA(2);BE(`appearance`,n._formFieldAppearance)(`color`,n.color),nM(),BE(`value`,n.pageSize)(`disabled`,n.disabled),UE(`aria-labelledby`,n._pageSizeLabelId),BE(`panelClass`,n.selectConfig.panelClass||``)(`disableOptionCentering`,n.selectConfig.disableOptionCentering),nM(2),xA(n._displayedPageSizeOptions)}}function r(p,y){if(p&1&&(Nc(0,`div`,15),DR(1),Fh()),p&2){let n=zA(2);nM(),fC(n.pageSize)}}function m(p,y){if(p&1&&(Nc(0,`div`,3)(1,`div`,13),DR(2),Fh(),MA(3,t,6,7,`mat-form-field`,14),MA(4,r,2,1,`div`,15),Fh()),p&2){let n=zA();nM(),xo(`id`,n._pageSizeLabelId),nM(),$h(` `,n._intl.itemsPerPageLabel,` `),nM(),AA(n._displayedPageSizeOptions.length>1?3:-1),nM(),AA(n._displayedPageSizeOptions.length<=1?4:-1)}}function b(p,y){if(p&1){let n=UA();Nc(0,`button`,19),Un(`click`,function(){Lm(n);let k=zA();return jm(k._buttonClicked(0,k._previousButtonsDisabled()))}),Xm(),Nc(1,`svg`,8),Qc(2,`path`,20),Fh()()}if(p&2){let n=zA();BE(`matTooltip`,n._intl.firstPageLabel)(`matTooltipDisabled`,n._previousButtonsDisabled())(`disabled`,n._previousButtonsDisabled())(`tabindex`,n._previousButtonsDisabled()?-1:null),xo(`aria-label`,n._intl.firstPageLabel)}}function l(p,y){if(p&1){let n=UA();Nc(0,`button`,21),Un(`click`,function(){Lm(n);let k=zA();return jm(k._buttonClicked(k.getNumberOfPages()-1,k._nextButtonsDisabled()))}),Xm(),Nc(1,`svg`,8),Qc(2,`path`,22),Fh()()}if(p&2){let n=zA();BE(`matTooltip`,n._intl.lastPageLabel)(`matTooltipDisabled`,n._nextButtonsDisabled())(`disabled`,n._nextButtonsDisabled())(`tabindex`,n._nextButtonsDisabled()?-1:null),xo(`aria-label`,n._intl.lastPageLabel)}}return Nh({type:a,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,iO],length:[2,`length`,`length`,iO],pageSize:[2,`pageSize`,`pageSize`,iO],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,su],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,su],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,su]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(y,n){y&1&&(Nc(0,`div`,1)(1,`div`,2),MA(2,m,5,4,`div`,3),Nc(3,`div`,4)(4,`div`,5),DR(5),Fh(),MA(6,b,3,5,`button`,6),Nc(7,`button`,7),Un(`click`,function(){return n._buttonClicked(n.pageIndex-1,n._previousButtonsDisabled())}),Xm(),Nc(8,`svg`,8),Qc(9,`path`,9),Fh()(),Jm(),Nc(10,`button`,10),Un(`click`,function(){return n._buttonClicked(n.pageIndex+1,n._nextButtonsDisabled())}),Xm(),Nc(11,`svg`,8),Qc(12,`path`,11),Fh()(),MA(13,l,3,5,`button`,12),Fh()()()),y&2&&(nM(2),AA(n.hidePageSize?-1:2),nM(3),$h(` `,n._intl.getRangeLabel(n.pageIndex,n.pageSize,n.length),` `),nM(),AA(n.showFirstLastButtons?6:-1),nM(),BE(`matTooltip`,n._intl.previousPageLabel)(`matTooltipDisabled`,n._previousButtonsDisabled())(`disabled`,n._previousButtonsDisabled())(`tabindex`,n._previousButtonsDisabled()?-1:null),xo(`aria-label`,n._intl.previousPageLabel),nM(3),BE(`matTooltip`,n._intl.nextPageLabel)(`matTooltipDisabled`,n._nextButtonsDisabled())(`disabled`,n._nextButtonsDisabled())(`tabindex`,n._nextButtonsDisabled()?-1:null),xo(`aria-label`,n._intl.nextPageLabel),nM(3),AA(n.showFirstLastButtons?13:-1))},dependencies:[zi,gf,ti,zo,Zb],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2})})()}return a})();var St=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Xt({type:a});static ɵinj=bt({imports:[Ho,vf,kt,ce]})}return a})();var oe=class a extends ${itemsPerPageLabel=`Itens por página:`;nextPageLabel=`Próxima página`;previousPageLabel=`Página anterior`;firstPageLabel=`Primeira página`;lastPageLabel=`Última página`;getRangeLabel=(s,e,t)=>{if(t===0||e===0)return`0 de ${t}`;let r=s*e,m=Math.min(r+e,t);return`${r+1} \u2013 ${m} de ${t}`};static ɵfac=(()=>{let s;return function(t){return(s||(s=Ln(a)))(t||a)}})();static ɵprov=A({token:a,factory:a.ɵfac})};var Tt=(a,s)=>s.id;function Et(a,s){if(a&1&&(Nc(0,`div`,34),DR(1),Fh(),Nc(2,`div`,34),DR(3),Fh()),a&2){let e=s;nM(),$h(` Desaparecidos: `,e.quantPessoasDesaparecidas,` `),nM(2),$h(`Localizados: `,e.quantPessoasEncontradas)}}function Rt(a,s){if(a&1){let e=UA();Nc(0,`div`,32)(1,`mat-icon`,35),DR(2,`error_outline`),Fh(),Nc(3,`p`),DR(4),Fh(),Nc(5,`button`,36),Un(`click`,function(){Lm(e);let r=zA();return jm(r.tentarNovamente())}),Nc(6,`mat-icon`),DR(7,`refresh`),Fh(),DR(8,` Tentar de novo `),Fh()()}a&2&&(nM(4),fC(s))}function Lt(a,s){if(a&1){let e=UA();Nc(0,`li`,40)(1,`mat-card`,41),Qc(2,`img`,42),Nc(3,`mat-card-content`)(4,`h3`)(5,`button`,43),Un(`click`,function(){let r=Lm(e).$implicit,m=zA(3);return jm(m.abrirDetalhes(r.id))}),DR(6),Fh()(),Nc(7,`div`,44),DR(8),Fh(),Nc(9,`dl`,45)(10,`div`)(11,`dt`,46),DR(12,`Data:`),Fh(),Nc(13,`dd`,47),DR(14),RR(15,`date`),Fh()(),Nc(16,`div`)(17,`dt`,46),DR(18,`Local:`),Fh(),Nc(19,`dd`,47),DR(20),Fh()()()()()()}if(a&2){let e=s.$implicit;nM(2),BE(`src`,e.urlFoto||`./assets/semfoto.jpg`),nM(4),$h(` `,e.nome,` `),nM(2),hC(` `,e.idade,` Anos, `,e.sexo,` `),nM(6),$h(` `,xR(15,6,e.ultimaOcorrencia?.dtDesaparecimento,`dd/MM/yyyy HH:mm`),` `),nM(6),$h(` `,e.ultimaOcorrencia?.localDesaparecimentoConcat,` `)}}function Ot(a,s){if(a&1&&(Nc(0,`ul`,37),OA(1,Lt,21,9,`li`,40,Tt),Fh()),a&2){let e=zA();nM(),xA(e.content)}}function Ft(a,s){a&1&&(Nc(0,`p`,38),DR(1,` Nenhuma pessoa encontrada com esses filtros. `),Fh())}function Bt(a,s){if(a&1){let e=UA();MA(0,Ot,3,0,`ul`,37)(1,Ft,2,0,`p`,38),Nc(2,`mat-paginator`,39),Un(`page`,function(r){Lm(e);let m=zA();return jm(m.handlePagination(r))}),Fh()}if(a&2){let e=s,t=zA();AA(e.content?.length?0:1),nM(2),BE(`pageIndex`,t.paginacao().page)(`pageSize`,t.paginacao().size)(`hidePageSize`,!0)(`length`,e.totalElements)}}function At(a,s){a&1&&(Nc(0,`div`,33),Qc(1,`mat-spinner`,48),Fh())}var It=class a{_facade=p(Qr);_fb=p(H6);form;formularioConsulta;localizadosDesaparecidos=E6(this._facade.localizadosDesaparecidos$);listaPessoas=E6(this._facade.listaPessoas$.pipe(Oe(s=>!!s?.content)));paginacao=E6(this._facade.controlePaginacao$,{requireSync:!0});erroConsulta=E6(this._facade.erroConsulta$,{initialValue:null});resumoResultados=Je(()=>{let s=this.listaPessoas()?.totalElements;return s==null?``:s===0?`Nenhuma pessoa encontrada.`:s===1?`1 pessoa encontrada.`:`${s} pessoas encontradas.`});constructor(){this.criarForm(),this._facade.loadInitialData(),this._facade.formularioConsulta$.pipe(D6()).subscribe(s=>{s&&(this.formularioConsulta=s,this.criarForm())})}criarForm(){this.form=this._fb.group({nome:[this.formularioConsulta?.nome||``],faixaIdadeInicial:[this.formularioConsulta?.faixaIdadeInicial||``],faixaIdadeFinal:[this.formularioConsulta?.faixaIdadeFinal||``],sexo:[this.formularioConsulta?.sexo||``],status:[this.formularioConsulta?.status||``]})}consultarDesaparecidos(){this._facade.adicionarFormularioState(this.form.value),this._facade.resetPagination(),this._facade.consultarDesaparecidos()}abrirDetalhes(s){this._facade.getIdDetalhes(s)}handlePagination(s){this._facade.handlePagination(s)}tentarNovamente(){this._facade.tentarNovamente()}resetForm(){this.form.reset(),this.consultarDesaparecidos()}static ɵfac=function(e){return new(e||a)};static ɵcmp=Nh({type:a,selectors:[[`app-desaparecidos`]],features:[Dn([{provide:$,useClass:oe}])],decls:59,vars:4,consts:[[`aria-label`,`Totalizadores`,1,`flex`,`flex-row`,`flex-wrap`,`gap-x-6`,`justify-evenly`,`py-3`,`pb-5`],[1,`pb-5`],[1,`flex`,`flex-col`,`md:flex-row`],[1,`w-full`,`md:w-3/12`,`rounded-t-lg`],[`id`,`titulo-consulta`,1,`bg-gray-600`,`text-white`,`py-2`,`text-2xl`,`rounded-t-lg`,`justify-normal`],[`role`,`search`,`aria-labelledby`,`titulo-consulta`,1,`bg-gray-200`,`gap-2`,`h-full`,3,`ngSubmit`,`formGroup`],[1,`pt-2`,`px-4`],[`for`,`filtro-nome`,1,`block`,`text-left`],[`appearance`,`outline`,1,`w-full`],[`matInput`,``,`id`,`filtro-nome`,`type`,`text`,`formControlName`,`nome`,`autocomplete`,`off`,1,`!uppercase`],[`role`,`group`,`aria-labelledby`,`filtro-idade`,1,`px-4`],[`id`,`filtro-idade`,1,`block`,`text-left`],[`matInput`,``,`type`,`number`,`inputmode`,`numeric`,`formControlName`,`faixaIdadeInicial`,`min`,`0`],[`matInput`,``,`type`,`number`,`inputmode`,`numeric`,`formControlName`,`faixaIdadeFinal`,`min`,`0`],[1,`px-4`],[`id`,`filtro-sexo`,1,`text-left`],[`aria-labelledby`,`filtro-sexo`,`formControlName`,`sexo`,1,`flex`,`flex-col`,`text-start`],[`value`,`MASCULINO`],[`value`,`FEMININO`],[1,`px-4`,`mt-2`],[`id`,`filtro-status`,1,`text-left`],[`aria-labelledby`,`filtro-status`,`formControlName`,`status`,1,`flex`,`flex-col`,`text-start`],[`value`,`DESAPARECIDO`],[`value`,`LOCALIZADO`],[1,`flex`,`flex-col`,`w-6/8`,`gap-3`,`mt-6`,`pb-6`],[`mat-raised-button`,``,`type`,`submit`,1,`!bg-green-700`],[1,`size-10`,`!text-white`],[1,`!text-white`],[`mat-raised-button`,``,`type`,`button`,1,`!bg-red-700`,3,`click`],[`aria-labelledby`,`titulo-resultados`,1,`w-full`,`md:w-9/12`,`px-2`],[`id`,`titulo-resultados`,1,`sr-only`],[`id`,`resumo-resultados`,`aria-live`,`polite`,`aria-atomic`,`true`,1,`sr-only`],[`role`,`alert`,1,`flex`,`flex-col`,`items-center`,`gap-3`,`rounded-lg`,`border`,`border-red-300`,`bg-red-50`,`p-6`,`text-red-800`],[1,`spinner-container`],[1,`text-xl`],[`aria-hidden`,`true`],[`mat-raised-button`,``,`type`,`button`,3,`click`],[`role`,`list`,1,`grid`,`grid-cols-1`,`sm:grid-cols-2`,`lg:grid-cols-3`,`gap-3`,`mt-3`,`md:mt-0`],[1,`py-10`,`text-lg`],[1,`w-full`,3,`page`,`pageIndex`,`pageSize`,`hidePageSize`,`length`],[1,`flex`],[`appearance`,`outlined`,1,`relative`,`w-full`,`focus-within:outline-3`,`focus-within:outline-offset-2`,`focus-within:outline-blue-700`],[`alt`,``,`width`,`300`,`height`,`240`,`loading`,`lazy`,1,`w-full`,`h-60`,`object-cover`,`p-2`,`rounded-t-lg`,3,`src`],[`type`,`button`,1,`cursor-pointer`,`text-sm`,`font-medium`,`after:absolute`,`after:inset-0`,`after:content-['']`,`focus:outline-none`,3,`click`],[1,`text-gray-700`,`text-sm`],[1,`mt-2`,`text-left`],[1,`inline`,`font-semibold`],[1,`inline`],[`diameter`,`50`,`aria-label`,`Carregando a lista de pessoas`]],template:function(e,t){if(e&1&&(Nc(0,`section`,0),MA(1,Et,4,2),Fh(),Qc(2,`hr`,1),Nc(3,`div`,2)(4,`div`,3)(5,`h2`,4),DR(6,` Consulta `),Fh(),Nc(7,`form`,5),Un(`ngSubmit`,function(){return t.consultarDesaparecidos()}),Nc(8,`div`,6)(9,`label`,7),DR(10,`Nome`),Fh(),Nc(11,`mat-form-field`,8)(12,`input`,9),XM(),Fh()()(),Nc(13,`div`,10)(14,`span`,11),DR(15,`Faixa Etária`),Fh(),Nc(16,`mat-form-field`,8)(17,`mat-label`),DR(18,`Idade mínima`),Fh(),Nc(19,`input`,12),XM(),Fh()(),Nc(20,`mat-form-field`,8)(21,`mat-label`),DR(22,`Idade máxima`),Fh(),Nc(23,`input`,13),XM(),Fh()()(),Nc(24,`div`,14)(25,`p`,15),DR(26,`Sexo`),Fh(),Nc(27,`mat-radio-group`,16),XM(),Nc(28,`mat-radio-button`,17),DR(29,`Masculino`),Fh(),Nc(30,`mat-radio-button`,18),DR(31,`Feminino`),Fh()()(),Nc(32,`div`,19)(33,`p`,20),DR(34,`Status`),Fh(),Nc(35,`mat-radio-group`,21),XM(),Nc(36,`mat-radio-button`,22),DR(37,`Desaparecido`),Fh(),Nc(38,`mat-radio-button`,23),DR(39,`Localizado`),Fh()()(),Nc(40,`div`,24)(41,`button`,25)(42,`mat-icon`,26),DR(43,`search`),Fh(),Nc(44,`span`,27),DR(45,` Consultar `),Fh()(),Nc(46,`button`,28),Un(`click`,function(){return t.resetForm()}),Nc(47,`mat-icon`,26),DR(48,`close`),Fh(),Nc(49,`span`,27),DR(50,` Limpar `),Fh()()()()(),Nc(51,`section`,29)(52,`h2`,30),DR(53,`Resultados`),Fh(),Nc(54,`p`,31),DR(55),Fh(),MA(56,Rt,9,1,`div`,32)(57,Bt,3,5)(58,At,2,0,`div`,33),Fh()()),e&2){let r,m;nM(),AA((r=t.localizadosDesaparecidos())?1:-1,r),nM(6),BE(`formGroup`,t.form),nM(5),eN(),nM(7),eN(),nM(4),eN(),nM(4),eN(),nM(8),eN(),nM(20),$h(` `,t.resumoResultados(),` `),nM(),AA((m=t.erroConsulta())?56:(m=t.listaPessoas())?57:58,m)}},dependencies:[Ho,ar,vf,zi,zn,th,Jf,$6,B6,pb,hF,j6,V6,zP,G6,dF,gF,xt,le,ne,Sh,xh,Ah,Oh,Rh,Rb,Ob,St,ce,NO],styles:[`@charset "UTF-8";[_nghost-%COMP%]     .mat-mdc-text-field-wrapper{background-color:#fff}.spinner-container[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999}`]})};export{It as DesaparecidosComponent};