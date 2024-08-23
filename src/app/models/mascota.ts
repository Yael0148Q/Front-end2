export interface Mascota{
    id?: string,
    tipo:string,            //<<<
    raza: string,
    alimentacion: string,
    vacunas: string,
    edad?: any,
    precio?:any
}