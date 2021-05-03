import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/Profile';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileCurrent: Profile = {
    img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    name: 'Shiba Inu',
    from: 'Cartagena',
    username: 'DogBreed',
    qualification: 3,
    participations: [
      {
        namePost: 'Camiseta Nacional',
        value: 50000
      },
      {
        namePost: 'Bicicleta MTB',
        value: 120000
      }
    ],
    posts: [
      {
        name: 'Camiseta Nacional',
        time: new Date(),
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      },
      {
        name: 'Bicileta MTB',
        time: new Date(),
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      }
    ],
    saved: [
      {
        name: 'Camiseta futbol',
        time: new Date(),
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      },
      {
        name: 'Balon de baloncesto',
        time: new Date(),
        avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
      }
    ]
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
