import { Component, OnInit, HostListener } from '@angular/core';

const PORTFOLIO_PERFORMANCE_DATA: any[] = [
    { label: "Portfolio Investment Performance", yr2018: "3.00%", yr2019: "3.00%", yr2020: "3.00%", yr2021: "3.00%", style: "normal" },
    { label: "A1 Units", yr2018: "£117,000", yr2019: "£115,946", yr2020: "£114,600", yr2021: "£112,989", style: "normal" },
    { label: "F36 Units", yr2018: "£175,000", yr2019: "£171,461", yr2020: "£166,963", yr2021: "£161,980", style: "normal" },
    { label: "Amount Invested in Portfolio", yr2018: "£292,500", yr2019: "£287,406", yr2020: "£281,564", yr2021: "£274,968", style: "bold" },
    { label: "", yr2018: "", yr2019: "", yr2020: "", yr2021: "", style: "normal" },
    { label: "Income and Gains", yr2018: "", yr2019: "", yr2020: "", yr2021: "", style: "bold" },
    { label: "Portfolio Income", yr2018: "£1,338", yr2019: "£1,307", yr2020: "£1,273", yr2021: "£1,235", style: "normal" },
    { label: "A Unit Gains", yr2018: "£6,377", yr2019: "£6,307", yr2020: "£6,268", yr2021: "£6,216", style: "normal" },
    { label: "F Unit Gains", yr2018: "£12,190", yr2019: "£11,987", yr2020: "£11,799", yr2021: "£11,581", style: "normal" },
    { label: "Total Investment Return", yr2018: "£117,000", yr2019: "£115,946", yr2020: "£114,600", yr2021: "£112,989", style: "bold" },
    { label: "", yr2018: "", yr2019: "", yr2020: "", yr2021: "", style: "normal" },
    { label: "Expenditure", yr2018: "", yr2019: "", yr2020: "", yr2021: "", style: "bold" },
    { label: "Lifestyle Costs", yr2018: "-£3,600", yr2019: "-£3,690", yr2020: "-£3,782", yr2021: "-£3,877", style: "normal" },
    { label: "Property Costs", yr2018: "-£10,174", yr2019: "-£10,686", yr2020: "-£11,223", yr2021: "-£11,786", style: "normal" },
    { label: "Administration Fees", yr2018: "-£3,510", yr2019: "-£3,454", yr2020: "-£3,389", yr2021: "-£3,315", style: "normal" },
    { label: "Total Cost", yr2018: "-£17,284", yr2019: "-£17,829", yr2020: "-£18,394", yr2021: "-£18,978", style: "bold" },
    { label: "Plan Gains/Losses", yr2018: "-£5,094", yr2019: "-£5,843", yr2020: "-£6,595", yr2021: "-£3,396", style: "bold" },
    { label: "", yr2018: "", yr2019: "", yr2020: "", yr2021: "", style: "normal" },
    { label: "A Units Sold", yr2018: "-£5,676", yr2019: "-£5,913", yr2020: "-£6,161", yr2021: "-£6,419", style: "bold" },
    { label: "F Units Sold", yr2018: "-£8,514", yr2019: "-£8,870", yr2020: "-£9,241", yr2021: "-£9,629", style: "bold" }
];

@Component({
    selector: 'app-portfolio-performance',
    templateUrl: './portfolio-performance.component.html',
    styleUrls: ['./portfolio-performance.component.scss']
})
export class PortfolioPerformanceComponent implements OnInit {

    innerWidth: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        // console.log('innerWidth: ' + innerWidth);
    }

    constructor() { }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }

    columnDefinitions = [
        { def: 'label', showMobile: true },
        { def: 'yr2018', showMobile: false },
        { def: 'yr2019', showMobile: true },
        { def: 'yr2020', showMobile: true },
        { def: 'yr2021', showMobile: true },
    ];

    getDisplayedColumns(): string[] {
        const isMobile = this.innerWidth < 700;
        return this.columnDefinitions
            .filter(cd => !isMobile || cd.showMobile)
            .map(cd => cd.def);
    }

    dataSource = PORTFOLIO_PERFORMANCE_DATA;

}
