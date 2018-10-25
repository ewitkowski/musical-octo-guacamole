import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private assetImgSrcRoot = 'assets/img/icon/';
// give news an Interface type!
  news: any[] = [{
    icon: this.assetImgSrcRoot + 'like.svg',
    title: 'Welcome!',
    news: 'Welcome to the site!  We\'ll be starting the league soon, stay tuned on Facebook for more details!',
    postedDate: '9/3/2018 - 6:30 AM'
  },
  {
    icon: this.assetImgSrcRoot + 'airplane.svg',
    title: 'League Starting Next Week!',
    news: 'Welcome Back!  The league will be starting next week, please contact the commissioners (Mark and Carl) if you plan on playing, we\'ll have a meeting before the league starts to ensure that everyone is aware of the rules.',
    postedDate: '9/13/2018 - 6:30 PM'
  },
  {
    icon: this.assetImgSrcRoot + 'beacon.svg',
    title: 'League Meeting Tonight!',
    news: 'Note, we will be meeting tonight at 6:30 PM <strong>SHARP</strong> to setup league schedule and rules.  Please come by for a brief meeting, and perhaps some games of cards!',
    postedDate: '9/16/2018 - 6:30 AM'
  },
  {
    icon: this.assetImgSrcRoot + 'book.svg',
    title: 'Week 1 Complete!',
    news: 'Records for Week 1 have been posted, please see the site for more details and see you next week!',
    postedDate: '9/23/2018 - 6:30 AM'
  }]

  importantAnnouncement = {
    icon: this.assetImgSrcRoot + 'book.svg',
    title: 'No Cheating!',
    news: 'It has been brought to our attention that a number of you are talking across the table.  Per the rules cheating is strictly forbidden.  We will be enforcing anti-cheating measures starting next week, any violation will be dealt with swiftly including forfeiture of games or all matches played overall.',
    postedDate: '9/24/2018 - 9:30 AM'
  }

  constructor() { }

  ngOnInit() {
  }

}
