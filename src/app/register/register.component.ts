
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading:boolean=false;
  apiError:string='';
  // registerForm=new FormGroup({
  //   first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[a-z]{3,10}$')]), //null or ''
  //   last_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  //   age:new FormControl(null,[Validators.required,Validators.min(17),Validators.max(60)]),
  //   email:new FormControl(null,[Validators.required,Validators.email]),
  //   password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),

  // });
constructor(private _AuthService:AuthService,private _Router:Router){
  if( localStorage.getItem('UserToken')!==null)
 {
  this._Router.navigate(['/products'])
 }
}

  registerForm=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[a-z]{3,10}$')]), //null or ''
    phone:new FormControl(null,[Validators.required,Validators.min(11)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),

  });


  SubmitRegisterForm(registerForm:FormGroup)
  {
    this.isLoading=true;
    console.log('apiiiiiiiiiiiiiiii');
    // if(registerForm.valid) //true
    // {
      this._AuthService.Register(registerForm.value).subscribe({
        next:(response:any)=> {
          if (response.message=='success')
          {
            this.isLoading=false;
            this._Router.navigate(['/login']);
          }
          // console.log('calllapiiiiiiiiiiiiiiii');
          // console.log(response);
        },

        error:(err:any)=>
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
