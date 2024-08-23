import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  URL_API= 'http://localhost:3000/mascotas/';

  public mascota:Mascota=
  {id:'',tipo:'',raza:'',alimentacion:'',
  vacunas:'',edad:'',precio:''};

  mascotas:Mascota[]=[];

  constructor(private http:HttpClient){} 

  getMascotas(){
    return this.http.get<Mascota[]>(this.URL_API);  
  }

  getMascota(id:any){
    return this.http.get<Mascota[]>(this.URL_API);  
  }

  createMascota(mascota:Mascota){
    return this.http.post(this.URL_API,mascota);
  }

  deleteMacota(id:any){
    return this.http.delete(this.URL_API+id);
  }
  
  editMascota(mascota:Mascota){
    return this.http.put(this.URL_API+mascota.id,mascota);
  }

}
