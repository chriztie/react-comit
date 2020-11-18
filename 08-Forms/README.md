An `input` control with `value` is called a controlled component

All controlled components should have change handlers as they are all handled by react

```ts
import React, { useState } from "react";
const Reservation = () => {
    const [userForm, setForm] = useState({ isGoing: false, numberOfGuests: 0 });
  const [errors, setErrors] = useState<any>();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...userForm,
      [target.name]:
        target.type === "checkbox" ? target.checked : +target.value,
    });
  };

  const validateForm = (): boolean => {
    const _errors : { [key: string]: any } = {};

    if (userForm.numberOfGuests === 0) {
      _errors.numberOfGuests = true;
      _errors.numberOfGuestsErrorMessage = "Number of guests cannot be zero!";
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!validateForm()) return;
    //Form is valid. You may call an API
    console.log(userForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="isGoing">Is going:</label>
        <input id="isGoing"
          name="isGoing"
          type="checkbox"
          value={+userForm.isGoing}
          onChange={handleChange}          
         />              
      </div>
      <div>
      <label htmlFor="numberOfGuests"> Number of guests: </label>
        <input
          id="numberOfGuests"
          name="numberOfGuests"
          type="number"
          value={userForm.numberOfGuests}
          onChange={handleChange}
        />      
      {errors && errors.numberOfGuests && <label style={{color:'red'}}>{errors.numberOfGuestsErrorMessage}</label>}
      </div>
      <div><button type="submit">Add</button></div>
    </form>
  );
};

export default Reservation;
```

Note the general change handler which can be reused to multiple inputs in a form

Very similar to forms in HTML yet for validation, keeping track of visited fields (Formik)[https://formik.org/] is a popular option. Otherwise, we can implement them in react
