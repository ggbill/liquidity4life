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
        establishmentCharge: 3500,
        netSaleProceeds: 343250,
        saleProceedsWithdrawn: 50750,
        investmentAmount: 292500,
        propertyFundPurchased: 117000,
        incomePortfolioPurchased: 175500,
        aUnits: "A1",
        bUnits: "F36",
        adviserName: "Mr. G. Advice",
        lastAdvisorMeeting: "01/08/2022" 
    });

    cast = this.initialInvestmentData.asObservable();


    updateInitialInvestmentData(newInitialInvestmentData){
        this.initialInvestmentData.next(newInitialInvestmentData);
    }

    getInitialInvestmentData(){
        return this.initialInvestmentData;
    }



}
