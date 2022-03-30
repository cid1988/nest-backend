import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquiposModule } from './equipos/equipos.module';
import { PartidosModule } from './partidos/partidos.module';
import { GolesModule } from './goles/goles.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { TipoEquiposModule } from './tipo-equipos/tipo-equipos.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig, 
      keepConnectionAlive: true, 
      autoLoadEntities: true
    }),
    EquiposModule,
    PartidosModule,
    GolesModule,
    JugadoresModule,
    TipoEquiposModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
