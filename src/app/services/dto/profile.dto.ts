import {Post} from "../../models/post";

export interface ProfileDto {
  id: number;
  pseudo: string;
  firstname: string;
  lastname: string;
  createdAt: Date;
  updatedAt: Date;
  account: Account;
  //profileRoles:
  posts: Post[];
}
