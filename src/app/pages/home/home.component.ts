import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private _title: TitleService,
    private _activatedRoute: ActivatedRoute,
    private _sidenavService: SidenavService
  ) { }

  ngOnInit() {
    this._title.set('Home');
  }

  ngAfterViewInit(): void {
    if (this._activatedRoute.snapshot.queryParams.sn && JSON.parse(this._activatedRoute.snapshot.queryParams.sn) === true) {
      setTimeout(() => {
        this._sidenavService.open();
      }, 1000);
    }
  }
}
