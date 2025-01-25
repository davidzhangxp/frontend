import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';



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
    
    
  }

  deleteTicket(){
    if(this.ticketInfo){
      //pass ticket database id to backend and delete this ticket from db
      this.ts.deleteTicket(this.ticketInfo._id)
    }
    
    //after delete this ticket, jump back to main page
    this.router.navigate(['/'])
  }

  editTicket(){
    this.router.navigate(['/edit/' + this.ticketId])
  }
  //navigate to a new tab
  openNewTab() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/edit/' + this.ticketId])
    );
  
    window.open(url, '_blank');
  }
}

