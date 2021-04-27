import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { data } from 'src/app/common/data';
import { SingletonFilter } from 'src/app/models/SingletonFilter';

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
  public elementsList: Array<any> = data;
  public elementsListView: Array<any>

  constructor(
    private globalService: GlobalService
  ) {
    this.length = this.elementsList.length;
  }

  ngOnInit(): void {
    this.getFiltersGlobals();
  }

  paginationElements(event?: { previousPageIndex: number, pageIndex: number, pageSize: number, length: number }) {
    this.elementsListView = [];
    this.pageSize = event?.pageSize || this.pageSize;
    for (let index = 0; index < this.pageSize; index++) {
      this.elementsListView.push(this.elementsList[index]);
    }
    this.orderBy(this.currentOrder);
  }

  getFiltersGlobals() {
    this.globalService.singletonFilter.subscribe(
      (filters: SingletonFilter) => {
        if (filters?.price > 0) {
          this.elementsListView = this.elementsList.filter(item => item.maxOffer.offer <= filters.price);
        }

        if (filters?.name?.length > 0) {
          this.elementsListView = this.elementsList.filter(item => item.title.toLowerCase().match(filters.name.toLowerCase()));
        }

        if (filters?.orderBy > 0) {
          this.orderBy(filters.orderBy);
        }

        if (!filters) {
          this.elementsListView = this.elementsList;
        }
      }
    )
  }

  orderBy(value: number) {
    this.globalService.singletonFilter.next({
      ...this.globalService.singletonFilter.value,
      orderBy: value
    })
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
