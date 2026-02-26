import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// O uso do decorator "@Injectable()", é indispensável para o 'Nest container IoC' entender a classe como um componente de DI.
// DI = Dependency Injection
// IoC = Inversion of Control
@Injectable()
// CatsService é definido como um Provider, pois seu papel é gerenciar a lógica da aplicação.
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
