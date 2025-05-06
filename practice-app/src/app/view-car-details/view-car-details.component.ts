import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'; // ✅ Import Location

@Component({
  selector: 'app-view-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-car-details.component.html',
  styleUrls: ['./view-car-details.component.css'],
})
export class ViewCarDetailsComponent implements OnInit {
  carCode: string | null = null;
  selectedTab = 'Overview';

  tabs = ['Overview', 'Variant', 'Offers', 'Similar Cars', 'Colors', 'Mileage', 'User Review'];

  getTabId(tab: string): string {
    return tab.replace(/\s+/g, '');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location // ✅ Inject Location
  ) {}

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
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    const tabId = this.getTabId(tab);

    // ✅ Update the URL without reloading the component
    this.location.replaceState(`/view-car-details/${this.carCode}/${tabId}`);

    // ✅ Scroll to the section
    const el = document.getElementById(tabId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  showPlan(carName: string) {
    this.router.navigate(['/get-info', carName]);
  }

  cars = [
    {
      code: 'code-1',
      name: 'Porsche 911',
      year: 2021,
      price: 'Rs. 1.99 - 4.26 Crore',
      description:
        'The price of Porsche 911, a 2-seater Coupe & Convertible, ranges from Rs. 1.99 - 4.26 Crore. It is available in 8 variants, with engine options ranging from 2981 to 3996 cc and a choice of 1 transmission: Automatic. 911 comes with 7 airbags and is available in 15 colours.',
      rating: 4.8,
      image:
        'https://imgd.aeplcdn.com/664x374/n/cw/ec/39232/911-exterior-right-front-three-quarter-154382.jpeg?isig=0&wm=1&q=80',
    },
    {
      code: 'code-2',
      name: 'Porsche Macan',
      year: 2021,
      price: 'Rs. 96.05 Lakh',
      description:
        'The price of Porsche Macan, a 5 seater Full-Size SUV, starts from of Rs. 96.05 Lakh. It is available in 1 variant, with an engine of 1984 cc and a choice of 1 transmission: Automatic. Macan has an NCAP rating of 5 stars and comes with 8 airbags. Porsche Macan is available in 9 colours.',
      rating: 4.8,
      image:
        'https://imgd.aeplcdn.com/664x374/n/cw/ec/99421/macan-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80',
    },
    {
      code: 'code-3',
      name: 'Porsche Cayenn e',
      year: 2021,
      price: 'Rs. 1.42 - 2.00 Crore',
      description:
        'The price of Porsche Cayenne, a 5 seater Full-Size SUV, ranges from Rs. 1.42 - 2.00 Crore. It is available in 2 variants, with engine options ranging from 2995 to 3996 cc and a choice of 1 transmission: Automatic. Cayenne has an NCAP rating of 5 stars and comes with 9 airbags.',
      rating: 4.8,
      image:
        'https://imgd.aeplcdn.com/664x374/n/cw/ec/32951/cayenne-exterior-right-front-three-quarter-2.jpeg?isig=0&wm=1&q=80',
    },
    {
      code: 'code-4',
      name: 'Porsche Taycan',
      year: 2021,
      price: 'Rs. 1.67 - 2.54 Crore',
      description:
        "The Taycan is Porsche's first electric car. It packs a huge battery with enormous power output and can hit 100kmph in just 2.6 seconds. It is both practical and exhilarating to drive.",
      rating: 4.8,
      image:
        'https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80',
    },
    {
      code: 'code-5',
      name: 'Porsche Panamera',
      year: 2021,
      price: 'Rs. 1.70 - 2.34 Crore',
      description:
        'The price of Porsche Panamera, a 4 seater Sedan, ranges from Rs. 1.70 - 2.34 Crore. It is available in 2 variants, with engine options ranging from 2894 to 3996 cc and a choice of 1 transmission: Automatic. Panamera comes with 10 airbags.',
      rating: 4.8,
      image:
        'https://imgd.aeplcdn.com/664x374/n/cw/ec/165641/panamera-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    },
  ];
}
