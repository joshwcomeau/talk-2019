import React from 'react'

const Heart = ({ width, mode }) => (
  <svg
    viewBox="0 0 100 93.615"
    style={{ width, display: 'block', overflow: 'visible' }}
  >
    <path
      d="M99.866,23.353C98.533,10.235,87.456,0,73.988,0C63.193,0,53.938,6.575,50,15.937C46.062,6.575,36.807,0,26.013,0
	C12.544,0,1.466,10.235,0.134,23.353C0.045,24.227,0,25.115,0,26.013c0,31.606,38.788,46.523,50,67.603h0
  c11.212-21.079,50-35.996,50-67.603C100,25.115,99.955,24.227,99.866,23.353z"
      fill={mode === 'fill' ? '#E0245E' : 'none'}
      stroke="#E0245E"
      strokeWidth={12}
    />
  </svg>
)

export default Heart