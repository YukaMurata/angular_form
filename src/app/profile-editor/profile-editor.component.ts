import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label
        >First Name: <input type="text" formControlName="firstName" required
      /></label>
      <label>Last Name: <input type="text" formControlName="lastName"/></label>
    </form>
    <button type="submit" [disabled]="!profileForm.valid">Submit</button>

    <div formGroupName="address">
      <h3>Address</h3>
      <label>Street: <input type="text" formControlName="street"/></label>
      <label>City: <input type="text" formControlName="city"/></label>
      <label>State: <input type="text" formControlName="state"/></label>
      <label>Zip code: <input type="text" formControlName="zip"/></label>
    </div>

    <div formGroupName="aliases">
      <h3>Aliases</h3>
      <button (click)="addAlias()">Add Alias</button>
      <div *ngFor="let alias of aliases.controls; let i = index">
        <label>Alias: <input type="text" [formControlName]="i"/></label>
      </div>
    </div>

    <p>Form Status: {{ profileForm.status }}</p>
    <p><button (click)="updateProfile()">Update Profile</button></p>
  `,
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([this.fb.control('')])
  });

  constructor(private fb: FormBuilder) {}

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Fukumura',
      address: {
        street: 'hogehoge 123'
      }
    });
  }
}
