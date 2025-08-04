import styled from './loading.module.css'

function Loading() {
  return (
    <div className='flex items-center justify-center bg-neutral-300 opacity-70 w-full h-186 absolute top-18 right-0'>
      <span className={`${styled.loader}`}></span>
    </div>
  )
}

export default Loading
