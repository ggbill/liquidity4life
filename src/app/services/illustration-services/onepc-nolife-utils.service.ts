import { Injectable, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class OnePcNoLifeUtilsService {

    private tableData: any[];
    private chartData: any[];

    constructor(private decimalpipe: DecimalPipe, private percentPipe: PercentPipe, private currencyPipe: CurrencyPipe) { }

    getChartData(): any {

        this.chartData = [
            292500,
            292787.5194,
            295336.4713,
            298946.9315,
            315556.5941,
            324339.3306,
            318361.5141,
            305332.4462,
            295248.5596,
            280484.8406,
            264155.0686,
            257398.8448,
            251415.7605,
            244800.1381,
            213965.9777,
            185580.5068,
            160080.4167,
            135204.7969,
            111544.3607,
            87800.46753
        ]
        return this.chartData;
    }

    getTableData(): any {

        this.tableData = [
            {
                "name": "Portfolio Investment Perfomance",
                "yr1": 0.033,
                "yr2": 0.047,
                "yr3": 0.055,
                "yr4": 0.12,
                "yr5": 0.084,
                "yr6": 0.023,
                "yr7": -0.004,
                "yr8": 0.012,
                "yr9": -0.006,
                "yr10": -0.011,
                "yr11": 0.042,
                "yr12": 0.054,
                "yr13": 0.06,
                "yr14": -0.064,
                "yr15": -0.058,
                "yr16": -0.045,
                "yr17": -0.044,
                "yr18": -0.036,
                "yr19": -0.038,
                "yr20": -0.024
            },
            {
                "name": "A1 Units",
                "yr1": 117000,
                "yr2": 118009.2069,
                "yr3": 120435.7453,
                "yr4": 123676.6398,
                "yr5": 134742.7717,
                "yr6": 141821.6075,
                "yr7": 140488.1852,
                "yr8": 135096.9763,
                "yr9": 131649.5483,
                "yr10": 125547.1781,
                "yr11": 118640.5043,
                "yr12": 117778.2396,
                "yr13": 117800.7922,
                "yr14": 117947.9301,
                "yr15": 103086.891,
                "yr16": 89778.6729,
                "yr17": 78331.05778,
                "yr18": 67335.58961,
                "yr19": 57190.30136,
                "yr20": 47078.11838
            },
            {
                "name": "F36 Units",
                "yr1": 175500,
                "yr2": 174778.3125,
                "yr3": 174900.726,
                "yr4": 175270.2916,
                "yr5": 180813.8224,
                "yr6": 182517.7231,
                "yr7": 177873.3289,
                "yr8": 170235.4699,
                "yr9": 163599.0112,
                "yr10": 154937.6624,
                "yr11": 145514.5643,
                "yr12": 139620.6052,
                "yr13": 133614.9684,
                "yr14": 126852.208,
                "yr15": 110879.0867,
                "yr16": 95801.83391,
                "yr17": 81749.35893,
                "yr18": 67869.20733,
                "yr19": 54354.05931,
                "yr20": 40722.34915
            },
            {
                "name": "Property Value",
                "yr1": 387375,
                "yr2": 405581.625,
                "yr3": 427888.6144,
                "yr4": 479235.2481,
                "yr5": 519491.0089,
                "yr6": 531439.3021,
                "yr7": 529313.5449,
                "yr8": 535665.3075,
                "yr9": 532451.3156,
                "yr10": 526594.3512,
                "yr11": 548711.3139,
                "yr12": 578341.7249,
                "yr13": 613042.2284,
                "yr14": 573807.5257,
                "yr15": 540526.6892,
                "yr16": 516202.9882,
                "yr17": 493490.0567,
                "yr18": 475724.4147,
                "yr19": 457646.8869,
                "yr20": 446663.3617
            },
            {
                "name": "Amount Invested in Portfolio",
                "yr1": 292500,
                "yr2": 292787.5194,
                "yr3": 295336.4713,
                "yr4": 298946.9315,
                "yr5": 315556.5941,
                "yr6": 324339.3306,
                "yr7": 318361.5141,
                "yr8": 305332.4462,
                "yr9": 295248.5596,
                "yr10": 280484.8406,
                "yr11": 264155.0686,
                "yr12": 257398.8448,
                "yr13": 251415.7605,
                "yr14": 244800.1381,
                "yr15": 213965.9777,
                "yr16": 185580.5068,
                "yr17": 160080.4167,
                "yr18": 135204.7969,
                "yr19": 111544.3607,
                "yr20": 87800.46753
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
                "yr2": 5352.58582,
                "yr3": 5356.334734,
                "yr4": 5367.652681,
                "yr5": 5537.423311,
                "yr6": 5589.60527,
                "yr7": 5447.370697,
                "yr8": 5213.461265,
                "yr9": 5010.219719,
                "yr10": 4744.965912,
                "yr11": 4456.383531,
                "yr12": 4275.881034,
                "yr13": 4091.958406,
                "yr14": 3884.84887,
                "yr15": 3395.672029,
                "yr16": 2933.931163,
                "yr17": 2503.574117,
                "yr18": 2078.494474,
                "yr19": 1664.593066,
                "yr20": 1247.121943
            },
            {
                "name": "A Unit Gains",
                "yr1": 6404.331881,
                "yr2": 8076.709244,
                "yr3": 9231.872035,
                "yr4": 17463.29801,
                "yr5": 14292.52737,
                "yr6": 6567.091211,
                "yr7": 2815.968783,
                "yr8": 4875.922539,
                "yr9": 2464.60065,
                "yr10": 1775.058118,
                "yr11": 7902.454795,
                "yr12": 9283.499193,
                "yr13": 10030.26081,
                "yr14": -4261.287539,
                "yr15": -3077.92162,
                "yr16": -1499.033042,
                "yr17": -1193.812995,
                "yr18": -464.5017655,
                "yr19": -474.5280203,
                "yr20": 281.8407944
            },
            {
                "name": "F Unit Gains",
                "yr1": 4738.5,
                "yr2": 5942.462625,
                "yr3": 6646.227588,
                "yr4": 12356.55556,
                "yr5": 9492.725677,
                "yr6": 4015.389908,
                "yr7": 1511.923296,
                "yr8": 2808.885253,
                "yr9": 1226.992584,
                "yr10": 774.6883121,
                "yr11": 4583.708775,
                "yr12": 5235.772694,
                "yr13": 5411.406218,
                "yr14": -2727.322472,
                "yr15": -2051.263103,
                "yr16": -1149.622007,
                "yr17": -940.1176277,
                "yr18": -509.019055,
                "yr19": -462.0095042,
                "yr20": -61.08352373
            },
            {
                "name": "Total Investment Return",
                "yr1": 16517.51938,
                "yr2": 19371.75769,
                "yr3": 21234.43436,
                "yr4": 35187.50626,
                "yr5": 29322.67635,
                "yr6": 16172.08639,
                "yr7": 9775.262776,
                "yr8": 12898.26906,
                "yr9": 8701.812954,
                "yr10": 7294.712342,
                "yr11": 16942.5471,
                "yr12": 18795.15292,
                "yr13": 19533.62544,
                "yr14": -3103.761141,
                "yr15": -1733.512694,
                "yr16": 285.2761149,
                "yr17": 369.6434947,
                "yr18": 1104.973654,
                "yr19": 728.055542,
                "yr20": 1467.879213
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
                "name": "Utility Costs",
                "yr1": -4301.25,
                "yr2": -4408.78125,
                "yr3": -4519.000781,
                "yr4": -4631.975801,
                "yr5": -4747.775196,
                "yr6": -4866.469576,
                "yr7": -4988.131315,
                "yr8": -5112.834598,
                "yr9": -5240.655463,
                "yr10": -5371.671849,
                "yr11": -5505.963646,
                "yr12": -5643.612737,
                "yr13": -5784.703055,
                "yr14": -5929.320632,
                "yr15": -6077.553647,
                "yr16": -6229.492489,
                "yr17": -6385.229801,
                "yr18": -6544.860546,
                "yr19": -6708.48206,
                "yr20": -6876.194111
            },
            {
                "name": "Property Costs",
                "yr1": -8418.75,
                "yr2": -8896.103325,
                "yr3": -9549.429937,
                "yr4": -10338.01528,
                "yr5": -11962.88488,
                "yr6": -13330.93198,
                "yr7": -13930.14327,
                "yr8": -14140.51178,
                "yr9": -14614.14315,
                "yr10": -14820.22819,
                "yr11": -14958.05404,
                "yr12": -15971.74478,
                "yr13": -17261.38328,
                "yr14": -18763.33759,
                "yr15": -17919.31028,
                "yr16": -17251.17529,
                "yr17": -16867.57401,
                "yr18": -16531.82345,
                "yr19": -16362.07151,
                "yr20": -16180.89082
            },
            {
                "name": "Administration Fees",
                "yr1": -3510,
                "yr2": -3517.921228,
                "yr3": -3555.543439,
                "yr4": -3607.852514,
                "yr5": -3829.2798,
                "yr6": -3952.501344,
                "yr7": -3886.056067,
                "yr8": -3728.809344,
                "yr9": -3610.733337,
                "yr10": -3432.584296,
                "yr11": -3234.753207,
                "yr12": -3162.879646,
                "yr13": -3103.161566,
                "yr14": -3037.741031,
                "yr15": -2655.094232,
                "yr16": -2304.698433,
                "yr17": -1992.459456,
                "yr18": -1688.725917,
                "yr19": -1401.395113,
                "yr20": -1113.395267
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
                "yr1": -16230,
                "yr2": -16822.8058,
                "yr3": -17623.97416,
                "yr4": -18577.84359,
                "yr5": -20539.93988,
                "yr6": -22149.9029,
                "yr7": -22804.33066,
                "yr8": -22982.15573,
                "yr9": -23465.53195,
                "yr10": -23624.48433,
                "yr11": -23698.7709,
                "yr12": -24778.23716,
                "yr13": -26149.2479,
                "yr14": -27730.39925,
                "yr15": -26651.95816,
                "yr16": -25785.36621,
                "yr17": -25245.26327,
                "yr18": -24765.40992,
                "yr19": -24471.94868,
                "yr20": -24170.48019
            },
            {
                "name": "Portfolio Gains/Losses",
                "yr1": 287.5193811,
                "yr2": 2548.951886,
                "yr3": 3610.460199,
                "yr4": 16609.66267,
                "yr5": 8782.736478,
                "yr6": -5977.816509,
                "yr7": -13029.06788,
                "yr8": -10083.88667,
                "yr9": -14763.719,
                "yr10": -16329.77199,
                "yr11": -6756.223794,
                "yr12": -5983.084239,
                "yr13": -6615.622469,
                "yr14": -30834.1604,
                "yr15": -28385.47086,
                "yr16": -25500.0901,
                "yr17": -24875.61978,
                "yr18": -23660.43626,
                "yr19": -23743.89314,
                "yr20": -22702.60098
            }
        ]

        this.tableData.forEach(element => {
            if (element.name != "Portfolio Investment Perfomance") {
                // convert to currency
                element.yr1 = this.currencyPipe.transform(element.yr1, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr2 = this.currencyPipe.transform(element.yr2, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr3 = this.currencyPipe.transform(element.yr3, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr4 = this.currencyPipe.transform(element.yr4, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr5 = this.currencyPipe.transform(element.yr5, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr6 = this.currencyPipe.transform(element.yr6, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr7 = this.currencyPipe.transform(element.yr7, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr8 = this.currencyPipe.transform(element.yr8, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr9 = this.currencyPipe.transform(element.yr9, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr10 = this.currencyPipe.transform(element.yr10, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr11 = this.currencyPipe.transform(element.yr11, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr12 = this.currencyPipe.transform(element.yr12, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr13 = this.currencyPipe.transform(element.yr13, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr14 = this.currencyPipe.transform(element.yr14, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr15 = this.currencyPipe.transform(element.yr15, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr16 = this.currencyPipe.transform(element.yr16, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr17 = this.currencyPipe.transform(element.yr17, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr18 = this.currencyPipe.transform(element.yr18, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr19 = this.currencyPipe.transform(element.yr19, 'GBP', 'symbol-narrow', '1.0-0');
                element.yr20 = this.currencyPipe.transform(element.yr20, 'GBP', 'symbol-narrow', '1.0-0');

            } else {
                // add percent symbols
                element.yr1 = this.percentPipe.transform(element.yr1, '1.2-5');
                element.yr2 = this.percentPipe.transform(element.yr2, '1.2-5');
                element.yr3 = this.percentPipe.transform(element.yr3, '1.2-5');
                element.yr4 = this.percentPipe.transform(element.yr4, '1.2-5');
                element.yr5 = this.percentPipe.transform(element.yr5, '1.2-5');
                element.yr6 = this.percentPipe.transform(element.yr6, '1.2-5');
                element.yr7 = this.percentPipe.transform(element.yr7, '1.2-5');
                element.yr8 = this.percentPipe.transform(element.yr8, '1.2-5');
                element.yr9 = this.percentPipe.transform(element.yr9, '1.2-5');
                element.yr10 = this.percentPipe.transform(element.yr10, '1.2-5');
                element.yr11 = this.percentPipe.transform(element.yr11, '1.2-5');
                element.yr12 = this.percentPipe.transform(element.yr12, '1.2-5');
                element.yr13 = this.percentPipe.transform(element.yr13, '1.2-5');
                element.yr14 = this.percentPipe.transform(element.yr14, '1.2-5');
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
