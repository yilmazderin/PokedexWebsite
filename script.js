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
    var pokName = document.getElementById('name-search').value;
    var pokList = [];
    inputLower=pokName.toLowerCase();

    for (let i=0; i<pokemon.length; i++){
        pokemonChosen = pokemon[i].Name.toLowerCase();
        if(pokemonChosen.includes(pokName.toLowerCase())){
            pokList.push(pokemon[i]);
        }
    }

    showAlert(pokList);

}

function searchPokemonNumber() {
    var pokNum = document.getElementById('number-search').value;
    if(pokNum>20){
        alert("Invalid Number. Choose a number between 1 and 20.")
    }else {
        var pokList = [];

        for (let i=0; i<pokemon.length; i++){
        pokemonChosen = pokemon[i].Number;
        if(pokemonChosen.includes(pokNum)){
            pokList.push(pokemon[i]);
             }
         }
    }

    showAlert(pokList);
}

function showAlert(pokList){
    var pokList = "";
    for (let i=0; i<values.length; i++){
        pokList  += "Name: " + values[i].Name + "\nNumber: " + values[i].Number + "\nType(s): "+ values[i].Type + "\n\n";
    }
    alert(pokList);
}

function onEnterPressed (e,id) {
    var enterPressed = e.keyCode || e.which;
    if(e.keyCode == 13) {
        if (id == "number-search") {
            searchPokemonNumber();
        }
        if(id== "name-search") {
            searchPokemonName();
        }
    }
}

function searchDynName(){
    var divNameTag = document.createElement("div")
    divNameTag.setAttribute("class","div-dynamic")
    divNameTag.setAttribute("class", "div-dynamic2")
    var listTag = document.createElement("ul")
    divNameTag.appendChild(listTag)

    var firstDynDiv = document.getElementById("pokemon-list")
    document.body.insertBefore(divNameTag, firstDynDiv)

    valueName = String (value.value)

    
    for (let i = 0; i < pokList.length; i++) {

  
        if ((pokList[i].name.toLowerCase().includes(nameValue) && nameValue != "") || (pokList[i].name.includes(nameValue)&& nameValue!= "")) {

       
        var pokEl = document.createElement("li")
        pokEl.setAttribute("class","dynamic")
        unorderedListTag.appendChild(pokEl)
       
        var pokDiv = document.createElement("div")
        pokEl.appendChild(pokDiv)
      
        var pokPic = document.createElement("img")
        var pokImgSrc = "pokemons/" + i + ".jpg"
        pokemonDiv.append(pokPic)
        pokImgSrc.src = pokImgSrc

 
        var br = document.createElement("br")
        var br1 = document.createElement("br")
        var br2 = document.createElement("br")

        pokDiv.append("Id: " + pokList[i].Number)
        pokDiv.append(br)
        pokDiv.append("Name: " + pokList[i].Name)
        pokDiv.append(br1)
        pokDiv.append("Type: " + pokList[i].Type)
        pokDiv.append(br2)
        }
    }
}

function searchDynNum(){
    var divNameTag = document.createElement("div")
    divNameTag.setAttribute("class","div-dynamic")
    divNameTag.setAttribute("id", "div-dynamic2")
    var listTag = document.createElement("ul")
    divNameTag.appendChild(listTag)

    var firstDynDiv = document.getElementById("pokemon-list")
    document.body.insertBefore(divNameTag, firstDynDiv)

    valueNum = String (pokNum.value)

    
    if (valueNum < 21 && valueNum > 0) {

       
        var pokEl = document.createElement("li")
        pokEl.setAttribute("class","dynamic")
        unorderedListTag.appendChild(pokEl)
       
        var pokDiv = document.createElement("div")
        pokEl.appendChild(pokDiv)
      
        var pokPic = document.createElement("img")
        var pokImgSrc = "pokemons/" + String(valueNum) + ".jpg"
        pokemonDiv.append(pokPic)
        pokImgSrc.src = pokImgSrc

 
        var br = document.createElement("br")
        var br1 = document.createElement("br")
        var br2 = document.createElement("br")

        pokDiv.append("Id: " + pokList[i].Number)
        pokDiv.append(br)
        pokDiv.append("Name: " + pokList[i].Name)
        pokDiv.append(br1)
        pokDiv.append("Type: " + pokList[i].Type)
        pokDiv.append(br2)
        }
    }
