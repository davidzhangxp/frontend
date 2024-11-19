import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  constructor(private ts: TicketService){}

  uploadexcel(event:any){
    this.ts.onFileChange(event)
  }

}
