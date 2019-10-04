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
  MatAutocompleteModule,
  MatPaginatorModule
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
    MatAutocompleteModule,
    MatPaginatorModule
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
    MatAutocompleteModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
