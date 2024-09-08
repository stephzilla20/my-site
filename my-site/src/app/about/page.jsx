'use client'
import React, { useState } from "react";
import Head from 'next/head'
import Image from "next/image";




function About() {

  return (
    <div>
      <main className='mt-16 caret-transparent bg-snowstorm-2 px-10 dark:bg-polarnight-4'>
        <div className="flex flex-col items-start -mx-5 md:mx-2 lg:mx-36 xl:mx-64">
            <h1 className='mb-8 text-5xl text-frost-1 dark:text-frost-3 font-bold lg:mb-10 lg:pb-10'>about me</h1>
            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I took my first CS course in grade 11 entirely through Zoom in the middle of COVID. Now, I'm pursuing a computer science degree at Toronto Metropolitan University! I'm also currently part of my schools CS course union <span className='hover:font-medium text-frost-1 dark:text-frost-3 '><a href="https://gdsc.community.dev/toronto-metropolitan-university-toronto-canada/">(CSCU)</a></span> as well as TMU's <span className='text-frost-1 dark:text-frost-3 '><a href="https://gdsc.community.dev/toronto-metropolitan-university-toronto-canada/">Google DSC</a></span>.</p>

            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm a big foodie, so in my spare time I like to explore restaurants. I also do some home cooking. You can also find me at the gym or playing basketball. 
            </p>

            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm currently interested in web development and learning <span className='text-frost-1 dark:text-frost-3 '>React/Next</span> and <span className='text-frost-1 dark:text-frost-3 '>Java/Spring boot.</span> I also recently started to learn mobile development with <span className='text-frost-1 dark:text-frost-3 '>React-Native</span>! 
            </p>
            

          </div>

        

      </main>
    </div>
  );
}

export default About