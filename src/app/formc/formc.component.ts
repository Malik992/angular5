import { Component, OnInit } from '@angular/core';
import { BienService } from "../service/bien.service";
import { Bien } from "../interface/bien";
import { Client } from "../interface/client";
import { Reservation } from '../interface/reservation';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImmobilierComponent } from '../immobilier/immobilier.component';
@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  styleUrls: ['./formc.component.css']
})
export class FormcComponent implements OnInit {
  public infos: any;
  public bien: Bien;
  public Newclient: Client;
  public reservation:reservation;
  // ***
    public accepter=false;

    public newclient: Client
    private idclient : number;
    private idBien : any;
  constructor(private service:BienService,
  private route:ActivatedRoute,
  private router: Router,
  private form: ImmobilierComponent) { }

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

  public onSubmit(form, type) {
    switch (type) {
      case 'form2':
        this.infos = {
          'emailclient': form.emailclient,
          'password': form.password
        }
        this.service.getConnexionClient(this.infos).subscribe(donnees => {
          this.client = donnees.type;
          this.reservation = {
            'id': null,
            'datereservation': null,
            'etat': 0,
            'client': this.client[0].id,
            'bien': this.bien.id
          };
          this.service.getAddReserver(this.reservation).subscribe( donnees => {
            console.log(donnees);
            if(donnees.code === 1) {
              this.accepter = true;
            }
          });
        });
      break;
    }

  }

}
