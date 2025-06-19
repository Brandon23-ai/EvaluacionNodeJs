import { Alumno } from '../entity/alumno.entity';
import { CreateAlumnoDto } from '../dto/create-alumno.dto';
import { ResponseAlumnoDto } from '../dto/response-alumno.dto';
import { Grado } from '../entity/grado.entity';

export class AlumnoMapper {
  static toEntity(dto: CreateAlumnoDto): Alumno {
    const alumno = new Alumno();
    alumno.nombre = dto.nombre;
    alumno.fechaNacimiento = new Date(dto.fechaNacimiento);
    alumno.nombrePadre = dto.nombrePadre;
    alumno.nombreMadre = dto.nombreMadre;

    const grado = new Grado();
    grado.id = dto.gradoId;
    alumno.grado = grado; // Asociamos solo el ID (TypeORM lo entiende)

    alumno.seccion = dto.seccion;
    alumno.fechaIngreso = new Date(dto.fechaIngreso);
    return alumno;
  }

  static toResponseDto(entity: Alumno): ResponseAlumnoDto {

    const fechaNacimiento = entity.fechaNacimiento
      ? new Date(entity.fechaNacimiento).toISOString().split('T')[0]
      : '';

    const fechaIngreso = entity.fechaIngreso
      ? new Date(entity.fechaIngreso).toISOString().split('T')[0]
      : '';

    return {
      id: entity.id,
      nombre: entity.nombre,
      fechaNacimiento,
      nombrePadre: entity.nombrePadre,
      nombreMadre: entity.nombreMadre,
      grado: entity.grado?.nombre || '',
      seccion: entity.seccion,
      fechaIngreso,
    };
  }
}
