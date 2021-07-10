import { Profile } from "./profile";
import { Message } from "./message";


export interface IPostProps {
  id?: number;
  likes?: number;
  isPrivate?: boolean;
  description?: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
  comments?: Message[];
  profile?: Profile;
}

export class Post {

  private _id: number;
  private _description: string;
  private _isPrivate: boolean;
  private _likes: number;
  private _createdAt: string;
  private _updatedAt: string;
  private _image: string;
  private _comments: Message[];
  private _profile: Profile;

  constructor(props: IPostProps) {
    this._id = props.id;
    this._description = props.description;
    this._isPrivate = props.isPrivate;
    this._likes = props.likes;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
    this._comments = props.comments;
    this._profile = props.profile;
    this._image = props.image;
  }

  // -------------------------------------------------------------------------------------------------------------------


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get isPrivate(): boolean {
    return this._isPrivate;
  }

  set isPrivate(value: boolean) {
    this._isPrivate = value;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  get comments(): Message[] {
    return this._comments;
  }

  set comments(value: Message[]) {
    this._comments = value;
  }

  get profile(): Profile {
    return this._profile;
  }

  set profile(value: Profile) {
    this._profile = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

}
