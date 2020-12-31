import { ApiModel } from "../abstraction/api-model";

export interface Cylinder extends ApiModel {

    name: string;
    defaultCylinderWeight: number;
    defaultContentWeight: number;
}