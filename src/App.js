import React, { Component } from 'react'
import axios from 'axios'
import url from './utils/url.js'
import ImagePage from './components/ImagePage'
import VideoPage from './components/VideoPage'
import Loader from './components/Loader'

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
    let { data } = this.state
    
    if (data.media_type === "image")
      return <ImagePage data={data}/> 
    else if (data.media_type === "video")
      return <VideoPage data={data}/>
    else
      return <Loader />
  }
}

export default App