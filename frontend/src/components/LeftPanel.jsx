import React from 'react'

const LeftPanel = () => {
  return (
    <>
      {/* Left Side Text */}
      <div className="w-[600px] h-[600px] gap-0 opacity-100 absolute" style={{ top: '490px', left: '100px' }}>
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit hic accusantium illo! Porro expedita beatae praesentium odio deserunt, excepturi odit.
        </p>
       
      </div>
    </>
  )
}

export default LeftPanel