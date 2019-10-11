import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  loginForm: FormGroup;
  
  constructor(private router: Router,private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit()
  {
    if(this.loginForm.controls.email.value ==='prasath' && this.loginForm.controls.password.value ==='Astra@123')
    {
        this.router.navigateByUrl('app-tab2')
      //  alert( "success login form!");
    }
    else {
      alert( "You have not requested a login form!");
  }
  }
  }
  

