import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Alumno } from "./entity/alumno.entity";
import { AlumnoController } from "./controller/alumno.controller";
import { AlumnoService } from "./service/alumno.service";
import { AlumnoMapper } from "./mapper/alumno.mapper";
import { AlumnoRepository } from "./repository/alumno.repository"; 


@Module({
  imports:[TypeOrmModule.forFeature([Alumno])],
  controllers:[AlumnoController],
  providers:[
    AlumnoService,
    AlumnoMapper,
    AlumnoRepository
  ],

})

export class AlumnoModule{}