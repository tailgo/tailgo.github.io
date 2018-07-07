import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './Main';

import './style/reset.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Main />
        </Router>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
