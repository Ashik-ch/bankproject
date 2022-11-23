import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  delacc: any

  constructor(private http: HttpClient,private root:Router) { }

  usname = JSON.parse(localStorage.getItem("CurrentName") || '')
  ngOnInit(): void {
    // document.body.className = "dashboard"
  }
  getOptions() {
    var token = JSON.parse(localStorage.getItem('Token') || '')
    let headers = new HttpHeaders()
    console.log('token', token, headers)
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
      "acno": acno,
      "password": password,
      "amount": amount
    }
    console.log("DATA:", data)
    this.http.post("http://localhost:3004/deposit", data, this.getOptions())
      .subscribe((result: any) => {
        console.log("resss", result);


        alert(result.message)
      }, (result: any) => {
        alert(result.error.message)
      }
      )
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
    this.http.post("http://localhost:3004/withdraw", data, this.getOptions())
      .subscribe((result: any) => {
        alert(result.message)
      }, (result: any) => {
        alert(result.error.message)
      }
      )
  }


  //parent -Child communitction  - Deleting Account
  Deleteaccount() {
    this.delacc = JSON.parse(localStorage.getItem('CurrentAccountNumber') || '')
  }
  deleted(acno:any) {
    console.log("DELETE:", acno);
    
    this.http.delete(`http://localhost:3004/delete/${acno}`)
    .subscribe((result:any)=>{
      console.log("result:", result)
      this.root.navigateByUrl('')
  })
}
  cancel() {
    this.delacc = ''
  }
}