import {IsDefined} from 'class-validator';


export class LoginRequest {

  @IsDefined()
  public username: string;
  @IsDefined()
  public password: string;

}
