import { Component, Input } from '@angular/core';
import { tickets_list } from '../tickets';
import { TicketService } from '../ticket.service';
import * as XLSX from 'xlsx'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  

  @Input() report_heads: string[] | undefined;
  @Input() tickets:any[] | undefined

  fileName = "Breakfix_report.xlsx"
  p: number = 1;
  itemsNumber:number = 20
  
 
  // report_heads:string[] = []
  // tickets:any =tickets_list

  constructor(private ts: TicketService, private router: Router){

  }


  addticket(){
    this.router.navigate(['/import'])
    
  }
  exporttabletoexcel(){
         /* pass here the table id */
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        
      
         /* generate workbook and add the worksheet */
         const wb: XLSX.WorkBook = XLSX.utils.book_new();
         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        
         /* save to file */  
         XLSX.writeFile(wb, this.fileName);
        

  }

  remove_ticket(id:string){
    console.log(id)
  }

}
