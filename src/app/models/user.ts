export interface IUserProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export class User {

  private _email: string;
  private _password: string;
  private _firstname: string;
  private _lastname: string;

  constructor(props: IUserProps) {
    this._email = props.email;
    this._password = props.password;
    this._firstname = props.firstname;
    this._lastname = props.lastname;
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

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }
}
