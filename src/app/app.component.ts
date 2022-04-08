import { Component } from '@angular/core';
import {Country} from './models/country';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedCountry: Country = new Country();

  countryArray: Country[] = [
    {id: 1, name: "Spain", capital:"Madrid", languaje:"Spanish"},
    {id: 2, name: "England", capital:"London", languaje:"English"},
    {id: 3, name: "France", capital:"Paris", languaje:"French"}
  ];

  addOrEdit(){
    if(this.selectedCountry.id === 0){
      this.selectedCountry.id = this.countryArray.length + 1;
      this.countryArray.push(this.selectedCountry);
    }
    this.selectedCountry = new Country();
  }

  openToEdit(country: Country){
    this.selectedCountry = country;
  }

  delete(){
    if(confirm('This will delete the country, Are you sure?')){
      this.countryArray = this.countryArray.filter(x => x != this.selectedCountry);
      this.selectedCountry = new Country();
    }

  }


}
