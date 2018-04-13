
import { Component, OnInit } from '@angular/core';
import { Bien } from "../interface/bien";
import { BienService } from "../service/bien.service";
@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})
export class ImmobilierComponent implements OnInit {

  constructor(private bienService : BienService) { }
public Biens:Bien[];
  ngOnInit() {

    this.bienService.getAllBien().subscribe(resultat => {
      this.Biens = resultat.data as Bien[];
    })

  }


}
