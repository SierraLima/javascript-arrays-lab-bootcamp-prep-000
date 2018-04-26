const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

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
  ["Broom", ...kittens]
}

function prependKitten(name){
  [...kittens, name]
}

function removeLastKitten(){
  kittens.slice(0, kittens.lenght - 1)
  return kittens
}

function removeFirstKitten(){
  kittens.slice(1)
  
  return kittens
}