import React from 'react'

const Todos = ({todo}) => {
  return (
    <div className='flex  mt-3'>
        <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
          <span className='custom-span ml-1'>{todo.title}</span>
    </div>
  )
}

export default Todos
