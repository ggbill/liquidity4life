import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
    private currentActivatedRoute: string;

  constructor(private route: Router) {
    this.currentActivatedRoute = "/features";
   }

  ngOnInit() {
  }

  onClick() {

    this.route.navigateByUrl('/controls');
  }

}
