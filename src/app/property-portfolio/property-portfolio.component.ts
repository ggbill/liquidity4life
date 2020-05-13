import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

const PORTFOLIO_DATA: any[] = [
    { propertyId: "PROP-001", name: 'David Reid', city: 'London', propertyValue: '£375,000', portfolioValue: '£292,500', occupancyStartDate: '01/08/2018', occupancyEndDate: '31/07/2038', projectedTerm: '19yr 11m', ragStatus: '#00F210' },
    { propertyId: "PROP-002", name: 'Jack Brown', city: 'Liverpool', propertyValue: '£433,000', portfolioValue: '£400,525', occupancyStartDate: '10/03/2017', occupancyEndDate: '05/03/2037', projectedTerm: '18yr 5m', ragStatus: '#00F210' },
    { propertyId: "PROP-003", name: 'Jane Whyte', city: 'Nottingham', propertyValue: '£387,000', portfolioValue: '£357,975', occupancyStartDate: '16/04/2017', occupancyEndDate: '11/04/2037', projectedTerm: '18yr 6m', ragStatus: '#00F210' },
    { propertyId: "PROP-004", name: 'David Reid', city: 'Newcastle', propertyValue: '£500,000', portfolioValue: '£462,500', occupancyStartDate: '01/07/2017', occupancyEndDate: '26/06/2037', projectedTerm: '18yr 9m', ragStatus: '#00F210' },
    { propertyId: "PROP-005", name: 'Robert Blue', city: 'London', propertyValue: '£964,000', portfolioValue: '£891,700', occupancyStartDate: '28/09/2017', occupancyEndDate: '23/09/2037', projectedTerm: '19yr 1m', ragStatus: '#00F210' },
    { propertyId: "PROP-006", name: 'Lisa Cyan', city: 'London', propertyValue: '£251,000', portfolioValue: '£230,325', occupancyStartDate: '27/12/2017', occupancyEndDate: '22/12/2037', projectedTerm: '19yr 3m', ragStatus: '#00F210' },
    { propertyId: "PROP-007", name: 'James Greene', city: 'Liverpool', propertyValue: '£398,000', portfolioValue: '£368,150', occupancyStartDate: '27/03/2018', occupancyEndDate: '22/03/2038', projectedTerm: '19yr 5m', ragStatus: '#00F210' },
    { propertyId: "PROP-008", name: 'Tom Beige', city: 'Exeter', propertyValue: '£362,000', portfolioValue: '£334,850', occupancyStartDate: '25/06/2018', occupancyEndDate: '20/06/2018', projectedTerm: '19yr 8m', ragStatus: '#00F210' }
];

@Component({
    selector: 'app-property-portfolio',
    templateUrl: './property-portfolio.component.html',
    styleUrls: ['./property-portfolio.component.scss']
})
export class PropertyPortfolioComponent implements OnInit {

    innerWidth: any;

    constructor() { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        // console.log('innerWidth: ' + innerWidth);
    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }

    columnDefinitions = [
        { def: 'propertyId', showMobile: true },
        { def: 'name', showMobile: false },
        { def: 'city', showMobile: false },
        { def: 'propertyValue', showMobile: true },
        { def: 'portfolioValue', showMobile: true },
        { def: 'occupancyStartDate', showMobile: false },
        { def: 'occupancyEndDate', showMobile: false },
        { def: 'projectedTerm', showMobile: false },
        { def: 'ragStatus', showMobile: true },
    ];


    getDisplayedColumns(): string[] {
        const isMobile = this.innerWidth < 700;
        return this.columnDefinitions
            .filter(cd => !isMobile || cd.showMobile)
            .map(cd => cd.def);
    }




    dataSource = PORTFOLIO_DATA;


}
