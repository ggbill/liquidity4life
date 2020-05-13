import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { ThreePcNoLifeNoUtilsService } from '../services/illustration-services/threepc-nolife-noutils.service';
import { ThreePcLifeNoUtilsService } from '../services/illustration-services/threepc-life-noutils.service';
import { ThreePcNoLifeUtilsService } from '../services/illustration-services/threepc-nolife-utils.service';
import { ThreePcLifeUtilsService } from '../services/illustration-services/threepc-life-utils.service';
import { OnePcNoLifeNoUtilsService } from '../services/illustration-services/onepc-nolife-noutils.service';
import { OnePcLifeNoUtilsService } from '../services/illustration-services/onepc-life-noutils.service';
import { OnePcNoLifeUtilsService } from '../services/illustration-services/onepc-nolife-utils.service';
import { OnePcLifeUtilsService } from '../services/illustration-services/onepc-life-utils.service';
import { SevenPcLifeUtilsService } from '../services/illustration-services/sevenpc-life-utils.service';
import { SevenPcNoLifeNoUtilsService } from '../services/illustration-services/sevenpc-nolife-noutils.service';
import { SevenPcLifeNoUtilsService } from '../services/illustration-services/sevenpc-life-noutils.service';
import { SevenPcNoLifeUtilsService } from '../services/illustration-services/sevenpc-nolife-utils.service';


interface IllustrationConfigData {
    isUtilitiesOptions: boolean,
    isLifestyleOptions: boolean,
    performancePercentage: number,
    illustrationTableData: any,
    illustrationChartData: any,
    illustrationChartLabel: string
};


@Injectable({
    providedIn: 'root'
})
export class IllustrationConfigService {

    constructor(
        private onePcNoLifeNoUtilsService: OnePcNoLifeNoUtilsService,
        private onePcLifeNoUtilsService: OnePcLifeNoUtilsService,
        private onePcNoLifeUtilsService: OnePcNoLifeUtilsService,
        private onePcLifeUtilsService: OnePcLifeUtilsService,
        private threePcNoLifeNoUtilsService: ThreePcNoLifeNoUtilsService,
        private threePcLifeNoUtilsService: ThreePcLifeNoUtilsService,
        private threePcNoLifeUtilsService: ThreePcNoLifeUtilsService,
        private threePcLifeUtilsService: ThreePcLifeUtilsService,
        private sevenPcNoLifeNoUtilsService: SevenPcNoLifeNoUtilsService,
        private sevenPcLifeNoUtilsService: SevenPcLifeNoUtilsService,
        private sevenPcNoLifeUtilsService: SevenPcNoLifeUtilsService,
        private sevenPcLifeUtilsService: SevenPcLifeUtilsService,

    ) { }



    private illustrationConfigDataLocal: IllustrationConfigData = {
        isUtilitiesOptions: false,
        isLifestyleOptions: false,
        performancePercentage: 7,
        illustrationTableData: this.sevenPcNoLifeNoUtilsService.getTableData(),
        illustrationChartData: this.sevenPcNoLifeNoUtilsService.getChartData(),
        illustrationChartLabel: "7%, No Lifestyle, No Utilities"
    };

    private illustrationConfigData = new BehaviorSubject<IllustrationConfigData>(this.illustrationConfigDataLocal);

    cast = this.illustrationConfigData.asObservable();

    getIllustrationConfigData() {


        return this.illustrationConfigData;
    }

    setIllustrationData() {
        if (this.illustrationConfigDataLocal.performancePercentage == 1) {

            if (this.illustrationConfigDataLocal.isLifestyleOptions == true && this.illustrationConfigDataLocal.isUtilitiesOptions == true) {
                this.illustrationConfigDataLocal.illustrationTableData = this.onePcLifeUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.onePcLifeUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "1%, Lifestyle Options: On, Utility Options: On";

            } else if (this.illustrationConfigDataLocal.isLifestyleOptions == false && this.illustrationConfigDataLocal.isUtilitiesOptions == true) {
                this.illustrationConfigDataLocal.illustrationTableData = this.onePcNoLifeUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.onePcNoLifeUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "1%, Lifestyle Options: Off, Utility Options: On";

            } else if (this.illustrationConfigDataLocal.isLifestyleOptions == true && this.illustrationConfigDataLocal.isUtilitiesOptions == false) {
                this.illustrationConfigDataLocal.illustrationTableData = this.onePcLifeNoUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.onePcLifeNoUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "1%, Lifestyle Options: On, Utility Options: Off";
            } else {
                this.illustrationConfigDataLocal.illustrationTableData = this.onePcNoLifeNoUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.onePcNoLifeNoUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "1%, Lifestyle Options: Off, Utility Options: Off";
            }

        } else if (this.illustrationConfigDataLocal.performancePercentage == 3) {

            if (this.illustrationConfigDataLocal.isLifestyleOptions == true && this.illustrationConfigDataLocal.isUtilitiesOptions == true) {
                this.illustrationConfigDataLocal.illustrationTableData = this.threePcLifeUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.threePcLifeUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "3%, Lifestyle Options: On, Utility Options: On";

            } else if (this.illustrationConfigDataLocal.isLifestyleOptions == false && this.illustrationConfigDataLocal.isUtilitiesOptions == true) {
                this.illustrationConfigDataLocal.illustrationTableData = this.threePcNoLifeUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.threePcNoLifeUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "3%, Lifestyle Options: Off, Utility Options: On";

            } else if (this.illustrationConfigDataLocal.isLifestyleOptions == true && this.illustrationConfigDataLocal.isUtilitiesOptions == false) {
                this.illustrationConfigDataLocal.illustrationTableData = this.threePcLifeNoUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.threePcLifeNoUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "3%, Lifestyle Options: On, Utility Options: Off";

            } else {
                this.illustrationConfigDataLocal.illustrationTableData = this.threePcNoLifeNoUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.threePcNoLifeNoUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "3%, Lifestyle Options: Off, Utility Options: Off";
            }

        } else {
            
            if (this.illustrationConfigDataLocal.isLifestyleOptions == true && this.illustrationConfigDataLocal.isUtilitiesOptions == true) {
                this.illustrationConfigDataLocal.illustrationTableData = this.sevenPcLifeUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.sevenPcLifeUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "7%, Lifestyle Options: On, Utility Options: On";

            } else if (this.illustrationConfigDataLocal.isLifestyleOptions == false && this.illustrationConfigDataLocal.isUtilitiesOptions == true) {
                this.illustrationConfigDataLocal.illustrationTableData = this.sevenPcNoLifeUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.sevenPcNoLifeUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "7%, Lifestyle Options: Off, Utility Options: Off";

            } else if (this.illustrationConfigDataLocal.isLifestyleOptions == true && this.illustrationConfigDataLocal.isUtilitiesOptions == false) {
                this.illustrationConfigDataLocal.illustrationTableData = this.sevenPcLifeNoUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.sevenPcLifeNoUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "7%, Lifestyle Options: On, Utility Options: Off";

            } else {
                this.illustrationConfigDataLocal.illustrationTableData = this.sevenPcNoLifeNoUtilsService.getTableData();
                this.illustrationConfigDataLocal.illustrationChartData = this.sevenPcNoLifeNoUtilsService.getChartData();
                this.illustrationConfigDataLocal.illustrationChartLabel = "7%, Lifestyle Options: Off, Utility Options: Off";
            }

        }

        this.illustrationConfigData.next(this.illustrationConfigDataLocal);

    }

}
