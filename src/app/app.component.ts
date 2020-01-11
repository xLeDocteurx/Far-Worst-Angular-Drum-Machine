import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DrumKit } from './drumkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	appName: string = 'Far Worst Angular Drum Machine';

	constructor() { }

}
