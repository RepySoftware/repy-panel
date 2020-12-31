import { Injectable } from '@angular/core';
import { AppData } from '../models/others/app-data';

@Injectable()
export class StorageService {

    private static APPDATA_STORAGE_KEY = 'app_data';

    public data: AppData = {};

    public loadData(): void {

        try {
            this.data = JSON.parse(localStorage.getItem(StorageService.APPDATA_STORAGE_KEY));
        } catch (error) {
            new Error(`loadData() failed. ${error}`);
        }
    }

    public saveData(): void {
        localStorage.setItem(StorageService.APPDATA_STORAGE_KEY, JSON.stringify(this.data));
    }

    public clearData(): void {
        this.data = null;
        localStorage.removeItem(StorageService.APPDATA_STORAGE_KEY);
    }
}