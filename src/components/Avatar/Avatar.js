import React from 'react'
import styled from 'styled-components'

const Avatar = ({ src, name }) => {
  return (
    <Wrapper>
      <img src={src} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Name>{name}</Name>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Name = styled.p`
  text-align: center;
  font-size: 16px;
  color: white;
  font-family: 'Merriweather', sans-serif;
`

export default Avatar
