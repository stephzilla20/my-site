'use client'
import React, { useState } from "react";
import Head from 'next/head'
import Image from "next/image";




function About() {

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"></meta>
      </Head>
      <main className='mt-16 caret-transparent bg-snowstorm-2 px-10 dark:bg-polarnight-4'>
        <div className="flex flex-col items-start mx-3 lg:mx-64">
            <h1 className='mb-8 font-inter text-5xl text-frost-1 dark:text-frost-3 font-bold lg:mb-10 lg:pb-10 '>about me</h1>
            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I took my first CS course in grade 11 entirely through Zoom in the middle of COVID. Now, I'm pursuing a computer science degree at Toronto Metropolitan University! I'm also currently part of my schools CS course union (CSCU) as well as the TMU's Google DSC.            </p>

            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm a big foodie, so in my spare time I like to explore restaurants. I also do some home cooking. You can also find me at the gym or playing basketball. 
            </p>

            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm currently interested in web development and learning <span className='text-frost-1 dark:text-frost-3 '>React</span> and <span className='text-frost-1 dark:text-frost-3 '>Nextjs.</span> I also recently started to learn mobile development with <span className='text-frost-1 dark:text-frost-3 '>React-Native</span>! 
            </p>
            

          </div>

        

      </main>
    </div>
  );
}

export default About