import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx'
import { Ticket, User } from './tickets';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  excelData:Ticket[] = []
  apiurl = "http://localhost:8080/api/ticket/"
  apiurl2 = "http://localhost:8080/api/user/"
  ticketInfo:any

  constructor(private http:HttpClient) { }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      // this.excelData.map((ticket)=>{
      // this.addTicket(ticket)
  
      // })
      
    };
    reader.readAsBinaryString(file);
  }
  uploadExcelData(){
    this.excelData.map((ticket)=>{
      this.addTicket(ticket)
    })
    window.alert("Data is uploaded successfully")
  }  

  addTicket(data:any){

    this.http.post(this.apiurl + 'addticket',data).subscribe(data=>{
      console.log(data)
    })
  }

  deleteTicket(id:string){
    //here will cause 410 gone issue,but if there's no subscribe, the main page couldn't fresh
    this.http.delete(this.apiurl + 'deleteticket' + '/' + id).subscribe(data=>{})
    
  }

  updateTicket(id:string,data:any){
    this.http.put(this.apiurl + 'updateticket/' + id, data).subscribe(data=>{console.log(data)})
  }

  getTickets(){
    return this.http.get<any[]>(this.apiurl + 'tickets')
  }

 getTicketInfo(id:string){
  
  this.http.get<any[]>(this.apiurl + "tickets").subscribe((data)=>{
    this.ticketInfo = data.find((item)=>item.id === id)
  })

  return this.ticketInfo
 }

 getUsers(){
  return this.http.get<any[]>(this.apiurl2 + 'users')
}

createUser(user:User){
  return this.http.post(this.apiurl2 + 'register',user)
}

}
