Class components can be created as per the following in React

1. createClass - The original way - works with ES5

```javascript
var SampleComponent = React.createClass({
  render: function () {
    return <h1> This is a sample component!</h1>;
  },
});
```

2. ES class - as ES6 has classes built in in the spec

```javascript
class SampleComponent extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <h1>This is a sample component!</h1>;
  }
}
```
