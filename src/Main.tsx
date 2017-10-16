import * as React from 'react';
import {
  Route,
  NavLink,
  Link
} from 'react-router-dom';

import ActionHome from 'material-ui/svg-icons/action/home';
import AppBar from 'material-ui/AppBar';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';

import Hello from './Hello';

interface IMainProps {

}

interface IMainState {
  open: boolean
}

export default class Main extends React.Component<IMainProps, IMainState> {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title=""
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="Tailgo's"
            showMenuIconButton={false}
          />
          <Divider/>
          <List>
            <NavLink to="/">
              <ListItem primaryText="Home" leftIcon={<ActionHome/>} />
            </NavLink>
          </List>
          <Divider />
          <List>
            <ListItem
              primaryText="Email"
              leftIcon={<CommunicationEmail/>}
              onClick={() => { location.href = 'mailto:zenosturtle@outlook.com' }}
            />
          </List>
        </Drawer>
        <Route path="/" component={Hello}/>
      </div>
    );
  }
}
