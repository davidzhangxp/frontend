import { Component, Input } from '@angular/core';
import { tickets_list } from '../tickets';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  

  @Input() report_heads: string[] | undefined;

  // report_heads:string[] = []
  tickets:any[] =tickets_list

  constructor(){}

  addticket(){

  }
  exportexcel(){

  }
  remove_ticket(id:string){
    console.log(id)
  }

}
