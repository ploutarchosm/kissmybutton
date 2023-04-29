import { Component, OnInit } from '@angular/core';
import { DataService } from "@app/services/data.service";
import { Observable, tap} from "rxjs";
import { IPaginationViewModel } from "@app/models/pagination.interface";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  totalPages = 0;
  pageSize = 6;

  data$: Observable<IPaginationViewModel>

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentPage$.pipe().subscribe(page => this.dataloader(page));
  }

  private dataloader(page: number) {
    this.data$ = this.dataService.list(this.pageSize, page).pipe(
      tap(x => this.totalPages = x.totalResults / this.pageSize),
    );
  }
}
