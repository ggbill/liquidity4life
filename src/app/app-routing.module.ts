import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { InitialInvestmentComponent } from './initial-investment/initial-investment.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { FeaturesComponent } from './features/features.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ControlsComponent } from './controls/controls.component';
import { ExpressionOfInterestComponent } from './expression-of-interest/expression-of-interest.component';
import { PropertyPortfolioComponent } from './property-portfolio/property-portfolio.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path: '**',
    //     component: HomeComponent
    // },
    {
        path: 'basic-details',
        component: BasicDetailsComponent
    },
    {
        path: 'initial-investment',
        component: InitialInvestmentComponent
    },
    {
        path: 'illustration',
        component: IllustrationComponent
    },
    {
        path: 'features',
        component: FeaturesComponent
    },
    {
        path: 'controls',
        component: ControlsComponent
    },
    {
        path: 'next-steps',
        component: NextStepsComponent
    },
    {
        path: 'expression-of-interest',
        component: ExpressionOfInterestComponent
    },
    {
        path: 'property-portfolio',
        component: PropertyPortfolioComponent
    },
    {
        path: 'property-overview/:id',
        component: PropertyOverviewComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
