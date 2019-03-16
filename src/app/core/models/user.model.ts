export class User {
  constructor(
              public email: string,
              public password: string,
              public username?: string,
              // public token?: string,
              // public userId?: number,
              public ConfirmPassword?: string
              ) {}
}