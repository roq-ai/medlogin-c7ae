import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NurseInterface {
  id?: string;
  years_of_experience: number;
  shift: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface NurseGetQueryInterface extends GetQueryInterface {
  id?: string;
  shift?: string;
  user_id?: string;
}
