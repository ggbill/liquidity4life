import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrls: ['./next-steps.component.scss']
})
export class NextStepsComponent implements OnInit {

    private currentActivatedRoute: string;

  constructor(private route: Router) { 
    this.currentActivatedRoute = "/next-steps";
  }

  ngOnInit() {
    
  }

  onClick() {

    this.route.navigateByUrl('/controls');
  }

}
