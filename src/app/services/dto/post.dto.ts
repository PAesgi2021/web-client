import { Message } from "../../models/message";
import { Profile } from "../../models/profile";
import { Challenge } from "../../models/challenge";


export interface PostDto {
  id: number;
  description: string;
  isPrivate: boolean;
  likes: number;
  createdAt: string;
  updatedAt: string;
  comments: Message[];
  challenges: Challenge[];
  profile: Profile;
  status: boolean;
}
