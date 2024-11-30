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
  group = { }
 

  constructor(private fb:FormBuilder){
    this.importPoints = Object.keys(tickets_list[1])
    console.log(this.importPoints)
    
   this.importPoints.forEach(opt=>{
    const obj: any = {}
    obj[opt as keyof typeof obj] = new FormControl('')
    this.group = {...obj,...this.group}
   })
    this.importForm = this.fb.group(this.group)
  

    
  }

  



  onSubmit(){
    

    console.log(this.importForm)
  }


}
