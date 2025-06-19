import { Grado } from "../entity/grado.entity";
import { CreateGradoDto } from "../dto/create-grado.dto";
import { ResponseGradoDto } from "../dto/response-grado.dto";

export class GradoMapper {

    static toEntity(dto: CreateGradoDto): Grado {
        const grado = new Grado();
        grado.nombre = dto.nombre;
        return grado;
    }

    static toResponseDto(entity: Grado): ResponseGradoDto {
        return {
            id: entity.id,
            nombre: entity.nombre,
        };
    }
    
}