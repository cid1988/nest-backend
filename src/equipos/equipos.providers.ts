import { Connection } from 'typeorm';
import { Equipo } from './entities/equipo.entity';

export const equipoProviders = [
  {
    provide: 'EQUIPO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Equipo),
    inject: ['DATABASE_CONNECTION'],
  },
];