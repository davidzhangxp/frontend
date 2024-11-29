import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tickets_list } from '../tickets';

@Component({
  selector: 'app-import-ticket',
  templateUrl: './import-ticket.component.html',
  styleUrl: './import-ticket.component.css'
})
export class ImportTicketComponent {
  importPoints:String[] = []
  importForm!: FormGroup;
  group = {
    status: new FormControl(''),
    id: new FormControl(''),
    content: new FormControl(''),
    tech: new FormControl(''),
    date: new FormControl('')

  }

  constructor(private fb:FormBuilder){
    this.importPoints = Object.keys(tickets_list[1])
    console.log(this.importPoints)
    

    this.importForm = this.fb.group(this.group)
    
  }


  onSubmit(){
    

    console.log(this.importForm)
  }


}
