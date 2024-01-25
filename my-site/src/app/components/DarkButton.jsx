'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BsSun} from "react-icons/bs";



export default function DarkButton() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [])


  if(!mounted){
    return null;

  }
  


  return (
        //onClick function will invoke setTheme function and pass in "dark" or "light" , opposite of current theme
        //icon will switch sun if "dark" moon otherwise
        <button  className=' hover:text-frost-1 dark:hover:text-frost-3 cursor-pointer text-polarnight-2 dark:text-snowstorm-2 text-2xl' onClick = {() => setTheme(theme === "dark" ? "light" : "dark")}> 
            {theme === "dark" ? <BsSun/> : <BsFillMoonStarsFill/>} 
        </button>




    
  )
}