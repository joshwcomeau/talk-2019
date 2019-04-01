import React from 'react'
import styled from 'styled-components'

import { range } from '../../utils'

import PoppingCircle from '../PoppingCircle'
import UnstyledButton from '../UnstyledButton'

import ConfettiPiece from './ConfettiPiece'
import Pop from '../Pop'
import Heart from './Heart'

const LikeButton = ({ isLiked, numOfConfettiPieces = 12, size = 40 }) => {
  const heartSize = size * 0.6

  const heart = <Heart width={heartSize} isToggled={isLiked} />

  return (
    <Wrapper style={{ width: size, height: size }}>
      <Background>
        {isLiked && <PoppingCircle size={size} />}

        {isLiked &&
          range(numOfConfettiPieces).map(i => (
            <ConfettiPiece parentSize={size} key={i} />
          ))}
      </Background>

      <Foreground>{isLiked ? <Pop>{heart}</Pop> : heart}</Foreground>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  position: absolute;
  z-index: 0;
`

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`

export default LikeButton
