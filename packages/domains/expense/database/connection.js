import {DataSource} from 'typeorm';
import { Expense } from '../model/Expense';
let dataSource = new DataSource({
    host: '0.0.0.0',
    type: 'postgres',
    port: 5432,
    database: 'challenge',
    username: 'admin',
    password: 'admin',
    entities: [Expense]
});

 export const getConnection =async()=> {
    let connection = await dataSource.initialize();
    return connection
}

