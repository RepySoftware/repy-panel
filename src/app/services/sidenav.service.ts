import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class SidenavService {

    public sidenavActionEmitter: EventEmitter<string> = new EventEmitter();

    public open(): void {
        this.sidenavActionEmitter.emit('open');
    }

    public close(): void {
        this.sidenavActionEmitter.emit('close');
    }

    public toggle(): void {
        this.sidenavActionEmitter.emit('toggle');
    }
}