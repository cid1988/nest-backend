import { Module } from '@nestjs/common';
import { PartidosService } from './partidos.service';
import { PartidosController } from './partidos.controller';
import { DatabaseModule } from 'src/database.module';
import { partidoProviders } from './partidos.providers';
import { equipoProviders } from 'src/equipos/equipos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PartidosController],
  providers: [...partidoProviders, ...equipoProviders, PartidosService]
})
export class PartidosModule {}
