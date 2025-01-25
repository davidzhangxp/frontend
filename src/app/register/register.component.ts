import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../tickets';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!:FormGroup
  userlist:string[] = []

  constructor(private fb:FormBuilder, private ts:TicketService, private router:Router){
    this.registerForm = this.fb.group(
      {name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
        confirmpassword: new FormControl('')
      }
    )
  }

  onSubmit(){
    
    if(this.registerForm.valid&& this.registerForm.value['password'] === this.registerForm.value['confirmpassword']){
      const user: User = {
        name:this.registerForm.value['name'],
        email:this.registerForm.value['email'],
        password:this.registerForm.value['password']
      }
      
      //check if the email is exist
      this.ts.getUsers().subscribe(items=>{
        
        if(items){items.map(item=>{
          this.userlist.push(item.email)})
        if(user.email){
          if(this.userlist.includes(user.email)){
              window.alert("Email already exist,please login with this email")
            }else{
            //save the new user to backend
            this.ts.createUser(user).subscribe(data=>{console.log(data)})

            //navigate to login page
            this.router.navigate(['/login'])
            }
          }
         
 

    }else{
          //save the new user to backend
          this.ts.createUser(user).subscribe(data=>{console.log(data)})

          //navigate to login page
          this.router.navigate(['/login'])
        }
      })


    }else{
      window.alert('your confirm password is not match your password, please check your password')
    }
  }

}
