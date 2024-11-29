import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Ticket,tickets_list } from '../tickets';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  ticketInfo:any

  constructor(private route:ActivatedRoute, private ts:TicketService){}

  ngOnInit():void{
    const params = this.route.snapshot.paramMap

    const ticketId = String(params.get('ticketid'))
    this.ts.getTickets().subscribe(data => {
      this.ticketInfo = data.find( item => item.id === ticketId)
    })
    
    console.log(ticketId,this.ticketInfo)
  }

}
