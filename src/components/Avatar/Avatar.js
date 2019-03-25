import React from 'react'
import styled from 'styled-components'

const Avatar = ({ src, name }) => {
  return (
    <Wrapper>
      <Img src={src} />
      <Name>{name}</Name>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`

const Name = styled.p`
  text-align: center;
  font-size: 16px;
  color: white;
  font-family: 'Merriweather', sans-serif;
`

export default Avatar
