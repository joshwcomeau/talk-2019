import React from 'react'
import { storiesOf } from '@storybook/react'

import StoryWrapper from '../StoryWrapper'
import Tweet from './Tweet'

storiesOf('Tweet', module)
  .add('default', () => <Tweet />)
  .add('wrapped', () => (
    <StoryWrapper>
      <Tweet />
    </StoryWrapper>
  ))
