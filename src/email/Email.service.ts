import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {

	send(to: string, body: string) {
		console.log( `Enviando email para ${to} com o corpo ${body}` );
	}
}
