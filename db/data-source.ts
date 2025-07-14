import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

export const AppDataSource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'obrien',
  password: 'admin123',
  database: 'payments',
  entities: [join(process.cwd(), 'dist/**/*.entity.js')],
  synchronize: false,
  migrations: ['dist/db/migrations/*.js'],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(AppDataSource);
export default dataSource;
