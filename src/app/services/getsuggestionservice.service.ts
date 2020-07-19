import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {searchUrl} from 'src/urls';
import { map } from 'rxjs/operators';
import {Instructor} from '../models/Instructor';

@Injectable({
  providedIn: 'root'
})
export class GetsuggestionserviceService {

  finalUrl: string;
  constructor(private http : HttpClient) { }

   getSuggestion(search :string) : Observable<Instructor[]>{
    this.finalUrl = searchUrl + search + "*";
    console.log(this.finalUrl);
    return this.http.get(this.finalUrl).pipe(
      map(resp => resp as Array<any>)
    )
   
  

  }


 
}
