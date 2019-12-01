import React, { Component } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import HomeCenter from '../HomeCenter/HomeCenter';

class Layout01 extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeCenter />
        <Footer/>
      </div>
    )
  }
}
export default Layout01;