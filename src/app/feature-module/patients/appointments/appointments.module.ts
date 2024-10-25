import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { PatientUpcomingAppointmentComponent } from './patient-upcoming-appointment/patient-upcoming-appointment.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppointmentsComponent,
    PatientUpcomingAppointmentComponent,
    PatientAppointmentsComponent,
  ],
  imports: [CommonModule, AppointmentsRoutingModule, SharedModule,FormsModule,CalendarModule],
})
export class AppointmentsModule {}
