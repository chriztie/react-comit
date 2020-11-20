React does not have a built-in router. Therefore, a router should be installed separately. `react-router` is an open source library and it is the most popular. But it is not a part of React

`HashRouter` - places hashes in urls - Better for older browsers

`BrowserRouter` for web APIs - `HTML5 History API` is used for clean urls (No hashes in the urls as it is recommended for new web apps)

`MemoryRouter` - Does not update the URL in the browser but stores the URLs in memory and best for automated testing and non browser environments such as `react-native`

- `Router` component to wrap the entry point
- `Route` can declare the component to load using props. `exact` prop can to used to indicate to select the component if the path matches exactly
- `Link` components to create anchors. `to` prop to mention the route. Managed by react router and wont postback to the browser which enables instantaneous navigation
- `NavLink` supports `activeStyle` which supports styling. `to` prop to mention the route
- `Switch` component ensure the router picks only one route. Required when adding 404 page

Redirecting users

- `Redirect` can be used to redirect users to pages based on a condition. `to` prop to mention the route. The `from` prop is useful when it is required to navigate users from an old path to a new path

- `history.push(route)`

- `Prompt` to notify users when they try to navigate to another page. `when` should be a condition and `message` should be the text which should be displayed to users

A sample setup can be found below;

Index.js

```js
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

App.js

```js
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage} /> // Exact since mulitple
      routes are allowed
      <Route path="/custom" component={CustomPage} />
    </div>
  );
}
```

URL Parameters

```js
<Route path="/path/:segment" component={TestComponent} />
```

Sample urls would be like
`hostname/path/segmentName?queryParameter1=12&queryParameter2=13`
`comit.org/courses/react?year=2020`

Props

```js
function TestComponent(props) {
  props.match.params.segment; //segmentName
  props.location.query; // { queryParameter1 : 12, queryParameter2 : 13 }
  props.location.pathname; // /path/segmentName?queryParameter1=12&queryParameter2=13
}
```
