import React from 'react'

const useUniqueId = prefix => {
  const uniqueId = String(Math.random()).slice(2)
  const ref = React.useRef(`${prefix}${uniqueId}`)

  return ref.current
}

export default useUniqueId
