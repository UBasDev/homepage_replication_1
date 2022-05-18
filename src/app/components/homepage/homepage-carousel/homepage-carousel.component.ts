import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
  styleUrls: ['./homepage-carousel.component.css'],
  providers: [CarouselService],
})
export class HomepageCarouselComponent implements OnInit, AfterViewInit {
  constructor(private carouselService: CarouselService) {}
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.carouselService.get_carousel_header().subscribe((response: any) => {
      this.carousel_header = response[0]['name'];
    });
    this.carouselService.get_carousel_data().subscribe((response:any)=>{
      this.carousel_data = response;
    });
    this.setintervals.push(setInterval(()=>{
      document.getElementById('carousel_right_arrow_container')?.click();
    },3000));
    document.getElementById('carousel_container')?.addEventListener('mouseenter',()=>{
      if(this.setintervals.length>0){
        for(let i=0;i<this.setintervals.length;i++){
          clearInterval(this.setintervals[i])
          this.setintervals.shift()
        }
      }
    })
    document.getElementById('carousel_container')?.addEventListener('mouseleave',()=>{
      if(this.setintervals.length==0){
        this.setintervals.push(setInterval(()=>{
          document.getElementById('carousel_right_arrow_container')?.click();
        },3000));
      }
    })
  }
  carousel_header: string = '';
  carousel_data:any[]=[];
  current_image_order: number = 0;
  carousel_image_elements:any[]=[];
  setintervals:any[]=[];
  show_carousel_arrows(event: any) {
    const left_arrow = document.getElementById('carousel_left_arrow_container');
    left_arrow?.classList.remove('hidden');
    const right_arrow = document.getElementById(
      'carousel_right_arrow_container'
    );
    right_arrow?.classList.remove('hidden');
  }
  remove_carousel_arrows(event: any) {
    const left_arrow = document.getElementById('carousel_left_arrow_container');
    left_arrow?.classList.add('hidden');
    const right_arrow = document.getElementById(
      'carousel_right_arrow_container'
    );
    right_arrow?.classList.add('hidden');
  }

  skip_carousel_image(direction: string) {
    let carousel_image_count = document.getElementsByClassName('carousel_images').length;
    document.getElementsByClassName('carousel_bottom_containers')[this.current_image_order].classList.add('hidden')
    document.getElementsByClassName('carousel_images')[this.current_image_order].classList.add('hidden');
    if (direction == 'next') {
      this.current_image_order += 1;
      if (this.current_image_order > carousel_image_count-1) {
        this.current_image_order = 0;
      }
      document.getElementsByClassName('carousel_bottom_containers')[this.current_image_order].classList.remove('hidden');
      document.getElementsByClassName('carousel_images')[this.current_image_order].classList.remove('hidden');
    }
    else if(direction=='previous'){
      this.current_image_order-=1;
      if(this.current_image_order<0){
        this.current_image_order = carousel_image_count-1;
      }
      document.getElementsByClassName('carousel_bottom_containers')[this.current_image_order].classList.remove('hidden');
      document.getElementsByClassName('carousel_images')[this.current_image_order].classList.remove('hidden');
    }
  }
}
