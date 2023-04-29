import { Component, OnInit } from '@angular/core';
import { DataService } from "@app/services/data.service";
import {debounceTime, filter, Observable, tap} from "rxjs";
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

  private page: number;
  private query: string;

  ngOnInit(): void {
    this.dataService.currentPage$.subscribe(page => {
      this.page = page;
      this.dataloader();
    })

    this.dataService.searchPage$.pipe(
      filter((searchTerm: string) => {
        return (
          searchTerm.trim().length >= 1
        );
      }),
      debounceTime(500),
    ).subscribe(searchQuery => {
      this.query = searchQuery;
      this.dataloader();
    })
  }

  private dataloader() {
    this.data$ = this.dataService.list(this.pageSize, this.page, { q: this.query }).pipe(
      tap(x => this.totalPages = x.totalResults / this.pageSize),
    );
  }
}
