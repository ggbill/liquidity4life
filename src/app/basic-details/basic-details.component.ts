import { Component, OnInit } from '@angular/core';
import { InitialInvestmentDataService } from '../services/initial-investment.service';
import { IInitialInvestment } from '../interfaces/iinitial-investment';
import { FormControl, Validators } from '@angular/forms'
import {Router} from '@angular/router';

@Component({
    selector: 'app-basic-details',
    templateUrl: './basic-details.component.html',
    styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {

    private initialInvestmentData: IInitialInvestment;
    private currentActivatedRoute: string;


    constructor(private initialInvestmentDataService: InitialInvestmentDataService, private route: Router) {

        // this.route.events.pipe(
        //     filter(event => event instanceof NavigationEnd)
        // ).subscribe(() => {
        //     this.currentActivatedRoute = this.router.url.toLowerCase();
        // });
        
        this.currentActivatedRoute = "/basic-details";

     }

    input = new FormControl('', [Validators.required]);

    getErrorMessage() {
        return this.input.hasError('required') ? 'This field is required' :
            '';
    }

    ngOnInit() {
        this.initialInvestmentDataService.cast.subscribe(initialInvestmentData => this.initialInvestmentData = initialInvestmentData)
    }

    updateInitialInvestmentData() {
        this.initialInvestmentDataService.updateInitialInvestmentData(this.initialInvestmentData)
    }

    onClick() {
        this.route.navigateByUrl('/initial-investment');
      }

      

}


