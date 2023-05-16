export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor (nombre: string, apellido: String, img: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    } 
}