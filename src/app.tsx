import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './Hello';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name="tailgo"></Hello>
      </div>
    );
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
