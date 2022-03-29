import {DataSource} from 'typeorm';
import { User } from '../model/User';

let dataSource = new DataSource({
  host: '0.0.0.0',
  type: 'postgres',
  port: 5432,
  database: 'challenge',
  username: 'admin',
  password: 'admin',
  entities: [User]
});

export const getConnection =async()=> {
  let connection = await dataSource.initialize();
  return connection
}
