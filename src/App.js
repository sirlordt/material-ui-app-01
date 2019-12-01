import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeRed from './components/HomeRed/HomeRed';
import HomeBlue from './components/HomeBlue/HomeBlue';
import Landing from '../src/components/landing/Landing';

import AppStoreContext from './store/AppStoreContext';
import Layout01 from './components/Layout01/Layout01';
import Landing2 from './components/Landing2/Landing2';

//import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';

/*
import 'typeface-roboto';

const styles = {
  container: {
  },
  button_hw: {
    marginLeft: '10px' 
  }
};
*/

class App extends React.Component {

  /* jshint ignore:start */
  state = {
  
    get: (key) => {
    
      return this.state[ key ];

    },

    set: (key, value) => {
      
      const state = this.state;
      state[ key ] = value;
      this.setState( state );
      
    },

    remove: key => {
    
      const state = this.state;
      delete state[ key ];
      this.setState( state );

    }
  
  }   
  /* jshint ignore:end */

  componentDidMount() {

    console.log( "componentDidMount" );   

    this.state.set( 'firstName', 'Anonymous' );
    this.state.set( 'lastName', '' );
    //this.state.set( 'globalCounter', 0 );
    //this.state.set( 'logToConsole', false );

  }

  render() {
    
    return (
    
      <AppStoreContext.Provider value={ this.state }>
         
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/HomeRed' component={HomeRed}/>
          <Route path='/HomeBlue' component={HomeBlue}/>
          <Route path='/Layout01' component={Layout01}/>
        </Switch>
      
      </AppStoreContext.Provider>

    )

  } 

  /* -- jshint ignore:start -- * /
  render() {
    return (
      <div>
      <Button variant="contained" color="primary">
      <Icon>start</Icon>
      <span style={styles.button_hw}>Hello World</span>
      </Button>
        
      </div>
    )
  }
  / * -- jshint ignore:end -- */

}

export default App;

/*
import 'typeface-roboto';

const styles = {
  container: {
  },
  button_hw: {
    marginLeft: '10px' 
  }
};

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
      <Icon>padlock</Icon>
      <span style={styles.button_hw}>Hello World</span>
      </Button>
    </div>
  );
}

export default App;
*/
