import {Post} from "../../models/post";

export interface ProfileDto {
  id: number;
  pseudo: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  account: Account;
  //profileRoles:
  posts: Post[];
}
