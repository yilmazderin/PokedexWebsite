var pokemon = [
    {"Name": "Bulbasaur", "Number": "1", "Type": "Grass/Poison"},
    {"Name": "Ivysaur", "Number": "2", "Type": "Grass/Poison"},
    {"Name": "Venusaur", "Number": "3", "Type": "Grass/Poison"},
    {"Name": "Charmander", "Number": "4", "Type": "Fire"},
    {"Name": "Charmeleon", "Number": "5", "Type": "Fire"},
    {"Name": "Charizard", "Number": "6", "Type": "Fire/Flying"},
    {"Name": "Squirtle", "Number": "7", "Type": "Water"},
    {"Name": "Wartortle", "Number": "8", "Type": "Water"},
    {"Name": "Blastoise", "Number": "9", "Type": "Water"},
    {"Name": "Caterpie", "Number": "10", "Type": "Bug"},
    {"Name": "Metapod", "Number": "11", "Type": "Bug"},
    {"Name": "Butterfree", "Number": "12", "Type": "Bug/Flying"},
    {"Name": "Weedle", "Number": "13", "Type": "Bug/Poison"},
    {"Name": "Kakuna", "Number": "14", "Type": "Bug/Poison"},
    {"Name": "Beedrill", "Number": "15", "Type": "Bug/Poison"},
    {"Name": "Pidgey", "Number": "16", "Type": "Normal/Flying"},
    {"Name": "Pidgeotto", "Number": "17", "Type": "Normal/Flying"},
    {"Name": "Pidgeot", "Number": "18", "Type": "Normal/Flying"},
    {"Name": "Rattata", "Number": "19", "Type": "Normal"},
    {"Name": "Raticate", "Number": "20", "Type": "Normal"},
]

var pokemonName = document.getElementById("name-search")
var pokemonNum = document.getElementById("number-search")

function searchDynName(){

    clearList()

    var divNameTag = document.createElement("div")
    divNameTag.setAttribute("class","dynamic")
    divNameTag.setAttribute("id", "dynamic2")
    var listTag = document.createElement("ul")
    divNameTag.appendChild(listTag)

    var firstDynDiv = document.getElementById("pokemon-list")
    document.body.insertBefore(divNameTag, firstDynDiv)

    valueName = String(pokemonName.value)

    
    for (let i = 0; i < pokemon.length; i++) {

  
        if ((pokemon[i].Name.toLowerCase().includes(valueName) && valueName != "") || (pokemon[i].Name.includes(valueName)&& valueName!= "")) {

       
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

        pokDiv.append("Id: " + pokemon[i].Number)
        pokDiv.append(br)
        pokDiv.append("Name: " + pokemon[i].Name)
        pokDiv.append(br1)
        pokDiv.append("Type: " + pokemon[i].Type)
        pokDiv.append(br2)
        }
    }
    checkNameValue
}

function searchDynNum(){

    clearList()

    var divNameTag = document.createElement("div")
    divNameTag.setAttribute("class","dynamic")
    divNameTag.setAttribute("Number" , "dynamic2")
    var listTag = document.createElement("ul")
    divNameTag.appendChild(listTag)

    var firstDynDiv = document.getElementById("pokemon-list")
    document.body.insertBefore(divNameTag, firstDynDiv)

    valueNum = String (pokemonNum.value)

    
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

        pokDiv.append("Id: " + pokemon[i].Number)
        pokDiv.append(br)
        pokDiv.append("Name: " + pokemon[i].Name)
        pokDiv.append(br1)
        pokDiv.append("Type: " + pokemon[i].Type)
        pokDiv.append(br2)
        }

        checkNumValue()
    }

    function clearList(){
        var checkDiv = document.getElementById("dynamic2")
        if(checkDiv){
            checkDiv.remove()
        }
    } 

    function checkNumValue(){

        if(pokemonNum.value == ""){
            var checkDiv = document.getElementById("dynamic2")
            checkDiv.remove()
        }
    }
    function checkNameValue(){

        if(pokemonName.value == ""){
            var checkDiv = document.getElementById("dynamic2")
            checkDiv.remove()
        }
    }