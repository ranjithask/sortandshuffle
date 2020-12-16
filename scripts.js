document.addEventListener("DOMContentLoaded", ready);
var itemsArray = [{
    item:1,
    backGroundColor:'#6F98A8'
},{
    item:2,
    backGroundColor:'#2A8DAC'
},{
    item:3,
    backGroundColor:'#2E444D'
},{
    item:4,
    backGroundColor:'#2A8DAC'
},{
    item:5,
    backGroundColor:'#2E444D'
},{
    item:6,
    backGroundColor:'#BFBFBF'
},{
    item:7,
    backGroundColor:'#BFBFBF'
},{
    item:8,
    backGroundColor:'#6E97A7'
},{
    item:9,
    backGroundColor:'#2E444D'
}]
function ready(event){
    addBtnEventListeners();
    createNumberTiles(itemsArray);
}

function createNumberTiles(numberItemArray){
    var numberContainer = document.getElementById("numberContainer");
    var childrensLength = numberContainer.children.length;
    if(childrensLength>0){
        var child = numberContainer.lastElementChild;  
        while (child) { 
            numberContainer.removeChild(child); 
            child = numberContainer.lastElementChild; 
        }
    }
    numberItemArray.forEach(function(d){
        var div = document.createElement('div');
        div.className = 'number-items';
        div.style.backgroundColor = d.backGroundColor;
        div.style.borderLeft = `5px solid ${d.backGroundColor}`;
        div.textContent = d.item;
        numberContainer.appendChild(div)
    })
}


function addBtnEventListeners(){
    var btnbuttons = document.getElementsByClassName('btn');
    btnbuttons[0].addEventListener('click',shuffleAndArrange);
    btnbuttons[1].addEventListener('click',sortAndArrange);
}

function sortAndArrange(){
    var sortedItes = sortItems(itemsArray);
    createNumberTiles(sortedItes);
}
function sortItems(array){
    debugger;
    array.sort(function(a, b){return a.item-b.item});
    return array;
}

function shuffleAndArrange() {
    var shuffledArray = shuffle(itemsArray)
    createNumberTiles(shuffledArray);
}

function shuffle(array){
    array.sort(function(){
        return Math.random() - 0.5;
    });
    debugger;
    return array;
}