import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostBinding,
  HostListener,
  Input,
  OnInit, Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {DraggableRxDirective} from './draggable-rx.directive';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

interface Position {
  x: number;
  y: number;
}

@Directive({
  selector: '[appMovable]'
})
export class MovableDirective extends DraggableRxDirective {
  private tempView: EmbeddedViewRef<ViewContainerRef>;

  @HostBinding('style.transform') get transform(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `translateX(${this.position.x}px) translateY(${this.position.y}px)`
    );
  }

  @HostBinding('class.movable') movable = true;
  @HostBinding('style.zIndex') zIndex = 1;
  @Input() moveX = true;
  @Input() moveY = true;
  public position: Position = {x: 0, y: 0};
  private startPosition: Position;
  @Input('appMovableReset') reset = false;
  @Input() replaceTemplate: TemplateRef<any>;

  constructor(
    private sanitizer: DomSanitizer,
    public element: ElementRef,
    private viewContainerRef: ViewContainerRef,
  ) {
    super(element);
  }

  @HostListener('DragStart', ['$event']) onDragStart(event: PointerEvent) {
    this.startPosition = {x: event.clientX, y: event.clientY};
    this.zIndex = 1000;
    this.tempView = this.viewContainerRef.createEmbeddedView(this.replaceTemplate, this.viewContainerRef);
  }

  @HostListener('DragMove', ['$event']) onDragMove(event: PointerEvent) {
    if (this.moveX) {
      this.position.x = event.clientX - this.startPosition.x;
    }
    if (this.moveY) {
      this.position.y = event.clientY - this.startPosition.y;
    }

  }

  @HostListener('DragEnd', ['$event']) onDragEnd(event: PointerEvent) {
    if (this.reset) {
      this.position = {x: 0, y: 0};
    }
    this.zIndex = 1;
    this.tempView.destroy();
  }
}
