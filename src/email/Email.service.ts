import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class EmailService {
  async send(to: string, body: string) {
    //Gera credenciais para o smtp
    let testAccount = await nodemailer.createTestAccount();

    // criando transporter SMTP padrão
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Rodrigo Chagas" <foo@example.com>', // sender address
      to: to, // list of receivers
      subject: 'Teste - Mailer', // Subject line
      text: 'Olá. isso é um teste de envio, por favor desconsiderar.', // plain text body
      html: body, // html body
    });

    return { id: info.messageId, link: nodemailer.getTestMessageUrl(info) };
  }
}
