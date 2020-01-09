import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E404Component } from './e404/e404.component'

import { HomeComponent } from './home/home.component'
import { DrumkitChoiceComponent } from './drumkit-choice/drumkit-choice.component'
import { PlayComponent } from './play/play.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			appName: 'lol'
		}
	},
	{
		path: 'choose-kit',
		component: DrumkitChoiceComponent
	},
	{
		path: 'play',
		component: PlayComponent
	},
	{
		path: '**',
		component: E404Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
