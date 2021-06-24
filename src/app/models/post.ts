import { User } from "./user";
import { Message } from "./message";


export interface IPostProps {
  title: string;
  description: string;
  isPrivate: boolean;
  author: User;
}

export class Post {

  private _title: string;
  private _description: string;
  private _isPrivate: boolean;
  private _likes: number;
  private _comments: Message[];
  private _author: User;

  constructor(props: IPostProps) {
    this._title = props.title;
    this._description = props.description;
    this._isPrivate = props.isPrivate;
    this._likes = 0;
    this._comments = [];
    this._author = props.author;
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

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }

  get comments(): Message[] {
    return this._comments;
  }

  set comments(value: Message[]) {
    this._comments = value;
  }

  addMessage(value: Message) {
    this._comments.push(value);
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

}
