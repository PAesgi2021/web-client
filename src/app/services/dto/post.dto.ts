import { Message } from "../../models/message";


export interface PostDto {
  id: number;
  title: string;
  description: string;
  isPrivate: boolean;
  likes: number
  comments: Message[];
}
