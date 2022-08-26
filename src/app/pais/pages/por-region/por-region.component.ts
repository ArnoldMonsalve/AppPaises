import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  constructor(private _pais: PaisService) { }

regiones: Array<any> = [
  { siglas: "EU", nombre: "Union Europea" },
  { siglas: "EFTA", nombre: "Asociación Europea de Libre Comercio" },
  { siglas: "CARICOM", nombre: "Comunidad del Caribe" },
  { siglas: "PA", nombre: "Alianza del Pacífico" },
  { siglas: "AU", nombre: "Unión Africana" },
  { siglas: "USAN", nombre: "Unión de Naciones Suramericanas" },
  { siglas: "EEU", nombre: "Unión Económica Euroasiática" },
  { siglas: "AL", nombre: "Liga Árabe" },
  { siglas: "ASEAN", nombre: "Asociación de Naciones del Sudeste Asiático" },
  { siglas: "CAIS", nombre: "Sistema de la Integración Centroamericana" },
  { siglas: "CEFTA", nombre: "Acuerdo de Libre Comercio de Europa Central" },
  { siglas: "NAFTA", nombre: "Tratado de Libre Comercio de América del Norte" },
  { siglas: "SAARC", nombre: "Asociación del Sur de Asia para la Cooperación Regional" }
];
  siglas:string='';
  regionActivada:string='';
  paises:Country[]=[];
  ngOnInit(): void {
  }

  recibirSiglas(siglas:any){
    this.siglas=siglas;
    this._pais.buscarRegion(siglas).subscribe((data) =>{
      this.paises=data;
      console.log(this.paises);
    });

  }

  activarRegion(region:any){
    this.regionActivada=region;
  }
}


