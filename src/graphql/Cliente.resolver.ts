import { Resolver, Query, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { UsuarioService } from 'src/usuario/Usuario.service';

@Resolver('Cliente')
export class ClienteResolver {

	contador = 0;

	@Query('cliente')
	async usuario(@Args('id') id: number) {
		return {
			id: 1,
			nome: 'Honest',
			contador: this.contador++,
		};
	}

	@Query('clientes')
	async usuarios() {
		return [{
			id: 1,
			nome: 'Honest',
			contador: this.contador++,
		}];
	}

}
