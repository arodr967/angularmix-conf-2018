import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule
];

const formComponents = [
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...formComponents,
    ...materialComponents,
  ],
  exports: [
    ...formComponents,
    ...materialComponents,
  ],
  declarations: []
})
export class SharedModule { }
