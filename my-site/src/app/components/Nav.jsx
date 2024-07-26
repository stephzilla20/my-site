'use client'

import Link from "next/link"
import DarkButton from "./DarkButton";
import pengIcon from '../assets/img/penguin.png';
import Image from "next/image";

export default function Nav(){


  const navItems = [
    {title: "Projects", url: "/projects"},
    {title: "About", url: "/about"}
  ]

return (

  <section className="flex border-b pb-4 border-custom-slate w-full justify-between pl-10 pr-16 md:pl-14 lg:px-300px ">
    <div className="pt-8">
      <Link
        href={"/"}
        className="flex items-center"
      >
        <Image
          src = {pengIcon}
          width={40}
          height={40}
          alt="home icon"
          className="hover:animate-bounce"

        >
        </Image>
        <span className="px-3 hidden md:block text-2xl font-bold hover:text-frost-1 dark:hover:text-custom-slate">Stephen</span>
      </Link>
     </div>
    <nav className='pt-8 mb-15 flex justify-between text-polarnight-2 dark:text-snowstorm-2'>
      <div className='text-xl flex items-center space-x-8 '>
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
        <DarkButton></DarkButton>




        {/* <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/">Home</Link></li>
        <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/about">About</Link></li>
        <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/me">Projects</Link></li> 
        <li className="hover:text-frost-1 dark:hover:text-frost-3 "><Link href="/contact">Contact</Link></li> */}
      </div>
    </nav>  
  </section>
        


  


);


}