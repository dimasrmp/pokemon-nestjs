import { Controller, Get, Post, Body } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getPokemonList() {
    return [
      {
        name: 'bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
      {
        name: 'ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      },
      {
        name: 'venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      },
      // Add more Pokémon data as needed
    ];
  }
  
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
