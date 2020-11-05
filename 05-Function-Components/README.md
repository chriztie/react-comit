
Functional components can be created as per the following in React

1. Function Components

```javascript

function SampleComponent(props){  
    return(
      <h1>This is a sample component!</h1>
    )  
}

```

2. Array Function Components

```javascript

const SampleComponent = (props) => <h1>This is a sample component!</h1>

```

We will be using functional components as oppose to class components as they are recommended now!

Reasons:
1. More readable
2. It avoids the complexities of the usage of the `this` keyword 
3. Result from the transpilation is light-weight compared to class components
4. As they are pure functions, it is easy to test
5. High performance 
6. Classes may be removed in future since everything class components can do, can be done using hooks!
7. We can write less code :) 


> :grey_exclamation: Component names should always start with a capital letter.
