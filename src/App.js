import React, { Component } from 'react';
import Slideshow from './components/slideshow';
import Resume from './components/resume';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <span>LUCAS ROSITO ALBRECHT</span>
          <span className='contact'><a href='mailto:albrech2@gmail.com'>CONTACT</a></span>
        </div>
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;

const imageSlides = {
  kur: ['kur0.gif','kur1.jpg','kur2.jpg','kur3.jpg','kur4.png','kur5.png'],
  emily: ['emily1.jpg','emily2.jpg','emily3.jpg','emily4.jpg','emily5.jpg','emily6.jpg','emily7.jpg','emily8.jpg','emily9.jpg','emily10.jpg','emily11.jpg','emily12.jpg','emily13.jpg','emily14.jpg','emily15.jpg','emily16.jpg','emily17.jpg','emily18.jpg','emily19.jpg','emily20.jpg','emily21.jpg','emily22.jpg','emily23.jpg','emily24.jpg','emily25.jpg','emily26.jpg'],
  space: ['space1.gif','space2.jpg','space3.jpg','space4.jpg','space5.jpg','space6.jpg','space7.jpg'],
  stepBrother: ['stepBrother2.jpg','stepBrother1.jpg','stepBrother3.jpg','stepBrother0.jpg'],
  sb: ['stepBrother4.jpg','stepBrother5.jpg','stepBrother6.jpg','stepBrother7.jpg','stepBrother8.jpg','stepBrother9.jpg','stepBrother10.jpg','stepBrother11.jpg'],
  toyota: ['toyoyoyota1.jpg','toyoyoyota2.jpg','toyoyoyota3.jpg','toyoyoyota4.jpg'],
  alberte: ['alberte1.jpg','alberte2.jpg','alberte3.jpg','alberte4.jpg','alberte5.jpg','alberte6.jpg','alberte7.jpg','alberte8.jpg','alberte9.jpg','alberte10.jpg','alberte11.jpg','alberte12.jpg','alberte13.jpg','alberte14.jpg','alberte15.jpg'],
  painting: ['painting0.jpg','painting1.jpg','painting2.jpg','painting3.jpg','painting4.jpg','painting5.jpg','painting6.jpg','painting7.jpg','painting8.jpg','painting9.jpg'],
  anything: ['anything1.jpg','anything2.jpg','anything3.jpg'],
  work: ['work3.jpg','work2.jpg','work4.jpg','work1.jpg'],
  jing: ['jing1.jpg','jing2.jpg','jing3.jpg','jing4.jpg','jing5.jpg','jing6.jpg','jing7.jpg','jing8.jpg','jing9.jpg','jing10.jpg','jing11.jpg','jing12.jpg','jing13.jpg','jing14.jpg','jing15.jpg','jing16.jpg','jing17.jpg','jing18.jpg','jing19.jpg','jing20.jpg','jing21.jpg','jing22.jpg'],
  wright: ['wright1.jpg','wright2.jpg','wright3.jpg','wright4.jpg','wright5.jpg','wright6.jpg','wright7.jpg','wright8.jpg','wright9.jpg','wright10.jpg','wright0.jpg'],
  wright2: ['wright12.jpg','wright13.jpg','wright14.jpg','wright15.jpg','wright16.jpg','wright17.jpg','wright18.jpg','wright19.jpg','wright20.jpg','wright21.jpg'],
  wright3: ['wright11.gif'],
  owens: ['owens1.gif'],
  snakes: ['snakes.gif'],
  makesthing: ['makesthing.jpg','makesthing1.jpg,'],
  austin: ['Austin0.jpg','Austin1.jpg','Austin2.jpg','Austin3.jpg','Austin4.jpg','Austin5.jpg','Austin6.jpg',],
  pinter: ['pinter0.jpg','pinter1.jpg','pinter2.jpg','pinter3.jpg','pinter4.jpg','pinter5.jpg','pinter6.jpg','pinter7.jpg','pinter8.jpg','pinter9.jpg'],
  relationship: ['relationship1.jpg','relationship0.gif','relationship2.jpg']
};
