import React from 'react'
import styled, { keyframes } from 'styled-components'

import likeSpriteSrc from '../../../assets/like-sprite.png'

const LikeSprite = () => {
  return (
    <Wrapper>
      <Img backgroundSrc={likeSpriteSrc} />
    </Wrapper>
  )
}

const backgroundAnimation = keyframes`
  to {
    background-position: -2448px;
  }
`

const Wrapper = styled.div`
  background: white;
  padding: 20px;
`

const Img = styled.div`
  width: 72px;
  height: 72px;
  background-image: url(${props => props.backgroundSrc});
  animation: ${backgroundAnimation} 500ms steps(34) infinite;
  background-size: cover;
  will-change: background-position;
`

export default LikeSprite
