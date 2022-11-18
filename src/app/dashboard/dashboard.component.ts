import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const Options = {
  headers: new HttpHeaders
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accnod: any
  pswdd: any
  amountd: any

  accnow: any
  pswdw: any
  amountw: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // document.body.className = "dashboard"
  }
  getOptions() {
    var token=JSON.parse(localStorage.getItem(token)||'')
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append("x-access-token", token)
      Options.headers = headers

    }
    return Options

  }
  deposit() {
    var acno = this.accnod
    var password = this.pswdd
    var amount = this.amountd

    const data = {
      acno,
      password,
      amount
    }
    this.http.post("http://localhost:3004/deposit",data,this.getOptions())
      .subscribe((result: any) => {
        console.log("resss", result);
        
        
        alert(result.message)
      }, (result: any) => {
        alert(result.error.message)
      }
      )

    // if(acc in db){
    //   if(psw == db[acc]["password"]){
    //     db[acc]["Balance"] = Number(db[acc]["Balance"])+Number(amt)
    //     db[acc]['Transaction']={
    //       "Mode":"Online",
    //       "Type":"Deposit",
    //       "Amount":amt
    //     }
    //     console.log("DATABASE:",db)
    //     alert(`Amount ${amt} added successfully,Current account balance is ${db[acc]["Balance"]}`)
    //   }else{
    //     alert("check password")
    //   }
    // }else{
    //   alert("No such accounts")
  }


  withdraw() {
    // var db = this.ds.database
    var acno = this.accnow
    var password = this.pswdw
    var amount = this.amountw

    const data = {
      acno,
      password,
      amount
    }
    this.http.post("http://localhost:3004/withdraw",data,this.getOptions())
      .subscribe((result: any) => {
        alert(result.message)
      }, (result: any) => {
        alert(result.error.message)
      }
      )


    // if (acc in db) {
    //   if (psw == db[acc]["password"]) {
    //     if (Number(amt) < Number(db[acc]["Balance"])) {
    //       db[acc]["Balance"] = Number(db[acc]["Balance"]) - Number(amt)
    //       db[acc]['Transaction'] = {
    //         "Mode": "Online",
    //         "Type": "Withdraw",
    //         "Amount": amt
    //       }
    //       console.log("DATABASE:", db)
    //       alert(`Amount ${amt} withdrawed successfully,Current account balance is ${db[acc]["Balance"]}`)
    //     } else {
    //       alert("Insufficient balance")
    //     }

    //   } else {
    //     alert("check password")
    //   }
    // } else {
    //   alert("No such accounts")



  }
}