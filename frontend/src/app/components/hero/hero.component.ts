import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  heroes: any = [
    {code:1, name: "Captain America", location: "Berlin", level: 3, price: 4.99},
    {code:2, name: "Iron Man", location: "Ha Noi", level: 2, price: 10},
    {code:3, name: "Thor", location: "Australia", level: 2, price: 47.99},
    {code:4, name: "Black Widow", location: "Laos", level: 1, price: 1.99},
    {code:1, name: "Hulk", location: "Costarica", level: 5, price: 24.99}
  ]
  title: string = "Hero List";

  ngOnInit() {
  }

}
