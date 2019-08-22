import React from 'react'
import styled, { keyframes } from 'styled-components'

import likeSpriteSrc from '../../../assets/like-sprite-60.png'

// NOTE: I ran into some issues building styled-component images in MDX.
// Rather than debug the issue, I'm lazy and just moved the
// relevant elements to CSS.
import './LikeSprite.css'

const SCALE_RATIO = 2

const IMAGE_HEIGHT = 120 / SCALE_RATIO
const FRAME_SIZE = IMAGE_HEIGHT

const Wrapper = styled.div`
  width: ${FRAME_SIZE}px;
  height: ${FRAME_SIZE}px;
  background: white;
  overflow: hidden;
  margin: auto;
`

const LikeSprite = () => {
  return (
    <Wrapper>
      <img className="like-sprite" src={likeSpriteSrc} />
    </Wrapper>
  )
}

export default LikeSprite
