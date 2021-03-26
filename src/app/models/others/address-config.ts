export interface AddressConfig {

    description: string;
    street: string;
    number?: string;
    zipCode?: string;
    neighborhood?: string;
    city: string;
    region: string;
    country: string;
    referencePoint?: string;
    complement?: string;
    latitude: number;
    longitude: number;
}