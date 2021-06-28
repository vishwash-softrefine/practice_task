import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'betsite';

  itemvalue = ['one', 'two', 'three'];
  addItem(newItem: string) {
    this.itemvalue.push(newItem);
    console.log(this.itemvalue);
  }
}
