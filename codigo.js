const listaPokemon = document.querySelector("#listaPokemon");
let url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 1010; i++) {
    fetch(url + i)
        .then((response) => response.json())
        .then((data => mostrarPokemon(data)))
    
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p id="${type.type.name}" class="list-group-item">${type.type.name}</p>`);
    tipos = tipos.join("");
    const nombre = poke.name.toUpperCase();
    const divCol = document.createElement("div");
    divCol.classList.add("col-md-3");

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img id="imagen-Card" src="${poke.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
            <div id="cuerpo-Card" class="card-body">
                <ul class="list-group list-group-flush">
                    <h5 id="pokemon-nombre" class="list-group-item">${nombre}</h5>
                    <li id="pokemon-id" class="list-group-item">#${poke.id}</li>
                    <div class="pokemon-tipos">
                    ${tipos}
                    </div>
                    <button type="button" class="btn btn-outline-info mt-2" data-bs-toggle="modal" data-bs-target="#exampleInformarcion1">Más Información</button>
                </ul>
            </div>
        </div>
    `;

    divCol.appendChild(div);
    listaPokemon.appendChild(divCol);
}
