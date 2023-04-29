import { Component } from '@angular/core';
import {DataService} from "@app/services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  query = '';
  constructor(public dataService: DataService) { }


}
