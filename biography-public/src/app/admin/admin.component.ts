import { Component, OnInit } from '@angular/core';
import { Login } from '../biography';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public login: Login = {
   username: '',
   password: ''

  }  
constructor(private router: Router) { }

  ngOnInit(): void {

  }
public adminCheck(login: Login): void {
  
  if(login.username == "admin" && login.password == "admin"){
    this.router.navigate(['/create'])
     console.log("is password check working");
   }
 }

}
