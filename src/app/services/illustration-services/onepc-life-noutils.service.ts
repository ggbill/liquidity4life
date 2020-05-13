import { Injectable, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { element } from '@angular/core/src/render3/instructions';

@Injectable({
    providedIn: 'root'
})
export class OnePcLifeNoUtilsService {

    private tableData: any[];
    private chartData: any[];

    constructor(private decimalpipe: DecimalPipe, private percentPipe: PercentPipe, private currencyPipe: CurrencyPipe) { }

    getChartData(): any {

        this.chartData = [
            292500,
            293488.7694,
            296807.4934,
            301270.2281,
            318923.7913,
            328815.7823,
            323886.2378,
            311881.4465,
            302956.6243,
            289335.3988,
            274183.9914,
            269041.3721,
            264910.6019,
            260380.0813,
            230484.8783,
            203141.1415,
            178879.3114,
            155305.7381,
            133112.0551,
            110871.7301
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
                "yr2": 118289.7069,
                "yr3": 121025.7695,
                "yr4": 124612.6369,
                "yr5": 136123.1806,
                "yr6": 143672.24,
                "yr7": 142759.9048,
                "yr8": 137762.0775,
                "yr9": 134772.6741,
                "yr10": 129104.6706,
                "yr11": 122639.3231,
                "yr12": 122452.2017,
                "yr13": 123270.1494,
                "yr14": 124329.4637,
                "yr15": 109699.8582,
                "yr16": 96676.49348,
                "yr17": 85617.64805,
                "yr18": 75037.50953,
                "yr19": 65389.48413,
                "yr20": 55784.88529
            },
            {
                "name": "B36 Units",
                "yr1": 175500,
                "yr2": 175199.0625,
                "yr3": 175781.7239,
                "yr4": 176657.5912,
                "yr5": 182800.6107,
                "yr6": 185143.5422,
                "yr7": 181126.3331,
                "yr8": 174119.369,
                "yr9": 168183.9503,
                "yr10": 160230.7282,
                "yr11": 151544.6683,
                "yr12": 146589.1704,
                "yr13": 141640.4524,
                "yr14": 136050.6176,
                "yr15": 120785.0202,
                "yr16": 106464.648,
                "yr17": 93261.66335,
                "yr18": 80268.22858,
                "yr19": 67722.57096,
                "yr20": 55086.84485
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
                "yr2": 293488.7694,
                "yr3": 296807.4934,
                "yr4": 301270.2281,
                "yr5": 318923.7913,
                "yr6": 328815.7823,
                "yr7": 323886.2378,
                "yr8": 311881.4465,
                "yr9": 302956.6243,
                "yr10": 289335.3988,
                "yr11": 274183.9914,
                "yr12": 269041.3721,
                "yr13": 264910.6019,
                "yr14": 260380.0813,
                "yr15": 230484.8783,
                "yr16": 203141.1415,
                "yr17": 178879.3114,
                "yr18": 155305.7381,
                "yr19": 133112.0551,
                "yr20": 110871.7301
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
                "yr2": 5365.471289,
                "yr3": 5383.315295,
                "yr4": 5410.13873,
                "yr5": 5598.268704,
                "yr6": 5670.020981,
                "yr7": 5546.99395,
                "yr8": 5332.405676,
                "yr9": 5150.633476,
                "yr10": 4907.066052,
                "yr11": 4641.055466,
                "yr12": 4489.293343,
                "yr13": 4337.738856,
                "yr14": 4166.550163,
                "yr15": 3699.041243,
                "yr16": 3260.479845,
                "yr17": 2856.13844,
                "yr18": 2458.2145,
                "yr19": 2074.003736,
                "yr20": 1687.034624
            },
            {
                "name": "A Unit Gains",
                "yr1": 6404.331881,
                "yr2": 8093.146044,
                "yr3": 9271.479451,
                "yr4": 17587.29362,
                "yr5": 14426.97421,
                "yr6": 6636.326409,
                "yr7": 2841.263172,
                "yr8": 4949.286685,
                "yr9": 2496.654342,
                "yr10": 1796.03167,
                "yr11": 8138.571736,
                "yr12": 9618.605307,
                "yr13": 10459.21536,
                "yr14": -4537.657534,
                "yr15": -3320.633957,
                "yr16": -1658.425443,
                "yr17": -1348.590038,
                "yr18": -560.0321488,
                "yr19": -583.7004056,
                "yr20": 295.5577506
            },
            {
                "name": "B Unit Gains",
                "yr1": 4738.5,
                "yr2": 5956.768125,
                "yr3": 6679.705508,
                "yr4": 12454.36018,
                "yr5": 9597.032064,
                "yr6": 4073.157929,
                "yr7": 1539.573831,
                "yr8": 2872.969589,
                "yr9": 1261.379627,
                "yr10": 801.1536412,
                "yr11": 4773.65705,
                "yr12": 5497.093889,
                "yr13": 5736.438324,
                "yr14": -2925.088277,
                "yr15": -2234.522873,
                "yr16": -1277.575776,
                "yr17": -1072.509129,
                "yr18": -602.0117144,
                "yr19": -575.6418532,
                "yr20": -82.63026727
            },
            {
                "name": "Total Investment Return",
                "yr1": 16517.51938,
                "yr2": 19415.38546,
                "yr3": 21334.50025,
                "yr4": 35451.79253,
                "yr5": 29622.27498,
                "yr6": 16379.50532,
                "yr7": 9927.830953,
                "yr8": 13154.66195,
                "yr9": 8908.667445,
                "yr10": 7504.251363,
                "yr11": 17553.28425,
                "yr12": 19604.99254,
                "yr13": 20533.39254,
                "yr14": -3296.195648,
                "yr15": -1856.115587,
                "yr16": 324.4786257,
                "yr17": 435.0392734,
                "yr18": 1296.170637,
                "yr19": 914.6614769,
                "yr20": 1899.962107
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
                "name": "Property Costs",
                "yr1": -8418.75,
                "yr2": -8880.3252,
                "yr3": -9516.311746,
                "yr4": -10285.65762,
                "yr5": -11886.70382,
                "yr6": -13229.46117,
                "yr7": -13805.06411,
                "yr8": -13992.59052,
                "yr9": -14440.21295,
                "yr10": -14620.87476,
                "yr11": -14732.56266,
                "yr12": -15709.57602,
                "yr13": -16956.85659,
                "yr14": -18410.91941,
                "yr15": -17547.56743,
                "yr16": -16857.64143,
                "yr17": -16447.51098,
                "yr18": -16083.78298,
                "yr19": -15882.14707,
                "yr20": -15668.30913
            },
            {
                "name": "Administration Fees",
                "yr1": -3510,
                "yr2": -3526.336228,
                "yr3": -3573.203782,
                "yr4": -3635.765466,
                "yr5": -3869.853816,
                "yr6": -4006.519023,
                "yr7": -3952.661902,
                "yr8": -3807.624852,
                "yr9": -3703.429614,
                "yr10": -3538.877341,
                "yr11": -3355.036529,
                "yr12": -3302.674729,
                "yr13": -3265.456766,
                "yr14": -3225.448132,
                "yr15": -2853.348074,
                "yr16": -2514.793882,
                "yr17": -2216.881354,
                "yr18": -1928.244929,
                "yr19": -1658.067972,
                "yr20": -1387.641728
            },
            {
                "name": "Total Cost",
                "yr1": -15528.75,
                "yr2": -16096.66143,
                "yr3": -16871.76553,
                "yr4": -17798.22934,
                "yr5": -19730.28404,
                "yr6": -21309.04976,
                "yr7": -21932.62232,
                "yr8": -22079.48408,
                "yr9": -22529.89299,
                "yr10": -22655.6588,
                "yr11": -22695.90355,
                "yr12": -23735.76272,
                "yr13": -25063.91313,
                "yr14": -26599.00731,
                "yr15": -25487.62126,
                "yr16": -24586.30871,
                "yr17": -24008.61257,
                "yr18": -23489.85365,
                "yr19": -23154.98643,
                "yr20": -22811.09153
            },
            {
                "name": "Portfolio Gains/Losses",
                "yr1": 988.7693811,
                "yr2": 3318.72403,
                "yr3": 4462.734726,
                "yr4": 17653.5632,
                "yr5": 9891.990941,
                "yr6": -4929.544438,
                "yr7": -12004.79137,
                "yr8": -8924.822132,
                "yr9": -13621.22555,
                "yr10": -15151.40743,
                "yr11": -5142.619295,
                "yr12": -4130.770183,
                "yr13": -4530.520588,
                "yr14": -29895.20296,
                "yr15": -27343.73685,
                "yr16": -24261.83008,
                "yr17": -23573.57329,
                "yr18": -22193.68302,
                "yr19": -22240.32495,
                "yr20": -20911.12942
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
