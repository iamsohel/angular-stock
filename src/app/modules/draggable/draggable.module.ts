import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableDirective} from './draggable.directive';
import {DraggableRxDirective} from './draggable-rx.directive';
import {MovableDirective} from './movable.directive';
import {MovableAreaDirective} from './movable-area.directive';
import {DraggableHelperDirective} from './draggable-helper.directive';
import {SortableDirective} from './sortable.directive';
import {SortableListDirective} from './sortable-list.directive';
import {DraggableHelperService} from './draggable-helper.service';
import {ElementRuler} from './element-ruller';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DraggableDirective,
    DraggableRxDirective,
    MovableDirective,
    MovableAreaDirective,
    DraggableHelperDirective,
    SortableDirective,
    SortableListDirective
  ],
  declarations: [
    DraggableDirective,
    DraggableRxDirective,
    MovableDirective,
    MovableAreaDirective,
    DraggableHelperDirective,
    SortableDirective,
    SortableListDirective
  ],
  providers: [DraggableHelperService, ElementRuler]
})
export class DraggableModule {
}
