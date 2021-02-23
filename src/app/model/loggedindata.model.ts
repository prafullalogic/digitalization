export class LoggedInData {
  constructor(
    public userId: number,
    public userName: string,
    public firstName: string,
    public lastName: string,
    public accesstoken: string,
    public isloggedIn: boolean = false
  ) { }
}
