import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const url = "https://api.nasa.gov/planetary/apod?api_key=kkJChhhtZ46bGlDb42QYtu97SOjNsoGIIVXdXio6"

class App extends Component {
  componentDidMount = () => {
    axios.get(url).then(function (resp) {
      console.log(resp)
    })
    .catch(function (err) {
      console.log(err)
    })
  };
  
  render() {
    return (
      <div>
        hey
      </div>
    );
  }
}

export default App;
