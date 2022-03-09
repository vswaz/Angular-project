import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Biography } from './biography';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class BiographyServiceService {
  private biographysUrl = 'http://localhost:3000/api/biographys';
  constructor(private http:HttpClient) { }
  getSingleBiography(biographyId: string): Promise<void | Biography>{
    return this.http.get(this.biographysUrl + '/' + biographyId)
      .toPromise()
      .then(response => response as Biography)
      .catch(this.handleError);
  }

  getBiographys() : Promise<void | Biography[]>{
    return this.http.get(this.biographysUrl)
      .toPromise()
      .then(response => response as Biography[])
      .catch(this.handleError);
  }

  createBiography(newBiography: Biography): Promise<void | Biography>{
    return this.http.post(this.biographysUrl, newBiography)
      .toPromise()
      .then(response => response as Biography)
      .catch(this.handleError);
  }
  private handleError(error: any){
    console.log("error");
    return error;
  }

  
}