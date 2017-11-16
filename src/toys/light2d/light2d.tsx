import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Light2dCore from './Light2dCore';

interface ILight2DProps {

}

interface ILight2DState {

}

export default class Light2D extends React.Component<ILight2DProps, ILight2DState> {

  constructor(props: ILight2DProps, state: ILight2DState) {
    super(props, state);
  }

  componentDidMount() {

    let $canvas: any = ReactDOM.findDOMNode(this.refs.canvas);

    let ctx = $canvas.getContext('2d');

    let light = new Light2dCore(ctx, $canvas.width, $canvas.height);
    light.basic();
  }

  render() {
    return <canvas ref="canvas" width="512" height="512"></canvas>;
  }

}
