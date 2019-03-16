import React from 'react'
import styled from 'styled-components'

import PoppingCircle from '../PoppingCircle'
import UnstyledButton from '../UnstyledButton'
import Pop from '../Pop'
import Heart from './Heart'

const TwitterLike = () => {
  const [isLiked, setIsLiked] = React.useState(false)

  const heart = <Heart width={20} mode={isLiked ? 'fill' : 'stroke'} />

  return (
    <Wrapper onClick={() => setIsLiked(!isLiked)}>
      <Background>{isLiked && <PoppingCircle />}</Background>

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
