import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import url from "../utils/url.js"

class ImagePage extends Component {
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
        // media_type, 
        // service_version, 
        title, 
        url,
      } 
    } = this.state

    const Background = styled.div`
      background-image: url('${url}');
      background-position: 50% 50%; 
    `

    const TextBackground = styled.div`
      background-color: black;
      opacity: 0.88;
    `

    const Image = styled.img`
      border: 5px solid aliceblue;
      width: 50%;
    `
    
    return (
      <Background>
        <TextBackground>
          <div>
            DATE: {date}
          </div>
          <div>
            TITLE: {title}
          </div>
          <div>
            DESCRIPTION: {explanation}
          </div>
          <a
            href={hdurl}
            target="_blank"
          >
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
          </a>
        </TextBackground>
      </Background>
    )
  }
}

export default ImagePage