import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Grado } from "./entity/grado.entity";
import { GradoController } from "./controller/grado.controller";
import { GradoService } from "./service/grado.service";
import { GradoMapper } from "./mapper/grado.mapper";
import { GradoRepository } from "./repository/grado.repository"; 


@Module({
  imports:[TypeOrmModule.forFeature([Grado])],
  controllers:[GradoController],
  providers:[
    GradoService,
    GradoMapper,
    GradoRepository
  ],

})

export class GradoModule{}