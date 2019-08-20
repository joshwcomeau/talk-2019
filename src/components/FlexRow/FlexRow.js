import React from 'react'
import styled from 'styled-components'

const FlexRow = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;

  & > * {
    flex: 1;
  }
`

export default FlexRow
