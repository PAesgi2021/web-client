export interface IPostProps {
  title: string;
  description: string;
}

export class Post {
  private _title: string;
  private _description: string;

  constructor(props: IPostProps) {
    this._title = props.title;
    this._description = props.description;
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
}
