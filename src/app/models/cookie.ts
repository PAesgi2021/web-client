export interface ICookieProps {
  access_token: string;

  account_id: number
  email: string;
  password: string;

  current_profile_id?: number;
  current_profile_pseudo?: string;


}

export class Cookie {

  private _access_token: string;

  private _account_id: number;
  private _email: string;
  private _password: string;

  private _current_profile_id: number;
  private _current_profile_pseudo: string;



  constructor( props: ICookieProps) {
    this._account_id = props.account_id;
    this._email = props.email;
    this._password = props.password;
    this._current_profile_id = props.current_profile_id ? props.current_profile_id : undefined;
    this._access_token = props.access_token;
    this._current_profile_pseudo = props.current_profile_pseudo ? props.current_profile_pseudo : undefined;

  }

  // -------------------------------------------------------------------------------------------------------------------


  get account_id(): number {
    return this._account_id;
  }

  set account_id(value: number) {
    this._account_id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get current_profile_id(): number {
    return this._current_profile_id;
  }

  set current_profile_id(value: number) {
    this._current_profile_id = value;
  }

  get access_token(): string {
    return this._access_token;
  }

  set access_token(value: string) {
    this._access_token = value;
  }


  get current_profile_pseudo(): string {
    return this._current_profile_pseudo;
  }

  set current_profile_pseudo(value: string) {
    this._current_profile_pseudo = value;
  }


  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

}
