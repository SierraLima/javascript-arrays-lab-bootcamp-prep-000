const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

var name = `Broom`;


function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  [name, ...kittens]
  
  kittens
}


function prependKitten(name){
  [...kittens, name]
}

function removeLastKitten(){
  kittens.slice(0, kittens.lenght - 1)
  kittens
}

function removeFirstKitten(){
  kittens.slice(1)
  
  kittens
}