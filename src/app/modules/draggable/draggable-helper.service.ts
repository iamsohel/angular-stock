import {ElementRef, Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {GlobalPositionStrategy, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ElementRuler} from './element-ruller';
import {TemplatePortal} from '@angular/cdk/portal';
import {Subscription} from 'rxjs';

@Injectable()
export class DraggableHelperService {

    overlayRef: OverlayRef;
    el: ElementRef;
    positionStrategy: any;
    sub: Subscription;
    private rulerRef: any;

    constructor(private overlay: Overlay, private ruler: ElementRuler) {
    }

    get OverlayRef(): OverlayRef {
        return this.overlayRef;
    }

    get PositionStrategy(): GlobalPositionStrategy {
        return this.positionStrategy as GlobalPositionStrategy;
    }

    create(el: ElementRef): void {
        this.el = el;
        this.positionStrategy = new GlobalPositionStrategy();
        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy
        });
    }

    attach(template: TemplateRef<any>, viewContainerRef: ViewContainerRef): () => void {
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(new TemplatePortal(template, viewContainerRef));
            this.rulerRef = this.ruler.create(this.el.nativeElement, 0);
            this.sub = this.rulerRef.change.subscribe(({width, height}) => {
                this.overlayRef.overlayElement.style.height = height + 'px';
                this.overlayRef.overlayElement.style.width = width + 'px';
            });
            return () => {
                this.overlayRef.dispose();
                this.positionStrategy.dispose();
                this.rulerRef.dispose();
            };
        }

    }

    destroy() {
        this.overlayRef.detach();
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
