(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.ngxSmartModal = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

























/** @deprecated */


/** @deprecated */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * @license ngx-smart-modal
 * MIT license
 */

var NgxSmartModalConfig = {
    bodyClassOpen: 'dialog-open',
    prefixEvent: 'ngx-smart-modal.'
};

var _c0 = ["nsmContent"];
var _c1 = ["nsmDialog"];
var _c2 = ["nsmOverlay"];
var _c3 = ["dynamicContent"];
function NgxSmartModalComponent_div_0_ng_template_7_Template(rf, ctx) { }
function NgxSmartModalComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r8 = core.ɵɵgetCurrentView();
    core.ɵɵelementStart(0, "button", 10);
    core.ɵɵlistener("click", function NgxSmartModalComponent_div_0_button_10_Template_button_click_0_listener() { core.ɵɵrestoreView(_r8); var ctx_r7 = core.ɵɵnextContext(2); return ctx_r7.close(); });
    core.ɵɵnamespaceSVG();
    core.ɵɵelementStart(1, "svg", 11);
    core.ɵɵelementStart(2, "title", 12);
    core.ɵɵtext(3, "Close Icon");
    core.ɵɵelementEnd();
    core.ɵɵelementStart(4, "desc", 13);
    core.ɵɵtext(5, "A light-gray close icon used to close the modal");
    core.ɵɵelementEnd();
    core.ɵɵelementStart(6, "g");
    core.ɵɵelement(7, "path", 14);
    core.ɵɵelementEnd();
    core.ɵɵelementStart(8, "g");
    core.ɵɵelement(9, "path", 15);
    core.ɵɵelementEnd();
    core.ɵɵelementEnd();
    core.ɵɵelementEnd();
} }
var _c4 = function (a0, a2) { return { "transparent": a0, "overlay": true, "nsm-overlay-open": a2 }; };
var _c5 = function (a1, a2) { return ["nsm-dialog", a1, a2]; };
function NgxSmartModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r10 = core.ɵɵgetCurrentView();
    core.ɵɵelementStart(0, "div", 1, 2);
    core.ɵɵlistener("click", function NgxSmartModalComponent_div_0_Template_div_click_0_listener($event) { core.ɵɵrestoreView(_r10); var ctx_r9 = core.ɵɵnextContext(); return ctx_r9.dismiss($event); });
    core.ɵɵelementStart(2, "div", 3, 4);
    core.ɵɵelementStart(4, "div", 5, 6);
    core.ɵɵelementStart(6, "div", 7);
    core.ɵɵtemplate(7, NgxSmartModalComponent_div_0_ng_template_7_Template, 0, 0, "ng-template", null, 8, core.ɵɵtemplateRefExtractor);
    core.ɵɵprojection(9);
    core.ɵɵelementEnd();
    core.ɵɵtemplate(10, NgxSmartModalComponent_div_0_button_10_Template, 10, 0, "button", 9);
    core.ɵɵelementEnd();
    core.ɵɵelementEnd();
    core.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = core.ɵɵnextContext();
    core.ɵɵstyleProp("z-index", ctx_r0.visible ? ctx_r0.layerPosition - 1 : -1);
    core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(11, _c4, !ctx_r0.backdrop, ctx_r0.openedClass));
    core.ɵɵadvance(2);
    core.ɵɵstyleProp("z-index", ctx_r0.visible ? ctx_r0.layerPosition : -1);
    core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(14, _c5, ctx_r0.customClass, ctx_r0.openedClass ? "nsm-dialog-open" : "nsm-dialog-close"));
    core.ɵɵattribute("aria-hidden", ctx_r0.openedClass ? false : true)("aria-label", ctx_r0.ariaLabel)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-describedby", ctx_r0.ariaDescribedBy);
    core.ɵɵadvance(8);
    core.ɵɵproperty("ngIf", ctx_r0.closable);
} }
var _c6 = ["*"];
var NgxSmartModalComponent = /** @class */ (function () {
    function NgxSmartModalComponent(_renderer, _changeDetectorRef, componentFactoryResolver, elementRef, _document, _platformId) {
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this._document = _document;
        this._platformId = _platformId;
        this.closable = true;
        this.escapable = true;
        this.dismissable = true;
        this.identifier = '';
        this.customClass = 'nsm-dialog-animation-fade';
        this.visible = false;
        this.backdrop = true;
        this.force = true;
        this.hideDelay = 500;
        this.autostart = false;
        this.target = '';
        this.ariaLabel = null;
        this.ariaLabelledBy = null;
        this.ariaDescribedBy = null;
        this.refocus = true;
        this.visibleChange = new core.EventEmitter();
        this.onClose = new core.EventEmitter();
        this.onCloseFinished = new core.EventEmitter();
        this.onDismiss = new core.EventEmitter();
        this.onDismissFinished = new core.EventEmitter();
        this.onAnyCloseEvent = new core.EventEmitter();
        this.onAnyCloseEventFinished = new core.EventEmitter();
        this.onOpen = new core.EventEmitter();
        this.onOpenFinished = new core.EventEmitter();
        this.onEscape = new core.EventEmitter();
        this.onDataAdded = new core.EventEmitter();
        this.onDataRemoved = new core.EventEmitter();
        this.layerPosition = 1041;
        this.overlayVisible = false;
        this.openedClass = false;
        this.createFrom = 'html';
    }
    NgxSmartModalComponent.prototype.ngOnInit = function () {
        if (!this.identifier || !this.identifier.length) {
            throw new Error('identifier field isn’t set. Please set one before calling <ngx-smart-modal> in a template.');
        }
        this._sendEvent('create');
    };
    NgxSmartModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.contentComponent) {
            var factory_1 = this.componentFactoryResolver.resolveComponentFactory(this.contentComponent);
            this.createDynamicContent(this.dynamicContentContainer, factory_1);
            this.dynamicContentContainer.changes.subscribe(function (contentViewContainers) {
                _this.createDynamicContent(contentViewContainers, factory_1);
            });
        }
    };
    NgxSmartModalComponent.prototype.ngOnDestroy = function () {
        this._sendEvent('delete');
    };
    /**
     * Open the modal instance
     *
     * @param top open the modal top of all other
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.open = function (top) {
        this._sendEvent('open', { top: top });
        return this;
    };
    /**
     * Close the modal instance
     *
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.close = function () {
        this._sendEvent('close');
        return this;
    };
    /**
     * Dismiss the modal instance
     *
     * @param e the event sent by the browser
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.dismiss = function (e) {
        if (!this.dismissable || !e.target.classList.contains('overlay')) {
            return this;
        }
        this._sendEvent('dismiss');
        return this;
    };
    /**
     * Toggle visibility of the modal instance
     *
     * @param top open the modal top of all other
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.toggle = function (top) {
        this._sendEvent('toggle', { top: top });
        return this;
    };
    /**
     * Add a custom class to the modal instance
     *
     * @param className the class to add
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.addCustomClass = function (className) {
        if (!this.customClass.length) {
            this.customClass = className;
        }
        else {
            this.customClass += ' ' + className;
        }
        return this;
    };
    /**
     * Remove a custom class to the modal instance
     *
     * @param className the class to remove
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.removeCustomClass = function (className) {
        if (className) {
            this.customClass = this.customClass.replace(className, '').trim();
        }
        else {
            this.customClass = '';
        }
        return this;
    };
    /**
     * Returns the visibility state of the modal instance
     */
    NgxSmartModalComponent.prototype.isVisible = function () {
        return this.visible;
    };
    /**
     * Checks if data is attached to the modal instance
     */
    NgxSmartModalComponent.prototype.hasData = function () {
        return this._data !== undefined;
    };
    /**
     * Attach data to the modal instance
     *
     * @param data the data to attach
     * @param force override potentially attached data
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.setData = function (data, force) {
        if (!this.hasData() || (this.hasData() && force)) {
            this._data = data;
            this.onDataAdded.emit(this._data);
            this.markForCheck();
        }
        return this;
    };
    /**
     * Retrieve the data attached to the modal instance
     */
    NgxSmartModalComponent.prototype.getData = function () {
        return this._data;
    };
    /**
     * Remove the data attached to the modal instance
     *
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.removeData = function () {
        this._data = undefined;
        this.onDataRemoved.emit(true);
        this.markForCheck();
        return this;
    };
    /**
     * Add body class modal opened
     *
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.addBodyClass = function () {
        this._renderer.addClass(this._document.body, NgxSmartModalConfig.bodyClassOpen);
        return this;
    };
    /**
     * Add body class modal opened
     *
     * @returns the modal component
     */
    NgxSmartModalComponent.prototype.removeBodyClass = function () {
        this._renderer.removeClass(this._document.body, NgxSmartModalConfig.bodyClassOpen);
        return this;
    };
    NgxSmartModalComponent.prototype.markForCheck = function () {
        try {
            this._changeDetectorRef.detectChanges();
        }
        catch (e) {
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Listens for window resize event and recalculates modal instance position if it is element-relative
     */
    NgxSmartModalComponent.prototype.targetPlacement = function () {
        if (!this.isBrowser || !this.nsmDialog.length || !this.nsmContent.length || !this.nsmOverlay.length || !this.target) {
            return false;
        }
        var targetElement = this._document.querySelector(this.target);
        if (!targetElement) {
            return false;
        }
        var targetElementRect = targetElement.getBoundingClientRect();
        var bodyRect = this.nsmOverlay.first.nativeElement.getBoundingClientRect();
        var nsmContentRect = this.nsmContent.first.nativeElement.getBoundingClientRect();
        var nsmDialogRect = this.nsmDialog.first.nativeElement.getBoundingClientRect();
        var marginLeft = parseInt(getComputedStyle(this.nsmContent.first.nativeElement).marginLeft, 10);
        var marginTop = parseInt(getComputedStyle(this.nsmContent.first.nativeElement).marginTop, 10);
        var offsetTop = targetElementRect.top - nsmDialogRect.top - ((nsmContentRect.height - targetElementRect.height) / 2);
        var offsetLeft = targetElementRect.left - nsmDialogRect.left - ((nsmContentRect.width - targetElementRect.width) / 2);
        if (offsetLeft + nsmDialogRect.left + nsmContentRect.width + (marginLeft * 2) > bodyRect.width) {
            offsetLeft = bodyRect.width - (nsmDialogRect.left + nsmContentRect.width) - (marginLeft * 2);
        }
        else if (offsetLeft + nsmDialogRect.left < 0) {
            offsetLeft = -nsmDialogRect.left;
        }
        if (offsetTop + nsmDialogRect.top + nsmContentRect.height + marginTop > bodyRect.height) {
            offsetTop = bodyRect.height - (nsmDialogRect.top + nsmContentRect.height) - marginTop;
        }
        this._renderer.setStyle(this.nsmContent.first.nativeElement, 'top', (offsetTop < 0 ? 0 : offsetTop) + 'px');
        this._renderer.setStyle(this.nsmContent.first.nativeElement, 'left', offsetLeft + 'px');
    };
    NgxSmartModalComponent.prototype._sendEvent = function (name, extraData) {
        if (!this.isBrowser) {
            return false;
        }
        var data = {
            extraData: extraData,
            instance: { id: this.identifier, modal: this }
        };
        var event = new CustomEvent(NgxSmartModalConfig.prefixEvent + name, { detail: data });
        return window.dispatchEvent(event);
    };
    Object.defineProperty(NgxSmartModalComponent.prototype, "isBrowser", {
        /**
         * Is current platform browser
         */
        get: function () {
            return common.isPlatformBrowser(this._platformId);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates content inside provided ViewContainerRef
     */
    NgxSmartModalComponent.prototype.createDynamicContent = function (changes, factory) {
        var _this = this;
        changes.forEach(function (viewContainerRef) {
            viewContainerRef.clear();
            _this.contentComponentInstance = viewContainerRef.createComponent(factory).instance;
            _this.markForCheck();
        });
    };
    NgxSmartModalComponent.ɵfac = function NgxSmartModalComponent_Factory(t) { return new (t || NgxSmartModalComponent)(core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ComponentFactoryResolver), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(common.DOCUMENT), core.ɵɵdirectiveInject(core.PLATFORM_ID)); };
    NgxSmartModalComponent.ɵcmp = /*@__PURE__*/ core.ɵɵdefineComponent({ type: NgxSmartModalComponent, selectors: [["ngx-smart-modal"]], viewQuery: function NgxSmartModalComponent_Query(rf, ctx) { if (rf & 1) {
            core.ɵɵviewQuery(_c0, 5);
            core.ɵɵviewQuery(_c1, 5);
            core.ɵɵviewQuery(_c2, 5);
            core.ɵɵviewQuery(_c3, 5, core.ViewContainerRef);
        } if (rf & 2) {
            var _t = void 0;
            core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nsmContent = _t);
            core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nsmDialog = _t);
            core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nsmOverlay = _t);
            core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.dynamicContentContainer = _t);
        } }, hostBindings: function NgxSmartModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            core.ɵɵlistener("resize", function NgxSmartModalComponent_resize_HostBindingHandler() { return ctx.targetPlacement(); }, false, core.ɵɵresolveWindow);
        } }, inputs: { closable: "closable", escapable: "escapable", dismissable: "dismissable", identifier: "identifier", customClass: "customClass", visible: "visible", backdrop: "backdrop", force: "force", hideDelay: "hideDelay", autostart: "autostart", target: "target", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy", ariaDescribedBy: "ariaDescribedBy", refocus: "refocus" }, outputs: { visibleChange: "visibleChange", onClose: "onClose", onCloseFinished: "onCloseFinished", onDismiss: "onDismiss", onDismissFinished: "onDismissFinished", onAnyCloseEvent: "onAnyCloseEvent", onAnyCloseEventFinished: "onAnyCloseEventFinished", onOpen: "onOpen", onOpenFinished: "onOpenFinished", onEscape: "onEscape", onDataAdded: "onDataAdded", onDataRemoved: "onDataRemoved" }, ngContentSelectors: _c6, decls: 1, vars: 1, consts: [[3, "z-index", "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], ["nsmOverlay", ""], [3, "ngClass"], ["nsmDialog", ""], [1, "nsm-content"], ["nsmContent", ""], [1, "nsm-body"], ["dynamicContent", ""], ["type", "button", "aria-label", "Close", "class", "nsm-dialog-btn-close", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "nsm-dialog-btn-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", "id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "width", "16px", "height", "16px", "role", "img", "aria-labelledby", "closeIconTitle closeIconDesc"], ["id", "closeIconTitle"], ["id", "closeIconDesc"], ["d", "M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249    C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306    C514.019,27.23,514.019,14.135,505.943,6.058z", "fill", "currentColor"], ["d", "M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636    c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z", "fill", "currentColor"]], template: function NgxSmartModalComponent_Template(rf, ctx) { if (rf & 1) {
            core.ɵɵprojectionDef();
            core.ɵɵtemplate(0, NgxSmartModalComponent_div_0_Template, 11, 17, "div", 0);
        } if (rf & 2) {
            core.ɵɵproperty("ngIf", ctx.overlayVisible);
        } }, directives: [common.NgIf, common.NgClass], encapsulation: 2 });
    return NgxSmartModalComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && core.ɵsetClassMetadata(NgxSmartModalComponent, [{
        type: core.Component,
        args: [{
                selector: 'ngx-smart-modal',
                template: "\n    <div *ngIf=\"overlayVisible\"\n         [style.z-index]=\"visible ? layerPosition-1 : -1\"\n         [ngClass]=\"{'transparent':!backdrop, 'overlay':true, 'nsm-overlay-open':openedClass}\"\n         (click)=\"dismiss($event)\" #nsmOverlay>\n      <div [style.z-index]=\"visible ? layerPosition : -1\"\n           [ngClass]=\"['nsm-dialog', customClass, openedClass ? 'nsm-dialog-open': 'nsm-dialog-close']\" #nsmDialog\n           [attr.aria-hidden]=\"openedClass ? false : true\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledBy\"\n           [attr.aria-describedby]=\"ariaDescribedBy\">\n        <div class=\"nsm-content\" #nsmContent>\n          <div class=\"nsm-body\">\n            <ng-template #dynamicContent></ng-template>\n            <ng-content></ng-content>\n\n          </div>\n          <button type=\"button\" *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"nsm-dialog-btn-close\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n                 xml:space=\"preserve\" width=\"16px\" height=\"16px\" role=\"img\" aria-labelledby=\"closeIconTitle closeIconDesc\">\n              <title id=\"closeIconTitle\">Close Icon</title>\n              <desc id=\"closeIconDesc\">A light-gray close icon used to close the modal</desc>\n              <g>\n                <path d=\"M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249    C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306    C514.019,27.23,514.019,14.135,505.943,6.058z\"\n                      fill=\"currentColor\"/>\n              </g>\n              <g>\n                <path d=\"M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636    c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z\"\n                      fill=\"currentColor\"/>\n              </g>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>\n  "
            }]
    }], function () { return [{ type: core.Renderer2 }, { type: core.ChangeDetectorRef }, { type: core.ComponentFactoryResolver }, { type: core.ElementRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [core.PLATFORM_ID]
            }] }]; }, { closable: [{
            type: core.Input
        }], escapable: [{
            type: core.Input
        }], dismissable: [{
            type: core.Input
        }], identifier: [{
            type: core.Input
        }], customClass: [{
            type: core.Input
        }], visible: [{
            type: core.Input
        }], backdrop: [{
            type: core.Input
        }], force: [{
            type: core.Input
        }], hideDelay: [{
            type: core.Input
        }], autostart: [{
            type: core.Input
        }], target: [{
            type: core.Input
        }], ariaLabel: [{
            type: core.Input
        }], ariaLabelledBy: [{
            type: core.Input
        }], ariaDescribedBy: [{
            type: core.Input
        }], refocus: [{
            type: core.Input
        }], visibleChange: [{
            type: core.Output
        }], onClose: [{
            type: core.Output
        }], onCloseFinished: [{
            type: core.Output
        }], onDismiss: [{
            type: core.Output
        }], onDismissFinished: [{
            type: core.Output
        }], onAnyCloseEvent: [{
            type: core.Output
        }], onAnyCloseEventFinished: [{
            type: core.Output
        }], onOpen: [{
            type: core.Output
        }], onOpenFinished: [{
            type: core.Output
        }], onEscape: [{
            type: core.Output
        }], onDataAdded: [{
            type: core.Output
        }], onDataRemoved: [{
            type: core.Output
        }], nsmContent: [{
            type: core.ViewChildren,
            args: ['nsmContent']
        }], nsmDialog: [{
            type: core.ViewChildren,
            args: ['nsmDialog']
        }], nsmOverlay: [{
            type: core.ViewChildren,
            args: ['nsmOverlay']
        }], dynamicContentContainer: [{
            type: core.ViewChildren,
            args: ['dynamicContent', { read: core.ViewContainerRef }]
        }], targetPlacement: [{
            type: core.HostListener,
            args: ['window:resize']
        }] }); })();

