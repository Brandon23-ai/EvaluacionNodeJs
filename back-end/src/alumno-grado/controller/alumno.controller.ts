import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { AlumnoService } from '../service/alumno.service';
import { CreateAlumnoDto } from '../dto/create-alumno.dto';
import { ResponseAlumnoDto } from '../dto/response-alumno.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@ApiTags('Alumnos')
@Controller('alumno')
@UseGuards(ApiKeyGuard)
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post('crear')
  @ApiOperation({ summary: 'Crear un nuevo alumno' })
  @ApiBody({ type: CreateAlumnoDto })
  async crearAlumno(
    @Body() alumnoDto: CreateAlumnoDto,
  ): Promise<ResponseAlumnoDto> {
    return this.alumnoService.crearAlumno(alumnoDto);
  }

  @Get('grado/id/:gradoId')
  @ApiOperation({ summary: 'Obtener alumnos por grado' })
  @ApiParam({ name: 'gradoId', type: Number })
  async obtenerAlumnosPorGradoId(
    @Param('gradoId') gradoId: number,
  ): Promise<ResponseAlumnoDto[]> {
    return this.alumnoService.obtenerPorGradoId(gradoId);
  }
}
