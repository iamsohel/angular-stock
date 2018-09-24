import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {repeat, switchMap, take, takeUntil} from 'rxjs/operators';

@Directive({
    selector: '[appDraggableRx]'
})
export class DraggableRxDirective implements OnInit {
    @HostBinding('class.draggable') draggable = true;
    @HostBinding('class.dragging') dragging = false;
    @HostBinding('attr.touch-action') touchAction = 'none';
    @Output() DragStart = new EventEmitter<PointerEvent>();
    @Output() DragMove = new EventEmitter<PointerEvent>();
    @Output() DragEnd = new EventEmitter<PointerEvent>();
    private pointerDown = new Subject<PointerEvent>();
    private pointerMove = new Subject<PointerEvent>();
    private pointerUp = new Subject<PointerEvent>();

    constructor(public element: ElementRef) {
    }

    @HostListener('pointerdown', ['$event'])
    OnPointerDown(event: PointerEvent): void {
        event.stopPropagation();
        this.pointerDown.next(event);
    }

    @HostListener('document:pointermove', ['$event'])
    OnPointerMove(event: PointerEvent): void {
        this.pointerMove.next(event);
    }

    @HostListener('document:pointerup', ['$event'])
    OnPointerUp(event: PointerEvent): void {
        this.pointerUp.next(event);
    }

    ngOnInit() {
        this.pointerDown.asObservable().subscribe((event) => {
            this.DragStart.emit(event);
        });
        this.pointerDown.pipe(
            switchMap(() => this.pointerMove),
            takeUntil(this.pointerUp),
            repeat()
        ).subscribe((event) => {
            this.dragging = true;
            this.DragMove.emit(event);
        });
        this.pointerDown.pipe(
            switchMap(() => this.pointerUp),
            take(1),
            repeat(),
        ).subscribe((event) => {
            this.dragging = false;
            this.DragEnd.emit(event);
        });
    }
}
