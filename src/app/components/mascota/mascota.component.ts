import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mascota } from 'src/app/models/mascota';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  constructor(public mascotaService:MascotasService) { }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas(){
    this.mascotaService.getMascotas().subscribe(
      res => {
        this.mascotaService.mascotas= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createMascota(form:NgForm){
    if(form.value.id){
      alert('actualizando'); 
      this.mascotaService.editMascota(form.value).subscribe(
       res=> console.log(res),
       err=> console.log(err)
      );
    }else{//Creando
   this.mascotaService.createMascota(form.value).subscribe(
     res=> {
       this.getMascotas();
       form.reset();
     },
     err=> console.log(err)
   )}
 }     

 deleteMascota(id:any){
   //alert('Borrando');
    const resp= confirm('Estas seguro de eliminarlo?');
    console.log('eliminando '+id);
    if(resp){
      this.mascotaService.deleteMacota(id).subscribe(
       (res)=>{
         this.getMascotas();
       },
       (err)=> console.log(err)
      );
    }
 }

 editMascota(mascota:Mascota){
   this.mascotaService.mascota=mascota;
 }

 formReset(form:NgForm){
   this.mascotaService.mascota=form.value;
   form.reset();
 }

}
