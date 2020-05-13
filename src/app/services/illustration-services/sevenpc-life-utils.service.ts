import { Injectable, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SevenPcLifeUtilsService {

    private tableData: any[];
    private chartData: any[];

    constructor(private decimalpipe: DecimalPipe, private percentPipe: PercentPipe, private currencyPipe: CurrencyPipe) { }

    getChartData(): any {

        this.chartData = [
            292500,
            280638.3656,
            254917.7998,
            258365.2393,
            266618.8002,
            267438.8666,
            272676.2868,
            279659.15,
            290590.0747,
            264182.1129,
            228307.1482,
            226638.0279,
            229761.8735,
            220504.5167,
            211367.7682,
            189468.256,
            160248.5765,
            101278.8251,
            42599.68569,
            0
        ]
        return this.chartData;
    }

    getTableData(): any {

        this.tableData = [
            {
                "name": "Portfolio Investment Perfomance",
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
                "yr2": 112758.5531,
                "yr3": 101574.664,
                "yr4": 105053.2697,
                "yr5": 111297.2367,
                "yr6": 114162.1221,
                "yr7": 119763.6687,
                "yr8": 126921.3586,
                "yr9": 137093.3813,
                "yr10": 126976.5858,
                "yr11": 111462.6382,
                "yr12": 116048.6379,
                "yr13": 124880.0203,
                "yr14": 127899.0145,
                "yr15": 133084.6764,
                "yr16": 132296.6407,
                "yr17": 129312.298,
                "yr18": 101278.8251,
                "yr19": 42599.68569,
                "yr20": 0
            },
            {
                "name": "B36 Units",
                "yr1": 175500,
                "yr2": 167879.8125,
                "yr3": 153343.1357,
                "yr4": 153311.9695,
                "yr5": 155321.5635,
                "yr6": 153276.7445,
                "yr7": 152912.6181,
                "yr8": 152737.7914,
                "yr9": 153496.6934,
                "yr10": 137205.5271,
                "yr11": 116844.5099,
                "yr12": 110589.39,
                "yr13": 104881.8532,
                "yr14": 92605.50217,
                "yr15": 78283.09179,
                "yr16": 57171.6153,
                "yr17": 30936.27853,
                "yr18": 0,
                "yr19": 0,
                "yr20": 0
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
                "yr1": 292500,
                "yr2": 280638.3656,
                "yr3": 254917.7998,
                "yr4": 258365.2393,
                "yr5": 266618.8002,
                "yr6": 267438.8666,
                "yr7": 272676.2868,
                "yr8": 279659.15,
                "yr9": 290590.0747,
                "yr10": 264182.1129,
                "yr11": 228307.1482,
                "yr12": 226638.0279,
                "yr13": 229761.8735,
                "yr14": 220504.5167,
                "yr15": 211367.7682,
                "yr16": 189468.256,
                "yr17": 160248.5765,
                "yr18": 101278.8251,
                "yr19": 42599.68569,
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
                "yr2": 5141.319258,
                "yr3": 4696.133532,
                "yr4": 4695.179067,
                "yr5": 4756.722882,
                "yr6": 4694.1003,
                "yr7": 4682.94893,
                "yr8": 4677.594862,
                "yr9": 4700.836234,
                "yr10": 4201.919268,
                "yr11": 3578.363117,
                "yr12": 3386.800068,
                "yr13": 3212.006755,
                "yr14": 2836.043504,
                "yr15": 2397.419686,
                "yr16": 1750.880718,
                "yr17": 947.4235301,
                "yr18": 0,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "A Unit Gains",
                "yr1": 2593.678125,
                "yr2": -4166.268082,
                "yr3": 10405.3472,
                "yr4": 13721.47209,
                "yr5": 11080.11945,
                "yr6": 14464.40127,
                "yr7": 16889.62791,
                "yr8": 20968.37398,
                "yr9": 2068.715097,
                "yr10": -3126.985212,
                "yr11": 16807.72946,
                "yr12": 22475.96608,
                "yr13": 18712.08021,
                "yr14": 22752.0364,
                "yr15": 19285.42754,
                "yr16": 19455.82308,
                "yr17": 1374.817417,
                "yr18": 2129.800298,
                "yr19": 3054.992652,
                "yr20": 0
            },
            {
                "name": "B Unit Gains",
                "yr1": 0,
                "yr2": -6547.312688,
                "yr3": 8073.516096,
                "yr4": 10862.15304,
                "yr5": 7773.844254,
                "yr6": 10361.50793,
                "yr7": 11728.39781,
                "yr8": 14097.69815,
                "yr9": -1097.501357,
                "yr10": -4637.546817,
                "yr11": 9569.565363,
                "yr12": 12148.24449,
                "yr13": 8453.47737,
                "yr14": 9149.423614,
                "yr15": 6004.31314,
                "yr16": 4448.237528,
                "yr17": -402.1716209,
                "yr18": 0,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "Total Investment Return",
                "yr1": 7968.365625,
                "yr2": -5572.261511,
                "yr3": 23174.99683,
                "yr4": 29278.80419,
                "yr5": 23610.68658,
                "yr6": 29520.0095,
                "yr7": 33300.97465,
                "yr8": 39743.66699,
                "yr9": 5672.049973,
                "yr10": -3562.61276,
                "yr11": 29955.65794,
                "yr12": 38011.01064,
                "yr13": 30377.56433,
                "yr14": 34737.50351,
                "yr15": 27687.16037,
                "yr16": 25654.94133,
                "yr17": 1920.069326,
                "yr18": 2129.800298,
                "yr19": 3054.992652,
                "yr20": 0
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
                "yr2": -8679.346688,
                "yr3": -8369.255204,
                "yr4": -9407.542441,
                "yr5": -10846.44444,
                "yr6": -12097.85085,
                "yr7": -13829.50265,
                "yr8": -15989.44068,
                "yr9": -18861.73819,
                "yr10": -19168.06941,
                "yr11": -18670.12553,
                "yr12": -21673.41687,
                "yr13": -26086.59946,
                "yr14": -30137.75141,
                "yr15": -35643.31209,
                "yr16": -40875.08916,
                "yr17": -46911.32349,
                "yr18": -47267.071,
                "yr19": -48524.39083,
                "yr20": -51844.27903
            },
            {
                "name": "Administration Fees",
                "yr1": -3510,
                "yr2": -3370.176422,
                "yr3": -3057.051318,
                "yr4": -3108.918741,
                "yr5": -3222.674186,
                "yr6": -3245.199277,
                "yr7": -3325.581212,
                "yr8": -3431.198293,
                "yr9": -3591.367654,
                "yr10": -3276.704058,
                "yr11": -2840.384673,
                "yr12": -2846.623468,
                "yr13": -2922.018836,
                "yr14": -2844.54024,
                "yr15": -2779.101064,
                "yr16": -2556.165763,
                "yr17": -2249.047255,
                "yr18": -1519.182376,
                "yr19": -638.9952853,
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
                "yr2": -20148.30436,
                "yr3": -19727.5573,
                "yr4": -21025.24323,
                "yr5": -22790.62022,
                "yr6": -24282.58927,
                "yr7": -26318.11148,
                "yr8": -28812.74228,
                "yr9": -32080.01174,
                "yr10": -32312.35201,
                "yr11": -31624.77821,
                "yr12": -34887.16504,
                "yr13": -39634.92112,
                "yr14": -43874.25204,
                "yr15": -49586.67255,
                "yr16": -54874.62081,
                "yr17": -60889.82078,
                "yr18": -60808.93967,
                "yr19": -61486.63956,
                "yr20": -64475.61381
            },
            {
                "name": "Portfolio Gains/Losses",
                "yr1": -11861.63438,
                "yr2": -25720.56587,
                "yr3": 3447.439523,
                "yr4": 8253.560961,
                "yr5": 820.0663579,
                "yr6": 5237.420223,
                "yr7": 6982.863169,
                "yr8": 10930.92471,
                "yr9": -26407.96176,
                "yr10": -35874.96477,
                "yr11": -1669.120269,
                "yr12": 3123.845597,
                "yr13": -9257.356787,
                "yr14": -9136.748525,
                "yr15": -21899.51219,
                "yr16": -29219.67948,
                "yr17": -58969.75145,
                "yr18": -58679.13937,
                "yr19": -58431.6469,
                "yr20": -64475.61381
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
