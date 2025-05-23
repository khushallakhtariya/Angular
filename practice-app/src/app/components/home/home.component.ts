import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, RouterModule, RouterLink], // Required if you're using standalone components
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("heroVideo") heroVideoRef!: ElementRef<HTMLVideoElement>;
  isVideoPlaying = true;
  showScrollTop = false;

  cars = [
    {
      code: "car-1",
      name: "Porsche 911",
      year: 2021,
      price: "Rs. 1.99 - 4.26 Crore",
      description:
        "The price of Porsche 911, a 2-seater Coupe & Convertible, ranges from Rs. 1.99 - 4.26 Crore. It is available in 8 variants, with engine options ranging from 2981 to 3996 cc and a choice of 1 transmission: Automatic. 911 comes with 7 airbags and is available in 15 colours.",
      rating: 4.8,
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/39232/911-exterior-right-front-three-quarter-154382.jpeg?isig=0&wm=1&q=80",
    },
    {
      code: "car-2",
      name: "Porsche Macan",
      year: 2021,
      price: "Rs. 96.05 Lakh",
      description:
        "The price of Porsche Macan, a 5 seater Full-Size SUV, starts from of Rs. 96.05 Lakh. It is available in 1 variant, with an engine of 1984 cc and a choice of 1 transmission: Automatic. Macan has an NCAP rating of 5 stars and comes with 8 airbags. Porsche Macan is available in 9 colours.",
      rating: 4.8,
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/99421/macan-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    },
    {
      code: "car-3",
      name: "Porsche Cayenne",
      year: 2021,
      price: "Rs. 1.42 - 2.00 Crore",
      description:
        "The price of Porsche Cayenne, a 5 seater Full-Size SUV, ranges from Rs. 1.42 - 2.00 Crore. It is available in 2 variants, with engine options ranging from 2995 to 3996 cc and a choice of 1 transmission: Automatic. Cayenne has an NCAP rating of 5 stars and comes with 9 airbags.",
      rating: 4.8,
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/32951/cayenne-exterior-right-front-three-quarter-2.jpeg?isig=0&wm=1&q=80",
    },
    {
      code: "car-4",
      name: "Porsche Taycan",
      year: 2021,
      price: "Rs. 1.67 - 2.54 Crore",
      description:
        "The Taycan is Porsche's first electric car. It packs a huge battery with enormous power output and can hit 100kmph in just 2.6 seconds. It is both practical and exhilarating to drive.",
      rating: 4.8,
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    {
      code: "car-5",
      name: "Porsche Panamera",
      year: 2021,
      price: "Rs. 1.70 - 2.34 Crore",
      description:
        "The price of Porsche Panamera, a 4 seater Sedan, ranges from Rs. 1.70 - 2.34 Crore. It is available in 2 variants, with engine options ranging from 2894 to 3996 cc and a choice of 1 transmission: Automatic. Panamera comes with 10 airbags.",
      rating: 4.8,
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/165641/panamera-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
  ];

  carName: string = "";

  // Combine the constructors into one
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    const video = this.heroVideoRef.nativeElement;
    video
      .play()
      .then(() => {
        this.isVideoPlaying = true;
      })
      .catch((error) => {
        console.error("Video failed to autoplay:", error);
      });
  }

  toggleVideo(): void {
    const video = this.heroVideoRef?.nativeElement;
    if (video) {
      if (this.isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.isVideoPlaying = !this.isVideoPlaying;
    }
  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     this.carName = params.get("name") || "";
  //   });
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
