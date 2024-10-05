import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isSignedIn :boolean=false;
  constructor(private router:Router) {

   }

  ngOnInit(): void 
  {
  // If user already loggined or not checkability
     const valid=localStorage.getItem("valid");
     this.isSignedIn=valid==="set";
     
     if(this.isSignedIn)
      {
      this.router.navigate(['food']);
      alert("Already sign in" )
     }
    else{
      this.router.navigate(['signin'])

    }
      }
  
 
  
  submit(i: NgForm){
     let us=i.controls['user'].value;
     let em=i.controls['email'].value;
     let ph=i.controls['phone'].value;
     let pa=i.controls['pass'].value;

       console.log(us," ",em," ",pa," ",ph," "); //Just print in console log 

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//email checking pattern format

  const isPhoneValid = /^\d{10}$/.test(ph);  //phone number 10 digit checking pattern

     
     if(us!=='' && emailPattern.test(em) && isPhoneValid && pa!=='')
      {
        localStorage.setItem("valid","set");
        this.isSignedIn=true;
        alert("login successful")
        this.router.navigate(['food']);

     }
     else{
         this.isSignedIn=false;
         this.router.navigate(['signin'])
         alert("login failed")
     }  
  }
}

