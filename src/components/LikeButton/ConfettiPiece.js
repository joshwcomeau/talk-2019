import React from 'react'
import styled from 'styled-components'

import { random, sample } from '../../utils'

import Particle from '../Particle'

const getRandomColor = () =>
  sample(['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'])

const getRandomSize = () => random(3, 6)

const ConfettiPiece = () => {
  const color = React.useRef(getRandomColor())
  const size = React.useRef(getRandomSize())

  return (
    <Wrapper>
      <Particle>
        <Shape
          style={{
            width: size.current,
            height: size.current,
            background: color.current,
          }}
        />
      </Particle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Shape = styled.div`
  border-radius: 50%;
`

export default ConfettiPiece
