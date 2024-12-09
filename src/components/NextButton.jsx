import React from 'react'

const NextButton = ({ onClick }) => {
  return (
    <button
        onClick={onClick}
        className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
    >
        Next
    </button>
  )
}

export default NextButton