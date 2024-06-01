import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  public password: string;

  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  @IsNotEmpty()
  public city: string;

  @MinLength(10)
  @MaxLength(10)
  @IsNotEmpty()
  public contact_number: string;
}

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  @IsNotEmpty()
  public city: string;

  @MinLength(10)
  @MaxLength(10)
  @IsNotEmpty()
  public contact_number: string;
}
