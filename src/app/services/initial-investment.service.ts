import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IInitialInvestment } from '../interfaces/iinitial-investment'

@Injectable({
    providedIn: 'root'
})
export class InitialInvestmentDataService {

    private initialInvestmentData = new BehaviorSubject<IInitialInvestment>({
        name: "David Reid",
        postCode: "SW1A 0AA",
        propertyPurchasePrice: 350000,
        valuationSurvey: 750,
        legalConveyancing: 2500,
        adviserFees: 10500,
        establishmentCharge: 7000,
        netSaleProceeds: 329250,
        saleProceedsWithdrawn: 36750,
        investmentAmount: 292500,
        propertyFundPurchased: 117000,
        incomePortfolioPurchased: 175500,
        aUnits: "A1",
        bUnits: "B36",
        adviserName: "Mr. G. Advice",
        lastAdvisorMeeting: "01/08/2019" 
    });

    cast = this.initialInvestmentData.asObservable();


    updateInitialInvestmentData(newInitialInvestmentData){
        this.initialInvestmentData.next(newInitialInvestmentData);
    }

    getInitialInvestmentData(){
        return this.initialInvestmentData;
    }



}
