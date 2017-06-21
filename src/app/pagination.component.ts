import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {

  currentPage: number = 1;

  @Output()
  private onPageChange = new EventEmitter<number>();

  nextPage(){
  	this.currentPage++;
  	this.onPageChange.emit(this.currentPage);
  }

  previousPage(){
  	this.currentPage--;
  	this.onPageChange.emit(this.currentPage);

  }
}
