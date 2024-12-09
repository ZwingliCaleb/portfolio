import React from 'react'

const DotButton = ({selected, onClick}) => {
  return (
    <button
        className={`w-3 h-3 rounded-full ${selected ? 'bg-gray-800' : 'bg-gray-500'} hover:bg-gray-700`}
        onClick={onClick}
    />
  )
}

export default DotButton;