var NgxSmartModalStackService = /** @class */ (function () {
    function NgxSmartModalStackService() {
        this._modalStack = [];
    }
    /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param modalInstance The object that contains the given modal identifier and the modal itself.
     * @param force Optional parameter that forces the overriding of modal instance if it already exists.
     * @returns nothing special.
     */
    NgxSmartModalStackService.prototype.addModal = function (modalInstance, force) {
        if (force) {
            var i = this._modalStack.findIndex(function (o) { return o.id === modalInstance.id; });
            if (i > -1) {
                this._modalStack[i].modal = modalInstance.modal;
            }
            else {
                this._modalStack.push(modalInstance);
            }
            return;
        }
        this._modalStack.push(modalInstance);
    };
    /**
     * Retrieve a modal instance by its identifier.
     *
     * @param id The modal identifier used at creation time.
     */
    NgxSmartModalStackService.prototype.getModal = function (id) {
        var i = this._modalStack.find(function (o) { return o.id === id; });
        if (i !== undefined) {
            return i.modal;
        }
        else {
            throw new Error("Cannot find modal with identifier " + id);
        }
    };
    /**
     * Retrieve all the created modals.
     *
     * @returns an array that contains all modal instances.
     */
    NgxSmartModalStackService.prototype.getModalStack = function () {
        return this._modalStack;
    };
    /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @returns an array that contains all the opened modals.
     */
    NgxSmartModalStackService.prototype.getOpenedModals = function () {
        return this._modalStack.filter(function (o) { return o.modal.visible; });
    };
    /**
     * Retrieve the opened modal with highest z-index.
     *
     * @returns the opened modal with highest z-index.
     */
    NgxSmartModalStackService.prototype.getTopOpenedModal = function () {
        if (!this.getOpenedModals().length) {
            throw new Error('No modal is opened');
        }
        return this.getOpenedModals()
            .map(function (o) { return o.modal; })
            .reduce(function (highest, item) { return item.layerPosition > highest.layerPosition ? item : highest; }, this.getOpenedModals()[0].modal);
    };
    /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @returns a higher index from all the existing modal instances.
     */
    NgxSmartModalStackService.prototype.getHigherIndex = function () {
        return Math.max.apply(Math, __spreadArray(__spreadArray([], this._modalStack.map(function (o) { return o.modal.layerPosition; })), [1041])) + 1;
    };
    /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @returns the number of modal instances.
     */
    NgxSmartModalStackService.prototype.getModalStackCount = function () {
        return this._modalStack.length;
    };
    /**
     * Remove a modal instance from the modal stack.
     * Returns the removed modal instance or undefined if no modal was found
     *
     * @param id The modal identifier.
     * @returns the removed modal instance.
     */
    NgxSmartModalStackService.prototype.removeModal = function (id) {
        var i = this._modalStack.findIndex(function (o) { return o.id === id; });
        if (i < 0) {
            return;
        }
        var modalInstance = this._modalStack.splice(i, 1)[0];
        return modalInstance;
    };
    NgxSmartModalStackService.ɵfac = function NgxSmartModalStackService_Factory(t) { return new (t || NgxSmartModalStackService)(); };
    NgxSmartModalStackService.ɵprov = /*@__PURE__*/ core.ɵɵdefineInjectable({ token: NgxSmartModalStackService, factory: NgxSmartModalStackService.ɵfac });
    return NgxSmartModalStackService;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && core.ɵsetClassMetadata(NgxSmartModalStackService, [{
        type: core.Injectable
    }], function () { return []; }, null); })();

