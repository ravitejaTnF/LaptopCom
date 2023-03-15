import { Component } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  imagesArrayForCarousel = [
    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1610433572201-110753c6cff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  ];
  popularProductsImagesArray = [
    { image: 'https://m.media-amazon.com/images/I/61p86J+4TOL._SX679_.jpg', laptopTitle: 'ASUS Vivobook 15 Dual Core Ryzen', price: '33990', ram: '8 GB AMD Ryzen', storage: '512 GB SSD', size: '15.6 inches', link: 'https://www.amazon.in/ASUS-Vivobook-Integrated-Graphics-X512DA-BQ302WS/dp/B0B5B5NCYC?keywords=ASUS%2BVivobook%2B15,%2B15.6%22,%2BAMD%2BDual%2BCore%2BRyzen%2B3%2B3200U%2BLaptop%2B(8GB/256GB%2BSSD/Integrated%2BGraphics&sr=8-1&th=1&linkCode=sl1&tag=maneeshsand07-21&linkId=7e5d3934d247af69b558711da8237554&language=en_IN&ref_=as_li_ss_tl' },
    { image: 'https://m.media-amazon.com/images/I/716bvqzz7PL._SX522_.jpg', laptopTitle: 'Acer Extensa Intel Core i3', price: '29990', ram: '4 GB Intel Core i3', storage: '256 GB SSD', size: '15.6 inches', link: 'https://www.amazon.in/Acer-Lightweight-Processor-Display-EX215-54/dp/B09STHP9PX?keywords=Acer%2BExtensa%2BIntel%2BCore%2Bi3%2B11th%2BGen%2BIntel%2BCore%2Bi3%2B15.6%2Binches%2B4GB%2BRAM%2B256%2BGB%2BSSD&sr=8-3&th=1&linkCode=sl1&tag=maneeshsand07-21&linkId=63e2f2d099778defd553d18766e53aae&language=en_IN&ref_=as_li_ss_tl' },
    { image: 'https://m.media-amazon.com/images/I/41uXxOM7XmL._SY300_SX300_.jpg', laptopTitle: 'ASUS VivoBook 14 - (8GB/1TB HDD)', price: '42400', ram: '8 GB Intel Core i5', storage: '512 GB SSD', size: '14 inches', link: 'https://www.amazon.in/ASUS-14-0-inch-i5-1035G1-Integrated-X415JA-EK522WS/dp/B0B8ZTF7QD?keywords=ASUS+VivoBook+14&s=computers&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=sl1&tag=maneeshsand07-21&linkId=00dbf24feb67fb46303ec0264a6e9c28&language=en_IN&ref_=as_li_ss_tl' }
  ];
}
