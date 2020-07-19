import { Component, OnInit } from '@angular/core';
import $ from "jquery";

import {GetsuggestionserviceService} from '../../services/getsuggestionservice.service';
import { Instructor } from 'src/app/models/Instructor';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  instructors : Instructor[];

  constructor(private getSuggestionService : GetsuggestionserviceService) { }

  ngOnInit() {
    $(document).on('click', function (event) {
      if (!$(event.target).closest('#list_id').length ) {
        $('#get_suggestion').hide();
      }
      else{
        $('#get_suggestion').show();
      }
      
    });
  }


  getSuggestions($event) {
    let search = (<HTMLInputElement>document.getElementById('input_id')).value;
    
    if (search.length > 2) {
    this.getSuggestionService.getSuggestion(search).subscribe(data =>
      {
       
       this.instructors = data;
      });
    }

}
}
