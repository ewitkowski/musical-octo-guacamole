// https://angular.io/tutorial/toh-pt5

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StandingsComponent } from './standings/standings.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LeagueRulesComponent } from './league-rules/league-rules.component';

const routes: Routes = [
    { path: 'Contact', component: ContactListComponent },
    { path: 'Rules', component: LeagueRulesComponent },
    { path: 'News', component: NewsComponent },
    { path: 'Schedule', component: ScheduleComponent },
    { path: 'Standings', component: StandingsComponent },
    { path: '', redirectTo: '/News', pathMatch: 'full' }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }