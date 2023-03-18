import { Component } from '@angular/core';
import { laptops } from 'src/app/global';
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
  filteredLaptopsData:any[] = [];
  listOfPosition = ['High','low'];
  laptopsData:any[] = laptops;
  totalProducts:number = this.laptopsData.length;
  ngOnInit(){
    this.filteredLaptopsData = this.laptopsData;
  }
  clearFilters(){
    this.sliderValue = 185000;
    this.laptopTypeSelected = 'All';
    this.searchText = '';
    this.filteredLaptopsData = this.laptopsData;
  }
  filterBasedOnSearchText(){
    this.filteredLaptopsData = this.laptopsData.filter((item:any) => {
      console.log(item.brand)
      return item.brand.toLowerCase().includes(this.searchText.toLowerCase());
    })
    this.totalProducts = this.filteredLaptopsData.length;
  }
  filterBasedOnSliderValue(){
    this.filteredLaptopsData = this.laptopsData.filter((item:any) => {
      return item.price <= this.sliderValue;
    })
    this.totalProducts = this.filteredLaptopsData.length;
  }
  filterBasedOnDropdown(){
    this.filteredLaptopsData = this.laptopsData.filter((item:any) => {
      return item.type.toLowerCase() == this.laptopTypeSelected.toLowerCase();
    })
    this.totalProducts = this.filteredLaptopsData.length;
  }
}
