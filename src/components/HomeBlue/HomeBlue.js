import React, { Component } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";

import { ThemeProvider } from '@material-ui/styles';
//import ThemeBlue from '../../themes/ThemeBlue';

import AppStoreContext from "../../store/AppStoreContext";

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

class HomeBlue extends Component {
  //in the next line does the magic, binding this.context to the value of the Provider
  static contextType = AppStoreContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  onButtonLogoutClick( event ) {
    /*
    console.log( 'onButtonLogoutClick' ); 

    console.log( event ); 

    //let strFirstName = this.context.get( 'firstName' );
    */

    let strFirstName = "Anonymous";

    this.context.set( "firstName", strFirstName );

    let strLastName = "";

    this.context.set( "lastName", strLastName );

    this.props.history.push("/");
    //history.push( "/home" );
  }

  render() {

    const { classes } = this.props;

    return (
      <ThemeProvider theme={ this.context.theme }>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Home Blue
              </Typography>
              <Button
                color="inherit"
                onClick={this.onButtonLogoutClick.bind(this)}>
                Logout
              </Button>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu">
                <MenuIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Paper>
            <div>
              Hello {this.context.firstName} {this.context.lastName}
            </div>
          </Paper>
        </div>
      </ThemeProvider> 
    );
  }

}

HomeBlue.propTypes = {
  
  classes: PropTypes.object.isRequired

};

export default withStyles(styles)(HomeBlue);
