# Fetch with Star Wars Cards

Fetching data is awesome, yet it can be frightening at the beginning. But don't worry, we are going to make you familiar with the syntax and it will be fine ;)

## Task

Have a look at the [index.js](js/index.js) file: There is an `EXAMPLE_DATA` object with information about Luke Skywalker. We use this object to create a DOM element with the `Card()` function and append this element to the DOM with the help of `renderElement`.

This approach is very static and not very handy. Lets get more data and create new cards from them dynamically!

### Task 1: Fetch data from the Star Wars Api:

Fetch data from the star wars api (https://swapi.dev/api/people).

Use the `async` and `await` keywords to receive the response and request the data with the `.json() method`.
Use a `console.log()` to look at the received data!

### Task 2: Moooooooooore cards!

Use an array method to create and render a card for each object in the fetched data array.

The following hints may guide you:

- What was the array method again to perform an action **for each** element?
- You can use the functions `Card()` and `renderElement()` to create those cards, see the explanation above!

Please switch to the [index.js](js/index.js) file to start counting!