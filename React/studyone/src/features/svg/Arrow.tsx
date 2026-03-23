import React from 'react'

function Arrow(props:any) {
  return (
   <svg
    width="20px"
    height="20px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} fill="white" fillOpacity={0.01} />
    <path
      d="M37 18L25 30L13 18"
      stroke="#000000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

export default Arrow