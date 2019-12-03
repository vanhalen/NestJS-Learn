import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {

	async all() {
		return [
			{
				id: 1,
				nome: 'Digão',
			},
			{
				id: 2,
				nome: 'Renan',
			},
			{
				id: 3,
				nome: 'Erick',
			},
		];
	}
  
	async find(id: number) {
		const usuarios = await this.all();
		return usuarios.find( u => u.id === id );
	}
}
