import React from 'react'
import uuid from 'uuid/v1'
import styled, { keyframes } from 'styled-components'
import { Icon } from 'react-icons-kit'
import { chevronRight } from 'react-icons-kit/feather/chevronRight'

import UnstyledButton from '../UnstyledButton'
import Spacer from '../Spacer'

import AccordionContext from './Accordion.context'

const AccordionItem = ({ title, children }) => {
  const [itemId] = React.useState(() => console.log('uuu') || uuid())

  const titleId = `${itemId}-title`
  const contentId = `${itemId}-content`

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
        <Title
          onClick={handleToggle}
          id={titleId}
          aria-controls={contentId}
          aria-expanded={isOpen}
        >
          <IconWrapper style={{ transform: `rotate(${isOpen ? 90 : 0}deg)` }}>
            <Icon icon={chevronRight} size={20} />
          </IconWrapper>
          <Spacer size={8} />
          {title}
        </Title>

        <Body
          role="region"
          id={contentId}
          aria-labelledby={titleId}
          style={{
            transform: `translateY(${isOpen ? 0 : -12}px)`,
            opacity: isOpen ? 1 : 0,
          }}
        >
          <BodyContents style={{ display: isOpen ? 'block' : 'none' }}>
            {children}
          </BodyContents>
        </Body>
      </Wrapper>

      <BackgroundBox />
    </OuterWrapper>
  )
}

const dropIn = keyframes`
  from {
    transform: translateY(-12px);
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
  border-bottom: 1px solid hsla(251, 48%, 51%, 0.1);
`

const IconWrapper = styled.span`
  display: inline-block;
  color: hsl(215, 100%, 60%);
  transform-origin: center center;
  transition: transform 200ms;
`

const Body = styled.div`
  font-size: 16px;
  text-align: left;
  transition: transform 550ms, opacity 1000ms;
`

const BodyContents = styled.div`
  padding: 20px;
`

export default AccordionItem
