export interface IArticleProps {
  id: number;
  name: string;
  description: string;
  price: number;
  number: number;
}

export class Article {

  private _id: number;
  private _name: string;
  private _description: string;
  private _price: number;
  private _number: number;

  constructor(props: IArticleProps) {
    this._id = props.id;
    this._name = props.name;
    this._description = props.description;
    this._price = props.price;
    this._number = props.number;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }
}
