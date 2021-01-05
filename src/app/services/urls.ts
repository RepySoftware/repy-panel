import { environment } from 'src/environments/environment';

export const URLS = {
    api: {
        auth: `${environment.apiUrl}/auth`,
        devices: `${environment.apiUrl}/devices`
    }
}