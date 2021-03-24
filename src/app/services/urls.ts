import { environment } from 'src/environments/environment';

export const URLS = {
    api: {
        auth: `${environment.apiUrl}/auth`,
        devices: `${environment.apiUrl}/devices`,
        persons: `${environment.apiUrl}/persons`,
        products: `${environment.apiUrl}/products`,
        companyBranches: `${environment.apiUrl}/companyBranches`,
        employees: `${environment.apiUrl}/employees`,
        paymentMethods: `${environment.apiUrl}/paymentMethods`,
        saleOrders: `${environment.apiUrl}/saleOrders`
    }
}