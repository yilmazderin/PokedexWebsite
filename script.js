var pokemon = [
    {Name: "Bulbasaur", Number: "1", Type: "Grass/Poison"},
    {Name: "Ivysaur", Number: "2", Type: "Grass/Poison"},
    {Name: "Venusaur", Number: "3", Type: "Grass/Poison"},
    {Name: "Charmander", Number: "4", Type: "Fire"},
    {Name: "Charmeleon", Number: "5", Type: "Fire"},
    {Name: "Charizard", Number: "6", Type: "Fire/Flying"},
    {Name: "Squirtle", Number: "7", Type: "Water"},
    {Name: "Wartortle", Number: "8", Type: "Water"},
    {Name: "Blastoise", Number: "9", Type: "Water"},
    {Name: "Caterpie", Number: "10", Type: "Bug"},
    {Name: "Metapod", Number: "11", Type: "Bug"},
    {Name: "Butterfree", Number: "12", Type: "Bug/Flying"},
    {Name: "Weedle", Number: "13", Type: "Bug/Poison"},
    {Name: "Kakuna", Number: "14", Type: "Bug/Poison"},
    {Name: "Beedrill", Number: "15", Type: "Bug/Poison"},
    {Name: "Pidgey", Number: "16", Type: "Normal/Flying"},
    {Name: "Pidgeotto", Number: "17", Type: "Normal/Flying"},
    {Name: "Pidgeot", Number: "18", Type: "Normal/Flying"},
    {Name: "Rattata", Number: "19", Type: "Normal"},
    {Name: "Raticate", Number: "20", Type: "Normal"},
]

function searchPokemonName() {
    var value = document.getElementById('name-search').value;
    var values = [];
    inputLower=value.toLowerCase();

    for (let i=0; i<pokemon.length; i++){
        pokemonChosen = pokemon[i].Name.toLowerCase();
        if(pokemonChosen.includes(value.toLowerCase())){
            values.push(pokemon[i]);
        }
    }

    showAlert(values);

}

function showAlert(values){
    var list = "";
    for (let i=0; i<values.length; i++){
        list  += "Name: " + values[i].Name + "\nNumber: " + values[i].Number + "\nType(s): "+ values[i].Type + "\n\n";
    }
    alert(list);
}