import {AfterContentInit, Directive, HostBinding, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {OverlayRef} from '@angular/cdk/overlay';
import {Subscription} from 'rxjs';
import {DraggableRxDirective} from './draggable-rx.directive';
import {DraggableHelperService} from './draggable-helper.service';

@Directive({
    selector: '[appDraggableHelper]',
    exportAs: 'appDraggableHelper'
})
export class DraggableHelperDirective implements OnInit, OnDestroy, AfterContentInit {
    private overlayRef: OverlayRef;
    // private positionStrategy = new GlobalPositionStrategy();
    private startPosition?: { x: number; y: number };
    subscriptions: Subscription[] = [];

    constructor(private draggable: DraggableRxDirective,
                private templateRef: TemplateRef<any>,
                private viewContainerRef: ViewContainerRef,
                private helperService: DraggableHelperService
    ) {
    }

    ngOnInit(): void {
        this.subscriptions[0] = this.draggable.DragStart.subscribe(event => this.onDragStart(event));
        this.subscriptions[1] = this.draggable.DragMove.subscribe(event => this.onDragMove(event));
        this.subscriptions[2] = this.draggable.DragEnd.subscribe(() => this.onDragEnd());
        // create an overlay...
        this.helperService.create(this.draggable.element);
        this.overlayRef = this.helperService.OverlayRef;
    }

    ngOnDestroy(): void {
        // remove the overlay...
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
        this.helperService.destroy();
    }

    private onDragStart(event: PointerEvent): void {
        // determine relative start position
        // this.viewRef = this.draggable.viewContainerRef.createEmbeddedView(this.templateRef);
        const clientRect = this.draggable.element.nativeElement.getBoundingClientRect();
        this.startPosition = {
            x: event.clientX - clientRect.left,
            y: event.clientY - clientRect.top
        };
    }

    private onDragMove(event: PointerEvent): void {
        // render the helper in the overlay
        this.helperService.attach(this.templateRef, this.viewContainerRef);
        // position the helper...
        this.helperService.PositionStrategy.left(`${event.clientX - this.startPosition.x}px`);
        this.helperService.PositionStrategy.top(`${event.clientY - this.startPosition.y}px`);
        this.helperService.PositionStrategy.apply();
    }

    private onDragEnd(): void {
        // remove the helper from the overlay
        // this.viewRef.destroy();
        // this.overlayRef.detach();
        this.helperService.overlayRef.detach();
    }

    ngAfterContentInit(): void {

    }

}
