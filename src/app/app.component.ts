import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  countries = [
    {
      name: "United Kingdom",
      cities: ["London", "Warwick", "Birmingham"],
    },
    {
      name: "United States",
      cities: ["New York", "Chicago", "Washington"],
    },
    {
      name: "Australia",
      cities: ["Sydney", "Adelaide", "Melbourne"],
    },
    {
      name: "Pakistan",
      cities: ["Lahore", "Karachi", "Islamabad"],
    },
  ];
  cities:any;
  countryControl!: FormControl;
  cityControl!: FormControl;

  constructor(private router: Router){}
  ngOnInit():void{
      this.cityControl = new FormControl("");
      this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });

    this.countryControl = new FormControl(this.cities);

    this.cities = this.countryControl.valueChanges.pipe(
      map((country) => country.cities)
    );
  }
  
  
}
