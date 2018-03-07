import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import url from "../utils/url.js"
import YouTube from 'react-youtube'

class VideoPage extends Component {
  state = { data: {} }

  componentWillMount = () => {
    axios.get(url)
      .then( resp => this.setState({ data: resp.data }) )
    .catch(function (err) {
      console.log(err)
    })
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
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

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    // converts YouTube links to just the video id
    const getId = (url) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
  
      if (match && match[2].length == 11) {
          return match[2];
      } else {
          return 'error';
      }
    }

    // for test scenarios
    // var testerVideo = "https://www.youtube.com/embed/OfM7VlonD5c?rel=0"
    // let videoId = getId(`${testerVideo}`)

    let videoId = getId(`${url}`)
    
    return (
      <div>
        <div>
          (Today's NASA photo was actually... well, a video... This page is a work in progress)
        </div>
        <div>
          DATE: {date}
        </div>
        <div>
          TITLE: {title}
        </div>
        <div>
          DESCRIPTION: {explanation}
        </div>
        <div>
          LINK TO THE VIDEO:
        </div>
        <a href={url} style={{color: 'white'}}>
          {url}
        </a>
        <div>
          (Also testing YouTube embedding... Here goes nothing!)
        </div>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    )
  }
}

export default VideoPage