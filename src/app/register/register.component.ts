import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // accno:any
  // name:any
  // pswd:any
  registerForm = this.fb.group({
    accno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    name: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private ds: AuthserviceService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registerfun() {
    var acno = this.registerForm.value.accno
    var uname = this.registerForm.value.name
    var password = this.registerForm.value.pswd

    if (this.registerForm.valid) {
      const result = this.ds.register(acno, password, uname)

      if (result) {
        alert("Register successfull")
        this.router.navigateByUrl('')
      } else {
        alert("Register failed")
      }


    }
    else {
      alert("Not a valid form")
    }
  }

}