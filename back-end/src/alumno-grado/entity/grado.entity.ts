import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Alumno } from './alumno.entity';

@Entity()
export class Grado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  nombre: string;

  @OneToMany(() => Alumno, (alumno) => alumno.grado)
  alumnos: Alumno[];
}
