import { from } from 'rxjs';
import { Usuario } from './../../models/usuario';
import { usuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class usuarioComponent implements OnInit {

  constructor(public usuarioService:usuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarioService.usuarios= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
  createUsuario(form:NgForm){
      if(form.value.idu){
        alert('actualizando'); 
        this.usuarioService.editUsuario(form.value).subscribe(
         res=> console.log(res),
         err=> console.log(err)
        );
      }else{//Creando
     this.usuarioService.createUsuario(form.value).subscribe(
       res=> {
         this.getUsuarios();
         form.reset();
       },
       err=> console.log(err)
     )}
   }    

  deleteUsuario(idu:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando'+ idu);
     if(resp){
       this.usuarioService.deleteUsuario(idu).subscribe(
        (res)=>{
          this.getUsuarios();
        },
        (err)=> console.log(err)
       );
     }
  }

  editUsuario(usuario:Usuario){
    this.usuarioService.usuario= usuario;
  }

  formReset(form:NgForm){
    this.usuarioService.usuario=form.value;
    form.reset();
  }
}
