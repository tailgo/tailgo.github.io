import * as React from 'react';

interface HelloProps {
  name: string
}

interface HelloState {
  date: Date
}

class Hello extends React.Component<HelloProps, HelloState> {

  public timerID: number;

  constructor(props: HelloProps) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <div>Hello, { this.props.name }</div>
        <div>Now is { this.state.date.toLocaleTimeString() }</div>
      </div>
    );
  }
}

export default Hello;
