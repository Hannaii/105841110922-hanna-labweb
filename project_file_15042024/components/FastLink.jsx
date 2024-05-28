import React from 'react'

const FastLink = (props) => {
  return (
    <>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <p className="mt-2 mb-4">
              {props.description}
            </p>
            <a
              href={props.buttonLink}
              className={'inline-block ${props.buttonBgColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700'}
            >
              {props.buttuonLabel}
            </a>
          </div>    
    </>
  )
}

export default FastLink