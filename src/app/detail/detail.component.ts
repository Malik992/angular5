import { Component, OnInit,Input } from '@angular/core';
import { BienService } from "../service/bien.service";
import { Bien } from "../interface/bien";
import { Client } from "../interface/client";
// *****
import { Reservation } from '../interface/reservation';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// *****
import { ImmobilierComponent } from './immobilier/immobilier.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

public infos: any;
public bien: Bien;
public Newclient: Client;
public reservation:reservation;
// ***
  public accepter=false;

  public newclient: Client
  private idclient : number;
  private idBien : any;
  // ****
  constructor(private service:BienService,
  private route:ActivatedRoute,
  private router: Router ) { }

  ngOnInit() {
this.route.params.subscribe(res=>{
  let idrecherche={
    'id':res.id
  }
this.service.getBien(idrecherche).subscribe(donnees=>{
  this.bien=donnees.data;
});
});

}
}
