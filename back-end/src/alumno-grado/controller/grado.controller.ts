import { Controller, Post, Body, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { GradoService } from '../service/grado.service';
import { CreateGradoDto } from '../dto/create-grado.dto';
import { ResponseGradoDto } from '../dto/response-grado.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@ApiTags('Grados')
@Controller('grado')
@UseGuards(ApiKeyGuard)
export class GradoController {
  constructor(private readonly gradoService: GradoService) {}

  @Post('crear')
  @ApiOperation({ summary: 'Crear un nuevo grado' })
  @ApiBody({ type: CreateGradoDto })
  async crear(@Body() dto: CreateGradoDto): Promise<ResponseGradoDto> {
    return this.gradoService.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los grados' })
  async obtenerTodos(): Promise<ResponseGradoDto[]> {
    return this.gradoService.obtenerTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener grado por ID' })
  @ApiParam({ name: 'id', type: Number })
  async obtenerPorId(@Param('id') id: number): Promise<ResponseGradoDto> {
    return this.gradoService.obtenerPorId(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar grado por ID' })
  @ApiParam({ name: 'id', type: Number })
  async eliminar(@Param('id') id: number): Promise<void> {
    return this.gradoService.eliminar(id);
  }
}
