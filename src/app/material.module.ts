import { NgModule } from '@angular/core';
// @ts-ignore
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatChipsModule,
  MatStepperModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}
