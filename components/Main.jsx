import React from 'react'

const Main = (props) => {
    const {children} = props
  return (
    <main className=' border-2 border-red-500 flex-1 felx flex-col p-4 sm:p-8'>
        {children}
    </main>
  )
}

export default Main