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
  // database: any = {
  //   1000: { acno: 1001, uname: "Vignesh", password: 2000, Balance: 10000 }
  //    // setting predifined Database

  abc: any = "Welcome to Bank"     //Called in html page  L-7
  acn: any = "Enter Your Acc.No"
  pswrd: any = "Enter Password"

  accountnumber1: any = ""        //ngModal declaring
  pswd1: any = ""

  constructor(private route: Router, private forgoten: Router, private db: AuthserviceService)       ///dependency unjection
  {

  }

  ngOnInit(): void {
  }

  login() {
    var acno: any = this.accountnumber1
    var pswd: any = this.pswd1
    var result: any = this.db.login(acno, pswd)


    // if (acno in this.db) {
    //   if (pswd == this.db[acno]["password"]) {  ///redult <->
    
    if (result) {
      alert("Login Successfully")
      this.route.navigateByUrl("dashboard")
    } else {
      alert("Login Failed")
      this.forgoten.navigateByUrl("forgot")
    }
  }

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