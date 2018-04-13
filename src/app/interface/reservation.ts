import { Bien } from "../interface/bien";
import { Client } from "../interface/client";
export interface Reservation {
'id'=number,
'datereservation'=date,
'etat'=boolean,
'client'=Client,
'bien'=Bien
}
