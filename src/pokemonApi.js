export default function getPokemonData(pokemonArray) {
  const pokemonPromises = pokemonArray.map((name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => parseData(data));
  });

  return Promise.all(pokemonPromises);
}

function parseData(data) {
    return {
        name: data.name,
        image: data.sprites.front_default,
        id: crypto.randomUUID(),
    };
}