import React from 'react'
import styled from 'styled-components'

import { random, sample } from '../../utils'

import Particle from '../Particle'

const getRandomColor = () =>
  sample(['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'])

const getRandomSize = parentSize =>
  random(parentSize * 0.15, parentSize * 0.225)

const ConfettiPiece = ({ parentSize }) => {
  const color = React.useRef(getRandomColor())
  const size = React.useRef(getRandomSize(parentSize))

  const particleStartDistance = React.useRef(
    random(parentSize * 0.375, parentSize * 0.5)
  )

  const particleTravelDistance = React.useRef(
    particleStartDistance.current +
      random(parentSize * 0.125, parentSize * 0.375)
  )

  return (
    <Wrapper>
      <Particle
        startDistance={particleStartDistance.current}
        travelDistance={particleTravelDistance.current}
      >
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
