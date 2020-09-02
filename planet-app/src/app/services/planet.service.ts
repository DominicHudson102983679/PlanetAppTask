import { Injectable } from '@angular/core';
import { Planet } from "../planet";

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  planets: Planet[] = [
    new Planet("Sun", 0, 0),
    new Planet("Mercury", 0, 1),
    new Planet("Venus", 0, 2),
    new Planet("Earth", 0, 3),
    new Planet("Mars", 0, 4),
    new Planet("Jupiter", 0, 5),
    new Planet("Saturn", 0, 6),
    new Planet("Uranus", 0, 7),
    new Planet("Neptune", 0, 8)
  ]

  constructor() { }

  addPlanet(planet: Planet){
    this.planets.push(planet);
    this.planets.sort((a, b) => (a.distanceFromSun < b.distanceFromSun) ? -1:1)
  }
}
