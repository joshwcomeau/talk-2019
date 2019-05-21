import React from 'react'
import styled from 'styled-components'

const ExternalLink = props => <Wrapper {...props} target="_blank" />

const Wrapper = styled.a`
  color: #00edff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default ExternalLink
