import './polyfills.server.mjs';
import{A as he,B as fe,C as pe,D as me,E as s,F as a,G as u,H as Y,I as _,J as N,K as l,L as E,M as w,N as F,O as J,P as h,R as ge,W as ve,Y as ye,Z as _e,_ as K,a as re,aa as Ce,b as oe,ba as Ve,c as se,d as B,e as H,ea as be,f as V,g as I,h as c,i as L,ia as De,j as b,k as ae,l as W,la as Me,m as $,ma as Ae,n as le,na as Ee,o as q,p as P,q as z,r as de,s as f,t as p,u as Z,v as M,w as ue,x as A,y as ce,z as y}from"./chunk-7ZZM2U7L.mjs";import{a as v,b as C}from"./chunk-VVCT4QZE.mjs";var Ne=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(p(Z),p(q))},e.\u0275dir=b({type:e});let t=e;return t})(),ot=(()=>{let e=class e extends Ne{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=le(e)))(o||e)}})(),e.\u0275dir=b({type:e,features:[M]});let t=e;return t})(),ke=new V("");var st={provide:ke,useExisting:B(()=>G),multi:!0};function at(){let t=K()?K().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var lt=new V(""),G=(()=>{let e=class e extends Ne{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!at())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(p(Z),p(q),p(lt,8))},e.\u0275dir=b({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&_("input",function(d){return o._handleInput(d.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(d){return o._compositionEnd(d.target.value)})},features:[J([st]),M]});let t=e;return t})();var dt=new V(""),ut=new V("");function Te(t){return t!=null}function je(t){return ge(t)?re(t):t}function Ge(t){let e={};return t.forEach(i=>{e=i!=null?v(v({},e),i):e}),Object.keys(e).length===0?null:e}function Re(t,e){return e.map(i=>i(t))}function ct(t){return!t.validate}function Ue(t){return t.map(e=>ct(e)?e:i=>e.validate(i))}function ht(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(i){return Ge(Re(i,e))}}function Be(t){return t!=null?ht(Ue(t)):null}function ft(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(i){let n=Re(i,e).map(je);return se(n).pipe(oe(Ge))}}function He(t){return t!=null?ft(Ue(t)):null}function we(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function pt(t){return t._rawValidators}function mt(t){return t._rawAsyncValidators}function X(t){return t?Array.isArray(t)?t:[t]:[]}function T(t,e){return Array.isArray(t)?t.includes(e):t===e}function Fe(t,e){let i=X(e);return X(t).forEach(r=>{T(i,r)||i.push(r)}),i}function Se(t,e){return X(e).filter(i=>!T(t,i))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},Q=class extends j{get formDirective(){return null}get path(){return null}},O=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ee=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},an=C(v({},gt),{"[class.ng-submitted]":"isSubmitted"}),Le=(()=>{let e=class e extends ee{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(p(O,2))},e.\u0275dir=b({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ce("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[M]});let t=e;return t})();var S="VALID",k="INVALID",D="PENDING",x="DISABLED";function vt(t){return(R(t)?t.validators:t)||null}function yt(t){return Array.isArray(t)?Be(t):t||null}function _t(t,e){return(R(e)?e.asyncValidators:t)||null}function Ct(t){return Array.isArray(t)?He(t):t||null}function R(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var te=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===k}get pending(){return this.status==D}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Fe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Se(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(n=>{n.disable(C(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(v({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(n=>{n.enable(C(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(v({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let i=je(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(k)?k:S}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ct(this._rawAsyncValidators)}};var We=new V("CallSetDisabledState",{providedIn:"root",factory:()=>ne}),ne="always";function Vt(t,e){return[...e.path,t]}function bt(t,e,i=ne){Mt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),At(t,e),wt(t,e),Et(t,e),Dt(t,e)}function xe(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Dt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function Mt(t,e){let i=pt(t);e.validator!==null?t.setValidators(we(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=mt(t);e.asyncValidator!==null?t.setAsyncValidators(we(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();xe(e._rawValidators,r),xe(e._rawAsyncValidators,r)}function At(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&$e(t,e)})}function Et(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&$e(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function $e(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function wt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Ft(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function St(t){return Object.getPrototypeOf(t.constructor)===ot}function xt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===G?i=o:St(o)?n=o:r=o}),r||n||i||null}function Oe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ie(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ot=class extends te{constructor(e=null,i,n){super(vt(i),_t(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Oe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Oe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var It={provide:O,useExisting:B(()=>ie)},Pe=Promise.resolve(),ie=(()=>{let e=class e extends O{constructor(n,r,o,m,d,rt){super(),this._changeDetectorRef=d,this.callSetDisabledState=rt,this.control=new Ot,this._registered=!1,this.name="",this.update=new P,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=xt(this,m)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Ft(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){bt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Pe.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&ye(r);Pe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Vt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(p(Q,9),p(dt,10),p(ut,10),p(ke,10),p(ve,8),p(We,8))},e.\u0275dir=b({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[I.None,"disabled","isDisabled"],model:[I.None,"ngModel","model"],options:[I.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[J([It]),M,ae]});let t=e;return t})();var Pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=H({});let t=e;return t})();var U=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:We,useValue:n.callSetDisabledState??ne}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=H({imports:[Pt]});let t=e;return t})();var qe=(()=>{let e=class e{constructor(){this.scrolled=!1}onScroll(n){this.scrolled=window.scrollY>0,console.log("hello")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-navbar"]],hostBindings:function(r,o){r&1&&_("scroll",function(d){return o.onScroll(d)},!1,de)},standalone:!0,features:[h],decls:17,vars:2,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container"],["routerLink","/home",1,"navbar-brand","text-white","fs-2","fw-bold"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],[1,"nav-item","px-2"],["routerLink","/about","routerLinkActive"," active rounded-2 ",1,"nav-link","text-white","px-2","mt-3","mt-md-0","fw-bold"],["routerLink","/portfolio","routerLinkActive"," active rounded-2",1,"nav-link","text-white","px-2","mt-3","mt-md-0","fw-bold"],["routerLink","/contact","routerLinkActive"," active rounded-2 ",1,"nav-link","text-white","px-2","mt-3","mt-md-0","fw-bold"]],template:function(r,o){r&1&&(s(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"START FRAMEWORK "),a(),s(4,"button",3),u(5,"span",4),a(),s(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),l(10,"ABOUT"),a()(),s(11,"li",7)(12,"a",9),l(13,"PORTFOLIO"),a()(),s(14,"li",7)(15,"a",10),l(16,"CONTACT"),a()()()()()()),r&2&&y(o.scrolled?"py-2":"py-4")},dependencies:[Me,Ae],styles:["nav[_ngcontent-%COMP%]{background-color:var(--mainColor)!important;transition:.5s;z-index:1031}.active[_ngcontent-%COMP%]{background-color:var(--secondColor)!important;color:#fff;display:block}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex}"]});let t=e;return t})();var ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-location"]],standalone:!0,features:[h],decls:30,vars:0,consts:[[1,""],[1,"container","py-3"],[1,"row","py-5"],[1,"col-md-4"],[1,"text-white","text-center","py-4"],[1,"py-2"],[1,"d-flex","align-items-center","justify-content-center"],[1,"fa-brands","fa-facebook","mx-1","icon"],[1,"fa-brands","fa-twitter","mx-1","icon"],[1,"fa-brands","fa-linkedin-in","mx-1","icon"],[1,"fa-solid","fa-globe","mx-1","icon"]],template:function(r,o){r&1&&(s(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),l(6,"LOCATION"),a(),s(7,"P"),l(8,"2215 John Daniel Drive"),a(),s(9,"P",5),l(10,"Clark, MO 65243"),a()()(),s(11,"div",3)(12,"div",4)(13,"h3"),l(14,"AROUND THE WEB"),a(),s(15,"ul",6)(16,"li"),u(17,"i",7),a(),s(18,"li"),u(19,"i",8),a(),s(20,"li"),u(21,"i",9),a(),s(22,"li"),u(23,"i",10),a()()()(),s(24,"div",3)(25,"div",4)(26,"h3"),l(27,"ABOUT FREELANCER"),a(),s(28,"P"),l(29,"Freelance is a free to use, licensed Bootstrap theme created by Route"),a()()()()()())},styles:["section[_ngcontent-%COMP%]{background-color:var(--mainColor)}.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border:1px solid white;border-radius:50%;margin:0 10px;padding:5px}"]});let t=e;return t})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-footer"]],standalone:!0,features:[h],decls:3,vars:0,consts:[[1,"d-flex","align-items-center","justify-content-center","py-4","bg-dark"],[1,"text-white"]],template:function(r,o){r&1&&(s(0,"div",0)(1,"p",1),l(2,"Copyright \xA9 Your Website 2021"),a()())}});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(){this.title="app1"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[h],decls:5,vars:0,consts:[[1,"pt-5"]],template:function(r,o){r&1&&(u(0,"app-navbar"),s(1,"div",0),u(2,"router-outlet"),a(),u(3,"app-location")(4,"app-footer"))},dependencies:[De,U,qe,ze,Ze]});let t=e;return t})();var Je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-home"]],standalone:!0,features:[h],decls:12,vars:0,consts:[[1,"py-5"],[1,"container","py-5"],[1,"d-flex","flex-column","justify-content-center","align-items-center","py-4","box"],["src","./assets/images/avataaars.svg","alt",""],[1,"text-white","fw-bold"],[1,"d-flex","align-items-center","py-3"],[1,"dash","me-3"],[1,"fa-solid","fa-star","text-white","me-3"],[1,"text-white"]],template:function(r,o){r&1&&(s(0,"section",0)(1,"div",1)(2,"div",2),u(3,"img",3),s(4,"h1",4),l(5,"START FRAMEWORK"),a(),s(6,"div",5),u(7,"div",6)(8,"i",7)(9,"div",6),a(),s(10,"p",8),l(11,"Graphic Artist - Web Designer - Illustrator"),a()()()())},styles:["section[_ngcontent-%COMP%]{background-color:var(--secondColor);min-height:calc(100vh - 70px)}img[_ngcontent-%COMP%]{width:250px;padding:20px 0}.dash[_ngcontent-%COMP%]{width:70px;height:4px;background-color:#fff}"]});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-about"]],standalone:!0,features:[h],decls:17,vars:0,consts:[[1,"d-flex","align-items-center","justify-content-center"],[1,"container","d-flex","flex-column","align-items-center"],[1,"text-white","fw-bold"],[1,"d-flex","align-items-center","py-3"],[1,"dash","me-3"],[1,"fa-solid","fa-star","text-white","me-3"],[1,"row","px-5"],[1,"col-md-6"],[1,"text-white","px-3"]],template:function(r,o){r&1&&(s(0,"section",0)(1,"div",1)(2,"h1",2),l(3,"ABOUT COMPONENT"),a(),s(4,"div",3),u(5,"div",4)(6,"i",5)(7,"div",4),a(),s(8,"div",6)(9,"div",7)(10,"div")(11,"p",8),l(12," Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. "),a()()(),s(13,"div",7)(14,"div")(15,"p",8),l(16," Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. "),a()()()()()())},styles:["section[_ngcontent-%COMP%]{background-color:var(--secondColor);min-height:calc(100vh - 70px)}.dash[_ngcontent-%COMP%]{width:70px;height:4px;background-color:#fff}"]});let t=e;return t})();var Xe=(()=>{let e=class e{constructor(){this.nameValue="",this.ageValue="",this.mailValue="",this.passValue=""}isFormValid(){return!!(this.ageValue&&this.mailValue&&this.nameValue&&this.passValue)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-contact"]],standalone:!0,features:[h],decls:23,vars:13,consts:[[1,"pt-5"],[1,"d-flex","flex-column","align-items-center","pt-5"],[1,"fw-bold"],[1,"d-flex","align-items-center","py-3"],[1,"dash","me-3"],[1,"fa-solid","fa-star","text-black","me-3"],[1,"w-50","form"],["for","name",1,"position-relative"],["type","text","placeholder","UserName","id","name",1,"form-control","border-0","border-bottom","position-relative","my-3",3,"ngModelChange","ngModel"],["for","age",1,"position-relative"],["type","text","placeholder","UserAge","id","age",1,"form-control","border-0","border-bottom","position-relative","my-3",3,"ngModelChange","ngModel"],["for","mail",1,"position-relative"],["type","text","placeholder","UserEmail","id","mail",1,"form-control","border-0","border-bottom","position-relative","my-3",3,"ngModelChange","ngModel"],["for","pass",1,"position-relative"],["type","password","placeholder","UserPassword","id","pass",1,"form-control","border-0","border-bottom","position-relative","my-3",3,"ngModelChange","ngModel"],[1,"btn","btn-success","mt-4",3,"disabled"]],template:function(r,o){r&1&&(s(0,"section",0)(1,"div",1)(2,"h1",2),l(3,"CONTACT COMPONENT"),a(),s(4,"div",3),u(5,"div",4)(6,"i",5)(7,"div",4),a(),s(8,"div",6)(9,"label",7),l(10,"UserName:"),a(),s(11,"input",8),F("ngModelChange",function(d){return w(o.nameValue,d)||(o.nameValue=d),d}),a(),s(12,"label",9),l(13,"UserAge:"),a(),s(14,"input",10),F("ngModelChange",function(d){return w(o.ageValue,d)||(o.ageValue=d),d}),a(),s(15,"label",11),l(16,"UserEmail:"),a(),s(17,"input",12),F("ngModelChange",function(d){return w(o.mailValue,d)||(o.mailValue=d),d}),a(),s(18,"label",13),l(19,"UserPassword:"),a(),s(20,"input",14),F("ngModelChange",function(d){return w(o.passValue,d)||(o.passValue=d),d}),a(),s(21,"button",15),l(22," Send Message "),a()()()()),r&2&&(f(9),y(o.nameValue?"top-0":"top"),f(2),E("ngModel",o.nameValue),f(),y(o.ageValue?"top-0":"top"),f(2),E("ngModel",o.ageValue),f(),y(o.mailValue?"top-0":"top"),f(2),E("ngModel",o.mailValue),f(),y(o.passValue?"top-0":"top"),f(2),E("ngModel",o.passValue),f(),A("disabled",!o.isFormValid()))},dependencies:[U,G,Le,ie],styles:["section[_ngcontent-%COMP%]{min-height:calc(100vh - 50px);margin-bottom:1.5rem}.dash[_ngcontent-%COMP%]{width:70px;height:4px;background-color:#000}label[_ngcontent-%COMP%]{color:var(--secondColor)}.top[_ngcontent-%COMP%]{top:40px;transition:.5s}label[_ngcontent-%COMP%]{transition:top .5s}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none}.btn-success[_ngcontent-%COMP%]{--bs-btn-bg: var(--secondColor);--bs-btn-border-color: var(--secondColor);--bs-btn-hover-bg: var(--secondColor);--bs-btn-hover-border-color: var(--secondColor);--bs-btn-active-bg: var(--secondColor);--bs-btn-active-border-color: var(--secondColor);--bs-btn-disabled-bg: var(--secondColor);--bs-btn-disabled-border-color: var(--secondColor)}@media (max-width: 992px){.form[_ngcontent-%COMP%]{width:100%!important}}"]});let t=e;return t})();function kt(t,e){if(t&1){let i=Y();s(0,"div",7)(1,"div",9),u(2,"img",10),s(3,"div",11),_("click",function(){let r=W(i).$index,o=N();return $(o.showImage(r))}),u(4,"i",12),a()()()}if(t&2){let i=e.$implicit;f(2),A("src",i,z)}}function Tt(t,e){if(t&1){let i=Y();s(0,"div",13),_("click",function(r){W(i);let o=N();return $(o.hideContain(r))}),u(1,"img",10),a()}if(t&2){let i=N();f(),A("src",i.imgSrc,z)}}var Qe=(()=>{let e=class e{constructor(){this.userClick=!1,this.imgSrc="",this.imgs=["./assets/images/poert1.png","./assets/images/port2.png","./assets/images/port3.png","./assets/images/poert1.png","./assets/images/port2.png","./assets/images/port3.png"]}showImage(n){this.userClick=!0,this.imgSrc=this.imgs[n]}hideContain(n){n.target instanceof HTMLImageElement||(this.userClick=!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-portfolio"]],standalone:!0,features:[h],decls:12,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-center","pt-5"],[1,"container","d-flex","flex-column","align-items-center","pt-5"],[1,"fw-bold"],[1,"d-flex","align-items-center"],[1,"dash","me-3"],[1,"fa-solid","fa-star","text-black","me-3"],[1,"row","g-5","py-4"],[1,"col-md-4"],[1,"contain","bg-primary","bg-opacity-25"],[1,"rounded-2","overflow-hidden","position-relative"],["alt","",3,"src"],[1,"layer","d-flex","align-items-center","justify-content-center",3,"click"],[1,"fa-solid","fa-plus","fa-2xl",2,"color","#ffffff"],[1,"contain","bg-primary","bg-opacity-25",3,"click"]],template:function(r,o){r&1&&(s(0,"section",0)(1,"div",1)(2,"h1",2),l(3,"PORTFOLIO COMPONENT"),a(),s(4,"div",3),u(5,"div",4)(6,"i",5)(7,"div",4),a(),s(8,"div",6),pe(9,kt,5,1,"div",7,fe),a()(),ue(11,Tt,2,1,"div",8),a()),r&2&&(f(9),me(o.imgs),f(2),he(11,o.userClick?11:-1))},styles:['section[_ngcontent-%COMP%]{min-height:calc(100vh - 70px)}.dash[_ngcontent-%COMP%]{width:70px;height:4px;background-color:#000}.col-md-4[_ngcontent-%COMP%]   .rounded-2[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{content:"";width:100%;height:100%;background-color:#1abc9ccc;position:absolute;top:0;left:0;opacity:0;transition:opacity .5s;cursor:pointer}.layer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:6rem}.col-md-4[_ngcontent-%COMP%]   .rounded-2[_ngcontent-%COMP%]:hover   .layer[_ngcontent-%COMP%]{opacity:1}.contain[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9999999999;display:flex;align-items:center;justify-content:center}.contain[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:600px}']});let t=e;return t})();var et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=c({type:e,selectors:[["app-page-not-found"]],standalone:!0,features:[h],decls:3,vars:0,consts:[[1,"py-5","d-flex","justify-content-center","align","align-items-center"],[1,"text-white"]],template:function(r,o){r&1&&(s(0,"section",0)(1,"h1",1),l(2,"Page not found !!"),a()())},styles:["section[_ngcontent-%COMP%]{background-color:var(--secondColor);min-height:calc(100vh - 70px)}img[_ngcontent-%COMP%]{width:250px;padding:20px 0}.dash[_ngcontent-%COMP%]{width:70px;height:4px;background-color:#fff}"]});let t=e;return t})();var tt=[{path:"",redirectTo:"home",pathMatch:"full",title:"Start Framework"},{path:"home",component:Je,title:"Start Framework"},{path:"about",component:Ke,title:"About"},{path:"contact",component:Xe,title:"Contact"},{path:"portfolio",component:Qe,title:"Portfolio"},{path:"**",component:et,title:"Page not found !!"}];var nt={providers:[Ee(tt),Ve()]};var jt={providers:[be()]},it=_e(nt,jt);var Gt=()=>Ce(Ye,it),Ln=Gt;export{Ln as a};
