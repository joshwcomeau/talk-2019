import React from 'react'

import PoppingCircle from '../PoppingCircle'

const TwitterLike = () => {
  const [isToggled, setIsToggled] = React.useState(false)
  return (
    <button onClick={() => setIsToggled(!isToggled)}>
      <PoppingCircle key={isToggled} />
    </button>
  )
}

export default TwitterLike
