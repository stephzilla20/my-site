import React from 'react'
import Link from 'next/link'
import BottomBar from './BottomBar'

function Footer() {
  return (

      <div className='w-full flex flex-col space-y-5 items-center'>
        <BottomBar></BottomBar>
        <div className='flex flex-col items-center dark:text-snowstorm-1-custom'>
          <span>Made by Stephen Tao</span>
          <Link
            href={"/credits"}
          >
            <span className='underline dark:hover:text-snowstorm-1 hover:text-frost-1'>Credits and attributions</span>
        </Link>
        </div>
      </div>
    
   
  )
}

export default Footer
