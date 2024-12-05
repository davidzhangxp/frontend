import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Ticket,tickets_list } from '../tickets';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  ticketInfo:any
  ticketId:string = ''

  constructor(private route:ActivatedRoute, private ts:TicketService, private router:Router){}

  ngOnInit():void{
    const params = this.route.snapshot.paramMap

    this.ticketId = String(params.get('ticketid'))
    this.ts.getTickets().subscribe(data => {
      this.ticketInfo = data.find( item => item.id === this.ticketId)
    })
    
    console.log(this.ticketId,this.ticketInfo)
  }

  deleteTicket(){
    if(this.ticketInfo){
      console.log(this.ticketInfo._id)
      this.ts.deleteTicket(this.ticketInfo._id)
    }
    
    
    this.router.navigate(['/'])
  }

}
