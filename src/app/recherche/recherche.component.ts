import { Component, OnInit } from '@angular/core';
import { Bien } from "../interface/bien";
import { Typebien } from "../interface/typebien";
import { Localite } from "../interface/localite";
import { BienService } from "../service/bien.service";
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
public types: Type[];
public localites:Localite[];
  constructor(private service:BienService) { }

  ngOnInit() {
    this.service.getTypebien().subscribe(resultat => {
      this.types = resultat.data as Type[];
      console.log(this.types);
    })

    this.service.getLocalite().subscribe(resultat => {
      this.localites = resultat.data as Localite[];
      console.log(this.localites);
    })
  }

}
