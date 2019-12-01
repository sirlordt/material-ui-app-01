import React, { Component } from 'react'

export default class Test01 extends Component {

  static Name = "Test01"; 

  render() {
    return (
      <div>
        { this.Name }
      </div>
    )
  }
}
