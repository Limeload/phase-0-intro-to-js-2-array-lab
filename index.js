// Write your solution here!
  const cats = ["Milo", "Otis", "Garfield"];

  function destructivelyAppendCat() {
      return cats.push("Ralph");
  }

 function destructivelyPrependCat() {
     return cats.unshift("Bob")
 }

 function destructivelyRemoveLastCat() {
     return cats.pop();
 }

 function destructivelyRemoveFirstCat() {
     return cats.shift();
 }

 const catsArray1 = ["Milo", "Otis", "Garfield", "Broom"];
 function appendCat() {
     return catsArray1.slice("Broom");
 }

 const catsArray2 = ["Arnold", "Milo", "Otis", "Garfield"];
 function prependCat(){
     return catsArray2.slice("Arnold");
 }

 function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

 function removeFirstCat() {
     return cats.slice(1);
 }

