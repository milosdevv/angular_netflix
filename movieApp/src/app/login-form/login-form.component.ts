import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  username = ''
  password = ''

  constructor(private router:Router){}
  onLoginFormSubmitted(form:NgForm){
    if (this.username == 'micun' && this.password == 'Boopro2021') {
      console.log('Form Submitted:', form.value);
      this.router.navigate(['/Dashboard'])
    }
    else{
      alert('Wrong username or password')
    }
  }
}
