import React from 'react'
import styled from 'styled-components'

import AccordionItem from './Accordion.Item'
import AccordionContext from './Accordion.context'

const Accordion = ({ children }) => {
  const [openItemId, setOpenItemId] = React.useState(null)

  return (
    <AccordionContext.Provider value={{ openItemId, setOpenItemId }}>
      <Wrapper>{children}</Wrapper>
    </AccordionContext.Provider>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`

Accordion.Item = AccordionItem

export default Accordion
