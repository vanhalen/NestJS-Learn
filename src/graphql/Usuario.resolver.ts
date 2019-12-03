import { Resolver, Query, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { UsuarioService } from 'src/usuario/Usuario.service';

@Resolver('Usuario')
export class UsuarioResolver {

	constructor(private readonly usuarioService: UsuarioService) {}

	@Query('usuario')
	async usuario(@Args('id') id: number) {
		return this.usuarioService.find(id);
	}

	@Query('usuarios')
	async usuarios() {
		return this.usuarioService.all();
	}

	@ResolveProperty('descricao')
	async posts(@Parent() usuario) {
		return `Usuario: ${usuario.id} - ${usuario.nome}`;
	}

}
