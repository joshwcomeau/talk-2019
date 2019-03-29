import React from 'react'
import uuid from 'uuid/v1'
import styled, { keyframes } from 'styled-components'
import { Icon } from 'react-icons-kit'
import { chevronRight } from 'react-icons-kit/feather/chevronRight'

import UnstyledButton from '../UnstyledButton'
import Spacer from '../Spacer'

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
    <OuterWrapper>
      <Wrapper>
        <Title onClick={handleToggle}>
          <IconWrapper style={{ transform: `rotate(${isOpen ? 90 : 0}deg)` }}>
            <Icon icon={chevronRight} size={20} />
          </IconWrapper>
          <Spacer size={8} />
          {title}
        </Title>
        {isOpen && (
          <Body>
            <BodyContents>{children}</BodyContents>
          </Body>
        )}
      </Wrapper>

      <BackgroundBox />
    </OuterWrapper>
  )
}

const dropIn = keyframes`
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(0px);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const OuterWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 5px;
  box-shadow: 0px 1px 2px hsla(251, 48%, 51%, 0.2);
`

const BackgroundBox = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 2px 25px hsla(251, 48%, 51%, 0.2);
  opacity: 0;
  transition: opacity 300ms;

  ${OuterWrapper}:hover & {
    opacity: 1;
  }
`

const Title = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
`

const IconWrapper = styled.span`
  display: inline-block;
  color: hsl(215, 100%, 60%);
  transform-origin: center center;
  transition: transform 200ms;
`

const Body = styled.div`
  padding: 20px;
  border-top: 1px solid hsla(251, 48%, 51%, 0.1);
  font-size: 16px;
  text-align: left;
`

// prettier-ignore
const BodyContents = styled.div`
  animation:
    ${dropIn} 375ms cubic-bezier(0.17, 0.99, 0.66, 1.11),
    ${fadeIn} 1000ms;
  will-change: transform;
`

export default AccordionItem
