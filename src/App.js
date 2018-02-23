import React, { Component } from 'react'
import axios from 'axios'

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
        hdurl, 
        media_type, 
        service_version, 
        title, 
        url
      } 
    } = this.state

    const dataText = Object.entries(this.state.data)
      .map(([key, value]) => {
        return (
          <div key={key}>
            <div style={{ fontWeight: 'bold', fontSize: 20 }}>
              {key}:
            </div>
            <div>
              {value}
            </div>
          </div>
        )
      })
    
    return (
      <div>
        <div>
          {dataText}
        </div>
        <img src={url} />
      </div>
    )
  }
}

export default App;
