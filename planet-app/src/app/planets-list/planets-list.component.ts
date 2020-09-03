import { PlanetsService } from '../planets.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  
  constructor(public planetService: PlanetsService) { 
    this.planetService = planetService;
  }

  @Input()
  property: string;

  ngOnInit(): void {
  }
}
