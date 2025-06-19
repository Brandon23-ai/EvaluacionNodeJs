import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreateAlumnoDto {
  @IsString()
  nombre: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsString()
  nombrePadre: string;

  @IsString()
  nombreMadre: string;

  @IsInt()
  gradoId: number;

  @IsString()
  seccion: string;

  @IsDateString({}, { message: 'fechaIngreso debe estar en formato YYYY-MM-DD'})
  fechaIngreso: string;
}
