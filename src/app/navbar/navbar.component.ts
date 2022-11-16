import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usname:any

  constructor(private route: Router) {
    this.usname=JSON.parse(localStorage.getItem("usrname")||'')
   }

  ngOnInit(): void {
  }


  logout() {

    this.route.navigateByUrl("")
  }
}
