export interface PersonSearch {
    id: number;
    name: string;
    tradeName: string;
    documentNumber: string;
    isSupplier: boolean;
    isCustomer: boolean;
    isGasCustomer: boolean;
    isActive: boolean;
    phones: string[];
    addressStreet: string;
    addressNumber: string;
    addressNeighborhood: string;
    addressCity: string;
    addressRegion: string;
    addressCountry: string;
    addressDescription: string;
    addressComplement: string;
    addressReferencePoint: string;
}