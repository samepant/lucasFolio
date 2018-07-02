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
            <p onClick={this.handleClick}>STUDY</p>
            <Collapse isOpened={this.state.study}>
              <div>
                <p>MFA in 2D</p>
                <p>Cranbrook Academy of Art</p>
                <p>2018</p>
              </div>
              <div>
                <p>BFA in Graphic Design</p>
                <p> University of Illinois Urbana-Champaign</p>
                <p>2013</p>
              </div>
              <div>
                <p>BFA in Painting</p>
                <p> University of Illinois Urbana-Champaign</p>
                <p>2013</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>WORK</p>
            <Collapse isOpened={this.state.work}>
            <div>
                <p> Freelance Graphic Designer and Art Director</p>
              <p>2018 | Brooklyn, NY</p>
            </div>
              <div>
                <p>Department Assistant for 2D Department at CAA</p>
                <p>2017–2018 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>Freelance Graphic Designer and Art Director</p>
                <p>2017 | San Francisco, CA</p>
              </div>
              <div>
                <p>Graphic Designer at Wright Auction</p>
                <p>2013–2016 | Chicago, IL</p>
              </div>
              <div>
                <p>Design Intern at Faust</p>
                <p>2013 | Chicago, IL</p>
              </div>
              <div>
                <p>Design Intern at Torque</p>
                <p>2013 | Chicago, IL</p>
              </div>
              <div>
                <p>Design Director at Smith Enterprises</p>
                <p>2012–2013 | Champaign, IL</p>
              </div>
              <div>
                <p>Design and Operations Intern at Fresh Press</p>
                <p>2012–2013 | Champaign, IL</p>
              </div>
              <div>
                <p>Instructional Designer at OCE-UIUC</p>
                <p>2012 | Champaign, IL</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>WRITE</p>
            <Collapse isOpened={this.state.write}>
              <div>
                <p> The School that Makes the School for Grand Circus</p>
                <p>fifth issue, 2018</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>SPEAK</p>
            <Collapse isOpened={this.state.speak}>
              <div>
                <p> Editorial Design AdobeLive</p>
                <p>2018 | New York, NY</p>
              </div>
              <div>
                <p>AIGA’s Fresh Grads</p>
                <p>2018 | New York, NY</p>
              </div>
            </Collapse>
          </div>
        </div>
        <div className='chunk'>
          <div className='topic'>
            <p onClick={this.handleClick}>TEACH</p>
            <Collapse isOpened={this.state.teach}>
              <div>
                <p> Adjunct Professor at Lawrence Technological University</p>
                <p>2017 | Southfield, MI</p>
              </div>
              <div>
                <p> Adjunct Professor at Oakland University</p>
                <p>2017 | Rochester, MI</p>
              </div>
              <div>
                <p> Teacher Assistant for Art Discovery Course</p>
                <p>2011–2013 | Champaign, IL</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>CURATE</p>
            <Collapse isOpened={this.state.curate}>
              <div>
                <p> Snakes Tie Themselves Into Knots To Aid in Shedding Their&nbsp;Skin</p>
                <p>2018 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>Snake With No Name</p>
                <p>2018 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>TOYOYOYOTA GALLERY</p>
                <p>2017 | Bloomfield Hills, MI</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>SHOW</p>
            <Collapse isOpened={this.state.show}>
              <div>
                <p>Thesis at Cranbrook Academy of Art</p>
                <p>2018 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>STA 100</p>
                <p>2017 | Chicago, IL</p>
              </div>
              <div>
                <p>Remedies at Forum Gallery</p>
                <p>2017 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>CHGO DSGN at Expo Chicago</p>
                <p>2014 | Chicago, IL</p>
              </div>
              <div>
                <p>CHGO DSGN at Chicago Cultural Center</p>
                <p>2014 | Chicago, IL</p>
              </div>
              <div>
                <p>CU & ME at Figure One Gallery</p>
                <p>2012 | Champaign, IL</p>
              </div>
            </Collapse>
          </div>

          <div className='topic'>
            <p onClick={this.handleClick}>WORKSHOP</p>
            <Collapse isOpened={this.state.workshop}>
              <div>
                <p>SpaceSpaceSpace (organizer)</p>
                <p>2018 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>We Want a Relationship (organizer)</p>
                <p>2017 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>(b)art History /Bart de Baets Workshop</p>
                <p>2018 | Bloomfield Hills, MI</p>
              </div>
              <div>
                <p>N+D+M / Yale Workshop</p>
                <p>2012 | Champaign, IL</p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}
