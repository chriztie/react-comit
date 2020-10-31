# TypeScript - Typed JavaScript

With TypeScript, you can get your JavaScript code type checked (validated), before runtime! Reducing a lot of headaches during development

Plain JS

```js
const user = { name: "John Doe", id: 1 };
```

TypeScript

```ts
interface User {
  id: number;
  name: string;
}

const user: User = { name: "John Doe", id: 1 };
```

Enumerations

```ts
enum Category { Land, Water, Air }; // 0, 1, 2

enum Category { Land = 1, Water, Air }; // 1, 2, 3


let myCategory: Category = Category.Land; 

```

```js
console.log(myCategory); // 1
let categoryName = Category[myCategory]; 
console.log(categoryName); // "Land"
```

if you made a spelling mistake like above when naming properties, then you will be warned. No surprises in the production!

It supports composing types

```ts
type CovidStatus = "vaccinated" | "vulnerable" | "infected";
```

Arrays
```ts
let stringArray1 : string[] = ["string-1", "string-2"];
let stringArray2 : Array<string> = ["string-3", "string-4"];
```

Functions

```ts
 function GenerateName(firstArgument: string, secondArgument: number) : string {
  return firstArgument + secondArgument;
 }

``` 

Optional Parameters to functions - Make sure they are at last
```ts
 function GenerateName(firstArgument: string, secondArgument?: number) : string {
  if (secondArgument)
  {
    return firstArgument + secondArgument;
  }
  return firstArgument;
 }

``` 

Function Overloading 
```ts
function SameName(firstArgument: string) : void;
function SameName(firstArgument: number) : void;
function SameName(firstArgument: any): void {
  if(typeof firstArgument === "string"){
    // Something :)
  }
  if(typeof firstArgument === "number"){
    // Something else :)
  }
}

```

Enables Object Oriented Programming

```ts
interface User {
  name: string;
  id: number;
}

class UserAccount {  
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Administrator", 123);
```
