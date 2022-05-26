export class CreateCatModel {
    name: string;
    age: number;
    breed: string;
    is_alive: boolean;
}

export interface Cat {
    name: string;
    age: number;
    breed: string;
    is_alive: boolean;
}