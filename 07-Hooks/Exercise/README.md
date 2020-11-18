1. Add a form (text boxes to store name, age and city) to your main component and store all the values using `useState` and display all the contents of your form, using labels. Make sure the labels get updated when user types in details.

2. 
Using context API create a context to store a number (this will be the value of your cart) in your main app component. Format the number and display it in the main component. Refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat for formatting currency values.

Create another component namely `ProductListing`. And have a collection of products. A product should have a name, description and a unit price.

Introduce another component as `Product` and display product details of a single product in the component. In addition to product details, have a text box to capture quantity and also a button as "Add to cart". When the button is clicked, multiply the unit price with the quantity and update the total. Ensure total is updated accurately.

