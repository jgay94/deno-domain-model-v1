import { Contact } from '@contact/mod.ts';

export interface AccountConstructorParams {
  id: string;
  name: string;
  contacts?: Contact[];
}