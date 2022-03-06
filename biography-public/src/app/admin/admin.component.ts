import { Component, OnInit } from '@angular/core';
import { Login } from '../biography';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  login: Login = {
   username: '',
   password: ''

  }  
constructor() { }

  ngOnInit(): void {

  }
 onSubmit(): void{
  // console.log(login.username);
 }

}
