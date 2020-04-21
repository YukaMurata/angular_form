import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-name-editor></app-name-editor>
    <app-profile-editor></app-profile-editor>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-form';
}
