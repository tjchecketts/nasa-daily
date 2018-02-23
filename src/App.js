import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const url = "https://api.nasa.gov/planetary/apod?api_key=kkJChhhtZ46bGlDb42QYtu97SOjNsoGIIVXdXio6"

class App extends Component {
  state = { data: {} }

  componentWillMount = () => {
    axios.get(url)
      .then( resp => this.setState({ data: resp.data }) )
    .catch(function (err) {
      console.log(err)
    })
  }
  
  render() {
    let { 
      data: {
        date, 
        explanation, 
        // hdurl, 
        // media_type, 
        // service_version, 
        title, 
        url
      } 
    } = this.state

    const Background = styled.div`
      content : "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url('${this.state.data.url}');
      width: 100%;
      height: 100%;
      opacity : 0.15;
      z-index: -1;
    `

    const Image = styled.img`
      border: 5px solid aliceblue;
      width: 50%;
    `
    
    return (
      <div>
        <Background />
        <div>
          DATE: {date}
        </div>
        <div>
          TITLE: {title}
        </div>
        <div>
          DESCRIPTION: {explanation}
        </div>
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}
        >
          <Image 
            src={url} 
          />
        </p>
      </div>
    )
  }
}

export default App