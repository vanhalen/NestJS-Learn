import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ClienteResolver } from './Cliente.resolver';
import { UsuarioResolver } from './Usuario.resolver';
import { UsuarioModule } from 'src/usuario/Usuario.module';

@Module({
  imports: [
    UsuarioModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.{gql,grapqhl}'],
    }),
  ],
  providers: [ClienteResolver, UsuarioResolver],
})
export class GraphqlModule {}