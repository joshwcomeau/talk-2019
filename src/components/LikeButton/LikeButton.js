import React from 'react'
import styled from 'styled-components'

import PoppingCircle from '../PoppingCircle'
import UnstyledButton from '../UnstyledButton'

import ConfettiPiece from './ConfettiPiece'
import Pop from '../Pop'
import Heart from './Heart'

const LikeButton = ({ isLiked }) => {
  const heart = <Heart width={24} isToggled={isLiked} />

  return (
    <Wrapper>
      <Background>
        {isLiked && <PoppingCircle />}

        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
      </Background>

      <Foreground>{isLiked ? <Pop>{heart}</Pop> : heart}</Foreground>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
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
