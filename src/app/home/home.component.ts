import { Component, OnInit } from '@angular/core';
import { Bien } from "../interface/bien";
import { BienService } from "../service/bien.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bienService : BienService) { }
public Biens:Bien[];

  ngOnInit() {
    this.bienService.getAllBien().subscribe(resultat => {
      this.Biens = resultat.data as Bien[];
    })
}
}
