import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../services/controls.service'
import { InitialInvestmentDataService } from '../services/initial-investment.service';
import { IInitialInvestment } from '../interfaces/iinitial-investment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

    private controlsData: any;
    private initialInvestmentData: IInitialInvestment;
    private currentActivatedRoute: string;

    constructor(private controlsDataService: ControlsService, private initialInvestmentDataService: InitialInvestmentDataService, private route: Router) {
        this.currentActivatedRoute = "/controls";
    }

    ngOnInit() {

        this.controlsData = this.controlsDataService.getControlsData();
        this.initialInvestmentDataService.cast.subscribe(initialInvestmentData => this.initialInvestmentData = initialInvestmentData)

    }

    onClick() {

        this.route.navigateByUrl('/controls');
    }

}
