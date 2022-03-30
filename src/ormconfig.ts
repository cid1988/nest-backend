import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'backend',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
    // host: process.env.DB_HOST,
    // port: parseInt(process.env.DB_PORT),
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_NAME,
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // synchronize: false,
    migrationsRun: true,
    logging: true,
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: './src/migrations',
    }
}

export = config;