import { IsString } from 'class-validator';

export class CreateGradoDto {
  @IsString()
  nombre: string;
}
