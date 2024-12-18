import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardComponent } from './movie-dashboard.component';

@NgModule({
  declarations: [MovieDashboardComponent],
  imports: [
    CommonModule,  // Import CommonModule to use ngFor and other directives
  ],
  exports: [MovieDashboardComponent]
})
export class MovieDashboardModule {}
