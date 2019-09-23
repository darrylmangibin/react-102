This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


1. Create index.js from the src directory
```
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

import App from './App'

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
```
2. Create App.js from the src directory
```
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

export default App;
```
3. Create a components folder(this will hold all our different components)
4. Add a Header folder under the components folder and create index.js under the Header folder.
5. Add this code in the Header Component from its index.js
```
import React from 'react';

const Header = () => {
  return (
    <header>
      HEADER
    </header>
  )
}

export default Header;
```
6. Import the Header Component to the App.js
```
import React from 'react';

import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

export default App;
```
7. Change the div element into React.Fragment(an empty element to hold multiply lements)
8. Use the Header Component by using <Header /> in the index.js under the src directory
```
import React from 'react';

import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}

export default App;
```
9. Add an Actions folder under the components folder and add index.js. This Component will be our filter input to to hide the completed Items(You will see later from this tutorial)
10. Under the index.js from the Actions folder
```
import React from 'react';

class Actions extends React.Component {
  render() {
    return (
      <div>
        Actions
      </div>
    )
  }
}

export default Actions;
```
11. Import the Actions Component to our App.js
```
import React from 'react';

import Header from './components/Header';
import Actions from './components/Actions';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Actions />
      </React.Fragment>
    )
  }
}

export default App;
```