var NgxSmartModalService = /** @class */ (function () {
    function NgxSmartModalService(_componentFactoryResolver, _appRef, _injector, _modalStack, applicationRef, _document, _platformId) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._modalStack = _modalStack;
        this.applicationRef = applicationRef;
        this._document = _document;
        this._platformId = _platformId;
        /**
         * Close the latest opened modal if escape key event is emitted
         * @param event The Keyboard Event
         */
        this._escapeKeyboardEvent = function (event) {
            if (event.key === 'Escape') {
                try {
                    var modal = _this.getTopOpenedModal();
                    if (!modal.escapable) {
                        return false;
                    }
                    modal.onEscape.emit(modal);
                    _this.closeLatestModal();
                    return true;
                }
                catch (e) {
                    return false;
                }
            }
            return false;
        };
        /**
         * While modal is open, the focus stay on it
         * @param event The Keyboar dEvent
         */
        this._trapFocusModal = function (event) {
            if (event.key === 'Tab') {
                try {
                    var modal = _this.getTopOpenedModal();
                    if (!modal.nsmDialog.first.nativeElement.contains(document.activeElement)) {
                        event.preventDefault();
                        event.stopPropagation();
                        modal.nsmDialog.first.nativeElement.focus();
                    }
                    return true;
                }
                catch (e) {
                    return false;
                }
            }
            return false;
        };
        this._addEvents();
    }
    /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param modalInstance The object that contains the given modal identifier and the modal itself.
     * @param force Optional parameter that forces the overriding of modal instance if it already exists.
     * @returns nothing special.
     */
    NgxSmartModalService.prototype.addModal = function (modalInstance, force) {
        this._modalStack.addModal(modalInstance, force);
    };
    /**
     * Retrieve a modal instance by its identifier.
     *
     * @param id The modal identifier used at creation time.
     */
    NgxSmartModalService.prototype.getModal = function (id) {
        return this._modalStack.getModal(id);
    };
    /**
     * Alias of `getModal` to retrieve a modal instance by its identifier.
     *
     * @param id The modal identifier used at creation time.
     */
    NgxSmartModalService.prototype.get = function (id) {
        return this.getModal(id);
    };
    /**
     * Open a given modal
     *
     * @param id The modal identifier used at creation time.
     * @param force Tell the modal to open top of all other opened modals
     */
    NgxSmartModalService.prototype.open = function (id, force) {
        if (force === void 0) { force = false; }
        return this._openModal(this.get(id), force);
    };
    /**
     * Close a given modal
     *
     * @param id The modal identifier used at creation time.
     */
    NgxSmartModalService.prototype.close = function (id) {
        return this._closeModal(this.get(id));
    };
    /**
     * Close all opened modals
     */
    NgxSmartModalService.prototype.closeAll = function () {
        var _this = this;
        this.getOpenedModals().forEach(function (instance) {
            _this._closeModal(instance.modal);
        });
    };
    /**
     * Toggles a given modal
     * If the retrieved modal is opened it closes it, else it opens it.
     *
     * @param id The modal identifier used at creation time.
     * @param force Tell the modal to open top of all other opened modals
     */
    NgxSmartModalService.prototype.toggle = function (id, force) {
        if (force === void 0) { force = false; }
        return this._toggleModal(this.get(id), force);
    };
    /**
     * Retrieve all the created modals.
     *
     * @returns an array that contains all modal instances.
     */
    NgxSmartModalService.prototype.getModalStack = function () {
        return this._modalStack.getModalStack();
    };
    /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @returns an array that contains all the opened modals.
     */
    NgxSmartModalService.prototype.getOpenedModals = function () {
        return this._modalStack.getOpenedModals();
    };
    /**
     * Retrieve the opened modal with highest z-index.
     *
     * @returns the opened modal with highest z-index.
     */
    NgxSmartModalService.prototype.getTopOpenedModal = function () {
        return this._modalStack.getTopOpenedModal();
    };
    /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @returns a higher index from all the existing modal instances.
     */
    NgxSmartModalService.prototype.getHigherIndex = function () {
        return this._modalStack.getHigherIndex();
    };
    /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @returns the number of modal instances.
     */
    NgxSmartModalService.prototype.getModalStackCount = function () {
        return this._modalStack.getModalStackCount();
    };
    /**
     * Remove a modal instance from the modal stack.
     *
     * @param id The modal identifier.
     * @returns the removed modal instance.
     */
    NgxSmartModalService.prototype.removeModal = function (id) {
        var modalInstance = this._modalStack.removeModal(id);
        if (modalInstance) {
            this._destroyModal(modalInstance.modal);
        }
    };
    /**
     * Associate data to an identified modal. If the modal isn't already associated to some data, it creates a new
     * entry in the `modalData` array with its `id` and the given `data`. If the modal already has data, it rewrites
     * them with the new ones. Finally if no modal found it returns an error message in the console and false value
     * as method output.
     *
     * @param data The data you want to associate to the modal.
     * @param id The modal identifier.
     * @param force If true, overrides the previous stored data if there was.
     * @returns true if the given modal exists and the process has been tried, either false.
     */
    NgxSmartModalService.prototype.setModalData = function (data, id, force) {
        var i;
        if (i = this.get(id)) {
            i.setData(data, force);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Retrieve modal data by its identifier.
     *
     * @param id The modal identifier used at creation time.
     * @returns the associated modal data.
     */
    NgxSmartModalService.prototype.getModalData = function (id) {
        var i;
        if (i = this.get(id)) {
            return i.getData();
        }
        return null;
    };
    /**
     * Reset the data attached to a given modal.
     *
     * @param id The modal identifier used at creation time.
     * @returns the removed data or false if modal doesn't exist.
     */
    NgxSmartModalService.prototype.resetModalData = function (id) {
        if (!!this._modalStack.getModalStack().find(function (o) { return o.id === id; })) {
            var removed = this.getModal(id).getData();
            this.getModal(id).removeData();
            return removed;
        }
        else {
            return false;
        }
    };
    /**
     * Close the latest opened modal if it has been declared as escapable
     * Using a debounce system because one or more modals could be listening
     * escape key press event.
     */
    NgxSmartModalService.prototype.closeLatestModal = function () {
        this.getTopOpenedModal().close();
    };
    /**
     * Create dynamic NgxSmartModalComponent
     * @param id The modal identifier used at creation time.
     * @param content The modal content ( string, templateRef or Component )
     */
    NgxSmartModalService.prototype.create = function (id, content, options) {
        if (options === void 0) { options = {}; }
        try {
            return this.getModal(id);
        }
        catch (e) {
            var componentFactory = this._componentFactoryResolver.resolveComponentFactory(NgxSmartModalComponent);
            var ngContent = this._resolveNgContent(content);
            var componentRef = componentFactory.create(this._injector, ngContent);
            if (content instanceof core.Type) {
                componentRef.instance.contentComponent = content;
            }
            componentRef.instance.identifier = id;
            componentRef.instance.createFrom = 'service';
            if (typeof options.closable === 'boolean') {
                componentRef.instance.closable = options.closable;
            }
            if (typeof options.escapable === 'boolean') {
                componentRef.instance.escapable = options.escapable;
            }
            if (typeof options.dismissable === 'boolean') {
                componentRef.instance.dismissable = options.dismissable;
            }
            if (typeof options.customClass === 'string') {
                componentRef.instance.customClass = options.customClass;
            }
            if (typeof options.backdrop === 'boolean') {
                componentRef.instance.backdrop = options.backdrop;
            }
            if (typeof options.force === 'boolean') {
                componentRef.instance.force = options.force;
            }
            if (typeof options.hideDelay === 'number') {
                componentRef.instance.hideDelay = options.hideDelay;
            }
            if (typeof options.autostart === 'boolean') {
                componentRef.instance.autostart = options.autostart;
            }
            if (typeof options.target === 'string') {
                componentRef.instance.target = options.target;
            }
            if (typeof options.ariaLabel === 'string') {
                componentRef.instance.ariaLabel = options.ariaLabel;
            }
            if (typeof options.ariaLabelledBy === 'string') {
                componentRef.instance.ariaLabelledBy = options.ariaLabelledBy;
            }
            if (typeof options.ariaDescribedBy === 'string') {
                componentRef.instance.ariaDescribedBy = options.ariaDescribedBy;
            }
            if (typeof options.refocus === 'boolean') {
                componentRef.instance.refocus = options.refocus;
            }
            this._appRef.attachView(componentRef.hostView);
            var domElem = componentRef.hostView.rootNodes[0];
            this._document.body.appendChild(domElem);
            return componentRef.instance;
        }
    };
    NgxSmartModalService.prototype._addEvents = function () {
        var _this = this;
        if (!this.isBrowser) {
            return false;
        }
        window.addEventListener(NgxSmartModalConfig.prefixEvent + 'create', (function (e) {
            _this._initModal(e.detail.instance);
        }));
        window.addEventListener(NgxSmartModalConfig.prefixEvent + 'delete', (function (e) {
            _this._deleteModal(e.detail.instance);
        }));
        window.addEventListener(NgxSmartModalConfig.prefixEvent + 'open', (function (e) {
            _this._openModal(e.detail.instance.modal, e.detail.extraData.top);
        }));
        window.addEventListener(NgxSmartModalConfig.prefixEvent + 'toggle', (function (e) {
            _this._toggleModal(e.detail.instance.modal, e.detail.extraData.top);
        }));
        window.addEventListener(NgxSmartModalConfig.prefixEvent + 'close', (function (e) {
            _this._closeModal(e.detail.instance.modal);
        }));
        window.addEventListener(NgxSmartModalConfig.prefixEvent + 'dismiss', (function (e) {
            _this._dismissModal(e.detail.instance.modal);
        }));
        window.addEventListener('keyup', this._escapeKeyboardEvent);
        return true;
    };
    NgxSmartModalService.prototype._initModal = function (modalInstance) {
        modalInstance.modal.layerPosition += this.getModalStackCount();
        this.addModal(modalInstance, modalInstance.modal.force);
        if (modalInstance.modal.autostart) {
            this.open(modalInstance.id);
        }
    };
    NgxSmartModalService.prototype._openModal = function (modal, top) {
        if (modal.visible) {
            return false;
        }
        this.lastElementFocused = document.activeElement;
        if (modal.escapable) {
            window.addEventListener('keyup', this._escapeKeyboardEvent);
        }
        if (modal.backdrop) {
            window.addEventListener('keydown', this._trapFocusModal);
        }
        if (top) {
            modal.layerPosition = this.getHigherIndex();
        }
        modal.addBodyClass();
        modal.overlayVisible = true;
        modal.visible = true;
        modal.onOpen.emit(modal);
        modal.markForCheck();
        setTimeout(function () {
            modal.openedClass = true;
            if (modal.target) {
                modal.targetPlacement();
            }
            modal.nsmDialog.first.nativeElement.setAttribute('role', 'dialog');
            modal.nsmDialog.first.nativeElement.setAttribute('tabIndex', '-1');
            modal.nsmDialog.first.nativeElement.setAttribute('aria-modal', 'true');
            modal.nsmDialog.first.nativeElement.focus();
            modal.markForCheck();
            modal.onOpenFinished.emit(modal);
        });
        return true;
    };
    NgxSmartModalService.prototype._toggleModal = function (modal, top) {
        if (modal.visible) {
            return this._closeModal(modal);
        }
        else {
            return this._openModal(modal, top);
        }
    };
    NgxSmartModalService.prototype._closeModal = function (modal) {
        var _this = this;
        if (!modal.openedClass) {
            return false;
        }
        modal.openedClass = false;
        modal.onClose.emit(modal);
        modal.onAnyCloseEvent.emit(modal);
        if (this.getOpenedModals().length < 2) {
            modal.removeBodyClass();
            window.removeEventListener('keyup', this._escapeKeyboardEvent);
            window.removeEventListener('keydown', this._trapFocusModal);
        }
        setTimeout(function () {
            modal.visibleChange.emit(modal.visible);
            modal.visible = false;
            modal.overlayVisible = false;
            modal.nsmDialog.first.nativeElement.removeAttribute('tabIndex');
            modal.markForCheck();
            modal.onCloseFinished.emit(modal);
            modal.onAnyCloseEventFinished.emit(modal);
            if (modal.refocus) {
                _this.lastElementFocused.focus();
            }
        }, modal.hideDelay);
        return true;
    };
    NgxSmartModalService.prototype._dismissModal = function (modal) {
        if (!modal.openedClass) {
            return false;
        }
        modal.openedClass = false;
        modal.onDismiss.emit(modal);
        modal.onAnyCloseEvent.emit(modal);
        if (this.getOpenedModals().length < 2) {
            modal.removeBodyClass();
        }
        setTimeout(function () {
            modal.visible = false;
            modal.visibleChange.emit(modal.visible);
            modal.overlayVisible = false;
            modal.markForCheck();
            modal.onDismissFinished.emit(modal);
            modal.onAnyCloseEventFinished.emit(modal);
        }, modal.hideDelay);
        return true;
    };
    NgxSmartModalService.prototype._deleteModal = function (modalInstance) {
        this.removeModal(modalInstance.id);
        if (!this.getModalStack().length) {
            modalInstance.modal.removeBodyClass();
        }
    };
    /**
     * Resolve content according to the types
     * @param content The modal content ( string, templateRef or Component )
     */
    NgxSmartModalService.prototype._resolveNgContent = function (content) {
        if (typeof content === 'string') {
            var element = this._document.createTextNode(content);
            return [[element]];
        }
        if (content instanceof core.TemplateRef) {
            var viewRef = content.createEmbeddedView(null);
            this.applicationRef.attachView(viewRef);
            return [viewRef.rootNodes];
        }
        return [];
    };
    Object.defineProperty(NgxSmartModalService.prototype, "isBrowser", {
        /**
         * Is current platform browser
         */
        get: function () {
            return common.isPlatformBrowser(this._platformId);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Remove dynamically created modal from DOM
     */
    NgxSmartModalService.prototype._destroyModal = function (modal) {
        // Prevent destruction of the inline modals
        if (modal.createFrom !== "service") {
            return;
        }
        this._document.body.removeChild(modal.elementRef.nativeElement);
    };
    NgxSmartModalService.ɵfac = function NgxSmartModalService_Factory(t) { return new (t || NgxSmartModalService)(core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core.ApplicationRef), core.ɵɵinject(core.Injector), core.ɵɵinject(NgxSmartModalStackService), core.ɵɵinject(core.ApplicationRef), core.ɵɵinject(common.DOCUMENT), core.ɵɵinject(core.PLATFORM_ID)); };
    NgxSmartModalService.ɵprov = /*@__PURE__*/ core.ɵɵdefineInjectable({ token: NgxSmartModalService, factory: NgxSmartModalService.ɵfac });
    return NgxSmartModalService;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && core.ɵsetClassMetadata(NgxSmartModalService, [{
        type: core.Injectable
    }], function () { return [{ type: core.ComponentFactoryResolver }, { type: core.ApplicationRef }, { type: core.Injector }, { type: NgxSmartModalStackService }, { type: core.ApplicationRef }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [core.PLATFORM_ID]
            }] }]; }, null); })();

