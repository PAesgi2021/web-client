export interface IMessageProps {
  id?: number
  content?: string;
  createAt?: string;
  likes?: number;
}

export class Message {

  private _id: number
  private _content: string;
  private _createAt?: string;
  private _likes: number;

  constructor(props: IMessageProps) {
    this._id = props.id;
    this._content = props.content;
    this._createAt = props.createAt;
    this._likes = props.likes;
  }

  // -------------------------------------------------------------------------------------------------------------------

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  get createAt(): string {
    return this._createAt;
  }

  set createAt(value: string) {
    this._createAt = value;
  }
}
