> ### Decorators in TypeScripts

1. What are decorators?
  - Function that is applied to other code
  -  Form of metaprogramming  or aspect oriented programming (AOP)
  -  Similar to attributes in C# and annotations in Java
  -  May be applied to…
    - Classes
    - Methods
    - Properties
    - Fields
    - Getters/setters

```ts
export function logMethodInfo(origMethod: any, _context: ClassMethodDecoratorContext) {

  function replacementMethod(this: any, ...args: any[]) {

    console.log(`Decorated construct: ${_context.kind}`);
    console.log(`Decorated construct name: ${_context.name as string}`);

    const result = origMethod.call(this, ...args);
    return result;
  }
  return replacementMethod;
}
```