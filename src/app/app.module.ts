import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';


import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule
} from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SelectionBarSliderComponent } from './selection-bar-slider/selection-bar-slider.component';
import { Ng5SliderModule } from 'ng5-slider';
import { InitialInvestmentComponent } from './initial-investment/initial-investment.component';
import { InitialInvestmentDataService } from './services/initial-investment.service';
import { IllustrationComponent } from './illustration/illustration.component';
import { IllustrationChartComponent } from './illustration-chart/illustration-chart.component';
import { IllustrationTableComponent } from './illustration-table/illustration-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FeaturesComponent } from './features/features.component';
import { ControlsComponent } from './controls/controls.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ExpressionOfInterestComponent } from './expression-of-interest/expression-of-interest.component';
import { DocumentStoreDialogComponent } from './initial-investment/initial-investment.component';
import { UtilitiesDialogComponent } from './illustration/illustration.component';
import { LifestyleDialogComponent } from './illustration/illustration.component';
import { IllustrationDoubleSliderComponent } from './illustration-double-slider/illustration-double-slider.component';
import { PropertyPortfolioComponent } from './property-portfolio/property-portfolio.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { KeyMetricsComponent } from './key-metrics/key-metrics.component';
import { PortfolioPerformanceComponent } from './portfolio-performance/portfolio-performance.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';
import { AdviserDetailsComponent } from './adviser-details/adviser-details.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        BasicDetailsComponent,
        BreadcrumbsComponent,
        SelectionBarSliderComponent,
        InitialInvestmentComponent,
        IllustrationComponent,
        IllustrationChartComponent,
        IllustrationTableComponent,
        FeaturesComponent,
        ControlsComponent,
        NextStepsComponent,
        ExpressionOfInterestComponent,
        DocumentStoreDialogComponent,
        UtilitiesDialogComponent,
        LifestyleDialogComponent,
        IllustrationDoubleSliderComponent,
        PropertyPortfolioComponent,
        PropertyDetailsComponent,
        KeyMetricsComponent,
        PortfolioPerformanceComponent,
        PropertyOverviewComponent,
        AdviserDetailsComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        Ng5SliderModule,
        FormsModule,
        NgxDatatableModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatTableModule,
        MatCheckboxModule,
        MatTabsModule,
        ChartsModule
    ],
    providers: [CurrencyPipe,
        DecimalPipe,
        PercentPipe,
        InitialInvestmentDataService],
    bootstrap: [AppComponent],
    entryComponents: [InitialInvestmentComponent, DocumentStoreDialogComponent, UtilitiesDialogComponent, LifestyleDialogComponent]
})
export class AppModule { }
