import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Accordion from './Accordion'

storiesOf('Accordion', module)
  .add('single', () => (
    <Wrapper>
      <Accordion>
        <Accordion.Item title="Question 1">Answer 1</Accordion.Item>
        <Accordion.Item title="Question 2">Answer 2</Accordion.Item>
        <Accordion.Item title="Question 3">Answer 3</Accordion.Item>
      </Accordion>
    </Wrapper>
  ))
  .add('double', () => (
    <Wrapper>
      <Accordion>
        <Accordion.Item title="Question 1">Answer 1</Accordion.Item>
        <Accordion.Item title="Question 2">Answer 2</Accordion.Item>
        <Accordion.Item title="Question 3">Answer 3</Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item title="Question 1">Answer 1</Accordion.Item>
        <Accordion.Item title="Question 2">Answer 2</Accordion.Item>
        <Accordion.Item title="Question 3">Answer 3</Accordion.Item>
      </Accordion>
    </Wrapper>
  ))

const Wrapper = styled.div`
  padding: 200px;
  background: #f3f3fc;
`
