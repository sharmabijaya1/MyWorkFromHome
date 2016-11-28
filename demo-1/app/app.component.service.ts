import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class service{
    constructor(private http : Http){
  }
getData(){
     let headersObj = new Headers();
    //headers.append('Accept', 'application/json');
        headersObj.append('Access-Control-Allow-Headers', 'Content-Type');
        headersObj.append('Access-Control-Allow-Methods', 'GET');
        headersObj.append('Access-Control-Allow-Origin', '*');
 this.http
      .get(`http://localhost:3000/app/jsonData.json`, {headers: headersObj})
      .map((response)=>{
          
          console.log(response.json().data)
      })
      .catch((rr)=>{ alert ();console.log(rr);return rr;}).subscribe(
                       heroes => console.log( heroes),
                       error =>  console.log(error));
     

}
getLogedUserdetails():any{
// return {
//   "userId":"david",
//   "userName":"David Skiff",
//   "designation":"MSER Program Director",
//   "userImage":"",  //base64String
//   "userImageUrl":"app/resources/images/user.png"
// }
// return {
//   "userId":"edward",
//   "userName":" Edward Exec",
//   "designation":"Executive View",
//   "userImage":"",  //base64String
//   "userImageUrl":"app/resources/images/user.png"
// }
return {
  "userId":"advisor",
  "userName":"Joseph Biddle",
  "designation":"Service Advisor",
  "dealership":"Michigan",
  "userImage":"",  //base64String
  "userImageUrl":"app/resources/images/user.png"
}
}
getContentData():any{
//     return [
//   {
//     "order": 1,
//     "title": "Enrollment",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel1.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "2035/2635",
//         "key": "Total Dealerships Enrolled",
//         "type": "number"
//       },
//       {
//         "value": "77",
//         "key": "Express lane Validated",
//         "type": "number"
//       },
//       {
//         "value": "695",
//         "key": "express lane enrolled",
//         "type": "number"
//       },
//       {
//         "value": "1632/2035",
//         "key": "parts counter enrolled",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 2,
//     "title": "MOPAR PART SALES(qualifying parts)",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel5.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "47325",
//         "key": "TOP 3 Parts sold MTD",
//         "type": "number"
//       },
//       {
//         "value": "167451",
//         "key": "Earnings months to date",
//         "type": "number"
//       },
//       {
//         "value": "2852737",
//         "key": "Earnings YTD",
//         "type": "number"
//       },
//       {
//         "value": "15553",
//         "key": "prior month total parts sold",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 3,
//     "title": "MVP PLAN SALES(qualifying plans)",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel2.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "21536",
//         "key": "plan month to date",
//         "type": "number"
//       },
//       {
//         "value": "96960",
//         "key": "plans years to date",
//         "type": "number"
//       },
//       {
//         "value": "2852737",
//         "key": "Earnings YTD",
//         "type": "number"
//       },
//       {
//         "value": "15553",
//         "key": "prior month total plans sold",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 4,
//     "title": "MAGNETI MARELL(qualifying parts)",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel6.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "1316",
//         "key": "PARTS month to date",
//         "type": "number"
//       },
//       {
//         "value": "6947",
//         "key": "PARTS years to date",
//         "type": "number"
//       },
//       {
//         "value": "229086",
//         "key": "Earnings YTD",
//         "type": "number"
//       },
//       {
//         "value": "1281",
//         "key": "prior month total parts sold",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 5,
//     "title": "EXPRESS LANE(qualifying parts)",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel3.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "8655",
//         "key": "PARTS month to date",
//         "type": "number"
//       },
//       {
//         "value": "5481",
//         "key": "PARTS years to date",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Earnings to Date",
//         "type": "number"
//       },
//       {
//         "value": "14853",
//         "key": "prior month total parts sold",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 6,
//     "title": "EXPRESS LANE(qualifying parts)",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel7.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "5499",
//         "key": "PARTS month to date",
//         "type": "number"
//       },
//       {
//         "value": "34386",
//         "key": "PARTS years to date",
//         "type": "number"
//       },
//       {
//         "value": "439107",
//         "key": "Earnings YTD",
//         "type": "number"
//       },
//       {
//         "value": "5072",
//         "key": "prior month total parts sold",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 7,
//     "title": "REWARDING EXCELLENCE VISA PREPAID CARD",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel4.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "601385",
//         "key": "Excellence card awards MSER MTD",
//         "type": "number"
//       },
//       {
//         "value": "2815200",
//         "key": "Excellence card awards MSER YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 8,
//     "title": "WINNING LIFESTYLE",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel15.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "8655",
//         "key": "DEALERS ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "5481",
//         "key": "# of Projected Trip winners",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Projected Excellence Card Winners",
//         "type": "number"
//       },
//       {
//         "value": "",
//         "key": "Program Dates",
//         "type": "DATE"
//       },
//       {
//         "value": "442240",
//         "key": "Projected Sales",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Projected Trip Rank",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Dealership National Rank",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 9,
//     "title": "DEALER SITE",
//     "title_image": "app/resources/images/ph6.png",
//     "data_image": "app/resources/images/panel17.png",
//     "type": "tile",
//     "data": [
//       {
//         "value": "",
//         "key": "Learn MORE",
//         "type": "string"
//       },
//       {
//         "value": "",
//         "key": "visit mopar.dealer.com",
//         "type": "string"
//       }
//     ]
//   }
// ];
// return [
//   {
//     "order": 1,
//     "title": "",
//     "title_image": "app/resources/images/ph1.png",
//     "data_image": "app/resources/images/panel1.png",
//     "data": [
//       {
//         "value": "8655",
//         "key": "Current Year's Program Level",
//         "type": "number"
//       },
//       {
//         "value": "5481",
//         "key": "Current Year's Program Points",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Check Status",
//         "type": "number"
//       },
//       {
//         "value": "",
//         "key": "Total Certified Participants YTD",
//         "type": "NUMBER"
//       },
//       {
//         "value": "442240",
//         "key": "Master Certified",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Certified Specialists",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Certified",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Dealership Rank for Total Master Certified",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Dealership Rank for Total Certified",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 2,
//     "title": "BRAIN BOOST",
//     "title_image": "/app/resources/images/ph5.png",
//     "data_image": "/app/resources/images/panel2.png",
//     "data": [
//       {
//         "value": "0",
//         "key": "points awarded last week",
//         "type": "number"
//       },
//       {
//         "value": "125",
//         "key": "2016 program points",
//         "type": "number"
//       },
//       {
//         "value": "50",
//         "key": "Excellence card awards YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 3,
//     "title": "RAM EXPERT",
//     "title_image": "/app/resources/images/ph7.png",
//     "data_image": "/app/resources/images/panel3.png",
//     "data": [
//       {
//         "value": "1600",
//         "key": "Certified participants ",
//         "type": "number"
//       },
//       {
//         "value": "125",
//         "key": "total points earned YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 4,
//     "title": "PERFORMANCE INSTITUTE/ Most Valuable Professional",
//     "title_image": "/app/resources/images/ph2.png",
//     "data_image": "app/resources/images/panel1.png",
//     "data": [
//       {
//         "value": "4WD Systems / 10 CDJR Technology / 15",
//         "key": "2017 Completed Competency",
//         "type": "string"
//       },
//       {
//         "value": "15",
//         "key": "CDJR Technology",
//         "type": "number"
//       },
//       {
//         "value": "9000",
//         "key": "2017 Excellence Card Award YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 5,
//     "title": "MSER-GENERIC",
//     "title_image": "/app/resources/images/ph6.png",
//     "data_image": "/app/resources/images/panel5.png",
//     "data": [
//       {
//         "value": "2030",
//         "key": "DEALERS ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "601385",
//         "key": "EXCELLENCE CARD AWARDS MTD",
//         "type": "number"
//       },
//       {
//         "value": "2815200",
//         "key": "EXCELLENCE CARD AWARDS YTD",
//         "type": "number"
//       },
//       {
//         "value": "TOP PERFORMERS",
//         "key": "BC Dealers Advisors Techs",
//         "type": "string"
//       }
//     ]
//   },
//   {
//     "order": 6,
//     "title": "TOP ADVISORS",
//     "title_image": "/app/resources/images/TopAdvisor.png",
//     "data_image": "/app/resources/images/panel7.png",
//     "data": [
//       {
//         "value": "1579",
//         "key": "ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "Northeast 68.7%",
//         "key": "Top BC Enrolled",
//         "type": "string"
//       }
//     ]
//   },
//   {
//     "order": 7,
//     "title": "TOP TECH",
//     "title_image": "/app/resources/images/ph3.png",
//     "data_image": "/app/resources/images/page2/ph10.png",
//     "data": [
//       {
//         "value": "8655",
//         "key": "ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "Northeast 68.7%",
//         "key": "Top BC Enrolled",
//         "type": "string"
//       }
//     ]
//   },
//   {
//     "order": 8,
//     "title": "SERVICE INCENTIVE REWARDS",
//     "title_image": "/app/resources/images/ph4.png",
//     "data_image": "/app/resources/images/panel8.png",
//     "data": [
//       {
//         "value": "Northeast",
//         "key": "Top BC Enrolled",
//         "type": "string"
//       },
//       {
//         "value": "5481",
//         "key": "Participants Enrolled",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Dealership Excellence Card Awards YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 9,
//     "title": "REWARDING EXCELLENCE VISA PREPAID CARD",
//     "title_image": "/app/resources/images/page2/RewardingExcellence.jpg",
//     "data_image": "/app/resources/images/panel9.png",
//     "data": [
//       {
//         "value": "3,409,510",
//         "key": "Total Cash Awards YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 10,
//     "title": "WINNING LIFESTYLE",
//     "title_image": "/app/resources/images/page2/ph10.png",
//     "data_image": "/app/resources/images/page2/panel15.png",
//     "data": [
//       {
//         "value": "8655",
//         "key": "DEALERS ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "5481",
//         "key": "# of Projected Trip winners",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Projected Excellence Card Winners",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 11,
//     "title": "Customer First",
//     "title_image": "app/resources/images/page2/customersFirst.png",
//     "data_image": "app/resources/images/page2/panel14.png",
//     "data": [
//       {
//         "value": "8655",
//         "key": "Inaugral Winner",
//         "type": "number"
//       },
//       {
//         "value": "5481",
//         "key": "Projected Winners (Current Year)",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 12,
//     "title": "SUPER CELEBRATION",
//     "title_image": "/app/resources/images/page2/ph11.png",
//     "data_image": "/app/resources/images/page2/panel16.png",
//     "data": [
//       {
//         "value": "October-December 2016",
//         "key": "Program dates",
//         "type": "date"
//       },
//       {
//         "value": "125",
//         "key": "Vehicle Sold to Date",
//         "type": "number"
//       },
//       {
//         "value": "370,050",
//         "key": "Excellent Card Awards to Date",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 13,
//     "title": "",
//     "title_image": "/app/resources/images/page2/Dealer_Site_logo.png",
//     "data_image": "/app/resources/images/page2/panel17.png",
//     "data": [
//       {
//         "value": "",
//         "key": "Learn MORE",
//         "type": "string"
//       },
//       {
//         "value": "",
//         "key": "visit mopar.dealer.com",
//         "type": "string"
//       }
//     ]
//   }
// ]

// return[
//   {
//     "order": 1,
//     "title": "Performance Institute - Certified Professionals",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "62",
//         "key": "Total Certified Participants 2016",
//         "type": "NUMBER"
//       },
//       {
//         "value": "442240",
//         "key": "Master Certified",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Certified Specialists",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Certified",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Dealership Rank for Total Master Certified",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Dealership Rank for Total Certified",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 2,
//     "title": "BRAIN BOOST",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "5",
//         "key": "Tota; Participants last week",
//         "type": "number"
//       },
//       {
//         "value": "125",
//         "key": "2016 program points",
//         "type": "number"
//       },
//       {
//         "value": "50",
//         "key": "Excellence card awards YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 3,
//     "title": "PERFORMANCE INSTITUTE/ Most Valuable Professional",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "4WD Systems / 10 CDJR Technology / 15",
//         "key": "2017 Completed Competency",
//         "type": "string"
//       },
//       {
//         "value": "15",
//         "key": "CDJR Technology",
//         "type": "number"
//       },
//       {
//         "value": "9000",
//         "key": "2017 Excellence Card Award YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 4,
//     "title": "RAM EXPERT",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "1600",
//         "key": "Certified participants ",
//         "type": "number"
//       },
//       {
//         "value": "125",
//         "key": "total points earned YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 5,
//     "title": "TOP TECH",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "8655",
//         "key": "ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "Northeast 68.7%",
//         "key": "Top BC Enrolled",
//         "type": "string"
//       }
//     ]
//   },
//   {
//     "order": 6,
//     "title": "MSER-GENERIC",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "2030",
//         "key": "DEALERS ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "601385",
//         "key": "EXCELLENCE CARD AWARDS MTD",
//         "type": "number"
//       },
//       {
//         "value": "2815200",
//         "key": "EXCELLENCE CARD AWARDS YTD",
//         "type": "number"
//       },
//       {
//         "value": "TOP PERFORMERS",
//         "key": "BC Dealers Advisors Techs",
//         "type": "string"
//       }
//     ]
//   },
//   {
//     "order": 7,
//     "title": "SERVICE INCENTIVE REWARDS",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "Northeast",
//         "key": "Top BC Enrolled",
//         "type": "string"
//       },
//       {
//         "value": "5481",
//         "key": "Participants Enrolled",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Dealership Excellence Card Awards YTD",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 8,
//     "title": "TOP ADVISORS",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "1579",
//         "key": "ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "Northeast 68.7%",
//         "key": "Top BC Enrolled",
//         "type": "string"
//       }
//     ]
//   },
//   {
//     "order": 9,
//     "title": "WINNING LIFESTYLE",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "8655",
//         "key": "DEALERS ENROLLED",
//         "type": "number"
//       },
//       {
//         "value": "5481",
//         "key": "# of Projected Trip winners",
//         "type": "number"
//       },
//       {
//         "value": "442240",
//         "key": "Projected Excellence Card Winners",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 10,
//     "title": "Customer First",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "8655",
//         "key": "Inaugral Winner",
//         "type": "number"
//       },
//       {
//         "value": "5481",
//         "key": "Projected Winners (Current Year)",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 11,
//     "title": "SUPER CELEBRATION",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "October-December 2016",
//         "key": "Program dates",
//         "type": "date"
//       },
//       {
//         "value": "125",
//         "key": "Vehicle Sold to Date",
//         "type": "number"
//       },
//       {
//         "value": "370,050",
//         "key": "Excellent Card Awards to Date",
//         "type": "number"
//       }
//     ]
//   },
//   {
//     "order": 12,
//     "title": "DEALER SITE",
//     "title_image": "",
//     "data_image": "",
//     "data": [
//       {
//         "value": "",
//         "key": "Learn MORE",
//         "type": "string"
//       },
//       {
//         "value": "",
//         "key": "visit mopar.dealer.com",
//         "type": "string"
//       }
//     ]
//   }
// ]

return [
  {
    "order": 1,
    "title": "",
    "title_image": "/app/resources/images/page2/ph1.png",
    "data_image": "/app/resources/images/page2/panel12.png",
    "data": [
      {
        "value": "8655",
        "key": "DEALERS ENROLLED",
        "type": "number"
      },
      {
        "value": "5481",
        "key": "TOP PERFORMANCE",
        "type": "number"
      },
      {
        "value": "14823",
        "key": "EXCELLENCE CARD AWARDS YTD",
        "type": "number"
      },
      {
        "value": "442240",
        "key": "DEALERSHIP PARTICIPANTS ENROLLED",
        "type": "number"
      },
      {
        "value": "442240",
        "key": "BC Dealers Advisors Techs",
        "type": "number"
      }
    ]
  },
  {
    "order": 2,
    "title": "TOP TECH",
    "title_image": "/app/resources/images/page2/ph6.png",
    "data_image": "/app/resources/images/page2/panel5.png",
    "data": [
      {
        "value": "8655",
        "key": "ENROLLED",
        "type": "number"
      },
      {
        "value": "5481",
        "key": "Top BC Enrolled",
        "type": "number"
      }
    ]
  },
  {
    "order": 3,
    "title": "TOP ADVISOR",
    "title_image": "app/resources/images/page2/TopAdvisor.png",
    "data_image": "app/resources/images/panel4.png",
    "data": [
      {
        "value": "8655",
        "key": "ENROLLED",
        "type": "number"
      },
      {
        "value": "5481",
        "key": "TOP BC Enrolled",
        "type": "number"
      }
    ]
  },
  {
    "order": 4,
    "title": "SERVICE INCENTIVE REWARDS",
    "title_image": "app/resources/images/page2/ph4.png",
    "data_image": "app/resources/images/page2/panel10.png",
    "data": [
      {
        "value": "Northeast",
        "key": "Top BC YTD",
        "type": "string"
      },
      {
        "value": "5481",
        "key": "Participants Enrolled",
        "type": "number"
      },
      {
        "value": "442240",
        "key": "Dealership Excellence Card Awards YTD",
        "type": "number"
      }
    ]
  },
  {
    "order": 5,
    "title": "WINNING LIFESTYLE",
    "title_image": "",
    "data_image": "",
    "data": [
      {
        "value": "8655",
        "key": "DEALERS ENROLLED",
        "type": "number"
      },
      {
        "value1": "125",
        "value2": "250",
        "key": "Project Trip Winners",
        "type": "number"
      },
      {
        "value": "442240",
        "key": "Projected Excellence Card Winners",
        "type": "number"
      }
    ]
  },
  {
    "order": 6,
    "title": "REWARDING EXCELLENCE VISA PREPAID CARD",
    "title_image": "",
    "data_image": "",
    "data": [
      {
        "value": "3,409,510",
        "key": "Total Cash Awards YTD",
        "type": "number"
      }
    ]
  },
  {
    "order": 7,
    "title": "DEALER SITE",
    "title_image": "app/resources/images/page2/Dealer_Site_logo.png",
    "data_image": "app/resources/images/page2/panel17.png",
    "data": [
      {
        "value": "",
        "key": "Learn MORE",
        "type": "string"
      },
      {
        "value": "",
        "key": "visit mopar.dealer.com",
        "type": "string"
      }
    ]
  },
  {
    "order": 8,
    "title": "Customer First",
    "title_image": "app/resources/images/page2/customersFirst.png",
    "data_image": "app/resources/images/page2/panel14.png",
    "data": [
      {
        "value": "8655",
        "key": "Inaugral Winner",
        "type": "number"
      },
      {
        "value": "5481",
        "key": "Projected Winners (Current Year)",
        "type": "number"
      }
    ]
  }
]
}
}