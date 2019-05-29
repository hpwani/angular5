import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent {
  title = 'Angular5';
  title1: string;
  constructor(private service:MyserviceService){

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.title1 = this.service.display();
  }
}
