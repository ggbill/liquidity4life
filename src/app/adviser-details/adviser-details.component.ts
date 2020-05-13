import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adviser-details',
  templateUrl: './adviser-details.component.html',
  styleUrls: ['./adviser-details.component.scss']
})
export class AdviserDetailsComponent implements OnInit {

    adviserData: any = {
        fullName: "Jack Smith",
        adviserCPDProducts: "Home Drawdown",
        officeNumber: "01234 456789",
        adviserCPDDate: "22/07/2018",
        mobileNumber: "07771 987654",
        nextCustomerMeeting: "31/07/2019",
        emailAddress: 'jack@adviser.com',
        adviserNoticeDate: '30/04/2019'

    };

  constructor() { }

  ngOnInit() {
  }

}
