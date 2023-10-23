import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DoctorInterface {
  id?: string;
  specialization: string;
  years_of_experience: number;
  working_days: string;
  working_hours: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
  };
}

export interface DoctorGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialization?: string;
  working_days?: string;
  working_hours?: string;
  user_id?: string;
}
