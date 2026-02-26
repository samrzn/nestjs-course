import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

// "Modules" são classes declaradas com o decorator "@Module" p/ o Nest eficientemente organizar e gerenciar a estrutura do app.
// Módulos por entidade/domínio garantem uma maneira mais efetiva de organizar componentes.
// O decorator "@Module" aceita um único objeto com as seguintes propriedades: providers, controllers, imports & exports.
// O 'Module' encapsula 'Providers' por padrão, logo, você só pode injetar provedores que fazem parte do módulo atual.
@Module({
  // Módulos fora do contexto atual (externos) devem ser explicitamente importados de outros módulos exportados.
  imports: [CatsModule],

  // A aplicação só tem conhecimento dos Controllers após serem declarados no código dentro de algum "@Module".
  // Controllers lidam com requisições HTTP e delegam tarefas mais complexas aos Providers.
  controllers: [AppController],

  // Providers são classes que provém algum tipo de objeto para formar relações com diferentes modúlos de uma aplicação Nest.
  // Providers podem ser "services, repositories, factories, helpers, etc.". A principal vantagem é ser injetado como dependência.
  // Providers são altamente complacentes com Princípios SOLID, por se basearem no conceito DIP - Dependency Inversion Principle.
  providers: [AppService],
})
export class AppModule {}
