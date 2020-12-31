import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../enums/color';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { URLS } from './urls';

@Injectable()
export class UserService {

    private _userAvatarColors = [
        Color.turquoise,
        Color.emerland,
        Color.peterriver,
        Color.wetasphalt,
        Color.greensea,
        Color.nephritis,
        Color.belizehole,
        Color.midnightblue,
        Color.carrot,
        Color.alizarin,
        Color.orange,
        Color.pumpkin,
        Color.pomegranate
    ];

    constructor(
        private _http: HttpClient,
        private _authService: AuthService
    ) {
    }

    public getAvatarImageNameInitials(name: string): string {

        // get random color by user name
        let colorIndex = name.length;
        while (colorIndex > this._userAvatarColors.length - 1) {
            colorIndex = Math.floor(colorIndex / 2);
        }

        let color = this._userAvatarColors[colorIndex] as string;
        color = color.substring(1, color.length); // remove #

        let text = name[0];
        let nameSplited = name.split(' ');
        text += nameSplited[nameSplited.length - 1][0];

        return `https://dummyimage.com/1:1x500/${color}/ffffff?text=${text}`;
    }
}