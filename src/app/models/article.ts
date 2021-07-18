export interface IArticleProps {
  name: string;
  price: number;
}

export class Article {

  private _name: string;
  private _price: number;
  private _number: number;

  constructor(props: IArticleProps) {
    this._name = props.name;
    this._price = props.price;
    this._number = 0;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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
