import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction: any = []
datenew=new Date()
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var acno = JSON.parse(localStorage.getItem('CurrentAccountNumber') || '')
    this.http.post('http://localhost:3004/transaction', {
      "acno": acno
    })

      .subscribe((result: any) => {
        console.log("RESULT", result)
        this.transaction = result.transaction
        console.log('Transaction', this.transaction);

      })
  }
}
