import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailService } from './email/Email.service';
import moment = require('../node_modules/moment/moment');

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly emailService: EmailService,
  ) {}

  @Get('enviar')
  async sendMail() {
    moment.locale('pt-BR');

    const usuario = await this.appService.findUsuario();
    let msg = `<p>Olá ${
      usuario.nome
    },</p><p>Isso é um teste, por favor ignorar.</p>${moment().format(
      'DD/MM/YYYY, hh:mm:ss',
    )}`;

    let resp = await this.emailService.send('rodrigorrchagas@gmail.com', msg);

    return { enviado: resp ? true : false, link: resp };
  }
}
