import { Controller, Get, Post, Body } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  
  @Get('catch')
  catchPokemon() {
    return this.pokemonService.catchPokemon();
  }

  @Post('release')
  releasePokemon(@Body('id') id: string) {
    return this.pokemonService.releasePokemon(id);
  }

  @Post('rename')
  async renamePokemon(@Body() body: { name: string, renameCount: number }): Promise<{ newName: string }> {
    const { name, renameCount } = body;
    const newName = this.pokemonService.renamePokemon(name, renameCount);
    return { newName };
  }
  
}
