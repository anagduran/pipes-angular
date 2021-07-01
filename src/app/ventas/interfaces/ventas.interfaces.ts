
//enum es como trabajar con valores numericos pero solo que con palabras
export enum Color {
    rojo, negro, azul, verde
}


export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}