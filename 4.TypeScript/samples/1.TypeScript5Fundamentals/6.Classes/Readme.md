
> ### Classes

- Classes in Typescript is similarity to classes in other languages
- Class is template for creating objects.
- Provides state storage and behavior.
- Encapsulates reusable functionality.
- Inheritance
- Abstract classes
- Class expression  

> 1. Parts of Class 

   - Class members
      - Constructors 
      - Properties 
      - Methods
      - Parameter propeties 
      - Static properties 
      - Access modifiers  
         - public  (by default, all class members are public , parameter properties  )
         - private 
           - #  (private #)
         - protected (available with in that class and sub classes) 

```ts
 

  class ReferenceItem{
    //Constructor
    constructor(title:string,publisher?:string)
    {
        //perform initialization here
    }
    numberOfPages :number;

    //properties
    get editor():string{
        // getter logic  , should return a value

    }
    set editor(newEditor:string){

        //setter logic ,
    }
    //methods
    printChapterTitle(chapterNum:number):void{
        //print logic
    }
  
 }
```
```ts
 //Parameter propeties 
    class Author {
    name :string ;
    constructor(authorName:string){
        name=authorNamel
    }

    }

        //other way 
        class Author {
            // this will create and assign implicitly 
            constructor(public name:string){}
        } 
```
```ts
 // Static properties 
   Class Library{
    constructor(public name:string){}
    static description:string= 'A source of knowledge';
   }
    let lib=new Library('Chicago Public Library');
    let name =lib.name;  //available on instance of the class
    let name =lib.namedescription; // available on the class 
```
----

> 2. Creating and using Classes

```ts
//Another example 
class Album{
   private _producer: string = '';
   static medium: string = 'Audio/Video';
   get Producer(): string { 
      return this._producer.toUpperCase();
   }
    set Producer(newProducer:string) { 
       this._producer=newProducer;
   }

   constructor (public title:string,private year:number){
    console.log('Creating a new video');
  }
  printItem(){
     console.log(`${this.title} was released in ${this.year}`)
      console.log(`Medium: ${Album.medium}`)
  }
}
 //Usage
    let album = new Album('Spider man returns', 2025);
album.printItem();
album.Producer = 'Scott';
```

----

> 3. Extending Classes with inheritance
   - extending class by using inheritance for reusability 

```ts

    class ReferenceItem{
     title:string;
     printItem():void{  //print logic}

    }

    class Journal extends ReferenceItem {

        constructor (){

            super();
        }

        contributors():string[];
    }

```
----

> 4. Abstract Classes
  - Created with the "abstract" keyword
  - Base classed that may not be instantiated 
  - May contain implementation details 
  - Abstract methods are not implemented
  - Can't create instance 

```ts
abstract class Person { 
   constructor(public name: string, public email: string) { }

   abstract ToString(): string;
}

class Employee extends Person { //inheritance

   constructor(public name: string, public email: string,protected designation:string) { 
      super(name, email);
   }
   override ToString(): string {
      return `${this.name} is employee and designation is  ${this.designation}`;
   }
}

class Manager extends Employee { //hierarchical  inheritance

   constructor(public name: string, public email: string) { 
      super(name, email,'Manager');
   }
}


```
----

> 5. Class Expressions

  

```ts
 let exEmployee= class extends Person{

    constructor(public name: string, public email: string, public role:string) { 
      super(name, email);
   }
     override ToString(): string {
      return `${this.name} is employee and role is ${this.role}`;
   }
}
let exemployee = new exEmployee('Daniel', 'Daniel@noOrg.com', 'DevLead');
console.log(exemployee.ToString());

//Another expression for extending class with expression 

class Course extends class {title:string ='';}
{
    subject:string='';
}
let myCourse=new Course();
myCourse.subject

```
----