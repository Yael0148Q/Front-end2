
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {
  URL_API= 'http://localhost:3000/usuarios/'; 
  public usuario: Usuario=
  { idu:'',
    usuarioa:'',
    numcontrol:'' ,    
    contrasena: ''};

  usuarios: Usuario[]=[];

  constructor(private http: HttpClient){}     //<----------
  
  getUsuarios(){
    return this.http.get<Usuario[]>(this.URL_API);   //<------
    //return this.empleados;
  }

  createUsuario(usuario:Usuario){
    // const id= this.empleados[this.empleados.length-1].id+1;
    // empleado.id= id;
    // console.log(id);
    // this.empleados.push(empleado);
    // return this.empleados;
    return this.http.post(this.URL_API,usuario);
  }

  deleteUsuario( idu:any){
    // const pos = this.empleados.findIndex(
    //   item => item.id===id);
    //   console.log(pos);
    //   this.empleados.splice(pos,1);
     //return this.empleados;
     return this.http.delete(this.URL_API+idu);
      
    }

    editUsuario(usuario:Usuario){
      // const pos= this.empleados.findIndex(
      //   item => item.id===empleado.id);
      //     console.log(pos);
      //     this.empleados[pos]=empleado;
      //     return this.empleados;
      return this.http.put(this.URL_API+usuario.idu,usuario);
    }
}