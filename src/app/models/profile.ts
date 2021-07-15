import {Post} from "./post";

export interface IProfileProps {
  pseudo: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
}

export class Profile {

  private _pseudo: string;
  private _firstname: string;
  private _lastname: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(props: { createdAt: Date; firstname: string; id: number; pseudo: string; posts: Post[]; account: Account; lastname: string; updatedAt: Date }) {
    this._pseudo = props.pseudo;
    this._firstname = props.firstname;
    this._lastname = props.lastname;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
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

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }
}
