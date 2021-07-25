import {Message} from "../../models/message";


export interface UpdatePostDto {
  title?: string;
  description?: string;
  isPrivate?: boolean;
  likes?: number
  comments?: Message[];
  status?: boolean;
}
