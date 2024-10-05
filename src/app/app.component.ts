import { Component } from '@angular/core';
import {FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
constructor(private router:Router) {    
  }
  ngOnInit(): void { 
  }

  signOut()
  {
        localStorage.removeItem("valid");
        this.router.navigate (['signin']);
        alert('Sign-out successfull');

  }
 
  }
