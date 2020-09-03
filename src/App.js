import React from 'react';
import Display from './components/display/display.component';
import Box from './components/box/box.component';
import { bankOne, bankTwo } from './data/data';

import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        textToDisplay: '',
        backgroundColor: '',
        sounds: [...bankOne],
        toggleBank:false,
        togglePower: false
    }
  }
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
      const sounds = this.state.sounds;
      const bankElement = sounds.find(sound => sound.keyTrigger === e.key.toUpperCase());
      if(bankElement) {
          const text = bankElement.id;
          return this.handlePlaySound(e.key.toUpperCase(), text);
      }
  }

  handlePlaySound = (keyTrigger, text) => { 
      const sound = document.getElementById(keyTrigger);
      const keyPressed = document.getElementById(text);

      const bankElement = this.state.sounds.find(sound => sound.keyTrigger === keyTrigger);
      
      if(sound){
          sound.currentTime = 0;
          sound.play();

          this.setState({
              textToDisplay: text,
              backgroundColor: bankElement.backgroundColor
          })

          keyPressed.classList.add("clicked");
          setTimeout(()=> keyPressed.classList.remove("clicked"), 200);
          
      }


  }

  handleBank = () => {
    const toggleBank = !this.state.toggleBank;
    if(toggleBank){
      this.setState({
        sounds: [...bankTwo],
        toggleBank: toggleBank,
        textToDisplay: "",
        backgroundColor: ""
      });
    }else{
      this.setState({
        sounds: [...bankOne],
        toggleBank: toggleBank,
        textToDisplay: "",
        backgroundColor: ""
      });
    }
  }

  handlePower = () => {
    const togglePower = !this.state.togglePower;
    const toggleBank = this.state.toggleBank;
    const sounds = [...this.state.sounds];
    
    if(togglePower){
      const newSounds = sounds.map(sound => ({
        backgroundColor:"",
        keyTrigger:" ",
        url:"",
        id:"",
        keyCode: sound.keyCode
      }));

      this.setState({
        sounds:[...newSounds],
        togglePower: togglePower,
        textToDisplay: "",
        backgroundColor: ""
      });
    }else{
      if(toggleBank){
        this.setState({
          sounds:[...bankTwo],
          togglePower: togglePower,
          textToDisplay: "",
          backgroundColor: ""
        });
      }else{
        this.setState({
          sounds:[...bankOne],
          togglePower: togglePower,
          textToDisplay: "",
          backgroundColor: ""
        });
      }
    }
  }

  render(){
    const { textToDisplay, sounds, backgroundColor, togglePower } = this.state;
    return (
      <div className="App" id="drum-machine">
        <Display 
          textToDisplay={textToDisplay} 
          sounds={sounds} 
          handlePower={this.handlePower} 
          handlePlaySound={this.handlePlaySound} 
          handleBank={this.handleBank}
          togglePower={togglePower}
        />
        <Box backgroundColor={backgroundColor} />
      </div>
    );
  }
}

export default App;
