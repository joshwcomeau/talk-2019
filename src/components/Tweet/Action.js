import React from 'react'
import styled from 'styled-components'

import UnstyledButton from '../UnstyledButton'

const Action = ({ color, size, children, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: size, color: isHovered ? color : null }}
    >
      <BackgroundCircle style={{ backgroundColor: isHovered ? color : null }} />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackgroundCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  opacity: 0.12;
`

export default Action
