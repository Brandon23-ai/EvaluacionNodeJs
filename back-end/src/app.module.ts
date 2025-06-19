import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { AlumnoModule } from "./alumno-grado/alumno.module";
import { GradoModule } from "./alumno-grado/grado.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot(typeOrmConfig),
        AlumnoModule,
        GradoModule
    ],

})

export class AppModule{}