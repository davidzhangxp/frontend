import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrl: './edit-ticket.component.css'
})
export class EditTicketComponent {
  ticketInfo:any
  ticketId:string = ''
  status:string = ''
  repair_date:string = ''


  constructor(private route:ActivatedRoute, private ts:TicketService, private router:Router, private fb:FormBuilder){
    const params = this.route.snapshot.paramMap

    this.ticketId = String(params.get('ticketid'))
    //get ticket information
    this.ts.getTickets().subscribe(data => {
      this.ticketInfo = data.find( item => item.id == this.ticketId)
      if(this.ticketInfo){
        this.status = this.ticketInfo['status']
        this.repair_date = this.ticketInfo['repair_date']
        
      }
    })
    

  }



  editTicket(){
    //change the ticket status
    this.ticketInfo['status'] = this.status
    //update the data from backend
    this.ts.updateTicket(this.ticketId, this.ticketInfo)

    //navigate to home page
    this.router.navigate(['/'])
  }


  
  // convertObjectToFormGroup(obj: any): FormGroup {
  //   const formGroup: FormGroup = new FormGroup({});
  
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       formGroup.addControl(key, new FormControl(obj[key]));
  //     }
  //   }
  
  //   return formGroup;
  // }
}
