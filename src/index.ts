import User from './types/user'
import Pokemon from './types/pokemon'

const user: User = {
  name: 'aomine',
  email: 'aomine@gmail.com',
  password: '123456'
}

displayUser(user)

// paramaeters and destructuring
function displayUser ({ name, email }: User) {
  console.log('email', email)
  console.log('username', name)
}

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

  // const pokemon: Pokemon = formatPokemon(data)

  return data
}

async function main (): Promise<void> {
  const pokemonName: string = 'gengar'

  const pokemon: Pokemon = await getPokemon(pokemonName)

  console.log(pokemon.sprite)
}

main()