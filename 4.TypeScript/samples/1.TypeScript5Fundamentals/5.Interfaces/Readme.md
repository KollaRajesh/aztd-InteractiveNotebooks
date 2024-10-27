
> ### Interfaces 

> 1. Understanding Interfaces
  
   - Contracts that define types
   - Compiler enforces the contract via type checking 
   - Collection of property and method definitions
   - Duck Typing (if one type is having all properties of interface and some additional properties , still that type can be used as interface type , this is called duck typing)
   - 
  
```ts

//Duck Typing 
 interface Duck{
  walk:()=> void ;
  swim:()=> void ;
  quack:()=> void ;
 }

 let probablyADuck={
  walk:()=> console.log('walking like a duck') ;
  swim:()=> console.log('swiming like a duck') ;
  quack:()=> console.log('quack like a duck') ;
 }

 function FlyOverWater(bird:Duck){}

 FlyOverWater(probablyADuck);


 //Another example 
  interface Book{
   id:number;
   title:string;
   author:string;
   Pages?:number; //optional
   markDamaged:(reason:string) => void ;// provided signatures with no implmentation 

  }

```
---

> 2. Declaring and using interfaces


```ts

interface Movie { 
    title: string,
    director: string,
    yearReleased: Number,
    streaming: string,
 
}

interface LogMovie extends Movie{ 
    logReview: (review: string) => void;
}
function GetAllMovies():Movie[]{
  return [
          {title: "The French Dispatch",    director: "Wes Anderson",yearReleased: 2021,    streaming: "Disney+"},
          {title: "The Power of the Dog",director: "Jane Campion", yearReleased: 2021, streaming: "Netflix" },
          {title: "Dune",  director: "Denis Villeneuve", yearReleased: 2021,streaming: "HBO Max"},
          {title: "The Lost Daughter",director: "Maggie Gyllenhaal",yearReleased: 2021,  streaming: "Netflix"},
          {title: "The Tragedy of Macbeth", director: "Joel Coen", yearReleased: 2021, streaming: "Apple TV+"},
          {title: "The Last Duel", director: "Ridley Scott",yearReleased: 2021, streaming: "Hulu" },
          {title: "The Humans", director: "Stephen Karam", yearReleased: 2021, streaming: "Showtime" },
          {title: "The Velvet Underground",director: "Todd Haynes",yearReleased: 2021, streaming: "Apple TV+"},
          {title: "The Souvenir Part II",director: "Joanna Hogg", yearReleased: 2021, streaming: "Amazon Prime Video"},
          {title: "The Green Knight",  director: "David Lowery",yearReleased: 2021,streaming: "Amazon Prime Video" }
        ];
}


function PrintMovieInfo(movie:Movie):void{
 
 console.log(`Title:${movie.title}`);
 console.log(`Year Released: ${movie.yearReleased}`);
 console.log(`Director: ${movie.director}`);

}

let myMovie = {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video", 
    genre: 'Sci-fi',
    previouslyViewed:true
}
PrintMovieInfo(myMovie);
/* mymovie is having additional properties (genre,previouslyViewed) .   
   those are not exists in movie type.function will accept mymovie as movie type because all propeties of movies are in mymovie.
   this is called duck type.*/

let otherMovie : Movie=  {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video"
}
PrintMovieInfo(myMovie);

let anotherMovie : LogMovie=  {
    title: "The Green Knight",
    director: "David Lowery",
    yearReleased: 2021,
    streaming: "Amazon Prime Video", 
    logReview:(review:string)=> console.log(`Review:${ review }`)
}
PrintMovieInfo(anotherMovie);
if (anotherMovie.logReview) {
    anotherMovie.logReview('Great Drama');    
}
```
---

> 3. Interfaces for functions
 - used interface as function types

```ts
 function CreateMovieID(name:string,id:number):string{ return name+id;}
  
  interface StringGenerator{
        (chars:string,nums:number): string;  
   }
//let IdGenerator:(chars:string,nums:number)=> string;
Idgenerator=CreateMovieID;

interface ReviewLogger{
(review: string) : void;
}

interface Movie { 
    title: string,
    director: string,
    yearReleased: Number,
    streaming: string,
    logReview: ReviewLogger;
}

let printReview: ReviewLogger;
printReview = (review: string) => console.log(`viewer review: ${review}`);
printReview('I want to see it again');
```
---

> 4. Extending Interfaces
 - extending functionality using inheritance (or) multiple interitance of interfaces.

```ts
interface LibraryResource{
    catalogNumber:number;
}
interface Book {
    title:string;
}
interface Encylopedia extends LibraryResource,Book{
    volume:number;
}

let refBook:Encylopedia ={catalogNumber:1245,
                          title='The Bible of Type script',
                          volume=1}

```
---
> 5. Implementing Interfaces with Classes
  - interface are fully abstract , it contains only signature (or)definitions 
  - Class is having actual implementation 
  - if Class implements interface , all functions should implement in the Class

```ts
interface Librarian{ doWork:()=>void;}
class ElementarySchoolLibrarian implements Librarian{
 doWork(){ console.log('Reading to and teaching childern');}
}

let kidsLibrarian:Librarian=new ElementarySchoolLibrarian();
    kidsLibrarian.doWork();

```
---