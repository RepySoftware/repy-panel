import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class TitleService {

    constructor(
        private _title: Title
    ) { }

    public set(newTitle: string = 'Admin'): void {
        this._title.setTitle(`${newTitle} | Repy`);
    }
}