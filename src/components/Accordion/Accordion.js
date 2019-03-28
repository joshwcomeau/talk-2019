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
  margin-bottom: 20px;
`

Accordion.Item = AccordionItem

export default Accordion

{
  /* <Accordion>
  <Accordion.Item title="Will it blend?">
    That is the question.
  </Accordion.Item>
</Accordion> */
}
