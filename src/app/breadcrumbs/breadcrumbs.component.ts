import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnChanges {
    @Input() activeRoute = '';
    breadCrumbPaths: any[];
    currentActiveIndex = 0;
    lastIndex = 0;

    constructor(private router: Router) {
    }


    getIndex(activeRoute: string): number {
        if (activeRoute === '/') {
            return -2;
        }

        if (activeRoute) {
            const index = this.breadCrumbPaths.findIndex((item) => {
                const path = item.path;
                return activeRoute === path;
            });
            return index;
        }
    }

    ngOnChanges() {
        this.getPathsAndRoutes();
        if (this.activeRoute !== '/') {
            this.currentActiveIndex = this.getIndex(this.activeRoute);
        }

    }

    ngOnInit() {
        this.getPathsAndRoutes();
        if (this.activeRoute !== '/') {
            this.currentActiveIndex = this.getIndex(this.activeRoute);
        }
    }

    navigateToNextStep(path: string, index: number, currentIndex: number) {
        if (index < currentIndex || currentIndex === -1 || index === 0) {
            this.router.navigateByUrl(path);
        }
    }


    getPathsAndRoutes() {
        this.breadCrumbPaths = [
            {
                'name': 'Basic Details',
                'path': '/basic-details'
            }
            ,
            {
                'name': 'Initial Investment',
                'path': '/initial-investment'
            }
            ,
            {
                'name': 'Example',
                'path': '/illustration'
            }
            ,
            // {
            //     'name': 'Features',
            //     'path': '/features'
            // }
            // ,
            {
                'name': 'Controls',
                'path': '/controls'
            }
            // ,
            // {
            //     'name': 'Next Steps',
            //     'path': '/next-steps'
            // }

        ];
        this.lastIndex = this.breadCrumbPaths.length;
    }

}
