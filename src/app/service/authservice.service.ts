import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  username: any

  database: any = {
    1000: { acno: 1000, uname: "ashik-ch", password: 1000, balance: 10000 }
  }

  constructor(private http: HttpClient) { }

  register(acno: any, pswd: any, uname: any) {
    const data = {
      acno,
      pswd,
      uname

    }

    return this.http.post("http://localhost:3004/register", data)
  }

  //   if(acno in database){
  //     return false
  //   }else{
  //     database[acno]={
  //       acno, 
  //       'password':pswd,
  //       uname,
  //       Balance:0
  //     }

  //     console.log("database", this.database)
  //     return true
  //   }
  // }


  login(acno: any, pass: any) {
    var database: any = this.database
    if (acno in database) {
      if (pass == database[acno]['password']) {

        this.username = database[acno]['uname']
        localStorage.setItem('user', JSON.stringify(this.username))
        return true
      } else {
        alert("password incurrect")
        return false
      }

    } else {
      alert("incorrect user")
      return false
    }
  }
}