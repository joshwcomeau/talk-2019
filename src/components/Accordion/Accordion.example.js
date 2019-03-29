import React from 'react'
import styled from 'styled-components'

import cats1 from '../../../assets/cats-1.jpg'
import cats2 from '../../../assets/cats-2.jpg'
import cats3 from '../../../assets/cats-3.jpg'

import Accordion from './Accordion'

const AccordionExample = ({ children }) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <Accordion>
          <Accordion.Item title="What kind of cat is best?">
            Trick question: all cats are amazing.
          </Accordion.Item>
          <Accordion.Item title="What do cats look like?">
            <CatImg src={cats1} />
            <CatImg src={cats2} />
            <CatImg src={cats3} />
          </Accordion.Item>
          <Accordion.Item title="Title C">Things</Accordion.Item>
        </Accordion>
      </Wrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f3fc;
  overflow: scroll;
`

const Wrapper = styled.div`
  width: 500px;
`

const CatImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export default AccordionExample
