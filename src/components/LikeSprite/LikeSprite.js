import React from 'react'
import styled, { keyframes } from 'styled-components'

import likeSpriteSrc from '../../../assets/like-sprite.png'

const LikeSprite = () => {
  return (
    <Wrapper>
      <Img src={likeSpriteSrc} />
    </Wrapper>
  )
}

const backgroundAnimation = keyframes`
  to {
    transform: translateX(-2448px);
  }
`

const Wrapper = styled.div`
  width: 72px;
  height: 72px;
  background: white;
  overflow: hidden;
  margin: auto;
`

const Img = styled.img`
  height: 100%;
  animation: ${backgroundAnimation} 1000ms steps(34) infinite;

  will-change: transform;
`

export default LikeSprite
