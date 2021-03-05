import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  @Input('isFavorite') isActive : boolean;
  @Output('change') change = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    this.change.emit({ newValue: this.isActive })
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
