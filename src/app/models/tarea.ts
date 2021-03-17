export class Tarea {
    nombre: string;
    estado: boolean;

    constructor(pNombre = '', pEstado = false){
        this.nombre = pNombre;
        this.estado = pEstado;
    }
}