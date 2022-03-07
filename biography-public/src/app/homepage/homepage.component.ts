import { Component, OnInit } from '@angular/core';
import { Biography } from '../biography';
import { BiographyServiceService } from '../biography-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [BiographyServiceService]

})
export class HomepageComponent implements OnInit {
  biographys: Biography[];
  
  constructor(private biographyService: BiographyServiceService) { }

  ngOnInit(): void {
    this.biographyService
      .getBiographys()
      .then((biographys: Biography[]) => {
        console.log(biographys);
        this.biographys = biographys.map(biography => {
          return biography;
      });
    });
  }

}
