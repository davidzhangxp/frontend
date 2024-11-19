import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../tickets';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!:FormGroup

  constructor(private fb:FormBuilder){
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
      console.log(user)
    }else{
      window.alert('your confirm password is not match your password, please check your password')
    }
  }

}
