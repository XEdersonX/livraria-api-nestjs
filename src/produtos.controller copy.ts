import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Livro } from './livro.model';

@Controller('produtos')  //Decorator recebe como parametro qual e a url
export class ProdutosController {
  produtos: Livro[] = [
    /* new Livro('LIV01', 'Livro TDD e BDD na partica', 29.90),
    new Livro('LIV02', 'Livro iniciando com JS', 21.90),
    new Livro('LIV03', 'Livro apredendo a programar', 34.90) */
  ];

  @Get()  //Decorator para dizer que este metodo vai ser um GET
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string { //Diz que vai retorna string, tu diz o tipo do retorno do metodo. O Param nos da acesso aos parametros passado na url
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return 'Produto criado';
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return 'Produto atualizado';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Apaga o produto ${params.id}`;
  }
}