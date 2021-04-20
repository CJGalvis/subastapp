import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public length: number = 0;
  public pageSize: number = 5;
  public pageSizeOptions: Array<number> = [5, 10, 25, 100];
  private currentOrder: number;

  public foods: any[] = [
    { value: 0, viewValue: 'Nombre' },
    { value: 1, viewValue: 'Categoría' },
    { value: 2, viewValue: 'Usuario' }
  ];

  public elementsList: Array<any> = [
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Shiba Inu',
      user: 'Dog Breed',
      category: 1,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Camiseta nacional',
      user: 'Luis Blanquicett',
      category: 2,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Balon de baloncesto',
      user: 'Maria Perez',
      category: 3,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Camiseta de futbol',
      user: 'Luis Blanquicett',
      category: 2,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Camiseta de baloncesto',
      user: 'Andres Perez',
      category: 2,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Bicicleta MTB',
      user: 'Hector Antonio',
      category: 3,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'Agua de matarraton',
      user: 'Hector Antonio',
      category: 3,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
    {
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'tennis buenos',
      user: 'luis blanquicett',
      category: 2,
      photos: [
        'https://material.angular.io/assets/img/examples/shiba2.jpg'
      ],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz',
    },
  ]

  public elementsListView: Array<any>

  constructor(
    private globalService: GlobalService
  ) {
    this.length = this.elementsList.length;
  }

  ngOnInit(): void {
    this.getChangesFilterName();
  }

  paginationElements(event?: { previousPageIndex: number, pageIndex: number, pageSize: number, length: number }) {
    this.elementsListView = [];
    this.pageSize = event?.pageSize || this.pageSize;
    for (let index = 0; index < this.pageSize; index++) {
      this.elementsListView.push(this.elementsList[index]);
    }
    this.orderBy(this.currentOrder);
  }

  getChangesFilterName() {
    this.globalService.filterElementNames.subscribe(
      (value: string) => {
        this.elementsListView = this.elementsList.filter(item => item.title.toLowerCase().match(value.toLowerCase()));
        this.orderBy(this.currentOrder);
      }
    )
  }

  orderBy(value: number) {
    this.currentOrder = value;
    switch (value) {
      case 0:
        this.orderByName();
        break;

      case 1:
        this.orderByCategory();
        break;

      case 2:
        this.orderByUser();
        break;

      default:
        break;
    }
  }

  orderByName() {
    this.elementsListView.sort((a: any, b: any) => a.title.localeCompare(b.title));
  }

  orderByCategory() {
    this.elementsListView.sort((a: any, b: any) => a.category - b.category);
  }

  orderByUser() {
    this.elementsListView.sort((a: any, b: any) => a.user.localeCompare(b.user));
  }
}
