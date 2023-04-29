import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})

export class PaginatorComponent {
  @Input() totalPage: number;
  @Output() pageEvent = new EventEmitter<number>();

  currentPage: number = 1;

  onChangePage(page: number) {
    if (page === 0 || page === this.totalPage) {
      return;
    }
    this.pageEvent.emit(page);
  }

  next() {
    if (this.currentPage === this.totalPage) {
      return;
    }
    this.currentPage  = this.currentPage + 1
    this.pageEvent.emit(this.currentPage);
  }

  prev() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage  = this.currentPage - 1
    this.pageEvent.emit(this.currentPage);
  }


}
