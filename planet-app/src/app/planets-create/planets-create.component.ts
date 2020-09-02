import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { Planet } from "../planet";

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
