import React, { Component } from 'react'
import axios from 'axios'
// import styled from 'styled-components'
import url from "./utils/url.js"
import ImagePage from "./components/ImagePage"
import VideoPage from './components/VideoPage.js';

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
        // date, 
        // explanation, 
        // hdurl, 
        media_type, 
        // service_version, 
        // title, 
        // url
      } 
    } = this.state

    return(
      media_type !== "video" 
        ? 
          <ImagePage /> 
        : 
          <VideoPage />
    )
  }
}

export default App