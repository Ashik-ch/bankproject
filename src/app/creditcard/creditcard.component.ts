import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  firstname: any;
  secondname: any;
  accno: any;
  age: any;
  adhaar: any;
  mobno: any;
  creditDatabase: any = {}
  dummyDatabase: any = []

  constructor() { }

  ngOnInit(): void {
  }
  apply() {

    this.creditDatabase[this.accno] = {
      "fname": this.firstname,
      "sname": this.secondname,
      "age": this.age,
      "mobno": this.mobno,
      "adhaar": this.adhaar
    }
    alert("Applied Successfully")

    this.dummyDatabase.push({
      "fname": this.firstname,
      "sname": this.secondname,
      "age": this.age,
      "mobno": this.mobno,
      "adhaar": this.adhaar

    })
  }
}




