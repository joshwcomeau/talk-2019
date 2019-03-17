import React from 'react'
import styled from 'styled-components'

import PoppingCircle from '../PoppingCircle'
import UnstyledButton from '../UnstyledButton'

import ConfettiPiece from './ConfettiPiece'
import Pop from '../Pop'
import Heart from './Heart'

const TwitterLike = () => {
  const [isLiked, setIsLiked] = React.useState(false)

  const heart = <Heart width={24} mode={isLiked ? 'fill' : 'stroke'} />

  return (
    <Wrapper onClick={() => setIsLiked(!isLiked)}>
      <Background>
        {isLiked && <PoppingCircle />}

        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
        {isLiked ? <ConfettiPiece /> : null}
      </Background>

      {isLiked ? <Pop>{heart}</Pop> : heart}
    </Wrapper>
  )
}

const Wrapper = styled(UnstyledButton)`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  position: absolute;
  z-index: -1;
`

export default TwitterLike
