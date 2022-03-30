import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { equipoProviders } from './equipos.providers';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EquiposController],
  providers: [...equipoProviders, EquiposService]
})
export class EquiposModule {}
