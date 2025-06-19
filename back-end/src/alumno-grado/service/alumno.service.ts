import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoRepository } from '../repository/alumno.repository';
import { CreateAlumnoDto } from '../dto/create-alumno.dto';
import { AlumnoMapper } from '../mapper/alumno.mapper';
import { ResponseAlumnoDto } from '../dto/response-alumno.dto';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(AlumnoRepository)
    private readonly alumnoRepo: AlumnoRepository,
  ) {}

  async crearAlumno(dto: CreateAlumnoDto): Promise<ResponseAlumnoDto> {
    const entity = AlumnoMapper.toEntity(dto);

    try {
      const saved = await this.alumnoRepo.save(entity);
      return AlumnoMapper.toResponseDto(saved);

    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY'){
        throw new ConflictException('Ya existe un alumno con esos datos unicos')
      }
      throw error;
    }
    
  }

  async obtenerPorGradoId(gradoId: number): Promise<ResponseAlumnoDto[]> {
    const alumnos = await this.alumnoRepo.findByGradoId(gradoId);

    if (!alumnos || alumnos.length === 0) {
      throw new NotFoundException('No se encontraron alumnos para el grado con id ${gradoId}');
    }
    return alumnos.map(AlumnoMapper.toResponseDto);
  }


}
