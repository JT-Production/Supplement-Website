import React from 'react'
const Button = ({text,className }) => {
  return (
    <button className={`px-8 py-3 bg-cyan-500 hover:shadow-cyan-400/50 shadow-xl relative before:bg-blue-500 before:top-0 transition duration-150 ease-out rounded-full mt-5 font-monts text-black text-sm uppercase ${className}`}>{text}</button>
  )
}

export default Button