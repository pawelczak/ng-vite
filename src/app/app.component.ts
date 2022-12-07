import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	template: ` {{timer$ | async}}  `,
	standalone: true,
	imports: [CommonModule]
})
export class AppComponent {

	timer$ = timer(0, 1000);

}
