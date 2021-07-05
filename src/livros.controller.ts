import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')  //Decorator recebe como parametro qual e a url
export class LivrosController {
  constructor(private livrosService: LivrosService) {

  }

  @Get()  //Decorator para dizer que este metodo vai ser um GET
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> { //Diz que vai retorna string, tu diz o tipo do retorno do metodo. O Param nos da acesso aos parametros passado na url
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livro: Livro) {
    this.livrosService.criar(livro);
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}