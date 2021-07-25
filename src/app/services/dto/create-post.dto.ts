export interface CreatePostDto {
  description: string;
  isPrivate: boolean;
  image: string;
  profile_id: number;
  challenges_id?: number[];
}
