import React from 'react'
import styled from 'styled-components'

import UnstyledButton from '../UnstyledButton'
import LikeButton from './LikeButton'

const ManagedLikeButton = props => {
  const [isLiked, setIsLiked] = React.useState(false)

  return (
    <Wrapper>
      <UnstyledButton onClick={() => setIsLiked(!isLiked)}>
        <LikeButton {...props} isLiked={isLiked} />
      </UnstyledButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  background: #fff;
  padding: 50px;
  border-radius: 8px;
`

export default ManagedLikeButton
