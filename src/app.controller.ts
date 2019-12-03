import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailService } from './email/Email.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly emailService: EmailService) {}

  @Get("enviar")
  async getHello() {
    const usuario = await this.appService.findUsuario();
    this.emailService.send( 'digao@digao.com', `Oi, meu nome é ${usuario.nome}`);
    return { enviado: true };
  }
}
