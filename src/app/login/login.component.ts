import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

//////////authservice

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // setting predifined Database

  abc: any = "Welcome to Bank"     //Called in html page  L-7
  acn: any = "Enter Your Acc.No"
  pswrd: any = "Enter Password"

  accountnumber1: any = ""        //ngModal declaring
  pswd1: any = ""

  constructor(private route: Router, private forgoten: Router, private ds: AuthserviceService)       ///dependency unjection
  { }

  ngOnInit(): void {
  }

  login() {
    var acno: any = this.accountnumber1
    var pswd: any = this.pswd1

    this.ds.login(acno, pswd)
      .subscribe((result:any) => {
        alert(result.message)
        localStorage.setItem("CurrentAccountNumber", JSON.stringify(result.currentaccountnum))
        localStorage.setItem("CurrentName", JSON.stringify(result.currentname))
        localStorage.setItem("Token", JSON.stringify(result.token))
        this.route.navigateByUrl("dashboard")
      }, (result) => {
        alert(result.error.message)
        // this.forgoten.navigateByUrl("forgot")
      })

    // acnochange(event: any) {
    //   console.log(event)

    //   this.accountnumber = event.target.value
    //   console.log("INPUT:", this.accountnumber)
    // }

    // pswrdchange(event: any) {
    //   console.log(event)

    //   this.pswd1 = event.target.value
    //   console.log("Password:", this.pswd1)
    // }

  }
}
