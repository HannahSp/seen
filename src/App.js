import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Discover from './pages/Discover'
import Menu from './components/Menu'
import Movie from './pages/Movie'
import Tv from './pages/Tv'
import Profile from './pages/Profile'
import Header from './layout/Header'
import Overlay from './components/Overlay';

class App extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState((prevState) => {
      return {
        menuOpen: !prevState.menuOpen
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Header openMenu={this.toggleMenu} menuActive={this.state.menuOpen}/>
          {
            this.state.menuOpen ?
              <React.Fragment>
                <Menu openMenu={this.toggleMenu}/>
                <Overlay openMenu={this.toggleMenu}/>
              </React.Fragment>
            :
              null
          }
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/discover" component={Discover} exact/>
            <Route path="/profile" component={Profile} exact/>
            {/* <Route path="/:movieId" component={Movie} exact/> */}
            <Route path="/:tvId" component={Tv} exact/>
          </Switch>

        </div>
      </BrowserRouter>

    )
  }
}

export default App
