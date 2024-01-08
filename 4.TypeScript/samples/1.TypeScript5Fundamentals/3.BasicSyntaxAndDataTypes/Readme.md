
> Basic TypeScript Types 
1. Boolean
2. Number
3. String 
4. Array 
5. Enum
---
> Declaration with *let* and *const*

```typescript
console.log(greeting);
var greeting ='Hello ';
```


```typescript

console.log(greeting);
let greeting ='Hello '; //will throw  error 
 
```

```typescript
let greeting ='Hello ';
console.log(greeting);//will not throw error 

```


```typescript
const  greeting ='Hello '; // will not allow to change value of greeting later in the code after this line.
console.log(greeting);//will not throw error 

```
---
> Type Annotations and Type Inference

```typescript
let x:string='This is string forever'
x= 14; // This will throw error , as it will allow only strings

let y='This is string forever'
x= 14; // This will also throw error , as it will allow only strings

let z=GetStringValue();  // type of the z variable should be type of return value of GetStringValue()

let z:string =GetStringValue();  // type of the z variable should be string which should be equal to type of return value of GetStringValue() so it should be more specific
```
---
> Additional Built-in Types
  - void 
  - Null
  - undefined

  These are the types inherited from java script. these types are available in type script but not good and not recommended to use them 

  Below are the alternative types 
   - Never (return value should be never )
   - Any ( which can allow to assign any type  value to it.)

  ---


  > Union  Types and the strictNullChecks

   - Union Types are combinition of two or more types using "|"

```typescript
let alphaNumeric= number| string ; // it will allow number and string values

alphaNumeric=12;
alphaNumeric ='Hello';
alphaNumeric= true; // true will not allow to assign 

```
- strictNullChecks Compiler Option:

```typescript

let basicString:string;
basicString=null; // basicString (string variable) doesn't allow null.
basicString=undefined; // basicString (string variable) doesn't allow undefined. 

let nullableString:string | null;
nullableString=null;

let UnknownString:string | null| undefined;
UnknownString=null;
UnknownString =undefined;
```
---
> Arrays

We can declared two different ways.

```typescript
 let strArray:string[] =['here','are','string','values'];
 let Array2:Array<string> =['more','strings','values'];

 let AnyArray:any[] =[80,true,'banana'];// array of "any" to store any type in the same array.
```
  
---
> Control flow

  - for
  - while do
  - Do While


```typescript 
 for (let i=1; i<=5; i++)
 {

    if(i%2==0){
        console.log(`${i} - even`);
    }
    else {
        console.log(`${i} - odd`);
    }
 }
```
```typescript 

let i :number =1;
while (i<=5>)
 {

    if(i%2==0){
        console.log(`${i} - even`);
    }
    else {
        console.log(`${i} - odd`);
    }
    i++;
 }
```

```ts
let fruit:string='apple';

switch(fruit){

    case 'banana':
          console.log('selected an orange');
          break;
    case 'apple':
            console.log('selected an orange');
          break;
  default:
    console.log('selected a different fruit.');
          break;
}
```
