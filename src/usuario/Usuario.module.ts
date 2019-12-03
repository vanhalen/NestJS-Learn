import { Module } from '@nestjs/common';
import { UsuarioService } from './Usuario.service';

@Module({
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
