import React from 'react'
import styled from 'styled-components'

const StoryWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
`

export default StoryWrapper
