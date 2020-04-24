import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  template: `
    <div class="container" [hidden]="submitted">
      <h1>Hero Form</h1>
      <form #heroForm="ngForm" (ngSubmit)="onSubmit()" #heroForm="ngForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            [(ngModel)]="model.name"
            name="name"
            #name="ngModel"
          />
          <div
            [hidden]="name.valid || name.pristine"
            class="alert alert-danger"
          >
            Name is required
          </div>
        </div>
        <div class="form-group">
          <label for="alterEgo">Alter Ego</label>
          <input
            type="text"
            class="form-control"
            id="alterEgo"
            [(ngModel)]="model.alterEgo"
            name="alterEgo"
          />
        </div>

        <div class="form-group">
          <label for="power">Hero Power</label>
          <select
            class="form-control"
            id="power"
            required
            [(ngModel)]="model.power"
            name="power"
          >
            <option *ngFor="let pow of powers" [value]="pow">{{ pow }}</option>
          </select>
        </div>

        <button
          type="button"
          class="btn btn-default"
          (click)="newHero(); heroForm.reset()"
        >
          New Hero
        </button>

        <button
          type="submit"
          class="btn btn-success"
          [disabled]="!heroForm.form.valid"
        >
          Submit
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, 'hoge', 'fuga');
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
