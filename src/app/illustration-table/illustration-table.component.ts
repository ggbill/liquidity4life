import { Component, OnInit, HostListener } from '@angular/core';
import { IllustrationConfigService } from '../services/illustration-config.service';

@Component({
    selector: 'app-illustration-table',
    templateUrl: './illustration-table.component.html',
    styleUrls: ['./illustration-table.component.scss']
})
export class IllustrationTableComponent implements OnInit {


    rows;
    columns;
    illustrationConfigData;
    // dataSource;
    selectedRowIndex: number = 3;
    innerWidth: any;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        // console.log('innerWidth: ' + innerWidth);
    }
    
    constructor(private illustrationConfigService: IllustrationConfigService) { }

    ngOnInit() {
        this.illustrationConfigService.cast.subscribe(illustrationConfigData => this.illustrationConfigData = illustrationConfigData);
        this.innerWidth = window.innerWidth;
    }

    displayedColumns: string[] = [
        "name",
        "yr1",
        "yr5",
        "yr10",
        "yr15",
        "yr16",
        "yr17",
        "yr18",
        "yr19",
        "yr20"
    ];

    columnDefinitions = [
        { def: 'name', showMobile: true },
        { def: 'yr1', showMobile: true },
        { def: 'yr5', showMobile: false },
        { def: 'yr10', showMobile: true },
        { def: 'yr15', showMobile: false },
        { def: 'yr16', showMobile: false },
        { def: 'yr17', showMobile: false },
        { def: 'yr18', showMobile: false },
        { def: 'yr19', showMobile: false },
        { def: 'yr20', showMobile: true },
    ];

    getDisplayedColumns(): string[] {
        const isMobile = this.innerWidth < 1125;
        return this.columnDefinitions
            .filter(cd => !isMobile || cd.showMobile)
            .map(cd => cd.def);
    }

}