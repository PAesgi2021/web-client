import {Post} from "../../models/post";
import {Role} from "../../models/role";

export interface ProfileDto {
  id: number;
  pseudo: string;
  firstName: string;
  lastName: string;
  ecoPoint: number;
  createdAt: Date;
  updatedAt: Date;
  account: Account;
  roles: Role[];
  posts: Post[];
  status: boolean;
}
