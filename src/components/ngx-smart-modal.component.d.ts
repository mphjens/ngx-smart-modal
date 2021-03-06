import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, Type, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxSmartModalComponent implements OnInit, OnDestroy, AfterViewInit {
    private _renderer;
    private _changeDetectorRef;
    private componentFactoryResolver;
    readonly elementRef: ElementRef;
    private _document;
    private _platformId;
    closable: boolean;
    escapable: boolean;
    dismissable: boolean;
    identifier: string;
    customClass: string;
    visible: boolean;
    backdrop: boolean;
    force: boolean;
    hideDelay: number;
    autostart: boolean;
    target: string;
    ariaLabel: string | null;
    ariaLabelledBy: string | null;
    ariaDescribedBy: string | null;
    refocus: boolean;
    visibleChange: EventEmitter<boolean>;
    onClose: EventEmitter<any>;
    onCloseFinished: EventEmitter<any>;
    onDismiss: EventEmitter<any>;
    onDismissFinished: EventEmitter<any>;
    onAnyCloseEvent: EventEmitter<any>;
    onAnyCloseEventFinished: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    onOpenFinished: EventEmitter<any>;
    onEscape: EventEmitter<any>;
    onDataAdded: EventEmitter<any>;
    onDataRemoved: EventEmitter<any>;
    contentComponent: Type<Component>;
    contentComponentInstance: Component;
    layerPosition: number;
    overlayVisible: boolean;
    openedClass: boolean;
    createFrom: string;
    private _data;
    private nsmContent;
    nsmDialog: QueryList<ElementRef>;
    private nsmOverlay;
    dynamicContentContainer: QueryList<ViewContainerRef>;
    constructor(_renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef, componentFactoryResolver: ComponentFactoryResolver, elementRef: ElementRef, _document: any, _platformId: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Open the modal instance
     *
     * @param top open the modal top of all other
     * @returns the modal component
     */
    open(top?: boolean): NgxSmartModalComponent;
    /**
     * Close the modal instance
     *
     * @returns the modal component
     */
    close(): NgxSmartModalComponent;
    /**
     * Dismiss the modal instance
     *
     * @param e the event sent by the browser
     * @returns the modal component
     */
    dismiss(e: any): NgxSmartModalComponent;
    /**
     * Toggle visibility of the modal instance
     *
     * @param top open the modal top of all other
     * @returns the modal component
     */
    toggle(top?: boolean): NgxSmartModalComponent;
    /**
     * Add a custom class to the modal instance
     *
     * @param className the class to add
     * @returns the modal component
     */
    addCustomClass(className: string): NgxSmartModalComponent;
    /**
     * Remove a custom class to the modal instance
     *
     * @param className the class to remove
     * @returns the modal component
     */
    removeCustomClass(className?: string): NgxSmartModalComponent;
    /**
     * Returns the visibility state of the modal instance
     */
    isVisible(): boolean;
    /**
     * Checks if data is attached to the modal instance
     */
    hasData(): boolean;
    /**
     * Attach data to the modal instance
     *
     * @param data the data to attach
     * @param force override potentially attached data
     * @returns the modal component
     */
    setData(data: any, force?: boolean): NgxSmartModalComponent;
    /**
     * Retrieve the data attached to the modal instance
     */
    getData(): any;
    /**
     * Remove the data attached to the modal instance
     *
     * @returns the modal component
     */
    removeData(): NgxSmartModalComponent;
    /**
     * Add body class modal opened
     *
     * @returns the modal component
     */
    addBodyClass(): NgxSmartModalComponent;
    /**
     * Add body class modal opened
     *
     * @returns the modal component
     */
    removeBodyClass(): NgxSmartModalComponent;
    markForCheck(): void;
    /**
     * Listens for window resize event and recalculates modal instance position if it is element-relative
     */
    targetPlacement(): boolean | void;
    private _sendEvent;
    /**
     * Is current platform browser
     */
    private get isBrowser();
    /**
     * Creates content inside provided ViewContainerRef
     */
    private createDynamicContent;
    static ??fac: i0.????FactoryDeclaration<NgxSmartModalComponent, never>;
    static ??cmp: i0.????ComponentDeclaration<NgxSmartModalComponent, "ngx-smart-modal", never, { "closable": "closable"; "escapable": "escapable"; "dismissable": "dismissable"; "identifier": "identifier"; "customClass": "customClass"; "visible": "visible"; "backdrop": "backdrop"; "force": "force"; "hideDelay": "hideDelay"; "autostart": "autostart"; "target": "target"; "ariaLabel": "ariaLabel"; "ariaLabelledBy": "ariaLabelledBy"; "ariaDescribedBy": "ariaDescribedBy"; "refocus": "refocus"; }, { "visibleChange": "visibleChange"; "onClose": "onClose"; "onCloseFinished": "onCloseFinished"; "onDismiss": "onDismiss"; "onDismissFinished": "onDismissFinished"; "onAnyCloseEvent": "onAnyCloseEvent"; "onAnyCloseEventFinished": "onAnyCloseEventFinished"; "onOpen": "onOpen"; "onOpenFinished": "onOpenFinished"; "onEscape": "onEscape"; "onDataAdded": "onDataAdded"; "onDataRemoved": "onDataRemoved"; }, never, ["*"]>;
}
