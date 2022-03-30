import { Connection } from 'typeorm';
import { Partido } from './entities/partido.entity';

export const partidoProviders = [
  {
    provide: 'PARTIDO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Partido),
    inject: ['DATABASE_CONNECTION'],
  },
];