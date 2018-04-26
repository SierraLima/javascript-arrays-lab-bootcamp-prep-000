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
  return kittens
}

function prependKitten(name){
  [...kittens, "Arnold"]
  return kittens
}

function removeLastKitten(){
  kittens.slice(0, kittens.lenght - 1)
}

function removeFirstKitten(){
  kittens.slice(1)
  
}