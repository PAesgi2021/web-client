import {Role} from "./role";

export interface IProfileProps {
  id?: number;
  pseudo: string;
  firstName: string;
  lastName: string;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}

export class Profile {

  private _id: number;
  private _pseudo: string;
  private _firstname: string;
  private _lastname: string;
  private _roles: Role[];
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(props: IProfileProps) {
    this._id = props.id;
    this._pseudo = props.pseudo;
    this._firstname = props.firstName;
    this._lastname = props.lastName;
    this._roles = props.roles;
    this._createdAt = (props.createdAt);
    this._updatedAt = (props.updatedAt);
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

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get roles(): Role[] {
    return this._roles;
  }

  set roles(value: Role[]) {
    this._roles = value;
  }
}
