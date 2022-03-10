import { Component, OnInit } from '@angular/core';
import { Biography } from '../biography';
import { BiographyServiceService } from '../biography-service.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [BiographyServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private biographyService: BiographyServiceService, private route: ActivatedRoute) { }
  newBiography: Biography = {
    
    _id:'',
    firstname: '',
    lastname: '',
    country: '',
    language: '',
    age:'',
    height: '',
    marital: '',
    message: ''

  }
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.biographyService.getSingleBiography(params['biographyid']);
    }))
      .subscribe((newBiography: Biography) => {
        console.log('Selected Biography', newBiography);
        this.newBiography = newBiography;
          
      }
      );
  }
  }


