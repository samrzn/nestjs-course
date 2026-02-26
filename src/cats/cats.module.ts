import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// O decorator "@Module" aceita um único objeto com as seguintes propriedades: providers, controllers, imports & exports.
// É recomendado que além do 'root module', toda entidade própria dentro da aplicação possua seu próprio módulo interno.
// 'Modules' são singleton por padrão.
@Module({
  controllers: [CatsController],

  // O 'Module' encapsula 'Providers' por padrão, logo, você só pode injetar provedores que fazem parte do módulo atual.
  // Módulos fora do contexto atual (externos) devem ser explicitamente exportados de outros módulos importados.
  providers: [CatsService],

  // Quando exportado explicitamente conforme exemplo, qualquer módulo que importe 'CatsModule' poderá acessar 'CatsService'.
  exports: [CatsService],
})
export class CatsModule {
  // Módulos podem injetar provedores via constructor, mas não podem ser injetados como tal pois causariam Dependência Circular.
  constructor(private catsService: CatsService) {}
}
