import { createConnection } from 'typeorm';

//Proveedor de base de datos de tipo no orm
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'backend',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  },
];