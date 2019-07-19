# Depop Shop frontend

A simple mocked products API client written using React.
This features consumption of the API, as well as possibilty to show/hide some products and like some others.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start

In the project directory, you can run either:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## Design notes

- Most components are separated for cleanliness, but they are all in the same source file (`App.jsx`).
- This uses function-based components as well as React hooks to embrace modern React practices
- To limit complexity, all data is retained in states. This could have been a potential good candidate for a store (Redux) but it's left as a possible extension. Actions / API calls are seperated as a stub for such design.
- A couple of tests are provided as an example.
