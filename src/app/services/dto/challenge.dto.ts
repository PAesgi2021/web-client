import { Post } from "../../models/post";


export interface ChallengeDto {
  id: number;
  tag: string;
  description: string;
  posts: Post[];
}
