import React from 'react'
import uuid from 'uuid/v1'
import styled, { keyframes } from 'styled-components'

import UnstyledButton from '../UnstyledButton'

import AccordionContext from './Accordion.context'

const AccordionItem = ({ title, children }) => {
  const { current: itemId } = React.useRef(uuid())

  const { openItemId, setOpenItemId } = React.useContext(AccordionContext)

  const isOpen = itemId === openItemId

  const handleToggle = () => {
    if (isOpen) {
      setOpenItemId(null)
    } else {
      setOpenItemId(itemId)
    }
  }

  return (
    <div>
      <Wrapper>
        <Title onClick={handleToggle}>{title}</Title>
        {isOpen && (
          <Body>
            <BodyContents>{children}</BodyContents>
          </Body>
        )}
      </Wrapper>
    </div>
  )
}

const dropIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
  }
`

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  box-shadow: 0px 1px 15px hsla(251, 48%, 51%, 0.2);
  background: #fff;
  border-radius: 3px;
  margin-bottom: 5px;
`

const Title = styled(UnstyledButton)`
  display: block;
  width: 100%;
  padding: 20px;
`

const Body = styled.div`
  padding: 20px;
  border-top: 1px solid hsla(251, 48%, 51%, 0.1);
  background: hsla(251, 48%, 51%, 0.04);
`

const BodyContents = styled.div`
  animation: ${dropIn} 400ms ease-out;
`

export default AccordionItem
