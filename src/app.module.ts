import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/Email.module';
import { GraphqlModule } from './graphql/Graphql.module';
@Module({
  imports: [GraphqlModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
