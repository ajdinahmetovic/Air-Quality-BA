import { Directive, HostListener, EventEmitter, Input, Output } from '@angular/core';



@Directive({
  selector: '[swipeTab]'
})


export class SwipeDirective {

  @HostListener('swipeleft', ['$event'])
  onSwipeleft(event) {
    if(this.selectedIndex + 1 <= this.tabs - 1) {
      this.selectedIndex += 1;
      this.selectedIndexChange.emit(this.selectedIndex);
    }
  }

  @HostListener('swiperight', ['$event'])
  onSwiperight(event) {
    if(this.selectedIndex - 1 >= 0) {
      this.selectedIndex -= 1;
      this.selectedIndexChange.emit(this.selectedIndex);
    }
  }

  @Input() tabs: number;
  @Input()  selectedIndex: number;
  @Output() selectedIndexChange = new EventEmitter<number>();

}
