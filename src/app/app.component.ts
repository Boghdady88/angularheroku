import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularheroku';

  imageObject: Array<object> = [{
    image: 'assets/images/scan0002 (2).jpg',
    thumbImage: 'assets/images/scan0002 (2).jpg',
    alt: 'alt of image',
    title: 'ASP.Net MVC'
  },
  {
    image: 'assets/images/scan0006.jpg',
    thumbImage: 'assets/images/scan0006.jpg', // Support base64 
    title: 'HTML5,JS,CSS3', //Optional: You can use this key if want to show image with title
    alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/scan0011.jpg',
  thumbImage: 'assets/images/scan0011.jpg', 
  title: 'Azure', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/js.jpg',
  thumbImage: 'assets/images/js.jpg', 
  title: 'JavaScript', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/scan0002.jpg',
  thumbImage: 'assets/images/scan0002.jpg', 
  title: 'nen', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/Algorithm.png',
  thumbImage: 'assets/images/Algorithm.png', 
  title: 'Algorithm', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/AngularJS.jpg',
  thumbImage: 'assets/images/AngularJS.jpg',
  title: 'AngularJS', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/DB.jpg',
  thumbImage: 'assets/images/DB.jpg', 
  title: 'MySql', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/DB2.jpg',
  thumbImage: 'assets/images/DB2.jpg', 
  title: 'SQL', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/images/Hack.jpg',
  thumbImage: 'assets/images/Hack.jpg', 
  title: 'Hack', //Optional: You can use this key if want to show image with title
  alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}
  ];
}
