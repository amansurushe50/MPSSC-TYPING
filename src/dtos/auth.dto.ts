import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class AuthUserDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  public password: string;
}
