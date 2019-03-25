import React from 'react'
import styled from 'styled-components'

import Spacer from '../Spacer'

const SpacedRow = ({ children, spacing = 50 }) => {
  const interleavedChildren = React.Children.toArray(children).reduce(
    (acc, child, index) => {
      acc.push(child)

      const isLastChild = index === children.length - 1

      if (isLastChild) {
        return acc
      }

      acc.push(<Spacer key={`spacer-${index}`} size={spacing} />)

      return acc
    },
    []
  )

  return <Wrapper>{interleavedChildren}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default SpacedRow
