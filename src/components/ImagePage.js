import React, { Component } from 'react'
import styled from 'styled-components'

class ImagePage extends Component {
  render() {
    const { 
      data: {
        date, 
        explanation, 
        hdurl, 
        // media_type, 
        // service_version, 
        title, 
        url,
      } 
    } = this.props

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