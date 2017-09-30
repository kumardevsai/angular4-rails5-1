import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-hero-detail]',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input('hero') hero: any = {};
  @Input('title') title: string;

  edit () {
    this.hero.code = (new Date).toString().substring(15, 24);
    this.title = Math.random().toString(36).substring(3);
    console.log(this);  
  };

  ngOnInit() {}

}
