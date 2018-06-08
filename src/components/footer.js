import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.scrollUp = this.scrollUp.bind(this);
  }

  scrollUp () {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className='footer'>
        <span onClick={this.scrollUp} className='topButton'>UP TOP</span>
        <span><a href='mailto:albrech2@gmail.com'>CONTACT</a></span>
      </div>
    );
  }
}
