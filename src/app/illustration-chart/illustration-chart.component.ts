import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { IllustrationConfigService } from '../services/illustration-config.service';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-illustration-chart',
    templateUrl: './illustration-chart.component.html',
    styleUrls: ['./illustration-chart.component.scss'],
})
export class IllustrationChartComponent implements OnInit {

    differ: any;
    illustrationConfigData;

    constructor(private illustrationConfigService: IllustrationConfigService, private currencyPipe: CurrencyPipe) { }

    @ViewChild(BaseChartDirective, { static: true })
    private _chart;


    // lineChart
    public lineChartData: Array<any>;
    public lineChartLabels: Array<any> = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    public lineChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            padding: 50,
            legendCallback: function(chart) {
                "<h2> Hello World </h2>"
            }

        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Portfolio Value',
                    fontSize: 16,
                    fontFamily: 'Nunito Sans'
                },
                display: true,
                ticks: {
                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                    suggestedMax: 550000,
                    stepSize: 50000,
                    callback: (dataLabel, index) => {
                        return this.currencyPipe.transform(dataLabel, 'GBP', 'symbol-narrow', '1.0-0');
                    }
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Year',
                    fontSize: 16,
                    fontFamily: 'Nunito Sans'
                }
            }]
        },
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 16,

        }
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(60,195,214,0.2)',
            borderColor: '#3CC3D6',
            pointBackgroundColor: '#3CC3D6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: true,
        },

    ];
    public lineChartLegend: boolean = false;
    public lineChartType: string = 'line';

    ngOnInit() {

        this.illustrationConfigService.cast.subscribe(
            data => {
                // console.log('DATA CHANGE')
                this.illustrationConfigData = data;
                this.updateChart();
            },
            err => console.log('error: ' + err)
        )
    }

    updateChart() {

        this.lineChartData = [
            {
                data: this.illustrationConfigData.illustrationChartData,
                label: this.illustrationConfigData.illustrationChartLabel
            },
        ]

        if (this._chart.chart) {
            this._chart.chart.update();
            this._chart.chart.generateLegend();
        } else {
            // console.log("no chart");
        }
    }







    // this.lineChartData[0].data.push(this.illustrationConfigData.illustrationChartData);
    // this.chart.chart.update();





}









    // updateChart() {
    //     this.chart.chart.update(); // This re-renders the canvas element.
    // console.log("hello");


//     ngOnInit() {

//         this.illustrationConfigService.cast.subscribe(illustrationConfigData => this.illustrationConfigData = illustrationConfigData);

//         this.chart = new Chart('canvas', {
//             type: 'line',
//             data: {
//                 labels: ["1", "5", "10", "15", "16", "17", "18", "19", "20"],
//                 datasets: [
//                     {
//                         data: this.illustrationConfigData.illustrationChartData
//                         // 1,2,3,8,9,3,8,5,6,2,1,2,3,8,9,3,8,5,6,2
//                         //   292500,
//                         //   286240.3226,
//                         //   262263.6959,
//                         //   212368.015,
//                         //   198289.1683,
//                         //   182584.0229,
//                         //   165123.8745,
//                         //   145769.981,
//                         //   124372.693
//                         ,
//                         borderColor: "#3cba9f",
//                         fill: false
//                     },
//                     //   { 
//                     //     data: [3,2,1,8,7,9,6,1,3,4,3,2,1,8,7,9,6,1,3,4],
//                     //     borderColor: "#ffcc00",
//                     //     fill: false
//                     //   },
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 legend: {
//                     display: false
//                 },
//                 scales: {
//                     xAxes: [{
//                         display: true
//                     }],
//                     yAxes: [{
//                         display: true
//                     }],
//                 }
//             }
//         });
//     }

// }
