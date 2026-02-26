// TypeScript utiliza DTO's: objetos que especificam como os dados serão tratados e enviados na rede.
// Obrigatório declarar DTO's em classes para o Node acessar metatype da variável em runtime.
export class CreateCatDto {
  // Define entidade "Cats" com três propriedades básicas
  name: string;
  age: number;
  breed: string;
}
