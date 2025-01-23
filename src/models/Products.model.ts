import { Column, Model, Table , DataType} from "sequelize-typescript";

@Table({
    tableName: 'products'
})

class Products extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string

    @Column({
        type:DataType.FLOAT(6,2)
    })
    price: number

    @Column({
        type:DataType.BOOLEAN
    })
    availability: boolean
}

export default Products