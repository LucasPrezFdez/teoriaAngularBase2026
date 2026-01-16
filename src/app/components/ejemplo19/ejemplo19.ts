import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  selector: 'app-ejemplo19',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo19.html',
  styleUrl: './ejemplo19.css',
})
export class Ejemplo19 implements OnInit {
  formBuilder = inject(FormBuilder);

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['Juan', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  handleSubmit() {
    alert(`Me has enviado los datos correctamente: 
      ${this.form.value.name}
      ${this.form.value.email}
      `);
  }
}
