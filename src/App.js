import React, { Component } from 'react';
import AddOption from './components/AddOption'
import Options from './components/Options'
import Header from './components/Header'
import Action from './components/Action'
import OptionModal from './components/OptionModal'
// import Counter from './Counter'
// import VisibilityToggle from './VisibilityToggle'


class App extends Component {
 
    state = {
      options : [],
      selectedOption: undefined
    }

   
    handleDeleteOptions = () => {
      this.setState(() => ({options: [] }))
    }
  
    handleClearOption = () => {
      this.setState(() => ({selectedOption: undefined }))
    }
  
    handlePick = () => {
      const randomNum = Math.floor(Math.random()* this.state.options.length )
      const option = this.state.options[randomNum]
      this.setState(() =>({selectedOption: option}))
    }
  
    handleAddOption = (option) => {
      if(!option) {
        return 'Enter valid value to add item'
      } else if(this.state.options.indexOf(option)>-1) {
        return 'This option already exists'
      }
      this.setState((prevState) => ({ options : prevState.options.concat(option)}))
    
    }
    handleDeleteOption = (optionToRemove) => {
     this.setState((prevState) => ({
       options:prevState.options.filter((option) => optionToRemove !== option)
     }))
    }
  

  componentDidMount() {
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() =>({options}))
      }
    }catch(e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  
 
  render() {
    const title = 'INDECISION APP'
    const subtitle = 'ADD YOUR LIST OF ACTIVITIES'
     
      return (
        <div>
          <Header title= {title} subtitle = {subtitle} />
          <div className="container">
          <Action
          handlePick = {this.handlePick}
          hasOptions = {this.state.options.length>0} />
         <div className="widget">
          <Options 
          handleDeleteOptions = {this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
          options = {this.state.options} />
          <AddOption handleAddOption ={this.handleAddOption} />
          </div>
          </div>
          <OptionModal selectedOption ={this.state.selectedOption}
          handleClearOption = {this.handleClearOption}/>
           </div>);
          
    
  }

}


export default App;
