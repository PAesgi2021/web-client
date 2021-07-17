import {Profile} from "../../models/profile";

export interface AccountDTO {
  id?: number;
  email: string;
  password: string;
  profiles?: Profile[];
  access_token?: string;
}
