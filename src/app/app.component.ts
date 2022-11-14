import { Component } from '@angular/core';
import { popular_routes } from './models/popular_routes.model';
import { PopularRouteService } from './services/popular-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnglularEmployeeUI';
  popularoutes : popular_routes[] = [];

  constructor(private PopularRouteService: PopularRouteService) {}

  ngOnInIt() : void {
    this.popularoutes = this.PopularRouteService.getAllPopularRoutes();
  }
}
