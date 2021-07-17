export interface ICookieProps {
  account_id: number
  email: string;
  current_profile_id?: number;
  access_token: string;
}

export class Cookie {

  private _account_id: number;
  private _email: string;
  private _current_profile_id: number;
  private _access_token: string;


  constructor( props: ICookieProps) {
    this._account_id = props.account_id
    this._email = props.email
    this._current_profile_id = props.current_profile_id ? props.current_profile_id : undefined;
    this._access_token = props.access_token
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

  set profile_id(value: number) {
    this._current_profile_id = value;
  }

  get access_token(): string {
    return this._access_token;
  }

  set access_token(value: string) {
    this._access_token = value;
  }
}
