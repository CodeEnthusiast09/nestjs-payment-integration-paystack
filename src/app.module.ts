import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppDataSource from '../db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(
      AppDataSource.options,
      // {
      // type: 'sqlite',
      // database: 'db.sqlite3',
      // entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      // synchronize: true,

      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'obrien',
      // database: 'payments',
      // entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      // password: 'admin123',
      // entities: ['dist/**/*.entity.js'],
      // entities: ['src/**/*.entity.ts'],
      // synchronize: false,
      // migrations: ['dist/db/migrations/*.js'],
      // migrations: ['src/db/migrations/*.js'],
      // }
    ),
    AppModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
