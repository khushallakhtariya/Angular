import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-view-car-details',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './view-car-details.component.html',
  styleUrls: ['./view-car-details.component.css'],
})
export class ViewCarDetailsComponent implements OnInit {
  carCode: string | null = null;
  selectedTab = 'Overview';
  showScrollTop = false;

  tabs = [ 'Variant', 'Offers', 'Similar Cars', 'Colors', 'Mileage', 'User Review'];

  getTabId(tab: string): string {
    return tab.replace(/\s+/g, '');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.carCode = this.route.snapshot.paramMap.get('code');

    const tabFromUrl = this.route.snapshot.paramMap.get('tabId');
    if (tabFromUrl) {
      const matchedTab = this.tabs.find(tab => this.getTabId(tab) === tabFromUrl);
      if (matchedTab) {
        this.selectedTab = matchedTab;

        // Scroll to the section on load
        setTimeout(() => {
          const el = document.getElementById(tabFromUrl);
          if (el) {
            const yOffset = -80; // Adjust based on your header height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    const tabId = this.getTabId(tab);

    this.location.replaceState(`/view/${this.carCode}/${tabId}`);

    // Scroll to the section
    const el = document.getElementById(tabId);
    if (el) {
      const yOffset = -80; // Adjust based on your header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

 
showPlan(code: string) {
  this.router.navigate(['/view', code, 'info']);
}

  cars = [
    {
      code: 'car-1',
      name: 'Porsche 911',
      year: 2021,
      price: 'Rs. 1.99 - 4.26 Crore',
      engine: '2981 - 3996 cc',
      fuel: 'Petrol',
      transmission: 'Automatic',
      mileage: '9.0 - 11.1 kmpl',
      description:
        'The price of Porsche 911, a 2-seater Coupe & Convertible, ranges from Rs. 1.99 - 4.26 Crore. It is available in 8 variants, with engine options ranging from 2981 to 3996 cc and a choice of 1 transmission: Automatic. 911 comes with 7 airbags and is available in 15 colours.',
      rating: 4.8,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/39232/911-exterior-right-front-three-quarter-154382.jpeg?isig=0&wm=1&q=80',
    },
    {
      code: 'car-2',
      name: 'Porsche Macan',
      year: 2021,
      price: 'Rs. 96.05 Lakh',
      engine: '1984 cc',
      fuel: 'Petrol',
      transmission: 'Automatic',
      mileage: '11.24 kmpl',
      description:
        'The price of Porsche Macan, a 5 seater Full-Size SUV, starts from of Rs. 96.05 Lakh. It is available in 1 variant, with an engine of 1984 cc and a choice of 1 transmission: Automatic. Macan has an NCAP rating of 5 stars and comes with 8 airbags. Porsche Macan is available in 9 colours.',
      rating: 4.8,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/99421/macan-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80',
    },
    {
      code: 'car-3',
      name: 'Porsche Cayenne',
      year: 2021,
      price: 'Rs. 1.42 - 2.00 Crore',
      engine: '2995 - 3996 cc',
      fuel: 'Petrol',
      transmission: 'Automatic',
      mileage: '9.8 - 11.23 kmpl',
      description:
        'The price of Porsche Cayenne, a 5 seater Full-Size SUV, ranges from Rs. 1.42 - 2.00 Crore. It is available in 2 variants, with engine options ranging from 2995 to 3996 cc and a choice of 1 transmission: Automatic. Cayenne has an NCAP rating of 5 stars and comes with 9 airbags.',
      rating: 4.8,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/32951/cayenne-exterior-right-front-three-quarter-2.jpeg?isig=0&wm=1&q=80',
    },
    {
      code: 'car-4',
      name: 'Porsche Taycan',
      year: 2021,
      price: 'Rs. 1.67 - 2.54 Crore',
      engine: 'Fully Electric',
      fuel: 'Electric',
      transmission: 'Automatic',
      mileage: '312 - 484 km (range)',
      description:
        "The Taycan is Porsche's first electric car. It packs a huge battery with enormous power output and can hit 100kmph in just 2.6 seconds. It is both practical and exhilarating to drive.",
      rating: 4.8,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80',
    },
    {
      code: 'car-5',
      name: 'Porsche Panamera',
      year: 2021,
      price: 'Rs. 1.70 - 2.34 Crore',
      engine: '2894 - 3996 cc',
      fuel: 'Petrol',
      transmission: 'Automatic',
      mileage: '10.75 - 11.9 kmpl',
      description:
        'The price of Porsche Panamera, a 4 seater Sedan, ranges from Rs. 1.70 - 2.34 Crore. It is available in 2 variants, with engine options ranging from 2894 to 3996 cc and a choice of 1 transmission: Automatic. Panamera comes with 10 airbags.',
      rating: 4.8,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/165641/panamera-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    },
  ];
  




  variant = [
    {
      "name": "Kylaq Classic",
      "engine": "999 cc",
      "fuel": "Petrol",
      "transmission": "Manual",
      "mileage": "19.68 kmpl",
      "power": "114 bhp",
      "price": "Rs. 8.25 Lakh"
    },
    {
      "name": "Kylaq Sport",
      "engine": "1199 cc",
      "fuel": "Petrol",
      "transmission": "Manual",
      "mileage": "18.2 kmpl",
      "power": "120 bhp",
      "price": "Rs. 9.10 Lakh"
    },
    {
      "name": "Kylaq Turbo",
      "engine": "1498 cc",
      "fuel": "Petrol",
      "transmission": "Automatic",
      "mileage": "17.5 kmpl",
      "power": "150 bhp",
      "price": "Rs. 10.50 Lakh"
    },
    {
      "name": "Kylaq Diesel",
      "engine": "1493 cc",
      "fuel": "Diesel",
      "transmission": "Manual",
      "mileage": "21.1 kmpl",
      "power": "115 bhp",
      "price": "Rs. 9.80 Lakh"
    },
    {
      "name": "Kylaq Urban",
      "engine": "998 cc",
      "fuel": "Petrol",
      "transmission": "Manual",
      "mileage": "20.0 kmpl",
      "power": "110 bhp",
      "price": "Rs. 8.60 Lakh"
    },
    {
      "name": "Kylaq Max",
      "engine": "1598 cc",
      "fuel": "Petrol",
      "transmission": "Automatic",
      "mileage": "16.3 kmpl",
      "power": "140 bhp",
      "price": "Rs. 11.75 Lakh"
    },
    {
      "name": "Kylaq Eco",
      "engine": "999 cc",
      "fuel": "CNG",
      "transmission": "Manual",
      "mileage": "25.0 km/kg",
      "power": "90 bhp",
      "price": "Rs. 7.95 Lakh"
    },
    {
      "name": "Kylaq Hybrid",
      "engine": "1498 cc",
      "fuel": "Hybrid",
      "transmission": "Automatic",
      "mileage": "23.0 kmpl",
      "power": "122 bhp",
      "price": "Rs. 12.30 Lakh"
    },
    {
      "name": "Kylaq Prime",
      "engine": "1197 cc",
      "fuel": "Petrol",
      "transmission": "Manual",
      "mileage": "19.0 kmpl",
      "power": "113 bhp",
      "price": "Rs. 9.40 Lakh"
    }
  ];
   similarCars = [
    {
      name: 'Porsche Taycan',
      make: 'Porsche',
      model: 'Taycan',
      price: 85000,
      year: 2023,
      img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80',
    },
    {
      name: 'Porsche Panamera',
      make: 'Porsche',
      model: 'Panamera',
      price: 92000,
      year: 2023,
      img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/165641/panamera-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    },
    {
      name: 'Porsche Macan',
      make: 'Porsche',
      model: 'Macan',
      price: 62000,
      year: 2022,
      img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/99421/macan-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80',
    },
    {
      name: 'Porsche Cayenne',
      make: 'Porsche',
      model: 'Cayenne',
      price: 70000,
      year: 2023,
      img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/32951/cayenne-exterior-right-front-three-quarter-2.jpeg?isig=0&wm=1&q=80',
    },
    {
      name: 'Porsche 911 Carrera',
      make: 'Porsche',
      model: '911 Carrera',
      price: 102000,
      year: 2024,
      img: 'https://imgd.aeplcdn.com/664x374/cw/ec/39232/Porsche-992-911-Right-Front-Three-Quarter-154380.jpg?wm=0&q=80 ',
    },
  ];
  getStarsArray(rating: number): number[] {
    return [1, 2, 3, 4, 5];
  }
  
  reviews = [
    {     
      name: 'John Doe',
      review: 'The Porsche 911 is an absolute masterpiece. The performance is exhilarating, and the design is stunning. I love every moment behind the wheel!',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      review: 'I recently purchased the Porsche Macan, and it has exceeded my expectations. The handling is precise, and the interior is luxurious. Highly recommend!',
      rating: 4,
    },
    {
      name: 'Michael Johnson',
      review: 'The Porsche Cayenne is a perfect blend of performance and practicality. It handles like a sports car while providing ample space for my family.',
      rating: 4.5,
    },
    {
      name: 'Emily Davis',
      review: 'I had the chance to drive the Porsche Taycan, and it blew me away. The acceleration is mind-boggling, and the technology is top-notch. A true electric sports car!',
      rating: 5,
    }
  ];
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}