import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(private exclusiveSer: AppServiceService) {}

  ngOnInit(): void {
    this.exclusiveSer.exclusive.subscribe((res) => {
      this.exclusive = res;
    });
  }
}
