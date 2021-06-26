export interface IMessageProps {
  id?: number
  content?: string;
  date?: Date;
  likes?: number;
}

export class Message {

  private _id: number
  private _content: string;
  private _date?: Date;
  private _likes: number;

  constructor(props: IMessageProps) {
    this._id = props.id;
    this._content = props.content;
    this._date = props.date;
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

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
