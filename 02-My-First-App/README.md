# 1. Adding React to an existing web application

Add the following scripts to the main page (index.html)

```html
<script
  src="https://unpkg.com/react@16/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/babel-standalone@6/babel.min.js"
  crossorigin
></script>
```

Add the following tag to the body
`<div id="root"></div>`

Add the following code segment inside the `<head>`

```javascript
<script type="text/babel">
    const DummyComponent = () => {

      return <h1>Your Dummy Component!</h1>;
    }

    ReactDOM.render(React.createElement(DummyComponent), document.getElementById('root'));
</script>
```

As the babel to js transpilation is in runtime, this method is not recommended for production

# 2. Building a React app from the scratch

## Prerequisites

1. Install [Node](https://nodejs.org/en/download/) if you haven't already, as we need Node Package Manager to install all the required packages. You may run `node -v` to check the version. Ensure at least version 8 is installed.

2. Install VS Code if you haven't already. It is free and most popular code editor ;)

3. Install `Prettier - Code formatter` extension, it is your friendly code formatter. Enable formatOnSave under settings

4. Install `ESLint` extension to see code issues in the editor. (This is automatically installed with create-react-app but code issues will not be displayed in the editor but in the terminal!)

## create-react-app

`npx create-react-app [yourAppName] --template typescript`

> :grey_exclamation: Names should not contain periods and all letters should be in lower case

## Start Application

`cd [yourAppName]` to change your directory

`npm start` to start the application

### References
[create-react-app documentation](https://create-react-app.dev/docs/getting-started)
