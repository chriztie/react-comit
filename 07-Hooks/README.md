# Hooks

Hooks only work in functional components

### useState

useState is a hook introduced for the purpose of state management

```js
import React, { useState } from 'react';

const FunctionComponentExample ()  {
  const [name, setName] = useState<string>("John Doe");
  onChange(event) {
    setName(event.currentTarget.value);
  }

  return <input onChange={onChange} value={name} />;

};
```

## useEffect

useEffect is a hook introduced for the purpose of handling side effects

useEffect runs immediately after each render OR when the dependency array changes when one specified

Hooks shouldn't be inside if statements, loops or functions. Should be declared on top!

```js
import React, { useState, useEffect } from "react";

const Sample() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = `Number of times clicked: ${count}`;
  }, [count])

  return <button onClick={()=> setCount(count + 1 )} value="Click Me!"/>
}

```

## useContext

useContext is a hook introduced for the purpose of storing infrequently updated data which is referenced by multiple components. Can reduce `prop drilling`

Provider can be set up as follows;

```js
const MyContext = React.createContext(defaultValue);

<MyContext.Provider value={/**/}>

```

Consumers can refer as follows;

```js
const context = useContext(MyContext);
```

## useReducer

useReducer is a hook introduced for the purpose of managing state. When managing state is complex especially when you have multiple sub values in your state OR when your new state depends on the previous state, you may use this hook

```js
import React, {useReducer} from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>

  );
}
```

## useRef

Used to refer a mutable object for the full lifetime of the component. 

```js
const App = () => {
  const inputElement = useRef<HTMLInputElement>(null);
  const handleClick = () => {    
    inputElement?.current?.focus();
  };
  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={handleClick}>Focus the text field!</button>
    </>
  );
}
```
