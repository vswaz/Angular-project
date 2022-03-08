import { Component, OnInit } from '@angular/core';
import { BiographyServiceService } from '../biography-service.service';
import { Biography } from '../biography';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public newBiography: Biography = {
    _id:'',
    firstname: '',
    lastname: '',
    country: '',
    language: '',
    age: '',
    height: '',
    marital: '',
    message: ''
  }
  constructor(private biographyService: BiographyServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  public createNewBiography(newBiography: Biography): void{
    this.biographyService.createBiography(newBiography);
    this.router.navigate(['/'])

}
}