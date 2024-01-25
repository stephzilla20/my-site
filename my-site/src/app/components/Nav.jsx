'use client'

import Link from "next/link"
import DarkButton from "./DarkButton";

export default function Nav(){

return (


  <div>
    <nav className='py-10 mb-15 flex justify-between text-polarnight-2 dark:text-snowstorm-2'>
      <ul className='text-xl font-Varela flex items-center space-x-3 '>
        <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/">Home</Link></li>
        <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/about">About</Link></li>
        {/* <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/contact">Contact</Link></li> */}
        <li><DarkButton></DarkButton></li>
      </ul>
    </nav>  
  </div>
        


  


);


}