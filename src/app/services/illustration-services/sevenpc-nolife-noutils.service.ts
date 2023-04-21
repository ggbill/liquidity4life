import { Injectable, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';



@Injectable({
    providedIn: 'root'
})
export class SevenPcNoLifeNoUtilsService {

    private tableData: any[];
    private chartData: any[];

    constructor(private decimalpipe: DecimalPipe, private percentPipe: PercentPipe, private currencyPipe: CurrencyPipe) { }

    getChartData(): any {

        this.chartData = [
            292500,
            288539.6156,
            270809.2375,
            284108.1145,
            303959.8064,
            317054.4097,
            337029.1375,
            361436.8275,
            393858.404,
            379832.3956,
            353177.2042,
            378588.6212,
            418016.195,
            444915.6437,
            482270.4024,
            507316.8765,
            532143.81,
            493085.9627,
            458370.6584,
            441547.5872
        ]

        
        return this.chartData;
    }

    getTableData(): any {

        this.tableData = [
            {
                "name": "Portfolio Investment Perfomance",
                "style": "font-weight:bold",
                "yr1": 0,
                "yr2": -0.06,
                "yr3": 0.081,
                "yr4": 0.109,
                "yr5": 0.077,
                "yr6": 0.104,
                "yr7": 0.118,
                "yr8": 0.142,
                "yr9": -0.011,
                "yr10": -0.052,
                "yr11": 0.126,
                "yr12": 0.169,
                "yr13": 0.124,
                "yr14": 0.152,
                "yr15": 0.118,
                "yr16": 0.1197,
                "yr17": -0.02,
                "yr18": -0.01,
                "yr19": 0.041,
                "yr20": 0.072
            },
            {
                "name": "A1 Units",
                "yr1": 117000,
                "yr2": 115919.0531,
                "yr3": 107885.6386,
                "yr4": 115397.7693,
                "yr5": 126505.1843,
                "yr6": 134523.9093,
                "yr7": 146485.7942,
                "yr8": 161342.4166,
                "yr9": 181295.9515,
                "yr10": 176060.5105,
                "yr11": 163689.516,
                "yr12": 180736.2193,
                "yr13": 206904.6953,
                "yr14": 227236.1565,
                "yr15": 255371.7038,
                "yr16": 277831.5331,
                "yr17": 302059.6096,
                "yr18": 286091.8543,
                "yr19": 273020.6295,
                "yr20": 273403.0834
            },
            {
                "name": "F36 Units",
                "yr1": 175500,
                "yr2": 172620.5625,
                "yr3": 162923.5989,
                "yr4": 168710.3452,
                "yr5": 177454.6221,
                "yr6": 182530.5004,
                "yr7": 190543.3433,
                "yr8": 200094.4109,
                "yr9": 212562.4525,
                "yr10": 203771.8851,
                "yr11": 189487.6882,
                "yr12": 197852.4019,
                "yr13": 211111.4997,
                "yr14": 217679.4871,
                "yr15": 226898.6987,
                "yr16": 229485.3434,
                "yr17": 230084.2003,
                "yr18": 206994.1084,
                "yr19": 185350.0289,
                "yr20": 168144.5038
            },
            {
                "name": "Property Value",
                "yr1": 375000,
                "yr2": 352500,
                "yr3": 381052.5,
                "yr4": 422587.2225,
                "yr5": 455126.4386,
                "yr6": 502459.5883,
                "yr7": 561749.8197,
                "yr8": 641518.2941,
                "yr9": 634461.5928,
                "yr10": 601469.59,
                "yr11": 677254.7583,
                "yr12": 791710.8125,
                "yr13": 889882.9532,
                "yr14": 1025145.162,
                "yr15": 1146112.291,
                "yr16": 1283301.933,
                "yr17": 1257635.894,
                "yr18": 1245059.535,
                "yr19": 1296106.976,
                "yr20": 1389426.678
            },
            {
                "name": "Amount Invested in Portfolio",
                "style": "font-weight:bold",
                "yr1": 292500,
                "yr2": 288539.6156,
                "yr3": 270809.2375,
                "yr4": 284108.1145,
                "yr5": 303959.8064,
                "yr6": 317054.4097,
                "yr7": 337029.1375,
                "yr8": 361436.8275,
                "yr9": 393858.404,
                "yr10": 379832.3956,
                "yr11": 353177.2042,
                "yr12": 378588.6212,
                "yr13": 418016.195,
                "yr14": 444915.6437,
                "yr15": 482270.4024,
                "yr16": 507316.8765,
                "yr17": 532143.81,
                "yr18": 493085.9627,
                "yr19": 458370.6584,
                "yr20": 441547.5872
            },
            {
                "name": "",
                "yr1": null,
                "yr2": null,
                "yr3": null,
                "yr4": null,
                "yr5": null,
                "yr6": null,
                "yr7": null,
                "yr8": null,
                "yr9": null,
                "yr10": null,
                "yr11": null,
                "yr12": null,
                "yr13": null,
                "yr14": null,
                "yr15": null,
                "yr16": null,
                "yr17": null,
                "yr18": null,
                "yr19": null,
                "yr20": null
            },
            {
                "name": "Income and Gains",
                "yr1": null,
                "yr2": null,
                "yr3": null,
                "yr4": null,
                "yr5": null,
                "yr6": null,
                "yr7": null,
                "yr8": null,
                "yr9": null,
                "yr10": null,
                "yr11": null,
                "yr12": null,
                "yr13": null,
                "yr14": null,
                "yr15": null,
                "yr16": null,
                "yr17": null,
                "yr18": null,
                "yr19": null,
                "yr20": null
            },
            {
                "name": "Portfolio Income",
                "yr1": 5374.6875,
                "yr2": 5286.504727,
                "yr3": 4989.535216,
                "yr4": 5166.754321,
                "yr5": 5434.547803,
                "yr6": 5589.996576,
                "yr7": 5835.389889,
                "yr8": 6127.891333,
                "yr9": 6509.725107,
                "yr10": 6240.513982,
                "yr11": 5803.060452,
                "yr12": 6059.229808,
                "yr13": 6465.289678,
                "yr14": 6666.434294,
                "yr15": 6948.772647,
                "yr16": 7027.988641,
                "yr17": 7046.328636,
                "yr18": 6339.19457,
                "yr19": 5676.344634,
                "yr20": 5149.42543
            },
            {
                "name": "A Unit Gains",
                "yr1": 2593.678125,
                "yr2": -4318.120937,
                "yr3": 10991.20275,
                "yr4": 14977.6155,
                "yr5": 12453.45315,
                "yr6": 16863.88949,
                "yr7": 20429.64725,
                "yr8": 26374.1195,
                "yr9": 2331.162113,
                "yr10": -4798.948749,
                "yr11": 24271.59805,
                "yr12": 34529.51171,
                "yr13": 30400.09794,
                "yr14": 39735.77077,
                "yr15": 36168.06191,
                "yr16": 39899.71629,
                "yr17": 1962.470368,
                "yr18": 4752.564876,
                "yr19": 18295.8804,
                "yr20": 26746.10137
            },
            {
                "name": "F Unit Gains",
                "yr1": 0,
                "yr2": -6732.201938,
                "yr3": 8577.927481,
                "yr4": 11953.12796,
                "yr5": 8881.603838,
                "yr6": 12339.06183,
                "yr7": 14614.67443,
                "yr8": 18468.71412,
                "yr9": -1519.821535,
                "yr10": -6887.489717,
                "yr11": 15519.04167,
                "yr12": 21734.08635,
                "yr13": 17015.58688,
                "yr14": 21506.73333,
                "yr15": 17403.13019,
                "yr16": 17855.10714,
                "yr17": -2991.094605,
                "yr18": -1345.461705,
                "yr19": 3521.650549,
                "yr20": 7869.162779
            },
            {
                "name": "Total Investment Return",
                "yr1": 7968.365625,
                "yr2": -5763.818148,
                "yr3": 24558.66545,
                "yr4": 32097.49778,
                "yr5": 26769.60479,
                "yr6": 34792.94789,
                "yr7": 40879.71157,
                "yr8": 50970.72496,
                "yr9": 7321.065685,
                "yr10": -5445.924485,
                "yr11": 45593.70017,
                "yr12": 62322.82787,
                "yr13": 53880.97449,
                "yr14": 67908.93839,
                "yr15": 60519.96475,
                "yr16": 64782.81207,
                "yr17": 6017.704399,
                "yr18": 9746.297741,
                "yr19": 27493.87558,
                "yr20": 39764.68958
            },
            {
                "name": "",
                "yr1": null,
                "yr2": null,
                "yr3": null,
                "yr4": null,
                "yr5": null,
                "yr6": null,
                "yr7": null,
                "yr8": null,
                "yr9": null,
                "yr10": null,
                "yr11": null,
                "yr12": null,
                "yr13": null,
                "yr14": null,
                "yr15": null,
                "yr16": null,
                "yr17": null,
                "yr18": null,
                "yr19": null,
                "yr20": null
            },
            {
                "name": "Expenditure",
                "yr1": null,
                "yr2": null,
                "yr3": null,
                "yr4": null,
                "yr5": null,
                "yr6": null,
                "yr7": null,
                "yr8": null,
                "yr9": null,
                "yr10": null,
                "yr11": null,
                "yr12": null,
                "yr13": null,
                "yr14": null,
                "yr15": null,
                "yr16": null,
                "yr17": null,
                "yr18": null,
                "yr19": null,
                "yr20": null
            },
            {
                "name": "Property Costs",
                "yr1": -8418.75,
                "yr2": -8501.568563,
                "yr3": -8012.267861,
                "yr4": -8827.735879,
                "yr5": -10002.87748,
                "yr6": -10975.05651,
                "yr7": -12369.3012,
                "yr8": -14128.0681,
                "yr9": -16502.0103,
                "yr10": -16530.64041,
                "yr11": -15832.06358,
                "yr12": -18205.68672,
                "yr13": -21766.8404,
                "yr14": -24968.84241,
                "yr15": -29373.92815,
                "yr16": -33493.55215,
                "yr17": -38243.81551,
                "yr18": -38100.28323,
                "yr19": -38368.13701,
                "yr20": -40699.65772
            },
            {
                "name": "Administration Fees",
                "yr1": -3510,
                "yr2": -3464.991422,
                "yr3": -3247.520568,
                "yr4": -3418.069992,
                "yr5": -3672.123986,
                "yr6": -3843.163644,
                "yr7": -4102.720346,
                "yr8": -4421.080358,
                "yr9": -4845.063798,
                "yr10": -4678.626508,
                "yr11": -4350.219622,
                "yr12": -4689.567308,
                "yr13": -5214.685427,
                "yr14": -5585.337219,
                "yr15": -6099.562543,
                "yr16": -6462.326431,
                "yr17": -6831.736148,
                "yr18": -6361.318899,
                "yr19": -5948.809731,
                "yr20": -5782.491289
            },
            {
                "name": "",
                "yr1": null,
                "yr2": null,
                "yr3": null,
                "yr4": null,
                "yr5": null,
                "yr6": null,
                "yr7": null,
                "yr8": null,
                "yr9": null,
                "yr10": null,
                "yr11": null,
                "yr12": null,
                "yr13": null,
                "yr14": null,
                "yr15": null,
                "yr16": null,
                "yr17": null,
                "yr18": null,
                "yr19": null,
                "yr20": null
            },
            {
                "name": "Total Cost",
                "yr1": -11928.75,
                "yr2": -11966.55998,
                "yr3": -11259.78843,
                "yr4": -12245.80587,
                "yr5": -13675.00147,
                "yr6": -14818.22015,
                "yr7": -16472.02154,
                "yr8": -18549.14846,
                "yr9": -21347.0741,
                "yr10": -21209.26692,
                "yr11": -20182.2832,
                "yr12": -22895.25403,
                "yr13": -26981.52582,
                "yr14": -30554.17963,
                "yr15": -35473.49069,
                "yr16": -39955.87858,
                "yr17": -45075.55165,
                "yr18": -44461.60213,
                "yr19": -44316.94674,
                "yr20": -46482.14901
            },
            {
                "name": "Portfolio Gains/Losses",
                "yr1": -3960.384375,
                "yr2": -17730.37813,
                "yr3": 13298.87702,
                "yr4": 19851.69191,
                "yr5": 13094.60332,
                "yr6": 19974.72774,
                "yr7": 24407.69003,
                "yr8": 32421.5765,
                "yr9": -14026.00841,
                "yr10": -26655.1914,
                "yr11": 25411.41697,
                "yr12": 39427.57384,
                "yr13": 26899.44867,
                "yr14": 37354.75876,
                "yr15": 25046.47406,
                "yr16": 24826.93349,
                "yr17": -39057.84725,
                "yr18": -34715.30439,
                "yr19": -16823.07116,
                "yr20": -6717.459423
            }
        ]

        this.tableData.forEach(element => {
            if (element.name != "Portfolio Investment Perfomance") {
                // convert to currency
                element.yr1 = this.currencyPipe.transform(element.yr1, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr5 = this.currencyPipe.transform(element.yr5, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr10 = this.currencyPipe.transform(element.yr10, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr15 = this.currencyPipe.transform(element.yr15, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr16 = this.currencyPipe.transform(element.yr16, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr17 = this.currencyPipe.transform(element.yr17, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr18 = this.currencyPipe.transform(element.yr18, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr19 = this.currencyPipe.transform(element.yr19, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr20 = this.currencyPipe.transform(element.yr20, 'GBP', 'symbol-narrow', '1.0-0');

            } else {
                // add percent symbols
                element.yr1 = this.percentPipe.transform(element.yr1, '1.2-5');
                element.yr5 = this.percentPipe.transform(element.yr5, '1.2-5');
                element.yr10 = this.percentPipe.transform(element.yr10, '1.2-5');
                element.yr15 = this.percentPipe.transform(element.yr15, '1.2-5');
                element.yr16 = this.percentPipe.transform(element.yr16, '1.2-5');
                element.yr17 = this.percentPipe.transform(element.yr17, '1.2-5');
                element.yr18 = this.percentPipe.transform(element.yr18, '1.2-5');
                element.yr19 = this.percentPipe.transform(element.yr19, '1.2-5');
                element.yr20 = this.percentPipe.transform(element.yr20, '1.2-5');
            }
        });

        return this.tableData;

    }

}
