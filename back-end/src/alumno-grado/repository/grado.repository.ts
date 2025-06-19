import { EntityRepository, FindOptionsWhere } from "typeorm";
import { Grado } from "../entity/grado.entity";
import { DataSource, Repository } from "typeorm";

@EntityRepository(Grado)
export class GradoRepository extends Repository<Grado>{
    constructor (private dataSource: DataSource){
        super(Grado, dataSource.createEntityManager());
    }

    async findByNombre (nombre: string): Promise<Grado | null>{
        return this.findOne({where: {nombre}})
    }

}