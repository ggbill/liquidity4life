import { Injectable, OnInit } from '@angular/core';
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class OnePcLifeUtilsService {

    private tableData: any[];
    private chartData: any[];

    constructor(private decimalpipe: DecimalPipe, private percentPipe: PercentPipe, private currencyPipe: CurrencyPipe) { }

    getChartData(): any {

        this.chartData = [
            292500,
            289187.5194,
            287784.4937,
            287018.7601,
            298267.2641,
            301351.2355,
            289984.8156,
            271686.8304,
            255637.559,
            234988.108,
            212581.892,
            197503.9156,
            181960.0656,
            164571.4312,
            128847.9103,
            95032.82225,
            63076.49696,
            31398.2675,
            64.08151754,
            0
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
                "yr2": 116569.2069,
                "yr3": 117406.5377,
                "yr4": 118870.4378,
                "yr5": 127653.0203,
                "yr6": 132313.7356,
                "yr7": 128811.6185,
                "yr8": 121390.5749,
                "yr9": 115577.1451,
                "yr10": 107225.0813,
                "yr11": 98026.79818,
                "yr12": 93662.23139,
                "yr13": 89552.36597,
                "yr14": 84951.43411,
                "yr15": 68837.49954,
                "yr16": 53990.72725,
                "yr17": 40454.89615,
                "yr18": 27217.6996,
                "yr19": 64.08151754,
                "yr20": 0
            },
            {
                "name": "F36 Units",
                "yr1": 175500,
                "yr2": 172618.3125,
                "yr3": 170377.956,
                "yr4": 168148.3223,
                "yr5": 170614.2438,
                "yr6": 169037.4998,
                "yr7": 161173.1972,
                "yr8": 150296.2556,
                "yr9": 140060.4139,
                "yr10": 127763.0267,
                "yr11": 114555.0938,
                "yr12": 103841.6842,
                "yr13": 92407.69967,
                "yr14": 79619.99713,
                "yr15": 60010.41072,
                "yr16": 41042.095,
                "yr17": 22621.6008,
                "yr18": 4180.567903,
                "yr19": 0,
                "yr20": 0
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
                "yr2": 289187.5194,
                "yr3": 287784.4937,
                "yr4": 287018.7601,
                "yr5": 298267.2641,
                "yr6": 301351.2355,
                "yr7": 289984.8156,
                "yr8": 271686.8304,
                "yr9": 255637.559,
                "yr10": 234988.108,
                "yr11": 212581.892,
                "yr12": 197503.9156,
                "yr13": 181960.0656,
                "yr14": 164571.4312,
                "yr15": 128847.9103,
                "yr16": 95032.82225,
                "yr17": 63076.49696,
                "yr18": 31398.2675,
                "yr19": 64.08151754,
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
                "yr2": 5286.43582,
                "yr3": 5217.824902,
                "yr4": 5149.54237,
                "yr5": 5225.061216,
                "yr6": 5176.773433,
                "yr7": 4935.929164,
                "yr8": 4602.822827,
                "yr9": 4289.350176,
                "yr10": 3912.742692,
                "yr11": 3508.249748,
                "yr12": 3180.151578,
                "yr13": 2829.985802,
                "yr14": 2438.362412,
                "yr15": 1837.818828,
                "yr16": 1256.914159,
                "yr17": 692.7865246,
                "yr18": 128.029892,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "A Unit Gains",
                "yr1": 6404.331881,
                "yr2": 7992.121648,
                "yr3": 9027.662216,
                "yr4": 16824.66255,
                "yr5": 13598.17179,
                "yr6": 6204.673956,
                "yr7": 2675.73989,
                "yr8": 4484.582107,
                "yr9": 2280.153612,
                "yr10": 1641.25842,
                "yr11": 6653.765253,
                "yr12": 7513.766495,
                "yr13": 7762.496539,
                "yr14": -2907.82541,
                "yr15": -1908.794385,
                "yr16": -773.9774776,
                "yr17": -509.7834533,
                "yr18": -108.1928141,
                "yr19": -0.307838895,
                "yr20": 0
            },
            {
                "name": "F Unit Gains",
                "yr1": 4738.5,
                "yr2": 5869.022625,
                "yr3": 6474.362328,
                "yr4": 11854.45672,
                "yr5": 8957.247798,
                "yr6": 3718.824997,
                "yr7": 1369.972176,
                "yr8": 2479.888217,
                "yr9": 1050.453104,
                "yr10": 638.8151334,
                "yr11": 3608.485455,
                "yr12": 3894.063157,
                "yr13": 3742.511836,
                "yr14": -1711.829938,
                "yr15": -1110.192598,
                "yr16": -492.50514,
                "yr17": -260.1484092,
                "yr18": -31.35425927,
                "yr19": 0,
                "yr20": 0
            },
            {
                "name": "Total Investment Return",
                "yr1": 16517.51938,
                "yr2": 19147.58009,
                "yr3": 20719.84945,
                "yr4": 33828.66164,
                "yr5": 27780.48081,
                "yr6": 15100.27239,
                "yr7": 8981.64123,
                "yr8": 11567.29315,
                "yr9": 7619.956893,
                "yr10": 6192.816246,
                "yr11": 13770.50046,
                "yr12": 14587.98123,
                "yr13": 14334.99418,
                "yr14": -2181.292937,
                "yr15": -1181.168155,
                "yr16": -9.568458148,
                "yr17": -77.14533798,
                "yr18": -11.5171813,
                "yr19": -0.307838895,
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
                "yr2": -8977.103325,
                "yr3": -9719.45464,
                "yr4": -10606.8358,
                "yr5": -12354.07005,
                "yr6": -13852.07204,
                "yr7": -14572.69258,
                "yr8": -14900.64008,
                "yr9": -15508.2407,
                "yr10": -15845.44722,
                "yr11": -16118.25596,
                "yr12": -17321.35614,
                "yr13": -18829.96327,
                "yr14": -20579.79616,
                "yr15": -19836.99386,
                "yr16": -19283.10909,
                "yr17": -19038.59463,
                "yr18": -18849.91134,
                "yr19": -19027.05414,
                "yr20": -18305.87548
            },
            {
                "name": "Administration Fees",
                "yr1": -3510,
                "yr2": -3474.721228,
                "yr3": -3464.877625,
                "yr4": -3464.53979,
                "yr5": -3620.937742,
                "yr6": -3675.081033,
                "yr7": -3543.906249,
                "yr8": -3323.821179,
                "yr9": -3134.261316,
                "yr10": -2886.006486,
                "yr11": -2615.952911,
                "yr12": -2443.350313,
                "yr13": -2267.362486,
                "yr14": -2070.471483,
                "yr15": -1632.6666,
                "yr16": -1220.281859,
                "yr17": -833.0394503,
                "yr18": -450.071173,
                "yr19": -0.961222763,
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
                "yr2": -20550.6058,
                "yr3": -21485.58305,
                "yr4": -22580.15764,
                "yr5": -24696.50939,
                "yr6": -26466.69222,
                "yr7": -27279.62645,
                "yr8": -27616.56457,
                "yr9": -28269.40791,
                "yr10": -28599.03225,
                "yr11": -28848.47687,
                "yr12": -30131.83116,
                "yr13": -31723.62858,
                "yr14": -33542.22804,
                "yr15": -32633.91986,
                "yr16": -31946.75684,
                "yr17": -31601.08412,
                "yr18": -31322.6688,
                "yr19": -31351.26881,
                "yr20": -30937.21026
            },
            {
                "name": "Portfolio Gains/Losses",
                "yr1": -3312.480619,
                "yr2": -1403.025709,
                "yr3": -765.7336,
                "yr4": 11248.504,
                "yr5": 3083.971412,
                "yr6": -11366.41983,
                "yr7": -18297.98522,
                "yr8": -16049.27142,
                "yr9": -20649.45102,
                "yr10": -22406.216,
                "yr11": -15077.97642,
                "yr12": -15543.84993,
                "yr13": -17388.6344,
                "yr14": -35723.52097,
                "yr15": -33815.08801,
                "yr16": -31956.32529,
                "yr17": -31678.22945,
                "yr18": -31334.18598,
                "yr19": -31351.57665,
                "yr20": -30937.21026
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
