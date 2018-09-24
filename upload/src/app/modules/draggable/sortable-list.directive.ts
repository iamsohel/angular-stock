import {AfterContentInit, ContentChildren, Directive, EventEmitter, HostBinding, OnDestroy, Output, QueryList} from '@angular/core';
import {SortableDirective} from './sortable.directive';
import {interval, Observable, Subscription} from 'rxjs';

export interface SortEvent {
    currentIndex: number;
    newIndex: number;
}

const distance = (rectA: ClientRect, rectB: ClientRect): number => {
    return Math.sqrt(
        Math.pow(rectB.top - rectA.top, 2) +
        Math.pow(rectB.left - rectA.left, 2)
    );
};

const hCenter = (rect: ClientRect): number => {
    return rect.left + rect.width / 2;
};

const vCenter = (rect: ClientRect): number => {
    return rect.top + rect.height / 2;
};

@Directive({
    selector: '[appSortableList]'
})
export class SortableListDirective implements AfterContentInit, OnDestroy {
    @ContentChildren(SortableDirective) sortables: QueryList<SortableDirective>;
    @HostBinding('class.sortable-list') sortableList = true;
    @Output() sort = new EventEmitter<SortEvent>();

    private clientRects: ClientRect[];
    private sub: Subscription[] = [];

    ngAfterContentInit(): void {
        this.sortables.changes.subscribe(res => {
            this.resetSub();
            res.forEach(sortable => {
                sortable.sortable = true;
                this.sub.push(sortable.DragStart.subscribe(() => this.measureClientRects()));
                this.sub.push(sortable.DragMove.subscribe(event => this.detectSorting(sortable, event)));
            });
        });
        this.sortables.notifyOnChanges();
    }

    resetSub(): void {
        this.sub.forEach(sub => {
            sub.unsubscribe();
        });
        this.sub = [];
    }

    ngOnDestroy(): void {
        this.resetSub();
    }

    private measureClientRects() {
        this.clientRects = this.sortables.map(sortable => sortable.element.nativeElement.getBoundingClientRect());
    }

    private detectSorting(sortable: SortableDirective, event: PointerEvent) {
        const currentIndex = this.sortables.toArray().indexOf(sortable);
        const currentRect = this.clientRects[currentIndex];
        this.clientRects
            .slice()
            .sort((rectA, rectB) => distance(rectA, currentRect) - distance(rectB, currentRect))
            .filter(rect => rect !== currentRect)
            .some(rect => {
                const isHorizontal = rect.top === currentRect.top;
                const isBefore = isHorizontal ?
                    rect.left < currentRect.left :
                    rect.top < currentRect.top;
                // refactored this part a little bit after my Youtube video
                // for improving readability
                const moveBack = isBefore && (isHorizontal ?
                        event.clientX < hCenter(rect) :
                        event.clientY < vCenter(rect)
                );
                const moveForward = !isBefore && (isHorizontal ?
                        event.clientX > hCenter(rect) :
                        event.clientY > vCenter(rect)
                );
                if (moveBack || moveForward) {
                    this.sort.emit({
                        currentIndex: currentIndex,
                        newIndex: this.clientRects.indexOf(rect)
                    });
                    return true;
                }
                return false;
            });
    }

    private listObserver(): Observable<QueryList<SortableDirective>> {
        return new Observable(observer => {
            setInterval(_ => {
                observer.next(this.sortables);
                if (this.sortables.length > 0) {
                    observer.complete();
                }
            }, 1000);
        });
    }
}
