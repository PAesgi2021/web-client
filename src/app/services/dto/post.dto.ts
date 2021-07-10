import { Message } from "../../models/message";
import { Profile } from "../../models/profile";


export interface PostDto {
  id: number;
  description: string;
  isPrivate: boolean;
  likes: number;
  createdAt: string;
  updatedAt: string;
  comments: Message[];
  profile: Profile;
}
