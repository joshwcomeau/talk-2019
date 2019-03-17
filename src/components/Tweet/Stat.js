import React from 'react'
import styled from 'styled-components'

const Stat = ({ num, suffix }) => (
  <Wrapper>
    <Num>{num}</Num> {suffix}
  </Wrapper>
)

const Wrapper = styled.div`
  font-size: 16px;
  color: rgb(101, 119, 134);
`

const Num = styled.span`
  color: rgb(20, 23, 26);
  font-weight: bold;
`

export default Stat
