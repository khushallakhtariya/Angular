import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
    username: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl('', [Validators.pattern('^[0-9]+$')]),
    isAccepted: new FormControl(false, Validators.requiredTrue)
  });

  formValue: any;

  get f() {
    return this.studentForm.controls;
  }

  onSave() {
    if (this.studentForm.valid) {
      this.formValue = this.studentForm.value;
      console.log(this.formValue);
    }
  }

  onReset() {
    this.studentForm.reset();
    this.formValue = null;
  }
}
