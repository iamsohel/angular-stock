import {Directive, ElementRef, forwardRef, HostBinding} from '@angular/core';
import {DraggableRxDirective} from './draggable-rx.directive';

@Directive({
    selector: '[appSortable]',
    providers: [
        {provide: DraggableRxDirective, useExisting: forwardRef(() => SortableDirective)}
    ]
})
export class SortableDirective extends DraggableRxDirective {
    @HostBinding('class.sortable') sortable = true;

    constructor(element: ElementRef) {
        super(element);
    }

}
