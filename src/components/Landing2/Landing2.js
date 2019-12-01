import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

export default class Landing2 extends Component {
  render() {
    return (
      <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
      style={{ backgroundColor: 'teal', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>

        <Grid item style={{ backgroundColor: 'yellow' }}>
            <h2>This grid item is centered both horizontally and vertically.</h2>
            <i>
              <p>
                Note the styling of body, html and #root in index.css for this to
                work.
              </p>
              <p>
                Thanks to <a href="https://codesandbox.io/s/gLE85V2D">STUNAZ</a> for
                improving upon my original!
              </p>
            </i>
        </Grid>

      </Grid>    

    )
  }
}
