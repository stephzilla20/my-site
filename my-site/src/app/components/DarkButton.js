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

        <button  className=' cursor-pointer text-polarnight-2 dark:text-snowstorm-2 text-2xl' onClick = {() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <BsSun/> : <BsFillMoonStarsFill/>}
        </button>



    
  )
}