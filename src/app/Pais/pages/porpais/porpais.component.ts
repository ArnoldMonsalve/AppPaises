import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html',
  styleUrls: ['./porpais.component.css']
})
export class PorpaisComponent implements OnInit {

  termino:string= '';
  info=[];
  VariableError:boolean=false;
  constructor(private servicioPais: PaisService) { }

  buscar(){
    this.VariableError=false;
    console.log(this.termino);
    //subscribe para traer la data de la api en este caso para activar un observable
    this.servicioPais.buscarPais(this.termino).subscribe(
      (data)=>{
      this.info=data;
      console.log(this.info);
    },(error)=>{
      this.VariableError=true;
      console.log('Error');
      console.info(error)
    }
    );
  }

  //llamado servicio del pais


  ngOnInit(): void {
  }



}
