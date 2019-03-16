import React from 'react'
import { storiesOf } from '@storybook/react'

import PoppingCircle from './PoppingCircle'

storiesOf('PoppingCircle', module)
  .add('default', () => <PoppingCircle />)
  .add('different spring settings', () => (
    <React.Fragment>
      <PoppingCircle tension={500} friction={60} mass={0.5} />
      <PoppingCircle tension={1200} friction={130} mass={2} />
    </React.Fragment>
  ))
