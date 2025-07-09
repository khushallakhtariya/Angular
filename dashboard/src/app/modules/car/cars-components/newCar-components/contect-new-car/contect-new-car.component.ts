import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewcarService } from '../../../../../services/newcar.service';


@Component({
  selector: 'app-contect-new-car',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './contect-new-car.component.html',
  styleUrls: ['./contect-new-car.component.css'],
})
export class ContectNewCarComponent implements OnInit {
  modelParam: string = '';
  car: any;
  loading = true;
  error = '';
  contactForm!: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private newcarService: NewcarService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.modelParam = this.route.snapshot.paramMap.get('model') || '';
    this.getCarByModel();

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      message: [''],
    });
  }

  getCarByModel() {
    this.newcarService.getNewCarByModel(this.modelParam).subscribe({
      next: (data) => {
        this.car = data[0];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load car details.';
        this.loading = false;
        console.error(err);
      },
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;
    this.successMessage = 'Your request has been sent. Agent will contact you soon.';
    this.contactForm.reset();
    this.submitted = false;
  }
}
