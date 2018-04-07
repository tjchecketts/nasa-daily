import React, { Component } from 'react'
import YouTube from 'react-youtube'

// converts YouTube links to just the video id
const getId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
      return match[2];
  } else {
      return 'error';
  }
}

class VideoPage extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
  render() {
    const { 
      data: {
        date, 
        explanation, 
        // hdurl, 
        // media_type, 
        // service_version, 
        title, 
        url
      } 
    } = this.props

    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    // for test scenarios
    // var testerVideo = "https://www.youtube.com/embed/OfM7VlonD5c?rel=0"
    // let videoId = getId(`${testerVideo}`)

    let videoId = getId(`${url}`)
    
    return (
      <div>
        <div>
          Today's NASA photo was actually... well, a video...
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