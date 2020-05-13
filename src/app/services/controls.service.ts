import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  private controls: any = {
    name: "David Reid",
    riskProfile: 2,
    product: "Home Drawdown",
    portfolioValue: "£292,500",
    plan: "Purchase",
    lifestyleOptions: "Yes",
    holdings: "Unit A1, B36",
    utilityPayments: "No",
    application: "Sole",
    propertyCosts: "Fixed",
    adviserName: "Mr. P. Barnes",
    costReviewTerm: "5 years",
    adviserCPDProducts: "Home Drawdown",
    costReviewDate: "01/08/2023",
    adviserCPDDate: "01/08/2018",
    occupancyEndDate: "01/08/2018",
    adviserCustomerMeeting: "01/08/2018",
    occupancyNoticePeriod: "6 months",
    adviserNoticeDate: "01/08/2018",
    localAuthorityAdviserDate: "01/08/2037"
  }

  getControlsData():any {
    return this.controls;
 } 
}
