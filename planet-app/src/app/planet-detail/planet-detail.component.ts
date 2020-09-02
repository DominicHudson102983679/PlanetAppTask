import { Component, OnInit, Input} from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { Planet } from "../planet";


@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @Input()
  planet: Planet;

  
  constructor(public PlanetService: PlanetService) { }

  ngOnInit(): void {
  }

}
