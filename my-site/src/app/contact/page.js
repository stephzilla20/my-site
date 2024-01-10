'use client'
import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BsSun} from "react-icons/bs";
import {MdEmail} from 'react-icons/md'
import Link from "next/link";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='caret-transparent bg-snowstorm-2 px-10 dark:bg-polarnight-4 transition duration-500 ease-in-out'>
        

        

      </main>
    </div>
  );
}
