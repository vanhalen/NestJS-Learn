import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  findUsuario() {
    return {
      id: 1,
      nome: 'Digão X',
    }
  }
}
