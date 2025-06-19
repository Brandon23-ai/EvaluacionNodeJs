import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Grado } from './grado.entity';

@Entity()
@Unique(['nombre', 'fechaNacimiento', 'grado', 'seccion'])
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;

  @Column()
  nombrePadre: string;

  @Column()
  nombreMadre: string;

  @ManyToOne(() => Grado, (grado) => grado.alumnos, { eager: true })
  @JoinColumn({ name: 'gradoId' })
  grado: Grado;

  @Column()
  seccion: string;

  @Column({ type: 'date' })
  fechaIngreso: Date;
}
