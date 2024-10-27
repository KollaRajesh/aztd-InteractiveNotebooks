> ### Modules 

 1. **Why do need Modules** 
    Modules used for below aspects 
       - Encapsulation 
       - Reusability 
       - Create higher-level abstractions 
       - Flexible usage
       - Configurable resolution strategies.
  
  Type script Compiler uses java script modules (AMD, CommonJS, UMD , System , ES 2015) and load/Bundle using set of JS frameworks (Node, RequireJS, SystemJS and Webpack )        

 2. **Exporting a Declaration** 
  
  we can export typescipts types (class , interface , functions) using export keyword 

```ts
  // person.ts
    export interface Person { }
    export function hireDeveloper(): void { }
    export default class Employee { }
    class Manager { } // not accessible outside the module
```
  - In other way of exporting types using exporting statement 

```ts
// person.ts
    interface Person { }
    function hireDeveloper(): void { }
    class Employee { }
    class Manager { } // not accessible outside the module
    export { Person, hireDeveloper, Employee as StaffMember };
```

3. **Importing Modules** 

Importing types from module using *import* keyword

```ts
// player.ts
    import { Person, hireDeveloper } from './person';
    let human: Person;

    import Worker from './person';
    let engineer: Worker = new Worker();
    
    import { StaffMember as CoWorker } from './person';
    let emp: CoWorker = new CoWorker();
    
    import * as HR from './person';  // we can use * to import all types from module. if we use as keyword to define alias which can be used as namespace to access types.
    HR.hireDeveloper();
```
4. **Relative vs Non-relative imports** 
    
   - Relative imports are reffered to  import the module from specific location in the project.
   - Non-Relative imports are reffered to import the module from external js packages.
```ts 
// relative imports
import { Laptop } from '/hardware';
import { Developer } from './person';
import { NewHire } from '../HR/recruiting';

// non-relative imports
import * as $ from 'jquery';
import * as lodash from 'lodash';

```

5. **Module Resolution Strategies**
 there are two strategies for module resolution 
   1. Classic 
   2. Node

**Classic**
  -  Default when emitting AMD, UMD,
  -  System, or ES2015 modules
  -  Simple
  -  Less configurable

**Node**
  - Default when emitting CommonJS
  -  modules
  -  Closely mirrors Node module
  -  resolution
  -  More configurable