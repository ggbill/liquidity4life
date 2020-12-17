import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { InitialInvestmentDataService } from '../services/initial-investment.service'
import { IInitialInvestment } from '../interfaces/iinitial-investment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

const ELEMENT_DATA: any[] = [
    { id: "DOC-001", name: 'Property_Purchase.pdf', version: 'v2', date: '12/06/2018' },
    { id: 'DOC-002', name: 'Funds_Investment.docx', version: 'v1', date: '01/02/2018' },
    { id: 'DOC-003', name: 'Property_Terms.docx', version: 'v4', date: '28/04/2018' },
    { id: 'DOC-004', name: 'Lifestyle_Agreement.pdf', version: 'v1', date: '15/08/2018' }

];

@Component({
    selector: 'app-initial-investment',
    templateUrl: './initial-investment.component.html',
    styleUrls: ['./initial-investment.component.scss']
})
export class InitialInvestmentComponent implements OnInit {
    currentActivatedRoute: any;

    initialInvestmentData: IInitialInvestment;

    constructor(private initialInvestmentDataService: InitialInvestmentDataService, public dialog: MatDialog, private route: Router) {
        this.currentActivatedRoute = "/initial-investment";
    }

    ngOnInit() {

        // this.initialInvestmentData = this.initialInvestmentDataService.getInitialInvestmentData();
        this.initialInvestmentDataService.cast.subscribe(initialInvestmentData => this.initialInvestmentData = initialInvestmentData)

    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DocumentStoreDialogComponent, {
            width: '1000px',
        });


    }

    onClick() {

        this.route.navigateByUrl('/features');
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
    selector: 'document-store-dialog',
    templateUrl: './document-store-dialog.component.html',
    styleUrls: ['./document-store-dialog.component.scss']
})


export class DocumentStoreDialogComponent implements OnInit {

    innerWidth: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        // console.log('innerWidth: ' + innerWidth);
    }


    constructor(
        public dialogRef: MatDialogRef<DocumentStoreDialogComponent>,
    ) { }

    ngOnInit(){
        this.innerWidth = window.innerWidth;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    columnDefinitions = [
        { def: 'id', showMobile: true },
        { def: 'name', showMobile: true },
        { def: 'version', showMobile: false },
        { def: 'date', showMobile: false },
    ];

    getDisplayedColumns(): string[] {
        const isMobile = this.innerWidth < 700;
        return this.columnDefinitions
            .filter(cd => !isMobile || cd.showMobile)
            .map(cd => cd.def);
    }

    dataSource = ELEMENT_DATA;
}
