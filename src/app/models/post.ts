import { User } from "./user";
import { Message } from "./message";
import { modelSample } from "../utils/model-sample";


export interface IPostProps {
  id?: number;
  title: string;
  description?: string;
  isPrivate?: boolean;
  likes?: number;
  comments?: Message[];
}

export class Post {

  private _id: number;
  private _title: string;
  private _description: string;
  private _isPrivate: boolean;
  private _likes: number;
  private _comments: Message[];
  private _author: User;

  constructor(props: IPostProps) {
    this._id = props.id;
    this._title = props.title;
    this._description = props.description;
    this._isPrivate = props.isPrivate;
    this._likes = props.likes;
    this._comments = props.comments;
    this._author = modelSample.user_sample();
  }

  // -------------------------------------------------------------------------------------------------------------------


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
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

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }
}
