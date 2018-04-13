import { Component, OnInit, Input } from '@angular/core';
import { BienService } from "../service/bien.service";
import { Bien } from "../interface/bien";
import { Client } from "../interface/client";
import { Reservation } from '../interface/reservation';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImmobilierComponent } from '../immobilier/immobilier.component';

@Component({
  selector: 'app-formi',
  templateUrl: './formi.component.html',
  styleUrls: ['./formi.component.css']
})
export class FormiComponent implements OnInit {
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
  private form: ImmobilierComponent ) { }

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
    case 'form1':
      this.newclient = {
        'id': null,
        'numeropiece': form.numeropiece,
        'nomclient': form.nomclient,
        'telclient': form.telclient,
        'adresseclient': form.adresseclient,
        'emailclient': form.emailclient,
        'password': form.password,
      }
      console.log(this.newclient);
        this.service.getAdd(this.newclient).subscribe(donnees => {
        this.client = donnees.type;
        console.log(donnees);
        console.log(this.client);
        this.reservation = {
          'id': null,
          'datereservation': null,
          'etat': 0,
          'client': this.client.id,
          'bien': this.bien.id
        }
        console.log(this.reservation);
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