var NgxSmartModalModule = /** @class */ (function () {
    function NgxSmartModalModule(serivce) {
        this.serivce = serivce;
    }
    /**
     * Use in AppModule: new instance of NgxSmartModal.
     */
    NgxSmartModalModule.forRoot = function () {
        return {
            ngModule: NgxSmartModalModule,
            providers: [
                NgxSmartModalService,
                NgxSmartModalStackService
            ]
        };
    };
    /**
     * Use in features modules with lazy loading: new instance of NgxSmartModal.
     */
    NgxSmartModalModule.forChild = function () {
        return {
            ngModule: NgxSmartModalModule,
            providers: [
                NgxSmartModalService,
                NgxSmartModalStackService
            ]
        };
    };
    NgxSmartModalModule.ɵfac = function NgxSmartModalModule_Factory(t) { return new (t || NgxSmartModalModule)(core.ɵɵinject(NgxSmartModalService)); };
    NgxSmartModalModule.ɵmod = /*@__PURE__*/ core.ɵɵdefineNgModule({ type: NgxSmartModalModule });
    NgxSmartModalModule.ɵinj = /*@__PURE__*/ core.ɵɵdefineInjector({ imports: [[common.CommonModule]] });
    return NgxSmartModalModule;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && core.ɵsetClassMetadata(NgxSmartModalModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NgxSmartModalComponent],
                entryComponents: [NgxSmartModalComponent],
                exports: [NgxSmartModalComponent],
                imports: [common.CommonModule]
            }]
    }], function () { return [{ type: NgxSmartModalService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgxSmartModalModule, { declarations: [NgxSmartModalComponent], imports: [common.CommonModule], exports: [NgxSmartModalComponent] }); })();

exports.NgxSmartModalService = NgxSmartModalService;
exports.NgxSmartModalComponent = NgxSmartModalComponent;
exports.NgxSmartModalModule = NgxSmartModalModule;
exports.NgxSmartModalConfig = NgxSmartModalConfig;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-smart-modal.umd.js.map
