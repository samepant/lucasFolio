import React from 'react';
import './slideshow.css';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      total: this.props.images.length
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.img.addEventListener('click', this.handleClick);
  }

  handleClick (e) {
    e.preventDefault();

    if (this.state.current === (this.state.total - 1)) {
      this.setState({
        current: 0
      });
    } else {
      this.setState({
          current: this.state.current + 1
      });
    }
  }

  render() {
    return (
      <div className='slideshow'>
        <img ref={img => {this.img = img}} src={this.props.images[this.state.current]} />
      </div>
    );
  }
}
