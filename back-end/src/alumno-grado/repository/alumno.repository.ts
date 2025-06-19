import { EntityRepository } from 'typeorm';
import { Alumno } from '../entity/alumno.entity';
import { DataSource, Repository } from 'typeorm';

@EntityRepository(Alumno)
export class AlumnoRepository extends Repository<Alumno> {
  constructor(private dataSource: DataSource) {
    super(Alumno, dataSource.createEntityManager());
  }

  async findByGradoId(gradoId: number): Promise<Alumno[]> {
    return this.find({ where: { grado: { id: gradoId } } });
  }

}
