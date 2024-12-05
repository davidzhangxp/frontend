import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  tickets:any[] = []
  fileName = "Breakfix_report.xlsx"

  constructor(private ts: TicketService){
    this.ts.getTickets().subscribe((data)=>{this.tickets=data.sort((a,b)=>b.id-a.id)})
  }

  uploadexcel(event:any){
    this.ts.onFileChange(event)
  }
  exportrawdatatoexcel(){
  
    if(this.tickets){
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tickets)
  
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
     /* save to file */  
     XLSX.writeFile(wb, this.fileName);
    
    }
 }

}
