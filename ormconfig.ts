import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: 'all',
} as TypeOrmModuleOptions;
