'use client'

import Link from "next/link"
import DarkButton from "./DarkButton";

export default function Nav(){


  const navItems = [
    {title: "Projects", url: "/projects"},
    {title: "About", url: "/about"}
  ]

return (

  <section className="flex border-b pb-4 border-custom-slate w-full justify-center">
    <div className="pt-8">
      <Link
        href={"/"}
      >
        <span className="text-xl hover:text-frost-1 dark:hover:text-custom-slate ">Stephen Tao</span>
      </Link>
     </div>
    <nav className='pt-8 mb-15 flex justify-between text-polarnight-2 dark:text-snowstorm-2'>
      <div className='text-xl flex items-center space-x-3 '>
        {/* map over nav items to add to nav bar */}
        {navItems.map((item)=> (
          <div>
            <Link 
            href={item.url}
            className="hover:text-frost-1 dark:hover:text-custom-slate"
            >
              {item.title}
            </Link>
          </div>

        ))}


        {/* <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/">Home</Link></li>
        <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/about">About</Link></li>
        <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/me">Projects</Link></li> */}
        {/* <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/contact">Contact</Link></li> */}
        <DarkButton></DarkButton>
      </div>
    </nav>  
  </section>
        


  


);


}