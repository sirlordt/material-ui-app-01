import React, { Component } from "react";
//import { makeStyles, createStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
//import { sizing } from '@material-ui/system';
//import Container from '@material-ui/core/Container';

import Flexbox from 'flexbox-react';

import { styled } from '@material-ui/styles';

//import { withRouter } from "react-router-dom";

import ThemeBlue from '../../themes/ThemeBlue';
import ThemeRed from '../../themes/ThemeRed';

import AppStoreContext from '../../store/AppStoreContext';
import { Box } from "@material-ui/core";
import WithTheme from "../WithTheme/WithTheme";
import Test01 from "../Test01/Test01";
//import { compose } from "@material-ui/system";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});

const LocalButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

/*
const LocalTypography = styled(Typography)({
  flexGrow: 1,
});
*/

class Landing extends Component {
  
  //in the next line does the magic, binding this.context to the value of the Provider   
  static contextType = AppStoreContext;

  //static x = Style1();

  constructor(props) {
    
    super(props);

    this.state = {};

  }

  onButtonLoginClick( strKind, event ) {

    console.log( 'onButtonLoginClick' ); 

    console.log( event ); 

    if ( strKind === 'red' ) {

      this.context.set( 'theme', ThemeRed );     

      let strFirstName = 'Loly Valentina'; 

      this.context.set( 'firstName', strFirstName );     
  
      let strLastName = 'Gómez Fermín'; 
  
      this.context.set( 'lastName', strLastName );     
  
      this.props.history.push( "/homeRed" );

    }
    else if ( strKind === 'blue' ) { 

      this.context.set( 'theme', ThemeBlue );     

      let strFirstName = 'Tomás Rafael'; 

      this.context.set( 'firstName', strFirstName );     
  
      let strLastName = 'Moreno Poggio'; 
  
      this.context.set( 'lastName', strLastName );     

      this.props.history.push( "/homeBlue" );

    }
    else if ( strKind === 'layout01' ) { 

      this.props.history.push( "/layout01" );

    }      
      //history.push( "/home" );

  } 

  render() {

    const { classes } = this.props;

    //console.log( classes );
    //console.log( this.props );

    console.log( Test01.Name );

    //<Flexbox element="header" height="60px">  
    return (

      <Flexbox flexDirection="column" minHeight="100vh">
        
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Landing
            </Typography>
            <Button color="inherit" onClick={ this.onButtonLoginClick.bind( this, 'red' ) }>Login Red</Button>
            <Button color="inherit" onClick={ this.onButtonLoginClick.bind( this, 'blue' ) }>Login Blue</Button>
            <Button color="inherit" onClick={ this.onButtonLoginClick.bind( this, 'layout01' ) }>Layout 01</Button>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Flexbox flexGrow={1}>
          Content
          <WithTheme></WithTheme>
          <Test01></Test01>
        </Flexbox>

        <Flexbox element="footer" height="60px" className={classes.root}>
        </Flexbox>

      </Flexbox>

    );
    
    /*
    return (

      <div style={ { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, } }>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Landing
            </Typography>
            <Button color="inherit" onClick={ this.onButtonLoginClick.bind( this, 'red' ) }>Login Red</Button>
            <Button color="inherit" onClick={ this.onButtonLoginClick.bind( this, 'blue' ) }>Login Blue</Button>
            <Button color="inherit" onClick={ this.onButtonLoginClick.bind( this, 'layout01' ) }>Layout 01</Button>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper className={ classes.content }>
          <div>Hello {this.context.firstName} {this.context.lastName}</div>
          <LocalButton>Test</LocalButton>
        </Paper>
      </div>
  
    );
    */
  
  }

}

Landing.propTypes = {
  
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Landing);

/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Landing() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
*/
