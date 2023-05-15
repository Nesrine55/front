import { AfterViewInit, Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeuserComponent implements AfterViewInit{
  ngAfterViewInit(): void {


    const images = ['./assets/home/pic1.jpg', './assets/home/pic2.jpeg', './assets/home/pic3.png', './assets/home/pic4.jpg'];
    let i = 0;
    const sliderImg = document.querySelector('.sliderImg') as HTMLImageElement;
    var len = images.length;
    
    function slider() {
      if (i > len - 1) {
        i = 0;
      }
      sliderImg.src = images[i];
      i++;
    }
    
    setInterval(slider, 3000);
     
  
  
          
    }

}
