import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  constructor(
    private _title: TitleService
  ) { }

  ngOnInit(): void {
    this._title.set('Pessoas');
  }

}
