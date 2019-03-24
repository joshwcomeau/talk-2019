import React from 'react'
import { Slide, Text, Heading } from 'spectacle'
import { MDXProvider } from '@mdx-js/tag'
import components from './components'
import theme from './theme'

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide bgColor="#19181F" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)
