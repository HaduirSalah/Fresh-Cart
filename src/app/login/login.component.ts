import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean=false;
  apiError:string='';

constructor(private _AuthService:AuthService,private _Router:Router)
{
 if( localStorage.getItem('UserToken')!==null)
 {
  this._Router.navigate(['/products'])
 }
}

loginForm=new FormGroup({
  
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,])
      //Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
    

  });


  SubmitLoginForm(loginForm:FormGroup)
  {
    this.isLoading=true;
    console.log('apiiiiiiiiiiiiiiii');
    // if(registerForm.valid) //true
    // {
      this._AuthService.Login(loginForm.value).subscribe({
        next:(response)=> {
          if (response.message=='success')
          {
            localStorage.setItem('UserToken',response.token);   //store token in local storage
            this._AuthService.DecodeJWT();      // call method/ fun in auth service to decode token
            this.isLoading=false;
            this._Router.navigate(['/products']);
          }
          // console.log('calllapiiiiiiiiiiiiiiii');
          // console.log(response);
        },

        error:(err)=>
        {
          console.log(err);
          console.log(err.error.errors.msg);
          this.isLoading=false;
          this.apiError=err.error.errors.msg;
        }
      })
    // }
    //console.log(registerForm.value);
  }
}
