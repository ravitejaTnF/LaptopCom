import { Component } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  array = [
    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1610433572201-110753c6cff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  ];
  popularProductsImagesArray = [
    {image:'https://m.media-amazon.com/images/I/61p86J+4TOL._SX679_.jpg',laptopTitle:'ASUS Vivobook 15',price:'33990',ram:'8 GB AMD Ryzen',storage:'512 GB SSD',size:'15.6 inches'},
    {image:'https://m.media-amazon.com/images/I/716bvqzz7PL._SX522_.jpg',laptopTitle:'Acer Extensa Intel Core i3',price:'29990',ram:'4 GB Intel Core i3',storage:'256 GB SSD',size:'15.6 inches'},
    {image:'https://m.media-amazon.com/images/I/41uXxOM7XmL._SY300_SX300_.jpg',laptopTitle:'ASUS VivoBook 14 - (8GB/1TB HDD)',price:'42400',ram:'8 GB Intel Core i5',storage:'512 GB SSD',size:'14 inches'}
  ];
}
