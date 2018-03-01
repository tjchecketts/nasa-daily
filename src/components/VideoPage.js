import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import url from "../utils/url.js"

class VideoPage extends Component {
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
        media_type, 
        // service_version, 
        title, 
        url
      } 
    } = this.state
    
    return (
      <div>
        <div>
          Today's NASA photo was actually... a video... 
        </div>
        <div>
          This page is a work in progress
        </div>
        <div>
          Here's the link to the video:
        </div>
        <a href={url} style={{color: 'white'}}>
          {url}
        </a>
      </div>
    )
  }
}

export default VideoPage