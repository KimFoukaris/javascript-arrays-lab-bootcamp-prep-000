const app = "I don't do much."

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.slice(0, kittens.length-1)
}
