import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html',
  styleUrls: ['./porpais.component.css']
})
export class PorpaisComponent implements OnInit {

  termino:string= '';
  VariableError:boolean=false;
  paises: Country[]=[];
  constructor(private servicioPais: PaisService) { }

  buscar(){
    this.VariableError=false;
    console.log(this.termino);
    //subscribe para traer la data de la api en este caso para activar un observable
    this.servicioPais.buscarPais(this.termino).subscribe(
      (data)=>{
      console.log(data)
      this.paises=data;
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
