import { Component, OnInit, HostListener } from '@angular/core';

const LEGAL_TITLE_DATA: any[] = [
    { name: "L4L Property Trust Company Ltd", location: "United Kingdom", date: "12/06/2009" }
];

const CHARGES_DATA: any[] = [
    { id: "", name: "", location: "", date: "" }
];

const WORKS_DATA: any[] = [
    { id: "001", name: "G. W. Contractors Ltd", type: "External Painting", date: "12/06/2008" },
    { id: "002", name: "Plumbers 'R' Us Ltd", type: "Boiler Replacement", date: "01/05/2017" },
    { id: "003", name: "G. W. Contractors Ltd", type: "External Painting", date: "24/09/2018" }
];

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

    innerWidth: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        // console.log('innerWidth: ' + innerWidth);
    }

    propertyData: any = {
        propertyId: "001",
        fullName: "David Reid",
        addressLine1: "Flat 21b, Tall Block",
        addressLine2: "Long Road",
        homeNumber: "0207 123456",
        mobileNumber: "07712 456789",
        city: 'London',
        emailAddress: 'david@reid.com',
        postCode: "SW14 0JJ"

    };

    constructor() { }

    ngOnInit(){
        this.innerWidth = window.innerWidth;
    }

    legalTitleDisplayedColumns: string[] = ['name', 'location', 'date'];
    legalTitleDataSource = LEGAL_TITLE_DATA;

    chargesDisplayedColumns: string[] = ['id', 'name', 'location', 'date'];
    chargesDataSource = CHARGES_DATA;


    worksColumnDefinitions = [
        { def: 'id', showMobile: true },
        { def: 'name', showMobile: false },
        { def: 'type', showMobile: true },
        { def: 'date', showMobile: true },
    ];

    getWorksDisplayedColumns(): string[] {
        const isMobile = this.innerWidth < 700;
        return this.worksColumnDefinitions
            .filter(cd => !isMobile || cd.showMobile)
            .map(cd => cd.def);
    }


    worksDataSource = WORKS_DATA;


}
