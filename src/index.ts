import fetch from 'node-fetch'

import User from './types/user'
import Pokemon from './types/pokemon'

// paramaeters and destructuring
const user: User = {
  name: 'aomine',
  email: 'aomine@gmail.com',
  password: '123456'
}

function displayUser ({ name, email }: User) {
  console.log('email:', email)
  console.log('username:', name)
}

displayUser(user)


// fetch with interface
function formatPokemon (pokemon: any): Pokemon {
  return {
    id: pokemon.id,
    name: pokemon.name,
    sprite: pokemon.sprites?.front_default,
  }
}

async function getPokemon(pokemonName: string): Promise<Pokemon> {
  const res: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const data: any = await res.json()

  const pokemon: Pokemon = formatPokemon(data)

  return pokemon
}

async function main (): Promise<void> {
  const pokemonName: string = 'gengar'

  const pokemon: Pokemon = await getPokemon(pokemonName)

  console.log(pokemon)
}

main()
