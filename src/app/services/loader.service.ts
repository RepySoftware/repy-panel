import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoaderService {
    public loaderEmitter: EventEmitter<boolean> = new EventEmitter();

    private _runningLoaders: number = 0;

    public show(): void {
        this.loaderEmitter.emit(true);
        this._runningLoaders++;
    }

    public dismiss(): void {
        if (this._runningLoaders > 0)
            this._runningLoaders--;

        if (this._runningLoaders == 0)
            this.loaderEmitter.emit(false);
    }
}