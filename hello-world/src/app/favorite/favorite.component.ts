import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  isActive : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isActive = !this.isActive;
  }
}
