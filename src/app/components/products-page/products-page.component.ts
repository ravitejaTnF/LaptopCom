import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  laptopTypes = ['All','Normal','Gaming'];
  laptopTypeSelected = 'All';
  sliderValue = 185000;
  searchText = '';
  totalProducts:number = 0;

  clearFilters(){
    this.sliderValue = 185000;
    this.laptopTypeSelected = 'All';
    this.searchText = '';
  }
}
