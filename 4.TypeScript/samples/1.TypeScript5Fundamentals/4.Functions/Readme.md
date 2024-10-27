
> ### Functions

> 1. Adding Type Annotations to Functions 

 - if not specify \declare types for parameters of function or return type of function . then it will consider any type . this is called Implicit Any
 - adding type Annotations means specifying types for parameters of functions and return value of function.

```ts
//with out adding type Annotations . it is not clear for types . not good and not recommended
function dullFunc(value1,value2){
 return "this function is not used type annotations";
}

function dullFunc(message:string,code:number){
 return "this function is having type annotations";
}
```
---
> 2. using the --noimplictAny Compiler Option

  - "--noImplictAny" compiler option in tsconfig is used to throw error if used implicitAny functions in the script.

```ts
// Below function will throw error if turn on --noimplictAny Compiler Option
function dullFunc(value1,value2){
 return "this function is not used type annotations";
}

```
----  
  
> 3. Optional,Default , and Rest Parameters   
   - optional parameters 
      - denoted with "?" after parameter name.  
   - Default parameters
      - may be set to a literal value or an expression. 
      -  Optional & default parameters must appear after all required parameters.
   - Rest Parameters 
      - Collects group of parameters into a single array.
      - Denoted with an ellipsis prefix on last parameter.   

```ts
//age is optional parameter in the below function 
function CreateCustomer(name:string,age?:number) {}  

//title is Default parameter in the below function 
function GetBookByTitle(title:string='Cloud Computing'){}

//title is Default parameter in the below function  which is evaluted by other function 
function GetBookByTitle(title:string=GetMostPopularBook()) {}

//bookIDs are Rest Parameter
function GetBooksForCustomer(authorName:string,...boodIds:number[])
{}

//usage 
  let books =GetBooksForCustomer('Mark',2,5);
  let books =GetBooksForCustomer('Jeff',2,4,6,9);
```
---
> 4. Annotating Functions and using Parameters 

```ts
function GetReview(title:string):string|number {

  if(title=="The Wish"){return "classic movie";}
 else { return Math.floor(Math.random() * 10); }
}


function PrintMovieInfo(title:string,yearsReleased?:number=2020):void{
 
 console.log(title);

  if(yearReleased){
    console.log(`Year Released: ${yearReleased}`);
  }
}
//usage
PrintMovieInfo('The Wish'); // this will print movie name and default value of release year.
PrintMovieInfo('The Wish',1970);// this will print movie name and release year .


function PrintMovieInfo(title:string,yearsReleased?:number=2020, ... cast:string[]):void {
 
 console.log(title);
 console.log(`Year Released: ${yearReleased}`);
 console.log('cast:');
  for (const name of cast)
  {
   console.log(` ${name}`);    
  }
}

//usage
PrintMovieInfo('The Wish',2021,'mark','jeff','scott'); 
```

---

> 5. Anatomy of an Arrow Function
   - everything left side of => is function parameters.
   - everything right side of => is function body. 

```ts

let squareit= x => x*x;
let result= squareit(3); //9

let adder= (x,y) => x+y;
let sum= adder(1+3);// 4

let greeting=()=> console.log('Hello coder');
greeting();


let scores:number[]=[10,20,30,40,50];
let highsScores:number[];
highScores=scores.filter((element,index,array)=>{
   if(element>40){return true;}
 })

```
---
> 6. Converting a Traditional Funtion to an Arrow Function 
   

```ts
 function LogMessage(message:string):void
 {
  console.log(message);
 }
//Convert to arrow functions
 const LogMessage= (message:string) =>console.log(message);
 LogMessage("Convert to arrow functions");

```
---
> 7. Function overloads 
  -  same function name with different\multiple types 


```ts
function GetTitles(author:string): string[];
function GetTitles(available:boolean): string[];
function GetTitles(bookProperty:any): string[]{

 if (typeof bookProperty =='string')
 {
  //get books by author , add to foundTitles
 }
 else if (typeof bookProperty =='boolean')
 {
  //get books by availability , add to foundTitles
 }

}

function GetAllMovies(){

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

function GetReview (title:string):string|number
{
  if(title === 'The Wish')
  {
    return "The Classical movie";

  }else {

    return Math.floor(Math.random()*10);
  }
  console.log('Cast:');
  for(const name of cast)
  {
      console.log(`  ${name}`);
  }
}

function GetTitles(director:string): string[];
function GetTitles(director:string,streaming:string): string[];
function GetTitles(director:string,streaming?:string): string[]{
 const allMovies=GetAllMovies();

 const searchResults:string[]=[];

 if (typeof streaming !==undefined)
 {
    for (let movie of allMovies)
    {
      if (movie.director ===director && movie.streaming ===streaming)
      {
        searchResults.push(movie.title);

      } 
    }
 }
 else 
 {
    for (let movie of allMovies)
    {
        if (movie.director ===director )
        {
          searchResults.push(movie.title);
        } 
    }
 }
 return searchResults;
}


//usage
let movies:string[] =GetTitles('Jane Campion','Netflix');

movies.forEach(title=> console.log(title));
```
---
> 8. Taking advantages of Function Types 
   - Combination of parameter types and returns type.
   - Variables may be declared with function type.
   - Function assigned must have the same signature as the variable type.
   
```ts
  function ReleaseMessage(year:number):string { return 'Year released:'+year;}
  //usage 
  let releaseFunc :(someYear:number)=>string;
  releaseFunc= ReleaseMessage;
  let message=releaseFunc(2021);
```
---


