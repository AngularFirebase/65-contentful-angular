import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentfulService } from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  lesson$: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentful.logContent('some_id')
    this.lesson$ = this.contentful.getContent('some_id')
  }

}