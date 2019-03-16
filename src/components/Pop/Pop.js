import React from 'react'
import { useSpring, animated } from 'react-spring'

const Pop = ({ resetWhen, children }) => {
  const props = useSpring({
    transform: 'scale(1)',
    from: {
      transform: 'scale(0)',
    },
    config: {
      tension: 200,
      friction: 12,
    },
    delay: 175,
  })

  return <animated.div style={props}>{children}</animated.div>
}

export default Pop
