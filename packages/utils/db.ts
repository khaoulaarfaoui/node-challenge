import config from 'config';
import path from 'path';
import {DataSource} from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Expense } from '../domains/expense/model/Expense';
import { User } from '../domains/user/model/User';

let dataSource = new DataSource({
  ...config.db as PostgresConnectionOptions ,
    entities:  [Expense,User] 
} );
 export const getConnection =async()=> {
    let connection = await dataSource.initialize();
    return connection
}










