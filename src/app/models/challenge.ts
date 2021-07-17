import { Post } from "./post";


export interface IChallengeProps {
  id?: number;
  tag: string;
  description?: string;
  image?: string;
  posts?: Post[];
}

export class Challenge {

  private _id: number;
  private _tag: string;
  private _description: string;
  private _image: string;
  private _posts: Post[];

  constructor(props: IChallengeProps) {
    this._id = props.id;
    this._tag = props.tag;
    this._description = props.description;
    this._image = props.image;
    this._posts = props.posts;
  }

  // -------------------------------------------------------------------------------------------------------------------

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tag(): string {
    return this._tag;
  }

  set tag(value: string) {
    this._tag = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get posts(): Post[] {
    return this._posts;
  }

  set posts(value: Post[]) {
    this._posts = value;
  }
}
