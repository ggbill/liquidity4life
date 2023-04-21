import { Injectable, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ThreePcLifeUtilsService {

    private tableData: any[];
    private chartData: any[];

    constructor(private decimalpipe: DecimalPipe, private percentPipe: PercentPipe, private currencyPipe: CurrencyPipe) { }

    getChartData(): any {

        this.chartData = [
            292500,
            294413.6586,
            286166.5423,
            276563.1103,
            257727.5102,
            236194.8812,
            212490.9938,
            207144.0002,
            201884.7033,
            197720.2584,
            181471.8566,
            161482.8935,
            137800.365,
            117885.431,
            94797.59936,
            69415.58284,
            43278.82082,
            12061.07591,
            0,
            0
        ]
        return this.chartData;
    }
    getTableData(): any {

        this.tableData = [
            {
                "name": "Portfolio Investment Perfomance",
                "yr1": 0.06,
                "yr2": 0.02,
                "yr3": 0.018,
                "yr4": -0.02,
                "yr5": -0.032,
                "yr6": -0.044,
                "yr7": 0.063,
                "yr8": 0.073,
                "yr9": 0.091,
                "yr10": 0.028,
                "yr11": 0.014,
                "yr12": -0.003,
                "yr13": 0.04,
                "yr14": 0.032,
                "yr15": 0.033,
                "yr16": 0.064,
                "yr17": 0.036,
                "yr18": 0.037,
                "yr19": 0.037,
                "yr20": 0.052
            },
            {
                "name": "A1 Units",
                "yr1": 117000,
                "yr2": 119689.3461,
                "yr3": 117418.8556,
                "yr4": 114578.9834,
                "yr5": 107092.592,
                "yr6": 98260.46519,
                "yr7": 88338.472,
                "yr8": 87958.87618,
                "yr9": 87919.56975,
                "yr10": 88847.53498,
                "yr11": 83627.74598,
                "yr12": 76565.76685,
                "yr13": 67601.61855,
                "yr14": 61032.89391,
                "yr15": 52981.56118,
                "yr16": 43960.54001,
                "yr17": 35138.39454,
                "yr18": 12061.07591,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "F36 Units",
                "yr1": 175500,
                "yr2": 174724.3125,
                "yr3": 168747.6867,
                "yr4": 161984.1269,
                "yr5": 150634.9182,
                "yr6": 137934.4161,
                "yr7": 124152.5218,
                "yr8": 119185.124,
                "yr9": 113965.1335,
                "yr10": 108872.7234,
                "yr11": 97844.11057,
                "yr12": 84917.12662,
                "yr13": 70198.74643,
                "yr14": 56852.53709,
                "yr15": 41816.03818,
                "yr16": 25455.04283,
                "yr17": 8140.426277,
                "yr18": 0,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "Property Value",
                "yr1": 397500,
                "yr2": 405450,
                "yr3": 412748.1,
                "yr4": 404493.138,
                "yr5": 391549.3576,
                "yr6": 374321.1859,
                "yr7": 397903.4206,
                "yr8": 426950.3703,
                "yr9": 465802.854,
                "yr10": 478845.3339,
                "yr11": 485549.1685,
                "yr12": 484092.521,
                "yr13": 503456.2219,
                "yr14": 519566.821,
                "yr15": 536712.5261,
                "yr16": 571062.1277,
                "yr17": 591620.3643,
                "yr18": 613510.3178,
                "yr19": 636210.1996,
                "yr20": 669293.1299
            },
            {
                "name": "Amount Invested in Portfolio",
                "yr1": 292500,
                "yr2": 294413.6586,
                "yr3": 286166.5423,
                "yr4": 276563.1103,
                "yr5": 257727.5102,
                "yr6": 236194.8812,
                "yr7": 212490.9938,
                "yr8": 207144.0002,
                "yr9": 201884.7033,
                "yr10": 197720.2584,
                "yr11": 181471.8566,
                "yr12": 161482.8935,
                "yr13": 137800.365,
                "yr14": 117885.431,
                "yr15": 94797.59936,
                "yr16": 69415.58284,
                "yr17": 43278.82082,
                "yr18": 12061.07591,
                "yr19": 0,
                "yr20": 0
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
                "yr2": 5350.93207,
                "yr3": 5167.897905,
                "yr4": 4960.763886,
                "yr5": 4613.19437,
                "yr6": 4224.241492,
                "yr7": 3802.170981,
                "yr8": 3650.044422,
                "yr9": 3490.182214,
                "yr10": 3334.227155,
                "yr11": 2996.475886,
                "yr12": 2600.587003,
                "yr13": 2149.836609,
                "yr14": 1741.108948,
                "yr15": 1280.616169,
                "yr16": 779.5606866,
                "yr17": 249.3005547,
                "yr18": 0,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "A Unit Gains",
                "yr1": 9524.471144,
                "yr2": 5023.544256,
                "yr3": 4746.682442,
                "yr4": 394.5700237,
                "yr5": -847.540683,
                "yr6": -1890.106265,
                "yr7": 7646.443658,
                "yr8": 8530.293107,
                "yr9": 10135.72394,
                "yr10": 4786.321652,
                "yr11": 3404.013958,
                "yr12": 1886.199406,
                "yr13": 4559.550793,
                "yr14": 3676.848472,
                "yr15": 3279.001823,
                "yr16": 4086.293524,
                "yr17": 2326.274586,
                "yr18": 820.6407457,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "F Unit Gains",
                "yr1": 6844.5,
                "yr2": 2271.416063,
                "yr3": 1974.347934,
                "yr4": -2105.79365,
                "yr5": -3133.206299,
                "yr6": -3944.924299,
                "yr7": 5084.045769,
                "yr8": 5655.334134,
                "yr9": 6741.037648,
                "yr10": 1981.483567,
                "yr11": 890.3814062,
                "yr12": -165.5883969,
                "yr13": 1825.167407,
                "yr14": 1182.532772,
                "yr15": 896.954019,
                "yr16": 1058.929782,
                "yr17": 190.4859749,
                "yr18": 0,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "Total Investment Return",
                "yr1": 21743.65864,
                "yr2": 12645.89239,
                "yr3": 11888.92828,
                "yr4": 3249.54026,
                "yr5": 632.4473884,
                "yr6": -1610.789072,
                "yr7": 16532.66041,
                "yr8": 17835.67166,
                "yr9": 20366.94381,
                "yr10": 10102.03237,
                "yr11": 7290.871251,
                "yr12": 4321.198012,
                "yr13": 8534.554809,
                "yr14": 6600.490192,
                "yr15": 5456.572011,
                "yr16": 5924.783993,
                "yr17": 2766.061116,
                "yr18": 820.6407457,
                "yr19": 0,
                "yr20": 0
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
                "name": "Lifestyle Costs ",
                "yr1": -3600,
                "yr2": -3690,
                "yr3": -3782.25,
                "yr4": -3876.80625,
                "yr5": -3973.726406,
                "yr6": -4073.069566,
                "yr7": -4174.896306,
                "yr8": -4279.268713,
                "yr9": -4386.250431,
                "yr10": -4495.906692,
                "yr11": -4608.304359,
                "yr12": -4723.511968,
                "yr13": -4841.599767,
                "yr14": -4962.639761,
                "yr15": -5086.705756,
                "yr16": -5213.873399,
                "yr17": -5344.220234,
                "yr18": -5477.82574,
                "yr19": -5614.771384,
                "yr20": -5755.140668
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
                "yr2": -9251.644147,
                "yr3": -9742.349814,
                "yr4": -10237.83228,
                "yr5": -10330.83669,
                "yr6": -10300.30807,
                "yr7": -10150.02414,
                "yr8": -11191.63087,
                "yr9": -12446.03788,
                "yr10": -14061.41545,
                "yr11": -14932.70904,
                "yr12": -15638.94402,
                "yr13": -16107.17422,
                "yr14": -17312.34266,
                "yr15": -18461.44534,
                "yr16": -19704.22159,
                "yr17": -21645.87581,
                "yr18": -23302.9823,
                "yr19": -24540.41271,
                "yr20": 0
            },
            {
                "name": "Administration Fees",
                "yr1": -3510,
                "yr2": -3542.583317,
                "yr3": -3448.759701,
                "yr4": -3338.52602,
                "yr5": -3112.738062,
                "yr6": -2853.251138,
                "yr7": -2566.602298,
                "yr8": -2511.234383,
                "yr9": -2458.444882,
                "yr10": -2421.440259,
                "yr11": -2232.857295,
                "yr12": -1997.657769,
                "yr13": -1716.011743,
                "yr14": -1484.01878,
                "yr15": -1212.8838,
                "yr16": -913.9585284,
                "yr17": -608.4801809,
                "yr18": -180.9161386,
                "yr19": 0,
                "yr20": 0
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
                "yr1": -19830,
                "yr2": -20893.00871,
                "yr3": -21492.3603,
                "yr4": -22085.14035,
                "yr5": -22165.07636,
                "yr6": -22093.09835,
                "yr7": -21879.65406,
                "yr8": -23094.96856,
                "yr9": -24531.38866,
                "yr10": -26350.43425,
                "yr11": -27279.83434,
                "yr12": -28003.72649,
                "yr13": -28449.48879,
                "yr14": -29688.32183,
                "yr15": -30838.58854,
                "yr16": -32061.54601,
                "yr17": -33983.80603,
                "yr18": -35506.58472,
                "yr19": -36863.66616,
                "yr20": -12631.33478
            },
            {
                "name": "Portfolio Gains/Losses",
                "yr1": 1913.658644,
                "yr2": -8247.116325,
                "yr3": -9603.432016,
                "yr4": -18835.60009,
                "yr5": -21532.62897,
                "yr6": -23703.88742,
                "yr7": -5346.993653,
                "yr8": -5259.296898,
                "yr9": -4164.44485,
                "yr10": -16248.40188,
                "yr11": -19988.96309,
                "yr12": -23682.52848,
                "yr13": -19914.93398,
                "yr14": -23087.83164,
                "yr15": -25382.01653,
                "yr16": -26136.76202,
                "yr17": -31217.74491,
                "yr18": -34685.94398,
                "yr19": -36863.66616,
                "yr20": -12631.33478
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
