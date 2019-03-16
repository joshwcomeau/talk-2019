import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring/hooks'

const propTypes = {
  size: PropTypes.number,
}

const defaultProps = {
  size: 40,
}

const PoppingCircle = ({ size }) => {
  const outerSpring = useSpring({
    hello: 20,
    // config: {
    //   tension: 200,
    //   friction: 40,
    // },
  })

  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <defs>
        <mask id="popping-circle-cutout">
          <rect x={0} y={0} width={40} height={40} fill="#FFF" />
          <circle cx={20} cy={20} r={10} fill="#000" />
        </mask>
      </defs>

      <animated.circle
        cx={20}
        cy={20}
        r={outerSpring.radius.interpolate(radius => radius)}
        fill="red"
        mask="url(#popping-circle-cutout)"
      />
    </svg>
  )
}

PoppingCircle.propTypes = propTypes
PoppingCircle.defaultProps = defaultProps

export default PoppingCircle
