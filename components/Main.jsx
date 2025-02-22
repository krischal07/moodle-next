import React from 'react'

const Main = (props) => {
    const {children} = props
  return (
    <main className='flex-1 border-2 border-red-500'>
        {children}
    </main>
  )
}

export default Main