import { Component } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

constructor(private service:WeatherServiceService){}

public weather:any;
public countries:Array<any> =[];

ngOnInit(){
  this.service.getWeather().subscribe((data:any)=>{
    //console.log(data.current.temp_c);  
    console.log(data);
    this.weather = data;
    
  })
  console.log(this.service.getWeather());
}

UpdateCountry(obbj:any){
  this.service.getWeatherofloc(obbj.location.country).subscribe((data:any)=>{
    this.weather=data;
  })


}

}
