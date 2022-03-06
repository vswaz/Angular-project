import { Component, OnInit } from '@angular/core';
import { BiographyServiceService } from '../biography-service.service';
import { Biography } from '../biography';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public newBiography: Biography = {
    firstname: '',
    lastname: '',
    country: '',
    language: '',
    age: '',
    height: '',
    marital: '',
    message: ''
  }
  constructor(private biographyService: BiographyServiceService) { }

  ngOnInit(): void {
  }
  public createNewBiography(newBiography: Biography): void{
    this.biographyService.createBiography(newBiography);

}
}