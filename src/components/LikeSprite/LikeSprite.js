import React from 'react'
import styled, { keyframes } from 'styled-components'

import likeSpriteSrc from '../../../assets/like-sprite-60.png'

// The image was produced at

const SCALE_RATIO = 2

const IMAGE_HEIGHT = 120 / SCALE_RATIO
const FRAME_SIZE = IMAGE_HEIGHT
const IMAGE_WIDTH = 11640 / SCALE_RATIO - FRAME_SIZE
const NUM_OF_FRAMES = 97 - 1
const SPEED = 60 // frames per second
const ANIMATION_DURATION = (NUM_OF_FRAMES / SPEED) * 1000

const LikeSprite = () => {
  return (
    <Wrapper>
      <Img src={likeSpriteSrc} />
    </Wrapper>
  )
}

const backgroundAnimation = keyframes`
  to {
    transform: translateX(-${IMAGE_WIDTH}px);
  }
`

const Wrapper = styled.div`
  width: ${FRAME_SIZE}px;
  height: ${FRAME_SIZE}px;
  background: white;
  overflow: hidden;
  margin: auto;
  transform: scale(2);
`

// prettier-ignore
const Img = styled.img`
  height: 100%;
  animation:
    ${backgroundAnimation}
    ${ANIMATION_DURATION}ms
    steps(${NUM_OF_FRAMES})
    both
    infinite;

  will-change: transform;
`;

export default LikeSprite
