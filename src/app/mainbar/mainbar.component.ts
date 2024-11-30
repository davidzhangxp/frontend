import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { title_list } from '../tickets';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrl: './mainbar.component.css'
})
export class MainbarComponent {

  myForm: FormGroup;
  options = title_list;
  checkedoptions:any[]=[]
  tickets:any[] = title_list
  ticketlist:any[]
  status = ['Open','Pending Close','Confirm Closed','Out Of Stock']

  filterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private ts:TicketService) {
    //get ticket list from ticketservice from backend

    this.ts.getTickets().subscribe((data)=>{this.tickets=data})
    this.ticketlist = this.tickets

    //push all options which is checked to a new array
    this.options.filter((option)=>option.checked == true).map((item)=>{this.checkedoptions.push(item.value)})
    
    this.myForm = this.formBuilder.group({
      selectedOptions: this.formBuilder.array(this.checkedoptions)
    });

    this.filterForm = this.formBuilder.group(
      {
      status: new FormControl(''),
      id: new FormControl(''),
      content: new FormControl(''),
      tech: new FormControl(''),
      date: new FormControl('')
    })

  }

  onCheckboxChange(event: any, value: string) {
    const selectedOptions = this.myForm.get('selectedOptions') as FormArray;

    if (event.target.checked) {
      selectedOptions.push(new FormControl(value));
    } else {
      const index = selectedOptions.controls.findIndex(x => x.value === value);
      selectedOptions.removeAt(index);
    }
  }
  onSubmit(){
    console.log(this.myForm.value.selectedOptions,this.myForm.get('selectedOptions'))
  }
  ticketFilter(){
    this.tickets = this.ticketlist
    if(this.filterForm.valid){
    if(this.filterForm.value['status']){
      console.log(this.filterForm.value['status'])
      this.tickets = this.ticketlist.filter((item)=>item.status === this.filterForm.value['status'])

    }
    if(this.filterForm.value['id'] ){
      this.tickets = this.ticketlist.filter((item)=>item.ticket_number == this.filterForm.value['id'])
      
    }
    if(this.filterForm.value['content'] ){
      this.tickets = this.ticketlist.filter((item)=>item.server_sn === this.filterForm.value['content'])
      }
    if(this.filterForm.value['tech'] !== '' && this.filterForm.value['tech'] !== null){this.tickets = this.ticketlist.filter((item)=>item.tech.toLowerCase().includes(this.filterForm.value['tech'].toLowerCase()))}
    if(this.filterForm.value['status'] == '' && this.filterForm.value['id'] == '' && this.filterForm.value['content'] == '' && this.filterForm.value['tech'] == ''){
      this.tickets = this.ticketlist
      
    }
    this.filterForm.reset()
  }
}
}


