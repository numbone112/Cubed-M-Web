import React from 'react';
import ReactDOM from 'react-dom/client';
import { Segment, Sidebar, Menu, Icon, Header, Image } from 'semantic-ui-react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {Navigation} from 'react-minimal-side-navigation';
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import 'semantic-ui-css/semantic.min.css'

import './index.css';
import reportWebVitals from './reportWebVitals';
import { main } from './module/router'
const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "visible": false
    }
  }
  setVisible(value) {
    this.setState({ "visible": value })
  }
  render() {
    return (<> <BrowserRouter>
      <div>
        <Icon name='bars' onClick={()=>{this.setVisible(true)}} size={'large'}/>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            
            icon='labeled'
            inverted
            onHide={() => this.setVisible(false)}
            vertical
            visible={this.state.visible}
            width='thin'
          >
            <Menu.Item as='a' >
              <Icon name='home' onClick={()=>{}}/>
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
           
          </Sidebar>

          <Sidebar.Pusher
          // dimmed={visible}
          >
            <Routes>

              {main.map((router, index) =>
                <Route  key={index} {...router.routeProps} />
              )}
            </Routes>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
<div className='footer'></div>
      </div>
    </BrowserRouter></>)
  }
}
root.render(

  <App ></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
