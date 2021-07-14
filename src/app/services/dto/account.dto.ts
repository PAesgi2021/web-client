import {Profile} from "../../models/profile";

export interface AccountDto {
  id: number;
  username: string;
  password: string;
  profiles: Profile[];

}
