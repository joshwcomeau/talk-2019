import React from 'react'
import styled from 'styled-components'

const BigNumber = ({ prefix, num, description }) => {
  return (
    <Wrapper>
      <Prefix>{prefix}</Prefix>
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

const Prefix = styled.h3`
  color: #fff;
  opacity: 0.5;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 0;
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
