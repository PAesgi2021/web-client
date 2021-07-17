export interface IAccountProps {
  id?: number;
  email: string;
  password: string;
}

export class Account {

  _id: number;
  _email: string;
  _password: string;


  constructor(props: IAccountProps) {
    this._id = props.id ? props.id : undefined;
    this._email = props.email;
    this._password = props.password;
  }

  // -------------------------------------------------------------------------------------------------------------------


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

}
