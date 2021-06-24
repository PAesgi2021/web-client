export interface IMessageProps {
  content: string;
}

export class Message {

  private _content: string;
  private _likes: number;

  constructor(content: string) {
    this._content = content;
    this._likes = 0;
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
}
