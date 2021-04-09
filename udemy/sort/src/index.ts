import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

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
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(25);
linkedList.add(40);
sorter.collection = linkedList;
sorter.sort();
linkedList.print();

