import React from 'react'
import styled from 'styled-components'

const Footnote = ({ title, subtitle, href }) => {
  return (
    <Wrapper href={href} target="_blank">
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  )
}

const Wrapper = styled.a`
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: auto;
  width: 75vw;
  max-width: 500px;
  background: #fff;
  padding: 17px 30px 22px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
`

const Title = styled.div`
  color: #3344ff;
  font-size: 24px;
`

const Subtitle = styled.div`
  margin-top: 10px;
  color: #555;
  font-size: 16px;
`

export default Footnote
