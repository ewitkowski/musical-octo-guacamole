import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  teams: ITeam[] = [
    {
      teamNumber: '1',
      teamMemberA: 'Carl',
      teamMemberB: 'Hoovie'
    },
    {
      teamNumber: '2',
      teamMemberA: 'Ricky',
      teamMemberB: 'Bobbie'
    }
  ];

  schedule: ISchedule[] = [
    {
      matchup: '01',
      matchDate: '09/18/2018',
      teamA: '1',
      teamB: '2',
      result: 'Team 1 beat Team 2 3-2'
    },
    {
      matchup: '02',
      matchDate: '09/19/2018',
      teamA: '2',
      teamB: '1',
      result: 'Team 2 beat Team 1 3-2'
    },
    {
      matchup: '03',
      matchDate: '09/20/2018',
      teamA: '2',
      teamB: '1',
      result: 'Team 2 beat Team 1 3-2'
    },
    {
      matchup: '04',
      matchDate: '09/21/2018',
      teamA: '1',
      teamB: '2',
      result: 'Team 1 beat Team 2 3-2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
// Datatable Help: https://medium.com/apprendre-le-web-avec-lior/angular-5-and-jquery-datatables-fd1dd2d81d99
  teamSelectChange(event) {
  // alert(event.target.value);

  }

}
