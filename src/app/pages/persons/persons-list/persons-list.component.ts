import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/api/person';
import { PersonFilter } from '../../../models/output/filters/person.filter';
import { LoaderService } from '../../../services/loader.service';
import { PersonService } from '../../../services/person.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  public persons: Person[] = [];

  public personFilter: PersonFilter = {
    limit: 20,
    index: 0
  }

  public tableColumns: string[] = [
    'id',
    'name',
    'type',
    'documentNumber',
    'address',
    'options'
  ]

  constructor(
    private _personService: PersonService,
    private _loader: LoaderService,
    private _toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._personService.getAll(this.personFilter).subscribe(response => {
        this._loader.dismiss();

        if (options.reset)
          this.persons = [];

        this.persons = this.persons.concat(response);

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showError(error);
        reject();
      })
    });
  }

  public loadMore(): void {
    this.personFilter.index++;
    this.getPersons();
  }

  public search(query: string): void {
    this.personFilter.q = query;
    this.personFilter.index = 0;

    this.getPersons({ reset: true }).then(() => {
      this.personFilter.q = null;
    });
  }

}
