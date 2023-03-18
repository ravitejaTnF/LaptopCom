import { Component } from '@angular/core';
//import *as laptops from '/LaptopCom/src/app/laptops.json';
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
  laptopsData = [
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._SX522_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G",
      "price": "35490",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "brand":"hp",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9?keywords=HP+14s,+11th+Gen+Intel+Core+i3+8GB+RAM/256GB+SSD+Intel+UHD+Graphics&sr=8-3&linkCode=sl1&tag=maneeshsand07-21&linkId=dc697fa217e47f1330bd8327ae1135c6&language=en_IN&ref_=as_li_ss_tl"
    },
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Lenovo IdeaPad Slim 3 Intel Core i3",
      "price": "33890",
      "brand":"lenovo",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzM0MzE3MzE3OTkzNTM3OjE2Nzg5ODQ1Njc6c3BfYXRmOjIwMTEwMjIxNzkyNzk4OjowOjo&url=%2FLenovo-i3-1115G4-Warranty-Platinum-81X800LCIN%2Fdp%2FB0B9YHX39M%2Fref%3Dsr_1_1_sspa%3Fcrid%3DKSOJMTBM6FXE%26keywords%3Dlaptops%26qid%3D1678984567%26refinements%3Dp_36%253A7252030031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3Dlaptops%252Caps%252C227%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71WuDXpTAlL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "ASUS Vivobook 14, Intel Core i3-1005G1",
      "price": "120000",
      "ram": "8GB Core i3",
      "brand":"asus",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/ASUS-14-0-inch-i3-1005G1-Integrated-X415JA-BV322WS/dp/B0BDRJGRXR/ref=sr_1_3?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-3"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G4",
      "price": "60000",
      "brand":"hp",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9/ref=sr_1_6?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-6"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71ERaaZvc2L._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Acer Aspire 3, AMD Ryzen 5 ",
      "price": "85000",
      "ram": "8GB AMD",
      "brand":"acer",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2MjQxMTg2MTEzNzA0MjM5OjE2Nzg5ODUwNTE6c3BfYXRmOjIwMTIwMzEwOTAzMDk4OjowOjo&url=%2FAcer-Quad-Core-Processor-Windows-A315-24%2Fdp%2FB0BT7ZXWDZ%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1MIVZ182HYX8H%26keywords%3Dlaptops%26qid%3D1678985051%26refinements%3Dp_36%253A7252031031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3D%252Caps%252C218%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._SX522_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G",
      "price": "35490",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "brand":"hp",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9?keywords=HP+14s,+11th+Gen+Intel+Core+i3+8GB+RAM/256GB+SSD+Intel+UHD+Graphics&sr=8-3&linkCode=sl1&tag=maneeshsand07-21&linkId=dc697fa217e47f1330bd8327ae1135c6&language=en_IN&ref_=as_li_ss_tl"
    },
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Lenovo IdeaPad Slim 3 Intel Core i3",
      "price": "33890",
      "brand":"lenovo",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzM0MzE3MzE3OTkzNTM3OjE2Nzg5ODQ1Njc6c3BfYXRmOjIwMTEwMjIxNzkyNzk4OjowOjo&url=%2FLenovo-i3-1115G4-Warranty-Platinum-81X800LCIN%2Fdp%2FB0B9YHX39M%2Fref%3Dsr_1_1_sspa%3Fcrid%3DKSOJMTBM6FXE%26keywords%3Dlaptops%26qid%3D1678984567%26refinements%3Dp_36%253A7252030031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3Dlaptops%252Caps%252C227%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71WuDXpTAlL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "ASUS Vivobook 14, Intel Core i3-1005G1",
      "price": "120000",
      "ram": "8GB Core i3",
      "brand":"asus",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/ASUS-14-0-inch-i3-1005G1-Integrated-X415JA-BV322WS/dp/B0BDRJGRXR/ref=sr_1_3?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-3"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G4",
      "price": "60000",
      "brand":"hp",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9/ref=sr_1_6?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-6"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71ERaaZvc2L._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Acer Aspire 3, AMD Ryzen 5 ",
      "price": "85000",
      "ram": "8GB AMD",
      "brand":"acer",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2MjQxMTg2MTEzNzA0MjM5OjE2Nzg5ODUwNTE6c3BfYXRmOjIwMTIwMzEwOTAzMDk4OjowOjo&url=%2FAcer-Quad-Core-Processor-Windows-A315-24%2Fdp%2FB0BT7ZXWDZ%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1MIVZ182HYX8H%26keywords%3Dlaptops%26qid%3D1678985051%26refinements%3Dp_36%253A7252031031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3D%252Caps%252C218%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._SX522_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G",
      "price": "35490",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "brand":"hp",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9?keywords=HP+14s,+11th+Gen+Intel+Core+i3+8GB+RAM/256GB+SSD+Intel+UHD+Graphics&sr=8-3&linkCode=sl1&tag=maneeshsand07-21&linkId=dc697fa217e47f1330bd8327ae1135c6&language=en_IN&ref_=as_li_ss_tl"
    },
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Lenovo IdeaPad Slim 3 Intel Core i3",
      "price": "33890",
      "brand":"lenovo",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzM0MzE3MzE3OTkzNTM3OjE2Nzg5ODQ1Njc6c3BfYXRmOjIwMTEwMjIxNzkyNzk4OjowOjo&url=%2FLenovo-i3-1115G4-Warranty-Platinum-81X800LCIN%2Fdp%2FB0B9YHX39M%2Fref%3Dsr_1_1_sspa%3Fcrid%3DKSOJMTBM6FXE%26keywords%3Dlaptops%26qid%3D1678984567%26refinements%3Dp_36%253A7252030031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3Dlaptops%252Caps%252C227%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71WuDXpTAlL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "ASUS Vivobook 14, Intel Core i3-1005G1",
      "price": "120000",
      "ram": "8GB Core i3",
      "brand":"asus",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/ASUS-14-0-inch-i3-1005G1-Integrated-X415JA-BV322WS/dp/B0BDRJGRXR/ref=sr_1_3?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-3"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G4",
      "price": "60000",
      "brand":"hp",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9/ref=sr_1_6?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-6"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71ERaaZvc2L._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Acer Aspire 3, AMD Ryzen 5 ",
      "price": "85000",
      "ram": "8GB AMD",
      "brand":"acer",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2MjQxMTg2MTEzNzA0MjM5OjE2Nzg5ODUwNTE6c3BfYXRmOjIwMTIwMzEwOTAzMDk4OjowOjo&url=%2FAcer-Quad-Core-Processor-Windows-A315-24%2Fdp%2FB0BT7ZXWDZ%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1MIVZ182HYX8H%26keywords%3Dlaptops%26qid%3D1678985051%26refinements%3Dp_36%253A7252031031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3D%252Caps%252C218%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._SX522_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G",
      "price": "35490",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "brand":"hp",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9?keywords=HP+14s,+11th+Gen+Intel+Core+i3+8GB+RAM/256GB+SSD+Intel+UHD+Graphics&sr=8-3&linkCode=sl1&tag=maneeshsand07-21&linkId=dc697fa217e47f1330bd8327ae1135c6&language=en_IN&ref_=as_li_ss_tl"
    },
    {
      "type":"gaming",
      "image": "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Lenovo IdeaPad Slim 3 Intel Core i3",
      "price": "33890",
      "brand":"lenovo",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3NzM0MzE3MzE3OTkzNTM3OjE2Nzg5ODQ1Njc6c3BfYXRmOjIwMTEwMjIxNzkyNzk4OjowOjo&url=%2FLenovo-i3-1115G4-Warranty-Platinum-81X800LCIN%2Fdp%2FB0B9YHX39M%2Fref%3Dsr_1_1_sspa%3Fcrid%3DKSOJMTBM6FXE%26keywords%3Dlaptops%26qid%3D1678984567%26refinements%3Dp_36%253A7252030031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3Dlaptops%252Caps%252C227%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71WuDXpTAlL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "ASUS Vivobook 14, Intel Core i3-1005G1",
      "price": "120000",
      "ram": "8GB Core i3",
      "brand":"asus",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/ASUS-14-0-inch-i3-1005G1-Integrated-X415JA-BV322WS/dp/B0BDRJGRXR/ref=sr_1_3?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-3"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/81zoyHn5uJL._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "HP 14s, 11th Gen Intel Core i3-1115G4",
      "price": "60000",
      "brand":"hp",
      "ram": "8GB Core i3",
      "storage": "256GB SSD",
      "size": "14 inches",
      "link": "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU/dp/B0B63Y75P9/ref=sr_1_6?crid=1MIVZ182HYX8H&keywords=laptops&qid=1678984773&refinements=p_36%3A7252030031&rnid=7252027031&s=computers&sprefix=%2Caps%2C218&sr=1-6"
    },
    {
      "type":"normal",
      "image": "https://m.media-amazon.com/images/I/71ERaaZvc2L._AC_UY327_FMwebp_QL65_.jpg",
      "laptopTitle": "Acer Aspire 3, AMD Ryzen 5 ",
      "price": "85000",
      "ram": "8GB AMD",
      "brand":"acer",
      "storage": "512GB SSD",
      "size": "15.6 inches",
      "link": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2MjQxMTg2MTEzNzA0MjM5OjE2Nzg5ODUwNTE6c3BfYXRmOjIwMTIwMzEwOTAzMDk4OjowOjo&url=%2FAcer-Quad-Core-Processor-Windows-A315-24%2Fdp%2FB0BT7ZXWDZ%2Fref%3Dsr_1_1_sspa%3Fcrid%3D1MIVZ182HYX8H%26keywords%3Dlaptops%26qid%3D1678985051%26refinements%3Dp_36%253A7252031031%26rnid%3D7252027031%26s%3Dcomputers%26sprefix%3D%252Caps%252C218%26sr%3D1-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    }
]
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
