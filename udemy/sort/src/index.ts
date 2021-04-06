import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
const charactersCollection = new CharactersCollection("JoAnA");
sorter.sort();


console.log(sorter.collection);
console.log(numbersCollection.data);
sorter.collection = charactersCollection;
sorter.sort();
console.log(sorter.collection);
console.log(charactersCollection.data);