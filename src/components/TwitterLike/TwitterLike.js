import React from 'react'
import styled from 'styled-components'

import PoppingCircle from '../PoppingCircle'
import UnstyledButton from '../UnstyledButton'

import heartSrc from './heart.svg'

const TwitterLike = () => {
  const [isToggled, setIsToggled] = React.useState(false)
  return (
    <Wrapper onClick={() => setIsToggled(!isToggled)}>
      <Background>{isToggled && <PoppingCircle />}</Background>

      <Heart src={heartSrc} />
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

const Heart = styled.img`
  width: 20px;
`

export default TwitterLike
