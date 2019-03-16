import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, useTrail, animated } from 'react-spring'

import useUniqueId from '../../hooks/unique-id.hook'

const propTypes = {
  size: PropTypes.number,
}

const defaultProps = {
  size: 40,
  color: '#DF5FFF',
  tension: 500,
  friction: 60,
  mass: 0.5,
}

const PoppingCircle = ({ size, color, tension, friction, mass }) => {
  const id = useUniqueId('popping-circle')

  const trail = useTrail(2, {
    radius: 20,
    from: { radius: 0 },
    config: {
      tension,
      friction,
      mass,
    },
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <mask id={id}>
          <rect x={-20} y={-20} width={80} height={80} fill="#FFF" />
          <animated.circle
            cx={20}
            cy={20}
            r={trail[1].radius.interpolate(radius => radius + 0.4)}
            fill="#000"
          />
        </mask>
      </defs>

      <animated.circle
        cx={20}
        cy={20}
        r={trail[0].radius.interpolate(radius => radius)}
        fill={color}
        mask={`url(#${id})`}
      />
    </svg>
  )
}

PoppingCircle.propTypes = propTypes
PoppingCircle.defaultProps = defaultProps

export default PoppingCircle
