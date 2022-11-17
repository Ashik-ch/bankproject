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
 
  registerForm = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]]
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
      this.ds.register(acno, password, uname)
        .subscribe((result) => {
          console.log("user-",acno,password,uname);
          
          console.log("result:", result);
          if (result) {
            alert("Register successfull")
            this.router.navigateByUrl('')
          } else {
            alert("Register failed")
          }
        }, (result) => {
          console.log("test:", result.error.msg)
          alert(result.error.msg)
        })
    }
  }
}