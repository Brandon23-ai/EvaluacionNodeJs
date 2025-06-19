import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GradoRepository } from '../repository/grado.repository';
import { CreateGradoDto } from '../dto/create-grado.dto';
import { GradoMapper } from '../mapper/grado.mapper';
import { ResponseGradoDto } from '../dto/response-grado.dto';

@Injectable()
export class GradoService {
  constructor(
    @InjectRepository(GradoRepository)
    private readonly gradoRepo: GradoRepository,
  ) {}

  async crear(dto: CreateGradoDto): Promise<ResponseGradoDto> {
    const entity = GradoMapper.toEntity(dto);
    const saved = await this.gradoRepo.save(entity);
    return GradoMapper.toResponseDto(saved);
  }

  async obtenerTodos(): Promise<ResponseGradoDto[]> {
    const grados = await this.gradoRepo.find();
    return grados.map(GradoMapper.toResponseDto);
  }

  async obtenerPorId(id: number): Promise<ResponseGradoDto> {
    const grado = await this.gradoRepo.findOne({ where: { id } });
    if (!grado) throw new NotFoundException(`Grado con ID ${id} no encontrado`);
    return GradoMapper.toResponseDto(grado);
  }

  async eliminar(id: number): Promise<void> {
    const resultado = await this.gradoRepo.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Grado con ID ${id} no encontrado`);
    }
  }
}
