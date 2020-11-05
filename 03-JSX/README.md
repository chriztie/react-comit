# JavaScript Expressions

Writing HTML in JavaScript.

`<H1>Hello World</H1>` gets transpiled to `React.createElement("H1", null, "Hello World")`

The keyword `class` is reserved for JavaScript, therefore use `className` instead

All event names should be in camel case (`onclick` should be `onClick`)

Style attributes should be specified in object notation

`<h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>`

Blank `<>` tags `</>` are permitted (or `<Fragment>`) to group elements as render method only supports a single element
