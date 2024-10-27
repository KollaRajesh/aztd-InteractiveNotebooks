> ### Generics in Typescript.
 
 1. **Generics**: 
   - Code that work with many types.
   - Accept "type parameters" for each instance.
   - Apply to function,interface and classes.
 
 2. **Typeparameters**
    - Specify the type a generic will operate over
    - Listed separate from function parameters inside angle brackets
    - Conventionally represented by the letter ‘T’ (e.g. Array&lt;T&gt;)
    - Actual type provided at instance creation.

- Example using Array&lt;T&gt;
   - Type parameter specifies the type the array can contain
   - Type parameters are part of the type
   - Type parameters are listed separate from function parameters

```ts 
let poetryBooks: Book[];
let fictionBooks: Array<Book>;
let historyBooks = new Array<Book>(5);
```

3. **Generic Funtions**

```ts
function LogAndReturn<T>(thing: T): T {
console.log(thing);
return thing;
}

let someString: string = LogAndReturn<string>('log this');
let newMag: Magazine = { title: 'Web Dev Monthly' };
let someMag: Magazine = LogAndReturn<Magazine>(newMag);
```

4. **Generic Interfaces**

```ts
interface Inventory<T> {
getNewestItem: () => T;
addItem: (newItem: T) => void;
getAllItems: () => Array<T>;
}
let bookInventory: Inventory<Book>;
// populate the inventory here...
let allBooks: Array<Book> = bookInventory.getAllItems();
```
5. **Generic Classes**

```ts
class Catalog<T> implements Inventory<T> {
private catalogItems = new Array<T>();
addItem(newItem: T) {
this.catalogItems.push(newItem);
}
// implement other interface methods here
}
let bookCatalog = new Catalog<Book>();

```

6. **Generic Constraints**
   - Describe types that may be passed as a generic parameter
   - “extends” keyword applies constraint
   - Only types satisfying the constraint may be used


```ts 
interface CatalogItem {
catalogNumber: number;
}
class Catalog<T extends CatalogItem> implements Inventory<T> {
// implement interface methods here
}
```