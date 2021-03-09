import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-key-metrics',
    templateUrl: './key-metrics.component.html',
    styleUrls: ['./key-metrics.component.scss']
})
export class KeyMetricsComponent implements OnInit {

    keyMetricsData: any = {
        propertyValue: "£375,000",
        startDate: "01/08/2018",
        portfolioValue: "£292,000",
        projectedTerm: "19yr 11m",
        riskProfile: "2",
        projectedEndDate: "31/07/2038",
        lifestyleOptions: "Yes",
        costReviewTerm: "5 years",
        utilityOptions: "No",
        costReviewDate: "31/07/2023",
        propertyCosts: "£10,174",
        occupancy12MonthAdvisery: "31/07/2037",
        occupancy: "Sole",
        localAuthorityNoticePeriod: "31/01/2038",
        clientAge: "72 years, 4 months",
        clientDob: "28/10/1948",
    };

    constructor() { }

    ngOnInit() {
    }

}
