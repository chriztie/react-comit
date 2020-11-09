## Properties passed from parent to child components and they look like attributes in HTML

```javascript

interface ChildProps{
  name: string;
}

function Child(props : ChildProps) {
  return <div>Childs name is {props.name}</div>;
}

<Child name="John Doe">


const nameValue = "John Doe";
<Child name={nameValue}>

```
props are immutable (Read-only)



## Default Props

At times, you should send default properties, in such times, you should inherit your component from `FunctionComponent`

```js
import PropTypes from "prop-types";

import React, { FunctionComponent } from 'react';

export interface SampleComponentProps {
  requiredProperty: string;
  isDefault?: Boolean;
}

const SampleComponent: FunctionComponent<SampleComponentProps> = (props) => {

  return <div>{props.requiredProperty}</br>{props.isDefault}</div>;
}

SampleComponent.defaultProps = {
  isDefault: true
};

export default SampleComponent;
```
