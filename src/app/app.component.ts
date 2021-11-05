import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  isCheckIn: boolean;
  checkInDate?: number;
}

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  passengers: Passenger[];

  constructor() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Le Viet Trung',
        isCheckIn: true,
        checkInDate: Date.now() 
      },
      {
        id: 2,
        fullname: 'Le Hoang Long',
        isCheckIn: true,
        checkInDate: Date.now() 
      },
      {
        id: 3,
        fullname: 'Nguyen Ba Dat',
        isCheckIn: false,
      },
      {
        id: 4,
        fullname: 'Thai Gia Huy',
        isCheckIn: false
      },
      {
        id: 5,
        fullname: 'Nguyen Anh Tuong',
        isCheckIn: false
      }
      
    ]
  }

}