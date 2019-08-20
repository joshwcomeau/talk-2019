import React from 'react'
import styled from 'styled-components'

const BigNumber = ({ num, description }) => {
  return (
    <Wrapper>
      <Number>{num}</Number>

      <Description>{description}</Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  max-width: 350px;
  margin: auto;
`

// TODO: Use colors from theme
const Number = styled.h1`
  font-size: 72px;
  color: #ffd000;
  margin-bottom: 2rem;
`

const Description = styled.p`
  color: #cecece;
`

export default BigNumber
