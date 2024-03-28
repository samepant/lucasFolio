import React from 'react';
import {Collapse} from 'react-collapse';
import './resume.css';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      study: true,
      work: true,
      write: true,
      teach: true,
      curate: true,
      show: true,
      workshop: true,
      speak: true
    }

    this.handleSize = this.handleSize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleSize();
    window.addEventListener('resize', this.handleSize);
  }

  handleSize () {
    if (window.innerWidth < 700) {
      this.setState({
        study: true,
        work: false,
        write: false,
        teach: false,
        curate: false,
        show: false,
        workshop: false,
        speak: false
      });
    } else {
      this.setState({
        study: true,
        work: true,
        write: true,
        teach: true,
        curate: true,
        show: true,
        workshop: true,
        speak: true
      });
    }
  }

  handleClick (e) {
    if (window.innerWidth < 700) {
      const name = e.target.innerHTML.toLowerCase();
      let newState = {
          study: false,
          work: false,
          write: false,
          teach: false,
          curate: false,
          show: false,
          workshop: false,
          speak: false
        };
      if (this.state[name] === true) {
        newState[name] = false
      } else {
        newState[name] = true
      }

      this.setState(newState);
    }
  }

  render() {
    return (
      <div className='resume'>
        <div className='chunk'>
          <div className='topic'>
            <p onClick={this.handleClick}>SCHOOLING</p>
            <Collapse isOpened={this.state.study}>
            <div>
                <p>School of Visual Arts</p>
                <p>MA Design Research, Writing and Criticism</p>
                <p>2023</p>
              </div>
               <div>
                <p>Cranbrook Academy of Art</p>
                <p>MFA 2D Design </p>
                <p>2018</p>
              </div>
              <div>
                <p>University of Illinois</p>
                <p>BFA Graphic Design </p>
                <p>BFA Painting </p>
                <p>2013</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>TEACHING</p>
            <Collapse isOpened={this.state.teach}>
            <div>
                <p>Alfred University</p>
                <p>2024 adjunct professor</p>
              </div> 
            <div>
                <p>SUNY Alfred State</p>
                <p>2023 fulltime instructor</p>
              </div>
            <div>
                <p>Pratt Institute</p>
                <p>2019-2021 adjunct professor</p>
              </div>
              <div>
                <p>Lawrence Tech University</p>
                <p>2017 adjunct professor</p>
              </div>
              <div>
                <p>Oakland University</p>
                <p>2017 adjunct professor</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>CURATING</p>
            <Collapse isOpened={this.state.curate}>
              <div>
                <p>Snakes Tie Themselves Into Knots To&nbsp;Aid in&nbsp;Shedding Their&nbsp;Skin</p>
                <p>2018</p>
              </div>
              <div>
                <p>Snake With No Name</p>
                <p>2018</p>
              </div>
              <div>
                <p>TOYOYOYOTA GALLERY</p>
                <p>2017</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>WRITING</p>
            <Collapse isOpened={this.state.write}>
            <div>
              <p>How To: Nail a Hammer</p>
                <p>2018 <i>How To: Draw Conclusions</i></p>
              </div>
              <div>
              <p>Grand Circus</p>
                <p>2018 <i>The School that Makes the School</i></p>
              </div>
            </Collapse>
          </div>

        </div>
        <div className='chunk'>
          
        <div className='topic'>
            <p onClick={this.handleClick}>WORKING</p>
            <Collapse isOpened={this.state.work}>
            <div>
                <p>independent creative</p>
              <p>since 2016</p>
            </div>
              <div>
                <p>Sylvain</p>
                <p>2021–2022 lead designer</p>
              </div>
              <div>
                <p>Wright Auction</p>
                <p>2013–2016 graphic designer</p>
              </div>
            </Collapse>
          </div>



          <div className='topic'>
            <p onClick={this.handleClick}>SHOWING</p>
            <Collapse isOpened={this.state.show}>
            <div>
                <p>Brand Magazine</p>
                <p>2019</p>
              </div>           
              <div>
                <p>Design Calendar</p>
                <p>2018</p>
              </div>  
               <div>
                <p>Thesis at Cranbrook Academy of Art</p>
                <p>2018</p>
              </div>
              <div>
                <p>STA 100</p>
                <p>2017</p>
              </div>
              <div>
                <p>Remedies at Forum Gallery</p>
                <p>2017</p>
              </div>
              <div>
                <p>CHGO DSGN at Expo Chicago</p>
                <p>2014</p>
              </div>
              <div>
                <p>CHGO DSGN at Chicago Cultural Center</p>
                <p>2014</p>
              </div>
              <div>
                <p>CU & ME at Figure One Gallery</p>
                <p>2012</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>WORKSHOPING</p>
            <Collapse isOpened={this.state.workshop}>
              <div>
                <p>SpaceSpaceSpace (organizer)</p>
                <p>2018</p>
              </div>
              <div>
                <p>We Want a Relationship (organizer)</p>
                <p>2017</p>
              </div>
              <div>
                <p>(b)art History /Bart de Baets Workshop</p>
                <p>2018</p>
              </div>
              <div>
                <p>N+D+M / Yale Workshop</p>
                <p>2012</p>
              </div>
            </Collapse>
          </div>
          <div className='topic'>
            <p onClick={this.handleClick}>SPEAKING</p>
            <Collapse isOpened={this.state.speak}>
              <div>
                <p> AdobeLive</p>
                <p>2018 Editorial Design</p>
              </div>
              <div>
                <p>AIGA</p>
                <p>2018 Fresh Grads</p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}
