import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    MatPaginatorModule,
    MatProgressSpinnerModule
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
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
