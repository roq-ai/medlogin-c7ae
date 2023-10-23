import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StaffMemberInterface {
  id?: string;
  position: string;
  years_of_experience: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface StaffMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  user_id?: string;
}
