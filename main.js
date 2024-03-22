document.addEventListener("DOMContentLoaded", function() {
    const pokemonId = Math.floor(Math.random() * 150) + 1; // Gera um ID de Pokémon aleatório entre 1 e 898

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const pokemonImage = document.getElementById("pokemon-image");
            const pokemonName = document.getElementById("pokemon-name");
            const pokemonIdSpan = document.getElementById("pokemon-id");
            const pokemonTypeSpan = document.getElementById("pokemon-type");

            pokemonImage.src = data.sprites.front_default;
            pokemonName.textContent = data.name;
            pokemonIdSpan.textContent = data.id;
            pokemonTypeSpan.textContent = data.types.map(type => type.type.name).join(", ");
        })
        .catch(error => console.error("Erro ao buscar dados do Pokémon:", error));
});
