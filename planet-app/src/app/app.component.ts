import { Component } from '@angular/core';
import { Planet } from './planet';
import { PlanetsService } from './planets.service';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planet-app';
}
