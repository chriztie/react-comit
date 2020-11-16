An `input` control with `value` is called a controlled component

All controlled components should have change handlers as they are all handled by react

```js
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
```

Typescript Variation

```ts
import React, { useState } from "react";
const Reservation = () => {
  const [userForm, setForm] = useState({ isGoing: false, numberOfGuests: 0 });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...userForm,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={userForm.isGoing}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={userForm.numberOfGuests}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Reservation;
```

example from the official documentation. Note the general change handler which can be reused to multiple inputs in a form

Very similar to forms in HTML yet for validation, keeping track of visited fields (Formik)[https://formik.org/] is a popular option. Otherwise, we can implement them in react
