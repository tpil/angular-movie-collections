import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  pages!: any;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

page=1;
total=this.pages;

    onPageChange(e:any){
      this.newItemEvent.emit(e)
    }
}

