import { Component, OnInit } from '@angular/core';
import { ScriptService } from './services/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private script: ScriptService) { }
    
    ngOnInit(): void {
      this.script.load('wp-polyfill-inert',
        'regenerator-runtime',
        'home',
        'wp-polyfill',
        'jquery',
        'aos',
        'global',
        'owl-carousel',
        'jquery-mobile',
        'main')
        .then(data => {
          console.log('script loaded ', data);
        }).catch(error => console.log(error));
    }
}
