import React from 'react'
import { useSpring, interpolate, animated } from 'react-spring'

import { random } from '../../utils'

const Particle = ({ children }) => {
  const angle = React.useRef(random(0, Math.PI * 2 * 100) / 100)

  const startDistance = React.useRef(random(15, 22))
  const endDistance = React.useRef(startDistance.current + random(5, 20))

  const startX = Math.cos(angle.current) * startDistance.current
  const startY = Math.sin(angle.current) * startDistance.current

  const endX = Math.cos(angle.current) * endDistance.current
  const endY = Math.sin(angle.current) * endDistance.current

  const positionSpring = useSpring({
    x: endX,
    y: endY,
    from: { x: startX, y: startY },
    config: {
      tension: 120,
      friction: 30,
    },
  })

  const opacitySpring = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: {
      tension: 70,
      friction: 20,
    },
  })

  return (
    <animated.div
      style={{
        ...opacitySpring,
        transform: interpolate(
          [positionSpring.x, positionSpring.y],
          (x, y) => `translate(${x}px, ${y}px)`
        ),
      }}
    >
      {children}
    </animated.div>
  )
}

export default Particle
