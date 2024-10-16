'use client'
import React, { useState } from "react";
import Head from 'next/head'
import Image from "next/image";




function About() {

  return (
    <main className='mt-16 caret-transparent  px-10 '>
        <div className="flex flex-col items-start -mx-5 md:mx-2 lg:mx-36 xl:mx-64">
            <h1 className='mb-8 text-5xl text-frost-1 dark:text-frost-3 font-bold lg:mb-10 lg:pb-10'>about me</h1>
            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I took my first CS course in grade 11 entirely through Zoom in the middle of COVID. Now, I'm pursuing a computer science degree at Toronto Metropolitan University! I'm also currently part of my schools CS course union <span className='hover:font-medium text-frost-1 dark:text-frost-3 '><a href="https://tmucscu.com/" target="_blank">(CSCU)</a></span> as well as TMU's <span className='text-frost-1 dark:text-frost-3 '><a href="https://gdg.community.dev/gdg-on-campus-toronto-metropolitan-university-toronto-canada/" target="_blank">Google Developer Group on Campus</a></span>.</p>

            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm a big foodie, so in my spare time I like to explore restaurants. I also do some home cooking. You can also find me at the gym or playing basketball. 
            </p>

            <p className='font-inter text-polarnight-2 dark:text-snowstorm-2 text-lg leading-7 pb-10 '>
              I'm always into learning new things! Currently I'm working with <span className='text-frost-1 dark:text-frost-3 '>React/Next</span> and <span className='text-frost-1 dark:text-frost-3 '>Java/Spring boot.</span> I also built a few mobile projects using <span className='text-frost-1 dark:text-frost-3 '>React-Native</span>, but want to dig into Swift as well. 
            </p>
            

          </div>
    </main>
  );
}

export default About