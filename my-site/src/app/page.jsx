'use client'
import React, { useState } from "react";
import Head from 'next/head'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { IoMdDocument } from "react-icons/io";
import Image from "next/image";
import myPic from './assets/img/my-pic.JPG';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (

    //page with dark theme button as react component 
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='caret-transparent px-10 pt-14 bg-snowstorm-2 dark:bg-polarnight-4'>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-7 xl:mx-40">
          {/* text container */}
            <div className="lg:relative lg:ml-54 lg:text-left lg:w-1/2 md:ml-24">
              <h2 className='mb-[-2.5rem] text-polarnight-2 dark:text-snowstorm-2 text-4xl py-10 '> hi! i'm </h2>
              <h1 className='mb-8 text-5xl text-frost-1 dark:text-frost-1 font-bold '>Stephen Tao</h1>
              <p className='text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
                I'm a computer science student at <span className='text-frost-1 dark:text-frost-1 '>Toronto Metropolitan University (Ryerson)</span> with a passion for learning and building. Feel free to connect with me below and check out my resume!
              </p>
            </div>

            {/* dynamic image container */}
            <div className="hidden lg:block lg:mr-52 bg-[url('./assets/img/my-pic.JPG')] bg-cover bg-center h-96 w-96 2xl:h-100 2xl:w-100 shadow-bubbleShadow dark:shadow-bubbleShadowDk animate-bubble"></div>
            
            {/* static image container */}
            <div className='mb-3 mt-3 flex justify-center items-center'>
              <Image
                  src={myPic}
                  width={500}
                  height={500}
                  alt="profile pic"
                  className="lg:hidden rounded-full overflow-hidden w-[240px] h-[240px] object-cover"
                />
            </div>
          </div>
      </main>
    </div>
  );
}
