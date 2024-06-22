import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  private readonly fibonacciCache: number[] = [0, 1];

  catchPokemon() {
    const isCaught = Math.random() < 0.5;
    return { success: isCaught };
  }

  releasePokemon(id: string) {
    const number = Math.floor(Math.random() * 100);
    const isPrime = this.isPrime(number);
    return { success: isPrime, number };
  }

  // Function to generate Fibonacci sequence
  private fibonacci(n: number): number {
    if (this.fibonacciCache[n] !== undefined) {
      return this.fibonacciCache[n];
    }
    this.fibonacciCache[n] = this.fibonacci(n - 1) + this.fibonacci(n - 2);
    return this.fibonacciCache[n];
  }

  // Rename function that appends Fibonacci sequence to nickname
  public renamePokemon(name: string, renameCount: number): string {
    const fibNumber = this.fibonacci(renameCount);
    return `${name}-${fibNumber}`;
  }

  private isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
}
