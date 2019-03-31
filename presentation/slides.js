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

// DARK LAYOUT

const lightComponents = {
  ...components,
  h1: ({ children }) => (
    <Heading size={1} textColor="#000">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size={2} textColor="#000">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size={3} textColor="#000">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size={4} textColor="#000">
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size={5} textColor="#000">
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size={6} textColor="#000">
      {children}
    </Heading>
  ),
  p: ({ children }) => {
    const Paragraph = components.p

    return <Paragraph style={{ color: '#000' }}>{children}</Paragraph>
  },
}

export const LightSlide = ({ children, ...rest }) => (
  <Slide bgColor="white" {...rest}>
    <MDXProvider components={lightComponents}>{children}</MDXProvider>
  </Slide>
)

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
)
