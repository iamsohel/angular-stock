import {
  ContentChild,
  Directive, ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;
  @HostBinding('class.dragging') dragging = false;
  @HostBinding('attr.touch-action') touchAction = 'none';
  @Output() DragStart = new EventEmitter<PointerEvent>();
  @Output() DragMove = new EventEmitter<PointerEvent>();
  @Output() DragEnd = new EventEmitter<PointerEvent>();

  constructor(public viewContainerRef: ViewContainerRef, public element: ElementRef) {
  }

  @HostListener('pointerdown', ['$event'])
  OnPointerDown(event: PointerEvent): void {
    event.stopPropagation();
    this.dragging = true;
    this.DragStart.emit(event);
  }

  @HostListener('document:pointermove', ['$event'])
  OnPointerMove(event: PointerEvent): void {
    if (!this.dragging) {
      return;
    }
    this.DragMove.emit(event);
  }

  @HostListener('document:pointerup', ['$event'])
  OnPointerUp(event: PointerEvent): void {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    this.DragEnd.emit(event);
  }


}
