import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateCatDto /* ListAllEntities */ } from './dto/';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

// Controllers são responsáveis por receber inputs do client e interagir.
// Utiliza o decorator "@Controller" para definir um controller e caminhos de rotas '/cats'.
@Controller('cats')
export class CatsController {
  // CatsService é injetado como dependência pelo constructor para não gerar acoplamento de código com uso de new CatsService().
  constructor(private catsService: CatsService) {}

  // Utiliza o decorator "@Post" e outros para definir o método da requisição HTTP.
  @Post()
  // Utiliza o decorator "@Body" para receber input específico do tipo "createCatDto".
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  // Toda função assíncrona retorna uma "Promise<any[]>" que pode ser de qualquer (any) tipo.
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  /* @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  } */

  @Get()
  // Utiliza o decorator "@Query" para definir parâmetros específicos da query p/ interação na rota.
  // Cada parâmetro definido da query possui seu tipo esperado declarado.
  async findFiltered(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  // Utiliza o decorator "@Get" com pré-fixo ':id' para buscar com parâmetro ID.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a # ${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
