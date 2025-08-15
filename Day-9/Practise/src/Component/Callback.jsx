import React, { memo } from 'react'

const Callback = ({adjective , getAdjective}) => {
  console.log("Child Component Rendered");
  return (
    <div>
      <p> The adjective is {adjective}</p>
       <p>{getAdjective()}</p>
    </div>
  )
}

export default memo(Callback)
