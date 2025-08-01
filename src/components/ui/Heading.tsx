import React from 'react'

type HeadingProps = {
  name: string;
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <div>
      <h1 className='text-white text-center text-4xl md:text-5xl font-semibold underline decoration-secondary decoration-3 underline-offset-12 uppercase'>{name}</h1>
    </div>
  )
}

export default Heading