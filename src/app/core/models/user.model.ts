export class User {
  constructor(
              public email: string,
              public password: string,
              public username?: string,
              // public token?: string,
              public _id?: number,
              public ConfirmPassword?: string
              ) {}
}