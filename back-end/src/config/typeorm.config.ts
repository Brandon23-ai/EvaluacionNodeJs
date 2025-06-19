import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Alumno } from 'src/alumno-grado/entity/alumno.entity';
import { Grado } from 'src/alumno-grado/entity/grado.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '3306', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Alumno, Grado],
  synchronize: true,
};

console.log('🔍 DB config:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


