import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { Planet } from "../planet";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
