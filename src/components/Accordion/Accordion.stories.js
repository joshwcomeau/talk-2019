import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Accordion from './Accordion'

storiesOf('Accordion', module)
  .add('single', () => (
    <Wrapper>
      <Accordion>
        <Accordion.Item title="What’s the difference between 32-bit and 64-bit versions of Windows?">
          The terms 32-bit and 64-bit refer to the way a computer's processor
          (also called a CPU) handles information. The 64-bit version of Windows
          handles large amounts of random access memory (RAM) more effectively
          than a 32-bit system. Not all devices can run the 64-bit versions of
          Windows.
        </Accordion.Item>
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
  padding: 200px 60px;
  background: #f3f3fc;
`
