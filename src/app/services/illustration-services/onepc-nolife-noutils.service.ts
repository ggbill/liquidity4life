import { Injectable, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class OnePcNoLifeNoUtilsService {

    private tableData: any[];
    private chartData: any[];

    constructor(private decimalpipe: DecimalPipe, private percentPipe: PercentPipe, private currencyPipe: CurrencyPipe) { }

    getChartData(): any {

        this.chartData = [
            292500,
            297088.7694,
            304359.0587,
            313196.2259,
            336206.7548,
            351789.1224,
            352233.997,
            345476.9601,
            342487.3825,
            334710.9766,
            325582.0809,
            328685.6015,
            334013.1318,
            340119.1664,
            314976.6884,
            292901.2914,
            274899.8561,
            257896.3684,
            243094.318,
            228410.0833
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
                "yr2": 119729.7069,
                "yr3": 124054.5648,
                "yr4": 129416.6728,
                "yr5": 143206.6125,
                "yr6": 153165.5214,
                "yr7": 154407.9667,
                "yr8": 151419.3379,
                "yr9": 150766.7184,
                "yr10": 147308.9638,
                "yr11": 143083.5073,
                "yr12": 146326.4292,
                "yr13": 151179.2203,
                "yr14": 156857.1311,
                "yr15": 143352.253,
                "yr16": 131717.0391,
                "yr17": 122564.4589,
                "yr18": 114010.8675,
                "yr19": 106788.1433,
                "yr20": 99639.70672
            },
            {
                "name": "B36 Units",
                "yr1": 175500,
                "yr2": 177359.0625,
                "yr3": 180304.4939,
                "yr4": 183779.5531,
                "yr5": 193000.1423,
                "yr6": 198623.6011,
                "yr7": 197826.0303,
                "yr8": 194057.6222,
                "yr9": 191720.6641,
                "yr10": 187402.0128,
                "yr11": 182498.5737,
                "yr12": 182359.1723,
                "yr13": 182833.9115,
                "yr14": 183262.0352,
                "yr15": 171624.4354,
                "yr16": 161184.2523,
                "yr17": 152335.3972,
                "yr18": 143885.5009,
                "yr19": 136306.1747,
                "yr20": 128770.3766
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
                "yr2": 297088.7694,
                "yr3": 304359.0587,
                "yr4": 313196.2259,
                "yr5": 336206.7548,
                "yr6": 351789.1224,
                "yr7": 352233.997,
                "yr8": 345476.9601,
                "yr9": 342487.3825,
                "yr10": 334710.9766,
                "yr11": 325582.0809,
                "yr12": 328685.6015,
                "yr13": 334013.1318,
                "yr14": 340119.1664,
                "yr15": 314976.6884,
                "yr16": 292901.2914,
                "yr17": 274899.8561,
                "yr18": 257896.3684,
                "yr19": 243094.318,
                "yr20": 228410.0833
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
                "yr2": 5431.621289,
                "yr3": 5521.825126,
                "yr4": 5628.248815,
                "yr5": 5910.629357,
                "yr6": 6082.847783,
                "yr7": 6058.422179,
                "yr8": 5943.01468,
                "yr9": 5871.445337,
                "yr10": 5739.186642,
                "yr11": 5589.018819,
                "yr12": 5584.749652,
                "yr13": 5599.288541,
                "yr14": 5612.399829,
                "yr15": 5255.998335,
                "yr16": 4936.267726,
                "yr17": 4665.271538,
                "yr18": 4406.493464,
                "yr19": 4174.3766,
                "yr20": 3943.592783
            },
            {
                "name": "A Unit Gains",
                "yr1": 6404.331881,
                "yr2": 8177.321312,
                "yr3": 9473.934177,
                "yr4": 18221.76941,
                "yr5": 15113.04046,
                "yr6": 6984.788092,
                "yr7": 2960.776975,
                "yr8": 5311.276516,
                "yr9": 2641.45034,
                "yr10": 1877.810733,
                "yr11": 9314.578833,
                "yr12": 11290.17403,
                "yr13": 12596.69894,
                "yr14": -6020.377104,
                "yr15": -4641.509368,
                "yr16": -2567.061892,
                "yr17": -2249.765047,
                "yr18": -1179.104567,
                "yr19": -1295.150693,
                "yr20": 179.2400565
            },
            {
                "name": "B Unit Gains",
                "yr1": 4738.5,
                "yr2": 6030.208125,
                "yr3": 6851.570768,
                "yr4": 12956.4585,
                "yr5": 10132.50747,
                "yr6": 4369.719224,
                "yr7": 1681.521258,
                "yr8": 3201.950766,
                "yr9": 1437.90498,
                "yr10": 937.0100639,
                "yr11": 5748.705071,
                "yr12": 6838.468962,
                "yr13": 7404.773417,
                "yr14": -3940.133758,
                "yr15": -3175.052055,
                "yr16": -1934.211027,
                "yr17": -1751.857067,
                "yr18": -1079.141256,
                "yr19": -1158.602485,
                "yr20": -193.1555649
            },
            {
                "name": "Total Investment Return",
                "yr1": 16517.51938,
                "yr2": 19639.15073,
                "yr3": 21847.33007,
                "yr4": 36806.47672,
                "yr5": 31156.17729,
                "yr6": 17437.3551,
                "yr7": 10700.72041,
                "yr8": 14456.24196,
                "yr9": 9950.800658,
                "yr10": 8554.007438,
                "yr11": 20652.30272,
                "yr12": 23713.39265,
                "yr13": 25600.7609,
                "yr14": -4348.111032,
                "yr15": -2560.563088,
                "yr16": 434.9948069,
                "yr17": 663.6494235,
                "yr18": 2148.24764,
                "yr19": 1720.623422,
                "yr20": 3929.677274
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
                "yr2": -8799.3252,
                "yr3": -9346.299413,
                "yr4": -10016.90221,
                "yr5": -11495.70906,
                "yr6": -12708.7617,
                "yr7": -13163.37756,
                "yr8": -13233.95327,
                "yr9": -13548.49913,
                "yr10": -13599.24849,
                "yr11": -13577.54379,
                "yr12": -14367.37416,
                "yr13": -15398.69893,
                "yr14": -16608.88958,
                "yr15": -15648.30582,
                "yr16": -14848.83198,
                "yr17": -14305.31631,
                "yr18": -13801.27998,
                "yr19": -13439.97423,
                "yr20": -13063.20269
            },
            {
                "name": "Administration Fees",
                "yr1": -3510,
                "yr2": -3569.536228,
                "yr3": -3663.863411,
                "yr4": -3779.045623,
                "yr5": -4078.100611,
                "yr6": -4283.718831,
                "yr7": -4294.379803,
                "yr8": -4211.86629,
                "yr9": -4178.707416,
                "yr10": -4083.654585,
                "yr11": -3971.238346,
                "yr12": -4018.488161,
                "yr13": -4096.02742,
                "yr14": -4185.47732,
                "yr15": -3866.52815,
                "yr16": -3587.59811,
                "yr17": -3361.820856,
                "yr18": -3149.018021,
                "yr19": -2964.883897,
                "yr20": -2782.299367
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
                "yr2": -12368.86143,
                "yr3": -13010.16282,
                "yr4": -13795.94783,
                "yr5": -15573.80967,
                "yr6": -16992.48053,
                "yr7": -17457.75736,
                "yr8": -17445.81956,
                "yr9": -17727.20654,
                "yr10": -17682.90307,
                "yr11": -17548.78213,
                "yr12": -18385.86233,
                "yr13": -19494.72635,
                "yr14": -20794.3669,
                "yr15": -19514.83397,
                "yr16": -18436.43009,
                "yr17": -17667.13717,
                "yr18": -16950.298,
                "yr19": -16404.85813,
                "yr20": -15845.50205
            },
            {
                "name": "Portfolio Gains/Losses",
                "yr1": 4588.769381,
                "yr2": 7270.289298,
                "yr3": 8837.167247,
                "yr4": 23010.52889,
                "yr5": 15582.36762,
                "yr6": 444.8745694,
                "yr7": -6757.036946,
                "yr8": -2989.577602,
                "yr9": -7776.405885,
                "yr10": -9128.895634,
                "yr11": 3103.520587,
                "yr12": 5327.530321,
                "yr13": 6106.034544,
                "yr14": -25142.47793,
                "yr15": -22075.39706,
                "yr16": -18001.43528,
                "yr17": -17003.48774,
                "yr18": -14802.05036,
                "yr19": -14684.23471,
                "yr20": -11915.82478
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
