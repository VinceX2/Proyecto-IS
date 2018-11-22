import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  selectedTicket: Ticket;
  private readonly URL_API = 'http://localhost:3000/api/tickets/';
  tickets: Ticket[];

  constructor(private http: HttpClient) {
    this.selectedTicket = new Ticket();
  }
  
   getTickets(): Observable<Ticket[]> {
     return this.http.get<Ticket[]>(this.URL_API);
   }

   postTickets(ticket: Ticket) {
     return this.http.post(this.URL_API, ticket);
   }

  putTicket(ticket: Ticket) {
     return this.http.put(this.URL_API + `/${ticket._id}`, ticket);
   }

   deleteTicket(_id: string) {
     return this.http.delete(this.URL_API + `/${_id}`);
   }
}
