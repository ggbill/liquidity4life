import { Component, OnInit, HostListener} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { IllustrationConfigService } from '../services/illustration-config.service';

const UTILITIES_DATA: any[] = [
    { utility: "Gas", perMonth: '£70', perAnnum: '£840' },
    { utility: "Electric", perMonth: '£56', perAnnum: '£672' },
    { utility: "Water", perMonth: '£18', perAnnum: '£210' },
    { utility: "Council Tax", perMonth: '£109', perAnnum: '£1,313' },
    { utility: "Contents Insurance", perMonth: '£29', perAnnum: '£350' },
    { utility: "Broadband", perMonth: '£18', perAnnum: '£210' },
    { utility: "Telephone", perMonth: '£11', perAnnum: '£126' },
    { utility: "Television", perMonth: '£16', perAnnum: '£189' },
    { utility: "Other Costs", perMonth: '£9', perAnnum: '£105' },
];

const LIFESTYLE_DATA: any[] = [
    { lifestyle: "Family Assistance / Gifts to Others", perMonth: '£0', perAnnum: '£0' },
    { lifestyle: "Income Withdrawal", perMonth: '£300', perAnnum: '£3,600' },
    { lifestyle: "Holiday", perMonth: '£0', perAnnum: '£0' },
    { lifestyle: "Car Leasings", perMonth: '£0', perAnnum: '£0' },
    { lifestyle: "Gym", perMonth: '£0', perAnnum: '£0' },
    { lifestyle: "Food Delivery", perMonth: '£0', perAnnum: '£0' },
    { lifestyle: "Healthcare", perMonth: '£0', perAnnum: '£0' },
    { lifestyle: "Dental", perMonth: '£0', perAnnum: '£0' },
    { lifestyle: "Home Help / Assisted Services", perMonth: '£0', perAnnum: '£0' },
];

@Component({
    selector: 'app-illustration',
    templateUrl: './illustration.component.html',
    styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {
    private currentActivatedRoute: string;
    illustrationConfigData;

    constructor(public dialog: MatDialog, private route: Router, private illustrationConfigService: IllustrationConfigService) {
        this.currentActivatedRoute = "/illustration";
    }

    ngOnInit() {
        this.illustrationConfigService.cast.subscribe(illustrationConfigData => this.illustrationConfigData = illustrationConfigData);
    }

    onClick() {
        this.route.navigateByUrl('/features');
    }


    openDialog(type: string): void {
        console.log(type);

        if (type == "utility") {
            const dialogRef = this.dialog.open(UtilitiesDialogComponent, {
                width: '1000px',
            });
        } else {
            const dialogRef = this.dialog.open(LifestyleDialogComponent, {
                width: '1000px',
            });
        }
    }

    toggleData() {
        this.illustrationConfigService.setIllustrationData();
    }




}

@Component({
    selector: 'utilities-dialog',
    templateUrl: './utilities-dialog.component.html',
    styleUrls: ['./utilities-dialog.component.scss']
})


export class UtilitiesDialogComponent implements OnInit {

    

    innerWidth: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        // console.log('innerWidth: ' + innerWidth);
    }

    ngOnInit(){
        this.innerWidth = window.innerWidth;
    }

    columnDefinitions = [
        { def: 'select', showMobile: true },
        { def: 'utility', showMobile: true },
        { def: 'perMonth', showMobile: false },
        { def: 'perAnnum', showMobile: true },
    ];

    getDisplayedColumns(): string[] {
        const isMobile = this.innerWidth < 700;
        return this.columnDefinitions
            .filter(cd => !isMobile || cd.showMobile)
            .map(cd => cd.def);
    }




    dataSource = UTILITIES_DATA;
    selection = new SelectionModel<any>(true, [
        UTILITIES_DATA[0],
        UTILITIES_DATA[1],
        UTILITIES_DATA[2],
        UTILITIES_DATA[3],
        UTILITIES_DATA[4],
        UTILITIES_DATA[5],
        UTILITIES_DATA[6],
        UTILITIES_DATA[7],
        UTILITIES_DATA[8]
    ]);

    constructor(public dialogRef: MatDialogRef<UtilitiesDialogComponent>) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.forEach(row => this.selection.select(row));
    }

}


@Component({
    selector: 'lifestyle-dialog',
    templateUrl: './lifestyle-dialog.component.html',
    styleUrls: ['./lifestyle-dialog.component.scss']
})


export class LifestyleDialogComponent implements OnInit {

    innerWidth: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        // console.log('innerWidth: ' + innerWidth);
    }

    ngOnInit(){
        this.innerWidth = window.innerWidth;
    }

    columnDefinitions = [
        { def: 'select', showMobile: true },
        { def: 'lifestyle', showMobile: true },
        { def: 'perMonth', showMobile: false },
        { def: 'perAnnum', showMobile: true },
    ];

    getDisplayedColumns(): string[] {
        const isMobile = this.innerWidth < 700;
        return this.columnDefinitions
            .filter(cd => !isMobile || cd.showMobile)
            .map(cd => cd.def);
    }



    constructor(public dialogRef: MatDialogRef<LifestyleDialogComponent>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }


    dataSource = LIFESTYLE_DATA;
    selection = new SelectionModel<any>(true, [
        LIFESTYLE_DATA[1]
    ]);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.forEach(row => this.selection.select(row));
    }

}